//Objetos DOM

let elegir_quincena = document.getElementById("elegir_quincena");
let quincena_escrita = document.getElementById("s_quincena_escrita");
let diasQuincena = document.getElementsByClassName("s_contenido_dia");
let los2Input = document.getElementsByClassName("los2_input");
let resultado_parcial = document.getElementsByClassName("resultado_parcial");
let caja_checkbox_feriado = document.getElementsByClassName("caja_checkbox_feriado");
let caja_checkbox_corrido = document.getElementsByClassName("caja_checkbox_corrido");
let calcular_horas = document.getElementById("ingresar_horas");
let totalHoras = document.getElementById("total_horas");

let ingresar_valor_numero = document.getElementById("ingresar_valor_numero");
let ingresar_valor_boton = document.getElementById("ingresar_valor_boton");
let resultado_final_dinero = document.getElementById("resultado_final_dinero");

//Valores Dias

let quincena_elegida;
let añoElegido;
let mesElegido;
let diaElegido;
let [dia1, dia2, dia3, dia4, dia5, dia6, dia7, dia8, dia9, dia10, dia11, dia12, dia13, dia14, dia15, dia16] = diasQuincena;


//Valores Inputs, Resultado Parcial, checkBoxs

let [fila1dato1, fila1dato2, fila2dato1, fila2dato2, fila3dato1, fila3dato2, fila4dato1, fila4dato2, fila5dato1, fila5dato2, fila6dato1, fila6dato2, fila7dato1, fila7dato2, fila8dato1, fila8dato2, fila9dato1, fila9dato2, fila10dato1, fila10dato2, fila11dato1, fila11dato2, fila12dato1, fila12dato2, fila13dato1, fila13dato2, fila14dato1, fila14dato2, fila15dato1, fila15dato2, fila16dato1, fila16dato2] = los2Input;
let [resultado01, resultado02, resultado03, resultado04, resultado05, resultado06, resultado07, resultado08, resultado09, resultado10, resultado11, resultado12, resultado13, resultado14, resultado15, resultado16] = resultado_parcial;
let [feriado1, feriado2, feriado3, feriado4, feriado5, feriado6, feriado7, feriado8, feriado9, feriado10, feriado11, feriado12, feriado13, feriado14, feriado15, feriado16] = caja_checkbox_feriado;
let [corrido1, corrido2, corrido3, corrido4, corrido5, corrido6, corrido7, corrido8, corrido9, corrido10, corrido11, corrido12, corrido13, corrido14, corrido15, corrido16] = caja_checkbox_corrido


//Funciones

function insertarQuincena(valor){
    if(valor <= 15){
        return "1ra quincena"
    }
    else{
        return "2da quincena"
    };

};

function insertarMes(valor){
    let resultado = (valor == 01) ? "Enero"
    : (valor == 02) ? "Febrero"
    : (valor == 03) ? "Marzo"
    : (valor == 04) ? "Abril"
    : (valor == 05) ? "Mayo"
    : (valor == 06) ? "Junio"
    : (valor == 07) ? "Julio"
    : (valor == 08) ? "Agosto"
    : (valor == 09) ? "Septiembre"
    : (valor == 10) ? "Octubre"
    : (valor == 11) ? "Noviembre"
    : (valor == 12) ? "Diciembre"
    : " "
    return resultado;
};

function insertarAño(valor){
    return valor;
};

function insertarQuincenaEscrita(){
    
    quincena_escrita.innerText = `${insertarQuincena(diaElegido)} de ${insertarMes(mesElegido)} de ${insertarAño(añoElegido)}`;
};

function insertarDiasAño1(valor, mes){
    valor = parseInt(valor);
    mes = parseInt(mes);
    if(mes === 01 && valor == 1){
        dia1.innerText = `Sab ${valor}`;
        dia2.innerText = `Dom ${++valor}`;
        dia3.innerText = `Lun ${++valor}`;
        dia4.innerText = `Mar ${++valor}`;
        dia5.innerText = `Mie ${++valor}`;
        dia6.innerText = `Jue ${++valor}`;
        dia7.innerText = `Vie ${++valor}`;
        dia8.innerText = `Sab ${++valor}`;
        dia9.innerText = `Dom ${++valor}`;
        dia10.innerText = `Lun ${++valor}`;
        dia11.innerText = `Mar ${++valor}`;
        dia12.innerText = `Mie ${++valor}`;
        dia13.innerText = `Jue ${++valor}`;
        dia14.innerText = `vie ${++valor}`;
        dia15.innerText = `Sab ${++valor}`;
        dia16.innerText = "---";
    }
    else if(mes === 01 && valor == 16){
        dia1.innerText = `Dom ${valor}`;
        dia2.innerText = `Lun ${++valor}`;
        dia3.innerText = `Mar ${++valor}`;
        dia4.innerText = `Mie ${++valor}`;
        dia5.innerText = `Jue ${++valor}`;
        dia6.innerText = `Vie ${++valor}`;
        dia7.innerText = `Sab ${++valor}`;
        dia8.innerText = `Dom ${++valor}`;
        dia9.innerText = `Lun ${++valor}`;
        dia10.innerText = `Mar ${++valor}`;
        dia11.innerText = `Mie ${++valor}`;
        dia12.innerText = `Jue ${++valor}`;
        dia13.innerText = `Vie ${++valor}`;
        dia14.innerText = `Sab ${++valor}`;
        dia15.innerText = `Dom ${++valor}`;
        dia16.innerText = `Lun ${++valor}`;
    };
    if(mes === 02 && valor == 1){
        dia1.innerText = `Mar ${valor}`;
        dia2.innerText = `Mie ${++valor}`;
        dia3.innerText = `Jue ${++valor}`;
        dia4.innerText = `Vie ${++valor}`;
        dia5.innerText = `Sab ${++valor}`;
        dia6.innerText = `Dom ${++valor}`;
        dia7.innerText = `Lun ${++valor}`;
        dia8.innerText = `Mar ${++valor}`;
        dia9.innerText = `Mie ${++valor}`;
        dia10.innerText = `Jue ${++valor}`;
        dia11.innerText = `Vie ${++valor}`;
        dia12.innerText = `Sab ${++valor}`;
        dia13.innerText = `Dom ${++valor}`;
        dia14.innerText = `Lun ${++valor}`;
        dia15.innerText = `Mar ${++valor}`;
        dia16.innerText = "---";
    }
    else if(mes === 02 && valor == 16){
        dia1.innerText = `Mie ${valor}`;
        dia2.innerText = `Jue ${++valor}`;
        dia3.innerText = `Vie ${++valor}`;
        dia4.innerText = `Sab ${++valor}`;
        dia5.innerText = `Dom ${++valor}`;
        dia6.innerText = `Lun ${++valor}`;
        dia7.innerText = `Mar ${++valor}`;
        dia8.innerText = `Mie ${++valor}`;
        dia9.innerText = `Jue ${++valor}`;
        dia10.innerText = `Vie ${++valor}`;
        dia11.innerText = `Sab ${++valor}`;
        dia12.innerText = `Dom ${++valor}`;
        dia13.innerText = `Lun ${++valor}`;
        dia14.innerText = "---";
        dia15.innerText = "---";
        dia16.innerText = "---";
    };
    if(mes === 03 && valor == 1){
        dia1.innerText = `Mar ${valor}`;
        dia2.innerText = `Mie ${++valor}`;
        dia3.innerText = `Jue ${++valor}`;
        dia4.innerText = `Vie ${++valor}`;
        dia5.innerText = `Sab ${++valor}`;
        dia6.innerText = `Dom ${++valor}`;
        dia7.innerText = `Lun ${++valor}`;
        dia8.innerText = `Mar ${++valor}`;
        dia9.innerText = `Mie ${++valor}`;
        dia10.innerText = `Jue ${++valor}`;
        dia11.innerText = `Vie ${++valor}`;
        dia12.innerText = `Sab ${++valor}`;
        dia13.innerText = `Dom ${++valor}`;
        dia14.innerText = `Lun ${++valor}`;
        dia15.innerText = `Mar ${++valor}`;
        dia16.innerText = "---";
    }
    else if(mes === 03 && valor == 16){
        dia1.innerText = `Mie ${valor}`;
        dia2.innerText = `Jue ${++valor}`;
        dia3.innerText = `Vie ${++valor}`;
        dia4.innerText = `Sab ${++valor}`;
        dia5.innerText = `Dom ${++valor}`;
        dia6.innerText = `Lun ${++valor}`;
        dia7.innerText = `Mar ${++valor}`;
        dia8.innerText = `Mie ${++valor}`;
        dia9.innerText = `Jue ${++valor}`;
        dia10.innerText = `Vie ${++valor}`;
        dia11.innerText = `Sab ${++valor}`;
        dia12.innerText = `Dom ${++valor}`;
        dia13.innerText = `Lun ${++valor}`;
        dia14.innerText = `Mar ${++valor}`;
        dia15.innerText = `Mie ${++valor}`;
        dia16.innerText = `Jue ${++valor}`;
    };
    if(mes === 04 && valor == 1){
        dia1.innerText = `Vie ${valor}`;
        dia2.innerText = `Sab ${++valor}`;
        dia3.innerText = `Dom ${++valor}`;
        dia4.innerText = `Lun ${++valor}`;
        dia5.innerText = `Mar ${++valor}`;
        dia6.innerText = `Mie ${++valor}`;
        dia7.innerText = `Jue ${++valor}`;
        dia8.innerText = `Vie ${++valor}`;
        dia9.innerText = `Sab ${++valor}`;
        dia10.innerText = `Dom ${++valor}`;
        dia11.innerText = `Lun ${++valor}`;
        dia12.innerText = `Mar ${++valor}`;
        dia13.innerText = `Mie ${++valor}`;
        dia14.innerText = `Jue ${++valor}`;
        dia15.innerText = `Vie ${++valor}`;
        dia16.innerText = "---";
    }
    else if(mes === 04 && valor == 16){
        dia1.innerText = `Sab ${valor}`;
        dia2.innerText = `Dom ${++valor}`;
        dia3.innerText = `Lun ${++valor}`;
        dia4.innerText = `Mar ${++valor}`;
        dia5.innerText = `Mie ${++valor}`;
        dia6.innerText = `Jue ${++valor}`;
        dia7.innerText = `Vie ${++valor}`;
        dia8.innerText = `Sab ${++valor}`;
        dia9.innerText = `Dom ${++valor}`;
        dia10.innerText = `Lun ${++valor}`;
        dia11.innerText = `Mar ${++valor}`;
        dia12.innerText = `Mie ${++valor}`;
        dia13.innerText = `Jue ${++valor}`;
        dia14.innerText = `Vie ${++valor}`;
        dia15.innerText = `Sab ${++valor}`;
        dia16.innerText = "---";
    };
    if(mes === 05 && valor == 1){
        dia1.innerText = `Dom ${valor}`;
        dia2.innerText = `Lun ${++valor}`;
        dia3.innerText = `Mar ${++valor}`;
        dia4.innerText = `Mie ${++valor}`;
        dia5.innerText = `Jue ${++valor}`;
        dia6.innerText = `Vie ${++valor}`;
        dia7.innerText = `Sab ${++valor}`;
        dia8.innerText = `Dom ${++valor}`;
        dia9.innerText = `Lun ${++valor}`;
        dia10.innerText = `Mar ${++valor}`;
        dia11.innerText = `Mie ${++valor}`;
        dia12.innerText = `Jue ${++valor}`;
        dia13.innerText = `Vie ${++valor}`;
        dia14.innerText = `Sab ${++valor}`;
        dia15.innerText = `Dom ${++valor}`;
        dia16.innerText = "---";
    }
    else if(mes === 05 && valor == 16){
        dia1.innerText = `Lun ${valor}`;
        dia2.innerText = `Mar ${++valor}`;
        dia3.innerText = `Mie ${++valor}`;
        dia4.innerText = `Jue ${++valor}`;
        dia5.innerText = `Vie ${++valor}`;
        dia6.innerText = `Sab ${++valor}`;
        dia7.innerText = `Dom ${++valor}`;
        dia8.innerText = `Lun ${++valor}`;
        dia9.innerText = `Mar ${++valor}`;
        dia10.innerText = `Mie ${++valor}`;
        dia11.innerText = `Jue ${++valor}`;
        dia12.innerText = `Vie ${++valor}`;
        dia13.innerText = `Sab ${++valor}`;
        dia14.innerText = `Dom ${++valor}`;
        dia15.innerText = `Lun ${++valor}`;
        dia16.innerText = `Mar ${++valor}`;
    };
    if(mes === 06 && valor == 1){
        dia1.innerText = `Mie ${valor}`;
        dia2.innerText = `Jue ${++valor}`;
        dia3.innerText = `Vie ${++valor}`;
        dia4.innerText = `Sab ${++valor}`;
        dia5.innerText = `Dom ${++valor}`;
        dia6.innerText = `Lun ${++valor}`;
        dia7.innerText = `Mar ${++valor}`;
        dia8.innerText = `Mie ${++valor}`;
        dia9.innerText = `Jue ${++valor}`;
        dia10.innerText = `Vie ${++valor}`;
        dia11.innerText = `Sab ${++valor}`;
        dia12.innerText = `Dom ${++valor}`;
        dia13.innerText = `Lun ${++valor}`;
        dia14.innerText = `Mar ${++valor}`;
        dia15.innerText = `Mie ${++valor}`;
        dia16.innerText = "---";
    }
    else if(mes === 06 && valor == 16){
        dia1.innerText = `Jue ${valor}`;
        dia2.innerText = `Vie ${++valor}`;
        dia3.innerText = `Sab ${++valor}`;
        dia4.innerText = `Dom ${++valor}`;
        dia5.innerText = `Lun ${++valor}`;
        dia6.innerText = `Mar ${++valor}`;
        dia7.innerText = `Mie ${++valor}`;
        dia8.innerText = `Jue ${++valor}`;
        dia9.innerText = `Vie ${++valor}`;
        dia10.innerText = `Sab ${++valor}`;
        dia11.innerText = `Dom ${++valor}`;
        dia12.innerText = `Lun ${++valor}`;
        dia13.innerText = `Mar ${++valor}`;
        dia14.innerText = `Mie ${++valor}`;
        dia15.innerText = `Jue ${++valor}`;
        dia16.innerText = "---";
    };
    if(mes === 07 && valor == 1){
        dia1.innerText = `Vie ${valor}`;
        dia2.innerText = `Sab ${++valor}`;
        dia3.innerText = `Dom ${++valor}`;
        dia4.innerText = `Lun ${++valor}`;
        dia5.innerText = `Mar ${++valor}`;
        dia6.innerText = `Mie ${++valor}`;
        dia7.innerText = `Jue ${++valor}`;
        dia8.innerText = `Vie ${++valor}`;
        dia9.innerText = `Sab ${++valor}`;
        dia10.innerText = `Dom ${++valor}`;
        dia11.innerText = `Lun ${++valor}`;
        dia12.innerText = `Mar ${++valor}`;
        dia13.innerText = `Mie ${++valor}`;
        dia14.innerText = `Jue ${++valor}`;
        dia15.innerText = `Vie ${++valor}`;
        dia16.innerText = "---";
    }
    else if(mes === 07 && valor == 16){
        dia1.innerText = `Sab ${valor}`;
        dia2.innerText = `Dom ${++valor}`;
        dia3.innerText = `Lun ${++valor}`;
        dia4.innerText = `Mar ${++valor}`;
        dia5.innerText = `Mie ${++valor}`;
        dia6.innerText = `Jue ${++valor}`;
        dia7.innerText = `Vie ${++valor}`;
        dia8.innerText = `Sab ${++valor}`;
        dia9.innerText = `Dom ${++valor}`;
        dia10.innerText = `Lun ${++valor}`;
        dia11.innerText = `Mar ${++valor}`;
        dia12.innerText = `Mie ${++valor}`;
        dia13.innerText = `Jue ${++valor}`;
        dia14.innerText = `Vie ${++valor}`;
        dia15.innerText = `Sab ${++valor}`;
        dia16.innerText = `Dom ${++valor}`;
    };
    if(mes === 08 && valor == 1){
        dia1.innerText = `Lun ${valor}`;
        dia2.innerText = `Mar ${++valor}`;
        dia3.innerText = `Mie ${++valor}`;
        dia4.innerText = `Jue ${++valor}`;
        dia5.innerText = `Vie ${++valor}`;
        dia6.innerText = `Sab ${++valor}`;
        dia7.innerText = `Dom ${++valor}`;
        dia8.innerText = `Lun ${++valor}`;
        dia9.innerText = `Mar ${++valor}`;
        dia10.innerText = `Mie ${++valor}`;
        dia11.innerText = `Jue ${++valor}`;
        dia12.innerText = `Vie ${++valor}`;
        dia13.innerText = `Sab ${++valor}`;
        dia14.innerText = `Dom ${++valor}`;
        dia15.innerText = `Lun ${++valor}`;
        dia16.innerText = "---";
    }
    else if(mes === 08 && valor == 16){
        dia1.innerText = `Mar ${valor}`;
        dia2.innerText = `Mie ${++valor}`;
        dia3.innerText = `Jue ${++valor}`;
        dia4.innerText = `Vie ${++valor}`;
        dia5.innerText = `Sab ${++valor}`;
        dia6.innerText = `Dom ${++valor}`;
        dia7.innerText = `Lun ${++valor}`;
        dia8.innerText = `Mar ${++valor}`;
        dia9.innerText = `Mie ${++valor}`;
        dia10.innerText = `Jue ${++valor}`;
        dia11.innerText = `Vie ${++valor}`;
        dia12.innerText = `Sab ${++valor}`;
        dia13.innerText = `Dom ${++valor}`;
        dia14.innerText = `Lun ${++valor}`;
        dia15.innerText = `Mar ${++valor}`;
        dia16.innerText = `Mie ${++valor}`;
    };
    if(mes === 09 && valor == 1){
        dia1.innerText = `Jue ${valor}`;
        dia2.innerText = `Vie ${++valor}`;
        dia3.innerText = `Sab ${++valor}`;
        dia4.innerText = `Dom ${++valor}`;
        dia5.innerText = `Lun ${++valor}`;
        dia6.innerText = `Mar ${++valor}`;
        dia7.innerText = `Mie ${++valor}`;
        dia8.innerText = `Jue ${++valor}`;
        dia9.innerText = `Vie ${++valor}`;
        dia10.innerText = `Sab ${++valor}`;
        dia11.innerText = `Dom ${++valor}`;
        dia12.innerText = `Lun ${++valor}`;
        dia13.innerText = `Mar ${++valor}`;
        dia14.innerText = `Mie ${++valor}`;
        dia15.innerText = `Jue ${++valor}`;
        dia16.innerText = "---";
    }
    else if(mes === 09 && valor == 16){
        dia1.innerText = `Vie ${valor}`;
        dia2.innerText = `Sab ${++valor}`;
        dia3.innerText = `Dom ${++valor}`;
        dia4.innerText = `Lun ${++valor}`;
        dia5.innerText = `Mar ${++valor}`;
        dia6.innerText = `Mie ${++valor}`;
        dia7.innerText = `Jue ${++valor}`;
        dia8.innerText = `Vie ${++valor}`;
        dia9.innerText = `Sab ${++valor}`;
        dia10.innerText = `Dom ${++valor}`;
        dia11.innerText = `Lun ${++valor}`;
        dia12.innerText = `Mar ${++valor}`;
        dia13.innerText = `Mie ${++valor}`;
        dia14.innerText = `Jue ${++valor}`;
        dia15.innerText = `Vie ${++valor}`;
        dia16.innerText = "---";
    };
    if(mes === 10 && valor == 1){
        dia1.innerText = `Sab ${valor}`;
        dia2.innerText = `Dom ${++valor}`;
        dia3.innerText = `Lun ${++valor}`;
        dia4.innerText = `Mar ${++valor}`;
        dia5.innerText = `Mie ${++valor}`;
        dia6.innerText = `Jue ${++valor}`;
        dia7.innerText = `Vie ${++valor}`;
        dia8.innerText = `Sab ${++valor}`;
        dia9.innerText = `Dom ${++valor}`;
        dia10.innerText = `Lun ${++valor}`;
        dia11.innerText = `Mar ${++valor}`;
        dia12.innerText = `Mie ${++valor}`;
        dia13.innerText = `Jue ${++valor}`;
        dia14.innerText = `vie ${++valor}`;
        dia15.innerText = `Sab ${++valor}`;
        dia16.innerText = "---";
    }
    else if(mes === 10 && valor == 16){
        dia1.innerText = `Dom ${valor}`;
        dia2.innerText = `Lun ${++valor}`;
        dia3.innerText = `Mar ${++valor}`;
        dia4.innerText = `Mie ${++valor}`;
        dia5.innerText = `Jue ${++valor}`;
        dia6.innerText = `Vie ${++valor}`;
        dia7.innerText = `Sab ${++valor}`;
        dia8.innerText = `Dom ${++valor}`;
        dia9.innerText = `Lun ${++valor}`;
        dia10.innerText = `Mar ${++valor}`;
        dia11.innerText = `Mie ${++valor}`;
        dia12.innerText = `Jue ${++valor}`;
        dia13.innerText = `Vie ${++valor}`;
        dia14.innerText = `Sab ${++valor}`;
        dia15.innerText = `Dom ${++valor}`;
        dia16.innerText = `Lun ${++valor}`;
    };
    if(mes === 11 && valor == 1){
        dia1.innerText = `Mar ${valor}`;
        dia2.innerText = `Mie ${++valor}`;
        dia3.innerText = `Jue ${++valor}`;
        dia4.innerText = `Vie ${++valor}`;
        dia5.innerText = `Sab ${++valor}`;
        dia6.innerText = `Dom ${++valor}`;
        dia7.innerText = `Lun ${++valor}`;
        dia8.innerText = `Mar ${++valor}`;
        dia9.innerText = `Mie ${++valor}`;
        dia10.innerText = `Jue ${++valor}`;
        dia11.innerText = `Vie ${++valor}`;
        dia12.innerText = `Sab ${++valor}`;
        dia13.innerText = `Dom ${++valor}`;
        dia14.innerText = `Lun ${++valor}`;
        dia15.innerText = `Mar ${++valor}`;
        dia16.innerText = "---";
    }
    else if(mes === 11 && valor == 16){
        dia1.innerText = `Mie ${valor}`;
        dia2.innerText = `Jue ${++valor}`;
        dia3.innerText = `Vie ${++valor}`;
        dia4.innerText = `Sab ${++valor}`;
        dia5.innerText = `Dom ${++valor}`;
        dia6.innerText = `Lun ${++valor}`;
        dia7.innerText = `Mar ${++valor}`;
        dia8.innerText = `Mie ${++valor}`;
        dia9.innerText = `Jue ${++valor}`;
        dia10.innerText = `Vie ${++valor}`;
        dia11.innerText = `Sab ${++valor}`;
        dia12.innerText = `Dom ${++valor}`;
        dia13.innerText = `Lun ${++valor}`;
        dia14.innerText = `Mar ${++valor}`;
        dia15.innerText = `Mie ${++valor}`;
        dia16.innerText = "---";
    };
    if(mes === 12 && valor == 1){
        dia1.innerText = `Jue ${valor}`;
        dia2.innerText = `Vie ${++valor}`;
        dia3.innerText = `Sab ${++valor}`;
        dia4.innerText = `Dom ${++valor}`;
        dia5.innerText = `Lun ${++valor}`;
        dia6.innerText = `Mar ${++valor}`;
        dia7.innerText = `Mie ${++valor}`;
        dia8.innerText = `Jue ${++valor}`;
        dia9.innerText = `Vie ${++valor}`;
        dia10.innerText = `Sab ${++valor}`;
        dia11.innerText = `Dom ${++valor}`;
        dia12.innerText = `Lun ${++valor}`;
        dia13.innerText = `Mar ${++valor}`;
        dia14.innerText = `Mie ${++valor}`;
        dia15.innerText = `Jue ${++valor}`;
        dia16.innerText = "---";
    }
    else if(mes === 12 && valor == 16){
        dia1.innerText = `Vie ${valor}`;
        dia2.innerText = `Sab ${++valor}`;
        dia3.innerText = `Dom ${++valor}`;
        dia4.innerText = `Lun ${++valor}`;
        dia5.innerText = `Mar ${++valor}`;
        dia6.innerText = `Mie ${++valor}`;
        dia7.innerText = `Jue ${++valor}`;
        dia8.innerText = `Vie ${++valor}`;
        dia9.innerText = `Sab ${++valor}`;
        dia10.innerText = `Dom ${++valor}`;
        dia11.innerText = `Lun ${++valor}`;
        dia12.innerText = `Mar ${++valor}`;
        dia13.innerText = `Mie ${++valor}`;
        dia14.innerText = `Jue ${++valor}`;
        dia15.innerText = `Vie ${++valor}`;
        dia16.innerText = `Sab ${++valor}`;
    };
    


};

