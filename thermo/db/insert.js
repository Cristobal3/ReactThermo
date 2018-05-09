const Sequelize = require('sequelize');
const tables = require('./tables/tables')
const sequelize = new Sequelize('thermo', '', '', {
    host: 'localhost',
    dialect: 'postgres',
  });

//   sequelize
//   .authenticate()
//   .then(() => {
//     console.log('Connection has been established successfully.');
//   })
//   .catch(err => {
//     console.error('Unable to connect to the database:', err);
//   });

const Steam = sequelize.define('steam', {
    SatId: {
        type: Sequelize.INTEGER
    },
    Temperature: {
        type: Sequelize.FLOAT
    },
    Pressure: {
        type: Sequelize.FLOAT
    },
    SatLiq_Vf: {
        type: Sequelize.FLOAT
    },
    SatLiq_Vg: {
        type: Sequelize.FLOAT
    },
    SatLiq_Uf: {
        type: Sequelize.FLOAT
    },
    SatLiq_Ug: {
        type: Sequelize.FLOAT
    },
    SatLiq_Hf: {
        type: Sequelize.FLOAT
    },
    SatLiq_Hfg: {
        type: Sequelize.FLOAT
    },
    SatLiq_Hg: {
        type: Sequelize.FLOAT
    },
    SatLiq_Sf: {
        type: Sequelize.FLOAT
    },
    SatLiq_Sg: {
        type: Sequelize.FLOAT
    }


})


//console.log(tables.SatLiq_T[0]);
var water = [];
 for (var i = 0;i<tables.SatLiq_T.length; i++) {

    // Table created
    water[i] = Steam.create({
      
      Temperature: tables.SatLiq_T[i],
      Pressure: tables.SatLiq_P[i],
      SatLiq_Vf: tables.SatLiq_Vf[i],
      SatLiq_Vg: tables.SatLiq_Vg[i],
      SatLiq_Uf: tables.SatLiq_Uf[i],
      SatLiq_Ug: tables.SatLiq_Ug[i],
      SatLiq_Hf: tables.SatLiq_Hf[i],
      SatLiq_Hfg: tables.SatLiq_Hfg[i],
      SatLiq_Hg: tables.SatLiq_Hg[i],
      SatLiq_Sf: tables.SatLiq_Sf[i],
      SatLiq_Sg: tables.SatLiq_Sg[i]
    });

 }

//DELETE EVERYTHING
// Steam.sync({force: true}).then(() => { 
//     });
 