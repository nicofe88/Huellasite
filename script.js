function validarForm() {
    let x = document.forms["myform"]["email"].value;
    if (x == "") {
      alert("Para contactarte necesitamos por lo menos un email");
      return false;
    }
  }


  function traer() {
    fetch('https://randomuser.me/api')
      .then(res => res.json())
      .then(res => {
         console.log(res)
         console.log(res.results[0].email)
         contenido.innerHTML= `
           <img src="${res.results[0].picture.large}
             "width="300px" 
             class="img-fluid rounded-circle">
           <p>Nombre: ${res.results[0].name.first}</p>
           <p>Mail: ${res.results[0].email}</p>`
      })
   }