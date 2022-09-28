import * as dotenv from "dotenv";
dotenv.config();

import app from "./server";

app.listen(3008, () => {
  console.log("Listening on port 3008");
});
