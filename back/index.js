const express=require(express);


const servidor =express();

servidor.get("/usuarios",(req,res)=>{
res.end(idatos.body.nombre);

});


servidor.lisent(5555,()=>{

});