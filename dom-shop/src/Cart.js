class Cart{
    constructor(id){
        this.id    = id
        this.items = []
    }
    render(rootId){
        let root = document.getElementById(rootId)
            root.innerHTML = ``
        let count = this.items.length
        let countLable = "Empty"
        if(count > 0){
            countLable = `${count} items`
        }
        let html = ` 
        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
         <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              <i class="bi bi-cart"></i>(${countLable})
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><hr class="dropdown-divider"></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        
      </ul>`
      root.innerHTML = html 
    }
    addProduct(e){
        console.log(e.target.dataset.productId)
        this.items.push(catalog.find(item => item.id == e.target.dataset.productId))
        this.render("shopNavigation")
    }
}