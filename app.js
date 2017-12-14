const app = require('express')();
const bodyParser = require('body-parser');

const Port = 3003;

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.get('/',(req, res) => {
    res.send('Hello World');
});


app.listen(Port, () => {
    console.log('listening on', Port);
})

