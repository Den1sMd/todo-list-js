const saisie = document.querySelector('input');
const bouton = document.querySelector('button');
const liste = document.querySelector('ul');

bouton.addEventListener('click', () => {
    console.log("Button waz clicked !")
    console.log(saisie.value);

    const addTodo = document.createElement("li")
    addTodo.innerText = saisie.value;
    addTodo.classList.add("li-deco");

    liste.appendChild(addTodo);
})