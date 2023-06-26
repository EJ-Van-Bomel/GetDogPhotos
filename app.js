

const breed = document.querySelector('#breed')
const fetch = document.querySelector('#fetch')


fetch.addEventListener('click', async function(e) {
    e.preventDefault();
    const breedVal = breed.value
    const res = await axios.get(`https://dog.ceo/api/breed/${breedVal}/images`);
    const photos = res.data.message;
    for (let i = 0; i< photos.length; i++) {
        const img = document.createElement('img');
        img.src = res.data.message[i];
        const grid = document.querySelector('#image-grid');
        img.style.height = "300px";
        img.style.width = "300px";
        grid.prepend(img)


    }
})

