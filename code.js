function PlayPause(){
  video=document.getElementById("vid_rech_dich")
  if (video.paused || video.ended) {
    video.play();
  } else {
    video.pause();
  }
}
function Reset() {
     document.getElementById("vid_rech_dich").pause();
     document.getElementById("vid_rech_dich").currentTime = 0;
}
function Speed(){
   document.getElementById("vid_rech_dich").playbackRate=1.4
}
function Speed05(){
   document.getElementById("vid_rech_dich").playbackRate=0.5
}
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('a[href]').forEach(link => {
    // Trick: Temporarily remove href during touchstart to suppress tooltip
    link.addEventListener('touchstart', () => {
      link.setAttribute('data-temp-href', link.getAttribute('href'));
      link.removeAttribute('href');
    });

    link.addEventListener('touchend', () => {
      link.setAttribute('href', link.getAttribute('data-temp-href'));
      link.removeAttribute('data-temp-href');
    });
  });
});