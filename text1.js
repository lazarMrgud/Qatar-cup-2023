

//***********************************dugmad ************************************

let btn_start=document.querySelector(".start")
let btn_grupa=document.querySelector(".Grupa")
let btn_grupa_1=document.querySelector(".kolo1")
let btn_grupa_2=document.querySelector(".kolo2")
let btn_grupa_3=document.querySelector(".kolo3")
let btn_prolaz_grupe=document.querySelector(".sesnest")
let btn_prolaz_grupe_bodovanje=document.querySelector(".sesnest_bodovanje")
let btn_fin_4=document.querySelector(".cetvrtina")
let btn_fin_4_bodovi=document.querySelector(".cetvrtina_bodovi")
let btn_polufinale=document.querySelector(".polufinale")
let btn_polufinal_bodovi=document.querySelector(".polufinale_bodovi")
let btn_finale=document.querySelector(".finale")
let btn_finale_bodovi=document.querySelector(".finale_bodovi")
let btn_finalista=document.querySelector(".finalista")
//******************************************************************************



let section=document.querySelectorAll("section")

let link=document.querySelectorAll(".nav-link")


let div_btn=document.querySelector(".container_buton")
const svi_timovi=document.querySelector(".okvir_svih_timova")
let Container1=document.querySelector(".containe")
let Container_svih_timova=document.querySelector(".container_svih_timova")

let Finale_16=document.querySelector(".containe_finale_16")
let Finale_16_odigrano=document.querySelector(".container_16_finale_bodovi")
let Finale_4_odigrano=document.querySelector(".container_4_finala")
let Finale_4_bodovi=document.querySelector(".container_4_finala_bodovi")
let Pol_finale=document.querySelector(".container_polufinale")
let Pol_finale_bodovi=document.querySelector(".container_polufinale_bodovi")
let Finale=document.querySelector(".container_finale")
let Finale_bodovi=document.querySelector(".container_finale_bodov")
let Grupa=document.querySelector(".container_svetcko_prvenstvo_1")



let grupa=[]
let grupa_finala=[]

let array1=[]
let array2=[]
let array3=[]
let sort=[]
let timovi_sesnest_finalista=[]
let bodovi_sesnest_finalista=[]
let timovi_cetvrt_finalista=[]
let bodovi_cetvrt_finalista=[]

let timovi_polufinale=[]
let bodovi_polufinale_finalista=[]

let timovi_finale=[]
let bodovi_finale=[]

const teren=[
    {teren:"New folder (2)\ahmad.png"},
    {teren:"New folder (2)\ahmad.png"},
    {teren:"New folder (2)\ahmad.png"},
    {teren:"New folder (2)\ahmad.png"},
    {teren:"New folder (2)\ahmad.png"},
    {teren:"New folder (2)\ahmad.png"},
    {teren:"New folder (2)\ahmad.png"},
    {teren:"New folder (2)\ahmad.png"},
    {teren:"New folder (2)\ahmad.png"}


]
const Timovi=[

    {id:0,grupa:"Agrupa",ime:"Katar",slika:"New folder/QAT.webp",bodovi:"New folder/ball.png"},
    {id:1,grupa:"Agrupa",ime:"Holandija",slika:"New folder/NED.webp",bodovi:"New folder/ball.png"},
    {id:2,grupa:"Agrupa",ime:"Ekvador",slika:"New folder/ECU.avif",bodovi:"New folder/ball.png"},
    {id:3,grupa:"Agrupa",ime:"Senegal",slika:"New folder/SEN.webp",bodovi:"New folder/ball.png"},

    {id:4,grupa:"Bgrupa",ime: "Engleska",slika:"New folder/ENG.webp",bodovi:"New folder/ball.png"},
    {id:5,grupa:"Bgrupa",ime:"USA",slika:"New folder/USA.avif",bodovi:"New folder/ball.png"},
    {id:6,grupa:"Bgrupa",ime: "Iran",slika:"New folder/IRN.avif",bodovi:"New folder/ball.png"},
    {id:7,grupa:"Bgrupa",ime: "Korea",slika:"New folder/WAL.avif",bodovi:"New folder/ball.png"},

    {id:8,grupa:"Cgrupa",ime:"Argentina",slika:"New folder/ARG.webp",bodovi:"New folder/ball.png"},
    {id:9,grupa:"Cgrupa",ime:"Meksiko",slika:"New folder/MEX.avif",bodovi:"New folder/ball.png"},
    {id:10,grupa:"Cgrupa",ime: "Poljska",slika:"New folder/POL.webp",bodov:"New folder/ball.png"},
    {id:11,grupa:"Cgrupa",ime:"Saud Arabi",slika:"New folder/KSA.avif",bodovi:"New folder/ball.png"},

    {id:12,grupa:"Dgrupa",ime:"Frncuska",slika:"New folder/FRA.webp",bodovi:"New folder/ball.png"},
    {id:13,grupa:"Dgrupa",ime:"Danaska",slika:"New folder/DEN.webp",bodovi:"New folder/ball.png"},
    {id:14,grupa:"Dgrupa",ime:"Tunis",slika:"New folder/TUN.webp",bodovi:"New folder/ball.png"},
    {id:15,grupa:"Dgrupa",ime:"Kontin-play",slika:"New folder/KSA.avif",bodovi:"New folder/ball.png"},

    {id:16,grupa:"Egrupa",ime:"Spanija",slika:"New folder/ESP.avif",bodovi:"New folder/ball.png"},
    {id:17,grupa:"Egrupa",ime:"Nemacka", slika:"New folder/GER.avif",bodovi:"New folder/ball.png"},
    {id:18,grupa:"Egrupa",ime:"Japan",slika:"New folder/JPN.webp",bodovi:"New folder/ball.png"},
    {id:19,grupa:"Egrupa",ime:"Costa Rica",slika:"New folder/CRC.webp",bodovi:"New folder/ball.png"},

    {id:20,grupa:"Fgrupa",ime:"Belgija", slika:"New folder/BEL.webp",bodovi:"New folder/ball.png"},
    {id:21,grupa:"Fgrupa",ime:"Hrvatska",slika:"New folder/CRO.avif",bodovi:"New folder/ball.png"},
    {id:22,grupa:"Fgrupa",ime:"Maroko",slika:"New folder/MAR.webp",bodovi:"New folder/ball.png"},
    {id:23,grupa:"Fgrupa",ime:"Kanada", slika:"New folder/CAN.webp",bodovi:"New folder/ball.png"},

    {id:24,grupa:"Ggrupa",ime:"Srbija",slika:"New folder/SRB.avif",bodovi:"New folder/ball.png"},
    {id:25,grupa:"Ggrupa",ime:"Brazil", slika:"New folder/BRA.avif",bodovi:"New folder/ball.png"},
    {id:26,grupa:"Ggrupa",ime:"Kamerun", slika:"New folder/CMR.webp",bodovi:"New folder/ball.png"},
    {id:27,grupa:"Ggrupa",ime: "Švajcarska",slika:"New folder/SUI.webp",bodovi:"New folder/ball.png"},

    {id:28,grupa:"Hgrupa",ime:"Portugal", slika:"New folder/POR.avif",bodovi:"New folder/ball.png"},
    {id:29,grupa:"Hgrupa",ime:"Urugvaj",slika:"New folder/URU.webp",bodovi:"New folder/ball.png"},
    {id:30,grupa:"Hgrupa",ime:"Koreja",slika:"New folder/WAL.avif",bodovi:"New folder/ball.png"},
    {id:31,grupa:"Hgrupa",ime:"Gana", slika:"New folder/GHA.webp",bodovi:"New folder/ball.png"}


]

//************************************AKTIVACIJA BUTTON*************************
btn_start.addEventListener("click", function(e){
    document.getElementById("start").scrollIntoView({behavior:"smooth"})
    const value=e.currentTarget
    btn_start.classList.add("disable")
    btn_grupa.classList.add("active")
    const svi_timovi=document.querySelector(".section1")
    svi_timovi.setAttribute('id', 'Start')
    if(value){

    btn_start.disabled=true
    btn_grupa.disabled=false
    }

        Prikaz_svih_timova(Timovi)
        const te=Stadioni(teren)
        console.log(te)
        let cards=document.querySelectorAll(".container_tim_grupe_F")
        function okreni(){
            this.classList.toggle("flip")
        }
        cards.forEach(card=>card.addEventListener("click", okreni))


})
btn_grupa.addEventListener("click", function(e){
    document.getElementById("Grupa").scrollIntoView({behavior:"smooth"})



    btn_start.classList.add("disable")
    btn_grupa.classList.remove("active")
    btn_grupa_1.classList.add("active")
    //const svi_timovi=document.querySelector(".section2")
    //svi_timovi.setAttribute('id', 'GRUPA')
    const value=e.currentTarget
    if(value){
        btn_grupa.disabled=true
        const Grupe=makeGrup(Timovi)
        Prikaz_grupa(Grupe)
        kolo_prikaz_prikaz(Grupe)



    }


})
btn_grupa_1.addEventListener('click', function(e){
    document.getElementById("Kolo").scrollIntoView({behavior:"smooth"})

    btn_grupa_1.classList.remove("active")
    btn_grupa_2.classList.add("active")
    const value=e.currentTarget
    if(value){
        btn_grupa_1.disabled=true
        const kolo1=makeGrup(Timovi)
        GrupnaFazaTakmicenja1(kolo1)
        Irvo_kolo_prikaz(array1)
        Kolo_I_prikaz(array1)

    }
})
btn_grupa_2.addEventListener('click', function(e){
    document.getElementById("Kolo").scrollIntoView({behavior:"smooth"})

    btn_grupa_2.classList.remove("active")
    btn_grupa_3.classList.add("active")
    const value=e.currentTarget
    if(value){
        btn_grupa_2.disabled=true
        GrupnaFazaTakmicenja2(array1)
        II_kolo_prikaz(array2)
        Kolo_II_prikaz(array2)
    }
})
btn_grupa_3.addEventListener('click', function(e){
    document.getElementById("Grupa").scrollIntoView({behavior:"smooth"})

    btn_grupa_3.classList.remove("active")
    btn_prolaz_grupe.classList.add("active")

    const value=e.currentTarget
    if(value){
        btn_grupa_3.disabled=true

        GrupnaFazaTakmicenja3(array2)

        sortiranje(array3)
        const Sort=[...sort]
        III_kolo_prikaz(Sort)
        Kolo_III_prikaz(array3)
        Finale16(Sort)
    }
})
btn_prolaz_grupe.addEventListener('click', function(e){
    document.getElementById("Finale").scrollIntoView({behavior:"smooth"})
    

    btn_prolaz_grupe.classList.remove("active")
    btn_prolaz_grupe_bodovanje.classList.add("active")
    const value=e.currentTarget
    if(value){

        

        btn_prolaz_grupe.disabled=true
        rez_16_fin(timovi_sesnest_finalista)
        prv_sesnes_finalista(timovi_sesnest_finalista)
        const TR=Stadioni(teren)
        const rr=TR.length
        const rendom=Math.floor(Math.random()*rr)
        for (let i=0;i<TR.length;i++){
            const teren1=document.querySelector(".v-s16");
            teren1.style=`${TR[rendom]}`;
            console.log(TR[rendom])
        }
    }
})
btn_prolaz_grupe_bodovanje.addEventListener('click', function(e){
    document.getElementById("Finale").scrollIntoView({behavior:"smooth"})

    btn_prolaz_grupe_bodovanje.classList.remove("active")
    btn_fin_4.classList.add("active")
    const value=e.currentTarget
    if(value){
        btn_prolaz_grupe_bodovanje.disabled=true

        prikaz_rez_16_fin_bodovi(bodovi_sesnest_finalista)

        izborcetvrtfinalist(bodovi_sesnest_finalista)
        penali(bodovi_sesnest_finalista)

    }
})
btn_fin_4.addEventListener('click', function(e){
    document.getElementById("Finale").scrollIntoView({behavior:"smooth"})

    btn_fin_4.classList.remove("active")
    btn_fin_4_bodovi.classList.add("active")
    const value=e.currentTarget
    if(value){
        btn_fin_4.disabled=true
        prv_cetvrtina_finalista(timovi_cetvrt_finalista)
        certvrFinale(timovi_cetvrt_finalista)
    }
})
btn_fin_4_bodovi.addEventListener('click', function(e){
    document.getElementById("Finale").scrollIntoView({behavior:"smooth"})

    btn_fin_4_bodovi.remove("active")
    btn_polufinale.classList.add("active")
    const value=e.currentTarget
    if(value){
        btn_fin_4_bodovi.disabled=true
        prikaz_rez_4_fin_bodovi(bodovi_cetvrt_finalista)
        izborpolufinalista(bodovi_cetvrt_finalista)


    }
})
btn_polufinale.addEventListener('click', function(e){
    document.getElementById("Finale").scrollIntoView({behavior:"smooth"})

    btn_polufinale.remove("active")
    btn_polufinal_bodovi.classList.add("active")
    const value=e.currentTarget
    if(value){
        btn_polufinale.disabled=true
        poluFinale(timovi_polufinale)
        prv_polu_finalista(timovi_polufinale)
        console.log(timovi_polufinale,"polufinalisti")

    }
})
btn_polufinal_bodovi.addEventListener('click', function(e){
    document.getElementById("Finale").scrollIntoView({behavior:"smooth"})

    btn_polufinal_bodovi.remove("active")
    btn_finale.classList.add("active")
    const value=e.currentTarget
    if(value){
        btn_polufinal_bodovi.disabled=true
        prikaz_rez_polu_fin_bodovi(bodovi_polufinale_finalista)
        izborFinalista(bodovi_polufinale_finalista)
    }
})
btn_finale.addEventListener('click', function(e){

    document.getElementById("Finale").scrollIntoView({behavior:"smooth"})
    btn_finale.remove("active")
    btn_finale_bodovi.classList.add("active")
    const value=e.currentTarget
    if(value){
        btn_finale.disabled=true
        Finale_(timovi_finale)
        prv_finalista(timovi_finale)
    }
})
btn_finale_bodovi.addEventListener('click', function(e){
    document.getElementById("Finale").scrollIntoView({behavior:"smooth"})
   
    const value=e.currentTarget
    if(value){
        btn_finale_bodovi.disabled=true
        prikaz_rez_finale_bodovi(bodovi_finale)
        prvak(bodovi_finale)
        }
       
})



//*******************************************FUNKCIJE*****************************

