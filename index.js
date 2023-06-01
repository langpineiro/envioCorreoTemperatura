const express = require("express");
const morgan = require("morgan");
var cors = require("cors");
const app = express();
const { transporter } = require("./nodemailer.services");
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(" 🚀 El servidor ha despegado en el puerto ", port);
});

app.post("/enviarMail", async (req, res) => {
  const{tempe} = req.body; 
  console.log(tempe);
  if (tempe >= 33) {
    const mail = await transporter.sendMail({
      from: "prueba@artresde.net",
      to: "alangp@miumg.edu.gt",
      subject: "ALERTA DE TEMPERATURA MAXIMA",
      html: `<h1>EL SENSOR HA DETECTADO : ${tempe} C°</h1>
      <p>POR FAVOR REVISAR, YA QUE HAY POSIBILIDAD DE INCENDIO!!!!</p>`,
    });
    res.send("correo enviado correctamente");
  }else{
    res.send("no hay nada que enviar");
  }
});
