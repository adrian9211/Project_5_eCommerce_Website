

if (!localStorage.getItem('basket')) { 
    localStorage.setItem('basket', JSON.stringify([])) 
}



const url = new URL(window.location.href);
const Params = new URLSearchParams(url.search);  

const elementId = Params.get('id'); 

async function adress(url) {  
    let result = await fetch(url)
    return result.json()
}



adress('http://localhost:3000/api/cameras' + '/' + elementId).then(element => { 
    console.log(element)



    const ourCameras = document.getElementById('ourCameras');
    const name = document.getElementById('name');
    const price = document.getElementById('price');
    const description = document.getElementById('description');
    const lenses = document.getElementById('lenses');

    

    const image = document.createElement('img');
    image.src = element.imageUrl;
    image.setAttribute('width', 800);
    image.innerHTML = ` alt="${element.name}" src="${element.imageUrl}" `;
    ourCameras.append(image);

    
    name.innerHTML = "Camera <br><br>" + element.name + "<hr>";
    price.innerHTML = "Price: " + element.price / 100 + " £" + "<hr>" ;
    description.innerHTML = "<strong>Description : </strong>" + "<br>" + element.description + element.description + element.description + element.description + element.description+ element.description + "<hr>";
    lenses.innerHTML = "Avalaible lenses: <br>" + element.lenses + "<hr>" ;

    const basket = document.getElementById('basket')

    const AddBtn = document.createElement('button');
    AddBtn.className = "btn btn-success btn-sm";
    AddBtn.innerHTML = 'Add to basket';
    basket.append(AddBtn);


    const basket2 = document.getElementById('basket2')
    const basketButton2 = document.createElement('button');
    basketButton2.className = "btn btn-warning btn-sm";
    basketButton2.innerHTML = 'Remove from basket';
    basket2.append(basketButton2);


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
      const itemIndexInBasket = basket.findIndex(basketEntry => basketEntry.elementId === elementId);
      if (itemIndexInBasket !== -1) {
        basket[itemIndexInBasket].elementQuantity++;
      } else {
        basket.push({elementId, elementName, elementPrice, elementQuantity, elementimageUrl});    // Push not existing data to localstorage
      } 
      localStorage.setItem('basket', JSON.stringify(basket));
    });


    

    basketButton2.addEventListener('click', function (remove) {                 //Remove item from localStorage
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

