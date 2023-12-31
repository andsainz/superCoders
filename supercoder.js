const superCoders = [ "Cyntia", "Diego A", "Fernando", "Geovanny", "Gisela", "Jaime", "Jassed", "Jes", "Jimmy", "Jorge", "Pedro", "Raúl", "Rubén", "Sophia", "Thuanny", "Virginia", "Adriana", "Luis", "Ainhoa", "Andrea", "Diego B", "Emily", "Víctor", "Wanda", "Bryan"];

function changeName() {
    if (superCoders.length <= 0) {
        alert("The last coder has been selected."); // Alerta cuando es el último coder
        window.location.href = "../index.html"; // Volver a la pantalla de inicio
        return;
    }

    let index = Math.floor(Math.random() * superCoders.length);
    let coderName = superCoders[index];
    superCoders.splice(index, 1); // No volverá a aparecer el coder seleccionado

    document.getElementById("random--name").textContent = coderName;
    swal.fire({
        title: `${coderName}, it's your turn!`,
        text: 'You can do it!',
        width: 600,
        padding: '3em',
        color: '#003C8D',
        background: '#fff url(/images/trees.png)',
        confirmButtonColor: '#FE9231',
        backdrop: `
            rgba(120, 199, 230, 0.4)
            url("../images/i-can-yo-puedo.gif")
            top
            no-repeat
        `
    }); // Aviso del nombre del coder seleccionado
}

//agregar nombres
function anotherCoder(){
    let newName = document.querySelector("#newName").value 
    superCoders.push(newName);
    document.querySelector("#newName").value = "";
    showNames();
};

//mostrar lista
function showNames(){
    let list = document.querySelector("#namesList");
    list.innerHTML = "";
    for (let i = 0; i < superCoders.length; i++){
    let li = document.createElement("li");
    li.innerHTML = `<span>${superCoders[i]}</span><img id="editName--btn" src="../images/draw.png" onclick="editName(${i})"> <img id="deleteName--btn" src="../images/close.png" onclick="removeName(${i})">`;
    list.appendChild(li);
    }
};

function editName(index){
    let namePrompt = prompt("Edita el nombre del superCoder", superCoders[index]);
    superCoders[index] =  namePrompt    
    showNames();
}

function removeName(index) {
    Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!',

    }).then((result) => {
        if (result.isConfirmed) {
            superCoders.splice(index,1)
            showNames()
        Swal.fire({
            title: 'Deleted!',
            text: 'Your file has been deleted.',
            icon: 'success',
        })
        }
    })
}

function reset(){
    location.reload()
}

showNames()


function deleteAll() {
    superCoders.length = 0; 
    showNames(); 
}


document.getElementById("deleteAll--btn").addEventListener("click", deleteAll);



//Animación de heroes
let firstHero = document.getElementByClass("hero1-container");
let opacity = 0;

let fadeInFirstHero = setInterval(() => {
    if (opacity >= 1) {
        clearInterval(fadeInFirstHero);
    }
    firstHero.style.opacity = opacity;
    opacity += 0.01;
}, 5);

function alertMsj(){
    Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Your work has been saved',
        showConfirmButton: false,
        timer: 2000,
    })
}
