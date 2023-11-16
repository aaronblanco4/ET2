class validacionesatomicas {

    constructor() {

    }

    static solo_alfabeticos_ñ_espacios(id) {
        var expresionRegular = /^[A-Za-záéíóúñÁÉÍÓÚ\s]+$/;
        var campo = document.getElementById(id).value;
        return expresionRegular.test(campo);

    }

    static solo_alfabeticos_ñ_espacios_search(id) {
        var expresionRegular = /^[\s\S]*$/;
        var campo = document.getElementById(id).value;
        return expresionRegular.test(campo);

    }

    static solo_alfabeticos_ñ_espacios_signosdepuntuacion(id) {
        const expresionRegular = /^[A-Za-zÁÉÍÓÚÜáéíóúüñÑ.,!?¡¿"'\s]+$/;
        var campo = document.getElementById(id).value;
        return expresionRegular.test(campo);
    }

    static solo_alfabeticos_ñ_espacios_signosdepuntuacion_search(id) {
        const expresionRegular = /^[A-Za-zÁÉÍÓÚÜáéíóúüñÑ.,!?¡¿"'\s]+$/;
        var campo = document.getElementById(id).value;
        if (campo.length == 0) return true;
        return expresionRegular.test(campo);
    }

    static cualquier_asci(id) {
        const expresionRegular = /^[\x00-\x7F]+$/;
        var campo = document.getElementById(id).value;
        return expresionRegular.test(campo);
    }

    static cualquier_asci_search(id) {
        const expresionRegular = /^[\x00-\x7F\S]+$/;
        var campo = document.getElementById(id).value;
        if (campo.length == 0) return true;
        return expresionRegular.test(campo);
    }

    static solo_alfabeticos_sin_acentos(id) {
        var campo = document.getElementById(id).value;
        var expresionRegular = /^[A-Za-z]+$/

        return expresionRegular.test(campo);
    }

    static solo_alfabeticos_sin_acentos_search(id) {
        var campo = document.getElementById(id).value;
        var expresionRegular = /^[a-zA-Z]+$/
        if (campo.length == 0) return true;
        return expresionRegular.test(campo);
    }

    static solo_pdf_doc_docx(id) {
        var input = document.getElementById(id);
        var archivo = input.files[0]; // Obtener el archivo seleccionado

        if (archivo) {
            var nombreArchivo = archivo.name;
            var extension = nombreArchivo.substr(nombreArchivo.lastIndexOf('.') + 1).toLowerCase();

            if (extension === "pdf" || extension === "doc" || extension === "docx") {
                return true; // Extensión válida
            }


            return false; // Extensión no válida o no se ha seleccionado un archivo
        }
    }

    static menor_año_actual(id) {
        var anoActual = new Date().getFullYear();
        var campo = document.getElementById(id).value;
        return campo < anoActual;
    }

    static menor_año_actual_search(id) {
        var anoActual = new Date().getFullYear();
        var campo = document.getElementById(id).value;
        if (campo.length == 0) return true;
        return campo < anoActual;
    }

    static presente_o_futura(id) {
        var anoActual = new Date().getFullYear();
        var mesActual = new Date().getMonth() + 1;
        var diaActual = new Date().getDate();
        var fechaI = document.getElementById(id).value;
        var fecha = new Date(fechaI);
        var ano = fecha.getFullYear();
        var mes = fecha.getMonth() + 1;
        var dia = fecha.getDate();
        if (ano > anoActual) return true;
        if (ano == anoActual) {
            if (mes > mesActual) return true;
            if (mes == mesActual) {
                if (dia >= diaActual) return true;
            }
        }
        return false;
    }

    static presente_o_futura_search(id) {
        var anoActual = new Date().getFullYear();
        var mesActual = new Date().getMonth() + 1;
        var diaActual = new Date().getDate();
        var fechaI = document.getElementById(id).value;
        if (fechaI.length == 0) return true;
        var fecha = new Date(fechaI);
        var ano = fecha.getFullYear();
        var mes = fecha.getMonth() + 1;
        var dia = fecha.getDate();
        if (ano > anoActual) return true;
        if (ano == anoActual) {
            if (mes > mesActual) return true;
            if (mes == mesActual) {
                if (dia >= diaActual) return true;
            }
        }
        return false;
    }

    static casi_todo(id) {
        var regExp = /^[a-zA-ZáéíóúüÁÉÍÓÚÜñÑ.,;:-\s\r]+$/;
        var campo = document.getElementById(id).value;
        return regExp.test(campo);


    }

    static casi_todo_search(id) {
        var regExp = /^[a-zA-ZáéíóúüÁÉÍÓÚÜñÑ.,;:-\s\r]+$/;
        var campo = document.getElementById(id).value;
        if (campo.length == 0) return true;
        return regExp.test(campo);


    }

    static enlace_programa_validacion(id) {
        var regExp = /^[a-zA-Z./:]+$/;
        var campo = document.getElementById(id).value;
        return regExp.test(campo);
    }

    static enlace_programa_validacion_search(id) {
        var regExp = /^[a-zA-Z./:]+$/;
        var campo = document.getElementById(id).value;
        if (campo.length == 0) return true;
        return regExp.test(campo);
    }



    static solo_digitos(id) {
        var regExp = /^\d+$/;
        var campo = document.getElementById(id).value;
        return regExp.test(campo);


    }

    static solo_digitos_search(id) {
        var regExp = /^\d+$/;
        var campo = document.getElementById(id).value;
        if (campo.length == 0) return true;
        return regExp.test(campo);


    }


    static size_minimo(id, valorminimo) {
        if (document.getElementById(id).value.length < valorminimo) {
            return false;
        }
        else {
            return true;
        }
    }

    static size_minimo_fichero(id, valorminimo) {
        var fichero = document.getElementById(id);
        var archivo = fichero.files[0].name;
        var punto = archivo.split(".");
        var comp = punto[0].length;
        if (comp < valorminimo) {
            return false;
        }
        else {
            return true;
        }
    }

    static size_maximo(id, valormaximo) {
        if (document.getElementById(id).value.length > valormaximo) {
            return false;
        }
        else {
            return true;
        }
    }

    static size_maximo_fichero(id, valormaximo) {
        var fichero = document.getElementById(id);
        var archivo = fichero.files[0].name;
        var punto = archivo.split(".");
        var comp = punto[0].length;
        if (comp > valormaximo) {
            return false;
        }
        else {
            return true;
        }
    }

    static verificar_fichero_alfabeticos_sin_acentos(id) {
        var fichero = document.getElementById(id);
        var archivo = fichero.files[0].name;
        var punto = archivo.split(".");
        var comp = punto[0];
        var patron = /^[a-zA-Z]+$/;


        return patron.test(comp);
    }

    static validarSelect(id) {
        var campo = document.getElementById(id);
        if (campo.value === "") {
            return false;
        } else {
            return true;
        }
    }

    static verificarFormatoArchivo(id) {
        // Obtén el elemento de entrada de archivo
        var fichero = document.getElementById(id);

        // Obtén el archivo seleccionado
        var archivo = fichero.files[0];
        // Obtén la extensión del archivo
        var extension = archivo.name.split('.').pop().toLowerCase();

        // Verifica si la extensión es jpg o jpeg
        if (extension === 'jpg' || extension === 'jpeg') {
            return true;
        } else {
            return false;
        }
    }

    static verificarFormatoArchivo2(id) {
        // Obtén el elemento de entrada de archivo
        var fichero = document.getElementById(id);

        // Obtén el archivo seleccionado
        var archivo = fichero.files[0];
        // Obtén la extensión del archivo
        var extension = archivo.name.split('.').pop().toLowerCase();

        // Verifica si la extensión es jpg o jpeg
        if (extension === 'pdf' || extension === 'doc' || extension === 'docx') {
            return true;
        } else {
            return false;
        }
    }

    static comprobarTamañoArchivo(id, tamaño) {
        var input = document.getElementById(id);

        // Verificar si se seleccionó un archivo

        var archivo = input.files[0];

        // Verificar el tamaño del archivo (en bytes)
        if (archivo.size > tamaño) {
            return false
        } else {
            return true;
        }
    }
    static comprobarVacio(id) {
        var inputArchivo = document.getElementById(id);
        if (inputArchivo.files.length === 0) {
            return false;
        }else{
            return true;
        }
    }


}