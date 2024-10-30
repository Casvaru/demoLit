import { html, LitElement, css } from 'lit'

export class AlSwitch extends LitElement {
  static styles = css`
  input[type="checkbox"]{
    position: 'relative';
    width: 50px; height: 30px;
    margin: 0px;
    padding: 5px;
    background: var(--color-neutral-600);
    -webkit-appearance: none;
    border-radius: 20px;
    transition: ease-in 200ms;
  }
  input:checked[type="checkbox"]{
    background: var(--color-green-600);
    transition: ease-out 300ms;
  }
  input:checked[type="checkbox"]::after {
    margin-left: 20px;
    transition: ease-in 200ms;
  }
  input[type="checkbox"]::after{
    position: absolute;
    content: '';
    width: 20px; height: 20px;
    background: var(--color-neutral-50);
    border-radius: 50%;
    transition: ease-out 300ms;
  }
  input:focus-visible[type="checkbox"]{
    outline: 3px solid var(--color-blue-600) !important;
    outline-offset: 2px;
  }
  `

  render () {
    return html`
      <label for="al-switch" class="switch">
        <input
          id="al-switch"
          type="checkbox"
          role="switch"
          aria-label="Activar Switch"
          @change="${this._toggleSwitch}"
        >
      </label>
    `
  }

  _toggleSwitch (event) {
    const isChecked = event.target.checked

    console.log('Switch is now', isChecked ? 'ON' : 'OFF')
  }
}
customElements.define('al-switch', AlSwitch)