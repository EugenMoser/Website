import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// examples 1:
//  const className = cn('bg-red-500', 'text-white', 'p-4');
// console.log(className); // Ausgabe: "bg-red-500 text-white p-4"

// examples 2:
// const isActive = true;
// const className = cn('bg-red-500', isActive && 'text-white', 'p-4');
// console.log(className); // Ausgabe: "bg-red-500 text-white p-4"

// examples 3:
// const className = cn(['bg-red-500', 'text-white'], 'p-4');
// console.log(className); // Ausgabe: "bg-red-500 text-white p-4"

// examples 4:
// const className = cn('bg-red-500', 'bg-blue-500', 'text-white');
// console.log(className); // Ausgabe: "bg-blue-500 text-white"

// examples 5:
// const className = cn({
//   'bg-red-500': true,
//   'text-white': false,
//   'p-4': true
// });
// console.log(className); // Ausgabe: "bg-red-500 p-4"
