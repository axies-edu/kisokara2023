import { useEffect, useRef } from 'react';
import MicroModal from 'micromodal';
import {
  addScrollbarWidth,
  getScrollbarWidth,
  removeScrollbarWidth,
} from '../utils/scrollbarWidth';
import { showTextTracks, hideTextTracks } from '../utils/textTrack';

const useMicromodal = () => {
  const scrollbarWidthRef = useRef<number>(0);
  const activeVideoElementRef = useRef<HTMLVideoElement | null>(null);
  const isTextTrackVisibleRef = useRef<boolean>(false);
  const subtitledVideoTriggersRef = useRef<NodeList>(null);

  useEffect(() => {
    subtitledVideoTriggersRef.current = document.querySelectorAll(
      '.js-subtitled-video-trigger'
    );

    const handleClickSubtitledVideoTrigger = () => {
      isTextTrackVisibleRef.current = true;
    };
    subtitledVideoTriggersRef.current.forEach((subtitledVideoTrigger) => {
      subtitledVideoTrigger.addEventListener(
        'click',
        handleClickSubtitledVideoTrigger
      );
    });

    const updateScrollbarWidth = () => {
      scrollbarWidthRef.current = getScrollbarWidth();
    };
    window.addEventListener('resize', updateScrollbarWidth);

    const onShow = (modal?: HTMLElement, trigger?: HTMLElement) => {
      if (!modal || !trigger) return;

      activeVideoElementRef.current = modal.querySelector('video');
      if (!activeVideoElementRef.current) return;

      isTextTrackVisibleRef.current
        ? showTextTracks(activeVideoElementRef.current)
        : hideTextTracks(activeVideoElementRef.current);

      activeVideoElementRef.current.load();
      activeVideoElementRef.current.focus();
      addScrollbarWidth(scrollbarWidthRef.current);
    };

    const onClose = () => {
      activeVideoElementRef.current.pause();
      activeVideoElementRef.current = null;
      isTextTrackVisibleRef.current = false;
      removeScrollbarWidth();
    };

    MicroModal.init({
      onShow,
      onClose,
      disableScroll: true,
      disableFocus: false,
    });

    return () => {
      subtitledVideoTriggersRef.current.forEach((subtitledVideoTrigger) => {
        subtitledVideoTrigger.removeEventListener(
          'click',
          handleClickSubtitledVideoTrigger
        );
      });
      window.removeEventListener('resize', () => updateScrollbarWidth);
    };
  });
};

export default useMicromodal;
