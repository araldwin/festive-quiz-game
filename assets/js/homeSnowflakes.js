  /* Snowflakes for the home page.

  Add this to the HTML:
  <div id="snowflakes-container"></div>
  <script src="https://unpkg.com/magic-snowflakes/dist/snowflakes.min.js"></script>

  Credits:
  https://github.com/hcodes/snowflakes/
  */
  var snowflakes = new Snowflakes({
    color: '#F2FCFB', // Default: "#5ECDEF"
    container: document.querySelector('#snowflakes-container'), // Default: document.body
    count: 25, // 100 snowflakes. Default: 50
    minOpacity: 0.2, // From 0 to 1. Default: 0.6
    maxOpacity: 0.6, // From 0 to 1. Default: 1
    minSize: 10, // Default: 10
    maxSize: 60, // Default: 25
    rotation: true, // Default: true
    speed: 1, // The property affects the speed of falling. Default: 1
    wind: true, // Without wind. Default: true
    zIndex: 100, // Default: 9999,
    autoResize: true // Default: true
});

/**
 * Stop the snowflakes animation.
 */
export function stopSnowflakes() {
  snowflakes.stop();
}

export function destroySnowflakes() {
  snowflakes.destroy();
}