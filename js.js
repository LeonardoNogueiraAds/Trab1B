
const seleButton= document.querySelectorAll('.ePP1');
const primeiroParagrafo= document.querySelector('divPrincipal');
const div= document.querySelector('.divPrincipal');

function event1 (eventoEscolhido){
    this.eventoEscolhido=eventoEscolhido;
}

//-Evento1
seleButton.forEach(b=>{

b.addEventListener('click', function(event){
    const evento1= new event1(b.innerText);
    //console.log(evento.eventoEscolhido);
    if(evento1.eventoEscolhido=='Você se esconde no celeiro'){
        primeiroEvento(b,event1);
        event.preventDefault;
    }
})

})

function primeiroEvento(b,evento1){
    const paragrafoCel=document.createElement('p');
    paragrafoCel.innerText='O celeiro esta escuro, você tropessou em um balde e atraiu todas as atenções de seres próximos, o que irá fazer?';
    div.insertBefore(paragrafoCel,b);
    document.getElementsByTagName(b[0]).innerHTML="Voltar a onde estava antes";
   // b[2].innerHTML="Permanecer a onde esta";

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