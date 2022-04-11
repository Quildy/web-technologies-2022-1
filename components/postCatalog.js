export default class postCatalog {
    constructor(el) {
        this.el = el
        this.pageEl = el.querySelector('[data-catalog-pagePost]')
        this.pagePost = this.getPagePost()
        this.getItem()
    }

    getPagePost() {
        const url = new URL(window.location.href)
        return +url.searchParams.get('id')
    }
    
    async getItem(){
    const url = `https://jsonplaceholder.typicode.com/posts/${this.pagePost}`;
    try {
        const postNumber = await fetch(url);
        const yo = await postNumber.json();
        if (yo) {
            this.renderPost(yo);
        }
    }
        catch
        {
        }
    }

    renderPost(item) {
        this.pageEl.innerHTML =
            `<h3 class="pagePostInfo__title">${item.title}</h3>
            <div class="pagePostInfo__body">${item.body}</div>`
    }
}