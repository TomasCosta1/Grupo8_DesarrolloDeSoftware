const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const productRoutes = require('./routes/products');
const loginRoutes = require('./routes/login');
const ordersRoutes = require('./routes/orders');
const orderDetailsRoutes = require('./routes/orderDetails');

const app = express();
const port = 3000;


app.use(cors());
app.use(express.json());
app.use('/products', productRoutes);
app.use('/login', loginRoutes)
app.use('/orders', ordersRoutes);
app.use('/orderDetails', orderDetailsRoutes);

app.get('/', (req, res) => {
  res.send('Backend is running');
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
}); 