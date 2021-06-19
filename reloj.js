const mostrarReloj = () =>{
    let fecha = new Date();
    let hora = formatoHora(fecha.getHours());
    let minutos = formatoHora(fecha.getMinutes());
    let segundos = formatoHora(fecha.getSeconds());
    document.getElementById("hora").innerHTML = `${hora}:${minutos}:${segundos}`;

    const meses = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const dias = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let diaSemana = dias[fecha.getDay()];
    let mes = meses[fecha.getMonth()];
    let dia = fecha.getDate();
    let year = fecha.getFullYear();
    let fechaTexto = `${diaSemana}, ${mes} ${dia}, ${year}`;
    document.getElementById("fecha").innerHTML = fechaTexto;
    document.getElementById("contenedor").classList.toggle("animar");//Toggle es una especie de interruptor
}
const formatoHora = (hora) =>{
    if(hora < 10)
       hora = "0" + hora;
       return hora;
}
setInterval(mostrarReloj, 1000);