function makeGrup(timovi){

    const GRUPA=[]
    for(let i=0; i< timovi.length; i++){
        if(grupa.length===0||grupa.length <4){
            grupa.push(timovi[i])
            if(grupa.length>3){
                GRUPA.push(grupa)
                grupa=[]
            }
        }
    }
    Kolo=[...GRUPA]
    return GRUPA

}
function Stadioni(Stadioni) {
    const S_TERENI=[] 
    const stadiuma=Stadioni.length 
    const rendom_teren1=Math.floor(Math.random()*stadiuma) 
    const rendom_teren2=Math.floor(Math.random()*stadiuma) 
    const rendom_teren3=Math.floor(Math.random()*stadiuma) 
    const rendom_teren4=Math.floor(Math.random()*stadiuma) 
    for(let i=0; i< Stadioni.length; i++) {
        if(S_TERENI.length===0) {

            S_TERENI.push(Stadioni[rendom_teren1]) 
            S_TERENI.push(Stadioni[rendom_teren2]) 
            S_TERENI.push(Stadioni[rendom_teren3]) 
            S_TERENI.push(Stadioni[rendom_teren4])
        }
    }

    return S_TERENI
}
function sortiranje(grupaa){
    const Random=Math.floor(Math.random()*2)
    let len=grupaa.length
    for (let i=0;i<len; i++){
        for(let prvi=0; prvi< grupaa[i].length; prvi++){
            for(let drugi=prvi+1; drugi< grupaa[i].length; drugi++){
                let a=0
                if(grupaa[i][drugi].bodovi > grupaa[i][prvi].bodovi){
                    a=grupaa[i][drugi]
                    grupaa[i][drugi]=grupaa[i][prvi]
                    grupaa[i][prvi]=a
                } else if(grupaa[i][drugi].bodovi === grupaa[i][prvi].bodovi){
                    if(grupaa[i][drugi].zbir_golova > grupaa[i][prvi].zbir_golova){
                        a=grupaa[i][drugi]
                        grupaa[i][drugi]=grupaa[i][prvi]
                        grupaa[i][prvi]=a
                    }else if(grupaa[i][drugi].zbir_golova === grupaa[i][prvi].zbir_golova){
                        if(Random===1){
                            grupaa[i][prvi]
                        }else if(Random===2){
                            grupaa[i][drugi]
                        }

                    }
                }
            }
        }
    }
    sort.push(...grupaa)
}
function GrupnaFazaTakmicenja1(grupnafaza){

    for (let G=0; G < grupnafaza.length; G++){
        let rezultat1=Math.floor(Math.random() *10)
        let rezultat2=Math.floor(Math.random() *10)
        let rezultat3=Math.floor(Math.random() *10)
        let rezultat4=Math.floor(Math.random() *10)

        for (let tim=0; tim < grupnafaza[G].length; tim++){
            if(!grupnafaza[G][tim].gol_I_kolo){
   
                grupnafaza[G][0]=Object.assign({},grupnafaza[G][0],{I_kolo:rezultat1},{zbir_golova:rezultat1})
                grupnafaza[G][1]=Object.assign({},grupnafaza[G][1],{I_kolo:rezultat2},{zbir_golova:rezultat2})
                grupnafaza[G][2]=Object.assign({},grupnafaza[G][2],{I_kolo:rezultat3},{zbir_golova:rezultat3})
                grupnafaza[G][3]=Object.assign({},grupnafaza[G][3],{I_kolo:rezultat4},{zbir_golova:rezultat4})
                if(grupnafaza[G][tim].I_kolo){
                    if(grupnafaza[G][0].I_kolo > grupnafaza[G][1].I_kolo){
                        grupnafaza[G][0].bodovi=3
                        grupnafaza[G][1].bodovi=0
                    }if(grupnafaza[G][0].I_kolo < grupnafaza[G][1].I_kolo){
                        grupnafaza[G][0].bodovi=0
                        grupnafaza[G][1].bodovi=3
                    }if(grupnafaza[G][2].I_kolo>grupnafaza[G][3].I_kolo){
                        grupnafaza[G][2].bodovi=3
                        grupnafaza[G][3].bodovi=0
                    }if(grupnafaza[G][2].I_kolo < grupnafaza[G][3].I_kolo){
                        grupnafaza[G][2].bodovi=0
                        grupnafaza[G][3].bodovi=3
                    }if(grupnafaza[G][0].I_kolo===grupnafaza[G][1].I_kolo){
                        grupnafaza[G][0].bodovi=1
                        grupnafaza[G][1].bodovi=1
                    }if(grupnafaza[G][2].I_kolo===grupnafaza[G][3].I_kolo){
                        grupnafaza[G][2].bodovi=1
                        grupnafaza[G][3].bodovi=1
                    }
                }
            }
        }
    }
    console.log(grupnafaza,"I")
    array1.push(...grupnafaza)

}
function GrupnaFazaTakmicenja2(grupnafaza){

    for (let G=0; G < grupnafaza.length; G++){
        let rezultat1=Math.floor(Math.random() *10)
        let rezultat2=Math.floor(Math.random() *10)
        let rezultat3=Math.floor(Math.random() *10)
        let rezultat4=Math.floor(Math.random() *10)

        for (let tim=0; tim < grupnafaza[G].length; tim++){
            if(!grupnafaza[G][tim].II_kolo){
                grupnafaza[G][0]=Object.assign({},grupnafaza[G][0],{II_kolo:rezultat1})
                grupnafaza[G][1]=Object.assign({},grupnafaza[G][1],{II_kolo:rezultat2})
                grupnafaza[G][2]=Object.assign({},grupnafaza[G][2],{II_kolo:rezultat3})
                grupnafaza[G][3]=Object.assign({},grupnafaza[G][3],{II_kolo:rezultat4})
                if(grupnafaza[G][tim].II_kolo){
                    grupnafaza[G][0].zbir_golova+=rezultat1
                    grupnafaza[G][1].zbir_golova+=rezultat2
                    grupnafaza[G][2].zbir_golova+=rezultat3
                    grupnafaza[G][3].zbir_golova+=rezultat4
                    if(grupnafaza[G][0].II_kolo > grupnafaza[G][3].II_kolo){
                        grupnafaza[G][0].bodovi+=3
                        grupnafaza[G][3].bodovi+=0
                    }if(grupnafaza[G][0].II_kolo<grupnafaza[G][3].II_kolo){
                        grupnafaza[G][0].bodovi+=0
                        grupnafaza[G][3].bodovi+=3
                    }if(grupnafaza[G][1].II_kolo>grupnafaza[G][2].II_kolo){
                        grupnafaza[G][1].bodovi+=3
                        grupnafaza[G][2].bodovi+=0
                    }if(grupnafaza[G][1].II_kolo<grupnafaza[G][2].II_kolo){
                        grupnafaza[G][1].bodovi+=0
                        grupnafaza[G][2].bodovi+=3
                    }if(grupnafaza[G][0].II_kolo===grupnafaza[G][3].II_kolo){
                        grupnafaza[G][0].bodovi+=1
                        grupnafaza[G][3].bodovi+=1
                    }if(grupnafaza[G][1].II_kolo===grupnafaza[G][2].II_kolo){
                        grupnafaza[G][1].bodovi+=1
                        grupnafaza[G][2].bodovi+=1
                    }
                }
            }
        }
    }
    console.log(grupnafaza,"II")
    array2.push(...grupnafaza)

}
function GrupnaFazaTakmicenja3(grupnafaza){

    for (let G=0; G < grupnafaza.length; G++){
        let rezultat1=Math.floor(Math.random() *10)
        let rezultat2=Math.floor(Math.random() *10)
        let rezultat3=Math.floor(Math.random() *10)
        let rezultat4=Math.floor(Math.random() *10)
        for (let tim=0; tim < grupnafaza[G].length; tim++){

            if(!grupnafaza[G][tim].III_kolo){
                grupnafaza[G][0]=Object.assign({},grupnafaza[G][0],{III_kolo:rezultat1})
                grupnafaza[G][1]=Object.assign({},grupnafaza[G][1],{III_kolo:rezultat2})
                grupnafaza[G][2]=Object.assign({},grupnafaza[G][2],{III_kolo:rezultat3})
                grupnafaza[G][3]=Object.assign({},grupnafaza[G][3],{III_kolo:rezultat4})
       
           
       

                if(grupnafaza[G][tim].III_kolo){
                    grupnafaza[G][0].zbir_golova+=rezultat1
                    grupnafaza[G][1].zbir_golova+=rezultat2
                    grupnafaza[G][2].zbir_golova+=rezultat3
                    grupnafaza[G][3].zbir_golova+=rezultat4

                    if(grupnafaza[G][0].III_kolo > grupnafaza[G][2].III_kolo){
                        grupnafaza[G][0].bodovi+=3
                        grupnafaza[G][2].bodovi+=0

               


                    }if(grupnafaza[G][0].III_kolo<grupnafaza[G][2].III_kolo){
                        grupnafaza[G][0].bodovi+=0
                        grupnafaza[G][2].bodovi+=3
               

                    }if(grupnafaza[G][1].III_kolo>grupnafaza[G][3].III_kolo){
                        grupnafaza[G][1].bodovi+=3
                        grupnafaza[G][3].bodovi+=0
           


       
                    }if(grupnafaza[G][1].III_kolo<grupnafaza[G][3].III_kolo){
                        grupnafaza[G][1].bodovi+=0
                        grupnafaza[G][3].bodovi+=3
           

                    }if(grupnafaza[G][0].III_kolo===grupnafaza[G][2].III_kolo){
                        grupnafaza[G][0].bodovi+=1
                        grupnafaza[G][2].bodovi+=1
               
                    }if(grupnafaza[G][1].III_kolo===grupnafaza[G][3].III_kolo){
                        grupnafaza[G][1].bodovi+=1
                        grupnafaza[G][3].bodovi+=1
               
           
                    }
                }
            }
        }
    }
    console.log(grupnafaza,"III")
    array3.push(...grupnafaza)
    //return array3
}
function Finale16(timovi){

    console.log(timovi,"osmina")
    const grup1=[]
    const grup2=[]
    const grup3=[]
    const grup4=[]
    for(let i=0; i< timovi.length; i++){
        for(let a=0; a< timovi.length; a++){
            if(grup1.length===0){
           
                grup1.push(timovi[0][0],timovi[1][1])
                grup1.push(timovi[0][1],timovi[1][0])
            }
            if(grup2.length===0){
                grup2.push(timovi[2][0],timovi[3][1])
                grup2.push(timovi[2][1],timovi[3][0])
            }
            if(grup3.length===0){
                grup3.push(timovi[4][0],timovi[5][1])
                grup3.push(timovi[4][1],timovi[5][0])
            }
            if(grup4.length===0){
                grup4.push(timovi[6][0],timovi[7][1])
                grup4.push(timovi[6][1],timovi[7][0])
            }
        }
    }
    timovi_sesnest_finalista.push(grup1,grup2,grup3,grup4)
}
function rez_16_fin(grupnafaza){
    for (let G=0; G < grupnafaza.length; G++){
        let rezultat1=Math.floor(Math.random() *5)
        let rezultat2=Math.floor(Math.random() *5)
        let rezultat3=Math.floor(Math.random() *5)
        let rezultat4=Math.floor(Math.random() *5)
        let penali1=Math.floor(Math.random() *5)
        let penali2=Math.floor(Math.random() *5)
        for (let tim=0; tim < grupnafaza[G].length; tim++){
            grupnafaza[G][0]=Object.assign({},grupnafaza[G][0],{golovi_osmina:rezultat1},{bodovi_osmine:0},{poluvreme1:0},{poluvreme2:0},{golovi_penali:0},{kraj:"ishod"})
            grupnafaza[G][1]=Object.assign({},grupnafaza[G][1],{golovi_osmina:rezultat2},{bodovi_osmine:0},{poluvreme1:0},{poluvreme2:0},{golovi_penali:0},{kraj:"ishod"})
            grupnafaza[G][2]=Object.assign({},grupnafaza[G][2],{golovi_osmina:rezultat3},{bodovi_osmine:0},{poluvreme1:0},{poluvreme2:0},{golovi_penali:0},{kraj:"ishod"})
            grupnafaza[G][3]=Object.assign({},grupnafaza[G][3],{golovi_osmina:rezultat4},{bodovi_osmine:0},{poluvreme1:0},{poluvreme2:0},{golovi_penali:0},{kraj:"ishod"})
            if(grupnafaza[G][0].golovi_osmina > grupnafaza[G][1].golovi_osmina){
                grupnafaza[G][0].bodovi_osmine=3
                grupnafaza[G][1].bodovi_osmine=0
                grupnafaza[G][0].kraj="cetvrtfinalista"
                grupnafaza[G][1].kraj="ispao"
            }if(grupnafaza[G][0].golovi_osmina < grupnafaza[G][1].golovi_osmina){
                grupnafaza[G][0].bodovi_osmine=0
                grupnafaza[G][1].bodovi_osmine=3
                grupnafaza[G][0].kraj="ispao"
                grupnafaza[G][1].kraj="cetvrtfinalista"

            }if(grupnafaza[G][2].golovi_osmina>grupnafaza[G][3].golovi_osmina){
                grupnafaza[G][2].bodovi_osmine=3
                grupnafaza[G][3].bodovi_osmine=0
                grupnafaza[G][2].kraj="cetvrtfinalista"
                grupnafaza[G][3].kraj="ispao"

            }if(grupnafaza[G][2].golovi_osmina< grupnafaza[G][3].golovi_osmina){
                grupnafaza[G][2].bodovi_osmine=0
                grupnafaza[G][3].bodovi_osmine=3
                grupnafaza[G][2].kraj="ispao"
                grupnafaza[G][3].kraj="cetvrtfinalista"

            }if(grupnafaza[G][0].golovi_osmina===grupnafaza[G][1].golovi_osmina){
                grupnafaza[G][0].bodovi_osmine=1
                grupnafaza[G][1].bodovi_osmine=1
                grupnafaza[G][0].golovi_penali=penali1
                grupnafaza[G][1].golovi_penali=penali2
                let timovi1=[grupnafaza[G][0],grupnafaza[G][1]]
                let izbor=Math.floor(Math.random() *timovi1.length)
                if( grupnafaza[G][0].golovi_penali> grupnafaza[G][1].golovi_penali){
                    grupnafaza[G][0].kraj="cetvrtfinalista"
                    grupnafaza[G][1].kraj="ispao"
                }if( grupnafaza[G][0].golovi_penali<grupnafaza[G][1].golovi_penali){
                    grupnafaza[G][1].kraj="cetvrtfinalista"
                    grupnafaza[G][0].kraj="ispao"
                }if(grupnafaza[G][0].golovi_penali===grupnafaza[G][1].golovi_penali){
                    if(izbor===0){
                        grupnafaza[G][0].kraj="cetvrtfinalista"
                        grupnafaza[G][1].kraj="ispao"
                        grupnafaza[G][0].golovi_penali+=1
                        grupnafaza[G][1].golovi_penali+=0
                    }if(izbor===1){
                        grupnafaza[G][1].kraj="cetvrtfinalista"
                        grupnafaza[G][0].kraj="ispao"
                        grupnafaza[G][1].golovi_penali+=1
                        grupnafaza[G][0].golovi_penali+=0
                    }
                }
            }
            if(grupnafaza[G][2].golovi_osmina===grupnafaza[G][3].golovi_osmina){
                grupnafaza[G][2].bodovi_osmine=1
                grupnafaza[G][3].bodovi_osmine=1
                grupnafaza[G][0].golovi_penali=penali1
                grupnafaza[G][1].golovi_penali=penali2
                let timovi1=[grupnafaza[G][2],grupnafaza[G][3]]
                let izbor=Math.floor(Math.random() *timovi1.length)
                if( grupnafaza[G][2].golovi_penali> grupnafaza[G][3].golovi_penali){
                    grupnafaza[G][2].kraj="cetvrtfinalista"
                    grupnafaza[G][3].kraj="ispao"
                }if( grupnafaza[G][2].golovi_penali<grupnafaza[G][3].golovi_penali){
                    grupnafaza[G][3].kraj="cetvrtfinalista"
                    grupnafaza[G][2].kraj="ispao"
                }if(grupnafaza[G][2].golovi_penali===grupnafaza[G][3].golovi_penali){
                    if(izbor===0){
                        grupnafaza[G][2].kraj="cetvrtfinalista"
                        grupnafaza[G][3].kraj="ispao"
                        grupnafaza[G][2].golovi_penali+=1
                        grupnafaza[G][3].golovi_penali+=0
                    }if(izbor===1){
                        grupnafaza[G][3].kraj="cetvrtfinalista"
                        grupnafaza[G][2].kraj="ispao"
                        grupnafaza[G][3].golovi_penali+=1
                        grupnafaza[G][2].golovi_penali+=0
                    }
                }
            }
        }
    }
    console.log(grupnafaza,"16FINALA")
    bodovi_sesnest_finalista.push(...grupnafaza)
}
function izborcetvrtfinalist(grupaa){
    const Finalista_4_finala=[]
    let len=grupaa.length
    for (let i=0;i<len; i++){
        for(let a=0; a< grupaa[i].length; a++){
            if(grupaa[i][a].kraj==="cetvrtfinalista"){
                if(grupa_finala.length===0||grupa_finala.length<3){
                    grupa_finala.push(grupaa[i][a])
                    if(grupa_finala.length>1){
                        Finalista_4_finala.push(grupa_finala)
                        grupa_finala=[]
                    }
                }
            }
        }

    }
    timovi_cetvrt_finalista.push(...Finalista_4_finala)
    return Finalista_4_finala

}
function izborpolufinalista(grupaa){

    const Finalista_polu_finala=[]
    let len=grupaa.length
    for (let i=0;i<len; i++){
        for(let a=0; a< grupaa[i].length; a++){
            if(grupaa[i][a].kraj==="polufinale"){
                if(grupa_finala.length===0||grupa_finala.length<3){
                    grupa_finala.push(grupaa[i][a])
                    if(grupa_finala.length>1){
                        Finalista_polu_finala.push(grupa_finala)
                        grupa_finala=[]
                    }
                }
            }
        }

    }
    timovi_polufinale.push(...Finalista_polu_finala)
    return Finalista_polu_finala

}
function izborFinalista(grupaa){
    console.log(grupaa,"finalista")

    const Finalista=[]
    let len=grupaa.length
    for (let i=0;i<len; i++){
        for(let a=0; a< grupaa[i].length; a++){
            if(grupaa[i][a].kraj==="finalista"){
                if(grupa_finala.length===0||grupa_finala.length<3){
                    grupa_finala.push(grupaa[i][a])
                    if(grupa_finala.length>1){
                        Finalista.push(grupa_finala)
                        grupa_finala=[]
                    }
                }
            }
        }

    }
    timovi_finale.push(...Finalista)
    console.log(timovi_finale,"finale")
    return Finalista

}
function certvrFinale(timovi_4finale){

    for (let G=0; G< timovi_4finale.length; G++){
        let rezultat1=Math.floor(Math.random() *5)
        let rezultat2=Math.floor(Math.random() *5)

        let penali1=Math.floor(Math.random() *5)
        let penali2=Math.floor(Math.random() *5)

        for (let tim=0; tim <timovi_4finale[G].length; tim++){
            timovi_4finale[G][0]=Object.assign({},timovi_4finale[G][0],{golovi_cetvrt_finala:rezultat1},{bodovi_4_finala:0},{golovi_4finala_penali:0})
            timovi_4finale[G][1]=Object.assign({},timovi_4finale[G][1],{golovi_cetvrt_finala:rezultat2},{bodovi_4_finala:0},{golovi_4finala_penali:0})

            if(timovi_4finale[G][0].golovi_cetvrt_finala > timovi_4finale[G][1].golovi_cetvrt_finala){
                timovi_4finale[G][0].bodovi_4_finala=3
                timovi_4finale[G][1].bodovi_4_finala=0
                timovi_4finale[G][0].kraj="polufinale"
                timovi_4finale[G][1].kraj="ispao"
            }
            if(timovi_4finale[G][0].golovi_cetvrt_finala < timovi_4finale[G][1].golovi_cetvrt_finala){
                timovi_4finale[G][0].bodovi_4_finala=0
                timovi_4finale[G][1].bodovi_4_finala=3
                timovi_4finale[G][0].kraj="ispao"
                timovi_4finale[G][1].kraj="polufinale"
            }
            if(timovi_4finale[G][0].golovi_cetvrt_finala===timovi_4finale[G][1].golovi_cetvrt_finala){
                timovi_4finale[G][0].bodovi_4_finala=1
                timovi_4finale[G][1].bodovi_4_finala=1
                timovi_4finale[G][0].golovi_4finala_penali=penali1
                timovi_4finale[G][1].golovi_4finala_penali=penali2
                let timovi1=[timovi_4finale[G][0],timovi_4finale[G][1]]
                let izbor=Math.floor(Math.random() *timovi1.length)

                if( timovi_4finale[G][0].golovi_4finala_penali> timovi_4finale[G][1].golovi_4finala_penali){
                    timovi_4finale[G][0].kraj="polufinale"
                    timovi_4finale[G][1].kraj="ispao"
                }
                if( timovi_4finale[G][0].golovi_4finala_penali<timovi_4finale[G][1].golovi_4finala_penali){
                    timovi_4finale[G][1].kraj="polufinale"
                    timovi_4finale[G][0].kraj="ispao"
                }
                if(timovi_4finale[G][0].golovi_4finala_penali===timovi_4finale[G][1].golovi_4finala_penali){
                    if(izbor===0){
                        timovi_4finale[G][0].kraj="polufinale"
                        timovi_4finale[G][1].kraj="ispao"
                        timovi_4finale[G][0].golovi_4finala_penali+=1
                        timovi_4finale[G][1].golovi_4finala_penali+=0
                    }
                    if(izbor===1){
                        timovi_4finale[G][1].kraj="polufinale"
                        timovi_4finale[G][0].kraj="ispao"
                        timovi_4finale[G][1].golovi_4finala_penali+=1
                        timovi_4finale[G][0].golovi_4finala_penali+=0
                    }
                }
            }
        }
    }
    bodovi_cetvrt_finalista.push(...timovi_4finale)
    console.log(bodovi_cetvrt_finalista,"4bodovi")
    return timovi_4finale


}
function poluFinale(timovi_polu_finale){
    for (let G=0; G< timovi_polu_finale.length; G++){
        let rezultat1=Math.floor(Math.random() *5)
        let rezultat2=Math.floor(Math.random() *5)

        let penali1=Math.floor(Math.random() *5)
        let penali2=Math.floor(Math.random() *5)

        for (let tim=0; tim <timovi_polu_finale[G].length; tim++){
            timovi_polu_finale[G][0]=Object.assign({},timovi_polu_finale[G][0],{golovi_polu_finala:rezultat1},{bodovi_polu_finala:0},{golovi_polu_penali:0})
            timovi_polu_finale[G][1]=Object.assign({},timovi_polu_finale[G][1],{golovi_polu_finala:rezultat2},{bodovi_polu_finala:0},{golovi_polu_penali:0})

            if(timovi_polu_finale[G][0].golovi_polu_finala > timovi_polu_finale[G][1].golovi_polu_finala){
                timovi_polu_finale[G][0].bodovi_polu_finala=3
                timovi_polu_finale[G][1].bodovi_polu_finala=0
                timovi_polu_finale[G][0].kraj="finalista"
                timovi_polu_finale[G][1].kraj="finale za drugo i trece mesto"
            }
            if(timovi_polu_finale[G][0].golovi_polu_finala < timovi_polu_finale[G][1].golovi_polu_finala){
                timovi_polu_finale[G][0].bodovi_polu_finala=0
                timovi_polu_finale[G][1].bodovi_polu_finala=3
                timovi_polu_finale[G][0].kraj="finale za drugo i trece mesto"
                timovi_polu_finale[G][1].kraj="finalista"
            }
            if(timovi_polu_finale[G][0].golovi_polu_finala===timovi_polu_finale[G][1].golovi_polu_finala){
                timovi_polu_finale[G][0].bodovi_polu_finala=1
                timovi_polu_finale[G][1].bodovi_polu_finala=1
                timovi_polu_finale[G][0].golovi_polu_penali=penali1
                timovi_polu_finale[G][1].golovi_polu_penali=penali2
                let timovi1=[timovi_polu_finale[G][0],timovi_polu_finale[G][1]]
                let izbor=Math.floor(Math.random() *timovi1.length)

                if( timovi_polu_finale[G][0].golovi_polu_penali> timovi_polu_finale[G][1].golovi_polu_penali){
                    timovi_polu_finale[G][0].kraj="finalista"
                    timovi_polu_finale[G][1].kraj="finale za drugo i trece mesto"
                }
                if( timovi_polu_finale[G][0].golovi_polu_penali<timovi_polu_finale[G][1].golovi_polu_penali){
                    timovi_polu_finale[G][1].kraj="finalista"
                    timovi_polu_finale[G][0].kraj="finale za drugo i trece mesto"
                }
                if(timovi_polu_finale[G][0].golovi_polu_penali===timovi_polu_finale[G][1].golovi_polu_penali){
                    if(izbor===0){
                        timovi_polu_finale[G][0].kraj="finalista"
                        timovi_polu_finale[G][1].kraj="finale za drugo i trece mesto"
                        timovi_polu_finale[G][0].golovi_polu_penali+=1
                        timovi_polu_finale[G][1].golovi_polu_penali+=0
                    }
                    if(izbor===1){
                        timovi_polu_finale[G][1].kraj="finalista"
                        timovi_polu_finale[G][0].kraj="finale za drugo i trece mesto"
                        timovi_polu_finale[G][1].golovi_polu_penali+=1
                        timovi_polu_finale[G][0].golovi_polu_penali+=0
                    }
                }
            }
        }
    }
    console.log(timovi_polu_finale,"asdasdsadddddddddddddddddddddddddddd")
    bodovi_polufinale_finalista.push(...timovi_polu_finale)
    return timovi_polu_finale


}
function Finale_(timovi_finale){
    console.log(timovi_finale,"aaaa")
    for (let G=0; G< timovi_finale.length; G++){
        let rezultat1=Math.floor(Math.random() *5)
        let rezultat2=Math.floor(Math.random() *5)

        let penali1=Math.floor(Math.random() *5)
        let penali2=Math.floor(Math.random() *5)

        for (let tim=0; tim <timovi_finale[G].length; tim++){
            timovi_finale[G][0]=Object.assign({},timovi_finale[G][0],{golovi_finala:rezultat1},{bodovi_finala:0},{golovi_finale_penali:0})
            timovi_finale[G][1]=Object.assign({},timovi_finale[G][1],{golovi_finala:rezultat2},{bodovi_finala:0},{golovi_finale_penali:0})

            if(timovi_finale[G][0].golovi_finala > timovi_finale[G][1].golovi_finala){
                timovi_finale[G][0].bodovi_finala=3
                timovi_finale[G][1].bodovi_finala=0
                timovi_finale[G][0].kraj="finalista"
                timovi_finale[G][1].kraj="za trece i drugo mesto"
            }
            if(timovi_finale[G][0].golovi_finala < timovi_finale[G][1].golovi_finala){
                timovi_finale[G][0].bodovi_finala=0
                timovi_finale[G][1].bodovi_finala=3
                timovi_finale[G][0].kraj="za trece i drugo mesto"
                timovi_finale[G][1].kraj="finalista"
            }
            if(timovi_finale[G][0].golovi_finala===timovi_finale[G][1].golovi_finala){
                timovi_finale[G][0].bodovi_finala=1
                timovi_finale[G][1].bodovi_finala=1
                timovi_finale[G][0].golovi_finale_penali=penali1
                timovi_finale[G][1].golovi_finale_penali=penali2
                let timovi1=[timovi_finale[G][0],timovi_finale[G][1]]
                let izbor=Math.floor(Math.random() *timovi1.length)

                if( timovi_finale[G][0].golovi_finale_penali> timovi_finale[G][1].golovi_finale_penali){
                    timovi_finale[G][0].kraj="finalista"
                    timovi_finale[G][1].kraj="osvojeno drugo mesto"
                }
                if( timovi_finale[G][0].golovi_finale_penali<timovi_finale[G][1].golovi_finale_penali){
                    timovi_finale[G][1].kraj="finalista"
                    timovi_finale[G][0].kraj="za trece i drugo mesto"
                }
                if(timovi_finale[G][0].golovi_finale_penali===timovi_finale[G][1].golovi_finale_penali){
                    if(izbor===0){
                        timovi_finale[G][0].kraj="finalista"
                        timovi_finale[G][1].kraj="za trece i drugo mesto"
                        timovi_finale[G][0].golovi_finale_penali+=1
                        timovi_finale[G][1].golovi_finale_penali+=0
                    }
                    if(izbor===1){
                        timovi_finale[G][1].kraj="finalista"
                        timovi_finale[G][0].kraj="za trece i drugo mesto"
                        timovi_finale[G][1].golovi_finale_penali+=1
                        timovi_finale[G][0].golovi_finale_penali+=0
                    }
                }
            }
        }
    }
    bodovi_finale.push(...timovi_finale)


}

