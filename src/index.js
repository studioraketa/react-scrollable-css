import React from 'react';

const throttle = (fn, wait) => {
  let time = Date.now();

  return function() {
    if ((time + wait - Date.now()) < 0) {
      fn();
      time = Date.now();
    }
  }
}

const isFullyVisible = (el) => {
  var rect = el.getBoundingClientRect();

  return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

const isPartialltVisible = (elem) => {
  let x = elem.getBoundingClientRect().left;
  let y = elem.getBoundingClientRect().top;
  let ww = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
  let hw = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
  let w = elem.clientWidth;
  let h = elem.clientHeight;
  return (
      (y < hw &&
       y + h > 0) &&
      (x < ww &&
       x + w > 0)
  );
}

const percentSeen = (el) => {
  const viewportHeight = (window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight),
      scrollTop = window.pageYOffset,
      elementOffsetTop = el.offsetTop,
      elementHeight = el.clientHeight;

  if (elementOffsetTop > (scrollTop + viewportHeight)) {
      return 0;
  } else if ((elementOffsetTop + elementHeight) < scrollTop) {
      return 100;
  } else {
      var distance = (scrollTop + viewportHeight) - elementOffsetTop;
      var percentage = distance / ((viewportHeight + elementHeight) / 100);
      percentage = Math.round(percentage);
      return percentage;
  }
}

const percentInViewport = (el) => {
  const elementTop = el.offsetTop;
  const scrollTop = window.pageYOffset;
  const spaceTop = elementTop - scrollTop;
  const elementHeight = el.clientHeight;
  const screenHeight = (window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight);
  const scrollBottom = scrollTop + screenHeight;
  const bottomElement = elementTop + elementHeight;
  const spaceBottom = bottomElement - scrollBottom;
  let heightInScreen = elementHeight - spaceBottom;
  let percentage;

  if (spaceTop < 0) {
      heightInScreen -= spaceTop * -1;
  }

  if (spaceBottom < 0) {
      heightInScreen -= spaceBottom * -1;
  }

  percentage = heightInScreen / screenHeight * 100;
  percentage = percentage < 0 ? 0 : percentage;

  return percentage;
};

const percentPageSeen = () => {
  const h = document.documentElement,
  b = document.body,
  st = 'scrollTop',
  sh = 'scrollHeight';

  return (h[st]||b[st]) / ((h[sh]||b[sh]) - h.clientHeight) * 100;
}

export default class ScrollableCSS extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      pageYOffset: 0,
      isFullyVisible: false,
      isPartialltVisible: false,
      percentSeen: 0,
      percentInViewport: 0,
      percentPageSeen: 0,
    };
  }

  componentDidMount() {
    this.setState(this.checkEl(this.el));
    window.addEventListener('scroll', () => throttle(this.setState(this.checkEl(this.el)), 250));
  }

  checkEl(el) {
    return {
      pageYOffset: window.pageYOffset,
      isFullyVisible: isFullyVisible(el),
      isPartialltVisible: isPartialltVisible(el),
      percentSeen: percentSeen(el),
      percentInViewport: percentInViewport(el),
      percentPageSeen: percentPageSeen(),
    };
  }

  render() {
    return (
      <div ref={el => this.el = el}>
        {this.props.children(this.state)}
      </div>
    )
  }
}
