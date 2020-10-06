const express = require('express');
const app = express()
const cors = require('cors');

app.use(cors());
app.use(express.json());

const menuRoute = require('./routes/menu');
const orderRoute = require('./routes/orders');
const userRoute = require('./routes/user');

app.use('/menu', menuRoute);
app.use('/order', orderRoute);
app.use('/user', userRoute);

const port = 3000
app.listen(port, () => {
    console.log('Server is running on port ' + port);
});