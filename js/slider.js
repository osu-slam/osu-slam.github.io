var canvas = document.getElementById('can'),
    context = canvas.getContext('2d');
var img = document.createElement('img');
var canvas_link = document.getElementById('canvas-link');
var timer = 0;

/*function changeImage()
{
        var url = 'url(' + imgs[i] + ')';
        if(imgs[i] !== undefined){
            $("#home-header").css("background-image", url);
        }
        i++;

        if(i >= imgs.length){
            i = 0;
        }
        setTimeout("changeImage()", 5000);
}*/

function changeText()
{
    var url = 'url(' + imgs[j] + ')';
    if(imgs[j] !== undefined){
        $("#home-header").css("background-image", url);
    }
        addRibbon();
        updateDots();
        if(header[j] !== undefined && text[j] !== undefined){
            document.getElementById("slide-title").innerHTML = header[j];
            document.getElementById("slide-text").innerHTML = text[j];
        }
        j++;

        if(j >= header.length){
            j = 0;
        }
        timer = setTimeout("changeText()", 5000);
}

function addRibbon()
{
    if(j < ribbons.length){
        img.onload = function () {
            context.clearRect(0, 0, canvas.width, canvas.height);
            context.drawImage(this,0,0, 150, 150);
        };
        if(ribbons[j] == '')
            context.clearRect(0, 0, canvas.width, canvas.height);
        else {
            img.src = ribbons[j];
            canvas_link.href = ribbonLinks[j];
        }
    }
}

function updateDots(){
    var dots = document.getElementsByClassName("dot");
     for (i = 0; i < dots.length; i++) {
         dots[i].className = dots[i].className.replace(" active", "");
     }
     dots[j].className += " active";
}

function currentSlide(num){
    if(timer){
        clearTimeout(timer);
        timer = 0;
    }
    var n = parseInt(num);
    if(n >= 0 && n < header.length){
        j = n;
        changeText();
    }
}

//'img/header/japan.jpg',
var imgs = ['img/header/fmri.jpg', 'img/header/heard_lee_ale_header.jpg', 'img/header/acrm.jpg', 'img/header/funding.jpg'];
var ribbonLinks = ['', 'index.html#recent-events', 'index.html#recent-events','index.html#recent-events'];
var ribbons = ['', 'img/ribbons/recent_news.png','img/ribbons/recent_news.png', 'img/ribbons/recent_news.png'];
var header = ["Welcome to SLAM Lab!", "Newest Publication", "ACRM Annual Conference", "Community Grants Program"];
var text = ['We are the auditory neuroscience lab at the Ohio State University\'s Department of Speech & Hearing Science. We study the connection between speech, language, and music in the brain.',
		'Our recent publication explores potential neural connections between rhythm and grammar.'
    'Dr. Lee presents at ACRM Annual Conference!',
    'Our newest experiment is being supported by a community grant from the Parkinson\'s Foundation.'];

var j = 0;

timer = setTimeout("changeText()", 100);