//******************************************************************************
/*Kon_Grupe.onclick=function(e){

    if(e.target.parentNode.className==="container_tim_grupe"){
        let aa= parseInt(e.target.parentNode.id)
        const Grupe=makeGrup(Timovi)
        for (let i=0; i< Grupe.length; i++){
            Grupa.classList.remove("disable")
            Grupa.classList.add("active")
            const Div1=document.createElement("div")
            Div1.classList.add("grupa")
            const Div2=document.createElement("div")
            Div2.classList.add("timovi_grupe")
            for (let a=0; a< Grupe[i].length; a++){
                let imegrupe=Grupe[i][a].grupa
                let  Grupa_slovo=Grupe[i][a].grupa.split("",1)
                const prvo_slovo=Grupe[i][a].ime.split("",1)
                const Slovoa=Grupe[i][a].ime.slice(1)
                const slika=Grupe[i][a].slika
       
                if(aa===Grupe[i][a].id){
                    Div2.innerHTML+=
                    `
                        <div class="container_tima">
                        <h2> Informacije o ucesniku world cup 2023</h2>
                            <img id="tim_grupa_img" src="${Grupe[i][a].slika}" >
                            <p id="tim_grupa_slovo"><span></span></p>
                            <p  id="tim_img_ball"></p>
                        </div>
                    `
                    Div1.append(Div2)
                    Grupa.appendChild(Div1)

                    console.log(Grupe[i][a])
           
           

                }  
            }
        }
    }
}*/
function  Prikaz_svih_timova(Timovi){
    const svi_timovi=document.querySelector(".container_svetcko_prvenstvo_2")
    const Div=document.createElement("div")
    Div.classList.add("container_svih_timova")

    for (let j=0; j<Timovi.length; j++){
            Div.innerHTML+=
        `
            <div class="container_tim_grupe_F">
                <img id="front_face" src="${Timovi[j].slika}">
                <p id="back_face" >${Timovi[j].ime}</p>

            </div>  
        `
        svi_timovi.appendChild(Div)
}
}
function Prikaz_grupa(timovi){
    const Container_grupa=document.querySelector(".container-all ")
    const naslov=document.createElement("h2")
    naslov.classList.add("naslov_grupe")
    naslov.innerHTML="Prikaz utakmica i timova"

    const Grupa=document.createElement("div")
    Grupa.classList.add("container_grupe")
    for (let i=0; i< timovi.length; i++){

        const Div1=document.createElement("div")
        Div1.classList.add("grupa")
        const Div2=document.createElement("div")
        Div2.classList.add("timovi_grupe")
        const h2=document.createElement("h2")
        h2.classList.add("ime_grupe")
        for (let a=0; a< timovi[i].length; a++){
            let couter=0
            let imegrupe=timovi[i][a].grupa
            let  Grupa_slovo=timovi[i][a].grupa.split("",1)
            const prvo_slovo=timovi[i][a].ime.split("",1)
            const Slovoa=timovi[i][a].ime.slice(1)
            const slika=timovi[i][a].slika
            h2.innerText =`${Grupa_slovo}`        
                Div2.innerHTML+=
                                `
                                    <div class="container_tim_grupe" id="${timovi[i][a].id}">
                                        <img id="tim_grupa_img" src="${slika}" >
                                        <p id="tim_grupa_slovo"><span>${prvo_slovo}</span>${Slovoa}</p>
                                        <p  id="tim_img_ball"></p>
                                    </div>
                                `
                                couter++
                        Div1.append(h2,Div2)
                        Grupa.append(Div1)
                        Container_grupa.appendChild(Grupa)
        }
    }

}

