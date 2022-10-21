

const seleButton= document.querySelectorAll('.ePP1');
const primeiroParagrafo= document.querySelector('divPrincipal');
const div= document.querySelector('.divPrincipal');

function eventoHis (eventoEscolhido){
    this.eventoEscolhido=eventoEscolhido;
}

seleButton.forEach(b=>{

b.addEventListener('click', function(event){
        const evento= new eventoHis(b.innerText);
    //-Evento1---------------------------------------------
    if(evento.eventoEscolhido=='Você se esconde no celeiro'){
        esconde(b,evento);     
    }else if(evento.eventoEscolhido=='Você segue pela estrada'){
        estrada(b,evento);
    }else if(evento.eventoEscolhido=='Você fica onde esta'){
        foiPego(b,evento);
    }
    //-----------------------------------------------------
    //-Evento2---------------------------------------------
    if(evento.eventoEscolhido=='Volta para a arvore morta'){
        voltaEvento1(b,evento);
    }else if(evento.eventoEscolhido=='Ficar parado'){
        foiPego(b,evento);
    }else if(evento.eventoEscolhido=='Você corre para a estrada'){
        estrada(b,evento);
    } else if(evento.eventoEscolhido=='Continuar no escuro'){
        escuro(b,evento);
    }else if(evento.eventoEscolhido=='Ligar a lanterna'){
        acenderLanterna(b,evento)
    }

    //----Evento3------------------------------------------

    if(evento.eventoEscolhido=='Se entregar para a morte certa'){
        foiPego(b,evento);
    }
    //-----------------------------------------------------
    event.preventDefault;
})

})

function esconde(b,evento){
    const paragrafoCel=document.createElement('p');
    paragrafoCel.innerText='Você se escondeu no celeiro. No entanto, celeiro esta escuro, você tropessou em um balde e atraiu todas as atenções de seres próximos, o que irá fazer?';
    div.insertBefore(paragrafoCel,seleButton[0]);
    seleButton[0].innerText="Ficar parado";
    seleButton[1].innerText="Você corre para a estrada";
    seleButton[2].innerText="Volta para a arvore morta";
   // b[2].innerHTML="Permanecer a onde esta";

}
function estrada(b,evento){
    const paragrafoCel=document.createElement('p');
    paragrafoCel.innerText='Você segue pela estrada. A estrada esta escura. Você tem uma lanterna com a pilha fraca, o que irá fazer?';
    div.insertBefore(paragrafoCel,seleButton[0]);
    seleButton[0].innerText="Ligar a lanterna";
    seleButton[1].innerText="Continuar no escuro";
    seleButton[2].innerText="Ficar parado";
   // b[2].innerHTML="Permanecer a onde esta";

}

function foiPego(b,evento){
    const paragrafoCel=document.createElement('p');
    paragrafoCel.innerText='Você foi pego';
    div.insertBefore(paragrafoCel,seleButton[0]);
    seleButton[0].innerText="------>";
    seleButton[1].setAttribute('onclick',"window.print()");
    seleButton[1].innerText='Imprimir';
    seleButton[2].innerText="<------";
   // b[2].innerHTML="Permanecer a onde esta";

}

function voltaEvento1(b,evento){
    const paragrafoCel=document.createElement('p');
    paragrafoCel.innerText='Você voltou para tras da arvore morta. O que irá fazer?';
    div.insertBefore(paragrafoCel,seleButton[0]);
    seleButton[0].innerText="Você se esconde no celeiro";
    seleButton[1].innerText="Você segue pela estrada";
    seleButton[2].innerText="Você fica onde esta";
}

function escuro(b,evento){
    const paragrafoCel=document.createElement('p');
    paragrafoCel.innerText='Você não viu por onde estava indo, caiu em uma vala e foi ferido mortalmente';
    div.insertBefore(paragrafoCel,seleButton[0]);
    seleButton[0].innerText="------>";
    seleButton[1].setAttribute('onclick',"window.print()");
    seleButton[1].innerText='Imprimir';
    seleButton[2].innerText="<------";

}

function acenderLanterna(b,evento){
    const paragrafoCel=document.createElement('p');
    paragrafoCel.innerText='A luz atraiu os seres em sua direção, eles começaram a correr em direção a luz. Você tem que decidir rapido:';
    div.insertBefore(paragrafoCel,seleButton[0]);
    seleButton[0].innerText="Jogar a lanterna no mato";
    seleButton[1].innerText="Correr com a lanterna ligada";
    seleButton[2].innerText="Se entregar para a morte certa";

}




//-----------------


/*

//-----------------Questão 01--------------------------------------------

const seleNum= document.querySelectorAll('a');
const tabuada= document.querySelector('.resposta');

seleNum.forEach(a => {

    a.addEventListener('click', function(){
        let valorA= parseInt(a.innerText);
        for(var i=0;i < 10;i++){
            if(i>=1){
                const tba=document.createElement('p');
                var resultado= valorA * i;
                tba.innerText=`${valorA} x ${i}= ${resultado}` ;
                tabuada.appendChild(tba);
            }
        }      
    });
    
});
//---------------------------------------------------------------------

//-----------------Questão 02------------------------------------------

//Letra A
const diaCalendario= document.querySelectorAll('.mes tbody tr td');
const botaoDestacar= document.querySelectorAll('input');


botaoDestacar[1].addEventListener('click',function(){

    let inputDia= document.querySelector('#dia');
    let diaSelecionado= inputDia.value;
    console.log(diaSelecionado);
   inputDia.setAttribute('value',diaSelecionado);
    for(var i=0; i<diaCalendario.length;i++){
       // console.log(diaCalendario[i]);

        let valorDia=parseInt(diaCalendario[i].innerText);
        if(diaSelecionado==valorDia){
            diaCalendario[i].classList.add('destaque');
            console.log(diaCalendario[i]);
            
        }
    }
    

});

//Letra B

botaoDestacar[4].addEventListener('click',function(){
    

    
    let inputDia1= document.querySelector('#dia1');
    let diaSelecionado1= inputDia1.value;
    
    let inputDia2= document.querySelector('#dia2');
    let diaSelecionado2= inputDia2.value;
   
    inputDia1.setAttribute('value',diaSelecionado1);
    inputDia2.setAttribute('value',diaSelecionado2);
    

        for(var j= diaSelecionado1 +1; j<diaSelecionado2;j++){
            for(var i= diaSelecionado1; i<diaCalendario[j];i++ ){
                diaCalendario[i].classList.add('destaque');
                console.log(diaCalendario[j]);
            }
           
        }
        
    
     
});



//---------------------------------------------------------------------










*/