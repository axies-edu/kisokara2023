import { useEffect, useRef, useState } from 'react';
import Select, { components } from 'react-select';
import colors from 'tailwindcss/colors';
import useMicromodal from '../hooks/useMicromodal';
import CardEn from './CardEn';
import TocEn from './TocEn';
import type { Data, Keyword } from '../contents/data_en';
import type { SelectInstance, InputProps } from 'react-select';

interface Props {
  allKeywords: Keyword[];
  allData: Data[];
}

const CardEnList = ({ allKeywords, allData }: Props) => {
  const [selectedKeyword, setSelectedKeyword] = useState<Keyword | null>(null);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [inputStatus, setInputStatus] = useState<
    'inputStart' | 'inputEnd' | null
  >(null);
  const selectRef = useRef<SelectInstance<Keyword> | null>(null);
  const selectContainerRef = useRef<HTMLDivElement | null>(null);
  const isComposingRef = useRef(false);

  const showData = selectedKeyword
    ? allData.filter((data) => data.keywordIds?.includes(selectedKeyword.id))
    : allData;

  const handleChange = (selectedKeyword: Keyword) => {
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

  const Input = ({ children, ...props }: InputProps) => {
    useEffect(() => {
      if (!selectContainerRef.current) return;
      const inputElement = selectContainerRef.current.querySelector('input');
      inputElement.focus();
    }, []);

    useMicromodal();

    return (
      <components.Input
        {...props}
        onCompositionStart={() => (isComposingRef.current = true)}
        onCompositionEnd={() => {
          isComposingRef.current = false;
          setInputStatus('inputEnd');
        }}
        onKeyDown={() => setInputStatus('inputStart')}
      >
        {children}
      </components.Input>
    );
  };

  return (
    <>
      <div
        ref={selectContainerRef}
        className="mx-auto mb-8 flex max-w-xl flex-col items-center gap-2 px-6 sm:flex-row"
      >
        Narrow down by keyword{' '}
        <Select
          className="min-w-[15rem] grow"
          components={{ Input }}
          isClearable
          isSearchable
          onChange={handleChange}
          options={allKeywords}
          placeholder="Please enter"
          ref={selectRef}
          noOptionsMessage={() => {
            if (isComposingRef.current) {
              return 'Typing...';
            } else {
              return 'No matching keywords';
            }
          }}
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
            noOptionsMessage: (baseStyles) => ({
              ...baseStyles,
              textAlign: 'left',
            }),
            option: (baseStyles, state) => ({
              ...baseStyles,
              backgroundColor:
                state.isFocused || state.isSelected
                  ? colors.sky[100]
                  : 'transparent',
              color: state.isSelected ? colors.sky[600] : colors.neutral[700],
            }),
          }}
        />
      </div>
      <div className="flex flex-row-reverse gap-6 lg:gap-8 2xl:gap-10">
        <ul className="grid auto-rows-max grid-cols-1 gap-6 md:grid-cols-2 lg:gap-8 2xl:grid-cols-3 2xl:gap-10">
          {showData.map((data) => (
            <li key={data.id}>
              <CardEn {...data} allKeywords={allKeywords} />
            </li>
          ))}
        </ul>
        <TocEn
          storiesData={allData}
          onClick={() => {
            clearValue();
            setSelectedKeyword(null);
          }}
        />
      </div>
    </>
  );
};

export default CardEnList;
