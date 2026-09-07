    let logoutbtn = document.getElementById("logout");
    let product_container = document.getElementById("product");
    // logoutbtn.addEventListener("submit", function(event){

    //     event.preventDefault();
    // });
    // let prod = document.getElementById("product");
    // let logbtn = document.getElementById("logout");

    let prod = [{
        
        id: 1,
        name: "Tesla Car",
        price: 20000000.000,
        Image:"assets/product-1.png"

    },
    {
        id: 2,
        name: "Tesla Car",
        price: 20000000.000,
        Image:"assets/product-2.png"
    },
    {
        id: 3,
        name: "Tesla Car",
        price: 30000000.000,
        Image:"assets/product-3.png"
    },
    {
        id: 4,
        name: "Tesla Car",
        price: 40000000.000,
        Image:"assets/product-4.png"
    },
    {
        id: 5,
        name: "Tesla Car",
        price: 50000000.000,
        Image:"assets/product-5.png"
    },
    {
        id: 6,
        name: "Tesla Car",
        price: 60000000.000,
        Image:"assets/product-6.png"
    },
    {
        id: 7,
        name: "Tesla Car",
        price: 70000000.000,
        Image:"assets/product-7.png"
    }
    ]

    prod.forEach(function(prod){

        let product_card = document.createElement("div");
        product_card.classList.add("product_card");

        product_card.innerHTML = `
        <img src="${prod.Image}" alt="${prod.name}">
        <h3>${prod.name}</h3>
        <p class="Price">
        Rs.${prod.price}
        </p>

        <button class="read-more" data-id="${prod.id}">
        Read more
    </button>
        `;

        product_container.appendChild(product_card);

    });

    let readmorebtn = document.querySelectorAll(".read-more");
    readmorebtn .forEach(function(button){
        button.addEventListener("click" ,function(){
            let productid = button.dataset.id;
            window.location.href=
            `product.html?id=${productid}`; 
            });
    });
    logoutbtn.addEventListener("click", function(){
        localStorage.removeItem("user");
        window.location.href = "index.html";

    });