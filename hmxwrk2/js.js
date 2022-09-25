class GoodsItem {
    constructor(title = "Название отсутствует", price = "Цена отсутствует") {
        this.title = title;
        this.price = price;
    }

    render() {
        return `<div class="col-4"><div class="card"><div class="card-body">
<h5 class="card-title">${this.title}</h5><p class="card-text">${this.price} ${isNaN(this.price) ? "" : " руб"}</p></div></div></div>`
    }
}

class GoodsList {
    constructor() {
        this.goods = [];
    }

    fetchGoods() {
        this.goods = [
            { title: 'Футболка', price: 1500 },
            { title: 'Толстовка', price: 5000 },
            { title: 'Кроссовки', price: 35000 },
            { title: 'Кроссовки', price: 25000 },
            { title: 'Толстовка' },
            { price: 5200 },
        ]
    }

    render() {
        let listHtml = "";
        this.goods.forEach(good => {
            const goodItem = new GoodsItem(good.title, good.price);
            listHtml += goodItem.render();
        })
        document.querySelector('.goods-list').innerHTML = listHtml
    }
    getCommonPrice() {
        return this.goods.reduce((finalCost, { price }) => finalCost += price || 0, 0)
    }
}

class goodInCart {
    constructor(good) {
        this.productObj = good
        this.amount = 1
    }
}

class Cart {
    constructor() {
        this.cartList = []
    }

    countBasketPrice() {
        return this.cartList.reduce((finalCost, { amount, productObj }) => finalCost += productObj.price * amount, 0)
    }

    addToBasket(good) {
        const prodInCart = this.cartList.find(el => el.productObj === good)
        if (prodInCart) {
            prodInCart.amount++
        } else {
            this.cartList.push(new goodInCart(good))
        }
    }

    renderCart() {
        return this.cartList.length ?
            `В корзине: ${this.cartList.length} товаров на сумму  ${this.countBasketPrice()} рублей` :
            'Корзина пуста'
    }
}

const list = new GoodsList();
list.fetchGoods();
list.render();

const cart = new Cart();
cart.addToBasket(list.goods[0])
cart.addToBasket(list.goods[1])
cart.addToBasket(list.goods[1])

console.log(cart.renderCart())
