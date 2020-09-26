const express = require('express');
const app = express()
const cors = require('cors');

app.use(cors());
app.use(express.json());

const menuRoute = require('./routes/menu');
const orderRoute = require('./routes/orders');

app.use('/menu', menuRoute);
app.use('/order', orderRoute);

const port = 3000
app.listen(port, () => {
    console.log('Server is running on port ' + port);
});