function insertarDiasAño2(valor, mes){
    valor = parseInt(valor);
    mes = parseInt(mes);
    if(mes === 01 && valor == 1){
        dia1.innerText = `Dom ${valor}`;
        dia2.innerText = `Lun ${++valor}`;
        dia3.innerText = `Mar ${++valor}`;
        dia4.innerText = `Mie ${++valor}`;
        dia5.innerText = `Jue ${++valor}`;
        dia6.innerText = `Vie ${++valor}`;
        dia7.innerText = `Sab ${++valor}`;
        dia8.innerText = `Dom ${++valor}`;
        dia9.innerText = `Lun ${++valor}`;
        dia10.innerText = `Mar ${++valor}`;
        dia11.innerText = `Mie ${++valor}`;
        dia12.innerText = `Jue ${++valor}`;
        dia13.innerText = `Vie ${++valor}`;
        dia14.innerText = `Sab ${++valor}`;
        dia15.innerText = `Dom ${++valor}`;
        dia16.innerText = "---";
    }
    else if(mes === 01 && valor == 16){
        dia1.innerText = `Lun ${valor}`;
        dia2.innerText = `Mar ${++valor}`;
        dia3.innerText = `Mie ${++valor}`;
        dia4.innerText = `Jue ${++valor}`;
        dia5.innerText = `Vie ${++valor}`;
        dia6.innerText = `Sab ${++valor}`;
        dia7.innerText = `Dom ${++valor}`;
        dia8.innerText = `Lun ${++valor}`;
        dia9.innerText = `Mar ${++valor}`;
        dia10.innerText = `Mie ${++valor}`;
        dia11.innerText = `Jue ${++valor}`;
        dia12.innerText = `Vie ${++valor}`;
        dia13.innerText = `Sab ${++valor}`;
        dia14.innerText = `Dom ${++valor}`;
        dia15.innerText = `Lun ${++valor}`;
        dia16.innerText = `Mar ${++valor}`;
    };
    if(mes === 02 && valor == 1){
        dia1.innerText = `Mie ${valor}`;
        dia2.innerText = `Jue ${++valor}`;
        dia3.innerText = `Vie ${++valor}`;
        dia4.innerText = `Sab ${++valor}`;
        dia5.innerText = `Dom ${++valor}`;
        dia6.innerText = `Lun ${++valor}`;
        dia7.innerText = `Mar ${++valor}`;
        dia8.innerText = `Mie ${++valor}`;
        dia9.innerText = `Jue ${++valor}`;
        dia10.innerText = `Vie ${++valor}`;
        dia11.innerText = `Sab ${++valor}`;
        dia12.innerText = `Dom ${++valor}`;
        dia13.innerText = `Lun ${++valor}`;
        dia14.innerText = `Mar ${++valor}`;
        dia15.innerText = `Mie ${++valor}`;
        dia16.innerText = "---";
    }
    else if(mes === 02 && valor == 16){
        dia1.innerText = `Jue ${valor}`;
        dia2.innerText = `Vie ${++valor}`;
        dia3.innerText = `Sab ${++valor}`;
        dia4.innerText = `Dom ${++valor}`;
        dia5.innerText = `Lun ${++valor}`;
        dia6.innerText = `Mar ${++valor}`;
        dia7.innerText = `Mie ${++valor}`;
        dia8.innerText = `Jue ${++valor}`;
        dia9.innerText = `Vie ${++valor}`;
        dia10.innerText = `Sab ${++valor}`;
        dia11.innerText = `Dom ${++valor}`;
        dia12.innerText = `Lun ${++valor}`;
        dia13.innerText = `Mar ${++valor}`;
        dia14.innerText = "---";
        dia15.innerText = "---";
        dia16.innerText = "---";
    };
    if(mes === 03 && valor == 1){
        dia1.innerText = `Mie ${valor}`;
        dia2.innerText = `Jue ${++valor}`;
        dia3.innerText = `Vie ${++valor}`;
        dia4.innerText = `Sab ${++valor}`;
        dia5.innerText = `Dom ${++valor}`;
        dia6.innerText = `Lun ${++valor}`;
        dia7.innerText = `Mar ${++valor}`;
        dia8.innerText = `Mie ${++valor}`;
        dia9.innerText = `Jue ${++valor}`;
        dia10.innerText = `Vie ${++valor}`;
        dia11.innerText = `Sab ${++valor}`;
        dia12.innerText = `Dom ${++valor}`;
        dia13.innerText = `Lun ${++valor}`;
        dia14.innerText = `Mar ${++valor}`;
        dia15.innerText = `Mie ${++valor}`;
        dia16.innerText = "---";
    }
    else if(mes === 03 && valor == 16){
        dia1.innerText = `Jue ${valor}`;
        dia2.innerText = `Vie ${++valor}`;
        dia3.innerText = `Sab ${++valor}`;
        dia4.innerText = `Dom ${++valor}`;
        dia5.innerText = `Lun ${++valor}`;
        dia6.innerText = `Mar ${++valor}`;
        dia7.innerText = `Mie ${++valor}`;
        dia8.innerText = `Jue ${++valor}`;
        dia9.innerText = `Vie ${++valor}`;
        dia10.innerText = `Sab ${++valor}`;
        dia11.innerText = `Dom ${++valor}`;
        dia12.innerText = `Lun ${++valor}`;
        dia13.innerText = `Mar ${++valor}`;
        dia14.innerText = `Mie ${++valor}`;
        dia15.innerText = `Jue ${++valor}`;
        dia16.innerText = `Vie ${++valor}`;
    };
    if(mes === 04 && valor == 1){
        dia1.innerText = `Sab ${valor}`;
        dia2.innerText = `Dom ${++valor}`;
        dia3.innerText = `Lun ${++valor}`;
        dia4.innerText = `Mar ${++valor}`;
        dia5.innerText = `Mie ${++valor}`;
        dia6.innerText = `Jue ${++valor}`;
        dia7.innerText = `Vie ${++valor}`;
        dia8.innerText = `Sab ${++valor}`;
        dia9.innerText = `Dom ${++valor}`;
        dia10.innerText = `Lun ${++valor}`;
        dia11.innerText = `Mar ${++valor}`;
        dia12.innerText = `Mie ${++valor}`;
        dia13.innerText = `Jue ${++valor}`;
        dia14.innerText = `vie ${++valor}`;
        dia15.innerText = `Sab ${++valor}`;
        dia16.innerText = "---";
    }
    else if(mes === 04 && valor == 16){
        dia1.innerText = `Dom ${valor}`;
        dia2.innerText = `Lun ${++valor}`;
        dia3.innerText = `Mar ${++valor}`;
        dia4.innerText = `Mie ${++valor}`;
        dia5.innerText = `Jue ${++valor}`;
        dia6.innerText = `Vie ${++valor}`;
        dia7.innerText = `Sab ${++valor}`;
        dia8.innerText = `Dom ${++valor}`;
        dia9.innerText = `Lun ${++valor}`;
        dia10.innerText = `Mar ${++valor}`;
        dia11.innerText = `Mie ${++valor}`;
        dia12.innerText = `Jue ${++valor}`;
        dia13.innerText = `Vie ${++valor}`;
        dia14.innerText = `Sab ${++valor}`;
        dia15.innerText = `Dom ${++valor}`;
        dia16.innerText = "---";
    };
    if(mes === 05 && valor == 1){
        dia1.innerText = `Lun ${valor}`;
        dia2.innerText = `Mar ${++valor}`;
        dia3.innerText = `Mie ${++valor}`;
        dia4.innerText = `Jue ${++valor}`;
        dia5.innerText = `Vie ${++valor}`;
        dia6.innerText = `Sab ${++valor}`;
        dia7.innerText = `Dom ${++valor}`;
        dia8.innerText = `Lun ${++valor}`;
        dia9.innerText = `Mar ${++valor}`;
        dia10.innerText = `Mie ${++valor}`;
        dia11.innerText = `Jue ${++valor}`;
        dia12.innerText = `Vie ${++valor}`;
        dia13.innerText = `Sab ${++valor}`;
        dia14.innerText = `Dom ${++valor}`;
        dia15.innerText = `Lun ${++valor}`;
        dia16.innerText = "---";
    }
    else if(mes === 05 && valor == 16){
        dia1.innerText = `Mar ${valor}`;
        dia2.innerText = `Mie ${++valor}`;
        dia3.innerText = `Jue ${++valor}`;
        dia4.innerText = `Vie ${++valor}`;
        dia5.innerText = `Sab ${++valor}`;
        dia6.innerText = `Dom ${++valor}`;
        dia7.innerText = `Lun ${++valor}`;
        dia8.innerText = `Mar ${++valor}`;
        dia9.innerText = `Mie ${++valor}`;
        dia10.innerText = `Jue ${++valor}`;
        dia11.innerText = `Vie ${++valor}`;
        dia12.innerText = `Sab ${++valor}`;
        dia13.innerText = `Dom ${++valor}`;
        dia14.innerText = `Lun ${++valor}`;
        dia15.innerText = `Mar ${++valor}`;
        dia16.innerText = `Mie ${++valor}`;
    };
    if(mes === 06 && valor == 1){
        dia1.innerText = `Jue ${valor}`;
        dia2.innerText = `Vie ${++valor}`;
        dia3.innerText = `Sab ${++valor}`;
        dia4.innerText = `Dom ${++valor}`;
        dia5.innerText = `Lun ${++valor}`;
        dia6.innerText = `Mar ${++valor}`;
        dia7.innerText = `Mie ${++valor}`;
        dia8.innerText = `Jue ${++valor}`;
        dia9.innerText = `Vie ${++valor}`;
        dia10.innerText = `Sab ${++valor}`;
        dia11.innerText = `Dom ${++valor}`;
        dia12.innerText = `Lun ${++valor}`;
        dia13.innerText = `Mar ${++valor}`;
        dia14.innerText = `Mie ${++valor}`;
        dia15.innerText = `Jue ${++valor}`;
        dia16.innerText = "---";
    }
    else if(mes === 06 && valor == 16){
        dia1.innerText = `Vie ${valor}`;
        dia2.innerText = `Sab ${++valor}`;
        dia3.innerText = `Dom ${++valor}`;
        dia4.innerText = `Lun ${++valor}`;
        dia5.innerText = `Mar ${++valor}`;
        dia6.innerText = `Mie ${++valor}`;
        dia7.innerText = `Jue ${++valor}`;
        dia8.innerText = `Vie ${++valor}`;
        dia9.innerText = `Sab ${++valor}`;
        dia10.innerText = `Dom ${++valor}`;
        dia11.innerText = `Lun ${++valor}`;
        dia12.innerText = `Mar ${++valor}`;
        dia13.innerText = `Mie ${++valor}`;
        dia14.innerText = `Jue ${++valor}`;
        dia15.innerText = `Vie ${++valor}`;
        dia16.innerText = "---";
    };
    if(mes === 07 && valor == 1){
        dia1.innerText = `Sab ${valor}`;
        dia2.innerText = `Dom ${++valor}`;
        dia3.innerText = `Lun ${++valor}`;
        dia4.innerText = `Mar ${++valor}`;
        dia5.innerText = `Mie ${++valor}`;
        dia6.innerText = `Jue ${++valor}`;
        dia7.innerText = `Vie ${++valor}`;
        dia8.innerText = `Sab ${++valor}`;
        dia9.innerText = `Dom ${++valor}`;
        dia10.innerText = `Lun ${++valor}`;
        dia11.innerText = `Mar ${++valor}`;
        dia12.innerText = `Mie ${++valor}`;
        dia13.innerText = `Jue ${++valor}`;
        dia14.innerText = `vie ${++valor}`;
        dia15.innerText = `Sab ${++valor}`;
        dia16.innerText = "---";
    }
    else if(mes === 07 && valor == 16){
        dia1.innerText = `Dom ${valor}`;
        dia2.innerText = `Lun ${++valor}`;
        dia3.innerText = `Mar ${++valor}`;
        dia4.innerText = `Mie ${++valor}`;
        dia5.innerText = `Jue ${++valor}`;
        dia6.innerText = `Vie ${++valor}`;
        dia7.innerText = `Sab ${++valor}`;
        dia8.innerText = `Dom ${++valor}`;
        dia9.innerText = `Lun ${++valor}`;
        dia10.innerText = `Mar ${++valor}`;
        dia11.innerText = `Mie ${++valor}`;
        dia12.innerText = `Jue ${++valor}`;
        dia13.innerText = `Vie ${++valor}`;
        dia14.innerText = `Sab ${++valor}`;
        dia15.innerText = `Dom ${++valor}`;
        dia16.innerText = `Lun ${++valor}`;
    };
    if(mes === 08 && valor == 1){
        dia1.innerText = `Mar ${valor}`;
        dia2.innerText = `Mie ${++valor}`;
        dia3.innerText = `Jue ${++valor}`;
        dia4.innerText = `Vie ${++valor}`;
        dia5.innerText = `Sab ${++valor}`;
        dia6.innerText = `Dom ${++valor}`;
        dia7.innerText = `Lun ${++valor}`;
        dia8.innerText = `Mar ${++valor}`;
        dia9.innerText = `Mie ${++valor}`;
        dia10.innerText = `Jue ${++valor}`;
        dia11.innerText = `Vie ${++valor}`;
        dia12.innerText = `Sab ${++valor}`;
        dia13.innerText = `Dom ${++valor}`;
        dia14.innerText = `Lun ${++valor}`;
        dia15.innerText = `Mar ${++valor}`;
        dia16.innerText = "---";
    }
    else if(mes === 08 && valor == 16){
        dia1.innerText = `Mie ${valor}`;
        dia2.innerText = `Jue ${++valor}`;
        dia3.innerText = `Vie ${++valor}`;
        dia4.innerText = `Sab ${++valor}`;
        dia5.innerText = `Dom ${++valor}`;
        dia6.innerText = `Lun ${++valor}`;
        dia7.innerText = `Mar ${++valor}`;
        dia8.innerText = `Mie ${++valor}`;
        dia9.innerText = `Jue ${++valor}`;
        dia10.innerText = `Vie ${++valor}`;
        dia11.innerText = `Sab ${++valor}`;
        dia12.innerText = `Dom ${++valor}`;
        dia13.innerText = `Lun ${++valor}`;
        dia14.innerText = `Mar ${++valor}`;
        dia15.innerText = `Mie ${++valor}`;
        dia16.innerText = `Jue ${++valor}`;
    };
    if(mes === 09 && valor == 1){
        dia1.innerText = `Vie ${valor}`;
        dia2.innerText = `Sab ${++valor}`;
        dia3.innerText = `Dom ${++valor}`;
        dia4.innerText = `Lun ${++valor}`;
        dia5.innerText = `Mar ${++valor}`;
        dia6.innerText = `Mie ${++valor}`;
        dia7.innerText = `Jue ${++valor}`;
        dia8.innerText = `Vie ${++valor}`;
        dia9.innerText = `Sab ${++valor}`;
        dia10.innerText = `Dom ${++valor}`;
        dia11.innerText = `Lun ${++valor}`;
        dia12.innerText = `Mar ${++valor}`;
        dia13.innerText = `Mie ${++valor}`;
        dia14.innerText = `Jue ${++valor}`;
        dia15.innerText = `Vie ${++valor}`;
        dia16.innerText = "---";
    }
    else if(mes === 09 && valor == 16){
        dia1.innerText = `Sab ${valor}`;
        dia2.innerText = `Dom ${++valor}`;
        dia3.innerText = `Lun ${++valor}`;
        dia4.innerText = `Mar ${++valor}`;
        dia5.innerText = `Mie ${++valor}`;
        dia6.innerText = `Jue ${++valor}`;
        dia7.innerText = `Vie ${++valor}`;
        dia8.innerText = `Sab ${++valor}`;
        dia9.innerText = `Dom ${++valor}`;
        dia10.innerText = `Lun ${++valor}`;
        dia11.innerText = `Mar ${++valor}`;
        dia12.innerText = `Mie ${++valor}`;
        dia13.innerText = `Jue ${++valor}`;
        dia14.innerText = `Vie ${++valor}`;
        dia15.innerText = `Sab ${++valor}`;
        dia16.innerText = "---";
    };
    if(mes === 10 && valor == 1){
        dia1.innerText = `Dom ${valor}`;
        dia2.innerText = `Lun ${++valor}`;
        dia3.innerText = `Mar ${++valor}`;
        dia4.innerText = `Mie ${++valor}`;
        dia5.innerText = `Jue ${++valor}`;
        dia6.innerText = `Vie ${++valor}`;
        dia7.innerText = `Sab ${++valor}`;
        dia8.innerText = `Dom ${++valor}`;
        dia9.innerText = `Lun ${++valor}`;
        dia10.innerText = `Mar ${++valor}`;
        dia11.innerText = `Mie ${++valor}`;
        dia12.innerText = `Jue ${++valor}`;
        dia13.innerText = `Vie ${++valor}`;
        dia14.innerText = `Sab ${++valor}`;
        dia15.innerText = `Dom ${++valor}`;
        dia16.innerText = "---";
    }
    else if(mes === 10 && valor == 16){
        dia1.innerText = `Lun ${valor}`;
        dia2.innerText = `Mar ${++valor}`;
        dia3.innerText = `Mie ${++valor}`;
        dia4.innerText = `Jue ${++valor}`;
        dia5.innerText = `Vie ${++valor}`;
        dia6.innerText = `Sab ${++valor}`;
        dia7.innerText = `Dom ${++valor}`;
        dia8.innerText = `Lun ${++valor}`;
        dia9.innerText = `Mar ${++valor}`;
        dia10.innerText = `Mie ${++valor}`;
        dia11.innerText = `Jue ${++valor}`;
        dia12.innerText = `Vie ${++valor}`;
        dia13.innerText = `Sab ${++valor}`;
        dia14.innerText = `Dom ${++valor}`;
        dia15.innerText = `Lun ${++valor}`;
        dia16.innerText = `Mar ${++valor}`;
    };
    if(mes === 11 && valor == 1){
        dia1.innerText = `Mie ${valor}`;
        dia2.innerText = `Jue ${++valor}`;
        dia3.innerText = `Vie ${++valor}`;
        dia4.innerText = `Sab ${++valor}`;
        dia5.innerText = `Dom ${++valor}`;
        dia6.innerText = `Lun ${++valor}`;
        dia7.innerText = `Mar ${++valor}`;
        dia8.innerText = `Mie ${++valor}`;
        dia9.innerText = `Jue ${++valor}`;
        dia10.innerText = `Vie ${++valor}`;
        dia11.innerText = `Sab ${++valor}`;
        dia12.innerText = `Dom ${++valor}`;
        dia13.innerText = `Lun ${++valor}`;
        dia14.innerText = `Mar ${++valor}`;
        dia15.innerText = `Mie ${++valor}`;
        dia16.innerText = "---";
    }
    else if(mes === 11 && valor == 16){
        dia1.innerText = `Jue ${valor}`;
        dia2.innerText = `Vie ${++valor}`;
        dia3.innerText = `Sab ${++valor}`;
        dia4.innerText = `Dom ${++valor}`;
        dia5.innerText = `Lun ${++valor}`;
        dia6.innerText = `Mar ${++valor}`;
        dia7.innerText = `Mie ${++valor}`;
        dia8.innerText = `Jue ${++valor}`;
        dia9.innerText = `Vie ${++valor}`;
        dia10.innerText = `Sab ${++valor}`;
        dia11.innerText = `Dom ${++valor}`;
        dia12.innerText = `Lun ${++valor}`;
        dia13.innerText = `Mar ${++valor}`;
        dia14.innerText = `Mie ${++valor}`;
        dia15.innerText = `Jue ${++valor}`;
        dia16.innerText = "---";
    };
    if(mes === 12 && valor == 1){
        dia1.innerText = `Vie ${valor}`;
        dia2.innerText = `Sab ${++valor}`;
        dia3.innerText = `Dom ${++valor}`;
        dia4.innerText = `Lun ${++valor}`;
        dia5.innerText = `Mar ${++valor}`;
        dia6.innerText = `Mie ${++valor}`;
        dia7.innerText = `Jue ${++valor}`;
        dia8.innerText = `Vie ${++valor}`;
        dia9.innerText = `Sab ${++valor}`;
        dia10.innerText = `Dom ${++valor}`;
        dia11.innerText = `Lun ${++valor}`;
        dia12.innerText = `Mar ${++valor}`;
        dia13.innerText = `Mie ${++valor}`;
        dia14.innerText = `Jue ${++valor}`;
        dia15.innerText = `Vie ${++valor}`;
        dia16.innerText = "---";
    }
    else if(mes === 12 && valor == 16){
        dia1.innerText = `Sab ${valor}`;
        dia2.innerText = `Dom ${++valor}`;
        dia3.innerText = `Lun ${++valor}`;
        dia4.innerText = `Mar ${++valor}`;
        dia5.innerText = `Mie ${++valor}`;
        dia6.innerText = `Jue ${++valor}`;
        dia7.innerText = `Vie ${++valor}`;
        dia8.innerText = `Sab ${++valor}`;
        dia9.innerText = `Dom ${++valor}`;
        dia10.innerText = `Lun ${++valor}`;
        dia11.innerText = `Mar ${++valor}`;
        dia12.innerText = `Mie ${++valor}`;
        dia13.innerText = `Jue ${++valor}`;
        dia14.innerText = `Vie ${++valor}`;
        dia15.innerText = `Sab ${++valor}`;
        dia16.innerText = `Dom ${++valor}`;
    };
};

