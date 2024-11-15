// JavaScriptでボタンを取得してクリックイベントを設定
document.addEventListener('DOMContentLoaded', function() {
    const header = document.querySelector('header');  // <header>要素
    if(header){
		header.addEventListener('click',function() {
			window.location.href = 'https://shizu-p.github.io/index.html';
		});
	}
});

// 単語登録ボタン
function sendWord(word,ans){
	
}
function wordRegsterButtonClick(){
	let wordText = document.getElementById('word').value;
	let ansText = document.getElementById('ans').value;
	if(wordText && ansText){
		;
	} else {
		alert('invalid input\n単語と答えの両方に文字列を入力してください');
	}
}

let registerButton = document.getElementById('registerButton');
registerButton.addEventListener('click',wordRegsterButtonClick);



const data = {value:"Hello,Rust!"};

fetch("http://127.0.0.1:88080/send-data",{
	method : "POST",
	headers : {
		"Content-Type" : "application/json"
	},
	body : JSON.stringify(data)
})
	.then(response => response.text())
	.then(result => {
		cfonsole.log("Server response:",result);
	})
	.catch(error => {
		console.error("Error: " , error);
	});

