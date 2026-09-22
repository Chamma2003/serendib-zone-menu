/* ==========================================================================
   SERENDIB ZONE DIGITAL MENU - JAVASCRIPT APPLICATION LOGIC
   ========================================================================== */

// --- MENU DATASET ---
const menuCategories = [
  { id: "starters", name: "Starters & Bites", icon: "fa-plate-wheat" },
  { id: "kottu-rice", name: "Kottu & Rice", icon: "fa-bowl-rice" },
  { id: "seafood", name: "Seafood Specialties", icon: "fa-fish" },
  { id: "mains", name: "Main Courses", icon: "fa-utensils" },
  { id: "desserts", name: "Signature Desserts", icon: "fa-ice-cream" },
  { id: "beverages", name: "Drinks & Mocktails", icon: "fa-glass-water" }
];

const menuDishes = [
  // Starters
  {
    id: "d1",
    categoryId: "starters",
    name: "Authentic Hopper Platter",
    price: 1200,
    image: "images/hopper_platter.jpg",
    description: "Golden crispy egg hopper with 2 plain hoppers, served alongside fresh red lunu miris sambal and sweet seeni sambol.",
    tags: ["chef", "spicy"],
    spicyLevel: 2,
    isVeg: false,
    ingredients: "Rice flour, coconut milk, fresh egg, chili, red onions"
  },
  {
    id: "d2",
    categoryId: "starters",
    name: "Sri Lankan Devilled Prawns",
    price: 2600,
    image: "images/devilled_prawns.jpg",
    description: "Succulent jumbo prawns wok-tossed in a spicy chili-garlic sauce with capsicum, red onions, and tomato glaze.",
    tags: ["spicy", "seafood", "chef"],
    spicyLevel: 3,
    isVeg: false,
    ingredients: "Jumbo prawns, chili paste, capsicum, banana peppers, tomato sauce"
  },
  {
    id: "d3",
    categoryId: "starters",
    name: "Spiced Mutton Rolls (3 Pcs)",
    price: 1400,
    image: "https://images.unsplash.com/photo-1541544741938-0af808871cc0?auto=format&fit=crop&w=600&q=80",
    description: "Crispy golden fried breaded rolls filled with slow-cooked spiced Sri Lankan mutton mash and potatoes.",
    tags: ["spicy"],
    spicyLevel: 2,
    isVeg: false,
    ingredients: "Mutton curry mash, potato, breadcrumbs, spices"
  },
  {
    id: "d4",
    categoryId: "starters",
    name: "Vegetable Cutlet Platter (4 Pcs)",
    price: 900,
    image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=600&q=80",
    description: "Crispy vegetable & herb croquettes served with spicy Sri Lankan tamarind dip.",
    tags: ["veg"],
    spicyLevel: 1,
    isVeg: true,
    ingredients: "Potatoes, carrots, leeks, curry leaves, tamarind"
  },

  // Kottu & Rice
  {
    id: "d5",
    categoryId: "kottu-rice",
    name: "Gourmet Chicken Cheese Kottu",
    price: 2200,
    image: "images/cheese_kottu.jpg",
    description: "Finely chopped flatbread stir-fried on hot griddle with roasted chicken, fresh eggs, spices, and melted mozzarella cheese.",
    tags: ["chef", "spicy"],
    spicyLevel: 2,
    isVeg: false,
    ingredients: "Roti bread, chicken, egg, mozzarella cheese, onion, chili gravy"
  },
  {
    id: "d6",
    categoryId: "kottu-rice",
    name: "Special Sri Lankan Lamprais",
    price: 2400,
    image: "images/lamprais.jpg",
    description: "Dutch-Burgher style aromatic rice cooked in stock, served inside banana leaf with mixed meat curry, frikkadel meatball, ash plantain, and blachan.",
    tags: ["chef"],
    spicyLevel: 2,
    isVeg: false,
    ingredients: "Banana leaf, short-grain rice, meat curry, eggplant pahi, egg, frikkadel"
  },
  {
    id: "d7",
    categoryId: "kottu-rice",
    name: "Seafood Mixed Kottu Roti",
    price: 2500,
    image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=600&q=80",
    description: "Sizzling kottu chopped with fresh squid, prawns, fish bites, eggs, and rich seafood curry gravy.",
    tags: ["seafood", "spicy"],
    spicyLevel: 3,
    isVeg: false,
    ingredients: "Prawns, squid, fish, roti bread, eggs, leeks"
  },
  {
    id: "d8",
    categoryId: "kottu-rice",
    name: "Vegetable Fried Rice Special",
    price: 1500,
    image: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?auto=format&fit=crop&w=600&q=80",
    description: "Fragrant basmati rice tossed with fresh carrots, sweet corn, spring onions, and roasted cashews.",
    tags: ["veg"],
    spicyLevel: 0,
    isVeg: true,
    ingredients: "Basmati rice, carrots, sweet corn, green peas, cashew nuts"
  },

  // Seafood
  {
    id: "d9",
    categoryId: "seafood",
    name: "Jaffna Spicy Crab Curry",
    price: 3800,
    image: "images/jaffna_crab_curry.jpg",
    description: "Fresh lagoon crab slow-simmered in authentic northern Jaffna roasted spice gravy with drumstick leaves & coconut cream.",
    tags: ["chef", "spicy", "seafood"],
    spicyLevel: 3,
    isVeg: false,
    ingredients: "Fresh lagoon crab, Jaffna curry powder, coconut milk, murunga leaves"
  },
  {
    id: "d10",
    categoryId: "seafood",
    name: "Butter Garlic Fish Steak",
    price: 2700,
    image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=600&q=80",
    description: "Pan-seared sailfish steak basted in garlic lemon butter sauce, served with roasted vegetables.",
    tags: ["seafood"],
    spicyLevel: 1,
    isVeg: false,
    ingredients: "Fresh sailfish steak, garlic, French butter, lemon, rosemary"
  },

  // Mains
  {
    id: "d11",
    categoryId: "mains",
    name: "Traditional Black Pork Curry Set",
    price: 2300,
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=600&q=80",
    description: "Tender pork chunks slow-roasted in dark goraka black pepper spice blend, served with red rice & dhal.",
    tags: ["spicy"],
    spicyLevel: 3,
    isVeg: false,
    ingredients: "Pork, goraka (gamboge), roasted pepper, curry leaves, ginger"
  },
  {
    id: "d12",
    categoryId: "mains",
    name: "Serendib Special Chicken Curry",
    price: 1900,
    image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=600&q=80",
    description: "Rich and creamy Sri Lankan chicken curry spiced with Ceylon cardamom, cinnamon, and coconut cream.",
    tags: ["chef"],
    spicyLevel: 2,
    isVeg: false,
    ingredients: "Chicken, coconut cream, cardamom, lemongrass, garlic"
  },

  // Desserts
  {
    id: "d13",
    categoryId: "desserts",
    name: "Royal Watalappan Pudding",
    price: 850,
    image: "images/watalappan_dessert.jpg",
    description: "Traditional Sri Lankan spiced coconut jaggery custard pudding topped with roasted cashew nuts and kithul treacle.",
    tags: ["chef", "dessert"],
    spicyLevel: 0,
    isVeg: true,
    ingredients: "Pure Kithul jaggery, coconut milk, eggs, nutmeg, cardamom, cashews"
  },
  {
    id: "d14",
    categoryId: "desserts",
    name: "Buffalo Curd with Kithul Treacle",
    price: 750,
    image: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?auto=format&fit=crop&w=600&q=80",
    description: "Authentic thick clay-pot buffalo curd served drizzled with golden pure Kithul palm syrup.",
    tags: ["dessert", "veg"],
    spicyLevel: 0,
    isVeg: true,
    ingredients: "Fresh buffalo curd, pure Kithul treacle"
  },

  // Beverages
  {
    id: "d15",
    categoryId: "beverages",
    name: "Tropical Passion Fruit Mocktail",
    price: 950,
    image: "images/passion_mocktail.jpg",
    description: "Fresh passion fruit pulp shaken with wild mint leaves, lime juice, sparkling soda, and crushed ice.",
    tags: ["chef"],
    spicyLevel: 0,
    isVeg: true,
    ingredients: "Passion fruit pulp, fresh mint, lime, sparkling soda, honey"
  },
  {
    id: "d16",
    categoryId: "beverages",
    name: "Ceylon Spiced Iced Milk Tea",
    price: 650,
    image: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?auto=format&fit=crop&w=600&q=80",
    description: "Chilled premium Ceylon black tea brewed with fresh ginger and cardamom, sweetened with condensed milk.",
    tags: [],
    spicyLevel: 0,
    isVeg: true,
    ingredients: "Ceylon black tea leaves, milk, ginger, cardamom"
  }
];