function insertarDiasAño3(valor, mes){
    valor = parseInt(valor);
    mes = parseInt(mes);
    if(mes === 01 && valor == 1){
        dia1.innerText = `Lun ${valor}`;
        dia2.innerText = `Mar ${++valor}`;
        dia3.innerText = `Mie ${++valor}`;
        dia4.innerText = `Jue ${++valor}`;
        dia5.innerText = `Vie ${++valor}`;
        dia6.innerText = `Sab ${++valor}`;
        dia7.innerText = `Dom ${++valor}`;
        dia8.innerText = `Lun ${++valor}`;
        dia9.innerText = `Mar ${++valor}`;
        dia10.innerText = `Mie ${++valor}`;
        dia11.innerText = `Jue ${++valor}`;
        dia12.innerText = `Vie ${++valor}`;
        dia13.innerText = `Sab ${++valor}`;
        dia14.innerText = `Dom ${++valor}`;
        dia15.innerText = `Lun ${++valor}`;
        dia16.innerText = "---";
    }
    else if(mes === 01 && valor == 16){
        dia1.innerText = `Mar ${valor}`;
        dia2.innerText = `Mie ${++valor}`;
        dia3.innerText = `Jue ${++valor}`;
        dia4.innerText = `Vie ${++valor}`;
        dia5.innerText = `Sab ${++valor}`;
        dia6.innerText = `Dom ${++valor}`;
        dia7.innerText = `Lun ${++valor}`;
        dia8.innerText = `Mar ${++valor}`;
        dia9.innerText = `Mie ${++valor}`;
        dia10.innerText = `Jue ${++valor}`;
        dia11.innerText = `Vie ${++valor}`;
        dia12.innerText = `Sab ${++valor}`;
        dia13.innerText = `Dom ${++valor}`;
        dia14.innerText = `Lun ${++valor}`;
        dia15.innerText = `Mar ${++valor}`;
        dia16.innerText = `Mie ${++valor}`;
    };
    if(mes === 02 && valor == 1){
        dia1.innerText = `Jue ${valor}`;
        dia2.innerText = `Vie ${++valor}`;
        dia3.innerText = `Sab ${++valor}`;
        dia4.innerText = `Dom ${++valor}`;
        dia5.innerText = `Lun ${++valor}`;
        dia6.innerText = `Mar ${++valor}`;
        dia7.innerText = `Mie ${++valor}`;
        dia8.innerText = `Jue ${++valor}`;
        dia9.innerText = `Vie ${++valor}`;
        dia10.innerText = `Sab ${++valor}`;
        dia11.innerText = `Dom ${++valor}`;
        dia12.innerText = `Lun ${++valor}`;
        dia13.innerText = `Mar ${++valor}`;
        dia14.innerText = `Mie ${++valor}`;
        dia15.innerText = `Jue ${++valor}`;
        dia16.innerText = "---";
    }
    else if(mes === 02 && valor == 16){
        dia1.innerText = `Vie ${valor}`;
        dia2.innerText = `Sab ${++valor}`;
        dia3.innerText = `Dom ${++valor}`;
        dia4.innerText = `Lun ${++valor}`;
        dia5.innerText = `Mar ${++valor}`;
        dia6.innerText = `Mie ${++valor}`;
        dia7.innerText = `Jue ${++valor}`;
        dia8.innerText = `Vie ${++valor}`;
        dia9.innerText = `Sab ${++valor}`;
        dia10.innerText = `Dom ${++valor}`;
        dia11.innerText = `Lun ${++valor}`;
        dia12.innerText = `Mar ${++valor}`;
        dia13.innerText = `Mie ${++valor}`;
        dia14.innerText = `Jue ${++valor}`;
        dia15.innerText = "---";
        dia16.innerText = "---";
    };
    if(mes === 03 && valor == 1){
        dia1.innerText = `Vie ${valor}`;
        dia2.innerText = `Sab ${++valor}`;
        dia3.innerText = `Dom ${++valor}`;
        dia4.innerText = `Lun ${++valor}`;
        dia5.innerText = `Mar ${++valor}`;
        dia6.innerText = `Mie ${++valor}`;
        dia7.innerText = `Jue ${++valor}`;
        dia8.innerText = `Vie ${++valor}`;
        dia9.innerText = `Sab ${++valor}`;
        dia10.innerText = `Dom ${++valor}`;
        dia11.innerText = `Lun ${++valor}`;
        dia12.innerText = `Mar ${++valor}`;
        dia13.innerText = `Mie ${++valor}`;
        dia14.innerText = `Jue ${++valor}`;
        dia15.innerText = `Vie ${++valor}`;
        dia16.innerText = "---";
    }
    else if(mes === 03 && valor == 16){
        dia1.innerText = `Sab ${valor}`;
        dia2.innerText = `Dom ${++valor}`;
        dia3.innerText = `Lun ${++valor}`;
        dia4.innerText = `Mar ${++valor}`;
        dia5.innerText = `Mie ${++valor}`;
        dia6.innerText = `Jue ${++valor}`;
        dia7.innerText = `Vie ${++valor}`;
        dia8.innerText = `Sab ${++valor}`;
        dia9.innerText = `Dom ${++valor}`;
        dia10.innerText = `Lun ${++valor}`;
        dia11.innerText = `Mar ${++valor}`;
        dia12.innerText = `Mie ${++valor}`;
        dia13.innerText = `Jue ${++valor}`;
        dia14.innerText = `Vie ${++valor}`;
        dia15.innerText = `Sab ${++valor}`;
        dia16.innerText = `Dom ${++valor}`;
    };
    if(mes === 04 && valor == 1){
        dia1.innerText = `Lun ${valor}`;
        dia2.innerText = `Mar ${++valor}`;
        dia3.innerText = `Mie ${++valor}`;
        dia4.innerText = `Jue ${++valor}`;
        dia5.innerText = `Vie ${++valor}`;
        dia6.innerText = `Sab ${++valor}`;
        dia7.innerText = `Dom ${++valor}`;
        dia8.innerText = `Lun ${++valor}`;
        dia9.innerText = `Mar ${++valor}`;
        dia10.innerText = `Mie ${++valor}`;
        dia11.innerText = `Jue ${++valor}`;
        dia12.innerText = `Vie ${++valor}`;
        dia13.innerText = `Sab ${++valor}`;
        dia14.innerText = `Dom ${++valor}`;
        dia15.innerText = `Lun ${++valor}`;
        dia16.innerText = "---";
    }
    else if(mes === 04 && valor == 16){
        dia1.innerText = `Mar ${valor}`;
        dia2.innerText = `Mie ${++valor}`;
        dia3.innerText = `Jue ${++valor}`;
        dia4.innerText = `Vie ${++valor}`;
        dia5.innerText = `Sab ${++valor}`;
        dia6.innerText = `Dom ${++valor}`;
        dia7.innerText = `Lun ${++valor}`;
        dia8.innerText = `Mar ${++valor}`;
        dia9.innerText = `Mie ${++valor}`;
        dia10.innerText = `Jue ${++valor}`;
        dia11.innerText = `Vie ${++valor}`;
        dia12.innerText = `Sab ${++valor}`;
        dia13.innerText = `Dom ${++valor}`;
        dia14.innerText = `Lun ${++valor}`;
        dia15.innerText = `Mar ${++valor}`;
        dia16.innerText = "---";
    };
    if(mes === 05 && valor == 1){
        dia1.innerText = `Mie ${valor}`;
        dia2.innerText = `Jue ${++valor}`;
        dia3.innerText = `Vie ${++valor}`;
        dia4.innerText = `Sab ${++valor}`;
        dia5.innerText = `Dom ${++valor}`;
        dia6.innerText = `Lun ${++valor}`;
        dia7.innerText = `Mar ${++valor}`;
        dia8.innerText = `Mie ${++valor}`;
        dia9.innerText = `Jue ${++valor}`;
        dia10.innerText = `Vie ${++valor}`;
        dia11.innerText = `Sab ${++valor}`;
        dia12.innerText = `Dom ${++valor}`;
        dia13.innerText = `Lun ${++valor}`;
        dia14.innerText = `Mar ${++valor}`;
        dia15.innerText = `Mie ${++valor}`;
        dia16.innerText = "---";
    }
    else if(mes === 05 && valor == 16){
        dia1.innerText = `Jue ${valor}`;
        dia2.innerText = `Vie ${++valor}`;
        dia3.innerText = `Sab ${++valor}`;
        dia4.innerText = `Dom ${++valor}`;
        dia5.innerText = `Lun ${++valor}`;
        dia6.innerText = `Mar ${++valor}`;
        dia7.innerText = `Mie ${++valor}`;
        dia8.innerText = `Jue ${++valor}`;
        dia9.innerText = `Vie ${++valor}`;
        dia10.innerText = `Sab ${++valor}`;
        dia11.innerText = `Dom ${++valor}`;
        dia12.innerText = `Lun ${++valor}`;
        dia13.innerText = `Mar ${++valor}`;
        dia14.innerText = `Mie ${++valor}`;
        dia15.innerText = `Jue ${++valor}`;
        dia16.innerText = `Vie ${++valor}`;
    };
    if(mes === 06 && valor == 1){
        dia1.innerText = `Sab ${valor}`;
        dia2.innerText = `Dom ${++valor}`;
        dia3.innerText = `Lun ${++valor}`;
        dia4.innerText = `Mar ${++valor}`;
        dia5.innerText = `Mie ${++valor}`;
        dia6.innerText = `Jue ${++valor}`;
        dia7.innerText = `Vie ${++valor}`;
        dia8.innerText = `Sab ${++valor}`;
        dia9.innerText = `Dom ${++valor}`;
        dia10.innerText = `Lun ${++valor}`;
        dia11.innerText = `Mar ${++valor}`;
        dia12.innerText = `Mie ${++valor}`;
        dia13.innerText = `Jue ${++valor}`;
        dia14.innerText = `vie ${++valor}`;
        dia15.innerText = `Sab ${++valor}`;
        dia16.innerText = "---";
    }
    else if(mes === 06 && valor == 16){
        dia1.innerText = `Dom ${valor}`;
        dia2.innerText = `Lun ${++valor}`;
        dia3.innerText = `Mar ${++valor}`;
        dia4.innerText = `Mie ${++valor}`;
        dia5.innerText = `Jue ${++valor}`;
        dia6.innerText = `Vie ${++valor}`;
        dia7.innerText = `Sab ${++valor}`;
        dia8.innerText = `Dom ${++valor}`;
        dia9.innerText = `Lun ${++valor}`;
        dia10.innerText = `Mar ${++valor}`;
        dia11.innerText = `Mie ${++valor}`;
        dia12.innerText = `Jue ${++valor}`;
        dia13.innerText = `Vie ${++valor}`;
        dia14.innerText = `Sab ${++valor}`;
        dia15.innerText = `Dom ${++valor}`;
        dia16.innerText = "---";
    };
    if(mes === 07 && valor == 1){
        dia1.innerText = `Lun ${valor}`;
        dia2.innerText = `Mar ${++valor}`;
        dia3.innerText = `Mie ${++valor}`;
        dia4.innerText = `Jue ${++valor}`;
        dia5.innerText = `Vie ${++valor}`;
        dia6.innerText = `Sab ${++valor}`;
        dia7.innerText = `Dom ${++valor}`;
        dia8.innerText = `Lun ${++valor}`;
        dia9.innerText = `Mar ${++valor}`;
        dia10.innerText = `Mie ${++valor}`;
        dia11.innerText = `Jue ${++valor}`;
        dia12.innerText = `Vie ${++valor}`;
        dia13.innerText = `Sab ${++valor}`;
        dia14.innerText = `Dom ${++valor}`;
        dia15.innerText = `Lun ${++valor}`;
        dia16.innerText = "---";
    }
    else if(mes === 07 && valor == 16){
        dia1.innerText = `Mar ${valor}`;
        dia2.innerText = `Mie ${++valor}`;
        dia3.innerText = `Jue ${++valor}`;
        dia4.innerText = `Vie ${++valor}`;
        dia5.innerText = `Sab ${++valor}`;
        dia6.innerText = `Dom ${++valor}`;
        dia7.innerText = `Lun ${++valor}`;
        dia8.innerText = `Mar ${++valor}`;
        dia9.innerText = `Mie ${++valor}`;
        dia10.innerText = `Jue ${++valor}`;
        dia11.innerText = `Vie ${++valor}`;
        dia12.innerText = `Sab ${++valor}`;
        dia13.innerText = `Dom ${++valor}`;
        dia14.innerText = `Lun ${++valor}`;
        dia15.innerText = `Mar ${++valor}`;
        dia16.innerText = `Mie ${++valor}`;
    };
    if(mes === 08 && valor == 1){
        dia1.innerText = `Jue ${valor}`;
        dia2.innerText = `Vie ${++valor}`;
        dia3.innerText = `Sab ${++valor}`;
        dia4.innerText = `Dom ${++valor}`;
        dia5.innerText = `Lun ${++valor}`;
        dia6.innerText = `Mar ${++valor}`;
        dia7.innerText = `Mie ${++valor}`;
        dia8.innerText = `Jue ${++valor}`;
        dia9.innerText = `Vie ${++valor}`;
        dia10.innerText = `Sab ${++valor}`;
        dia11.innerText = `Dom ${++valor}`;
        dia12.innerText = `Lun ${++valor}`;
        dia13.innerText = `Mar ${++valor}`;
        dia14.innerText = `Mie ${++valor}`;
        dia15.innerText = `Jue ${++valor}`;
        dia16.innerText = "---";
    }
    else if(mes === 08 && valor == 16){
        dia1.innerText = `Vie ${valor}`;
        dia2.innerText = `Sab ${++valor}`;
        dia3.innerText = `Dom ${++valor}`;
        dia4.innerText = `Lun ${++valor}`;
        dia5.innerText = `Mar ${++valor}`;
        dia6.innerText = `Mie ${++valor}`;
        dia7.innerText = `Jue ${++valor}`;
        dia8.innerText = `Vie ${++valor}`;
        dia9.innerText = `Sab ${++valor}`;
        dia10.innerText = `Dom ${++valor}`;
        dia11.innerText = `Lun ${++valor}`;
        dia12.innerText = `Mar ${++valor}`;
        dia13.innerText = `Mie ${++valor}`;
        dia14.innerText = `Jue ${++valor}`;
        dia15.innerText = `Vie ${++valor}`;
        dia16.innerText = `Sab ${++valor}`;
    };
    if(mes === 09 && valor == 1){
        dia1.innerText = `Dom ${valor}`;
        dia2.innerText = `Lun ${++valor}`;
        dia3.innerText = `Mar ${++valor}`;
        dia4.innerText = `Mie ${++valor}`;
        dia5.innerText = `Jue ${++valor}`;
        dia6.innerText = `Vie ${++valor}`;
        dia7.innerText = `Sab ${++valor}`;
        dia8.innerText = `Dom ${++valor}`;
        dia9.innerText = `Lun ${++valor}`;
        dia10.innerText = `Mar ${++valor}`;
        dia11.innerText = `Mie ${++valor}`;
        dia12.innerText = `Jue ${++valor}`;
        dia13.innerText = `Vie ${++valor}`;
        dia14.innerText = `Sab ${++valor}`;
        dia15.innerText = `Dom ${++valor}`;
        dia16.innerText = "---";
    }
    else if(mes === 09 && valor == 16){
        dia1.innerText = `Lun ${valor}`;
        dia2.innerText = `Mar ${++valor}`;
        dia3.innerText = `Mie ${++valor}`;
        dia4.innerText = `Jue ${++valor}`;
        dia5.innerText = `Vie ${++valor}`;
        dia6.innerText = `Sab ${++valor}`;
        dia7.innerText = `Dom ${++valor}`;
        dia8.innerText = `Lun ${++valor}`;
        dia9.innerText = `Mar ${++valor}`;
        dia10.innerText = `Mie ${++valor}`;
        dia11.innerText = `Jue ${++valor}`;
        dia12.innerText = `Vie ${++valor}`;
        dia13.innerText = `Sab ${++valor}`;
        dia14.innerText = `Dom ${++valor}`;
        dia15.innerText = `Lun ${++valor}`;
        dia16.innerText = "---";
    };
    if(mes === 10 && valor == 1){
        dia1.innerText = `Mar ${valor}`;
        dia2.innerText = `Mie ${++valor}`;
        dia3.innerText = `Jue ${++valor}`;
        dia4.innerText = `Vie ${++valor}`;
        dia5.innerText = `Sab ${++valor}`;
        dia6.innerText = `Dom ${++valor}`;
        dia7.innerText = `Lun ${++valor}`;
        dia8.innerText = `Mar ${++valor}`;
        dia9.innerText = `Mie ${++valor}`;
        dia10.innerText = `Jue ${++valor}`;
        dia11.innerText = `Vie ${++valor}`;
        dia12.innerText = `Sab ${++valor}`;
        dia13.innerText = `Dom ${++valor}`;
        dia14.innerText = `Lun ${++valor}`;
        dia15.innerText = `Mar ${++valor}`;
        dia16.innerText = "---";
    }
    else if(mes === 10 && valor == 16){
        dia1.innerText = `Mie ${valor}`;
        dia2.innerText = `Jue ${++valor}`;
        dia3.innerText = `Vie ${++valor}`;
        dia4.innerText = `Sab ${++valor}`;
        dia5.innerText = `Dom ${++valor}`;
        dia6.innerText = `Lun ${++valor}`;
        dia7.innerText = `Mar ${++valor}`;
        dia8.innerText = `Mie ${++valor}`;
        dia9.innerText = `Jue ${++valor}`;
        dia10.innerText = `Vie ${++valor}`;
        dia11.innerText = `Sab ${++valor}`;
        dia12.innerText = `Dom ${++valor}`;
        dia13.innerText = `Lun ${++valor}`;
        dia14.innerText = `Mar ${++valor}`;
        dia15.innerText = `Mie ${++valor}`;
        dia16.innerText = `Jue ${++valor}`;
    };
    if(mes === 11 && valor == 1){
        dia1.innerText = `Vie ${valor}`;
        dia2.innerText = `Sab ${++valor}`;
        dia3.innerText = `Dom ${++valor}`;
        dia4.innerText = `Lun ${++valor}`;
        dia5.innerText = `Mar ${++valor}`;
        dia6.innerText = `Mie ${++valor}`;
        dia7.innerText = `Jue ${++valor}`;
        dia8.innerText = `Vie ${++valor}`;
        dia9.innerText = `Sab ${++valor}`;
        dia10.innerText = `Dom ${++valor}`;
        dia11.innerText = `Lun ${++valor}`;
        dia12.innerText = `Mar ${++valor}`;
        dia13.innerText = `Mie ${++valor}`;
        dia14.innerText = `Jue ${++valor}`;
        dia15.innerText = `Vie ${++valor}`;
        dia16.innerText = "---";
    }
    else if(mes === 11 && valor == 16){
        dia1.innerText = `Sab ${valor}`;
        dia2.innerText = `Dom ${++valor}`;
        dia3.innerText = `Lun ${++valor}`;
        dia4.innerText = `Mar ${++valor}`;
        dia5.innerText = `Mie ${++valor}`;
        dia6.innerText = `Jue ${++valor}`;
        dia7.innerText = `Vie ${++valor}`;
        dia8.innerText = `Sab ${++valor}`;
        dia9.innerText = `Dom ${++valor}`;
        dia10.innerText = `Lun ${++valor}`;
        dia11.innerText = `Mar ${++valor}`;
        dia12.innerText = `Mie ${++valor}`;
        dia13.innerText = `Jue ${++valor}`;
        dia14.innerText = `Vie ${++valor}`;
        dia15.innerText = `Sab ${++valor}`;
        dia16.innerText = "---";
    };
    if(mes === 12 && valor == 1){
        dia1.innerText = `Dom ${valor}`;
        dia2.innerText = `Lun ${++valor}`;
        dia3.innerText = `Mar ${++valor}`;
        dia4.innerText = `Mie ${++valor}`;
        dia5.innerText = `Jue ${++valor}`;
        dia6.innerText = `Vie ${++valor}`;
        dia7.innerText = `Sab ${++valor}`;
        dia8.innerText = `Dom ${++valor}`;
        dia9.innerText = `Lun ${++valor}`;
        dia10.innerText = `Mar ${++valor}`;
        dia11.innerText = `Mie ${++valor}`;
        dia12.innerText = `Jue ${++valor}`;
        dia13.innerText = `Vie ${++valor}`;
        dia14.innerText = `Sab ${++valor}`;
        dia15.innerText = `Dom ${++valor}`;
        dia16.innerText = "---";
    }
    else if(mes === 12 && valor == 16){
        dia1.innerText = `Lun ${valor}`;
        dia2.innerText = `Mar ${++valor}`;
        dia3.innerText = `Mie ${++valor}`;
        dia4.innerText = `Jue ${++valor}`;
        dia5.innerText = `Vie ${++valor}`;
        dia6.innerText = `Sab ${++valor}`;
        dia7.innerText = `Dom ${++valor}`;
        dia8.innerText = `Lun ${++valor}`;
        dia9.innerText = `Mar ${++valor}`;
        dia10.innerText = `Mie ${++valor}`;
        dia11.innerText = `Jue ${++valor}`;
        dia12.innerText = `Vie ${++valor}`;
        dia13.innerText = `Sab ${++valor}`;
        dia14.innerText = `Dom ${++valor}`;
        dia15.innerText = `Lun ${++valor}`;
        dia16.innerText = `Mar ${++valor}`;
    };
};

