# react-scrollable-css

This package provides a component that tracks the scroll position of an element and provides
calculations, related to the browser scroll. These can be used to connect CSS properties to the
scroll and create playful animations.

## Installation

```bash
yarn add react-scrollable-css
# or npm i react-scrollable-css
```

## Usage

Wrap an element with `<ScrollableCSS>` and use the children render method:

```jsx
import ScrollableCSS from 'react-scrollable-css';

const MyComponent = ({ title, orientation, color }) => (
  <ScrollableCSS>
    {(context) => (
      <div style={{ height: '100vh', opacity: context.percentInViewport * 0.01 }}>
        <code>{JSON.stringify(context, null, 2)}</code>
      </div>
    )}
  </ScrollableCSS>
);
```

The children render method provides a scrolling context with the following entries:

- `pageYOffset`: alias of `window.pageYOffset`
- `isFullyVisible`: wether the wrapped component is fully visible in the viewport
- `isPartialltVisible`: wether the wrapped component is somehow visible in the viewport
- `percentSeen`: what percent of the component is seen by the user – the more the bottom edge of
the element is near the top edge of the viewport, the more of the element is seen
- `percentInViewport`: what percent of the element height is visible in the viewport – keep in mind
this also works for elements exiting the viewport
- `percentPageSeen`: what percent of the whole page is scrolled – useful for reading progress bars

## Examples

### Page reading progress

```css
.progress {
  position: fixed;
  z-index: 1;
  width: 100%;
  height: 4px;
  background-repeat: no-repeat;
}
```

```jsx
import ScrollableCSS from 'react-scrollable-css';

const PageReadingProgress = () => (
  <ScrollableCSS>
    {(context) =>
      <div className="progress" style={{ background: `linear-gradient(to right, #f9ec31 ${context.percentPageSeen}%, transparent 0)` }} />}
  </ScrollableCSS>
);
```

See more examples at [https://react-scrollable-css.raketa.work](https://react-scrollable-css.raketa.work)

## License

[MIT](https://github.com/storybooks/storybook/blob/master/LICENSE)