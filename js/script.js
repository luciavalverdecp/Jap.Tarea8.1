const DATA_URL = "json/data.json"; 

const container = document.getElementById("container"); 

function showData(dataArray) {

  container.innerHTML = "Estudiantes encontrados:"
  let contador = 1;

  for (let e of dataArray) {
    container.innerHTML += `<p>${contador}- ${e.name} ${e.lastname}</p>`; 
    contador++;
  }
}

function GetEstudiantes() {
  fetch(DATA_URL, {
    method: "GET"
  })
  .then(function(response) {
      return response.json();
  })
  .then(function(data) {
    showData(data.students);
  })
  .catch(function(error) {
    console.error('There was a problem with the fetch operation:', error);
  });
}
GetEstudiantes();