require('dotenv').config();

const express = require('express');
const app = express();

const orderRoutes = require('./routes/orders_routes');
const userRoutes = require('./routes/users_routes');
const itemRoutes = require('./routes/items_routes');

const port = 5000;

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get('/', (req, res) => res.send('Server Running'));

app.use('/order', orderRoutes);
app.use('/users', userRoutes);
app.use('/items', itemRoutes);

app.listen(port, () => {
    console.log(`Server listening on port: ${port}...`);
});