function Irvo_kolo_prikaz(timovi){



    const Container_grupa=document.querySelector(".container-all")

    const Container_grupa1=Container_grupa.children
    console.log(Container_grupa1,"deca")

    const Grupa=document.createElement("div")
    Grupa.classList.add("container_grupa_1")
    for (let i=0; i< timovi.length; i++){
    
        const Div1=document.createElement("div")
        Div1.classList.add("grupa")
        const Div2=document.createElement("div")
        Div2.classList.add("timovi_grupe")
        const h2=document.createElement("h2")
        h2.classList.add("ime_grupe")
        for (let a=0; a< timovi[i].length; a++){
            let imegrupe=timovi[i][a].grupa
            let  Grupa_slovo=timovi[i][a].grupa.split("",1)
            const prvo_slovo=timovi[i][a].ime.split("",1)
            const Slovoa=timovi[i][a].ime.slice(1)
            const slika=timovi[i][a].slika
            h2.innerText =`${Grupa_slovo}`              
                Div2.innerHTML+=
                                `
                                    <div class="container_tim_grupe" id="${timovi[i][a].id}">
                                        <img id="tim_grupa_img" src="${slika}" >
                                        <p id="tim_grupa_slovo"><span>${prvo_slovo}</span>${Slovoa}</p>
                                        <p id="tim_bodovi">${timovi[i][a].bodovi}</p>
                                    </div>
                                `
                        Div1.append(h2,Div2)
                        Grupa.append(Div1)
                        Container_grupa.appendChild(Grupa)
        }
    }
}
function II_kolo_prikaz(timovi){
    const Container_grupa=document.querySelector(".container-all")

    const Grupa=document.createElement("div")
    Grupa.classList.add("container_grupa_2")

    for (let i=0; i< timovi.length; i++){

        const Div1=document.createElement("div")
        Div1.classList.add("grupa")
        const Div2=document.createElement("div")
        Div2.classList.add("timovi_grupe")
        const h2=document.createElement("h2")
        h2.classList.add("ime_grupe")
        for (let a=0; a< timovi[i].length; a++){
            let imegrupe=timovi[i][a].grupa
            let  Grupa_slovo=timovi[i][a].grupa.split("",1)
            const prvo_slovo=timovi[i][a].ime.split("",1)
            const Slovoa=timovi[i][a].ime.slice(1)
            const slika=timovi[i][a].slika
            h2.innerText =`${Grupa_slovo}`              
                Div2.innerHTML+=
                                `
                                    <div class="container_tim_grupe" id="${timovi[i][a].id}">
                                        <img id="tim_grupa_img" src="${slika}" >
                                        <p id="tim_grupa_slovo"><span>${prvo_slovo}</span>${Slovoa}</p>
                                        <p id="tim_bodovi">${timovi[i][a].bodovi}</p>
                                    </div>
                                `
                        Div1.append(h2,Div2)
                        Grupa.append(Div1)
                        Container_grupa.appendChild(Grupa)
        }
    }
}
function III_kolo_prikaz(timovi){

    const Container_grupa=document.querySelector(".container-all")
    const Grupa=document.createElement("div")
    Grupa.classList.add("container_grupa_sortirano3")

    for (let i=0; i< timovi.length; i++){
    
        const Div1=document.createElement("div")
        Div1.classList.add("grupa")
        const Div2=document.createElement("div")
        Div2.classList.add("timovi_grupe")
        const h2=document.createElement("h2")
        h2.classList.add("ime_grupe")
        for (let a=0; a< timovi[i].length; a++){
            let imegrupe=timovi[i][a].grupa
            let  Grupa_slovo=timovi[i][a].grupa.split("",1)
            const prvo_slovo=timovi[i][a].ime.split("",1)
            const Slovoa=timovi[i][a].ime.slice(1)
            const slika=timovi[i][a].slika
            h2.innerText =`${Grupa_slovo}`
            Div2.innerHTML+=
                        `
                            <div class="container_tim_grupe" id="${timovi[i][a].id}">
                                <img id="tim_grupa_img" src="${slika}" >
                                <p id="tim_grupa_slovo"><span>${prvo_slovo}</span>${Slovoa}</p>
                                <p id="tim_bodovi">${timovi[i][a].bodovi}</p>
                            </div>
                        `
                Div1.append( h2,Div2)
                Grupa.append(Div1)
                Container_grupa.appendChild(Grupa)
   
        }
    }
}
function kolo_prikaz_prikaz(timovi){

    const Container=document.querySelector(".container-all-1")
    const naslov=document.createElement("h2")
    naslov.classList.add("naslov_prolaz")
    naslov.innerHTML="Prikaz utakmica i timova"
    const Grupa=document.createElement("div")
    Grupa.classList.add("container_grupa_1111")


    for (let i=0; i< timovi.length; i++){


        const Div11=document.createElement("div")
        Div11.classList.add("grupa_grupa")
        const Div1=document.createElement("div")
        Div1.classList.add("grupa_grupa")
        const Div2=document.createElement("div")
        Div2.classList.add("timovi_grupe1")
        const Div3=document.createElement("div")
        Div3.classList.add("timovi_grupe1")
        const Div4=document.createElement("div")
        Div4.classList.add("timovi_grupe1")
        const Div5=document.createElement("div")
        Div5.classList.add("timovi_grupe1")
        const h2=document.createElement("h2")
        h2.classList.add("ime_grupe1")
        for (let a=0; a< timovi[i].length; a++){
   
            let couter=0
            let imegrupe=timovi[i][a].grupa
            let  Grupa_slovo=timovi[i][a].grupa.split("",1)
            const prvo_slovo=timovi[i][a].ime.split("",1)
            const Slovoa=timovi[i][a].ime.slice(1)
            const slika=timovi[i][a].slika
            h2.innerText =`${Grupa_slovo}`
   
                if(timovi[i][0]){
                    Div2.innerHTML=
                    `
                        <div class="container_tim_grupe1">
                            <div class="imetima">
                                <img  id="tim_ime1" src="${timovi[i][couter].slika}">${timovi[i][couter].ime}
                            </div>
                            <div class="kolo_1">
                                <div class="tima_kolo1">
                                    <div class="tima_img1">
                                        <img id="SLIKA" src="${timovi[i][0].slika}" >
                                    </div>
                                    <div class="tima_bodovi">
                                        <p class="BODOVI_SLIKA" id="${timovi[i][0].id}"></p>
                                    </div>
                                </div>
                                <div class="tima_kolo1">
                                    <div class="tima_img1">
                                        <img id="SLIKA" src="${timovi[i][1].slika}" >
                                    </div>
                                    <div class="tima_bodovi">
                                        <p class="BODOVI_SLIKA" id="${timovi[i][1].id}"></p>
                                    </div>
                                </div>
                            </div>
                            <div class="kolo_1">
                                <div class="tima_kolo1">
                                    <div class="tima_img1">
                                        <img id="SLIKA" src="${timovi[i][0].slika}" >
                                    </div>
                                    <div class="tima_bodovi">
                                        <p class="BODOVI_SLIKA" id="${timovi[i][0].id}"></p>
                                    </div>
                                </div>
                                <div class="tima_kolo1">
                                    <div class="tima_img1">
                                        <img id="SLIKA" src="${timovi[i][3].slika}" >
                                    </div>
                                    <div class="tima_bodovi">
                                        <p class="BODOVI_SLIKA" id="${timovi[i][3].id}"></p>
                                    </div>
                                </div>
                            </div>
       
                            <div class="kolo_1">
                                <div class="tima_kolo1">
                                    <div class="tima_img1">
                                        <img id="SLIKA" src="${timovi[i][0].slika}" >
                                    </div>
                                    <div class="tima_bodovi">
                                        <p class="BODOVI_SLIKA" id="${timovi[i][0].id}"></p>
                                    </div>
                                </div>
                                <div class="tima_kolo1">
                                    <div class="tima_img1">
                                        <img id="SLIKA" src="${timovi[0][2].slika}" >
                                    </div>
                                    <div class="tima_bodovi">
                                        <p class="BODOVI_SLIKA" id="${timovi[i][2].id}"></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        `
                        couter++
                        Div1.append(h2,Div2)
                }
                if(timovi[i][1]){
                    Div3.innerHTML=
                    `
                    <div class="container_tim_grupe1">
                        <div class="imetima">
                            <img  id="tim_ime1" src="${timovi[i][couter].slika}">${timovi[i][ couter].ime}
                        </div>

                        <div class="kolo_1">
                            <div class="tima_kolo1">
                                <div class="tima_img1">
                                    <img id="SLIKA" src="${timovi[i][1].slika}" >
                                </div>
                                <div class="tima_bodovi">
                                    <p class="BODOVI_SLIKA" id="${timovi[i][1].id}"></p>
                                </div>
                            </div>
                            <div class="tima_kolo1">
                                <div class="tima_img1">
                                    <img id="SLIKA" src="${timovi[i][0].slika}" >
                                </div>
                                <div class="tima_bodovi">
                                    <p class="BODOVI_SLIKA" id="${timovi[i][0].id}"></p>
                                </div>
                            </div>
                        </div>
                        <div class="kolo_1">
                            <div class="tima_kolo1">
                                <div class="tima_img1">
                                    <img id="SLIKA" src="${timovi[i][1].slika}" >
                                </div>
                                <div class="tima_bodovi">
                                    <p class="BODOVI_SLIKA" id="${timovi[i][1].id}"></p>
                                </div>
                            </div>
                            <div class="tima_kolo1">
                                <div class="tima_img1">
                                    <img id="SLIKA" src="${timovi[i][2].slika}" >
                                </div>
                                <div class="tima_bodovi">
                                    <p class="BODOVI_SLIKA" id="${timovi[i][2].id}"></p>
                                </div>
                            </div>
                        </div>
                        <div class="kolo_1">
                            <div class="tima_kolo1">
                                <div class="tima_img1">
                                    <img id="SLIKA" src="${timovi[i][1].slika}" >
                                </div>
                                <div class="tima_bodovi">
                                    <p class="BODOVI_SLIKA" id="${timovi[i][1].id}"></p>
                                </div>
                            </div>
                            <div class="tima_kolo1">
                                <div class="tima_img1">
                                    <img id="SLIKA" src="${timovi[i][3].slika}" >
                                </div>
                                <div class="tima_bodovi">
                                    <p class="BODOVI_SLIKA" id="${timovi[i][3].id}"></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    `
                    couter++
                    Div1.append(Div3)
                }
                if(timovi[i][2]){
                    Div4.innerHTML=
                    `
                    <div class="container_tim_grupe1">
                        <div class="imetima">
                            <img  id="tim_ime1" src="${timovi[i][couter].slika}">${timovi[i][ couter].ime}
                        </div>

                        <div class="kolo_1">
                            <div class="tima_kolo1">
                                <div class="tima_img1">
                                    <img id="SLIKA" src="${timovi[i][2].slika}" >
                                </div>
                                <div class="tima_bodovi">
                                    <p class="BODOVI_SLIKA" id="${timovi[i][2].id}"></p>
                                </div>
                            </div>
                            <div class="tima_kolo1">
                                <div class="tima_img1">
                                    <img id="SLIKA" src="${timovi[i][3].slika}" >
                                </div>
                                <div class="tima_bodovi">
                                    <p class="BODOVI_SLIKA" id="${timovi[i][3].id}"></p>
                                </div>
                            </div>
                        </div>
                        <div class="kolo_1">
                            <div class="tima_kolo1">
                                <div class="tima_img1">
                                    <img id="SLIKA" src="${timovi[i][2].slika}" >
                                </div>
                                <div class="tima_bodovi">
                                    <p class="BODOVI_SLIKA" id="${timovi[i][2].id}"></p>
                                </div>
                            </div>
                            <div class="tima_kolo1">
                                <div class="tima_img1">
                                    <img id="SLIKA" src="${timovi[i][1].slika}" >
                                </div>
                                <div class="tima_bodovi">
                                    <p class="BODOVI_SLIKA" id="${timovi[i][1].id}"></p>
                                </div>
                            </div>
                        </div>
               
                        <div class="kolo_1">
                            <div class="tima_kolo1">
                                <div class="tima_img1">
                                    <img id="SLIKA" src="${timovi[i][2].slika}" >
                                </div>
                                <div class="tima_bodovi">
                                    <p class="BODOVI_SLIKA" id="${timovi[i][2].id}"></p>
                                </div>
                            </div>
                            <div class="tima_kolo1">
                                <div class="tima_img1">
                                    <img id="SLIKA" src="${timovi[i][0].slika}" >
                                </div>
                                <div class="tima_bodovi">
                                    <p class="BODOVI_SLIKA" id="${timovi[i][0].id}"></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    `
                    couter++
                    Div1.append(Div4)
                }
                if(timovi[i][3]){
                    Div5.innerHTML=
                    `
                    <div class="container_tim_grupe1">
                        <div class="imetima">
                            <img  id="tim_ime1" src="${timovi[i][couter].slika}">${timovi[i][ couter].ime}
                        </div>

                        <div class="kolo_1">
                            <div class="tima_kolo1">
                                <div class="tima_img1">
                                    <img id="SLIKA" src="${timovi[i][3].slika}" >
                                </div>
                                <div class="tima_bodovi">
                                    <p class="BODOVI_SLIKA" id="${timovi[i][3].id}"></p>
                                </div>
                            </div>
                            <div class="tima_kolo1">
                                <div class="tima_img1">
                                    <img id="SLIKA" src="${timovi[i][2].slika}" >
                                </div>
                                <div class="tima_bodovi">
                                    <p class="BODOVI_SLIKA" id="${timovi[i][2].id}"></p>
                                </div>
                            </div>
                        </div>
                        <div class="kolo_1">
                            <div class="tima_kolo1">
                                <div class="tima_img1">
                                    <img id="SLIKA" src="${timovi[i][3].slika}" >
                                </div>
                                <div class="tima_bodovi">
                                    <p class="BODOVI_SLIKA" id="${timovi[i][3].id}"></p>
                                </div>
                            </div>
                            <div class="tima_kolo1">
                                <div class="tima_img1">
                                    <img id="SLIKA" src="${timovi[i][0].slika}" >
                                </div>
                                <div class="tima_bodovi">
                                    <p class="BODOVI_SLIKA" id="${timovi[i][0].id}"></p>
                                </div>
                            </div>
                        </div>
                   
                        <div class="kolo_1">
                            <div class="tima_kolo1">
                                <div class="tima_img1">
                                    <img id="SLIKA" src="${timovi[3][3].slika}" >
                                </div>
                                <div class="tima_bodovi">
                                    <p class="BODOVI_SLIKA" id="${timovi[i][3].id}"></p>
                                </div>
                            </div>
                            <div class="tima_kolo1">
                                <div class="tima_img1">
                                    <img id="SLIKA" src="${timovi[i][1].slika}" >
                                </div>
                                <div class="tima_bodovi">
                                    <p class="BODOVI_SLIKA" id="${timovi[i][1].id}"></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    `
                    couter++
                    Div1.append(Div5)
                    Grupa.appendChild(Div1)
                    Container.append(naslov)
                    Container.appendChild( Grupa)
                }
        }
    }
}
function Kolo_I_prikaz(timovi){


    const stari_naslov=document.querySelector(".naslov_prolaz")
    stari_naslov.remove()
    const Div=document.querySelector(".container_grupa_1111")
    Div.remove()
    const Div2=document.querySelector(".container_grupe")
    Div2.remove()

    const Container=document.querySelector(".container-all-1")
    const naslov=document.createElement("h2")
    naslov.classList.add("naslov_prolaz")
    naslov.innerHTML="Prikaz I kola"
    const Grupa=document.createElement("div")
    Grupa.classList.add("container_grupa_1111_1")

    for (let i=0; i< timovi.length; i++){
        const Div1=document.createElement("div")
        Div1.classList.add("grupa_grupa")
        const Div2=document.createElement("div")
        Div2.classList.add("timovi_grupe1")
        const Div3=document.createElement("div")
        Div3.classList.add("timovi_grupe1")
        const Div4=document.createElement("div")
        Div4.classList.add("timovi_grupe1")
        const Div5=document.createElement("div")
        Div5.classList.add("timovi_grupe1")
        const h2=document.createElement("h2")
        h2.classList.add("ime_grupe1")
        for (let a=0; a< timovi[i].length; a++){
            let couter=0
            let imegrupe=timovi[i][a].grupa
            let  Grupa_slovo=timovi[i][a].grupa.split("",1)
            const prvo_slovo=timovi[i][a].ime.split("",1)
            const Slovoa=timovi[i][a].ime.slice(1)
            const slika=timovi[i][a].slika
            h2.innerText =`${Grupa_slovo}`
                if(timovi[i][0]){
                    Div2.innerHTML=
                    `
                        <div class="container_tim_grupe1">
                            <div class="imetima">
                                <img  id="tim_ime1" src="${timovi[i][couter].slika}">${timovi[i][ couter].ime}
                            </div>
                            <div class="kolo_1">
                                <div class="tima_kolo1">
                                    <div class="tima_img1">
                                        <img id="SLIKA" src="${timovi[i][0].slika}" >
                                    </div>
                                    <div class="tima_bodovi">
                                        <p class="BODOVI_1" id="${timovi[i][0].id}">${timovi[i][0].I_kolo}</p>
                                    </div>
                                </div>
                                <div class="tima_kolo1">
                                    <div class="tima_img1">
                                        <img id="SLIKA" src="${timovi[i][1].slika}" >
                                    </div>
                                    <div class="tima_bodovi">
                                        <p class="BODOVI_1" id="${timovi[i][1].id}">${timovi[i][1].I_kolo}</p>
                                    </div>
                                </div>
                            </div>
                            <div class="kolo_1">
                                <div class="tima_kolo1">
                                    <div class="tima_img1">
                                        <img id="SLIKA" src="${timovi[i][0].slika}" >
                                    </div>
                                    <div class="tima_bodovi">
                                        <p class="BODOVI_2" id="${timovi[i][0].id}"></p>
                                    </div>
                                </div>
                                <div class="tima_kolo1">
                                    <div class="tima_img1">
                                        <img id="SLIKA" src="${timovi[i][3].slika}" >
                                    </div>
                                    <div class="tima_bodovi">
                                        <p class="BODOVI_2" id="${timovi[i][3].id}"></p>
                                    </div>
                                </div>
                            </div>
               
                            <div class="kolo_1">
                                <div class="tima_kolo1">
                                    <div class="tima_img1">
                                        <img id="SLIKA" src="${timovi[i][0].slika}" >
                                    </div>
                                    <div class="tima_bodovi">
                                        <p class="BODOVI_3" id="${timovi[i][0].id}"></p>
                                    </div>
                                </div>
                                <div class="tima_kolo1">
                                    <div class="tima_img1">
                                        <img id="SLIKA" src="${timovi[0][2].slika}" >
                                    </div>
                                    <div class="tima_bodovi">
                                        <p class="BODOVI_3" id="${timovi[i][2].id}"></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        `
                        couter++
                        Div1.append(h2,Div2)
                }
                if(timovi[i][1]){
                    Div3.innerHTML=
                    `
                    <div class="container_tim_grupe1">
                        <div class="imetima">
                        <img  id="tim_ime1" src="${timovi[i][couter].slika}">${timovi[i][ couter].ime}
                        </div>

                        <div class="kolo_1">
                            <div class="tima_kolo1">
                                <div class="tima_img1">
                                    <img id="SLIKA" src="${timovi[i][1].slika}" >
                                </div>
                                <div class="tima_bodovi">
                                    <p class="BODOVI_1" id="${timovi[i][1].id}">${timovi[i][1].I_kolo}</p>
                                </div>
                            </div>
                            <div class="tima_kolo1">
                                <div class="tima_img1">
                                    <img id="SLIKA" src="${timovi[i][0].slika}" >
                                </div>
                                <div class="tima_bodovi">
                                    <p class="BODOVI_1" id="${timovi[i][0].id}">${timovi[i][0].I_kolo}</p>
                                </div>
                            </div>
                        </div>
                        <div class="kolo_1">
                            <div class="tima_kolo1">
                                <div class="tima_img1">
                                    <img id="SLIKA" src="${timovi[i][1].slika}" >
                                </div>
                                <div class="tima_bodovi">
                                    <p class="BODOVI_2" id="${timovi[i][1].id}"></p>
                                </div>
                            </div>
                            <div class="tima_kolo1">
                                <div class="tima_img1">
                                    <img id="SLIKA" src="${timovi[i][2].slika}" >
                                </div>
                                <div class="tima_bodovi">
                                    <p class="BODOVI_2" id="${timovi[i][2].id}"></p>
                                </div>
                            </div>
                        </div>
           
                        <div class="kolo_1">
                            <div class="tima_kolo1">
                                <div class="tima_img1">
                                    <img id="SLIKA" src="${timovi[i][1].slika}" >
                                </div>
                                <div class="tima_bodovi">
                                    <p class="BODOVI_3" id="${timovi[i][1].id}"></p>
                                </div>
                            </div>
                            <div class="tima_kolo1">
                                <div class="tima_img1">
                                    <img id="SLIKA" src="${timovi[i][3].slika}" >
                                </div>
                                <div class="tima_bodovi">
                                    <p class="BODOVI_3" id="${timovi[i][3].id}"></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    `
                    couter++
                    Div1.append(Div3)
                }
                if(timovi[i][2]){
                    Div4.innerHTML=
                    `
                    <div class="container_tim_grupe1">
                        <div class="imetima">
                            <img  id="tim_ime1" src="${timovi[i][couter].slika}">${timovi[i][ couter].ime}
                        </div>

                        <div class="kolo_1">
                            <div class="tima_kolo1">
                                <div class="tima_img1">
                                    <img id="SLIKA" src="${timovi[i][2].slika}" >
                                </div>
                                <div class="tima_bodovi">
                                    <p class="BODOVI_1" id="${timovi[i][2].id}">${timovi[i][2].I_kolo}</p>
                                </div>
                            </div>
                            <div class="tima_kolo1">
                                <div class="tima_img1">
                                    <img id="SLIKA" src="${timovi[i][3].slika}" >
                                </div>
                                <div class="tima_bodovi">
                                    <p class="BODOVI_1" id="${timovi[i][3].id}">${timovi[i][3].I_kolo}</p>
                                </div>
                            </div>
                        </div>
                        <div class="kolo_1">
                            <div class="tima_kolo1">
                                <div class="tima_img1">
                                    <img id="SLIKA" src="${timovi[i][2].slika}" >
                                </div>
                                <div class="tima_bodovi">
                                    <p class="BODOVI_2" id="${timovi[i][2].id}"></p>
                                </div>
                            </div>
                            <div class="tima_kolo1">
                                <div class="tima_img1">
                                    <img id="SLIKA" src="${timovi[i][1].slika}" >
                                </div>
                                <div class="tima_bodovi">
                                    <p class="BODOVI_2" id="${timovi[i][1].id}"></p>
                                </div>
                            </div>
                        </div>
               
                        <div class="kolo_1">
                            <div class="tima_kolo1">
                                <div class="tima_img1">
                                    <img id="SLIKA" src="${timovi[i][2].slika}" >
                                </div>
                                <div class="tima_bodovi">
                                    <p class="BODOVI_3" id="${timovi[i][2].id}"></p>
                                </div>
                            </div>
                            <div class="tima_kolo1">
                                <div class="tima_img1">
                                    <img id="SLIKA" src="${timovi[i][0].slika}" >
                                </div>
                                <div class="tima_bodovi">
                                    <p class="BODOVI_3" id="${timovi[i][0].id}"></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    `
                    couter++
                    Div1.append(Div4)
                }
                if(timovi[i][3]){
                    Div5.innerHTML=
                    `
                    <div class="container_tim_grupe1">
                        <div class="imetima">
                            <img  id="tim_ime1" src="${timovi[i][couter].slika}">${timovi[i][ couter].ime}
                        </div>

                        <div class="kolo_1">
                            <div class="tima_kolo1">
                                <div class="tima_img1">
                                    <img id="SLIKA" src="${timovi[i][3].slika}" >
                                </div>
                                <div class="tima_bodovi">
                                    <p class="BODOVI_1" id="${timovi[i][3].id}">${timovi[i][3].I_kolo}</p>
                                </div>
                            </div>
                            <div class="tima_kolo1">
                                <div class="tima_img1">
                                    <img id="SLIKA" src="${timovi[i][2].slika}" >
                                </div>
                                <div class="tima_bodovi">
                                    <p class="BODOVI_1" id="${timovi[i][2].id}">${timovi[i][2].I_kolo}</p>
                                </div>
                            </div>
                        </div>
                        <div class="kolo_1">
                            <div class="tima_kolo1">
                                <div class="tima_img1">
                                    <img id="SLIKA" src="${timovi[i][3].slika}" >
                                </div>
                                <div class="tima_bodovi">
                                    <p class="BODOVI_2" id="${timovi[i][3].id}"></p>
                                </div>
                            </div>
                            <div class="tima_kolo1">
                                <div class="tima_img1">
                                    <img id="SLIKA" src="${timovi[i][0].slika}" >
                                </div>
                                <div class="tima_bodovi">
                                    <p class="BODOVI_2" id="${timovi[i][0].id}"></p>
                                </div>
                            </div>
                        </div>
               
                        <div class="kolo_1">
                            <div class="tima_kolo1">
                                <div class="tima_img1">
                                    <img id="SLIKA" src="${timovi[3][3].slika}" >
                                </div>
                                <div class="tima_bodovi">
                                    <p class="BODOVI_3" id="${timovi[i][3].id}"></p>
                                </div>
                            </div>
                            <div class="tima_kolo1">
                                <div class="tima_img1">
                                    <img id="SLIKA" src="${timovi[i][1].slika}" >
                                </div>
                                <div class="tima_bodovi">
                                    <p class="BODOVI_3" id="${timovi[i][1].id}"></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    `
                    couter++
                    Div1.append(Div5)
                    Grupa.appendChild(Div1)
                    Container.append(naslov)
                    Container.appendChild( Grupa)
                }
        }
    }
}
function Kolo_II_prikaz(timovi){
    const stari_naslov=document.querySelector(".naslov_prolaz")
    stari_naslov.remove()
    const Div=document.querySelector(".container_grupa_1111_1")
    Div.remove()
    const Div2=document.querySelector(".container_grupa_1")
    Div2.remove()

    const Container=document.querySelector(".container-all-1")
    const naslov=document.createElement("h2")
    naslov.classList.add("naslov_prolaz")
    naslov.innerHTML="Prikaz II kola"
    const Grupa=document.createElement("div")
    Grupa.classList.add("container_grupa_1111_2")

    for (let i=0; i< timovi.length; i++){

        const Div1=document.createElement("div")
        Div1.classList.add("grupa_grupa")
        const Div2=document.createElement("div")
        Div2.classList.add("timovi_grupe1")
        const Div3=document.createElement("div")
        Div3.classList.add("timovi_grupe1")
        const Div4=document.createElement("div")
        Div4.classList.add("timovi_grupe1")
        const Div5=document.createElement("div")
        Div5.classList.add("timovi_grupe1")
        const h2=document.createElement("h2")
        h2.classList.add("ime_grupe1")
        for (let a=0; a< timovi[i].length; a++){
            let couter=0
            let imegrupe=timovi[i][a].grupa
            let  Grupa_slovo=timovi[i][a].grupa.split("",1)
            const prvo_slovo=timovi[i][a].ime.split("",1)
            const Slovoa=timovi[i][a].ime.slice(1)
            const slika=timovi[i][a].slika
            h2.innerText =`${Grupa_slovo}`
                if(timovi[i][0]){
                    Div2.innerHTML=
                    `
                        <div class="container_tim_grupe1" >
                            <div class="imetima">
                                <img  id="tim_ime1" src="${timovi[i][couter].slika}">${timovi[i][ couter].ime}
                            </div>
                            <div class="kolo_1">
                                <div class="tima_kolo1">
                                    <div class="tima_img1">
                                        <img id="SLIKA" src="${timovi[i][0].slika}" >
                                    </div>
                                    <div class="tima_bodovi">
                                        <p class="BODOVI_1" id="${timovi[i][0].id}">${timovi[i][0].I_kolo}</p>
                                    </div>
                                </div>
                                <div class="tima_kolo1">
                                    <div class="tima_img1">
                                        <img id="SLIKA" src="${timovi[i][1].slika}" >
                                    </div>
                                    <div class="tima_bodovi">
                                        <p class="BODOVI_1" id="${timovi[i][1].id}">${timovi[i][1].I_kolo}</p>
                                    </div>
                                </div>
                            </div>
                            <div class="kolo_1">
                                <div class="tima_kolo1">
                                    <div class="tima_img1">
                                        <img id="SLIKA" src="${timovi[i][0].slika}" >
                                    </div>
                                    <div class="tima_bodovi">
                                        <p class="BODOVI_2" id="${timovi[i][0].id}">${timovi[i][0].II_kolo}</p>
                                    </div>
                                </div>
                                <div class="tima_kolo1">
                                    <div class="tima_img1">
                                        <img id="SLIKA" src="${timovi[i][3].slika}" >
                                    </div>
                                    <div class="tima_bodovi">
                                        <p class="BODOVI_2" id="${timovi[i][3].id}">${timovi[i][3].II_kolo}</p>
                                    </div>
                                </div>
                            </div>
                   
                            <div class="kolo_1">
                                <div class="tima_kolo1">
                                    <div class="tima_img1">
                                        <img id="SLIKA" src="${timovi[i][0].slika}" >
                                    </div>
                                    <div class="tima_bodovi">
                                        <p class="BODOVI_3" id="${timovi[i][0].id}"></p>
                                    </div>
                                </div>
                                <div class="tima_kolo1">
                                    <div class="tima_img1">
                                        <img id="SLIKA" src="${timovi[0][2].slika}" >
                                    </div>
                                    <div class="tima_bodovi">
                                        <p class="BODOVI_3" id="${timovi[i][2].id}"></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        `
                        couter++
                        Div1.append(h2,Div2)
                }
                if(timovi[i][1]){
                    Div3.innerHTML=
                    `
                    <div class="container_tim_grupe1" >
                        <div class="imetima">
                        <img  id="tim_ime1" src="${timovi[i][couter].slika}">${timovi[i][ couter].ime}
                        </div>

                        <div class="kolo_1">
                            <div class="tima_kolo1">
                                <div class="tima_img1">
                                    <img id="SLIKA" src="${timovi[i][1].slika}" >
                                </div>
                                <div class="tima_bodovi">
                                    <p class="BODOVI_1" id="${timovi[i][1].id}">${timovi[i][1].I_kolo}</p>
                                </div>
                            </div>
                            <div class="tima_kolo1">
                                <div class="tima_img1">
                                    <img id="SLIKA" src="${timovi[i][0].slika}" >
                                </div>
                                <div class="tima_bodovi">
                                    <p class="BODOVI_1" id="${timovi[i][0].id}">${timovi[i][0].I_kolo}</p>
                                </div>
                            </div>
                        </div>
                        <div class="kolo_1">
                            <div class="tima_kolo1">
                                <div class="tima_img1">
                                    <img id="SLIKA" src="${timovi[i][1].slika}" >
                                </div>
                                <div class="tima_bodovi">
                                    <p class="BODOVI_2" id="${timovi[i][1].id}">${timovi[i][1].II_kolo}</p>
                                </div>
                            </div>
                            <div class="tima_kolo1">
                                <div class="tima_img1">
                                    <img id="SLIKA" src="${timovi[i][2].slika}" >
                                </div>
                                <div class="tima_bodovi">
                                    <p class="BODOVI_2" id="${timovi[i][2].id}">${timovi[i][2].II_kolo}</p>
                                </div>
                            </div>
                        </div>
           
                        <div class="kolo_1">
                            <div class="tima_kolo1">
                                <div class="tima_img1">
                                    <img id="SLIKA" src="${timovi[i][1].slika}" >
                                </div>
                                <div class="tima_bodovi">
                                    <p class="BODOVI_3" id="${timovi[i][1].id}"></p>
                                </div>
                            </div>
                            <div class="tima_kolo1">
                                <div class="tima_img1">
                                    <img id="SLIKA" src="${timovi[i][3].slika}" >
                                </div>
                                <div class="tima_bodovi">
                                    <p class="BODOVI_3" id="${timovi[i][3].id}"></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    `
                    couter++
                    Div1.append(Div3)
                }
                if(timovi[i][2]){
                    Div4.innerHTML=
                    `
                    <div class="container_tim_grupe1" >
                        <div class="imetima">
                            <img  id="tim_ime1" src="${timovi[i][couter].slika}">${timovi[i][ couter].ime}
                        </div>

                        <div class="kolo_1">
                            <div class="tima_kolo1">
                                <div class="tima_img1">
                                    <img id="SLIKA" src="${timovi[i][2].slika}" >
                                </div>
                                <div class="tima_bodovi">
                                    <p class="BODOVI_1" id="${timovi[i][2].id}">${timovi[i][2].I_kolo}</p>
                                </div>
                            </div>
                            <div class="tima_kolo1">
                                <div class="tima_img1">
                                    <img id="SLIKA" src="${timovi[i][3].slika}" >
                                </div>
                                <div class="tima_bodovi">
                                    <p class="BODOVI_1" id="${timovi[i][3].id}">${timovi[i][3].I_kolo}</p>
                                </div>
                            </div>
                        </div>
                        <div class="kolo_1">
                            <div class="tima_kolo1">
                                <div class="tima_img1">
                                    <img id="SLIKA" src="${timovi[i][2].slika}" >
                                </div>
                                <div class="tima_bodovi">
                                    <p class="BODOVI_2" id="${timovi[i][2].id}">${timovi[i][2].II_kolo}</p>
                                </div>
                            </div>
                            <div class="tima_kolo1">
                                <div class="tima_img1">
                                    <img id="SLIKA" src="${timovi[i][1].slika}" >
                                </div>
                                <div class="tima_bodovi">
                                    <p class="BODOVI_2" id="${timovi[i][1].id}">${timovi[i][1].II_kolo}</p>
                                </div>
                            </div>
                        </div>
               
                        <div class="kolo_1">
                            <div class="tima_kolo1">
                                <div class="tima_img1">
                                    <img id="SLIKA" src="${timovi[i][2].slika}" >
                                </div>
                                <div class="tima_bodovi">
                                    <p class="BODOVI_3" id="${timovi[i][2].id}"></p>
                                </div>
                            </div>
                            <div class="tima_kolo1">
                                <div class="tima_img1">
                                    <img id="SLIKA" src="${timovi[i][0].slika}" >
                                </div>
                                <div class="tima_bodovi">
                                    <p class="BODOVI_3" id="${timovi[i][0].id}"></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    `
                    couter++
                    Div1.append(Div4)
                }
                if(timovi[i][3]){
                    Div5.innerHTML=
                    `
                    <div class="container_tim_grupe1">
                        <div class="imetima">
                            <img  id="tim_ime1" src="${timovi[i][couter].slika}">${timovi[i][ couter].ime}
                        </div>

                        <div class="kolo_1">
                            <div class="tima_kolo1">
                                <div class="tima_img1">
                                    <img id="SLIKA" src="${timovi[i][3].slika}" >
                                </div>
                                <div class="tima_bodovi">
                                    <p class="BODOVI_1" id="${timovi[i][3].id}">${timovi[i][3].I_kolo}</p>
                                </div>
                            </div>
                            <div class="tima_kolo1">
                                <div class="tima_img1">
                                    <img id="SLIKA" src="${timovi[i][2].slika}" >
                                </div>
                                <div class="tima_bodovi">
                                    <p class="BODOVI_1" id="${timovi[i][2].id}">${timovi[i][2].I_kolo}</p>
                                </div>
                            </div>
                        </div>
                        <div class="kolo_1">
                            <div class="tima_kolo1">
                                <div class="tima_img1">
                                    <img id="SLIKA" src="${timovi[i][3].slika}" >
                                </div>
                                <div class="tima_bodovi">
                                    <p class="BODOVI_2" id="${timovi[i][3].id}">${timovi[i][3].II_kolo}</p>
                                </div>
                            </div>
                            <div class="tima_kolo1">
                                <div class="tima_img1">
                                    <img id="SLIKA" src="${timovi[i][0].slika}" >
                                </div>
                                <div class="tima_bodovi">
                                    <p class="BODOVI_2" id="${timovi[i][0].id}">${timovi[i][0].II_kolo}</p>
                                </div>
                            </div>
                        </div>
                   
                        <div class="kolo_1">
                            <div class="tima_kolo1">
                                <div class="tima_img1">
                                    <img id="SLIKA" src="${timovi[3][3].slika}" >
                                </div>
                                <div class="tima_bodovi">
                                    <p class="BODOVI_3" id="${timovi[i][3].id}"></p>
                                </div>
                            </div>
                            <div class="tima_kolo1">
                                <div class="tima_img1">
                                    <img id="SLIKA" src="${timovi[i][1].slika}" >
                                </div>
                                <div class="tima_bodovi">
                                    <p class="BODOVI_3" id="${timovi[i][1].id}"></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    `
                    couter++
                    Div1.append(Div5)
                    Grupa.appendChild(Div1)
                    Container.append(naslov)
                    Container.appendChild(Grupa)
                }
        }
    }
}
function Kolo_III_prikaz(timovi){
    const stari_naslov=document.querySelector(".naslov_prolaz")
    stari_naslov.remove()
    const Div=document.querySelector(".container_grupa_1111_2")
    Div.remove()
    const Div2=document.querySelector(".container_grupa_2")
    Div2.remove()
   
    const Container=document.querySelector(".container-all-1")
    const naslov=document.createElement("h2")
    naslov.classList.add("naslov_prolaz")
    naslov.innerHTML="Prikaz III kola"
    const Grupa=document.createElement("div")
    Grupa.classList.add("container_grupa_1111_3")

    for (let i=0; i< timovi.length; i++){

        const Div1=document.createElement("div")
        Div1.classList.add("grupa_grupa")
        const Div2=document.createElement("div")
        Div2.classList.add("timovi_grupe1")
        const Div3=document.createElement("div")
        Div3.classList.add("timovi_grupe1")
        const Div4=document.createElement("div")
        Div4.classList.add("timovi_grupe1")
        const Div5=document.createElement("div")
        Div5.classList.add("timovi_grupe1")
        const h2=document.createElement("h2")
        h2.classList.add("ime_grupe1")
        for (let a=0; a< timovi[i].length; a++){
       
            let couter=0
            let imegrupe=timovi[i][a].grupa
            let  Grupa_slovo=timovi[i][a].grupa.split("",1)
            const prvo_slovo=timovi[i][a].ime.split("",1)
            const Slovoa=timovi[i][a].ime.slice(1)
            const slika=timovi[i][a].slika
            h2.innerText =`${Grupa_slovo}`
       
                if(timovi[i][0]){
                    Div2.innerHTML=
                    `
                        <div class="container_tim_grupe1" >
                            <div class="imetima">
                                <img  id="tim_ime1" src="${timovi[i][couter].slika}">${timovi[i][ couter].ime}
                            </div>
                            <div class="kolo_1">
                                <div class="tima_kolo1">
                                    <div class="tima_img1">
                                        <img id="SLIKA" src="${timovi[i][0].slika}" >
                                    </div>
                                    <div class="tima_bodovi">
                                        <p class="BODOVI_1" id="${timovi[i][0].id}">${timovi[i][0].I_kolo}</p>
                                    </div>
                                </div>
                                <div class="tima_kolo1">
                                    <div class="tima_img1">
                                        <img id="SLIKA" src="${timovi[i][1].slika}" >
                                    </div>
                                    <div class="tima_bodovi">
                                        <p class="BODOVI_1" id="${timovi[i][1].id}">${timovi[i][1].I_kolo}</p>
                                    </div>
                                </div>
                            </div>
                            <div class="kolo_1">
                                <div class="tima_kolo1">
                                    <div class="tima_img1">
                                        <img id="SLIKA" src="${timovi[i][0].slika}" >
                                    </div>
                                    <div class="tima_bodovi">
                                        <p class="BODOVI_2" id="${timovi[i][0].id}">${timovi[i][0].II_kolo}</p>
                                    </div>
                                </div>
                                <div class="tima_kolo1">
                                    <div class="tima_img1">
                                        <img id="SLIKA" src="${timovi[i][3].slika}" >
                                    </div>
                                    <div class="tima_bodovi">
                                        <p class="BODOVI_2" id="${timovi[i][3].id}">${timovi[i][3].II_kolo}</p>
                                    </div>
                                </div>
                            </div>
                       
                            <div class="kolo_1">
                                <div class="tima_kolo1">
                                    <div class="tima_img1">
                                        <img id="SLIKA" src="${timovi[i][0].slika}" >
                                    </div>
                                    <div class="tima_bodovi">
                                        <p class="BODOVI_3" id="${timovi[i][0].id}">${timovi[i][0].III_kolo}</p>
                                    </div>
                                </div>
                                <div class="tima_kolo1">
                                    <div class="tima_img1">
                                        <img id="SLIKA" src="${timovi[0][2].slika}" >
                                    </div>
                                    <div class="tima_bodovi">
                                        <p class="BODOVI_3" id="${timovi[i][2].id}">${timovi[i][2].III_kolo}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        `
                        couter++
                        Div1.append(h2,Div2)
                }
                if(timovi[i][1]){
                    Div3.innerHTML=
                    `
                    <div class="container_tim_grupe1">
                        <div class="imetima">
                            <img  id="tim_ime1" src="${timovi[i][couter].slika}">${timovi[i][ couter].ime}
                        </div>

                        <div class="kolo_1">
                            <div class="tima_kolo1">
                                <div class="tima_img1">
                                    <img id="SLIKA" src="${timovi[i][1].slika}" >
                                </div>
                                <div class="tima_bodovi">
                                    <p class="BODOVI_1" id="${timovi[i][1].id}">${timovi[i][1].I_kolo}</p>
                                </div>
                            </div>
                            <div class="tima_kolo1">
                                <div class="tima_img1">
                                    <img id="SLIKA" src="${timovi[i][0].slika}" >
                                </div>
                                <div class="tima_bodovi">
                                    <p class="BODOVI_1" id="${timovi[i][0].id}">${timovi[i][0].I_kolo}</p>
                                </div>
                            </div>
                        </div>
                        <div class="kolo_1">
                            <div class="tima_kolo1">
                                <div class="tima_img1">
                                    <img id="SLIKA" src="${timovi[i][1].slika}" >
                                </div>
                                <div class="tima_bodovi">
                                    <p class="BODOVI_2" id="${timovi[i][1].id}">${timovi[i][1].II_kolo}</p>
                                </div>
                            </div>
                            <div class="tima_kolo1">
                                <div class="tima_img1">
                                    <img id="SLIKA" src="${timovi[i][2].slika}" >
                                </div>
                                <div class="tima_bodovi">
                                    <p class="BODOVI_2" id="${timovi[i][2].id}">${timovi[i][2].II_kolo}</p>
                                </div>
                            </div>
                        </div>
               
                        <div class="kolo_1">
                            <div class="tima_kolo1">
                                <div class="tima_img1">
                                    <img id="SLIKA" src="${timovi[i][1].slika}" >
                                </div>
                                <div class="tima_bodovi">
                                    <p class="BODOVI_3" id="${timovi[i][1].id}">${timovi[i][1].III_kolo}</p>
                                </div>
                            </div>
                            <div class="tima_kolo1">
                                <div class="tima_img1">
                                    <img id="SLIKA" src="${timovi[i][3].slika}" >
                                </div>
                                <div class="tima_bodovi">
                                    <p class="BODOVI_3" id="${timovi[i][3].id}">${timovi[i][3].III_kolo}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    `
                    couter++
                    Div1.append(Div3)
                }
                if(timovi[i][2]){
                    Div4.innerHTML=
                    `
                    <div class="container_tim_grupe1">
                        <div class="imetima">
                            <img  id="tim_ime1" src="${timovi[i][couter].slika}">${timovi[i][ couter].ime}
                        </div>

                        <div class="kolo_1">
                            <div class="tima_kolo1">
                                <div class="tima_img1">
                                    <img id="SLIKA" src="${timovi[i][2].slika}" >
                                </div>
                                <div class="tima_bodovi">
                                    <p class="BODOVI_1" id="${timovi[i][2].id}">${timovi[i][2].I_kolo}</p>
                                </div>
                            </div>
                            <div class="tima_kolo1">
                                <div class="tima_img1">
                                    <img id="SLIKA" src="${timovi[i][3].slika}" >
                                </div>
                                <div class="tima_bodovi">
                                    <p class="BODOVI_1" id="${timovi[i][3].id}">${timovi[i][3].I_kolo}</p>
                                </div>
                            </div>
                        </div>
                        <div class="kolo_1">
                            <div class="tima_kolo1">
                                <div class="tima_img1">
                                    <img id="SLIKA" src="${timovi[i][2].slika}" >
                                </div>
                                <div class="tima_bodovi">
                                    <p class="BODOVI_2" id="${timovi[i][2].id}">${timovi[i][2].II_kolo}</p>
                                </div>
                            </div>
                            <div class="tima_kolo1">
                                <div class="tima_img1">
                                    <img id="SLIKA" src="${timovi[i][1].slika}" >
                                </div>
                                <div class="tima_bodovi">
                                    <p class="BODOVI_2" id="${timovi[i][1].id}">${timovi[i][1].II_kolo}</p>
                                </div>
                            </div>
                        </div>
               
                        <div class="kolo_1">
                            <div class="tima_kolo1">
                                <div class="tima_img1">
                                    <img id="SLIKA" src="${timovi[i][2].slika}" >
                                </div>
                                <div class="tima_bodovi">
                                    <p class="BODOVI_3" id="${timovi[i][2].id}">${timovi[i][2].III_kolo}</p>
                                </div>
                            </div>
                            <div class="tima_kolo1">
                                <div class="tima_img1">
                                    <img id="SLIKA" src="${timovi[i][0].slika}" >
                                </div>
                                <div class="tima_bodovi">
                                    <p class="BODOVI_3" id="${timovi[i][0].id}">${timovi[i][0].III_kolo}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    `
                    couter++
                    Div1.append(Div4)
                }
                if(timovi[i][3]){
                    Div5.innerHTML=
                    `
                    <div class="container_tim_grupe1">
                        <div class="imetima">
                            <img  id="tim_ime1" src="${timovi[i][couter].slika}">${timovi[i][ couter].ime}
                        </div>

                        <div class="kolo_1">
                            <div class="tima_kolo1">
                                <div class="tima_img1">
                                    <img id="SLIKA" src="${timovi[i][3].slika}" >
                                </div>
                                <div class="tima_bodovi">
                                    <p class="BODOVI_1" id="${timovi[i][3].id}">${timovi[i][3].I_kolo}</p>
                                </div>
                            </div>
                            <div class="tima_kolo1">
                                <div class="tima_img1">
                                    <img id="SLIKA" src="${timovi[i][2].slika}" >
                                </div>
                                <div class="tima_bodovi">
                                    <p class="BODOVI_1" id="${timovi[i][2].id}">${timovi[i][2].I_kolo}</p>
                                </div>
                            </div>
                        </div>
                        <div class="kolo_1">
                            <div class="tima_kolo1">
                                <div class="tima_img1">
                                    <img id="SLIKA" src="${timovi[i][3].slika}" >
                                </div>
                                <div class="tima_bodovi">
                                    <p class="BODOVI_2" id="${timovi[i][3].id}">${timovi[i][3].II_kolo}</p>
                                </div>
                            </div>
                            <div class="tima_kolo1">
                                <div class="tima_img1">
                                    <img id="SLIKA" src="${timovi[i][0].slika}" >
                                </div>
                                <div class="tima_bodovi">
                                    <p class="BODOVI_2" id="${timovi[i][0].id}">${timovi[i][0].II_kolo}</p>
                                </div>
                            </div>
                        </div>
                   
                        <div class="kolo_1">
                            <div class="tima_kolo1">
                                <div class="tima_img1">
                                    <img id="SLIKA" src="${timovi[3][3].slika}" >
                                </div>
                                <div class="tima_bodovi">
                                    <p class="BODOVI_3" id="${timovi[i][3].id}">${timovi[i][3].III_kolo}</p>
                                </div>
                            </div>
                            <div class="tima_kolo1">
                                <div class="tima_img1">
                                    <img id="SLIKA" src="${timovi[i][1].slika}" >
                                </div>
                                <div class="tima_bodovi">
                                    <p class="BODOVI_3" id="${timovi[i][1].id}">${timovi[i][1].III_kolo}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    `
                    couter++
                    Div1.append(Div5)
                    Grupa.appendChild(Div1)
                    Container.append(naslov)
                    Container.appendChild( Grupa)

                   
                }
        }
    }
}
function prv_sesnes_finalista(timovi){


    const Container=document.querySelector(".container_svetcko_prvenstvo_3")
    const naslov=document.createElement("h2")
    naslov.classList.add("naslov_finalista")
    naslov.innerHTML="Prikaz runde 16"
    const Grupa=document.createElement("div")
    Grupa.classList.add("containe_finale_16")
    const img=document.createElement("p")
    img.classList.add("img_trofej")


    for (let i=0; i< timovi.length; i++){


        const Div1=document.createElement("div")
        Div1.classList.add("grupa_eliminacija")
        const Div2=document.createElement("div")
        Div2.classList.add("timovi_grupe_eliminacija")
        const p1=document.createElement("p")
        const p2=document.createElement("p")
        p1.classList.add("v-s16")
        p2.classList.add("v-s166")
        for (let a=0; a< timovi[i].length; a++){
            const prvo_slovo=timovi[i][a].ime.split("",1)
            const Slovoa=timovi[i][a].ime.slice(1)
            const slika=timovi[i][a].slika
                Div2.innerHTML+=
                    `
                        <div class="tim_eliminacija" >
                            <img id="img_eliminacija" src="${slika}" >
                            <p id="slovo_eliminacija"><span>${prvo_slovo}</span>${Slovoa}</p>
                            <p  id="tim_img_ball"></p>
                        </div>
                    `
                    Div1.append(p1,p2,Div2)
                    Grupa.appendChild(Div1)
                    Container.append(naslov)
                    Container.append(img)
                    Container.appendChild(Grupa)

        }
    }
}
function  prikaz_rez_16_fin_bodovi(timovi){


    const stari_naslov=document.querySelector(".naslov_finalista")
    stari_naslov.remove()
    const Div=document.querySelector(".containe_finale_16")
    Div.remove()
    const Container=document.querySelector(".container_svetcko_prvenstvo_3")
    const naslov=document.createElement("h2")
    naslov.classList.add("naslov_finalista")
    naslov.innerHTML="Prikaz runde 16 bodovi"
    const Grupa=document.createElement("div")
    Grupa.classList.add("container_16_finale_bodovi")

    for (let i=0; i< timovi.length; i++){
       
        const Div1=document.createElement("div")
        Div1.classList.add("grupa_eliminacija")
        const Div2=document.createElement("div")
        Div2.classList.add("timovi_grupe_eliminacija")
        const p1=document.createElement("p")
        const p2=document.createElement("p")
        p1.classList.add("v-s16_boodvi")
        p2.classList.add("v-s166_boodvi")
        for (let a=0; a< timovi[i].length; a++){
            const prvo_slovo=timovi[i][a].ime.split("",1)
            const Slovoa=timovi[i][a].ime.slice(1)
            const slika=timovi[i][a].slika
            if(timovi[i][a].bodovi_osmine===0 || timovi[i][a].bodovi_osmine>1){
                Div2.innerHTML+=
                    `
                    <div class="tim_eliminacija">
                        <img id="img_eliminacija" src="${slika}" >
                        <p id="slovo_eliminacija"><span>${prvo_slovo}</span>${Slovoa}</p>
                        <p  class="tim_bodovi_eliminacija" >${timovi[i][a].golovi_osmina}</p>
                    </div>
                    `
                Div1.append(p1,p2,Div2)
                Grupa.appendChild(Div1)
                Container.append(naslov)
                Container.appendChild( Grupa)

            }if(timovi[i][a].bodovi_osmine===1){
                Div2.innerHTML+=
                    `
                    <div class="tim_eliminacija" id="red">
                        <img id="img_eliminacija" src="${slika}" >
                        <p id="slovo_eliminacija"><span>${prvo_slovo}</span>${Slovoa}</p>
                        <p  class="bodovi_eliminacija_penali">${timovi[i][a].golovi_osmina}</p>
                        </div>
                    `
                        Div1.append(p1,p2,Div2)
                        Grupa.appendChild(Div1)
                        Container.append(naslov)
                        Container.appendChild( Grupa)
            }}


                       
        }
   
}
function prv_cetvrtina_finalista(timovi){
    const stari_naslov=document.querySelector(".naslov_finalista")
    stari_naslov.remove()
   
    const Div=document.querySelector(".container_16_finale_bodovi")
    Div.remove()
    const Container=document.querySelector(".container_svetcko_prvenstvo_3")
    const naslov=document.createElement("h2")
    naslov.classList.add("naslov_finalista")
    naslov.innerHTML="Prikaz cetvrtine finala "
    const Grupa=document.createElement("div")
    Grupa.classList.add("container_4_finala")

    for (let i=0; i< timovi.length; i++){
       
        const Div1=document.createElement("div")
        Div1.classList.add("grupa_eliminacija")
        const Div2=document.createElement("div")
        Div2.classList.add("timovi_grupe_eliminacija")
        const p1=document.createElement("p")
        p1.classList.add("v-s1")
        for (let a=0; a< timovi[i].length; a++){
            const prvo_slovo=timovi[i][a].ime.split("",1)
            const Slovoa=timovi[i][a].ime.slice(1)
            const slika=timovi[i][a].slika      
                Div2.innerHTML+=
                    `
                        <div class="tim_eliminacija">
                            <img id="img_eliminacija" src="${slika}" >
                            <p id="slovo_eliminacija"><span>${prvo_slovo}</span>${Slovoa}</p>
                            <p   id="tim_img_ball"></p>
                        </div>
                    `
                        Div1.append(p1,Div2)
                        Grupa.appendChild(Div1)
                        Container.append(naslov)
                        Container.appendChild( Grupa)
        }
    }
}
function  prikaz_rez_4_fin_bodovi(timovi){
    const stari_naslov=document.querySelector(".naslov_finalista")
    stari_naslov.remove()
   
    const Div=document.querySelector(".container_4_finala")
    Div.remove()
    const Container=document.querySelector(".container_svetcko_prvenstvo_3")
    const naslov=document.createElement("h2")
    naslov.classList.add("naslov_finalista")
    naslov.innerHTML="Prikaz cetvrtine finala bodovi"
    const Grupa=document.createElement("div")
    Grupa.classList.add("container_4_finala_bodovi")

    for (let i=0; i< timovi.length; i++){
        const Div1=document.createElement("div")
        Div1.classList.add("grupa_eliminacija")
        const Div2=document.createElement("div")
        Div2.classList.add("timovi_grupe_eliminacija")
        const p1=document.createElement("p")
        p1.classList.add("v-s1")
        for (let a=0; a< timovi[i].length; a++){
            const prvo_slovo=timovi[i][a].ime.split("",1)
            const Slovoa=timovi[i][a].ime.slice(1)
            const slika=timovi[i][a].slika
            if(timovi[i][a].bodovi_4_finala===0 || timovi[i][a].bodovi_4_finala>1){
                Div2.innerHTML+=
                    `
                    <div class="tim_eliminacija">
                        <img id="img_eliminacija" src="${slika}" >
                        <p id="slovo_eliminacija"><span>${prvo_slovo}</span>${Slovoa}</p>
                        <p  class="tim_bodovi_eliminacija"id=""tim_img_ball"">${timovi[i][a].golovi_cetvrt_finala}</p>
                    </div>
                    `
                Div1.append(p1,Div2)
                Grupa.appendChild(Div1)
                Container.append(naslov)
                Container.appendChild( Grupa)

            }if(timovi[i][a].bodovi_4_finala===1){
                Div2.innerHTML+=
                    `
                    <div class="tim_eliminacija" id="red">
                        <img id="img_eliminacija" src="${slika}" >
                        <p id="slovo_eliminacija"><span>${prvo_slovo}</span>${Slovoa}</p>
                        <p  class="bodovi_eliminacija_penali">${timovi[i][a].golovi_cetvrt_finala}</p>
                   
                    `
                        Div1.append(p1,Div2)
                        Grupa.appendChild(Div1)
                        Container.append(naslov)
                        Container.appendChild( Grupa)
            }}

    }
}
function prv_polu_finalista(timovi){
    const stari_naslov=document.querySelector(".naslov_finalista")
    stari_naslov.remove()
   
    const Div=document.querySelector(".container_4_finala_bodovi")
    Div.remove()
    const Container=document.querySelector(".container_svetcko_prvenstvo_3")
    const naslov=document.createElement("h2")
    naslov.classList.add("naslov_finalista")
    naslov.innerHTML="Prikaz polufinala "
    const Grupa=document.createElement("div")
    Grupa.classList.add("container_polufinale")

    for (let i=0; i< timovi.length; i++){
        const Div1=document.createElement("div")
        Div1.classList.add("grupa_eliminacija")
        const Div2=document.createElement("div")
        Div2.classList.add("timovi_grupe_eliminacija")
        const p1=document.createElement("p")
        p1.classList.add("v-s22")
        for (let a=0; a< timovi[i].length; a++){
            const prvo_slovo=timovi[i][a].ime.split("",1)
            const Slovoa=timovi[i][a].ime.slice(1)
            const slika=timovi[i][a].slika      
                Div2.innerHTML+=
                    `
                        <div class="tim_eliminacija">
                            <img id="img_eliminacija" src="${slika}" >
                            <p id="slovo_eliminacija"><span>${prvo_slovo}</span>${Slovoa}</p>
                            <p  id="tim_img_ball"></p>
                        </div>
                    `
                        Div1.append(p1,Div2)
                        Grupa.appendChild(Div1)
                        Container.append(naslov)
                        Container.appendChild( Grupa)
        }
    }
}
function  prikaz_rez_polu_fin_bodovi(timovi){
    const stari_naslov=document.querySelector(".naslov_finalista")
    stari_naslov.remove()
   
    const Div=document.querySelector(".container_polufinale")
    Div.remove()
    const Container=document.querySelector(".container_svetcko_prvenstvo_3")
    const naslov=document.createElement("h2")
    naslov.classList.add("naslov_finalista")
    naslov.innerHTML="Prikaz prikaz polufinala bodovi"
    const Grupa=document.createElement("div")
    Grupa.classList.add("container_polufinale_bodovi")

    for (let i=0; i< timovi.length; i++){
        const Div1=document.createElement("div")
        Div1.classList.add("grupa_eliminacija")
        const Div2=document.createElement("div")
        Div2.classList.add("timovi_grupe_eliminacija")
        const p1=document.createElement("p")
        p1.classList.add("v-s22")
        for (let a=0; a< timovi[i].length; a++){
            const prvo_slovo=timovi[i][a].ime.split("",1)
            const Slovoa=timovi[i][a].ime.slice(1)
            const slika=timovi[i][a].slika
            if(timovi[i][a].bodovi_polu_finala===0 || timovi[i][a].bodovi_polu_finala===3){
                Div2.innerHTML+=
                `
                    <div class="tim_eliminacija" >
                        <img id="img_eliminacija" src="${slika}" >
                        <p id="slovo_eliminacija"><span>${prvo_slovo}</span>${Slovoa}</p>
                        <p  class="tim_bodovi_eliminacija" >${timovi[i][a].golovi_polu_finala}</p>
                    </div>
                `
                Div1.append(p1,Div2)
                Grupa.appendChild(Div1)
                Container.append(naslov)
                Container.appendChild( Grupa)

            }if(timovi[i][a].bodovi_polu_finala===1){
                Div2.innerHTML+=
                    `
                    <div class="tim_eliminacija" id="red">
                        <img id="img_eliminacija" src="${slika}" >
                        <p id="slovo_eliminacija"><span>${prvo_slovo}</span>${Slovoa}</p>
                        <p  class="bodovi_eliminacija_penali" >${timovi[i][a].golovi_polu_finala}</p>
                    </div>
                    `
                        Div1.append(p1,Div2)
                        Grupa.appendChild(Div1)
                        Container.append(naslov)
                        Container.appendChild( Grupa)
            }}
    }
}
function prv_finalista(timovi){
    const stari_naslov=document.querySelector(".naslov_finalista")
    stari_naslov.remove()
   
    const Div=document.querySelector(".container_polufinale_bodovi")
    Div.remove()
    const Container=document.querySelector(".container_svetcko_prvenstvo_3")
    const naslov=document.createElement("h2")
    naslov.classList.add("naslov_finalista")
    naslov.innerHTML="Finalisti"
    const Grupa=document.createElement("div")
    Grupa.classList.add("container_finale")

    for (let i=0; i< timovi.length; i++){
        const Div1=document.createElement("div")
        Div1.classList.add("grupa_eliminacija")
        const Div2=document.createElement("div")
        Div2.classList.add("timovi_grupe_eliminacija")
        const p1=document.createElement("p")
        p1.classList.add("v-s11")
        for (let a=0; a< timovi[i].length; a++){
            const prvo_slovo=timovi[i][a].ime.split("",1)
            const Slovoa=timovi[i][a].ime.slice(1)
            const slika=timovi[i][a].slika      
                Div2.innerHTML+=
                `
                <div class="tim_eliminacija">
                    <img id="img_eliminacija" src="${slika}" >
                    <p id="slovo_eliminacija"><span>${prvo_slovo}</span>${Slovoa}</p>
                    <p  id="tim_img_ball"></p>
                </div>
                    `
                        Div1.append(p1,Div2)
                        Grupa.appendChild(Div1)
                        Container.append(naslov)
                        Container.appendChild( Grupa)
        }
    }
}

