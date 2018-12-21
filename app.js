const express = require('express');
const app = express();
const port = process.env.PORT || 1234;

app.get('/trillion',( req, res, next) => {
    res.send('Successful');
})

app.listen(port, (err) => {
    if(err){
        throw err;
    }else {
        console.log(`server is running on portNo ${port}`)
    }
});
