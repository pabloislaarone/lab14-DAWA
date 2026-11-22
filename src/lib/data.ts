import { Milestone, Project, TechItem } from '@/types';

export const projects: Project[] = [
  {
    slug: 'edumatch-ai',
    color: '#8b7bff',
    roleShort: 'Frontend Android, equipo de 3',
    contextShort: 'Proyecto integrador, TECSUP',
    title: 'EduMatch AI',
    description:
      'Plataforma que conecta estudiantes con tutores mediante inteligencia artificial, con app Android, web y pagos integrados.',
    image: '/projects/edumatch-ai.png',
    technologies: [
      'Spring Boot',
      'Django REST',
      'Kotlin',
      'Jetpack Compose',
      'React',
      'MySQL',
      'OpenAI',
      'Stripe',
    ],
    featured: true,
    category: 'Full Stack · Móvil',
    status: 'Terminado',
    context: 'Proyecto integrador de TECSUP desarrollado en equipo de tres personas con Scrum.',
    problem:
      'Encontrar al tutor adecuado suele depender de recomendaciones sueltas: el estudiante no sabe quién domina su tema ni si su forma de enseñar le va a servir.',
    solution:
      'EduMatch AI analiza las necesidades del estudiante y lo empareja con tutores compatibles. Incluye reserva y pago de sesiones, videollamadas y notificaciones en tiempo real, tanto desde la app Android como desde la web.',
    role:
      'Diseñé la arquitectura del frontend Android con Kotlin y Jetpack Compose (MVVM, Retrofit, Hilt y DataStore para el manejo del token JWT) y participé en la gestión del backlog y los entregables de cada sprint.',
    highlights: [
      '49 historias de usuario implementadas en 4 sprints, organizadas en 13 épicas.',
      'Backend repartido entre Spring Boot (Java 21) y Django REST Framework.',
      'Módulos de IA con OpenAI GPT-4o-mini.',
      'Pagos con Stripe, notificaciones con Firebase Cloud Messaging y videollamadas con Jitsi Meet.',
    ],
  },
  {
    slug: 'marcador-26',
    color: '#3ecf8e',
    roleShort: 'Desarrollo completo',
    contextShort: 'Desarrollo en la Nube, TECSUP',
    title: 'Marcador 26',
    description:
      'App de pronósticos del Mundial 2026 con salas privadas, ranking en tiempo real y arquitectura escalable con Docker.',
    image: '/projects/marcador-26.png',
    technologies: [
      'Java 21',
      'Spring Boot',
      'React',
      'RabbitMQ',
      'Docker',
      'Nginx',
      'Prometheus',
      'Grafana',
      'k6',
    ],
    githubUrl: 'https://github.com/pabloislaarone/lab12-nube',
    featured: true,
    category: 'Backend · Cloud',
    status: 'Terminado',
    context: 'Laboratorio calificado del curso Desarrollo en la Nube (TECSUP).',
    problem:
      'Las pollas mundialistas entre amigos se llevan en hojas de cálculo: alguien tiene que calcular los puntos a mano y, en días de partido, todos consultan a la vez.',
    solution:
      'Una aplicación donde cada usuario crea salas por invitación, registra sus pronósticos y ve el ranking actualizado automáticamente. La API se replica detrás de un balanceador para soportar picos de tráfico.',
    role:
      'Desarrollé el proyecto completo: motor de puntuación, API REST, worker asíncrono, frontend e infraestructura de despliegue y monitoreo.',
    highlights: [
      'Motor de puntuación con 5 reglas, aislado en un módulo Java puro con pruebas unitarias.',
      'Recalculo de puntajes asíncrono con un worker que consume mensajes de RabbitMQ.',
      'Escalamiento horizontal: Nginx balancea la carga entre varias réplicas de la API.',
      'Pruebas de estrés con k6 comparando 1 vs 3 réplicas, con métricas en Prometheus y Grafana.',
    ],
  },
  {
    slug: 'elicitacion-ia',
    color: '#ff8a5c',
    roleShort: 'Proyecto individual',
    contextShort: 'Proyecto de fin de carrera, TECSUP',
    title: 'Simulador de IA para toma de requerimientos',
    description:
      'Plataforma donde estudiantes de software practican entrevistas de requerimientos por voz con clientes simulados por IA.',
    image: '/projects/elicitacion-ia.png',
    technologies: ['IA generativa', 'Agentes conversacionales', 'Interfaz por voz', 'Web'],
    featured: true,
    category: 'Inteligencia Artificial',
    status: 'En desarrollo',
    context: 'Proyecto de fin de carrera (investigación aplicada) en TECSUP.',
    problem:
      'Tomar requerimientos es una de las habilidades más difíciles de practicar en la formación: en clase casi nunca se enfrenta a un cliente real que es evasivo, impreciso o cambia de opinión.',
    solution:
      'El estudiante entrevista por voz a agentes de IA que interpretan clientes difíciles de distintos rubros. Cada cliente tiene necesidades ocultas y, al terminar, el sistema evalúa automáticamente cuáles logró descubrir el estudiante y cuáles se le escaparon.',
    role:
      'Proyecto individual: investigación, diseño del sistema y desarrollo del prototipo.',
    highlights: [
      'Tres clientes simulados por IA: Salud, Finanzas y Logística.',
      'Interacción principal por voz, como en una reunión real.',
      'Módulo de evaluación automática que compara necesidades captadas vs. ocultas.',
      'Trazabilidad de cada requerimiento descubierto durante la entrevista.',
    ],
  },
  {
    slug: 'techstore',
    color: '#38bdf8',
    roleShort: 'Web y apps móviles',
    contextShort: 'Laboratorios web y multiplataforma, TECSUP',
    title: 'TechStore',
    description:
      'Sistema de gestión de inventario con autenticación segura (JWT, OAuth y MFA) y app móvil en Flutter.',
    image: '/projects/techstore.png',
    technologies: ['Node.js', 'Express', 'MongoDB', 'JWT', 'OAuth', 'MFA (TOTP)', 'Flutter'],
    githubUrl: 'https://github.com/pabloislaarone/Lab08-TechStore',
    featured: false,
    category: 'Web · Móvil · Seguridad',
    status: 'Terminado',
    context: 'Caso práctico desarrollado en laboratorios de TECSUP (web y multiplataforma).',
    problem:
      'Una cadena de tiendas necesita controlar su inventario sin exponer la información a accesos no autorizados ni a ataques de fuerza bruta.',
    solution:
      'Aplicación web con registro e inicio de sesión seguros, cuatro perfiles de usuario con permisos distintos y autenticación de dos factores. La misma app de inventario se llevó a móvil con Flutter, en versión Material y en versión Cupertino (estilo iOS).',
    role: 'Desarrollé la aplicación web y las dos versiones de la app móvil.',
    highlights: [
      'Login con JWT, contraseñas cifradas con bcrypt y bloqueo tras intentos fallidos.',
      'Inicio de sesión con Google y GitHub (OAuth).',
      'Autenticación multifactor con Google Authenticator (TOTP), con el secreto cifrado en la base de datos.',
      'App móvil en Flutter con widgets Material y Cupertino.',
    ],
    extraLinks: [
      { label: 'App móvil (Material)', url: 'https://github.com/pabloislaarone/lab_07-08_Multi' },
      { label: 'App móvil (Cupertino)', url: 'https://github.com/pabloislaarone/lab_11-12_Multi' },
    ],
  },
  {
    slug: 'control-salon',
    color: '#f472b6',
    roleShort: 'De principio a fin',
    contextShort: 'Proyecto personal para una usuaria real',
    title: 'Control de ingresos para salón de belleza',
    description:
      'App para que una estilista registre sus ingresos y gastos del día y vea cómo le va semana a semana y mes a mes.',
    image: '/projects/control-salon.png',
    technologies: ['JavaScript', 'Chart.js', 'Google Apps Script', 'Kotlin', 'Jetpack Compose', 'Firebase'],
    featured: false,
    category: 'Producto real · Móvil',
    status: 'En desarrollo',
    context: 'Proyecto personal hecho para una usuaria real: una estilista que lleva su propio salón.',
    problem:
      'La estilista anotaba sus cobros y gastos en papel, así que no sabía con certeza cuánto ganaba al mes ni qué servicios le dejaban más.',
    solution:
      'La primera versión fue una web móvil donde registra cada servicio en segundos y ve estadísticas por día, semana y mes, con gastos fijos que se suman solos. La nueva versión es una app Android nativa con los datos en la nube, para que no se pierdan aunque se pierda el celular.',
    role:
      'Lo desarrollo de principio a fin: levantamiento de necesidades con la usuaria, diseño, desarrollo y despliegue.',
    highlights: [
      'Registro rápido de ingresos y gastos por categoría de servicio.',
      'Gráficos de ingresos vs. gastos y distribución por servicio con Chart.js.',
      'Versión 1: web en un solo archivo, con Google Sheets como base de datos vía Apps Script.',
      'Versión 2 en desarrollo: app nativa con Kotlin, Jetpack Compose y Firebase Firestore.',
    ],
  },
  {
    slug: 'ecoguardia-del-ruido',
    color: '#fbbf24',
    roleShort: 'Producto y marketing, equipo de 4',
    contextShort: 'Diseño de Proyectos de Innovación, TECSUP',
    title: 'EcoGuardia del Ruido',
    description:
      'Kit con Arduino que mide el ruido del aula y avisa con luces y pantalla cuando supera el nivel adecuado.',
    image: '/projects/ecoguardia-del-ruido.png',
    technologies: ['Arduino', 'Sensor de sonido', 'Pantalla LCD', 'LEDs'],
    featured: false,
    category: 'IoT · Innovación',
    status: 'Terminado',
    context:
      'Proyecto de innovación en equipo de cuatro personas (cursos Diseño de Proyectos de Innovación y Marketing de Nuevos Productos, TECSUP).',
    problem:
      'El ruido en las aulas afecta la concentración, pero los estudiantes no se dan cuenta de cuándo están hablando demasiado fuerte.',
    solution:
      'Un dispositivo que mide el nivel de sonido en tiempo real y lo muestra con un semáforo de LEDs y una pantalla LCD, pensado para venderse a instituciones educativas.',
    role:
      'Integrante del equipo: participé en el diseño del producto y preparé la estrategia de marketing (plaza, promoción y precio) para su exposición.',
    highlights: [
      'Señalización visual inmediata con semáforo de LEDs.',
      'Lectura del nivel de ruido en pantalla LCD.',
      'Proyecto planteado como producto comercial, con estudio de mercado y marketing mix.',
    ],
  },
];

