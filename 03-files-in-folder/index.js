
const path = require('path');
const fs = require('fs');
const folderPath = '03-files-in-folder/secret-folder';


    fs.readdir('03-files-in-folder/secret-folder', (err, files) => {
        files.forEach(file => {
            
            fs.stat('03-files-in-folder/secret-folder/'+file, (err, stats) => {
            if (err) {
                 throw err
            }
            stats.isFile();
            if(stats.isFile() == true){
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

    


