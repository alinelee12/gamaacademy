//contagem regressiva 

// data do evento
var countDownDate = new Date("Mar 20, 2020 23:59:00").getTime();


//funçao que roda a cada 1 segundo
var loop = setInterval(function() {
  
      //data do momento
      var now = new Date().getTime();
      //tempo restante
      var timeleft = countDownDate - now;
      //transformação de milisegundo para respectivos
      var days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
      var hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((timeleft % (1000 * 60)) / 1000);
      //atualiza html
      document.getElementById("dias").innerHTML = days + "d"
      document.getElementById("horas").innerHTML = hours + "h" 
      document.getElementById("minutos").innerHTML = minutes + "m" 
      document.getElementById("segundos").innerHTML = seconds + "s" 
      //quando o tempo restante acabar
      if (timeleft < 0) {
          //para de rodar a funçao de 1 em 1 segundo
          clearInterval(loop);
          //atualiza html
          document.getElementById("dias").innerHTML = ""
          document.getElementById("horas").innerHTML = "" 
          document.getElementById("minutos").innerHTML = ""
          document.getElementById("segundos").innerHTML = ""
          document.getElementById("cont").innerHTML = "PROMOÇÃO";
          document.getElementById("fim").innerHTML = "ENCERRADA";
      }

  }, 1000)

document.addEventListener('mouseleave', function( ){
    $('#popup').modal('show')      
})

