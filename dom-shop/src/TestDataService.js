
class TestDataService {
    products = []
    getTestProducts(count=10){
    
    let xhr = new XMLHttpRequest()
        xhr.open('GET', 'https://fakestoreapi.com/products') 
        
        xhr.onload = () => {
    const data = JSON.parse(xhr.responseText)

    data.forEach(({id, title, image, price}) => {
    const product = new Product(
            id,
            title,
            image,
         {  amount:price,
            currency : "MDL" 
        })
    this.products.push(product)
    })
    renderCatalog("root-catalog")
} 
xhr.send()

return this.products
 } 
}