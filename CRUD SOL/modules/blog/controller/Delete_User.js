const sql = require("../../../DB/connection");
const Delete_blog = (req, res) => {
    try {
        const { id } = req.params;
        const { userid } = req.body;

        sql.execute(`delete from blog  where id	=${id } and userid=${userid}`, (error_id, result_id) => {
            if (error_id) {
                res.json("in-valid query");
            } else {
                if (result_id.affectedRows) {
                    res.json({ message: "blog deleted", result: result_id });

                } else {
                    res.json({ message: "cant delete" });
                }
            }
        })
    } catch (error) {
        res.json({ message: "catch error", error });

    }


}
module.exports = Delete_blog;