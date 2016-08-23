/**
 * Created by Wesam on 8/23/2016.
 */

document.write("<br>");
document.write("<br>");

function Person(name , height) {
    this.name = name;
    this.height = height;
}

var personArray = [new Person("safi" , 170) , new Person("hasan" , 172) ];

for(var a = 0 ; a < personArray.length ; a++){
    for(var prop in personArray[a]){
        console.log();
        if (prop === 'height'){
            document.write( "object :" + a +" height " + personArray[a].height + "<br>") ;
        }
    }
}
