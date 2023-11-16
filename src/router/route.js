import routeUser from "./user.js";
import routeCate from "./cate.js";
import routeSubCate from "./subcate.js";
import routeProd from "./prod.js";
import routeCity from "./city.js";
import routeDis from "./district.js";
import routeWard from "./ward.js";
import routePer from "./permission.js";
import routeSlide from "./imgslide.js"
import routeLocation from "./location.js";
import routeNews from "./news.js";

const app = (app) =>{
    app.use("/api/auth", routeUser);
    app.use("/api/cate", routeCate);
    app.use("/api/subcate", routeSubCate);
    app.use("/api/prod", routeProd);
    app.use("/api/city", routeCity);
    app.use("/api/district", routeDis);
    app.use("/api/ward", routeWard);
    app.use("/api/permission", routePer);
    app.use("/api/slide", routeSlide);
    app.use("/api/location", routeLocation);
    app.use("/api/news", routeNews);
}

module.exports = app;