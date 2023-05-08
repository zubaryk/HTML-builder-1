
const path = require('path');
const fs = require('fs');
const folderPath = '03-files-in-folder/secret-folder';

/*
        fs.stat(folderPath, (err, stats) => {
            fs.readdir(folderPath, (err, files) => {
                files.forEach(file => {
                    if (err) {
                         throw err
                    };
                    if(file){
                    stats.size;
                    path.parse(file).name;
                    path.extname(file);
                   console.log(`${path.parse(file).name} - ${path.extname(file)} - ${stats.size}`);
                    }
                })
            })
        })
*/

    fs.readdir('03-files-in-folder/secret-folder', (err, files) => {
        files.forEach(file => {
            fs.stat('03-files-in-folder/secret-folder/'+file, (err, stats) => {
            if (err) {
                 throw err
            };
            if(file){
            stats.size;
            path.parse(file).name;
            path.extname(file);
           console.log(`${path.parse(file).name} - ${path.extname(file)} - ${stats.size}`);
            }
        }
        )
    }
        )
}
    

)

    
