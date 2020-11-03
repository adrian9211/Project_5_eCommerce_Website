const orderConfirmation = JSON.parse(sessionStorage.getItem("orderConfirmation")); // Récupération de notre local storage.

let section = document.getElementById('confirmation');
let div = document.createElement('div');
div.innerHTML =
    '<h3>Thank you for your order!</h3>' +
    '<p>This is number of your order : <span id="orderId">' + orderConfirmation.orderId + '</span></p>' +
    '<p id="paddingBottom">We prepare your order. You can track your order with this number.</p>'
section.appendChild(div);