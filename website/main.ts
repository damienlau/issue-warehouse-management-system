import { createApp } from "vue";
import App from "./App";
import Router from "./router";
import Store from "./store";
import "./less/index.less";
import "./mock";

const app = createApp(App);

app.use(Router);
app.use(Store);
app.mount("#dottmed");
