import { twMerge } from 'tailwind-merge';

const menuItems = [
  {
    label: 'この教材について',
    href: '/about',
  },
  {
    label: 'CCについて',
    href: '/about_cc',
  },
  {
    label: 'クレジット',
    href: '/credit',
  },
  {
    label: '資料',
    href: '/data',
  },
];

const Navigation = () => (
  <nav
    className={twMerge(
      'js-nav-container invisible fixed left-0 top-16 mx-4 h-min max-w-[17.5rem] shrink-0 basis-1/4 translate-y-1 overflow-hidden rounded-3xl bg-white p-2 py-3 leading-snug opacity-0 shadow-[0_0_1rem_rgba(31,100,164,0.2)] transition-all',
      'md:max-w-md',
      'xl:visible xl:sticky xl:top-8 xl:mx-0 xl:h-min xl:max-h-[calc(100svh-4rem)] xl:max-w-none xl:translate-x-3 xl:translate-y-0 xl:rounded-none xl:bg-transparent xl:p-0 xl:opacity-100 xl:shadow-none'
    )}
  >
    <div className="max-h-[calc(100svh-7.5rem)] overflow-y-auto">
      <ul className="flex flex-col p-1 xl:flex-row xl:bg-sky-100">
        {menuItems.map(({ label, href }) => (
          <li
            key={label}
            className="before:mx-auto before:block before:h-px before:w-11/12 before:bg-sky-100 xl:before:hidden [&:first-child]:before:hidden"
          >
            <a
              href={href}
              className={twMerge(
                'js-toc-close-trigger  my-1.5 flex w-full items-center gap-2 rounded-2xl px-3 py-1.5 text-left outline-none ring-0 transition-all hover:bg-sky-50',
                'xl:my-0 xl:rounded-sm xl:bg-transparent xl:py-0 xl:ring-sky-500',
                'xl:focus-visible:ring-1 xl:focus-visible:ring-offset-2 xl:focus-visible:ring-offset-sky-100',
                'xl:hover:bg-transparent xl:hover:opacity-75'
              )}
            >
              <span className="text-sm xl:border-b xl:border-neutral-400 xl:pb-0.5 xl:leading-relaxed">
                {label}
              </span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  </nav>
);

export default Navigation;
