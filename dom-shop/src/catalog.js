 /*[
    new Product(1,"Cozy clothes","images/p16jpg.jpg", {
        amount : 150,
        currency : "MDL" }),

    new Product(2,"Casual clothes","images/p2.jpg", {
        amount : 200,
        currency : "MDL" }),
        
    new Product(3,"Baby clothes","images/p3.jpg", {
        amount : 100,
        currency : "MDL" }), 
] */

//HW1 : Why the render function here is called renderCatalog?
// Deoarece apelarea render-ului se face in intermediul clasei in care-i creat, fiind evidenta randarea
// insa in acest caz renderCatalog si catalog, nu au legatura directa, astfel a fost folosita aceasta denumire
// pentru a intelege ce randeaza aceasta .
const renderCatalog = (rootId) => {
let root = document.getElementById(rootId)
root.innerHTML = ``
catalog.forEach(product => root.innerHTML += product.render())

let btns = document.querySelectorAll('.btn-add-to-cart')
for (let i = 0 ; i < btns.length; i++){
    btns.forEach(btn => btn.addEventListener(`click`,cart.addProduct.bind(cart)))
}
}