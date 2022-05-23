const sql = require("../../../DB/connection")
const getall = (req, res) => {
    try {
        sql.execute(`select * from user`, (error, result) => {
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
module.exports = getall