// --- STATE MANAGEMENT ---
let appState = {
  currentCategory: "starters",
  activeFilter: "all",
  searchQuery: "",
  tableNumber: "1",
  cart: [],
  selectedDishForModal: null,
  modalQty: 1,
  modalSpice: "Medium"
};

// Initialize App on DOM Loaded
document.addEventListener("DOMContentLoaded", () => {
  loadSavedStateAndUrl();
  initCategoryTabs();
  renderMenuItems();
  setupEventListeners();
  updateCartUI();
  initQrGenerator();
});

// Save & Load State
function saveState() {
  localStorage.setItem("serendib_cart", JSON.stringify(appState.cart));
  localStorage.setItem("serendib_table", appState.tableNumber);
}

function loadSavedStateAndUrl() {
  const urlParams = new URLSearchParams(window.location.search);
  const tableParam = urlParams.get('table');

  if (tableParam) {
    appState.tableNumber = tableParam.replace(/^0+/, '');
  } else {
    const savedTable = localStorage.getItem("serendib_table");
    if (savedTable) appState.tableNumber = savedTable;
  }

  updateTableDisplayUI();

  const savedCart = localStorage.getItem("serendib_cart");
  if (savedCart) {
    try { appState.cart = JSON.parse(savedCart); } catch(e) {}
  }
}

