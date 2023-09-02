import * as components from "./components/indexHijo.js"
import { data } from "./components/data.js"
class AppContainer extends HTMLElement {
    constructor(){
        super()
        this.attachShadow({mode:"open"})
    }

    connectedCallback(){
        this.render()
    }

    render(){
        data.forEach(user => {
            this.shadowRoot.innerHTML +=`
            <my-user name="${user.name}" species="${user.species}" gender="${user.gender}" house="${user.house}" yearofbirth="${user.yearOfBirth}"></my-user>
            <my-button name="${user.name}" alternate_names="${this.alternate_names}"></my-button>
            `
        });
    }
}

customElements.define("my-users", AppContainer)