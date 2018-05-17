const express = require('express');
var bodyParser = require("body-parser");
const db = require('./db/insert')
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


var info
var data = [];
function displayResults(results) {
  
  results.forEach(function (c) {
      console.dir(c.toJSON());
       data[0] = c.toJSON();
  });
  console.log('------------------------------------');
  console.log(data)

  
}

function dataRetrieve(parameter) {
  
  db.Steam.findAll({
    where: {
      Temperature: parameter
    }
  }).then((a) => {
res.json({a})
  })
  return true
}

app.get('/api/temp/:usrTemp', function (req, res) {
  var parameter = req.params.usrTemp;
  
  //cry = async function (parameter) {
    // const info = await 
    db.Steam.findAll({
      where: {
        Temperature: parameter
      }
    }).then((a) => {
  res.json({a})
    })  

      
    //const espera = await res.send({data})

    
   
    
  // }
  // cry(parameter);
  console.log('2')

});

app.listen(port, () => console.log(`Listening on port ${port}`));
