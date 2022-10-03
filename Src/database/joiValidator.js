const joi = require("joi")

const valid = ((req, res, next) => {
    try {
        const schemaValidate = joi.object({
            FirstName: joi.string().required(),
            LastName: joi.string().required(),
            Email: joi.string().email().required(),
            MobileNo: joi.string().length(10).pattern(/[6-9]{1}[0-9]{9}/).required(),
            Hobbies: joi.string().required(),
            Gender: joi.string().required(),
            RegistrationDate: joi.date(),
            CountryID: joi.number().required(),
            StateID: joi.number().required(),
            CityID: joi.number().required(),
        })
        let data = schemaValidate.validate(req.body);
        if (data.error) {
            res.send("please fill all the fields properly")
            return
        }
        next()

    } catch (error) {
        res.send(error.message)
    }
})

module.exports = valid