
function onLoad(){

    let who = ["El perro ", "Mi abuela ", "Mi novia ", "El mejor amigo de la cuñada del novio de mi tio abuelo ","Un ente extraño ", "Buzz Lightyear "]
    let what = ["se lo comió ", "lo rompió ", "lo orinó con fruición ", "se lo metió por... ahí ", "se lo esnifó ", "lo hizo desaparecer con el Mago Pop "]
    let when = ["antes de clase", "cuando terminé de hacerlo", "mientras estaba cagando", "cuando fuimos de público a El Hormiguero", "en un lugar de La Mancha de cuyo nombre no me acuerdo ahora"]
    let frase = who [Math.floor(Math.random()*6)] + what[Math.floor(Math.random()*6)] + when[Math.floor(Math.random()*5)]
    return frase
    
    }
    
    document.querySelector("#excuse").innerHTML = "<h1>" + onLoad() + "</h1>"