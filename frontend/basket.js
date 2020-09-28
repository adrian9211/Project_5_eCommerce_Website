console.log(localStorage.basket);


    const basket3 = document.getElementById('basket3')
    const AddBtn = document.createElement('button');
    AddBtn.className = "addToBasketBtn";
    AddBtn.innerHTML = 'Add to basket';
    basket3.append(AddBtn);


    const basket2 = document.getElementById('basket2')
    const RemoveBtn = document.createElement('button');
    RemoveBtn.className = "RemoveFromBasket";
    RemoveBtn.innerHTML = 'Remove from basket';
    basket2.append(RemoveBtn);

    


    AddBtn.addEventListener('click', function (add) {               //Add item to localStorage 
        add.preventDefault() // Avoid default action.

       

        const basket = JSON.parse(localStorage.getItem('basket')); 

        let elementimageUrl = element.imageUrl;
            let elementId = element._id;
            let elementName = element.name;
            let elementPrice = element.price;
            let elementQuantity = 1;
       

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
    
    const basket = JSON.parse(localStorage.getItem('basket'));

   
  

    for (i = 0; i < localStorage.length; i++) {

        text = localStorage.getItem(basket);
        basket.innerHTML;
    }

  

    console.log(basket);

    

    

    const displayText = document.getElementById('name22');
    basket.forEach(element  => {
        if (element.elementQuantity > 0 ) 
        {
        const firstDiv = document.createElement('div');
        firstDiv.className = "article col-lg-4 col-md-6 mb-4";        // New div for each camera

        const card = document.createElement('div');
        card.className = "cart-row";
        firstDiv.append(card);

        const name = document.createElement('h3');               //Name of camera- from json file
        name.textContent = element.elementName;
        firstDiv.append(name);
        const price = document.createElement('h3');               //Name of camera- from json file
        price.textContent = element.elementPrice / 100 + " £";
        firstDiv.append(price);
        const quantity = document.createElement('h3');
        quantity.textContent = "Quantity " + element.elementQuantity;

        const img = document.createElement('img');         //Create and display element IMG
        img.className = "card-img-top";
        img.src = element.elementimageUrl;
        img.innerHTML = ` alt="${element.name}" src="${element.elementimageUrl}"`;


        const myDivEnfantB = document.createElement('div');
        myDivEnfantB.className = "d-flex justify-content-around align-items-end";
        firstDiv.append(myDivEnfantB);

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




        const RemoveBtn = document.createElement ('button');       //Remove from basket Button
        RemoveBtn.className = "retirer btn btn-outline-secondary";
        myDivEnfantB.append(RemoveBtn);

        const IconImgRemove = document.createElement ('i');      //Remove from basket Button - icon
        IconImgRemove.className = "far fa-minus-square";
        RemoveBtn.append(IconImgRemove);

        next.appendChild(link);  
        next.href = "/frontend/product.html?id=" + element._id;  // Link to single item page
        btn.append(next);

        

        card.append(img);
        firstDiv.append(quantity);
        
        displayText.append(firstDiv);
        

        }  
    });


