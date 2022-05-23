const sql = require("../../../DB/connection");
const Update_blog = (req, res) => {
    try {
        const { id } = req.params;
        const { title, description, userid } = req.body;

        sql.execute(`update blog set title='${title}',description='${description}' where id	=${id } and userid=${userid}`, (error_id, result_id) => {
            if (error_id) {
                res.json("in-valid query");
            } else {
                if (result_id.affectedRows) {
                    res.json({ message: "Updated blog", result: result_id });

                } else {
                    res.json({ message: "cant update" });
                }
            }
        })
    } catch (error) {
        res.json({ message: "catch error", error });

    }


}
module.exports = Update_blog;