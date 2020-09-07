

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

    const basketButton = document.createElement('button');
    basketButton.className = "addToBasketBtn";
    basketButton.innerHTML = 'Add to basket';
    basket.append(basketButton);


    const basket2 = document.getElementById('basket2')
    const basketButton2 = document.createElement('button');
    basketButton2.className = "RemoveFromBasket";
    basketButton2.innerHTML = 'Remove from basket';
    basket2.append(basketButton2);


    basketButton.addEventListener('click', function (add) {                 //Add item to localStorage
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

    basketButton2.addEventListener('click', function (remove) {                 //Remove item from localStorage
        remove.preventDefault() // Avoid default action.

       

        const basket = JSON.parse(localStorage.getItem('basket')); 

            let elementimageUrl = element.imageUrl;
            let elementId = element._id;
            let elementName = element.name;
            let elementPrice = element.price;
            let elementQuantity = 0;
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

