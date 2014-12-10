var squareoneAPI = (function () {

	var public = {};

	function shuffle(array) {
	  var currentIndex = array.length, temporaryValue, randomIndex ;

	  // While there remain elements to shuffle...
	  while (0 !== currentIndex) {

	    // Pick a remaining element...
	    randomIndex = Math.floor(Math.random() * currentIndex);
	    currentIndex -= 1;

	    // And swap it with the current element.
	    temporaryValue = array[currentIndex];
	    array[currentIndex] = array[randomIndex];
	    array[randomIndex] = temporaryValue;
	  }

	  return array;
	}

	function makeItHappen() {

	  $(".avatar").hide();
	  
	  $("#saltShaker").on("click", function() {
	    
	    $(".avatar").show();
	    
	    $(this).addClass("animated shake");
	    
	    shuffle(data);
	    
	    /*console.log(data);*/
	    
	    $("#on").html(data[0].on);
	    $("#dude1").html(data[0].name1);
	    $("#title1").html(data[0].title1);
	    $("#head1").attr("src", data[0].img1);
	    $("#p1").html('"' + data[0].advice1 + '"');
	    $("#dude2").html(data[0].name2);
	    $("#title2").html(data[0].title2);
	    $("#head2").attr("src", data[0].img2);
	    $("#p2").html('"' + data[0].advice2 + '"');

	    $("#on").addClass("animated fadeIn");
	    $("#dude1").addClass("animated bounceIn");
	    $("#head1").addClass("animated bounceInDown");
	    $("#title1").addClass("animated fadeInLeft");
	    $("#p1").addClass("animated bounceInUp");
	    $("#dude2").addClass("animated bounceIn");
	    $("#head2").addClass("animated bounceInDown");
	    $("#title2").addClass("animated fadeInRight");
	    $("#p2").addClass("animated bounceInUp");

	    setTimeout(function() {
	      $("#saltShaker").removeClass("animated shake");
	    }, 500);
	    
	    setTimeout(function() {
	    	$("#on").removeClass("animated fadeIn");
	      $("#dude1").removeClass("animated bounceIn");
	      $("#head1").removeClass("animated bounceInDown");
	      $("#title1").removeClass("animated fadeInLeft");
	      $("#p1").removeClass("animated bounceInUp");
	      $("#dude2").removeClass("animated bounceIn");
	      $("#head2").removeClass("animated bounceInDown");
	      $("#title2").removeClass("animated fadeInRight");
	      $("#p2").removeClass("animated bounceInUp");
	    }, 1000);

	  });

	}

	// INIT FUNCTION
	function init() {

		// CALL INIT FUNCTIONS
		console.log("squareoneAPI loaded...");
		makeItHappen();
		
	}

	// PUBLIC FUNCTIONS
	public.init = init;


	// RETURN PUBLIC FUNCTIONS
	return public;

}());

$(document).on("ready", squareoneAPI.init);
