//Über mich BEREICH//

let UberMichText = "Ich bin Athanasios K. aus Süddeutschland, leidenschaftlicher Informatiker seit meinem 14. Lebensjahr. Meine Expertise erstreckt sich von Hardware bis zur faszinierenden Welt der Softwareentwicklung. Als Ambivert arbeite ich sowohl im Team als auch selbstständig effektiv. Kommunikation, Zuverlässigkeit und strukturierte Lösungsorientierung sind meine Grundpfeiler. Meine hohe Lernbereitschaft befähigt mich, stets auf dem neuesten Stand der Informatik zu sein. Ich freue mich darauf, meine Begeisterung und Fähigkeiten in zukünftigen Projekten erfolgreich einzubringen.";
let SpezialisierungText = "Wie ersichtlich, werden oben verschiedene Technologien und Bereiche aufgezeigt. Es ist jedoch verständlich, dass es nicht möglich ist, alles zu 100% zu beherrschen. Die oben aufgeführte Liste repräsentiert die Bereiche, mit denen ich mich intensiv auseinandergesetzt habe und die ich gut verstehe. Dies ermöglicht mir, ein umfassendes Bild von der Webentwicklung zu erhalten und effektiver zu arbeiten, auch über den Tellerrand hinaus. Mein Schwerpunkt liegt auf der Frontend-Entwicklung, insbesondere mit den Technologien JavaScript, HTML, CSS und Angular. ";
let SucheText = "Ich bin momentan auf der Suche nach einer Stelle als Webentwickler (Frontend). Da ich im Homeoffice am produktivsten arbeite, ist eine Remote-Stelle für mich besonders attraktiv. Aufgrund meiner bereits gesammelten Remote-Erfahrung kann ich mich schnell in entsprechende Teams integrieren. Diese Erfahrungen haben mir gezeigt, dass die Arbeit im Homeoffice mir besonders liegt. Falls Sie eine passende Position in Ihrem Team zu besetzen haben, lade ich Sie herzlich dazu ein, einen Blick in die Kontakt-Sektion zu werfen und mich zu kontaktieren."
let KontaktText = "Kontaktieren Sie mich über folgende Wege: Email (Athanasios-Koukakis@gmx.de) oder per Handy (00000000000)";

let TextFeld = document.getElementById("Text");
let IchTitel = document.getElementById("IchTitel");
let KontaktBox = document.getElementById("KontaktBox");

let UberMich = document.getElementById("UberMichButton");
let Spezialisierung = document.getElementById("SpezialisierungButton");
let Suche = document.getElementById("SucheButton");
let Kontakt = document.getElementById("KontaktButton");

let TitelIch = 'Über mich';
let TitelSpezialisierung = 'Meine Spezialistierung';
let TitelSuche = "Mein Einsatzbereich";
let TitelKontakt = "Kontakt";

let StartVersion = true;

let UberMichButton = false;
let SpezialisierungButton = false;
let SucheButton = false;
let KontaktButton = false;




if(StartVersion == true){
    KontaktBox.style.display="none";
    TextFeld.innerHTML=UberMichText
    UberMich.style.backgroundColor="rgb(255,0,0)";
   
}else{
    console.log('Der Start ist nicht aktiviert' + StartVersion)
}


UberMich.addEventListener("click", ()=>{

    let UberMichButton = true;
    let SpezialisierungButton = false;
    let SucheButton = false;
    let KontaktButton = false;

    if(UberMichButton == true){
        KontaktBox.style.display="none";
        TextFeld.innerHTML=UberMichText;
        IchTitel.innerHTML=TitelIch;
        UberMich.style.backgroundColor="rgb(213,1,1)";
        
    }else{}
    
    if(SpezialisierungButton == false && UberMichButton == true){
        Spezialisierung.style.backgroundColor="";
        }

    if(SucheButton == false && UberMichButton == true){
        Suche.style.backgroundColor="";
    }

    if(KontaktButton == false && UberMichButton == true){
        Kontakt.style.backgroundColor="";
    }

});

Spezialisierung.addEventListener("click", ()=>{




    let UberMichButton = false;
    let SpezialisierungButton = true;
    let SucheButton = false;
    let KontaktButton = false;



    if(SpezialisierungButton == true){
        KontaktBox.style.display="none";
        TextFeld.innerHTML=SpezialisierungText;
        IchTitel.innerHTML=TitelSpezialisierung;
        Spezialisierung.style.backgroundColor="rgb(213,1,1)";
        
    }else{}
    
    if(UberMichButton == false && SpezialisierungButton == true){
        UberMich.style.backgroundColor="";
        }


        if(SucheButton == false && SpezialisierungButton == true){
        Suche.style.backgroundColor="";
    }

    if(KontaktButton == false && SpezialisierungButton == true){
        Kontakt.style.backgroundColor="";
    }


});

Suche.addEventListener("click", ()=>{

    
    let UberMichButton = false;
    let SpezialisierungButton = false;
    let SucheButton = true;
    let KontaktButton = false;



    if(SucheButton == true){
        KontaktBox.style.display="none";
        TextFeld.innerHTML=SucheText;
        IchTitel.innerHTML=TitelSuche;
       Suche.style.backgroundColor="rgb(255, 0, 0)";
        
    }
    
    if(UberMichButton == false && SucheButton == true){
        UberMich.style.backgroundColor="";
        }

    if(SpezialisierungButton == false && SucheButton == true){
        Spezialisierung.style.backgroundColor="";
    }

    if(KontaktButton == false && SucheButton == true){
        Kontakt.style.backgroundColor="";
    }

});




Kontakt.addEventListener("click", ()=>{

   

    let UberMichButton = false;
    let SpezialisierungButton = false;
    let SucheButton = false;
    let KontaktButton = true;



    if(KontaktButton == true){
        IchTitel.innerHTML=TitelKontakt;
        TextFeld.innerHTML="";
       KontaktBox.style.display="flex";
       Kontakt.style.backgroundColor="rgb(255, 0, 0)";
        
    }
    
    if(UberMichButton == false && KontaktButton == true){
        UberMich.style.backgroundColor="";
        }

    if(SpezialisierungButton == false && KontaktButton == true){
        Spezialisierung.style.backgroundColor="";
    }

    if(SucheButton == false && KontaktButton == true){
        Suche.style.backgroundColor="";
    }

});


// Projekte Funktionen

let PortfolioErsteSeite = document.getElementById("PortfolioErsteSeite");
let PortfolioZweiteSeite = document.getElementById("PortfolioZweiteSeite");

let ErsteSeiteAktiev = false;

PortfolioErsteSeite.addEventListener("click", ()=>{

    if(ErsteSeiteAktiev == false){
        PortfolioErsteSeite.style.display="none";
        ErsteSeiteAktiev = true;

        ZweiteSeiteAktivierung();
    }

    function ZweiteSeiteAktivierung(){
        if(ErsteSeiteAktiev == true){
            PortfolioZweiteSeite.style.display="flex";
        }
    }

   





})





