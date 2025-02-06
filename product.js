let productId = new URLSearchParams(window.location.search).get("id");

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

                <h5>Brand</h5>
                <p>${data.brandname}</p>

                <h5>Price</h5>
                <p> ${data.price},- DKK</p>
                <p class="discountprice ${data.discount && "isOnSale"}" <span>${Math.floor(data.price * (1 - data.discount / 100))}<span/>,- DKK</p>

                <h3>Season</h3>
                <p>${data.season}</p>
            </div>
            <div class="box13">
                <h2>${data.productdisplayname}</h2>
                <h5>Produktnummer:</h5>
                <p>${data.id}</p>

               <div class="size-selector">
               <label for="size">Choose a size</label>
               <select id="size">
                <option value="small">Small</option>
                <option value="medium">Medium</option>
                <option value="large">Large</option>
                <option value="xl">XL</option>
                </select>
                </div>

                <button class="addbutton" type="button">Add to basket</button>
            </div>

        </div>
   

`;
  });
