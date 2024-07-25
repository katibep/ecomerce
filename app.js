const container=document.querySelector(".main-card")

const products = JSON.parse(localStorage.getItem("products")) || [];
console.log(products);

function renderProducts(products) {
    container.innerHTML = "";
    products.shift();
    if (products.length > 0) {
      products.forEach((product) => {
        const productHtml = `
        <div class="card">
        
        <div class="products">
            <div class="image">
                <img src=${product.Image} alt="">
            </div>
            <div class="description">
                <a href=""><p>${product.productTitle}</p></a>
                <p>${product.textareay}</p>
            </div>
            <div class="prices">
                <p>${product.Pricey}</p>
                <p>${product.Stocky}</p>
            </div>
            <a href="" class="a">
                <button class="button">Add to Cart</button>
            </a>
        </div>
    </div>
          
          `;
        container.insertAdjacentHTML("beforeend", productHtml);
      });
      
    } else {
      container.innerHTML = "No Products Yet ";
    }
  }
  
  renderProducts(products)