const input = document.querySelector(".input");
const btn = document.querySelector(".button-submit");
const divCard = document.querySelector("card-principal");

btn.addEventListener("click", (e) =>{
    e.preventDefault();
    const UserName = input.ariaValueMax.trim();
    if(UserName){
        getGiHubData(UserName);
    }else {
        alert("Digite um usuário");
    }
    input.value = "";
});

const getGiHubData = async(user) =>{
    const url = `https://api.github.com/users/${user}`;
    try{
        const response = await fetch(url);
        if(response.ok){
            const data = await response.json();
            divCard.innerHTML = createCard(data);
        }else{
            alert("esta usuária não existe");
            throw new Error();
        }
    }
    catch(err){
        console.log("requisição não sucedida", err);
    }
};

function createCard(user){
    const{ name, avatar_url, bio, public_repos, login, followers} = user;
    return`
    <img class="img-git" src="${avatar_url}" alt="foto user"/>
    <h2 class="name"> ${name}</h2>
    <p class="login">${login}</p>
    <p class="bio">${bio}</p>
    <div class="icones">
    <img class="icone1"; src="../../images/people_outline.png"/>
    <p class="public-repos">${public_repos}</p>
    <img class="icone2"; src="../../images/Vector.png"/>
    <p class="followers">${followers}</p>`
};