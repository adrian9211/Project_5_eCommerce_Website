const basket = JSON.parse(localStorage.getItem('basket'));


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