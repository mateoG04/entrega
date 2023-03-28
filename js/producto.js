let nombre;
let nombreManga;
let precio = 0;
let cantidad;
let totalFinal = 0;
let seguirComprando;

nombre = prompt("Muy buenas, te damos la bienvenida a nuestra tienda de mangas. Ingrese su nombre de usuario");

do {
  nombreManga = prompt(`seleccione el manga que quiera comprar:
        1. Onepiece
        2. Dragonball
        3. Naruto
        4. Bleach
        5. Pokemon`);

  while (nombreManga <= 5){
    alert("no se a encontrado el nombre del manga, por favor vuelva a ingresar un nombre valido");
    nombreManga = prompt(`seleccione el manga que quiera comprar:
        1. Onepiece
        2. Dragonball
        3. Naruto
        4. Bleach
        5. Pokemon`);
  }
  precio = parseFloat(prompt(`a ingresado ${nombreManga + "/s"}. por favor ingrese el precio del producto elegido:
        1. Onepiece: $1500
        2. Dragonball $1200
        3. Naruto: $200
        4. Bleach: $2000
        5. Pokemon: $1400`)
  );
  while (precio <= 199) {
    precio = alert(
      "el precio indroducido es invalido, por favor vuelva a intentarlo");
    precio = parseFloat(
      prompt(`a ingresado ${nombreManga + "/s"
      }. Ingrese el precio del producto
        1. Onepiece: $1500
        2. Dragonball $1200
        3. Naruto: $200
        4. Bleach: $2000
        5. Pokemon: $1400`));
  }
  while (precio <= 0);
  cantidad = parseInt(
    prompt(`ingrese la cantidad que quiera llevar ${nombreManga + "/s"}`)
  );
  while (cantidad <= 0) {
    cantidad = parseInt(prompt("la cantidad introducida es incorrecta, debe colocar al menos 1. Por favor vuelva a intentarlo"));
    cantidad = parseInt(prompt(`ingrese la cantidad que quiera llevar ${nombreManga + "/s"}`));
  }
  totalFinal = totalFinal + precio * cantidad;
  seguirComprando = prompt("¿Quiere agregar algun otro producto? s/n");
  while ((seguirComprando != "s") && (seguirComprando != "n")){
    alert("La letra ingresada no corresponde a `s` ni a `n`, por favor vuelva a intentarlo")
    seguirComprando = prompt("¿Quiere agregar algun otro producto? si/no");
  }

} while (seguirComprando == "s");
alert(`El total final es: ${total}. ESPERAMOS QUE VUELVAS PRONTO`);