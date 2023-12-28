import Snackbar from "./teabreak/snackbar";
import Tooltip from "./teabreak/tooltip";

//Tooltip
const tooltips = document.querySelectorAll(".tooltip");
tooltips.forEach((tooltip) => {
  const t = new Tooltip(tooltip);
  t.init();
});

//Snackbar
const snackbar = new Snackbar(document.querySelector("snackbar-trigger"));
snackbar.init();

const link = document.querySelector("#snack");
link.addEventListener("click", () => {
  snackbar.show("This is a snackbar");
});
