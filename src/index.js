import Expandable from "./teabreak/expandable";
import Snackbar from "./teabreak/snackbar";
import Tooltip from "./teabreak/tooltip";
import Dropdown from "./teabreak/dropdown";
import Tab from "./teabreak/tab";

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

//Expandable
const expandables = document.querySelectorAll(".expandable");

expandables.forEach((expandable) => {
  const e = new Expandable(expandable);
  e.init();
});

//Dropdown
const dropdowns = document.querySelectorAll(".dropdown");

dropdowns.forEach((dropdown) => {
  const d = new Dropdown(dropdown);
  d.init();
});

//Tabs
const tabs = document.querySelectorAll(".tabs");

tabs.forEach((tab) => {
  const t = new Tab(tab);
  t.init();
});