function insertarDiasAño4(valor, mes){
    valor = parseInt(valor);
    mes = parseInt(mes);
    if(mes === 01 && valor == 1){
        dia1.innerText = `Mie ${valor}`;
        dia2.innerText = `Jue ${++valor}`;
        dia3.innerText = `Vie ${++valor}`;
        dia4.innerText = `Sab ${++valor}`;
        dia5.innerText = `Dom ${++valor}`;
        dia6.innerText = `Lun ${++valor}`;
        dia7.innerText = `Mar ${++valor}`;
        dia8.innerText = `Mie ${++valor}`;
        dia9.innerText = `Jue ${++valor}`;
        dia10.innerText = `Vie ${++valor}`;
        dia11.innerText = `Sab ${++valor}`;
        dia12.innerText = `Dom ${++valor}`;
        dia13.innerText = `Lun ${++valor}`;
        dia14.innerText = `Mar ${++valor}`;
        dia15.innerText = `Mie ${++valor}`;
        dia16.innerText = "---";
    }
    else if(mes === 01 && valor == 16){
        dia1.innerText = `Jue ${valor}`;
        dia2.innerText = `Vie ${++valor}`;
        dia3.innerText = `Sab ${++valor}`;
        dia4.innerText = `Dom ${++valor}`;
        dia5.innerText = `Lun ${++valor}`;
        dia6.innerText = `Mar ${++valor}`;
        dia7.innerText = `Mie ${++valor}`;
        dia8.innerText = `Jue ${++valor}`;
        dia9.innerText = `Vie ${++valor}`;
        dia10.innerText = `Sab ${++valor}`;
        dia11.innerText = `Dom ${++valor}`;
        dia12.innerText = `Lun ${++valor}`;
        dia13.innerText = `Mar ${++valor}`;
        dia14.innerText = `Mie ${++valor}`;
        dia15.innerText = `Jue ${++valor}`;
        dia16.innerText = `Vie ${++valor}`;
    };
    if(mes === 02 && valor == 1){
        dia1.innerText = `Sab ${valor}`;
        dia2.innerText = `Dom ${++valor}`;
        dia3.innerText = `Lun ${++valor}`;
        dia4.innerText = `Mar ${++valor}`;
        dia5.innerText = `Mie ${++valor}`;
        dia6.innerText = `Jue ${++valor}`;
        dia7.innerText = `Vie ${++valor}`;
        dia8.innerText = `Sab ${++valor}`;
        dia9.innerText = `Dom ${++valor}`;
        dia10.innerText = `Lun ${++valor}`;
        dia11.innerText = `Mar ${++valor}`;
        dia12.innerText = `Mie ${++valor}`;
        dia13.innerText = `Jue ${++valor}`;
        dia14.innerText = `vie ${++valor}`;
        dia15.innerText = `Sab ${++valor}`;
        dia16.innerText = "---";
    }
    else if(mes === 02 && valor == 16){
        dia1.innerText = `Dom ${valor}`;
        dia2.innerText = `Lun ${++valor}`;
        dia3.innerText = `Mar ${++valor}`;
        dia4.innerText = `Mie ${++valor}`;
        dia5.innerText = `Jue ${++valor}`;
        dia6.innerText = `Vie ${++valor}`;
        dia7.innerText = `Sab ${++valor}`;
        dia8.innerText = `Dom ${++valor}`;
        dia9.innerText = `Lun ${++valor}`;
        dia10.innerText = `Mar ${++valor}`;
        dia11.innerText = `Mie ${++valor}`;
        dia12.innerText = `Jue ${++valor}`;
        dia13.innerText = `Vie ${++valor}`;
        dia14.innerText = "---";
        dia15.innerText = "---";
        dia16.innerText = "---";
    };
    if(mes === 03 && valor == 1){
        dia1.innerText = `Sab ${valor}`;
        dia2.innerText = `Dom ${++valor}`;
        dia3.innerText = `Lun ${++valor}`;
        dia4.innerText = `Mar ${++valor}`;
        dia5.innerText = `Mie ${++valor}`;
        dia6.innerText = `Jue ${++valor}`;
        dia7.innerText = `Vie ${++valor}`;
        dia8.innerText = `Sab ${++valor}`;
        dia9.innerText = `Dom ${++valor}`;
        dia10.innerText = `Lun ${++valor}`;
        dia11.innerText = `Mar ${++valor}`;
        dia12.innerText = `Mie ${++valor}`;
        dia13.innerText = `Jue ${++valor}`;
        dia14.innerText = `vie ${++valor}`;
        dia15.innerText = `Sab ${++valor}`;
        dia16.innerText = "---";
    }
    else if(mes === 03 && valor == 16){
        dia1.innerText = `Dom ${valor}`;
        dia2.innerText = `Lun ${++valor}`;
        dia3.innerText = `Mar ${++valor}`;
        dia4.innerText = `Mie ${++valor}`;
        dia5.innerText = `Jue ${++valor}`;
        dia6.innerText = `Vie ${++valor}`;
        dia7.innerText = `Sab ${++valor}`;
        dia8.innerText = `Dom ${++valor}`;
        dia9.innerText = `Lun ${++valor}`;
        dia10.innerText = `Mar ${++valor}`;
        dia11.innerText = `Mie ${++valor}`;
        dia12.innerText = `Jue ${++valor}`;
        dia13.innerText = `Vie ${++valor}`;
        dia14.innerText = `Sab ${++valor}`;
        dia15.innerText = `Dom ${++valor}`;
        dia16.innerText = `Lun ${++valor}`;
    };
    if(mes === 04 && valor == 1){
        dia1.innerText = `Mar ${valor}`;
        dia2.innerText = `Mie ${++valor}`;
        dia3.innerText = `Jue ${++valor}`;
        dia4.innerText = `Vie ${++valor}`;
        dia5.innerText = `Sab ${++valor}`;
        dia6.innerText = `Dom ${++valor}`;
        dia7.innerText = `Lun ${++valor}`;
        dia8.innerText = `Mar ${++valor}`;
        dia9.innerText = `Mie ${++valor}`;
        dia10.innerText = `Jue ${++valor}`;
        dia11.innerText = `Vie ${++valor}`;
        dia12.innerText = `Sab ${++valor}`;
        dia13.innerText = `Dom ${++valor}`;
        dia14.innerText = `Lun ${++valor}`;
        dia15.innerText = `Mar ${++valor}`;
        dia16.innerText = "---";
    }
    else if(mes === 04 && valor == 16){
        dia1.innerText = `Mie ${valor}`;
        dia2.innerText = `Jue ${++valor}`;
        dia3.innerText = `Vie ${++valor}`;
        dia4.innerText = `Sab ${++valor}`;
        dia5.innerText = `Dom ${++valor}`;
        dia6.innerText = `Lun ${++valor}`;
        dia7.innerText = `Mar ${++valor}`;
        dia8.innerText = `Mie ${++valor}`;
        dia9.innerText = `Jue ${++valor}`;
        dia10.innerText = `Vie ${++valor}`;
        dia11.innerText = `Sab ${++valor}`;
        dia12.innerText = `Dom ${++valor}`;
        dia13.innerText = `Lun ${++valor}`;
        dia14.innerText = `Mar ${++valor}`;
        dia15.innerText = `Mie ${++valor}`;
        dia16.innerText = "---";
    };
    if(mes === 05 && valor == 1){
        dia1.innerText = `Jue ${valor}`;
        dia2.innerText = `Vie ${++valor}`;
        dia3.innerText = `Sab ${++valor}`;
        dia4.innerText = `Dom ${++valor}`;
        dia5.innerText = `Lun ${++valor}`;
        dia6.innerText = `Mar ${++valor}`;
        dia7.innerText = `Mie ${++valor}`;
        dia8.innerText = `Jue ${++valor}`;
        dia9.innerText = `Vie ${++valor}`;
        dia10.innerText = `Sab ${++valor}`;
        dia11.innerText = `Dom ${++valor}`;
        dia12.innerText = `Lun ${++valor}`;
        dia13.innerText = `Mar ${++valor}`;
        dia14.innerText = `Mie ${++valor}`;
        dia15.innerText = `Jue ${++valor}`;
        dia16.innerText = "---";
    }
    else if(mes === 05 && valor == 16){
        dia1.innerText = `Vie ${valor}`;
        dia2.innerText = `Sab ${++valor}`;
        dia3.innerText = `Dom ${++valor}`;
        dia4.innerText = `Lun ${++valor}`;
        dia5.innerText = `Mar ${++valor}`;
        dia6.innerText = `Mie ${++valor}`;
        dia7.innerText = `Jue ${++valor}`;
        dia8.innerText = `Vie ${++valor}`;
        dia9.innerText = `Sab ${++valor}`;
        dia10.innerText = `Dom ${++valor}`;
        dia11.innerText = `Lun ${++valor}`;
        dia12.innerText = `Mar ${++valor}`;
        dia13.innerText = `Mie ${++valor}`;
        dia14.innerText = `Jue ${++valor}`;
        dia15.innerText = `Vie ${++valor}`;
        dia16.innerText = `Sab ${++valor}`;
    };
    if(mes === 06 && valor == 1){
        dia1.innerText = `Dom ${valor}`;
        dia2.innerText = `Lun ${++valor}`;
        dia3.innerText = `Mar ${++valor}`;
        dia4.innerText = `Mie ${++valor}`;
        dia5.innerText = `Jue ${++valor}`;
        dia6.innerText = `Vie ${++valor}`;
        dia7.innerText = `Sab ${++valor}`;
        dia8.innerText = `Dom ${++valor}`;
        dia9.innerText = `Lun ${++valor}`;
        dia10.innerText = `Mar ${++valor}`;
        dia11.innerText = `Mie ${++valor}`;
        dia12.innerText = `Jue ${++valor}`;
        dia13.innerText = `Vie ${++valor}`;
        dia14.innerText = `Sab ${++valor}`;
        dia15.innerText = `Dom ${++valor}`;
        dia16.innerText = "---";
    }
    else if(mes === 06 && valor == 16){
        dia1.innerText = `Lun ${valor}`;
        dia2.innerText = `Mar ${++valor}`;
        dia3.innerText = `Mie ${++valor}`;
        dia4.innerText = `Jue ${++valor}`;
        dia5.innerText = `Vie ${++valor}`;
        dia6.innerText = `Sab ${++valor}`;
        dia7.innerText = `Dom ${++valor}`;
        dia8.innerText = `Lun ${++valor}`;
        dia9.innerText = `Mar ${++valor}`;
        dia10.innerText = `Mie ${++valor}`;
        dia11.innerText = `Jue ${++valor}`;
        dia12.innerText = `Vie ${++valor}`;
        dia13.innerText = `Sab ${++valor}`;
        dia14.innerText = `Dom ${++valor}`;
        dia15.innerText = `Lun ${++valor}`;
        dia16.innerText = "---";
    };
    if(mes === 07 && valor == 1){
        dia1.innerText = `Mar ${valor}`;
        dia2.innerText = `Mie ${++valor}`;
        dia3.innerText = `Jue ${++valor}`;
        dia4.innerText = `Vie ${++valor}`;
        dia5.innerText = `Sab ${++valor}`;
        dia6.innerText = `Dom ${++valor}`;
        dia7.innerText = `Lun ${++valor}`;
        dia8.innerText = `Mar ${++valor}`;
        dia9.innerText = `Mie ${++valor}`;
        dia10.innerText = `Jue ${++valor}`;
        dia11.innerText = `Vie ${++valor}`;
        dia12.innerText = `Sab ${++valor}`;
        dia13.innerText = `Dom ${++valor}`;
        dia14.innerText = `Lun ${++valor}`;
        dia15.innerText = `Mar ${++valor}`;
        dia16.innerText = "---";
    }
    else if(mes === 07 && valor == 16){
        dia1.innerText = `Mie ${valor}`;
        dia2.innerText = `Jue ${++valor}`;
        dia3.innerText = `Vie ${++valor}`;
        dia4.innerText = `Sab ${++valor}`;
        dia5.innerText = `Dom ${++valor}`;
        dia6.innerText = `Lun ${++valor}`;
        dia7.innerText = `Mar ${++valor}`;
        dia8.innerText = `Mie ${++valor}`;
        dia9.innerText = `Jue ${++valor}`;
        dia10.innerText = `Vie ${++valor}`;
        dia11.innerText = `Sab ${++valor}`;
        dia12.innerText = `Dom ${++valor}`;
        dia13.innerText = `Lun ${++valor}`;
        dia14.innerText = `Mar ${++valor}`;
        dia15.innerText = `Mie ${++valor}`;
        dia16.innerText = `Jue ${++valor}`;
    };
    if(mes === 08 && valor == 1){
        dia1.innerText = `Vie ${valor}`;
        dia2.innerText = `Sab ${++valor}`;
        dia3.innerText = `Dom ${++valor}`;
        dia4.innerText = `Lun ${++valor}`;
        dia5.innerText = `Mar ${++valor}`;
        dia6.innerText = `Mie ${++valor}`;
        dia7.innerText = `Jue ${++valor}`;
        dia8.innerText = `Vie ${++valor}`;
        dia9.innerText = `Sab ${++valor}`;
        dia10.innerText = `Dom ${++valor}`;
        dia11.innerText = `Lun ${++valor}`;
        dia12.innerText = `Mar ${++valor}`;
        dia13.innerText = `Mie ${++valor}`;
        dia14.innerText = `Jue ${++valor}`;
        dia15.innerText = `Vie ${++valor}`;
        dia16.innerText = "---";
    }
    else if(mes === 08 && valor == 16){
        dia1.innerText = `Sab ${valor}`;
        dia2.innerText = `Dom ${++valor}`;
        dia3.innerText = `Lun ${++valor}`;
        dia4.innerText = `Mar ${++valor}`;
        dia5.innerText = `Mie ${++valor}`;
        dia6.innerText = `Jue ${++valor}`;
        dia7.innerText = `Vie ${++valor}`;
        dia8.innerText = `Sab ${++valor}`;
        dia9.innerText = `Dom ${++valor}`;
        dia10.innerText = `Lun ${++valor}`;
        dia11.innerText = `Mar ${++valor}`;
        dia12.innerText = `Mie ${++valor}`;
        dia13.innerText = `Jue ${++valor}`;
        dia14.innerText = `Vie ${++valor}`;
        dia15.innerText = `Sab ${++valor}`;
        dia16.innerText = `Dom ${++valor}`;
    };
    if(mes === 09 && valor == 1){
        dia1.innerText = `Lun ${valor}`;
        dia2.innerText = `Mar ${++valor}`;
        dia3.innerText = `Mie ${++valor}`;
        dia4.innerText = `Jue ${++valor}`;
        dia5.innerText = `Vie ${++valor}`;
        dia6.innerText = `Sab ${++valor}`;
        dia7.innerText = `Dom ${++valor}`;
        dia8.innerText = `Lun ${++valor}`;
        dia9.innerText = `Mar ${++valor}`;
        dia10.innerText = `Mie ${++valor}`;
        dia11.innerText = `Jue ${++valor}`;
        dia12.innerText = `Vie ${++valor}`;
        dia13.innerText = `Sab ${++valor}`;
        dia14.innerText = `Dom ${++valor}`;
        dia15.innerText = `Lun ${++valor}`;
        dia16.innerText = "---";
    }
    else if(mes === 09 && valor == 16){
        dia1.innerText = `Mar ${valor}`;
        dia2.innerText = `Mie ${++valor}`;
        dia3.innerText = `Jue ${++valor}`;
        dia4.innerText = `Vie ${++valor}`;
        dia5.innerText = `Sab ${++valor}`;
        dia6.innerText = `Dom ${++valor}`;
        dia7.innerText = `Lun ${++valor}`;
        dia8.innerText = `Mar ${++valor}`;
        dia9.innerText = `Mie ${++valor}`;
        dia10.innerText = `Jue ${++valor}`;
        dia11.innerText = `Vie ${++valor}`;
        dia12.innerText = `Sab ${++valor}`;
        dia13.innerText = `Dom ${++valor}`;
        dia14.innerText = `Lun ${++valor}`;
        dia15.innerText = `Mar ${++valor}`;
        dia16.innerText = "---";
    };
    if(mes === 10 && valor == 1){
        dia1.innerText = `Mie ${valor}`;
        dia2.innerText = `Jue ${++valor}`;
        dia3.innerText = `Vie ${++valor}`;
        dia4.innerText = `Sab ${++valor}`;
        dia5.innerText = `Dom ${++valor}`;
        dia6.innerText = `Lun ${++valor}`;
        dia7.innerText = `Mar ${++valor}`;
        dia8.innerText = `Mie ${++valor}`;
        dia9.innerText = `Jue ${++valor}`;
        dia10.innerText = `Vie ${++valor}`;
        dia11.innerText = `Sab ${++valor}`;
        dia12.innerText = `Dom ${++valor}`;
        dia13.innerText = `Lun ${++valor}`;
        dia14.innerText = `Mar ${++valor}`;
        dia15.innerText = `Mie ${++valor}`;
        dia16.innerText = "---";
    }
    else if(mes === 10 && valor == 16){
        dia1.innerText = `Jue ${valor}`;
        dia2.innerText = `Vie ${++valor}`;
        dia3.innerText = `Sab ${++valor}`;
        dia4.innerText = `Dom ${++valor}`;
        dia5.innerText = `Lun ${++valor}`;
        dia6.innerText = `Mar ${++valor}`;
        dia7.innerText = `Mie ${++valor}`;
        dia8.innerText = `Jue ${++valor}`;
        dia9.innerText = `Vie ${++valor}`;
        dia10.innerText = `Sab ${++valor}`;
        dia11.innerText = `Dom ${++valor}`;
        dia12.innerText = `Lun ${++valor}`;
        dia13.innerText = `Mar ${++valor}`;
        dia14.innerText = `Mie ${++valor}`;
        dia15.innerText = `Jue ${++valor}`;
        dia16.innerText = `Vie ${++valor}`;
    };
    if(mes === 11 && valor == 1){
        dia1.innerText = `Sab ${valor}`;
        dia2.innerText = `Dom ${++valor}`;
        dia3.innerText = `Lun ${++valor}`;
        dia4.innerText = `Mar ${++valor}`;
        dia5.innerText = `Mie ${++valor}`;
        dia6.innerText = `Jue ${++valor}`;
        dia7.innerText = `Vie ${++valor}`;
        dia8.innerText = `Sab ${++valor}`;
        dia9.innerText = `Dom ${++valor}`;
        dia10.innerText = `Lun ${++valor}`;
        dia11.innerText = `Mar ${++valor}`;
        dia12.innerText = `Mie ${++valor}`;
        dia13.innerText = `Jue ${++valor}`;
        dia14.innerText = `vie ${++valor}`;
        dia15.innerText = `Sab ${++valor}`;
        dia16.innerText = "---";
    }
    else if(mes === 11 && valor == 16){
        dia1.innerText = `Dom ${valor}`;
        dia2.innerText = `Lun ${++valor}`;
        dia3.innerText = `Mar ${++valor}`;
        dia4.innerText = `Mie ${++valor}`;
        dia5.innerText = `Jue ${++valor}`;
        dia6.innerText = `Vie ${++valor}`;
        dia7.innerText = `Sab ${++valor}`;
        dia8.innerText = `Dom ${++valor}`;
        dia9.innerText = `Lun ${++valor}`;
        dia10.innerText = `Mar ${++valor}`;
        dia11.innerText = `Mie ${++valor}`;
        dia12.innerText = `Jue ${++valor}`;
        dia13.innerText = `Vie ${++valor}`;
        dia14.innerText = `Sab ${++valor}`;
        dia15.innerText = `Dom ${++valor}`;
        dia16.innerText = "---";
    };
    if(mes === 12 && valor == 1){
        dia1.innerText = `Lun ${valor}`;
        dia2.innerText = `Mar ${++valor}`;
        dia3.innerText = `Mie ${++valor}`;
        dia4.innerText = `Jue ${++valor}`;
        dia5.innerText = `Vie ${++valor}`;
        dia6.innerText = `Sab ${++valor}`;
        dia7.innerText = `Dom ${++valor}`;
        dia8.innerText = `Lun ${++valor}`;
        dia9.innerText = `Mar ${++valor}`;
        dia10.innerText = `Mie ${++valor}`;
        dia11.innerText = `Jue ${++valor}`;
        dia12.innerText = `Vie ${++valor}`;
        dia13.innerText = `Sab ${++valor}`;
        dia14.innerText = `Dom ${++valor}`;
        dia15.innerText = `Lun ${++valor}`;
        dia16.innerText = "---";
    }
    else if(mes === 12 && valor == 16){
        dia1.innerText = `Mar ${valor}`;
        dia2.innerText = `Mie ${++valor}`;
        dia3.innerText = `Jue ${++valor}`;
        dia4.innerText = `Vie ${++valor}`;
        dia5.innerText = `Sab ${++valor}`;
        dia6.innerText = `Dom ${++valor}`;
        dia7.innerText = `Lun ${++valor}`;
        dia8.innerText = `Mar ${++valor}`;
        dia9.innerText = `Mie ${++valor}`;
        dia10.innerText = `Jue ${++valor}`;
        dia11.innerText = `Vie ${++valor}`;
        dia12.innerText = `Sab ${++valor}`;
        dia13.innerText = `Dom ${++valor}`;
        dia14.innerText = `Lun ${++valor}`;
        dia15.innerText = `Mar ${++valor}`;
        dia16.innerText = `Mie ${++valor}`;
    };
};

