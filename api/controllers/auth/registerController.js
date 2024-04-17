const con = require('../../database/mysqlConnection');

exports.register = (req, res) => {
    const sql = "INSERT INTO users (`name`,`last_name`,`email`,`password`,`phone`) VALUES (?)";
    const values = [
        req.body.name,
        req.body.last_name,
        req.body.email,
        req.body.password,
        req.body.phone,
    ];
    con.query(sql, [values], (err, result) => {
        if(err) return res.json({Error: "Error query"});
        return res.json({Status: "Success"});
    });
};
