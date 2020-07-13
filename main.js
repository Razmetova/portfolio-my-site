'use strict';

const API = 'https://raw.githubusercontent.com/Razmetova/portfolio-my-site/master';

class List {
    constructor(container, url) {
        this.url = url;
        this.container = container;
        this.goods = [];
        this.allProducts = [];
        this.filtered = [];
    }

    _init() {
        return false;
    }

    getJson(url) {
        return fetch(url ? url : `${API + this.url}`)
            .then(result => result.json())
            .catch(error => {
                console.log(error);
            })
    }

    handleData(data) {
        this.goods = [...data];
        this.render();
        this._renderSlogan();
        this._init();
    }

    render() {
        let block = document.querySelector(`.${this.container}`);
        for (let product of this.goods) {
            let prod = new lists[this.constructor.name](product);
            this.allProducts.push(prod);
            block.insertAdjacentHTML('beforeend', prod.render());
        }
    }

    sumPrice() {
        return Math.floor(this.allProducts.reduce((accum, item) => accum += item.price * item.quantity, 0) * 100) / 100;
    }

    filter(value, searchBlock) {
        let regexp = new RegExp(value, 'i');
        this.filtered = this.allProducts.filter(product => regexp.test(product.name));
        if(!document.querySelector(`.${this.container}__search`)) {
            document.querySelector(`.${this.container}`).insertAdjacentHTML('beforebegin', `<div class="${this.container} ${this.container}__search"></div>`);
        }
        let div = document.querySelector(`.${this.container}__search`);
        this.allProducts.forEach(elem => {
            let block = document.querySelector(`.${searchBlock}[data-id="${elem.id}"]`);
            if(this.filtered.length === this.allProducts.length) {
                document.querySelector('.b-menuSection').classList.remove('invisible');
                div.remove();
                if(!block.parentElement.classList.contains(`${this.container}`)) {
                    block = document.querySelector(`.${searchBlock}[data-id="${elem.id}"]`);
                }
                block.classList.remove(`${searchBlock}__invisible`);
                if(document.querySelector('.b-ourLookbookNewBlock') && document.querySelector('.b-ourLookbookWinBlock')){
                    document.querySelector('.b-ourLookbookNewBlock').classList.remove('invisible');
                    document.querySelector('.b-ourLookbookWinBlock').classList.remove('invisible');
                }
                if(document.querySelector('.loading')) {
                    document.querySelector('.loading').classList.remove('invisible');
                }
                return;
            }

            block.classList.add(`${searchBlock}__invisible`);
            if(this.filtered.includes(elem)) {
                document.querySelector('.b-menuSection').classList.add('invisible');
                div.insertAdjacentHTML('beforeend', elem.render());
                if(document.querySelector('.b-ourLookbookNewBlock') && document.querySelector('.b-ourLookbookWinBlock')){
                    document.querySelector('.b-ourLookbookNewBlock').classList.add('invisible');
                    document.querySelector('.b-ourLookbookWinBlock').classList.add('invisible');
                }
                if(document.querySelector('.loading')) {
                    document.querySelector('.loading').classList.add('invisible');
                }
            }
        })
        this._init();
    }

    _renderSlogan() {
        if (products === "hoodiesandsweatshirts") {
            products = "hoodies & sweatshirts";
        }
        if (products === "poloshirts") {
            products = "polo shirts";
        }
        if (products === "trousersandchinos") {
            products = "trousers & chinos";
        }

        let block = document.querySelector('.b-mainPicture__slogan');

        if(!isNaN(id)) {
            let name = document.querySelector('.b-productViewDesc__head').innerText;
            let kind = params.get("products");
            block.innerHTML = `<a href="index.php?page=category&sex=${sex}">${sex}</a> -
            <a href="index.php?page=category&sex=${sex}&type=${type}">${type}</a> -
            <a href="index.php?page=category&sex=${sex}&type=${type}&products=${kind}">${products}</a> -
            <span class="b-mainPicture__slogan_active">${name}</span>`
        } else if(products != null) {
            block.innerHTML = `<a href="index.php?page=category&sex=${sex}">${sex}</a> -
            <a href="index.php?page=category&sex=${sex}&type=${type}">${type}</a> -
            <span class="b-mainPicture__slogan_active">${products}</span>`
        } else if (type != null) {
            block.innerHTML = `<a href="index.php?page=category&sex=${sex}">${sex}</a> - 
            <span class="b-mainPicture__slogan_active">${type}</span>`
        } else if(sex != null) {
            if(page === 'lookbookposts') {
                block.innerHTML = `${sex} Lookbook`;
                return;
            }
            block.innerHTML = `${sex}`
        } else if(page === 'lookbook') {
            block.innerHTML = `latest posts - mens & womens`;
        }
    }

    addLoadIcon(blocks) {
        let divs = document.querySelectorAll(blocks);
        if(divs.length > 1) {
            divs[divs.length - 1].insertAdjacentHTML('afterend', `<a href="#" class="loading"><i class="fas fa-sync-alt"></i></a>`);
        }
        if(document.querySelector('.loading')) {
            this.loadingProducts();
        }
    }

    loadingProducts() {
        document.querySelector('.loading').addEventListener('click', e => {
            e.preventDefault();
            document.querySelector(`.${this.container}_invisible`).classList.remove(`${this.container}_invisible`);
            if(!document.querySelector(`.${this.container}_invisible`)) {
                document.querySelector('.loading').remove();
            }
        })
    }
}

