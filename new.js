const productForm=document.getElementById("productForm")
const title=document.getElementById("title")
const ImageLink=document.getElementById("ImageLink")
const Price=document.getElementById("Price")
const Stock=document.getElementById("Stock")
const textarea=document.querySelector(".textarea")
const notification = document.querySelector(".notification");
const products = JSON.parse(localStorage.getItem("products")) || [];
console.log(products);
//add eventlistner
productForm.addEventListener("submit",function(e){
    e.preventDefault();
  const productTitle = title.value;
  const Image = ImageLink.value;
  const Pricey = Number(Price.value);
  const Stocky = Stock.value;
  const textareay = textarea.value;
  const date = new Date();
  const id = date.getTime();
  const slug = generateSlug(productTitle);
  if (
    productTitle === "" ||
    Image === "" ||
    Pricey === "" ||
    Stocky === "" ||
    textareay === "" ||
    slug === ""
  ){
    alert("All fields are required");
    return;
  }
  const newProduct = {
    id,
    productTitle,
    slug,
    Pricey,
    Image,
    Stocky,
    textareay,
  };
  console.log(newProduct)
  products.push(newProduct);
  //saving in the ls
  localStorage.setItem("products", JSON.stringify(products));
  // Fire a notification
  showNotification("Product Created successfully");
  // Route the Home Page
  setTimeout(() => {
    window.location.href = "/";
  }, 4000);
})
function generateSlug(title) {
    const slug = title.trim().toLowerCase().split(" ").join("-");
    return slug;
  }
  function showNotification(message) {
    notification.innerHTML = `<p>${message}</p>`;
    notification.classList.add("showNotification");
    setTimeout(() => {
      notification.classList.remove("showNotification");
    }, 3000);
  }
  
