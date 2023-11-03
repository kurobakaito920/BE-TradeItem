import routeUser from "./user.js";
import routeCate from "./cate.js";
import routeSubCate from "./subcate.js";
import routeProd from "./prod.js";

const app = (app) =>{
    app.use("/api/auth", routeUser);
    app.use("/api/cate", routeCate);
    app.use("/api/subcate", routeSubCate);
    app.use("/api/prod", routeProd);
}

module.exports = app;