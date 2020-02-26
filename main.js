(function (){
    const search = document.getElementById("search"); 
    const enter = document.getElementById("botao");
    const aviso = document.getElementById('aviso');
    const url = "https://api.github.com/users";
    const client_id = "e2f1109e7aaa41aff366";
    const client_secret = "843419829710d50e633daec75fc6ae607c8bbe7d";

    async function getUser(user){
        const profileResponse = await fetch(`${url}/${user}?client_id=${client_id}&client_secret=${client_secret}`);

        const profile = profileResponse.json();

        return profile;
    }

    function showProfile(user){                
        if(user.name == undefined){
            enter.setAttribute('href','/#login_failed')
            aviso.innerHTML = `Usuário não encontrado` 
            sessionStorage.setItem('chave',"undefined")           
        }else{
            var dados = JSON.stringify(user);
            sessionStorage.setItem('chave',dados);
        }          
    }

    search.addEventListener("keyup", (e)=> { 
        const user = e.target.value;        
        aviso.innerHTML = ``
        if(user.length > 0 ){
            enter.setAttribute('href','ftp/perfil.html')
            getUser(user).then(res => showProfile(res))
        }            
    })
})();

if(sessionStorage.login == 'logado'){
    window.location.href ='/ftp/perfil.html'
}
