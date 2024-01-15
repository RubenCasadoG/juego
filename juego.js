//Empezamos el juego con 3 vidas cada uno y una bala en la recámara. 
//Contamos con 3 posibilidades para jugarç (disparar(si no se protege pierde una vida el rival), protegerse y recargar (añadien))

const juego = require("prompt-sync")({sigint: true})

let nombre = juego("[+] ¿Cómo te llamas? --> ")
console.log("\n[+] Buenas " + nombre)
console.log("[+] Jugarás contra la máquina hasta que alguno de los 2 se quede sin vidas.")
console.log("\n[+] Tienes 3 acciones posibles:")
console.log("\n[+] RECARGAR: Añades una bala a la recámara.")
console.log("[+] DISPARAR: Restas 1 vida al rival si no se protege.")
console.log("[+] PROTEGER: En caso de que el rival te dispare no pierdes vida.")
console.log("\n[+] Comienzas con 3 vidas y una bala en la recámara")
console.log("\n[+] ¿Qué acción quieres realizar?")