function prikaz_rez_finale_bodovi(timovi) {


    const stari_naslov=document.querySelector(".naslov_finalista") 
    stari_naslov.remove() 
    const Div=document.querySelector(".container_finale") 
    Div.remove() 
    const Container=document.querySelector(".container_svetcko_prvenstvo_3")
    const naslov=document.createElement("h2") 
    naslov.classList.add("naslov_finalista") 
    naslov.innerHTML="Finale bodovi"

    const Grupa=document.createElement("div") 
    Grupa.classList.add("container_finale_bodovi") 
    for (let i=0; i< timovi.length; i++) {
        const Div1=document.createElement("div") 
        Div1.classList.add("grupa_eliminacija") 
        const Div11=document.createElement("div") 
        Div11.classList.add("grupa_pobednik") 
        const Div2=document.createElement("div") 
        Div2.classList.add("timovi_grupe_eliminacija") 
        const p1=document.createElement("p") 
        const Div3=document.createElement("div") 
        Div3.classList.add("container_pobednik") 
        p1.classList.add("v-s11") 
        for (let a=0; a< timovi[i].length; a++) {
            const prvo_slovo=timovi[i][a].ime.split("", 1) 
            const Slovoa=timovi[i][a].ime.slice(1) 
            const slika=timovi[i][a].slika 
            if(timovi[i][a].bodovi_finala===0 || timovi[i][a].bodovi_finala>1) {
                Div2.innerHTML+=` <div class="tim_eliminacija"><img id="img_eliminacija" src="${slika}"><p id="slovo_eliminacija"><span>${prvo_slovo}</span>${Slovoa}</p><p class="tim_bodovi_eliminacija">${timovi[i][a].golovi_finala}</p></div>` 
                Div1.append(p1, Div2) 
                Grupa.appendChild(Div1) 
                Container.append(naslov) 
                Container.appendChild(Grupa)
            }

            if(timovi[i][a].bodovi_finala===1) {
                Div2.innerHTML+=` <div class="tim_eliminacija" id="red"><img id="img_eliminacija" src="${slika}"><p id="slovo_eliminacija"><span>${prvo_slovo}</span>${Slovoa}</p><p class="bodovi_eliminacija_penali">${timovi[i][a].golovi_finala}</p></div>` 
                Div1.append(p1, Div2) 
                Grupa.appendChild(Div1) 
                Container.append(naslov) 
                Container.appendChild(Grupa)
            }

            if(timovi[i][a].kraj==="finalista") {
                Div3.innerHTML+=` <div class="tim_eliminacija-finale"><img id="img_eliminacija-finale" src="${slika}"><p id="slovo_eliminacija-finale"><span>${prvo_slovo}</span>${Slovoa}</p><p class="tim_bodovi_eliminacija_CUP" id="img_CUP"></p></div>` 
                Div11.append(Div3) 
                Container.appendChild(Div11)
            }
        }
    }
}
function  prvak(timovi){
    for (let i=0; i< timovi.length; i++){
        for (let a=0; a< timovi[i].length; a++){
            const prvo_slovo=timovi[i][a].ime.split("",1)
            const Slovoa=timovi[i][a].ime.slice(1)
            const slika=timovi[i][a].slika
            if(timovi[i][a].kraj==="finalista"){
                Div2.innerHTML+=
                    `
                    <div class="tim_eliminacija-finale" >
                        <img id="img_eliminacija-finale" src="${slika}" >
                        <p id="slovo_eliminacija-finale"><span>${prvo_slovo}</span>${Slovoa}</p>
                        <p  class="tim_bodovi_eliminacija_CUP" id="img_CUP"></p>
                    </div>
                    `
                Div1.append(Div2)
                Container.appendChild(Div1)
                }}}
}













