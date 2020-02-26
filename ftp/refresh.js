function showProfile(){   
    const profile = document.getElementById('profile')
    const dadosArquivados = JSON.parse(sessionStorage.getItem('chave'));
    const data = new Date(dadosArquivados.created_at)    
    profile.innerHTML = `
    <div class="imagemPerfil">
        <img class='perfil' src="${dadosArquivados.avatar_url}" alt="">
    </div>
    <p class="nome">${dadosArquivados.name}</p>
    <p class="usuario">@${dadosArquivados.login}</p>
    <p class="bio">${dadosArquivados.bio}</p>
    <p class="subTitulo">Estatisticas do perfil</p>
    <div class="column"><div class="white">Entrada no GitHub</div><div>${data.getDate()+ "/" + data.getMonth() +"/"+ data.getUTCFullYear()}</div></div>
    <div class="column"><div class="white">Repositórios</div><div>${dadosArquivados.public_repos}</div></div>
    <div class="column"><div class="white">Seguidores</div><div>${dadosArquivados.followers}</div></div>
    <div class="column"><div class="white">Seguindo</div><div>${dadosArquivados.following}</div></div>
    <div class="noFollow"><div class="white">Não estou Seguindo</div> <div> ${dadosArquivados.followers-dadosArquivados.following}</div></div>

    <a href="../index.html" id="off"><button type="button">SAIR DA APLICAÇÃO</button></a>`

    sessionStorage.setItem('login','logado')
}

function verifica(){
    if(sessionStorage.chave == "undefined"){
        window.location.href="../index.html"
    }else{
        showProfile() 
        deslogar()
    }
}

function deslogar(){     
 
    const sair = document.getElementById('off')
    sair.onclick = function(e){
        sessionStorage.setItem('chave',undefined);
        sessionStorage.setItem('login','deslogado')
    }
}

verifica()