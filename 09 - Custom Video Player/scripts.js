const video=document.querySelector('.viewer')
const toggle=document.querySelector('.toggle')
const play=document.querySelector('.toggle')
const progress=document.querySelector('.progress')
const progressBar=document.querySelector('.progress__filled')

function toggledPlay(){
    const method=video.paused ? 'play' : 'pause'
    video[method]();
}

function updateButton(){
    const icon=this.paused ?  '►' : '❚ ❚' ;
    toggle.textContent=icon;
}

function handleProgress(){
    const percent = (video.currentTime/ video.duration)*100;
    progressBar.style.flexBasis=`${percent}%`;
}

function scrub(e) {
    const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
    video.currentTime = scrubTime;
  }

video.addEventListener('click',toggledPlay)
video.addEventListener('play', updateButton)
video.addEventListener('pause', updateButton)
video.addEventListener('timeupdate', handleProgress)

function handleProgress(){
    const percent = (video.currentTime/ video.duration)*100;
    progressBar.style.flexBasis=`${percent}%`;
}

toggle.addEventListener('click', toggledPlay)

let mousedown = false;
progress.addEventListener('click', scrub);
progress.addEventListener('mousemove', (e) => mousedown && scrub(e));
progress.addEventListener('mousedown', () => mousedown = true);
progress.addEventListener('mouseup', () => mousedown = false);
