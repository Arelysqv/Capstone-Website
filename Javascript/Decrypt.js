function caesarDecipher(message, shift) {
    shift = shift % 26;
    if (shift < 0) shift += 26;

    let result = '';

    for (let i = 0; i < message.length; i++) {
        let char = message[i];
        const code = message.charCodeAt(i);

        // Uppercase letters
        if (code >= 65 && code <= 90) {
            char = String.fromCharCode(((code - 65 - shift + 26) % 26) + 65);
        }
        // Lowercase letters
        else if (code >= 97 && code <= 122) {
            char = String.fromCharCode(((code - 97 - shift + 26) % 26) + 97);
        }

        result += char;
    }

    return result;
}

        function handleDecrypt() { 
            const message = document.getElementById('alphabet').value;
            const shift = parseInt(document.getElementById("number").value);
            const result = caesarDecipher(message, shift);
             document.getElementById('result').innerHTML = 
            `<p>Decrypted Message: ${result}<br>Shift Used: ${shift}</p>`;

        }