console.log("welcome to spotify");
//Initialize the variables
let index =0;
let audioElement = new Audio('song/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let songItems = Array.from(document.getElementsByClassName('songItem'));
let masterSongName = document.getElementById('masterSongName');

let songs =[
    {songName: "Dil jhoom", filePath:"song/1.mp3", coverPath:"covers/1.jpg"},
    {songName: "Lutt Putt Gaya", filePath:"song/2.mp3", coverPath:"covers/2.jpg"},
    {songName: "One Love", filePath:"song/3.mp3", coverPath:"covers/3.jpg"},
    {songName: "Paani Paani", filePath:"song/4.mp3", coverPath:"covers/4.jpg"},
    {songName: "Paagal", filePath:"song/5.mp3", coverPath:"covers/5.jpg"},
    {songName: "Vaaste", filePath:"song/6.mp3", coverPath:"covers/6.jpg"},
    {songName: "Dil Kya Kare", filePath:"song/7.mp3", coverPath:"covers/7.jpg"},
    {songName: "Zidna Banda", filePath:"song/8.mp3", coverPath:"covers/8.jpg"},
    {songName: "Chaleya", filePath:"song/9.mp3", coverPath:"covers/9.jpg"},

]

songItems.forEach((element, i)=>{ 
    element.getElementsByTagName("img")[0].src = songs[i].coverPath; 
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName; 
})
//audioElement.play();

// Listen to Events
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
})
// Listen to Events
audioElement.addEventListener('timeupdate', ()=>{ 
    // Update Seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)* 100); 
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');

    })
}
const makeAllPause = ()=>{



Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{
       // console.log(e.target);
        makeAllPlays();
        index = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src=`song/${index+1}.mp3`;
        masterSongName.innerText = songs[index].songName;
        songItemPlay.
        audioElement.currenTime=0;
        audioElement.play();
        gif.style.opacity= 1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    }) 
})


document.getElementById('next').addEventListener('click', ()=>{
    if(index>=8){
        index = 0;
    }
    else{
        index += 1;
    }
    audioElement.src = `song/${index+1}.mp3`;
    masterSongName.innerText = songs[index].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');

})

document.getElementById('previous').addEventListener('click', ()=>{
    if(index<=0){
        index = 0;
    }
    else{
        index -= 1;
    }
    audioElement.src = `song/${index+1}.mp3`;
    masterSongName.innerText = songs[index].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})

