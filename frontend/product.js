if (!localStorage.getItem('basket')) { 
    localStorage.setItem('basket', JSON.stringify([]))  
};
const basket = JSON.parse(localStorage.getItem('basket'));
fetch('http://localhost:3000/api/cameras')       // Fetch function get acces to database and json file

.then(response => response.json())       /*?*/  // Responsse from json file
.then(response => {
    console.log(response); /*?*/

    const products = document.getElementById('productsContainer');      //Get acces to DOM element - produtsContainer classs
    response.forEach(element => {                                   // response for each element of DIV
        const firstDiv = document.createElement('div');
        firstDiv.className = "article col-lg-4 col-md-6 mb-4";        // New div for each camera

        const card = document.createElement('div');
        card.className = "card h-100"
        firstDiv.append(card);

        const img = document.createElement('img');         //Create and display element IMG
        img.className = "card-img-top";
        img.src = element.imageUrl;
        img.innerHTML = ` alt="${element.name}" src="${element.imageUrl}"`;
        card.append(img);

        const secondDiv = document.createElement('div');       //Div for all item information : name, price and description
        card.append(secondDiv);

        const name = document.createElement('h3');               //Name of camera- from json file
        name.textContent = element.name;
        secondDiv.append(name);

        const price = document.createElement('h4');              //Price- from json file
        price.textContent = element.price / 100 + " £";          // Devide price by 100
        secondDiv.append(price);

        const avalaible = document.createElement('h3');         //Avalaible lenses  (h3)
        avalaible.textContent = " Avalaible lenses";
        secondDiv.append(avalaible);

        const lenses = document.createElement('h3');            //Lenses- from json file
        lenses.textContent = element.lenses;
        secondDiv.append(lenses);

        const description= document.createElement('P');       //Description- from json file
        description.textContent = element.description;
        secondDiv.append(description);


        const myDivEnfantB = document.createElement('div');
        myDivEnfantB.className = "d-flex justify-content-around align-items-end";
        secondDiv.append(myDivEnfantB);

        const AddBtn = document.createElement ('button');             // Add to basket Button 
        AddBtn.className = "btn btn-outline-secondary";
        myDivEnfantB.append(AddBtn);

        const IconImgAdd = document.createElement ('i');          //Add to basket Button - icon
        IconImgAdd.className = "fas fa-plus";
        AddBtn.append(IconImgAdd);

        const btn = document.createElement('button');           //Display more details Button
        btn.className = "btn btn-outline-info ml-auto mr-auto";
        const next = document.createElement('a');
        const link = document.createTextNode('Display more details'); // Display more details Button - text inside Btn
        myDivEnfantB.append(btn);

        next.appendChild(link);  
        next.href = "/frontend/product.html?id=" + element._id;  // Link to single item page
        btn.append(next);

        const RemoveBtn = document.createElement ('button');       //Remove from basket Button
        RemoveBtn.className = "retirer btn btn-outline-secondary";
        myDivEnfantB.append(RemoveBtn);

        const IconImgRemove = document.createElement ('i');      //Remove from basket Button - icon
        IconImgRemove.className = "far fa-minus-square";
        RemoveBtn.append(IconImgRemove);

         // Dropdown menu Start

         const dropdownDiv = document.createElement('div');
         dropdownDiv.className = "dropdown";
         myDivEnfantB.append(dropdownDiv);
         
         const qtyBtn = document.createElement('a');
         qtyBtn.textContent = "Quantity";
         qtyBtn.setAttribute("class", "btn btn-secondary dropdown-toggle");
         qtyBtn.setAttribute("type", "button");
         qtyBtn.setAttribute("id", "dropdownMenuButton");
         qtyBtn.setAttribute("data-toggle", "dropdown");
         qtyBtn.setAttribute("aria-haspopup", "true");
         qtyBtn.setAttribute("aria-expanded", "false");
         dropdownDiv.append(qtyBtn);
 
         const qtyDiv = document.createElement('div');       //Div for all item information : name, price and description
         qtyDiv.className = 'dropdown-menu'
         qtyDiv.setAttribute("aria-labelledby", "dropdownMenuButton")
         qtyDiv.setAttribute("id", "value");
        //  qtyDiv.setAttribute("onchange", "getSelectValue(this)")
         dropdownDiv.append(qtyDiv);
 
         const aList1 = document.createElement('a');
         aList1.setAttribute("class", "dropdown-item");
         aList1.setAttribute("href", "#");
         aList1.setAttribute("type", "button");
         aList1.setAttribute("value", "1");
         aList1.textContent = "1";
         qtyDiv.append(aList1);
 
         const aList2 = document.createElement('a');
         aList2.setAttribute("class", "dropdown-item");
         aList2.setAttribute("href", "#");
         aList2.setAttribute("type", "button");
         aList2.setAttribute("value", "2");
         aList2.textContent = "2";
         qtyDiv.append(aList2);
 
         const aList3 = document.createElement('a');
         aList3.setAttribute("class", "dropdown-item");
         aList3.setAttribute("href", "#");
         aList3.setAttribute("type", "button");
         aList3.setAttribute("value", "3");
         aList3.textContent = "3";
         qtyDiv.append(aList3);
 
         const aList4 = document.createElement('a');
         aList4.setAttribute("class", "dropdown-item");
         aList4.setAttribute("href", "#");
         aList4.setAttribute("type", "button");
         aList4.setAttribute("value", "4");
         aList4.textContent = "4";
         qtyDiv.append(aList4);
 
         const aList5 = document.createElement('a');
         aList5.setAttribute("class", "dropdown-item");
         aList5.setAttribute("href", "#");
         aList5.setAttribute("type", "button");
         aList5.setAttribute("value", "5");
         aList5.textContent = "5";
         qtyDiv.append(aList5);
 
         const aList6 = document.createElement('a');
         aList6.setAttribute("class", "dropdown-item");
         aList6.setAttribute("href", "#");
         aList6.setAttribute("type", "button");
         aList6.setAttribute("value", "6");
         aList6.textContent = "6";
         qtyDiv.append(aList6);
 
         const aList7 = document.createElement('a');
         aList7.setAttribute("class", "dropdown-item");
         aList7.setAttribute("href", "#");
         aList7.setAttribute("type", "button");
         aList7.setAttribute("value", "7");
         aList7.textContent = "7";
         qtyDiv.append(aList7);

         const aList8 = document.createElement('a');
         aList8.setAttribute("class", "dropdown-item");
         aList8.setAttribute("href", "#");
         aList8.setAttribute("type", "button");
         aList8.setAttribute("value", "9");
         aList8.textContent = "8";
         qtyDiv.append(aList8);
 
         const aList9= document.createElement('a');
         aList9.setAttribute("class", "dropdown-item");
         aList9.setAttribute("href", "#");
         aList9.setAttribute("type", "button");
         aList9.setAttribute("value", "9");
         aList9.textContent = "9";
         qtyDiv.append(aList9);
 
       // Dropdown menu End
        
        products.append(firstDiv);

     


        qtyBtn.addEventListener('click', function getSelectValue(add) {               //Add item to when click AddBtn localStorage
            add.preventDefault() // Avoid default action.
            add.returnValue;
          
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
            const itemIndexInBasket = basket.findIndex(basketEntry => basketEntry.elementId === elementId);
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
    

        
    });
})

.catch(error => alert('Sorry, the server is not responding! Please try again later.'));         // In case of error display alert.