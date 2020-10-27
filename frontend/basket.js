console.log(localStorage.basket);
    
const basket = JSON.parse(localStorage.getItem('basket'));

if (!localStorage.getItem('basket')) { 
    localStorage.setItem('basket', JSON.stringify([]))  
};
  console.log(basket);


   

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
        price.textContent = element.elementPrice / 100 + " £";
        firstDiv.append(price);


        const myDivEnfantB = document.createElement('div');
        // myDivEnfantB.textContent = "Quantity " + element.elementQuantity;
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
        
        // const add = document.createElement ('button');
        // add.className = "btn btn-primary";
        // add.setAttribute("type", "button");
        // // add.setAttribute("onclick", "readvalue");
        // add.textContent = "ADD" ;
        // myDivEnfantB.append(add);

        const AddBtn = document.createElement ('button'); 
        AddBtn.setAttribute("onClick", "window.location.reload();");            // Add to basket Button 
        AddBtn.className = "btn btn-outline-secondary";
        myDivEnfantB.append(AddBtn);

        const IconImgAdd = document.createElement ('i');          //Add to basket Button - icon
        IconImgAdd.className = "fas fa-plus";
        AddBtn.append(IconImgAdd);


       
        displayText.append(firstDiv);

      // Dropdown menu Start

      // const form = document.createElement('form');
      // form.setAttribute("name","formId");
      // form.className = "qtyForm"
      // myDivEnfantB.append(form);
      
      // const select = document.createElement('select');
      // select.setAttribute("name","Quantity");
      // select.setAttribute("id", "sel");
      // form.append(select);
      
      // const option0 = document.createElement('option');
      // option0.textContent = 'Select quantity';
      // option0.setAttribute("disabled","");
      // option0.setAttribute("hiden","");
      // option0.setAttribute("selected","");
      // option0.setAttribute("id", "option");
      // option0.setAttribute("value", "0");
      // select.append(option0);
      
      // const option1 = document.createElement('option');
      // option1.setAttribute("value", "1");
      // option1.textContent = '1';
      // option1.setAttribute("id", "option");
      // select.append(option1);
      
      // const option2 = document.createElement('option');
      // option2.setAttribute("value", "2");
      // option2.textContent = '2';
      // option2.setAttribute("id", "option");
      // select.append(option2);
      
      // const option3 = document.createElement('option');
      // option3.setAttribute("value", "3");
      // option3.textContent = '3';
      // option3.setAttribute("id", "option");
      // select.append(option3);
      
      // const option4 = document.createElement('option');
      // option4.setAttribute("value", "4");
      // option4.textContent = '4';
      // option4.setAttribute("id", "option");
      // select.append(option4);
      
      // const option5 = document.createElement('option');
      // option5.setAttribute("value", "5");
      // option5.textContent = '5';
      // option5.setAttribute("id", "option");
      // select.append(option5);
      
      // const option6 = document.createElement('option');
      // option6.setAttribute("value", "6");
      // option6.textContent = '6';
      // option6.setAttribute("id", "option");
      // select.append(option6);
      
      // const option7 = document.createElement('option');
      // option7.setAttribute("value", "7");
      // option7.textContent = '7';
      // option7.setAttribute("id", "option");
      // select.append(option7);
      
      // const option8 = document.createElement('option');
      // option8.setAttribute("value", "8");
      // option8.textContent = '8';
      // option8.setAttribute("id", "option");
      // select.append(option8);
      
      // const option9 = document.createElement('option');
      // option9.setAttribute("value", "9");
      // option9.textContent = '9';
      // option9.setAttribute("id", "option");
      // select.append(option9);
      
      // const label =document.createElement('label');
      // label.setAttribute("id","labelId");
      // form.append(label);

        // Dropdown menu End




        // Select dropdown start

        // select.addEventListener('change', function(add) {               //Add item to when click AddBtn localStorage
        //   add.preventDefault() // Avoid default action.
          
        
        //   let basket = JSON.parse(localStorage.getItem('basket'));   // Parse data from localstorage
        
        //   let elementimageUrl = element.imageUrl;                     // element.imageUrl is a part of backend data received from JSON file
        //   let elementId = element._id;                                // element._id is a part of backend data received from JSON file
        //   let elementName = element.name;                             // element.name is a part of backend data received from JSON file
        //   let elementPrice = element.price;                          // element.price is a part of backend data received from JSON file
          
        //   label.innerText = select.options[select.selectedIndex].value;
        //     // console.log(select.selectedIndex);
        
        
        //     // let y = select.selectedIndex;
        //     // console.log(y);
        
        //     let yInt = Number.parseInt(select.selectedIndex);
        //     // console.log(yInt);
        
        //     let elementQuantity = yInt;
        //     // let yInt = elementQuantity;

        //     console.log(elementQuantity);
        
        
        //   if (!basket) {
        //     basket = [];
        //   }
        
        //   // find the index of the item if already in basket
        //   // const itemIndexInBasket = basket.findIndex(basketEntry => basketEntry.elementId === elementId);
        //   const itemIndexInBasket = basket.findIndex (
        //     (basketEntry) => {
        //       console.log("BE",basketEntry);
        //       console.log("EID",element.elementId);
    
        //         return basketEntry.elementId === element.elementId;
        //       }
        //       );

        //   if (itemIndexInBasket !== -1) {
        //     basket[itemIndexInBasket].elementQuantity++;
        //   } else {
        //     basket.push({elementId, elementName, elementPrice, elementQuantity, elementimageUrl});    // Push not existing data to localstorage
        //   } 
        //   localStorage.setItem('basket', JSON.stringify(basket));
        // });
        
        
        
        
        // Select dropdown end




    //     add.addEventListener('click', function() {
          
    //       let basket = JSON.parse(localStorage.getItem('basket'));   // Parse data from localstorage
          
    //       let elementimageUrl = element.imageUrl;                     // element.imageUrl is a part of backend data received from JSON file
    //       let elementId = element._id;                                // element._id is a part of backend data received from JSON file
    //       let elementName = element.name;                             // element.name is a part of backend data received from JSON file
    //       let elementPrice = element.price;                          // element.price is a part of backend data received from JSON file
    //       let add2 = document.getElementById("userinput").value;     // add2 varriable get value from label
    //       console.log(add2);
    //       let yInt = Number.parseInt(add2);                         // parse label value to Integer number
    //       console.log(yInt);                                        // console log to check number
    //       let elementQuantity = yInt;                               // assign label value to elementQuantity
    //       console.log(elementQuantity);

    //       if (!basket) {
    //         basket = [];
    //       }

    //     //   find the index of the item if already in basket
    //     const itemIndexInBasket = basket.findIndex (
    //     (basketEntry) => {
    //       console.log("BE",basketEntry);
    //       console.log("EID",element.elementId);

    //         return basketEntry.elementId === element.elementId;
    //       }
    //       );

    //       if (itemIndexInBasket !== -1) {
    //         basket[itemIndexInBasket].elementQuantity++;
    //       } else {
    //         basket.push({elementId, elementName, elementPrice, elementQuantity, elementimageUrl});    // Push not existing data to localstorage
    //       } 
    //       localStorage.setItem('basket', JSON.stringify(basket));
    // });








    AddBtn.addEventListener('click', function (add) {               //Add item to when click AddBtn localStorage
      add.preventDefault() // Avoid default action.
    
      let basket = JSON.parse(localStorage.getItem('basket'));   // Parse data from localstorage
    
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

     

      const basket = JSON.parse(localStorage.getItem('basket')); 
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
         console.log(price2 / 100);
         sum += price2;
         let displayPrice = document.createElement('p');
         document.getElementsByClassName('cart-total-price')[0].innerText = '£' + (sum /100);
         console.log(sum /100);
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

    // trim to remove the whitespaces at the end of the string
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
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    formControl.className = 'form-control error';
    small.innerText = message;
  }

  function setSuccessFor(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
  }

  function isEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
  }

  // Form validation start