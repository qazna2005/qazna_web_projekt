// --- JSON formatda ma'lumotlar to'plami (Variant rasmlari kiritilgan) ---
const mahsulotlarOmbori = [
    // Asosiy guruh: Muzlatgichlar
    { 
        id: 10, 
        nomi: "Muzlatgichlar", 
        rasm: "x2.jpg", // Umumiy rasm qoyish uchun (Asosiy kartada)
        turlar: [
            { id: 11, nomi: "Samsung RB30", narxi: 7500000, qolgan: 5, tavsif: "Inverter, No Frost, 300L", variantRasm: "x7.jpg" }, // Alohida rasm
            { id: 12, nomi: "LG B507", narxi: 8900000, qolgan: 2, tavsif: "DoorCooling+, Wi-Fi boshqaruv", variantRasm: "muzlatgich_lg.jpg" },           // Alohida rasm
            { id: 13, nomi: "Artel HD400", narxi: 5500000, qolgan: 8, tavsif: "Oddiy, katta sig'im", variantRasm: "muzlatgich_artel.jpg" }             // Alohida rasm
        ]
    },
    // Asosiy guruh: Kir Yuvish Mashinalari
    { 
        id: 20, 
        nomi: "Kir Yuvish Mashinalari", 
        rasm: "kir1.jpg", 
        turlar: [
            { id: 21, nomi: "LG F10B", narxi: 4200000, qolgan: 3, tavsif: "6kg, to'g'ridan-to'g'ri haydovchi", variantRasm: "kir3jpg.jpg" },
            { id: 22, nomi: "Bosch Serie 4", narxi: 6100000, qolgan: 1, tavsif: "8kg, EcoSilence Drive", variantRasm: "kir2.jpg" }
        ]
    },
    // Asosiy guruh: Televizorlar
    { 
        id: 30, 
        nomi: "Televizorlar", 
        rasm: "tv3.jpg", 
        turlar: [
            { id: 31, nomi: "Samsung QLED 55''", narxi: 12000000, qolgan: 4, tavsif: "4K, Smart TV", variantRasm: " tv.jpg" },
            { id: 32, nomi: "Artel LED 43''", narxi: 3500000, qolgan: 10, tavsif: "Full HD, Oddiy", variantRasm: "tv_artel.jpg" }
        ]
    },
     { 
        id: 40, 
        nomi: "Notebook", 
        rasm: "komp4.jpg", 
        turlar: [
            { id: 41, nomi: "Chuwi HeroBook Plus''", narxi: 2499000, qolgan: 4, tavsif: "Windows, Intel Celeron N4020", variantRasm: "nt.jpg" },
            { id: 42, nomi: "Acer''", narxi: 4500000, qolgan: 10, tavsif: "Winwods, Intel Celeron N12305", variantRasm: "komp4.jpg" },
             { id: 43, nomi: "Chuwi GemiBook Plus''", narxi: 2799000, qolgan: 10, tavsif: "Windows, Intel N100", variantRasm: "nt1.jpg" }
        ]
    },
     { 
        id:50, 
        nomi: "Telefonlar", 
        rasm: "tel4.jpg", 
        turlar: [
            { id: 51, nomi: "Iphone''", narxi: 12000000, qolgan: 4, tavsif: "4K, Smart TV", variantRasm: "tel4.jpg" },
            { id: 52, nomi: "Honor 400 Lite''", narxi: 3500000, qolgan: 10, tavsif: "Full HD, Oddiy", variantRasm: "tel4.jpg" }
        ]
    },
     { 
        id:60, 
        nomi: "Televizorlar", 
        rasm: "tv3.jpg", 
        turlar: [
            { id: 61, nomi: "Samsung QLED 55''", narxi: 12000000, qolgan: 4, tavsif: "4K, Smart TV", variantRasm: " tv.jpg" },
            { id: 62, nomi: "Artel LED 43''", narxi: 3500000, qolgan: 10, tavsif: "Full HD, Oddiy", variantRasm: "tv_artel.jpg" }
        ]
    },
     { 
        id: 70, 
        nomi: "Televizorlar", 
        rasm: "tv3.jpg", 
        turlar: [
            { id: 71, nomi: "Samsung QLED 55''", narxi: 12000000, qolgan: 4, tavsif: "4K, Smart TV", variantRasm: " tv.jpg" },
            { id: 72, nomi: "Artel LED 43''", narxi: 3500000, qolgan: 10, tavsif: "Full HD, Oddiy", variantRasm: "tv_artel.jpg" }
        ]
    },
     { 
        id: 80, 
        nomi: "Televizorlar", 
        rasm: "tv3.jpg", 
        turlar: [
            { id: 31, nomi: "Samsung QLED 55''", narxi: 12000000, qolgan: 4, tavsif: "4K, Smart TV", variantRasm: " tv.jpg" },
            { id: 32, nomi: "Artel LED 43''", narxi: 3500000, qolgan: 10, tavsif: "Full HD, Oddiy", variantRasm: "tv_artel.jpg" }
        ]
    },
];

