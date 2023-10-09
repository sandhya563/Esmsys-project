const knex = require('../database/dbconnection');
const jwt = require("jsonwebtoken")


// Get tbIEMP list of data
const tbiempGetData = (req, res) => {
    knex.select('*').from("tbIEMP")
        .then((data) => {
            res.send({
                status: "success",
                statusCode: "statusCode 200",
                message: "Data fetched successfully",
                data: data,
              })
        }).catch((err) => { res.send(err); throw err })
        .finally(() => {
            knex.destroy();
        });
}

// Create new user account in tbIEMP table 
const tbiempPostData = (req, res) => {
    let reqData = req.body
    const token = jwt.sign({Email: reqData.Email}, 'your-secret-key', { expiresIn: '1h' });
    var add_data = {
        "FirstName": req.body.FirstName,
        "LastName": req.body.LastName,
        "Email": req.body.Email,
        "MobileNo": req.body.MobileNo,
        "Hobbies": req.body.Hobbies,
        "Gender": req.body.Gender,
        "RegistrationDate": new Date(),
        "CountryID": req.body.CountryID,
        "StateID": req.body.StateID,
        "CityID": req.body.CityID
    }
    knex("tbIEMP").insert(add_data)
        .then((data) => {
            res.send({
                status: "success",
                statusCode: "statusCode 201",
                message: "data inserted successfully",
                data: add_data,
                token: token

              });
        })
        .catch((err) => {
            console.log(err, "error");
            res.send({message: "Error", Error: err})
        })
    // res.json({ token });

}

// Update the tbIEMP table data by id
const tbiempUpdateData = (req, res) => {
    knex.select('*').from('tbIEMP')
        .where('ID', req.params.ID)
        .update(req.body)
        .then((data) => {
            res.send({status: "success",
            statusCode: "statusCode 201", 
            message: "data updated successfully"})
        })
        .catch((err) => {
            console.log(err, "error");
            res.send({message: "Error", Error: err})
        })
    }
    
    // Delete the data from tbIEMP  table by id
    const tbiempDeleteData = (req, res) => {
        knex.select('*').from('tbIEMP')
        .where('ID', req.params.ID)
        .delete(req.params.ID)
        .then((data) => {
            res.send({
                status: "success",
                statusCode: "statusCode 201",
                message: "data deleted successfully"
              })
        })
        .catch((err) => {
            res.send({message: "Error", Error: err})
        })
}
module.exports = { tbiempGetData, tbiempPostData, tbiempUpdateData, tbiempDeleteData }
