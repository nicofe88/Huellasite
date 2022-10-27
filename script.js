function validarForm() {
    let x = document.forms["myform"]["email"].value;
    if (x == "") {
      alert("Para contactarte necesitamos por lo menos un email");
      return false;
    }
  }