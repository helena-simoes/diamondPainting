
//Perguntas da barra vertical esquerda

const pergunta1 = document.getElementById('diamond');

const resposta1 = document.getElementById('quem');

pergunta1.addEventListener('click', (event) => {
	resposta1.scrollIntoView();
})

const pergunta2 = document.getElementById('kit');

const resposta2 = document.getElementById('que');

pergunta2.addEventListener('click', (event) => {
	resposta2.scrollIntoView();
})

const pergunta3 = document.getElementById('instrucoes');

const resposta3 = document.getElementById('como');

pergunta3.addEventListener('click', (event) => {
	resposta3.scrollIntoView();
})

//const pergunta = document.querySelector('.grp-perguntas');
//pergunta.forEach((pergunta)=> {
//	pergunta.addEventListener('click', (event) => {
//		if(pergunta.id==="diamond"){
//		let quem = "O que é o Diamond Painting?"
//	}else if(pergunta.id==="kit"){
//		let que = "O que contém o meu Kit?"
//	}else if(pergunta.id==="instrucoes"){
//		let como = "Instruções"
//	}

//	explica.innerHTML = explica;
//	})
//})

//const button = document.querySelector(‘#play-button’);
//button.addEventListener(‘click’, (event) => {
// Fazer alguma coisa quando o botão é clicado
//});
	
