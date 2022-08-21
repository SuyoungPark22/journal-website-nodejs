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
        // if (queryData.id === undefined){    //home page
        //     fs.readFile("./lib/home.json", 'utf8', function(err, data){
        //         const dataParsed = JSON.parse(data);
        //         const html = template.homeHTML(dataParsed.main, dataParsed.list1, dataParsed.list2, dataParsed.list3, dataParsed.list4, dataParsed.list5);     
                
        //         response.writeHead(200);
        //         // response.write(JSON.stringify(dataParsed));
        //         response.write(html);
        //         response.end();
        //     })
        // }
        fs.readFile("./lib/articles.json", 'utf8', function(err, data){
            const dataParsed = JSON.parse(data);
            const fnames = dataParsed.articles;
            const html = template.homeHTML(fnames);

            response.writeHead(200);
            response.write(html);
            response.end();
        })
    } else if (pathname === "/contents"){   //contents list
        fs.readFile("./lib/contents.json", function(err, data){
            const dataParsed = JSON.parse(data);
            const lists = dataParsed.contents;  //원소가 10개인 리스트
            const html = template.contentsHTML(lists);

            response.writeHead(200);
            response.write(html);
            response.end();
        })        
    } else if (pathname === "/article"){    //read article
        fs.readFile(`./data/${queryData.fname}`, 'utf8', function(err, data){
            const dataParsed = JSON.parse(data);
            const html = template.articleHTML(dataParsed);

            response.writeHead(200);
            response.write(html);
            response.end();
        })

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
    } 
})

app.listen(4000);