class ProductList extends List {
    constructor(cart, lookbookBasket, container, url = '/catalogData.json') {
        super(container, url);
        this.cart = cart;
        this.lookbookBasket = lookbookBasket;
        this.getJson()
            .then(data => this.handleData(data));
    }

    _init() {
        let blocks = document.querySelectorAll(`.${this.container}`);
        blocks.forEach(el => {
            el.addEventListener('click', e => {
                if (e.target.classList.contains('buyBtn')) {
                    e.preventDefault();
                    this.cart.addProduct(e.target);
                }
                if (e.target.classList.contains('addToLookbook')) {
                    e.preventDefault();
                    this.lookbookBasket.addProduct(e.target);
                }
            })
        }) 
        
        document.querySelector('.b-siteSearch').addEventListener('submit', e => {
            e.preventDefault();
            this.filter(document.querySelector('.b-siteSearch__field').value, 'b-productBlock');
        })
    }

    render() {
        let blocks = document.querySelectorAll(`.${this.container}`);
        let result = []; //массив для хранения маркеров
        for (let product of this.goods) {
            let prod = new lists[this.constructor.name](product);
            this.allProducts.push(prod);
            blocks.forEach(block => {
                this.renderLists(result, prod, block);
            })
        }
    }

    renderLists(array, product, block) {
        //заполнем массив названиями маркеров
        product.mark.forEach(mark => {
            if(!array.includes(mark)) {
                array.push(mark);
            }
        })
        
        array.forEach(mark => {
            if(product.mark.includes(mark)) {
                if(block.classList.contains(`${this.container}__${marks[mark]}`)) {
                    block.insertAdjacentHTML('beforeend', product.render());
                }
            }
        })
    }
}

class Cart extends List {
    constructor(container = 'basketBlock', url = '/getBasket.json') {
        super(container, url);
        this.getJson(url)
            .then(data => {
                this.handleData(data.contents);
                this._updateIcon();
            });
    }

    _init() {
        document.querySelector('.basketIcon').addEventListener('click', e => {
            document.querySelector(`.${this.container}`).classList.toggle('basketBlock__active');
        })

        document.querySelector(`.${this.container}`).addEventListener('click', e => {
            if (e.target.classList.contains('b-cartItem__deleteBtn')) {
                this.removeProduct(e.target);
            }
        })

        document.addEventListener('click', e => {
            if(!document.querySelector(`.${this.container}`).contains(e.target) && 
            !document.querySelector('.basketIcon').contains(e.target) && 
            !document.querySelector('.buyBtn').contains(e.target)) {
                document.querySelector(`.${this.container}`).classList.remove(`${this.container}__active`);
            }
        })
    }

    addProduct(element) {
        this.getJson('../addToBasket.json')
            .then(data => {
                if (data.result) {
                    let prodId = +element.dataset.id;
                    let find = this.allProducts.find(product => product.id === prodId);
                    if (find) {
                        if(document.querySelector('.b-productViewDescToBuySelection__counter')) {
                            find.quantity = +find.quantity + +document.querySelector('.b-productViewDescToBuySelection__counter').value;
                        } else {
                            find.quantity++;
                        }
                        this._updateCart(find);
                        this._updateIcon();
                    } else {
                        let product = {};
                        if(document.querySelector('.b-productViewDescToBuySelection__counter')) {
                            product = {
                                id_product: prodId,
                                image_1: element.dataset.image,
                                product_name: element.dataset.name,
                                price: +element.dataset.price,
                                quantity: document.querySelector('.b-productViewDescToBuySelection__counter').value
                            }
                        } else {
                            product = {
                                id_product: prodId,
                                image_1: element.dataset.image,
                                product_name: element.dataset.name,
                                price: +element.dataset.price,
                                quantity: 1
                            }
                        }
                        this.goods = [product];
                        this.render();
                        this._updateIcon();
                    }
                } else {
                    console.log('Some error');
                }
            })
    }

    removeProduct(element) {
        this.getJson('../deleteFromBasket.json')
            .then(data => {
                if (data.result) {
                    let prodId = +element.dataset.id;
                    let find = this.allProducts.find(product => product.id === prodId);
                    if (find.quantity > 1) {
                        find.quantity--;
                        this._updateCart(find);
                        this._updateIcon();
                    } else {
                        this.allProducts.splice(this.allProducts.indexOf(find), 1);
                        document.querySelector(`.b-cartItem[data-id="${prodId}"]`).remove();
                        this._updateIcon();
                    }
                } else {
                    console.log('Some error');
                }
            })
    }

    _updateCart(element) {
        let block = document.querySelector(`.b-cartItem[data-id="${element.id}"]`);
        block.querySelector('.b-cartItem__quantity').textContent = `Quantity: ${element.quantity}`;
        block.querySelector('.b-cartItem__totalPrice').textContent = `${Math.floor(element.price * element.quantity * 100) / 100}`;
    }

    _updateIcon() {
        let icon = document.querySelector('.basketIcon');
        let word = icon.querySelector('.word');
        if (this.allProducts.length) {
            let sum = this.sumPrice();
            word.innerHTML = '£ ' + sum;
        } else {
            word.innerHTML = 'empty';
            document.querySelector('.basketBlock').classList.remove('basketBlock__active');
        }
    }

