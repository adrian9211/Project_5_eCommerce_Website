const basket = JSON.parse(localStorage.getItem('basket'));                              // Global variable -access from any part of the code - functions etc...

if (!localStorage.getItem('basket')) { 
    localStorage.setItem('basket', JSON.stringify([]))                                  // JSON.stringify method converts a JavaScript object or value to a JSON string
};
        const displayText = document.getElementById('name22');
        basket.forEach(element  => {
        element.elementId
        
        const firstDiv = document.createElement('div');
        firstDiv.className = "cart-row";        // New div for each camera

        const card = document.createElement('div');
        card.className = "cart-item cart-column";
        firstDiv.append(card);

        const img = document.createElement('img');         //Create and display element IMG
        img.className = "cart-item-image";
        img.src = element.elementimageUrl;
        card.append(img);

        const name2 = document.createElement('span');               //Name of camera- from json file
        name2.className = "cart-item-title";
        name2.textContent = element.elementName;
        card.append(name2);
        
        const price = document.createElement('div');               //Name of camera- from json file
        price.setAttribute("class", "cart-price cart-column");
        price.textContent = element.elementPrice / 100 + " $";
        firstDiv.append(price);

        const myDivEnfantB = document.createElement('div');
        myDivEnfantB.className = "cart-quantity cart-column";
        firstDiv.append(myDivEnfantB);

        const RemoveBtn = document.createElement ('button');       //Remove from basket Button
        RemoveBtn.setAttribute("onClick", "window.location.reload();"); 
        RemoveBtn.className = "retirer btn btn-outline-secondary";
        myDivEnfantB.append(RemoveBtn);

        const IconImgRemove = document.createElement ('i');      //Remove from basket Button - icon
        IconImgRemove.className = "far fa-minus-square";
        RemoveBtn.append(IconImgRemove);

        const input = document.createElement('input');
        input.className = "cart-quantity-input";
        input.id = "userinput";
        input.textContent = element.elementQuantity;
        input.setAttribute("type", "number");
        input.setAttribute("value", element.elementQuantity);
        myDivEnfantB.append(input);
        
        const AddBtn = document.createElement ('button'); 
        AddBtn.setAttribute("onClick", "window.location.reload();");            // Add to basket Button
        AddBtn.className = "btn btn-outline-secondary";
        myDivEnfantB.append(AddBtn);

        const IconImgAdd = document.createElement ('i');          //Add to basket Button - icon
        IconImgAdd.className = "fas fa-plus";
        AddBtn.append(IconImgAdd);

        displayText.append(firstDiv);

        let elementimageUrl = element.imageUrl;                     // element.imageUrl is a part of backend data received from JSON file
        let elementId = element._id;                                // element._id is a part of backend data received from JSON file
        let elementName = element.name;                             // element.name is a part of backend data received from JSON file
        let elementPrice = element.price;                           // element.price is a part of backend data received from JSON file
        let elementQuantity = 1;

    AddBtn.addEventListener('click', function (add) {               //Add item to when click AddBtn localStorage
      add.preventDefault() // Avoid default action.
    
      let elementimageUrl = element.imageUrl;                     // element.imageUrl is a part of backend data received from JSON file
      let elementId = element._id;                                // element._id is a part of backend data received from JSON file
      let elementName = element.name;                             // element.name is a part of backend data received from JSON file
      let elementPrice = element.price;                           // element.price is a part of backend data received from JSON file
      let elementQuantity = 1;
    
      if (!basket) {
        basket = [];
      }
    
      // find the index of the item if already in basket
      const itemIndexInBasket = basket.findIndex(basketEntry => basketEntry.elementId === element.elementId);
      if (itemIndexInBasket !== -1) {
        basket[itemIndexInBasket].elementQuantity++;
      } else {
        basket.push({elementId, elementName, elementPrice, elementQuantity, elementimageUrl});    // Push not existing data to localstorage
      } 
      localStorage.setItem('basket', JSON.stringify(basket));
    });

    RemoveBtn.addEventListener('click', function (remove) {                 //Remove item from localStorage
      remove.preventDefault() // Avoid default action.

          basket.forEach(product => {
              if (product.elementQuantity >= 1) {
                  product.elementQuantity--
              }
          });
          console.log('removed')
      localStorage.setItem('basket', JSON.stringify(basket));

  });

     //  Code block responsible for concating prices for each product -- START --

     let sum = 0;

     basket.forEach(element => {
         element.elementId
         let price2 = element.elementQuantity*element.elementPrice;
         sum += price2;
         let displayPrice = document.createElement('p');
         document.getElementsByClassName('cart-total-price')[0].innerText = '$' + (sum /100);
     })
     //  Code block responsible for concating prices for each product -- END -- 
  })

  // Form validation start

  const form = document.getElementById('form');
  const name = document.getElementById('inputName');
  const surname = document.getElementById('inputSurname');
  const email = document.getElementById('inputEmail');
  const address = document.getElementById('inputAddress');
  const city = document.getElementById('inputCity');

  form.addEventListener('submit', submitButton => {
    submitButton.preventDefault();
    checkInputs();
  });

  function checkInputs() {
    const nameValue = name.value.trim();
    const surnameValue = surname.value.trim();
    const emailValue = email.value.trim();
    const addressValue = address.value.trim();
    const cityValue = city.value.trim();
    
    if(nameValue === '') {
      setErrorFor(name, 'Name cannot be blank');
    } else {
      setSuccessFor(name);
    }
    if(surnameValue === '') {
      setErrorFor(surname, 'Surname cannot be blank');
    } else {
      setSuccessFor(surname);
    }
    
    if(emailValue === '') {
      setErrorFor(email, 'Email cannot be blank');
    } else if (!isEmail(emailValue)) {
      setErrorFor(email, 'Not a valid email');
    } else {
      setSuccessFor(email);
    }
    
    if(address === '') {
      setErrorFor(address, 'Address cannot be blank');
    } else {
      setSuccessFor(address);
    }

    if(city === '') {
      setErrorFor(city, 'City cannot be blank');
    } else {
      setSuccessFor(city);
    } 
  }

  function setErrorFor(input, message) {
    const formControl2 = input.parentElement;
    const small = formControl2.querySelector('small');
    formControl2.className = 'form-control2 error';
    small.innerText = message;
  }

  function setSuccessFor(input) {
    const formControl2 = input.parentElement;
    formControl2.className = 'form-control2 success';
  }

  function isEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
  }
