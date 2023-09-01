const appSidebarButtonTemplate = document.createElement("template");
appSidebarButtonTemplate.innerHTML = `
    <style>

    body {
        margin-left: 0;
        padding-left: 0;
    }
   button {
        padding: 1rem 1rem;

        height: 2.7em;
        width: 17rem;
        background: none;
        border: none;
        display: flex;
        align-items: center;
        border-radius: 0 3rem 3rem 0;
        font-size: 1.2rem;
        display: flex;
        gap: 1rem;
        padding-left: 2.3rem;
        cursor: pointer;
        }
    
    button:hover {
        background-color: rgb(220,220,220);
    }    
    #unreadCount {
        position: relative;
        right: 0;
    }

    .button__text_position-right {
        display: inline-block;
        font-size: 0.9rem;
        color: rgb(106, 105, 105);
        margin-left: 6.25rem;
    }

    </style>


    <button>
        <slot class="button__icon"></slot>
        <span id="text"></span>
        <span id="unreadCount" class="button__text_position-right"></span>
    </button>

`;
class AppSidebarButton extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.shadowRoot.append(appSidebarButtonTemplate.content.cloneNode(true));
    const text = this.getAttribute("text");
    const unreadCount = this.getAttribute("unreadCount");
    const selected = this.getAttribute("selected");

    this.shadowRoot.querySelector("#text").innerText = text;
    this.shadowRoot.querySelector("#unreadCount").innerText = unreadCount;

    if (selected === "true") {
      const button = this.shadowRoot.querySelector("button");
      button.style.backgroundColor = "#D3E2FC";
      button.style.fontWeight = "bold";
    }
  }
}

window.customElements.define("app-sidebar-button", AppSidebarButton);
