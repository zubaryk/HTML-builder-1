const fs = require('fs');
let { COPYFILE_EXCL } = fs.constants;

fs.mkdir('04-copy-directory/files-copy', err => {
    if(err) throw err;
    console.log('Папка успешно создана');
    fs.readdir('04-copy-directory/files', (err, files) => {
        files.forEach(file => {
            fs.copyFile('04-copy-directory/files/'+file, '04-copy-directory/files-copy/'+file,  COPYFILE_EXCL, err => {
                if (err) throw err;
                console.log('Файлы успешно скопированы');
            }  )
        })
    })

});
