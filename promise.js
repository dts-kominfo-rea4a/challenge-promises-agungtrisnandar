const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme
const promiseOutput = async (kondisi) => {
  try {
    const dataTeaterIXX = await promiseTheaterIXX();
    const dataTeaterVGC = await promiseTheaterVGC();

    let dataKondisi = 0;
    
    dataTeaterIXX.map( item => {
      if(item.hasil == kondisi) dataKondisi += 1;
    })

    dataTeaterVGC.map( item => {
      if(item.hasil == kondisi) dataKondisi += 1;
    })
    
    return dataKondisi;
  } catch (error) {}
};

module.exports = {
  promiseOutput,
};
