import SubtitledVideoOpenButton from './SubtitledVideoOpenButton';
import VideoOpenButton from './VideoOpenButton';
import type { Keyword } from '../contents/data';
import type { VideoData } from '../utils/getVideosData';

interface Props {
  id: number;
  title: string;
  description: string;
  allKeywords: Keyword[];
  keywordIds: number[] | undefined;
  videosData: VideoData[];
}

const Card = ({
  id,
  title,
  description,
  allKeywords,
  keywordIds,
  videosData,
}: Props) => {
  const imageSrc = `${id.toString().padStart(2, '0')}.jpg`;
  const currentVideosData = videosData.filter(
    (data) => data.parentStoryId === id
  );
  return (
    <div
      id={`card-${id}`}
      className="flex h-full flex-col overflow-hidden rounded-[2rem] bg-white shadow-[0_0_1rem_rgba(31,100,164,0.08)]"
    >
      <img
        src={`./assets/images/${imageSrc}`}
        alt=""
        width="320"
        height="180"
        className="aspect-video w-full bg-gray-200 object-cover"
      />
      <div className="flex basis-full flex-col p-4 pb-6 sm:p-6">
        <div className="mb-4">
          <p className="font-barlow leading-tight">
            STORY {id.toString().padStart(2, '0')}
          </p>
          <h2 className="mb-3 mt-1 flex text-xl font-bold leading-normal md:text-2xl">
            {title}
          </h2>
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
          <p className="mt-3 text-xs leading-relaxed sm:text-sm sm:leading-relaxed">
            {description}
          </p>
        </div>
        <div className="mt-auto flex justify-stretch gap-2">
          {currentVideosData.map(({ id, type }) => {
            return (
              <div
                key={id}
                className="flex basis-1/2 flex-col items-center gap-2"
              >
                <VideoOpenButton videoId={id} videoType={type} />
                <SubtitledVideoOpenButton videoId={id} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Card;
