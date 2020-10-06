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

         const form = document.createElement('form');
         form.setAttribute("name","formId");
         myDivEnfantB.append(form);
 
         const select = document.createElement('select');
         select.setAttribute("name","Quantity");
         select.setAttribute("id", "sel");
         form.append(select);
 
         const option0 = document.createElement('option');
         option0.textContent = '0';
         option0.setAttribute("disabled","");
         option0.setAttribute("hiden","");
         option0.setAttribute("selected","");
         option0.setAttribute("id", "option");
         option0.setAttribute("value", "0");
         select.append(option0);
 
         const option1 = document.createElement('option');
         option1.setAttribute("value", "1");
         option1.textContent = '1';
         option1.setAttribute("id", "option");
         select.append(option1);
 
         const option2 = document.createElement('option');
         option2.setAttribute("value", "2");
         option2.textContent = '2';
         option2.setAttribute("id", "option");
         select.append(option2);
 
         const option3 = document.createElement('option');
         option3.setAttribute("value", "3");
         option3.textContent = '3';
         option3.setAttribute("id", "option");
         select.append(option3);
 
         const option4 = document.createElement('option');
         option4.setAttribute("value", "4");
         option4.textContent = '4';
         option4.setAttribute("id", "option");
         select.append(option4);
 
         const option5 = document.createElement('option');
         option5.setAttribute("value", "5");
         option5.textContent = '5';
         option5.setAttribute("id", "option");
         select.append(option5);
 
         const option6 = document.createElement('option');
         option6.setAttribute("value", "6");
         option6.textContent = '6';
         option6.setAttribute("id", "option");
         select.append(option6);
 
         const option7 = document.createElement('option');
         option7.setAttribute("value", "7");
         option7.textContent = '7';
         option7.setAttribute("id", "option");
         select.append(option7);
 
         const option8 = document.createElement('option');
         option8.setAttribute("value", "8");
         option8.textContent = '8';
         option8.setAttribute("id", "option");
         select.append(option8);
 
         const option9 = document.createElement('option');
         option9.setAttribute("value", "9");
         option9.textContent = '9';
         option9.setAttribute("id", "option");
         select.append(option9);
 
         const label =document.createElement('label');
         label.setAttribute("id","labelId");
         form.append(label);
         
       // Dropdown menu End
        
        products.append(firstDiv);

        


        select.addEventListener('change', function(add) {               //Add item to when click AddBtn localStorage
            add.preventDefault() // Avoid default action.
            
          
            let basket = JSON.parse(localStorage.getItem('basket'));   // Parse data from localstorage
          
            let elementimageUrl = element.imageUrl;                     // element.imageUrl is a part of backend data received from JSON file
            let elementId = element._id;                                // element._id is a part of backend data received from JSON file
            let elementName = element.name;                             // element.name is a part of backend data received from JSON file
            let elementPrice = element.price;                          // element.price is a part of backend data received from JSON file
            let elementQuantity = 1;

            label.innerText = select.options[select.selectedIndex].value;
              console.log(select.selectedIndex);

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