    _renderSlogan() {
        return false;
    }
}

class LookbookBasket extends Cart {
    constructor(container = 'lookbookBasket', url = '/getLookbookBasket.json') {
        super(container, url);
    }

    _init() {
        document.querySelector('.lookbookIcon').addEventListener('click', e => {
            document.querySelector(`.${this.container}`).classList.toggle('lookbookBasket__active');
        })

        document.querySelector(`.${this.container}`).addEventListener('click', e => {
            if (e.target.classList.contains('b-lookbookItem__deleteBtn')) {
                this.removeProduct(e.target);
            }
        })

        document.addEventListener('click', e => {
            if(!document.querySelector(`.${this.container}`).contains(e.target) && 
            !document.querySelector('.lookbookIcon').contains(e.target) &&
            !document.querySelector('.addToLookbook').contains(e.target)) {
                document.querySelector(`.${this.container}`).classList.remove(`${this.container}__active`);
            }
        })
    }

    addProduct(element) {
        this.getJson('../addToBasket.json')
            .then(data => {
                if (data.result) {
                    let prodId = +element.dataset.id;
                    let find = this.allProducts.find(product => product.id === prodId);
                    if (find) {
                        return;
                    } else {
                        let product = {
                            id_product: prodId,
                            image_1: element.dataset.image,
                            product_name: element.dataset.name,
                            category: element.dataset.category,
                        }
                        this.goods = [product];
                        this.render();
                        this._updateIcon();
                    }
                } else {
                    console.log('Some error');
                }
            })
    }

    removeProduct(element) {
        this.getJson('../deleteFromBasket.json')
            .then(data => {
                if (data.result) {
                    let prodId = +element.dataset.id;
                    let find = this.allProducts.find(product => product.id === prodId);
                    if (find) {
                        this.allProducts.splice(this.allProducts.indexOf(find), 1);
                        document.querySelector(`.b-lookbookItem[data-id="${prodId}"]`).remove();
                        this._updateIcon();
                    } else {
                        console.log('Some error');
                    }
            }})
    }

    _quantity () {
        return this.allProducts.length;
    }

    _updateIcon() {
        let icon = document.querySelector('.lookbookIcon');
        let word = icon.querySelector('.word');
        if (this.allProducts.length) {
            let quantity = this._quantity();
            word.innerHTML = quantity;
        } else {
            word.innerHTML = 'empty';
            document.querySelector('.lookbookBasket').classList.remove('lookbookBasket__active');
        }
    }
}

class LookBookList extends List {
    constructor(lookbookBasket, container = 'b-ourLookbook', url = '/catalogData.json') {
        super(container, url);
        this.lookbookBasket = lookbookBasket;
        this.getJson()
            .then(data => this.handleData(data));
    }

    _init() {
        document.querySelector('.b-siteSearch').addEventListener('submit', e => {
            e.preventDefault();
            this.filter(document.querySelector('.b-siteSearch__field').value, 'b-ourLookbookBlock');
        })
        document.querySelectorAll(`.${this.container}`).forEach(el => {
            el.addEventListener('click', e => {
                if (e.target.classList.contains('addToLookbook')) {
                    e.preventDefault();
                    this.lookbookBasket.addProduct(e.target);
                }
            })
        })
    }

    render() {
        let blocks = document.querySelectorAll(`.${this.container}`);
        let result = [];
        for (let product of this.goods) {
            let prod = new lists[this.constructor.name](product);
            this.allProducts.push(prod);
            blocks.forEach(block => {
                this.renderLists(result, prod, block);
            })
        }
        this.priceLowToHigh();
        this.priceHighToLow();
    }

    renderLists(array, product, block) {
        product.mark.forEach(mark => {
            if(!array.includes(mark)) {
                array.push(mark);
            }
        })
        
        array.forEach((mark) => {
            if(product.mark.includes(mark)) {
                if(block.classList.contains(`${this.container}__${marks[mark]}`)) {
                    block.insertAdjacentHTML('beforeend', product.render());
                }
            }
        })
    }

    sort(arr) {
        return arr.sort((a, b) => a.price > b.price ? 1 : -1);
    }

    reverseSort(arr) {
        return arr.sort((a, b) => a.price < b.price ? 1 : -1);
    }

    priceLowToHigh() {
        let sorted = this.sort(this.allProducts);
        let block = document.querySelector('.b-ourLookbook__priceLowToHigh');
        sorted.forEach(elem => {
            block.insertAdjacentHTML('beforeend', elem.render());
        })
    }

    priceHighToLow() {
        let sorted = this.reverseSort(this.allProducts);
        let block = document.querySelector('.b-ourLookbook__priceHighToLow');
        sorted.forEach(elem => {
            block.insertAdjacentHTML('beforeend', elem.render());
        })
    }
}

class ProductView extends ProductList {
    constructor(cart, lookbookBasket, container = 'b-mainProductViewPage', url) {
        super(cart, lookbookBasket, container, url);
        this._changeCounter();
        this._changePhotos();
    }

    render() {
        let block = document.querySelector(`.${this.container}`);
        let params = new URLSearchParams(document.location.search);
        let id = parseInt(params.get("id"));
        for (let product of this.goods) {
            if (product.id_product === id) {
                let prod = new lists[this.constructor.name](product);
                block.insertAdjacentHTML('beforeend', prod.render());
                return;
            }
        }
    }

