const products = [
    { id: 1, name: "iphone", color: "black", price: 1200 },
    { id: 2, name: "samsung", color: "white", price: 1000 },
    { id: 3, name: "oneplus", color: "blue", price: 800 },
    { id: 4, name: "google pixel", color: "black", price: 900 },
    { id: 5, name: "sony xperia", color: "red", price: 850 },
    { id: 6, name: "nokia", color: "gray", price: 700 }
];

products.forEach(product => { // ✅ Corrected forEach (lowercase)
    if (product.color === "gold") { 
        console.log(product); // ✅ This will run if there is a product with "gold" color
    }
});






const newProducts = products.filter()