function insertarDiasAño5(valor, mes){
    valor = parseInt(valor);
    mes = parseInt(mes);
    if(mes === 01 && valor == 1){
        dia1.innerText = `Jue ${valor}`;
        dia2.innerText = `Vie ${++valor}`;
        dia3.innerText = `Sab ${++valor}`;
        dia4.innerText = `Dom ${++valor}`;
        dia5.innerText = `Lun ${++valor}`;
        dia6.innerText = `Mar ${++valor}`;
        dia7.innerText = `Mie ${++valor}`;
        dia8.innerText = `Jue ${++valor}`;
        dia9.innerText = `Vie ${++valor}`;
        dia10.innerText = `Sab ${++valor}`;
        dia11.innerText = `Dom ${++valor}`;
        dia12.innerText = `Lun ${++valor}`;
        dia13.innerText = `Mar ${++valor}`;
        dia14.innerText = `Mie ${++valor}`;
        dia15.innerText = `Jue ${++valor}`;
        dia16.innerText = "---";
    }
    else if(mes === 01 && valor == 16){
        dia1.innerText = `Vie ${valor}`;
        dia2.innerText = `Sab ${++valor}`;
        dia3.innerText = `Dom ${++valor}`;
        dia4.innerText = `Lun ${++valor}`;
        dia5.innerText = `Mar ${++valor}`;
        dia6.innerText = `Mie ${++valor}`;
        dia7.innerText = `Jue ${++valor}`;
        dia8.innerText = `Vie ${++valor}`;
        dia9.innerText = `Sab ${++valor}`;
        dia10.innerText = `Dom ${++valor}`;
        dia11.innerText = `Lun ${++valor}`;
        dia12.innerText = `Mar ${++valor}`;
        dia13.innerText = `Mie ${++valor}`;
        dia14.innerText = `Jue ${++valor}`;
        dia15.innerText = `Vie ${++valor}`;
        dia16.innerText = `Sab ${++valor}`;
    };
    if(mes === 02 && valor == 1){
        dia1.innerText = `Dom ${valor}`;
        dia2.innerText = `Lun ${++valor}`;
        dia3.innerText = `Mar ${++valor}`;
        dia4.innerText = `Mie ${++valor}`;
        dia5.innerText = `Jue ${++valor}`;
        dia6.innerText = `Vie ${++valor}`;
        dia7.innerText = `Sab ${++valor}`;
        dia8.innerText = `Dom ${++valor}`;
        dia9.innerText = `Lun ${++valor}`;
        dia10.innerText = `Mar ${++valor}`;
        dia11.innerText = `Mie ${++valor}`;
        dia12.innerText = `Jue ${++valor}`;
        dia13.innerText = `Vie ${++valor}`;
        dia14.innerText = `Sab ${++valor}`;
        dia15.innerText = `Dom ${++valor}`;
        dia16.innerText = "---";
    }
    else if(mes === 02 && valor == 16){
        dia1.innerText = `Lun ${valor}`;
        dia2.innerText = `Mar ${++valor}`;
        dia3.innerText = `Mie ${++valor}`;
        dia4.innerText = `Jue ${++valor}`;
        dia5.innerText = `Vie ${++valor}`;
        dia6.innerText = `Sab ${++valor}`;
        dia7.innerText = `Dom ${++valor}`;
        dia8.innerText = `Lun ${++valor}`;
        dia9.innerText = `Mar ${++valor}`;
        dia10.innerText = `Mie ${++valor}`;
        dia11.innerText = `Jue ${++valor}`;
        dia12.innerText = `Vie ${++valor}`;
        dia13.innerText = `Sab ${++valor}`;
        dia14.innerText = "---";
        dia15.innerText = "---";
        dia16.innerText = "---";
    };
    if(mes === 03 && valor == 1){
        dia1.innerText = `Dom ${valor}`;
        dia2.innerText = `Lun ${++valor}`;
        dia3.innerText = `Mar ${++valor}`;
        dia4.innerText = `Mie ${++valor}`;
        dia5.innerText = `Jue ${++valor}`;
        dia6.innerText = `Vie ${++valor}`;
        dia7.innerText = `Sab ${++valor}`;
        dia8.innerText = `Dom ${++valor}`;
        dia9.innerText = `Lun ${++valor}`;
        dia10.innerText = `Mar ${++valor}`;
        dia11.innerText = `Mie ${++valor}`;
        dia12.innerText = `Jue ${++valor}`;
        dia13.innerText = `Vie ${++valor}`;
        dia14.innerText = `Sab ${++valor}`;
        dia15.innerText = `Dom ${++valor}`;
        dia16.innerText = "---";
    }
    else if(mes === 03 && valor == 16){
        dia1.innerText = `Lun ${valor}`;
        dia2.innerText = `Mar ${++valor}`;
        dia3.innerText = `Mie ${++valor}`;
        dia4.innerText = `Jue ${++valor}`;
        dia5.innerText = `Vie ${++valor}`;
        dia6.innerText = `Sab ${++valor}`;
        dia7.innerText = `Dom ${++valor}`;
        dia8.innerText = `Lun ${++valor}`;
        dia9.innerText = `Mar ${++valor}`;
        dia10.innerText = `Mie ${++valor}`;
        dia11.innerText = `Jue ${++valor}`;
        dia12.innerText = `Vie ${++valor}`;
        dia13.innerText = `Sab ${++valor}`;
        dia14.innerText = `Dom ${++valor}`;
        dia15.innerText = `Lun ${++valor}`;
        dia16.innerText = `Mar ${++valor}`;
    };
    if(mes === 04 && valor == 1){
        dia1.innerText = `Mie ${valor}`;
        dia2.innerText = `Jue ${++valor}`;
        dia3.innerText = `Vie ${++valor}`;
        dia4.innerText = `Sab ${++valor}`;
        dia5.innerText = `Dom ${++valor}`;
        dia6.innerText = `Lun ${++valor}`;
        dia7.innerText = `Mar ${++valor}`;
        dia8.innerText = `Mie ${++valor}`;
        dia9.innerText = `Jue ${++valor}`;
        dia10.innerText = `Vie ${++valor}`;
        dia11.innerText = `Sab ${++valor}`;
        dia12.innerText = `Dom ${++valor}`;
        dia13.innerText = `Lun ${++valor}`;
        dia14.innerText = `Mar ${++valor}`;
        dia15.innerText = `Mie ${++valor}`;
        dia16.innerText = "---";
    }
    else if(mes === 04 && valor == 16){
        dia1.innerText = `Jue ${valor}`;
        dia2.innerText = `Vie ${++valor}`;
        dia3.innerText = `Sab ${++valor}`;
        dia4.innerText = `Dom ${++valor}`;
        dia5.innerText = `Lun ${++valor}`;
        dia6.innerText = `Mar ${++valor}`;
        dia7.innerText = `Mie ${++valor}`;
        dia8.innerText = `Jue ${++valor}`;
        dia9.innerText = `Vie ${++valor}`;
        dia10.innerText = `Sab ${++valor}`;
        dia11.innerText = `Dom ${++valor}`;
        dia12.innerText = `Lun ${++valor}`;
        dia13.innerText = `Mar ${++valor}`;
        dia14.innerText = `Mie ${++valor}`;
        dia15.innerText = `Jue ${++valor}`;
        dia16.innerText = "---";
    };
    if(mes === 05 && valor == 1){
        dia1.innerText = `Vie ${valor}`;
        dia2.innerText = `Sab ${++valor}`;
        dia3.innerText = `Dom ${++valor}`;
        dia4.innerText = `Lun ${++valor}`;
        dia5.innerText = `Mar ${++valor}`;
        dia6.innerText = `Mie ${++valor}`;
        dia7.innerText = `Jue ${++valor}`;
        dia8.innerText = `Vie ${++valor}`;
        dia9.innerText = `Sab ${++valor}`;
        dia10.innerText = `Dom ${++valor}`;
        dia11.innerText = `Lun ${++valor}`;
        dia12.innerText = `Mar ${++valor}`;
        dia13.innerText = `Mie ${++valor}`;
        dia14.innerText = `Jue ${++valor}`;
        dia15.innerText = `Vie ${++valor}`;
        dia16.innerText = "---";
    }
    else if(mes === 05 && valor == 16){
        dia1.innerText = `Sab ${valor}`;
        dia2.innerText = `Dom ${++valor}`;
        dia3.innerText = `Lun ${++valor}`;
        dia4.innerText = `Mar ${++valor}`;
        dia5.innerText = `Mie ${++valor}`;
        dia6.innerText = `Jue ${++valor}`;
        dia7.innerText = `Vie ${++valor}`;
        dia8.innerText = `Sab ${++valor}`;
        dia9.innerText = `Dom ${++valor}`;
        dia10.innerText = `Lun ${++valor}`;
        dia11.innerText = `Mar ${++valor}`;
        dia12.innerText = `Mie ${++valor}`;
        dia13.innerText = `Jue ${++valor}`;
        dia14.innerText = `Vie ${++valor}`;
        dia15.innerText = `Sab ${++valor}`;
        dia16.innerText = `Dom ${++valor}`;
    };
    if(mes === 06 && valor == 1){
        dia1.innerText = `Lun ${valor}`;
        dia2.innerText = `Mar ${++valor}`;
        dia3.innerText = `Mie ${++valor}`;
        dia4.innerText = `Jue ${++valor}`;
        dia5.innerText = `Vie ${++valor}`;
        dia6.innerText = `Sab ${++valor}`;
        dia7.innerText = `Dom ${++valor}`;
        dia8.innerText = `Lun ${++valor}`;
        dia9.innerText = `Mar ${++valor}`;
        dia10.innerText = `Mie ${++valor}`;
        dia11.innerText = `Jue ${++valor}`;
        dia12.innerText = `Vie ${++valor}`;
        dia13.innerText = `Sab ${++valor}`;
        dia14.innerText = `Dom ${++valor}`;
        dia15.innerText = `Lun ${++valor}`;
        dia16.innerText = "---";
    }
    else if(mes === 06 && valor == 16){
        dia1.innerText = `Mar ${valor}`;
        dia2.innerText = `Mie ${++valor}`;
        dia3.innerText = `Jue ${++valor}`;
        dia4.innerText = `Vie ${++valor}`;
        dia5.innerText = `Sab ${++valor}`;
        dia6.innerText = `Dom ${++valor}`;
        dia7.innerText = `Lun ${++valor}`;
        dia8.innerText = `Mar ${++valor}`;
        dia9.innerText = `Mie ${++valor}`;
        dia10.innerText = `Jue ${++valor}`;
        dia11.innerText = `Vie ${++valor}`;
        dia12.innerText = `Sab ${++valor}`;
        dia13.innerText = `Dom ${++valor}`;
        dia14.innerText = `Lun ${++valor}`;
        dia15.innerText = `Mar ${++valor}`;
        dia16.innerText = "---";
    };
    if(mes === 07 && valor == 1){
        dia1.innerText = `Mie ${valor}`;
        dia2.innerText = `Jue ${++valor}`;
        dia3.innerText = `Vie ${++valor}`;
        dia4.innerText = `Sab ${++valor}`;
        dia5.innerText = `Dom ${++valor}`;
        dia6.innerText = `Lun ${++valor}`;
        dia7.innerText = `Mar ${++valor}`;
        dia8.innerText = `Mie ${++valor}`;
        dia9.innerText = `Jue ${++valor}`;
        dia10.innerText = `Vie ${++valor}`;
        dia11.innerText = `Sab ${++valor}`;
        dia12.innerText = `Dom ${++valor}`;
        dia13.innerText = `Lun ${++valor}`;
        dia14.innerText = `Mar ${++valor}`;
        dia15.innerText = `Mie ${++valor}`;
        dia16.innerText = "---";
    }
    else if(mes === 07 && valor == 16){
        dia1.innerText = `Jue ${valor}`;
        dia2.innerText = `Vie ${++valor}`;
        dia3.innerText = `Sab ${++valor}`;
        dia4.innerText = `Dom ${++valor}`;
        dia5.innerText = `Lun ${++valor}`;
        dia6.innerText = `Mar ${++valor}`;
        dia7.innerText = `Mie ${++valor}`;
        dia8.innerText = `Jue ${++valor}`;
        dia9.innerText = `Vie ${++valor}`;
        dia10.innerText = `Sab ${++valor}`;
        dia11.innerText = `Dom ${++valor}`;
        dia12.innerText = `Lun ${++valor}`;
        dia13.innerText = `Mar ${++valor}`;
        dia14.innerText = `Mie ${++valor}`;
        dia15.innerText = `Jue ${++valor}`;
        dia16.innerText = `Vie ${++valor}`;
    };
    if(mes === 08 && valor == 1){
        dia1.innerText = `Sab ${valor}`;
        dia2.innerText = `Dom ${++valor}`;
        dia3.innerText = `Lun ${++valor}`;
        dia4.innerText = `Mar ${++valor}`;
        dia5.innerText = `Mie ${++valor}`;
        dia6.innerText = `Jue ${++valor}`;
        dia7.innerText = `Vie ${++valor}`;
        dia8.innerText = `Sab ${++valor}`;
        dia9.innerText = `Dom ${++valor}`;
        dia10.innerText = `Lun ${++valor}`;
        dia11.innerText = `Mar ${++valor}`;
        dia12.innerText = `Mie ${++valor}`;
        dia13.innerText = `Jue ${++valor}`;
        dia14.innerText = `vie ${++valor}`;
        dia15.innerText = `Sab ${++valor}`;
        dia16.innerText = "---";
    }
    else if(mes === 08 && valor == 16){
        dia1.innerText = `Dom ${valor}`;
        dia2.innerText = `Lun ${++valor}`;
        dia3.innerText = `Mar ${++valor}`;
        dia4.innerText = `Mie ${++valor}`;
        dia5.innerText = `Jue ${++valor}`;
        dia6.innerText = `Vie ${++valor}`;
        dia7.innerText = `Sab ${++valor}`;
        dia8.innerText = `Dom ${++valor}`;
        dia9.innerText = `Lun ${++valor}`;
        dia10.innerText = `Mar ${++valor}`;
        dia11.innerText = `Mie ${++valor}`;
        dia12.innerText = `Jue ${++valor}`;
        dia13.innerText = `Vie ${++valor}`;
        dia14.innerText = `Sab ${++valor}`;
        dia15.innerText = `Dom ${++valor}`;
        dia16.innerText = `Lun ${++valor}`;
    };
    if(mes === 09 && valor == 1){
        dia1.innerText = `Mar ${valor}`;
        dia2.innerText = `Mie ${++valor}`;
        dia3.innerText = `Jue ${++valor}`;
        dia4.innerText = `Vie ${++valor}`;
        dia5.innerText = `Sab ${++valor}`;
        dia6.innerText = `Dom ${++valor}`;
        dia7.innerText = `Lun ${++valor}`;
        dia8.innerText = `Mar ${++valor}`;
        dia9.innerText = `Mie ${++valor}`;
        dia10.innerText = `Jue ${++valor}`;
        dia11.innerText = `Vie ${++valor}`;
        dia12.innerText = `Sab ${++valor}`;
        dia13.innerText = `Dom ${++valor}`;
        dia14.innerText = `Lun ${++valor}`;
        dia15.innerText = `Mar ${++valor}`;
        dia16.innerText = "---";
    }
    else if(mes === 09 && valor == 16){
        dia1.innerText = `Mie ${valor}`;
        dia2.innerText = `Jue ${++valor}`;
        dia3.innerText = `Vie ${++valor}`;
        dia4.innerText = `Sab ${++valor}`;
        dia5.innerText = `Dom ${++valor}`;
        dia6.innerText = `Lun ${++valor}`;
        dia7.innerText = `Mar ${++valor}`;
        dia8.innerText = `Mie ${++valor}`;
        dia9.innerText = `Jue ${++valor}`;
        dia10.innerText = `Vie ${++valor}`;
        dia11.innerText = `Sab ${++valor}`;
        dia12.innerText = `Dom ${++valor}`;
        dia13.innerText = `Lun ${++valor}`;
        dia14.innerText = `Mar ${++valor}`;
        dia15.innerText = `Mie ${++valor}`;
        dia16.innerText = "---";
    };
    if(mes === 10 && valor == 1){
        dia1.innerText = `Jue ${valor}`;
        dia2.innerText = `Vie ${++valor}`;
        dia3.innerText = `Sab ${++valor}`;
        dia4.innerText = `Dom ${++valor}`;
        dia5.innerText = `Lun ${++valor}`;
        dia6.innerText = `Mar ${++valor}`;
        dia7.innerText = `Mie ${++valor}`;
        dia8.innerText = `Jue ${++valor}`;
        dia9.innerText = `Vie ${++valor}`;
        dia10.innerText = `Sab ${++valor}`;
        dia11.innerText = `Dom ${++valor}`;
        dia12.innerText = `Lun ${++valor}`;
        dia13.innerText = `Mar ${++valor}`;
        dia14.innerText = `Mie ${++valor}`;
        dia15.innerText = `Jue ${++valor}`;
        dia16.innerText = "---";
    }
    else if(mes === 10 && valor == 16){
        dia1.innerText = `Vie ${valor}`;
        dia2.innerText = `Sab ${++valor}`;
        dia3.innerText = `Dom ${++valor}`;
        dia4.innerText = `Lun ${++valor}`;
        dia5.innerText = `Mar ${++valor}`;
        dia6.innerText = `Mie ${++valor}`;
        dia7.innerText = `Jue ${++valor}`;
        dia8.innerText = `Vie ${++valor}`;
        dia9.innerText = `Sab ${++valor}`;
        dia10.innerText = `Dom ${++valor}`;
        dia11.innerText = `Lun ${++valor}`;
        dia12.innerText = `Mar ${++valor}`;
        dia13.innerText = `Mie ${++valor}`;
        dia14.innerText = `Jue ${++valor}`;
        dia15.innerText = `Vie ${++valor}`;
        dia16.innerText = `Sab ${++valor}`;
    };
    if(mes === 11 && valor == 1){
        dia1.innerText = `Dom ${valor}`;
        dia2.innerText = `Lun ${++valor}`;
        dia3.innerText = `Mar ${++valor}`;
        dia4.innerText = `Mie ${++valor}`;
        dia5.innerText = `Jue ${++valor}`;
        dia6.innerText = `Vie ${++valor}`;
        dia7.innerText = `Sab ${++valor}`;
        dia8.innerText = `Dom ${++valor}`;
        dia9.innerText = `Lun ${++valor}`;
        dia10.innerText = `Mar ${++valor}`;
        dia11.innerText = `Mie ${++valor}`;
        dia12.innerText = `Jue ${++valor}`;
        dia13.innerText = `Vie ${++valor}`;
        dia14.innerText = `Sab ${++valor}`;
        dia15.innerText = `Dom ${++valor}`;
        dia16.innerText = "---";
    }
    else if(mes === 11 && valor == 16){
        dia1.innerText = `Lun ${valor}`;
        dia2.innerText = `Mar ${++valor}`;
        dia3.innerText = `Mie ${++valor}`;
        dia4.innerText = `Jue ${++valor}`;
        dia5.innerText = `Vie ${++valor}`;
        dia6.innerText = `Sab ${++valor}`;
        dia7.innerText = `Dom ${++valor}`;
        dia8.innerText = `Lun ${++valor}`;
        dia9.innerText = `Mar ${++valor}`;
        dia10.innerText = `Mie ${++valor}`;
        dia11.innerText = `Jue ${++valor}`;
        dia12.innerText = `Vie ${++valor}`;
        dia13.innerText = `Sab ${++valor}`;
        dia14.innerText = `Dom ${++valor}`;
        dia15.innerText = `Lun ${++valor}`;
        dia16.innerText = "---";
    };
    if(mes === 12 && valor == 1){
        dia1.innerText = `Mar ${valor}`;
        dia2.innerText = `Mie ${++valor}`;
        dia3.innerText = `Jue ${++valor}`;
        dia4.innerText = `Vie ${++valor}`;
        dia5.innerText = `Sab ${++valor}`;
        dia6.innerText = `Dom ${++valor}`;
        dia7.innerText = `Lun ${++valor}`;
        dia8.innerText = `Mar ${++valor}`;
        dia9.innerText = `Mie ${++valor}`;
        dia10.innerText = `Jue ${++valor}`;
        dia11.innerText = `Vie ${++valor}`;
        dia12.innerText = `Sab ${++valor}`;
        dia13.innerText = `Dom ${++valor}`;
        dia14.innerText = `Lun ${++valor}`;
        dia15.innerText = `Mar ${++valor}`;
        dia16.innerText = "---";
    }
    else if(mes === 12 && valor == 16){
        dia1.innerText = `Mie ${valor}`;
        dia2.innerText = `Jue ${++valor}`;
        dia3.innerText = `Vie ${++valor}`;
        dia4.innerText = `Sab ${++valor}`;
        dia5.innerText = `Dom ${++valor}`;
        dia6.innerText = `Lun ${++valor}`;
        dia7.innerText = `Mar ${++valor}`;
        dia8.innerText = `Mie ${++valor}`;
        dia9.innerText = `Jue ${++valor}`;
        dia10.innerText = `Vie ${++valor}`;
        dia11.innerText = `Sab ${++valor}`;
        dia12.innerText = `Dom ${++valor}`;
        dia13.innerText = `Lun ${++valor}`;
        dia14.innerText = `Mar ${++valor}`;
        dia15.innerText = `Mie ${++valor}`;
        dia16.innerText = `Jue ${++valor}`;
    };
};

