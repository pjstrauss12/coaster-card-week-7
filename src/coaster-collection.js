import { LitElement, html, css } from 'lit';
import "./coaster-card.js";

export class CoasterCollection extends LitElement {
    static get tag() {
        return 'coaster-collection';
    }
    static get properties() {
        return {
          rides: { type: Array },
          park: { type: String },
        }
    }

    constructor() {
        super();
        this.rides = [];
        this.park = 'Cedar Point';
        this.updatePark();
    }

    updatePark(){
        const address = '../api/park';
        fetch(address).then((response) => {
            if (response.ok) {
                return response.json()
            }
            return [];
        })
        .then((data) => {
            this.rides = data;
        });
    }
    
    static get styles() {
        return css`
        :host {
            display: block;
        }
        .wrapper {
            border: 2px solid black;
            display: flex;
        }
        .item {
            display: inline-flex;
        }
    `;
    }

    render() {
        return html`
        <h2>${this.park}</h2>
        <div class="wrapper">
            ${this.rides.map(ride => html`
            <div class="item">
                <coaster-card name="${ride.name}" imgurl="${ride.imgurl}" top="${ride.top}" bottom="${ride.bottom}"></coaster-card>
            </div>
            `)}
        </div>
        `;
    }
}
customElements.define(CoasterCollection.tag, CoasterCollection);