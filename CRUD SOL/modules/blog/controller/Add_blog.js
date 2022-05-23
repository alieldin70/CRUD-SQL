const sql = require("../../../DB/connection");
const Add_blog = (req, res) => {
    try {
        const { title, description, userid } = req.body;

        sql.execute(`insert into blog (title,description,userid) values('${title}','${description}',${userid})`, (error, result) => {
            if (error) {
                res.json("in-valid query");
            } else {
                if (result.affectedRows) {
                    res.json({ message: "added blog", result: result });

                } else {
                    res.json({ message: "id is not exist" });
                }
            }
        })
    } catch (error) {
        res.json({ message: "catch error", error });

    }
}
module.exports = Add_blog;