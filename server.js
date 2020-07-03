const express = require("express"); //Configurando o express
const nunjucks = require("nunjucks"); //Template Engine

const server = express(); //Iniciando a função express
const videos = require("./data");  //data.js onde esta o array dos videos e ID de cada um

server.use(express.static("public")); //pasta dos arquivos estaticos
server.set("view engine", "njk");

nunjucks.configure("views", { 
   express: server,   //setando o express como template engine
   autoescape:false,  //Fazer o nunjuck interpretar html 
   noCache: true //
  })  

server.get("/", (req, res) => {
  const about = {
    avatar_url: "images/logo.png",
    name:"Ederson Domiciano",
    role:"Analista de Suporte - Geweb",
    description:`Progamador full-stack focado em trazer o melhor ensino para iniciantes em programação. Colaborador da
    <a href="www.geweb.com.br" target="_blank">Geweb</a>`,
    links: [
      { name: "Github", url:"https://github.com/edersonrpd"},
      { name: "Twitter", url:"http://twitter.com/edersonrp"},
      { name: "Linkedin", url:"https://www.linkedin.com/in/ederson-domiciano-96838625/"}
    ]
    //criando um array com os dados que ficavam salvos na index
  }
  return res.render("about", {about}); //chamando o index.html
});

server.get("/portfolio", (req, res) => {
  return res.render("portfolio", {items: videos}); //chamando a pagina de portofolio e o array da data.js
})

//Criando a pagina de videos
server.get("/video", (req,res) => {
  const id = req.query.id
  const video = videos.find((video) =>{
    return video.id == id
   
  })
  if (!video) {
    return res.send("Video not found")
  }
  return res.render("video", {item: video})
})

//configurando porta de escuta 3000
server.listen(3000, () => {
  console.log("Servidor Iniciado");
  //porta do servidor e mensagem de sucesso
});
