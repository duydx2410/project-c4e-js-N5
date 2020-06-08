




let productId = parseInt(localStorage.getItem('selectedProductId'));

let products = JSON.parse(localStorage.getItem('products'));

let product = products.find(function (value) {
    return value.id === productId;
});

// console.log(product);
if(product){
    document.getElementById('product-img').src = product.img;
    document.getElementById('product-name').innerHTML = product.name;
    document.getElementById('product-price').innerHTML = product.price;
    document.getElementById('product-description').innerHTML = product.description;
}


function checkout(){
    let sName = document.getElementById('nhap-ho-ten').value;
    let sPhone = document.getElementById('nhap-so-dien-thoai').value;
    let sAddress = document.getElementById('nhap-dia-chi').value;
    if (sName === "" || sPhone ==="" || sAddress ==="") {
        alert("Nhập đầy đủ thông tin")
    } else {
        alert("Cảm ơn bạn đã đặt hàng, Chúng tôi sẽ liên lạc sớm với bạn!")
    }
};
function goBack(){
window.location.back();
}