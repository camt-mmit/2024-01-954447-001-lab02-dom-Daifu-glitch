import { assignComponent as assignInputComponent } from './input-component.js';
import { assignSectionComponent } from './section-component.js';

document.addEventListener('DOMContentLoaded', () => {
  const inputElement = document.querySelector('.app-cmp-section') as HTMLElement | null;
  const sectionElement = document.querySelector('.app-sections-list') as HTMLElement | null;

  if (sectionElement) {
    assignSectionComponent(sectionElement);
  }

  if (inputElement) {
    assignInputComponent(inputElement);
  }
});
