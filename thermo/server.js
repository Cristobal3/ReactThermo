const express = require('express');
const db = require('./db/insert')
const app = express();
const port = process.env.PORT || 5000;

var info

function displayResults(results) {
  var data
  results.forEach(function (c) {
      //console.dir(c.toJSON());
      data = c.toJSON();
  });
  console.log('------------------------------------');

  return data
}

function dataRetrieve(parameter) {
  
  db.Steam.findAll({
    where: {
      Temperature: parameter
    }
  }).then(displayResults).then(function (data){
    console.log(data)
    info = data;
  });
console.log(info)
return info

}

app.get('/api/temp/:usrTemp', (req, res) => {
  var parameter = req.params.usrTemp;
  dataRetrieve(parameter).then(
  res.send(
    info
  ))
});

app.listen(port, () => console.log(`Listening on port ${port}`));