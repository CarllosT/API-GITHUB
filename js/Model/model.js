class GitModel {

    constructor() {

        throw new Error('Esta classe não pode ser instanciada!');
        
    }

    static buscar(usuario) {

        const buscarUsuario = new XMLHttpRequest();
        buscarUsuario.open('GET', `https://api.github.com/users/${usuario}/repos`);
        
        const userOBJ = new GitController();
        buscarUsuario.addEventListener('load', () => {

            try {
                if (buscarUsuario.status == 200) {

                    const usuarioSTR = buscarUsuario.responseText;
                    const usuarioOBJ = JSON.parse(usuarioSTR);

                   
                    userOBJ.recebeUsuario(usuarioOBJ);
                    
                } else {
                    
                    userOBJ.error404();
                    throw new Error('Alguma coisa deu errada.');

                }
            } catch (e) {

                console.log(e);

            }
            
        });

        buscarUsuario.send();

    };

}