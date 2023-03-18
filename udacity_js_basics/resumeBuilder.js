/*
This is empty on purpose! Your code to build the resume will go here.
 */
var name = 'Jorge'
var role = "Bloque9's CEO"

var formattedName = HTMLheaderName.replace("%data%", name);
var formmattedRole = HTMLheaderRole.replace("%data%", role);

$("#header").append(formattedName);
$("#header").prepend(formmattedRole);

