let productId = 1163;
let productContainer = document.querySelector(".product_container");
fetch(`https://kea-alt-del.dk/t7/api/products/${productID}`)
  .then((response) => response.json())
  .then(showProductList);

function showProductList(data) {
  const markup = data
    .map(
      (product) => `
                <div class="box7">
                <a href="product.html"><img src="https://kea-alt-del.dk/t7/images/webp/640/1163.webp"
                        alt="Produkt 1163"></a>
                <h3>Sahara Team India Fanwear Round Neck Jersey</h3>
                <p>Apparel</p>
                <p>DKK 895,-</p>
                <a href="product.html">Read More</a>
            </div>
            <div class="box8">
                <a href="product.html"><img src="https://kea-alt-del.dk/t7/images/webp/640/1164.webp"
                        alt="Produkt 1164"></a>
                <h3> class"ProductName">${data.productdisplaynameBlue}</h3>
                <p>Apparel</p>
                <p>Prev DKK 1.599,-</p>
                <p>Now DKK 1.148,-</p>
                <a href="product.html">Read More</a>
                <div class="discount">
                    <p>49%</p>
                </div>
            </div>
            <div class="box9">
                <a href="product.html"><img src="https://kea-alt-del.dk/t7/images/webp/640/1531.webp"
                        alt="Produkt 1164"></a>
                <div class="soldout">
                    <p>SOLDOUT</p>
                </div>
                <h3>Grey Solid Round Neck T-shirt</h3>
                <p>Apparel</p>
                <p>DKK 799,-</p>
                <a href="product.html">Read More</a>
            </div>
            <div class="box10">
                <a href="product.html"><img src="https://kea-alt-del.dk/t7/images/webp/640/1528.webp"
                        alt="Produkt 1164"></a>
                <div class="soldout">
                    <p>SOLDOUT</p>
                </div>
                <h3>Black Fleece Jacket</h3>
                <p>Apparel</p>
                <p>Prev DKK 3.999,-</p>
                <p>Now DKK 2039,-</p>
                <a href="product.html">Read More</a>
                <div class="discount">
                    <p>49%</p>
                </div>
`
    )
    .join("");
  productContainer.innerHTML = markup;
}
