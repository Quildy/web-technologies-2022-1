import ListItems from "./components/ListItems.js";

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init)
} else {
  init();
}

function init() {
  const data = {
    name: 'Каталог товаров (Нужный)',
    hasChildren: true,
    items: [
      {
        name: 'Мойки',
        hasChildren: true,
        items: [
          {
            name: 'Швабры',
            hasChildren: true,
            items: [
              {
                name: 'Товар швабра 1',
                hasChildren: false,
                items: []
              },
              {
                name: 'Товар швабра 2',
                hasChildren: false,
                items: []
              }
            ]
          },
          {
            name: 'Порошки',
            hasChildren: true,
            items: [
              {
                name: 'Товар порошок 1',
                hasChildren: false,
                items: []
              },
              {
                name: 'Товар порошок 2',
                hasChildren: false,
                items: []
              }
            ]
          }
        ]
      },{
        name: 'Фильтры',
        hasChildren: true,
        items: [
          {
            name: 'Питьевые',
            hasChildren: true,
            items: [
              {
                name: 'Питьевой фильтр 1',
                hasChildren: false,
                items: []
              },
              {
                name: 'Питьевой фильтр 2',
                hasChildren: false,
                items: []
              }
            ]
          }
        ]
      }
    ]
  }
  
  const items = new ListItems(document.getElementById('list-items'), data)
  
  items.render()
  items.init()
}