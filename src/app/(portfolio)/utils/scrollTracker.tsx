import { SECTIONS as sections } from '../constants/constants.js';

//get the current section based on scroll position

export function handleScroll(): string {
  let activeSection = 'about';

  const mySections = sections.map((link) =>
    document.querySelector(link.href)
  );

  const scrollPosition = window.scrollY;
  mySections.forEach((section) => {
    if (section) {
      const element = section as HTMLElement;
      console.log('offsetTop', element.offsetTop);
      console.log('clientHeight', element.clientHeight);
      console.log('scrollPosition', scrollPosition);
      console.log(' window.innerHeight', window.innerHeight);

      console.log('test', element.offsetTop <= scrollPosition);
      console.log(
        'test2',
        element.offsetTop + element.clientHeight > scrollPosition
      );

      //   if (
      //     element.offsetTop <= scrollPosition &&
      //     //4652 <= 0
      //     element.offsetTop + element.clientHeight > scrollPosition
      //     //4652 + 718 > 0
      //   ) {
      //     activeSection = element.id;
      //   }
      // }
      if (
        element.offsetTop <= scrollPosition + element.clientHeight * 0.3 &&
        //4652 <= 0
        element.offsetTop + element.clientHeight > scrollPosition
        //4652 + 718 > 0
      ) {
        activeSection = element.id;
      }
    }
  });
  return activeSection;
}
