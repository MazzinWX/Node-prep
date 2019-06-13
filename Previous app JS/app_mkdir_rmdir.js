var fs = require('fs');

// creation of a folder and a text inside
fs.mkdir('stuff', function () {
    fs.readFile('readme.txt', 'utf8', function (err, data) {
        fs.writeFile('./stuff/writeme.txt', data, (err) => {
            if (err) throw err;
            console.log('writeme.txt was created');
        });
    });
});

// deletion of a folder and text file inside it
fs.unlink('./stuff/writeme.txt', function () {
    fs.rmdir('stuff', (err) => {
        if(err) throw err;
        console.log('writeme.txt and stuff folder was deleted');
    });
});
