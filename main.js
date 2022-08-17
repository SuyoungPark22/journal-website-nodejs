const fs = require('fs');
const http = require('http');
const url = require('url');
// const { homeHTML } = require('./lib/template.js');
const template = require('./lib/template.js');

const app = http.createServer(function(request, response){
    const pageURL = request.url;
    const queryData = url.parse(pageURL, true).query;
    const pathname = url.parse(pageURL, true).pathname;

    console.log({queryData: queryData, pathname: pathname});

    if (pathname === "/"){
        if (queryData.id === undefined){    //home page
            fs.readFile("./lib/pagelist.json", 'utf8', function(err, data){
                const dataParsed = JSON.parse(data);
                const html = template.homeHTML(dataParsed.main, dataParsed.list1, dataParsed.list2, dataParsed.list3, dataParsed.list4, dataParsed.list5);     
                
                response.writeHead(200);
                // response.write(JSON.stringify(dataParsed));
                response.write(html);
                response.end();
            })
        }
    } else if (pathname === "/style.css"){
        fs.readFile("./lib/style.css", 'utf8', function(err, data){
            response.writeHead(200);
            response.write(data);
            response.end();
        })
    } else if (pathname === "/img"){
        fs.readFile(`./img/${queryData.fname}`, function(err, data){
            response.writeHead(200);
            response.write(data);
            response.end();
        })
    } else if (pathname === "/contents"){
        //need to read file
        const html = template.contentsHTML(lists);

        response.writeHead(200);
        response.write(html);
        response.end();
    }
})

app.listen(4000);