function updateTableDisplayUI() {
  const formattedTable = appState.tableNumber.padStart(2, '0');
  const tableLabel = document.getElementById("currentTableLabel");
  const tableSelect = document.getElementById("tableSelectInput");

  if (tableLabel) tableLabel.innerText = `Table #${formattedTable}`;
  if (tableSelect) tableSelect.value = appState.tableNumber;
}


// --- CATEGORY & MENU RENDERING ---
function initCategoryTabs() {
  const categoryScroll = document.getElementById("categoryTabs");
  categoryScroll.innerHTML = menuCategories.map((cat, idx) => `
    <button class="category-tab ${idx === 0 ? 'active' : ''}" data-catid="${cat.id}">
      <i class="fa-solid ${cat.icon}"></i> ${cat.name}
    </button>
  `).join("");
}

function renderMenuItems() {
  const container = document.getElementById("menuContainer");
  const noResults = document.getElementById("noResults");
  container.innerHTML = "";

  let filteredDishes = menuDishes.filter(dish => {
    if (appState.searchQuery) {
      const q = appState.searchQuery.toLowerCase();
      const matchName = dish.name.toLowerCase().includes(q);
      const matchDesc = dish.description.toLowerCase().includes(q);
      if (!matchName && !matchDesc) return false;
    }

    if (appState.activeFilter === "chef" && !dish.tags.includes("chef")) return false;
    if (appState.activeFilter === "spicy" && !dish.tags.includes("spicy")) return false;
    if (appState.activeFilter === "veg" && !dish.isVeg) return false;
    if (appState.activeFilter === "seafood" && !dish.tags.includes("seafood")) return false;
    if (appState.activeFilter === "dessert" && !dish.tags.includes("dessert")) return false;

    return true;
  });

  if (filteredDishes.length === 0) {
    noResults.style.display = "block";
    return;
  }
  noResults.style.display = "none";

  menuCategories.forEach(cat => {
    const catDishes = filteredDishes.filter(d => d.categoryId === cat.id);
    if (catDishes.length === 0) return;

    const categoryBlock = document.createElement("div");
    categoryBlock.className = "menu-category-block";
    categoryBlock.id = `cat-section-${cat.id}`;

    categoryBlock.innerHTML = `
      <h3 class="category-header-title">
        <i class="fa-solid ${cat.icon}"></i> ${cat.name}
      </h3>
      <div class="menu-grid">
        ${catDishes.map(dish => renderDishCardHTML(dish)).join("")}
      </div>
    `;

    container.appendChild(categoryBlock);
  });
}

