import Expandable from "./teabreak/expandable";
import Snackbar from "./teabreak/snackbar";
import Tooltip from "./teabreak/tooltip";

//Tooltip
const tooltips = document.querySelectorAll(".tooltip");
tooltips.forEach((tooltip) => {
  const t = new Tooltip(tooltip);
  t.init();
});

//Snackbar
const snackbar = new Snackbar();
snackbar.init();

const trigger = document.querySelector(".snackbar-trigger");
trigger.addEventListener("click", () => {
  snackbar.show("This is a snackbar");
});

//expandable
const expandables = document.querySelectorAll(".expandable");

expandables.forEach((expandable) => {
  const e = new Expandable(expandable);
  e.init();
});
