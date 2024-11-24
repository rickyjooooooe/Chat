const crypto = require('crypto');
const fs = require('fs');

const targetHash = '578ed5a4eecf5a15803abdc49f6152d6';
const filePath = '500-worst-passwords.txt';

function dictionaryAttack() {
    const passwords = fs.readFileSync(filePath, 'utf8').split('\n');
    for (const password of passwords) {
        const hash = crypto.createHash('md5').update(password.trim()).digest('hex');
        if (hash === targetHash) {
            console.log(`Found Password: ${password}`);
            return password;
        }
    }
    console.log('Password not found.');
    return null;
}

dictionaryAttack();
