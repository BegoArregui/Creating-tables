var i, j, filas;

filas = Number(prompt("¿Cuántas filas quieres?:"));

//Abro la tabla y luego la variable para las filas

document.write("<table border='1' bgcolor='#93c572' bordercolor='black' width='100%'>");

for (i = 1; i <= filas; i++) 
{
    resto = i % 5;
        if (resto == 0) 
        {
            document.write("<tr><td bgcolor='#93c572'><img src='img/multiplo5.jpg' width='100px'></td></tr>");
        } 
        else 
        {
            document.write("<tr><td align='right' bgcolor='grey'><img src='img/no.jpg' width='100px'></td></tr>");
        } 
}
document.write("</table>");