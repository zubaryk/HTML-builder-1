const fs = require ('fs');
const path = require ('path');

fs.readdir('05-merge-styles/styles', (err, files) => {
    files.forEach(file => {
        fs.stat('05-merge-styles/styles/'+file, (err, stats) => {
            if(err) {
                err;
            }
            stats.isFile();
            path.extname(file);
            if ((stats.isFile() == true) && (path.extname(file) == '.css')) {
                fs.readFile('05-merge-styles/styles/'+file, (err, data) => {
                    if(err) throw err;
                    fs.writeFile('05-merge-styles/project-dist/bundle.css', data, (err) => {
                        if(err) throw err;
                        console.log('Файл успешно записан');
                    })
                    
                })
            }

        })
        

            })
            
        } )
