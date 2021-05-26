boton.addEventListener('click', e => {
 e.preventDefault()


	let dia = document.getElementById("dia").value
	dia = parseInt(dia)


	let mes = document.getElementById("mes").value
	mes = parseInt(mes)

	let respuesta = document.getElementById("resultado")

	if (dia >= 21 && mes == 3 || dia <= 20 && mes == 4) {
		texto = `Su signo es: <br>
		<b> Aries pertenece al elemnto agua<b><br>
		<img src="imagenes/aries.png">`
		respuesta.innerHTML = texto
		respuesta.style.setProperty("visibility", "visible")
		respuesta.style.setProperty("opacity", "1")
		respuesta.style.setProperty("transition", "3s ease")

	} else if (dia >= 24 && mes == 9 || dia <= 23 && mes == 10) {
		texto = `Su signo es:<br>
		 <b>Libra pertenece al elemnto aire</b><br>
		  <img src="imagenes/libra.png">`
		respuesta.innerHTML = texto
		respuesta.style.setProperty("visibility", "visible")
		respuesta.style.setProperty("opacity", "1")
		respuesta.style.setProperty("transition", "3s ease")

	} else if (dia >= 21 && mes == 4 || dia <= 21 && mes == 5) {
		texto = `Su signo es:<br>
		<b> Tauro  pertenece al elemnto tierra <b> <br>
		<img src="imagenes/tauro.png">`
		respuesta.innerHTML = texto
		respuesta.style.setProperty("visibility", "visible")
		respuesta.style.setProperty("opacity", "1")
		respuesta.style.setProperty("transition", "3s ease")

	} else if (dia >= 24 && mes == 10 || dia <= 22 && mes == 11) {
		texto = `Su signo es:<br>
		<b>  Escorpio pertenece al elemnto agua<b> <br>
		<img src="imagenes/scorpio.png">`
		respuesta.innerHTML = texto
		respuesta.style.setProperty("visibility", "visible")
		respuesta.style.setProperty("opacity", "1")
		respuesta.style.setProperty("transition", "3s ease")

	} else if (dia >= 22 && mes == 5 || dia <= 21 && mes == 6) {
		texto = `Su signo es:<br>
		<b> Géminis pertenece al elemnto aire<b> <br>
		<img src="imagenes/gemini.png">`
		respuesta.innerHTML = texto
		respuesta.style.setProperty("visibility", "visible")
		respuesta.style.setProperty("opacity", "1")
		respuesta.style.setProperty("transition", "3s ease")

	} else if (dia >= 23 && mes == 11 || dia <= 21 && mes == 12) {
		texto = `Su signo es:<br>
		<b>  Sagitario pertenece al elemnto fuego<b> <br>
		<img src="imagenes/sagi.png">
		respuesta.innerHTML = texto
		respuesta.style.setProperty("visibility", "visible")
		respuesta.style.setProperty("opacity", "1")
		respuesta.style.setProperty("transition", "3s ease")

	} else if (dia >= 21 && mes == 6 || dia <= 23 && mes == 7) {
		texto = `Su signo es:<br>
		<b>  Cáncer pertenece al elemnto agua <b> <br>
		<img src="imagenes/cancer.png">`
		respuesta.innerHTML = texto
		respuesta.style.setProperty("visibility", "visible")
		respuesta.style.setProperty("opacity", "1")
		respuesta.style.setProperty("transition", "3s ease")

	} else if (dia >= 22 && mes == 12 || dia <= 20 && mes == 1) {
		texto = `Su signo es:<br>
		<b>  Capricornio pertenece al elemnto tierra<b> <br>
		<img src="imagenes/capri.png">`
		respuesta.innerHTML = texto
		respuesta.style.setProperty("visibility", "visible")
		respuesta.style.setProperty("opacity", "1")
		respuesta.style.setProperty("transition", "3s ease")

	} else if (dia >= 24 && mes == 7 || dia <= 23 && mes == 8) {
		texto = `Su signo es:<br>
		<b>  Leo pertenece al elemnto fuego<b> <br>
		<img src="imagenes/leo.png">`
		respuesta.innerHTML = texto
		respuesta.style.setProperty("visibility", "visible")
		respuesta.style.setProperty("opacity", "1")
		respuesta.style.setProperty("transition", "3s ease")

	} else if (dia >= 21 && mes == 1 || dia <= 19 && mes == 2) {
		texto = `Su signo es:<br>
		<b> Acuario pertenece al elemnto aira<b> <br>
		<img src="imagenes/acuario.png">`
		respuesta.innerHTML = texto
		respuesta.style.setProperty("visibility", "visible")
		respuesta.style.setProperty("opacity", "1")
		respuesta.style.setProperty("transition", "3s ease")

	} else if (dia >= 24 && mes == 8 || dia <= 23 && mes == 9) {
		texto = `Su signo es:<br>
		<b>  Virgo pertenece al elemnto tierra<b> <br>
		<img src="imagenes/Virgo.png">`
		respuesta.innerHTML = texto
		respuesta.style.setProperty("visibility", "visible")
		respuesta.style.setProperty("opacity", "1")
		respuesta.style.setProperty("transition", "3s ease")

	} else if (dia >= 20 && dia <= 29 && mes == 2 || dia <= 20 && mes == 3) {
		texto = `Su signo es:<br>
		<b>  Picis pertenece al elemnto agua<b> <br>
		<img src="imagenes/picis.png">`
		respuesta.innerHTML = texto
		respuesta.style.setProperty("visibility", "visible")
		respuesta.style.setProperty("opacity", "1")
		respuesta.style.setProperty("transition", "3s ease")



	} else {
		texto = `ingreso un dato errado <br>
		<img src="imagenes/mala-critica.png">`
		respuesta.innerHTML = texto
		respuesta.style.setProperty("visibility", "visible")
		respuesta.style.setProperty("opacity", "1")
		respuesta.style.setProperty("transition", "3s ease")

	}





})

boton.addEventListener('click', e => {
	e.preventDefault()


	let el = document.getElementById("el").value
	el = parseInt(tu)


	let ella = document.getElementById("ella").value
	ella = parseInt(ella)

	let compatibles = document.getElementById("compatibles")

	if (el === ella) {
		texto = `Sus signo son : <br>
		<b> COMPATIBLES <b><img src="imagenes/Compatibilidad.png">`
		compatibles.innerHTML = texto
		compatibles.style.setProperty("visibility", "visible")
		compatibles.style.setProperty("opacity", "1")
		compatibles.style.setProperty("transition", "3s ease")

	} else if (el == 12 && ella == 1) {
		texto = texto = `Sus signo son : <br>
				<b> COMPATIBLES <b><img src="imagenes/Compatibilidad.png">`
		compatibles.innerHTML = texto
		compatibles.style.setProperty("visibility", "visible")
		compatibles.style.setProperty("opacity", "1")
		compatibles.style.setProperty("transition", "3s ease")

	} else if (el == 12 && ella == 4) {
		texto = texto = `Sus signo son : <br>
				<b> COMPATIBLES <b><img src="imagenes/Compatibilidad.png">`
		compatibles.innerHTML = texto
		compatibles.style.setProperty("visibility", "visible")
		compatibles.style.setProperty("opacity", "1")
		compatibles.style.setProperty("transition", "3s ease")

	} else if (el == 1 && ella == 12) {
		texto = texto = `Sus signo son : <br>
				<b> COMPATIBLES <b><img src="imagenes/Compatibilidad.png">`
		compatibles.innerHTML = texto
		compatibles.style.setProperty("visibility", "visible")
		compatibles.style.setProperty("opacity", "1")
		compatibles.style.setProperty("transition", "3s ease")

	} else if (el == 1 && ella == 4) {
		texto = texto = `Sus signo son : <br>
				<b> COMPATIBLES <b><img src="imagenes/Compatibilidad.png">`
		compatibles.innerHTML = texto
		compatibles.style.setProperty("visibility", "visible")
		compatibles.style.setProperty("opacity", "1")
		compatibles.style.setProperty("transition", "3s ease")

	} else if (el == 4 && ella == 1) {
		texto = texto = `Sus signo son : <br>
				<b> COMPATIBLES <b><img src="imagenes/Compatibilidad.png">`
		compatibles.innerHTML = texto
		compatibles.style.setProperty("visibility", "visible")
		compatibles.style.setProperty("opacity", "1")
		compatibles.style.setProperty("transition", "3s ease")

	} else if (el == 11 && ella == 7) {
		texto = texto = `Sus signo son : <br>
				<b> COMPATIBLES <b><img src="imagenes/Compatibilidad.png">`
		compatibles.innerHTML = texto
		compatibles.style.setProperty("visibility", "visible")
		compatibles.style.setProperty("opacity", "1")
		compatibles.style.setProperty("transition", "3s ease")

	} else if (el == 11 && ella== 9) {
		texto = texto = `Sus signo son : <br>
				<b> COMPATIBLES <b><img src="imagenes/Compatibilidad.png">`
		compatibles.innerHTML = texto
		compatibles.style.setProperty("visibility", "visible")
		compatibles.style.setProperty("opacity", "1")
		compatibles.style.setProperty("transition", "3s ease")

	} else if (el == 7 && ella == 9) {
		texto = texto = `Sus signo son : <br>
				<b> COMPATIBLES <b><img src="imagenes/Compatibilidad.png">`
		compatibles.innerHTML = texto
		compatibles.style.setProperty("visibility", "visible")
		compatibles.style.setProperty("opacity", "1")
		compatibles.style.setProperty("transition", "3s ease")

	} else if (el == 7 && ella == 11) {
		texto = texto = `Sus signo son : <br>
				<b> COMPATIBLES <b><img src="imagenes/Compatibilidad.png">`
		compatibles.innerHTML = texto
		compatibles.style.setProperty("visibility", "visible")
		compatibles.style.setProperty("opacity", "1")
		compatibles.style.setProperty("transition", "3s ease")

	} else if (el == 9 && ella == 7) {
		texto = texto = `Sus signo son : <br>
				<b> COMPATIBLES <b><img src="imagenes/Compatibilidad.png">`
		compatibles.innerHTML = texto
		compatibles.style.setProperty("visibility", "visible")
		compatibles.style.setProperty("opacity", "1")
		compatibles.style.setProperty("transition", "3s ease")

	} else if (el == 9 && ella == 11) {
		texto = texto = `Sus signo son : <br>
				<b> COMPATIBLES <b><img src="imagenes/Compatibilidad.png">`
		compatibles.innerHTML = texto
		compatibles.style.setProperty("visibility", "visible")
		compatibles.style.setProperty("opacity", "1")
		compatibles.style.setProperty("transition", "3s ease")

	} else if (el == 2 && ella == 10) {
		texto = texto = `Sus signo son : <br>
				<b> COMPATIBLES <b><img src="imagenes/Compatibilidad.png">`
		compatibles.innerHTML = texto
		compatibles.style.setProperty("visibility", "visible")
		compatibles.style.setProperty("opacity", "1")
		compatibles.style.setProperty("transition", "3s ease")

	} else if (el == 2 && ella == 3) {
		texto = texto = `Sus signo son : <br>
				<b> COMPATIBLES <b><img src="imagenes/Compatibilidad.png">`
		compatibles.innerHTML = texto
		compatibles.style.setProperty("visibility", "visible")
		compatibles.style.setProperty("opacity", "1")
		compatibles.style.setProperty("transition", "3s ease")

	} else if (el == 10 && ella == 2) {
		texto = texto = `Sus signo son : <br>
				<b> COMPATIBLES <b><img src="imagenes/Compatibilidad.png">`
		compatibles.innerHTML = texto
		compatibles.style.setProperty("visibility", "visible")
		compatibles.style.setProperty("opacity", "1")
		compatibles.style.setProperty("transition", "3s ease")

	} else if (el == 10 && ella == 3) {
		texto = texto = `Sus signo son : <br>
				<b> COMPATIBLES <b><img src="imagenes/Compatibilidad.png">`
		compatibles.innerHTML = texto
		compatibles.style.setProperty("visibility", "visible")
		compatibles.style.setProperty("opacity", "1")
		compatibles.style.setProperty("transition", "3s ease")

	} else if (el == 3 && ella == 2) {
		texto = texto = `Sus signo son : <br>
				<b> COMPATIBLES <b><img src="imagenes/Compatibilidad.png">`
		compatibles.innerHTML = texto
		compatibles.style.setProperty("visibility", "visible")
		compatibles.style.setProperty("opacity", "1")
		compatibles.style.setProperty("transition", "3s ease")

	} else if (el == 3 && ella == 10) {
		texto = texto = `Sus signo son : <br>
				<b> COMPATIBLES <b><img src="imagenes/Compatibilidad.png">`
		compatibles.innerHTML = texto
		compatibles.style.setProperty("visibility", "visible")
		compatibles.style.setProperty("opacity", "1")
		compatibles.style.setProperty("transition", "3s ease")

	} else if (el == 8 && ella == 6) {
		texto = texto = `Sus signo son : <br>
				<b> COMPATIBLES <b><img src="imagenes/Compatibilidad.png">`
		compatibles.innerHTML = texto
		compatibles.style.setProperty("visibility", "visible")
		compatibles.style.setProperty("opacity", "1")
		compatibles.style.setProperty("transition", "3s ease")

	} else if (el == 8 && ella == 5) {
		texto = texto = `Sus signo son : <br>
				<b> COMPATIBLES <b><img src="imagenes/Compatibilidad.png">`
		compatibles.innerHTML = texto
		compatibles.style.setProperty("visibility", "visible")
		compatibles.style.setProperty("opacity", "1")
		compatibles.style.setProperty("transition", "3s ease")

	} else if (el == 6 && ella == 8) {
		texto = texto = `Sus signo son : <br>
				<b> COMPATIBLES <b><img src="imagenes/Compatibilidad.png">`
		compatibles.innerHTML = texto
		compatibles.style.setProperty("visibility", "visible")
		compatibles.style.setProperty("opacity", "1")
		compatibles.style.setProperty("transition", "3s ease")

	} else if (el == 6 && ella == 5) {
		texto = texto = `Sus signo son : <br>
				<b> COMPATIBLES <b><img src="imagenes/Compatibilidad.png">`
		compatibles.innerHTML = texto
		compatibles.style.setProperty("visibility", "visible")
		compatibles.style.setProperty("opacity", "1")
		compatibles.style.setProperty("transition", "3s ease")

	} else if (el == 5 && ella == 8) {
		texto = texto = `Sus signo son : <br>
				<b> COMPATIBLES <b><img src="imagenes/Compatibilidad.png">`
		compatibles.innerHTML = texto
		compatibles.style.setProperty("visibility", "visible")
		compatibles.style.setProperty("opacity", "1")
		compatibles.style.setProperty("transition", "3s ease")

	} else if (el == 5 && ella == 6) {
		texto = texto = `Sus signo son : <br>
				<b> COMPATIBLES <b><img src="imagenes/Compatibilidad.png">`
		compatibles.innerHTML = texto
		compatibles.style.setProperty("visibility", "visible")
		compatibles.style.setProperty("opacity", "1")
		compatibles.style.setProperty("transition", "3s ease")

	} else if (el == 12 && ella == 7) {
		texto = texto = `Sus signo son : <br>
				<b> COMPATIBLES <b><img src="imagenes/Compatibilidad.png">`
		compatibles.innerHTML = texto
		compatibles.style.setProperty("visibility", "visible")
		compatibles.style.setProperty("opacity", "1")
		compatibles.style.setProperty("transition", "3s ease")



	} else if (el == 12 && ella == 9) {
		texto = texto = `Sus signo son : <br>
			<b> COMPATIBLES <b><img src="imagenes/Compatibilidad.png">`
		compatibles.innerHTML = texto
		compatibles.style.setProperty("visibility", "visible")
		compatibles.style.setProperty("opacity", "1")
		compatibles.style.setProperty("transition", "3s ease")

	} else if (el == 12 && ella == 11) {
		texto = texto = `Sus signo son : <br>
			<b> COMPATIBLES <b><img src="imagenes/Compatibilidad.png">`
		compatibles.innerHTML = texto
		compatibles.style.setProperty("visibility", "visible")
		compatibles.style.setProperty("opacity", "1")
		compatibles.style.setProperty("transition", "3s ease")

	} else if (el == 7 && ella == 9) {
		texto = texto = `Sus signo son : <br>
			<b> COMPATIBLES <b><img src="imagenes/Compatibilidad.png">`
		compatibles.innerHTML = texto
		compatibles.style.setProperty("visibility", "visible")
		compatibles.style.setProperty("opacity", "1")
		compatibles.style.setProperty("transition", "3s ease")


	} else if (el == 7 && ella == 11) {
		texto = texto = `Sus signo son : <br>
			<b> COMPATIBLES <b><img src="imagenes/Compatibilidad.png">`
		compatibles.innerHTML = texto
		compatibles.style.setProperty("visibility", "visible")
		compatibles.style.setProperty("opacity", "1")
		compatibles.style.setProperty("transition", "3s ease")


	} else if (el == 7 && ella == 12) {
		texto = texto = `Sus signo son : <br>
		<b> COMPATIBLES <b><img src="imagenes/Compatibilidad.png">`
		compatibles.innerHTML = texto
		compatibles.style.setProperty("visibility", "visible")
		compatibles.style.setProperty("opacity", "1")
		compatibles.style.setProperty("transition", "3s ease")


	} else if (el == 9 && ella == 7) {
		texto = texto = `Sus signo son : <br>
		<b> COMPATIBLES <b><img src="imagenes/Compatibilidad.png">`
		compatibles.innerHTML = texto
		compatibles.style.setProperty("visibility", "visible")
		compatibles.style.setProperty("opacity", "1")
		compatibles.style.setProperty("transition", "3s ease")

	} else if (el == 9 && ella == 11) {
		texto = texto = `Sus signo son : <br>
		<b> COMPATIBLES <b><img src="imagenes/Compatibilidad.png">`
		compatibles.innerHTML = texto
		compatibles.style.setProperty("visibility", "visible")
		compatibles.style.setProperty("opacity", "1")
		compatibles.style.setProperty("transition", "3s ease")

	} else if (el == 9 && ella == 12) {
		texto = texto = `Sus signo son : <br>
		<b> COMPATIBLES <b><img src="imagenes/Compatibilidad.png">`
		compatibles.innerHTML = texto
		compatibles.style.setProperty("visibility", "visible")
		compatibles.style.setProperty("opacity", "1")
		compatibles.style.setProperty("transition", "3s ease")

	} else if (el == 1 && ella == 7) {
		texto = texto = `Sus signo son : <br>
		<b> COMPATIBLES <b><img src="imagenes/Compatibilidad.png">`
		compatibles.innerHTML = texto
		compatibles.style.setProperty("visibility", "visible")
		compatibles.style.setProperty("opacity", "1")
		compatibles.style.setProperty("transition", "3s ease")

	} else if (el == 1 && ella == 9) {
		texto = texto = `Sus signo son : <br>
		<b> COMPATIBLES <b><img src="imagenes/Compatibilidad.png">`
		compatibles.innerHTML = texto
		compatibles.style.setProperty("visibility", "visible")
		compatibles.style.setProperty("opacity", "1")
		compatibles.style.setProperty("transition", "3s ease")

	} else if (el == 7 && ella == 9) {
		texto = texto = `Sus signo son : <br>
		<b> COMPATIBLES <b><img src="imagenes/Compatibilidad.png">`
		compatibles.innerHTML = texto
		compatibles.style.setProperty("visibility", "visible")
		compatibles.style.setProperty("opacity", "1")
		compatibles.style.setProperty("transition", "3s ease")

	} else if (el == 7 && ella == 1) {
		texto = texto = `Sus signo son : <br>
		<b> COMPATIBLES <b><img src="imagenes/Compatibilidad.png">`
		compatibles.innerHTML = texto
		compatibles.style.setProperty("visibility", "visible")
		compatibles.style.setProperty("opacity", "1")
		compatibles.style.setProperty("transition", "3s ease")

	} else if (el == 9 && ella == 1) {
		texto = texto = `Sus signo son : <br>
		<b> COMPATIBLES <b><img src="imagenes/Compatibilidad.png">`
		compatibles.innerHTML = texto
		compatibles.style.setProperty("visibility", "visible")
		compatibles.style.setProperty("opacity", "1")
		compatibles.style.setProperty("transition", "3s ease")

	} else if (el == 9 && ella == 7) {
		texto = texto = `Sus signo son : <br>
		<b> COMPATIBLES <b><img src="imagenes/Compatibilidad.png">`
		compatibles.innerHTML = texto
		compatibles.style.setProperty("visibility", "visible")
		compatibles.style.setProperty("opacity", "1")
		compatibles.style.setProperty("transition", "3s ease")

	} else if (el == 4 && ella == 7) {
		texto = texto = `Sus signo son : <br>
		<b> COMPATIBLES <b><img src="imagenes/Compatibilidad.png">`
		compatibles.innerHTML = texto
		compatibles.style.setProperty("visibility", "visible")
		compatibles.style.setProperty("opacity", "1")
		compatibles.style.setProperty("transition", "3s ease")

	} else if (el == 4 && ella == 9) {
		texto = texto = `Sus signo son : <br>
		<b> COMPATIBLES <b><img src="imagenes/Compatibilidad.png">`
		compatibles.innerHTML = texto
		compatibles.style.setProperty("visibility", "visible")
		compatibles.style.setProperty("opacity", "1")
		compatibles.style.setProperty("transition", "3s ease")

	} else if (el == 4 && ella == 11) {
		texto = texto = `Sus signo son : <br>
		<b> COMPATIBLES <b><img src="imagenes/Compatibilidad.png">`
		compatibles.innerHTML = texto
		compatibles.style.setProperty("visibility", "visible")
		compatibles.style.setProperty("opacity", "1")
		compatibles.style.setProperty("transition", "3s ease")

	} else if (el == 7 && ella == 4) {
		texto = texto = `Sus signo son : <br>
		<b> COMPATIBLES <b><img src="imagenes/Compatibilidad.png">`
		compatibles.innerHTML = texto
		compatibles.style.setProperty("visibility", "visible")
		compatibles.style.setProperty("opacity", "1")
		compatibles.style.setProperty("transition", "3s ease")

	} else if (el == 7 && ella == 9) {
		texto = texto = `Sus signo son : <br>
		<b> COMPATIBLES <b><img src="imagenes/Compatibilidad.png">`
		compatibles.innerHTML = texto
		compatibles.style.setProperty("visibility", "visible")
		compatibles.style.setProperty("opacity", "1")
		compatibles.style.setProperty("transition", "3s ease")

	} else if (el == 7 && ella == 11) {
		texto = texto = `Sus signo son : <br>
		<b> COMPATIBLES <b><img src="imagenes/Compatibilidad.png">`
		compatibles.innerHTML = texto
		compatibles.style.setProperty("visibility", "visible")
		compatibles.style.setProperty("opacity", "1")
		compatibles.style.setProperty("transition", "3s ease")

	} else if (el == 9 && ella == 7) {
		texto = texto = `Sus signo son : <br>
		<b> COMPATIBLES <b><img src="imagenes/Compatibilidad.png">`
		compatibles.innerHTML = texto
		compatibles.style.setProperty("visibility", "visible")
		compatibles.style.setProperty("opacity", "1")
		compatibles.style.setProperty("transition", "3s ease")

	} else if (el == 9 && ella == 4) {
		texto = texto = `Sus signo son : <br>
		<b> COMPATIBLES <b><img src="imagenes/Compatibilidad.png">`
		compatibles.innerHTML = texto
		compatibles.style.setProperty("visibility", "visible")
		compatibles.style.setProperty("opacity", "1")
		compatibles.style.setProperty("transition", "3s ease")

	} else if (el == 9 && ella == 11) {
		texto = texto = `Sus signo son : <br>
		<b> COMPATIBLES <b><img src="imagenes/Compatibilidad.png">`
		compatibles.innerHTML = texto
		compatibles.style.setProperty("visibility", "visible")
		compatibles.style.setProperty("opacity", "1")
		compatibles.style.setProperty("transition", "3s ease")

	} else if (el == 11 && ella == 7) {
		texto = texto = `Sus signo son : <br>
		<b> COMPATIBLES <b><img src="imagenes/Compatibilidad.png">`
		compatibles.innerHTML = texto
		compatibles.style.setProperty("visibility", "visible")
		compatibles.style.setProperty("opacity", "1")
		compatibles.style.setProperty("transition", "3s ease")

	} else if (el == 11 && ella == 4) {
		texto = texto = `Sus signo son : <br>
		<b> COMPATIBLES <b><img src="imagenes/Compatibilidad.png">`
		compatibles.innerHTML = texto
		compatibles.style.setProperty("visibility", "visible")
		compatibles.style.setProperty("opacity", "1")
		compatibles.style.setProperty("transition", "3s ease")

	} else if (el == 11 && ella == 9) {
		texto = texto = `Sus signo son : <br>
		<b> COMPATIBLES <b><img src="imagenes/Compatibilidad.png">`
		compatibles.innerHTML = texto
		compatibles.style.setProperty("visibility", "visible")
		compatibles.style.setProperty("opacity", "1")
		compatibles.style.setProperty("transition", "3s ease")

	} else if (el == 8 && ella == 2) {
		texto = texto = `Sus signo son : <br>
		<b> COMPATIBLES <b><img src="imagenes/Compatibilidad.png">`
		compatibles.innerHTML = texto
		compatibles.style.setProperty("visibility", "visible")
		compatibles.style.setProperty("opacity", "1")
		compatibles.style.setProperty("transition", "3s ease")

	} else if (el == 8 && ella == 4) {
		texto = texto = `Sus signo son : <br>
		<b> COMPATIBLES <b><img src="imagenes/Compatibilidad.png">`
		compatibles.innerHTML = texto
		compatibles.style.setProperty("visibility", "visible")
		compatibles.style.setProperty("opacity", "1")
		compatibles.style.setProperty("transition", "3s ease")

	} else if (el == 8 && ella == 3) {
		texto = texto = `Sus signo son : <br>
		<b> COMPATIBLES <b><img src="imagenes/Compatibilidad.png">`
		compatibles.innerHTML = texto
		compatibles.style.setProperty("visibility", "visible")
		compatibles.style.setProperty("opacity", "1")
		compatibles.style.setProperty("transition", "3s ease")

	} else if (el == 2 && ella == 4) {
		texto = texto = `Sus signo son : <br>
		<b> COMPATIBLES <b><img src="imagenes/Compatibilidad.png">`
		compatibles.innerHTML = texto
		compatibles.style.setProperty("visibility", "visible")
		compatibles.style.setProperty("opacity", "1")
		compatibles.style.setProperty("transition", "3s ease")

	} else if (el == 2 && ella == 8) {
		texto = texto = `Sus signo son : <br>
		<b> COMPATIBLES <b><img src="imagenes/Compatibilidad.png">`
		compatibles.innerHTML = texto
		compatibles.style.setProperty("visibility", "visible")
		compatibles.style.setProperty("opacity", "1")
		compatibles.style.setProperty("transition", "3s ease")

	} else if (el == 2 && ella == 3) {
		texto = texto = `Sus signo son : <br>
		<b> COMPATIBLES <b><img src="imagenes/Compatibilidad.png">`
		compatibles.innerHTML = texto
		compatibles.style.setProperty("visibility", "visible")
		compatibles.style.setProperty("opacity", "1")
		compatibles.style.setProperty("transition", "3s ease")

	} else if (el == 4 && ella == 2) {
		texto = texto = `Sus signo son : <br>
		<b> COMPATIBLES <b><img src="imagenes/Compatibilidad.png">`
		compatibles.innerHTML = texto
		compatibles.style.setProperty("visibility", "visible")
		compatibles.style.setProperty("opacity", "1")
		compatibles.style.setProperty("transition", "3s ease")

	} else if (el == 4 && ella == 8) {
		texto = texto = `Sus signo son : <br>
		<b> COMPATIBLES <b><img src="imagenes/Compatibilidad.png">`
		compatibles.innerHTML = texto
		compatibles.style.setProperty("visibility", "visible")
		compatibles.style.setProperty("opacity", "1")
		compatibles.style.setProperty("transition", "3s ease")

	} else if (el == 4 && ella == 3) {
		texto = texto = `Sus signo son : <br>
		<b> COMPATIBLES <b><img src="imagenes/Compatibilidad.png">`
		compatibles.innerHTML = texto
		compatibles.style.setProperty("visibility", "visible")
		compatibles.style.setProperty("opacity", "1")
		compatibles.style.setProperty("transition", "3s ease")


	} else if (el == 3 && ella == 8) {
		texto = texto = `Sus signo son : <br>
		<b> COMPATIBLES <b><img src="imagenes/Compatibilidad.png">`
		compatibles.innerHTML = texto
		compatibles.style.setProperty("visibility", "visible")
		compatibles.style.setProperty("opacity", "1")
		compatibles.style.setProperty("transition", "3s ease")

	} else if (el == 3 && ella == 2) {
		texto = texto = `Sus signo son : <br>
		<b> COMPATIBLES <b><img src="imagenes/Compatibilidad.png">`
		compatibles.innerHTML = texto
		compatibles.style.setProperty("visibility", "visible")
		compatibles.style.setProperty("opacity", "1")
		compatibles.style.setProperty("transition", "3s ease")

	} else if (el == 3 && ella == 4) {
		texto = texto = `Sus signo son : <br>
		<b> COMPATIBLES <b><img src="imagenes/Compatibilidad.png">`
		compatibles.innerHTML = texto
		compatibles.style.setProperty("visibility", "visible")
		compatibles.style.setProperty("opacity", "1")
		compatibles.style.setProperty("transition", "3s ease")

	} else {
		texto = texto = `Sus signo son : <br>
				<b> NO COMPATIBLES <b><img src="imagenes/no compatibles.png">`
		compatibles.innerHTML = texto
		compatibles.style.setProperty("visibility", "visible")
		compatibles.style.setProperty("opacity", "1")
		compatibles.style.setProperty("transition", "3s ease")

	}



})