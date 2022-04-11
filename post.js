import postCatalog from "./components/postCatalog.js";

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init)
} else {
    init()
}

function init() {
    new postCatalog(document.getElementById('post'))
} 