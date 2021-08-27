import { createApp } from "vue";
import App from "./App";
import "./mock";
import "./less/index.less";

const app = createApp(App);

app.mount("#dottmed");
