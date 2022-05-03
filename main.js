console.log("-------Well come  to Express----------");
const express=require('express');
const app=express();
const router=require('./routes/routers');
// const bodyparser=re

app.use(express.json());
const PORT=process.env.PORT | 3000;


app.use(router);



app.listen(PORT,()=>{ console.log("Express is listening on port number :- ",PORT)});

