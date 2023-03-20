import { LitElement, html, css } from 'lit';
import "@lrnwebcomponents/meme-maker/meme-maker.js";

const logo = new URL('../assets/open-wc-logo.svg', import.meta.url).href;

class CoasterCard extends LitElement {
  static properties = {
    header: {type: String, reflect: true},
    name: {type: String},
    imgurl: {type: String},
    top: {type: String},
    bottom: {type: String},
    colors: {type: Boolean, reflect: true},
    opened: {type: Boolean, reflect: true}
  }

  static styles = css`
    :host([colors]) .fullcard{
      background-color: blue;
    }
    .fullcard {
      border: 5px solid;
      color: white;
      margin: 12px;
      background-color: black;
      padding: 16px;
      max-width: 400px;
    }
    h1{
      text-align: center;
    }
    p{
      display: none;
    }
    img {
      max-width: 400px;
      margin: auto;
      display: block;
      padding: 16px, 16px;
    }
    button{
      padding: 8px 8px;
      color: blue;
      background-color: orange;
      text-transform: uppercase;
      display: none;
      margin: 8px;
    }
    .details{
      padding: 8px 8px;
      color: blue;
      background-color: orange;
      display: inline-block;
      margin: 8px;
    }
    .add {
      padding: 8px 8px;
      color: white;
      background-color: red;
      text-transform: uppercase;
      margin: 8px;
    }

    .add:hover {
      background-color: green;
      color: yellow;
    }

    .add:focus{
      background-color: green;
      color: yellow;
    }

    .toggle{
      background-color: blue;
      color: orange;
    }

    @media screen and (min-width: 500px) and (max-width: 800px){
      button{
        display: inline-block;
      }
    }
    @media (max-width: 500px) {
      div{
        font-size: 10px;
      }
      .details{
        display: none;
      }
    }
  `;
  

  constructor() {
    super();
    this.header = 'My app';
    this.name = 'Steel Vengeance';
    this.imgurl = 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Steel_Vengeance_Drop_View.jpg/250px-Steel_Vengeance_Drop_View.jpg';
    this.top = 'This is a roller coaster';
    this.bottom = 'It can be changed';
    this.opened = false;
  }

  toggleEvent(e){
    const state = this.shadowRoot.querySelector('details').getAttribute('open') === '' ? true : false;
    this.opened = state;

  }

  updated(changedProperties){
    changedProperties.forEach((oldValue, propName) => {
      if (propName === 'opened') {
        this.dispatchEvent(new CustomEvent('opened-changed',
        {
          composed: true,
          bubbles: true,
          cancelable: false,
          detail: {
            value: this[propName]
          }
        }));
      }
    });
  };
  
  
  render() {
    return html`
      <div class="fullcard" part="spacing">
        <h1>${this.name}</h1>
        <meme-maker 
        image-url="${this.imgurl}" 
        top-text="${this.top}" 
        bottom-text="${this.bottom}"></meme-maker>
        <details class="details" .open="${this.opened}" @toggle="${this.toggleEvent}">
          <summary>Click to see more</summary>
          <slot>
          </slot>
        </details>
      </div>

    `;
  }
};


customElements.define('coaster-card', CoasterCard);