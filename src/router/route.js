import routeUser from "./user.js";
import routeCate from "./cate.js";
import routeSubCate from "./subcate.js";
import routeProd from "./prod.js";
import routeCity from "./city.js";

const app = (app) =>{
    app.use("/api/auth", routeUser);
    app.use("/api/cate", routeCate);
    app.use("/api/subcate", routeSubCate);
    app.use("/api/prod", routeProd);
    app.use("/api/city", routeCity);
}

module.exports = app;