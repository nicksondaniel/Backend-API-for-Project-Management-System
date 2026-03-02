import dotenv from "dotenv";
import app from "./app.js";
import connectDB from "./db/db.js";
import dns from "node:dns/promises";

dotenv.config();

dns.setServers(["8.8.8.8", "1.1.1.1"]);

const PORT = process.env.PORT || 3000;

connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error("Failed to connect to the database:", error);
  });

let myusername = process.env.APP_USERNAME;
console.log("value : ", myusername);

console.log("Hello World from Node JS");
