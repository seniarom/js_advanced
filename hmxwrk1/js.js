
const goods = [
    { title: 'Футболка', price: 1500 },
    { title: 'Толстовка', price: 5000 },
    { title: 'Кроссовки', price: 35000 },
    { title: 'Кроссовки', price: 25000 },
    { title: 'Толстовка' },
    { price: 5200 },
];

const renderGoodsItem = ({ title = "Нет названия", price = "Нет цены" }) => `<div class="col-4"><div class="card"><div class="card-body">
<h5 class="card-title">${title}</h5><p class="card-text">${price} ${isNaN(--price) ? "" : " руб"}</p></div></div></div>`
//return `<div class="goods-item"><h3>${title}</h3><p>${price}</p></div>`;


const renderGoodsList = (list) => {
    let goodsList = list.map(item => renderGoodsItem(item));
    document.querySelector('.goods-list').innerHTML = goodsList.join('\n');
}

renderGoodsList(goods);


/*
   запятые появляются т.к. при добавлении массива в элемент goods-list он преобразуется к строке методом toString(), который оставляет запятые,
   как вариант:
   массив одной строкой , а в качестве разделителей использовать \n

*/
