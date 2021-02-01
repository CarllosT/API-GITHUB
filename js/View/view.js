class GitView {

    constructor() {
        this.repos = document.querySelector('#links');
        this.reposName = document.querySelector('.title-repos');
    }

    update(modeloUsuario) {

        modeloUsuario.forEach((element) => {

            let div = document.createElement('div');
            div.classList.add('divLinks');
            let link = `<a href="${element.html_url}">${element.name}</a><p class="icons">${element.language}</p>`;
            div.innerHTML = link;
            this.repos.appendChild(div);

            this.reposName.textContent = `Repos ${element.owner.login}`;
            console.log(element);

        });

       

    }

}