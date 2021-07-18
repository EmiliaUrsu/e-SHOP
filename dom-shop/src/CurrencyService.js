class CurrencyService {

    getCurrencies() {
        const config = ["EUR", "USD", "RON","RUB"]
        
        let currencies = [new Currency("MDL", 1, 1)]
        let xhr = new XMLHttpRequest()

        const date = new Date
        const day = date.getDate()
        const month = date.getMonth()
        const year = date.getFullYear()

        const dateQuery = `${day}.${month > 9 ? month :`0${month}`}.${year}`

      
        xhr.open("GET", `https://www.bnm.md/ro/official_exchange_rates?get_xml=1&date=${dateQuery}`)

        xhr.onload = () => {
        const xmlParser = new DOMParser()
        const xml = xmlParser.parseFromString(xhr.responseText, "text/xml")

        const valuteElements = (xml.getElementsByTagName("Valute"))

    for(let i = 0; i < valuteElements.length; i ++){
        const code = valuteElements[i].children[1].textContent
        const nominal = valuteElements[i].children[2].textContent
        const rate = valuteElements[i].children[4].textContent
        if(config.includes(code)) {
             currencies.push(new Currency(code, parseFloat(nominal), parseFloat(rate)))
        }   
     }
     currencySwitcher = new CurrencySwitcher(currencies)
     currencySwitcher.render("rootCurrSwitch")
     }

        xhr.send()        

        return currencies
    }
}