function insertarDiasAño6(valor, mes){
    valor = parseInt(valor);
    mes = parseInt(mes);
    if(mes === 01 && valor == 1){
        dia1.innerText = `Vie ${valor}`;
        dia2.innerText = `Sab ${++valor}`;
        dia3.innerText = `Dom ${++valor}`;
        dia4.innerText = `Lun ${++valor}`;
        dia5.innerText = `Mar ${++valor}`;
        dia6.innerText = `Mie ${++valor}`;
        dia7.innerText = `Jue ${++valor}`;
        dia8.innerText = `Vie ${++valor}`;
        dia9.innerText = `Sab ${++valor}`;
        dia10.innerText = `Dom ${++valor}`;
        dia11.innerText = `Lun ${++valor}`;
        dia12.innerText = `Mar ${++valor}`;
        dia13.innerText = `Mie ${++valor}`;
        dia14.innerText = `Jue ${++valor}`;
        dia15.innerText = `Vie ${++valor}`;
        dia16.innerText = "---";
    }
    else if(mes === 01 && valor == 16){
        dia1.innerText = `Sab ${valor}`;
        dia2.innerText = `Dom ${++valor}`;
        dia3.innerText = `Lun ${++valor}`;
        dia4.innerText = `Mar ${++valor}`;
        dia5.innerText = `Mie ${++valor}`;
        dia6.innerText = `Jue ${++valor}`;
        dia7.innerText = `Vie ${++valor}`;
        dia8.innerText = `Sab ${++valor}`;
        dia9.innerText = `Dom ${++valor}`;
        dia10.innerText = `Lun ${++valor}`;
        dia11.innerText = `Mar ${++valor}`;
        dia12.innerText = `Mie ${++valor}`;
        dia13.innerText = `Jue ${++valor}`;
        dia14.innerText = `Vie ${++valor}`;
        dia15.innerText = `Sab ${++valor}`;
        dia16.innerText = `Dom ${++valor}`;
    };
    if(mes === 02 && valor == 1){
        dia1.innerText = `Lun ${valor}`;
        dia2.innerText = `Mar ${++valor}`;
        dia3.innerText = `Mie ${++valor}`;
        dia4.innerText = `Jue ${++valor}`;
        dia5.innerText = `Vie ${++valor}`;
        dia6.innerText = `Sab ${++valor}`;
        dia7.innerText = `Dom ${++valor}`;
        dia8.innerText = `Lun ${++valor}`;
        dia9.innerText = `Mar ${++valor}`;
        dia10.innerText = `Mie ${++valor}`;
        dia11.innerText = `Jue ${++valor}`;
        dia12.innerText = `Vie ${++valor}`;
        dia13.innerText = `Sab ${++valor}`;
        dia14.innerText = `Dom ${++valor}`;
        dia15.innerText = `Lun ${++valor}`;
        dia16.innerText = "---";
    }
    else if(mes === 02 && valor == 16){
        dia1.innerText = `Mar ${valor}`;
        dia2.innerText = `Mie ${++valor}`;
        dia3.innerText = `Jue ${++valor}`;
        dia4.innerText = `Vie ${++valor}`;
        dia5.innerText = `Sab ${++valor}`;
        dia6.innerText = `Dom ${++valor}`;
        dia7.innerText = `Lun ${++valor}`;
        dia8.innerText = `Mar ${++valor}`;
        dia9.innerText = `Mie ${++valor}`;
        dia10.innerText = `Jue ${++valor}`;
        dia11.innerText = `Vie ${++valor}`;
        dia12.innerText = `Sab ${++valor}`;
        dia13.innerText = `Dom ${++valor}`;
        dia14.innerText = "---";
        dia15.innerText = "---";
        dia16.innerText = "---";
    };
    if(mes === 03 && valor == 1){
        dia1.innerText = `Lun ${valor}`;
        dia2.innerText = `Mar ${++valor}`;
        dia3.innerText = `Mie ${++valor}`;
        dia4.innerText = `Jue ${++valor}`;
        dia5.innerText = `Vie ${++valor}`;
        dia6.innerText = `Sab ${++valor}`;
        dia7.innerText = `Dom ${++valor}`;
        dia8.innerText = `Lun ${++valor}`;
        dia9.innerText = `Mar ${++valor}`;
        dia10.innerText = `Mie ${++valor}`;
        dia11.innerText = `Jue ${++valor}`;
        dia12.innerText = `Vie ${++valor}`;
        dia13.innerText = `Sab ${++valor}`;
        dia14.innerText = `Dom ${++valor}`;
        dia15.innerText = `Lun ${++valor}`;
        dia16.innerText = "---";
    }
    else if(mes === 03 && valor == 16){
        dia1.innerText = `Mar ${valor}`;
        dia2.innerText = `Mie ${++valor}`;
        dia3.innerText = `Jue ${++valor}`;
        dia4.innerText = `Vie ${++valor}`;
        dia5.innerText = `Sab ${++valor}`;
        dia6.innerText = `Dom ${++valor}`;
        dia7.innerText = `Lun ${++valor}`;
        dia8.innerText = `Mar ${++valor}`;
        dia9.innerText = `Mie ${++valor}`;
        dia10.innerText = `Jue ${++valor}`;
        dia11.innerText = `Vie ${++valor}`;
        dia12.innerText = `Sab ${++valor}`;
        dia13.innerText = `Dom ${++valor}`;
        dia14.innerText = `Lun ${++valor}`;
        dia15.innerText = `Mar ${++valor}`;
        dia16.innerText = `Mie ${++valor}`;
    };
    if(mes === 04 && valor == 1){
        dia1.innerText = `Jue ${valor}`;
        dia2.innerText = `Vie ${++valor}`;
        dia3.innerText = `Sab ${++valor}`;
        dia4.innerText = `Dom ${++valor}`;
        dia5.innerText = `Lun ${++valor}`;
        dia6.innerText = `Mar ${++valor}`;
        dia7.innerText = `Mie ${++valor}`;
        dia8.innerText = `Jue ${++valor}`;
        dia9.innerText = `Vie ${++valor}`;
        dia10.innerText = `Sab ${++valor}`;
        dia11.innerText = `Dom ${++valor}`;
        dia12.innerText = `Lun ${++valor}`;
        dia13.innerText = `Mar ${++valor}`;
        dia14.innerText = `Mie ${++valor}`;
        dia15.innerText = `Jue ${++valor}`;
        dia16.innerText = "---";
    }
    else if(mes === 04 && valor == 16){
        dia1.innerText = `Vie ${valor}`;
        dia2.innerText = `Sab ${++valor}`;
        dia3.innerText = `Dom ${++valor}`;
        dia4.innerText = `Lun ${++valor}`;
        dia5.innerText = `Mar ${++valor}`;
        dia6.innerText = `Mie ${++valor}`;
        dia7.innerText = `Jue ${++valor}`;
        dia8.innerText = `Vie ${++valor}`;
        dia9.innerText = `Sab ${++valor}`;
        dia10.innerText = `Dom ${++valor}`;
        dia11.innerText = `Lun ${++valor}`;
        dia12.innerText = `Mar ${++valor}`;
        dia13.innerText = `Mie ${++valor}`;
        dia14.innerText = `Jue ${++valor}`;
        dia15.innerText = `Vie ${++valor}`;
        dia16.innerText = "---";
    };
    if(mes === 05 && valor == 1){
        dia1.innerText = `Sab ${valor}`;
        dia2.innerText = `Dom ${++valor}`;
        dia3.innerText = `Lun ${++valor}`;
        dia4.innerText = `Mar ${++valor}`;
        dia5.innerText = `Mie ${++valor}`;
        dia6.innerText = `Jue ${++valor}`;
        dia7.innerText = `Vie ${++valor}`;
        dia8.innerText = `Sab ${++valor}`;
        dia9.innerText = `Dom ${++valor}`;
        dia10.innerText = `Lun ${++valor}`;
        dia11.innerText = `Mar ${++valor}`;
        dia12.innerText = `Mie ${++valor}`;
        dia13.innerText = `Jue ${++valor}`;
        dia14.innerText = `vie ${++valor}`;
        dia15.innerText = `Sab ${++valor}`;
        dia16.innerText = "---";
    }
    else if(mes === 05 && valor == 16){
        dia1.innerText = `Dom ${valor}`;
        dia2.innerText = `Lun ${++valor}`;
        dia3.innerText = `Mar ${++valor}`;
        dia4.innerText = `Mie ${++valor}`;
        dia5.innerText = `Jue ${++valor}`;
        dia6.innerText = `Vie ${++valor}`;
        dia7.innerText = `Sab ${++valor}`;
        dia8.innerText = `Dom ${++valor}`;
        dia9.innerText = `Lun ${++valor}`;
        dia10.innerText = `Mar ${++valor}`;
        dia11.innerText = `Mie ${++valor}`;
        dia12.innerText = `Jue ${++valor}`;
        dia13.innerText = `Vie ${++valor}`;
        dia14.innerText = `Sab ${++valor}`;
        dia15.innerText = `Dom ${++valor}`;
        dia16.innerText = `Lun ${++valor}`;
    };
    if(mes === 06 && valor == 1){
        dia1.innerText = `Mar ${valor}`;
        dia2.innerText = `Mie ${++valor}`;
        dia3.innerText = `Jue ${++valor}`;
        dia4.innerText = `Vie ${++valor}`;
        dia5.innerText = `Sab ${++valor}`;
        dia6.innerText = `Dom ${++valor}`;
        dia7.innerText = `Lun ${++valor}`;
        dia8.innerText = `Mar ${++valor}`;
        dia9.innerText = `Mie ${++valor}`;
        dia10.innerText = `Jue ${++valor}`;
        dia11.innerText = `Vie ${++valor}`;
        dia12.innerText = `Sab ${++valor}`;
        dia13.innerText = `Dom ${++valor}`;
        dia14.innerText = `Lun ${++valor}`;
        dia15.innerText = `Mar ${++valor}`;
        dia16.innerText = "---";
    }
    else if(mes === 06 && valor == 16){
        dia1.innerText = `Mie ${valor}`;
        dia2.innerText = `Jue ${++valor}`;
        dia3.innerText = `Vie ${++valor}`;
        dia4.innerText = `Sab ${++valor}`;
        dia5.innerText = `Dom ${++valor}`;
        dia6.innerText = `Lun ${++valor}`;
        dia7.innerText = `Mar ${++valor}`;
        dia8.innerText = `Mie ${++valor}`;
        dia9.innerText = `Jue ${++valor}`;
        dia10.innerText = `Vie ${++valor}`;
        dia11.innerText = `Sab ${++valor}`;
        dia12.innerText = `Dom ${++valor}`;
        dia13.innerText = `Lun ${++valor}`;
        dia14.innerText = `Mar ${++valor}`;
        dia15.innerText = `Mie ${++valor}`;
        dia16.innerText = "---";
    };
    if(mes === 07 && valor == 1){
        dia1.innerText = `Jue ${valor}`;
        dia2.innerText = `Vie ${++valor}`;
        dia3.innerText = `Sab ${++valor}`;
        dia4.innerText = `Dom ${++valor}`;
        dia5.innerText = `Lun ${++valor}`;
        dia6.innerText = `Mar ${++valor}`;
        dia7.innerText = `Mie ${++valor}`;
        dia8.innerText = `Jue ${++valor}`;
        dia9.innerText = `Vie ${++valor}`;
        dia10.innerText = `Sab ${++valor}`;
        dia11.innerText = `Dom ${++valor}`;
        dia12.innerText = `Lun ${++valor}`;
        dia13.innerText = `Mar ${++valor}`;
        dia14.innerText = `Mie ${++valor}`;
        dia15.innerText = `Jue ${++valor}`;
        dia16.innerText = "---";
    }
    else if(mes === 07 && valor == 16){
        dia1.innerText = `Vie ${valor}`;
        dia2.innerText = `Sab ${++valor}`;
        dia3.innerText = `Dom ${++valor}`;
        dia4.innerText = `Lun ${++valor}`;
        dia5.innerText = `Mar ${++valor}`;
        dia6.innerText = `Mie ${++valor}`;
        dia7.innerText = `Jue ${++valor}`;
        dia8.innerText = `Vie ${++valor}`;
        dia9.innerText = `Sab ${++valor}`;
        dia10.innerText = `Dom ${++valor}`;
        dia11.innerText = `Lun ${++valor}`;
        dia12.innerText = `Mar ${++valor}`;
        dia13.innerText = `Mie ${++valor}`;
        dia14.innerText = `Jue ${++valor}`;
        dia15.innerText = `Vie ${++valor}`;
        dia16.innerText = `Sab ${++valor}`;
    };
    if(mes === 08 && valor == 1){
        dia1.innerText = `Dom ${valor}`;
        dia2.innerText = `Lun ${++valor}`;
        dia3.innerText = `Mar ${++valor}`;
        dia4.innerText = `Mie ${++valor}`;
        dia5.innerText = `Jue ${++valor}`;
        dia6.innerText = `Vie ${++valor}`;
        dia7.innerText = `Sab ${++valor}`;
        dia8.innerText = `Dom ${++valor}`;
        dia9.innerText = `Lun ${++valor}`;
        dia10.innerText = `Mar ${++valor}`;
        dia11.innerText = `Mie ${++valor}`;
        dia12.innerText = `Jue ${++valor}`;
        dia13.innerText = `Vie ${++valor}`;
        dia14.innerText = `Sab ${++valor}`;
        dia15.innerText = `Dom ${++valor}`;
        dia16.innerText = "---";
    }
    else if(mes === 08 && valor == 16){
        dia1.innerText = `Lun ${valor}`;
        dia2.innerText = `Mar ${++valor}`;
        dia3.innerText = `Mie ${++valor}`;
        dia4.innerText = `Jue ${++valor}`;
        dia5.innerText = `Vie ${++valor}`;
        dia6.innerText = `Sab ${++valor}`;
        dia7.innerText = `Dom ${++valor}`;
        dia8.innerText = `Lun ${++valor}`;
        dia9.innerText = `Mar ${++valor}`;
        dia10.innerText = `Mie ${++valor}`;
        dia11.innerText = `Jue ${++valor}`;
        dia12.innerText = `Vie ${++valor}`;
        dia13.innerText = `Sab ${++valor}`;
        dia14.innerText = `Dom ${++valor}`;
        dia15.innerText = `Lun ${++valor}`;
        dia16.innerText = `Mar ${++valor}`;
    };
    if(mes === 09 && valor == 1){
        dia1.innerText = `Mie ${valor}`;
        dia2.innerText = `Jue ${++valor}`;
        dia3.innerText = `Vie ${++valor}`;
        dia4.innerText = `Sab ${++valor}`;
        dia5.innerText = `Dom ${++valor}`;
        dia6.innerText = `Lun ${++valor}`;
        dia7.innerText = `Mar ${++valor}`;
        dia8.innerText = `Mie ${++valor}`;
        dia9.innerText = `Jue ${++valor}`;
        dia10.innerText = `Vie ${++valor}`;
        dia11.innerText = `Sab ${++valor}`;
        dia12.innerText = `Dom ${++valor}`;
        dia13.innerText = `Lun ${++valor}`;
        dia14.innerText = `Mar ${++valor}`;
        dia15.innerText = `Mie ${++valor}`;
        dia16.innerText = "---";
    }
    else if(mes === 09 && valor == 16){
        dia1.innerText = `Jue ${valor}`;
        dia2.innerText = `Vie ${++valor}`;
        dia3.innerText = `Sab ${++valor}`;
        dia4.innerText = `Dom ${++valor}`;
        dia5.innerText = `Lun ${++valor}`;
        dia6.innerText = `Mar ${++valor}`;
        dia7.innerText = `Mie ${++valor}`;
        dia8.innerText = `Jue ${++valor}`;
        dia9.innerText = `Vie ${++valor}`;
        dia10.innerText = `Sab ${++valor}`;
        dia11.innerText = `Dom ${++valor}`;
        dia12.innerText = `Lun ${++valor}`;
        dia13.innerText = `Mar ${++valor}`;
        dia14.innerText = `Mie ${++valor}`;
        dia15.innerText = `Jue ${++valor}`;
        dia16.innerText = "---";
    };
    if(mes === 10 && valor == 1){
        dia1.innerText = `Vie ${valor}`;
        dia2.innerText = `Sab ${++valor}`;
        dia3.innerText = `Dom ${++valor}`;
        dia4.innerText = `Lun ${++valor}`;
        dia5.innerText = `Mar ${++valor}`;
        dia6.innerText = `Mie ${++valor}`;
        dia7.innerText = `Jue ${++valor}`;
        dia8.innerText = `Vie ${++valor}`;
        dia9.innerText = `Sab ${++valor}`;
        dia10.innerText = `Dom ${++valor}`;
        dia11.innerText = `Lun ${++valor}`;
        dia12.innerText = `Mar ${++valor}`;
        dia13.innerText = `Mie ${++valor}`;
        dia14.innerText = `Jue ${++valor}`;
        dia15.innerText = `Vie ${++valor}`;
        dia16.innerText = "---";
    }
    else if(mes === 10 && valor == 16){
        dia1.innerText = `Sab ${valor}`;
        dia2.innerText = `Dom ${++valor}`;
        dia3.innerText = `Lun ${++valor}`;
        dia4.innerText = `Mar ${++valor}`;
        dia5.innerText = `Mie ${++valor}`;
        dia6.innerText = `Jue ${++valor}`;
        dia7.innerText = `Vie ${++valor}`;
        dia8.innerText = `Sab ${++valor}`;
        dia9.innerText = `Dom ${++valor}`;
        dia10.innerText = `Lun ${++valor}`;
        dia11.innerText = `Mar ${++valor}`;
        dia12.innerText = `Mie ${++valor}`;
        dia13.innerText = `Jue ${++valor}`;
        dia14.innerText = `Vie ${++valor}`;
        dia15.innerText = `Sab ${++valor}`;
        dia16.innerText = `Dom ${++valor}`;
    };
    if(mes === 11 && valor == 1){
        dia1.innerText = `Lun ${valor}`;
        dia2.innerText = `Mar ${++valor}`;
        dia3.innerText = `Mie ${++valor}`;
        dia4.innerText = `Jue ${++valor}`;
        dia5.innerText = `Vie ${++valor}`;
        dia6.innerText = `Sab ${++valor}`;
        dia7.innerText = `Dom ${++valor}`;
        dia8.innerText = `Lun ${++valor}`;
        dia9.innerText = `Mar ${++valor}`;
        dia10.innerText = `Mie ${++valor}`;
        dia11.innerText = `Jue ${++valor}`;
        dia12.innerText = `Vie ${++valor}`;
        dia13.innerText = `Sab ${++valor}`;
        dia14.innerText = `Dom ${++valor}`;
        dia15.innerText = `Lun ${++valor}`;
        dia16.innerText = "---";
    }
    else if(mes === 11 && valor == 16){
        dia1.innerText = `Mar ${valor}`;
        dia2.innerText = `Mie ${++valor}`;
        dia3.innerText = `Jue ${++valor}`;
        dia4.innerText = `Vie ${++valor}`;
        dia5.innerText = `Sab ${++valor}`;
        dia6.innerText = `Dom ${++valor}`;
        dia7.innerText = `Lun ${++valor}`;
        dia8.innerText = `Mar ${++valor}`;
        dia9.innerText = `Mie ${++valor}`;
        dia10.innerText = `Jue ${++valor}`;
        dia11.innerText = `Vie ${++valor}`;
        dia12.innerText = `Sab ${++valor}`;
        dia13.innerText = `Dom ${++valor}`;
        dia14.innerText = `Lun ${++valor}`;
        dia15.innerText = `Mar ${++valor}`;
        dia16.innerText = "---";
    };
    if(mes === 12 && valor == 1){
        dia1.innerText = `Mie ${valor}`;
        dia2.innerText = `Jue ${++valor}`;
        dia3.innerText = `Vie ${++valor}`;
        dia4.innerText = `Sab ${++valor}`;
        dia5.innerText = `Dom ${++valor}`;
        dia6.innerText = `Lun ${++valor}`;
        dia7.innerText = `Mar ${++valor}`;
        dia8.innerText = `Mie ${++valor}`;
        dia9.innerText = `Jue ${++valor}`;
        dia10.innerText = `Vie ${++valor}`;
        dia11.innerText = `Sab ${++valor}`;
        dia12.innerText = `Dom ${++valor}`;
        dia13.innerText = `Lun ${++valor}`;
        dia14.innerText = `Mar ${++valor}`;
        dia15.innerText = `Mie ${++valor}`;
        dia16.innerText = "---";
    }
    else if(mes === 12 && valor == 16){
        dia1.innerText = `Jue ${valor}`;
        dia2.innerText = `Vie ${++valor}`;
        dia3.innerText = `Sab ${++valor}`;
        dia4.innerText = `Dom ${++valor}`;
        dia5.innerText = `Lun ${++valor}`;
        dia6.innerText = `Mar ${++valor}`;
        dia7.innerText = `Mie ${++valor}`;
        dia8.innerText = `Jue ${++valor}`;
        dia9.innerText = `Vie ${++valor}`;
        dia10.innerText = `Sab ${++valor}`;
        dia11.innerText = `Dom ${++valor}`;
        dia12.innerText = `Lun ${++valor}`;
        dia13.innerText = `Mar ${++valor}`;
        dia14.innerText = `Mie ${++valor}`;
        dia15.innerText = `Jue ${++valor}`;
        dia16.innerText = `Vie ${++valor}`;
    };
};

