const sql = require("../../../DB/connection");

const GetAllusers_w_cond = (req, res) => {
    try {
        const { char } = req.params;
        sql.execute(`select * from user where name like '${char}%' and age <30`, (error, result) => {
            if (error) {
                res.json({ message: "query not valid" });
            } else {
                if (result.length) {
                    res.json({ message: "Done", result: result })
                } else {
                    res.json({ message: "user Not found" });
                }
            }
        })
    } catch (error) {
        res.json({ message: "catch error", error });

    }
}
module.exports = GetAllusers_w_cond;