console.log(localStorage.basket);


    const basket3 = document.getElementById('basket3')
    const basketButton = document.createElement('button');
    basketButton.className = "addToBasketBtn";
    basketButton.innerHTML = 'Add to basket';
    basket3.append(basketButton);


    const basket2 = document.getElementById('basket2')
    const basketButton2 = document.createElement('button');
    basketButton2.className = "RemoveFromBasket";
    basketButton2.innerHTML = 'Remove from basket';
    basket2.append(basketButton2);


    basketButton.addEventListener('click', function (add) {                 //Add item to localStorage
        add.preventDefault() // Avoid default action.

        const basket = JSON.parse(localStorage.getItem('basket')); 

            let elementId = element._id;
            let elementName = element.name;
            let elementPrice = element.price;
            let elementQuantity = 1;
            basket.push({elementId, elementName, elementPrice, elementQuantity});

            basket.forEach(product => {
                if (product.elementId === elementId) {
                    product.elementQuantity++
                }
            });
            console.log('ok')
        localStorage.setItem('basket', JSON.stringify(basket));

    });

    basketButton2.addEventListener('click', function (remove) {                 //Remove item from localStorage
        remove.preventDefault() // Avoid default action.


        const basket = JSON.parse(localStorage.getItem('basket')); 

            let elementId = element._id;
            let elementName = element.name;
            let elementPrice = element.price;
            let elementQuantity = 1;
            basket.push({elementId, elementName, elementPrice, elementQuantity});

            basket.forEach(product => {
                if (product.elementId === elementId) {
                    product.elementQuantity++
                }
            });
            console.log('removed')


        localStorage.removeItem('basket', JSON.stringify(basket));

    });

    
    const basket = JSON.parse(localStorage.getItem('basket'));

   
  

    for (i = 0; i < localStorage.length; i++) {

        text = localStorage.getItem(basket);
        basket.push
        basket.innerHTML; 
    }

  

    console.log(basket);

    const displayText = document.getElementById('name22');
    basket.forEach(element => {
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
        card.append(img);
        firstDiv.append(quantity);
        
        displayText.append(firstDiv);
        

        
    });


