import { assignComponent as assignInputComponent } from './input-component.js';
function createComponent(template) {
    return template.content.cloneNode(true).firstElementChild;
}
export function assignSectionComponent(globalContainer) {
    const sectionTemplate = document.querySelector('template.app-tmpl-section');
    const updateSectionNumbersAndButtons = () => {
        const sections = [...globalContainer.querySelectorAll('.app-cmp-section')];
        sections.forEach((section, index) => {
            // Update the section number
            const sectionNumberElement = section.querySelector('.section-number');
            if (sectionNumberElement instanceof HTMLElement) {
                sectionNumberElement.textContent = `Section ${index + 1}`;
            }
            // Enable or disable the "Remove Section" button
            const removeButton = section.querySelector('.app-cmd-remove-section');
            if (removeButton instanceof HTMLButtonElement) {
                removeButton.disabled = sections.length === 1;
            }
        });
    };
    const addSection = () => {
        const sectionComponent = createComponent(sectionTemplate);
        // Add "Remove Section" functionality
        const removeButton = sectionComponent.querySelector('.app-cmd-remove-section');
        if (removeButton instanceof HTMLButtonElement) {
            removeButton.addEventListener('click', () => {
                sectionComponent.remove();
                updateSectionNumbersAndButtons(); // Update numbers and buttons after removing
            });
        }
        // Assign input management to the new section
        assignInputComponent(sectionComponent);
        globalContainer.appendChild(sectionComponent);
        updateSectionNumbersAndButtons(); // Update numbers and buttons after adding
    };
    addSection();
    // Ensure this listener is attached only once
    const addSectionButton = document.querySelector('.app-cmd-add-section');
    if (addSectionButton && !addSectionButton.hasListener) {
        addSectionButton.addEventListener('click', addSection);
        addSectionButton.hasListener = true; // Mark the button to prevent duplicate listeners
    }
}
