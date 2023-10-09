const Joi = require('joi')

// Database connection are here
const knex = require("knex")({
  client: 'mysql2',
  connection: {
    host: 'localhost',
    user: 'root',
    password: 'Hello@123',
    database: 'Interview'
  }

})

// Table schema are here, For  tbICity table
knex.schema.hasTable("tbICity").then(function (exists) {
  if (!exists) {
    return knex.schema.createTable("tbICity", function (table) {
      table.increments("ID").primary();
      table.string("Name");
      table.integer("StateID");
    }).then(() => {
      console.log("tbICity Table Created Successfully.");
    }).catch((err) => {
      console.log(err, "This Error is coming in creating tbICity Table.");
    })
  }
})

//  For  tbIState table
knex.schema.hasTable("tbIState").then(function (exists) {
  if (!exists) {
    return knex.schema.createTable("tbIState", function (table) {
      table.increments("ID").primary();
      table.string("Name");
      table.integer("CountryID");
    }).then(() => {
      console.log("tbIState Table Created Successfully.");
    }).catch((err) => {
      console.log(err, "This Error is coming in creating tbIState Table.");
    })
  }
})
//  For tbICountry table
knex.schema.hasTable("tbICountry").then(function (exists) {
  if (!exists) {
    return knex.schema.createTable("tbICountry", function (table) {
      table.increments("ID").primary();
      table.string("Name");
    }).then(() => {
      console.log("tbICountry Table Created Successfully.");
    }).catch((err) => {
      console.log(err, "This Error is coming in creating tbICountry Table.");
    })
  }
})
// For tbIEMP table
knex.schema.hasTable("tbIEMP").then(function (exists) {
  if (!exists) {
    return knex.schema.createTable("tbIEMP", function (table) {
      table.increments("ID").primary();
      table.string("FirstName");
      table.string("LastName");
      table.string("Email");
      table.string("MobileNo");
      table.string("Hobbies");
      table.string("Gender");
      table.date("RegistrationDate");
      table.integer("CountryID");
      table.integer("StateID");
      table.integer("CityID");

    }).then(() => {
      console.log("tbIEMP Table Created Successfully.");
    }).catch((err) => {
      console.log(err, "This Error is coming in creating tbIEMP Table.");
    })
  }
})
module.exports = knex
