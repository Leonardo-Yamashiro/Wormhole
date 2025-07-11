function navarrumado(){
    navproduto.style.display='none'
    navparceiros.style.display='none'
    navhome.style.display='none'
}

function navA1(){
    if(window.innerWidth>=769){
        if(navhome.style.display=='none'){
            navhome.style.display='flex'
            navproduto.style.display='none'
            navparceiros.style.display='none'
            
            navA.style.background='darkred'
            navA.style.color='white'
            navB.style.background = '';
            navB.style.color = '';
            navC.style.background = '';
            navC.style.color = '';
        }
        else{
            navproduto.style.display='none'
            navparceiros.style.display='none'
            navhome.style.display='none'
            
            navA.style.background = '';
            navA.style.color = '';
            navB.style.background = '';
            navB.style.color = '';
            navC.style.background = '';
            navC.style.color = '';
        }
    }
    else{
        itens.style.display='none'
        navhome.style.display='flex'
        navproduto.style.display='none'
        navparceiros.style.display='none'
        burger.innerText='< Home'
    }
}
function navA2(){
    if(window.innerWidth>=769){
        if(navproduto.style.display=='none'){
            navproduto.style.display='flex'
            navhome.style.display='none'
            navparceiros.style.display='none'

            navA.style.background=''
            navA.style.color=''
            navB.style.background='darkred'
            navB.style.color='white'
            navC.style.background=''
            navC.style.color=''
        }
        else{
            navproduto.style.display='none'
            navparceiros.style.display='none'
            navhome.style.display='none'
            
            navA.style.background = '';
            navA.style.color = '';
            navB.style.background = '';
            navB.style.color = '';
            navC.style.background = '';
            navC.style.color = '';
        }
    }
    else{
        itens.style.display='none'
        navproduto.style.display='flex'
        navhome.style.display='none'
        navparceiros.style.display='none'
        burger.innerText='< Produtos'
    }
}
function navA3(){
    if(window.innerWidth>=769){
        if(navparceiros.style.display=='none'){
            navparceiros.style.display='flex'
            navhome.style.display='none'
            navproduto.style.display='none'
            
            navA.style.background=''
            navA.style.color=''
            navB.style.background=''
            navB.style.color=''
            navC.style.background='darkred'
            navC.style.color='white'
        }
        else{
            navproduto.style.display='none'
            navparceiros.style.display='none'
            navhome.style.display='none'
            
            navA.style.background = '';
            navA.style.color = '';
            navB.style.background = '';
            navB.style.color = '';
            navC.style.background = '';
            navC.style.color = '';
        }
    }
    else{
        itens.style.display='none'
        navparceiros.style.display='flex'
        navhome.style.display='none'
        navproduto.style.display='none'
        burger.innerText='< Documentos'
    }
}

    function clickMenu(){
        if(itens.style.display=='block'){
            itens.style.display='none'
            navhome.style.display='none'
            navproduto.style.display='none'
            navparceiros.style.display='none'
            burger.innerHTML=' &#9776;'
        }
        else{
            itens.style.display='block'
            navhome.style.display='none'
            navproduto.style.display='none'
            navparceiros.style.display='none'
            burger.innerHTML=' &#9776;'
        }
    }
    
function mudouTamanho(){
    if(window.innerWidth>=769){
        itens.style.display='flex'
        navproduto.style.display='none'
        navparceiros.style.display='none'
        navhome.style.display='none'
    }
    else{
        itens.style.display='none'

        navhome.style.display='none'
        navproduto.style.display='none'
        navparceiros.style.display='none'
    }
}