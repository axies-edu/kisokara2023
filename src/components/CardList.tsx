import { useRef, useState } from 'react';
import type { SetStateAction } from 'react';
import Select from 'react-select';
import colors from 'tailwindcss/colors';
import useMicromodal from '../hooks/useMicromodal';
import Card from './Card';
import Toc from './Toc';
import type { StoryData, Keyword } from '../contents/data';
import type { VideoData } from '../utils/getVideosData';
import type { SelectInstance } from 'react-select';

interface Props {
  storiesData: StoryData[];
  videosData: VideoData[];
  allKeywords: Keyword[];
}

const CardList = ({ storiesData, videosData, allKeywords }: Props) => {
  const [selectedKeyword, setSelectedKeyword] = useState<Keyword | null>(null);
  const selectRef = useRef<SelectInstance<Keyword> | null>(null);
  const selectContainerRef = useRef<HTMLDivElement | null>(null);

  const showStoriesData = selectedKeyword
    ? storiesData.filter((storyData) =>
        storyData.keywordIds.includes(selectedKeyword.id)
      )
    : storiesData;

  const handleChange = (selectedKeyword: SetStateAction<Keyword | null>) => {
    setSelectedKeyword(selectedKeyword);
    selectContainerRef.current.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };

  const clearValue = () => {
    if (!selectRef.current) return;
    selectRef.current.clearValue();
  };

  useMicromodal();

  return (
    <>
      <div
        ref={selectContainerRef}
        className="mx-auto mb-8 flex max-w-xl flex-col items-center gap-2 px-6 sm:flex-row"
      >
        キーワードから絞り込む{' '}
        <Select
          ref={selectRef}
          isClearable
          isSearchable={false}
          noOptionsMessage={() => '該当するキーワードがありません'}
          onChange={handleChange}
          options={allKeywords}
          placeholder="選択してください"
          tabSelectsValue
          className="min-w-[15rem] grow"
          styles={{
            control: (baseStyles, state) => ({
              ...baseStyles,
              boxShadow: 'none',
              borderColor: state.isFocused
                ? colors.sky[600]
                : colors.neutral[400],
              '&:hover': {
                borderColor: colors.sky[600],
              },
            }),
            option: (baseStyles, state) => ({
              ...baseStyles,
              backgroundColor: state.isFocused
                ? colors.sky[100]
                : 'transparent',
              color: state.isSelected ? colors.sky[600] : colors.neutral[900],
            }),
          }}
        />
      </div>
      <div className="flex flex-row-reverse gap-6 lg:gap-8 2xl:gap-10">
        <ul className="grid auto-rows-max grid-cols-1 gap-6 md:grid-cols-2 lg:gap-8 2xl:grid-cols-3 2xl:gap-10">
          {showStoriesData.map(({ id, title, description, keywordIds }) => (
            <li key={id}>
              <Card
                id={id}
                title={title}
                description={description}
                allKeywords={allKeywords}
                keywordIds={keywordIds}
                videosData={videosData}
              />
            </li>
          ))}
        </ul>
        <Toc
          storiesData={storiesData}
          onClick={() => {
            clearValue();
            setSelectedKeyword(null);
          }}
        />
      </div>
    </>
  );
};

export default CardList;
