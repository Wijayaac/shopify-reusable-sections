// TODO Create stick to left or right section
// Calculate left / right margin based on closest container / first container element : heading assume heading always use container
// add container offset left by 30px (matching figma design)
// event listener for resize for updating the spacing left / right

class EdgeSection extends HTMLElement {
  constructor() {
    super();
    this.containerElement = document.body.querySelector(".container");
    this.edgeSection = this.querySelector(".edge-tm");

    this.setSpace();

    const resizeObserver = new ResizeObserver((entries) => this.setSpace());
    resizeObserver.observe(this);
  }
  setSpace() {
    let space =
      this.containerElement.getBoundingClientRect().left ||
      this.containerElement.offsetLeft;

    this.style.setProperty("--spacing", `${space + 30}px`);
  }
}

customElements.define("edge-section", EdgeSection);
