var http=require('http');
var str='';
http.get('http://localhost:8080/details',(res)=>{
    
    res.on('data',(users)=>{
        str+=users;
    });
});
var server=http.createServer((req,res)=>{
    res.writeHead(200,{'content-type' :'application/json'});
    res.write(str);
    res.end();
});
server.listen(8085)