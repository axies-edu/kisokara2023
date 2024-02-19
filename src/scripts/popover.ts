const popover = (triggerSelector: string, containerSelector: string) => {
  const trigger = document.querySelector(triggerSelector);
  const container = document.querySelector(containerSelector);
  const closeTriggers = container.querySelectorAll<HTMLElement>(
    '.js-toc-close-trigger'
  );

  const displayClassNames = ['!opacity-100', '!visible', '!translate-y-0'];
  let isOpen = false;

  const changeAriaExpanded = (state: boolean) => {
    const booleanValue = state.toString();
    container.setAttribute('aria-expanded', booleanValue);
    trigger.setAttribute('aria-expanded', booleanValue);
  };

  const changeState = (state: boolean) => {
    if (state === isOpen) return;
    changeAriaExpanded(state);
    isOpen = state;
  };

  const displayContainer = () => {
    container.classList.add(...displayClassNames);
  };

  const hideContainer = () => {
    container.classList.remove(...displayClassNames);
  };

  const openPopover = () => {
    displayContainer();
    changeState(true);
  };

  const closePopover = () => {
    hideContainer();
    changeState(false);
  };

  const focusTrap = () => {
    const tabbableElements = container.querySelectorAll<HTMLElement>('a');
    const firstTabbable = tabbableElements[0];
    const lastTabbable = tabbableElements[tabbableElements.length - 1];

    firstTabbable.addEventListener(
      'transitionend',
      () => {
        firstTabbable.focus();
      },
      { once: true }
    );

    firstTabbable.addEventListener('keydown', (event: KeyboardEvent) => {
      if (event.key !== 'Tab' || !event.shiftKey) return;
      event.preventDefault();
      lastTabbable.focus();
    });
    lastTabbable.addEventListener('keydown', (event: KeyboardEvent) => {
      if (event.key !== 'Tab' || event.shiftKey) return;
      event.preventDefault();
      firstTabbable.focus();
    });
  };

  const onClickTrigger = () => {
    if (isOpen) {
      closePopover();
    } else {
      openPopover();
      focusTrap();
    }
  };

  const onClickCloseTrigger = () => {
    if (!isOpen) return;
    closePopover();
  };

  const onClickOutsideContainer = ({ target }) => {
    if (!isOpen || target.closest(`${triggerSelector}, ${containerSelector}`))
      return;
    closePopover();
  };

  const onKeyDownEsc = (event) => {
    if (!isOpen || event.key !== 'Escape') return;
    event.preventDefault();
    closePopover();
  };

  trigger.addEventListener('click', onClickTrigger);
  closeTriggers.forEach((closeTrigger) => {
    closeTrigger.addEventListener('click', onClickCloseTrigger);
  });
  document.addEventListener('click', onClickOutsideContainer);
  window.addEventListener('keydown', onKeyDownEsc);
};

export default popover;
