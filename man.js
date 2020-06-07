let listDataProduct = [
    {
        name: 'Áo nữ HeraGD tay ngắn màu hồng',
        price: '285.000' ,
        img: 'https://salegiagoc.com/wp-content/uploads/2018/12/16065759084574-600x866.jpg',
        description: `<ul>
                        <li>Chất liệu vải lụa nhuyễn</li>
                        <li>Áo cổ xẻ V, tay ngắn phối lưới ô</li>
                        <li>Xuất xứ: Việt Nam</li>                 
                        `,
        type: "Áo",
        gender: "Thời trang Nữ",
    },
    {
        name: 'Áo kiểu H:CONNECT cổ trụ tay lỡ bo thun màu xanh ngọc',
        price: '299.000' ,
        img: 'https://salegiagoc.com/wp-content/uploads/2018/12/16315887058974-600x866.jpg',
        description: `<ul>
                        <li>Chất liệu vải lụa nhuyễn</li>
                        <li>Áo cổ trụ, tay lỡ.</li>
                        <li>Xuất xứ: Việt Nam</li>                 
                        `,
        type: "Áo",
        gender: "Thời trang Nữ",
    },
    {
        name: 'Áo kiểu tay lỡ The One Fashion màu đen',
        price: '168.000' ,
        img: 'https://salegiagoc.com/wp-content/uploads/2018/12/13067119853598-600x866.jpg',
        description: `<ul>
                        <li>Chất liệu vải lụa nhuyễn</li>
                        <li>Áo cổ kín, màu đen</li>
                        <li>Xuất xứ: Việt Nam</li>                 
                        `,
        type: "Áo",
        gender: "Thời trang Nữ",
    },
    {
        name: 'Áo kiểu H:CONNECT cổ thắt dây nơ họa tiết hoa',
        price: '299.000' ,
        img: 'https://salegiagoc.com/wp-content/uploads/2018/12/16314939670558-600x866.jpg',
        description: `<ul>
                        <li>Chất liệu vải lụa nhuyễn</li>
                        <li>Áo họa tiết hoa, thắt nơ</li>
                        <li>Xuất xứ: Việt Nam</li>                 
                        `,
        type: "Áo",
        gender: "Thời trang Nữ",
    },
    {
        name: 'Áo chống nắng nam',
        price: '349.000' ,
        img: 'https://canifa.s3.amazonaws.com/media/catalog/product/8/o/8ot20s001-sb128-l-.jpg',
        description: `<ul>
                        <li>Chất liệu polyester co giãn</li>
                        <li>Phom regular, cổ cao, có mũ, tay dài xỏ ngón.</li>
                        <li>Kiểu dáng năng động, thoải mái.</li>                 
                        `,
        type: "Áo",
        gender: "Thời trang Nam",
    },
    {
        name: 'Áo sơ mi nam ngắn tay',
        price: '349.000' ,
        img: 'https://canifa.s3.amazonaws.com/media/catalog/product/8/t/8th20c001-pb208-l.jpg',
        description: `<ul>
                        <li>Chất liệu 50% bamboo 50% polyester.</li>
                        <li>Áo sơ mi kẻ</li>
                        <li>Xuất xứ: Việt Nam</li>                 
                        `,
        type: "Áo",
        gender: "Thời trang Nam",
    },
    {
        name: 'Áo sơ mi ngắn tay trơn',
        price: '499.000' ,
        img: 'https://canifa.s3.amazonaws.com/media/catalog/product/8/t/8th20s018-se003-m.jpg',
        description: `<ul>
                        <li>Chất liệu 50% bamboo 50% polyester.</li>
                        <li>Áo sơ mi trơn</li>
                        <li>Xuất xứ: Việt Nam</li>                 
                        `,
        type: "Áo",
        gender: "Thời trang Nam",
    },
    {
        name: 'Áo sơ mi ngắn tay kẻ caro',
        price: '349.000' ,
        img: 'https://canifa.s3.amazonaws.com/media/catalog/product/8/t/8th20a004-cg068-m.jpg',
        description: `<ul>
                        <li>Chất liệu 50% bamboo 50% polyester.</li>
                        <li>Áo sơ mi vải kẻ caro</li>
                        <li>Xuất xứ: Việt Nam</li>                 
                        `,
        type: "Áo",
        gender: "Thời trang Nam",
    }, 
];

let tbody = document.getElementById('product-group-man');
    tbody.innerHTML = '';

    for (let i = 0; i < listDataProduct.length; i++) {
        if(listDataProduct[i].gender === "Thời trang Nam") {
            let product = listDataProduct[i];
        
        let html = `<tr>
                       
                        <td>
                            <img src="${product.img}" alt="" width="150" height="200">
                        </td>
                        <td>${product.name}</td>
                        <td>${product.description}</td>
                        <td>${product.price}đ</td>
                        <td>
                            <button class="btn btn-link" onclick="showDetail(${product.id})">Detail</button>
                        </td>
                    </tr>`;
        
        tbody.innerHTML += html;
        }
    }
