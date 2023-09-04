const DB = require("./db.json");

const getRecordForMember = (workoutId, memberId) => {
    try {
        const members = DB.members.filter((member) => member.id === memberId)

        const record = DB.records.filter((record) => record.workout === workoutId && record.memberId === memberId);

        if (!record || !members) {
            throw {
                status: 400,
                message: `Can't find Member records with the Workout id '${workoutId}' and Member id '${memberId}' `,
            };
        }

        const { id, name, gender, email, dateOfBirth } = members[0];
        const memberDetails = { id, name, gender, email, dateOfBirth };
        console.log("printing members", { id, name })
        return { record, member: memberDetails };

    } catch (error) {
        throw { status: error?.status || 500, message: error.message || error };

    }
};

module.exports = { getRecordForMember };
