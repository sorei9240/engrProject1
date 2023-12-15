document.addEventListener('DOMContentLoaded', () => {
    const helloWorld = document.getElementById('hello-world');
    const dog = document.getElementById('dog');
    let posX = 0, posY = 0, dogX = 0, dogY = 0;
    let velocityX = 2, velocityY = 2;
    let frame = 0;
    const totalFrames = 20;

    function updatePosition() {
        // Calculate the right and bottom boundaries
        const rightBoundary = window.innerWidth - helloWorld.offsetWidth - 1;
        const bottomBoundary = window.innerHeight - helloWorld.offsetHeight;

        // Update position of the text
        posX += velocityX;
        posY += velocityY;

        // Check for left or right boundary and reverse direction
        if (posX >= rightBoundary || posX <= 0) {
            velocityX *= -1;
            posX = Math.max(0, Math.min(posX, rightBoundary)); 
        }

        // Check for top or bottom boundary and reverse direction
        if (posY >= bottomBoundary || posY <= 0) {
            velocityY *= -1;
            posY = Math.max(0, Math.min(posY, bottomBoundary)); 
        }

        helloWorld.style.left = posX + 'px';
        helloWorld.style.top = posY + 'px';

        frame++;
        if (frame > totalFrames) {
            frame = 0;
        }
        dog.src = `run/${frame}.png`;

       const buffer = 50;

    // Update the position of the dog
    let previousX = dogX;
    if (dogX < posX - buffer) {
        dogX++;
    } else if (dogX > posX + buffer) {
        dogX--;
    }

    // Flip the image based on direction
    if (dogX > previousX) {
        dog.style.transform = 'scaleX(1)';  // Facing right
    } else if (dogX < previousX) {
        dog.style.transform = 'scaleX(-1)'; // Facing left
    }

    // Similarly update dogY with respect to posY and buffer
    let previousY = dogY;
    if (dogY < posY - buffer) {
        dogY++;
    } else if (dogY > posY + buffer) {
        dogY--;
    }

    dog.style.left = dogX + 'px';
    dog.style.top = dogY + 'px';
}


    setInterval(updatePosition, 20);
});