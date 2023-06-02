/** DOCUMENTACION EN JAVASCRIPT
 * Descripción(decir que hace nuestra funcion):conversion de unidades de metros,yardas,pies,pulgadas
 * @method cambiarUnidades
 * @param {string} id - El id de inputs de metros, yardaas, pies o pulgadas
 * @param {number} valor - el valor de los inputs de metreos, yardas, pies o pulgadas
 * @return Valor que retorna
 */
function cambiarUnidades(id,valor){
    //se puede poner var metro,pie,yardas; para no tener que poner cada rato document..... y solo pondria metro=""; y asi respectivamente
    if(isNaN(valor)){
        alert("se ingreso un valor invalido");
        document.lasUnidades.unid_metro.value="";
        document.lasUnidades.unid_pulgada.value="";
        document.lasUnidades.unid_pie.value="";
        document.lasUnidades.unid_yarda.value="";
        //para evaluar si el valor ingresado es un numero o no y blanquearlo
    } else if(id=="metro"){
        document.lasUnidades.unid_pulgada.value=39.3701*valor;
        document.lasUnidades.unid_pie.value=3.28084*valor;
        document.lasUnidades.unid_yarda.value=1.09361*valor;
    }
    else if(id=="pulgada"){
        document.lasUnidades.unid_metro.value=0.0254*valor;
        document.lasUnidades.unid_pie.value=0.0833333*valor;
        document.lasUnidades.unid_yarda.value=0.0277778*valor;
    }
    else if(id=="yarda"){
        document.lasUnidades.unid_pulgada.value=36*valor;
        document.lasUnidades.unid_pie.value=3*valor;
        document.lasUnidades.unid_metro.value=0.9144*valor;
    }
}

function convertirGR(id){
    var grad, rad;
    if(id=="grados"){
        grad=document.getElementById("grados").value;
        rad=(grad*Math.PI)/180;

    }else if(id=="radianes"){
        rad =document.getElementById("radianes").value;
        grad =(rad*180)/Math.PI
    }
    document.getElementById("grados").value=grad;
    document.getElementById("radianes").value=rad;
}
function mostrar_ocultar(valorMO){
    if(valorMO=="val_mostrar"){
        document.getElementById("divMO").style.display='block';
    }else if(valorMO=="val_ocultar"){
        document.getElementById("divMO").style.display='none';
        //modificar las propiedades de css
    }
}
function calcularSuma(){
    var  num1, num2;
    num1=Number(document.getElementsByName("sum_num1")[0].value);
    num2=Number(document.getElementsByName("sum_num2")[0].value);
    document.getElementsByName("sum_total")[0].value=num1+num2;

}
function cargarWeb(){
    var cant,unidad,urlComp;
    cant=document.getElementById("distancia").value;
    unidad=document.getElementsByName("unidades")[0].value;
    urlComp="segundaWeb.html#"+cant+"#"+unidad;
    window.open(urlComp);
}
function  cargarResultado(){
    var urlComp,can,un;
    urlComp=window.location.href.split("/")[5];
    can=urlComp.split("#")[1];
    un=urlComp.split("#")[2];
    document.getElementById("dist").value=can+" "+un;
}
function dibujarCirCuad(){
    var canvas=document.getElementById("myCanvas");
    var ctx=canvas.getContext("2d");
    var xMax=canvas.width;
    var yMax=canvas.height;
    var margen=5;
    ctx.fillStyle="#333899";
    ctx.fillRect(0+margen,yMax-40-margen,40,40);
    ctx.arc(xMax/2,yMax/2,20,0,2*Math.PI);
    ctx.stroke();
    ctx.fillStyle="#99336b";
    ctx.fill();
}
var bandera;
function dibujar(event){
    var canvas=document.getElementById("canvasAdibujar");
    var ctx = canvas.getContext("2d");

    var posX=event.clientX;
    var posY=event.clientY;
    console.log(posX,posY);

    canvas.onmousedown=function (){bandera=true};
    canvas.onmouseup=function (){bandera=false};
    if(bandera){

        ctx.fillRect(posX,posY,5,5);
        ctx.fill;
    }

}
function limpiarCanvas(){
    var canvas=document.getElementById("canvasAdibujar");
    var ctx = canvas.getContext("2d");
    canvas.width=canvas.width;
}

function dibujarCuadriculado(){
    var canvas=document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");

    ctx.moveTo(0,20);
    ctx.lineTo(1000,600);
    ctx.strokeStyle="#141a1a";
    ctx.stroke();


}
//agrego imagenes en canva con esa funcion
function dibujarImagen(posX,posY){
    var canvas= document.getElementById("myCanvas");
    var ctx=canvas.getContext("2d");
    console.log(posX,posY);
    var img=new Image();
    img.src="images/auto.png";
    canvas.width=canvas.width;

    img.onload=function () {
        ctx.drawImage(img,posX, posY);
    }
}
x=0;
dx=2;
function animarAuto(){
    var canvas= document.getElementById("myCanvas");
    var ctx=canvas.getContext("2d");

    var img=new Image();
    img.src="images/auto.png";
    canvas.width=canvas.width;

    img.onload=function () {
        ctx.drawImage(img,x, 100)
    }
    if(x>canvas.width){
        x=0;
    }
    x+=dx;
}