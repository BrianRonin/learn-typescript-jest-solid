/* eslint-disable */

/* recomendado */

// Condicional // Talvez o elemento esteja la
const body = document.querySelector('body');
if (body) body.style.background = 'red';

// Type assertion // Certeza que o body esta la
const body3 = document.querySelector('body') as HTMLBodyElement;
body3.style.background = 'red';

// HTMLElement // Certeza que o input esta la
const input = document.querySelector('.input') as HTMLInputElement;
input.value = 'Qualquer coisa'

/* Não recomendado */

// Non-null assertion (!)
const body2 = document.querySelector('body')!;
body2.style.background = 'red';

// Type assertion
const body4 = (document.querySelector('body') as unknown) as number;




export default 'ronin'
