import "./styles/expandable.css";
class Expandable {
  constructor(expandable) {
    this.content = expandable.querySelector(".content");
    this.trigger = expandable.querySelector(".trigger");
  }

  init() {
    this.content.classList.add("truncated");
    this.trigger.addEventListener("click", () => {
      this.content.classList.toggle("truncated");
    });
  }
}

export { Expandable as default };
