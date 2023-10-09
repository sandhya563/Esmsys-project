const express = require('express');
const app = express();
const port = 4000;
const cookieParser = require('cookie-parser');

// Use cookie-parser middleware
app.use(cookieParser());
const tbIEMP_router = require('../Src/routers/tbIEMP')

app.use(express.json());
app.use('/tbIEMP_data', tbIEMP_router)
// For runig server 
app.listen(port,() => {
    console.log(`SERVER IS RUNNING AT PORT ${port}`);
});











