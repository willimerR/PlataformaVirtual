console.log("ucducgud");
 const express = require("express");
 const mysql = require("mysql2");
 const cors = require("cors");

 const App = express();
 App.use(express.json());
 App.use(cors());

 const port = 3000;
 //mysql://root:awuYBQRAVlCWEVqwepeJxSsQrxRzhrym@hopper.proxy.rlwy.net:32147/railway


const my = mysql.createPool({
    host:"localhost",
    user:"",
    password:"",
    database:"",

})


my.connect((err)=>{
    if(err){
        console.log("Error con la base de datos");
        return
    }
    console.log("conetando a base de datos");
})

App.get('/test-db', (req, res) => {

    const Query= "SELECT * FROM usuario";
  db.query(Query, (err, results) => {
  
      if (err) {
          res.status(500).send('Error en la consulta');
          return;
      }
      res.json(results);
  });


});








 

 App.listen(port, ()=>{
console.log(`Servidor Express corriendo en http://localhost:${port}`)
 })