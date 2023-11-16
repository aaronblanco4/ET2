let textos_ES={

   
   

     // mensajes BACK
    // ---------------------------------
    'SQL_OK':'',
    'SQL_KO':'',    
    //'ERROR_UPLOAD_ATRIBUTO_KO':'', significa que un atributo de tipo file no cumple condiciones de extension o tamaño, viene descrito en el resource
    'ERROR_UPLOAD_foto_programa_KO':'La foto de programa debe tener extension jpg o jpeg y tamaño menor de 200000',
    'controlador_invalido':'',
    'action_invalido':'',



     // atributos programa
     'id_publicacion':'ID publicación',
     'autor_publicacion':'Autor publicación',
     'titulo_publicacion':'Titulo publicación',
     'fecha_publicacion':'Fecha publicación',
     'area_publicacion':'Area publicación',
     'texto_publicacion':'Texto publicación',
     'imagen_publicacion':'Imagen_publicacion',
     'label_nuevo_imagen_publicacion':'Introduzca Nueva imagen : ',
     'label_nuevo_fichero_programa':'Introduzca Nuevo fichero : ',
     'label_nuevo_imagen_programa':'Introduzca Nueva imagen : ',


    // atributos programa
    'id_programa':'ID programa',
    'nombre_programa':'Nombre programa',
    'acronimo_programa':'Acrónimo Programa',
    'nombre_original_programa':'Nombre Original del programa',
    'autor_programa':'Autor del programa',
    'autor_original_programa':'Autor original del programa',
    'ano_programa':'Año del programa',
    'ano_original_programa':'Año original del programa',
    'requisitos_programa':'Requisitos del programa',
    'poblacion_desde_programa':'Poblacion desde el programa',
    'poblacion_hasta_programa':'Población hasta el programa',
    'unidad_poblacion':'Unidad de la población', 
    'tipo_programa':'Tipo de programa',
    'formato_programa':'Formato del programa',
    'modo_correccion_programa':'Modo de corrección',   
    'modo_aplicacion_programa':'Modo de aplicación',    
    'fichero_programa':'Fichero del programa',
    'imagen_programa':'Imagen del programa',
    


    // acciones

    "ADD":"Añadir",
    "titulo_form_ADD_programa":"Incorporar un programa",
    "titulo_form_EDIT_programa":"Modicar programa",
    "titulo_form_DELETE_programa":"Confirmar borrar una programa",
    "titulo_form_SEARCH_programa":"Buscar un programa",
    "titulo_form_SHOWCURRENT_programa":"mostrar atributos",

    "titulo_form_ADD_publicacion":"Incorporar un publicacion",
    "titulo_form_EDIT_publicacion":"Modicar publicacion",
    "titulo_form_DELETE_publicacion":"Confirmar borrar una publicacion",
    "titulo_form_SEARCH_publicacion":"Buscar un publicacion",
    "titulo_form_SHOWCURRENT_publicacion":"mostrar atributos",

    // general pagina
    "titulo_pagina_programa":"Gestión de Progamas",

    "KO_id_programa_tam_min":"El tamaño de Id programa tiene que ser entre 1 y 6 ",
    "KO_id_programa_tam_max":" El tamaño deId programa tiene que ser entre 1 y 6 ",
    "KO_id_programa_solo_digitos":"Id programa solo puede contener digitos",
    
    "KO_nombre_programa_tam_min":"El tamaño de nombre programa tiene que ser entre 6 y 60 ",
    "KO_nombre_programa_tam_max":"El tamaño de nombre programa tiene que ser entre 60 y 60 ",
    "KO_nombre_programa_formato":"nombre programa solo puede tener alfabéticos con acentos, ñ y espacios",

    "KO_acronimo_programa_tam_min":"El tamaño de Acronimo programa tiene que ser entre 3 y 20 ",
    "KO_acronimo_programa_tam_max":" El tamaño de Acronimo programa tiene que ser entre 3 y 20 ",
    "KO_acronimo_programa_formato":"Acronimo programa solo puede tener alfabéticos sin acentos",

    "KO_autor_programa_tam_min":"El tamaño de Autor programa tiene que ser entre 6 y 50 ",
    "KO_autor_programa_tam_max":"El tamaño deAutor programa tiene que ser entre 6 y 50 ",
    "KO_autor_programa_formato":"autor programa solo puede tener alfabéticos con acentos, ñ y espacios",

    "KO_autor_original_programa_tam_min":"El tamaño de Autor original programa tiene que ser entre 6 y 50 ",
    "KO_autor_original_programa_tam_max":"El tamaño de Autor original programa tiene que ser entre 6 y 50 ",
    "KO_autor_original_programa_formato":"Autor original programa solo puede tener alfabéticos con acentos, ñ y espacios",

    "KO_nombre_original_programa_tam_min":"El tamaño de Nombre original programa tiene que ser entre 6 y 60 ",
    "KO_nombre_original_programa_tam_max":"El tamaño de Nombre original programa tiene que ser entre 6 y 60 ",
    "KO_nombre_original_programa_formato":"nombre original programa solo puede tener alfabéticos con acentos, ñ y espacios",

    "KO_ano_programa_tam_min":"El tamaño de Año  programa tiene que ser exactamente 4 ",
    "KO_ano_programa_tam_max":"El tamaño de Año  programa tiene que ser exactamente 4 ",
    "KO_ano_programa_solo_digitos":"Año programa solo pueden ser digitos",
    "KO_ano_programa_menor_actual":"Año programa tiene que ser menor que el año actual",

    "KO_ano_original_programa_tam_min":"El tamaño de Año original programa tiene que ser exactamente 4 ",
    "KO_ano_original_programa_tam_max":"El tamaño de Año original programa tiene que ser exactamente 4 ",
    "KO_ano_original_programa_solo_digitos":"Año original programa solo pueden ser digitos",
    "KO_ano_original_programa_menor_actual":"Año original programa tiene que ser menor que el año actual",

    "KO_requisitos_programa_tam_min":"El tamaño de Requisitos programa  tiene que ser entre 6 y 300 ",
    "KO_requisitos_programa_tam_max":"El tamaño de Requisitos programa  tiene que ser entre 6 y 300 ",
    "KO_requisitos_programa_formato":"Requisitos programa solo puede tener alfabéticos con acentos, ñ,espacios y signos de puntuación",

    "KO_poblacion_desde_programa_tam_min":"El tamaño de Población desde programa  tiene que ser entre 1 y 2 ",
    "KO_poblacion_desde_programa_tam_max":"El tamaño de Población desde  programa  tiene que ser entre 1 y 2 ",
    "KO_poblacion_desde_programa_solo_digitos":"Población desde programa  solo pueden ser digitos",

    "KO_poblacion_hasta_programa_tam_min":"El tamaño de Población hasta programa tiene que ser entre 1 y 2",
    "KO_poblacion_hasta_programa_tam_max":"El tamaño de Población hasta programa tiene que ser entre 1 y 2",
    "KO_poblacion_hasta_programa_solo_digitos":"Población hasta programa  solo pueden ser digitos",

    "KO_unidad_poblacion":"solo valores 'MESES','AÑOS'",
    "KO_unidad_poblacion_select":"Tienes que seleccionar un valor",

    "KO_tipo_programa":"solo valores 'EVALUACIÓN' , 'INTERVENCIÓN' , 'EVALUACIÓN E INTERVENCIÓN'",
    "KO_tipo_programa_select":"Tienes que seleccionar un valor",

    "KO_tiempo_aplicacion_programa_tam_min":"El tamaño de Tiempo aplicacion  programa tiene que ser entre 1 y 4",
    "KO_tiempo_aplicacion_programa_tam_max":"El tamaño de Tiempo aplicacion  programa tiene que ser entre 1 y 4",
    "KO_tiempo_aplicacion_programa_solo_digitos":"Tiempo aplicacion programa  solo pueden ser digitos",

    "KO_descrip_interp_programa_tam_min":"El tamaño de Descricion programa tiene que ser entre 100 y 5000",
    "KO_descrip_interp_programa_tam_max":"El tamaño de Descripción programa tiene que ser entre 100 y 5000",
    "KO_descrip_interp_programa_formato":"Descripción puede llevar alfabéticos con acentos, ñ, espacios, signos de puntuación y retornos de carro",
   
    
    "KO_enlace_programa_tam_min":"El tamaño de Enlace programa tiene que ser entre 10 y 100",
    "KO_enlace_programa_tam_max":"El tamaño de Enlace programa tiene que ser entre 10 y 100",
    "KO_enlace_programa_formato":"Enlace puede llevar alfabéticos y : y / y . sin acentos ni ñ ni espacios",
   
    "KO_formato_programa":"solo valores 'PAPEL', 'ELECTRÓNICO','PAPEL Y ELECTRÓNICO'",
    "KO_formato_programa_select":"Tienes que seleccionar un valor",

    "KO_modo_correccion_programa":"solo valores 'PAPEL', 'ELECTRÓNICO','PAPEL Y ELECTRÓNICO'",
    "KO_modo_correccion_programa_select":"Tienes que seleccionar un valor",

    "KO_modo_aplicacion_programa":"solo valores'INDIVIDUAL','COLECTIVO','INDIVIDUAL Y COLECTIVO'",
    "KO_modo_aplicacion_programa_select":"Tienes que seleccionar un valor",

    "KO_nueva_fichero_programa_tam_min":"El tamaño de fichero programa tiene que ser entre 7 y 60",
    "KO_nueva_fichero_programa_tam_max":"El tamaño de fichero programa tiene que ser entre 7 y 60",
    "KO_nueva_fichero_programa_formato":"fichero programa solo puede tener alfabéticos sin acentos",
    "KO_nueva_fichero_programa_extension":"fichero programa solo puede ser pdf, doc o docx",
    "KO_nueva_fichero_programa_tamaño":"Fichero programa tiene que ser menor de 2000000 bytes",
    "KO_nueva_fichero_programa_vacio":"Fichero programa no puede estar vacio",

    "KO_nueva_imagen_programa_tam_min":"El tamaño de Imagen programa tiene que ser entre 7 y 60",
    "KO_nueva_imagen_programa_tam_max":"El tamaño de Imagen programa tiene que ser entre 7 y 60",
    "KO_nueva_imagen_programa_formato":"Imagen programa solo puede tener alfabéticos sin acentos",
    "KO_nueva_imagen_programa_extension":"Imagen programa solo puede ser jpg o jpeg",
    "KO_nueva_imagen_programa_tamaño":"Imagen programa tiene que ser menor de 20000 bytes",
    "KO_nueva_imagen_programa_vacio":"Imagen programa no puede estar vacio",
    // mensajes accion
    "ano_programa_KO":"Debe indicarse un año",


    // general pagina
    "titulo_pagina_publicacion":"Gestión de Publicacion",

    "KO_id_publicacion_tam_min":"El tamaño de Id publicacion tiene que ser entre 1 y 6",
    "KO_id_publicacion_tam_max":"El tamaño de Id publicacion tiene que ser entre 1 y 6",
    "KO_id_publicacion_solo_digitos":"Id publicacion solo pueden ser digitos",

    "KO_titulo_publicacion_tam_min":"El tamaño de Titulo publicacion tiene que ser entre 6 y 80",
    "KO_titulo_publicacion_tam_max":"El tamaño de Titulo publicacion tiene que ser entre 6 y 80",
    "KO_titulo_publicacion_formato":"Titulo publicacion solo pueden ser alfabéticos con acentos, ñ y espacios",

    "KO_autor_publicacion_tam_min":"El tamaño de Autor publicacion tiene que ser entre 6 y 40",
    "KO_autor_publicacion_tam_max":"El tamaño de Autor publicacion tiene que ser entre 6 y 40",
    "KO_autor_publicacion_formato":"Autor publicacion solo pueden ser alfabéticos con acentos, ñ y espacios",

    "KO_area_publicacion_tam_min":"El tamaño de Area publicacion tiene que ser entre 1 y 6",
    "KO_area_publicacion_tam_max":"El tamaño de Area publicacion tiene que ser entre 1 y 6",
    "KO_area_publicacion_formato":"Area publicacion solo pueden ser dígitos",

    "KO_texto_publicacion_tam_min":"El tamaño de Texto publicacion tiene que ser entre 30 y 8000",
    "KO_texto_publicacion_tam_max":"El tamaño de Texto publicacion tiene que ser entre 30 y 8000",
    "KO_texto_publicacion_formato":"Texto publicacion solo pueden ser caracteres del código ASCII",

    "KO_fecha_publicacion_fechapasada":"Fecha publicación debe ser presente o futuro",

    "KO_nueva_imagen_publicacion_tam_min":"El tamaño de Imagen publicacion tiene que ser entre 7 y 50",
    "KO_nueva_imagen_publicacion_tam_max":"El tamaño de Imagen publicacion tiene que ser entre 7 y 50",
    "KO_nueva_imagen_publicacion_formato":"Imagen publicacion solo puede tener alfabéticos sin acentos",
    "KO_nueva_imagen_publicacion_extension":"Imagen publicacion solo puede ser jpg o jpeg",
    "KO_nueva_imagen_publicacion_tamaño":"Imagen publicacion tiene que ser menor de 20000 bytes",
    "KO_nueva_imagen_publicacion_vacio":"Imagen publicacion no puede estar vacio",

};

