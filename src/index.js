// Specific polyfills required for older browsers
import 'core-js/es/map';
import 'core-js/es/set';
import 'core-js/es/symbol';

// Injector.js is exposed on the global / window object so apps using it can share state
require('expose-loader?Injector!./Injector');
