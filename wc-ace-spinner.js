class WCAceSpinner extends HTMLElement {
  #width = 100
  #outerColour = '#41b883'
  #middleColour = '#f7484e'
  #innerColour = '#f8b334'
  #outerWidth = 0.03
  #middleWidth = 0.03
  #innerWidth = 0.03

  static get observedAttributes() {
    return [
      'width',
      'outer-colour',
      'middle-colour',
      'inner-colour',
    ]
  }

  constructor() {
    super()
    this.shadow = this.attachShadow({
      mode: 'closed'
    })
  }

  connectedCallback() {
    this.#width = this.width
    this.#outerColour = this.outerColour
    this.#middleColour = this.middleColour
    this.#innerColour = this.innerColour
    this.setAttribute('style', `width: ${this.#width}px; height: ${this.#width}px; position: relative;`)
    this.shadow.innerHTML = `${this.css}${this.html}`
  }
  attributeChangedCallback(name, oldValue, newValue) {
    switch (name) {
      case 'width':
        if(oldValue !== newValue) {
          this.#width = this.width
          this.setAttribute('style', `width: ${this.#width}px; height: ${this.#width}px; position: relative;`)
          this.shadow.innerHTML = `${this.css}${this.html}`
        }
        break
      case 'outer-colour':
        if(oldValue !== newValue) {
          this.#outerColour = this.outerColour
          this.shadow.innerHTML = `${this.css}${this.html}`
        }
        break
      case 'middle-colour':
        if(oldValue !== newValue) {
          this.#middleColour = this.middleColour
          this.shadow.innerHTML = `${this.css}${this.html}`
        }
        break
      case 'inner-colour':
        if(oldValue !== newValue) {
          this.#innerColour = this.innerColour
          this.shadow.innerHTML = `${this.css}${this.html}`
        }
        break
      
    }
  }

  get css() {
    const duplicate = `
      background-color: transparent;
      animation: rotate linear infinite;
      box-sizing: content-box;
      border-radius: 50%;
    `
    const pseudo = `
      content: '';
      display: block;
      position: absolute;
    `
    return `
      <style>
        @keyframes rotate {
          0 {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
        div {
          ${duplicate}
          position: absolute;
          width: calc(${this.#width}px - calc(${this.#width}px * 0.06));
          height: calc(${this.#width}px - calc(${this.#width}px * 0.06));
          border: calc(${this.#width}px * 0.03) solid transparent;
          border-top: calc(${this.#width}px * ${this.#outerWidth}) solid ${this.#outerColour};
          border-radius: 50%;
          animation-duration: 1s;
          left: 0;
          top: 0;
          
        }
        div::before {
          ${duplicate}
          ${pseudo}
          animation-duration: 10s;
          border: calc(${this.#width}px * 0.03) solid transparent;
          border-top: calc(${this.#width}px * ${this.#middleWidth}) solid ${this.#middleColour};
          height: calc(78% - calc(${this.#width}px * 0.06));
          left: 11%;
          top: 11%;
          width: calc(78% - calc(${this.#width}px * 0.06));
        }
        div::after {
          ${duplicate}
          ${pseudo}
          animation-duration: 4s;
          border: calc(${this.#width}px * 0.03) solid transparent;
          border-top: calc(${this.#width}px * ${this.#innerWidth}) solid ${this.#innerColour};
          height: calc(50% - calc(${this.#width}px * 0.06));
          left: 25%;
          top: 25%;
          width: calc(50% - calc(${this.#width}px * 0.06));
        }
      </style>
    `
  }
  get html() {
    return `
      <div></div>
    `
  }
  get width() {
    return this.hasAttribute('width') && !Number.isNaN(Number(this.getAttribute('width'))) ? Number(this.getAttribute('width')) : 100
  }
  get outerColour() {
    return this.hasAttribute('outer-colour') ? this.getAttribute('outer-colour') : '#41b883'
  }
  get middleColour() {
    return this.hasAttribute('middle-colour') ? this.getAttribute('middle-colour') : '#f7484e'
  }
  get innerColour() {
    return this.hasAttribute('inner-colour') ? this.getAttribute('inner-colour') : '#f8b334'
  }
}
window.customElements.define('wc-ace-spinner', WCAceSpinner);