import routeUser from "./user.js";
import routeCate from "./cate.js";


const app = (app) =>{
    app.use("/api/auth", routeUser);
    app.use("/api/cate", routeCate);
}

module.exports = app;