function reponseBot(message) {
  if (message.endsWith("?")) {                    
    return "Ouais Ouais...";
  } else if (message === message.toUpperCase() && message !== "") { 
    return "Pwa, calme-toi...";
  } else if (message.includes("Fortnite")) {       
    return "on s' fait une partie soum-soum ?";
  } else if (message.trim() === "") {               
    return "t'es en PLS ?";
  } else if (message.includes("Salut !")) {
    return "Salut bg!";
  } else {                                          
    return "balek.";
  }
}

while (true) {
  let message = prompt("Parle au bot :"); 
  if (message === null) {                
    break;                               
  }
  console.log(reponseBot(message));     
}
