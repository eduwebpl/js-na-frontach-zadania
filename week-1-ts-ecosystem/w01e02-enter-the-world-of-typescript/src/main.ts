import { root } from "./shop/root.component.js";

const $app = document.querySelector("#app");

if ($app) {
  $app.append(root());
}
