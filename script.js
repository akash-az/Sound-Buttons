const sounds = ['tom-2','snare','kick-bass','tom-3','tom-4','crash']

sounds.forEach(sound => {
    const btn = document.createElement('button')
    btn.classList.add('btn')

    btn.innerText =sound

    btn.addEventListener('click', () => {
        document.getElementById(sound).play()

    })

    document.getElementById('buttons').appendChild(btn)
})


function stopSongs(){
    sounds.forEach(sound => {
        const song = document.getElementById(sound)

        song.onpause()
        song.currentTime =0;
    })
}