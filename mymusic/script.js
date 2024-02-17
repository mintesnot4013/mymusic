var darkBtn = document.querySelector('.darkMod');
var closeDarkBtn = document.querySelector('.lightMod');
var body = document.body;
var a = document.getElementById('a');
var i = document.getElementById('i');
var x = document.getElementById('x');
var audio = document.getElementById('audio');
var next = document.getElementById('next');
var pre = document.getElementById('pre');
var stop = document.getElementById('stop');
var play = document.getElementById('play');
var main = document.getElementById('main');
var footer = document.querySelector('.footer');
var musicLister = document.querySelector('.musicLister');
var controler = document.querySelector('.controler');
var footerImg = document.querySelector('.footer_img');
var MusicAlbum = document.querySelector('.MusicAlbum');
var priPlay = document.getElementById('.priPlay');
var input = document.querySelector('.inp');
var filterableCards = document.querySelector('.filterable_cards');
var root = document.documentElement;
var currentTrack = 0;

var source = ['song.mp3', 'song1.mp3', 'song2.mp3', 'selena gomez.mp3', 'burna.mp3'];
var Image = ['cover.png', 'vlcsnap-2023-05-24-20h25m53s419.png', 'Screenshot from 2023-05-22 18-52-24.png', 'selena.png', 'burnaboy.png', ];
audio.src = 'asset/' + source[0];
footerImg.src = 'asset/' + Image[0];
MusicAlbum.src = 'asset/' + Image[0];
a.innerHTML = source[currentTrack];


for (var images of Image) {
    filterableCards.innerHTML += " <div class='card'> <i id='soursAudio'>&#9658</i> <img src='asset/" + images +
        "'>  </div>'";
}


darkBtn.addEventListener('click', function() {
    darkBtn.style.display = 'none'
    closeDarkBtn.style.display = 'block';
    a.style.color = 'black';
    body.style.color = 'white';
    i.style.color = 'black';
    body.style.color = 'white';
    footer.style.color = 'white';
    main.style.backgroundColor = '#ffffff18';
    input.style.backgroundColor = '#ffffff18';
    input.style.color = '#fff';

    root.style.setProperty('--audio-controls', '#838383');
    root.style.setProperty('--backgroundColor', '#000');
    root.style.setProperty('--hover-backgrounColor', '#9b9b9b');
    root.style.setProperty('--hover-color', 'black');
});

closeDarkBtn.addEventListener('click', function() {

    darkBtn.style.display = 'block'
    closeDarkBtn.style.display = 'none';
    a.style.color = 'black';
    i.style.color = '#00000079';
    body.style.color = 'black';
    footer.style.color = 'black';
    main.style.backgroundColor = '#ffffff83';
    root.style.setProperty('--audio-controls', '#ebe8e8');
    root.style.setProperty('--backgroundColor', '#00000023');
    root.style.setProperty('--hover-backgrounColor', '#fff');


});


next.addEventListener('click', function() {
    currentTrack++;
    var played = audio.src = 'asset/' + source[currentTrack];

    
    a.innerHTML = source[currentTrack];
    footerImg.src = 'asset/' + Image[currentTrack];
    MusicAlbum.src = 'asset/' + Image[currentTrack];



});

pre.addEventListener('click', function() {

    currentTrack--;
    var played = audio.src = 'asset/' + source[currentTrack];

    

    a.innerHTML = source[currentTrack];
    footerImg.src = 'asset/' + Image[currentTrack];
    MusicAlbum.src = 'asset/' + Image[currentTrack];


})

stop.addEventListener('click', function() {
    audio.pause();
    stop.style.display = 'none'
    play.style.display = 'block'

})
play.addEventListener('click', function() {
    audio.play();
    stop.style.display = 'block'
    play.style.display = 'none'

})

function openPanel() {
    footer.style.height = '400px';
    footer.style.width = '400px';
    footer.style.transition = '.5s';
    footerImg.style.transition = '.5s';
    footerImg.style.width = '380px';
    footerImg.style.height = '300px';
    footerImg.style.position = 'absolute';
    footerImg.style.marginTop = '60px';
    footerImg.style.marginLeft = '-10px';
    audio.style.position = 'absolute';
    audio.style.bottom = '10px';
    audio.style.left = '0';
    audio.style.transition = '.5s';
    controler.style.position = 'absolute';
}
x.addEventListener('click', function() {
    footer.style.position = 'fixed';
    footer.style.width = '98%';
    footerImg.style.width = '50px';
    footerImg.style.position = 'absolute';

    footerImg.style.height = '50px';
    footer.style.height = '200px';
    footer.style.transition = '.5s';
})
let show = document.querySelector('.show');

document.addEventListener('keyup', function(event) {
    if (KeyboardEvent.keyCode = 32) {
        audio.play();

    }
})
var soursAudio = document.getElementById('soursAudio');

soursAudio.addEventListener('click', function() {
    var ran = Math.floor(Math.random() * source.length);
    var played = audio.src = source[0];
    soursAudio.innerHTML = '&#9208';

    audio.play();
})
