const sql = require("../../../DB/connection")

const getallblogs = (req, res) => {

    try {
        sql.execute(`select * from blog inner join user on blog.userid =user.id`, (error, result) => {
            if (error) {
                res.json({ message: "query error" });
            } else {
                if (result.length) {
                    res.json({ message: "Done", result: result });
                } else {
                    res.json({ message: "empty blogs" });
                }
            }
        })
    } catch (error) {
        res.json({ message: "catch error", error });

    }

}
module.exports = getallblogs;