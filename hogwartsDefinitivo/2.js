const traeInfoEstudiante = document.querySelector('#infoEstudiante');

traeInfoEstudiante.innerHTML = `
    <h2>Información del Estudiante</h2> 
    <p><strong>Nombre:</strong> ${estudiante.nombre}
    <p><strong>Edad:</strong> ${estudiante.edad}
    <p><strong>Linaje:</strong> ${estudiante.linaje} 
    <p><strong>Casa:</strong> ${estudiante.casa}
    <p><strong>Animal Patronus: Aún no lo tienes, asiste primero a clase contra las artes oscuras</strong>
    <p><strong>Cualidades:</strong> ${estudiante.cualidades}
`;



