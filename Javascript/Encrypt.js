function caesarCipher(message, shift) {
            shift = shift % 26;
            if (shift < 0) shift += 26;

            let result = '';

            for (let i = 0; i < message.length; i++) {
                let char = message[i];
                const code = message.charCodeAt(i);

                if (code >= 65 && code <= 90) {
                    char = String.fromCharCode(((code - 65 + shift) % 26) + 65);
                }
                else if (code >= 97 && code <= 122) {
                    char = String.fromCharCode(((code - 97 + shift) % 26) + 97);
                }

                result += char;
            }

            return result;
        }

        function handleEncrypt() {
            const message = document.getElementById('alphabet').value;
            const shift = document.getElementById("number").value;
            const result = caesarCipher(message, shift);
            document.getElementById('result').innerHTML = 
            `Encrypted Message: ${result}<br>Shift Used${shift}`;
        } 