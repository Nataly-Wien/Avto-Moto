import {useRef} from 'react';

const safeDocument = typeof document !== 'undefined' ? document : {};

export const useScrollBlock = () => {
  const scrollBlocked = useRef();
  const html = safeDocument.documentElement;
  const {body} = safeDocument;

  const blockScroll = () => {
    if (!body || !body.style || scrollBlocked.current) return;

    const scrollBarWidth = window.innerWidth - html.clientWidth;
    const bodyPaddingRight =
      parseInt(window.getComputedStyle(body).getPropertyValue("padding-right")) || 0;

    html.style.position = 'relative';
    html.style.overflow = 'hidden';
    body.style.position = 'relative';
    body.style.overflow = 'hidden';
    body.style.paddingRight = `${bodyPaddingRight + scrollBarWidth}px`;

    scrollBlocked.current = true;
  };

  const allowScroll = () => {
    if (!body || !body.style || !scrollBlocked.current) return;

    html.style.position = '';
    html.style.overflow = 'unset';
    body.style.position = '';
    body.style.overflow = 'unset';
    body.style.paddingRight = '';

    scrollBlocked.current = false;
  };

  return [blockScroll, allowScroll];
};

// export const useScrollBlock = () => {
//   useLayoutEffect(() => {
//     const originalOverflow = window.getComputedStyle(document.body).overflow;
//     document.body.style.overflow = "hidden";
//     return () => (document.body.style.overflow = originalOverflow);
//   }, []);
// }
