document.addEventListener('DOMContentLoaded', () => {
    const inputComponent = [
      ...document.querySelectorAll<HTMLInputElement>('input[type="number"].app-elem-input'),
    ];
  
    const computeResult = () => {
      const result = inputComponent.reduce(
        (result, inputComponent) => result + inputComponent.valueAsNumber,
        0,
      );
  
      const output = document.querySelector<HTMLOutputElement>('output.app-elem-output');
      if(output !== null) {
        output.value = `${result}`;
      } else {
        console.error('output.app-elem-output not found');
      }    
    };
  
    inputComponent.forEach((inputComponent) => {
      inputComponent.addEventListener('change',computeResult);
    });
  
    computeResult();
  });
  