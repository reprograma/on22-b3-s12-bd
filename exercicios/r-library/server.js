require("dotenv").config();
const PORT = process.env.DB_PORT || 3306;
const app = require("./src/app");


app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));