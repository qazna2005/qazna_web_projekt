// Kategoriyalar (mahsulot turlari)
const categories = [
    { id: "tv", name: "Televizorlar", img: "images/tv.jpg" },
    { id: "kir", name: "Kir yuvish mashinalari", img: "images/kir4.jpg" },
    { id: "sovutgich", name: "Sovutgichlar", img: "images/cond.jpg" },
    { id: "changyutgich", name: "Changyutgichlar", img: "images/chang.jpg" },
    { id: "mikrotolqinli", name: "Mikroto‘lqinli pechlar", img: "images/mk1.jpg" },
    { id: "noutbook", name: "Noutbuklar", img: "images/komp3.jpg" },
    { id: "telefon", name: "Telefonlar", img: "images/tel10.jpg" },
    { id: "muzlatgich", name: "Muzlatgichlar", img: "images/pech.jpg" }
];

// Har bir kategoriya ichidagi mahsulotlar
const products = {
    tv: [
        { name: "Televizor Samsung UE98DU9000UXUZ", price: "57 951 000 so‘m", img: "images/tv1.jpg" },
        { name: "Смарт телевизор WellStars 32", price: "6 075 020 so‘m", img: "images/tv2.jpg" },
        { name: "Телевизор Xiaomi Mi TV P1 43", price: "8 712 000 so‘m", img: "images/tv3.jpg" },
        { name: "Televizor Artel A32KH5000", price: "1 526 000 so‘m", img: "images/tv.jpg" },
        { name: "Televizor LG ", price: "11 050 000 so‘m", img: "images/tv4.jpg" },
        { name: "Televizor SAMSUNG", price: "12 448 000 so‘m", img: "images/tv5.jpg" },
    ],
    kir: [
        { name: "LG Kir yuvish mashinasi", price: "14 849 010 so‘m", img: "images/kir1.jpg" },
        { name: "Kir quritish mashinasi Bosch ", price: "26 604 000 so‘m", img: "images/kir2.jpg" },
        { name: "Стиральная машина SHIVAKI", price: "5 994 450 so‘m", img: "images/kir3jpg.jpg" },
        { name: "Стиральная машина Samsung", price: "5 147 010 so‘m", img: "images/kir4.jpg" }
    ],
    sovutgich: [
        { name: "Artel Sovutgich", price: "5 135 200 so‘m", img: "images/cond.jpg" },
        { name: "Кондиционер LG AC12BK", price: "6 200 000 so‘m", img: "images/cond2.jpg" },
        { name: "Konditsioner Bosch ", price: "5 800 000 so‘m", img: "images/cond3.jpg" }
    ],
    changyutgich: [
        { name: "Пылесос ARTEL", price: "775 030 so‘m", img: "images/chang.jpg" },
        { name: "Changyutgich Bosch", price: "4 064 000  so‘m", img: "images/chang1.jpg" },
        { name: "Пылесос Bosch", price: "3 864 904 so‘m", img: "images/chang2.jpg" },
        { name: "Пылесос Avalon", price: "2 509 000 so‘m", img: "images/chang3.jpg" },
        { name: "Пылесос Samsung ", price: "2 495 000 so‘m", img: "images/chang4.jpg" }
    ],
    mikrotolqinli: [
        { name: "Mikrotolqinli pech", price: "2 272 620 so‘m", img: "images/mk1.jpg" },
        { name: "Mikrotolqinli pech HURAKAN ", price: "5 130 000 so‘m", img: "images/mk2.jpg" },
        { name: "Mikrotoʻlqinli pech Artel", price: "1 013 000 so‘m", img: "images/mk3.jpg" },
        { name: "Mikrotolqinli pech Shivaki ", price: "2 749 000 so‘m", img: "images/mk4.jpg" },
        { name: "Mikrotolqinli pech LG ", price: "4 499 000 so‘m", img: "images/mk5.jpg" }
        
    ],
    noutbook: [
        { name: "ASUS ROG Strix Scar", price: "66 044 000 so‘m", img: "images/kompp.jpg" },
        { name: "Ноутбук Lenovo", price: "5 939 010 so‘m", img: "images/komp.jpg" },
        { name: "Noutbuk HP", price: "5 950 000 so‘m", img: "images/komp2.jpg" },
        { name: "Noutbuk Apple MacBook Pro 13", price: "20 684 000 so‘m", img: "images/komp3.jpg" },
        { name: "Noutbuk Acer A325-45 N4500", price: "3 800 000 so‘m", img: "images/komp4.jpg" },
        { name: "Ноутбук HP Victus 15 R7-7445H", price: "10 295 990 so‘m", img: "images/komp5.jpg" }
    ],
    telefon:[
        {name: "Смартфон Samsung Galaxy S22 Ultra", price:"17 926 000 so‘m", img:"images/tel1.jpg"},
        {name: "Смартфон Samsung Galaxy A35", price:"4 189 000 so‘m ", img:"images/tel2.jpg"},
        {name: "Смартфон Samsung Galaxy S25 Ultra", price:"15 500 000 so‘m", img:"images/tel3.jpg"},
        {name: "Smartfon Samsung Galaxy A16", price:"2 799 000 so‘m", img:"images/tel4.jpg"},
        {name: "Samsung Galaxy A53", price:"3 900 000 so‘m", img:"images/tel5.jpg"},
        {name: "Смартфон W&O X 25 ультра", price:"1 109 360 so‘m", img:"images/tel6.jpg"},
        {name: "Смартфон HONOR 400 Lite ", price:"3 821 020 so‘m", img:"images/tel7.jpg"},
        {name: "Smartfon Apple iPhone 13", price:"7 299 000 so‘m", img:"images/tel8.jpg"},
        {name: "Смартфон iPhone 15 Pro", price:"18 699 000 so‘m", img:"images/tel9.jpg"},
        {name: "Smartfon Apple iPhone 16 Pro ", price:"20 100 000 so‘m", img:"images/tel10.jpg"},
        {name: "Смартфон Honor 400 Pro", price:"7 839 020 so‘m", img:"images/tel11.jpg"},
        {name: "Smartfon Huawei Mate", price:"50 268 000 so‘m", img:"images/tel12.jpg"},

    ]
};

