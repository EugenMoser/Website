import { SECTIONS as sections } from '../../constants/(portfolio)/constants.js';

//get the current section based on scroll position

export function handleScroll(): string {
  let activeSection = '';

  const mySections = sections.map((link) =>
    document.querySelector(link.href)
  );

  const scrollPosition = window.scrollY;
  mySections.forEach((section) => {
    if (section) {
      const element = section as HTMLElement;

      if (
        element.offsetTop <= scrollPosition &&
        element.offsetTop + element.clientHeight > scrollPosition
      ) {
        activeSection = element.id;
      }
    }
  });
  return activeSection;
}
