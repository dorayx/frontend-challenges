import './style.css';
import { ProgressStepsModule } from '@/progress-steps.module.ts';

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div tabindex="0" role="group" aria-label="Progress Steps"
        class="progress js-progress">
    <ol class="progress__indicator" tabindex="-1">
      <li class="progress__indicator__circle"><span class="sr-only">Step</span>1</li>
      <li class="progress__indicator__circle"><span class="sr-only">Step</span>2</li>
      <li class="progress__indicator__circle"><span class="sr-only">Step</span>3</li>
      <li class="progress__indicator__circle"><span class="sr-only">Step</span>4</li>
    </ol>
    <div class="progress__operators">
      <button class="progress__button" data-btn-prev aria-labelledby="prev-btn-label">
        <span id="prev-btn-label" class="sr-only">Prev to <span data-slot></span></span>
        Prev
      </button>
      <button class="progress__button" data-btn-next aria-labelledby="next-btn-label">
        <span id="next-btn-label" class="sr-only">Next to <span data-slot></span></span>
        Next
      </button>
    </div>
  </div>
`;

document.addEventListener('DOMContentLoaded', () => {
  const root = document.querySelector('.js-progress') as HTMLElement;
  if (!root) {
    throw new Error('Root element not found');
  }

  ProgressStepsModule.init(root);
});
