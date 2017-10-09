var quotes = [
	"Java<span class='txt-span-color'>Developer</span>",
	
	//"“It is important that students bring a certain ragamuffin, barefoot irreverence to their studies; they are not here to worship what is known, but to question it.”  <br><br>—  Jacob Bronowski"
];

var index = 0;
var max = quotes.length - 1;
var delay = .02;

function random(min, max){
	return (Math.random() * (max - min)) + min;
}

function cycleQuotes(arr, i, sel){
	var el = $(sel);
	var message = arr[i];
	el.html(message);
	var split = new SplitText(el);
	var time = split.chars.length * delay;
	
	$(split.chars).each(function(i){
		TweenMax.from($(this), time, {
			opacity: 0,
			x: 0,
			y: random(-200, 200),
			z: random(500, 1000),
			// scale: .1,
			delay: i * delay,
			yoyo: true,
			repeat: -1,
			repeatDelay: time * 4,
			ease: Power1.easeOut
		});
	});
	
	index = index == max ?  0 : (index + 1);

	setTimeout(function(){
		
		cycleQuotes(quotes, index, ".split");
	}, ((time * 4) + (time * 4)) * 1000);
	
}

$(window).on("load",function(){
    
  //  alert("Khouly");
	//cycleQuotes(quotes, index, ".split");
});

// -----------------------------------------------------------------
 
function kill(){
    splitTextTimeline.clear().time(0);
    mySplitText.revert();
}

function textAnimmation(){
    kill();
    mySplitText.split({type:"chars, words"}) 
    splitTextTimeline.staggerFrom(mySplitText.chars, 0.6, {scale:4, autoAlpha:0,  rotationX:-180,  transformOrigin:"100% 50%", ease:Back.easeOut}, 0.02);
}

var $quote = $(".quote"),
mySplitText = new SplitText($quote, {type:"words"}),
splitTextTimeline = new TimelineLite();

TweenLite.set($quote, {perspective:400});

textAnimmation();