let cliente = {
  name: 'Denisse Peralta Rojo',
  cuenta: '12345678',
  password: '1234'
}
$('#login-button').click(function () {

  $('#login-button').fadeOut("slow", function () {
    $("#container").fadeIn();
    TweenMax.from("#container", .4, { scale: 0, ease: Sine.easeInOut });
    TweenMax.to("#container", .4, { scale: 1, ease: Sine.easeInOut });
  });
});

$(".close-btn").click(function () {
  TweenMax.from("#container", .4, { scale: 1, ease: Sine.easeInOut });
  TweenMax.to("#container", .4, { left: "0px", scale: 0, ease: Sine.easeInOut });
  $("#container, #forgotten-container").fadeOut(800, function () {
    $("#login-button").fadeIn(800);
  });
});





function validarCuenta() {
  var cuenta = document.getElementById("claveCuenta").value;
  var password = document.getElementById("passCuenta").value;
  var id1 = "";
  var id = "";
  var cuenta1 = "";
  var tempoCuenta = "";
  var pass = "";
  var tempo = 0;
  var cortar = false;


    if(cuenta == cliente.cuenta && password == cliente.password){
      window.location = "Cuentahabiente.html";
      console.log('Entro');
    }else{
      swal({
        title: "Error",
        text: "Cuenta  o clave incorrecto",
        button: "Por favor inténtalo de nuevo",
      });
    }

    /* if (campoClaveCuenta == "" && campoContraCuenta == "") {
      tempo = 2;
    } else if (campoClaveCuenta == cuenta1 && campoContraCuenta == pass) {

      tempo = 1;
      cortar = true;
      tempoCuenta = cuenta1;


    } 
  if (tempo == 1) {
    db.collection("traspaso").onSnapshot((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        id1 = `${doc.id}`;
        var washingtonRef = db.collection("traspaso").doc(id1);

        return washingtonRef.update({

          cuenta: tempoCuenta,

        })

          .then(function () {
            console.log("Document successfully updated!");
            window.location = "Cuentahabiente.html";
          })
          .catch(function (error) {
            // The document probably doesn't exist.
            console.error("Error updating document: ", error);
          });
      });
    });
  } else if (tempo == 2) {
    swal({
      title: "Error",
      text: "Algún o ambos espacios estan vacios",
      button: "Continuar",
    });
  } else {
    swal({
      title: "Error",
      text: "Verifique si la información es correcta, puede que la cuenta no exista o clave sea incorrecta",
      button: "Continuar",
    });
  }
}
 */
}