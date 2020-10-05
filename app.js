let quantity = 0;
let quantityInput = document.getElementById("quantity");
let whatsappNumber = "+5515981064484";

function addQuantity() {
  quantity = parseInt(quantityInput.value) + 10;
  quantityInput.value = quantity;
  localStorage.setItem("quantity", quantity);
}

function removeQuantity() {
  if (quantityInput.value >= 10) {
    quantity = parseInt(quantityInput.value) - 10;
    quantityInput.value = quantity;
    localStorage.setItem("quantity", quantity);
  }
}
