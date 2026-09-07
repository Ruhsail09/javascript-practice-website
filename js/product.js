let product_detail = document.getElementById("productdetail");

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


 let urlParams = new URLSearchParams(window.location.search);

 let productid = urlParams.get("id");
 productid = Number(productid);

 let selectedproduct = prod.find(function(prod){
    return prod.id === productid;
 });

if(selectedproduct){

    product_detail.innerHTML = `
    
        <div class="product-detail">

            <div class="detail-image">

                <img 
                    src="${selectedproduct.Image}" 
                    alt="${selectedproduct.name}"
                >

            </div>


            <div class="detail-info">

                <span class="detail-label">
                    PRODUCT DETAILS
                </span>

                <h1>
                    ${selectedproduct.name}
                </h1>

                <div class="detail-line"></div>

                <h3>
                    Rs. ${selectedproduct.price.toLocaleString()}
                </h3>

                <p class="detail-description"x>
                    Experience premium quality and modern design.
                    This product is carefully selected to provide
                    excellent quality, performance and value.
                </p>

                <div class="detail-actions">

                    <button id="orderitem">Order Now</button>
                    <button id="addtocart">Add To Cart</button>

                    <button class="back-products"
                        onclick="window.location.href='shop.html'">
                    Continue Shopping</button>

                </div>

            </div>

        </div>
    `;


    let orderbutton = document.getElementById("orderitem");

    orderbutton.addEventListener("click", function(){

       
        alert("This section will be available in the next phase");

    });
    let addtocart = document.getElementById("addtocart");
    addtocart.addEventListener("click", function(){

        alert("Successfully Added To Cart");
    })

}