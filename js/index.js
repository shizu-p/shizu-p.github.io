// JavaScriptでボタンを取得してクリックイベントを設定
document.addEventListener('DOMContentLoaded', function() {
    const button = document.getElementById('goToIndex');  // ボタンを取得
    
    button.addEventListener('click', function() {
        window.location.href = './index.html';  // index.htmlに遷移
    });
});