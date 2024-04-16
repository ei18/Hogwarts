//Paso 1
const estudiante = {
    nombre: "Gin",
    edad: 12,
    familia: "Carrow" ,
    linaje: "Sangre pura",
    casa: "Gryffindor",
    animalPatronus: "Ciervo",
    cualidades: "Valor, fuerza, audacia",
    boggart: "Embarazo",
    transformacionHechizo: "Perritos locos"
};

console.log(estudiante);

//Paso 2
const clasesProfes = {
    transformaciones: "Profesor Kevin Slughorn",
    herbologia: "Profesora Maria Umbridge",
    pociones: "Profesora Liliana McGonagall",
    encantamientos: "Profesora Jackie",
    defensaContraLasArtesOscuras: "Profesor Robinson Snape ",
    animalesMagicos: "Profesor David Filch",
    historiaDeMagia: "Profesor Ronald Sprout",
};

console.log(clasesProfes);

//Paso 3
const casas = {
    Gryffindor: {
      cualidades: ["Valor", "Fuerza", "Audacia"],
      linaje: ["Mestizo", "muggle", "Sangre pura"]
    },

    Hufflepuff: {
      cualidades: ["Justicia", "Lealtad", "Paciencia"],
      linaje: ["Mestizo", "muggle"]
    },

    Ravenclaw: {
      cualidades: ["Creatividad", "Erudición", "Inteligencia"],
      linaje: ["Mestizo", "muggle", "Sangre pura"]
    },

    Slytherin: {
      cualidades: ["Ambición", "Determinación", "Astucia"],
      linaje: ["Sangre Pura"]
    }
};

let sombreroSeleccionador = "";

if (estudiante.cualidades.includes("valor") || estudiante.cualidades.includes("fuerza") || estudiante.cualidades.includes("audacia")) {
  if (estudiante.linaje === "Sangre Pura"){
    sombreroSeleccionador = "Slytherin";
  } else {
    sombreroSeleccionador = "Gryffindor";
  }
} else if (estudiante.cualidades.includes("justicia") || estudiante.cualidades.includes("lealtad") || estudiante.cualidades.includes("paciencia")) {
  sombreroSeleccionador = "Hufflepuff";
} else if (estudiante.cualidades.includes("creatividad") || estudiante.cualidades.includes("erudición") || estudiante.cualidades.includes("inteligencia")) {
  sombreroSeleccionador = "Ravenclaw";
}

console.log("El Sombrero Seleccionador te puso en: " + sombreroSeleccionador);

//Paso 4
const claseTransformaciones = {
  profesor: "Profesor Kevin Slughorn",
  hora: "6 a.m a 9 a.m",
  transformacionBoggarts: false,
  realizarHechizoRiddikulus: function() {
    if (this.transformacionBoggarts) {
      console.log("¡Riddikulus! El boggart ha cambiado de forma y fue derrotado con risas.");
    } else {
      console.log("No hay boggart en este momento.");
    }
  },

  enfrentarBoggart: function(boggart) {
    if (boggart) {
      console.log("El boggart tiene la forma de: " + boggart.formaOriginal);
      this.transformacionBoggarts = true; 
      this.realizarHechizoRiddikulus(); 
    } else {
      console.log("No hay boggart presente para enfrentar.");
    }
  }
};

const boggartEjemplo = {
  formaOriginal: "Embarazo"
};

claseTransformaciones.enfrentarBoggart(boggartEjemplo);

const defensaContraLasArtesOscuras = {
  generarPatronus: function() {
    const patronusCreado = ["Ciervo", "Tigre", "Águila", "Pantera", "Oso", "Fénix"];
    const randomIndex = Math.floor(Math.random() * patronusCreado.length);
    return patronusCreado[randomIndex];
  }
};

const animalPatronus = defensaContraLasArtesOscuras.generarPatronus();
console.log(animalPatronus);

//Paso 5
function dementor(estudiante) {
  if (estudiante.animalPatronus) {
    console.log("El estudiante conjura su patronus " + estudiante.animalPatronus + " y detiene al dementor.");
  } else {
    console.log("El estudiante no tiene un patronus y es absorbido por el dementor, por lo que es llevado a la enfermería.");
    llevarAEnfermeria(estudiante);
  }
};

function llevarAEnfermeria(estudiante) {
  console.log("El estudiante " + estudiante.nombre + " es llevado a la enfermería para recuperarse.");
};


//Paso 6
const estudianteHogwarts = {
  nombre: "Gin",
  animalPatronus: animalPatronus
};

dementor(estudianteHogwarts);


console.log("Estudiante: " + estudianteHogwarts.nombre);
console.log("Tu patronus es un: " + estudianteHogwarts.animalPatronus);

//Paso 7
const clasePociones = {
    profesor: "Liliana McGonagall",
    horario: "11:00 - 12:00",
    ingredientes: {
        crisopos: 2, 
        talloDescurainiaSophia: 1,
},
    tiempoPreparaciones: "5 minutos",
    pocionPreparada: false,  
    prepararPocion: function (){
        if(this.ingredientes.crisopos === 2 && this.ingredientes.talloDescurainiaSophia === 1) {
            console.log("Poción Felix Felicis. Preparada con éxito");
            this.prepararPocion = true;

        }else {
            console.log("No se puedo preparar la poción Felix Felicis.");
            this.prepararPocion = false;
        }       
    },
    aplicarConsecuencias: function(){
        if(this.prepararPocion === true) {
            clasePociones.profesor = "Profesor David Filch",
            console.log("El profesor de pociones ha sido cambiado por el profesor de animales mágicos");
        } else {
            console.log("El profesor sigue siendo el mismo");
        }
    
    }  
    
};
clasePociones.prepararPocion();
clasePociones.aplicarConsecuencias();