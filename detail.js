




let productId = parseInt(localStorage.getItem('selectedProductId'));

let products = JSON.parse(localStorage.getItem('products'));

let product = products.find(function (value) {
    return value.id === productId;
});

console.log(product);
if(product){
    document.getElementById('product-img').src = product.img;
    document.getElementById('product-name').innerHTML = product.name;
    document.getElementById('product-price').innerHTML = product.price;
    document.getElementById('product-description').innerHTML = product.description;
}

function goBack(){
    window.history.back();
}