
/* Reglas de encriptación: 
"e" es convertido para "enter" 
"i" es convertido para "imes"
"a" es convertido para "ai"
"o" es convertido para "ober"
"u" es convertido para "ufat"
Solo letras minusculas
No se permite acentuación de palabras 
*/

/* Reglas de desencriptación: 
"enter" es convertido para "e" 
"imes" es convertido para "i"
"ai" es convertido para "a"
"ober" es convertido para "o"
"ufat" es convertido para "u"
Solo letras minusculas
No se permite acentuación de palabras   
*/

/************************VARIABLES Y OBJETOS*********************************/

let texto_Entrada = document.getElementById("textoEntrada");
let texto_Salida = document.getElementById("textoSalida");


//variables de mensaje de boton copiar//
let msj_Vacio = "¡Nada para copiar!"

//texto desencriptado exitosamente//
let msj_Visible = "¡Mensaje desencriptado!" 


const vocalesAEncriptar = {
  e:"enter",
  i:"imes",
  a:"ai",
  o:"ober",
  u:"ufat"
};

const vocalesADesencriptar = {
    enter:"e",
    imes:"i",
    ai:"a",    
    ober:"o",
    ufat:"u"
};


/*******************************FUNCIONES*********************************/ 


function deshabilitarTexto() {
    texto_Entrada.value="";
};

function habilitarMensajeCopiado(mensajeACopiar) {
    document.getElementById("mensaje-al-copiar").textContent = mensajeACopiar;
    document.getElementById("mensaje-al-copiar").style.visibility = "visible";        
};


function encriptarTexto(){
    texto_Salida.value = texto_Entrada.value.replace(/a|e|i|o|u/g,function (vocal) {
    return vocalesAEncriptar[vocal];
});
    deshabilitarTexto();
};
   
function desencriptarTexto(){
    texto_Salida.value = texto_Entrada.value.replace(/ai|enter|imes|ober|ufat/g,function (frase) {
    alert(msj_Visible);
    vocalesADesencriptar++;      
    return vocalesADesencriptar[frase];
    
});
    deshabilitarTexto();
};

function copiarTexto(){
 
    if (texto_Salida.value !== "") {
        navigator.clipboard.writeText(texto_Salida.value);
        textoSalida.focus();
    

    }
    else {
        alert(msj_Vacio);
    }
};


   
