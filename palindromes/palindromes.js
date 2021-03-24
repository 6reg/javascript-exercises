
const palindromes = function(str) { 
    const cleanStr = str
                    .toLowerCase()
                    .replace(/[^A-Za-z]/g, "");

return cleanStr == cleanStr.split("").reverse().join("")
                    
}

  module.exports = palindromes 