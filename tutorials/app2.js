var fs = require('fs');
// Sync
/* 
var readMe = fs.readFileSync('readMe.txt', 'utf8');
fs.writeFileSync('writeMe.txt', readMe); 
*/

// Async
// while this is beeing read the console.log('test') fires first
/* 
fs.readFile('readMe.txt', 'utf8', function(err, data){
    console.log(data);
});
console.log('test');
 */


fs.readFile('readMe.txt', 'utf8', function(err, data){
    fs.writeFile('writeMe.txt', data, function(err, result){
        if(err) console.log('error', err)
    });
});