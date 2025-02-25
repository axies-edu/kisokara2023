import { useEffect } from 'react';
import { twMerge } from 'tailwind-merge';
import popover from '../scripts/popover';
import type { StoryData } from '../contents/data_en';

interface Props {
  storiesData: StoryData[];
  onClick: React.MouseEventHandler<HTMLAnchorElement>;
}

const TocEn = ({ storiesData, onClick }: Props) => {
  useEffect(() => {
    popover('.js-toc-trigger', '.js-toc-container');
  }, []);

  return (
    <nav
      className={twMerge(
        'js-toc-container invisible fixed right-0 top-16 z-10 mx-4 h-min max-h-[40rem] max-w-[22rem] shrink-0 basis-1/4 translate-y-1 overflow-hidden rounded-3xl bg-white p-2 py-3 leading-snug opacity-0 shadow-[0_0_1rem_rgba(31,100,164,0.2)] transition-all',
        'md:max-w-md',
        'xl:visible xl:sticky xl:top-8 xl:mx-0 xl:h-min xl:max-h-[calc(100svh-4rem)] xl:max-w-none xl:translate-y-0 xl:rounded-[2rem] xl:p-2 xl:py-5 xl:opacity-100 xl:shadow-[0_0_1rem_rgba(31,100,164,0.08)]',
        '2xl:basis-1/6'
      )}
    >
      <div className="mx-2 mb-1.5 hidden border-b border-sky-400 pb-2 text-center font-bold text-sky-600 xl:block">
        目次
      </div>
      <div className="max-h-[calc(100svh-7.5rem)] overflow-y-auto outline-none xl:max-h-[30rem] xl:rounded-2xl xl:focus-visible:bg-sky-50/40">
        <ul className="flex flex-col">
          {storiesData.map(({ id, title }) => (
            <li
              key={id}
              className="before:mx-auto before:block before:h-px before:w-11/12 before:bg-sky-100 [&:first-child]:before:hidden"
            >
              <a
                href={`#card-${id}`}
                onClick={onClick}
                className="js-toc-close-trigger my-1.5 flex w-full items-center gap-2 rounded-2xl px-3 py-1.5 text-left outline-none ring-0 transition-all hover:bg-sky-50 focus-visible:bg-sky-50"
              >
                <span className="min-w-[1.25rem] font-barlow text-lg tabular-nums leading-tight text-sky-600">
                  {id}
                </span>
                <span className="text-sm">{title}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default TocEn;
