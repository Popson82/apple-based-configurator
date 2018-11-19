const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();

app.use( cors() );
app.use( bodyParser.json() );


app.get('/products', (req, res) => {
    res.json( require("./data/products.json") );
})

const port = 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));