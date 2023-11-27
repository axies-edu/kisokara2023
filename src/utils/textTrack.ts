export const showTextTracks = (videoElement: HTMLVideoElement) => {
  const textTracks = videoElement.textTracks;
  for (const textTrack of textTracks) {
    textTrack.mode = 'showing';
  }
};

export const hideTextTracks = (videoElement: HTMLVideoElement) => {
  const textTracks = videoElement.textTracks;
  for (const textTrack of textTracks) {
    textTrack.mode = 'hidden';
  }
};
