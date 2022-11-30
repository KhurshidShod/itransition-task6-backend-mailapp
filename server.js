const express = require ('express');
const app = express();
const connectDB = require('./config/db')
const cors = require('cors')
app.use(cors({ credentials: true, origin:"https://itransition-task6-mail-app.netlify.app"}))

const PORT = process.env.PORT || 5002;

connectDB();

app.use(express.json({ extended: false }))
app.use("/api/messages", require("./routes/api/messages"))

app.get('/', (request, response) => response.send("Hello, World!"))

app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
