// var fs = require("fs");
// var nunjucks = require('nunjucks');

// var tpl = fs.readFileSync("./gen.js").toString();

// var compiledData = nunjucks.renderString(tpl,{username:'pp'});

// console.log(compiledData);



var fs = require("fs");

var mustache = require("mustache");

var tpl = fs.readFileSync("./gen.js").toString();

var compiledData = mustache.render(tpl,{username:'aaa',age:"24"});

console.log(compiledData);