export const showTextTracks = (videoElement: HTMLVideoElement) => {
  const textTracks = videoElement.textTracks;
  const trackElements = videoElement.getElementsByTagName('track');
  for (let i = 0; i < textTracks.length; i++) {
    const textTrack = textTracks[i];
    const trackElement = trackElements[i];

    // trackElement の default 属性を確認
    if (trackElement && trackElement.hasAttribute('default')) {
      textTrack.mode = 'showing';
    } else {
      textTrack.mode = 'hidden';
    }
  }
};

export const hideTextTracks = (videoElement: HTMLVideoElement) => {
  const textTracks = videoElement.textTracks;
  for (const textTrack of textTracks) {
    textTrack.mode = 'hidden';
  }
};
