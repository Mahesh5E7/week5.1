const express=require('express');
const app=require();
const PORT=process.env.PORT||7000;
app.get('/',(req,res)=>{
res.send("Hello Jenkins");
});
app.listen(7000,'0.0.0.0',=>{
console.log('server running on port');
});
