import '@webcomponents/webcomponentsjs/custom-elements-es5-adapter';

customElements.define(
  'icon-svg',
  /**
 * IconSVG
 * @author hyj
 * @version 0.0.1
 * @param {string} src - 图标路径
 * @param {string} color - 图标颜色
 * @param {string} hover-color - 图标悬停颜色
 * @param {number} width - 图标宽度
 * @param {number} height - 图标高度
 */
  class extends HTMLElement {
    eventElement: HTMLDivElement | null = null;

    svgObject: HTMLObjectElement | null = null;

    svgElement: SVGSVGElement | null = null;

    defaultColor: string;

    constructor() {
      super();
      this.defaultColor = '#000000';
    }

    static get observedAttributes() {
      return ['src', 'color', 'width', 'height', 'hover-color'];
    }

    attributeChangedCallback(name: string, oldValue: string, newValue: string) {
      if (oldValue === newValue) {
        return;
      }
      if (name === 'src') {
        this.svgObject?.setAttribute('data', newValue);
      } else if (name === 'width') {
        this.setSize(newValue, this.getAttribute('height') as any | undefined);
      } else if (name === 'height') {
        this.setSize(this.getAttribute('width') as any | undefined, newValue);
      } else if (name === 'color') {
        this.setColors(newValue);
      }
    }

    handleMouseEnter() {
      this.classList.add('is-hover');
      if (this.svgElement && this.getAttribute('hover-color')) {
        this.setColors(this.getAttribute('hover-color') || '');
      }
    }

    handleMouseLeave() {
      this.classList.remove('is-hover');
      if (this.svgElement) {
        this.setColors(this.getAttribute('color') || this.defaultColor);
      }
    }

    connectedCallback() {
    // 当元素被插入到DOM中时执行的代码（可选）
      this.className = 'icon-svg';
      this.style.display = 'inline-flex';
      this.style.alignItems = 'center';
      this.style.position = 'relative';
      const eventElement = document.createElement('div');
      eventElement.style.position = 'absolute';
      eventElement.style.top = '0';
      eventElement.style.left = '0';
      eventElement.style.width = '100%';
      eventElement.style.height = '100%';
      const svgObject = document.createElement('object');
      svgObject.type = 'image/svg+xml';
      svgObject.setAttribute('data', this.getAttribute('src') || ''); // 默认src属性可能为空，需要处理

      this.append(eventElement);
      this.append(svgObject);

      this.eventElement = eventElement;
      this.svgObject = svgObject;
      this.svgObject.addEventListener('load', () => {
        this.svgElement = this.svgObject?.contentDocument?.getElementsByTagName('svg')[0]
        || null;
        this.setColors(this.getAttribute('color') || this.defaultColor);
        this.setSize(this.getAttribute('width') as any | undefined, this.getAttribute('height') as any | undefined);
      });
      // 添加事件监听器
      this.addEventListener('mouseenter', this.handleMouseEnter);
      this.addEventListener('mouseleave', this.handleMouseLeave);
    }

    // eslint-disable-next-line class-methods-use-this
    disconnectedCallback() {
    // 当元素从DOM中移除时执行的代码（可选）
      this.removeEventListener('mouseenter', this.handleMouseEnter);
      this.removeEventListener('mouseleave', this.handleMouseLeave);
    }

    // eslint-disable-next-line class-methods-use-this
    updateStyles() {
    // 根据需要更新样式（这里可以从一个属性或外部样式表中获取样式）
    // 例如，你可以解析this.getAttribute('style')并应用到shadow DOM中的元素上
    // 但在这个例子中，我们直接在attributeChangedCallback中处理style属性
    }

    setSize(width: string | number |undefined, height: string | number |undefined) {
      if (this.svgElement) {
        const w = width?.toString() || 'auto';
        const h = height?.toString() || 'auto';
        if (width !== undefined && width !== null) {
          this.style.width = w;
          this.svgElement.setAttribute('width', width.toString());
        }
        if (height !== undefined && height !== null) {
          this.style.height = h;
          this.svgElement.setAttribute('height', height.toString());
        }
      }
    }

    setColors(color: string) {
      if (this.svgElement) {
        const paths = this.svgElement.getElementsByTagName('path');
        // eslint-disable-next-line no-plusplus
        for (let i = 0; i < paths.length; i++) {
          paths[i].style.fill = color;
        }
      }
    }
  }
);
