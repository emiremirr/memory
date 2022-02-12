/// DATE DE DEBUT : 19/03/2021
/// DATE DE FIN : 27/03/2021
function start(){
    

    const logoFinal = ["BORDEAUX","LILLE","LYON", "MONACO", "PARIS", "SAINT ETIENNE","BORDEAUX","LILLE","LYON", "MONACO", "PARIS", "SAINT ETIENNE"]
    const zz = []
    let paire = [];
    let pairesTrouvees =[];
    let i = 0
    let nbreCoup = 0;
    let button = "";

    while(zz.length < logoFinal.length ){
        let test = logoFinal[i]
        const randomLogo = Math.floor(Math.random() * logoFinal.length) ;
        

            if(!zz.includes(randomLogo)){
            zz.push(randomLogo)
        
            let face = "face-"+ randomLogo
            let butId = "button-"+randomLogo
            let button = document.getElementById(butId);
            let faceAll = document.getElementById(face);
            let allButton = document.getElementsByClassName("button")
            let allFaces = document.getElementsByClassName("face")
            document.getElementById(face).innerHTML = test; 
                
                button.addEventListener("click", function (e) {
                button.style.display = "none";
                faceAll.style.display="block";
                paire.push(test)
                    if ( paire.length === 2){
                        if(paire[0] === paire[1]){
                            button.style.display="none"
                            pairesTrouvees.push(...paire)
                            console.log("aaaaaaa",pairesTrouvees)
                        } else {
                            setTimeout(() => {
                                
                                for(var i=0;i<allButton.length;i++)
                                {
                                    if(!pairesTrouvees.includes(allFaces[i].innerHTML)){
                                        allFaces[i].style.display='none';
                                        allButton[i].style.display='block';
                                        // console.log("zzzzzzzzz",allFaces[i].innerHTML)
                                    }
                                    
                                }
                            }, 500);
                        }
                        nbreCoup++
                        document.getElementById("nbreCoup").innerHTML ="Nombre de coup : "+ nbreCoup;
                        document.getElementById("pairesTrouvees").innerHTML ="Nombre de Paires Trouvées : "+ (pairesTrouvees.length/2);
                        paire = []
                        console.log(paire)
                    }
            
                }); 
            i++
                    

            }
            
    }

   
}
start();