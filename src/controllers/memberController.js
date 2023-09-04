
const workoutRecordswithMember = require("../services/memberService");

const getRecordForMember = (req, res) => {
    const {
        params: { workoutId, memberId }
    } = req;
    // console.log("printing params ", params)
    try {
        const records = workoutRecordswithMember.getRecordForMember(workoutId, memberId);
        res.send({ status: "OK", data: records });
    } catch (error) {
        res
            .status(error?.status || 500)
            .send({ status: "FAILED", data: { error: error?.message || error } });
    }
};

module.exports = { getRecordForMember }