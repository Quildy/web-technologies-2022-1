export default class ListItems {
  constructor(el, data) {
    this.el = el;
    this.data = data;
  }

  init() {
    const parents = this.el.querySelectorAll('[data-parent]')

    parents.forEach(parent => {
      const open = parent.querySelector('[data-open]')

      open.addEventListener('click', () => this.toggleItems(parent) )
    });
  }

  render() {
    this.el.insertAdjacentHTML('beforeend', this.renderParent(this.data))
  }

  renderParent(data) {
    let res = '';

    data.items.forEach(fold =>{
      if (fold.hasChildren)
        res += this.renderParent(fold);
      else
        res += this.renderChildren(fold);
    })

    res = `<div class="list-item list-item_open" data-parent>
                <div class="list-item__inner">
                    <img class="list-item__arrow"
                       src="/assets/img/chevron-down.png"
                       data-open>
      
                    <img class="list-item__folder"
                        src="/assets/img/folder.png">
      
                    <span class="list-item__text">
                        ${data.name}
                    </span>
              </div>
              
              <div class="list-item__items">
                  <div class="list-item">
                      ${res}
                  </div>
              </div> 
            </div>`
    return res;
  }

  renderChildren(data) {
    let res = "";
    res = `<div class="list-item">
             <div class="list-item__inner">
                 <img class="list-item__folder"
                      src="/assets/img/folder.png">
                      
                 <span class="list-item__text">
                    ${data.name}
                 </span>
             </div>
         </div>`
    return res;
  }

  toggleItems(parent) {
    parent.classList.toggle('list-item_open')
  }
} 