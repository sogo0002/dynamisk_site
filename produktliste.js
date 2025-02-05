const myCategory = new URLSearchParams(window.location.search).get("category");

// Finder 'category_list_container' - her skal produktlisten indsættes
let listContainer = document.querySelector(".productlist_container");

const overskrift = document.querySelector("h1");

overskrift.innerHTML = myCategory;

// Henter data om alle produkter fra API'et
fetch(`https://kea-alt-del.dk/t7/api/products?category=${myCategory}`)
  .then((response) => response.json())
  // Når dataen er hentet, konverteres den fra JSON-format (tekst) til et JavaScript-objekt
  .then((data) => showList(data));
// Når dataen er konverteret, kaldes funktionen 'showList' med dataen som argument (dataen sendt til funktionen)

// Funktion der viser listen af produkter
function showList(products) {
  console.log(products); // Logger alle produkter i konsollen, så man kan se den hentede data

  const markup = products
    .map(
      (product) => `  
      <div class="box7">
                <a href="product.html"><img src="https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp"
                        alt=${product.productdisplayname}></a>
                <h3>${product.productdisplayname}</h3>
                <p>${product.brandname}</p>
                <div>
                <p>${product.price},- DKK</p>
                <p class="discountprice ${product.discount && "isOnSale"}" <span>${Math.floor(product.price * (1 - product.discount / 100))}<span/>,- DKK</p>
                </div>
                <div class="discount ${product.discount && "isOnSale"}" >
                    <p>${product.discount}%</p>
                </div>
                <div class="soldout ${product.soldout && "isSoldOut"}">
                    <p>SOLDOUT</p>
                </div>
                <a href="product.html?id=${product.id}">Read More</a>
    </div>`
    )
    .join("");
  // .join("") samler alle elementerne i arrayet til én stor streng uden mellemrum eller separatorer. (default kommer der komma ved join)
  // Dette betyder, at HTML-strukturen for hvert produkt bliver sat sammen uden ekstra mellemrum mellem dem.
  // Resultatet bliver én sammenhængende streng, der kan indsættes i innerHTML på én gang.

  console.log(markup); // Logger den færdige HTML, så vi kan se resultatet før det indsættes på siden

  listContainer.innerHTML = markup;
  // Indsætter den dynamisk genererede HTML i 'category_list_container' på siden
}
