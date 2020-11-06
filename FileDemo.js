var fs =require("fs");
fs.mkdir('sampleFolder',function(){
fs.writeFile('.//sampleFolder//testFile.txt',"Hello Node",function()
    {
        fs.readFile('.//sampleFolder//testFile.txt','utf8',function(err,data){
                data?console.log(data):console.log("Error: "+err);
        });
    });
});
console.log("Program to use File System");