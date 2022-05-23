'use strict';

// create a media condition that targets viewports of at least 768px width
const mediaQuery = window.matchMedia('(min-width: 758px)');

let handleTabletChange = e => {
  if (e.matches) {
    console.log('Media Query matched!');
  }
};

// Register event listener
mediaQuery.addListener(handleTabletChange);

// initial check
handleTabletChange(mediaQuery);

const f = document.getElementById('foo');
document.addEventListener(
  'click',
  function (ev) {
    f.style.transform = 'translateY(' + (ev.clientY - 25) + 'px)';
    f.style.transform += 'translateX(' + (ev.clientX - 25) + 'px)';
  },
  false
);
