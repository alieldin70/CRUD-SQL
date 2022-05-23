const sql = require("../../../DB/connection")
const getallage = (req, res) => {
    try {
        sql.execute(`select * from user where age between 20 and 40 `, (error, result) => {
            if (error) {
                res.json("in-valid query");
            } else {
                res.json({ message: "done", result: result })
            }
        })
    } catch (error) {
        res.json({ message: "catch error", error });

    }


}
module.exports = getallage