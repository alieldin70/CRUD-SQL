const sql = require("../../../DB/connection");
const deleted = (req, res) => {
    try {
        const { id } = req.params;

        sql.execute(`delete from user where id=${id}`, (error_id, result_id) => {
            if (error_id) {
                res.json("in-valid query");
            } else {
                //checking id 
                if (result_id.affectedRows) {
                    res.json({ message: " User Deleted" });

                } else {
                    res.json({ message: "id is not exist" });
                }
            }
        })
    } catch (error) {
        res.json({ message: "catch error", error });

    }

}
module.exports = deleted;