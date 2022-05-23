const sql = require("../../../DB/connection");
const signup = (req, res) => {
    try {
        const { name, email, password, cpassword, age } = req.body;
        if (password === cpassword) {
            sql.execute(`select email from user where email='${email}'`, (error, result) => {
                if (error) {
                    res.json("in-valid query");
                } else {
                    if (result.length) {
                        res.json({ message: "email exist" })
                    } else {
                        sql.execute(`insert into user (name,email,password,age) values('${name}','${email}','${password}',${age})`, (error2, result2) => {
                            if (error2) {

                                res.json({ message: "in-valid query" });
                            } else {
                                res.json({ message: "done", result2 })
                            }
                        })
                    }
                }
            })
        } else {
            res.json({ message: "password doesnt match confirmation password" })
        }
    } catch (error) {
        res.json({ message: "catch error", error });

    }
}
module.exports = signup;