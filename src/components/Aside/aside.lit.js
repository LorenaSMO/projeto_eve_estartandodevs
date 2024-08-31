import { LitElement, html, css } from 'lit';

class AsideElement extends LitElement {
  static styles = css`
    .layout {
      display: flex; /* Utilizando Flexbox para organizar o layout */
      width: 100%;
      height: 100vh; /* A altura ocupa toda a tela */
    }

    .map-container {
      background: var(--Surface, #FFFFFF); /* Fundo branco */
      color: rgba(45, 52, 54, 1); /* Cor do texto */
      text-align: left;
      padding: 10px, 20px, 10px, 20px;
      ont-size: 14px;
      width: 466px; /* Largura desejada */
      height: 258px; /* Altura automática */
      position: fixed; /* Fixa o aside na parte direita da tela */
      top: 351px; /* Ajuste este valor para descer o mapa mais para baixo */
      right: 0; /* Fixado no lado direito */
      overflow-y: auto; /* Permite rolagem se o conteúdo exceder a altura */
      border-radius: 10px 0px 0px 0px;
}


    .title {
      font-family: Roboto;
      font-size: 12px;
      font-weight: 400;
      line-height: 24px;
      text-align: left;
      margin-bottom: 8px;
      color: rgba(45, 52, 54, 1); /* Cor do texto */
    }

    .subtitle {
      font-family: Roboto;
      font-size: 18px;
      font-weight: 600;
      line-height: 24px;
      text-align: left;
      margin-bottom: 8px;
      color: rgba(45, 52, 54, 1); /* Cor do texto */
    }

    .map {
      width: 100%; /* Ocupa toda a largura do contêiner */
      height: 155px;
      gap: 0px;
      border-radius: 10px 0px 0px 0px;
      opacity: 1;
      border: none;
      cursor: pointer;
    }

    .map-expanded {
      position: fixed;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
      z-index: 1000;
      border-radius: 0;
      margin: 0;
    }

    .close-button {
      position: absolute;
      top: 10px;
      right: 10px;
      background-color: #ffffff;
      border: none;
      padding: 8px 12px;
      font-size: 16px;
      cursor: pointer;
      z-index: 1001;
    }
  `;

  static properties = {
    isExpanded: { type: Boolean },
  };

  constructor() {
    super();
    this.isExpanded = false;
  }

  toggleMapExpand() {
    this.isExpanded = !this.isExpanded;
  }

  render() {
    return html`
      <div class="layout">
        <!-- Aside content is on the right side -->
        <aside class="map-container">
          <div class="title">Encontre eventos mais próximos</div>
          <div class="subtitle">Serra, SE (Serra, ES)</div>
          <iframe
            class="map ${this.isExpanded ? 'map-expanded' : ''}"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14967.023337837363!2d-40.30479753221579!3d-20.310371196316176!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xb817cc27bd0715%3A0xaa9bb3752b429a6d!2sPra%C3%A7a%20do%20Papa%20-%20Enseada%20do%20Su%C3%A1%2C%20Vit%C3%B3ria%20-%20ES!5e0!3m2!1spt-BR!2sbr!4v1725120826661!5m2!1spt-BR!2sbr"
            style="border:0;"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            @click="${this.toggleMapExpand}"
          ></iframe>

          ${this.isExpanded
            ? html`<button class="close-button" @click="${this.toggleMapExpand}">Fechar</button>`
            : ''}
        </aside>
      </div>
    `;
  }
}




export default AsideElement;
