import HeaderElement from "../components/Header/header.lit.js";
import SearchElement from "../components/Search/search.lit.js";
import ItemElement from "../components/Item/item.lit.js";
import SelectElement from "../components/Select/select.lit.js";
import FooterElement from "../components/Footer/footer.lit.js";
import AsideElement from "../components/Aside/aside.lit.js";

customElements.define('eve-header', HeaderElement);
customElements.define('eve-search', SearchElement);
customElements.define('eve-option', ItemElement);
customElements.define('eve-select', SelectElement);
customElements.define('eve-footer', FooterElement);
customElements.define('eve-aside', AsideElement);