    _changeCounter() {
        document.querySelector(`.${this.container}`).addEventListener('click', e => {
            if (e.target.classList.contains('b-productViewDescToBuySelection__counter_arrowUp')) {
                for (let product of this.goods) {
                    if (product.id_product == +e.target.dataset.id) {
                        document.querySelector('.b-productViewDescToBuySelection__counter').value++;
                        product.quantity++;
                    }
                }
            }
            if (e.target.classList.contains('b-productViewDescToBuySelection__counter_arrowDown')) {
                for (let product of this.goods) {
                    if (product.id_product == +e.target.dataset.id) {
                        if (document.querySelector('.b-productViewDescToBuySelection__counter').value <= 1) {
                            return;
                        }
                        document.querySelector('.b-productViewDescToBuySelection__counter').value--;
                        product.quantity--;
                    }
                }
            }
        })
    }

    _changePhotos() {
        let i = 0;
        document.querySelector(`.${this.container}`).addEventListener('click', e => {
            let photos = document.querySelectorAll('.b-productView__photo');
            if(e.target.classList.contains('b-productView__photos_arrowLeft')) {
                photos[i].style.display = 'none';
                i--;
                if (i < 0) {
                    i = photos.length - 1;
                }
                photos[i].style.display = 'block';
            }
            if(e.target.classList.contains('b-productView__photos_arrowRight')) {
                photos[i].style.display = 'none';
                i++;
                if (i >= photos.length) {
                    i = 0;
                }
                photos[i].style.display = 'block';
            }
        })
    }
}

class CategoryList extends ProductList {
    constructor(cart, lookbookBasket, container = 'b-categoryPage', url) {
        super(cart, lookbookBasket, container, url);
    }

    render() {
        let block = document.querySelector(`.${this.container}`);
        let kind = params.get("products");
        for (let product of this.goods) {
            let prod = new lists[this.constructor.name](product);
            if (prod.category === sex) {
                if(type === null || prod.type === type) {
                    if(products === null || prod.kind === kind) {
                        this.allProducts.push(prod);
                        if(this.allProducts.length != 1 && this.allProducts.length % 8 == 1) {
                            block.insertAdjacentHTML('afterend', `<div class="b-categoryPage b-categoryPage_paddings b-categoryPage_invisible"></div>`);
                            let length = document.querySelectorAll('.b-categoryPage').length;
                            block = document.querySelectorAll('.b-categoryPage')[length - 1];
                        }
                        block.insertAdjacentHTML('beforeend', prod.render());                     
                    }
                }
            }
        }
        this.addLoadIcon('.b-categoryPage'); 
    }
}

class LookBookCategory extends LookBookList {
    constructor(lookbookBasket, container, url) {
        super(lookbookBasket, container, url);
    }

    render() {
        let block = document.querySelector(`.${this.container}`);
        for (let product of this.goods) {
            let prod = new lists[this.constructor.name](product);
            if (prod.category === sex) {
                this.allProducts.push(prod);
                if(this.allProducts.length != 1 && this.allProducts.length % 8 == 1) {
                    block.insertAdjacentHTML('afterend', `<div class="b-ourLookbook b-ourLookbook__category b-ourLookbook_invisible"></div>`);
                    let length = document.querySelectorAll('.b-ourLookbook').length;
                    block = document.querySelectorAll('.b-ourLookbook')[length - 1];
                }
                block.insertAdjacentHTML('beforeend', prod.render());
            }
        }
        this.addLoadIcon('.b-ourLookbook');
    }
}

class Item {
    constructor(el) {
        this.id = el.id_product;
        this.img = el.image_1;
        this.smallFront = el.image_2;
        this.smallBack = el.image_3;
        this.price = el.price;
        this.name = el.product_name;
        this.category = el.category;
        this.type = el.type;
        this.kind = el.kind;
        this.mark = el.mark;
    }

    render() {
        return `<div class="b-productBlock" data-id="${this.id}">
                <img src=${this.img} alt="product-photo" class="b-productBlock__image">
                <p class="b-productBlock__price">£ ${this.price}</p>
                <div class="b-productBlockBack">
                    <img src=${this.img} alt="product-photo" class="b-productBlockBack__image">
                    <img src=${this.smallFront} alt="small-front-photo" class="b-productBlockBack__imgSmallFront">
                    <img src=${this.smallBack} alt="small-back-photo" class="b-productBlockBack__imgSmallBack">
                    <a href="index.php?page=product&sex=${this.category}&type=${this.type}&products=${this.kind}&id=${this.id}" class="b-productBlockBack__info" title="See more info..."><i class="fas fa-info-circle"></i></a>
                    <p class="b-productBlockBack__price">£ ${this.price}</p>
                    <div class="b-productBlockBack__content">
                        <h4 class="b-productBlockBack__head">${this.name} £ ${this.price}</h4>
                        <p class="b-productBlockBack__text b-productBlockBack__text_margins">Classic casual t-shirt for women on the move. 100% cotton.</p>
                        <div class="b-productBlockBack__icons">
                            <div class="b-productBlockBack__icon" title="Add to cart">
                                <i class="fas fa-shopping-cart buyBtn"
                                data-id="${this.id}"
                                data-image="${this.img}"
                                data-name="${this.name}"
                                data-price="${this.price}"></i>
                            </div>
                            <div class="b-productBlockBack__icon" title="Add to lookbook">
                                <i class="far fa-heart addToLookbook"
                                data-id="${this.id}"
                                data-image="${this.img}"
                                data-name="${this.name}"
                                data-category="${this.category}"></i>
                            </div>
                            <div class="b-productBlockBack__icon" title="Add to compare">
                                <i class="fas fa-compress-alt"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>`
    }
}

