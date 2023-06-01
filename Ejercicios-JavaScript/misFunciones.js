/** DOCUMENTACION EN JAVASCRIPT
 * Descripción(decir que hace nuestra funcion):conversion de unidades de metros,yardas,pies,pulgadas
 * @method cambiarUnidades
 * @param {string} id - El id de inputs de metros, yardaas, pies o pulgadas
 * @param {number} valor - el valor de los inputs de metreos, yardas, pies o pulgadas
 * @return Valor que retorna
 */
function cambiarUnidades(id,valor){
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