export const personalInfo = {
  name: 'Pablo Isla',
  title: 'Desarrollador Full Stack',
  description:
    'Desarrollo aplicaciones web, móviles y backend con microservicios. Estudiante de Diseño y Desarrollo de Software en TECSUP.',
  email: 'pabloarone18@gmail.com',
  github: 'https://github.com/pabloislaarone',
  // Pegar aquí la URL de tu perfil (ej. https://www.linkedin.com/in/tu-usuario). Si está vacío, no se muestra.
  linkedin: '',
  // Número con código de país y sin espacios ni "+" (ej. 51987654321). Si está vacío, no se muestra.
  whatsapp: '',
  location: 'Lima, Perú',
  // Dominio final: se define en Vercel con la variable NEXT_PUBLIC_SITE_URL
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000',
  // Foto pendiente: dejar vacío muestra un avatar neutro
  avatar: '',
};

export const whatsappUrl = personalInfo.whatsapp
  ? `https://wa.me/${personalInfo.whatsapp}?text=${encodeURIComponent('Hola Pablo, vi tu portafolio y quisiera conversar contigo.')}`
  : '';

export const milestones: Milestone[] = [
  {
    label: 'En curso',
    title: 'Diseño y Desarrollo de Software',
    org: 'TECSUP · Lima',
    text: 'Formación en arquitectura de microservicios, desarrollo web y móvil, nube y gestión ágil de proyectos.',
    tags: ['Java', 'Spring Cloud', 'AWS', 'Scrum'],
    color: '#7b93ff',
  },
  {
    label: 'Proyecto integrador',
    title: 'EduMatch AI · Frontend Android',
    org: 'Equipo de 3',
    text: 'Diseñé la arquitectura de la app Android (MVVM, Retrofit, Hilt, DataStore) de una plataforma que conecta estudiantes con tutores mediante IA. 49 historias de usuario en 4 sprints.',
    tags: ['Kotlin', 'Compose', 'Spring Boot', 'OpenAI'],
    color: '#8b7bff',
  },
  {
    label: 'Desarrollo en la Nube',
    title: 'Marcador 26 · Desarrollo completo',
    org: 'Laboratorio calificado',
    text: 'App de pronósticos del Mundial 2026 con escalamiento horizontal: réplicas detrás de Nginx, worker con RabbitMQ y pruebas de estrés con k6.',
    tags: ['Docker', 'RabbitMQ', 'Grafana'],
    color: '#3ecf8e',
  },
  {
    label: 'Proyecto de fin de carrera',
    title: 'Simulador de IA para toma de requerimientos',
    org: 'Investigación aplicada · en desarrollo',
    text: 'Entrevistas por voz con clientes simulados por IA y evaluación automática de los requerimientos descubiertos.',
    tags: ['IA generativa', 'Voz'],
    color: '#ff8a5c',
  },
];

