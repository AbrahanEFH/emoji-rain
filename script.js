function createEmoji() {
    const emoji = document.createElement('div');
    emoji.classList.add('emoji');

    // en esta linea utilizamos el Math.ramdon para hacer caer los emojis por toda la pantalla
    emoji.style.left = Math.random() * 100 + 'vw';

    // Hacemos que algunos emojis caigan mas rapido que otros 
    emoji.style.animationDuration = Math.random() * 2 + 3 + 's';

    emoji.innerText = '🍔'
    
    document.body.appendChild(emoji);

    // Removemos los emojis al tiempo que necesitemos con setTimeout
    setTimeout(() => {
        emoji.remove();
    }, 3000)
}


setInterval(createEmoji, 200);