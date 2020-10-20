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
        
        const input = document.createElement('input');
        input.className = "cart-quantity-input";
        input.id = "userinput";
        input.textContent = element.elementQuantity;
        input.setAttribute("type", "number");
        input.setAttribute("value", element.elementQuantity);
        myDivEnfantB.append(input);
        
        const add = document.createElement ('button');
        add.className = "btn btn-primary";
        add.setAttribute("type", "button");
        // add.setAttribute("onclick", "readvalue");
        add.textContent = "ADD" ;
        myDivEnfantB.append(add);
        const AddBtn = document.createElement ('button');             // Add to basket Button 
        AddBtn.className = "btn btn-outline-secondary";
        myDivEnfantB.append(AddBtn);

        const IconImgAdd = document.createElement ('i');          //Add to basket Button - icon
        IconImgAdd.className = "fas fa-plus";
        AddBtn.append(IconImgAdd);


        const RemoveBtn = document.createElement ('button');       //Remove from basket Button
        RemoveBtn.className = "retirer btn btn-outline-secondary";
        myDivEnfantB.append(RemoveBtn);

        const IconImgRemove = document.createElement ('i');      //Remove from basket Button - icon
        IconImgRemove.className = "far fa-minus-square";
        RemoveBtn.append(IconImgRemove);

        displayText.append(firstDiv);

        add.addEventListener('click', function() {
          
          let basket = JSON.parse(localStorage.getItem('basket'));   // Parse data from localstorage
          
          let elementimageUrl = element.imageUrl;                     // element.imageUrl is a part of backend data received from JSON file
          let elementId = element._id;                                // element._id is a part of backend data received from JSON file
          let elementName = element.name;                             // element.name is a part of backend data received from JSON file
          let elementPrice = element.price;                          // element.price is a part of backend data received from JSON file
          let add2 = document.getElementById("userinput").value;     // add2 varriable get value from label
          let yInt = Number.parseInt(add2);                         // parse label value to Integer number
          console.log(yInt);                                        // console log to check number
          let elementQuantity = yInt;                               // assign label value to elementQuantity
          console.log(elementQuantity);

          if (!basket) {
            basket = [];
          }
        
          // find the index of the item if already in basket
          const itemIndexInBasket = basket.findIndex(basketEntry => basketEntry.elementId === elementId);
          if (itemIndexInBasket !== -1) {
            basket[itemIndexInBasket].elementQuantity++;
          } else {
            basket.push({elementId, elementName, elementPrice, elementQuantity, elementimageUrl});    // Push not existing data to localstorage
          } 
          localStorage.setItem('basket', JSON.stringify(basket));
        })

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
    });
