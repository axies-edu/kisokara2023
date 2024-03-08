import { twMerge } from 'tailwind-merge';

interface Props {
  videoId: string;
  customLabel: string;
  index: number;
}

const VideoOpenButton = ({ videoId, customLabel, index }: Props) => {
  const isEven = index % 2 === 0;
  const defaultLabel =
    index === 0 ? '物語編を見る' : index === 1 ? '解説編を見る' : '動画を見る';
  return (
    <button
      data-micromodal-trigger={`modal-${videoId}`}
      className={twMerge(
        'flex w-full items-center justify-center gap-2 rounded-full bg-gray-600 px-2 py-3 text-sm font-bold leading-tight text-white outline-none hover:bg-gray-700 sm:text-3.75',
        'focus-visible:ring-1 focus-visible:ring-offset-2',
        isEven
          ? 'bg-sky-600 hover:bg-sky-500 focus-visible:ring-sky-500'
          : 'bg-orange-500 hover:bg-orange-400 focus-visible:ring-orange-400'
      )}
    >
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M11 8L6.5 10.5981L6.5 5.40192L11 8Z"
          fill="currentColor"
        ></path>
        <rect
          x="0.5"
          y="0.5"
          width="15"
          height="15"
          rx="7.5"
          stroke="currentColor"
        ></rect>
      </svg>
      {customLabel ? customLabel : defaultLabel}
    </button>
  );
};

export default VideoOpenButton;
