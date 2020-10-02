let quantity = 0;
let quantityInput = document.getElementById("quantity");
let whatsappNumber = "+5515981064484";

function addQuantity() {
  quantity += 10;
  quantityInput.value = quantity;
}

function removeQuantity() {
  if (quantity >= 10) {
    quantity -= 10;
    quantityInput.value = quantity;
  }
}

const phoneNumberInput = document.querySelector("input#phone-number");

document.querySelector(".buy").addEventListener("click", (event) => {
  event.preventDefault();
  const phoneNumber = phoneNumberInput.value;
  if (quantity === 0) return;
  const whatsappMessage = `https://wa.me/${whatsappNumber}?text=${getMessage(
    quantity,
    phoneNumber
  )}`;
  window.open(encodeURI(whatsappMessage));
});

function getMessage(quantity, phoneNumber) {
  return `
    Date: ${new Date()}
        Italcarb 'K':
            Quantity: *${quantity}*
            Additional Phone Number: *${phoneNumber}*
    `;
}
