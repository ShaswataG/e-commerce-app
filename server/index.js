const express = require('express');
const mongoose = require('mongoose');
const cors = require("cors");
require('dotenv').config();

const productRouter = require('./routes/productRoutes');
const orderRouter = require('./routes/orderRoutes');
const userRouter = require('./routes/userRoutes');

const isAuth = require("./middlewares/auth");
const app = express();
const port = process.env.PORT || 4000;
const uri = process.env.URI;

// app.use(isAuth);
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.use('/api/users', userRouter)
app.use('/api/products', productRouter);
app.use('/api/orders', orderRouter);

(async () => {
    try {
        await mongoose.connect(uri, { useNewUrlParser: true });
        console.log('Connected to database');
    } catch (error) {
        console.error('Error connecting to database:', error);
        // process.exit(1);
    }
})();

app.all('*', (req, res) => {
    res.status(500).json({ message: 'Invalid endpoint' });
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})