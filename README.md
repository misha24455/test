# test
``` javascript
class Product {
    imageLink; 
    productName;
    ProductPrise;

    constructor(link,name,prise){
        this.imageLink = link;
        this.productName = name;
        this.ProductPrise = prise;
        let card = document.createElement('div');
        card.innerHTML =
        `<img src="${this.imageLink}">
        <h3>${this.productName}</h3>
        <h4>${this.ProductPrise}</h4>
        <button>Купить</button>
        `
        document.body.append(card);
    }

}
```
