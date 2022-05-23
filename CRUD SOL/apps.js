const express = require('express');
const app = express();
const port = process.env.PORT
const { userrout, blogrouter } = require('./router/allrouter');
app.use(express.json());
app.use(userrout, blogrouter);
app.listen(port, () => { console.log("running...") })