// --- Global o'zgaruvchilar va DOM elementlari ---
let savat = []; 

const mahsulotlarList = document.getElementById('mahsulotlar-list');
const savatItemsList = document.getElementById('savat-items');
const jamiNarxElement = document.getElementById('jami-narx');
const savatOchishBtn = document.getElementById('savat-ochish-btn');
const savatSection = document.getElementById('savat');
const buyurtmaForma = document.getElementById('buyurtma-form');

const modal = document.getElementById('mahsulot-modal');
const modalBody = document.getElementById('modal-body');
const modalSarlavha = document.getElementById('modal-sarlavha');
const yopishBtn = document.querySelector('.yopish-btn');

// --- Funksiyalar ---

/**
 * Asosiy mahsulot guruhlarini sahifaga render qilish
 */
function mahsulotlarniRenderQilish() {
    mahsulotlarList.innerHTML = ''; 

    mahsulotlarOmbori.forEach(guruh => {
        const karta = document.createElement('div');
        karta.className = 'mahsulot-karta'; 
        
        const jamiQolgan = guruh.turlar.reduce((sum, tur) => sum + tur.qolgan, 0);

        karta.innerHTML = `
            <img src="../images/${guruh.rasm}" alt="${guruh.nomi}">
            <h3>${guruh.nomi}</h3>
            <p><strong>Boshlang'ich Narxi:</strong> ${guruh.turlar[0].narxi.toLocaleString('uz-UZ')} UZS dan</p>
            <p class="qolgan-soni">Jami Qolgan: ${jamiQolgan}</p>
            
            <button class="tugma korish-btn" data-id="${guruh.id}">Mahsulotni Ko'rish</button>
        `;

        mahsulotlarList.appendChild(karta);
    });
}

/**
 * Savatni yangilash
 */
function savatniYangilash() {
    savatItemsList.innerHTML = ''; 
    let jamiNarx = 0;

    if (savat.length === 0) {
        savatItemsList.innerHTML = '<li>Savat hozircha bo\'sh.</li>';
        savatOchishBtn.textContent = '🛒 Savat (0)';
    } else {
        savat.forEach(item => {
            const listItem = document.createElement('li');
            listItem.textContent = `${item.nomi} - ${item.soni} dona (Jami: ${(item.narxi * item.soni).toLocaleString('uz-UZ')} UZS)`;
            savatItemsList.appendChild(listItem);
            
            jamiNarx += item.narxi * item.soni;
        });

        savatOchishBtn.textContent = `🛒 Savat (${savat.length})`;
    }

    jamiNarxElement.textContent = jamiNarx.toLocaleString('uz-UZ') + ' UZS';
}

/**
 * Mahsulot variantini savatga qo'shish
 */
function savatgaQoshish(variantId) {
    let mahsulot; 

    // Barcha mahsulot turlari ichidan variantni topish
    mahsulotlarOmbori.forEach(guruh => {
        const topilganVariant = guruh.turlar.find(t => t.id === variantId);
        if (topilganVariant) {
            mahsulot = topilganVariant;
        }
    });

    if (!mahsulot) return alert("Mahsulot topilmadi.");

    if (mahsulot.qolgan > 0) {
        const savatItemIndex = savat.findIndex(item => item.id === mahsulot.id);

        if (savatItemIndex > -1) {
            savat[savatItemIndex].soni++;
        } else {
            savat.push({ 
                id: mahsulot.id, 
                nomi: mahsulot.nomi, 
                narxi: mahsulot.narxi, 
                soni: 1 
            });
        }
        
        // Qolgan sonini kamaytirish va DOM ni yangilash (modal ichida)
        mahsulot.qolgan--;
        // Elementni modal ichida yangilash
        const qolganElement = document.getElementById(`modal-qolgan-${mahsulot.id}`);
        if(qolganElement) qolganElement.textContent = `Qolgan: ${mahsulot.qolgan}`;
        
        if (mahsulot.qolgan === 0) {
            const btn = document.querySelector(`.modal-kontent button[data-variant-id="${mahsulot.id}"]`);
            if (btn) {
                btn.setAttribute('disabled', 'true');
                btn.textContent = 'Sotilgan';
            }
        }
        
        savatniYangilash(); 
        alert(`${mahsulot.nomi} savatga qo'shildi!`);
    } else {
        alert('Ushbu mahsulot zaxirada qolmadi!');
    }
}

