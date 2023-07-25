function stopAllAudio() {
	 document.querySelectorAll('audio').forEach(el => el.pause());
}

function fadeOutContainer(containerID) {
	$(containerID).css({'opacity': '0'});
	setTimeout(() => {
		$(containerID).css({'display': 'none'});
  	}, "1300");

	// stop all audio that's playing
	stopAllAudio();
}

function fadeInContainer(containerID) {
	setTimeout(() => {
		$(containerID).css({'display': 'flex'});
		setTimeout(() => {
			$(containerID).css({'opacity': '1'});
		}, "50");
	}, "1301");
}

function displayQuestion2a() {
	fadeOutContainer("#container1");
	fadeInContainer("#container2a");
}

function displayQuestion2b() {
	fadeOutContainer("#container1");
	fadeInContainer("#container2b");
}

function displayQuestion3a() {
	fadeOutContainer("#container2a");
	fadeInContainer("#container3a");
}

function displayQuestion3b() {
	fadeOutContainer("#container2a");
	fadeInContainer("#container3b");
}

function displayQuestion3c() {
	fadeOutContainer("#container2b");
	fadeInContainer("#container3c");
}

function displayQuestion3d() {
	fadeOutContainer("#container2b");
	fadeInContainer("#container3d");
}

function displayFinal1a1() {
	fadeOutContainer("#container3a");
	fadeInContainer("#containerfinal");
}

function displayFinal1a2() {
	fadeOutContainer("#container3a");
	fadeInContainer("#containerfinal");
}

function displayFinal1b1() {
	fadeOutContainer("#container3b");
	fadeInContainer("#containerfinal");
}

function displayFinal1b2() {
	fadeOutContainer("#container3b");
	fadeInContainer("#containerfinal");
}

function displayFinal2a1() {
	fadeOutContainer("#container3c");
	fadeInContainer("#containerfinal");
}

function displayFinal2a2() {
	fadeOutContainer("#container3c");
	fadeInContainer("#containerfinal");
}

function displayFinal2b1() {
	fadeOutContainer("#container3d");
	fadeInContainer("#containerfinal");
}

function displayFinal2b2() {
	fadeOutContainer("#container3d");
	fadeInContainer("#containerfinal");
}

function getRandomInt(max) {
	return Math.floor(Math.random() * max);
}

// AUDIO FUNCTIONS

// 1 - INTRO
const player1 = new Plyr('#intro_audio', {
	controls: ['play-large', 'play', 'progress', 'current-time']
});

// 2B - UNSETTLING
const player2b = new Plyr('#unsettling_audio', {
	controls: ['play-large', 'play', 'progress', 'current-time']
});

// 3A - HATE ME
const player3a = new Plyr('#hateme_audio', {
	controls: ['play-large', 'play', 'progress', 'current-time']
});

// 3B - THAT THING
const player3b = new Plyr('#thatthing_audio', {
	controls: ['play-large', 'play', 'progress', 'current-time']
});

// 3C - I JUST WANNA LOVE
const player3c = new Plyr('#ijustwannalove_audio', {
	controls: ['play-large', 'play', 'progress', 'current-time']
});

// FINAL MESSAGE
const playerFinal = new Plyr('#final_audio', {
	controls: ['play-large', 'play', 'progress', 'current-time']
});

// END AUDIO FUNCTIONS

// opening logo animation

// for iphone low power mode stopping autoplay video - hide video
const videoElement = document.getElementById('watercolorIntro');
videoElement.play().then(() => {}).catch((error) => {
	$("#watercolorIntro").css("display", "none");
});

// add a random number to the logo img src to get it to play every time
var randomNum = getRandomInt(2000);
var openingLogoImgSrc = "assets/mixedemotionsanimated-noloop-crop.gif" + "?rnd=" + randomNum
$("#openingLogo").attr("src", openingLogoImgSrc);

setTimeout(() => {
	$("#openingLogoContainer").css({'display': 'flex'});
}, 1000);

setTimeout(() => {
	$("#startButton").css({'pointer-events': 'auto'});
	$("#startButton").css({'opacity': '1'});
	// make the intro audio box appear
	setTimeout(() => {
		$("#introaudiocontainer").css({'pointer-events': 'auto'});
		$("#introaudiocontainer").css({'opacity': '1'});
	}, "50");
}, 6200);

// start button listener

const startButton = document.getElementById("startButton");
startButton.addEventListener("click", function() {
	fadeOutContainer("#openingLogoContainer");
	fadeInContainer("#container1");
});
