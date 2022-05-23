const sql = require("../../../DB/connection")
const signin = (req, res) => {
    try {
        const { email, password } = req.body;
        //email checking
        sql.execute(`select email from user where email='${email}'`, (error, result) => {
            if (error) {
                res.json("in-valid query");
            } else {
                if (result.length) {
                    //password checking
                    sql.execute(`select password from user where password='${password}'`, (error_pass, result_pass) => {
                        if (error_pass) {
                            res.json("in-valid query");
                        } else {
                            if (result_pass.length) {
                                res.json({ message: "login" });
                            } else {
                                res.json({ message: "password in-correct" });
                            }
                        }
                    })
                } else {
                    res.json({ message: "email in-correct" });
                }
            }
        })
    } catch (error) {
        res.json({ message: "catch error", error });

    }

}
module.exports = signin;