var name = "AlbERt EINstEiN";

function nameChanger(oldName) {
    var finalName = oldName;
    // Your code goes here!
    //Tomar las 2 palabras y guardarlas
    //Seleccionar la primer palabra y capitalizarla
    // Seleccionar la segunda palabra y ponerla en mayusculas
    // arrojar el contenido en una string llamada finalName
    var firstString = finalName.slice(0, finalName.indexOf(' '));
    firstString = firstString.toLowerCase();
    firstString = firstString.charAt(0).toUpperCase().concat(firstString.slice(1,firstString.length));
    console.log(firstString)
    var secondString = finalName.slice(finalName.indexOf(' ')+1, finalName.length);
    finalName = firstString.concat(' ',secondString.toUpperCase())

    
    
    // Don't delete this line!
    return finalName;
};

// Did your code work? The line below will tell you!
console.log(nameChanger(name));


/* Given a string of a two word name formatted with any mix of capitalization, 
can you manipulate the string to ensure the first name has a capital first 
letter and the last name is totally capitalized? Assume there's 
a space between the names. For instance, turning a string 
like "cAmEROn PittMAN" into "Cameron PITTMAN". Your answer should be a 
single string saved to the variable called finalName. 
ake a look at MDN's documentation on string methods for help. */