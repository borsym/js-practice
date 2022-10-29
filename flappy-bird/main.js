document.addEventListener('DOMContentLoaded', () => {
  const bird = document.querySelector('.bird');
  const gameDisplay = document.querySelector('.game-container');

  let birdBottom = 600;
  const gravity = 2;
  let birdLeft = 100;
  const velocity = 2;

  document.addEventListener('keydown', (e) => {
    if (e.code === 'Space') {
      jump();
    }
  });

  const jump = () => {
    if (birdBottom > 500) return;
    birdBottom += 50;
    bird.style.bottom = birdBottom + 'px';
  };
  const game = () => {
    birdBottom -= gravity;
    // birdLeft += velocity;
    bird.style.bottom = birdBottom + 'px';
    bird.style.left = birdLeft + 'px';
    if (birdBottom < 0) {
      gameOver();
    }
  };

  const gameOver = () => {
    clearInterval(timerId);
    clearInterval(obstacleInterval);
  };

  const generateObstacle = () => {
    const obstacle = document.createElement('div');
    obstacle.classList.add('obstacle');
    obstacle.style.left = '500px';
    obstacle.style.bottom = '150px';
    gameDisplay.appendChild(obstacle);
    const moveObstacle = () => {
      obstacle.style.left = obstacle.offsetLeft - 2 + 'px';
      if (obstacle.offsetLeft < -60) {
        clearInterval(timerId);
        gameDisplay.removeChild(obstacle);
      }

      // check if obstacle is touching bird
      if (
        obstacle.offsetLeft > birdLeft &&
        obstacle.offsetLeft + 100 < birdLeft
      ) {
        console.log('game over');
        gameOver();
      }
    };
    let timerId = setInterval(moveObstacle, 10);
  };

  let obstacleInterval = setInterval(generateObstacle, 2000);
  let timerId = setInterval(game, 20);
});