export const techStack: { group: string; items: TechItem[] }[] = [
  {
    group: 'Backend',
    items: [
      { name: 'Java', detail: 'Lenguaje', color: '#ff8a5c' },
      { name: 'Spring Boot', detail: 'Microservicios', color: '#3ecf8e' },
      { name: 'Node.js', detail: 'Express', color: '#3ecf8e' },
      { name: 'Django', detail: 'REST', color: '#3ecf8e' },
      { name: 'RabbitMQ', detail: 'Mensajería', color: '#fbbf24' },
    ],
  },
  {
    group: 'Frontend y móvil',
    items: [
      { name: 'React', detail: 'Web', color: '#38bdf8' },
      { name: 'Next.js', detail: 'Web', color: '#ededea' },
      { name: 'TypeScript', detail: 'Lenguaje', color: '#38bdf8' },
      { name: 'Tailwind', detail: 'Estilos', color: '#38bdf8' },
      { name: 'Kotlin', detail: 'Android', color: '#8b7bff' },
      { name: 'Compose', detail: 'Android UI', color: '#8b7bff' },
      { name: 'Flutter', detail: 'Multiplataforma', color: '#38bdf8' },
    ],
  },
  {
    group: 'Datos y nube',
    items: [
      { name: 'MySQL', detail: 'SQL', color: '#38bdf8' },
      { name: 'MongoDB', detail: 'NoSQL', color: '#3ecf8e' },
      { name: 'Firebase', detail: 'Cloud', color: '#ff8a5c' },
      { name: 'Docker', detail: 'Contenedores', color: '#38bdf8' },
      { name: 'AWS', detail: 'Nube', color: '#fbbf24' },
      { name: 'Git', detail: 'Versiones', color: '#ff8a5c' },
    ],
  },
];
