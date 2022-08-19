module.exports = {
    homeHTML: function(main, list1, list2, list3, list4, list5){
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
                        <article id="home-main-grid">
                            <div class="main-text">
                                <h2>${main.title}</h2>
                                <p>${main.description}</p>
                            </div>
                            <img class="main-image" src="./img?fname=${main.img_src}" alt=${main.title}></img>
                        </article>
                        <div id="home-list-grid">
                            <article class="home-list-subgrid">
                                <img class="home-list-image" src="./img?fname=${list1.img_src}" alt=${list1.title}></img>
                                <h3>${list1.title}</h3>
                                <p class="home-list-description">${list1.description}</p>
                                <p class="home-list-author">${list1.author}</p>
                                <p class="home-list-date">${list1.date}</p>
                            </article>
                            <article class="home-list-subgrid">
                                <img class="home-list-image" src="./img?fname=${list2.img_src}" alt=${list2.title}></img>
                                <h3>${list2.title}</h3>
                                <p class="home-list-description">${list2.description}</p>
                                <p class="home-list-author">${list2.author}</p>
                                <p class="home-list-date">${list2.date}</p>
                            </article>
                            <article class="home-list-subgrid">
                                <img class="home-list-image" src="./img?fname=${list3.img_src}" alt=${list3.title}></img>
                                <h3>${list3.title}</h3>
                                <p class="home-list-description">${list3.description}</p>
                                <p class="home-list-author">${list3.author}</p>
                                <p class="home-list-date">${list3.date}</p>
                            </article>
                            <article class="home-list-subgrid">
                                <img class="home-list-image" src="./img?fname=${list4.img_src}" alt=${list4.title}></img>
                                <h3>${list4.title}</h3>
                                <p class="home-list-description">${list4.description}</p>
                                <p class="home-list-author">${list4.author}</p>
                                <p class="home-list-date">${list4.date}</p>
                            </article>
                            <article class="home-list-subgrid">
                                <img class="home-list-image" src="./img?fname=${list5.img_src}" alt=${list5.title}></img>
                                <h3>${list5.title}</h3>
                                <p class="home-list-description">${list5.description}</p>
                                <p class="home-list-author">${list5.author}</p>
                                <p class="home-list-date">${list5.date}</p>
                            </article>
                        </div>
                    </div>
                </div>
                <div class="Footer"></div>
            </div>
        </body>
        `);
    },
    contentsHTML: function(lists){
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
                            ${this.contentsList(lists[0])}
                            ${this.contentsList(lists[1])}
                            ${this.contentsList(lists[2])}
                            ${this.contentsList(lists[3])}
                            ${this.contentsList(lists[4])}
                            ${this.contentsList(lists[5])}
                            ${this.contentsList(lists[6])}
                            ${this.contentsList(lists[7])}
                            ${this.contentsList(lists[8])}
                            ${this.contentsList(lists[9])}
                        </div>
                    </div>
                </div>
                <div class="Footer"></div>
            </div>
        </div>
        `);
    },
    contentsList: function(list){
        return (`
        <article class="contents-grid">
            <div class="contents-left">
                <p class="contents-author">${list.author}</p>
                <p class="contents-date">${list.date}</p>
            </div>
            <div class="contents-right">
                <p class="contents-title">${list.title}</p>
                <p class="contents-description">${list.description}</p>
            </div>
            <img class="contents-image" src="./img?fname=${list.img_src}" alt="${list.title}" />
        </article>
        `);
    }
}