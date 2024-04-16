const infoEstudiante = document.querySelector('#infoEstudiante');

infoEstudiante.innerHTML = `
    <h2>Transformación</h2> 
    <p><strong>Nombre:</strong> ${estudiante.nombre}
    <p><strong>Edad:</strong> ${estudiante.edad}
    <p><strong>Linaje:</strong> ${estudiante.linaje} 
    <p><strong>Casa:</strong> ${estudiante.casa}
    <p><strong>Animal Patronus:</strong> ${estudiante.animalPatronus}
    <p><strong>Cualidades:</strong> ${estudiante.cualidades}
`;

