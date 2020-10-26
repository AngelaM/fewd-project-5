//Inspired by https://www.w3schools.com/howto/howto_js_filter_lists.asp

function myFilter() {
    let caption;

    let userInput = document.getElementById('search');
    let filter = userInput.value.toUpperCase();

    let gallery = document.getElementById('gallery');
    let images = gallery.getElementsByTagName('a');

    for (let i=0; i< images.length; i++) {
        caption = images[i].getAttribute('data-caption');
        if (caption.toUpperCase().includes(filter)) {
            images[i].style.display = "";
        } else {
            images[i].style.display = "none";
        }
    }
}