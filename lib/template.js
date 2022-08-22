const fs = require('fs');

module.exports = {
    homeHTML: function(fnames){
        const main = JSON.parse(fs.readFileSync(`./data/${fnames[0]}`, 'utf8'));
        const list1 = JSON.parse(fs.readFileSync(`./data/${fnames[1]}`, 'utf8'));
        const list2 = JSON.parse(fs.readFileSync(`./data/${fnames[2]}`, 'utf8'));
        const list3 = JSON.parse(fs.readFileSync(`./data/${fnames[3]}`, 'utf8'));
        const list4 = JSON.parse(fs.readFileSync(`./data/${fnames[4]}`, 'utf8'));
        const list5 = JSON.parse(fs.readFileSync(`./data/${fnames[5]}`, 'utf8'));
        
        return (`
        <!DOCTYPE HTML>
        <head>
            <link rel="stylesheet" href="./style.css" />
        </head>
        <body>
            <div class="App">
                <div class="Header">
                    <div class="container">
                    <h1><a href="./">Researchers' Society</a></h1>
                    </div>
                </div>
                <div class="Nav">
                    <div class="nav-line-top"></div>
                    <div class="nav-maxwidth">
                        <div class="container">
                            <div id="nav-grid">
                            <p class="nav-element"><a href="./contents">Explore contents</a></p>
                            <p class="nav-element">About us</p>
                            <p class="nav-element">Members</p>
                            </div>
                        </div>
                    </div>
                    <div class="nav-line-bottom"></div>
                </div>
                <div class="Home">
                    <div class="container">
                        <a href="./article?fname=${fnames[0]}"><article id="home-main-grid">
                            <div class="main-text">
                                <h2>${main.title}</h2>
                                <p>${main.description}</p>
                            </div>
                            <img class="main-image" src="./img?fname=${main.img_src}" alt=${main.title}></img>
                        </article></a>
                        <div id="home-list-grid">
                            ${this.homeList(fnames[1], list1)}
                            ${this.homeList(fnames[2], list2)}
                            ${this.homeList(fnames[3], list3)}
                            ${this.homeList(fnames[4], list4)}
                            ${this.homeList(fnames[5], list5)}
                        </div>
                    </div>
                </div>
                <div class="Footer"></div>
            </div>
        </body>
        `);
    },
    homeList: function(fname, list){
        return (`
        <a href="./article?fname=${fname}"><article class="home-list-subgrid">
            <img class="home-list-image" src="./img?fname=${list.img_src}" alt=${list.title}></img>
            <h3>${list.title}</h3>
            <p class="home-list-description">${list.description}</p>
            <p class="home-list-author">${list.author}</p>
            <p class="home-list-date">${list.date}</p>
        </article></a>
        `);
    },
    contentsHTML: function(fnames){
        const lists = [];
        for (var i = 0; i < 10; i++){
            lists.push(JSON.parse(fs.readFileSync(`./data/${fnames[i]}`)));
        }

        return (`
        <!DOCTYPE HTML>
        <head>
            <link rel="stylesheet" href="./style.css" />
        </head>
        <body>
            <div class="App">
                <div class="Header">
                    <div class="container">
                    <h1><a href="./">Researchers' Society</a></h1>
                    </div>
                </div>
                <div class="Nav">
                    <div class="nav-line-top"></div>
                    <div class="nav-maxwidth">
                        <div class="container">
                            <div id="nav-grid">
                            <p class="nav-element"><a href="./contents">Explore contents</a></p>
                            <p class="nav-element">About us</p>
                            <p class="nav-element">Members</p>
                            </div>
                        </div>
                    </div>
                    <div class="nav-line-bottom"></div>
                    <div class="nav-maxwidth">
                        <div class="container">
                            <p class="nav-current">Researchers' Society &nbsp; > &nbsp; Explore contents</p>
                        </div>
                    </div>
                </div>
                <div class="Contents">
                    <div class="container">
                        <h2>Contents</h2>
                        <div class="contents-lists">
                            ${this.contentsList(lists[0], fnames[0])}
                            ${this.contentsList(lists[1], fnames[1])}
                            ${this.contentsList(lists[2], fnames[2])}
                            ${this.contentsList(lists[3], fnames[3])}
                            ${this.contentsList(lists[4], fnames[4])}
                            ${this.contentsList(lists[5], fnames[5])}
                            ${this.contentsList(lists[6], fnames[6])}
                            ${this.contentsList(lists[7], fnames[7])}
                            ${this.contentsList(lists[8], fnames[8])}
                            ${this.contentsList(lists[9], fnames[9])}
                        </div>
                        <p class="contents-pages">
                            < &nbsp; Previous  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 1 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 2 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 3 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ... &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 97 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Next &nbsp; >
                        </p>
                    </div>
                </div>
                <div class="Footer"></div>
            </div>
        </div>
        `);
    },
    contentsList: function(list, fname){
        return (`
        <a href="./article?fname=${fname}"><article class="contents-grid">
            <div class="contents-left">
                <p class="contents-author">${list.author}</p>
                <p class="contents-date">${list.date}</p>
            </div>
            <div class="contents-right">
                <p class="contents-title">${list.title}</p>
                <p class="contents-description">${list.description}</p>
            </div>
            <img class="contents-image" src="./img?fname=${list.img_src}" alt="${list.title}" />
        </article></a>
        `);
    },
    articleHTML: function(article){
        return (`
        <!DOCTYPE HTML>
        <head>
            <link rel="stylesheet" href="./style.css" />
        </head>
        <body>
            <div class="App">
                <div class="Header">
                    <div class="container">
                    <h1><a href="./">Researchers' Society</a></h1>
                    </div>
                </div>
                <div class="Nav">
                    <div class="nav-line-top"></div>
                    <div class="nav-maxwidth">
                        <div class="container">
                            <div id="nav-grid">
                            <p class="nav-element"><a href="./contents">Explore contents</a></p>
                            <p class="nav-element">About us</p>
                            <p class="nav-element">Members</p>
                            </div>
                        </div>
                    </div>
                    <div class="nav-line-bottom"></div>
                    <div class="nav-maxwidth">
                        <div class="container">
                            <p class="nav-current">Researchers' Society &nbsp; > &nbsp; Explore contents &nbsp; > &nbsp; article</p>
                        </div>
                    </div>
                </div>
                <div class="Article">
                    <div class="container">
                        <p class="article-date">${article.date}</p>
                        <h2 class="article-title">${article.title}</h2>
                        <p class="article-description">${article.description}</p>
                        <p class="article-author">${article.author}</p>
                        <p class="article-text">${article.text}</p>
                    </div>
                </div>
                <div class="Footer"></div>
            </div>
        </body>
        `);
    }
}