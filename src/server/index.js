import app from "./app.js";
import { config } from "dotenv";
config();
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`server is running in port ${port}`);
});
