import HeaderElement from "../components/Header/header.lit.js";
import SearchElement from "../components/Search/search.lit.js";
import ItemElement from "../components/Item/item.lit.js";
import SelectElement from "../components/Select/select.lit.js";

customElements.define('eve-header', HeaderElement);
customElements.define('eve-search', SearchElement);
customElements.define('eve-option', ItemElement);
customElements.define('eve-select', SelectElement);