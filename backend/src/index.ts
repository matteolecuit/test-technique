import express from "express";
import laposteHexasmalsRouter from "./routes/laposteHexasmals.router";
const app = express();
const port = 3000; // default port to listen

// middleware used to parse incoming requests with JSON payloads
app.use(express.json());

app.use("/api/laposteHexasmals", laposteHexasmalsRouter);

// start the Express server
app.listen(port, () => {
  console.log(`server started at http://localhost:${port}`);
});
