/**
 * Created by Wesam on 8/23/2016.
 */

document.write("<br>");
document.write("<br>");

var
    i,
    z;

document.write(" by for <br>");
for (i = 0; i <= 5; i++) {
    for (z = 0; z <= i; z++) {
        document.write("*");
    }
    document.write("<br>");
}

i = 0;
z = 0;

document.write(" by while <br>");
while (i <= 5) {
    while (z <= i) {
        document.write("*");
        z++;
    }
    document.write("<br>");
    z = 0;
    i++;
}
