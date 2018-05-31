const Pixeler = require("get-pixels");

Piseler("opmok.png", (err, pixels)=>{
  if(err){
    console.log("ERROR! reading pixels");
    return
  }
  console.log("SUCCESS! reading pixels:", pixels.shape.slice());
});

module.exports;
