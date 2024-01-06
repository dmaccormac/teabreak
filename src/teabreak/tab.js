import "./styles/tab.css";

class Tab {
  constructor(container) {
    this.container = container;
    this.tabs = container.querySelectorAll(".trigger");
  }

  init() {
    this.tabs.forEach((tab) => {
      tab.addEventListener("click", (e) => {
        if (e.target.tagName === "LI") {
          this.toggleTabs(e);
          this.toggleContent(e);
        }
      });
    });
  }

  toggleTabs(e) {
    this.tabs.forEach((tab) => {
      tab.classList.remove("active");
    });
    e.target.classList.add("active");
  }

  toggleContent(e) {
    this.container.querySelectorAll(".content").forEach((element) => {
      element.classList.remove("active");
    });

    const id = e.target.getAttribute("data-target");
    const content = this.container.querySelector(id);
    content.classList.add("active");
  }
}

export { Tab as default };
