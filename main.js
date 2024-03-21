const video = document.getElementById('video');
const progressBar = document.querySelector('.progress-bar');
let progressWidth = 0;
let speed = 0.29;

video.addEventListener('timeupdate', function() {
  const currentTime = video.currentTime;
  const duration = video.duration;
  
  if (currentTime < duration / 2) {
    progressWidth += speed;
  } else {
    progressWidth += speed / 2;
  }
  
  if (progressWidth > 100) {
    progressWidth = 0;
    video.currentTime = 0;
    video.play();
  }
  
  progressBar.style.width = progressWidth + '%';
});

video.addEventListener('ended', function() {
  progressWidth = 0;
});
