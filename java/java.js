const courses = [
    { name: "Tecnicatura Superior en Análisis de Sistemas" },
    { name: "Tecnicatura Superior en Gestión Ambiental" },
    { name: "Tecnicatura Superior en Emergencias de Salud" },
    { name: "Tecnicatura Superior en Logística" },
    { name: "Tecnicatura Superior en Turismo" },
    { name: "Tecnicatura Superior en Acompañamiento Terapéutico" }, // Corregido el nombre de carrera
    { name: "Tecnicatura Superior en Emergencias de Salud" } // Eliminado el espacio extra
];

// Función para generar las opciones de carrera en el formulario
function generateCourseOptions() {
    const courseSelect = document.querySelector(".course-select"); // Cambiado a querySelector
    courses.forEach(course => {
        const option = document.createElement("option");
        option.value = course.name;
        option.textContent = course.name;
        courseSelect.appendChild(option);
    });
}

// Función para manejar el envío del formulario de inscripción
function handleFormSubmit(event) {
    event.preventDefault();

    const course = document.querySelector(".course-select").value; // Cambiado a querySelector
    const name = document.querySelector(".controls[name='nombre']").value; // Agregado [name='nombre']
    const email = document.querySelector(".controls[name='correo']").value; // Agregado [name='correo']

    if (course && name && email) {
        // Aquí puedes realizar la lógica para enviar el formulario
        console.log("Formulario enviado");
        console.log("Carrera:", course);
        console.log("Nombre:", name);
        console.log("Email:", email);

        // Restablecer los campos del formulario
        document.querySelector(".course-select").selectedIndex = 0; // Cambiado a querySelector
        document.querySelector(".controls[name='nombre']").value = ""; // Agregado [name='nombre']
        document.querySelector(".controls[name='correo']").value = ""; // Agregado [name='correo"]

        // Mostrar un mensaje de éxito
        alert("Formulario enviado correctamente");
    } else {
        // Mostrar un mensaje de error
        alert("Por favor, completa todos los campos");
    }
}

// Cargar las opciones de carrera al cargar la página
window.onload = function () {
    generateCourseOptions();
    document.querySelector(".registration-form").addEventListener("submit", handleFormSubmit); // Cambiado a querySelector
};
// Función para manejar el envío del formulario de inscripción
function handleFormSubmit(event) {
   event.preventDefault();

    const course = document.querySelector(".course-select").value;
    const name = document.querySelector(".controls[name='nombre']").value;
    const email = document.querySelector(".controls[name='correo']").value;

   if (course && name && email) {
       // Redirigir al usuario al formulario de Google
       window.location.href = "https://docs.google.com/forms/d/e/1FAIpQLSd34R95kIqtIdDMqbkVsxfGOqjVvRwBdVy8zvmSo6QY0fXeeQ/viewform?usp=pp_url"; // Reemplaza con la URL correcta

        
       alert("Formulario enviado correctamente. Serás redirigido al formulario de Google.");
    } else {
     // Mostrar un mensaje de error si no se completan todos los campos
       alert("Por favor, completa todos los campos antes de enviar el formulario.");
    }
}

