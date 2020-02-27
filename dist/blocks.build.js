/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!***********************!*\
  !*** ./src/blocks.js ***!
  \***********************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("Object.defineProperty(__webpack_exports__, \"__esModule\", { value: true });\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__block_block_js__ = __webpack_require__(/*! ./block/block.js */ 1);\n/**\n * Gutenberg Blocks\n *\n * All blocks related JavaScript files should be imported here.\n * You can create a new block folder in this dir and include code\n * for that block here as well.\n *\n * All blocks should be included here since this is the file that\n * Webpack is compiling as the input file.\n */\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9ibG9ja3MuanM/N2I1YiJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEd1dGVuYmVyZyBCbG9ja3NcbiAqXG4gKiBBbGwgYmxvY2tzIHJlbGF0ZWQgSmF2YVNjcmlwdCBmaWxlcyBzaG91bGQgYmUgaW1wb3J0ZWQgaGVyZS5cbiAqIFlvdSBjYW4gY3JlYXRlIGEgbmV3IGJsb2NrIGZvbGRlciBpbiB0aGlzIGRpciBhbmQgaW5jbHVkZSBjb2RlXG4gKiBmb3IgdGhhdCBibG9jayBoZXJlIGFzIHdlbGwuXG4gKlxuICogQWxsIGJsb2NrcyBzaG91bGQgYmUgaW5jbHVkZWQgaGVyZSBzaW5jZSB0aGlzIGlzIHRoZSBmaWxlIHRoYXRcbiAqIFdlYnBhY2sgaXMgY29tcGlsaW5nIGFzIHRoZSBpbnB1dCBmaWxlLlxuICovXG5cbmltcG9ydCAnLi9ibG9jay9ibG9jay5qcyc7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYmxvY2tzLmpzXG4vLyBtb2R1bGUgaWQgPSAwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///0\n");

