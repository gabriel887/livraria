const getCart = () => JSON.parse(localStorage.getItem('cart')) || []

const setCart = cartData => localStorage.setItem('cart', JSON.stringify(cartData));

const modalRemove = new bootstrap.Modal('#modalRemove', {
    keyboard: true,
    focus: true
});



const addToCart = id => {
    const cart = getCart()

    if (cart.length === 0) {
        const newCart = [{
            id: id,
            qtd: 1
        }];
        setCart(newCart);
    } else {
        alreadyAdded = false;
        cart.forEach(item => {
            if (item.id === id) {
                item.qtd += 1
                alreadyAdded = true;
            }
        });
        if (!alreadyAdded) {
            cart.push({ id: id, qtd: 1 })
        }
        setCart(cart);
    }
}

const cartButton = document.getElementById("cart");
const divCartItems = document.getElementById("showItems");
const divInfoTotal = document.getElementById("infoTotal");
const spanTotalPrice = document.getElementById("showAllItemsValue");


var booksToShow = "";
var itemsInfo = "";
var totalPrice = 0.0;

const booksAdded = book => {
    const qtd = book.qtd;

    book = getBook(book.id);

    const price = (book.price.replace(',', '.') * qtd).toFixed(2);
    totalPrice += parseFloat(price);
    booksToShow += `
    <div class="item">
        <img src="./img/${book.img}" alt="Imagem da capa do livro ${book.name}">
        <div>
            <p class="title">${book.name}</p>
            <p>${book.description}</p>
            <div class="bottom">
                <div class="counter">
                    <button class="btnControls" onclick="remItem(${book.id})">-</button>
                    <input type="text" size="4" value="${qtd}" disabled>
                    <button class="btnControls" onclick="addItem(${book.id})">+</button>
                </div>
                <p class="price">R$ <span>${price.toString().replace('.', ',')}</span></p>
            </div>
        </div>
    </div>
    <hr>`;
}

const addInfo = book => {
    var qtd = book.qtd;
    book = getBook(book.id);
    itemsInfo += `
                <div class="info">
                    <div class="infoName"> 
                        <p>${qtd}x ${book.name}</p>
                    </div>
                    <div class="infoPrice">
                        <p>R$ ${book.price}</p>
                    </div> 
                </div>`;
}

function fillCart() {
    const cart = getCart();
    itemsInfo = "";
    booksToShow = "";
    totalPrice = 0;
    cart.forEach(book => {
        booksAdded(book);
        addInfo(book);
    });
    divInfoTotal.innerHTML = itemsInfo;
    if (booksToShow === "") {
        booksToShow = `
        <div class="item">
            <div>
                <p class="title">Nenhum item selecionado.</p>
            </div>
        </div>
        <hr>`;
    }
    divCartItems.innerHTML = booksToShow;
    spanTotalPrice.innerHTML = "R$ " + totalPrice.toFixed(2);
}

const remItem = id => {
    const cart = getCart();
    cart.forEach(book => {
        if (id === book.id) {
            book.qtd--;
        }
        if (book.qtd === 0) {
            modalRemove.show();
        }
    });
    setCart(cart);
    fillCart();
}

function addItem(id) {
    const cart = getCart();
    cart.forEach(book => {
        if (id === book.id) {
            book.qtd++;
        }
    });
    setCart(cart);
    fillCart();
}

function removeFromCart(rem) {
    const cart = getCart();
    if (rem) {
        var cartNew = cart.filter((b) => b.qtd > 0);
        setCart(cartNew);
    } else {
        cart.forEach(book => {
            if (book.qtd === 0) {
                book.qtd++;
            }
        });
        setCart(cart);
    }
    modalRemove.hide();
    fillCart();
}