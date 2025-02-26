import { twMerge } from 'tailwind-merge';

interface Props {
  isEn?: boolean;
  currentSlug: string;
}

const LanguageButton = ({ isEn, currentSlug }: Props) => {
  return (
    <div
      className={twMerge(
        'fixed top-[1.15625rem] flex items-center rounded-2xl bg-white p-1 text-[0.6875rem]/normal font-bold md:text-xs/normal xl:absolute xl:inset-auto xl:right-10 xl:w-fit',
        isEn ? 'right-[7.8125rem]' : 'right-[6.875rem]'
      )}
    >
      <a
        href={isEn ? '' : '/en' + (currentSlug === '/' ? '' : currentSlug)}
        className={twMerge(
          'block rounded-2xl px-2 uppercase md:py-0.5',
          isEn ? 'bg-gray-900 text-white' : 'text-gray-600 hover:text-gray-900'
        )}
        aria-label="English"
      >
        En<span className="sr-only md:not-sr-only md:inline">glish</span>
      </a>
      <a
        href={
          isEn
            ? currentSlug === '/en'
              ? '/'
              : currentSlug.replace(/^\/en/, '')
            : ''
        }
        className={twMerge(
          'block rounded-2xl px-2 uppercase md:py-0.5',
          isEn ? 'text-gray-600 hover:text-gray-900' : 'bg-gray-900 text-white'
        )}
        aria-label="Japanese"
      >
        Ja<span className="sr-only md:not-sr-only md:inline">panese</span>
      </a>
    </div>
  );
};

export default LanguageButton;