class ProductItem extends Item {}

class CartItem extends Item {
    constructor(el) {
        super(el);
        this.quantity = el.quantity;
    }

    render() {
        return `<div class="b-cartItem" data-id="${this.id}">
                <div class="b-cartItem__leftBlock">
                <a href="index.php?page=product&sex=${this.category}&type=${this.type}&products=${this.kind}&id=${this.id}"><img src=${this.img} alt="product-photo" class="b-cartItem__photo"></a>
                    <div class="b-cartItem__desc">
                        <h4 class="b-cartItem__name">${this.name}</h4>
                        <p class="b-cartItem__quantity b-cartItem__quantity_topAndBottom">Quantity: ${this.quantity}</p>
                        <p class="b-cartItem__price">£ ${this.price} for each</p>
                    </div>
                </div>
                <div class="b-cartItem__rightBlock">
                    <p class="b-cartItem__totalPrice b-cartItem__totalPrice_bottom">${Math.floor(this.price * this.quantity * 100) / 100}</p>
                    <button class="b-cartItem__deleteBtn" data-id="${this.id}">&times;</button>
                </div>
            </div>`
    }
}

class LookbookBasketItem extends Item {
    constructor(el) {
        super(el);
    }

    render () {
        return `<div class="b-lookbookItem " data-id="${this.id}">
                    <div class="b-lookbookItem__leftBlock">
                    <a href="index.php?page=product&sex=${this.category}&type=${this.type}&products=${this.kind}&id=${this.id}"><img src=${this.img} alt="product-photo" class="b-lookbookItem__photo"></a>
                        <div class="b-lookbookItem__desc">
                            <h4 class="b-lookbookItem__name">${this.name}</h4>
                            <p class="b-lookbookItem__category b-lookbookItem__category_margin">Category: ${this.category}</p>
                        </div>
                    </div>
                    <div class="b-lookbookItem__rightBlock">
                        <button class="b-lookbookItem__deleteBtn" data-id="${this.id}">&times;</button>
                    </div>
                </div>`
    }
}

class LookBookItem extends Item {
    constructor(el) {
        super(el);
        this.code = el.code;
    }

    render() {
        return `<div class="b-ourLookbookBlock" data-id="${this.id}" data-price="${this.price}">
                    <img src="${this.img}" alt="lookbook-photo-1" class="b-ourLookbookBlock__photo">
                    <p class="b-ourLookbookBlock__code"><span class="b-ourLookbookBlock__code_small">ref</span>${this.code}</p>
                    <div class="b-ourLookbookBlock__icons">
                        <a href="index.php?page=product&sex=${this.category}&type=${this.type}&products=${this.kind}&id=${this.id}" class="b-ourLookbookBlock__icon" title="See more info..."><i class="fas fa-info-circle"></i></a>
                        <a href="#" class="b-ourLookbookBlock__icon" title="Add to lookbook"><i class="fab fa-gratipay addToLookbook"
                        data-id="${this.id}"
                        data-image="${this.img}"
                        data-name="${this.name}"
                        data-category="${this.category}"></i></a>
                    </div>
                </div>`
    }
}

class ProductViewItem extends Item {
    constructor(el) {
        super(el);
        this.tags = el.tags;
        this.short_desc = el.short_description;
        this.features = el.features;
        this.colours = el.colours;
        this.sizes = el.sizes;
        this.long_desc = el.long_description;
    }

