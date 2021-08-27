import Mock from "mockjs";
import "./user";

if (
  import.meta.env.MODE !== "production" &&
  import.meta.env.VITE_APP_MOCK_REQUEST_MODE === "true"
) {
  Mock.setup({ timeout: "100-2000" });
}
