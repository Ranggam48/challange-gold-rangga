const express = require('express');
const app = express();

const postRoutes = require('./routes/posts_routes');
const userRoutes = require('./routes/users_routes');
const itemRoutes = require('./routes/items_routes');

const port = 3000;

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get('/', (req, res) => res.send('Server Running'));

app.use('/posts', postRoutes);
app.use('/users', postRoutes);
app.use('/items', postRoutes);

app.listen(port, () => {
    console.log(`Server listening on port: ${port}...`);
});