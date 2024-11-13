document.addEventListener('DOMContentLoaded' , function() {
	const button = document.getElementById('goToIndex');

	button.addEventListener('click',function() {
		window.location.href = './index.html';
	});
});