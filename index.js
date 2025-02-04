console.log("script loaded...");

const listContainer = document.querySelector(".categories_container");

fetch(`https://kea-alt-del.dk/t7/api/categories/`)
  .then((response) => response.json())
  .then((data) => showCategoryList(data));

function showCategoryList(data) {
  console.log(data);
  const markup = data
    .map(
      (category) => `

<div class="box1">
      <a href="productlist.html?category=${category.category}">${category.category}</a>
</div>
`
    )
    .join("");
  listContainer.innerHTML = markup;
}

//   const minfarve = new URLSearchParams(window.location.search).get("color");

//   console.log("min farve er", minfarve);

//   document.querySelector("h2").textContent = minfarve;
