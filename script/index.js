//This section are fitch added for button
const loadButton = () => {
    fetch("https://openapi.programming-hero.com/api/peddy/categories")
        .then((res) => res.json())
        .then((data) => loadButtonDiv(data.categories))
        .catch((err) => console.log(err))
}
loadButton()
const loadButtonDiv = (items) => {
    const getDiv = document.getElementById('button')
    for (const item of items) {

        console.log(item)
        const createDiv = document.createElement('div')
        createDiv.innerHTML = `<button onclick="clickCatagorey(${item.id})" class="btn"> 
        <img class="w-[25px] h-[25px]" src="${item.category_icon}"/>
        ${item.category}
        </button>
        <img src=""/>`
        getDiv.appendChild(createDiv)

    }


}

//this fetch are for load for pet in ui
const fetui = () => {
    fetch('https://openapi.programming-hero.com/api/peddy/pets')
        .then((res) => res.json())
        .then((data) => loadPet(data.pets))
        .catch((err) => console.log(err))
}
fetui()
const loadPet = (pets) => {
    const getPet = document.getElementById('pet-con')
    getPet.innerHTML = ""

    for (const pet of pets) {

        const petDiv = document.createElement('div')

        petDiv.innerHTML = ` <figure class="h-[300px] w-[300px] bg-base-250">
                <img class="w-full h-full object-cover "
                    src="${pet.image}"
                    alt="Shoes" />
            </figure>
            <div class="card-body">
                <h2 class="card-title">${pet.pet_name}</h2>
                <p>${pet.breed} </p>
                <p>  ${pet.date_of_birth}  </p>

                <p> ${pet.gender}</p>
                <p> ${pet.price}$</p>

            </div>

            <div class=" lg:flex items-center gap-5 ml-8 ">
                <div> <button><img class="w-[28px] h-[25px] " src="https://img.icons8.com/?size=100&id=Ebizs5Duve0i&format=png&color=000000" />  </div> </button>
            <div> <button class="btn  text-green-500 font-semibold"> Adopt</button>  </div>
            <div>  <button class="btn  text-green-500 "> Details</button> </div>
        </div>`

        getPet.appendChild(petDiv)

    }
}

// THis section are amde for load  pets from catagorey
const loadPetCatagorey = () => {

}
const clickCatagorey = (id) => {

    fetch(` https://openapi.programming-hero.com/api/peddy/pets ${id}`)
        .then((res) => res.json())
        .then((data) => loadPet(data.petData))
        .catch((err) => console.log(err))
}





