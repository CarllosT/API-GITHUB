class GitController{

    constructor(){

        this.usuarioGitHub = document.querySelector('[data-usuario-github]');
        this.gitView = new GitView();
    }

    buscaUsuarios(event){

        event.preventDefault();
        GitModel.buscar( this.usuarioGitHub.value);

    }

    recebeUsuario(usuarioModelo){
        this.gitView.update(usuarioModelo);
    }

    error404(){
        console.log('1')
        this.gitView.err()
    }

}