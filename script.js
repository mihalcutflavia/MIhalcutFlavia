var button= document.getElementById("buton")
var body= document.getElementById("body")
var nume= document.getElementById("nume")
var prenume= document.getElementById("prenume")
var img= document.getElementById("imagine")
var asteptari= document.getElementById("educatie")
var an= document.getElementById("an")

const d= new Date()
var year=d.getFullYear()


button.addEventListener("click", altaViata)
an.addEventListener("mouseover", displayAge)
function displayAge()
{
an.innerHTML= year-an.innerHTML
}
function altaViata()
{
nume.innerHTML="Functie: Java dev"
prenume.innerHTML="Locule de munca: Bali"

img.src="caine.jpg"
body.style.backgroundColor="blue"
body.style.color="orange"
img.style.opacity="70%"
img.style.borderWidth="25px"
}