export class ProgressStepsModule {
  static init(root: HTMLElement) {
    return new ProgressStepsModule(root);
  }

  private readonly elSteps: NodeListOf<HTMLElement>;
  private readonly elButtons: [HTMLButtonElement, HTMLButtonElement];
  private readonly elButtonLabelSlots: [HTMLElement, HTMLElement];
  private destroyHandlers: (() => void)[] = [];

  private currentStep = 0;

  private constructor(private root: HTMLElement) {
    this.elSteps = this.root.querySelectorAll('.progress__indicator__circle');

    this.elButtons = [
      this.root.querySelector<HTMLButtonElement>('[data-btn-prev]')!,
      this.root.querySelector<HTMLButtonElement>('[data-btn-next]')!,
    ];

    this.elButtonLabelSlots = this.elButtons.map((el) => el.querySelector<HTMLElement>('[data-slot]')!) as [
      HTMLElement,
      HTMLElement,
    ];

    this.root.style.setProperty('--steps-count', String(this.elSteps.length));

    this.setDefaultStep();
    this.handleButtonsClick();
    this.handleButtonsKeydown();
  }

  public destroy() {
    this.destroyHandlers.forEach((handler) => handler());
  }

  private setDefaultStep() {
    this.setActiveStep(this.currentStep);
  }

  private handleButtonsClick = () => {
    const handler = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (target.dataset.btnPrev !== undefined) {
        this.movePrev();
      } else if (target.dataset.btnNext !== undefined) {
        this.moveNext();
      }
    };

    this.root.addEventListener('click', handler);
    this.destroyHandlers.push(() => this.root.removeEventListener('click', handler));
  };

  private handleButtonsKeydown = () => {
    const handler = (event: KeyboardEvent) => {
      if (event.key !== 'Enter') {
        return;
      }

      const target = event.target as HTMLElement;
      if (target.dataset.btnPrev !== undefined) {
        this.movePrev();
      } else if (target.dataset.btnNext !== undefined) {
        this.moveNext();
      }
    };

    this.root.addEventListener('keydown', handler);
    this.destroyHandlers.push(() => this.root.removeEventListener('keydown', handler));
  };

  private moveNext() {
    if (this.currentStep < this.elSteps.length) {
      this.currentStep++;
      this.setActiveStep(this.currentStep);
    }
  }

  private movePrev() {
    if (this.currentStep > 0) {
      this.currentStep--;
      this.setActiveStep(this.currentStep);
    }
  }

  private setActiveStep(step: number) {
    this.root.style.setProperty('--current-step', String(step));

    this.elSteps.forEach((el, index) => {
      el.removeAttribute('aria-current');
      el.removeAttribute('aria-live');
      el.removeAttribute('aria-atomic');

      if (index <= step) {
        el.setAttribute('data-active', 'true');
      } else {
        el.removeAttribute('data-active');
      }
    });

    const targetStep = this.elSteps.item(step);
    targetStep?.setAttribute('aria-current', 'step');
    targetStep?.setAttribute('aria-live', 'polite');
    targetStep?.setAttribute('aria-atomic', 'true');

    this.setButtonsState(step);
    this.setButtonLabels(step);
  }

  private setButtonsState(step: number) {
    const [prev, next] = this.elButtons;
    if (step === 0) {
      prev.setAttribute('disabled', 'true');
      next.removeAttribute('disabled');
      next.focus();
    } else if (step === this.elSteps.length - 1) {
      prev.removeAttribute('disabled');
      next.setAttribute('disabled', 'true');
      prev.focus();
    } else {
      prev.removeAttribute('disabled');
      next.removeAttribute('disabled');
    }
  }

  private setButtonLabels(step: number) {
    const [prevSlot, nextSlot] = this.elButtonLabelSlots;

    const prevStep = step > 0 ? this.elSteps.item(step - 1) : null;
    const nextStep = step < this.elSteps.length - 1 ? this.elSteps.item(step + 1) : null;

    prevSlot.textContent = prevStep?.textContent ?? '';
    nextSlot.textContent = nextStep?.textContent ?? '';
  }
}
