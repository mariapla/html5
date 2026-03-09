
//evento load, se dispara cuando un recurso ha terminado de cargar
window.addEventListener('load', () => {
    let lon
    let lat

    const tempValor = document.querySelector('.temp-valor')
    const tempDescripcion = document.querySelector('.temp-descripcion')
    const geoloc = document.querySelector('.geoloc')
    const icono = document.querySelector('.icono')
    const vientoVelocidad = document.querySelector('.viento-velocidad')


    if (navigator.geolocation) {
        //si el objeto existe
        //los servicios de geolocalización estarán disponibles
        navigator.geolocation.getCurrentPosition(ubicacion => {
            //console.log(ubicacion)
            //por tanto también puedo pedir la latitud y la longitud
            //console.log(ubicacion.coords.latitude)
            lon = ubicacion.coords.longitude
            lat = ubicacion.coords.latitude
            //coopiar de la documentación de la api la llamada
            //platillas literales
            //añadir $ a las variables
            const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=68ea2aa113fec9deaa9304cc747825e6&units=metric&lang=es`

            console.log(url)

            fetch(url)
                .then(respuesta => respuesta.json())
                .then(datos => {
                    console.log(datos.main.temp)
                    //redondear la temperatura sin decimales
                    let temp = Math.round(datos.main.temp)
                    tempValor.innerHTML = `${temp} ºC`
                    // ******************************************
                    console.log(datos.weather[0].description)
                    //pasar a mayúsculas y capturar
                    let descripcion = datos.weather[0].description
                    tempDescripcion.innerHTML = descripcion.toUpperCase()
                    // ******************************************
                    console.log(datos.name)
                    geoloc.innerHTML = datos.name
                    // ******************************************
                    console.log(datos.wind.speed)
                    //plantilla literal para mostrar m/s
                    vientoVelocidad.innerHTML = `${datos.wind.speed} m/s`
                    // ******************************************
                    //  iconos estáticos
                    //  console.log(datos.weather[0].icon)
                    //  codigoIcono = datos.weather[0].icon
                    //  const urlIcono = `http://openweathermap.org/img/wn/${codigoIcono}.png`
                    //  console.log(urlIcono)
                    //  icono.setAttribute('src', urlIcono)

                    // ******************************************
                    //iconos animados
                    console.log(datos.weather[0].icon)
                    switch (datos.weather[0].icon) {
                        case '01d':
                            icono.src = 'iconos/clear-day.svg'
                            break
                        case '01n':
                            icono.src = 'iconos/clear-night.svg'
                            break
                        case '02d':
                            icono.src = 'iconos/overcast-day.svg'
                            break
                        case '02n':
                            icono.src = 'iconos/overcast-night.svg'
                            break
                        case '03d':
                            icono.src = 'iconos/cloudy.svg'
                            break
                        case '03n':
                            icono.src = 'iconos/cloudy.svg'
                            break
                        case '04d':
                            icono.src = 'iconos/cloudy.svg'
                            break
                        case '04n':
                            icono.src = 'iconos/cloudy.svg'
                            break
                        case '09d':
                            icono.src = 'iconos/drizzle.svg'
                            break
                        case '09n':
                            icono.src = 'iconos/drizzle.svg'
                            break
                        case '10d':
                            icono.src = 'iconos/rain.svg'
                            break
                        case '10n':
                            icono.src = 'iconos/rain.svg'
                            break
                        case '11d':
                            icono.src = 'iconos/thunderstoms-day.svg'
                            break
                        case '11n':
                            icono.src = 'iconos/thunderstoms-night.svg'
                            break
                        case '13d':
                            icono.src = 'iconos/snow.svg'
                            break
                        case '13n':
                            icono.src = 'iconos/snow.svg'
                            break
                        case '50d':
                            icono.src = 'iconos/mist.svg'
                            break
                        case '50n':
                            icono.src = 'iconos/mist.svg'
                            break
                    }

                })
                .catch(error => console.log(error))
        })
    }
})
