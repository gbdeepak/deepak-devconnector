const express = require('express');
const connectDB = require("./config/db")
const PORT = process.env.PORT || 5000;

// Initialize Express
const app = express();
// Connect to DB
connectDB();
// Initialize middleware
app.use(express.json({
  extended: false
}))

app.get('/', (req, res) => res.send("API Is Listening"))

// Define Routes
app.use('/api/users', require('./routes/api/users'))
app.use('/api/posts', require('./routes/api/posts'))
app.use('/api/profile', require('./routes/api/profile'))
app.use('/api/auth', require('./routes/api/auth'))

app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`))