    render() {
        return `<div class="b-productView  data-id="${this.id}"">
                <div class="b-productView__photos">
                    <i class="b-productView__photos_arrowLeft fas fa-chevron-left"></i>
                    <img class="b-productView__photo" src=${this.img} alt="product-view-photo-1">
                    <img class="b-productView__photo" src=${this.smallFront} alt="product-view-photo-2">
                    <img class="b-productView__photo" src=${this.smallBack} alt="product-view-photo-3">
                    <i class="b-productView__photos_arrowRight fas fa-chevron-right"></i>
                </div>
                <div class="b-productViewDesc">
                    <h4 class="b-productViewDesc__head">${this.name}</h4>
                    <div class="b-productViewDescLinks b-productViewDescLinks_topAndBottom">
                        <a href="#" class="b-productViewDescLinks__star"><i class="fas fa-star"></i></a>
                        <a href="#" class="b-productViewDescLinks__star"><i class="fas fa-star"></i></a>
                        <a href="#" class="b-productViewDescLinks__star"><i class="fas fa-star"></i></a>
                        <a href="#" class="b-productViewDescLinks__star"><i class="fas fa-star"></i></a>
                        <a href="#" class="b-productViewDescLinks__star"><i class="far fa-star"></i></a>
                        <a href="#" class="b-productViewDescLinks__reviews b-productViewDescLinks__reviews_left">3 Review(s)</a>
                        <span class="trait">|</span>
                        <a href="#" class="b-productViewDescLinks__addReview">Add a Review</a>
                        <span class="trait">|</span>
                        <div class="b-productViewDescLinks__share">
                            <span class="b-productViewDescLinks__shareHead">Share:</span>
                            <a href="#" class="b-productViewDescLinks__shareLink"><i class="fab fa-facebook-f"></i></a>
                            <a href="#" class="b-productViewDescLinks__shareLink"><i class="fab fa-twitter"></i></a>
                            <a href="#" class="b-productViewDescLinks__shareLink"><i class="fab fa-google-plus-g"></i></a>
                            <a href="#" class="b-productViewDescLinks__shareLink"><i class="fab fa-pinterest-p"></i></a>
                            <a href="#" class="b-productViewDescLinks__shareLink"><i class="fab fa-instagram"></i></a>
                            <a href="#" class="b-productViewDescLinks__shareLink"><i class="far fa-envelope"></i></a>
                        </div>
                    </div>
                    <p class="b-productViewDesc__price">
                        <span class="b-productViewDesc__price b-productViewDesc__price_up">£</span>${this.price}</p>
                    <div class="b-productViewDescMainInfo b-productViewDescMainInfo_topAndBottom">
                        <p class="b-productViewDescMainInfo__item"><span class="b-productViewDescMainInfo__head">Availability:</span> In stock</p>
                        <p class="b-productViewDescMainInfo__item"><span class="b-productViewDescMainInfo__head">Product Code:</span> #${this.id}</p>
                        <p class="b-productViewDescMainInfo__item">
                            <span class="b-productViewDescMainInfo__head">Tags:</span>
                            <a href="#" class="b-productViewDescMainInfo__tag">${this.tags[0]}</a>,
                            <a href="#" class="b-productViewDescMainInfo__tag">${this.tags[1]}</a>,
                            <a href="#" class="b-productViewDescMainInfo__tag">${this.tags[2]}</a>,
                            <a href="#" class="b-productViewDescMainInfo__tag">${this.tags[3]}</a>
                        </p>
                    </div>
                    <div class="b-productViewDescText">
                        <p class="b-productViewDescText__content">
                            ${this.short_desc}
                        </p>
                        <ul class="b-productViewDescText__list b-productViewDescText__list_topAndBottom">
                            <li class="b-productViewDescText__item">${this.features[0]}</li>
                            <li class="b-productViewDescText__item">${this.features[1]}</li>
                            <li class="b-productViewDescText__item">${this.features[2]}</li>
                            <li class="b-productViewDescText__item">${this.features[3]}</li>
                        </ul>
                    </div>
                </div>
                <div class="b-productViewDescToBuy">
                    <form action="#" class="b-productViewDescToBuySelection b-productViewDescToBuySelection_bottom">
                        <div class="b-productViewDescToBuySelection__select">
                            <h4 class="b-productViewDescToBuySelection__head">Colour</h4>
                            <select name="selectColour" id="selectColour" required>
                                <option>Select Colour</option>
                                <option value="black">${this.colours[0]}</option>
                                <option value="white">${this.colours[1]}</option>
                                <option value="Blue">${this.colours[2]}</option>
                            </select>
                        </div>
                        <div class="b-productViewDescToBuySelection__select">
                            <h4 class="b-productViewDescToBuySelection__head">Size</h4>
                            <select name="selectSize" id="selectSize" required>
                                <option>Select Size</option>
                                <option value="xs">${this.sizes[0]}</option>
                                <option value="S">${this.sizes[1]}</option>
                                <option value="M">${this.sizes[2]}</option>
                                <option value="L">${this.sizes[3]}</option>
                                <option value="xl">${this.sizes[4]}</option>
                            </select>
                        </div>
                        <div class="b-productViewDescToBuySelection__select">
                            <h4 class="b-productViewDescToBuySelection__head">Qty</h4>
                            <input type="text" class="b-productViewDescToBuySelection__counter" value="1">
                            <i class="b-productViewDescToBuySelection__counter_arrowUp fas fa-chevron-up" data-id="${this.id}"></i>
                            <i class="b-productViewDescToBuySelection__counter_arrowDown fas fa-chevron-down" data-id="${this.id}"></i>
                        </div>
                        <div class="b-productViewDescToBuySelection_buttonsMargins">
                            <button class="b-productViewDescToBuySelection__addToCartBtn buyBtn" 
                                data-id="${this.id}"
                                data-image="${this.img}"
                                data-name="${this.name}"
                                data-price="${this.price}">
                                <i class="b-productViewDescToBuySelection__addToCartBtn_icon fas fa-shopping-cart"></i> Add to Cart
                            </button>
                            <button class="b-productViewDescToBuySelection__addToLookbookBtn addToLookbook"
                            data-id="${this.id}"
                            data-image="${this.img}"
                            data-name="${this.name}"
                            data-category="${this.category}">
                                <i class="b-productViewDescToBuySelection__addToLookbookBtn_icon far fa-heart"></i> Add to LookBook
                            </button>
                        </div>
                    </form>
                    <button class="b-productViewDescToBuy__compare" data-id="${this.id}">
                        <i class="b-productViewDescToBuy__compare_icon fas fa-compress-alt"></i> Add to Compare
                    </button>
                </div>
            </div>
            <div class="b-productViewLongDesc">
                <div class="b-productViewLongDescMenu">
                    <p class="b-productViewLongDescMenu__link b-productViewLongDescMenu__link_right">Description</p>
                    <p class="b-productViewLongDescMenu__link b-productViewLongDescMenu__link_right">Video</p>
                    <p class="b-productViewLongDescMenu__link b-productViewLongDescMenu__link_right">Size & Specs</p>
                    <p class="b-productViewLongDescMenu__link b-productViewLongDescMenu__link_right">Delivery & Returns</p>
                    <p class="b-productViewLongDescMenu__link">Reviews</p>
                </div>
                <div class="b-productViewLongDescContent">
                    <h4 class="b-productViewLongDescContent__head">Nunc egestas posuere enim, eu maximus erat posuere eget</h4>
                    <p class="b-productViewLongDescContent__text b-productViewLongDescContent__text_top">
                        ${this.long_desc}
                    </p>
                </div>
                <div class="b-productViewLongDescContent">
                    <video class="b-productViewLongDescContent__video" src="images/videos/coverr-business-man-walking--1565501702868.mp4" controls width="100%" height="100%"></video>
                </div>
                <div class="b-productViewLongDescContent">
                    <h4 class="b-productViewLongDescContent__head">Lorem ipsum dolor sit amet.</h4>
                    <p class="b-productViewLongDescContent__text b-productViewLongDescContent__text_top">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, alias consectetur, nam rem repellat, assumenda 
                        dolorum sit sed doloribus explicabo dolorem nostrum non necessitatibus dolor excepturi. Sequi doloribus minus 
                        voluptas maiores! Odit tenetur ipsum id atque ullam. Cum laboriosam voluptate quam adipisci commodi temporibus 
                        odio laborum unde consequuntur. At culpa sapiente praesentium quo delectus magni deleniti, officiis quos expedita 
                        ut harum debitis repudiandae voluptate, quod nemo! Dolor iusto inventore, veniam perspiciatis consequuntur, 
                        ratione eum, obcaecati quaerat cupiditate nam eius ullam pariatur. Quod accusantium expedita architecto illo 
                        quam perspiciatis atque, a perferendis labore cumque beatae aliquid! Soluta reiciendis voluptate aliquam repellat 
                        nam. Id aliquam fugit expedita voluptas. Sit unde nihil, error possimus assumenda doloribus, dolor veritatis in, 
                        nulla pariatur numquam nemo consequuntur impedit quidem odio provident! Velit, vero praesentium? Perferendis earum 
                        alias architecto nesciunt iste nam quae praesentium itaque facere nemo. Illo quisquam tempora iusto impedit odio 
                        quam natus inventore veritatis.
                    </p>
                </div>
                <div class="b-productViewLongDescContent">
                    <h4 class="b-productViewLongDescContent__head">Lorem ipsum dolor sit amet.</h4>
                    <ul class="b-productViewLongDescContent__text b-productViewLongDescContent__text_top">
                        <li class="b-productViewLongDescContent__item">Free shipping</li>
                        <li class="b-productViewLongDescContent__item">Worldwide shipping via courier service.</li>
                        <li class="b-productViewLongDescContent__item">Shipment at own expense from 10 our offices</li>
                    </ul>
                </div>
                <div class="b-productViewLongDescContent">
                    <h4 class="b-productViewLongDescContent__head">Lorem ipsum dolor sit amet.</h4>
                    <p class="b-productViewLongDescContent__text b-productViewLongDescContent__text_top">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, alias consectetur, nam rem repellat, assumenda 
                        dolorum sit sed doloribus explicabo dolorem nostrum non necessitatibus dolor excepturi. Sequi doloribus minus 
                        voluptas maiores! 
                    </p>
                </div>
            </div>`
    }
}

