var flipbookEL = document.getElementById('flipbook');

//disable corners

$(flipbookEL).bind("start", function(event, pageObject, corner) {
    if (corner=="tl" || corner=="tr" || corner=="bl" || corner=="br" ) {
      event.preventDefault();
    }
 });

window.addEventListener('resize', function (e) {
	flipbookEL.style.width = '';
	flipbookEL.style.height = '';
	// $(flipbookEL).turn('size', flipbookEL.clientWidth, flipbookEL.clientHeight);

	if (window.innerWidth < 768) {
		$(flipbookEL).turn('display', 'single');
		$(flipbookEL).turn('size', flipbookEL.clientHeight * 1.15, flipbookEL.clientWidth*1.15);
		$(flipbookEL).css("margin", "auto");
		var newHeight = $(flipbookEL).css("height");
		$(".wrapper").css("height", newHeight);
		$(".wrapper").css("align-items", "baseline");
	}
	else {
		$(flipbookEL).turn('display', 'double');
		$(flipbookEL).turn('size', flipbookEL.clientWidth, flipbookEL.clientHeight);
		var newHeight = $(flipbookEL).css("height");
		$(".wrapper").css("height", newHeight);
		$(".wrapper").css("align-items", "center");
	}
});

$(flipbookEL).turn({
	autoCenter: true
});

if (window.innerWidth < 768) {
	$(flipbookEL).turn('display', 'single');
	$(flipbookEL).turn('size', flipbookEL.clientHeight *1.15, flipbookEL.clientWidth*1.15);
	$(flipbookEL).css("margin", "auto");
	var newHeight = $(flipbookEL).css("height");
	$(".wrapper").css("height", newHeight);
	$(".wrapper").css("align-items", "baseline");
}

else {
	$(flipbookEL).turn('display', 'double');
	$(flipbookEL).turn('size', flipbookEL.clientWidth, flipbookEL.clientHeight);
	var newHeight = $(flipbookEL).css("height");
	$(".wrapper").css("height", newHeight);
	$(".wrapper").css("align-items", "center");
}

// SWIPE STUFF
$("document").ready(function() {
	$("#flipbook")
	.swipeDetector()
	.on("swipeLeft.sd swipeRight.sd", function(event) {
		if (event.type === "swipeLeft") {
			$(flipbookEL).turn("next");
		} else if (event.type === "swipeRight") {
			$(flipbookEL).turn("previous");
		}
	});
});

function nextPage() {
	$(flipbookEL).turn("next");
}

function prevPage() {
	$(flipbookEL).turn("previous");
}


$( "#prevPageText" ).on( "click", function() {
	prevPage();
} );

$( "#nextPageText" ).on( "click", function() {
	nextPage();
} );
