let numbers = ['0','1','2','3','4','5','6','7','8','9'];
let lowerCasedLetters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
let upperCasedLetters = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
let specialCharacters = ['!','@','#','$','%','^','&','*','(',')']

function getPasswordOptions() {
    
    let length = parseInt(
        prompt('Please input how many Characters you would like your password to contain')
    );

    if (isNaN(length) === true) {
        alert('please select number for password length');
        return;
    }

    if (length < 8) {
        alert('password length must be at least 8 characters');
        return;
    }

    if (length > 128) {
        alert('password must be less than 129 characters');
        return;
    }

    let hasSpecialCharacters = confirm(
        'Click ok to include special characters.'
    );

    let hasUpperCasedLetters = confirm(
        'Click ok to include upper cased letters.'
    );

    let hasLowerCasedLetters = confirm(
        'Click ok to include lower cased letters'
    );
    
    let hasNumbers = confirm(
        'Click ok to include Numbers'
    );

    if (
        hasSpecialCharacters == false &&
        hasUpperCasedLetters == false &&
        hasLowerCasedLetters == false &&
        hasNumbers == false
    ) {
        alert('Must select at least one character type');
        return;
    }

    let passwordOptions = {
        length: length,
        hasSpecialCharacters: hasSpecialCharacters,
        hasUpperCasedLetters: hasUpperCasedLetters,
        hasLowerCasedLetters: hasLowerCasedLetters,
        hasNumbers: hasNumbers
    };

    return passwordOptions;
}

function getRandom(arr) {
    let ranIndex = Math.floor(Math.random() * arr.length);
    let randomElement = arr[ranIndex];

    return randomElement;
    }

function generatePassword() {
    let options = getPasswordOptions();


let result = [];

let possibleCharacters = [];

let guaranteedCharacters = [];

if (options.hasSpecialCharacters) {
    possibleCharacters = possibleCharacters.concat(numbers);
    guaranteedCharacters.push(getRandom(numbers));
}

if (options.hasSpecialCharacters) {
    possibleCharacters = possibleCharacters.concat(upperCasedLetters);
    guaranteedCharacters.push(getRandom(upperCasedLetters));
}

if (options.hasSpecialCharacters) {
    possibleCharacters = possibleCharacters.concat(lowerCasedLetters);
    guaranteedCharacters.push(getRandom(lowerCasedLetters));
}

if (options.hasSpecialCharacters) {
    possibleCharacters = possibleCharacters.concat(specialCharacters);
    guaranteedCharacters.push(getRandom(specialCharacters));
}

for (let i =0; i < options.length; i++) {
    let possibleCharacter = getRandom(possibleCharacters);

    result.push(possibleCharacter);
}

return result.join('');
}

   let generateBtn = document.querySelector('#generate');

  

    function writePassword() {
        let password = generatePassword();
        let PasswordText = document.querySelector('#password');

        PasswordText.value = password;
    }

generateBtn.addEventListener('click', writePassword)