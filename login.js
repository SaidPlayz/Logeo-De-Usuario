function loguear() {

    var user = document.getElementById("usuario").value;

    var pass = document.getElementById("pass").value;

    if (user == "Said312" && pass == "123456789")

    {


        location.href = "https://famous-dasik-d024eb.netlify.app/"

    } else {
        alert("Los datos que ha ingresado no son los indicados, por favor intente de nuevo");
    }


}
