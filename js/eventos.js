var teclas = {
    LEFT: 37,
    UP: 38,
    RIGHT: 39,
    DOWN: 40
};

document.addEventListener("keyup", dibujarTeclado);//Evento que sirve para que al momento de que yo pulse una tecla de las flechitas del teclado ocurra un evento
var cuadrito = document.getElementById("area_de_dibujo");
var papel = cuadrito.getContext("2d");
var x = 150, y = 150;

dibujarLinea("red", 149, 149, 151, 151, papel);

function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal, lienzo)
{
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.lineWidth = 3;//Para el ancho de la linea 3 pixeles
    lienzo.moveTo(xinicial, yinicial);//dibuja el primer punto
    lienzo.lineTo(xfinal, yfinal);//dibuja el punto final
    lienzo.stroke();//dibuja la linea
    lienzo.closePath();
}

function dibujarTeclado(evento)
{
    var colorcito = "green";
    var movimiento = 10;
    switch(evento.keyCode)
    {
        case teclas.DOWN:
            dibujarLinea(colorcito, x, y, x, y+movimiento, papel);
            y = y + movimiento;
        break;
        case teclas.UP:
            dibujarLinea(colorcito, x, y, x, y-movimiento, papel);
            y = y - movimiento;
        break;
        case teclas.RIGHT:
            dibujarLinea(colorcito, x, y, x+movimiento, y, papel);
            x = x + movimiento;
        break;
        case teclas.LEFT:
            dibujarLinea(colorcito, x, y, x-movimiento, y, papel);
            x = x - movimiento;
        break;
        default:
        break;
    }
}