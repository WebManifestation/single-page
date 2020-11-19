class FullPageScroll {
  constructor(items) {
    this.items = items;
    console.log(items);
    this.setWidthAndHeight();
    window.addEventListener('resize', this.setWidthAndHeight.bind(this));
  }
  setWidthAndHeight() {
    for (let i = 0; i < this.items.length; i++) {
      const element = this.items[i];
      element.style.width = window.innerWidth + "px";
      element.style.height = window.innerHeight + "px";
      element.style.display = 'flex';
      element.style.justifyContent = 'center';
      element.style.alignItems = 'center';
      element.style.overflow = 'hidden';
    }
  }
}

export default FullPageScroll;
