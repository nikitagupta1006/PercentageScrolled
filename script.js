var imageSection = document.getElementById('image-section');
var percent = document.getElementById('percent-value');
var coordinates = imageSection.getBoundingClientRect();
var height = coordinates.height;
var innerDiv = document.getElementById('inner-div');

window.addEventListener('scroll', function() {
    let position = imageSection.getBoundingClientRect();
    let bottom = position.bottom;
    let top = position.top;
    let percentage = 0.0;
    if ((top > this.window.innerHeight) || (top >= 0 && top <= this.window.innerHeight &&
            bottom > this.window.innerHeight)) {
        percentage = 0;
    } else if (top <= 0 && bottom >= 0 && bottom > this.window.innerHeight) {
        percentage = (height - bottom) * 100 / height;
    } else if (bottom < this.window.innerHeight && bottom >= 0) {
        percentage = (height - bottom) * 100 / height;
    } else {
        percentage = 100;
    }

    percent.textContent = percentage + "%";

    innerDiv.style.display = "hidden";
    innerDiv.style.width = percentage + "%";

});