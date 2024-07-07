import { useState } from 'react';

type SectionsProps = {
  href: string;
  label: string;
};

export const sections: SectionsProps[] = [
  {
    href: '#about',
    label: 'About',
  },
  {
    href: '#resume',
    label: 'Resume',
  },
  {
    href: '#education',
    label: 'Education',
  },
  {
    href: '#certifications',
    label: 'Certifications',
  },
  {
    href: '#contact',
    label: 'Contact',
  },
];

//get the current section based on scroll position

export function handleScroll(): string {
  let activeSection = 'about';

  const mySections = sections.map((link) =>
    document.querySelector(link.href)
  );
  const scrollPosition =
    window.scrollY + (window.innerHeight - window.innerHeight + 1);

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
