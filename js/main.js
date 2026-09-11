document.addEventListener('DOMContentLoaded', () => {
    initYear();
    initWhatsAppLinks();
    loadProyectos();
    loadProductos();
});

// 1. Mostrar año actual automáticamente
function initYear() {
    const yearSpan = document.getElementById('currentYear');
    if (yearSpan) yearSpan.textContent = new Date().getFullYear();
}

// 2. Generación de Enlaces de WhatsApp institucionales
function initWhatsAppLinks() {
    const mensaje = encodeURIComponent('Hola Panamerican Systems, me gustaría una consulta gratuita para mi negocio.');
    
    const ctaBtn = document.getElementById('whatsapp-cta-btn');
    if (ctaBtn) ctaBtn.href = `https://wa.me/${CONFIG.whatsappNumber}?text=${mensaje}`;

    const heroBtn = document.getElementById('whatsapp-hero-btn');
    if (heroBtn) heroBtn.href = `https://wa.me/${CONFIG.whatsappNumber}?text=${mensaje}`;
}

// 3. Cargar Proyectos / Casos de Éxito
async function loadProyectos() {
    const container = document.getElementById('projects-container');
    let data = await fetchSheetData(CONFIG.sheets.proyectos);
    
    if (!data || data.length === 0) {
        data = CONFIG.defaultProjects;
    }

    container.innerHTML = data.map(item => `
        <div class="project-item">
            <h3>${item.NOMBRE}</h3>
            <p>${item.DESCRIPCION || ''}</p>
            ${item.URL ? `<a href="${item.URL.startsWith('http') ? item.URL : 'https://' + item.URL}" target="_blank" class="btn-link">Ver Proyecto 🚀</a>` : ''}
        </div>
    `).join('');
}

// 4. Cargar Soluciones y Servicios empresariales
async function loadProductos() {
    const container = document.getElementById('products-container');
    let data = await fetchSheetData(CONFIG.sheets.productos);
    
    if (!data || data.length === 0) {
        data = CONFIG.defaultProducts;
    }

    container.innerHTML = data.map(item => `
        <div class="solution-card">
            <h3>${item.NOMBRE}</h3>
            <p>${item.DESCRIPCION || ''}</p>
            <a href="https://wa.me/${CONFIG.whatsappNumber}?text=${encodeURIComponent('Hola Panamerican Systems, me interesa el servicio de: ' + item.NOMBRE)}" target="_blank" class="btn-link">Consultar Servicio 📲</a>
        </div>
    `).join('');
}