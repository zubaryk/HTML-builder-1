const fs = require ('fs');
const path = require ('path');
let { COPYFILE_EXCL } = fs.constants;
let header;
let articles;
let footer;
let result;


fs.mkdir('06-build-page/project-dist', err => {
    if (err) throw err;
  console.log('Папка успешно создана');
})


fs.readFile('06-build-page/components/header.html', 'utf-8', (err, data) => {
    if (err) throw err;
    header = data;
})

fs.readFile('06-build-page/components/articles.html', 'utf-8', (err, data) => {
    if (err) throw err;
    articles = data;
})

fs.readFile('06-build-page/components/footer.html', 'utf-8', (err, data) => {
    if (err) throw err;
   footer = data;
})


fs.readFile('06-build-page/template.html', 'utf-8', (err, data) => {
    if (err) throw err;
    result = data.replace(/{{header}}/g, header).replace(/{{footer}}/g, footer).replace(/{{articles}}/g, articles);
      fs.writeFile('06-build-page/project-dist/index.html', result, 'utf-8', function (err) {
        if (err) throw err;
        console.log('Файл успешно записан');
    })
})


fs.readdir('06-build-page/styles', (err, files) => {
    files.forEach(file => {
        fs.stat('06-build-page/styles/'+file, (err, stats) => {
            if(err) {
                err;
            }
            stats.isFile();
            path.extname(file);
            if ((stats.isFile() == true) && (path.extname(file) == '.css')) {
                fs.readFile('06-build-page/styles/'+file, 'utf-8', (err, data) => {
                    if(err) throw err;
                    fs.writeFile('06-build-page/project-dist/style.css', data, (err) => {
                        if(err) throw err;
                        console.log('Файл успешно записан');
                    })
                                    })
            }
        })
            })
        } )


        fs.mkdir('06-build-page/project-dist/assets', err => {
            if(err) throw err;
            console.log('Папка успешно создана');
            });

        fs.mkdir('06-build-page/project-dist/assets/fonts', err => {
                if(err) throw err;
                console.log('Папка успешно создана');
                });

        fs.mkdir('06-build-page/project-dist/assets/img', err => {
                if(err) throw err;
                console.log('Папка успешно создана');
                });
        
         fs.mkdir('06-build-page/project-dist/assets/svg', err => {
                if(err) throw err;
                console.log('Папка успешно создана');
                });
        
    
        fs.copyFile('06-build-page/assets/fonts/Karolina-Regular.woff2', '06-build-page/project-dist/assets/fonts/Karolina-Regular.woff2',  COPYFILE_EXCL, err => {
                if (err) throw err;
                console.log('Файл успешно скопирован');
                }  )
                
        fs.readdir('06-build-page/assets/img', (err, files) => {
          files.forEach(file => {
            fs.copyFile('06-build-page/assets/img/'+file, '06-build-page/project-dist/assets/img/'+file,  COPYFILE_EXCL, err => {
                if (err) throw err;
                    console.log('Файлы успешно скопированы');
                        }  )
                    })
                })
            
         fs.readdir('06-build-page/assets/svg', (err, files) => {
            files.forEach(file => {
                fs.copyFile('06-build-page/assets/svg/'+file, '06-build-page/project-dist/assets/svg/'+file,  COPYFILE_EXCL, err => {
                    if (err) throw err;
                     console.log('Файлы успешно скопированы');
                                  }  )
                              })
                          })
          
        
