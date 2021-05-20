//lista de objetos
const resumos = [{
	id: 1,
	nome: "Ric Fazeres",
	apelido: "deus do gaming",
	img: "imagens/ric.jpg",
	texto: "Como é que é maltinha daqui é o ricfazeres."
},
{
	id: 2,
	nome: "Big Floppa",
	apelido: "flopps",
	img: "imagens/floppa.jpg",
	texto: "AJOELHEM-SE PERANTE O VOSSO DEUS."
},
{
	id: 3,
	nome: "Ruca",
	apelido: "o cabeça",
	img: "imagens/ruca.jpg",
	texto: "PRONTOS PARA LEVAR CABEÇADAS CABREÕES?"
},
{
	id: 4,
	nome: "Monke Mexicano",
	apelido: "el banana",
	img: "imagens/monke.jpg",
	texto: "UH AH AH, PASSA AS BANANAS HIJO DI PUTA"
}
];

//DOM

const img = document.querySelector('img');
const nome = document.querySelector('.nome');
const apelido = document.querySelector('.apelido');
const texto = document.querySelector('.texto');

const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
const susBtn = document.querySelector('.surpresa')

let currentItem = 0;

//Mostrar a pessoa respetiva

function showPerson(person) {
	let item = resumos[person];
	img.src = item.img;
	nome.textContent = item.nome;
	apelido.textContent = item.apelido;
	texto.textContent = item.texto;
}

//Botão next

nextBtn.addEventListener('click', function() {
	currentItem++;
	if (currentItem > resumos.length - 1) {
		currentItem = 0;
	}
	showPerson(currentItem) 
});

//Botão prev

prevBtn.addEventListener('click', function() {
	currentItem--;
	if (currentItem < 0) {
		currentItem = resumos.length - 1;
	}
	showPerson(currentItem)
});

//Botão surpresa

susBtn.addEventListener('click', function() {
	currentItem = Math.floor(Math.random() * resumos.length);
	
	showPerson(currentItem);
});