class CategoryItem extends Item {}

class LookBookCategoryItem extends LookBookItem {}

let lists = {
    ProductList: ProductItem,
    Cart: CartItem,
    LookBookList: LookBookItem,
    ProductView: ProductViewItem,
    CategoryList: CategoryItem,
    LookBookCategory: LookBookCategoryItem,
    LookbookBasket: LookbookBasketItem
}

let marks = {
    'popular': 'popular',
    'new arrivals': 'newArrivals',
    'best sellers': 'bestSellers',
    'special offers': 'specialOffers',
    'coming soon': 'comingSoon',
    'latest': 'latest',
    'most liked': 'mostLiked'
}

// Замены дивов при нажатии кнопок (страницы Local stores и Product view)
class Switch {
    constructor(button, div, display) {
        this.button = button;
        this.div = div;
        this.display = display; // отображение блоков
        this._blockSwitching();
    }

    _blockSwitching() {
        let buttons = document.querySelectorAll(`.${this.button}`);
        let divs = document.querySelectorAll(`.${this.div}`);
        for (let i = 0; i < buttons.length; i++) {
            buttons[i].onclick = () => {
                divs.forEach(el => {
                    el.style.display = 'none';
                })
                divs[i].style.display = `${this.display}`;

                buttons.forEach(el => {
                    el.classList.remove(`${this.button}_active`);
                })

                buttons[i].classList.add(`${this.button}_active`);
            }
        }
    }
}

