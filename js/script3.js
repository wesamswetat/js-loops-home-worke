/**
 * Created by Wesam on 8/23/2016.
 */

document.write("<br>");
document.write("<br>");
document.write("change all person height to 175 <br>");
document.write();

function Person(name , height) {
    this.name = name;
    this.height = height;
}

var personArray = [new Person("safi" , 170) , new Person("hasan" , 172) ];

for(var a = 0 ; a < personArray.length ; a++){
    for(var prop in personArray[a]){
        console.log();
        if (prop === 'height'){
            personArray[a].height = 175;
            document.write( "object :" + a +" height " + personArray[a].height + "<br>") ;
        }
    }
}
