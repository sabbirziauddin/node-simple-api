const express = require('express');
const cors = require('cors');
const app = express();
const port = 5000;
app.use(express.json());
app.use(cors());




app.get('/',(req,res)=>{
    res.send (' wow hello world from second and nodemon and owr');

})
const users = [
    { id:1,name: 'sabbir', age: '30', job: 'student' },
    { id: 2, name: 'sakib', age: '30', job: 'student' },
    { id: 3, name:'hacin', age: '30', job: 'student' },
    { id: 4, name:'mohammed', age: '30', job: 'student' }
];


//search by using use params dynamic api
app.get(('/users/:id'),(req,res)=>{
    const id = req.params.id;
    const user = users[id];
    res.send(user);
});
//search by using query
app.get(('/users'), (req, res) => {
    //console.log(req.query.search);
    const search =req.query.search;
    if(search){
        const seachItem = users.find(user =>user.name.toLowerCase().includes(search));
        res.send(seachItem);


    }else{
        res.send(users);

    }
    

});


app.get('/fruits/mangos/fazli',(req,res)=>{
    res.send('fazli is not tasty');
});
app.get('/fruits',(req,res)=>{
    res.send(['mango','bannana','apple']);
});

//app method 
app.post('/users',(req,res)=>{
    console.log('post is triggered',req.body);
    res.send('hitted the post');
}) 

app.listen(port,()=>{
    console.log('npm run in port:',port);
})