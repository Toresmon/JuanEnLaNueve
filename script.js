const secciones = [
  {
    id: 'especialidades',
    items: [
      { name: "Bife de chorizo", desc: "Con pesto de rúcula, nueces y papas a la crema", price: "$15499", image: "https://cuk-it.com/wp-content/uploads/2024/08/bife-chori-reduccion-ig-4-819x1024.webp" },
      { name: "Bondiola", desc: "Con chutney de zanahoria y cítricos, con batatas fritas", price: "$10899", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4dHpH6-HEzPCyWGLnbWowV1XaFRE47ymp9g&s" },
      { name: "Entraña al provenzal", desc: "Con papas españolas", price: "$13499", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTD9x7nsR0NNx1d8ATSQBrVE29z6DzqQsZa4A&s" },
      { name: "Wok de vegetales", desc: "Con arroz yamani, más pollo o cerdo, salsa de soja y semillas", price: "$9499", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHjzXSqPvKdkfUaXXGHfOhzwEG0BurBMIpZg&s" },
      { name: "Brochette de mariscos", desc: "Con salsa de yogur y cremoso de calabaza", price: "$16999", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmSnwOC1luCrTcFiDRqpqhzp2oFPOMS3dVGg&s" },
      { name: "Rabas", desc: "Con fritas y alioli", price: "$17499", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTJmdQWxlf8Q8uCjojxP--S6eT3m1COOA5Bg&s" },
      { name: "Ñoquis de papa y queso", desc: "Con salsa boloñesa, filetto, mixta o crema", price: "$7899", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQL2O2cgen0GXznuTnDp10iFGya5Mb-aOy-gg&s" },
      { name: "Menu del día", desc: "Consultar opción", price: "$6999", image: "/images/MenuDia.png"},
      { name: "Empanada criolla", desc: "De carne cortada a cuchillo", price: "$1699", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMt_i9HMQpxFHTPR4fpvkWG-LTQxybAxO1fw&s" },
      { name: "Wrap de pollo y vegetales", desc: "Con alioli y queso, con papas rusticas", price: "$7899", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfMzzo7pocBOONlxDf-KclmBccQYk2LpD0ew&s" },
      { name: "Pollo al curry", desc: "Con arroz yamani, coco, menta y limon", price: "$9499", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScAta8lTVBDGu6pNTqgtS68kBvkWZbclrRFw&s" },
      { name: "Menu ejecutivo", desc: "Menu del dia + bebida sin alcohol + café (consumo en el local)", price: "$10499", image: "/images/MenuEjecutivo.png" }
    ]
  },
  {
    id: 'pasteleria',
    items: [
      { name: "Budin de limón", desc: "", price: "$2499", image: "https://resizer.glanacion.com/resizer/v2/budin-de-limon-facil-y-MVABUQJ4TJEYDM45JXAME4NN3I.jpg?auth=3cb8ecc14d2534b0d1a9ef6a6e5ca6cfd0dd14c17174a9204b8b198d2159850f&width=768&height=511&quality=70&smart=true" },
      { name: "Cuadrados", desc: "Coco y dulce de leche, pastafrola o brownie" , price: "$2999", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmcCc4CoRYrp0WijoB0gxzI6XxkVIxxRozQg&s" },
      { name: "Rogel", desc:"crocante masa con dulce de leche y merengue" , price: "$4799", image: "https://www.coques.com.ar/wp-content/uploads/2023/06/Torta-Rogel.jpg" },
      { name: "Marquise con frutos rojos", desc:"Brownie con dulce de leche, merengue y salsa de chocolate" , price: "$26499", image: "https://img-global.cpcdn.com/recipes/f253ef837f6c8312/400x400cq70/photo.jpg" },
      { name: "Medialunas de manteca", desc: "", price: "$2499", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxBl23EUih6l3SDALBEeq0VjbU52Iewyw_iQ&s" },
      { name: "Criollos de hojaldre x2", desc: "", price: "$1899", image: "https://dcdn-us.mitiendanube.com/stores/001/127/737/products/img_3788-82a0a6c9498f03066316966931797004-640-0.jpg" },
      { name: "Tostado", desc: "De jamon y queso, con papas", price: "$3899", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuNYmIwG3M77K-MxRjeQB5xpcniwcd7xTzyQ&s" },
    ]
  },
  {
    id: 'cafeteria',
    items: [
      { name: "Café pocillo", desc: "", price: "$2199", image: "https://www.kosiuko.com/media/catalog/product/2/8/2828011199tr_3_1.jpg?optimize=low&fit=bounds&height=2298&width=1536" },
      { name: "Café jarrito", desc: "", price: "$2599", image: "https://live.staticflickr.com/4019/4518134103_0d54ea203f_b.jpg" },
      { name: "Café grande", desc: "", price: "$2999", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7ze7VN7BMT-Hpou8QsU2weihzuZb2hOFCdg&s" },
      { name: "Te", desc: "", price: "$2199", image: "https://www.grupobonacorsi.com.ar/wp-content/uploads/2020/09/te.jpg" },
      { name: "Chico 180ml", desc: "para llevar", price: "$1999", image: "https://previews.123rf.com/images/victorprilepa/victorprilepa1909/victorprilepa190900008/130802760-taza-de-comida-para-llevar-aislada-para-caf%C3%A9-t%C3%A9-en-la-mano-de-un-chico-con-una-gorra-negra-sobre.jpg" },
      { name: "Grande 240ml", desc: "para llevar", price: "$2799", image: "https://emprendedores.es/wp-content/uploads/istock-973008980-e1623998677489-1024x575.jpeg" },
      { name: "Te 240ml", desc: "para llevar", price: "$1799", image: "https://cafe24.poxo.com/ec01/mallyuwa/KaOIZoGb2F1F5b/VN+yDTiCKAZ9pjjF+no0beI3RfRq7uLt2+85vZTFYS+QFZgZE+B1DHtLZZETZUFStG2MvyA==/_/web/product/big/202308/5f318fb107e44bea5c159c4b1b61a4e7.jpg" },
    ]
  },
  {
    id: 'bebidas',
    items: [
      { name: "Gaseosa", desc: "lata 354ml", price: "$2299", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCt-05IetDCq5E8TqoMlSEB7MEv_fsx-dFVQ&s" },
      { name: "Agua saborizada", desc: "500ml", price: "$2899", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdXJl5HMhi0IXXN03pBcjXK3cQnBpIQ2Po_w&s" },
      { name: "Cerveza Andes", desc: "lata 473ml", price: "$3899", image: "https://arcordiezb2c.vteximg.com.br/arquivos/ids/162098/Cerveza-Rubia-Andes-Lata-473-Cc-1-2729.jpg?v=637474589953600000" },
      { name: "Copa de vino", desc: "consultar opciones", price: "$2999", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQplHdonrIJHl5B6jahnKEpJOEIN1XcZb7vRQ&s" },
      { name: "Agua", desc: "c/s gas 500ml", price: "$2299", image: "https://statics.dinoonline.com.ar/imagenes/full_600x600_ma/3040341_f.jpg" },
      { name: "Exprimido de naranja", desc: "", price: "$2499", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGkk2LMfTw03QLndvvOyd9mQJSy9xY1q-oMQ&s" },
    ]
  }
];

const cardsPerPage = 4;
const pageStates = {};

function renderCards(sectionId) {
  const section = secciones.find(s => s.id === sectionId);
  const container = document.getElementById(`card-container-${sectionId}`);
  const page = pageStates[sectionId] || 1;
  const start = (page - 1) * cardsPerPage;
  const end = start + cardsPerPage;

  container.innerHTML = '';

  section.items.slice(start, end).forEach(item => {
    const card = document.createElement('div');
    card.className = `
      group relative rounded-xl overflow-hidden shadow-lg
      bg-white border border-gray-200 transform transition duration-300
      hover:scale-105 hover:shadow-2xl animate-fadeInUp
    `;

    card.innerHTML = `
      <img src="${item.image}" alt="${item.name}" class="w-full h-52 object-cover transition-transform duration-300 group-hover:scale-110" />
      
      <div class="absolute inset-0 bg-black bg-opacity-60 flex flex-col items-center justify-center px-4 opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out">
        <p class="text-white text-xl font-bold mb-1 text-center">${item.name}</p>
        <p class="text-white text-sm mb-1 text-center">${item.desc}</p>
        <p class="text-yellow-300 text-base font-semibold text-center mb-2">${item.price}</p>
      </div>
    `;

    container.appendChild(card);
  });

  renderPagination(sectionId);
}




function renderPagination(sectionId) {
  const section = secciones.find(s => s.id === sectionId);
  const pagination = document.getElementById(`pagination-${sectionId}`);
  const totalPages = Math.ceil(section.items.length / cardsPerPage);
  const currentPage = pageStates[sectionId] || 1;

  pagination.innerHTML = '';
  for (let i = 1; i <= totalPages; i++) {
    const button = document.createElement('button');
    button.className = 'px-4 py-2 rounded font-semibold';
    button.textContent = i;
    if (i === currentPage) {
      button.style.backgroundColor = '#f4a340';
      button.style.color = 'white';
    } else {
      button.style.backgroundColor = '#e5e7eb';
      button.style.color = '#000';
    }
    button.addEventListener('click', () => {
      pageStates[sectionId] = i;
      renderCards(sectionId);
    });
    pagination.appendChild(button);
  }
}

secciones.forEach(s => {
  pageStates[s.id] = 1;
  renderCards(s.id);
});

const toggleBtn = document.getElementById('menu-toggle');
const menu = document.getElementById('menu');

toggleBtn.addEventListener('click', () => {
  menu.classList.toggle('hidden');
});

