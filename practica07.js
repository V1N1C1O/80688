


        const FP = document.getElementById("Formu");
        const sec1 =  `<fieldset class="formulario"><legend>`
        const sec2 = `</legend>`
        const sec3 = `<label for="`
        const sec4 = `">`
        const sec5 = `</label><input type="text" id="`
        const sec6 = `" name="`
        const sec7 = `">` 
        const sec8 = `</fieldset>`
        const Llenar = (parametro) =>{
            const tramo = sec1+parametro.titulo+sec2+sec3+parametro.primero+sec4+parametro.primero+sec5+parametro.primero+sec6+parametro.primero+sec7+sec3+parametro.segundo+sec4+parametro.segundo+sec5+parametro.segundo+sec6+parametro.segundo+sec7+sec8
            return `
            <figure>
                ${tramo}
            </figure>
            `
        }
        // se envia un JSON en esta actividad
        FP.innerHTML = Llenar({titulo:"Información Personal", primero:"Nombre", segundo:"Correo Electronico"})
        FP.innerHTML += Llenar({titulo:"Información de Dirección", primero:"Dirección", segundo:"Ciudad"})
        FP.innerHTML += ${<input type="submit" value="Enviar" class="b"></input>}
      


        const loginform = document.getElementById("formulario")
        loginform.addEventListener("submit", event =>{
            //alert(event)   /=> es una alerta emergente
            event.preventDefault()
            //console.log(event) /=> muestra en consola
            let u = document.getElementById("User").value
            let p = document.getElementById("password").value
            //alert("Usuario: "+u+" Contraseña: "+p)
            alert(`Usuario: ${u} y Contraseña: ${p}`)
        })