/***/ }),
/* 1 */
/*!****************************!*\
  !*** ./src/block/block.js ***!
  \****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__editor_scss__ = __webpack_require__(/*! ./editor.scss */ 2);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__editor_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__editor_scss__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__style_scss__ = __webpack_require__(/*! ./style.scss */ 3);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__style_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__style_scss__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__wordpress_api_fetch__ = __webpack_require__(/*! @wordpress/api-fetch */ 4);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__wordpress_api_fetch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__wordpress_api_fetch__);\n/**\n * BLOCK: creole-demo\n *\n * Registering a basic block with Gutenberg.\n * Simple block, renders and saves the same content without any interactivity.\n */\n\n//  Import CSS.\n\n\n\n\n// import './bootstrap.css';\n\nvar __ = wp.i18n.__; // Import __() from wp.i18n\n\nvar registerBlockType = wp.blocks.registerBlockType; // Import registerBlockType() from wp.blocks\n\n/**\n * Register: aa Gutenberg Block.\n *\n * Registers a new block provided a unique name and an object defining its\n * behavior. Once registered, the block is made editor as an option to any\n * editor interface where blocks are implemented.\n *\n * @link https://wordpress.org/gutenberg/handbook/block-api/\n * @param  {string}   name     Block name.\n * @param  {Object}   settings Block settings.\n * @return {?WPBlock}          The block, if it has been successfully\n *                             registered; otherwise `undefined`.\n */\n\nregisterBlockType('cgb/block-creole-demo', {\n\t// Block name. Block names must be string that contains a namespace prefix. Example: my-plugin/my-custom-block.\n\ttitle: __('creole-demo - CGB Block'), // Block title.\n\ticon: 'shield', // Block icon from Dashicons → https://developer.wordpress.org/resource/dashicons/.\n\tcategory: 'common', // Block category — Group blocks together based on common traits E.g. common, formatting, layout widgets, embed.\n\tkeywords: [__('creole-demo — CGB Block'), __('CGB Example'), __('create-guten-block')],\n\tattributes: {\n\t\tposts: {\n\t\t\ttype: 'text',\n\t\t\tquote: '',\n\t\t\tauthor: ''\n\t\t}\n\t},\n\n\t/**\n  * The edit function describes the structure of your block in the context of the editor.\n  * This represents what the editor will render when the block is used.\n  *\n  * The \"edit\" property must be a valid function.\n  *\n  * @link https://wordpress.org/gutenberg/handbook/block-api/block-edit-save/\n  *\n  * @param {Object} props Props.\n  * @returns {Mixed} JSX Component.\n  */\n\tedit: function edit(props) {\n\t\t// Creates a <p className='wp-block-cgb-block-creole-demo'></p>.\n\t\t// GET\n\t\tvar QuoteBlock = function QuoteBlock(_ref) {\n\t\t\tvar quote = _ref.quote,\n\t\t\t    author = _ref.author;\n\n\t\t\treturn wp.element.createElement(\n\t\t\t\t'div',\n\t\t\t\t{ className: 'container' },\n\t\t\t\twp.element.createElement(\n\t\t\t\t\t'section',\n\t\t\t\t\tnull,\n\t\t\t\t\twp.element.createElement(\n\t\t\t\t\t\t'h1',\n\t\t\t\t\t\tnull,\n\t\t\t\t\t\t'Hello'\n\t\t\t\t\t),\n\t\t\t\t\twp.element.createElement(\n\t\t\t\t\t\t'div',\n\t\t\t\t\t\t{ className: 'row' },\n\t\t\t\t\t\twp.element.createElement('div', { className: 'col-sm-3' }),\n\t\t\t\t\t\twp.element.createElement(\n\t\t\t\t\t\t\t'div',\n\t\t\t\t\t\t\t{ className: 'col-sm-6' },\n\t\t\t\t\t\t\twp.element.createElement(\n\t\t\t\t\t\t\t\t'div',\n\t\t\t\t\t\t\t\t{ className: 'card' },\n\t\t\t\t\t\t\t\twp.element.createElement(\n\t\t\t\t\t\t\t\t\t'div',\n\t\t\t\t\t\t\t\t\t{ className: 'card-body mx-auto' },\n\t\t\t\t\t\t\t\t\twp.element.createElement(\n\t\t\t\t\t\t\t\t\t\t'h4',\n\t\t\t\t\t\t\t\t\t\t{ className: 'card-title text-center' },\n\t\t\t\t\t\t\t\t\t\t'-: Click or Refresh To See new Quotes :-'\n\t\t\t\t\t\t\t\t\t),\n\t\t\t\t\t\t\t\t\twp.element.createElement(\n\t\t\t\t\t\t\t\t\t\t'h5',\n\t\t\t\t\t\t\t\t\t\t{ className: 'card-text qoute mt-4' },\n\t\t\t\t\t\t\t\t\t\tquote,\n\t\t\t\t\t\t\t\t\t\t'Loading.........'\n\t\t\t\t\t\t\t\t\t),\n\t\t\t\t\t\t\t\t\twp.element.createElement(\n\t\t\t\t\t\t\t\t\t\t'p',\n\t\t\t\t\t\t\t\t\t\t{ className: 'card-text' },\n\t\t\t\t\t\t\t\t\t\twp.element.createElement(\n\t\t\t\t\t\t\t\t\t\t\t'strong',\n\t\t\t\t\t\t\t\t\t\t\tnull,\n\t\t\t\t\t\t\t\t\t\t\t'Author:'\n\t\t\t\t\t\t\t\t\t\t),\n\t\t\t\t\t\t\t\t\t\t' ',\n\t\t\t\t\t\t\t\t\t\twp.element.createElement(\n\t\t\t\t\t\t\t\t\t\t\t'span',\n\t\t\t\t\t\t\t\t\t\t\t{ className: 'author-name' },\n\t\t\t\t\t\t\t\t\t\t\tauthor,\n\t\t\t\t\t\t\t\t\t\t\t'Loading...............'\n\t\t\t\t\t\t\t\t\t\t)\n\t\t\t\t\t\t\t\t\t),\n\t\t\t\t\t\t\t\t\twp.element.createElement(\n\t\t\t\t\t\t\t\t\t\t'a',\n\t\t\t\t\t\t\t\t\t\t{ href: '#', className: 'btn btn-primary get-new-quote btn-block', onClick: getNewContent },\n\t\t\t\t\t\t\t\t\t\t'Get New Quote'\n\t\t\t\t\t\t\t\t\t)\n\t\t\t\t\t\t\t\t)\n\t\t\t\t\t\t\t)\n\t\t\t\t\t\t),\n\t\t\t\t\t\twp.element.createElement('div', { className: 'col-sm-3' })\n\t\t\t\t\t)\n\t\t\t\t)\n\t\t\t);\n\t\t};\n\t\tvar posts = props.attributes.posts,\n\t\t    setAttributes = props.setAttributes;\n\n\t\tvar getNewContent = function getNewContent() {\n\t\t\tfetch('https://vanpariyar.github.io/get-new-quote/rendomQuote.json', {\n\t\t\t\tmode: 'cors'\n\t\t\t}).then(function (response) {\n\t\t\t\treturn response.json();\n\t\t\t}).then(function (data) {\n\n\t\t\t\tvar min = 1;\n\t\t\t\tvar max = 103;\n\t\t\t\tfunction getRandomIntInclusive(min, max) {\n\t\t\t\t\tmin = Math.ceil(min);\n\t\t\t\t\tmax = Math.floor(max);\n\t\t\t\t\treturn Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive \n\t\t\t\t}\n\t\t\t\tconsole.log('This is function');\n\n\t\t\t\tvar data = data[getRandomIntInclusive(min, max)];\n\t\t\t\tvar quote = data.quote;\n\t\t\t\tvar author = data.author;\n\t\t\t\tsetAttributes({ posts: { quote: quote, author: author } });\n\t\t\t});\n\t\t};\n\n\t\tif (posts.length) {\n\t\t\tvar _quote = posts.quote,\n\t\t\t    author = posts.author;\n\t\t}\n\n\t\treturn wp.element.createElement(\n\t\t\t'div',\n\t\t\tnull,\n\t\t\twp.element.createElement(QuoteBlock, { quote: quote, author: quote })\n\t\t);\n\t},\n\n\t/**\n  * The save function defines the way in which the different attributes should be combined\n  * into the final markup, which is then serialized by Gutenberg into post_content.\n  *\n  * The \"save\" property must be specified and must be a valid function.\n  *\n  * @link https://wordpress.org/gutenberg/handbook/block-api/block-edit-save/\n  *\n  * @param {Object} props Props.\n  * @returns {Mixed} JSX Frontend HTML.\n  */\n\tsave: function save(props) {\n\t\treturn wp.element.createElement(\n\t\t\t'div',\n\t\t\t{ className: 'container' },\n\t\t\twp.element.createElement(\n\t\t\t\t'section',\n\t\t\t\tnull,\n\t\t\t\twp.element.createElement(\n\t\t\t\t\t'h1',\n\t\t\t\t\tnull,\n\t\t\t\t\t'Hello'\n\t\t\t\t),\n\t\t\t\twp.element.createElement(\n\t\t\t\t\t'div',\n\t\t\t\t\t{ className: 'row' },\n\t\t\t\t\twp.element.createElement('div', { className: 'col-sm-3' }),\n\t\t\t\t\twp.element.createElement(\n\t\t\t\t\t\t'div',\n\t\t\t\t\t\t{ className: 'col-sm-6' },\n\t\t\t\t\t\twp.element.createElement(\n\t\t\t\t\t\t\t'div',\n\t\t\t\t\t\t\t{ className: 'card' },\n\t\t\t\t\t\t\twp.element.createElement(\n\t\t\t\t\t\t\t\t'div',\n\t\t\t\t\t\t\t\t{ className: 'card-body mx-auto' },\n\t\t\t\t\t\t\t\twp.element.createElement(\n\t\t\t\t\t\t\t\t\t'h4',\n\t\t\t\t\t\t\t\t\t{ className: 'card-title text-center' },\n\t\t\t\t\t\t\t\t\t'-: Click or Refresh To See new Quotes :-'\n\t\t\t\t\t\t\t\t),\n\t\t\t\t\t\t\t\twp.element.createElement(\n\t\t\t\t\t\t\t\t\t'h5',\n\t\t\t\t\t\t\t\t\t{ className: 'card-text qoute mt-4' },\n\t\t\t\t\t\t\t\t\t'Loading.........'\n\t\t\t\t\t\t\t\t),\n\t\t\t\t\t\t\t\twp.element.createElement(\n\t\t\t\t\t\t\t\t\t'p',\n\t\t\t\t\t\t\t\t\t{ className: 'card-text' },\n\t\t\t\t\t\t\t\t\twp.element.createElement(\n\t\t\t\t\t\t\t\t\t\t'strong',\n\t\t\t\t\t\t\t\t\t\tnull,\n\t\t\t\t\t\t\t\t\t\t'Author:'\n\t\t\t\t\t\t\t\t\t),\n\t\t\t\t\t\t\t\t\t' ',\n\t\t\t\t\t\t\t\t\twp.element.createElement(\n\t\t\t\t\t\t\t\t\t\t'span',\n\t\t\t\t\t\t\t\t\t\t{ className: 'author-name' },\n\t\t\t\t\t\t\t\t\t\t'Loading...............'\n\t\t\t\t\t\t\t\t\t)\n\t\t\t\t\t\t\t\t),\n\t\t\t\t\t\t\t\twp.element.createElement(\n\t\t\t\t\t\t\t\t\t'a',\n\t\t\t\t\t\t\t\t\t{ href: '#', className: 'btn btn-primary get-new-quote btn-block' },\n\t\t\t\t\t\t\t\t\t'Get New Quote'\n\t\t\t\t\t\t\t\t)\n\t\t\t\t\t\t\t)\n\t\t\t\t\t\t)\n\t\t\t\t\t),\n\t\t\t\t\twp.element.createElement('div', { className: 'col-sm-3' })\n\t\t\t\t)\n\t\t\t)\n\t\t);\n\t}\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9ibG9jay9ibG9jay5qcz85MjFkIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQkxPQ0s6IGNyZW9sZS1kZW1vXG4gKlxuICogUmVnaXN0ZXJpbmcgYSBiYXNpYyBibG9jayB3aXRoIEd1dGVuYmVyZy5cbiAqIFNpbXBsZSBibG9jaywgcmVuZGVycyBhbmQgc2F2ZXMgdGhlIHNhbWUgY29udGVudCB3aXRob3V0IGFueSBpbnRlcmFjdGl2aXR5LlxuICovXG5cbi8vICBJbXBvcnQgQ1NTLlxuaW1wb3J0ICcuL2VkaXRvci5zY3NzJztcbmltcG9ydCAnLi9zdHlsZS5zY3NzJztcbmltcG9ydCBhcGlGZXRjaCBmcm9tICdAd29yZHByZXNzL2FwaS1mZXRjaCc7XG5cbi8vIGltcG9ydCAnLi9ib290c3RyYXAuY3NzJztcblxudmFyIF9fID0gd3AuaTE4bi5fXzsgLy8gSW1wb3J0IF9fKCkgZnJvbSB3cC5pMThuXG5cbnZhciByZWdpc3RlckJsb2NrVHlwZSA9IHdwLmJsb2Nrcy5yZWdpc3RlckJsb2NrVHlwZTsgLy8gSW1wb3J0IHJlZ2lzdGVyQmxvY2tUeXBlKCkgZnJvbSB3cC5ibG9ja3NcblxuLyoqXG4gKiBSZWdpc3RlcjogYWEgR3V0ZW5iZXJnIEJsb2NrLlxuICpcbiAqIFJlZ2lzdGVycyBhIG5ldyBibG9jayBwcm92aWRlZCBhIHVuaXF1ZSBuYW1lIGFuZCBhbiBvYmplY3QgZGVmaW5pbmcgaXRzXG4gKiBiZWhhdmlvci4gT25jZSByZWdpc3RlcmVkLCB0aGUgYmxvY2sgaXMgbWFkZSBlZGl0b3IgYXMgYW4gb3B0aW9uIHRvIGFueVxuICogZWRpdG9yIGludGVyZmFjZSB3aGVyZSBibG9ja3MgYXJlIGltcGxlbWVudGVkLlxuICpcbiAqIEBsaW5rIGh0dHBzOi8vd29yZHByZXNzLm9yZy9ndXRlbmJlcmcvaGFuZGJvb2svYmxvY2stYXBpL1xuICogQHBhcmFtICB7c3RyaW5nfSAgIG5hbWUgICAgIEJsb2NrIG5hbWUuXG4gKiBAcGFyYW0gIHtPYmplY3R9ICAgc2V0dGluZ3MgQmxvY2sgc2V0dGluZ3MuXG4gKiBAcmV0dXJuIHs/V1BCbG9ja30gICAgICAgICAgVGhlIGJsb2NrLCBpZiBpdCBoYXMgYmVlbiBzdWNjZXNzZnVsbHlcbiAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWdpc3RlcmVkOyBvdGhlcndpc2UgYHVuZGVmaW5lZGAuXG4gKi9cblxucmVnaXN0ZXJCbG9ja1R5cGUoJ2NnYi9ibG9jay1jcmVvbGUtZGVtbycsIHtcblx0Ly8gQmxvY2sgbmFtZS4gQmxvY2sgbmFtZXMgbXVzdCBiZSBzdHJpbmcgdGhhdCBjb250YWlucyBhIG5hbWVzcGFjZSBwcmVmaXguIEV4YW1wbGU6IG15LXBsdWdpbi9teS1jdXN0b20tYmxvY2suXG5cdHRpdGxlOiBfXygnY3Jlb2xlLWRlbW8gLSBDR0IgQmxvY2snKSwgLy8gQmxvY2sgdGl0bGUuXG5cdGljb246ICdzaGllbGQnLCAvLyBCbG9jayBpY29uIGZyb20gRGFzaGljb25zIOKGkiBodHRwczovL2RldmVsb3Blci53b3JkcHJlc3Mub3JnL3Jlc291cmNlL2Rhc2hpY29ucy8uXG5cdGNhdGVnb3J5OiAnY29tbW9uJywgLy8gQmxvY2sgY2F0ZWdvcnkg4oCUIEdyb3VwIGJsb2NrcyB0b2dldGhlciBiYXNlZCBvbiBjb21tb24gdHJhaXRzIEUuZy4gY29tbW9uLCBmb3JtYXR0aW5nLCBsYXlvdXQgd2lkZ2V0cywgZW1iZWQuXG5cdGtleXdvcmRzOiBbX18oJ2NyZW9sZS1kZW1vIOKAlCBDR0IgQmxvY2snKSwgX18oJ0NHQiBFeGFtcGxlJyksIF9fKCdjcmVhdGUtZ3V0ZW4tYmxvY2snKV0sXG5cdGF0dHJpYnV0ZXM6IHtcblx0XHRwb3N0czoge1xuXHRcdFx0dHlwZTogJ3RleHQnLFxuXHRcdFx0cXVvdGU6ICcnLFxuXHRcdFx0YXV0aG9yOiAnJ1xuXHRcdH1cblx0fSxcblxuXHQvKipcbiAgKiBUaGUgZWRpdCBmdW5jdGlvbiBkZXNjcmliZXMgdGhlIHN0cnVjdHVyZSBvZiB5b3VyIGJsb2NrIGluIHRoZSBjb250ZXh0IG9mIHRoZSBlZGl0b3IuXG4gICogVGhpcyByZXByZXNlbnRzIHdoYXQgdGhlIGVkaXRvciB3aWxsIHJlbmRlciB3aGVuIHRoZSBibG9jayBpcyB1c2VkLlxuICAqXG4gICogVGhlIFwiZWRpdFwiIHByb3BlcnR5IG11c3QgYmUgYSB2YWxpZCBmdW5jdGlvbi5cbiAgKlxuICAqIEBsaW5rIGh0dHBzOi8vd29yZHByZXNzLm9yZy9ndXRlbmJlcmcvaGFuZGJvb2svYmxvY2stYXBpL2Jsb2NrLWVkaXQtc2F2ZS9cbiAgKlxuICAqIEBwYXJhbSB7T2JqZWN0fSBwcm9wcyBQcm9wcy5cbiAgKiBAcmV0dXJucyB7TWl4ZWR9IEpTWCBDb21wb25lbnQuXG4gICovXG5cdGVkaXQ6IGZ1bmN0aW9uIGVkaXQocHJvcHMpIHtcblx0XHQvLyBDcmVhdGVzIGEgPHAgY2xhc3NOYW1lPSd3cC1ibG9jay1jZ2ItYmxvY2stY3Jlb2xlLWRlbW8nPjwvcD4uXG5cdFx0Ly8gR0VUXG5cdFx0dmFyIFF1b3RlQmxvY2sgPSBmdW5jdGlvbiBRdW90ZUJsb2NrKF9yZWYpIHtcblx0XHRcdHZhciBxdW90ZSA9IF9yZWYucXVvdGUsXG5cdFx0XHQgICAgYXV0aG9yID0gX3JlZi5hdXRob3I7XG5cblx0XHRcdHJldHVybiB3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoXG5cdFx0XHRcdCdkaXYnLFxuXHRcdFx0XHR7IGNsYXNzTmFtZTogJ2NvbnRhaW5lcicgfSxcblx0XHRcdFx0d3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuXHRcdFx0XHRcdCdzZWN0aW9uJyxcblx0XHRcdFx0XHRudWxsLFxuXHRcdFx0XHRcdHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcblx0XHRcdFx0XHRcdCdoMScsXG5cdFx0XHRcdFx0XHRudWxsLFxuXHRcdFx0XHRcdFx0J0hlbGxvJ1xuXHRcdFx0XHRcdCksXG5cdFx0XHRcdFx0d3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuXHRcdFx0XHRcdFx0J2RpdicsXG5cdFx0XHRcdFx0XHR7IGNsYXNzTmFtZTogJ3JvdycgfSxcblx0XHRcdFx0XHRcdHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JywgeyBjbGFzc05hbWU6ICdjb2wtc20tMycgfSksXG5cdFx0XHRcdFx0XHR3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoXG5cdFx0XHRcdFx0XHRcdCdkaXYnLFxuXHRcdFx0XHRcdFx0XHR7IGNsYXNzTmFtZTogJ2NvbC1zbS02JyB9LFxuXHRcdFx0XHRcdFx0XHR3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoXG5cdFx0XHRcdFx0XHRcdFx0J2RpdicsXG5cdFx0XHRcdFx0XHRcdFx0eyBjbGFzc05hbWU6ICdjYXJkJyB9LFxuXHRcdFx0XHRcdFx0XHRcdHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcblx0XHRcdFx0XHRcdFx0XHRcdCdkaXYnLFxuXHRcdFx0XHRcdFx0XHRcdFx0eyBjbGFzc05hbWU6ICdjYXJkLWJvZHkgbXgtYXV0bycgfSxcblx0XHRcdFx0XHRcdFx0XHRcdHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcblx0XHRcdFx0XHRcdFx0XHRcdFx0J2g0Jyxcblx0XHRcdFx0XHRcdFx0XHRcdFx0eyBjbGFzc05hbWU6ICdjYXJkLXRpdGxlIHRleHQtY2VudGVyJyB9LFxuXHRcdFx0XHRcdFx0XHRcdFx0XHQnLTogQ2xpY2sgb3IgUmVmcmVzaCBUbyBTZWUgbmV3IFF1b3RlcyA6LSdcblx0XHRcdFx0XHRcdFx0XHRcdCksXG5cdFx0XHRcdFx0XHRcdFx0XHR3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoXG5cdFx0XHRcdFx0XHRcdFx0XHRcdCdoNScsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHsgY2xhc3NOYW1lOiAnY2FyZC10ZXh0IHFvdXRlIG10LTQnIH0sXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHF1b3RlLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHQnTG9hZGluZy4uLi4uLi4uLidcblx0XHRcdFx0XHRcdFx0XHRcdCksXG5cdFx0XHRcdFx0XHRcdFx0XHR3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoXG5cdFx0XHRcdFx0XHRcdFx0XHRcdCdwJyxcblx0XHRcdFx0XHRcdFx0XHRcdFx0eyBjbGFzc05hbWU6ICdjYXJkLXRleHQnIH0sXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQnc3Ryb25nJyxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRudWxsLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdCdBdXRob3I6J1xuXHRcdFx0XHRcdFx0XHRcdFx0XHQpLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHQnICcsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQnc3BhbicsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0eyBjbGFzc05hbWU6ICdhdXRob3ItbmFtZScgfSxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRhdXRob3IsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0J0xvYWRpbmcuLi4uLi4uLi4uLi4uLi4nXG5cdFx0XHRcdFx0XHRcdFx0XHRcdClcblx0XHRcdFx0XHRcdFx0XHRcdCksXG5cdFx0XHRcdFx0XHRcdFx0XHR3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoXG5cdFx0XHRcdFx0XHRcdFx0XHRcdCdhJyxcblx0XHRcdFx0XHRcdFx0XHRcdFx0eyBocmVmOiAnIycsIGNsYXNzTmFtZTogJ2J0biBidG4tcHJpbWFyeSBnZXQtbmV3LXF1b3RlIGJ0bi1ibG9jaycsIG9uQ2xpY2s6IGdldE5ld0NvbnRlbnQgfSxcblx0XHRcdFx0XHRcdFx0XHRcdFx0J0dldCBOZXcgUXVvdGUnXG5cdFx0XHRcdFx0XHRcdFx0XHQpXG5cdFx0XHRcdFx0XHRcdFx0KVxuXHRcdFx0XHRcdFx0XHQpXG5cdFx0XHRcdFx0XHQpLFxuXHRcdFx0XHRcdFx0d3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KCdkaXYnLCB7IGNsYXNzTmFtZTogJ2NvbC1zbS0zJyB9KVxuXHRcdFx0XHRcdClcblx0XHRcdFx0KVxuXHRcdFx0KTtcblx0XHR9O1xuXHRcdHZhciBwb3N0cyA9IHByb3BzLmF0dHJpYnV0ZXMucG9zdHMsXG5cdFx0ICAgIHNldEF0dHJpYnV0ZXMgPSBwcm9wcy5zZXRBdHRyaWJ1dGVzO1xuXG5cdFx0dmFyIGdldE5ld0NvbnRlbnQgPSBmdW5jdGlvbiBnZXROZXdDb250ZW50KCkge1xuXHRcdFx0ZmV0Y2goJ2h0dHBzOi8vdmFucGFyaXlhci5naXRodWIuaW8vZ2V0LW5ldy1xdW90ZS9yZW5kb21RdW90ZS5qc29uJywge1xuXHRcdFx0XHRtb2RlOiAnY29ycydcblx0XHRcdH0pLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG5cdFx0XHRcdHJldHVybiByZXNwb25zZS5qc29uKCk7XG5cdFx0XHR9KS50aGVuKGZ1bmN0aW9uIChkYXRhKSB7XG5cblx0XHRcdFx0dmFyIG1pbiA9IDE7XG5cdFx0XHRcdHZhciBtYXggPSAxMDM7XG5cdFx0XHRcdGZ1bmN0aW9uIGdldFJhbmRvbUludEluY2x1c2l2ZShtaW4sIG1heCkge1xuXHRcdFx0XHRcdG1pbiA9IE1hdGguY2VpbChtaW4pO1xuXHRcdFx0XHRcdG1heCA9IE1hdGguZmxvb3IobWF4KTtcblx0XHRcdFx0XHRyZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbiArIDEpKSArIG1pbjsgLy9UaGUgbWF4aW11bSBpcyBpbmNsdXNpdmUgYW5kIHRoZSBtaW5pbXVtIGlzIGluY2x1c2l2ZSBcblx0XHRcdFx0fVxuXHRcdFx0XHRjb25zb2xlLmxvZygnVGhpcyBpcyBmdW5jdGlvbicpO1xuXG5cdFx0XHRcdHZhciBkYXRhID0gZGF0YVtnZXRSYW5kb21JbnRJbmNsdXNpdmUobWluLCBtYXgpXTtcblx0XHRcdFx0dmFyIHF1b3RlID0gZGF0YS5xdW90ZTtcblx0XHRcdFx0dmFyIGF1dGhvciA9IGRhdGEuYXV0aG9yO1xuXHRcdFx0XHRzZXRBdHRyaWJ1dGVzKHsgcG9zdHM6IHsgcXVvdGU6IHF1b3RlLCBhdXRob3I6IGF1dGhvciB9IH0pO1xuXHRcdFx0fSk7XG5cdFx0fTtcblxuXHRcdGlmIChwb3N0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBfcXVvdGUgPSBwb3N0cy5xdW90ZSxcblx0XHRcdCAgICBhdXRob3IgPSBwb3N0cy5hdXRob3I7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcblx0XHRcdCdkaXYnLFxuXHRcdFx0bnVsbCxcblx0XHRcdHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChRdW90ZUJsb2NrLCB7IHF1b3RlOiBxdW90ZSwgYXV0aG9yOiBxdW90ZSB9KVxuXHRcdCk7XG5cdH0sXG5cblx0LyoqXG4gICogVGhlIHNhdmUgZnVuY3Rpb24gZGVmaW5lcyB0aGUgd2F5IGluIHdoaWNoIHRoZSBkaWZmZXJlbnQgYXR0cmlidXRlcyBzaG91bGQgYmUgY29tYmluZWRcbiAgKiBpbnRvIHRoZSBmaW5hbCBtYXJrdXAsIHdoaWNoIGlzIHRoZW4gc2VyaWFsaXplZCBieSBHdXRlbmJlcmcgaW50byBwb3N0X2NvbnRlbnQuXG4gICpcbiAgKiBUaGUgXCJzYXZlXCIgcHJvcGVydHkgbXVzdCBiZSBzcGVjaWZpZWQgYW5kIG11c3QgYmUgYSB2YWxpZCBmdW5jdGlvbi5cbiAgKlxuICAqIEBsaW5rIGh0dHBzOi8vd29yZHByZXNzLm9yZy9ndXRlbmJlcmcvaGFuZGJvb2svYmxvY2stYXBpL2Jsb2NrLWVkaXQtc2F2ZS9cbiAgKlxuICAqIEBwYXJhbSB7T2JqZWN0fSBwcm9wcyBQcm9wcy5cbiAgKiBAcmV0dXJucyB7TWl4ZWR9IEpTWCBGcm9udGVuZCBIVE1MLlxuICAqL1xuXHRzYXZlOiBmdW5jdGlvbiBzYXZlKHByb3BzKSB7XG5cdFx0cmV0dXJuIHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcblx0XHRcdCdkaXYnLFxuXHRcdFx0eyBjbGFzc05hbWU6ICdjb250YWluZXInIH0sXG5cdFx0XHR3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoXG5cdFx0XHRcdCdzZWN0aW9uJyxcblx0XHRcdFx0bnVsbCxcblx0XHRcdFx0d3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuXHRcdFx0XHRcdCdoMScsXG5cdFx0XHRcdFx0bnVsbCxcblx0XHRcdFx0XHQnSGVsbG8nXG5cdFx0XHRcdCksXG5cdFx0XHRcdHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcblx0XHRcdFx0XHQnZGl2Jyxcblx0XHRcdFx0XHR7IGNsYXNzTmFtZTogJ3JvdycgfSxcblx0XHRcdFx0XHR3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicsIHsgY2xhc3NOYW1lOiAnY29sLXNtLTMnIH0pLFxuXHRcdFx0XHRcdHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcblx0XHRcdFx0XHRcdCdkaXYnLFxuXHRcdFx0XHRcdFx0eyBjbGFzc05hbWU6ICdjb2wtc20tNicgfSxcblx0XHRcdFx0XHRcdHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcblx0XHRcdFx0XHRcdFx0J2RpdicsXG5cdFx0XHRcdFx0XHRcdHsgY2xhc3NOYW1lOiAnY2FyZCcgfSxcblx0XHRcdFx0XHRcdFx0d3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuXHRcdFx0XHRcdFx0XHRcdCdkaXYnLFxuXHRcdFx0XHRcdFx0XHRcdHsgY2xhc3NOYW1lOiAnY2FyZC1ib2R5IG14LWF1dG8nIH0sXG5cdFx0XHRcdFx0XHRcdFx0d3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuXHRcdFx0XHRcdFx0XHRcdFx0J2g0Jyxcblx0XHRcdFx0XHRcdFx0XHRcdHsgY2xhc3NOYW1lOiAnY2FyZC10aXRsZSB0ZXh0LWNlbnRlcicgfSxcblx0XHRcdFx0XHRcdFx0XHRcdCctOiBDbGljayBvciBSZWZyZXNoIFRvIFNlZSBuZXcgUXVvdGVzIDotJ1xuXHRcdFx0XHRcdFx0XHRcdCksXG5cdFx0XHRcdFx0XHRcdFx0d3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuXHRcdFx0XHRcdFx0XHRcdFx0J2g1Jyxcblx0XHRcdFx0XHRcdFx0XHRcdHsgY2xhc3NOYW1lOiAnY2FyZC10ZXh0IHFvdXRlIG10LTQnIH0sXG5cdFx0XHRcdFx0XHRcdFx0XHQnTG9hZGluZy4uLi4uLi4uLidcblx0XHRcdFx0XHRcdFx0XHQpLFxuXHRcdFx0XHRcdFx0XHRcdHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcblx0XHRcdFx0XHRcdFx0XHRcdCdwJyxcblx0XHRcdFx0XHRcdFx0XHRcdHsgY2xhc3NOYW1lOiAnY2FyZC10ZXh0JyB9LFxuXHRcdFx0XHRcdFx0XHRcdFx0d3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuXHRcdFx0XHRcdFx0XHRcdFx0XHQnc3Ryb25nJyxcblx0XHRcdFx0XHRcdFx0XHRcdFx0bnVsbCxcblx0XHRcdFx0XHRcdFx0XHRcdFx0J0F1dGhvcjonXG5cdFx0XHRcdFx0XHRcdFx0XHQpLFxuXHRcdFx0XHRcdFx0XHRcdFx0JyAnLFxuXHRcdFx0XHRcdFx0XHRcdFx0d3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuXHRcdFx0XHRcdFx0XHRcdFx0XHQnc3BhbicsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHsgY2xhc3NOYW1lOiAnYXV0aG9yLW5hbWUnIH0sXG5cdFx0XHRcdFx0XHRcdFx0XHRcdCdMb2FkaW5nLi4uLi4uLi4uLi4uLi4uJ1xuXHRcdFx0XHRcdFx0XHRcdFx0KVxuXHRcdFx0XHRcdFx0XHRcdCksXG5cdFx0XHRcdFx0XHRcdFx0d3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuXHRcdFx0XHRcdFx0XHRcdFx0J2EnLFxuXHRcdFx0XHRcdFx0XHRcdFx0eyBocmVmOiAnIycsIGNsYXNzTmFtZTogJ2J0biBidG4tcHJpbWFyeSBnZXQtbmV3LXF1b3RlIGJ0bi1ibG9jaycgfSxcblx0XHRcdFx0XHRcdFx0XHRcdCdHZXQgTmV3IFF1b3RlJ1xuXHRcdFx0XHRcdFx0XHRcdClcblx0XHRcdFx0XHRcdFx0KVxuXHRcdFx0XHRcdFx0KVxuXHRcdFx0XHRcdCksXG5cdFx0XHRcdFx0d3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KCdkaXYnLCB7IGNsYXNzTmFtZTogJ2NvbC1zbS0zJyB9KVxuXHRcdFx0XHQpXG5cdFx0XHQpXG5cdFx0KTtcblx0fVxufSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYmxvY2svYmxvY2suanNcbi8vIG1vZHVsZSBpZCA9IDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///1\n");

/***/ }),
/* 2 */
/*!*******************************!*\
  !*** ./src/block/editor.scss ***!
  \*******************************/
/*! dynamic exports provided */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9ibG9jay9lZGl0b3Iuc2Nzcz80OWQyIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYmxvY2svZWRpdG9yLnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///2\n");

/***/ }),
/* 3 */
/*!******************************!*\
  !*** ./src/block/style.scss ***!
  \******************************/
/*! dynamic exports provided */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9ibG9jay9zdHlsZS5zY3NzPzgwZjMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9ibG9jay9zdHlsZS5zY3NzXG4vLyBtb2R1bGUgaWQgPSAzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///3\n");

/***/ }),
/* 4 */
/*!******************************!*\
  !*** external "wp.apiFetch" ***!
  \******************************/
/*! dynamic exports provided */
/***/ (function(module, exports) {

module.exports = wp.apiFetch;

/***/ })
/******/ ]);