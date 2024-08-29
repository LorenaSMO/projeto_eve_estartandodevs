import { LitElement, html, css } from 'lit';

class FooterElement extends LitElement {
  static styles = css`
    footer {
      background: rgba(45, 52, 54, 1);
      color: rgba(255, 255, 255, 1);
      text-align: center;
      padding: 10px 0;
      font-size: 14px;
      position: fixed;
      width: 100%;
      bottom: 0;
    }
  
  
  .footer {
    background: rgba(45, 52, 54, 1);
      color: rgba(255, 255, 255, 1);
      text-align: center;
      padding: 10px 0;
      font-size: 14px;
      position: fixed;
      width: 100%;
      bottom: 0;
  }

`;

  render() {
    return html`
      <footer>
        2024 Todos os direitos reservados.
      </footer>
    `;
  }
}

export default FooterElement;