const start = () => {
            setTimeout(function() {
                confetti.start()
            }, 1000); // 1000 is time that after 1 second start the confetti ( 1000 = 1 sec)
        };

        //  Stop

        const stop = () => {
            setTimeout(function() {
                confetti.stop()
            }, 5000); // 5000 is time that after 5 second stop the confetti ( 5000 = 5 sec)
        };

        start();
        stop();
var confetti = {
maxCount: 150, //set max confetti count
speed: 2, //set the particle animation speed
frameInterval: 15, //the confetti animation frame interval in milliseconds
alpha: 1.0, //the alpha opacity of the confetti (between 0 and 1, where 1 is opaque and 0 is invisible)
gradient: false, //whether to use gradients for the confetti particles
start: null, //call to start confetti animation (with optional timeout in milliseconds, and optional min and max random confetti count)
stop: null, //call to stop adding confetti
toggle: null, //call to start or stop the confetti animation depending on whether it's already running
pause: null, //call to freeze confetti animation
resume: null, //call to unfreeze confetti animation
togglePause: null, //call to toggle whether the confetti animation is paused
remove: null, //call to stop the confetti animation and remove all confetti immediately
isPaused: null, //call and returns true or false depending on whether the confetti animation is paused
isRunning: null //call and returns true or false depending on whether the animation is running
};

