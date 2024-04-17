const jwt = require('jsonwebtoken');
const con = require('../../database/mysqlConnection');

exports.login = (req, res) => {
    const sql = "SELECT * FROM users WHERE email = ?";
    con.query(sql, [req.body.email], (err, result) => {
        if(err) return res.json({Status: "Error", Error: "Error in running query"});
        if(result.length > 0) {
            if(req.body.password === result[0].password) {
                const token = jwt.sign({role: "admin"}, "jwt-secret-key", {expiresIn: '1d'});
                return res.json({Status: "Success", Token: token});
            } else {
                return res.json({Status: "Error", Error: "Wrong Email or Password"});
            }
        } else {
            return res.json({Status: "Error", Error: "Wrong Email or Password"});
        }
    });
};
