
var colors = ["Blue", "Red", "Orange", "Purple", "Hazel", "Aquamarine", "Periwinkle", "Azure", "Fuchsia", "Chocolate", "Amber", "Amaranth"];
var reindeer = ["Dasher", "Dancer", "Prancer", "Vixen", "Comet", "Cupid", "Donner", "Blitzen"];


var hohohoElement = document.getElementById("coloredReindeer");
//Your task is to loop through all the reindeer in the array, and add the name of the reindeer to the single HTML <div> element provided. The name of the reindeer should be prepended with the corresponding color from the other array.
//
//For example:
//
//Blue Dasher
//Red Dancer
//etc...
//
//var colorValues = colors.length();
console.log(colors.length);
console.log(reindeer.length);
//for ( var i= 8; i <+ reindeer.length; i++)
//{
//    var name= reindeer[i];
//    console.log(i);
//}
//for ( var x= 0; x < colors.length; x++ ) {
//    var colorArray = colors[x];
//    console.log(colorArray);
//}

for ( var i= 0; i < reindeer.length; i++) {
    
    var name = reindeer[i];
    var color = colors[i];
    var colorReindeer = color + " " + name;
    console.log(colorReindeer);
    hohohoElement.innerHTML = hohohoElement.innerHTML + "<p>" + colors[i] + " " + reindeer[i]  +"</p>";
     
}

                              


