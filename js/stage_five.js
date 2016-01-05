function changeImage() {
    var image = document.getElementById('myImage');
    if (image.src.match("bulbon")) {
//first jellyfish picture here        
        image.src = "";
    } else {
//second jellyfish picture here    	
        image.src = "";
    }
}