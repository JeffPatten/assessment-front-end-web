console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	// console.log('form submit');
	alert('Thank you for contacting us! We will respond within 2-5 weeks.')
}

function handleCompliment() {
	const compliments = ['Nice hair!', 'You have a great smile!', 'I hope to be as fun as you someday!', 'What fine motor skills you have!', 'You have excellent elocution!', 'I wish I were half as handsome as you!', 'Award for best mouse mover goes to.....You!', `I sure think you're great!`, `You're so pretty, you should be on a Christmas card!`, `How do you fit all that knowledge and wisdom in such a perfectly packaged head?`, `I'm voting for you to have your own holiday the next time we add one to the calendar`]
	let randomCompliment = compliments[Math.floor(Math.random() * compliments.length)]
	alert(randomCompliment)
}


let form = document.querySelector('#contact');

form.addEventListener('submit', handleSubmit);

let bossDuck = document.querySelector('img')
bossDuck.addEventListener('mouseover', handleCompliment)