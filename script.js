document.addEventListener('DOMContentLoaded', () => {
    const audio = document.getElementById('audio');
    const playButton = document.getElementById('play');
    const pauseButton = document.getElementById('pause');
    const prevButton = document.getElementById('prev');
    const nextButton = document.getElementById('next');
    const progressBar = document.getElementById('progress');
    const songTitle = document.getElementById('song-title');

    // List of songs
    const songs = ['song1.mp3', 'song2.mp3', 'song3.mp3'];
    let currentSongIndex = 0;

    // Load the first song
    audio.src = songs[currentSongIndex];
    songTitle.textContent = 'Song 1'; // Update title as needed

    // Play button event
    playButton.addEventListener('click', () => {
        audio.play();
    });

    // Pause button event
    pauseButton.addEventListener('click', () => {
        audio.pause();
    });

    // Previous button event
    prevButton.addEventListener('click', () => {
        currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
        audio.src = songs[currentSongIndex];
        audio.play();
        updateSongTitle();
    });

    // Next button event
    nextButton.addEventListener('click', () => {
        currentSongIndex = (currentSongIndex + 1) % songs.length;
        audio.src = songs[currentSongIndex];
        audio.play();
        updateSongTitle();
    });

    // Update the progress bar as the song plays
    audio.addEventListener('timeupdate', () => {
        const progress = (audio.currentTime / audio.duration) * 100;
        progressBar.value = progress;
    });

    // Seek functionality for progress bar
    progressBar.addEventListener('input', () => {
        const newTime = (progressBar.value / 100) * audio.duration;
        audio.currentTime = newTime;
    });

    function updateSongTitle() {
        songTitle.textContent = `Song ${currentSongIndex + 1}`;
    }
});
