const http = require('http');
const express = require('express');
const app = express();

//
app.use(express.static('public'));

app.get("/", function (request, response) {
  response.sendFile(__dirname + '/views/index.html');
});

app.get("/", (request, response) => {
  response.sendStatus(200);
});

app.listen(process.env.PORT);

setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`); 
}, 280000);



////////////////////////Bonnet/////////////////////////////////////

const { Client, MessageEmbed  } = require("discord.js");
const client = new Client();
const config = require("./config.json");

let prefix = config.prefix;


function presence(){
  client.user.setPresence({
    status:"online",
    activity: {
      name: "A La Comunidad Oficial de FNAF | b/help",
      type: "WATCHING"
    }
  })
}
client.on("ready", () => {
  console.log("Bonnet encendido.");
  presence();
}); 


 
 client.on("message", (message) => {
   if(message.content.startsWith(prefix + "help")){
     const help = new MessageEmbed()
     .setTitle("Mis Comandos :D")
     .setAuthor(message.member.displayName, message.author.displayAvatarURL())
     .setColor(0x2CFF00)
     .setThumbnail("https://media.giphy.com/media/cIKK2PNbQXkVq/giphy.gif")
     .setDescription("Mi fundador: Epic [SFM]")
     .addField("b/help: ", "Envia este mensaje,o sea,todos mis comandos")
     .addField("b/embed: ", "Envia un mensaje embed con informacion basica.")
     .addField("b/fnaf-dato o b/fnaf.dato: ", "Te pone un dato interesante de FNAF.")
     .addField("b/jumpscare ", "Te dare un jumpscare aleatorio de un animatronico de FNAF SL.")
     .addField("b/scoopear: ", "Puedes matar al usuario mencionado con el scooper.")
     .addField("b/repetir: ", "El bot repite lo que djiste.")
     .addField("Server de soporte: ", "[Comunidad FNAF](https://discord.gg/5xQgYe8kFC)");
     message.channel.send(help);
   }
 
 });

client.on("message", (message) => {
  if (message.content.startsWith(prefix + 'repetir')) {
  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
  if(message.deletable) message.delete()
  if (args.join(" ").length < 1) return message.channel.send("Debes escribir algo");
  let permisos = message.channel.permissionsFor(message.member);
  message.channel.send(args.join(" "), {
  disableMentions: permisos.has("MENTION_EVERYONE") ? "none" : "everyone"
  });
  }
  });
 
 client.on("message", message =>{
   if(message.content === (prefix + "embed")){
     const embed = new MessageEmbed()
     .setTitle("Mensaje Embed")
     .setAuthor(message.member.displayName, message.author.displayAvatarURL())
     .setColor(0xFF2D00)
     .setThumbnail("https://media.giphy.com/media/3BKJ5ehjClcC4/source.gif")
     .setDescription("Descripcion:")
     .addField("ID: ", message.guild.id)
     .addField("Region: ", message.guild.region)
     .addField("Fundador: ", message.guild.owner.displayName)
     .addField("Miembros: ",message.guild.memberCount)
     .addField("Animaciones de Fnaf: ", "[Epic SFM](https://www.youtube.com/channel/UCIyaCK6bx4ZD5ecuoFUKiPg)");    
     message.channel.send(embed);
   }
 });

 client.on("message", message =>{
   var Mensajes = ["Gracias al libro de Freddy Files,podemos saber que el nombre de la musica de Puppet se llama **My Grandfathers Clock**", "En el primer trailer de FNAF 1 se puede ver como Bonnie corre por el pasillo izquierdo,pero mas tarde en el juego real fue reemplazado por Foxy.", "Hay una probabilidad muy baja de que en FNAF 1 en la camara 2B un poster de Freddy sea reemplazado por Golden Freddy. SI te sale,saldra Golden Freddy en tu oficina,pero si el te mata en vez de hacerlo de la manera normal se te cerrara el juego automaticamente.", "Hasta la fecha hay 9 juegos de FNAF mas 3 que estan confirmados que van a salir pronto.", "El unico juego en el que puedes morir por solo 1 animatronico es FNAF 3.", "Los animatronicos y escenarios de FNAF fueron creados en 3d MAX,pero el juego fue montado en Clickteam Fusion.", "Actualmente Scott Cawthon esta trabajando para pasar los primeros 7 juegos de FNAF sin contar FNAF world a :ios: :switch: :playstation: :xbox: y :android: .", "Hasta la fecha Scott Cawthon ha creado y publicado 5 libros y estan por venir 4 mas.", "Scott Cawthon a estado trabajando con BlumHouse para hacer la pelicula de FNAF.", "FNAF 4 estaba pensado para ser publicado el 31 de octubre,en Halloween,pero Scott Cawthon decidio adelantarlo al 8 de Agosto,pero decidio adelantarlo aun mas y acabo publicandose el 23 d Julio.", "Si eres Fan del juego,puedes comprar llaveros,figuras de accion,peluches,camisetas oficiales del juego.", "La voz del hombre del telefono es del mismo Scott Cawthon,el creador del FNAF.", "La primera voz de animatronico que podemos escuchar en todo FNAF es la de Foxy cantando en FNAF 1.", "Sabemos que el asesino de los niños es el hombre morado,pero gracias a pequeños detalles que ha dejado Scott Cawthon en los juegos,sabemos que se llama William Afton,y su voz es interpretada por PJ Heywood.", "Tras el lanzamiento de FNAF Help Wanted,uno de los creadores accidentalmente dejo el numero oficial de Scott Cawthon en una pagina web. Tras recibir miles de llamadas, Scott Cawthon tuvo que comunicar que se iba a cambiar de numero y que por favor,dejasen de llamarle.", "El screamer que suena cuando Golden Freddy nos mata en FNAF 1,es el mismo que un jumpscare normal pero ralentizado.", "Sabemos gracias a las novelas de FNAF que el alma que posee a Puppet es la hija de Henry.", "El primer restaurante de la franquicia fue llamado **Fredbears Family Dinner**,creado por William Afton,el co-fundador y asesino de los niños de FNAF,y por el Fundador y Creador de los animatronicos,Henry Emily", "La voz de Baby es interpretada por Heather Masters,y su primera aparicion fue en FNAF World.", "Hay una probabilidad muy baja de que al iniciar FNAF 3 o al abrir una partida que te salga una cara espantosa de Springtrap.", "En todos los juegos de FNAF,si presionas la nariz de Freddy en algun lugar del juego sonara el clasico Boing de Freddy.", "Al principio Scott Cawthon iba a hacer la pelicula con WarnerBros,pero al no gustarle las politicas,decidio hacerlo con BlumHouse productions.", "Si le das la vuelta al mapa de FNAF 3,se parecera al logo de Scott Cawthon.", "Si nos fijamos en el periodico de la noche 6 de FNAF 3,aunque este borroso se pude llegar a leer una historia,ahi Scott Cawthon nos cuenta su historia mientras desarollaba FNAF.", "En el minijuego de SAVE THEM de FNAF 2,podemos escuchar como alguien deletrea SAVE THEM,que significa SALVALOS. Pero hay una probabilidad muy baja de que al pasar a otra habitacion salga William Afton y nos atrape,cuando nos atrape saldran lineas glitcheadas pero en vez de rojas moradas,y tambien saldra la palabra YOU CANT,que hace referencia a no puedes salvar a las almas de los niños.", "En el minijuego Give Life de FNAF 2,al dar todos los regalos y mascaras a los niños,podremos ver que justo antes del jumoscare de Golden Freddy aparece un quinto cadaver,que hacer referencia a Golden Freddy.", "En la camara parts and services de FNAF 2,hay una probabilidad de que aparezca Shadow Freddy", "Hay una probabilidad casi imposible de que al bajar el monitor nos encontremos con Shadow Bonnie,si no nos ponemos la mascara a tiempo se crasheara el juego.", "En septiembre y octubre de 2017,hubo una atraccion en Las Vegas llamada Fright Dome,era una atraccion de FNAF oficial en la que te llevaban por un recorrido muy parecido a la primera pizzeria de FNAF,y habian animatronicos reales.", "Scott Cawthon vive en Houston,Texas.", "Hay una probabilidad extremadamente baja de que te salgan Tangle,Bouncepot o White RAbbit en UCN.", "Hay una probabilidad muy baja de que al bajar el monitor en FNAF 2 te salga JJ bajo la mesa.", "Tras hacer el final bueno de FNAF 6,podemos ver que aparecen 4 tumbas,estas solo saldran si tienes antes el diploma de Lord Keeper,y podemos ver que estas tumbas encajan a la perfeccion con las cabezas del final bueno de FNAF 3.", "Scott Cawthon tenia planeado acabar la historia de FNAF en el capitulo final de FNAF 4,pero Scott Cawthon no estaba contento,ya que la comunidad no habia descubierto la historia completa del juego,asi que decidio hacer FNAF World,pe-pero despues SL,pero-pero FNAF 6,pe-pero despues Ulti-utimate cust...iiggeiAAAAAHHHH!!!!.", "En FNAF 1,el tipo del telefono nos menciona que los animatronicos nos confunden con un endoesqueleto,y nos van a intentar coger y meter a la fuerza en un traje,ya que estan en su programacion. Y en la pantalla de GAME OVER podemos ver como uno de los animatronicos nos ha metido en un traje y los ojos se nos han salido afuera.", "Si en SL,en la zona segura presionamos en un panel de control presionamos 1987 nos saldra unas camaras mostrando la habitacion de FNAF 4,lo cual revela que William Afton ha estado espiando a su hijo por camaras.", "Scott Cawthon es canon en la historia de FNAF,lo que quiere decir que Scott Cawthon si existe en el universo de FNAF.", "Con ayuda de Henry,William Afton logro construir a los animatronicos asesinos de FNAF SL.", "En los archivos de FNAF 2,se encontro un medidor de toxicidad. Scott Cawthon aclaro que primero la mascara iba a tener un medidor de toxicidad,si inhalabas mucho tiempo te iba a afectar,y la idea fue descartada.", "En FNAF 2,el tipo del telefono nos aclara que su animatronico favorito es Foxy,pero el que mas odia es :puppet: ", "Antes de la salida de FNAF 2,Scott Cawthon puso en su pagina oficial un teaser donde se veia en la Pirate Cove a Foxy y Mangle mostrando el garfio,pero cuando salio el juego,nos dimos cuenta de que mangle no tiene garfio,asi que la idea fue descartada.", "En FNAF Help Wanted,se nos aclara mas o menos que Mangle es un caniche y no una zorra como pensabamos.", "Gracias a FNAF Help Wanted tambien sabemos que Toy Bonnie tiene cola.", "FNAF a lo largo de su existencia,a tenido varias referencias en dibujos animados,juegos,etc...", "Si pones la fecha de tu ordenador en la fecha de Halloweeen,se podra ver que solo FNAF 1,2 y 3 tomaran un aspecto diferente de Halloween.", "En FNAF 4 puedes obtener hasta 10 estrellas,al principio podias obtener 4 estrellas,pasandote la noche 5,6,7 y el Modo 4/20,pero el 30 de octubre se añadio la actualizacion de Halloween,que aparte de añadir nuevos animatronicos,añadieron nuevos challenges,con los que podias conseguir hasta un total de 10 estrellas en FNAF 4 Halloween Edition.", "En FNAF World Update 2.0,podemos ver un arbol glitcheado,por el cual si insistimos mucho podremos atraversarlo y pasar a la seccion de Halloween sin pasarnos el juego.", "En FNAF 3 puedes conseguir un total de 4 estrellas,completando la Noche 5,la noche nigthmare,la noche nightmare con el modo agresivo y haciendo el final bueno.", "En FNAF 2,si :puppet: sale de la caja musical hay una probabilidad muy baja de que tanto en el conducto de ventilacion derecho como en la misma camara de :puppet: aparezca el endoesqueleto 02.", "Si completamos el modo Golden Freddy en Very Hard en SL,desbloquearemos una cinematica secreta donde vemos como Michael Afton le esta hablando a su padre dentro de Springtrap mientras vemos de fondo los restos del incendio de FNAF 3.", "Los primeros animatronicos jamas creados fueron construidos por Henry Emily,y fueron nada mas y nada menos que Fredbear y SpringBonnie,estos dos animatronicos tenian un sistema de SpringLock,y con una palanca podias activarlo en modo traje,o sea podias meterte dentro del traje,y despues volviendo a activar el traje con la misma palanca podias hacer que los animatronicos se volviesen en su estado de endoesqueleto,haciendo que se muevan por su propia cuenta.", "Gracias a las llamadas de FNAF 3,sabemos que los trajes de SpringLock fueron retirados de todas las pizzerias,debido a unos fallos simultaneos,pues un par de empleados se pusieron este traje y sin querer el resorte se activo dejandolos aplastados y mutilados desangrandose. Y pues desde que ocurrio eso,los trajes de SpringLock dejaron de usarse.", "El modo 50/20 de UCN fue hecho para ser totalmente imposible.", "Los cuatro primeros juegos los hizo Scott Cawthon solo,pero en FNAF World,empezo a contratar actores de voz.", "Hay una probabilidad muy baja que uno de los 3 platos de FNAF 2,se mueva y se coloce en tu oficina de FNAF 2 de forma misteriosa.", "En FNAF 3 tambien puede aparecer el plato del conejo en tu oficina de FNAF 3,haciendo referencia a SpringTrap.", "Algunos de los posters donde sale Bonnie en FNAF 3,pueden ser reemplazados por otros posters mas terrorificos de SpringBonnie.", "En el teaser de Nightmare Foxy,podemos ver que tiene una larga lengua,pero en cambio cuando sale en el juego,tanto en su jumpscare como en el armario,no aparece su lengua en ningun lado.", "En FNAF 1 puedes conseguir un total de 3 estrellas,la primera completando la noche 5,la segunda la noche 6,y la tercera completando el modo 4/20.", "Tras completar el modo 50/20 de UCN,recibiras una estatua de un Freddy Dorado,vaya recompensa.", "Por cada challenge que completemos en la Custom Night de FNAF 2,recibiremos un peluche diferente."];
   var aleatorio = Math.floor(Math.random()*(Mensajes.length));
   if(message.content === (prefix + "fnaf-dato")){
   message.channel.send(Mensajes[aleatorio]);
   }
 });

 client.on("message", message =>{
   var Mensajes2 = ["Unicamente en la version movil de FNAF 1.podremos comprar unos peluches y cheats para tenerlos en la oficina,la cual es bastante curios que no lo hayan puesto en ordenador.", "El trailer de FNAF con mas visitas es el trailer de FNAF 3 con mas de 25 millones actualmente.", "A Michael Afton le encanta mascar chicle.", "La cancion que suena cuando Freddy nos aparece al acabar la bateria de FNAF 1,es un fragmento de la cancion La Marcha De Los Toreros compuesto en 1875.", "La silueta de Shadow Bonnie es exactamente igual que la de Toy Bonnie.", "Es probable que cuando Foxy salga de la Pirate Cove en FNAF 1,el letrero de OUT OF ORDER sea reemplazado por uno de IT´S ME.", "El juego mas pesado de todos los de FNAF,es Help Wanted con unos 10 GB aproximadamente.", "El nombre real de Shadow Bonnie es el que aparece en los archivos del juego,el cual es RWQFSFASXC,Scott Cawthon revelo que simplemente el estaba tocando el teclado aleatoriamente y salio ese nombre,y decidio ponerselo", "No importa como llames a :puppet:,si Puppet o Marionette. Ya que en todos los juegos de FNAF se llama Puppet,pero en FNAF 2 le llaman como Marinette,asi que puedes llamarlo como quieras.", "El lugar donde ocurre los eventos y acontecimientos de todas las novelas de FNAF,es un lugar real.", "William Afton tiene 3 hijos,el primero es Michael Afton,el segundo fue el niño que llora,el cual no se confirmo su nombre,y su tercer hijo es una niña llamada Elizabeth Afton,la cual esta poseyendo a Baby.", "En la cuarta novela de FNAF,se nos revela cual es el apellido de Henry y Charlie,el cual es Emily.", "Si nos fijamos en el teaser de Nightmare Foxy,podemos apreciar que en su ojo pone un 87.", "En FNAF 2 podemos conseguir 3 estrellas,la primera completando la noche 5,la segunda la noche 6,y la tercera completando cualquiera de los challenges de la Custom night", "El interprete de la voz de Funtime Freddy es Kellen Goff.", "La cancioncilla que suena cuando :puppet: sale de la caja musical es Pop Goes The Weasel", "Tras morir en FNAF 6,hay una probabilidad muy baja de que nos aparezca una imagen de uno de los 4 animatronicos en el Back Alley,en total se pueden encontrar 4.", ":puppet: esta literalmente dentro de Lefty.", "Hay una probabilidad demasiado baja de que en FNAF 3 nos aparezca Phantom Golden Freddy", "Ennard en SL es la fusion de Baby,Funtime Freddy,Funtime Foxy y Ballora.", "En FNAF Help Wanted somos un niño de 7 años.", "Cuando el jumoscare de Phantom Puppet nos sale en FNAF 3,es clavadito al de las cinematicas de FNAF 1.", "La primera victima de William Afton fue Charlie Emily,la hija de Henry.", "Las alucinaciones que vemos de Golden Freddy a lo largo del juego realmente no es una alucinacion,sino un fantasma.", "Puppet o alguna de sus formas aparecen en todos los juegos excepto en FNAF 1 y SL.", "Curiosamente el unico juego que tiene 5 noches es SL,si no contamos la Custom Night.", "Molten Feddy es la fusion de Funtime Freddy,Funtime Foxy y Ballora.", "Las cintas que escuchamos del tipo del telefono en FNAF 3,fueron grabadas antes que FNAF 2.", "La razon por la cual SpringTrap se dirige siempre hacia el sonido de un niño,en este caso Balloon Boy en FNAF 3,es porque los trajes de SpringLock estan diseñados para que cuando estaban en modo animatronico se moviesen automaticamente hacia donde estan los niños,para asi nunca tener que perderse,pero William Afton,al ser una fusion entre un humano y un traje SpringLock,no puede controlarlo al 100%. Y pues el traje aunque lo este poseyendo William Afton,se dirigira hacia el ruido.", "En los archivos de FNAF World,se puede encontrar la caja de FNAF 4 sin candados.", "Foxy esta fuera de servicio en FNAF 1 porque no les alcanzo el dinero para repararlo.", "En el final falso de FNAF Sl,Ennard nos persigue hasta casa,lo cual es muy espeluznante,menos mal que es falso.", "FNAF World primero era de pago,valia unos 10 euros,pero Scott Cawthon al ver que habia demasiado Hate en ese juego,decidio quitarlo de Steam,devolver el dinero a la gente que habia pagado por el juego y ponerlo gratis en GameJolt."];
   var aleatorio2 = Math.floor(Math.random()*(Mensajes2.length));
   if(message.content === (prefix + "fnaf.dato")){
     message.channel.send(Mensajes2[aleatorio2]);
   }
 });

 client.on("message", message => {
   var Jumpscares = ["https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/c28c9522-7c44-4740-89c1-2a99b10c06f4/dakewke-53f71fc6-cc71-4d32-b90a-4da2e4cd0139.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvYzI4Yzk1MjItN2M0NC00NzQwLTg5YzEtMmE5OWIxMGMwNmY0XC9kYWtld2tlLTUzZjcxZmM2LWNjNzEtNGQzMi1iOTBhLTRkYTJlNGNkMDEzOS5naWYifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.dfhVEo45SSQVOlIeAJmF5HihdvGm91QSlL6hyWa3mv0", "https://media1.tenor.com/images/e28e22f5091b5882cf3576c33830b67a/tenor.gif?itemid=15807366", "https://i.pinimg.com/originals/55/ab/40/55ab409422f5c6a538266a3e32960852.gif", "https://i.makeagif.com/media/11-03-2016/ANvgkt.gif", "https://i.makeagif.com/media/12-11-2016/fYJsTe.gif", "https://pa1.narvii.com/6789/6d089ff81dae81a1f07eaa816394a29bf7cae3ba_00.gif"];
   var Random = Math.floor(Math.random()*(Jumpscares.length));
   if(message.content === (prefix + "jumpscare")){
     let jumpscare = new MessageEmbed()
     .setDescription ("Ahi tienes tu jumpscare :D")
     .setColor (0x572364)
     .setImage (String([Jumpscares[Random]]));
     message.channel.send(jumpscare)
   }
 });

client.on("message", message =>{
   if(message.content.startsWith(prefix + "scoopear")){
    let user = message.mentions.users.first();
    const scooper = new MessageEmbed()
     .setDescription("<@"+ user.id + "> ha sido scoopeado.")
     .setImage("https://pa1.narvii.com/6288/b08d5a1fb3b645a6267b261825aade34f5c65b67_00.gif");
     message.channel.send(scooper)
   }
 });

 client.login("NzkwNjY3NzAwODQ5MzQ0NTQ0.X-D8rQ.usX_jsFqbiayIu3YjIDUsQqDug0");