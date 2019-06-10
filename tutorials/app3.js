var fs = require('fs');
//delete file if exists, otherwise must be verified
/* 
fs.unlink('writeMe.txt', function(err, res){
    if(err) console.log('error', err)
});
 */
// create directory
// fs.mkdirSync('stuff');
// remove dir
//fs.rmdirSync('stuff');

//create a dir with file
/* 
fs.mkdir('stuff', function(){
    fs.readFile('readMe.txt', 'utf8', function(err, data){
        fs.writeFile('./stuff/writeMe.txt', data, function(err, result){
            if(err) console.log('error', err);
        });
    });
})

 */
fs.unlink('./stuff/writeMe.txt', function(){
    fs.rmdir('stuff', function(err, result){
        if(err) console.log('error', err);
    });    
});
