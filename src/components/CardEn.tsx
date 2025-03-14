import VideoOpenButton from './VideoOpenButton';
import type { Keyword, Video } from '../contents/data_en';

interface Props {
  id: number;
  title: string;
  description: string;
  videos: Video[];
  allKeywords: Keyword[];
  keywordIds?: number[];
  storyLabel?: string;
  hasEnThumbnail?: boolean;
}

const CardEn = ({
  id,
  title,
  description,
  videos,
  allKeywords,
  keywordIds,
  storyLabel,
  hasEnThumbnail,
}: Props) => {
  const imageSrc = `${id.toString().padStart(2, '0')}.jpg`;

  return (
    <div
      id={`card-${id}`}
      className="flex h-full flex-col overflow-hidden rounded-[2rem] bg-white shadow-[0_0_1rem_rgba(31,100,164,0.08)]"
    >
      <img
        src={
          hasEnThumbnail
            ? `../assets/images-en/${imageSrc}`
            : `../assets/images/${imageSrc}`
        }
        alt=""
        width="320"
        height="180"
        className="aspect-video w-full bg-gray-200 object-cover"
        loading={id < 3 ? 'eager' : 'lazy'}
      />
      <div className="flex basis-full flex-col p-4 pb-6 sm:p-6">
        <div className="mb-4">
          <div className="font-barlow leading-tight">
            {storyLabel
              ? storyLabel
              : `STORY ${id.toString().padStart(2, '0')}`}
          </div>
          <h2 className="mb-3 mt-1 flex text-xl font-bold leading-normal md:text-2xl">
            {title}
          </h2>
          {keywordIds?.length > 0 && (
            <ul className="flex flex-wrap gap-1">
              {keywordIds?.map((keywordId) => (
                <li
                  key={keywordId}
                  className="rounded-sm border border-neutral-200 bg-neutral-50 px-1.5 py-1 text-xs leading-none text-neutral-500 sm:text-3.25"
                >
                  {allKeywords[keywordId].label}
                </li>
              ))}
            </ul>
          )}
          <p className="mt-3 text-xs leading-relaxed sm:text-sm sm:leading-relaxed">
            {description}
          </p>
        </div>
        <div className="-mx-1 mt-auto flex flex-wrap justify-stretch gap-2">
          {videos.map((video, index) => {
            return (
              <div
                key={video.id}
                className="flex min-w-[9.5rem] grow basis-[calc(50%-0.5rem)] flex-col items-center gap-2"
              >
                <VideoOpenButton
                  videoId={video.id}
                  customLabel={video.buttonLabel}
                  index={index}
                  isEn
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CardEn;