function renderDishCardHTML(dish) {
  let badgeHTML = "";
  if (dish.tags.includes("chef")) badgeHTML = `<span class="badge-tag badge-chef">Special</span>`;
  else if (dish.tags.includes("spicy")) badgeHTML = `<span class="badge-tag badge-spicy">Spicy 🌶️</span>`;

  let metaHTML = "";
  if (dish.isVeg) metaHTML += `<span class="tag-icon">🌱 Veg</span>`;
  if (dish.spicyLevel > 0) metaHTML += `<span class="tag-icon">🌶️ x${dish.spicyLevel}</span>`;

  return `
    <div class="menu-card" onclick="openDishModal('${dish.id}')">
      <div class="menu-card-img-wrap">
        <img src="${dish.image}" alt="${dish.name}" loading="lazy" onerror="this.src='https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=600&q=80'">
        ${badgeHTML}
      </div>
      <div class="menu-card-content">
        <div>
          <div class="menu-card-title-row">
            <h4 class="dish-name">${dish.name}</h4>
            <span class="dish-price">Rs. ${dish.price.toLocaleString()}</span>
          </div>
          <p class="dish-desc">${dish.description}</p>
        </div>
        <div class="menu-card-footer">
          <div class="meta-tags">${metaHTML}</div>
          <button class="add-btn" onclick="quickAddDish(event, '${dish.id}')" title="Quick Add">
            <i class="fa-solid fa-plus"></i>
          </button>
        </div>
      </div>
    </div>
  `;
}


// --- DISH MODAL CONTROLLER ---
function openDishModal(dishId) {
  const dish = menuDishes.find(d => d.id === dishId);
  if (!dish) return;

  appState.selectedDishForModal = dish;
  appState.modalQty = 1;
  appState.modalSpice = dish.spicyLevel > 0 ? "Medium" : "Mild";

  document.getElementById("modalDishImage").src = dish.image;
  document.getElementById("modalDishTitle").innerText = dish.name;
  document.getElementById("modalDishPrice").innerText = `Rs. ${dish.price.toLocaleString()}`;
  document.getElementById("modalDishDesc").innerText = dish.description;
  document.getElementById("modalQtyDisplay").innerText = appState.modalQty;
  document.getElementById("specialNotes").value = "";

  const badge = document.getElementById("modalDishBadge");
  if (dish.tags.includes("chef")) {
    badge.innerText = "Chef's Special";
    badge.style.display = "inline-block";
  } else if (dish.tags.includes("spicy")) {
    badge.innerText = "Spicy Signature";
    badge.style.display = "inline-block";
  } else {
    badge.style.display = "none";
  }

  const tagsRow = document.getElementById("modalDishTags");
  tagsRow.innerHTML = `
    ${dish.isVeg ? '<span class="tag-icon">🌱 Vegetarian</span>' : ''}
    ${dish.spicyLevel > 0 ? `<span class="tag-icon">🌶️ Spice Level ${dish.spicyLevel}/3</span>` : ''}
    <span class="tag-icon">⏱️ Prep 15-20m</span>
  `;

  const spiceGroup = document.getElementById("spiceOptionGroup");
  if (dish.spicyLevel === 0) {
    spiceGroup.style.display = "none";
  } else {
    spiceGroup.style.display = "block";
    updateSpiceChipsUI();
  }

  updateModalTotalPrice();
  document.getElementById("dishModal").classList.add("active");
}

function closeDishModal() {
  document.getElementById("dishModal").classList.remove("active");
}

