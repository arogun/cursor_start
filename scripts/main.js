document.addEventListener('DOMContentLoaded', function() {
    const button = document.getElementById('changeColorBtn');
    const message = document.getElementById('message');
    
    const colors = ['#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4', '#FFEEAD'];
    let currentColorIndex = 0;

    button.addEventListener('click', function() {
        message.style.color = colors[currentColorIndex];
        currentColorIndex = (currentColorIndex + 1) % colors.length;
    });
}); 