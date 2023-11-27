export const getScrollbarWidth = () => {
  const viewportWidth = window.innerWidth;
  const documentWidth = document.documentElement.clientWidth;
  return viewportWidth - documentWidth;
};

export const addScrollbarWidth = (scrollbarWidth: number) => {
  const elementsTofixScrollbarWidth =
    document.querySelectorAll<HTMLElement>('.js-fix-scrollbar');
  elementsTofixScrollbarWidth.forEach((element) => {
    element.style.paddingRight = `${scrollbarWidth}px`;
  });
};

export const removeScrollbarWidth = () => {
  const elementsTofixScrollbarWidth =
    document.querySelectorAll<HTMLElement>('.js-fix-scrollbar');
  elementsTofixScrollbarWidth.forEach((element) => {
    element.style.paddingRight = '0';
  });
};
