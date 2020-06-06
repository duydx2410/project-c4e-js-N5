let listDataProduct = [
    {
        name: 'Áo nữ HeraGD tay ngắn màu hồng',
        price: 285e3 ,
        img: 'https://salegiagoc.com/wp-content/uploads/2018/12/16065759084574-600x866.jpg',
        description: `<ul>
                        <li>Chất liệu vải lụa nhuyễn</li>
                        <li>Áo cổ xẻ V, tay ngắn phối lưới ô</li>
                        <li>Xuất xứ: Việt Nam</li>                 
                        `,
        type: "Áo",
        gender: "Nữ",
    },
    {
        name: 'Áo kiểu H:CONNECT cổ trụ tay lỡ bo thun màu xanh ngọc',
        price: 299e3 ,
        img: 'https://salegiagoc.com/wp-content/uploads/2018/12/16315887058974-600x866.jpg',
        description: `<ul>
                        <li>Chất liệu vải lụa nhuyễn</li>
                        <li>Áo cổ xẻ V, tay ngắn phối lưới ô</li>
                        <li>Xuất xứ: Việt Nam</li>                 
                        `,
        type: "Áo",
        gender: "Nữ",
    },
    {
        name: 'Áo kiểu tay lỡ The One Fashion màu đen',
        price: 168e3 ,
        img: 'https://salegiagoc.com/wp-content/uploads/2018/12/13067119853598-600x866.jpg',
        description: `<ul>
                        <li>Chất liệu vải lụa nhuyễn</li>
                        <li>Áo cổ xẻ V, tay ngắn phối lưới ô</li>
                        <li>Xuất xứ: Việt Nam</li>                 
                        `,
        type: "Áo",
        gender: "Nữ",
    },
    {
        name: 'Áo kiểu H:CONNECT cổ thắt dây nơ họa tiết hoa',
        price: 299e3 ,
        img: 'https://salegiagoc.com/wp-content/uploads/2018/12/16314939670558-600x866.jpg',
        description: `<ul>
                        <li>Chất liệu vải lụa nhuyễn</li>
                        <li>Áo cổ xẻ V, tay ngắn phối lưới ô</li>
                        <li>Xuất xứ: Việt Nam</li>                 
                        `,
        type: "Áo",
        gender: "Nữ",
    },
    {
        name: 'Áo chống nắng nam',
        price: 399e3 ,
        img: 'https://canifa.s3.amazonaws.com/media/catalog/product/8/o/8ot20s001-sb128-l-.jpg',
        description: `<ul>
                        <li>Chất liệu polyester co giãn</li>
                        <li>Phom regular, cổ cao, có mũ, tay dài xỏ ngón.</li>
                        <li>Kiểu dáng năng động, thoải mái.</li>                 
                        `,
        type: "Áo",
        gender: "Nam",
    },
    {
        name: 'Áo sơ mi nam ngắn tay',
        price: 349e3 ,
        img: 'https://salegiagoc.com/wp-content/uploads/2018/12/16065759084574-600x866.jpg',
        description: `<ul>
                        <li>Chất liệu 50% bamboo 50% polyester.</li>
                        <li>Áo sơ mi kẻ</li>
                        <li>Xuất xứ: Việt Nam</li>                 
                        `,
        type: "Áo",
        gender: "Nam",
    },
    {
        name: 'Áo sơ mi ngắn tay trơn',
        price: 499e3 ,
        img: 'https://salegiagoc.com/wp-content/uploads/2018/12/16065759084574-600x866.jpg',
        description: `<ul>
                        <li>Chất liệu 50% bamboo 50% polyester.</li>
                        <li>Áo sơ mi trơn</li>
                        <li>Xuất xứ: Việt Nam</li>                 
                        `,
        type: "Áo",
        gender: "Nam",
    },
    {
        name: 'Áo sơ mi ngắn tay kẻ caro',
        price: 349e3 ,
        img: 'https://salegiagoc.com/wp-content/uploads/2018/12/16065759084574-600x866.jpg',
        description: `<ul>
                        <li>Chất liệu vải lụa nhuyễn</li>
                        <li>Áo cổ xẻ V, tay ngắn phối lưới ô</li>
                        <li>Xuất xứ: Việt Nam</li>                 
                        `,
        type: "Áo",
        gender: "Nam",
    }, 
];

let tBody = document.getElementById('product-group-man');

for (let i = 0; i < listDataProduct.length; i++) {
    if(listDataProduct[i].gender === "Nam") {
        let product = listDataProduct[i].gender;
        console.log(product);
        
    

    let html = `<tr>
                    <td>${i + 1}</td>
                    <td><img src="${product.img}" width="90"></td>
                    <th>${product.name}</th>
                    <td>${product.brand}</td>
                    <td>${product.price}đ</td>
                    <td>${product.description}</td>
                    <td> 
                        <button>
                            <a  href="${product.linkDetail}" target="_blank">
                            Chi tiết
                            </a>
                        </button>
                    </td>
                </tr>`

tBody.innerHTML += html
}
};