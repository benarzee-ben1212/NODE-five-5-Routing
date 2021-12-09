const fs = require('fs');
const http = require('http');
const url = require('url');
const server = http.createServer((req,res) => {
    //console.log(req);
   // res.end('Message from the server : Hello');
   const pathName = req.url;
  //  if(pathName === '/' || pathName === '/myname'){
  //  res.end('My name is BENERZEE');
//}
//else if (pathName === '/company'){
  //  res.end('CGCS');
//}else if (pathName === '/profession'){
  //  res.end('Junior software engineer');
//}
//else {
 //   res.writeHead(404 ,{
  //   'content-type':'text/html'   
 //   });
  //  res.end('<h1>This page Cannot be found</h1>');
//}
//});
if(pathName === '/' || pathName === '/overview'){
    res.end('This is the overview');
}else if (pathName === '/myname'){
    res.end('This is the product');
} else {
    res.writeHead(404, {
        'content-type' : 'text/html',
        'my-own-header' : 'hello-world'
    });
    res.end('<h1>Page not found</h1>');
}
});

server.listen(4000 , '127.0.0.1' ,() =>{
console.log('listening to requests');
});