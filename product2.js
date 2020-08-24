
fetch('http://localhost:3000/api/cameras')          // Fetch function get acces to database and json file

.then(response => response.json())         // Responsse from json file
.then(response => {
    console.log(response);

    const products = document.getElementById('productsContainer');      //Get acces to DOM element - produtsContainer classs
    response.forEach(element => {                                   // response for each element of DIV
        const myDiv = document.createElement('div');
        myDiv.className = "article col-lg-4 col-md-6 mb-4";        // New div for each camera

        const card = document.createElement('div');
        card.className = "card h-100"
        myDiv.append(card);

        const img = document.createElement('img');         //Create and display element IMG
        img.className = "card-img-top";
        img.src = element.imageUrl;
        img.innerHTML = ` alt="${element.name}" src="${element.imageUrl}"`;
        card.append(img);

        const myDivB = document.createElement('div');       //Div for all item information : name, price and description
        card.append(myDivB);

        const nom = document.createElement('h3');       
        myDivB.append(nom);

        const prix = document.createElement('h4');      
        prix.textContent = element.price / 100 +',00'+ " €";
        myDivB.append(prix);

        const descriptText = document.createElement('P');       
        descriptText.textContent = element.description;
        myDivB.append(descriptText);

        products.append(myDiv);
    });
})

.catch(error => alert('Sorry, the server is not responding! Please try again later.'));         // In case of error display alert.