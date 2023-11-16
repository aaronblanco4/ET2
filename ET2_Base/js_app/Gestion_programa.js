class Gestion_programa extends GestionEntidad{

    // se puede hacer uno general en GestionEntidad que recorra todos los atributos haciendo estas cosas
    static resetearformprograma() {

        this.recargarform();
    
    }

    //-----------------------------------------------------------------------------
    // formularios

    static async createForm_ADD(){

        // resetear el formulario
        this.recargarform();

        // rellenar titulo formulario
        document.querySelector(".class_contenido_titulo_form").className = "class_contenido_titulo_form titulo_form_ADD_programa"; 

        // se rellena el action del formulario
        document.getElementById('IU_form').action = 'javascript:Gestion_programa.ADD();';
        document.getElementById('IU_form').setAttribute('onsubmit', 'return Gestion_programa.comprobar_submit();');

        // se coloca el onblur del dni y se pone a vacio el valor (o podriamos hacerlo en el resetearformusuario())
        document.getElementById('id_programa').setAttribute('onblur', 'Gestion_programa.comprobar_id_programa()');
        document.getElementById('id_programa').value = '';

        document.getElementById('nombre_programa').setAttribute('onblur', 'Gestion_programa.comprobar_nombre_programa()');
        document.getElementById('nombre_programa').value = '';
        
        document.getElementById('acronimo_programa').setAttribute('onblur', 'Gestion_programa.comprobar_acronimo_programa()');
        document.getElementById('acronimo_programa').value = '';

        document.getElementById('nombre_original_programa').setAttribute('onblur', 'Gestion_programa.comprobar_nombre_original_programa()');
        document.getElementById('nombre_original_programa').value = '';

        document.getElementById('autor_programa').setAttribute('onblur','Gestion_programa.comprobar_autor_programa()');
        document.getElementById('autor_programa').value = '';

        document.getElementById('autor_original_programa').setAttribute('onblur','Gestion_programa.comprobar_autor_original_programa()');
        document.getElementById('autor_original_programa').value = '';

        document.getElementById('ano_programa').setAttribute('onblur','Gestion_programa.comprobar_ano_programa()');
        document.getElementById('ano_programa').value = '';

        document.getElementById('ano_original_programa').setAttribute('onblur','Gestion_programa.comprobar_ano_original_programa()');
        document.getElementById('ano_original_programa').value = '';

        document.getElementById('requisitos_programa').setAttribute('onblur','Gestion_programa.comprobar_requisitos_programa()');
        document.getElementById('requisitos_programa').value = '';

        document.getElementById('poblacion_desde_programa').setAttribute('onblur','Gestion_programa.comprobar_poblacion_desde_programa()');
        document.getElementById('poblacion_desde_programa').value = '';

        document.getElementById('poblacion_hasta_programa').setAttribute('onblur','Gestion_programa.comprobar_poblacion_hasta_programa()');
        document.getElementById('poblacion_hasta_programa').value = '';

        document.getElementById('unidad_poblacion').setAttribute('onchange','Gestion_programa.comprobar_unidad_poblacion()');
        document.getElementById('unidad_poblacion').value = '';

        document.getElementById('tipo_programa').setAttribute('onblur','Gestion_programa.comprobar_tipo_programa()');
        document.getElementById('tipo_programa').value = '';

        document.getElementById('tiempo_aplicacion_programa').setAttribute('onblur','Gestion_programa.comprobar_tiempo_aplicacion_programa()');
        document.getElementById('tiempo_aplicacion_programa').value = '';

        document.getElementById('descrip_interp_programa').setAttribute('onblur','Gestion_programa.comprobar_descrip_interp_programa()');
        document.getElementById('descrip_interp_programa').value = '';

        document.getElementById('enlace_programa').setAttribute('onblur','Gestion_programa.comprobar_enlace_programa()');
        document.getElementById('enlace_programa').value = '';

        document.getElementById('formato_programa').setAttribute('onblur','Gestion_programa.comprobar_formato_programa()');
        document.getElementById('formato_programa').value = '';

        document.getElementById('modo_correccion_programa').setAttribute('onblur','Gestion_programa.comprobar_modo_correccion_programa()');
        document.getElementById('modo_correccion_programa').value = '';

        document.getElementById('modo_aplicacion_programa').setAttribute('onblur','Gestion_programa.comprobar_modo_aplicacion_programa()');
        document.getElementById('modo_aplicacion_programa').value = '';

        document.getElementById('nuevo_fichero_programa').setAttribute('onchange','Gestion_programa.comprobar_nuevo_fichero_programa()');
        document.getElementById("label_fichero_programa").style.display = 'none';
        document.getElementById("fichero_programa").style.display = 'none';
        document.getElementById("link_fichero_programa").style.display = 'none';

        document.getElementById('nuevo_imagen_programa').setAttribute('onchange','Gestion_programa.comprobar_nuevo_imagen_programa()');
        document.getElementById("label_imagen_programa").style.display = 'none';
        document.getElementById("imagen_programa").style.display = 'none';
        document.getElementById("link_imagen_programa").style.display = 'none';
        

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

    static createForm_EDIT(datostupla){
        // resetear el formulario
        this.recargarform();

        // rellenar titulo formulario
        document.querySelector(".class_contenido_titulo_form").className = "class_contenido_titulo_form titulo_form_EDIT_programa"; 

        // se rellena el action del formulario
        document.getElementById('IU_form').action = 'javascript:Gestion_programa.EDIT();';
        document.getElementById('IU_form').setAttribute('onsubmit', 'return Gestion_programa.comprobar_submit();');

        // se coloca el onblur del dni y se pone a vacio el valor (o podriamos hacerlo en el resetearformusuario())
        document.getElementById('id_programa').setAttribute('onblur', 'Gestion_programa.comprobar_id_programa()');
        document.getElementById('id_programa').value = datostupla.id_programa;
        document.getElementById('id_programa').setAttribute("readonly","");

        document.getElementById('nombre_programa').setAttribute('onblur', 'Gestion_programa.comprobar_nombre_programa()');
        document.getElementById('nombre_programa').value = datostupla.nombre_programa;        

        // se coloca el onblur del nombre y se pone a vacio el valor (o podriamos hacerlo en el resetearformusuario())
        document.getElementById('acronimo_programa').setAttribute('onblur', 'Gestion_programa.comprobar_acronimo_programa()');
        document.getElementById('acronimo_programa').value = datostupla.acronimo_programa;

        document.getElementById('nombre_original_programa').setAttribute('onblur', 'Gestion_programa.comprobar_nombre_original_programa()');
        document.getElementById('nombre_original_programa').value = datostupla.nombre_original_programa;

        document.getElementById('autor_programa').setAttribute('onchange','Gestion_programa.comprobar_autor_programa()');
        document.getElementById('autor_programa').value = datostupla.autor_programa;

        document.getElementById('autor_original_programa').setAttribute('onblur','Gestion_programa.comprobar_autor_original_programa()');
        document.getElementById('autor_original_programa').value = datostupla.autor_original_programa;

        document.getElementById('ano_programa').setAttribute('onblur','Gestion_programa.comprobar_ano_programa()');
        document.getElementById('ano_programa').value = datostupla.ano_programa;

        document.getElementById('ano_original_programa').setAttribute('onblur','Gestion_programa.comprobar_ano_original_programa()');
        document.getElementById('ano_original_programa').value =datostupla.ano_original_programa;

        document.getElementById('requisitos_programa').setAttribute('onblur','Gestion_programa.comprobar_requisitos_programa()');
        document.getElementById('requisitos_programa').value = datostupla.requisitos_programa;

        document.getElementById('poblacion_desde_programa').setAttribute('onblur','Gestion_programa.comprobar_poblacion_desde_programa()');
        document.getElementById('poblacion_desde_programa').value = datostupla.poblacion_desde_programa;

        document.getElementById('poblacion_hasta_programa').setAttribute('onblur','Gestion_programa.comprobar_poblacion_hasta_programa()');
        document.getElementById('poblacion_hasta_programa').value = datostupla.poblacion_hasta_programa;

        document.getElementById('unidad_poblacion').setAttribute('onchange','Gestion_programa.comprobar_unidad_poblacion()'); 
        document.getElementById('unidad_poblacion').value = datostupla.unidad_poblacion;              

        document.getElementById('tipo_programa').setAttribute('onblur','Gestion_programa.comprobar_tipo_programa()');
        document.getElementById('tipo_programa').value = datostupla.tipo_programa;

        document.getElementById('tiempo_aplicacion_programa').setAttribute('onblur','Gestion_programa.comprobar_tiempo_aplicacion_programa()');
        document.getElementById('tiempo_aplicacion_programa').value = datostupla.tiempo_aplicacion_programa;

        document.getElementById('descrip_interp_programa').setAttribute('onblur','Gestion_programa.comprobar_descrip_interp_programa()');
        document.getElementById('descrip_interp_programa').value = datostupla.descrip_interp_programa;

        document.getElementById('enlace_programa').setAttribute('onblur','Gestion_programa.comprobar_enlace_programa()');
        document.getElementById('enlace_programa').value = datostupla.enlace_programa;

        document.getElementById('formato_programa').setAttribute('onblur','Gestion_programa.comprobar_formato_programa()');
        document.getElementById('formato_programa').value = datostupla.formato_programa;

        document.getElementById('modo_aplicacion_programa').setAttribute('onblur','Gestion_programa.comprobar_modo_aplicacion_programa()');
        document.getElementById('modo_aplicacion_programa').value = datostupla.modo_aplicacion_programa;

        document.getElementById('modo_correccion_programa').setAttribute('onblur','Gestion_programa.comprobar_modo_correccion_programa()');
        document.getElementById('modo_correccion_programa').value = datostupla.modo_correccion_programa;

        document.getElementById('fichero_programa').value = datostupla.fichero_programa;
        document.getElementById('link_fichero_programa').setAttribute('href','http://193.147.87.202/ET2/filesuploaded/files_fichero_programa/'+datostupla.fichero_programa);
        document.getElementById('fichero_programa').setAttribute("readonly",true);
        document.getElementById('nuevo_fichero_programa').setAttribute('onchange','Gestion_programa.comprobar_nuevo_fichero_programa()');

        document.getElementById('imagen_programa').value = datostupla.imagen_programa;
        document.getElementById('link_imagen_programa').setAttribute('href','http://193.147.87.202/ET2/filesuploaded/files_imagen_programa/'+datostupla.imagen_programa);
        document.getElementById('imagen_programa').setAttribute("readonly",true);
        document.getElementById('nuevo_imagen_programa').setAttribute('onchange','Gestion_programa.comprobar_nuevo_imagen_programa()');


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

    static createForm_DELETE(datostupla){
        // resetear el formulario
        this.recargarform();

        // rellenar titulo formulario
        document.querySelector(".class_contenido_titulo_form").className = "class_contenido_titulo_form titulo_form_DELETE_programa";

        // se rellena el action del formulario
        document.getElementById('IU_form').action = 'javascript:Gestion_programa.DELETE();';
      
        document.getElementById('id_programa').value = datostupla.id_programa;
        
        document.getElementById('nombre_programa').value = datostupla.nombre_programa;

        document.getElementById('acronimo_programa').value = datostupla.acronimo_programa;

        document.getElementById('nombre_original_programa').value = datostupla.nombre_original_programa;

        document.getElementById('autor_programa').value = datostupla.autor_programa;

        document.getElementById('autor_original_programa').value = datostupla.autor_original_programa;

        document.getElementById('ano_programa').value = datostupla.ano_programa;

        document.getElementById('ano_original_programa').value = datostupla.ano_original_programa;

        document.getElementById('requisitos_programa').value = datostupla.requisitos_programa;
        
        document.getElementById('poblacion_desde_programa').value = datostupla.poblacion_desde_programa;
        
        document.getElementById('poblacion_hasta_programa').value = datostupla.poblacion_hasta_programa;

        document.getElementById('unidad_poblacion').value = datostupla.unidad_poblacion;
        document.getElementById('unidad_poblacion').setAttribute('disabled','true');

        document.getElementById('tipo_programa').value = datostupla.tipo_programa;
        document.getElementById('tipo_programa').setAttribute('disabled','true');

        document.getElementById('tiempo_aplicacion_programa').value = datostupla.tiempo_aplicacion_programa;

        document.getElementById('descrip_interp_programa').value = datostupla.descrip_interp_programa;

        document.getElementById('enlace_programa').value = datostupla.enlace_programa;

        document.getElementById('formato_programa').value = datostupla.formato_programa;
        document.getElementById('formato_programa').setAttribute('disabled','true');

        document.getElementById('modo_correccion_programa').value = datostupla.modo_correccion_programa;
        document.getElementById('modo_correccion_programa').setAttribute('disabled','true');    

        document.getElementById('modo_aplicacion_programa').value = datostupla.modo_aplicacion_programa;
        document.getElementById('modo_aplicacion_programa').setAttribute('disabled','true');

        document.getElementById('fichero_programa').value = datostupla.fichero_programa;
        document.getElementById('fichero_programa').setAttribute("readonly",true);
        document.getElementById("link_fichero_programa").href += datostupla.fichero_programa;
        document.getElementById("label_nuevo_fichero_programa").style.display = 'none';
        document.getElementById("nuevo_fichero_programa").style.display = 'none';

        document.getElementById('imagen_programa').value = datostupla.imagen_programa;
        document.getElementById('imagen_programa').setAttribute("readonly",true);
        document.getElementById("link_imagen_programa").href += datostupla.imagen_programa;
        document.getElementById("label_nuevo_imagen_programa").style.display = 'none';
        document.getElementById("nuevo_imagen_programa").style.display = 'none';

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

    static createForm_SHOWCURRENT(datostupla){
       
       
            this.createForm_DELETE(datostupla );

                 document.querySelector(".class_contenido_titulo_form").className = "class_contenido_titulo_form titulo_form_SHOWCURRENT_programa";

                 document.getElementById('botondelete').remove();
                 
                 // se rellena el action del formulario
        let imgshowcurrent = document.createElement('img');
        imgshowcurrent.src = './iconos/SHOWCURRENT.png';
        imgshowcurrent.setAttribute("onclick","DOM_class.cerrar_div_formulario();")
        document.getElementById('IU_form').append(imgshowcurrent);
        
        document.getElementById('unidad_poblacion').setAttribute('disabled','true');
        GestionEntidad.ponercamposreadonly();
        // para actualizar el idioma
        setLang();        
    }

    static createForm_SEARCH(){
        this.recargarform();

        // rellenar titulo formulario
        document.querySelector(".class_contenido_titulo_form").className = "class_contenido_titulo_form titulo_form_SEARCH_programa"; 
        // se rellena el action del formulario
        document.getElementById('IU_form').action = 'javascript:Gestion_programa.SEARCH();';
        document.getElementById('IU_form').setAttribute('onsubmit', 'return Gestion_programa.comprobar_submit_SEARCH();');

        // se coloca el onblur del dni y se pone a vacio el valor (o podriamos hacerlo en el resetearformusuario())

        document.getElementById('id_programa').setAttribute('onblur', 'Gestion_programa.comprobar_id_programa_SEARCH()');

        document.getElementById('nombre_programa').setAttribute('onblur', 'Gestion_programa.comprobar_nombre_programa_SEARCH()');        

        document.getElementById('acronimo_programa').setAttribute('onblur', 'Gestion_programa.comprobar_acronimo_programa_SEARCH()');

        document.getElementById('nombre_original_programa').setAttribute('onblur','Gestion_programa.comprobar_nombre_original_programa_SEARCH()');
        
        document.getElementById('autor_programa').setAttribute('onblur','Gestion_programa.comprobar_autor_programa_SEARCH()');

        document.getElementById('autor_original_programa').setAttribute('onblur','Gestion_programa.comprobar_autor_original_programa_SEARCH()');

        document.getElementById('ano_programa').setAttribute('onblur','Gestion_programa.comprobar_ano_programa_SEARCH()');
        
        document.getElementById('ano_original_programa').setAttribute('onblur', 'Gestion_programa.comprobar_ano_original_programa_SEARCH()');

        document.getElementById('requisitos_programa').setAttribute('onblur', 'Gestion_programa.comprobar_requisitos_programa_SEARCH()');

        document.getElementById('poblacion_desde_programa').setAttribute('onblur', 'Gestion_programa.comprobar_poblacion_desde_programa_SEARCH()');

        document.getElementById('poblacion_hasta_programa').setAttribute('onblur', 'Gestion_programa.comprobar_poblacion_hasta_programa_SEARCH()');

        document.getElementById('unidad_poblacion').setAttribute('onblur', 'Gestion_programa.comprobar_unidad_poblacion_SEARCH()');        
         var select = document.getElementById('unidad_poblacion');
         select.selectedIndex = -1;

        document.getElementById('tipo_programa').setAttribute('onblur', 'Gestion_programa.comprobar_tipo_programa_SEARCH()');
        var select2 = document.getElementById('tipo_programa');
         select2.selectedIndex = -1;
        document.getElementById('tiempo_aplicacion_programa').setAttribute('onblur', 'Gestion_programa.comprobar_tiempo_aplicacion_programa_SEARCH()');        

        document.getElementById('descrip_interp_programa').setAttribute('onblur', 'Gestion_programa.comprobar_descrip_interp_programa_SEARCH()'); 
        
        document.getElementById('enlace_programa').setAttribute('onblur', 'Gestion_programa.comprobar_enlace_programa_SEARCH()');

        document.getElementById('formato_programa').setAttribute('onblur', 'Gestion_programa.comprobar_formato_programa_SEARCH()');
        var select3 = document.getElementById('formato_programa');
         select3.selectedIndex = -1;

        document.getElementById('modo_correccion_programa').setAttribute('onblur', 'Gestion_programa.comprobar_modo_correccion_programa_SEARCH()');
        var select4 = document.getElementById('modo_correccion_programa');
         select4.selectedIndex = -1;

        document.getElementById('modo_aplicacion_programa').setAttribute('onblur', 'Gestion_programa.comprobar_modo_aplicacion_programa_SEARCH()');
        var select5 = document.getElementById('modo_aplicacion_programa');
         select5.selectedIndex = -1;

        document.getElementById('fichero_programa').setAttribute('onblur','Gestion_programa.comprobar_nuevo_fichero_programa_SEARCH()');
        document.getElementById("label_nuevo_fichero_programa").style.display = 'none';
        document.getElementById("nuevo_fichero_programa").style.display = 'none';
        document.getElementById('link_fichero_programa').style.display = 'none';

        document.getElementById('imagen_programa').setAttribute('onblur','Gestion_programa.comprobar_nuevo_imagen_programa_SEARCH()');
        document.getElementById("label_nuevo_imagen_programa").style.display = 'none';
        document.getElementById("nuevo_imagen_programa").style.display = 'none';
        document.getElementById('link_imagen_programa').style.display = 'none';

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

    static comprobar_submit(){

        let valor = this.comprobar_nombre_programa();
        let valor1 = this.comprobar_acronimo_programa();
        let valor2 = this.comprobar_nombre_original_programa();
        let valor3 = this.comprobar_autor_programa();
        let valor4 = this.comprobar_autor_original_programa();
        let valor5 = this.comprobar_ano_programa();
        let valor6 = this.comprobar_ano_original_programa();
        let valor7 = this.comprobar_nuevo_fichero_programa();
        let valor8 = this.comprobar_id_programa();
        let valor9 = this.comprobar_requisitos_programa();
        let valor10 = this.comprobar_poblacion_desde_programa();
        let valor11 = this.comprobar_poblacion_hasta_programa();
        let valor12 = this.comprobar_unidad_poblacion();
        let valor13 = this.comprobar_tipo_programa();
        let valor14 = this.comprobar_formato_programa();
        let valor15 = this.comprobar_modo_correccion_programa();
        let valor16 = this.comprobar_modo_aplicacion_programa();
        let valor17 = this.comprobar_tiempo_aplicacion_programa();
        let valor18 = this.comprobar_descrip_interp_programa();
        let valor19 = this.comprobar_enlace_programa();
        let valor20 = this.comprobar_nuevo_imagen_programa();
        let resultado = (
            valor &&
            valor1 &&
            valor2 &&
            valor3 &&
            valor4 &&
            valor5 &&
            valor6 &&
            valor7 &&
            valor8 &&
            valor9 &&
            valor10 &&
            valor11 &&
            valor12 &&
            valor13 &&
            valor14 &&
            valor15 &&
            valor16 && 
            valor17 &&
            valor18 &&
            valor19 &&
            valor20
        );

        return resultado;
        
    }


     

    static comprobar_submit_SEARCH(){

        let valor = this.comprobar_nombre_programa_SEARCH();
        let valor1 = this.comprobar_acronimo_programa_SEARCH();
        let valor2 = this.comprobar_nombre_original_programa_SEARCH();
        let valor3 = this.comprobar_autor_programa_SEARCH();
        let valor4 = this.comprobar_autor_original_programa_SEARCH();
        let valor5 = this.comprobar_ano_programa_SEARCH();
        let valor6 = this.comprobar_ano_original_programa_SEARCH();
        let valor7 = this.comprobar_nuevo_fichero_programa_SEARCH();
        let valor8 = this.comprobar_id_programa_SEARCH();
        let valor9 = this.comprobar_requisitos_programa_SEARCH();
        let valor10 = this.comprobar_poblacion_desde_programa_SEARCH();
        let valor11 = this.comprobar_poblacion_hasta_programa_SEARCH();
        let valor12 = this.comprobar_unidad_poblacion_SEARCH();
        let valor13 = this.comprobar_tipo_programa_SEARCH();
        let valor14 = this.comprobar_formato_programa_SEARCH();
        let valor15 = this.comprobar_modo_correccion_programa_SEARCH();
        let valor16 = this.comprobar_modo_aplicacion_programa_SEARCH();
        let valor17 = this.comprobar_tiempo_aplicacion_programa_SEARCH();
        let valor18 = this.comprobar_descrip_interp_programa_SEARCH();
        let valor19 = this.comprobar_enlace_programa_SEARCH();
        let valor20 = this.comprobar_nuevo_imagen_programa_SEARCH();

        let resultado = (
            valor &&
            valor1 &&
            valor2 &&
            valor3 &&
            valor4 &&
            valor5 &&
            valor6 &&
            valor7 &&
            valor8 && 
            valor9 &&
            valor10 &&
            valor11 &&
            valor12 &&
            valor13 &&
            valor14 &&
            valor15 &&
            valor16 && 
            valor17 &&
            valor18 &&
            valor19 &&
            valor20
        );

        return resultado;
    }

    //-----------------------------------------------------------------------------
    // acciones a back

    static async ADD(){
        await this.peticionBackGeneral('IU_form', 'programa', 'ADD')
        .then((respuesta) => {
            if (respuesta['ok']){
                this.recargarform();
                this.SEARCH();
            }
            else{
                DOM_class.mostrardivmensajes(respuesta['code']);
            }
        });
    }

    static async EDIT(){
        await this.peticionBackGeneral('IU_form', 'programa', 'EDIT')
        .then((respuesta) => {
            if (respuesta['ok']){
                this.recargarform();
                this.SEARCH();
            }
            else{
                DOM_class.mostrardivmensajes(respuesta['code']);
            }
        });
    }

    static async DELETE(){
        await this.peticionBackGeneral('IU_form', 'programa', 'DELETE')
        .then((respuesta) => {
            if (respuesta['ok']){
                this.resetearformprograma();
                this.SEARCH();
            }
            else{
                DOM_class.mostrardivmensajes(respuesta['code']);
            }
        });
    }

    static async SEARCH(){
        await this.peticionBackGeneral('IU_form', 'programa', 'SEARCH')
        .then((respuesta) => {
            this.recargarform();
            let programa = new Gestion_programa('programa',respuesta['resource'],Array('id_programa','nombre_programa','acronimo_programa')); programa.mostrartabla();
            if (respuesta['code'] == 'RECORDSET_VACIO'){
                document.getElementById('muestradatostabla').innerHTML = 'no hay datos coincidentes con la busqueda';
            }
        });
    }

    //-----------------------------------------------------------------------------
    //validaciones campos



    
    // COMPROBACIONES PARA ID_PROGRAMA
    static comprobar_id_programa(){

        if (validacionesatomicas.size_minimo('id_programa',1)){
        }
        else{
            //modificacion parametros texto error
            DOM_class.mostrardivmensajeserrordebajo('id_programa','KO_id_programa_tam_min');
            //salir ejecucion con false
            return false;
        }

        if (validacionesatomicas.size_maximo('id_programa',6)){
        }
        else{
            //modificacion parametros texto error
            DOM_class.mostrardivmensajeserrordebajo('id_programa','KO_id_programa_tam_max');
            //salir ejecucion con false
            return false;
        }

        if(validacionesatomicas.solo_digitos('id_programa')){            
        }else{            
            DOM_class.mostrardivmensajeserrordebajo('id_programa','KO_id_programa_solo_digitos');
            return false;
        }

        DOM_class.mostrarexitovalor('id_programa');
        return true;

    }

    static comprobar_id_programa_SEARCH(){

        if (validacionesatomicas.size_maximo('id_programa',1)){   
        }
        else{
           //modificacion parametros texto error
           DOM_class.mostrardivmensajeserrordebajo('id_programa','KO_id_programa_tam_max');
           //salir ejecucion con false
           return false;
        }
        if(validacionesatomicas.solo_digitos_search('id_programa')){            
        }else{            
            DOM_class.mostrardivmensajeserrordebajo('id_programa','KO_id_programa_solo_digitos');
            return false;
        }
        

        DOM_class.mostrarexitovalor('id_programa');
        return true;

    }



        // COMPROBACIONES PARA NOMBRE_PROGRAMA
    static comprobar_nombre_programa(){

        if (validacionesatomicas.size_minimo('nombre_programa',6)){
        }
        else{
            //modificacion parametros texto error
            DOM_class.mostrardivmensajeserrordebajo('nombre_programa','KO_nombre_programa_tam_min');
            //salir ejecucion con false
            return false;
        }        
        if (validacionesatomicas.size_maximo('nombre_programa',60)){
        }
        else{
            //modificacion parametros texto error
            DOM_class.mostrardivmensajeserrordebajo('nombre_programa','KO_nombre_programa_tam_max');
            //salir ejecucion con false
            return false;
        }
        if(validacionesatomicas.solo_alfabeticos_ñ_espacios('nombre_programa')){            
        }else{
            DOM_class.mostrardivmensajeserrordebajo('nombre_programa','KO_nombre_programa_formato');
            return false;
        }

        DOM_class.mostrarexitovalor('nombre_programa');
        return true;

    }

    static comprobar_nombre_programa_SEARCH(){

        if (validacionesatomicas.size_maximo('nombre_programa',60)){   
        }
        else{
            //modificacion parametros texto error
            DOM_class.mostrardivmensajeserrordebajo('nombre_programa','KO_nombre_programa_tam_max');
            //salir ejecucion con false
            return false;
           
            return false;
        }

        if(validacionesatomicas.solo_alfabeticos_ñ_espacios_search('nombre_programa')){            
        }else{
            DOM_class.mostrardivmensajeserrordebajo('nombre_programa','KO_nombre_programa_formato');
            return false;
        }

        DOM_class.mostrarexitovalor('nombre_programa');
        return true;

    }


    //COMPROBACIONES PARA ACRONIMO_PROGRAMA

    static comprobar_acronimo_programa(){

       if (validacionesatomicas.size_minimo('acronimo_programa',3)){
        }
        else{
            //modificacion parametros texto error
            DOM_class.mostrardivmensajeserrordebajo('acronimo_programa','KO_acronimo_programa_tam_min');
            //salir ejecucion con false
            return false;
        }

        if (validacionesatomicas.size_maximo('acronimo_programa',20)){
        }
        else{
            //modificacion parametros texto error
            DOM_class.mostrardivmensajeserrordebajo('acronimo_programa','KO_acronimo_programa_tam_max');
            //salir ejecucion con false
            return false;
        }
        if(validacionesatomicas.solo_alfabeticos_sin_acentos('acronimo_programa')){            
        }else{
            DOM_class.mostrardivmensajeserrordebajo('acronimo_programa','KO_acronimo_programa_formato')
            return false;
        }
        

        DOM_class.mostrarexitovalor('acronimo_programa');
        return true;

    }

    static comprobar_acronimo_programa_SEARCH(){

        if (validacionesatomicas.size_maximo('acronimo_programa',20)){
        }
        else{
            //modificacion parametros texto error
            DOM_class.mostrardivmensajeserrordebajo('acronimo_programa','KO_acronimo_programa_tam_max');
            //salir ejecucion con false
            return false;
        }
        if(validacionesatomicas.solo_alfabeticos_sin_acentos_search('acronimo_programa')){            
        }else{
            DOM_class.mostrardivmensajeserrordebajo('acronimo_programa','KO_acronimo_programa_formato')
            return false;
        }
        
        

        DOM_class.mostrarexitovalor('acronimo_programa');
        return true;

    }


        //COMPROBACIONES PARA NOMBRE_ORIGINAL_PROGRAMA
    static comprobar_nombre_original_programa(){

        if (validacionesatomicas.size_minimo('nombre_original_programa',6)){
        }
        else{
            DOM_class.mostrardivmensajeserrordebajo('nombre_original_programa','KO_nombre_original_programa_tam_min');;
            //salir ejecucion con false
            return false;
        }

        if (validacionesatomicas.size_maximo('nombre_original_programa',60)){
        }
        else{
            //modificacion parametros texto error
            DOM_class.mostrardivmensajeserrordebajo('nombre_original_programa','KO_nombre_original_programa_tam_max');
            //salir ejecucion con false
            return false;
        }

        if(validacionesatomicas.solo_alfabeticos_ñ_espacios('nombre_original_programa')){            
        }else{
            DOM_class.mostrardivmensajeserrordebajo('nombre_original_programa','KO_nombre_original_programa_formato');
            return false;
        }

        DOM_class.mostrarexitovalor('nombre_original_programa');
        return true;
    }

    static comprobar_nombre_original_programa_SEARCH(){

        if (validacionesatomicas.size_maximo('nombre_original_programa',60)){
        }
        else{
            //modificacion parametros texto error
            DOM_class.mostrardivmensajeserrordebajo('nombre_original_programa','KO_nombre_original_programa_tam_max');
            //salir ejecucion con false
            return false;
        }

        if(validacionesatomicas.solo_alfabeticos_ñ_espacios_search('nombre_original_programa')){            
        }else{
            DOM_class.mostrardivmensajeserrordebajo('nombre_original_programa','KO_nombre_original_programa_formato');
            return false;
        }

        DOM_class.mostrarexitovalor('nombre_original_programa');
        return true;
    }


    //COMPROBACIONES PARA AUTOR_PROGRAMA
    static comprobar_autor_programa(){

        if (validacionesatomicas.size_minimo('autor_programa',6)){
        }
        else{
            //modificacion parametros texto error
            DOM_class.mostrardivmensajeserrordebajo('autor_programa','KO_autor_programa_tam_min');
            //salir ejecucion con false
            return false;
        }

        if (validacionesatomicas.size_maximo('autor_programa',50)){
        }
        else{
            //modificacion parametros texto error
            DOM_class.mostrardivmensajeserrordebajo('autor_programa','KO_autor_programa_tam_max');
            //salir ejecucion con false
            return false;
        }
        if(validacionesatomicas.solo_alfabeticos_ñ_espacios('autor_programa')){            
        }else{
            DOM_class.mostrardivmensajeserrordebajo('autor_programa','KO_autor_programa_formato');
            return false;
        }
        

        DOM_class.mostrarexitovalor('autor_programa');
        return true;
        

    }

    static comprobar_autor_programa_SEARCH(){

        if (validacionesatomicas.size_maximo('autor_programa',50)){
        }
        else{
            //modificacion parametros texto error
            DOM_class.mostrardivmensajeserrordebajo('autor_programa','KO_autor_programa_tam_max');
            //salir ejecucion con false
            return false;
        }
        if(validacionesatomicas.solo_alfabeticos_ñ_espacios_search('autor_programa')){            
        }else{
            DOM_class.mostrardivmensajeserrordebajo('autor_programa','KO_autor_programa_formato');
            return false;
        }

        DOM_class.mostrarexitovalor('autor_programa');
        return true;

    }

    
        //COMPROBACIONES PARA AUTOR_ORIGINAL_PROGRAMA
    static comprobar_autor_original_programa(){

        if (validacionesatomicas.size_minimo('autor_original_programa',6)){
        }
        else{
            //modificacion parametros texto error
            DOM_class.mostrardivmensajeserrordebajo('autor_original_programa','KO_autor_original_programa_tam_min');

            //salir ejecucion con false
            return false;
        }

        if (validacionesatomicas.size_maximo('autor_original_programa',50)){
        }
        else{
            //modificacion parametros texto error
            DOM_class.mostrardivmensajeserrordebajo('autor_original_programa','KO_autor_original_programa_tam_max');

            //salir ejecucion con false
            return false;
        }
        if(validacionesatomicas.solo_alfabeticos_ñ_espacios('autor_original_programa')){            
        }else{
            DOM_class.mostrardivmensajeserrordebajo('autor_original_programa','KO_autor_original_programa_formato');
            return false;
        }

        DOM_class.mostrarexitovalor('autor_original_programa');
        return true;

    }

    static comprobar_autor_original_programa_SEARCH(){

        if (validacionesatomicas.size_maximo('autor_original_programa',50)){
        }
        else{
            //modificacion parametros texto error
            DOM_class.mostrardivmensajeserrordebajo('autor_original_programa','KO_autor_original_programa_tam_max');

            //salir ejecucion con false
            return false;
        }
        if(validacionesatomicas.solo_alfabeticos_ñ_espacios_search('autor_original_programa')){            
        }else{
            DOM_class.mostrardivmensajeserrordebajo('autor_original_programa','KO_autor_original_programa_formato');
            return false;
        }

        
        DOM_class.mostrarexitovalor('autor_original_programa');
        return true;

    }



    //COMPROBACIONES PARA ANO_PROGRAMA
    static comprobar_ano_programa(){
        if (validacionesatomicas.size_minimo('ano_programa',4)){
        }
        else{
            //modificacion parametros texto error
            DOM_class.mostrardivmensajeserrordebajo('ano_programa','KO_ano_programa_tam_min');

            //salir ejecucion con false
            return false;
        }

        if (validacionesatomicas.size_maximo('ano_programa',4)){
        }
        else{
            //modificacion parametros texto error
            DOM_class.mostrardivmensajeserrordebajo('ano_programa','KO_ano_programa_tam_max');

            //salir ejecucion con false
            return false;
        }
        if(validacionesatomicas.solo_digitos('ano_programa')){            
        }else{
            DOM_class.mostrardivmensajeserrordebajo('ano_programa','KO_ano_programa_solo_digitos');
            return false;
        }
        if(validacionesatomicas.menor_año_actual('ano_programa')){            
        }else{
            DOM_class.mostrardivmensajeserrordebajo('ano_programa','KO_ano_programa_menor_actual');
            return false;
        }

        DOM_class.mostrarexitovalor('ano_programa');
        return true;
    }

    static comprobar_ano_programa_SEARCH(){
        if (validacionesatomicas.size_maximo('ano_programa',4)){
        }
        else{
            //modificacion parametros texto error
            DOM_class.mostrardivmensajeserrordebajo('ano_programa','KO_ano_programa_tam_max');

            //salir ejecucion con false
            return false;
        }
        if(validacionesatomicas.solo_digitos_search('ano_programa')){            
        }else{
            DOM_class.mostrardivmensajeserrordebajo('ano_programa','KO_ano_programa_solo_digitos');
            return false;
        }
        if(validacionesatomicas.menor_año_actual_search('ano_programa')){            
        }else{
            DOM_class.mostrardivmensajeserrordebajo('ano_programa','KO_ano_programa_menor_actual');
            return false;
        }

        
        DOM_class.mostrarexitovalor('ano_programa');
        return true;
    }



    //COMPROBACIONES PARA ANO_ORIGINAL_PROGRAMA
    static comprobar_ano_original_programa(){
        if (validacionesatomicas.size_minimo('ano_original_programa',4)){
        }
        else{
            //modificacion parametros texto error
            DOM_class.mostrardivmensajeserrordebajo('ano_original_programa','KO_ano_original_programa_tam_min');

            //salir ejecucion con false
            return false;
        }

        if (validacionesatomicas.size_maximo('ano_original_programa',4)){
        }
        else{
            //modificacion parametros texto error
            DOM_class.mostrardivmensajeserrordebajo('ano_original_programa','KO_ano_original_programa_tam_max');

            //salir ejecucion con false
            return false;
        }
        if(validacionesatomicas.solo_digitos('ano_original_programa')){            
        }else{
            DOM_class.mostrardivmensajeserrordebajo('ano_original_programa','KO_ano_original_programa_solo_digitos');
            return false;
        }

        if(validacionesatomicas.menor_año_actual('ano_original_programa')){            
        }else{
            DOM_class.mostrardivmensajeserrordebajo('ano_original_programa','KO_ano_original_programa_menor_actual');
            return false;
        }

        DOM_class.mostrarexitovalor('ano_original_programa');
        return true;
        
    
    }

    static comprobar_ano_original_programa_SEARCH(){
        if (validacionesatomicas.size_maximo('ano_original_programa',4)){
        }
        else{
            //modificacion parametros texto error
            DOM_class.mostrardivmensajeserrordebajo('ano_original_programa','KO_ano_original_programa_tam_max');

            //salir ejecucion con false
            return false;
        }
        if(validacionesatomicas.solo_digitos_search('ano_original_programa')){            
        }else{
            DOM_class.mostrardivmensajeserrordebajo('ano_original_programa','KO_ano_original_programa_solo_digitos');
            return false;
        }

        if(validacionesatomicas.menor_año_actual_search('ano_original_programa')){            
        }else{
            DOM_class.mostrardivmensajeserrordebajo('ano_original_programa','KO_ano_original_programa_menor_actual');
            return false;
        }
        
        DOM_class.mostrarexitovalor('ano_original_programa');
        return true;
    }


    

      //COMPROBACIONES PARA REQUISITOS_PROGRAMA
      static comprobar_requisitos_programa(){

        if (validacionesatomicas.size_minimo('requisitos_programa',6)){
        }
        else{
            //modificacion parametros texto error
            DOM_class.mostrardivmensajeserrordebajo('requisitos_programa','KO_requisitos_programa_tam_min');

            //salir ejecucion con false
            return false;
        }

        if (validacionesatomicas.size_maximo('requisitos_programa',300)){
        }
        else{
            //modificacion parametros texto error
            DOM_class.mostrardivmensajeserrordebajo('requisitos_programa','KO_requisitos_programa_tam_max');

            //salir ejecucion con false
            return false;
        }
        if(validacionesatomicas.solo_alfabeticos_ñ_espacios_signosdepuntuacion('requisitos_programa')){            
        }else{
            DOM_class.mostrardivmensajeserrordebajo('requisitos_programa','KO_requisitos_programa_formato');
            return false;
        }

        DOM_class.mostrarexitovalor('requisitos_programa');
        return true;

    }

    static comprobar_requisitos_programa_SEARCH(){

        if (validacionesatomicas.size_maximo('requisitos_programa',300)){
        }
        else{
            //modificacion parametros texto error
            DOM_class.mostrardivmensajeserrordebajo('requisitos_programa','KO_requisitos_programa_tam_max');

            //salir ejecucion con false
            return false;
        }
        if(validacionesatomicas.solo_alfabeticos_ñ_espacios_signosdepuntuacion_search('requisitos_programa')){            
        }else{
            DOM_class.mostrardivmensajeserrordebajo('requisitos_programa','KO_requisitos_programa_formato');
            return false;
        }
        
        DOM_class.mostrarexitovalor('requisitos_programa');
        return true;

    }



     //COMPROBACIONES PARA POBLACION_DESDE_PROGRAMA
     static comprobar_poblacion_desde_programa(){

        if (validacionesatomicas.size_minimo('poblacion_desde_programa',1)){
        }
        else{
            //modificacion parametros texto error
            DOM_class.mostrardivmensajeserrordebajo('poblacion_desde_programa','KO_poblacion_desde_programa_tam_min');

            //salir ejecucion con false
            return false;
        }

        if (validacionesatomicas.size_maximo('poblacion_desde_programa',2)){
        }
        else{
            //modificacion parametros texto error
            DOM_class.mostrardivmensajeserrordebajo('poblacion_desde_programa','KO_poblacion_desde_programa_tam_max');

            //salir ejecucion con false
            return false;
        }
        if(validacionesatomicas.solo_digitos('poblacion_desde_programa')){            
        }else{
            DOM_class.mostrardivmensajeserrordebajo('poblacion_desde_programa','KO_poblacion_desde_programa_solo_digitos');
            return false;
        }

        DOM_class.mostrarexitovalor('poblacion_desde_programa');
        return true;

    }

    static comprobar_poblacion_desde_programa_SEARCH(){

        
        if (validacionesatomicas.size_maximo('poblacion_desde_programa',2)){
        }
        else{
            //modificacion parametros texto error
            DOM_class.mostrardivmensajeserrordebajo('poblacion_desde_programa','KO_poblacion_desde_programa_tam_max');

            //salir ejecucion con false
            return false;
        }
        if(validacionesatomicas.solo_digitos_search('poblacion_desde_programa')){            
        }else{
            DOM_class.mostrardivmensajeserrordebajo('poblacion_desde_programa','KO_poblacion_desde_programa_solo_digitos');
            return false;
        }
        
        DOM_class.mostrarexitovalor('poblacion_desde_programa');
        return true;

    }



     //COMPROBACIONES PARA POBLACION_HASTA_PROGRAMA

     static comprobar_poblacion_hasta_programa(){

        if (validacionesatomicas.size_minimo('poblacion_hasta_programa',1)){
        }
        else{
            //modificacion parametros texto error
            DOM_class.mostrardivmensajeserrordebajo('poblacion_hasta_programa','KO_poblacion_hasta_programa_tam_min');

            //salir ejecucion con false
            return false;
        }

        if (validacionesatomicas.size_maximo('poblacion_hasta_programa',2)){
        }
        else{
            //modificacion parametros texto error
            DOM_class.mostrardivmensajeserrordebajo('poblacion_hasta_programa','KO_poblacion_hasta_programa_tam_max');

            //salir ejecucion con false
            return false;
        }
        if(validacionesatomicas.solo_digitos('poblacion_hasta_programa')){            
        }else{
            DOM_class.mostrardivmensajeserrordebajo('poblacion_hasta_programa','KO_poblacion_hasta_programa_solo_digitos');
            return false;
        }

        DOM_class.mostrarexitovalor('poblacion_hasta_programa');
        return true;

    }

    static comprobar_poblacion_hasta_programa_SEARCH(){

        if (validacionesatomicas.size_maximo('poblacion_hasta_programa',2)){
        }
        else{
            //modificacion parametros texto error
            DOM_class.mostrardivmensajeserrordebajo('poblacion_hasta_programa','KO_poblacion_hasta_programa_tam_max');

            //salir ejecucion con false
            return false;
        }
        if(validacionesatomicas.solo_digitos_search('poblacion_hasta_programa')){            
        }else{
            DOM_class.mostrardivmensajeserrordebajo('poblacion_hasta_programa','KO_poblacion_hasta_programa_solo_digitos');
            return false;
        }
        
        DOM_class.mostrarexitovalor('poblacion_hasta_programa');
        return true;

    }


    //COMPROBACIONES PARA UNIDAD_POBLACION

    static comprobar_unidad_poblacion(){

        if(validacionesatomicas.validarSelect("unidad_poblacion")){            
        }else{
            DOM_class.mostrardivmensajeserrordebajo('unidad_poblacion','KO_unidad_poblacion_select');
            return false;
        }
        
        if(document.getElementById('unidad_poblacion').value != 'AÑOS'
         &&  document.getElementById('unidad_poblacion').value != 'MESES'){
            DOM_class.mostrardivmensajeserrordebajo('unidad_poblacion','KO_unidad_poblacion');
            return false;
        }

        DOM_class.mostrarexitovalor('unidad_poblacion');
        return true;

    }

    static comprobar_unidad_poblacion_SEARCH(){       
        
        DOM_class.mostrarexitovalor('unidad_poblacion');
        return true;

    }

    //COMPROBACIONES PARA TIPO_PROGRAMA 

    static comprobar_tipo_programa(){

        if(validacionesatomicas.validarSelect("tipo_programa")){            
        }else{
            DOM_class.mostrardivmensajeserrordebajo('tipo_programa','KO_tipo_programa_select');
            return false;
        }
        if(document.getElementById('tipo_programa').value != 'EVALUACIÓN'
         &&  document.getElementById('tipo_programa').value != 'INTERVENCIÓN' 
         &&  document.getElementById('tipo_programa').value != 'EVALUACIÓN E INTERVENCIÓN'){
            DOM_class.mostrardivmensajeserrordebajo('tipo_programa','KO_tipo_programa');
            return false;
        }

        DOM_class.mostrarexitovalor('tipo_programa');
        return true;

    }

    static comprobar_tipo_programa_SEARCH(){

        
        
        DOM_class.mostrarexitovalor('tipo_programa');
        return true;

    }

    

      //COMPROBACIONES PARA TIEMPO_APLICACION_PROGRAMA

      static comprobar_tiempo_aplicacion_programa(){

        if (validacionesatomicas.size_minimo('tiempo_aplicacion_programa',1)){
        }
        else{
            //modificacion parametros texto error
            DOM_class.mostrardivmensajeserrordebajo('tiempo_aplicacion_programa','KO_tiempo_aplicacion_programa_tam_min');

            //salir ejecucion con false
            return false;
        }

        if (validacionesatomicas.size_maximo('tiempo_aplicacion_programa',4)){
        }
        else{
            //modificacion parametros texto error
            DOM_class.mostrardivmensajeserrordebajo('tiempo_aplicacion_programa','KO_tiempo_aplicacion_programa_tam_max');

            //salir ejecucion con false
            return false;
        }
        if(validacionesatomicas.solo_digitos('tiempo_aplicacion_programa')){            
        }else{
            DOM_class.mostrardivmensajeserrordebajo('tiempo_aplicacion_programa','KO_tiempo_aplicacion_programa_solo_digitos');
            return false;
        }

        DOM_class.mostrarexitovalor('tiempo_aplicacion_programa');
        return true;

    }

    static comprobar_tiempo_aplicacion_programa_SEARCH(){

        if (validacionesatomicas.size_maximo('tiempo_aplicacion_programa',4)){
        }
        else{
            //modificacion parametros texto error
            DOM_class.mostrardivmensajeserrordebajo('tiempo_aplicacion_programa','KO_tiempo_aplicacion_programa_tam_max');

            //salir ejecucion con false
            return false;
        }
        if(validacionesatomicas.solo_digitos_search('tiempo_aplicacion_programa')){            
        }else{
            DOM_class.mostrardivmensajeserrordebajo('tiempo_aplicacion_programa','KO_tiempo_aplicacion_programa_solo_digitos');
            return false;
        }
        
        DOM_class.mostrarexitovalor('tiempo_aplicacion_programa');
        return true;

    }

    //COMPROBACIONES PARA DESCRIP_INTERP_PROGRAMA

    static comprobar_descrip_interp_programa(){
        if (validacionesatomicas.size_minimo('descrip_interp_programa',100)){
        }
        else{
            //modificacion parametros texto error
            DOM_class.mostrardivmensajeserrordebajo('descrip_interp_programa','KO_descrip_interp_programa_tam_min');

            //salir ejecucion con false
            return false;
        }

        if (validacionesatomicas.size_maximo('descrip_interp_programa',5000)){
        }
        else{
            //modificacion parametros texto error
            DOM_class.mostrardivmensajeserrordebajo('descrip_interp_programa','KO_descrip_interp_programa_tam_max');

            //salir ejecucion con false
            return false;
        }
        if(validacionesatomicas.casi_todo('descrip_interp_programa')){            
        }else{
            DOM_class.mostrardivmensajeserrordebajo('descrip_interp_programa','KO_descrip_interp_programa_formato');
            return false;
        }

        DOM_class.mostrarexitovalor('descrip_interp_programa');
        return true;

    }

    static comprobar_descrip_interp_programa_SEARCH(){

        if (validacionesatomicas.size_maximo('descrip_interp_programa',5000)){
        }
        else{
            //modificacion parametros texto error
            DOM_class.mostrardivmensajeserrordebajo('descrip_interp_programa','KO_descrip_interp_programa_tam_max');

            //salir ejecucion con false
            return false;
        }
        if(validacionesatomicas.casi_todo_search('descrip_interp_programa')){            
        }else{
            DOM_class.mostrardivmensajeserrordebajo('descrip_interp_programa','KO_descrip_interp_programa_formato');
            return false;
        }
        
        DOM_class.mostrarexitovalor('descrip_interp_programa');
        return true;

    }

     //COMPROBACIONES PARA ENLACE_PROGRAMA

     static comprobar_enlace_programa(){
        if (validacionesatomicas.size_minimo('enlace_programa',10)){
        }
        else{
            //modificacion parametros texto error
            DOM_class.mostrardivmensajeserrordebajo('enlace_programa','KO_enlace_programa_tam_min');

            //salir ejecucion con false
            return false;
        }

        if (validacionesatomicas.size_maximo('enlace_programa',100)){
        }
        else{
            //modificacion parametros texto error
            DOM_class.mostrardivmensajeserrordebajo('enlace_programa','KO_enlace_programa_tam_max');

            //salir ejecucion con false
            return false;
        }
        if(validacionesatomicas.enlace_programa_validacion('enlace_programa')){            
        }else{
            DOM_class.mostrardivmensajeserrordebajo('enlace_programa','KO_enlace_programa_formato');
            return false;
        }

        DOM_class.mostrarexitovalor('enlace_programa');
        return true;

    }
    
    static comprobar_enlace_programa_SEARCH(){

        if (validacionesatomicas.size_maximo('enlace_programa',100)){
        }
        else{
            //modificacion parametros texto error
            DOM_class.mostrardivmensajeserrordebajo('enlace_programa','KO_enlace_programa_tam_max');

            //salir ejecucion con false
            return false;
        }
        if(validacionesatomicas.enlace_programa_validacion_search('enlace_programa')){            
        }else{
            DOM_class.mostrardivmensajeserrordebajo('enlace_programa','KO_enlace_programa_formato');
            return false;
        }
        
        DOM_class.mostrarexitovalor('enlace_programa');
        return true;

    }



    //COMPROBACIONES PARA FORMATO_PROGRAMA 

    static comprobar_formato_programa(){


        if(validacionesatomicas.validarSelect("formato_programa")){            
        }else{
            DOM_class.mostrardivmensajeserrordebajo('formato_programa','KO_formato_programa_select');
            return false;
        }

        if(document.getElementById('formato_programa').value != 'PAPEL'
         &&  document.getElementById('formato_programa').value != 'ELECTRÓNICO' 
         &&  document.getElementById('formato_programa').value != 'PAPEL Y ELECTRÓNICO'){
            DOM_class.mostrardivmensajeserrordebajo('formato_programa','KO_formato_programa');
            return false;
        }

        DOM_class.mostrarexitovalor('formato_programa');
        return true;

    }

    static comprobar_formato_programa_SEARCH(){
        
        DOM_class.mostrarexitovalor('formato_programa');
        return true;

    }


    
    //COMPROBACIONES PARA MODO_CORRECCION_PROGRAMA 

    static comprobar_modo_correccion_programa(){


        if(validacionesatomicas.validarSelect("modo_correccion_programa")){            
        }else{
            DOM_class.mostrardivmensajeserrordebajo('modo_correccion_programa','KO_modo_correccion_programa_select');
            return false;
        }

        if(document.getElementById('modo_correccion_programa').value != 'PAPEL'
         &&  document.getElementById('modo_correccion_programa').value != 'ELECTRÓNICO' 
         &&  document.getElementById('modo_correccion_programa').value != 'PAPEL Y ELECTRÓNICO'){
            DOM_class.mostrardivmensajeserrordebajo('modo_correccion_programa','KO_modo_correccion_programa');
            return false;
        }

        DOM_class.mostrarexitovalor('modo_correccion_programa');
        return true;

    }

    static comprobar_modo_correccion_programa_SEARCH(){
        
        
        DOM_class.mostrarexitovalor('modo_correccion_programa');
        return true;

    }

    //COMPROBACIONES PARA MODO_APLICACION_PROGRAMA 

    static comprobar_modo_aplicacion_programa(){

        if(validacionesatomicas.validarSelect("modo_aplicacion_programa")){            
        }else{
            DOM_class.mostrardivmensajeserrordebajo('modo_aplicacion_programa','KO_modo_aplicacion_programa_select');
            return false;
        }
        if(document.getElementById('modo_aplicacion_programa').value != 'INDIVIDUAL'
         &&  document.getElementById('modo_aplicacion_programa').value != 'COLECTIVO' 
         &&  document.getElementById('modo_aplicacion_programa').value != 'INDIVIDUAL Y COLECTIVO'){
            DOM_class.mostrardivmensajeserrordebajo('modo_aplicacion_programa','KO_modo_aplicacion_programa');
            return false;
        }

        DOM_class.mostrarexitovalor('modo_aplicacion_programa');
        return true;

    }

    static comprobar_modo_aplicacion_programa_SEARCH(){
        
        
        DOM_class.mostrarexitovalor('modo_aplicacion_programa');
        return true;

    }

    //COMPROBACIONES PARA IMAGEN_PROGRAMA

    //COMPROBACIONES IMAGEN_PROGRAMA
static comprobar_nuevo_imagen_programa(){

    var etiqueta = document.querySelector(".class_contenido_titulo_form").className;
        var accion = etiqueta.split("_");
        if (accion[5] == 'EDIT') {
            if (validacionesatomicas.comprobarVacio("nuevo_imagen_programa")) {
            } else {
                DOM_class.mostrarexitovalor('nuevo_imagen_programa');
                return true;
            } 
        }else if (accion[5] == 'ADD') {
            if (validacionesatomicas.comprobarVacio("nuevo_imagen_programa")) {
            } else {
                DOM_class.mostrardivmensajeserrordebajo("nuevo_imagen_programa", "KO_nueva_imagen_programa_vacio");
                return false;
            }
        }else if (accion[5] == 'DELETE') {                        
                return true;                   
        }  
   

    if(validacionesatomicas.size_minimo_fichero("nuevo_imagen_programa",7)){        
    }else{
        DOM_class.mostrardivmensajeserrordebajo("nuevo_imagen_programa","KO_nueva_imagen_programa_tam_min");
        return false;
    }


    if(validacionesatomicas.size_maximo_fichero("nuevo_imagen_programa",60)){        
    }else{
        DOM_class.mostrardivmensajeserrordebajo("nuevo_imagen_programa","KO_nueva_imagen_programa_tam_max");
        return false;
    }

    

    if(validacionesatomicas.verificar_fichero_alfabeticos_sin_acentos("nuevo_imagen_programa")){        
    }else{
        DOM_class.mostrardivmensajeserrordebajo("nuevo_imagen_programa","KO_nueva_imagen_programa_formato");
        return false;
    }
    if(validacionesatomicas.comprobarTamañoArchivo("nuevo_imagen_programa",20000)){        
    }else{
        DOM_class.mostrardivmensajeserrordebajo("nuevo_imagen_programa","KO_nueva_imagen_programa_tamaño");
        return false;
    }
    

    if(validacionesatomicas.verificarFormatoArchivo("nuevo_imagen_programa")){        
    }else{
        DOM_class.mostrardivmensajeserrordebajo("nuevo_imagen_programa","KO_nueva_imagen_programa_extension");
        return false;
    }

    DOM_class.mostrarexitovalor('nuevo_imagen_programa');
    return true;
}



static comprobar_nuevo_imagen_programa_SEARCH(){
    if(validacionesatomicas.size_maximo("imagen_programa",50)){        
    }else{
        DOM_class.mostrardivmensajeserrordebajo("nuevo_imagen_programa","KO_nueva_imagen_programa_tam_max");
        return false;
    }

    

    if(validacionesatomicas.solo_alfabeticos_sin_acentos_search("imagen_programa")){        
    }else{
        DOM_class.mostrardivmensajeserrordebajo("nuevo_imagen_programa","KO_nueva_imagen_programa_formato");
        return false;
    }
    

    DOM_class.mostrarexitovalor('nuevo_imagen_programa');
    return true;
}

//COMPROBACIONES PARA FICHERO_PROGRAMA

static comprobar_nuevo_fichero_programa() { 

    var etiqueta = document.querySelector(".class_contenido_titulo_form").className;
        var accion = etiqueta.split("_");
        if (accion[5] == 'EDIT') {
            if (validacionesatomicas.comprobarVacio("nuevo_fichero_programa")) {
            } else {
                DOM_class.mostrarexitovalor('nuevo_fichero_programa');
                return true;
            } 
        }else if (accion[5] == 'ADD') {
            if (validacionesatomicas.comprobarVacio("nuevo_fichero_programa")) {
            } else {
                DOM_class.mostrardivmensajeserrordebajo("nuevo_fichero_programa", "KO_nueva_fichero_programa_vacio");
                return false;
            }
        }else if (accion[5] == 'DELETE') {                        
                return true;                   
        }  
    
    
    if(validacionesatomicas.size_minimo_fichero("nuevo_fichero_programa",7)){        
    }else{
        DOM_class.mostrardivmensajeserrordebajo("nuevo_fichero_programa","KO_nueva_fichero_programa_tam_min");
        return false;
    }


    if(validacionesatomicas.size_maximo_fichero("nuevo_fichero_programa",60)){        
    }else{
        DOM_class.mostrardivmensajeserrordebajo("nuevo_fichero_programa","KO_nueva_fichero_programa_tam_max");
        return false;
    }

    

    if(validacionesatomicas.verificar_fichero_alfabeticos_sin_acentos("nuevo_fichero_programa")){        
    }else{
        DOM_class.mostrardivmensajeserrordebajo("nuevo_fichero_programa","KO_nueva_fichero_programa_formato");
        return false;
    }
    if(validacionesatomicas.comprobarTamañoArchivo("nuevo_fichero_programa",2000000)){        
    }else{
        DOM_class.mostrardivmensajeserrordebajo("nuevo_fichero_programa","KO_nueva_fichero_programa_tamaño");
        return false;
    }
    

    if(validacionesatomicas.verificarFormatoArchivo2("nuevo_fichero_programa")){        
    }else{
        DOM_class.mostrardivmensajeserrordebajo("nuevo_fichero_programa","KO_nueva_fichero_programa_extension");
        return false;
    }

    DOM_class.mostrarexitovalor('nuevo_fichero_programa');
    return true;
}






static comprobar_nuevo_fichero_programa_SEARCH(){
    if(validacionesatomicas.size_maximo("fichero_programa",50)){        
    }else{
        DOM_class.mostrardivmensajeserrordebajo("nuevo_fichero_programa","KO_nueva_fichero_programa_tam_max");
        return false;
    }

    

    if(validacionesatomicas.solo_alfabeticos_sin_acentos_search("fichero_programa")){        
    }else{
        DOM_class.mostrardivmensajeserrordebajo("nuevo_fichero_programa","KO_nueva_ifichero_programa_formato");
        return false;
    }
    

    DOM_class.mostrarexitovalor('nuevo_fichero_programa');
    return true;
}



    static recargarform(){

        document.getElementById("IU_form").innerHTML= '';

        document.getElementById("IU_form").innerHTML=`

        <label class="id_programa">ID</label>
        </label>
        <input type='text' id='id_programa' name='id_programa'></input>
        <div id="div_error_id_programa" class="errorcampo"><a id="error_id_programa"></a></div>
        <br>
        <script>document.querySelector('.id_programa').innerHTML=traduccion['id_programa'];</script><script>document.querySelector('.id_programa').innerHTML=traduccion['id_programa'];</script>
        
        <label class="nombre_programa">Nombre del programa</label>
        </label>
        <input type='text' id='nombre_programa' name='nombre_programa'></input>
        <div id="div_error_nombre_programa" class="errorcampo"><a id="error_nombre_programa"></a></div>
        <script>document.querySelector('.nombre_programa').innerHTML=traduccion['nombre_programa'];</script>
        <br>
        
        
        <label class="acronimo_programa">Acrónimo del programa</label>
        <input type='text' id='acronimo_programa' name='acronimo_programa'></input>
        <div id="div_error_acronimo_programa" class="errorcampo"><a id="error_acronimo_programa"></a></div>
        <script>document.querySelector('.acronimo_programa').innerHTML=traduccion['acronimo_programa'];</script>
        <br>
        
        <label class="nombre_original_programa">Nombre original del programa</label>
        <input type='text' id='nombre_original_programa' name='nombre_original_programa'></input>
        <div id="div_error_nombre_original_programa" class="errorcampo"><a id="error_nombre_original_programa"></a></div>
        <script>document.querySelector('.nombre_original_programa').innerHTML=traduccion['nombre_original_programa'];</script>
        <br>
        
        <label class="autor_programa">Autor del programa</label>
        <input type='text' id='autor_programa' name='autor_programa'></input>
        <div id="div_error_autor_programa" class="errorcampo"><a id="error_autor_programa"></a></div>
        <script>document.querySelector('.autor_programa').innerHTML=traduccion['autor_programa'];</script>				
        <br>


        <label class="autor_original_programa">Autor programa</label>
        <input type='text' id='autor_original_programa' name='autor_original_programa'></input>
        <div id="div_error_autor_original_programa" class="errorcampo"><a id="error_autor_original_programa"></a></div>
        <script>document.querySelector('.autor_original_programa').innerHTML=traduccion['autor_original_programa'];</script>
        <br>

        <label class="ano_programa">Año del programa</label>
        <input type='text' id='ano_programa' name='ano_programa'></input>
        <div id="div_error_ano_programa" class="errorcampo"><a id="error_ano_programa"></a></div>
        <script>document.querySelector('.ano_programa').innerHTML=traduccion['ano_programa'];</script>				
        <br>

        <label class="ano_original_programa">Año original del programa</label>
        <input type='text' id='ano_original_programa' name='ano_original_programa'></input>
        <div id="div_error_ano_original_programa" class="errorcampo"><a id="error_ano_original_programa"></a></div>
        <script>document.querySelector('.ano_original_programa').innerHTML=traduccion['ano_original_programa'];</script>
        <br>

        <label class="requisitos_programa">Requisitos</label>
        <input type='text' id='requisitos_programa' name='requisitos_programa'></input>
        <div id="div_error_requisitos_programa" class="errorcampo"><a id="error_requisitos_programa"></a></div>
        <script>document.querySelector('.requisitos_programa').innerHTML=traduccion['requisitos_programa'];</script>
        <br>

        <label class="poblacion_desde_programa">Poblacion desde programa</label>
        <input type='text' id='poblacion_desde_programa' name='poblacion_desde_programa'></input>
        <div id="div_error_poblacion_desde_programa" class="errorcampo"><a id="error_poblacion_desde_programa"></a></div>
        <script>document.querySelector('.poblacion_desde_programa').innerHTML=traduccion['poblacion_desde_programa'];</script>
        <br>

        <label class="poblacion_hasta_programa">Poblacion hasta programa</label>
        <input type='text' id='poblacion_hasta_programa' name='poblacion_hasta_programa'></input>
        <div id="div_error_poblacion_hasta_programa" class="errorcampo"><a id="error_poblacion_hasta_programa"></a></div>
        <script>document.querySelector('.poblacion_hasta_programa').innerHTML=traduccion['poblacion_hasta_programa'];</script>
        <br>

        <label class="unidad_poblacion">Unidad de población</label>
        <select id="unidad_poblacion" name="unidad_poblacion">
        <option value="" ></option>
        <option value="MESES" >MESES</option>
        <option value="AÑOS" >AÑOS</option>
        </select>
        <div id="div_error_unidad_poblacion" class="errorcampo"><a id="error_unidad_poblacion"></a></div>
        <script>document.querySelector('.unidad_poblacion').innerHTML=traduccion['unidad_poblacion'];</script>
        <br>

        <label class="tipo_programa">Tipo del programa</label>
        <select id="tipo_programa" name="tipo_programa">
        <option value="" ></option>
        <option value="EVALUACIÓN" >EVALUACIÓN</option>
        <option value="INTERVENCIÓN" >INTERVENCIÓN</option>
        <option value="EVALUACIÓN E INTERVENCIÓN" >EVALUACIÓN E INTERVENCIÓN</option>
        </select>
        <div id="div_error_tipo_programa" class="errorcampo"><a id="error_tipo_programa"></a></div>
        <script>document.querySelector('.tipo_programa').innerHTML=traduccion['tipo_programa'];</script>
        <br>

        <label class="tiempo_aplicacion_programa">Tiempo del programa</label>
        <input type='text' id='tiempo_aplicacion_programa' name='tiempo_aplicacion_programa'></input>
        <div id="div_error_tiempo_aplicacion_programa" class="errorcampo"><a id="error_tiempo_aplicacion_programa"></a></div>
        <script>document.querySelector('.tiempo_aplicacion_programa').innerHTML=traduccion['tiempo_aplicacion_programa'];</script>
        <br>

        

        <br>
        <label class="descrip_interp_programa">Descripcion Programa</label>
        <!--<input type='text' id='descrip_interp_programa' name='descrip_interp_programa'></input>-->
        <textarea rows="5" cols="33" type='text' id='descrip_interp_programa' name='descrip_interp_programa'></textarea>
        <div id="div_error_descrip_interp_programa" class="errorcampo"><a id="error_descrip_interp_programa"></a></div>
        <script>document.querySelector('.descrip_interp_programa').innerHTML=traduccion['descrip_interp_programa'];</script>
        <br>

        <label id="label_fichero_programa" class="label_fichero_programa">fichero</label>
        <input type='text' id='fichero_programa' name='fichero_programa'></input>
        <a id="link_fichero_programa" href="http://193.147.87.202/ET2/filesuploaded/files_fichero_programa/"><img src="./iconos/FILE.png" /></a>
        <label id="label_nuevo_fichero_programa" class="label_nuevo_fichero_programa">Nueva fichero_programa</label>
        <input type='file' id='nuevo_fichero_programa' name='nuevo_fichero_programa'></input>
        <div id="div_error_nuevo_fichero_programa" class="errorcampo"><a id="error_nuevo_fichero_programa"></a></div>
        <br>

        <br>

        <label class="enlace_programa">Enlace del programa</label>
        <input type='text' id='enlace_programa' name='enlace_programa'></input>
        <div id="div_error_enlace_programa" class="errorcampo"><a id="error_enlace_programa"></a></div>       
        <script>document.querySelector('.enlace_programa').innerHTML=traduccion['enlace_programa'];</script>
        <br>

        <label class="formato_programa">Formato del programa</label>
        <select id="formato_programa" name="formato_programa">
        <option value="" ></option>
        <option value="PAPEL" >PAPEL</option>
        <option value="ELECTRÓNICO" >ELECTRÓNICO</option>
        <option value="PAPEL Y ELECTRÓNICO" >PAPEL Y ELECTRÓNICO</option>
        </select>
        <div id="div_error_formato_programa" class="errorcampo"><a id="error_formato_programa"></a></div>
        <script>document.querySelector('.formato_programa').innerHTML=traduccion['formato_programa'];</script>
        <br>

        <label class="modo_correccion_programa">Modo de correccion</label>
        <select id="modo_correccion_programa" name="modo_correccion_programa">
        <option value="" ></option>
        <option value="PAPEL" >PAPEL</option>
        <option value="ELECTRÓNICO" >ELECTRÓNICO</option>
        <option value="PAPEL Y ELECTRÓNICO" >PAPEL Y ELECTRÓNICO</option>
        </select>
        <div id="div_error_modo_correccion_programa" class="errorcampo"><a id="error_modo_correccion_programa"></a></div>
        <script>document.querySelector('.modo_correccion_programa').innerHTML=traduccion['modo_correccion_programa'];</script>
        <br>

        <label class="modo_aplicacion_programa">Modo de aplicacion</label>
        <select id="modo_aplicacion_programa" name="modo_aplicacion_programa">
        <option value="" ></option>
        <option value="INDIVIDUAL" >INDIVIDUAL</option>
        <option value="COLECTIVO" >COLECTIVO</option>
        <option value="INDIVIDUAL Y COLECTIVO" >INDIVIDUAL Y COLECTIVO</option>
        </select>
        <div id="div_error_modo_aplicacion_programa" class="errorcampo"><a id="error_modo_aplicacion_programa"></a></div>
        <script>document.querySelector('.modo_aplicacion_programa').innerHTML=traduccion['modo_aplicacion_programa'];</script>
        <br>

        <label id="label_imagen_programa" class="label_imagen_programa">fichero</label>
        <input type='text' id='imagen_programa' name='imagen_programa'></input>
        <a id="link_imagen_programa" href="http://193.147.87.202/ET2/filesuploaded/files_imagen_programa/"><img src="./iconos/FILE.png" /></a>
        <label id="label_nuevo_imagen_programa" class="label_nuevo_imagen_programa">Nueva imagen_programa</label>
        <input type='file' id='nuevo_imagen_programa' name='nuevo_imagen_programa'></input>
        <div id="div_error_nuevo_imagen_programa" class="errorcampo"><a id="error_nuevo_imagen_programa"></a></div>
        <br>
                
        
        `;

        //obtener campos del formulario
        let campos = document.forms['IU_form'].elements;
        //recorrer todos los campos
        for (let i=0;i<campos.length;i++) {
            if (eval(document.getElementById('div_error_'+campos[i].id))){
                document.getElementById('div_error_'+campos[i].id).style.display = 'none';
            }
        }

       
    }

    

}