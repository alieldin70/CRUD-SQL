const sql = require("../../../DB/connection");

const getuserbyid = (req, res) => {
    try {
        const { id } = req.params;
        sql.execute(`select * from user where id =${id}`, (error, result) => {
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
module.exports = getuserbyid;