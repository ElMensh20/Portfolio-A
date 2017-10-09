// Quotes about learning from goodreads -- http://www.goodreads.com/quotes/tag/learning

var quotes = [
	"“Wisdom is not a product of schooling but of the lifelong attempt to acquire it.”  <br><br>— Albert Einstein",
	"“Live as if you were to die tomorrow. Learn as if you were to live forever.” <br><br>—  Mahatma Gandhi",
	"“Tell me and I forget, teach me and I may remember, involve me and I learn.” <br><br>— Benjamin Franklin",
	"“Study hard what interests you the most in the most undisciplined, irreverent and original manner possible.”<br><br>— Richard Feynman",
	
	"“It is important that students bring a certain ragamuffin, barefoot irreverence to their studies; they are not here to worship what is known, but to question it.”  <br><br>—  Jacob Bronowski"
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

$(window).on('load', function () {
    cycleQuotes(quotes, index, ".split");
});

//----------------------------------------------- 
/*
See https://www.greensock.com/splittext/ for details. 
This demo uses SplitText which is a membership benefit of Club GreenSock, https://www.greensock.com/club/
*/

// var quote = document.getElementById("quote"),
// mySplitText = new SplitText(quote, {type:"words"}),
// tl = new TimelineMax({delay:0.5, repeat:10, repeatDelay:1}),
// numWords = mySplitText.words.length;

// //prep the quote div for 3D goodness
// TweenLite.set(quote, {transformPerspective:600, perspective:300, transformStyle:"preserve-3d", autoAlpha:1});


// //intro sequence
// for(var i = 0; i < numWords; i++){
// tl.from(mySplitText.words[i], 1.5, {z:randomNumber(-500,300), opacity:0, rotationY:randomNumber(-40, 40)}, Math.random()*1.5);
// }
// tl.from(quote, tl.duration(), {rotationY:180, transformOrigin:"50% 75% 200", ease:Power2.easeOut}, 0);

// //randomly change z of each word, map opacity to z depth and rotate quote on y axis
// for(var i = 0; i < numWords; i++){
// var z = randomNumber(-50,50)
// tl.to(mySplitText.words[i], 0.5, {z:z, opacity:rangeToPercent(z, -50, 50)}, "pulse");
// }
// tl.to(quote, 0.5, {rotationY:20}, "pulse");

// //randomly change z of each word, map opacity to z depth and rotate quote on xy axis
// for(var i = 0; i < numWords; i++){
// var z = randomNumber(-100,100)
// tl.to(mySplitText.words[i], 0.5, {z:z, opacity:rangeToPercent(z, -100, 100)}, "pulse2");
// }
// tl.to(quote, 0.5, {rotationX:-35, rotationY:0}, "pulse2");

// //reset the quote to normal position
// tl.to(mySplitText.words, 0.5, {z:0, opacity:1}, "reset")
// tl.to(quote, 0.5, {rotationY:0, rotationX:0}, "reset");

// //add explode label 2 seconds after reset animation is done
// tl.add("explode", "+=2")
// //add explode effect
// for(var i = 0; i < numWords; i++){
// tl.to(mySplitText.words[i], 0.6, {z:randomNumber(100, 500), opacity:0, rotation:randomNumber(360, 720), rotationX:randomNumber(-360, 360), rotationY:randomNumber(-360, 360)}, "explode+=" + Math.random()*0.2);
// }


// //TRY THIS FOR SUPER-SLOW-MO
// //tl.timeScale(0.2);



// //some helper functions
// function randomNumber(min, max){
// return Math.floor(Math.random() * (1 + max - min) + min);
// }

// function rangeToPercent(number, min, max){
// return ((number - min) / (max - min));
// }