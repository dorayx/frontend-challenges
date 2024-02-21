export class CardsModule {
  private elActive: HTMLElement | null = null;
  private destroyHandlers: (() => void)[] = [];

  static init(root: HTMLElement) {
    return new CardsModule(root);
  }

  private constructor(private root: HTMLElement) {
    this.setDefaultActive();
    this.initClick();
    this.initA11y();
  }

  public destroy() {
    this.destroyHandlers.forEach((handler) => handler());
  }

  private initClick() {
    const handler = (e: MouseEvent) => {
      const elTarget = e.target as HTMLElement;

      if (elTarget.classList.contains('cards_panel')) {
        this.setActive(elTarget);
      }
    };

    this.root.addEventListener('click', handler);
    this.destroyHandlers.push(() => this.root.removeEventListener('click', handler));
  }

  private initA11y() {
    const handler = ({ key }: KeyboardEvent) => {
      if (!this.elActive) {
        return;
      }

      if (key !== 'ArrowRight' && key !== 'ArrowLeft') {
        return;
      }

      const index = Array.from(this.root.children).indexOf(this.elActive);
      const newIndex = key === 'ArrowRight' ? index + 1 : index - 1;
      const newActiveCard = this.root.children[newIndex % this.root.children.length] as HTMLElement;

      this.setActive(newActiveCard);
    };

    this.root.addEventListener('keydown', handler);
    this.destroyHandlers.push(() => this.root.removeEventListener('keydown', handler));
  }

  private setDefaultActive() {
    this.setActive(this.root.children[0] as HTMLElement);
  }

  private setActive(el: HTMLElement) {
    this.elActive?.classList.remove('cards_panel--active');
    this.elActive?.setAttribute('aria-selected', 'false');
    this.elActive?.setAttribute('tabindex', '-1');

    this.elActive = el;
    this.elActive.focus();
    this.elActive.classList.add('cards_panel--active');
    this.elActive.setAttribute('aria-selected', 'true');
    this.elActive.setAttribute('tabindex', '0');
  }
}
