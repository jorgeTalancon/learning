var bio = {
  "name": "Jorge Talancon",
  "role": "Bloque9's CEO",
  "contacts": {
      "mobile": "442 2855 442",
      "email": "test@bloque9.com",
      "github": "bloque9",
      "twitter": "@bloque9",
      "location": "San Francisco"
               },
  "welcomeMessage": "Hola, este es mi mensaje de bienvenida. Gracias por visitar mi Bio",
  "skils": [
    "awesommess", "delivering things", "cryogenic sleep", "saving the universe"],
  "bioPic": "images/fry.jpg" 
}

$("#header").append(bio.name + "<br>");
$("#main").append(bio.role + "<br>");
$("#main").append(bio.contacts.location)