function cambiarValorDias(){
    if((diaElegido >= 1) && (diaElegido <= 15)){
        diaElegido = 1;
    }
    else if((diaElegido >= 16) && (diaElegido <= 31)){
        diaElegido = 16;
    }
};

function escribirDias(){

        if(añoElegido == 2022){
            insertarDiasAño1(diaElegido, mesElegido);
        }
        else if(añoElegido == 2023){
            insertarDiasAño2(diaElegido, mesElegido);
        }
        else if(añoElegido == 2024){
            insertarDiasAño3(diaElegido, mesElegido);
        }
        else if(añoElegido == 2025){
            insertarDiasAño4(diaElegido, mesElegido);
        }
        else if(añoElegido == 2026){
            insertarDiasAño5(diaElegido, mesElegido);
        }
        else if(añoElegido == 2027){
            insertarDiasAño6(diaElegido, mesElegido);
    };
};

function resultadoParcial(num1, num2, num3, num4){
    let dato1 = 0;
    let dato2 = 0;

    num1.addEventListener("change", function(){
        num1 = this.value;
        arr = num1.split(":");
        arr[0] = parseInt(arr[0]);
        arr[1] = parseInt(arr[1]);

        if(arr[1] != 0){
            arr[1] = 0.5; 
        };

        let resultado = arr[0] + arr[1];
        dato1 = resultado;
        refrescar();
    });

    num2.addEventListener("change", function(){
        num2 = this.value;
        arr = num2.split(":");
        arr[0] = parseInt(arr[0]);
        arr[1] = parseInt(arr[1]);

        if(arr[1] != 0){
            arr[1] = 0.5; 
        };

        let resultado = arr[0] + arr[1];
        dato2 = resultado;
        refrescar();
    });

    function refrescar(){
        let resultado = (dato2 - dato1) - 1;

        if(num4.innerText.includes("Dom")){
            let domingo = resultado;
            domingo = domingo * 2;
            resultado = domingo;
        }
        else if(num4.innerText.includes("Sab")){
            let sabado = resultado;
            sabado = sabado * 1.75;
            sabado = parseFloat(sabado);
            resultado = sabado;
        }
        else if(num4.innerText.includes("Vie")){
            let viernes = resultado;
            viernes = viernes - 8;
            viernes = viernes * 1.5;
            viernes = viernes + 8;
            resultado = viernes;
        }

        else if(resultado > 9){
            let numero = resultado;
            numero = resultado - 9;
            numero = numero * 1.5;
            numero = numero + 9;
            resultado = numero;
        };

        if(resultado <= 0){
            num3.innerText = "---";
        }

        else{num3.innerText = resultado};


        if(num3.innerText <= 1){
            num3.innerText = "---";
        };
        
    };
};

