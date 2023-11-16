var def_test = Array(
   
    
        //básicas de id_programa
    Array('programa','id_programa','1','tamaño < 1',false,'El tamaño de id_programa no puede ser menor de 1'),
    Array('programa','id_programa','2','tamaño > 6',false,'El tamaño de id_programa no puede ser mayor de 6'),
    Array('programa','id_programa','3','no dígitos', false,'id_programa solo puede estar formado por dígitos'),
    Array('programa','id_programa','4','dígitos', true, 'Éxito'),




    //básicas de nombre_programa
   Array('programa','nombre_programa','5',"tamaño < 6",false,"El tamaño de nombre_programa no puede ser menor de 6"),
   Array('programa','nombre_programa','6',"tamaño > 60",false,"El tamaño de nombre_programa no puede ser mayor de 60"),
   Array('programa','nombre_programa','7',"no alfabéticos o no alfabético con acento o no ñ o no espacio", false, "nombre_programa contiene caracteres no permitidos (solo alfabéticos con o sin acento, ñ o espacios)"),
   Array('programa','nombre_programa','8',"alfabéticos con acentos, ñ y espacios min", true, "Éxito"),
   
  

  
    //básicas de acronimo_programa
   Array('programa','acronimo_programa','9',"tamaño < 3",false,"El tamaño de acronimo_programa no puede ser menor de 3"),
   Array('programa','acronimo_programa','10',"tamaño > 20",false,"El tamaño de acronimo_programa no puede ser mayor de 20"),
   Array('programa','acronimo_programa','11',"no alfabéticos o con alfabéticos con acento o con espacios", false, "acronimo_programa contiene caracteres no permitidos (solo alfabéticos sin acentos ni espacios)"),
   Array('programa','acronimo_programa','12',"alfabéticos sin acentos ni espacios", true, "Éxito"),
   
   
    //básicas de nombre_original_programa
   Array('programa','nombre_original_programa','13',"tamaño < 6",false,"El tamaño de nombre_original_programa no puede ser menor de 6"),
   Array('programa','nombre_original_programa','14',"tamaño > 60",false,"El tamaño de nombre_original_programa no puede ser mayor de 60"),
   Array('programa','nombre_original_programa','15',"no alfabéticos o con ñ o con espacios", false, "nombre_original_programa contiene caracteres no permitidos (solo alfabéticos con o sin acentos, ñ y espacios)"),
   Array('programa','nombre_original_programa','16',"alfabéticos con acentos, ñ y espacios", true, "Éxito"),
   
  
    //básicas de autor_programa
   Array('programa','autor_programa','17',"tamaño < 6",false,"El tamaño de autor_programa no puede ser menor de 6"),
   Array('programa','autor_programa','18',"tamaño > 50",false,"El tamaño de autor_programa no puede ser mayor de 50"),
   Array('programa','autor_programa','19',"no alfabéticos o con ñ o con espacios", false, "autor_programa contiene caracteres no permitidos (solo alfabéticos con o sin acentos, ñ y espacios)"),
   Array('programa','autor_programa','20',"alfabéticos con acentos, ñ y espacios", true, "Éxito"),
   
   
    //básicas de autor_original_programa
   Array('programa','autor_original_programa','21',"tamaño < 6",false,"El tamaño de autor_original_programa no puede ser menor de 6"),
   Array('programa','autor_original_programa','22',"tamaño > 50",false,"El tamaño de autor_original_programa no puede ser mayor de 50"),
   Array('programa','autor_original_programa','23',"no alfabéticos o con ñ o con espacios", false, "autor_original_programa contiene caracteres no permitidos (solo alfabéticos con o sin acentos, ñ y espacios)"),
   Array('programa','autor_original_programa','24',"alfabéticos con acentos, ñ y espacios", true, "Éxito"),
   
   
    //básicas de ano_programa
   Array('programa','ano_programa','25',"tamaño!=4",false,"El tamaño de ano_programa no puede ser distinto de 4"),
   Array('programa','ano_programa','26',"no dígitos", false, "ano_programa solo puede estar formado por dígitos"),
   Array('programa','ano_programa','27',"ano mayor que ano_actual", false, "El año introducido no puede ser superior al año actual"),
   Array('programa','ano_programa','28',"4 dígitos y año no superior actual", true, "Éxito"),
   
   
    //básicas de ano_original_programa
   Array('programa','ano_original_programa','29',"tamaño!=4",false,"El tamaño de ano_original_programa no puede ser distinto de 4"),
   Array('programa','ano_original_programa','30',"no dígitos", false, "ano_original_programa solo puede estar formado por dígitos"),
   Array('programa','ano_original_programa','31',"ano mayor que ano_actual", false, "El año introducido no puede ser superior al año actual"),
   Array('programa','ano_original_programa','32',"4 dígitos y año no superior actual", true, "Éxito"),
   
   
    //básicas de requisitos_programa
   Array('programa','requisitos_programa','33',"tamaño < 6",false,"El tamaño de requisitos_programa no puede ser menor de 6"),
   Array('programa','requisitos_programa','34',"tamaño > 300", false, "El tamaño de requisitos_programa no puede ser mayor de 300"),
   Array('programa','requisitos_programa','35',"no alfabéticos o no ñ o no espacios o no signos de puntuación", false, "requisitos_programa contiene caracteres no permitidos (solo alfabéticos con acentos, ñ, espacios y signos de puntuación)"),
   Array('programa','requisitos_programa','36',"alfabéticos con acentos, ñ, espacios y signos de puntuación", true, "Éxito"),
   
  
    //básicas de poblacion_desde_programa
   Array('programa','poblacion_desde_programa','37',"tamaño < 1",false,"El tamaño de poblacion_desde_programa no puede ser menor de 1"),
   Array('programa','poblacion_desde_programa','38',"tamaño > 2", false, "El tamaño de poblacion_desde_programa no puede ser mayor de 2"),
   Array('programa','poblacion_desde_programa','39',"no dígitos", false, "poblacion_desde_programa contiene caracteres no permitidos (solo dígitos)"),
   Array('programa','poblacion_desde_programa','40',"1 o 2 dígitos", true, "Éxito"),
   
   
    //básicas de poblacion_hasta_programa
   Array('programa','poblacion_hasta_programa','41',"tamaño < 1",false,"El tamaño de poblacion_hasta_programa no puede ser menor de 1"),
   Array('programa','poblacion_hasta_programa','42',"tamaño > 2", false, "El tamaño de poblacion_hasta_programa no puede ser mayor de 2"),
   Array('programa','poblacion_hasta_programa','43',"no dígitos", false, "poblacion_hasta_programa contiene caracteres no permitidos (solo dígitos)"),
   Array('programa','poblacion_hasta_programa','44',"1 o 2 dígitos", true, "Éxito"),
   
   
    //básicas de unidad_poblacion
   Array('programa','unidad_poblacion','45',"Valor != 'MESES' o Valor != 'AÑOS'",false,"El valor de unidad_poblacion solo pueden ser MESES o AÑOS"),   
   Array('programa','unidad_poblacion','46',"valores = 'MESES','AÑOS'", true, "Éxito"),
   
  
    //básicas de tipo_programa
   Array('programa','tipo_programa','47','unidad',"Valor != 'EVALUACIÓN' o Valor != 'INTERVENCIÓN' o Valor != 'EVALUACIÓN E INTERVENCIÓN'",false,"El valor de tipo_programa solo pueden ser EVALUACIÓN, INTERVENCIÓN o EVALUACIÓN E INTERVENCIÓN"),   
   Array('programa','tipo_programa','48','unidad',"valores = 'EVALUACIÓN' , 'INTERVENCIÓN' , 'EVALUACIÓN E INTERVENCIÓN'", true, "Éxito"),
   
  
    //básicas de tiempo_aplicacion_programa
   Array('programa','tiempo_aplicacion_programa','49',"tamaño < 1",false,"El tamaño de tiempo_aplicacion_programa no puede ser menor de 1"),
   Array('programa','tiempo_aplicacion_programa','50',"tamaño > 4", false, "El tamaño de tiempo_aplicacion_programa no puede ser mayor de 4"),
   Array('programa','tiempo_aplicacion_programa','51',"no dígitos", false, "tiempo_aplicacion_programa contiene caracteres no permitidos (solo dígitos)"),
   Array('programa','tiempo_aplicacion_programa','52'," dígitos ", true, "Éxito"),
   
   
    //básicas de descrip_interp_programa
   Array('programa','descrip_interp_programa','53',"tamaño < 100",false,"El tamaño de descrip_interp_programa no puede ser menor de 100"),
   Array('programa','descrip_interp_programa','54',"tamaño >5000", false, "El tamaño de descrip_interp_programa no puede ser mayor de 5000"),
   Array('programa','descrip_interp_programa','55',"no alfabético, no ñ, no espacios, no signos de puntuación o no retornos de carro", false, "descrip_interp_programa contiene caracteres no permitidos (solo alfabéticos con acentos, ñ, espacios, signos de puntuación y retornos de carro )"),
   Array('programa','descrip_interp_programa','56',"alfabéticos con acentos, ñ, espacios, signos de puntuación y retornos de carro", true, "Éxito"),
  
    //básicas de fichero_programa
   Array('programa','fichero_programa','57',"tamaño < 7",false,"El tamaño de fichero_programa no puede ser menor de 7"),
   Array('programa','fichero_programa','58',"tamaño > 60", false, "El tamaño de fichero_programa no puede ser mayor de 60"),
   Array('programa','fichero_programa','59',"no alfabético o con ñ o con espacios", false, "fichero_programa contiene caracteres no permitidos (solo alfabéticos sin acentos ni ñ ni espacios )"),
   Array('programa','fichero_programa','60',"alfabéticos sin acentos ni ñ ni espacios", true, "Éxito"),
 

    //básicas de enlace_programa
   Array('programa','enlace_programa','61',"tamaño < 10",false,"El tamaño de enlace_programa no puede ser menor de 10"),
   Array('programa','enlace_programa','62',"tamaño > 100", false, "El tamaño de enlace_programa no puede ser mayor de 100"),
   Array('programa','enlace_programa','63',"no alfabético con signos de puntuación que no sean '.' o '/' o ':', con alfabéticos con acento o con ñ o con espacios", false, "enlace_programa contiene caracteres no permitidos (solo alfabéticos y : y / y . sin acentos ni ñ ni espacios)"),
   Array('programa','enlace_programa','64',"alfabéticos y : y / y . sin acentos ni ñ ni espacios ", true, "Éxito"),
   
  
    //básicas de formato_programa
   Array('programa','formato_programa','65',"Valor != 'PAPEL' o Valor != 'ELECTRÓNICO' o Valor != 'ELECTRÓNICO Y PAPEL'",false,"El valor de formato_programa solo pueden ser PAPEL, ELECTRÓNICO O ELECTRÓNICO Y PAPEL"),   
   Array('programa','formato_programa','66',"valores = 'PAPEL', 'ELECTRÓNICO','PAPEL Y ELECTRÓNICO'", true, "Éxito"),
   
   
    //básicas de modo_correccion_programa
   Array('programa','modo_correccion_programa','67',"Valor != 'PAPEL' o Valor != 'ELECTRÓNICO' o Valor != 'ELECTRÓNICO Y PAPEL'",false,"El valor de modo_correccion_programa solo pueden ser PAPEL, ELECTRÓNICO O ELECTRÓNICO Y PAPEL"),   
   Array('programa','modo_correccion_programa','68',"valores = 'PAPEL', 'ELECTRÓNICO','PAPEL Y ELECTRÓNICO'", true, "Éxito"),
   
   
    //básicas de modo_aplicacion_programa
   Array('programa','modo_aplicacion_programa','69',"Valor != 'INDIVIDUAL' o Valor != 'COLECTIVO' o Valor != 'INDIVIDUAL Y COLECTIVO'",false,"El valor de modo_aplicacion_programa solo pueden ser INIDIVIDUAL, COLECTIVO o INDIVIDUAL Y COLECTIVO"),   
   Array('programa','modo_aplicacion_programa','70',"solo valores = 'INDIVIDUAL','COLECTIVO','INDIVIDUAL Y COLECTIVO'", true, "Éxito"),
   
  
    //básicas de imagen_programa
   Array('programa','imagen_programa','71',"tamaño < 10",false,"El tamaño de imagen_programa no puede ser menor de 10"),
   Array('programa','imagen_programa','72',"tamaño > 100", false, "El tamaño de imagen_programa no puede ser mayor de 100"),
   Array('programa','imagen_programa','73',"no alfabético, con ñ, con acentos o con espacios", false, "imagen_programa contiene caracteres no permitidos (solo alfabéticos sin acentos ni ñ ni espacios)"),
   Array('programa','imagen_programa','74',"alfabéticos sin acentos ni ñ ni espacios", true, "Éxito"),

   //básicas de id_publicacion
   Array('publicacion','id_publicacion','75','tamaño < 1',false,'El tamaño de id_publicacion no puede ser menor de 1'),
   Array('publicacion','id_publicacion','76','tamaño > 6',false,'El tamaño de id_publicacion no puede ser mayor de 6'),
   Array('publicacion','id_publicacion','77','no dígitos', false,'id_publicacion solo puede estar formado por dígitos'),
   Array('publicacion','id_publicacion','78','dígitos', true, 'Éxito'),  

   //básicas de titulo_publicacion
   Array('publicacion','titulo_publicacion','79',"tamaño < 6",false,"El tamaño de titulo_publicacion no puede ser menor de 6"),
   Array('publicacion','titulo_publicacion','80',"tamaño > 80",false,"El tamaño de titulo_publicacion no puede ser mayor de 80"),
   Array('publicacion','titulo_publicacion','81',"no alfabéticos o no alfabético con acento o no ñ o no espacio", false, "titulo_publicacion contiene caracteres no permitidos (solo alfabéticos con o sin acento, ñ o espacios)"),
   Array('publicacion','titulo_publicacion','82',"alfabéticos con acentos, ñ y espacios min", true, "Éxito"),

   //básicas de autor_publicacion
   Array('publicacion','autor_publicacion','83',"tamaño < 6",false,"El tamaño de autor_publicacion no puede ser menor de 6"),
   Array('publicacion','autor_publicacion','84',"tamaño > 40",false,"El tamaño de autor_publicacion no puede ser mayor de 40"),
   Array('publicacion','autor_publicacion','85',"no alfabéticos o no alfabético con acento o no ñ o no espacio", false, "autor_publicacion contiene caracteres no permitidos (solo alfabéticos con o sin acento, ñ o espacios)"),
   Array('publicacion','autor_publicacion','86',"alfabéticos con acentos, ñ y espacios min", true, "Éxito"),

   //básicas de fecha_publicacion
   Array('publicacion','fecha_publicacion','87',"fecha valida",false,"la fecha_publicacion tiene que ser dd/mm/aaaa"),
   Array('publicacion','fecha_publicacion','88',"fecha presente o futura",false,"la fecha_publicacion tiene que ser presente o futura"),   
   Array('publicacion','fecha_publicacion','89',"fecha válida y presente o futura", true, "Éxito"),

   //básicas de area_publicacion
   Array('publicacion','area_publicacion','90','tamaño < 1',false,'El tamaño de area_publicacion no puede ser menor de 1'),
   Array('publicacion','area_publicacion','91','tamaño > 6',false,'El tamaño de area_publicacion no puede ser mayor de 6'),
   Array('publicacion','area_publicacion','92','no dígitos', false,'area_publicacion solo puede estar formado por dígitos'),
   Array('publicacion','area_publicacion','93','dígitos', true, 'Éxito'),

    //básicas de texto_publicacion
    Array('publicacion','texto_publicacion','94',"tamaño < 6",false,"El tamaño de texto_publicacion no puede ser menor de 6"),
    Array('publicacion','texto_publicacion','95',"tamaño > 40",false,"El tamaño de texto_publicacion no puede ser mayor de 8000"),
    Array('publicacion','texto_publicacion','96',"no caracter ASCII", false, "texto_publicacion contiene caracteres no permitidos (solo caracteres ASCII)"),
    Array('publicacion','texto_publicacion','97',"cualquier ASCII", true, "Éxito"),

    //básicas de imagen_publicacion
    Array('publicacion','imagen_publicacion','94',"tamaño < 7",false,"El tamaño de imagen_publicacion no puede ser menor de 7"),
    Array('publicacion','imagen_publicacion','95',"tamaño > 50",false,"El tamaño de imagen_publicacion no puede ser mayor de 50"),
    Array('publicacion','imagen_publicacion','96',"no alfabético sin acentos ni ñ ni acentos", false, "imagen_publicacion contiene caracteres no permitidos (alfabéticos sin acentos ni ñ ni espacios)"),
    Array('publicacion','imagen_publicacion','97',"alfabéticos sin acentos, ñ y espacios min", true, "Éxito"),



   
   );
