const setDefaultVolume = (volume: number) => {
  const videos = document.querySelectorAll('video');
  videos.forEach((video) => {
    video.volume = volume;
  });
};

export default setDefaultVolume;
