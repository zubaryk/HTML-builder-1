const fs = require ('fs');
const path = require ('path');
const { exit } = require('process');
const { stdin, stdout, } = process;

fs.writeFile(
    path.join(__dirname, 'text.txt'), 
    '',
    (err) => {
        if (err) throw err;
    }
    );

stdout.write('Привет, напиши что-нибудь.\n');
stdin.on('data', data => {
    fs.appendFile(
        path.join(__dirname, 'text.txt'),
        data,
    err => {
        if (err) throw err;
    }
    ); 
    if (data.toString('utf-8').trim() === 'exit') {
        process.exit();
    } 
    process.on('SIGINT', function() {
                process.exit();
            }
        )
}
) 
process.on('exit', () => stdout.write('Удачи!!!'));




    




 






