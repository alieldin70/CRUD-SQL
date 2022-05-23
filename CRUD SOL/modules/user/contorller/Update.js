const sql = require("../../../DB/connection");
const Update = (req, res) => {
    try {
        const { id } = req.params;
        const { name, age } = req.body;

        sql.execute(`update user set name='${name}',age=${age} where id=${id}`, (error_id, result_id) => {
            if (error_id) {
                res.json("in-valid query");
            } else {
                //checking id 
                if (result_id.affectedRows) {
                    res.json({ message: "Updated User", result: result_id });

                } else {
                    res.json({ message: "id is not exist" });
                }
            }
        })


    } catch (error) {
        res.json({ message: "catch error", error });

    }
}
module.exports = Update;