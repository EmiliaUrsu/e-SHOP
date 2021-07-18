class CurrencySwitcher {

    constructor(currencies) {
      this.currencies = currencies
      this.selected = currencies[0]

    }
  
    render(rootID) {
      let root = document.getElementById(rootID)
      root.innerHTML = ``
      let countLabel = this.selected?.code ?? "Loading.."
      let dropList = ``
      for( let i = 0; i < this.currencies.length; i++) {
          dropList += `<li onclick="currencySwitcher.change(event)"><a class="dropdown-item" href="#">${this.currencies[i].code}</a></li>`
      }
      let html = `
          <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
           <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
             ${countLabel}
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
              ${dropList }
            </ul>
           </li>
          </ul> `
      root.innerHTML = html  
    }

    change(e) {
      let changeValue = this.selected
      this.selected = this.currencies.find(currencyS => currencyS.code == e.target.innerText)
      this.render("rootCurrSwitch")

      catalog.forEach(element => {
        if( changeValue.code === this.selected.code)
        return
        const rateChange = changeValue.rate/this.selected.rate
        element.price.amount = (element.price.amount * rateChange)
        element.price.currency = this.selected.code
    })
        changeValue = this.selected
        localStorage.setItem('changeValue', JSON.stringify(this.selected));
        renderCatalog("root-catalog")
    }
}
  