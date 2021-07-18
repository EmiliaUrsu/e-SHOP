let catalog = []
let id = 1

let nameProduct, imageSrc = null

function addFormSubmit(e) {
    e.preventDefault()
    let price = document.querySelector('#productPrice')
    let imagePrev = document.querySelector('#productImagePreview')
    let textValidation = document.querySelector('#productImageValidation')
    let alert = document.querySelector('#alert')


    if (nameProduct && imageSrc && price.value) {
        catalog.push(new Product(id++, nameProduct, imageSrc, price.value))
        localStorage.setItem("Catalog", JSON.stringify(catalog))

        
        e.target.reset()
        nameProduct = false
        imageSrc = false
        imagePrev.src = ""
        textValidation.innerHTML = ""
        alert.innerHTML = "" 
    } else {
        if (!alert.children.length) {
            let div = document.createElement('div')
            div.className = "alert alert-danger"
            div.innerText = "You need to complet all rows"
            alert.appendChild(div) 
        }
    }
}

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

 valueValidation = () =>{
    let name = document.querySelector('#productName').value.trim()
    if (name.split(" ")[0].length >= 3) {
        nameProduct = name
    }
}
