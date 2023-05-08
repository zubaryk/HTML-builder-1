const fs = require ('fs');
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


