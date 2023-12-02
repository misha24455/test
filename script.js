class Product {
    imageLink; 
    productName;
    ProductPrise;

    constructor(link,name,prise){
        this.imageLink = link;
        this.productName = name;
        this.ProductPrise = prise;
        card.className = "card";
        let card = document.createElement('div');
        card.innerHTML ='card';
        `<img src="${this.imageLink}">
        <h3>${this.productName}</h3>
        <h4>${this.ProductPrise}</h4>
        <button>Купить</button>
        `
        document.body.append(card);
    }

}

new Product('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-mIFOhjgO7j--mFJnC4idDrSFWV7Vzm_uo06fHkA&s','nmae','199');
