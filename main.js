let cajero = prompt('Ingrese aquí su nombre y su apellido')
alert('Bienvenido ' + cajero)

let dias_trabajados = Number(prompt('Ingrese la cantidad de días trabajados'))

if (dias_trabajados > 0) {
    let acumulador = 0

    for (let i = 1; i <= dias_trabajados; i++) {
        let ingreso_diario = Number(prompt('Ingrese la recaudación diaria en USD para el día ' + i))
        acumulador += ingreso_diario
    }

    let promedio_diario = acumulador / dias_trabajados
    alert('Su promedio diario en estos ' + dias_trabajados + ' días es de ' + promedio_diario.toFixed(2) + ' USD')
} else {
    alert('El número de días trabajados debe ser mayor que cero, vuelva a actualizar los datos')}