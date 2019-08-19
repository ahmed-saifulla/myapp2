const app = require('./routes/index');
const port = 3000;



// To make server listening at port (eg: 3000)
app.listen(port, ()=> {
    console.log('server at port 3000');
});