function updateSpiceChipsUI() {
  const chips = document.querySelectorAll(".spice-chip");
  chips.forEach(chip => {
    if (chip.dataset.spice === appState.modalSpice) chip.classList.add("active");
    else chip.classList.remove("active");
  });
}

function updateModalTotalPrice() {
  if (!appState.selectedDishForModal) return;
  const total = appState.selectedDishForModal.price * appState.modalQty;
  document.getElementById("modalAddPrice").innerText = `Rs. ${total.toLocaleString()}`;
}

function quickAddDish(e, dishId) {
  e.stopPropagation();
  const dish = menuDishes.find(d => d.id === dishId);
  if (!dish) return;

  addToCart(dish, 1, "Medium", "");
  showToast(`Added 1x ${dish.name} to order!`);
}


// --- CART & ORDER DRAWER LOGIC ---
function addToCart(dish, qty, spice, notes) {
  const existingIndex = appState.cart.findIndex(item => item.dish.id === dish.id && item.spice === spice);
  if (existingIndex > -1) {
    appState.cart[existingIndex].qty += qty;
  } else {
    appState.cart.push({ dish, qty, spice, notes });
  }
  saveState();
  updateCartUI();
}

function updateCartQty(index, change) {
  if (appState.cart[index]) {
    appState.cart[index].qty += change;
    if (appState.cart[index].qty <= 0) {
      appState.cart.splice(index, 1);
    }
  }
  saveState();
  updateCartUI();
  renderCartDrawerItems();
}

function updateCartUI() {
  const totalItems = appState.cart.reduce((sum, i) => sum + i.qty, 0);
  const subtotal = appState.cart.reduce((sum, i) => sum + (i.dish.price * i.qty), 0);
  const serviceCharge = Math.round(subtotal * 0.10);
  const grandTotal = subtotal + serviceCharge;

  const bar = document.getElementById("floatingCartBar");
  if (totalItems > 0) {
    bar.style.display = "flex";
    document.getElementById("cartBadgeCount").innerText = totalItems;
    document.getElementById("cartItemsText").innerText = `${totalItems} ${totalItems === 1 ? 'item' : 'items'} selected`;
    document.getElementById("cartTotalPrice").innerText = `Rs. ${grandTotal.toLocaleString()}`;
  } else {
    bar.style.display = "none";
  }

  document.getElementById("billSubtotal").innerText = `Rs. ${subtotal.toLocaleString()}`;
  document.getElementById("billServiceCharge").innerText = `Rs. ${serviceCharge.toLocaleString()}`;
  document.getElementById("billGrandTotal").innerText = `Rs. ${grandTotal.toLocaleString()}`;
}

function openCartDrawer() {
  renderCartDrawerItems();
  document.getElementById("cartDrawer").classList.add("active");
}

function closeCartDrawer() {
  document.getElementById("cartDrawer").classList.remove("active");
}

function renderCartDrawerItems() {
  const list = document.getElementById("cartItemsList");
  const emptyView = document.getElementById("emptyCartView");
  const summaryCard = document.getElementById("billSummaryCard");

  if (appState.cart.length === 0) {
    list.innerHTML = "";
    emptyView.style.display = "block";
    summaryCard.style.display = "none";
    return;
  }

  emptyView.style.display = "none";
  summaryCard.style.display = "block";

  list.innerHTML = appState.cart.map((item, idx) => `
    <div class="cart-item-row">
      <div class="cart-item-info">
        <h4>${item.dish.name}</h4>
        <p>Rs. ${item.dish.price.toLocaleString()} ${item.spice ? `• ${item.spice}` : ''} ${item.notes ? `• "${item.notes}"` : ''}</p>
      </div>
      <div class="cart-item-right">
        <span class="cart-item-price">Rs. ${(item.dish.price * item.qty).toLocaleString()}</span>
        <div class="qty-control">
          <button class="qty-btn" onclick="updateCartQty(${idx}, -1)"><i class="fa-solid fa-minus"></i></button>
          <span class="qty-display">${item.qty}</span>
          <button class="qty-btn" onclick="updateCartQty(${idx}, 1)"><i class="fa-solid fa-plus"></i></button>
        </div>
      </div>
    </div>
  `).join("");
}


