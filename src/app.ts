import path from "path";
import express from "express";
import bodyParser from "body-parser";
import compression from "compression";
import cors from "cors";

const app = express();

// Express configuration
//app.set("views", path.join(__dirname, "../views"));
//app.set("view engine", "pug");
app.use(cors());
app.use(compression());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.set("port", process.env.PORT || 3000);
app.get("/", (req, res) => res.send("Express + TypeScript Server"));

export default app;
