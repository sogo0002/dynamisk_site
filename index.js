console.log("script loaded...");

fetch(`https://kea-alt-del.dk/t7/api/categories/`)
  .then((response) => response.json())
  .then((data) => showCategoryList(data));

function showCategoryList(data) {
  console.log(data);
  const markup = data
    .map(
      (category) => `
            <div class="box1">
                <a href="productlist.html">Accesories</a>
            </div>

            <div class="box2">
                <a href="productlist.html">Apparel</a>
            </div>

            <div class="box3">
                <a href="productlist.html">Footwear</a>
            </div>

            <div class="box4">
                <a href="productlist.html">Free Items</a>
            </div>

            <div class="box5">
                <a href="productlist.html">Personal Care</a>
            </div>

            <div class="box6">
                <a href="productlist.html">Sporting Goods</a>
            </div>
`
    )
    .join("");
  productContainer.innerHTML = markup;
}

//   const minfarve = new URLSearchParams(window.location.search).get("color");

//   console.log("min farve er", minfarve);

//   document.querySelector("h2").textContent = minfarve;
