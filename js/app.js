
/**
 *Funcion encargado de realizar la encripcion de la informacion capturada en el text area
 * Laura Lucia Chico Ramirez
 * @return{*} 
 */
function encriptar() {

        let texto = document.getElementById("textoEntrada").value;
        let textoEncriptado = "";
        
        // Recorremos cada letra del texto
        for (let i = 0; i < texto.length; i++) {
            if (texto[i] === "e") {
                textoEncriptado += "enter";
            } else if (texto[i] === "i") {
                textoEncriptado += "imes";
            } else if (texto[i] === "a") {
                textoEncriptado += "ai";
            } else if (texto[i] === "o") {
                textoEncriptado += "ober";
            } else if (texto[i] === "u") {
                textoEncriptado += "ufat";
            } else {
                textoEncriptado += texto[i]; // Si no es ninguna de las letras, se mantiene igual
            }
        }        
        mostrarElemento();
        asignarTextoElemento('p', textoEncriptado);
        ocultarElemento();
        limparTexto();
        return textoEncriptado;
    
   
}

/**
 *Funcion encarga de realizar la desencripcion de la informacion
  * Laura Lucia Chico Ramirez
  * @return {*} 
 */
function desencriptar() {
    let texto = document.getElementById("textoEntrada").value;
    let textoDesencriptado = "";
    let i = 0;
    
    while (i < texto.length) {
        if (texto[i] === "e" && texto.substring(i, i+5) === "enter") {
            textoDesencriptado += "e";
            i += 5; // Saltamos los siguientes 4 caracteres porque ya los procesamos
        } else if (texto[i] === "i" && texto.substring(i, i+4) === "imes") {
            textoDesencriptado += "i";
            i += 4;
        } else if (texto[i] === "a" && texto.substring(i, i+2) === "ai") {
            textoDesencriptado += "a";
            i += 2;
        } else if (texto[i] === "o" && texto.substring(i, i+4) === "ober") {
            textoDesencriptado += "o";
            i += 4;
        } else if (texto[i] === "u" && texto.substring(i, i+4) === "ufat") {
            textoDesencriptado += "u";
            i += 4;
        } else {
            textoDesencriptado += texto[i]; 
            i++;
        }
    }    
    mostrarElemento();
    asignarTextoElemento('p', textoDesencriptado);
    ocultarElemento();
    limparTexto();
} 

/**
 * esta funcion nos permite visualizar el boton de copiar cuando se cumpla las condiciones
 * Laura Lucia Chico Ramirez
 */
function mostrarElemento() {
        document.getElementById("copiar").style.display =  "block";
}
/**
 * esta funcion nos permite ocultar la informacion que necesitemos
 * Laura Lucia Chico Ramirez
 */
function ocultarElemento() {
    document.getElementById("imagenRespuesta").style.display = "none";   
    document.getElementById("textoEntrada2").style.display = "none";   
}

/**
 *
 * Esta funcion nos permite asignar texto a un elemente del html
 * Laura Lucia Chico Ramirez
 * @param {*} elemento
 * @param {*} texto
 */
function asignarTextoElemento(elemento, texto) {
    document.querySelector(elemento).innerHTML = texto;
}
 /**
  * esta funcion nos permite limpiar el texto de la caja de texto
  * Laura Lucia Chico Ramirez
  */
function limparTexto() {
    let valorCaja = document.querySelector('#textoEntrada');
    valorCaja.value = '';
}

/**
 * esta funcion nos permite copiar texto en en portapapeles
 * Laura Lucia Chico Ramirez
 */
function copiarTexto() {
    let texto = document.getElementById("textoInfo").innerText;    
    navigator.clipboard.writeText(texto).then(() => {        
    });
}

