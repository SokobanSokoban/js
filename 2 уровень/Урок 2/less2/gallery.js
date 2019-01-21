var images = [
  {
    thumb: 'https://i.ytimg.com/vi/mK72EwuxZAU/hqdefault.jpg',
    original: 'https://i.ytimg.com/vi/mK72EwuxZAU/hqdefault.jpg',
  },
  {
    thumb: 'http://www.lotovideo.lotoazart.com/uploads/thumbs/a5d398c72-1.jpg',
    original: 'http://www.lotovideo.lotoazart.com/uploads/thumbs/a5d398c72-1.jpg',
  },
  {
    thumb: 'https://f3.upet.com/thumbnail/b5yD6OIvwE/2.jpg',
    original: 'https://f3.upet.com/thumbnail/b5yD6OIvwE/2.jpg',
  },
  {
    thumb: 'https://bipbap.ru/wp-content/uploads/2017/12/65620375-6b2b57fa5c7189ba4e3841d592bd5fc1-800-640x426.jpg',
    original: 'https://bipbap.ru/wp-content/uploads/2017/12/65620375-6b2b57fa5c7189ba4e3841d592bd5fc1-800-640x426.jpg',
  }
];

var $thumbnails = document.getElementById('thumbnails');
var $original = document.getElementById('original');

for(var i = 0; i < images.length; i++) {
  var $image = document.createElement('img');
  $image.src = images[i].thumb;

  var $link = document.createElement('a');
  $link.href = images[i].original;
  $link.appendChild($image);

  var $item = document.createElement('li');
  $item.appendChild($link);

  $thumbnails.appendChild($item);
}

$thumbnails.addEventListener('click', handleThumbnailClick)

function handleThumbnailClick(event) {
  var src = event.target.parentNode.href;
  var $image = document.createElement('img');
  $image.src = src;

  $original.innerHTML = '';
  $original.appendChild($image);

  event.preventDefault();
}