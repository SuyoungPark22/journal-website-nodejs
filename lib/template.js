module.exports = {
    homeHTML: function(main, list1, list2, list3, list4, list5){
        return (`
        <!DOCTYPE HTML>
        <head>
            <link rel="stylesheet" href="./home.css" />
        </head>
        <body>
            <div class="App">
                <div class="Header">
                    <div class="container">
                    <h1><a href="./">Researchers' Society</a></h1>
                    </div>
                </div>
                <div class="Nav">
                    <div class="nav-maxwidth">
                    <div class="container">
                        <div id="nav-grid">
                        <p class="nav-element"><a href="./contents">Explore contents</a></p>
                        <p class="nav-element">About us</p>
                        <p class="nav-element">Members</p>
                        </div>
                    </div>
                    </div>
                </div>
                <div class="Article">
                    <div class="container">
                        <article id="main-grid">
                            <div class="main-text">
                            <h2>${main.title}</h2>
                            <p>${main.description}</p>
                            </div>
                            <img class="main-image" src="./img?fname=${main.img_src}" alt=${main.title}></img>
                        </article>
                        <div id="list-grid">
                            <div class="List">
                                <div class="list-subgrid">
                                <img class="list-image" src="./img?fname=${list1.img_src}" alt=${list1.title}></img>
                                <h3>${list1.title}</h3>
                                <p class="list-description">${list1.description}</p>
                                <p class="list-author">${list1.author}</p>
                                <p class="list-date">${list1.date}</p>
                                </div>
                            </div>
                            <div class="List">
                                <div class="list-subgrid">
                                <img class="list-image" src="./img?fname=${list2.img_src}" alt=${list2.title}></img>
                                <h3>${list2.title}</h3>
                                <p class="list-description">${list2.description}</p>
                                <p class="list-author">${list2.author}</p>
                                <p class="list-date">${list2.date}</p>
                                </div>
                            </div>
                            <div class="List">
                                <div class="list-subgrid">
                                <img class="list-image" src="./img?fname=${list3.img_src}" alt=${list3.title}></img>
                                <h3>${list3.title}</h3>
                                <p class="list-description">${list3.description}</p>
                                <p class="list-author">${list3.author}</p>
                                <p class="list-date">${list3.date}</p>
                                </div>
                            </div>
                            <div class="List">
                                <div class="list-subgrid">
                                <img class="list-image" src="./img?fname=${list4.img_src}" alt=${list4.title}></img>
                                <h3>${list4.title}</h3>
                                <p class="list-description">${list4.description}</p>
                                <p class="list-author">${list4.author}</p>
                                <p class="list-date">${list4.date}</p>
                                </div>
                            </div>
                            <div class="List">
                                <div class="list-subgrid">
                                <img class="list-image" src="./img?fname=${list5.img_src}" alt=${list5.title}></img>
                                <h3>${list5.title}</h3>
                                <p class="list-description">${list5.description}</p>
                                <p class="list-author">${list5.author}</p>
                                <p class="list-date">${list5.date}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="Footer"></div>
            </div>
        </body>
        `);
    },
    contentsHTML: function(){
        return (`
        <!DOCTYPE HTML>
        <head>
            <link rel="stylesheet" href="./contents.css" />
        </head>
        <body>
            <div class="App">
                <div class="Header">
                    <div class="container">
                    <h1><a href="./">Researchers' Society</a></h1>
                    </div>
                </div>
                <div class="Nav">
                    <div class="nav-maxwidth">
                    <div class="container">
                        <div id="nav-grid">
                        <p class="nav-element"><a href="./contents">Explore contents</a></p>
                        <p class="nav-element">About us</p>
                        <p class="nav-element">Members</p>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
        `);
    }
}