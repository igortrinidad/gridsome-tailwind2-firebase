const accounting = require('accounting')

module.exports.formatCurrency = ({ value, precision = 2, symbol = '$' }) => {
  accounting.settings = {
    currency: {
      symbol: symbol,
      format: {
        pos : "%s%v",
        neg : "-%s%v",
        zero: " --"
      },
      decimal: ".",
      thousand: ",",
      precision: precision
    },
    number: {
      precision: precision,  // default precision on numbers is 0
      thousand: ".",
      decimal: ","
    }
  }

  return accounting.formatMoney(parseFloat(value))
}

module.exports.formatNumber = (num = '', precision = 2) => {

  accounting.settings = {
    currency: {
      symbol: "US$ ",
      format: "%s%v",
      decimal: ".",
      thousand: ",",
      precision: 2
    },
    number: {
      precision: precision,  // default precision on numbers is 0
      thousand: "",
      decimal: "."
    }
  }

  return parseFloat(accounting.formatNumber(parseFloat(num)))
}