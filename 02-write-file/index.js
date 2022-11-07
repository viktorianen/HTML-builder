const { stdin, stdout } = process;
const fs = require('fs');
const path = require('path');
const output = fs.createWriteStream(path.join(__dirname, 'text.txt'));

stdout.write('Wellcome this Node.js. Enter text\n');

stdin.on('data', data => {
    if (data.toString().trim() == 'exit') {
        process.exit();
    }
    output.write(data)
});

process.on('exit', () => stdout.write('Удачи в изучении Node.js!'));
