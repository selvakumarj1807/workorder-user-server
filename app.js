const express = require('express');
const app = express();
const errorMiddleware = require('./middlewares/error');
const cookieParser = require('cookie-parser')

app.use(express.json());

app.use(cookieParser());

const auth = require('./routes/auth')
const quote = require('./routes/quote')
const history = require('./routes/history')
const invoice = require('./routes/invoice')
const tracking = require('./routes/tracking')
const payment = require('./routes/payment')
const enquiry = require('./routes/enquiry')



app.use('/api/v1', enquiry);
app.use('/api/v1',auth);
app.use('/api/v1', quote);
app.use('/api/v1', invoice);
app.use('/api/v1', history);
app.use('/api/v1', tracking);
app.use('/api/v1', payment);

app.use(errorMiddleware);

module.exports = app; 