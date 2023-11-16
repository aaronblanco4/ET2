class Gestion_publicacion extends GestionEntidad {

    // se puede hacer uno general en GestionEntidad que recorra todos los atributos haciendo estas cosas
    static resetearformpublicacion() {

        this.recargarform();

    }

    //-----------------------------------------------------------------------------
    // formularios

    static async createForm_ADD() {

        // resetear el formulario
        this.recargarform();

        // rellenar titulo formulario
        document.querySelector(".class_contenido_titulo_form").className = "class_contenido_titulo_form titulo_form_ADD_publicacion";

        // se rellena el action del formulario
        document.getElementById('IU_form').action = 'javascript:Gestion_publicacion.ADD();';
        document.getElementById('IU_form').setAttribute('onsubmit', 'return Gestion_publicacion.comprobar_submit();');

        // se coloca el onblur del dni y se pone a vacio el valor (o podriamos hacerlo en el resetearformusuario())
        document.getElementById('id_publicacion').setAttribute('onblur', 'Gestion_publicacion.comprobar_id_publicacion()');
        document.getElementById('id_publicacion').value = '';

        document.getElementById('titulo_publicacion').setAttribute('onblur', 'Gestion_publicacion.comprobar_titulo_publicacion()');
        document.getElementById('titulo_publicacion').value = '';

        document.getElementById('autor_publicacion').setAttribute('onblur', 'Gestion_publicacion.comprobar_autor_publicacion()');
        document.getElementById('autor_publicacion').value = '';

        document.getElementById('fecha_publicacion').setAttribute('onblur', 'Gestion_publicacion.comprobar_fecha_publicacion()');
        document.getElementById('fecha_publicacion').value = '';

        document.getElementById('area_publicacion').setAttribute('onblur', 'Gestion_publicacion.comprobar_area_publicacion()');
        document.getElementById('area_publicacion').value = '';

        document.getElementById('texto_publicacion').setAttribute('onblur', 'Gestion_publicacion.comprobar_texto_publicacion()');
        document.getElementById('texto_publicacion').value = '';

        document.getElementById('nuevo_imagen_publicacion').setAttribute('onchange', 'Gestion_publicacion.comprobar_nuevo_imagen_publicacion()');
        document.getElementById("label_imagen_publicacion").style.display = 'none';
        document.getElementById("imagen_publicacion").style.display = 'none';
        document.getElementById("link_imagen_publicacion").style.display = 'none';



        let botonadd = document.createElement('button');
        botonadd.type = 'submit';
        let imgadd = document.createElement('img');
        imgadd.src = './iconos/ADD.png';
        botonadd.append(imgadd);
        document.getElementById('IU_form').append(botonadd);

        // para actualizar idioma despues de incluir la imagen
        setLang();

        // para actualizar idioma despues de incluir la imagen
        //setLang();

        // se muestra el formulario
        document.getElementById('div_IU_form').style.display = 'block';

    }

    static createForm_EDIT(datostupla) {
        // resetear el formulario
        this.recargarform();

        // rellenar titulo formulario
        document.querySelector(".class_contenido_titulo_form").className = "class_contenido_titulo_form titulo_form_EDIT_publicacion";

        // se rellena el action del formulario
        document.getElementById('IU_form').action = 'javascript:Gestion_publicacion.EDIT();';
        document.getElementById('IU_form').setAttribute('onsubmit', 'return Gestion_publicacion.comprobar_submit();');

        // se coloca el onblur del dni y se pone a vacio el valor (o podriamos hacerlo en el resetearformusuario())
        document.getElementById('id_publicacion').setAttribute('onblur', 'Gestion_publicacion.comprobar_id_publicacion()');
        document.getElementById('id_publicacion').value = datostupla.id_publicacion;
        document.getElementById('id_publicacion').setAttribute("readonly", "");

        document.getElementById('titulo_publicacion').setAttribute('onblur', 'Gestion_publicacion.comprobar_titulo_publicacion()');
        document.getElementById('titulo_publicacion').value = datostupla.titulo_publicacion;

        document.getElementById('autor_publicacion').setAttribute('onblur', 'Gestion_publicacion.comprobar_autor_publicacion()');
        document.getElementById('autor_publicacion').value = datostupla.autor_publicacion;

        document.getElementById('fecha_publicacion').setAttribute('onblur', 'Gestion_publicacion.comprobar_fecha_publicacion()');
        document.getElementById('fecha_publicacion').value = datostupla.fecha_publicacion;

        document.getElementById('area_publicacion').setAttribute('onblur', 'Gestion_publicacion.comprobar_area_publicacion()');
        document.getElementById('area_publicacion').value = datostupla.area_publicacion;

        document.getElementById('texto_publicacion').setAttribute('onblur', 'Gestion_publicacion.comprobar_texto_publicacion()');
        document.getElementById('texto_publicacion').value = datostupla.texto_publicacion;

        document.getElementById('imagen_publicacion').value = datostupla.imagen_publicacion;
        document.getElementById('link_imagen_publicacion').setAttribute('href', 'http://193.147.87.202/ET2/filesuploaded/files_imagen_publicacion/' + datostupla.imagen_publicacion);
        document.getElementById('imagen_publicacion').setAttribute("readonly", true);


        document.getElementById('nuevo_imagen_publicacion').setAttribute('onchange', 'Gestion_publicacion.comprobar_nuevo_imagen_publicacion_()');


        let botonedit = document.createElement('button');
        botonedit.type = 'submit';
        let imgedit = document.createElement('img');
        imgedit.src = './iconos/EDIT.png';
        botonedit.append(imgedit);
        document.getElementById('IU_form').append(botonedit);

        // para actualizar idioma despues de incluir la imagen
        setLang();

        // para actualizar idioma despues de incluir la imagen
        //setLang();

        // se muestra el formulario
        document.getElementById('div_IU_form').style.display = 'block';
    }

    static createForm_DELETE(datostupla) {
        // resetear el formulario
        this.recargarform();

        // rellenar titulo formulario
        document.querySelector(".class_contenido_titulo_form").className = "class_contenido_titulo_form titulo_form_DELETE_publicacion";

        // se rellena el action del formulario
        document.getElementById('IU_form').action = 'javascript:Gestion_publicacion.DELETE();';

        document.getElementById('id_publicacion').value = datostupla.id_publicacion;

        document.getElementById('titulo_publicacion').value = datostupla.titulo_publicacion;

        document.getElementById('autor_publicacion').value = datostupla.autor_publicacion;

        document.getElementById('fecha_publicacion').value = datostupla.fecha_publicacion;

        document.getElementById('area_publicacion').value = datostupla.area_publicacion;

        document.getElementById('texto_publicacion').value = datostupla.texto_publicacion;

        document.getElementById('imagen_publicacion').value = datostupla.imagen_publicacion;
        document.getElementById('imagen_publicacion').setAttribute("readonly", true);
        document.getElementById("link_imagen_publicacion").href += datostupla.imagen_publicacion;

        document.getElementById("label_nuevo_imagen_publicacion").style.display = 'none';
        document.getElementById("nuevo_imagen_publicacion").style.display = 'none';


        let botondelete = document.createElement('button');
        botondelete.id = 'botondelete';
        botondelete.type = 'submit';
        let imgdelete = document.createElement('img');
        imgdelete.src = './iconos/DELETE.png';
        botondelete.append(imgdelete);
        document.getElementById('IU_form').append(botondelete);

        // para actualizar idioma 
        setLang();

        GestionEntidad.ponercamposreadonly();

        // se muestra el formulario
        document.getElementById('div_IU_form').style.display = 'block';
    }

    static createForm_SHOWCURRENT(datostupla) {


        this.createForm_DELETE(datostupla);

        document.querySelector(".class_contenido_titulo_form").className = "class_contenido_titulo_form titulo_form_SHOWCURRENT_publicacion";

        document.getElementById('botondelete').remove();

        // se rellena el action del formulario
        let imgshowcurrent = document.createElement('img');
        imgshowcurrent.src = './iconos/SHOWCURRENT.png';
        imgshowcurrent.setAttribute("onclick", "DOM_class.cerrar_div_formulario();")
        document.getElementById('IU_form').append(imgshowcurrent);

        // para actualizar el idioma
        setLang();
    }

    static createForm_SEARCH() {
        this.recargarform();

        // rellenar titulo formulario
        document.querySelector(".class_contenido_titulo_form").className = "class_contenido_titulo_form titulo_form_SEARCH_publicacion";
        // se rellena el action del formulario
        document.getElementById('IU_form').action = 'javascript:Gestion_publicacion.SEARCH();';
        document.getElementById('IU_form').setAttribute('onsubmit', 'return Gestion_publicacion.comprobar_submit_SEARCH();');

        // se coloca el onblur del dni y se pone a vacio el valor (o podriamos hacerlo en el resetearformusuario())

        document.getElementById('id_publicacion').setAttribute('onblur', 'Gestion_publicacion.comprobar_id_publicacion_SEARCH()');

        document.getElementById('titulo_publicacion').setAttribute('onblur', 'Gestion_publicacion.comprobar_titulo_publicacion_SEARCH()');

        document.getElementById('autor_publicacion').setAttribute('onblur', 'Gestion_publicacion.comprobar_autor_publicacion_SEARCH()');

        document.getElementById('fecha_publicacion').setAttribute('onblur', 'Gestion_publicacion.comprobar_fecha_publicacion_SEARCH()');

        document.getElementById('area_publicacion').setAttribute('onblur', 'Gestion_publicacion.comprobar_area_publicacion_SEARCH()');

        document.getElementById('texto_publicacion').setAttribute('onblur', 'Gestion_publicacion.comprobar_texto_publicacion_SEARCH()');

        document.getElementById('imagen_publicacion').setAttribute('onblur', 'Gestion_publicacion.comprobar_nuevo_imagen_publicacion_SEARCH()');

        document.getElementById("label_nuevo_imagen_publicacion").style.display = 'none';
        document.getElementById("nuevo_imagen_publicacion").style.display = 'none';
        document.getElementById('link_imagen_publicacion').style.display = 'none';

        let botonsearch = document.createElement('button');
        botonsearch.type = 'submit';
        let imgsearch = document.createElement('img');
        imgsearch.src = './iconos/SEARCH.png';
        botonsearch.append(imgsearch);
        document.getElementById('IU_form').append(botonsearch);

        // para actualizar idioma
        setLang();
        // se muestra el formulario
        document.getElementById('div_IU_form').style.display = 'block';

    }

    //-----------------------------------------------------------------------------
    // submits

    static comprobar_submit() {

        let valor = this.comprobar_id_publicacion();
        let valor1 = this.comprobar_titulo_publicacion();
        let valor2 = this.comprobar_autor_publicacion();
        let valor3 = this.comprobar_fecha_publicacion();
        let valor4 = this.comprobar_area_publicacion();
        let valor5 = this.comprobar_texto_publicacion();
        let valor6 = this.comprobar_nuevo_imagen_publicacion();

        let resultado = (
            valor &&
            valor1 &&
            valor2 &&
            valor3 &&
            valor4 &&
            valor5 &&
            valor6
        );

        return resultado;

    }


    static comprobar_submit_SEARCH() {

        let valor = this.comprobar_id_publicacion_SEARCH();
        let valor1 = this.comprobar_titulo_publicacion_SEARCH();
        let valor2 = this.comprobar_autor_publicacion_SEARCH();
        let valor3 = this.comprobar_fecha_publicacion_SEARCH();
        let valor4 = this.comprobar_area_publicacion_SEARCH();
        let valor5 = this.comprobar_texto_publicacion_SEARCH();
        let valor6 = this.comprobar_nuevo_imagen_publicacion_SEARCH();

        let resultado = (
            valor &&
            valor1 &&
            valor2 &&
            valor3 &&
            valor4 &&
            valor5 &&
            valor6
        );

        return resultado;
    }

    //-----------------------------------------------------------------------------
    // acciones a back

    static async ADD() {
        await this.peticionBackGeneral('IU_form', 'publicacion', 'ADD')
            .then((respuesta) => {
                if (respuesta['ok']) {
                    this.recargarform();
                    this.SEARCH();
                }
                else {
                    DOM_class.mostrardivmensajes(respuesta['code']);
                }
            });
    }

    static async EDIT() {
        await this.peticionBackGeneral('IU_form', 'publicacion', 'EDIT')
            .then((respuesta) => {
                if (respuesta['ok']) {
                    this.resetearformpublicacion();
                    this.SEARCH();
                }
                else {
                    DOM_class.mostrardivmensajes(respuesta['code']);
                }
            });
    }

    static async DELETE() {
        await this.peticionBackGeneral('IU_form', 'publicacion', 'DELETE')
            .then((respuesta) => {
                if (respuesta['ok']) {
                    this.resetearformpublicacion();
                    this.SEARCH();
                }
                else {
                    DOM_class.mostrardivmensajes(respuesta['code']);
                }
            });
    }

    static async SEARCH() {
        await this.peticionBackGeneral('IU_form', 'publicacion', 'SEARCH')
            .then((respuesta) => {
                this.recargarform();
                let publicacion = new Gestion_publicacion('publicacion', respuesta['resource'], Array('id_publicacion', 'titulo_publicacion', 'autor_publicacion')); publicacion.mostrartabla();
                if (respuesta['code'] == 'RECORDSET_VACIO') {
                    document.getElementById('muestradatostabla').innerHTML = 'no hay datos coincidentes con la busqueda';
                }
            });
    }

    //-----------------------------------------------------------------------------
    //validaciones campos




    // COMPROBACIONES PARA ID_PUBLICACION
    static comprobar_id_publicacion() {

        if (validacionesatomicas.size_minimo('id_publicacion', 1)) {
        }
        else {
            //modificacion parametros texto error
            DOM_class.mostrardivmensajeserrordebajo('id_publicacion', 'KO_id_publicacion_tam_min');
            //salir ejecucion con false
            return false;
        }

        if (validacionesatomicas.size_maximo('id_publicacion', 6)) {
        }
        else {
            //modificacion parametros texto error
            DOM_class.mostrardivmensajeserrordebajo('id_publicacion', 'KO_id_publicacion_tam_max');
            //salir ejecucion con false
            return false;
        }

        if (validacionesatomicas.solo_digitos('id_publicacion')) {
        } else {
            DOM_class.mostrardivmensajeserrordebajo('id_publicacion', 'KO_id_publicacion_solo_digitos');
            return false;
        }

        DOM_class.mostrarexitovalor('id_publicacion');
        return true;

    }

    static comprobar_id_publicacion_SEARCH() {

        if (validacionesatomicas.size_maximo('id_publicacion', 6)) {
        }
        else {
            //modificacion parametros texto error
            DOM_class.mostrardivmensajeserrordebajo('id_publicacion', 'KO_id_publicacion_tam_max');
            //salir ejecucion con false
            return false;
        }

        if (validacionesatomicas.solo_digitos_search('id_publicacion')) {
        } else {
            DOM_class.mostrardivmensajeserrordebajo('id_publicacion', 'KO_id_publicacion_solo_digitos');
            return false;
        }


        DOM_class.mostrarexitovalor('id_publicacion');
        return true;

    }

    //COMPROBACIONES PARA TITULO_PUBLICACION

    static comprobar_titulo_publicacion() {

        if (validacionesatomicas.size_minimo('titulo_publicacion', 6)) {
        }
        else {
            //modificacion parametros texto error
            DOM_class.mostrardivmensajeserrordebajo('titulo_publicacion', 'KO_titulo_publicacion_tam_min');
            //salir ejecucion con false
            return false;
        }

        if (validacionesatomicas.size_maximo('titulo_publicacion', 80)) {
        }
        else {
            //modificacion parametros texto error
            DOM_class.mostrardivmensajeserrordebajo('titulo_publicacion', 'KO_titulo_publicacion_tam_max');
            //salir ejecucion con false
            return false;
        }

        if (validacionesatomicas.solo_alfabeticos_ñ_espacios('titulo_publicacion')) {
        } else {
            DOM_class.mostrardivmensajeserrordebajo('titulo_publicacion', 'KO_titulo_publicacion_formato');
            return false;
        }

        DOM_class.mostrarexitovalor('titulo_publicacion');
        return true;

    }

    static comprobar_titulo_publicacion_SEARCH() {

        if (validacionesatomicas.size_maximo('titulo_publicacion', 80)) {
        }
        else {
            //modificacion parametros texto error
            DOM_class.mostrardivmensajeserrordebajo('titulo_publicacion', 'KO_titulo_publicacion_tam_max');
            //salir ejecucion con false
            return false;
        }

        if (validacionesatomicas.solo_alfabeticos_ñ_espacios_search('titulo_publicacion')) {
        } else {
            DOM_class.mostrardivmensajeserrordebajo('titulo_publicacion', 'KO_titulo_publicacion_formato');
            return false;
        }


        DOM_class.mostrarexitovalor('titulo_publicacion');
        return true;

    }

    //COMPROBACIONES PARA AUTOR_PUBLICACION

    static comprobar_autor_publicacion() {

        if (validacionesatomicas.size_minimo('autor_publicacion', 6)) {
        }
        else {
            //modificacion parametros texto error
            DOM_class.mostrardivmensajeserrordebajo('autor_publicacion', 'KO_autor_publicacion_tam_min');
            //salir ejecucion con false
            return false;
        }

        if (validacionesatomicas.size_maximo('autor_publicacion', 40)) {
        }
        else {
            //modificacion parametros texto error
            DOM_class.mostrardivmensajeserrordebajo('autor_publicacion', 'KO_autor_publicacion_tam_max');
            //salir ejecucion con false
            return false;
        }

        if (validacionesatomicas.solo_alfabeticos_ñ_espacios('autor_publicacion')) {
        } else {
            DOM_class.mostrardivmensajeserrordebajo('autor_publicacion', 'KO_autor_publicacion_formato');
            return false;
        }

        DOM_class.mostrarexitovalor('autor_publicacion');
        return true;

    }

    static comprobar_autor_publicacion_SEARCH() {

        if (validacionesatomicas.size_maximo('autor_publicacion', 40)) {
        }
        else {
            //modificacion parametros texto error
            DOM_class.mostrardivmensajeserrordebajo('autor_publicacion', 'KO_autor_publicacion_tam_max');
            //salir ejecucion con false
            return false;
        }

        if (validacionesatomicas.solo_alfabeticos_ñ_espacios_search('autor_publicacion')) {
        } else {
            DOM_class.mostrardivmensajeserrordebajo('autor_publicacion', 'KO_autor_publicacion_formato');
            return false;
        }


        DOM_class.mostrarexitovalor('autor_publicacion');
        return true;

    }

    //COMPROBACIONES PARA FECHA_PUBLICACION

    static comprobar_fecha_publicacion() {
        if (validacionesatomicas.presente_o_futura('fecha_publicacion')) {
        } else {
            DOM_class.mostrardivmensajeserrordebajo('fecha_publicacion', 'KO_fecha_publicacion_fechapasada');
            return false;
        }


        DOM_class.mostrarexitovalor('fecha_publicacion');
        return true;

    }

    static comprobar_fecha_publicacion_SEARCH() {
        if (validacionesatomicas.presente_o_futura_search('fecha_publicacion')) {
        } else {
            DOM_class.mostrardivmensajeserrordebajo('fecha_publicacion', 'KO_fecha_publicacion_fechapasada');
            return false;
        }

        DOM_class.mostrarexitovalor('fecha_publicacion');
        return true;

    }

    //COMPROBACIONES PARA AREA_PUBLICACION

    static comprobar_area_publicacion() {

        if (validacionesatomicas.size_minimo('area_publicacion', 1)) {
        }
        else {
            //modificacion parametros texto error
            DOM_class.mostrardivmensajeserrordebajo('area_publicacion', 'KO_area_publicacion_tam_min');
            //salir ejecucion con false
            return false;
        }

        if (validacionesatomicas.size_maximo('area_publicacion', 6)) {
        }
        else {
            //modificacion parametros texto error
            DOM_class.mostrardivmensajeserrordebajo('area_publicacion', 'KO_area_publicacion_tam_max');
            //salir ejecucion con false
            return false;
        }

        if (validacionesatomicas.solo_digitos('area_publicacion')) {
        } else {
            DOM_class.mostrardivmensajeserrordebajo('area_publicacion', 'KO_area_publicacion_formato');
            return false;
        }

        DOM_class.mostrarexitovalor('area_publicacion');
        return true;

    }

    static comprobar_area_publicacion_SEARCH() {

        if (validacionesatomicas.size_maximo('area_publicacion', 6)) {
        }
        else {
            //modificacion parametros texto error
            DOM_class.mostrardivmensajeserrordebajo('area_publicacion', 'KO_area_publicacion_tam_max');
            //salir ejecucion con false
            return false;
        }

        if (validacionesatomicas.solo_digitos_search('area_publicacion')) {
        } else {
            DOM_class.mostrardivmensajeserrordebajo('area_publicacion', 'KO_area_publicacion_formato');
            return false;
        }


        DOM_class.mostrarexitovalor('area_publicacion');
        return true;

    }

    //COMPROBACIONES PARA TEXTO_PUBLICACION

    static comprobar_texto_publicacion() {

        if (validacionesatomicas.size_minimo('texto_publicacion', 30)) {
        }
        else {
            //modificacion parametros texto error
            DOM_class.mostrardivmensajeserrordebajo('texto_publicacion', 'KO_texto_publicacion_tam_min');
            //salir ejecucion con false
            return false;
        }

        if (validacionesatomicas.size_maximo('texto_publicacion', 8000)) {
        }
        else {
            //modificacion parametros texto error
            DOM_class.mostrardivmensajeserrordebajo('texto_publicacion', 'KO_texto_publicacion_tam_max');
            //salir ejecucion con false
            return false;
        }

        if (validacionesatomicas.cualquier_asci('texto_publicacion')) {
        } else {
            DOM_class.mostrardivmensajeserrordebajo('texto_publicacion', 'KO_texto_publicacion_formato');
            return false;
        }

        DOM_class.mostrarexitovalor('texto_publicacion');
        return true;

    }

    static comprobar_texto_publicacion_SEARCH() {

        if (validacionesatomicas.size_maximo('texto_publicacion', 8000)) {
        }
        else {
            //modificacion parametros texto error
            DOM_class.mostrardivmensajeserrordebajo('texto_publicacion', 'KO_texto_publicacion_tam_max');
            //salir ejecucion con false
            return false;
        }

        if (validacionesatomicas.cualquier_asci_search('texto_publicacion')) {
        } else {
            DOM_class.mostrardivmensajeserrordebajo('texto_publicacion', 'KO_texto_publicacion_formato');
            return false;
        }


        DOM_class.mostrarexitovalor('texto_publicacion');
        return true;

    }


    //COMPROBACIONES IMAGEN_PUBLICACION
    static comprobar_nuevo_imagen_publicacion() {
        var etiqueta = document.querySelector(".class_contenido_titulo_form").className;
        var accion = etiqueta.split("_");
        if (accion[5] == 'EDIT') {
            if (validacionesatomicas.comprobarVacio("nuevo_imagen_publicacion")) {
            } else {
                DOM_class.mostrarexitovalor('nuevo_imagen_publicacion');
                return true;
            } 
        }else if (accion[5] == 'ADD') {
            if (validacionesatomicas.comprobarVacio("nuevo_imagen_publicacion")) {
            } else {
                DOM_class.mostrardivmensajeserrordebajo("nuevo_imagen_publicacion", "KO_nueva_imagen_publicacion_vacio");
                return false;
            }
        }else if (accion[5] == 'DELETE') {                        
                return true;                   
        }                   
        
            if (validacionesatomicas.size_minimo_fichero("nuevo_imagen_publicacion", 7)) {
            } else {
                DOM_class.mostrardivmensajeserrordebajo("nuevo_imagen_publicacion", "KO_nueva_imagen_publicacion_tam_min");
                return false;
            }


            if (validacionesatomicas.size_maximo_fichero("nuevo_imagen_publicacion", 50)) {
            } else {
                DOM_class.mostrardivmensajeserrordebajo("nuevo_imagen_publicacion", "KO_nueva_imagen_publicacion_tam_max");
                return false;
            }



            if (validacionesatomicas.verificar_fichero_alfabeticos_sin_acentos("nuevo_imagen_publicacion")) {
            } else {
                DOM_class.mostrardivmensajeserrordebajo("nuevo_imagen_publicacion", "KO_nueva_imagen_publicacion_formato");
                return false;
            }
            if (validacionesatomicas.comprobarTamañoArchivo("nuevo_imagen_publicacion", 20000)) {
            } else {
                DOM_class.mostrardivmensajeserrordebajo("nuevo_imagen_publicacion", "KO_nueva_imagen_publicacion_tamaño");
                return false;
            }


            if (validacionesatomicas.verificarFormatoArchivo("nuevo_imagen_publicacion")) {
            } else {
                DOM_class.mostrardivmensajeserrordebajo("nuevo_imagen_publicacion", "KO_nueva_imagen_publicacion_extension");
                return false;
            }

            DOM_class.mostrarexitovalor('nuevo_imagen_publicacion');
            return true;
        
    }


    static comprobar_nuevo_imagen_publicacion_SEARCH() {
        if (validacionesatomicas.size_maximo("imagen_publicacion", 50)) {
        } else {
            DOM_class.mostrardivmensajeserrordebajo("nuevo_imagen_publicacion", "KO_nueva_imagen_publicacion_tam_max");
            return false;
        }



        if (validacionesatomicas.solo_alfabeticos_sin_acentos_search("imagen_publicacion")) {
        } else {
            DOM_class.mostrardivmensajeserrordebajo("nuevo_imagen_publicacion", "KO_nueva_imagen_publicacion_formato");
            return false;
        }


        DOM_class.mostrarexitovalor('nuevo_imagen_publicacion');
        return true;
    }




    static recargarform() {

        document.getElementById("IU_form").innerHTML = '';

        document.getElementById("IU_form").innerHTML = `

        <label class="id_publicacion">ID</label> </label>
        <input type='text' id='id_publicacion' name='id_publicacion'></input>
        <div id="div_error_id_publicacion" class="errorcampo"><a id="error_id_publicacion"></a></div>
        <br>
        <script>document.querySelector('.id_publicacion').innerHTML=traduccion['id_publicacion'];</script>
        
        <label class="titulo_publicacion">titulo</label>
        </label>
        <input type='text' id='titulo_publicacion' name='titulo_publicacion'></input>
        <div id="div_error_titulo_publicacion" class="errorcampo"><a id="error_titulo_publicacion"></a></div>
        <br>
        <script>document.querySelector('.titulo_publicacion').innerHTML=traduccion['titulo_publicacion'];</script>

        <label class="autor_publicacion">titulo</label>
        </label>
        <input type='text' id='autor_publicacion' name='autor_publicacion'></input>
        <div id="div_error_autor_publicacion" class="errorcampo"><a id="error_autor_publicacion"></a></div>
        <br>
        <script>document.querySelector('.autor_publicacion').innerHTML=traduccion['autor_publicacion'];</script>

        <label class="fecha_publicacion">fecha</label>
        </label>
        <input type='date' id='fecha_publicacion' name='fecha_publicacion'></input>
        <div id="div_error_fecha_publicacion" class="errorcampo"><a id="error_fecha_publicacion"></a></div>
        <br>
        <script>document.querySelector('.fecha_publicacion').innerHTML=traduccion['fecha_publicacion'];</script>
                
        <label class="area_publicacion">titulo</label>
        </label>
        <input type='text' id='area_publicacion' name='area_publicacion'></input>
        <div id="div_error_area_publicacion" class="errorcampo"><a id="error_area_publicacion"></a></div>
        <br>
        <script>document.querySelector('.area_publicacion').innerHTML=traduccion['area_publicacion'];</script>

        <label class="texto_publicacion">titulo</label>
        </label>
        <input type='text' id='texto_publicacion' name='texto_publicacion'></input>
        <div id="div_error_texto_publicacion" class="errorcampo"><a id="error_texto_publicacion"></a></div>
        <br>
        <script>document.querySelector('.texto_publicacion').innerHTML=traduccion['texto_publicacion'];</script>

        <br>
        <label id="label_imagen_publicacion" class="label_imagen_publicacion">imagen</label>
        <input type='text' id='imagen_publicacion' name='imagen_publicacion'></input>
        <a id="link_imagen_publicacion" href="http://193.147.87.202/ET2/filesuploaded/files_imagen_publicacion/"><img src="./iconos/FILE.png" /></a>
        <label id="label_nuevo_imagen_publicacion" class="label_nuevo_imagen_publicacion">Nueva imagen_publicacion</label>
        <input type='file' id='nuevo_imagen_publicacion' name='nuevo_imagen_publicacion'></input>
        <div id="div_error_nuevo_imagen_publicacion" class="errorcampo"><a id="error_nuevo_imagen_publicacion"></a></div>
        <br>
        
        `;

        //obtener campos del formulario
        let campos = document.forms['IU_form'].elements;
        //recorrer todos los campos
        for (let i = 0; i < campos.length; i++) {
            if (eval(document.getElementById('div_error_' + campos[i].id))) {
                document.getElementById('div_error_' + campos[i].id).style.display = 'none';
            }
        }


    }

}