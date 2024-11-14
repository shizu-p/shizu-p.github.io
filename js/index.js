// JavaScriptでボタンを取得してクリックイベントを設定
document.addEventListener('DOMContentLoaded', function() {
    const header = document.querySelector('header');  // <header>要素
    if(header){
		header.addEventListener('click',function() {
			window.location.href = 'https://shizu-p.github.io/index.html';
		});
	}
});