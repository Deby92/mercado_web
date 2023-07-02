const express = require("express");
const app = express();
const { engine } = require("express-handlebars");

const PORT = 3000;

//Habilitar hamdlebars como view
app.engine(
  "hbs",
  engine({
    layoutsDir: __dirname + "/views/layouts",
    extname: "hbs",
    defaultLayout: "main",
    partialsDir: __dirname + "/views/partials",
  })
);
app.set("view engine", "hbs");

//static files

app.use("/static", express.static(__dirname + "/public"));
//rutas

app.get("/", (req, res) => {
  res.render("dashboard", {
    layout: "main",
    frutas: true,
    arrfrutas: [
      { nombre: "banana" },
      { nombre: "cebollas" },
      { nombre: "pimenton" },
      { nombre: "papas" },
      { nombre: "lechuga" },
      { nombre: "tomate" },
    ],
  });
});

app.listen(PORT, () => console.log(`Iniciando en puerto ${PORT}`));
