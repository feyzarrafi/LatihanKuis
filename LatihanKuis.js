function changeColor(color) {
    const productCard = document.getElementById("productCard");

    if (color === "black") {
        productCard.style.backgroundColor = "#DDDDDD";
    }
    if (color === "blue") {
        productCard.style.backgroundColor = "#CFE2FF";
    }
    if (color === "cream") {
        productCard.style.backgroundColor = "#F5E6CC";
    }
}

function addToCart() {
    alert("Berhasil ditambahkan ke cart!");
}