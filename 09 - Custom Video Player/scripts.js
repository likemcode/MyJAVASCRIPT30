const video=document.querySelector('.viewer')
const toggle=document.querySelector('.toggle')
const play=document.querySelector('.toggle')
const progress=document.querySelector('.progress')
const progressBar=document.querySelector('.progress__filled')
const ranges=document.querySelectorAll('.player__slider')
const skipButtons=document.querySelectorAll('.player__button')


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

function skip(){
    video.currentTime+=parseFloat(this.dataset.skip)
    console.log(this.dataset)

}

function handleRangeUpdate() {
    video[this.name] = this.value;
}

video.addEventListener('click',toggledPlay)
video.addEventListener('play', updateButton)
video.addEventListener('pause', updateButton)
video.addEventListener('timeupdate', handleProgress)

toggle.addEventListener('click', toggledPlay)
skipButtons.forEach(range=> range.addEventListener('click',skip))
ranges.forEach(range=> range.addEventListener('change',handleRangeUpdate))
ranges.forEach(range=> range.addEventListener('mousemove',handleRangeUpdate))


let mousedown = false;
progress.addEventListener('click', scrub);
progress.addEventListener('mousemove', (e) => mousedown && scrub(e));
progress.addEventListener('mousedown', () => mousedown = true);
progress.addEventListener('mouseup', () => mousedown = false);


// KEY TAKEAWAYS

// 1-OBTAIN THE ELEMENTS USING THE DOM 
// 2-WRITE THE FUNCTIONS TO HAVE AN EFFECT ON EACH OBTAINED ELEMENTS AS UPU MIGHT DESIRE IT
// 3-ADD THE EVENTLISTENERS TO MAP THE CORRESPONDING ELEMENTS TO FUNCTIONS THROUGH EVENTS
