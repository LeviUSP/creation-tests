let whatsappNumber = "+5515981064484";

const quantity = localStorage.getItem("quantity");
document.querySelector("#cart-quantity").value = quantity || 0;

document.querySelector(".contact").addEventListener("click", (event) => {
  event.preventDefault();
  if (quantity === 0) return;
  const information = getInputValues();
  const whatsappMessage = `https://wa.me/${whatsappNumber}?text=${getMessage(
    information
  )}`;
  window.open(encodeURI(whatsappMessage));
});

function getInputValues() {
  return {
    company: document.querySelector("#company").value,
    name: document.querySelector("#name").value,
    nameExtra: document.querySelector("#name-extra").value,
    phoneNumberExtra: document.querySelector("#phone-number-extra").value,
    quantity,
  };
}

function getMessage({ company, name, nameExtra, phoneNumberExtra, quantity }) {
  return `
      Date: ${new Date()}
        I'm *${name}*
        My colleague is *${nameExtra}*
            with number: *${phoneNumberExtra}*
        Company: *${company}*
        Products: 
            Italcarb 'K': *${quantity}*  
      `;
}
