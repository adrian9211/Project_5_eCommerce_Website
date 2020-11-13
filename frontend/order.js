const basket = JSON.parse(localStorage.getItem('basket'));                              // Geting access to local storage
const orderConfirmation = JSON.parse(sessionStorage.getItem("orderConfirmation"));      // Global variable -access from any part of the code - functions etc...

var sum = 0;                                                                            // Declaration variable to use outside function

basket.forEach(element => {
    element.elementId
    element.elementId
    var price2 = element.elementQuantity*element.elementPrice;
    sum += price2;                                                                      // calculate total price
});

let section = document.getElementById('confirmation');
let div = document.createElement('div');
div.innerHTML =
    '<h3>Thank you for your order!</h3>' +
    '<p>This is number of your order : <span>' + orderConfirmation.orderId + '</span></p>' +    // Display confirmation ID from backend
    '<p>We prepare your order. You can track your order with this number.</p>' +
    '<p>Total price to pay is : <b>' + sum / 100 + '$' + '</b></p>'                     // Display sum variable as a total price
    section.appendChild(div);
    localStorage.clear();                                                               // clear localStorage after succesfull order