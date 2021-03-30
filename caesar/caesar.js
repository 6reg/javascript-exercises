function caesar(str, shift) {
    // Wrap the shift
    if (shift < 0) {
        return caesar(str, shift + 26);
    }

    // Make output var
    let output = "";

    // Go through each char
    for (let i = 0; i < str.length; i++) {
        // Get char to append
        let char = str[i]

        // If it's a letter ..   
        if (char.match(/[a-z]/i)) {
            // .. get it's char code
            let code = str.charCodeAt(i);

            // Uppercase letters
            if (code >= 65 && code <= 90) {
                char = String.fromCharCode(((code - 65 + shift) % 26) + 65);
            }
            
            // Lowercase letters
            else if (code >= 97 && code <= 122) {
                char = String.fromCharCode(((code - 97 + shift) % 26) + 97);
            }
        }

        // Append
        output += char
    }

    return output;
};
       



module.exports = caesar
