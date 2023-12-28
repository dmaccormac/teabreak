import Tooltip from "./teatime/tooltip";

//Tooltip
const tooltips = document.querySelectorAll(".tooltip");
tooltips.forEach((tooltip) => {
  const t = new Tooltip(tooltip);
  t.init();
});
