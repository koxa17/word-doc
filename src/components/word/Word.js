export class Word {
  // NOTE Start with "$" - dom element
  constructor(selector, components) {
    this.$el = document.querySelector(selector)
    this.components = components || []
  }

  getRoot() {
    const $root = document.createElement('div')
    this.components.forEach((Component) => {
      const component = new Component()
      $root.insertAdjacentHTML('beforeend', component.toHTML())
    })
    return $root
  }

  render() {
    this.$el.append(this.getRoot())
  }
}
