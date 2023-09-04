const MemberRecord = require("../database/members");

const getRecordForMember = (workoutId, memberId) => {
    try {
        const record = MemberRecord.getRecordForMember(workoutId, memberId);
        return record;
    } catch (error) {
        throw error;
    }
};

module.exports = { getRecordForMember };