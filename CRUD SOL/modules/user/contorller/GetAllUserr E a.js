const sql = require("../../../DB/connection");

const getallEa = (req, res) => {
    try {
        const { char } = req.params;
        sql.execute(`select * from user where name like '%${char}'`, (error, result) => {
            if (error) {
                res.json({ message: "query not valid" });
            } else {
                if (result.length) {
                    res.json({ message: "users End  with A", result: result })
                } else {
                    res.json({ message: "user Not found" });
                }
            }
        })
    } catch (error) {
        res.json({ message: "catch error", error });

    }

}
module.exports = getallEa;