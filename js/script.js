 // Aquí tu código


  
  const agregados = document.getElementById("agregar");
  agregados.addEventListener("click",insertar);

  function insertar() {
    

    const primerRango = document.getElementById("lista");
    const segundoRango = document.createElement("li");

    
    primerRango.appendChild(segundoRango).insertAdjacentHTML("afterbegin",prompt("Introducir Datos"));
  }



   






  









