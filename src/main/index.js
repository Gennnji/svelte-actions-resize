import { ResizeObserver } from '@juggle/resize-observer';

export default function resize(node) {
  const ro = new ResizeObserver((entries, observer) => {
    node.dispatchEvent(new Event('resize'));
  });

  ro.observe(node);

  return {
    destroy() {
      ro.disconnect();
    }
  }
}
