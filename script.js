const searchInput = document.getElementById('search-input');
const resultArtist = document.getElementById('result-artist'); 
const resultPlaylist = document.getElementById('result-playlists');
const url = 'http://localhost:3000/artists';

function requestApi(searchTerm){
  const searchUrl = url + `?name_like=${searchTerm}`
  fetch(searchUrl)
    .then((response) => response.json())
    .then((result) => displayResults(result))
}

function displayResults(result) {
  if(result.length === 0)
    return;

  resultPlaylist.classList.add('hidden');
  const artistName = document.getElementById('artist-name');
  const artistImage = document.getElementById('artist-img');

  
  result.forEach(element => {
    artistName.innerText = element.name;
    artistImage.src = element.urlImg;
  });

  resultArtist.classList.remove('hidden');
}

document.addEventListener('input', () => {
  const searchTerm = searchInput.value.toLowerCase();
  if(searchTerm === ''){
    resultArtist.classList.add('hidden');
    resultPlaylist.classList.remove('hidden');
    return;
  }

  requestApi(searchTerm);
})