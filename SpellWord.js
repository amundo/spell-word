export class SpellWord extends HTMLElement {
  constructor() {
      super();
      this.recognition = new webkitSpeechRecognition();
      this.recognition.lang = 'en-US';
      this.recognition.interimResults = false;
      this.recognition.maxAlternatives = 1;

      this.innerHTML = `
<output>Click and say a word to see it spelled!</output>
<button>Spell</button>
      ` 
      
      const button = this.querySelector('button');
      button.textContent = 'Spell Word';
      button.addEventListener('click', () => {
          this.recognition.start();
      });
      
      const output = this.querySelector('output')
      
      this.recognition.addEventListener('result', (event) => {
          const lastResultIndex = event.results.length - 1;
          const lastResult = event.results[lastResultIndex][0].transcript;
          output.textContent = lastResult;
      });
      
  }
}

customElements.define('spell-word', SpellWord);
