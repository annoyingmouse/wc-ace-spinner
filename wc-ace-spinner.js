class WCAceSpinner extends HTMLElement {
  constructor() {
    super()
    this.shadow = this.attachShadow({
      mode: 'closed',
      delegatesFocus: true
    })
    this.shadow.innerHTML = `${this.css}${this.html}`
  }
  get css() {
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
          width: 100px;
          height: 100px;
          background-color: transparent;
          animation: rotate linear infinite;
          border: 3px solid transparent;
          border-top-color: #41b883;
          border-radius: 50%;
          position: absolute;
          animation-duration: 1s;
        }
        div::before {
          animation: rotate linear infinite;
          border-radius: 50%;
          content: '';
          display: block;
          animation-duration: 10s;
          border: 3px solid transparent;
          border-top: 3px solid #f7484e;
          height: 75px;
          left: 10px;
          top: 10px;
          width: 75px;
          position: absolute;
        }
        div::after {
          animation: rotate linear infinite;
          border-radius: 50%;
          content: '';
          display: block;
          animation-duration: 4s;
          border: 3px solid transparent;
          border-top: 3px solid #f8b334;
          height: 50px;
          left: 22px;
          top: 22px;
          width: 50px;
          position: absolute;
        }
      </style>
    `
  }
  get html() {
    return `
      <div></div>
    `
  }
}
window.customElements.define('wc-ace-spinner', WCAceSpinner);