/**
 * Módulo para obtener y parsear datos de Google Sheets
 */
async function fetchSheetData(url) {
    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error('Error en red al intentar obtener los datos');
        const csvText = await response.text();
        
        return new Promise((resolve) => {
            Papa.parse(csvText, {
                header: true,
                skipEmptyLines: true,
                complete: (results) => {
                    // Filtrar filas completamente vacías o sin ID/Nombre
                    const cleanData = results.data.filter(row => row.NOMBRE && row.NOMBRE.trim() !== '');
                    resolve(cleanData);
                }
            });
        });
    } catch (error) {
        console.warn('Fallback activado para la URL:', url, error);
        return null; // Retorna null para usar los datos por defecto si falla la red
    }
}