function validar() {
    let nombre, apellido, rut, correo, expresionCorreo;
    nombre = document.getElementById("nombre").value;
    apellido = document.getElementById("apellido").value;
    rut = document.getElementById("rut").value;
    correo = document.getElementById("email").value;
    edad = document.getElementById("edad").value;

    expresionCorreo = /\w+@+[a-z]+\.+[a-z]/;

    if (nombre === "" || apellido === "" || rut === "" || correo === "" || edad === "") {
        document.getElementById("contenedor-mensaje").innerHTML = `<div class="alert alert-danger" role="alert">
                Los campos son obligatorios
            </div>`;
        return false;
    } else if (nombre.length >= 30 || nombre.length <= 2) {
        document.getElementById("contenedor-mensaje").innerHTML = `<div class="alert alert-danger" role="alert">
            Nombre invalido
        </div>`;
        return false;
    } else if (apellido.length >= 30 || apellido.length <= 2) {
        document.getElementById("contenedor-mensaje").innerHTML = `<div class="alert alert-danger" role="alert">
            apellido invalido
        </div>`;
        return false;
    } else if (rut.length > 10 || rut.length < 7) {
        document.getElementById("contenedor-mensaje").innerHTML = `<div class="alert alert-danger" role="alert">
            Rut invalido
        </div>`;
        return false;
    } else if (!expresionCorreo.test(correo)) {
        document.getElementById("contenedor-mensaje").innerHTML = `<div class="alert alert-danger" role="alert">
            El correo no cumple el formato
        </div>`;
        return false;
    } else if (edad<=0) {
        document.getElementById("contenedor-mensaje").innerHTML = `<div class="alert alert-danger" role="alert">
            La edad no puede ser negativa
        </div>`;
        return false;
    }
    document.getElementById("contenedor-mensaje").innerHTML = `<div class="alert alert-success" role="alert">
        todos los datos se enviaron con éxito!
    </div>`;
    return false;
    
}

function checkRut(rut) {
    let valor = rut.value.replace('.', '');
    valor = valor.replace('-', '');
    cuerpo = valor.slice(0, -1);
    dv = valor.slice(-1).toUpperCase();
    rut.value = cuerpo + '-' + dv
}