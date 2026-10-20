export type Categoria = "Economía" | "Política" | "Entretenimiento" | "Región" | "Cultura" | "Deportes";
export type Noticia = {id:string;categoria:Categoria;etiqueta?:string;titulo:string;sumario:string;lead:string;enfoqueTitulo:string;enfoqueSumario:string;enfoqueLead:string;tipo:string;w:Record<string,string>;enlace?:string};
export const enfoques: Record<Categoria,string> = {
  "Economía":"En la sección de Economía, El Heraldo presenta noticias relacionadas con las empresas, las inversiones, el salario mínimo y el desarrollo económico. Los títulos son claros, los sumarios añaden contexto y los leads concentran la información esencial.",
  "Política":"En la sección de Política, El Heraldo se enfoca en las decisiones del Gobierno, las declaraciones de funcionarios y los acontecimientos políticos del país. Predomina la información de interés público apoyada en declaraciones y fuentes institucionales.",
  "Entretenimiento":"En las cinco noticias, el primer párrafo responde claramente al qué y contiene entre tres y cinco W. El medio aplica una jerarquía en la que el título atrae, el sumario complementa datos secundarios o de contexto y el lead presenta la acción inicial. El Heraldo combina tendencias globales del espectáculo con acontecimientos culturales de Barranquilla y el Caribe.",
  "Región":"Las cinco noticias permiten identificar al menos cuatro elementos de las seis W en el primer párrafo. Los leads reconocen los hechos, actores, lugares y circunstancias. La sección aborda infraestructura urbana, sucesos, seguridad ciudadana, servicios públicos y emergencias naturales que afectan a las comunidades.",
  "Cultura":"En las cinco noticias se identifica el hecho principal y, como mínimo, cuatro elementos informativos en el primer párrafo. El título presenta el acontecimiento, el sumario aporta detalles, antecedentes, cifras o fechas y el lead introduce la información esencial.",
  "Deportes":"En las cinco noticias se observa un enfoque informativo centrado en resultados, decisiones deportivas, actuaciones individuales y acontecimientos que afectan a las competiciones. Los títulos presentan el hecho de manera directa, los sumarios agregan cifras o consecuencias y los primeros párrafos incluyen varias de las seis preguntas periodísticas."
}
export const noticias: Noticia[] = [
  {
    "id": "eco-1",
    "categoria": "Economía",
    "etiqueta": "",
    "titulo": "Mónica de Greiff renunció a la Junta Directiva de ISA, filial de Ecopetrol",
    "sumario": "La exdirectiva de Ecopetrol comunicó su decisión con efecto inmediato. También dejará de integrar los comités de Talento Organizacional y de Auditoría y Riesgos de la compañía.",
    "lead": "Mónica de Greiff presentó su renuncia a la Junta Directiva de Interconexión Eléctrica S. A. (ISA), filial de Ecopetrol, según informó la compañía en un comunicado divulgado este lunes 12 de octubre.",
    "enfoqueTitulo": "El título presenta de forma directa el hecho principal: Mónica de Greiff renunció a la Junta Directiva de ISA, filial de Ecopetrol y busca captar el interés del lector desde el primer vistazo.",
    "enfoqueSumario": "El sumario complementa el titular con contexto, consecuencias y datos que permiten entender mejor la relevancia de la noticia.",
    "enfoqueLead": "El lead concentra la información esencial del acontecimiento e identifica los actores, la acción y las circunstancias expresadas en el primer párrafo.",
    "tipo": "Informativa económica: comunica una decisión corporativa concreta.",
    "w": {
      "Qué": "presentó su renuncia a la Junta Directiva de ISA.",
      "Quién": "Mónica de Greiff.",
      "Cuándo": "se informó en un comunicado divulgado el lunes 12 de octubre."
    },
    "enlace": "https://www.elheraldo.co/economia/2026/10/13/monica-de-greiff-renuncio-a-la-junta-directiva-de-isa-filial-de-ecopetrol/"
  },
  {
    "id": "eco-2",
    "categoria": "Economía",
    "etiqueta": "",
    "titulo": "Gobierno logró acuerdos estratégicos con Israel para impulsar sostenibilidad del agro colombiano",
    "sumario": "El primer compromiso contempla el envío de 25 profesionales agrónomos colombianos a Israel durante el mes de enero del próximo año, con el propósito de recibir formación especializada en tecnologías avanzadas de riego y manejo eficiente del recurso hídrico.",
    "lead": "Luego de una intensa agenda de trabajo de tres días en compañía de la Embajadora de Colombia en Israel, Tania Gilinski, y la directora de la Agencia de Cooperación para el Desarrollo Internacional del Ministerio de Asuntos Exteriores de Israel (Mashav), Eynat Shlein, el ministro de Agricultura, Indalecio Dangond, resaltó el logro de importantes compromisos orientados a fortalecer la productividad, el riego, la capacitación e innovación del sector agropecuario colombiano.",
    "enfoqueTitulo": "El título presenta de forma directa el hecho principal: Gobierno logró acuerdos estratégicos con Israel para impulsar sostenibilidad del agro colombiano y busca captar el interés del lector desde el primer vistazo.",
    "enfoqueSumario": "El sumario complementa el titular con contexto, consecuencias y datos que permiten entender mejor la relevancia de la noticia.",
    "enfoqueLead": "El lead concentra la información esencial del acontecimiento e identifica los actores, la acción y las circunstancias expresadas en el primer párrafo.",
    "tipo": "Informativa económica: comunica compromisos institucionales con incidencia en el agro.",
    "w": {
      "Qué": "se lograron compromisos de cooperación para el sector agropecuario.",
      "Quién": "el ministro Indalecio Dangond; también se identifican Tania Gilinski y Eynat Shlein.",
      "Dónde": "Israel, mencionado expresamente en la agenda de trabajo.",
      "Cuándo": "después de una agenda de trabajo de tres días (sin fechas precisas en el lead).",
      "Para qué": "fortalecer la productividad, el riego, la capacitación y la innovación del agro."
    },
    "enlace": "https://www.elheraldo.co/economia/2026/10/09/gobierno-logro-acuerdos-estrategicos-con-israel-para-impulsar-sostenibilidad-del-agro-colombiano/"
  },
  {
    "id": "eco-3",
    "categoria": "Economía",
    "etiqueta": "",
    "titulo": "Los gremios empresariales plantean un alza del salario mínimo de 2027 entre 8 % y 9,5 %",
    "sumario": "Afirmaron que el ajuste no debe seguir una lógica de herramienta de política social.",
    "lead": "La Comisión Tripartita, que tiene como objetivo analizar las propuestas de los empresarios y trabajadores en pro del salario mínimo, se reunirá el próximo martes 13 de octubre para estudiar lo que se ha venido mandando para definir el salario de 2027.",
    "enfoqueTitulo": "El título presenta de forma directa el hecho principal: Los gremios empresariales plantean un alza del salario mínimo de 2027 entre 8 % y 9,5 % y busca captar el interés del lector desde el primer vistazo.",
    "enfoqueSumario": "El sumario complementa el titular con contexto, consecuencias y datos que permiten entender mejor la relevancia de la noticia.",
    "enfoqueLead": "El lead concentra la información esencial del acontecimiento e identifica los actores, la acción y las circunstancias expresadas en el primer párrafo.",
    "tipo": "Informativa económica: cubre las discusiones que anteceden a la definición del salario mínimo.",
    "w": {
      "Qué": "la Comisión Tripartita se reunirá a estudiar propuestas sobre el salario mínimo.",
      "Quién": "la Comisión Tripartita.",
      "Cuándo": "el próximo martes 13 de octubre.",
      "Para qué": "estudiar propuestas para definir el salario de 2027."
    },
    "enlace": "https://www.elheraldo.co/economia/2026/10/09/los-gremios-empresariales-plantean-un-alza-del-minimo-de-2027-entre-8-y-95/"
  },
  {
    "id": "eco-4",
    "categoria": "Economía",
    "etiqueta": "",
    "titulo": "¿Qué hace falta para que operen en el país los proyectos de regasificación?",
    "sumario": "Analistas manifestaron que ante la llegada del fenómeno de El Niño, es de vital importancia contar con todas las fuentes energéticas, con el objetivo de evitar una posible crisis o incluso un apagón.",
    "lead": "Ya está en Colombia el fenómeno de El Niño, un desafío que tiene que afrontar con gran responsabilidad el gobierno de Abelardo De la Espriella con el objetivo de evitar una posible crisis energética e incluso un apagón.",
    "enfoqueTitulo": "El título presenta de forma directa el hecho principal: ¿Qué hace falta para que operen en el país los proyectos de regasificación? y busca captar el interés del lector desde el primer vistazo.",
    "enfoqueSumario": "El sumario complementa el titular con contexto, consecuencias y datos que permiten entender mejor la relevancia de la noticia.",
    "enfoqueLead": "El lead concentra la información esencial del acontecimiento e identifica los actores, la acción y las circunstancias expresadas en el primer párrafo.",
    "tipo": "Explicativa económica: el título formula una pregunta sobre una situación energética.",
    "w": {
      "Qué": "llegó a Colombia el fenómeno de El Niño, planteado como un desafío energético.",
      "Dónde": "Colombia.",
      "Quién": "el Gobierno de Abelardo de la Espriella, mencionado como quien debe afrontar el desafío.",
      "Para qué": "evitar una crisis energética o un apagón."
    },
    "enlace": "https://www.elheraldo.co/economia/2026/10/11/que-hace-falta-para-que-operen-en-el-pais-los-proyectos-de-regasificacion/"
  },
  {
    "id": "eco-5",
    "categoria": "Economía",
    "etiqueta": "",
    "titulo": "Gobierno anuncia la firma del decreto de concesiones portuarias, que abre la puerta a más inversión en los puertos del país",
    "sumario": "La CCI celebra el anuncio de la firma del decreto de concesiones portuarias, que se traduciría en reglas más claras para atraer inversión, mejorar la conectividad y fortalecer la competitividad de los puertos.",
    "lead": "El presidente de la República, Abelardo De La Espriella, anunció que en los próximos días firmará el decreto que regula las concesiones portuarias, el cual incorporaría varias de las propuestas que la Cámara Colombiana de la Infraestructura (CCI) ha impulsado de manera permanente a favor del sector.",
    "enfoqueTitulo": "El título presenta de forma directa el hecho principal: Gobierno anuncia la firma del decreto de concesiones portuarias, que abre la puerta a más inversión en los puertos del país y busca captar el interés del lector desde el primer vistazo.",
    "enfoqueSumario": "El sumario complementa el titular con contexto, consecuencias y datos que permiten entender mejor la relevancia de la noticia.",
    "enfoqueLead": "El lead concentra la información esencial del acontecimiento e identifica los actores, la acción y las circunstancias expresadas en el primer párrafo.",
    "tipo": "Informativa económica: comunica un anuncio de política portuaria.",
    "w": {
      "Qué": "el anuncio de la próxima firma del decreto de concesiones portuarias.",
      "Quién": "el presidente Abelardo de la Espriella, según la publicación.",
      "Cuándo": "en los próximos días (sin fecha exacta de firma).",
      "Cómo": "mediante un decreto que incorporaría propuestas de la CCI."
    },
    "enlace": "https://www.elheraldo.co/economia/2026/10/13/gobierno-anuncia-la-firma-del-decreto-de-concesiones-portuarias-que-abre-la-puerta-a-mas-inversion-en-los-puertos-del-pais/"
  },
  {
    "id": "pol-1",
    "categoria": "Política",
    "etiqueta": "",
    "titulo": "Ministro del Interior aseguró que este jueves presentará el Estatuto Antiterrorista para enfrentar a grupos armados",
    "sumario": "Rodrigo Lara sostuvo que existen pruebas sobre el carácter terrorista de algunas organizaciones como las disidencias de las Farc y anunció que llevará la propuesta al Consejo de Política Criminal.",
    "lead": "El Gobierno nacional avanzará este jueves en la discusión del Estatuto Antiterrorista, una iniciativa con la que busca ampliar las herramientas jurídicas para enfrentar a las organizaciones armadas y criminales que operan en el país.",
    "enfoqueTitulo": "El título presenta de forma directa el hecho principal: Ministro del Interior aseguró que este jueves presentará el Estatuto Antiterrorista para enfrentar a grupos armados y busca captar el interés del lector desde el primer vistazo.",
    "enfoqueSumario": "El sumario complementa el titular con contexto, consecuencias y datos que permiten entender mejor la relevancia de la noticia.",
    "enfoqueLead": "El lead concentra la información esencial del acontecimiento e identifica los actores, la acción y las circunstancias expresadas en el primer párrafo.",
    "tipo": "Informativa política: trata sobre una iniciativa gubernamental de seguridad.",
    "w": {
      "Qué": "el avance de la discusión del Estatuto Antiterrorista.",
      "Quién": "el Gobierno nacional.",
      "Cuándo": "este jueves (fecha relativa al momento de publicación).",
      "Para qué": "ampliar herramientas jurídicas contra organizaciones armadas y criminales."
    },
    "enlace": "https://www.elheraldo.co/politica/2026/10/06/ministro-del-interior-aseguro-que-este-jueves-presentara-el-estatuto-antiterrorista-para-enfrentar-a-grupos-armados/"
  },
  {
    "id": "pol-2",
    "categoria": "Política",
    "etiqueta": "",
    "titulo": "“En todos los documentos públicos es claro que cursé Maestría en Estudios Político y no me gradué”: ministra Holguín",
    "sumario": "La ministra de las Culturas aseguró que aprobó todas las materias y el trabajo de grado, pero reconoció que no obtuvo el título. También pidió que se mantenga el control meritocrático sobre los funcionarios.",
    "lead": "La ministra de las Culturas, las Artes y los Saberes, Paola Holguín, se pronunció este jueves sobre la controversia relacionada con su formación académica y la Maestría en Estudios Políticos de la Universidad Pontificia Bolivariana (UPB).",
    "enfoqueTitulo": "El título presenta de forma directa el hecho principal: “En todos los documentos públicos es claro que cursé Maestría en Estudios Político y no me gradué”: ministra Holguín y busca captar el interés del lector desde el primer vistazo.",
    "enfoqueSumario": "El sumario complementa el titular con contexto, consecuencias y datos que permiten entender mejor la relevancia de la noticia.",
    "enfoqueLead": "El lead concentra la información esencial del acontecimiento e identifica los actores, la acción y las circunstancias expresadas en el primer párrafo.",
    "tipo": "Informativa política basada en declaraciones: trata un asunto de transparencia pública.",
    "w": {
      "Qué": "la ministra se pronunció acerca de la controversia sobre su formación académica.",
      "Quién": "Paola Holguín, ministra de las Culturas.",
      "Cuándo": "este jueves (8 de octubre según la fecha publicada)."
    },
    "enlace": "https://www.elheraldo.co/politica/2026/10/08/en-todos-los-documentos-publicos-es-claro-que-curse-maestria-en-estudios-politico-y-no-me-gradue-ministra-holguin/"
  },
  {
    "id": "pol-3",
    "categoria": "Política",
    "etiqueta": "",
    "titulo": "Gobierno limita viajes al exterior de funcionarios y exige autorización previa de Presidencia",
    "sumario": "La directriz establece que las entidades deberán priorizar reuniones virtuales, reducir al mínimo los desplazamientos internacionales y justificar los viajes de los servidores públicos. También ordena utilizar las tarifas aéreas más económicas.",
    "lead": "El Gobierno nacional impartió nuevas medidas de austeridad para restringir los viajes al exterior de funcionarios y servidores públicos, como parte de las directrices expedidas mediante la Circular No. 06 del 7 de octubre de 2026.",
    "enfoqueTitulo": "El título presenta de forma directa el hecho principal: Gobierno limita viajes al exterior de funcionarios y exige autorización previa de Presidencia y busca captar el interés del lector desde el primer vistazo.",
    "enfoqueSumario": "El sumario complementa el titular con contexto, consecuencias y datos que permiten entender mejor la relevancia de la noticia.",
    "enfoqueLead": "El lead concentra la información esencial del acontecimiento e identifica los actores, la acción y las circunstancias expresadas en el primer párrafo.",
    "tipo": "Informativa política: comunica medidas administrativas del Gobierno.",
    "w": {
      "Qué": "se impartieron medidas de austeridad para restringir viajes oficiales al exterior.",
      "Quién": "el Gobierno nacional.",
      "Cuándo": "la circular mencionada es del 7 de octubre de 2026.",
      "Cómo": "mediante la Circular No. 06."
    },
    "enlace": "https://www.elheraldo.co/politica/2026/10/08/gobierno-limita-viajes-al-exterior-de-funcionarios-y-exige-autorizacion-previa-de-presidencia/"
  },
  {
    "id": "pol-4",
    "categoria": "Política",
    "etiqueta": "",
    "titulo": "De la Espriella propone a Flávio Bolsonaro “una lucha decidida contra el narcotráfico y la inseguridad” en Colombia y Brasil",
    "sumario": "En una videollamada, el presidente colombiano reiteró su respaldo al candidato brasileño de cara a la segunda vuelta presidencial.",
    "lead": "El presidente Abelardo De la Espriella sostuvo una entrevista por videollamada este miércoles 7 de octubre con Flávio Bolsonaro, candidato a la presidencia en Brasil, y con su hermano, el exdiputado Eduardo Bolsonaro, ambos hijos del expresidente brasileño Jair Bolsonaro, condenado a 27 años de prisión por intento de golpe de Estado.",
    "enfoqueTitulo": "El título presenta de forma directa el hecho principal: De la Espriella propone a Flávio Bolsonaro “una lucha decidida contra el narcotráfico y la inseguridad” en Colombia y Brasil y busca captar el interés del lector desde el primer vistazo.",
    "enfoqueSumario": "El sumario complementa el titular con contexto, consecuencias y datos que permiten entender mejor la relevancia de la noticia.",
    "enfoqueLead": "El lead concentra la información esencial del acontecimiento e identifica los actores, la acción y las circunstancias expresadas en el primer párrafo.",
    "tipo": "Informativa política internacional: comunica un encuentro entre figuras políticas.",
    "w": {
      "Qué": "se realizó una entrevista o encuentro por videollamada.",
      "Quién": "Abelardo de la Espriella, Flávio Bolsonaro y Eduardo Bolsonaro.",
      "Cuándo": "miércoles 7 de octubre.",
      "Cómo": "por videollamada."
    },
    "enlace": "https://www.elheraldo.co/politica/2026/10/08/de-la-espriella-propone-a-flavio-bolsonaro-una-lucha-decidida-contra-el-narcotrafico-y-la-inseguridad-en-colombia-y-brasil/"
  },
  {
    "id": "pol-5",
    "categoria": "Política",
    "etiqueta": "",
    "titulo": "FND pide modernizar la categorización fiscal de los departamentos tras aumento del salario mínimo",
    "sumario": "La Federación Nacional de Departamentos advierte que el aumento del salario mínimo en 2026 modificó automáticamente los valores que deben alcanzar los territorios para mantenerse en determinadas categorías fiscales. Propone actualizar un sistema creado hace más de 25 años.",
    "lead": "La Federación Nacional de Departamentos (FND) pidió al Gobierno nacional y al Congreso revisar la fórmula con la que actualmente se determina la categoría fiscal de los departamentos, al considerar que el sistema puede dejar de reflejar las diferencias y capacidades reales de cada territorio.",
    "enfoqueTitulo": "El título presenta de forma directa el hecho principal: FND pide modernizar la categorización fiscal de los departamentos tras aumento del salario mínimo y busca captar el interés del lector desde el primer vistazo.",
    "enfoqueSumario": "El sumario complementa el titular con contexto, consecuencias y datos que permiten entender mejor la relevancia de la noticia.",
    "enfoqueLead": "El lead concentra la información esencial del acontecimiento e identifica los actores, la acción y las circunstancias expresadas en el primer párrafo.",
    "tipo": "Informativa política con componente económico: cubre una propuesta de reforma administrativa.",
    "w": {
      "Qué": "pidió revisar la fórmula de categorización fiscal.",
      "Quién": "la Federación Nacional de Departamentos (FND).",
      "Por qué": "considera que el sistema no refleja bien las diferencias y capacidades de cada territorio."
    },
    "enlace": "https://www.elheraldo.co/politica/2026/10/06/fnd-pide-modernizar-la-categorizacion-fiscal-de-los-departamentos-tras-aumento-del-salario-minimo/"
  },
  {
    "id": "ent-1",
    "categoria": "Entretenimiento",
    "etiqueta": "",
    "titulo": "Victoria's Secret volvió a Los Ángeles con su desfile, modelos icónicas y Kylie Jenner",
    "sumario": "El evento celebró el regreso de grandes figuras del modelaje como Gigi Hadid, Candice Swanepoel, Alex Consani, Anok Yai, Ashley Graham.",
    "lead": "Los ángeles de Victoria’s Secret volvieron a agitar sus alas ante los ojos del mundo este domingo en EE.UU., con un espectáculo lleno de glamour, moda y música que reunió a algunas de las modelos más reconocidas de sus pasarelas, como Alessandra Ambrosio y Adriana Lima, además de contar con la participación sorpresa de Kylie Jenner.",
    "enfoqueTitulo": "Se enfoca en anunciar el retorno del famoso desfile de moda de la marca Victoria's Secret a Los Ángeles, expresando relevancia e impacto al destacar la presencia de supermodelos tradicionales y de la celebridad Kylie Jenner.",
    "enfoqueSumario": "Se enfoca en nombrar a las figuras más destacadas de la pasarela, expresando el carácter estelar y exclusivo del elenco convocado para el show.",
    "enfoqueLead": "Se enfoca en dar inicio a la cobertura del desfile, expresando que el espectáculo regresó ante la audiencia global combinando glamour, moda, música y sorpresas.",
    "tipo": "Informativa de entretenimiento/moda: comunica la realización de un evento de moda internacional de alto impacto mediático.",
    "w": {
      "Qué": "El regreso del desfile de moda (\"volvieron a agitar sus alas... con un espectáculo lleno de glamour, moda y música\").",
      "Quién": "Los ángeles de Victoria’s Secret (Alessandra Ambrosio, Adriana Lima) y Kylie Jenner.",
      "Dónde": "En EE.UU.",
      "Cuándo": "Este domingo.",
      "Cómo": "Con un espectáculo lleno de glamour, moda y música que reunió a modelos reconocidas y una participación sorpresa."
    },
    "enlace": "https://www.elheraldo.co/sociedad/2026/10/19/victorias-secret-volvio-a-los-angeles-con-su-desfile-modelos-iconicas-y-kylie-jenner/"
  },
  {
    "id": "ent-2",
    "categoria": "Entretenimiento",
    "etiqueta": "",
    "titulo": "Apu de 'Los Simpson' vuelve a hablar tras casi una década de silencio",
    "sumario": "Tras las críticas, Azaria anunció que dejaría de interpretar al personaje. Desde entonces, Apu ha aparecido ocasionalmente en la serie, aunque sin diálogos. Su regreso se produjo en el episodio emitido ayer 18 de octubre en Estados Unidos, titulado 'The Revengening'.",
    "lead": "El actor estadounidense de ascendencia india Sunil Malhotra ha vuelto a poner voz a Apu, el dueño del badulaque de Springfield de ‘Los Simpson’, que llevaba casi una década sin pronunciar una palabra y apareciendo esporádicamente en la serie debido a la polémica sobre su representación de la comunidad surasiática.",
    "enfoqueTitulo": "Se enfoca en un hito de la televisión animada, expresando curiosidad sobre la reaparición vocal de un personaje icónico tras casi diez años sin diálogos.",
    "enfoqueSumario": "Se enfoca en situar el antecedente de la controversia y en precisar la fecha exacta y el capítulo en el que volvió a hablar el personaje.",
    "enfoqueLead": "Se enfoca en dar a conocer la identidad del nuevo actor de voz que asume al personaje, expresando el fin de su silencio de casi una década motivado por discusiones sobre representación cultural.",
    "tipo": "Informativa de televisión / cultura pop: reporta una novedad de relevancia en una serie de animación global.",
    "w": {
      "Qué": "Volver a poner voz al personaje de Apu (volver a hacer hablar al personaje tras casi una década).",
      "Quién": "El actor estadounidense Sunil Malhotra (dando voz a Apu, dueño del badulaque en 'Los Simpson').",
      "Cuándo / cuánto tiempo": "Llevaba casi una década sin pronunciar una palabra.",
      "Por qué": "Debido a la polémica sobre su representación de la comunidad surasiática."
    },
    "enlace": "https://www.elheraldo.co/sociedad/2026/10/19/apu-de-los-simpson-vuelve-a-hablar-tras-casi-una-decada-de-silencio/"
  },
  {
    "id": "ent-3",
    "categoria": "Entretenimiento",
    "etiqueta": "",
    "titulo": "'La Velada del Año' de Ibai se transmitirá por Netflix durante los próximos tres años",
    "sumario": "La Velada del Año se ha consolidado como uno de los mayores eventos de streaming en español. La quinta edición, en 2025, alcanzó un pico de 9,3 millones de espectadores simultáneos, y la audiencia media ha pasado de cerca de 1 millón en 2021 a más de 6 millones en 2026.",
    "lead": "Uno de los grandes shows del internet llega a Netflix. La plataforma de streaming anunció que La Velada del Año, se retransmitirá durante los próximos tres años (ediciones de 2027, 2028 y 2029), marcando un nuevo capítulo en la historia del evento creado por Ibai Llanos y ampliando su alcance a una audiencia global.",
    "enfoqueTitulo": "Se enfoca en un acuerdo de distribución digital, expresando el salto de escala de un evento masivo de internet a una plataforma de televisión por streaming.",
    "enfoqueSumario": "Se enfoca en respaldar el acuerdo comercial con las cifras históricas de audiencia del evento.",
    "enfoqueLead": "Se enfoca en confirmar formalmente la alianza entre Netflix y el evento, expresando que este acuerdo expandirá su proyección hacia un público internacional en las ediciones venideras.",
    "tipo": "Informativa sobre plataformas digitales: aborda la evolución de los formatos de internet hacia los medios masivos.",
    "w": {
      "Qué": "La retransmisión exclusiva de 'La Velada del Año' (\"llega a Netflix... se retransmitirá\").",
      "Quién": "La plataforma Netflix y el evento creado por Ibai Llanos.",
      "Cuándo": "Durante los próximos tres años (ediciones de 2027, 2028 y 2029).",
      "Dónde": "En la plataforma de streaming Netflix.",
      "Para qué": "Ampliar su alcance a una audiencia global y marcar un nuevo capítulo en su historia."
    },
    "enlace": "https://www.elheraldo.co/entretenimiento/2026/10/19/la-velada-del-ano-de-ibai-se-transmitira-por-netflix-durante-los-proximos-tres-anos/"
  },
  {
    "id": "ent-4",
    "categoria": "Entretenimiento",
    "etiqueta": "",
    "titulo": "Chef barranquillera Carolina Asmar gana el premio ‘Dos Fuegos’ en El Salvador",
    "sumario": "En la gala Fine Dinning Week, recibió la distinción 'Fine Dining Table' que destaca la excelencia gastronómica.",
    "lead": "La gastronomía barranquillera sigue conquistando paladares por distintas partes del mundo. En esta ocasión la chef barranquillera Carolina Asmar del restaurante Celia, recibió un reconocimiento importante por su alta cocina en El Salvador.",
    "enfoqueTitulo": "Se enfoca en el logro profesional de una chef local, expresando orgullo de ciudad por su reconocimiento en el exterior.",
    "enfoqueSumario": "Se enfoca en especificar el espacio internacional y la categoría en la que fue distinguida.",
    "enfoqueLead": "Se enfoca en resaltar el posicionamiento de la gastronomía de Barranquilla mediante el premio entregado a una de sus exponentes en Centroamérica.",
    "tipo": "Informativa de estilo de vida / gastronomía: destaca el talento costeño en escenarios internacionales.",
    "w": {
      "Qué": "La recepción de un reconocimiento importante por alta cocina (\"sigue conquistando paladares... recibió un reconocimiento\").",
      "Quién": "La chef barranquillera Carolina Asmar (del restaurante Celia).",
      "Dónde": "En El Salvador / por distintas partes del mundo.",
      "Por qué": "Por su propuesta de alta cocina."
    },
    "enlace": "https://www.elheraldo.co/sociedad/2026/10/18/chef-barranquillera-carolina-asmar-gana-el-premio-dos-fuegos-en-el-salvador/"
  },
  {
    "id": "ent-5",
    "categoria": "Entretenimiento",
    "etiqueta": "",
    "titulo": "Dos murales en 'La Calle del Picó' celebran los 90 años de Aníbal Velásquez",
    "sumario": "El juglar barranquillero se mostró complacido porque en Rebolo, barrio donde se crió, le rindieron honores. Ahora espera tener una estatua que lo perpetúe.",
    "lead": "Con pincel en mano llegó el maestro Aníbal Velásquez Hurtado, a firmar uno de los dos murales que le dedicaron en ‘La Calle del Picó’. Se trata de una pintura en la que aparece con su icónico sombrero negro y el acordeón terciado al pecho.",
    "enfoqueTitulo": "Se enfoca en un tributo de arte urbano, expresando homenaje a la trayectoria y cumpleaños de un juglar de la música caribeña.",
    "enfoqueSumario": "Se enfoca en recoger la vivencia del homenajeado en su barrio de origen y en manifestar su deseo de tener un monumento permanente.",
    "enfoqueLead": "Se enfoca en recrear el momento en el que el artista acude presencialmente a intervenir y validar la obra hecha en su honor en un sector popular.",
    "tipo": "Informativa cultural / folclore costeño: exalta la memoria de una figura representativa de la música del Caribe.",
    "w": {
      "Qué": "La firma e inauguración de dos murales dedicados en su honor (\"llegó a firmar uno de los dos murales\").",
      "Quién": "El maestro Aníbal Velásquez Hurtado.",
      "Dónde": "En ‘La Calle del Picó’ (Barranquilla).",
      "Cómo": "Con pincel en mano, firmando una pintura que lo representa con su sombrero negro y acordeón al pecho."
    },
    "enlace": "https://www.elheraldo.co/sociedad/2026/10/12/dos-murales-en-la-calle-del-pico-celebran-los-90-anos-de-anibal-velasquez/"
  },
  {
    "id": "reg-1",
    "categoria": "Región",
    "etiqueta": "Bolívar",
    "titulo": "La Tercera Avenida de Manga comienza a recibir su nuevo pavimento: ya fundieron los primeros 45 metros.",
    "sumario": "La intervención hace parte del programa Vías para la Felicidad e incluye la recuperación de 4.532,53 metros cuadrados de calzada y andenes entre las carreras 21 y 24.",
    "lead": "La rehabilitación de la Tercera Avenida de Manga sigue avanzando a buen ritmo. La alcaldía de Cartagena, a través de la Secretaría de Infraestructura, ya fundió 45 metros lineales de pavimento rígido en el carril izquierdo, mientras continúan los trabajos de renovación de las redes de acueducto y alcantarillado, excavaciones, rellenos y adecuación de la infraestructura subterránea.",
    "enfoqueTitulo": "Destaca el avance de las obras de pavimentación en Cartagena y concreta ese progreso mediante la cifra de los primeros 45 metros intervenidos.",
    "enfoqueSumario": "Complementa el titular con el nombre del programa al que pertenece la obra y las dimensiones de la intervención.",
    "enfoqueLead": "Informa sobre el avance de la pavimentación y describe las demás obras de infraestructura que se ejecutan simultáneamente.",
    "tipo": "Informativa de infraestructura urbana, porque comunica el avance de una obra pública que puede mejorar la movilidad y los servicios del sector.",
    "w": {
      "Qué": "Avanzan la pavimentación y las obras de rehabilitación vial.",
      "Quién": "La Alcaldía de Cartagena y su Secretaría de Infraestructura.",
      "Dónde": "En la Tercera Avenida de Manga, Cartagena, Bolívar.",
      "Cómo": "Mediante la pavimentación y la renovación de redes de servicios públicos."
    },
    "enlace": ""
  },
  {
    "id": "reg-2",
    "categoria": "Región",
    "etiqueta": "Magdalena",
    "titulo": "Murió estudiante de Medicina de 17 años que ganó una beca por su puntaje en el Icfes.",
    "sumario": "El siniestro ocurrió durante la madrugada del miércoles 7 de octubre de 2026, en el barrio Jardín de la capital del Magdalena.",
    "lead": "Andrés Sebastián Tolero Suárez, un estudiante de Medicina de 17 años que obtuvo el mejor resultado de las pruebas Saber 11 en su colegio y consiguió una beca universitaria, falleció tras sufrir un accidente de tránsito en Santa Marta cuando se movilizaba en motocicleta.",
    "enfoqueTitulo": "Comunica el fallecimiento de un joven estudiante y destaca su trayectoria académica, especialmente el mérito que le permitió obtener una beca universitaria.",
    "enfoqueSumario": "Precisa el momento y el lugar en que ocurrió el accidente, aportando contexto temporal y geográfico al titular.",
    "enfoqueLead": "Presenta a la víctima, resalta su logro académico y comunica las circunstancias generales de su fallecimiento.",
    "tipo": "Informativa de sucesos, con interés humano, porque relata un fallecimiento y destaca la historia académica del joven.",
    "w": {
      "Qué": "Falleció un estudiante de Medicina en un accidente de tránsito.",
      "Quién": "Andrés Sebastián Tolero Suárez, de 17 años.",
      "Dónde": "En Santa Marta, Magdalena.",
      "Cómo": "En un accidente ocurrido mientras se movilizaba en motocicleta."
    },
    "enlace": ""
  },
  {
    "id": "reg-3",
    "categoria": "Región",
    "etiqueta": "Cesar",
    "titulo": "Policía rescató a una mujer de 26 años que cayó al río San Alberto, Cesar, tras una creciente.",
    "sumario": "El uniformado se lanzó al afluente para auxiliar a la joven, luego de recibir el llamado de la comunidad.",
    "lead": "Un policía rescató a una mujer de 26 años que cayó al río San Alberto, en el departamento del Cesar, luego de una creciente que aumentó el riesgo en el afluente.",
    "enfoqueTitulo": "Destaca la actuación de un policía que auxilió a una mujer durante una emergencia causada por el aumento del nivel del río.",
    "enfoqueSumario": "Explica cómo se produjo la intervención policial y resalta la colaboración de los habitantes para alertar sobre la emergencia.",
    "enfoqueLead": "Informa sobre el rescate, identifica a la persona auxiliada y sitúa el hecho en el contexto de una creciente del río.",
    "tipo": "Informativa de sucesos y seguridad ciudadana, porque relata una emergencia y una intervención policial para proteger la vida.",
    "w": {
      "Qué": "Un policía rescató a una mujer que cayó al río.",
      "Quién": "Un policía y una mujer de 26 años.",
      "Dónde": "En el río San Alberto, departamento del Cesar.",
      "Por qué": "La mujer cayó al afluente después de una creciente que aumentó el riesgo."
    },
    "enlace": ""
  },
  {
    "id": "reg-4",
    "categoria": "Región",
    "etiqueta": "La Guajira",
    "titulo": "Los Trupillos, en Riohacha, ya cuenta con servicio de agua potable: más de 2.000 beneficiados.",
    "sumario": "Con 50 metros de tubería, empalmes y válvulas de sectorización, Aqualia conectó el servicio de acueducto a cerca de 2.500 personas de este barrio.",
    "lead": "El agua en el barrio Los Trupillos fue una deuda pendiente por varios años. No obstante, esta cuenta quedó saldada esta semana, pues la empresa Aqualia culminó los trabajos operativos que eran necesarios para conectar al sector con las redes de acueducto.",
    "enfoqueTitulo": "Destaca la llegada del servicio de agua potable al barrio Los Trupillos y el beneficio que representa para sus habitantes.",
    "enfoqueSumario": "Complementa el titular con detalles técnicos de la intervención y una cifra aproximada de los beneficiarios.",
    "enfoqueLead": "Explica que la comunidad llevaba años esperando el servicio y anuncia la finalización de los trabajos que permitieron conectarla al acueducto.",
    "tipo": "Informativa de servicios públicos y desarrollo comunitario, porque comunica una mejora en el acceso al agua potable para los habitantes del barrio.",
    "w": {
      "Qué": "Se completaron los trabajos para conectar el barrio a las redes de acueducto.",
      "Quién": "La empresa Aqualia.",
      "Dónde": "En el barrio Los Trupillos, en Riohacha, La Guajira.",
      "Cuándo": "Durante la semana de publicación de la noticia."
    },
    "enlace": ""
  },
  {
    "id": "reg-5",
    "categoria": "Región",
    "etiqueta": "Córdoba",
    "titulo": "Creciente súbita de la quebrada de Uré, en el sur de Córdoba, ocasionó daños.",
    "sumario": "En las primeras horas de la mañana de este sábado 10 de octubre las aguas empezaron a descender, en especial en la zona céntrica, donde se registró la emergencia.",
    "lead": "Las fuertes lluvias registradas en las últimas horas tanto en el sur de Córdoba como en Antioquia hicieron que la quebrada de Uré, situada en el municipio que lleva el mismo nombre en este departamento del Caribe se desbordaran y causaran daños en la zona urbana.",
    "enfoqueTitulo": "Informa sobre una emergencia natural provocada por el desbordamiento de una quebrada y destaca las afectaciones ocasionadas en el municipio.",
    "enfoqueSumario": "Complementa el titular al indicar cuándo comenzó a disminuir el nivel de las aguas y qué zona había registrado la emergencia.",
    "enfoqueLead": "Explica la causa de la emergencia, identifica el fenómeno ocurrido y sitúa los daños en la zona urbana de San José de Uré.",
    "tipo": "Informativa de emergencias y fenómenos naturales, porque comunica las consecuencias de una creciente y las afectaciones a una comunidad.",
    "w": {
      "Qué": "El desbordamiento de la quebrada de Uré ocasionó daños.",
      "Quién": "Las fuertes lluvias son el fenómeno que desencadenó la emergencia.",
      "Dónde": "En San José de Uré, al sur de Córdoba, con lluvias también en Antioquia.",
      "Por qué": "Por las fuertes lluvias registradas durante las horas anteriores."
    },
    "enlace": ""
  },
  {
    "id": "cul-1",
    "categoria": "Cultura",
    "etiqueta": "Arte",
    "titulo": "Rubén Barrios Rodríguez lleva el arte barranquillero a Suiza.",
    "sumario": "El artista visual participará en el Festival FILMAR en América Latina con una performance sobre la masculinidad. También presentará dos exposiciones individuales en Ginebra, con obras que exploran el cuerpo, la sexualidad y las identidades.",
    "lead": "El arte barranquillero se sigue tomando distintos escenarios del mundo, uno de estos es el del artista visual Rubén Barrios Rodríguez quien llevará su trabajo a Suiza durante noviembre, con una agenda que incluye una performance en el Festival FILMAR en América Latina y dos exposiciones individuales en espacios de Ginebra.",
    "enfoqueTitulo": "Destaca la proyección internacional del artista barranquillero Rubén Barrios Rodríguez y la oportunidad de presentar su trabajo en Suiza.",
    "enfoqueSumario": "Amplía la información del titular al explicar las actividades que realizará el artista y los temas que aborda mediante sus obras.",
    "enfoqueLead": "Presenta al artista, anuncia sus actividades culturales internacionales y precisa el lugar y el periodo en que se desarrollarán.",
    "tipo": "Informativa cultural y artística, porque destaca la proyección internacional de un creador colombiano y la presencia del arte barranquillero en escenarios extranjeros.",
    "w": {
      "Qué": "La presentación internacional del trabajo artístico de Rubén Barrios Rodríguez.",
      "Quién": "El artista visual Rubén Barrios Rodríguez.",
      "Dónde": "Suiza, con actividades en Ginebra y en el Festival FILMAR en América Latina.",
      "Cuándo": "Durante noviembre."
    },
    "enlace": ""
  },
  {
    "id": "cul-2",
    "categoria": "Cultura",
    "etiqueta": "Cine y animación",
    "titulo": "‘Avatar: Los Siete Refugios’ y una mirada diferente a la franquicia animada.",
    "sumario": "Michael Dante DiMartino y Ethan Spaulding, productores ejecutivos de la nueva serie animada, hablaron con EL HERALDO sobre los cambios en el universo de Avatar, la relación entre las gemelas Pavi y Nisha y la identidad de esta nueva historia que ya estrenó en Paramount+ sus primeros episodios.",
    "lead": "La franquicia de Avatar presentó una nueva etapa con Avatar: Los Siete Refugios, una serie que transcurre en un mundo marcado por una catástrofe y que plantea un escenario diferente al que conocieron los seguidores de Aang y Korra. Michael Dante DiMartino, cocreador de la franquicia, y Ethan Spaulding, productor ejecutivo, conversaron con EL HERALDO sobre las decisiones creativas detrás de esta nueva historia.",
    "enfoqueTitulo": "Presenta una nueva etapa de la franquicia animada Avatar y anuncia una propuesta narrativa diferente a las historias anteriores de ese universo.",
    "enfoqueSumario": "Identifica a los entrevistados y anticipa los temas principales de la conversación: los cambios narrativos, los personajes y el estreno de la serie.",
    "enfoqueLead": "Introduce la nueva serie, explica qué la diferencia de sus antecesoras y presenta a los responsables creativos que hablan sobre su desarrollo.",
    "tipo": "Informativa cultural y de entretenimiento audiovisual, porque analiza una producción animada y explica sus novedades narrativas a los seguidores de la franquicia.",
    "w": {
      "Qué": "La presentación de una nueva etapa de la franquicia con Avatar: Los Siete Refugios.",
      "Quién": "Michael Dante DiMartino y Ethan Spaulding.",
      "Dónde": "En el universo ficticio de Avatar; la entrevista se realizó con EL HERALDO, pero el párrafo no precisa el lugar físico de la conversación.",
      "Cómo": "Mediante una nueva historia ambientada en un mundo afectado por una catástrofe y con decisiones creativas diferentes."
    },
    "enlace": ""
  },
  {
    "id": "cul-3",
    "categoria": "Cultura",
    "etiqueta": "Cine documental",
    "titulo": "La Muestra Internacional Documental de Bogotá presentará 120 películas para descubrir otras realidades.",
    "sumario": "La MIDBO se realizará del 27 de octubre al 4 de noviembre.",
    "lead": "La Muestra Internacional Documental de Bogotá (MIDBO) regresa con 120 películas, provenientes de 40 países, que invitan al público a descubrir otras formas de mirar, escuchar y comprender el mundo a través del cine de lo real.",
    "enfoqueTitulo": "Anuncia un evento cinematográfico que reúne una amplia selección de documentales y busca acercar al público a distintas realidades sociales y culturales.",
    "enfoqueSumario": "Precisa las fechas del evento y complementa el titular con información sobre su programación.",
    "enfoqueLead": "Presenta el regreso de la muestra, destaca la cantidad y procedencia de las producciones y explica el propósito cultural del evento.",
    "tipo": "Informativa cultural y cinematográfica, porque promueve el cine documental y la diversidad de perspectivas sobre la realidad.",
    "w": {
      "Qué": "El regreso de la Muestra Internacional Documental de Bogotá.",
      "Quién": "La organización de la MIDBO y los realizadores de las películas seleccionadas.",
      "Dónde": "Bogotá, según el nombre del evento; el lead no especifica las sedes.",
      "Cómo": "Mediante una selección de 120 películas provenientes de 40 países."
    },
    "enlace": ""
  },
  {
    "id": "cul-4",
    "categoria": "Cultura",
    "etiqueta": "Cine colombiano",
    "titulo": "Tras su recorrido internacional, ‘Donde comienza el río’ llega a los cines colombianos.",
    "sumario": "Tras su estreno mundial en la sección Centrepiece del Festival Internacional de Cine de Toronto (TIFF) y su participación en la Selección Oficial Colombia Viva del Bogotá International Film Festival (BIFF12), el tercer largometraje del director colombiano Juan Andrés Arango llega a las salas del país con distribución de Cineplex.",
    "lead": "Este 15 de octubre se estrena en Colombia ‘Donde comienza el río’, el tercer largometraje del director y guionista colombiano Juan Andrés Arango. La película sigue a Yajaira, una joven indígena de 19 años que vive con su hija María, de cinco años, en un barrio violento de Bogotá y decide regresar a la comunidad de la que huyó.",
    "enfoqueTitulo": "Destaca el estreno en las salas colombianas de una película que previamente participó en festivales internacionales.",
    "enfoqueSumario": "Resalta la trayectoria internacional de la película, identifica a su director y señala quién se encarga de distribuirla en Colombia.",
    "enfoqueLead": "Anuncia el estreno nacional y presenta a la protagonista, su situación familiar y el conflicto que impulsa la historia.",
    "tipo": "Informativa cultural y cinematográfica, porque anuncia un estreno nacional y destaca una producción colombiana con recorrido internacional.",
    "w": {
      "Qué": "El estreno de la película Donde comienza el río.",
      "Quién": "El director Juan Andrés Arango y la protagonista de la historia, Yajaira.",
      "Dónde": "En Colombia; parte de la trama transcurre en Bogotá.",
      "Cuándo": "El 15 de octubre de 2026."
    },
    "enlace": ""
  },
  {
    "id": "cul-5",
    "categoria": "Cultura",
    "etiqueta": "Cine colombiano y supervivencia",
    "titulo": "‘Pacífico’ llegó a las salas de cine con una historia real de lucha y supervivencia en el mar colombiano.",
    "sumario": "Desde este jueves 8 de octubre se encuentra disponible en las carteleras del país.",
    "lead": "En este mes de octubre se suma al cine una nueva producción inspirada en hechos reales. Se trata de ‘Pacífico’, una película dirigida por Riccardo Gabrielli R. y producida por MovieBox Producciones y Spike Cine, que desde este jueves 8 de octubre se encuentra en las carteleras del país.",
    "enfoqueTitulo": "Anuncia el estreno de una película inspirada en hechos reales y destaca el componente de supervivencia que constituye el centro de su historia.",
    "enfoqueSumario": "Complementa el título al precisar la fecha de estreno y confirmar que la película llegó a las salas de cine colombianas.",
    "enfoqueLead": "Presenta la película, identifica al director y a las productoras, y comunica la fecha en que comenzó su exhibición comercial en Colombia.",
    "tipo": "Informativa cultural y cinematográfica, porque anuncia una producción inspirada en hechos reales y comunica su llegada a las carteleras nacionales.",
    "w": {
      "Qué": "El estreno de la película Pacífico.",
      "Quién": "El director Riccardo Gabrielli R. y las productoras MovieBox Producciones y Spike Cine.",
      "Dónde": "En las salas de cine de Colombia.",
      "Cuándo": "Desde el jueves 8 de octubre de 2026."
    },
    "enlace": ""
  },
  {
    "id": "dep-1",
    "categoria": "Deportes",
    "etiqueta": "Salim Hanna competirá en la Fórmula 3 en 2027",
    "titulo": "“Siguen las buenas noticias para el piloto barranquillero Salim Hanna: ¡competirá en la Fórmula 3 en 2027!”",
    "sumario": "Tres horas después de anunciarse su ingreso a la Ferrari Driver Academy, se oficializó que el colombiano afrontará la próxima temporada de la Fórmula 3 de la FIA.",
    "lead": "Luz verde para las buenas noticias sobre Salim Hanna. No solo tendrá el respaldo de Ferrari para perseguir su sueño de llegar a la Fórmula Uno. El piloto barranquillero también afrontará en 2027 uno de los desafíos más importantes de su carrera: disputar una temporada completa de la Fórmula 3 de la FIA, una categoría clave en el camino hacia la máxima expresión del automovilismo mundial.",
    "enfoqueTitulo": "El título destaca el avance deportivo del piloto barranquillero Salim Hanna, anunciando que competirá en la Fórmula 3 durante 2027. La expresión “siguen las buenas noticias” presenta el hecho desde una perspectiva positiva y busca despertar el interés del lector por su crecimiento profesional.",
    "enfoqueSumario": "Amplía el título al relacionar la participación de Hanna en la Fórmula 3 con su reciente ingreso a la academia de pilotos de Ferrari. Además, precisa que la noticia fue oficializada y que el reto deportivo corresponde a la temporada 2027.",
    "enfoqueLead": "Presenta el respaldo de Ferrari y la participación de Salim Hanna en una temporada completa de la Fórmula 3. También explica la importancia de este paso para su aspiración de llegar a la Fórmula Uno.",
    "tipo": "noticia deportiva de actualidad.",
    "w": {
      "Qué": "competirá en una temporada completa de la Fórmula 3 de la FIA.",
      "Quién": "Salim Hanna, piloto barranquillero.",
      "Cuándo": "en 2027.",
      "Dónde": "no se especifica un circuito o lugar concreto en el primer párrafo.",
      "Cómo": "con el respaldo de Ferrari.",
      "Por qué": "para avanzar en su sueño de llegar a la Fórmula Uno."
    },
    "enlace": ""
  },
  {
    "id": "dep-2",
    "categoria": "Deportes",
    "etiqueta": "Los Cerveceros regresan a la Serie Mundial",
    "titulo": "“Los Cerveceros barren a los Dodgers y regresan a la Serie Mundial después de 44 años”.",
    "sumario": "La novena de Milwaukee ganó la Serie de Campeonato de la Liga Nacional ganando cuatro juegos para dejar sin oportunidad a Shohei Ohtani y su equipo.",
    "lead": "Terminó la espera para los fanáticos de los Cerveceros de Milwaukee. Después de 44 años estarán en una Serie Mundial luego de que barrieran en cuatro juegos a los Dodgers de Los Ángeles en la Serie de Campeonato de la Liga Nacional.",
    "enfoqueTitulo": "Destaca la clasificación de los Cerveceros de Milwaukee a la Serie Mundial tras vencer a los Dodgers de Los Ángeles en la Serie de Campeonato de la Liga Nacional. La referencia a los 44 años resalta la importancia histórica del resultado.",
    "enfoqueSumario": "Explica cómo se consiguió la clasificación: Milwaukee ganó los cuatro encuentros de la serie y eliminó al equipo de Los Ángeles, en el que juega Shohei Ohtani.",
    "enfoqueLead": "Informa sobre el regreso de Milwaukee a la Serie Mundial después de 44 años y explica que lo consiguió al ganar los cuatro partidos frente a los Dodgers en la serie de campeonato.",
    "tipo": "noticia deportiva de resultados.",
    "w": {
      "Qué": "los Cerveceros regresan a la Serie Mundial.",
      "Quién": "los Cerveceros de Milwaukee y los Dodgers de Los Ángeles.",
      "Cuándo": "después de 44 años; el primer párrafo no señala una fecha exacta.",
      "Dónde": "no indica un estadio o ciudad específica en el primer párrafo.",
      "Cómo": "ganando cuatro partidos consecutivos en la Serie de Campeonato.",
      "Por qué": "porque vencieron a los Dodgers y obtuvieron la clasificación."
    },
    "enlace": ""
  },
  {
    "id": "dep-3",
    "categoria": "Deportes",
    "etiqueta": "Postergan pruebas del Mundial de Patinaje",
    "titulo": "“Mundial de patinaje: postergan pruebas de carretera por problemas con el asfalto”.",
    "sumario": "Tras las múltiples caídas en los calentamientos, la organización postergó las competiciones después de la negativa de 20 países a correr bajo los riesgos del asfalto en mal estado y una curva del trazado demasiado cerrada para permitir los giros.",
    "lead": "Los organizadores de los Juegos Mundiales de Patinaje que se celebran en Asunción postergaron este jueves tres pruebas de carretera por el mal estado del asfalto expuestas por unas 20 delegaciones ante las caídas de varios participantes en la avenida Costanera, sector elegido para las competencias.",
    "enfoqueTitulo": "Comunica la decisión de aplazar algunas pruebas de carretera del Mundial de Patinaje. La causa central que presenta es el mal estado del asfalto, un factor que afecta la seguridad de los deportistas.",
    "enfoqueSumario": "Explica las razones del aplazamiento: las caídas durante los calentamientos, el estado de la carretera y la negativa de delegaciones a competir en condiciones consideradas riesgosas.",
    "enfoqueLead": "Informa sobre el aplazamiento de tres pruebas de carretera, identifica a los organizadores como responsables de la decisión y explica que el problema se relacionó con el asfalto y las caídas de los participantes.",
    "tipo": "noticia deportiva informativa.",
    "w": {
      "Qué": "se postergaron tres pruebas de carretera.",
      "Quién": "los organizadores de los Juegos Mundiales de Patinaje.",
      "Cuándo": "el jueves, según el primer párrafo.",
      "Dónde": "Asunción, específicamente la avenida Costanera.",
      "Cómo": "mediante el aplazamiento de las competiciones.",
      "Por qué": "por el mal estado del asfalto y las caídas de varios participantes."
    },
    "enlace": ""
  },
  {
    "id": "dep-4",
    "categoria": "Deportes",
    "etiqueta": "Sancionan durante 24 años a un tenista por amañar partidos",
    "titulo": "“Imponen sanción de 24 años a tenista profesional por amañar resultados de partidos”.",
    "sumario": "Stefan Milicevic no podrá participar en eventos tenísticos por más de dos décadas.",
    "lead": "La Agencia Internacional de integridad del Tenis (ITIA) ha suspendido al tenista serbio Stefan Milicevic durante 24 años y le ha impuesto una multa de 70.000 dólares, por infracciones graves de las normas anticorrupción del tenis, al reclutar jugadores para amañar partidos.",
    "enfoqueTitulo": "Anuncia una sanción de larga duración contra un tenista profesional por manipular resultados. El título pone el énfasis en la gravedad de la medida disciplinaria y en la conducta que la originó.",
    "enfoqueSumario": "Resume la consecuencia principal de la sanción: el tenista queda inhabilitado para participar en competiciones de tenis durante un periodo superior a veinte años.",
    "enfoqueLead": "Presenta la decisión de la entidad disciplinaria, identifica al deportista sancionado, especifica la duración de la suspensión y el valor de la multa, y explica la conducta que motivó la sanción.",
    "tipo": "noticia deportiva judicial o disciplinaria.",
    "w": {
      "Qué": "se impusieron una suspensión de 24 años y una multa de 70.000 dólares.",
      "Quién": "la ITIA impuso la sanción a Stefan Milicevic, tenista serbio.",
      "Cuándo": "no se precisa en qué fecha se anunció la sanción en el primer párrafo.",
      "Dónde": "no se indica un lugar específico en el primer párrafo.",
      "Cómo": "mediante una suspensión deportiva y una multa económica.",
      "Por qué": "por infracciones de las normas anticorrupción y por reclutar jugadores para amañar partidos."
    },
    "enlace": ""
  },
  {
    "id": "dep-5",
    "categoria": "Deportes",
    "etiqueta": "Benfica vence al Celtic con goles de los colombianos Durán",
    "titulo": "“Benfica 4, Celtic 1: Los Durán se reportan con goles en la Europa League”.",
    "sumario": "Jhon Jader marcó doblete por los locales, mientras que el samario Camilo anotó el gol del descuento.",
    "lead": "Tarde inspirada para Jhon Jader Durán en la Uefa Europa League. El atacante colombiano comandó la contundente victoria 4-1 del Benfica sobre el Celtic de Escocia en el Estadio da Luz este jueves, firmando un doblete antes del descanso que liquidó el compromiso desde temprano.",
    "enfoqueTitulo": "Destaca el triunfo del Benfica por 4-1 ante el Celtic y el aporte goleador de los futbolistas colombianos Jhon Jader Durán y Camilo Durán. La presentación del marcador permite conocer rápidamente el resultado del partido.",
    "enfoqueSumario": "Detalla la participación de los dos futbolistas colombianos en el marcador: Jhon Jader Durán anotó dos goles para el Benfica y Camilo Durán marcó el tanto del descuento para el Celtic.",
    "enfoqueLead": "Describe la victoria del Benfica, destaca el desempeño de Jhon Jader Durán y señala que sus dos goles antes del descanso fueron determinantes para encaminar el resultado.",
    "tipo": "noticia deportiva de resultados.",
    "w": {
      "Qué": "el Benfica venció 4-1 al Celtic.",
      "Quién": "el Benfica, el Celtic y el atacante colombiano Jhon Jader Durán.",
      "Cuándo": "el jueves, según el primer párrafo.",
      "Dónde": "en el Estadio da Luz.",
      "Cómo": "con un doblete de Jhon Jader Durán antes del descanso y un marcador final de 4-1.",
      "Por qué": "el primer párrafo explica que el doblete encaminó la victoria, pero no expone una causa previa del triunfo."
    },
    "enlace": ""
  }
];