// Form validation end

//  Order confirmation start
  function postForm(data) {                                                 // PostForm function to send form data as a string
  return new Promise((resolve, reject) => {
      let request = new XMLHttpRequest();
      request.open("POST", "http://localhost:3000/api/cameras/order");      // URL adress
      request.setRequestHeader("Content-Type", "application/json");
      request.send(JSON.stringify(data));                                   // deliver data object
      request.onreadystatechange = function () {
          if (this.readyState === 4 && this.status == 201) {
              let response = JSON.parse(this.responseText);
              console.log(response);
              resolve(response);
          }
      }
  })
};

document.getElementById('form').addEventListener("submit", function (order) { // access to form data by ID and assign action to SUBMIT button
  order.preventDefault();


let contact = {                                                           // contact Object with data from ORDER form
  firstName: form.firstName.value,
  lastName: form.lastName.value,
  email: form.email.value,
  address: form.address.value,
  city: form.city.value,
}

let data = {                                                              // data object created to send data to server - as a respond will get an unique ID and order number
  contact: contact,                                                       // contact data string
  products: basket.map(element => element.elementId),                     // ID array
}

postForm(data).then(function (response) {                                 // received data send to confirmation.html document
  location.href = "confirmation.html";
  let orderConfirmation = JSON.stringify(response);
  sessionStorage.setItem("orderConfirmation", orderConfirmation);
});

});

//  Order confirmation end
