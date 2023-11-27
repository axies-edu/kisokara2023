import { readdirSync } from 'node:fs';
import path from 'path';

export interface VideoData {
  id: string;
  parentStoryId: number;
  type: VideoType;
}

type Suffix = 'a' | 'b';
export type VideoType = 'story' | 'explanation';

const videoTypes: Record<Suffix, VideoType> = {
  a: 'story',
  b: 'explanation',
};

const getVideosData = (): VideoData[] => {
  const videosDirectory = path.join(process.cwd(), 'public/assets/videos');
  const fileNames = readdirSync(videosDirectory);

  const videosData = fileNames.map((fileName): VideoData => {
    const id = fileName.replace(/\.mp4$/, '');
    const parentStoryId = Number.parseInt(id.slice(0, -1), 10);
    const suffix = id.at(-1) as Suffix;
    const type: VideoType = videoTypes[suffix];

    return {
      id,
      parentStoryId,
      type,
    };
  });

  return videosData;
};

export default getVideosData;