(function() {
confetti.start = startConfetti;
confetti.stop = stopConfetti;
confetti.toggle = toggleConfetti;
confetti.pause = pauseConfetti;
confetti.resume = resumeConfetti;
confetti.togglePause = toggleConfettiPause;
confetti.isPaused = isConfettiPaused;
confetti.remove = removeConfetti;
confetti.isRunning = isConfettiRunning;
var supportsAnimationFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame;
var colors = ["rgba(30,144,255,", "rgba(107,142,35,", "rgba(255,215,0,", "rgba(255,192,203,", "rgba(106,90,205,", "rgba(173,216,230,", "rgba(238,130,238,", "rgba(152,251,152,", "rgba(70,130,180,", "rgba(244,164,96,", "rgba(210,105,30,", "rgba(220,20,60,"];
var streamingConfetti = false;
var animationTimer = null;
var pause = false;
var lastFrameTime = Date.now();
var particles = [];
var waveAngle = 0;
var context = null;

function resetParticle(particle, width, height) {
particle.color = colors[(Math.random() * colors.length) | 0] + (confetti.alpha + ")");
particle.color2 = colors[(Math.random() * colors.length) | 0] + (confetti.alpha + ")");
particle.x = Math.random() * width;
particle.y = Math.random() * height - height;
particle.diameter = Math.random() * 10 + 5;
particle.tilt = Math.random() * 10 - 10;
particle.tiltAngleIncrement = Math.random() * 0.07 + 0.05;
particle.tiltAngle = Math.random() * Math.PI;
return particle;
}

function toggleConfettiPause() {
if (pause)
resumeConfetti();
else
pauseConfetti();
}

function isConfettiPaused() {
return pause;
}

function pauseConfetti() {
pause = true;
}

function resumeConfetti() {
pause = false;
runAnimation();
}

function runAnimation() {
if (pause)
return;
else if (particles.length === 0) {
context.clearRect(0, 0, window.innerWidth, window.innerHeight);
animationTimer = null;
} else {
var now = Date.now();
var delta = now - lastFrameTime;
if (!supportsAnimationFrame || delta > confetti.frameInterval) {
context.clearRect(0, 0, window.innerWidth, window.innerHeight);
updateParticles();
drawParticles(context);
lastFrameTime = now - (delta % confetti.frameInterval);
}
animationTimer = requestAnimationFrame(runAnimation);
}
}

function startConfetti(timeout, min, max) {
var width = window.innerWidth;
var height = window.innerHeight;
window.requestAnimationFrame = (function() {
return window.requestAnimationFrame ||
window.webkitRequestAnimationFrame ||
window.mozRequestAnimationFrame ||
window.oRequestAnimationFrame ||
window.msRequestAnimationFrame ||
function (callback) {
return window.setTimeout(callback, confetti.frameInterval);
};
})();
var canvas = document.getElementById("confetti-canvas");
if (canvas === null) {
canvas = document.createElement("canvas");
canvas.setAttribute("id", "confetti-canvas");
canvas.setAttribute("style", "display:block;z-index:999999;pointer-events:none;position:fixed;top:0");
document.body.prepend(canvas);
canvas.width = width;
canvas.height = height;
window.addEventListener("resize", function() {
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
}, true);
context = canvas.getContext("2d");
} else if (context === null)
context = canvas.getContext("2d");
var count = confetti.maxCount;
if (min) {
if (max) {
if (min == max)
count = particles.length + max;
else {
if (min > max) {
var temp = min;
min = max;
max = temp;
}
count = particles.length + ((Math.random() * (max - min) + min) | 0);
}
} else
count = particles.length + min;
} else if (max)
count = particles.length + max;
while (particles.length < count)
particles.push(resetParticle({}, width, height));
streamingConfetti = true;
pause = false;
runAnimation();
if (timeout) {
window.setTimeout(stopConfetti, timeout);
}
}

function stopConfetti() {
streamingConfetti = false;
}

function removeConfetti() {
stop();
pause = false;
particles = [];
}

function toggleConfetti() {
if (streamingConfetti)
stopConfetti();
else
startConfetti();
}

function isConfettiRunning() {
return streamingConfetti;
}

function drawParticles(context) {
var particle;
var x, y, x2, y2;
for (var i = 0; i < particles.length; i++) {
particle = particles[i];
context.beginPath();
context.lineWidth = particle.diameter;
x2 = particle.x + particle.tilt;
x = x2 + particle.diameter / 2;
y2 = particle.y + particle.tilt + particle.diameter / 2;
if (confetti.gradient) {
var gradient = context.createLinearGradient(x, particle.y, x2, y2);
gradient.addColorStop("0", particle.color);
gradient.addColorStop("1.0", particle.color2);
context.strokeStyle = gradient;
} else
context.strokeStyle = particle.color;
context.moveTo(x, particle.y);
context.lineTo(x2, y2);
context.stroke();
}
}

function updateParticles() {
var width = window.innerWidth;
var height = window.innerHeight;
var particle;
waveAngle += 0.01;
for (var i = 0; i < particles.length; i++) {
particle = particles[i];
if (!streamingConfetti && particle.y < -15)
particle.y = height + 100;
else {
particle.tiltAngle += particle.tiltAngleIncrement;
particle.x += Math.sin(waveAngle) - 0.5;
particle.y += (Math.cos(waveAngle) + particle.diameter + confetti.speed) * 0.5;
particle.tilt = Math.sin(particle.tiltAngle) * 15;
}
if (particle.x > width + 20 || particle.x < -20 || particle.y > height) {
if (streamingConfetti && particles.length <= confetti.maxCount)
resetParticle(particle, width, height);
else {
particles.splice(i, 1);
i--;
}
}
}
}
})();







