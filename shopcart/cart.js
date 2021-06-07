//show cart
(function() {
    const cart = document.querySelector('.cart');
    const cartBox = document.querySelector('.products-container');
    const closeBtn = document.querySelector('.fa-close');
    cart.addEventListener('click', function() {
        cartBox.classList.add('active')
    })
    closeBtn.addEventListener('click', function() {
        cartBox.classList.remove('active')
    })

})();
let carts = document.querySelectorAll('.add-cart');
// console.log(carts)

let products = [{
            name: 'pizza',
            tag: 'pizza',
            price: 30,
            inCart: 0
        },
        {
            name: 'cafe',
            tag: 'cafe',
            price: 15,
            inCart: 0
        },
        {
            name: 'gong cha',
            tag: 'gong cha',
            price: 30,
            inCart: 0
        },
        {
            name: 'freezee',
            tag: 'freezee',
            price: 30,
            inCart: 0
        }
    ]
    // console.log(products)
for (let i = 0; i < carts.length; i++) {
    carts[i].addEventListener('click', () => {

        cartNumber(products[i]);
        totalCost(products[i]);

    })
}

function onLoadCartNumer() {
    let productNumbers = localStorage.getItem('cartNumbers');
    if (productNumbers) {
        document.querySelector('.cart span').textContent = productNumbers;
    }
}

function cartNumber(product) {
    // console.log('dasd', product)
    let productNumbers = localStorage.getItem('cartNumbers');
    productNumbers = parseInt(productNumbers);
    if (productNumbers) {
        localStorage.setItem('cartNumbers', productNumbers + 1)
        document.querySelector('.cart span').textContent = productNumbers + 1
    } else {
        localStorage.setItem('cartNumbers', 1)
        document.querySelector('.cart span').textContent = 1;
    }
    setItems(product);
    window.location.reload();
}

function setItems(product) {
    let cartItems = localStorage.getItem('productsIncart');
    cartItems = JSON.parse(cartItems);

    if (cartItems != null) {
        if (cartItems[product.tag] == undefined) {
            cartItems = {
                ...cartItems,
                [product.tag]: product
            }
        }
        cartItems[product.tag].inCart += 1;
    } else {
        product.inCart = 1;
        cartItems = {
            [product.tag]: product
        }
    }
    localStorage.setItem('productsIncart', JSON.stringify(cartItems));

}

function totalCost(product) {

    let cartCost = localStorage.getItem('totalCost')
    if (cartCost != null) {
        cartCost = parseInt(cartCost)
        localStorage.setItem('totalCost', cartCost + product.price)
    } else {
        localStorage.setItem('totalCost', product.price);
    }
}

function displayCart() {
    let cartCost = localStorage.getItem('totalCost')
    let cartItems = localStorage.getItem("productsIncart");
    cartItems = JSON.parse(cartItems)
    let productContainer = document.querySelector(".products");
    let meomeo = document.querySelector('.content')

    if (cartItems && productContainer) {
        productContainer.innerHTML = ``;
        Object.values(cartItems).map(item => {
            productContainer.innerHTML += `
                <div class="col">
                    <div class="product">
                        <span>${item.name}</span>          
                    </div>
                    <div class="price">${item.price}</div>
                    <div class="quantity">
                            <span>${item.inCart}</span>
                    </div>
                    <div class="total">$${item.inCart*item.price},00</div>
                    <div>
                        <button class="btn" onclick="Delete()">Delete</button>
                    </div>
                </div>
            `

        });
        meomeo.innerHTML += ` 
            <div class = "totalcost" >
                <h4 class = "totalTilte">Total</h4> 
                <h4 class = "Total">$${cartCost},00</h4> 
            </div>
        `;

    }

}

function Delete() {
    let col = document.getElementsByClassName('col');
    for (let i = 0; i < col.length; i++) {
        let button = col[i];
        button.addEventListener("click", function() {
            let button_remove = event.target
            button_remove.parentElement.parentElement.remove();
        })
    }
}

onLoadCartNumer();
displayCart();