function cambiarFeriado(valor1, valor2, valor3){
    valor1.addEventListener("click", function(){

        let resultadoFijo = valor2.innerText;
        let resultadoVariable = resultadoFijo;
        if(resultadoVariable == "---"){
            resultadoVariable = 0;
        };
        resultadoVariable = parseFloat(resultadoVariable);

        
        if((valor1.checked == true) && (valor3.innerText.includes("Dom"))){
            valor2.innerText = resultadoVariable + 8;
        }
        else if((valor1.checked == false) && (valor3.innerText.includes("Dom"))){
            valor2.innerText = resultadoVariable - 8;
        }

        else if((valor1.checked == true) && (valor3.innerText.includes("Sab"))){
            let x = parseFloat((resultadoVariable / 1.75) * 2);
            if(x == 0){
                x = 8;
            }
            x = parseInt(x);
            valor2.innerText = x;
        }

        else if((valor1.checked == false) && (valor3.innerText.includes("Sab"))){
            let x = parseFloat((resultadoVariable / 2) * 1.75);
            x = x.toFixed(1);
            valor2.innerText = x; 
        }

        else if((valor1.checked == true) && (valor2.innerText != "---")){
            let f = parseFloat(resultadoVariable * 2);
            valor2.innerText = f;
        }
        else if((valor1.checked == false) && (valor2.innerText != "---")){
            let f = parseFloat(resultadoVariable / 2);
            valor2.innerText = f;
        };

        if((valor1.checked == true) && (valor2.innerText == "---")){
            valor2.innerText = 8;
        }
    });
    
    
};

function cambiarCorrido(valor1, valor2, valor3){
    
    valor1.addEventListener("change", function(){
        let resultadoFijo = valor2.innerText;
        let resultadoVariable = resultadoFijo;
        resultadoVariable = parseFloat(resultadoVariable);

        if(((valor1.checked == true) && (valor2.innerText != "---")) && ((valor3.innerText.includes("Dom")) || (valor3.innerText.includes("Sab")))){
            valor2.innerText = resultadoVariable + 2;
        }
        else if(((valor1.checked == false) && (valor2.innerText != "---")) && ((valor3.innerText.includes("Dom")) || (valor3.innerText.includes("Sab")))){
            valor2.innerText = resultadoVariable - 2;
        }

        else if((valor1.checked == true) && (valor2.innerText != "---")){
            valor2.innerText = resultadoVariable + 1;
        }

        else if((valor1.checked == false) && (valor2.innerText != "---")){
            valor2.innerText = resultadoVariable - 1;
        }
        
    })


};

function calcularTotalHoras(){
    calcular_horas.addEventListener("click", function(){
        
        let num01 = resultado01.innerText;
        let num02 = resultado02.innerText;
        let num03 = resultado03.innerText;
        let num04 = resultado04.innerText;
        let num05 = resultado05.innerText;
        let num06 = resultado06.innerText;
        let num07 = resultado07.innerText;
        let num08 = resultado08.innerText;
        let num09 = resultado09.innerText;
        let num10 = resultado10.innerText;
        let num11 = resultado11.innerText;
        let num12 = resultado12.innerText;
        let num13 = resultado13.innerText;
        let num14 = resultado14.innerText;
        let num15 = resultado15.innerText;
        let num16 = resultado16.innerText;

        if(num01 == "---"){
            num01 = 0;
        };
        if(num02 == "---"){
            num02 = 0;
        };
        if(num03 == "---"){
            num03 = 0;
        };
        if(num04 == "---"){
            num04 = 0;
        };
        if(num05 == "---"){
            num05 = 0;
        };
        if(num06 == "---"){
            num06 = 0;
        };
        if(num07 == "---"){
            num07 = 0;
        };
        if(num08 == "---"){
            num08 = 0;
        };
        if(num09 == "---"){
            num09 = 0;
        };
        if(num10 == "---"){
            num10 = 0;
        };
        if(num11 == "---"){
            num11 = 0;
        };
        if(num12 == "---"){
            num12 = 0;
        };
        if(num13 == "---"){
            num13 = 0;
        };
        if(num14 == "---"){
            num14 = 0;
        };
        if(num15 == "---"){
            num15 = 0;
        };
        if(num16 == "---"){
            num16 = 0;
        };

        num01 = parseFloat(num01);
        num02 = parseFloat(num02);
        num03 = parseFloat(num03);
        num04 = parseFloat(num04);
        num05 = parseFloat(num05);
        num06 = parseFloat(num06);
        num07 = parseFloat(num07);
        num08 = parseFloat(num08);
        num09 = parseFloat(num09);
        num10 = parseFloat(num10);
        num11 = parseFloat(num11);
        num12 = parseFloat(num12);
        num13 = parseFloat(num13);
        num14 = parseFloat(num14);
        num15 = parseFloat(num15);
        num16 = parseFloat(num16);

        let resultado = num01 + num02 + num03 + num04 + num05 + num06 + num07 + num08 + num09 + num10 + num11 + num12 + num13 + num14 + num15 + num16;
    
        totalHoras.innerText = resultado;
    
    });
};

function calcularValorTotal(){
    ingresar_valor_boton.addEventListener("click", function(){

        let cantidadDeHoras = totalHoras.innerText;
        if(cantidadDeHoras == "---"){
            cantidadDeHoras = 0;
        }

        cantidadDeHoras = parseFloat(cantidadDeHoras);


        let valorDeHora = ingresar_valor_numero.value;
        valorDeHora = parseInt(valorDeHora);

        let resultado = cantidadDeHoras * valorDeHora;

        resultado_final_dinero.innerText = `$ ${resultado}`;



    });
};




//Funcion Principal

function programaTodo(){
    elegir_quincena.addEventListener("change", function(){
        quincena_elegida = elegir_quincena.value;
        let fechaSplit = quincena_elegida.split("-");
        [añoElegido, mesElegido, diaElegido] = fechaSplit;

        insertarQuincenaEscrita();

        cambiarValorDias();

        escribirDias();

        resultadoParcial(fila1dato1, fila1dato2, resultado01, dia1, feriado1, corrido1);
        resultadoParcial(fila2dato1, fila2dato2, resultado02, dia2, feriado2, corrido2);
        resultadoParcial(fila3dato1, fila3dato2, resultado03, dia3, feriado3, corrido3);
        resultadoParcial(fila4dato1, fila4dato2, resultado04, dia4, feriado4, corrido4);
        resultadoParcial(fila5dato1, fila5dato2, resultado05, dia5, feriado5, corrido5);
        resultadoParcial(fila6dato1, fila6dato2, resultado06, dia6, feriado6, corrido6);
        resultadoParcial(fila7dato1, fila7dato2, resultado07, dia7, feriado7, corrido7);
        resultadoParcial(fila8dato1, fila8dato2, resultado08, dia8, feriado8, corrido8);
        resultadoParcial(fila9dato1, fila9dato2, resultado09, dia9, feriado9, corrido9);
        resultadoParcial(fila10dato1, fila10dato2, resultado10, dia10, feriado10, corrido10);
        resultadoParcial(fila11dato1, fila11dato2, resultado11, dia11, feriado11, corrido11);
        resultadoParcial(fila12dato1, fila12dato2, resultado12, dia12, feriado12, corrido12);
        resultadoParcial(fila13dato1, fila13dato2, resultado13, dia13, feriado13, corrido13);
        resultadoParcial(fila14dato1, fila14dato2, resultado14, dia14, feriado14, corrido14);
        resultadoParcial(fila15dato1, fila15dato2, resultado15, dia15, feriado15, corrido15);
        resultadoParcial(fila16dato1, fila16dato2, resultado16, dia16, feriado16, corrido16);

        cambiarFeriado(feriado1, resultado01, dia1);
        cambiarFeriado(feriado2, resultado02, dia2);
        cambiarFeriado(feriado3, resultado03, dia3);
        cambiarFeriado(feriado4, resultado04, dia4);
        cambiarFeriado(feriado5, resultado05, dia5);
        cambiarFeriado(feriado6, resultado06, dia6);
        cambiarFeriado(feriado7, resultado07, dia7);
        cambiarFeriado(feriado8, resultado08, dia8);
        cambiarFeriado(feriado9, resultado09, dia9);
        cambiarFeriado(feriado10, resultado10, dia10);
        cambiarFeriado(feriado11, resultado11, dia11);
        cambiarFeriado(feriado12, resultado12, dia12);
        cambiarFeriado(feriado13, resultado13, dia13);
        cambiarFeriado(feriado14, resultado14, dia14);
        cambiarFeriado(feriado15, resultado15, dia15);
        cambiarFeriado(feriado16, resultado16, dia16);

        cambiarCorrido(corrido1, resultado01, dia1);
        cambiarCorrido(corrido2, resultado02, dia2);
        cambiarCorrido(corrido3, resultado03, dia3);
        cambiarCorrido(corrido4, resultado04, dia4);
        cambiarCorrido(corrido5, resultado05, dia5);
        cambiarCorrido(corrido6, resultado06, dia6);
        cambiarCorrido(corrido7, resultado07, dia7);
        cambiarCorrido(corrido8, resultado08, dia8);
        cambiarCorrido(corrido9, resultado09, dia9);
        cambiarCorrido(corrido10, resultado10, dia10);
        cambiarCorrido(corrido11, resultado11, dia11);
        cambiarCorrido(corrido12, resultado12, dia12);
        cambiarCorrido(corrido13, resultado13, dia13);
        cambiarCorrido(corrido14, resultado14, dia14);
        cambiarCorrido(corrido15, resultado15, dia15);
        cambiarCorrido(corrido16, resultado16, dia16);

        calcularTotalHoras();

        calcularValorTotal();



    });
};


//Carga


window.addEventListener("load", programaTodo());
