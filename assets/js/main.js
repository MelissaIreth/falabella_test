$(document).ready(function(){
	catalog.forEach(function(cv){
		var id = cv.id
		var img = cv.imageURL
		var name = cv.name
		var currency = cv.currency
		var price = cv.price

		$(".boxes").append("<div class='box col-md-2' id='"+id+"'>"+
								"<div class='product'>"+
									"<img class='img-responsive' src="+img+">"+
									"<h4>"+name+"</h4> <h4>"+currency+price+"</h4>"+
								"</div>"+
								"<button class='add btn'>Add to cart</button>"+
							"</div>")
		adding()
		removing()
	})

	function adding(){
	$(".add").click(function(){
		$($(this).parent()).appendTo("#products");
		$("#products .box button").replaceWith("<button class='remove btn'>Remove</button>"); 
	})
	}

	function removing(){
	$(".remove").click(function(){
		$($(this).parent()).remove()
	})	
	}
})