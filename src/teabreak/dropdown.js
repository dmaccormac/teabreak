import "./styles/dropdown.css";
class Dropdown {
  constructor(dropdown) {
    this.dropdown = dropdown;
    this.trigger = dropdown.querySelector(".trigger");
    this.content = dropdown.querySelector(".content");
  }

  init() {
    this.trigger.addEventListener("click", () => {
      this.trigger.classList.toggle("active");
      this.content.classList.toggle("active");
    });
  }
}

export { Dropdown as default };
