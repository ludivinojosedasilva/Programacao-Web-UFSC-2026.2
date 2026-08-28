var QRCode = require("qrcode-svg");

var qrcode = new QRCode({
  content: "Aula de hoje",
  padding: 4,
  width: 2560,
  height: 2560,
  color: "#000000",
  background: "#ffffff",
  ecl: "L",
});

qrcode.save("figura.svg", function (error) {
  if (error) console.log("deu erro");
  else console.log("Done!");
});
