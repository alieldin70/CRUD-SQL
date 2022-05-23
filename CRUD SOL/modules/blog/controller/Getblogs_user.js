const sql = require("../../../DB/connection")

const getblogs_user = (req, res) => {
    try {
        const { id } = req.params;
        sql.execute(`select * from blog where userid=${id}`, (error, result) => {
            if (error) {
                res.json({ message: "query error" });
            } else {
                if (result.length) {
                    res.json({ message: "Done", result: result });
                } else {
                    res.json({ message: " user doesnt have blogs " });
                }
            }
        })
    } catch (error) {
        res.json({ message: "catch error", error });

    }

}
module.exports = getblogs_user;