/**
 * Tanlangan guruh mahsulot variantlarini modalda ko'rsatish
 * (Variantning alohida rasmini ishlatish uchun yangilandi)
 */
function modalniOchish(guruhId) {
    const guruh = mahsulotlarOmbori.find(g => g.id === guruhId);

    if (!guruh) return;

    modalSarlavha.textContent = guruh.nomi + " Turlari";
    modalBody.innerHTML = ''; 

    guruh.turlar.forEach(tur => {
        const karta = document.createElement('div');
        karta.className = 'mahsulot-karta'; 
        
        // Har bir variant uchun alohida rasm (variantRasm) ishlatiladi
        karta.innerHTML = `
            <img src="../images/${tur.variantRasm}" alt="${tur.nomi}"> 
            <h4>${tur.nomi}</h4>
            <p>${tur.tavsif}</p>
            <p><strong>Narxi:</strong> ${tur.narxi.toLocaleString('uz-UZ')} UZS</p>
            <p class="qolgan-soni" id="modal-qolgan-${tur.id}">Qolgan: ${tur.qolgan}</p>
            
            <button class="tugma qoshish-btn" 
                    data-variant-id="${tur.id}"
                    ${tur.qolgan === 0 ? 'disabled' : ''}>
                ${tur.qolgan === 0 ? 'Sotilgan' : 'Savatga qo\'shish'}
            </button>
        `;

        modalBody.appendChild(karta);
    });

    modal.classList.remove('yashirin');
    modal.classList.add('ochiq');
}


// --- Eventlar bilan ishlash (click, submit, change) ---

// 1. Asosiy mahsulotlar ro'yxatiga event tinglovchi qo'shish (Mahsulotni Ko'rish)
mahsulotlarList.addEventListener('click', function(e) {
    if (e.target.classList.contains('korish-btn')) {
        const guruhId = parseInt(e.target.dataset.id); 
        modalniOchish(guruhId);
    }
});

// 2. Modal ichidagi tugmaga event tinglovchi qo'shish (Variantni Savatga qo'shish)
modal.addEventListener('click', function(e) {
    if (e.target.classList.contains('qoshish-btn')) {
        const variantId = parseInt(e.target.dataset.variantId);
        savatgaQoshish(variantId);
    }
});

// 3. Modalni yopish (Yopish tugmasi)
yopishBtn.addEventListener('click', function() {
    modal.classList.add('yashirin');
    modal.classList.remove('ochiq');
});

// 4. Modalni yopish (Oynadan tashqarini bosganda)
window.addEventListener('click', function(e) {
    if (e.target === modal) {
        modal.classList.add('yashirin');
        modal.classList.remove('ochiq');
    }
});

// 5. Savatni ochish/yopish 
savatOchishBtn.addEventListener('click', function() {
    savatSection.classList.toggle('yashirin');
});

// 6. Formani tekshirish va yuborish
buyurtmaForma.addEventListener('submit', function(e) {
    e.preventDefault(); 
    
    const ism = document.getElementById('ism').value.trim();
    const telefon = document.getElementById('telefon').value.trim();
    const viloyat = document.getElementById('viloyat').value; 

    if (savat.length === 0) {
        alert("Iltimos, avval savatga mahsulot qo'shing!");
        return;
    }

    if (ism === "" || telefon === "" || viloyat === "") {
        alert("Iltimos, barcha maydonlarni to'ldiring!");
        return;
    }

    if (!/^[0-9]{9,}$/.test(telefon)) { 
         alert("Telefon raqami noto'g'ri kiritilgan. Kamida 9 raqam bo'lishi kerak.");
         return;
    }

    console.log("--- BUYURTMA QABUL QILINDI ---");
    alert(`Rahmat, ${ism}! Buyurtmangiz qabul qilindi. Tez orada siz bilan bog'lanamiz.`);

    savat = [];
    savatniYangilash();
    buyurtmaForma.reset();
    savatSection.classList.add('yashirin'); 
});

// --- Dasturni ishga tushirish ---
document.addEventListener('DOMContentLoaded', () => {
    mahsulotlarniRenderQilish(); 
    savatniYangilash(); 
});