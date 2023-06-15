const app = require("./src/app");

const PORT = process.env.DB_PORT;

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));