// --- EVENT LISTENERS ---
function setupEventListeners() {
  const searchInput = document.getElementById("searchInput");
  const clearSearchBtn = document.getElementById("clearSearchBtn");

  searchInput.addEventListener("input", (e) => {
    appState.searchQuery = e.target.value;
    clearSearchBtn.style.display = appState.searchQuery ? "block" : "none";
    renderMenuItems();
  });

  clearSearchBtn.addEventListener("click", () => {
    searchInput.value = "";
    appState.searchQuery = "";
    clearSearchBtn.style.display = "none";
    renderMenuItems();
  });

  document.getElementById("resetSearchBtn").addEventListener("click", () => {
    searchInput.value = "";
    appState.searchQuery = "";
    appState.activeFilter = "all";
    clearSearchBtn.style.display = "none";
    updateFilterPillsUI();
    renderMenuItems();
  });

  document.querySelectorAll(".filter-chip").forEach(chip => {
    chip.addEventListener("click", () => {
      appState.activeFilter = chip.dataset.filter;
      updateFilterPillsUI();
      renderMenuItems();
    });
  });

  document.getElementById("categoryTabs").addEventListener("click", (e) => {
    const tab = e.target.closest(".category-tab");
    if (!tab) return;

    document.querySelectorAll(".category-tab").forEach(t => t.classList.remove("active"));
    tab.classList.add("active");

    const catId = tab.dataset.catid;
    const targetBlock = document.getElementById(`cat-section-${catId}`);
    if (targetBlock) {
      targetBlock.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });

  document.getElementById("tableSelectInput").addEventListener("change", (e) => {
    appState.tableNumber = e.target.value;
    updateTableDisplayUI();
    saveState();
    showToast(`Table set to Table #${appState.tableNumber}`);
  });

  document.getElementById("changeTableBtn").addEventListener("click", () => {
    openCartDrawer();
  });

  document.getElementById("closeDishModalBtn").addEventListener("click", closeDishModal);
  document.getElementById("dishModal").addEventListener("click", (e) => {
    if (e.target.id === "dishModal") closeDishModal();
  });

  document.getElementById("modalQtyMinus").addEventListener("click", () => {
    if (appState.modalQty > 1) {
      appState.modalQty--;
      document.getElementById("modalQtyDisplay").innerText = appState.modalQty;
      updateModalTotalPrice();
    }
  });

  document.getElementById("modalQtyPlus").addEventListener("click", () => {
    appState.modalQty++;
    document.getElementById("modalQtyDisplay").innerText = appState.modalQty;
    updateModalTotalPrice();
  });

  document.querySelectorAll(".spice-chip").forEach(chip => {
    chip.addEventListener("click", () => {
      appState.modalSpice = chip.dataset.spice;
      updateSpiceChipsUI();
    });
  });

  document.getElementById("modalAddToCartBtn").addEventListener("click", () => {
    if (!appState.selectedDishForModal) return;
    const notes = document.getElementById("specialNotes").value;
    addToCart(appState.selectedDishForModal, appState.modalQty, appState.modalSpice, notes);
    closeDishModal();
    showToast(`Added ${appState.modalQty}x ${appState.selectedDishForModal.name}!`);
  });

  document.getElementById("openCartDrawerBtn").addEventListener("click", openCartDrawer);
  document.getElementById("closeCartDrawerBtn").addEventListener("click", closeCartDrawer);
  document.getElementById("cartDrawer").addEventListener("click", (e) => {
    if (e.target.id === "cartDrawer") closeCartDrawer();
  });

  document.getElementById("quickWaiterBtn").addEventListener("click", callWaiter);
  document.getElementById("drawerCallWaiterBtn").addEventListener("click", callWaiter);
  document.getElementById("sendWhatsAppBtn").addEventListener("click", sendOrderWhatsApp);
  document.getElementById("submitKitchenOrderBtn").addEventListener("click", submitKitchenOrder);
}

function updateFilterPillsUI() {
  document.querySelectorAll(".filter-chip").forEach(chip => {
    if (chip.dataset.filter === appState.activeFilter) chip.classList.add("active");
    else chip.classList.remove("active");
  });
}


// --- INTERACTIVE ACTIONS (CALL WAITER, WHATSAPP, KITCHEN) ---
function callWaiter() {
  showToast(`🔔 Waiter notified for Table #${appState.tableNumber}! Response expected < 2 mins.`);
}

function sendOrderWhatsApp() {
  if (appState.cart.length === 0) {
    showToast("Please add items to your order first!");
    return;
  }

  let text = `*SERENDIB ZONE - NEW TABLE ORDER*\n`;
  text += `📍 *Table:* #${appState.tableNumber}\n`;
  text += `⏰ *Time:* ${new Date().toLocaleTimeString()}\n\n`;
  text += `*ITEMS:* \n`;

  let subtotal = 0;
  appState.cart.forEach((item, idx) => {
    const itemTotal = item.dish.price * item.qty;
    subtotal += itemTotal;
    text += `${idx + 1}. ${item.qty}x ${item.dish.name} (Rs. ${itemTotal.toLocaleString()})\n`;
    if (item.spice) text += `   - Spice: ${item.spice}\n`;
    if (item.notes) text += `   - Notes: ${item.notes}\n`;
  });

  const service = Math.round(subtotal * 0.10);
  const total = subtotal + service;

  text += `\n*Subtotal:* Rs. ${subtotal.toLocaleString()}`;
  text += `\n*Service Charge (10%):* Rs. ${service.toLocaleString()}`;
  text += `\n*ESTIMATED TOTAL:* Rs. ${total.toLocaleString()}\n`;
  text += `\nPlease confirm our table order! Thank you.`;

  const phone = "94776606533";
  const url = `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
  window.open(url, "_blank");
}

function submitKitchenOrder() {
  if (appState.cart.length === 0) {
    showToast("Your cart is empty!");
    return;
  }

  const orderNum = Math.floor(1000 + Math.random() * 9000);
  showToast(`✅ Order #SZ-${orderNum} sent to kitchen for Table #${appState.tableNumber}!`);
  
  appState.cart = [];
  saveState();
  updateCartUI();
  closeCartDrawer();
}


// --- SINGLE UNIVERSAL QR CODE GENERATOR ---
let qrInstance = null;

function initQrGenerator() {
  const openBtn = document.getElementById("openQrModalBtn");
  const closeBtn = document.getElementById("closeQrModalBtn");
  const modal = document.getElementById("qrModal");

  openBtn.addEventListener("click", () => {
    const urlInput = document.getElementById("qrTargetUrl");
    if (!urlInput.value) {
      const cleanUrl = window.location.origin + window.location.pathname;
      urlInput.value = cleanUrl;
    }
    generateUniversalQrCard();
    modal.classList.add("active");
  });

  closeBtn.addEventListener("click", () => {
    modal.classList.remove("active");
  });

  modal.addEventListener("click", (e) => {
    if (e.target.id === "qrModal") modal.classList.remove("active");
  });

  document.getElementById("generateUniversalQrBtn").addEventListener("click", generateUniversalQrCard);
  document.getElementById("printUniversalQrBtn").addEventListener("click", () => {
    window.print();
  });
}

function generateUniversalQrCard() {
  const targetUrl = document.getElementById("qrTargetUrl").value.trim() || window.location.origin + window.location.pathname;

  const qrBox = document.getElementById("universalQrcode");
  qrBox.innerHTML = ""; // Clear existing

  qrInstance = new QRCode(qrBox, {
    text: targetUrl,
    width: 170,
    height: 170,
    colorDark: "#000000",
    colorLight: "#ffffff",
    correctLevel: QRCode.CorrectLevel.H
  });

  showToast("Generated 1 Universal QR Code for all tables!");
}


// --- TOAST NOTIFICATION UTILITY ---
function showToast(msg) {
  const toast = document.getElementById("toast");
  const toastMsg = document.getElementById("toastMsg");
  toastMsg.innerText = msg;

  toast.classList.add("active");
  setTimeout(() => {
    toast.classList.remove("active");
  }, 3200);
}
