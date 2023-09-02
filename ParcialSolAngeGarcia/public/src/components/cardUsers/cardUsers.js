 class UserData extends HTMLElement {
    constructor(){
        super()
        this.attachShadow({mode:"open"})
    }

    static get observedAttributes(){
        return ["species", "gender", "house", "yearofbirth", "name"]
    }

    connectedCallback(){
        this.render()
    }

    attributeChangedCallback(propName, oldValue, newValue){
        this[propName] = newValue
        this.render()
    }

    render(){
        this.shadowRoot.innerHTML=`
        <div>
        <h1>${this.name}</h1>
        <p>My species is: ${this.species}</p>
        <p>My gender is: ${this.gender}</p>
        <p>My house is: ${this.house}</p>
        <p>My birth is: ${this.yearofbirth}</p>
        </div>
        `
    }
}

customElements.define("my-user", UserData)
export default UserData