const productList = document.getElementById("productList");
const sectionTitle = document.getElementById("sectionTitle");
const showCategoriesBtn = document.getElementById("showCategories");

// Kategoriyalarni ko‘rsatish
function showCategories() {
    sectionTitle.textContent = "Barcha mahsulot turlari";
    productList.innerHTML = "";

    categories.forEach(cat => {
        const div = document.createElement("div");
        div.classList.add("category-card");
        div.innerHTML = `
            <img src="${cat.img}" alt="${cat.name}" style="width:100%; height:180px; object-fit:cover; border-radius:10px;">
            <h3>${cat.name}</h3>
            <button onclick="showProducts('${cat.id}')">Mahsulotlarni ko‘rish</button>
        `;
        productList.appendChild(div);
    });
}

// Tanlangan kategoriya mahsulotlarini ko‘rsatish
function showProducts(categoryId) {
    sectionTitle.textContent = categories.find(c => c.id === categoryId).name;
    productList.innerHTML = "";

    products[categoryId].forEach(p => {
        const card = document.createElement("div");
        card.classList.add("product-card");
        card.innerHTML = `
            <img src="${p.img}" alt="${p.name}">
            <h3>${p.name}</h3>
            <p>${p.price}</p>
            <button onclick="showCategories()">⬅ Orqaga</button>
        `;
        productList.appendChild(card);
    });
}

// "Barcha mahsulotlar" tugmasi bosilganda
showCategoriesBtn.addEventListener("click", (e) => {
    e.preventDefault();
    showCategories();
});



// Elementni olish (ID orqali)
const card = document.getElementById("infoCard");

// Tugma bosilganda fon rangini o‘zgartirish
document.getElementById("btn").addEventListener("click", function() {
  card.style.backgroundColor = "#d1fae5"; // Yashil rang
  card.style.border = "2px solid #10b981";
  card.style.transition = "0.5s";
});



// Dastlab sahifani yuklaganda kategoriyalarni chiqaramiz
showCategories();
