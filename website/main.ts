import { createApp } from "vue";
import App from "./App";
import "./less/index.less";
import "./mock";

const app = createApp(App);

app.mount("#dottmed");
