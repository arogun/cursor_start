document.addEventListener('DOMContentLoaded', function() {
    const button = document.getElementById('changeColorBtn');
    const message = document.getElementById('message');
    
    const colors = [
        '#00FF00', // 밝은 녹색
        '#FF00FF', // 마젠타
        '#00FFFF', // 시안
        '#FFFF00', // 노랑
        '#FF8000', // 주황
        '#FF0080', // 핫 핑크
        '#80FF00', // 라임
        '#0080FF', // 밝은 파랑
        '#8000FF', // 보라
        '#FFFFFF'  // 흰색
    ];
    let currentColorIndex = 0;

    button.addEventListener('click', function() {
        message.style.color = colors[currentColorIndex];
        currentColorIndex = (currentColorIndex + 1) % colors.length;
    });
}); 