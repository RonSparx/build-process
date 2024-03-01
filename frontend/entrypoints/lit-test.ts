import { html, css, LitElement } from 'lit'
import { customElement, property } from 'lit/decorators.js'

@customElement('simple-greeting')
export class SimpleGreeting extends LitElement {
  static styles = css`
    p {
      color: blue;
    }
  `

  // Disable shadow dom
  createRenderRoot() {
    return this
  }

  @property()
  name = 'Guest'

  render() {
    return html`
      <div class="mb-20 bg-red-300">
        <h1>Welcome :) ${this.name}</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
          veniam vitae provident, aspernatur dicta nihil dolore, in ut quod
          obcaecati vel iste maiores tenetur ea optio ducimus numquam asperiores
          nam?
        </p>
      </div>
      <p>
        <a href="">${name}</a>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
        aliquam suscipit, iure velit impedit minus, quas quae beatae totam
        deserunt similique explicabo cum ex quidem deleniti, recusandae
        repellendus repellat minima.
      </p>
      <h1>Hello</h1>
      <h1>Hello</h1>
    `
  }
}
