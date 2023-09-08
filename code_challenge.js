document.addEventListener("DOMContentLoaded", function () {
  const formulario = document.getElementById("form");
  formulario.addEventListener("submit", function (e) {
      e.preventDefault();

      const nombre = document.getElementById("nombre").value;
      const apellido = document.getElementById("apellido").value;
      const fecha = document.getElementById("fecha").value;

      const data = {
          nombre: nombre,
          apellido: apellido,
          fecha: fecha
      };

      const jsonData = JSON.stringify(data);

      fetch("https://jsonplaceholder.typicode.com/users", {
          method: "POST",
          headers: {
              "Content-Type": "application/json"
          },
          body: jsonData
      })
      .then(response => response.json())
      .then(data => {
          console.log("Respuesta del servidor:", data);
      })
      .catch(error => {
          console.error("Error en la solicitud:", error);
      });
  });
});