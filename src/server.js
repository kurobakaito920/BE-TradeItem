import express from "express";
import connect_mssql from "./config/connect_mssql.js";
import createError from "http-errors";
import morgan from "morgan";
import route from "./router/route.js";
import methodOverride from "method-override";
import path from "path";

const port = 9000;
const app = express();


app.use(morgan('combined'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(methodOverride("_method"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
connect_mssql();
route(app);
app.use((req, res, next) => {
    next(createError.NotFound("This route does not exist"));
});
app.use((err, req, res, next) => {
    res.json({
        status: err.status || 500,
        message: err.message,
    });
});
app.listen(port, () => {
    console.log(`http://localhost:${port}/api`);
});
