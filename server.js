var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var Articles = {
    'article-one': {
        title: 'Article One',
        heading: 'This is Article',
        date: 'Aug 23,2017',
        content: `
            <p>
                This is the main Content.
            </p>
            <p>
                Yet Agin i write Something.
            </p>
            <p>
                And again i follows the same order.
            </p>`
    },
    'article-two': {
        title: 'Article Two',
        heading: 'This is Article Two',
        date: 'Aug 23,2017',
        content: `
            <p>
                This is the main Content jgdfjf.
            </p>
            <p>
                Yet Agin i write Something.
            </p>
            <p>
                And again i follows the same order.
            </p>
            `
    },
    'article-three': {
        title: 'Article Three',
        heading: 'This is Article three',
        date: 'Aug 23,2017',
        content: `
            <p>
                This is the main Contenhag jagaidhit.
            </p>
            <p>
                Yet Agin i write Something.
            </p>
            <p>
                And again i follows the same order.
            </p>
            `
    }
};

function createTemp(data){
    var title= data.title;
    var heading = data.heading;
    var date = data.date;
    var content = data.content;
    
    var htmlTemp = `
    <html>
        <head>
            <title>
                ${title}
            </title>
            <meta name="viewport" content="width-device-width, initial-scale=1" />
            <link href="/ui/style.css" rel="stylesheet" />
        </head>
        <body>
            <div class="Contain">
                <div>
                    <a href="/">Home</a>
                </div>
                <hr/>
                <h3>
                    ${heading}
                </h3>
                <div>
                    ${date}
                </div>
                <div>
                    ${content}
                </div>
            </div>
        </body>
    </html>

    `;
    return htmlTemp;
}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/:articlename', function(req,res){
    var articlename = req.params.articlename;
    res.send(createTemp(Articles[articlename]));
});

app.get('/article-two', function(req,res){
    res.sendFile(path.join(__dirname, 'ui', 'article-two.html'));
});

app.get('/article-three', function(req,res){
    res.sendFile(path.join(__dirname, 'ui', 'article-three.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
