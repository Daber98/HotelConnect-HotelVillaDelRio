const con = require('../../database/mysqlConnection');

exports.reservation = (req, res) => {
    const sql = "INSERT INTO reservacion (`FechaEntrada`, `FechaSalida`) VALUES (?, ?)";
    const values = [
        req.body.FechaEntrada,
        req.body.FechaSalida
    ];
    con.query(sql, values, (err, result) => {
        if(err) return res.json({ Error: "Error inserting data" });
        return res.json({ Status: "Success" });
    });
};
