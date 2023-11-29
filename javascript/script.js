console.log('Welcome to Halal Spotify');
let masterPlay=document.getElementById('masterPlay');
let myProgressBar=document.getElementById('myProgressBar');
let songIndex=0
let audioElement=new Audio('/assets/audio/2.mp3');
let gif=document.getElementById('gif');
let songItems=Array.from(document.getElementsByClassName('songItems'));


let songs=[
    { songName:'rehmatun lil alameen' ,pathName:'/assets/audio/2.mp3' ,coverPath:'/assets/images/bg2.jpg'},
    { songName:'labbaik-palestine' ,pathName:'/assets/audio/3.mp3' ,coverPath:'/assets/images/1.jpeg'},
    { songName:'shukran-laka-rabbi' ,pathName:'/assets/audio/1.mp3' ,coverPath:'/assets/images/2.jpeg'},
    { songName:'ya-ilahi' ,pathName:'/assets/audio/4.mp3' ,coverPath:'/assets/images/3.jpg'}
]
songItems.forEach((element,i) => {
    console.log('hello');
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
    element.getElementsByClassName("one")[0].src = songs[i].coverPath;
});
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused||audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity=1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity=0;
    }
})
audioElement.addEventListener('timeupdate',()=>{
    progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
    myProgressBar.value=progress;
})
myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime=myProgressBar.value*audioElement.duration/100;
})

const makeAllPlay = ()=> {
     Array.from(document.getElementsByClassName("songPlayItems")).forEach((element)=>{
        element.classList.add('fa-play-circle');
        element.classList.remove('fa-pause-circle');
     })
}
Array.from(document.getElementsByClassName("songPlayItems")).forEach((element)=>{
     element.addEventListener("click",(e)=>{
        makeAllPlay();
        songIndex=parseInt(e.target.id);
        console.log(e.target);
        console.log(songIndex);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src="/assets/audio/${songIndex}.mp3";
        audioElement.currentTime=0;
        audioElement.play();
        masterPlay.classList.add('fa-pause-circle');
        masterPlay.classList.remove('fa-play-circle');
        

     })
})