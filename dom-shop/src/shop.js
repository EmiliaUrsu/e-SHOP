const tds = new TestDataService()
const cs = new CurrencyService()


let catalog = tds.getTestProducts()
let currencies = cs.getCurrencies()
let currencySwitcher = null




let cart = new Cart(100)
cart.render("rootCart")
renderCatalog("root-catalog")