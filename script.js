

var gallery = new PostGallery();

function PostGallery() {
	this.getJSON = getJSON;


	var postGallery = document.getElementsByClassName('gallery-container')[0];


	function getJSON() {
		$.ajax({
			url: "https://api-practice-wdi.herokuapp.com/posts",
			// data: {
				
			// },
			// dataType: "json",
			success: function(response) {
				console.log(response.posts);
				generatePosts(response.posts);
			}

		});		
	}


	function generatePosts(posts) {

		// using forEach:

		[].forEach.call(posts, function(post, index) {
			var newDiv = "<div class='gallery-item'>"
			newDiv += post.title;
			var imageDivStr = "<div class='gallery-item__img'></div>";
			newDiv += imageDivStr;
			newDiv += "</div>";
			

			

			postGallery.innerHTML += newDiv;

			var imageDiv = document.getElementsByClassName('gallery-item__img')[index];
			console.log(imageDiv);
			imageDiv.style.backgroundImage = "url('" + post.img;

		});


		// using forEach:
		// posts.forEach(function(post) {
		// 	var newDiv = "<div class='gallery-item'>"
		// 	newDiv += post.title;
		// 	newDiv += "</div>";
			
		// 	postGallery.innerHTML += newDiv;

		// 	var imageDiv = "<div class='gallery-item__img'></div>";

		// });

		// var images = document.getElementsByClassName('gallery-item__img');
		// displayImages(images);

		// // Using plain for loop:
		// for (var k = 0; k < posts.length; k++) {

		// 	var newDiv = "<div class='gallery__item'>"
		// 	newDiv += posts[k].title;
		// 	newDiv += "</div>";
		// 	postGallery.innerHTML += newDiv;
		// }


		// function displayImages(imageDivArray, imagesArray) {
		// 	[].forEach.call(imageDivArray, function(div, index) {
		// 		div.style.backgroundImage = "url('" + imagesArray[index]
		// 	})
		// }

		// wrap this in its own display function? along with other crap?
		// postGallery.innerHTML += newDiv;


	}


}


