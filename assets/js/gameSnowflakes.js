  /* Snowflakes for the home page.

  Add this to the HTML:
  <div id="snowflakes-container"></div>
  <script src="https://unpkg.com/magic-snowflakes/dist/snowflakes.min.js"></script>

  Credits:
  https://github.com/hcodes/snowflakes/
  */
  var snowflakes = new Snowflakes({
    color: '#5ba0c3', // Default: "#5ECDEF"
    container: document.querySelector('#snowflakes-container'), // Default: document.body
    count: 25, // 100 snowflakes. Default: 50
    minOpacity: 0.1, // From 0 to 1. Default: 0.6
    maxOpacity: 0.3, // From 0 to 1. Default: 1
    minSize: 3, // Default: 10
    maxSize: 20, // Default: 25
    rotation: true, // Default: true
    speed: 0.5, // The property affects the speed of falling. Default: 1
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