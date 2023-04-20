require("dotenv").config();
const express = require("express");
const app = express();

const cors = require("cors");
app.use(cors());

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const db_route = require("./routes/DataBaseRoute");

app.use("/api", db_route);

const PORT = process.env.PORT || 2006;

app.listen(PORT, () => console.log(`App running on http://localhost:${PORT}`));
