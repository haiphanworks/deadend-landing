window.onload = function () {
    toggleBGM();
    landingpageRandomImage();
    landingpageRandomImageLoop();
};

function toggleBGM() {
    return document.getElementById('de-bgm').paused ? playBGM() : pauseBGM();
};

function playBGM() {
    document.getElementById('de-bgm').play();
    return document.getElementById('de-bgm').paused ? pauseText() : playText();
}

function playText() {
    document.querySelector('.de-bgm-toggle').innerHTML = 'câm mẹ mồm';
}

function pauseBGM() {
    document.getElementById('de-bgm').pause();
    return document.getElementById('de-bgm').paused ? pauseText() : playText();
}

function pauseText() {
    document.querySelector('.de-bgm-toggle').innerHTML = 'làm tí nhạc';
}



// Random Image On Homepage

function landingpageRandomImage() {
    var landingpageRandom = Math.floor(Math.random() * 9) + 1;
    if (landingpageRandom < 10) {
        var landingpageRandom = '0' + landingpageRandom;
    }
    console.log(`Current Homepage Random Image: ${landingpageRandom}`);
    document.getElementById(
        'landingpageRandomImage'
    ).src = `./assets/images/landing/${landingpageRandom}.jpg`;
}

//// Random Image Loop On Homepage

function landingpageRandomImageLoop() {
    setTimeout(function () {
        landingpageRandomImage();
        landingpageRandomImageLoop();
    }, 15000);
}