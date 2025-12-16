let savat = [];

const savatItemsList = document.getElementById('savat-items');
const jamiNarxElement = document.getElementById('jami-narx');
const savatOchishBtn = document.getElementById('savat-ochish-btn');
const savatSection = document.getElementById('savat');
const buyurtmaForma = document.getElementById('buyurtma-form');

const modal = document.getElementById('mahsulot-modal');
const modalBody = document.getElementById('modal-body');
const modalSarlavha = document.getElementById('modal-sarlavha');
const yopishBtn = document.querySelector('.yopish-btn');


const muzlatgichlarJSON = {
    "id": 10,
    "nomi": "Muzlatgichlar",
    "turlar": [
        {
            "id": 11,
            "nomi": "Samsung RB30",
            "narxi": 7500000,
            "qolgan": 5,
            "tavsif": "Inverter, No Frost, 300L",
            "variantRasm": "x7.jpg"
        },
        {
            "id": 12,
            "nomi": "LG B507",
            "narxi": 8900000,
            "qolgan": 2,
            "tavsif": "DoorCooling+, Wi-Fi boshqaruv",
            "variantRasm": "x2.jpg"
        },
        {
            "id": 13,
            "nomi": "Artel HD400",
            "narxi": 5500000,
            "qolgan": 8,
            "tavsif": "Oddiy, katta sig'im",
            "variantRasm": "x6.jpg"
        }
    ]
};
const mahsulotlarOmbori = [
   muzlatgichlarJSON,

    
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
            { id: 31, nomi: "Samsung QLED 55''", narxi: 12000000, qolgan: 4, tavsif: "4K, Smart TV", variantRasm: "tv.jpg" },
            { id: 32, nomi: "Artel LED 43''", narxi: 3500000, qolgan: 10, tavsif: "Full HD, Oddiy", variantRasm: "tv1.jpg" }
        ]
    },
     { 
        id: 40, 
        nomi: "Notebook", 
        rasm: "komp4.jpg", 
        turlar: [
            { id: 41, nomi: "Chuwi HeroBook Plus''", narxi: 2499000, qolgan: 4, tavsif: "Windows, Intel Celeron N4020", variantRasm: "kompp.jpg" },
            { id: 42, nomi: "Acer''", narxi: 4500000, qolgan: 10, tavsif: "Winwods, Intel Celeron N12305", variantRasm: "komp4.jpg" },
             { id: 43, nomi: "Chuwi GemiBook Plus''", narxi: 2799000, qolgan: 10, tavsif: "Windows, Intel N100", variantRasm: "komp.jpg" }
        ]
    },
     { 
        id:50, 
        nomi: "Telefonlar", 
        rasm: "tel4.jpg", 
        turlar: [
            { id: 51, nomi: "Iphone 13 Pro''", narxi: 7000000, qolgan: 4, tavsif: "4K, Smart TV", variantRasm: "tel9.jpg" },
            { id: 52, nomi: "Honor 400 Lite''", narxi: 3950000, qolgan: 10, tavsif: "Xotira: 8/256 GB", variantRasm: "tel7.jpg" },
            { id: 53, nomi: "Iphone 15 Pro Max''", narxi: 9000000, qolgan: 10, tavsif: "Xotira:8/256 GB", variantRasm: "tel10.jpg" }
       
        ]
    },
     
];



// --- Savatni yangilash ---
function savatniYangilash() {
    savatItemsList.innerHTML = '';
    let jamiNarx = 0;
    if (savat.length === 0) {
        savatItemsList.innerHTML = '<li>Savat hozircha bo\'sh.</li>';
        savatOchishBtn.textContent = '🛒 Savat (0)';
    } else {
        savat.forEach(item => {
            const li = document.createElement('li');
            li.textContent = `${item.nomi} - ${item.soni} dona (Jami: ${(item.narxi*item.soni).toLocaleString('uz-UZ')} UZS)`;
            savatItemsList.appendChild(li);
            jamiNarx += item.narxi * item.soni;
        });
        savatOchishBtn.textContent = `🛒 Savat (${savat.length})`;
    }
    jamiNarxElement.textContent = jamiNarx.toLocaleString('uz-UZ') + ' UZS';
}

