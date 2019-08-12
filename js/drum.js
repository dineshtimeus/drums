window.addEventListener('keydown', drum);

function drum(e){
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    if(!audio) return; // Stopping if there is no audio associated with it
    audio.currentTime = 0; // Stopping the previous beat if key hits again
    audio.play(); // Playing the Audio
    const audiobox = document.querySelector(`.keys[data-key="${e.keyCode}"]`);
    audiobox.classList.add("playing");
}

function removeTransition(e){
    if(e.propertyName !== 'transform') return;
    e.target.classList.remove('playing');
}
const keys = document.querySelectorAll('.keys');
const allaudio = Array.from(keys);
allaudio.forEach(key => key.addEventListener('transitionend', removeTransition));
