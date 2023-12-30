import "./styles/expandable.css";

class Expandable {
  constructor(expandable) {
    this.expandable = expandable;
  }

  init() {
    const lenShort = this.expandable.getAttribute("data-short-len") || 50;
    const lblOpened = this.expandable.getAttribute("data-lbl-opened") || "less";
    const lblClosed = this.expandable.getAttribute("data-lbl-closed") || "more";
    const txtFull = this.expandable.innerHTML.trim();
    const txtShort = txtFull.substring(0, lenShort) + "...";

    if (txtFull.length < lenShort) return;

    const spnShort = document.createElement("span");
    const spnFull = document.createElement("span");
    const btnToggle = document.createElement("a");

    spnShort.innerHTML = txtShort;
    spnFull.innerHTML = txtFull;
    spnFull.classList.add("hidden");
    btnToggle.innerHTML = lblClosed;
    btnToggle.setAttribute("id", "btn-toggle");
    btnToggle.setAttribute("href", "#");

    this.expandable.innerHTML = "";
    this.expandable.appendChild(spnShort);
    this.expandable.appendChild(spnFull);
    this.expandable.appendChild(btnToggle);

    btnToggle.addEventListener("click", (e) => {
      e.preventDefault();
      spnShort.classList.toggle("hidden");
      spnFull.classList.toggle("hidden");
      btnToggle.innerHTML =
        btnToggle.innerHTML === lblClosed ? lblOpened : lblClosed;
    });
  }
}

export { Expandable as default };
