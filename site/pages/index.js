import '../styles.scss';
import ScrollableCSS from 'react-scrollable-css';

export default () => (
  <div>
    <ScrollableCSS>
      {(context) => (
        <h1 className="logo" style={{ color: (context.percentPageSeen > 99 ? 'black' : 'white') }}>react-scrollable-css</h1>
      )}
    </ScrollableCSS>
    <div dangerouslySetInnerHTML={{__html: `<a href="https://github.com/studioraketa/react-scrollable-css" class="github-corner" aria-label="View source on GitHub"><svg width="80" height="80" viewBox="0 0 250 250" style="fill:#151513; color:#fff; position: fixed; top: 0; border: 0; right: 0;z-index: 1;" aria-hidden="true"><path d="M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z"></path><path d="M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2" fill="currentColor" style="transform-origin: 130px 106px;" class="octo-arm"></path><path d="M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z" fill="currentColor" class="octo-body"></path></svg></a><style>.github-corner:hover .octo-arm{animation:octocat-wave 560ms ease-in-out}@keyframes octocat-wave{0%,100%{transform:rotate(0)}20%,60%{transform:rotate(-25deg)}40%,80%{transform:rotate(10deg)}}@media (max-width:500px){.github-corner:hover .octo-arm{animation:none}.github-corner .octo-arm{animation:octocat-wave 560ms ease-in-out}}</style>`}} />

    <ScrollableCSS>
      {(context) => <div className="progress" style={{ background: `linear-gradient(to right, red ${context.percentPageSeen}%, transparent 0)` }} />}
    </ScrollableCSS>

    <ScrollableCSS>
      {(context) => (
        <div className="spotlight" style={{ backgroundColor: '#06f', opacity: context.percentInViewport / 100 }}>
          <div className="content">
            <h1>Animate Opacity</h1>

            <pre>
              <code>
{`<ScrollableCSS>
  {(context) => (
    <div style={{ backgroundColor: '#06f', opacity: context.percentInViewport / 100 }}>
      Lorem ipsum
    </div>
  )}
</ScrollableCSS>`}
              </code>
            </pre>

            <code className="debug">{JSON.stringify(context, null, 2)}</code>
          </div>
        </div>
      )}
    </ScrollableCSS>

    <ScrollableCSS>
      {(context) => (
        <div className="spotlight" style={{ backgroundImage: 'url("/static/images/yifei-chen-273034-unsplash.jpg")', backgroundPosition: `center ${-2 * context.percentSeen}px` }}>
          <div className="content">
            <h1 style={{
              transform: `translateY(${context.percentSeen < 50 ? ((-4 * context.percentInViewport) + 400) : 0}px)`,
            }}>Parallax Example</h1>

            <small className="credits">
              Photo by <a href="https://unsplash.com/photos/VPJBopKCFTw?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText" target="_blank">YIFEI CHEN</a>
            </small>

            <pre>
              <code>
{`<ScrollableCSS>
  {(context) => (
    <div className="spotlight" style={{
      backgroundPosition: \`center \${-2 * context.percentSeen}px\`
    }}>
      <div className="content">
        <h1 style={{
          transform: \`translateY(
            \${context.percentSeen < 50 ?
              ((-4 * ctx.percentInViewport) + 400) :
              0}px
          )\`,
        }}>Parallax</h1>
      </div>
    </div>
  )}
</ScrollableCSS>`}
              </code>
            </pre>

            <code className="debug">{JSON.stringify(context, null, 2)}</code>
          </div>
        </div>
      )}
    </ScrollableCSS>

    <ScrollableCSS>
      {(context) => (
        <div className="spotlight invert">
            <div className="row">
              <div className="col-6">
                <h1>Horizontal animations</h1>

                <pre>
                  <code>
{`<ScrollableCSS>
  {(context) => (
    <img src="/static/images/yifei-chen-273034-unsplash.jpg"
      style={{
        opacity: context.percentSeen < 50 ?
          (context.percentInViewport / 100) :
          1,
        transform: \`translateX(
          \${context.percentSeen < 50 ?
            ((-4 * context.percentInViewport) + 400) :
            0}px
        )\`
      }}
    />
  )}
</ScrollableCSS>`}
                  </code>
                </pre>
              </div>
              <div className="col-6">
                <img src="/static/images/yifei-chen-273034-unsplash.jpg" style={{
                  opacity: context.percentSeen < 50 ? (context.percentInViewport / 100) : 1,
                  transform: `translateX(${context.percentSeen < 50 ? ((-4 * context.percentInViewport) + 400) : 0}px)`
                }} />
              </div>
            </div>

            <code className="debug">{JSON.stringify(context, null, 2)}</code>
        </div>
      )}
    </ScrollableCSS>
  </div>
)