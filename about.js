console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	alert('form submited');
}



let form = document.querySelector('form#contact');

form.addEventListener('submit', handleSubmit);