// --- Modalni ochish ---
function modalniOchish(guruhId){
    const guruh = mahsulotlarOmbori.find(g => g.id === guruhId);
    if(!guruh) return;
    modalSarlavha.textContent = guruh.nomi + " Turlari";
    modalBody.innerHTML = '';
    guruh.turlar.forEach(tur=>{
        const karta = document.createElement('div');
        karta.className='mahsulot-karta';
        karta.innerHTML=`
            <img src="images/${tur.variantRasm}" alt="${tur.nomi}">
            <h4>${tur.nomi}</h4>
            <p>${tur.tavsif}</p>
            <p><strong>Narxi:</strong> ${tur.narxi.toLocaleString('uz-UZ')} UZS</p>
            <p class="qolgan-soni" id="modal-qolgan-${tur.id}">Qolgan: ${tur.qolgan}</p>
            <button class="tugma qoshish-btn" data-variant-id="${tur.id}" ${tur.qolgan===0?'disabled':''}>${tur.qolgan===0?'Sotilgan':'Savatga qo\'shish'}</button>
        `;
        modalBody.appendChild(karta);
    });
    modal.classList.remove('yashirin');
    modal.classList.add('ochiq');
}

// --- Eventlar ---
document.querySelectorAll('.korish-btn').forEach(btn=>{
    btn.addEventListener('click',()=>modalniOchish(parseInt(btn.dataset.id)));
});

modal.addEventListener('click', e=>{
    if(e.target.classList.contains('qoshish-btn')){
        const id = parseInt(e.target.dataset.variantId);
        let mahsulot;
        mahsulotlarOmbori.forEach(g=>{
            const t=g.turlar.find(tur=>tur.id===id);
            if(t) mahsulot=t;
        });
        if(!mahsulot) return alert('Mahsulot topilmadi');
        if(mahsulot.qolgan>0){
            let idx = savat.findIndex(i=>i.id===mahsulot.id);
            if(idx>-1) savat[idx].soni++;
            else savat.push({id:mahsulot.id, nomi:mahsulot.nomi, narxi:mahsulot.narxi, soni:1});
            mahsulot.qolgan--;
            const el=document.getElementById(`modal-qolgan-${mahsulot.id}`);
            if(el) el.textContent=`Qolgan: ${mahsulot.qolgan}`;
            if(mahsulot.qolgan===0) e.target.disabled=true;
            savatniYangilash();
            alert(`${mahsulot.nomi} savatga qo'shildi!`);
        } else alert('Ushbu mahsulot zaxirada qolmadi!');
    }
});

yopishBtn.addEventListener('click',()=>{modal.classList.add('yashirin'); modal.classList.remove('ochiq');});
window.addEventListener('click', e=>{if(e.target===modal){modal.classList.add('yashirin'); modal.classList.remove('ochiq');}});
savatOchishBtn.addEventListener('click',()=>savatSection.classList.toggle('yashirin'));

buyurtmaForma.addEventListener('submit', e=>{
    e.preventDefault();
    const ism=document.getElementById('ism').value.trim();
    const telefon=document.getElementById('telefon').value.trim();
    const viloyat=document.getElementById('viloyat').value;
    if(savat.length===0){alert("Iltimos, avval savatga mahsulot qo'shing!"); return;}
    if(ism===""||telefon===""||viloyat===""){alert("Iltimos, barcha maydonlarni to'ldiring!"); return;}
    if(!/^[0-9]{9,}$/.test(telefon)){alert("Telefon raqami noto'g'ri kiritilgan. Kamida 9 raqam bo'lishi kerak."); return;}
    alert(`Rahmat, ${ism}! Buyurtmangiz qabul qilindi. Tez orada siz bilan bog'lanamiz.`);
    savat=[]; savatniYangilash(); buyurtmaForma.reset(); savatSection.classList.add('yashirin');
});
