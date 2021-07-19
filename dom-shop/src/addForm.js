let catalog = []
let id = 1

let imageSrc = null

function addFormSubmit(e) {
    e.preventDefault()
    let name = document.querySelector('#productName').value.trim()
    let price = document.querySelector('#productPrice')
    let alert = document.querySelector('#alert')


    if (isValidName(name) && imageSrc && price) {
        catalog.push(new Product(id++, nameProduct, imageSrc, price))
        localStorage.setItem("Catalog", JSON.stringify(catalog))

        resetFields(e);
    }else{
        if(!alert.children.length){
            displayAlert()
        }
    }
}
 const resetFields = (e) => {
    const imagePrev = document.querySelector('#productImagePreview')
    const textValidation = document.querySelector('#productImageValidation')
    const alert = document.querySelector('#alert')

    
        imageSrc = null
        imagePrev.src = ""
        textValidation.innerHTML = ""
        alert.innerHTML = "" 
        e.target.reset()
 }
  const displayAlert = () => {
    const alert = document.querySelector('#alert')
    const div = document.createElement('div')
    
    div.className = "alert alert-danger"
    div.innerText = "You need to complet all rows"
    alert.appendChild(div) 
        }
  
  const isValidName = (name) => name.split(" ")[0].length >=3      


function renderPreview() {
    const FILTER = ["person","dog", "cat"]
    let imgFile = document.querySelector('#productImage').files[0]
    let imagePrev = document.querySelector('#productImagePreview')
    let textValidation = document.querySelector('#productImageValidation')
    if (imgFile) {
        textValidation.innerHTML = `
            <div class="d-flex justify-content-center">
            <div class="spinner-border text-primary" role="status">
             </div>
            </div> `
            
    const fileReader = new FileReader()
    fileReader.readAsDataURL(imgFile)
    fileReader.addEventListener("load", function () {
        imagePrev.src = this.result

    cocoSsd.load().then(model => {
    model.detect(imagePrev).then(predictions => {
    let predClass = predictions.map(index => index.class)

       if (predClass.find(e => FILTER.includes(e))) {
         textValidation.style = 'color: red'
         textValidation.innerText = `  Uploud a photo that doesn't contain: ${FILTER.join(" ")}.`
            imageSrc = false
        } else {
            textValidation.style = 'color: green'
            textValidation.innerText = ` It's ok for adding.`
            imageSrc = this.result  }

           });
        });
     })
   }
}
 