// Валидатор на странице регистрации и входа в аккаунт
class Validator {
    constructor(form) {
        this.patterns = {
            password: /(?=^.{6,}$)(?=.*[0-9])(?=.*[A-Z])(?=.*[a-z])(?=.*[^A-Za-z0-9]).*/
        };
        this.errors = {
            password: 'Пароль состоит из латинских заглавных и прописных букв, содержит хотя бы одно число и спец. символ, длина не менее 8 символов',
            confirmPassword: 'Пароли не совпадают'
        };
        this.errorClass = 'errorMsg';
        this.form = form;
        this.valid = false;
        this._validateForm();
    }

    _validateForm() {
        let form = document.querySelector(this.form);
        let errors = [...form.querySelectorAll(`.${this.errorClass}`)];
        for (let error of errors) {
            error.remove()
        }

        let formFields = [...form.querySelectorAll(`input`)];
        for (let field of formFields) {
            this._validate(field);
        }

        if (![...form.querySelectorAll(`.invalid`)].length) {
            this.valid = true
        }
    }

    _validate(field) {
        if (field.classList.contains('valid')) {
            return;
        }

        if (field.name == 'confirmPassword') {
            let password = document.querySelector('.b-registerBlock input[name="password"]');
            let confirmPassword = document.querySelector('.b-registerBlock input[name="confirmPassword"]');
            if (password.value !== confirmPassword.value) {
                field.classList.add('invalid');
                this._addErrorMsg(field);
                this._watchConfirmPassword(field);
            }
        }

        if (this.patterns[field.name]) {
            if (!this.patterns[field.name].test(field.value)) {
                field.classList.add('invalid');
                this._addErrorMsg(field);
                this._watchField(field);
            }
        }
    }

    _addErrorMsg(field) {
        let error = `<div class ="${this.errorClass}">${this.errors[field.name]}</div>`;
        field.parentNode.insertAdjacentHTML('beforeend', error);
    }

    _watchField(field) {
        field.addEventListener('input', () => {
            let error = field.parentNode.querySelector(`.${this.errorClass}`);
            if (this.patterns[field.name].test(field.value)) {
                field.classList.remove('invalid');
                field.classList.add('valid');
                if (error) {
                    error.remove();
                }
            } else {
                field.classList.remove('valid');
                field.classList.add('invalid');
                if (!error) {
                    this._addErrorMsg(field);
                }
            }
        })
    }

    _watchConfirmPassword(field) {
        field.addEventListener('input', () => {
            let error = field.parentNode.querySelector(`.${this.errorClass}`);
            let password = document.querySelector('.b-registerBlock input[name="password"]');
            let confirmPassword = document.querySelector('.b-registerBlock input[name="confirmPassword"]');
            if (password.value == confirmPassword.value) {
                field.classList.remove('invalid');
                field.classList.add('valid');
                if (error) {
                    error.remove();
                }
            } else {
                field.classList.remove('valid');
                field.classList.add('invalid');
                if (!error) {
                    this._addErrorMsg(field);
                }
            }
        })
    }
}

let cart = new Cart();
let lookbookBasket = new LookbookBasket();

let params = new URLSearchParams(document.location.search);
let page = params.get("page");
let sex = params.get("sex");
let type = params.get("type");
let products = params.get("products");
let id = parseInt(params.get("id"));

if (document.location.search === '') { //главная страница
    let products = new ProductList(cart, lookbookBasket, 'b-productsSection');
    let productsSwitch = new Switch('b-menuSection__link', 'b-productsSection', 'grid');
}

if (document.location.search != '') { // header всех страниц, кроме главной
    let header = document.querySelector('header');
    header.classList.remove('headerHomePage');
    document.querySelector('.headerHomePage__AVE').remove();
    header.classList.add('headerAnotherPages');
}

if (document.location.search === '?page=lookbook') { // страница Lookbook
    let lookbook = new LookBookList(lookbookBasket);
    let productsSwitch = new Switch('b-menuSection__link', 'b-ourLookbook', 'grid');
}

if (document.location.search === `?page=product&sex=${sex}&type=${type}&products=${products}&id=${id}`) { // страница просмотра продукта
    let productView = new ProductView(cart, lookbookBasket);

    window.addEventListener('load', e => {
        let productViewBtns = new Switch('b-productViewLongDescMenu__link', 'b-productViewLongDescContent', 'block');
    })
}

if (document.location.search === '?page=local-stores') { // страница Local stores
    let localStoreBtns = new Switch('b-address__btn', 'b-localStoreDetails', 'grid');
}

if (document.location.search === '?page=sign-in-and-register') { // страница регистрации и входа в систему
    document.querySelector('.b-signInBlock__form').addEventListener('submit', e => {
        let validSignIn = new Validator('.b-signInBlock__form');
        if (!validSignIn.valid) {
            e.preventDefault();
        }
    })

    document.querySelector('.b-registerBlock__form').addEventListener('submit', e => {
        let validRegister = new Validator('.b-registerBlock__form');
        if (!validRegister.valid) {
            e.preventDefault();
        }
    })
}

if(document.location.search === `?page=category&sex=${sex}&type=${type}&products=${products}` ||
  document.location.search === `?page=category&sex=${sex}&type=${type}` || 
  document.location.search === `?page=category&sex=${sex}`) { // страница продуктов по категориям
    let categoryPage = new CategoryList(cart, lookbookBasket);
}

if(document.location.search === `?page=lookbookposts&sex=${sex}`) { // страница лукбуков по категориям
    let lookbookcategory = new LookBookCategory(lookbookBasket);
}
