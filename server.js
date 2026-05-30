const express=require('express');
const axios=require('axios');
const app=express();
app.set('view engine','ejs');
app.use(express.urlencoded({extended:true}));
app.get('/',async(req,res)=>{
    try{
        const response = await axios.get('https://jsonplaceholder.typicode.com/todos?_limit=5');
        const apiData= response.data;
        res.render('index',{todos: apiData, error: null });
    } catch (err) {
        console.error("API error :",err.message);
        res.render('index',{ todos : [], error:"live API data is not loaded"});
    }
});
app.listen(3000,()=>{
    console.log(`server runs here:http://localhost:3000`)
});