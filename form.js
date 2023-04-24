function operaciones(variable){
    var numero1 = parseInt(document.getElementById("numero1").value);
    var numero2 = parseInt(document.getElementById("numero2").value);
    var respuesta;
    if (isNaN(numero1) || isNaN(numero2)) {
        document.getElementById("respuesta").innerHTML="Ingrese numeros validos"
    }else{
        switch(variable){
            case "suma":
                respuesta= numero1+numero2;
                document.getElementById("respuesta").innerHTML="El resultado de la suma es: "+respuesta;
                break;
            case "resta":
                respuesta= numero1-numero2;
                document.getElementById("respuesta").innerHTML="El resultado de la resta es: "+respuesta;
                break;
            case "multiplicacion":
                respuesta= numero1*numero2;
                document.getElementById("respuesta").innerHTML="El resultado de la multiplicacion es: "+respuesta;
                break;
            case "dividir":
                respuesta= numero1/numero2;
                document.getElementById("respuesta").innerHTML="El resultado de la division es: "+respuesta;
                break;
            case "mod%":
                respuesta= numero1%numero2;
                document.getElementById("respuesta").innerHTML="El resultado de Mod(%) es: "+respuesta;
                break;
        }
    }
}