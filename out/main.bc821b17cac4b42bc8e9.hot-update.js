exports.id = "main";
exports.modules = {

/***/ "./app.js":
/*!****************!*\
  !*** ./app.js ***!
  \****************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/* WEBPACK VAR INJECTION */(function(__dirname) {var createError = __webpack_require__(/*! http-errors */ \"./node_modules/http-errors/index.js\");\nvar express = __webpack_require__(/*! express */ \"./node_modules/express/index.js\");\nvar path = __webpack_require__(/*! path */ \"path\");\nvar cookieParser = __webpack_require__(/*! cookie-parser */ \"./node_modules/cookie-parser/index.js\");\nvar logger = __webpack_require__(/*! morgan */ \"./node_modules/morgan/index.js\");\n\n\nvar indexRouter = __webpack_require__(/*! ./routes/index */ \"./routes/index.js\");\nvar usersRouter = __webpack_require__(/*! ./routes/users */ \"./routes/users.js\");\n\n\nvar app = express();\n\n\n// view engine setup\n\napp.set('views', path.join(__dirname, 'views'));\napp.set('view engine', 'pug');\n\napp.use(logger('dev'));\napp.use(express.json());\napp.use(express.urlencoded({ extended: false }));\napp.use(cookieParser());\napp.use(express.static(path.join(__dirname, 'public')));\n\napp.use('/', indexRouter);\napp.use('/users', usersRouter);\n\n// catch 404 and forward to error handler\napp.use(function(req, res, next) {\n  next(createError(404));\n});\n\n// error handler\napp.use(function(err, req, res, next) {\n  // set locals, only providing error in development\n  res.locals.message = err.message;\n  res.locals.error = req.app.get('env') === 'development' ? err : {};\n\n  // render the error page\n  res.status(err.status || 500);\n  res.render('error');\n});\n\nmodule.exports = app;\n\n/* WEBPACK VAR INJECTION */}.call(this, \"/\"))\n\n//# sourceURL=webpack:///./app.js?");

/***/ })

};