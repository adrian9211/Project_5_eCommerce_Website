

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

    
    // Dropdown menu for lenses start

    const labelLens = document.createElement('label');
    labelLens.textContent = "Chose your lens : ";
    lenses.append(labelLens);

    const select = document.createElement('select');
    select.setAttribute("name","Lenses");
    select.setAttribute("id", "sel");
    lenses.append(select);

    const avalaibleLenses = document.getElementById('sel');
    
    for (let i = 0; i < element.lenses.length; i++) {     // For loop - dropdown menu 
      const lens = element.lenses[i];
      const mylenses = document.createElement('option');
      select.append(mylenses);
      mylenses.textContent = lens;
      mylenses.value = lens;
    }

    // Dropdown menu for lenses end
    



      // const form = document.createElement('form');
      // form.setAttribute("name","formId");
      // form.className = "avalaibleLenses"
      // lenses.append(form);
      
      // const select = document.createElement('select');
      // select.setAttribute("name","Quantity");
      // select.setAttribute("id", "sel");
      // form.append(select);
      
      // const option0 = document.createElement('option');
      // option0.textContent = 'Select lenses';
      // option0.setAttribute("disabled","");
      // option0.setAttribute("hiden","");
      // option0.setAttribute("selected","");
      // option0.setAttribute("id", "option");
      // option0.setAttribute("value", "0");
      // select.append(option0);
      
      // const option1 = document.createElement('option');
      // option1.setAttribute("value", "");
      // option1.textContent = element.lenses[0];
      // select.append(option1);

      // const option2 = document.createElement('option');
      // option2.setAttribute("value", "");
      // option2.textContent = element.lenses[1];
      // select.append(option2);
      
      // const option3 = document.createElement('option');
      // option3.setAttribute("value", "");
      // option3.textContent = element.lenses[2];
      // select.append(option3);
      

    

    const basket = document.getElementById('basket')

    const AddBtn = document.createElement('button');
    AddBtn.className = "btn btn-success btn-sm";
    AddBtn.innerHTML = 'Add to basket';
    basket.append(AddBtn);


  
    // const basket2 = document.getElementById('basket2')
    // const basketButton2 = document.createElement('button');
    // basketButton2.className = "btn btn-warning btn-sm";
    // basketButton2.innerHTML = 'Remove from basket';
    // basket2.append(basketButton2);


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


    

    // basketButton2.addEventListener('click', function (remove) {                 //Remove item from localStorage
    //     remove.preventDefault() // Avoid default action.

       

    //     const basket = JSON.parse(localStorage.getItem('basket')); 
    //         basket.forEach(product => {
    //             if (product.elementQuantity >= 1) {
    //                 product.elementQuantity--
    //             }
    //         });
    //         console.log('removed')
    //     localStorage.setItem('basket', JSON.stringify(basket));

    // });

});

