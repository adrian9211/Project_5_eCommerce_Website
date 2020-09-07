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




        const RemoveBtn = document.createElement ('button');       //Remove from basket Button
        RemoveBtn.className = "retirer btn btn-outline-secondary";
        myDivEnfantB.append(RemoveBtn);

        const IconImgRemove = document.createElement ('i');      //Remove from basket Button - icon
        IconImgRemove.className = "far fa-minus-square";
        RemoveBtn.append(IconImgRemove);

        next.appendChild(link);  
        next.href = "/frontend/product.html?id=" + element._id;  // Link to single item page
        btn.append(next);

        products.append(firstDiv);

        AddBtn.addEventListener('click', function (add) {               //Add item to localStorage 
            add.preventDefault() // Avoid default action.
    
           
    
            const basket = JSON.parse(localStorage.getItem('basket')); 
    
            let elementimageUrl = element.imageUrl;
                let elementId = element._id;
                let elementName = element.name;
                let elementPrice = element.price;
                let elementQuantity = 1;
                basket.push({elementId, elementName, elementPrice, elementQuantity, elementimageUrl});
           
                basket.forEach(product => {
                    if (product.elementId === elementId) {
                        product.elementQuantity++
                    }
                });
                console.log('ok')
            
    
            localStorage.setItem('basket', JSON.stringify(basket));
    
        });



        RemoveBtn.addEventListener('click', function (remove) {             //Remove item from localStorage
            remove.preventDefault() // Avoid default action.
    
           
    
            const basket = JSON.parse(localStorage.getItem('basket')); 
    
            let elementimageUrl = element.imageUrl;
                let elementId = element._id;
                let elementName = element.name;
                let elementPrice = element.price;
                let elementQuantity = 1;
                basket.push({elementId, elementName, elementPrice, elementQuantity, elementimageUrl});
           
                basket.forEach(product => {
                    if (product.elementId === elementId) {
                        product.elementQuantity++
                    }
                });
                console.log('removed')
            
    
            localStorage.removeItem('basket', JSON.stringify(basket));
    
        });

        
    });
})

.catch(error => alert('Sorry, the server is not responding! Please try again later.'));         // In case of error display alert.

/*?*/