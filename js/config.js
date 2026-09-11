// Configuración global y enlaces CSV de Google Sheets para Panamerican Systems
const CONFIG = {
    sheets: {
        proyectos: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vQ29KpQ1WHCIZN32O5C1cY29jAIonwN62OJnhDc9u_3Tr2lpmlhN_d2_Nvk0MKbfLLArvSjPd-avfPj/pub?gid=0&single=true&output=csv',
        productos: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vQ29KpQ1WHCIZN32O5C1cY29jAIonwN62OJnhDc9u_3Tr2lpmlhN_d2_Nvk0MKbfLLArvSjPd-avfPj/pub?gid=1005578892&single=true&output=csv'
    },
    whatsappNumber: '525517407646', // Reemplaza con tu número corporativo real (código de país + número)
    defaultProjects: [
        {
            NOMBRE: 'Mikuna Wassi – Menú Interactivo & Sistema de Pedidos',
            DESCRIPCION: 'Aplicación web móvil para restaurante con soporte multilingüe, filtrado por categorías y envío automatizado vía WhatsApp.',
            URL: 'alfonsohr6.github.io/mikuna-wassi-web'
        },
        {
            NOMBRE: 'Las Colcas',
            DESCRIPCION: 'Sitio web informativo enfocado en experiencia visual y presentación limpia de servicios turísticos/gastronómicos.',
            URL: 'alfonsohr6.github.io/lascolcas'
        }
    ],
    defaultProducts: [
        {
            NOMBRE: '📱 Menú o Catálogo Digital QR',
            DESCRIPCION: 'Tus clientes escanean un código QR y consultan tu carta al instante con integración directa a pedidos por WhatsApp.'
        },
        {
            NOMBRE: '📍 Web Corporativa Profesional',
            DESCRIPCION: 'Una carta de presentación limpia y rápida para mostrar tu ubicación, horarios y servicios principales.'
        },
        {
            NOMBRE: '⚡ Automatización de Ventas',
            DESCRIPCION: 'Botones estratégicos y flujos directos para concretar ventas sin complicaciones técnicas.'
        }
    ]
};