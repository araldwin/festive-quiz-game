  /* Snowflakes

  Add this to the HTML:
  <div id="snowflakes-container"></div>
  <script src="https://unpkg.com/magic-snowflakes/dist/snowflakes.min.js"></script>

  Credits:
  https://github.com/hcodes/snowflakes/
  */
  var snowflakes = new Snowflakes({
    color: '#5ECDEF', // Default: "#5ECDEF"
    container: document.querySelector('#snowflakes-container'), // Default: document.body
    count: 30, // 100 snowflakes. Default: 50
    minOpacity: 0.3, // From 0 to 1. Default: 0.6
    maxOpacity: 0.5, // From 0 to 1. Default: 1
    minSize: 10, // Default: 10
    maxSize: 30, // Default: 25
    rotation: true, // Default: true
    speed: 1, // The property affects the speed of falling. Default: 1
    wind: true, // Without wind. Default: true
    width: 500, // Default: width of container
    height: 500, // Default: height of container
    zIndex: 100, // Default: 9999,
    autoResize: true // Default: true
});


/**
 * Stop the snowflakes animation.
 */
export function stopSnowflakes() {
  snowflakes.stop();
}