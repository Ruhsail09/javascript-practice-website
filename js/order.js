console.log("Order JavaScript is working");


const orderproduct = document.getElementById("order-product");

const orderform = document.getElementById("order-form");


const product = [
    {
        id: 1,
        name: "Tesla Car",
        price: 20000000,
        Image: "assets/product-1.png"
    },
    {
        id: 2,
        name: "Tesla Car",
        price: 20000000,
        Image: "assets/product-2.png"
    },
    {
        id: 3,
        name: "Tesla Car",
        price: 30000000,
        Image: "assets/product-3.png"
    },
    {
        id: 4,
        name: "Tesla Car",
        price: 40000000,
        Image: "assets/product-4.png"
    },
    {
        id: 5,
        name: "Tesla Car",
        price: 50000000,
        Image: "assets/product-5.png"
    },
    {
        id: 6,
        name: "Tesla Car",
        price: 60000000,
        Image: "assets/product-6.png"
    },
    {
        id: 7,
        name: "Tesla Car",
        price: 70000000,
        Image: "assets/product-7.png"
    }
];


const urlParams = new URLSearchParams(window.location.search);

const productid = Number(urlParams.get("id"));


const selectedproduct = product.find(function(product) {

    return product.id === productid;

});


let quantity = 1;


if (selectedproduct) {

    orderproduct.innerHTML = `

        <div class="order-product-card">

            <img
                src="${selectedproduct.Image}"
                alt="${selectedproduct.name}"
            >

            <div>

                <h2>
                    ${selectedproduct.name}
                </h2>

                <p>
                    Price:
                    Rs. ${selectedproduct.price.toLocaleString()}
                </p>

                <div class="quantity-box">

                    <p>
                        Quantity:
                    </p>

                    <button
                        type="button"
                        id="minus-btn"
                    >
                        -
                    </button>

                    <span id="quantity">
                        ${quantity}
                    </span>

                    <button
                        type="button"
                        id="plus-btn"
                    >
                        +
                    </button>

                </div>

                <h3>
                    Total:
                    Rs.
                    <span id="total-price">
                        ${selectedproduct.price.toLocaleString()}
                    </span>
                </h3>

            </div>

        </div>

    `;


    const minusbtn = document.getElementById("minus-btn");

    const plusbtn = document.getElementById("plus-btn");

    const quantityelement = document.getElementById("quantity");

    const totalprice = document.getElementById("total-price");


    // PLUS

    plusbtn.addEventListener("click", function() {

        quantity++;

        quantityelement.textContent = quantity;

        updateTotal();

    });


    // MINUS

    minusbtn.addEventListener("click", function() {

        if (quantity > 1) {

            quantity--;

            quantityelement.textContent = quantity;

            updateTotal();

        }

    });


    // TOTAL

    function updateTotal() {

        const total = selectedproduct.price * quantity;

        totalprice.textContent = total.toLocaleString();

    }

}


else {

    orderproduct.innerHTML = `

        <div class="not-found">

            <h2>
                Product not found
            </h2>

            <a href="shop.html">
                Back to Products
            </a>

        </div>

    `;

}


// ORDER FORM

orderform.addEventListener("submit", function(event) {

    event.preventDefault();


    const name =
        document.getElementById("customer-name").value.trim();

    const phone =
        document.getElementById("customer-phone").value.trim();

    const email =
        document.getElementById("Customer-email").value.trim();

    const address =
        document.getElementById("customer-address").value.trim();

    const city =
        document.getElementById("customer-city").value.trim();

    const payment =
        document.getElementById("payment-method").value;


    if (
        name === "" ||
        phone === "" ||
        email === "" ||
        address === "" ||
        city === "" ||
        payment === ""
    ) {

        alert("Please fill all fields.");

        return;

    }


    alert("Order placed successfully!");

});