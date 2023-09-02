
class ButtonName extends HTMLElement{
    constructor(){
        super()
        this.attachShadow({mode:"open"})
        this.onButtonClick = this.onButtonClick.bind(this)
    }
    static get observedAttributes (){
        return["name", "alternate_names"]
    }

    connectedCallback(){
        this.mount()
    }

    attributeChangedCallback(propName, oldValue, newValue){
        this[propName]=newValue
        this.mount
    }

    mount(){
        this.render()
        this.addListeners()
    }

    onButtonClick(){
        const changeValue = this.getAttribute("name")
        console.log(changeValue)
            if(changeValue === "name"){
            this.setAttribute("name", "alternate_names")
         } else {
           this.setAttribute("name", "alternate_names")
        }
    }

    addListeners(){
        this.shadowRoot.querySelector("button").addEventListener("click",this.onButtonClick)
    }

    render(){
        this.shadowRoot.innerHTML=`
        <div>
        <p>${this.name}</p>
        <button>Change name</button>
        </div>
        `
    }

}

customElements.define("my-button", ButtonName)
export default ButtonName