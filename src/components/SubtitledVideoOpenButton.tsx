import { twJoin } from 'tailwind-merge';

interface Props {
  videoId: string;
  isEn?: boolean;
}

const SubtitledVideoOpenButton = ({ videoId, isEn }: Props) => {
  return (
    <button
      data-micromodal-trigger={`modal-${videoId}`}
      className={twJoin(
        'js-subtitled-video-trigger flex w-full items-center justify-center gap-2 rounded-full p-2 text-xs leading-tight text-neutral-600 outline-none hover:text-neutral-500 sm:text-sm',
        'focus-visible:bg-neutral-50 focus-visible:ring-1 focus-visible:ring-gray-400'
      )}
    >
      <span className="flex items-center gap-2 border-b border-neutral-400 pb-1">
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="0.5"
            y="1.5"
            width="15"
            height="13"
            rx="2.5"
            stroke="currentColor"
          ></rect>
          <rect x="3" y="8" width="10" height="1" fill="currentColor"></rect>
          <rect x="3" y="11" width="3" height="1" fill="currentColor"></rect>
          <rect x="7" y="11" width="6" height="1" fill="currentColor"></rect>
        </svg>
        {isEn ? 'With subtitle' : '字幕ありで見る'}
      </span>
    </button>
  );
};

export default SubtitledVideoOpenButton;
