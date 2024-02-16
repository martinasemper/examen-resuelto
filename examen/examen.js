let botonRojo = document.querySelector("#Rojo")

let botonNegro = document.querySelector("#Negro")

let botonBlanco = document.querySelector("#Blanco")

let img = document.querySelector("#fotoCronos")

let texto = document.querySelector("#nombreColor")

let botonInfo = document.querySelector("#info")

botonRojo.onmouseover = function ()
{
    img.src = "cronosRojo.png"
    texto.textContent = "ROJO MONTECARLO"
}
botonNegro.onmouseover = function ()
{
    img.src = "cronosNegro.png"
    texto.textContent = "NEGRO VULCANO"
}
botonBlanco.onmouseover = function ()
{
    img.src = "cronosBlanco.png"
    texto.textContent = "BLANCO PERLA"
}

botonInfo.onclick = function () {
    let edadUsuario =
    Number(prompt('Ingresa tu edad'))
    if (edadUsuario >= 18) {
    prompt("Ingresa tu correo porfavor")
    alert("Se pondran en contacto a la brevedad")
} else {
    alert("no puedes solicitar información.")
} }