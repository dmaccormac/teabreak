import Tooltip from "./teabreak/tooltip";

//Tooltip
const tooltips = document.querySelectorAll(".tooltip");
tooltips.forEach((tooltip) => {
  const t = new Tooltip(tooltip);
  t.init();
});
