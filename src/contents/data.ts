import getVideosData from '../utils/getVideosData';
import type { VideoData } from '../utils/getVideosData';

export const videosData: VideoData[] = getVideosData();

export interface Keyword {
  id: number;
  value: string;
  label: string;
}

export const allKeywords: Keyword[] = [
  { id: 0, value: '著作物', label: '著作物' },
  { id: 1, value: '著作者', label: '著作者' },
  { id: 2, value: '公正な利用', label: '公正な利用' },
  { id: 3, value: '著作者の権利の保護', label: '著作者の権利の保護' },
  { id: 4, value: '著作財産権', label: '著作財産権' },
  { id: 5, value: '公衆送信権', label: '公衆送信権' },
  { id: 6, value: '送信可能化権', label: '送信可能化権' },
  { id: 7, value: '著作者人格権', label: '著作者人格権' },
  { id: 8, value: '公表権', label: '公表権' },
  { id: 9, value: '氏名表示権', label: '氏名表示権' },
  { id: 10, value: '同一性保持権', label: '同一性保持権' },
  { id: 11, value: 'みなし著作者人格権', label: 'みなし著作者人格権' },
  { id: 12, value: '保護期間', label: '保護期間' },
  { id: 13, value: '権利制限規定', label: '権利制限規定' },
  { id: 14, value: '利用許諾', label: '利用許諾' },
  { id: 15, value: '著作権法35条', label: '著作権法35条' },
  { id: 16, value: '授業目的公衆送信補償金', label: '授業目的公衆送信補償金' },
  { id: 17, value: '複製権', label: '複製権' },
  { id: 18, value: 'SNS', label: 'SNS' },
  { id: 19, value: '罰則', label: '罰則' },
  { id: 20, value: '親告罪', label: '親告罪' },
  { id: 21, value: '利用規約', label: '利用規約' },
  { id: 22, value: 'ライセンス', label: 'ライセンス' },
  { id: 23, value: 'フリー素材', label: 'フリー素材' },
  { id: 24, value: '引用', label: '引用' },
  { id: 25, value: '公表', label: '公表' },
  { id: 26, value: '出所の明示', label: '出所の明示' },
];

export interface StoryData {
  id: number;
  title: string;
  description: string;
  keywordIds: number[];
}

export const storiesData: StoryData[] = [
  {
    id: 1,
    title: 'そもそも著作権とは',
    description:
      '映画など違法ダウンロードが禁止されているもの、オープンソースのような誰でもダウンロードできるもの、その違いが知りたくなった3人は先生の元へ向かいます。',
    keywordIds: [0, 1, 2, 3],
  },
  {
    id: 2,
    title: '著作物を公衆に送信する権利',
    description:
      'カスミさんが作成した動画をSNSで公開しようとするも「著作権違反に当たる」と言われて驚くナオヤくん。著作権にはどのような権利があるのでしょうか？',
    keywordIds: [4, 5, 6],
  },
  {
    id: 3,
    title: '著作者が持つ人格的な権利',
    description:
      '映画など違法ダウンロードが禁止されているもの、オープンソースのような誰でもダウンロードできるもの、その違いが知りたくなった3人は先生の元へ向かいます。',
    keywordIds: [7, 8, 9, 10, 11],
  },
  {
    id: 4,
    title: '著作物の保護期間と利用の仕方',
    description:
      '映画など違法ダウンロードが禁止されているもの、オープンソースのような誰でもダウンロードできるもの、その違いが知りたくなった3人は先生の元へ向かいます。',
    keywordIds: [12, 13, 14],
  },
  {
    id: 5,
    title: '学校教育に関わりの深い特別なルール',
    description:
      '映画など違法ダウンロードが禁止されているもの、オープンソースのような誰でもダウンロードできるもの、その違いが知りたくなった3人は先生の元へ向かいます。',
    keywordIds: [15, 13, 16],
  },
  {
    id: 6,
    title: 'SNSで著作権侵害？',
    description:
      '映画など違法ダウンロードが禁止されているもの、オープンソースのような誰でもダウンロードできるもの、その違いが知りたくなった3人は先生の元へ向かいます。',
    keywordIds: [17, 5, 18, 19, 20],
  },
  {
    id: 7,
    title: '利用規約を読みましょう',
    description:
      '映画など違法ダウンロードが禁止されているもの、オープンソースのような誰でもダウンロードできるもの、その違いが知りたくなった3人は先生の元へ向かいます。',
    keywordIds: [21, 22, 23],
  },
  {
    id: 8,
    title: '引用について学ぶ',
    description:
      '映画など違法ダウンロードが禁止されているもの、オープンソースのような誰でもダウンロードできるもの、その違いが知りたくなった3人は先生の元へ向かいます。',
    keywordIds: [24, 25, 26],
  },
];
