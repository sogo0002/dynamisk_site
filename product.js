let productId = new URLSearchParams(window.location.search).get("id)");

let productContainer = document.querySelector(".product_container");

fetch(`https://kea-alt-del.dk/t7/api/products/${productId}`)
  .then((response) => response.json())

  .then((data) => {
    productContainer.innerHTML = `
        <div class="product_container">
            <div class="box11">
                <img src="https://kea-alt-del.dk/t7/images/webp/640/${productId}.webp" alt="">
            </div>
            <div class="box12">
                <h2>Product Information</h2>

                <h5>Model name</h5>
                <p>${data.productdisplayname}</p>

                <h5>Color</h5>
                <p>${data.productcolour}</p>

                <h5>Price</h5>
                <p> ${data.price},- DKK</p>
                <p> ${data.price},- DKK</p>

                <h3>${data.productbrand}</h3>
                <p>$product.productbrandbio}</p>
            </div>
            <div class="box13">
                <h4>${data.productdisplayname}</h4>
                <p>${data.id}</p>

                <p>Choose a size</p>

                <div class="sizerange">

                </div>

                <button class="addbutton" type="button">Add to basket</button>
            </div>

        </div>
   

`;
  });
