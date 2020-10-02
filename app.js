let quantity = 0;
let quantitySpan = document.getElementById("quantity");
let whatsappNumber = "+5515981064484";

function addQuantity() {
  quantity += 10;
  quantitySpan.innerText = quantity;
}

function removeQuantity() {
  if (quantity >= 10) {
    quantity -= 10;
    quantitySpan.innerText = quantity;
  }
}

function buy() {
  if (quantity === 0) return;
  const whatsappMessage = `https://wa.me/${whatsappNumber}?text=Olá eu gostaria de ${quantity} cápsulas!`;
  window.open(encodeURI(whatsappMessage));
}
