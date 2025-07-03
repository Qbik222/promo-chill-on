"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
(function () {
  var apiURL = 'https://fav-prom.com/api_sam_ua';
  var getActiveWeek = function getActiveWeek(promoStartDate, weekDuration) {
    var currentDate = new Date();
    var weekDates = [];
    var Day = 24 * 60 * 60 * 1000;
    var Week = weekDuration * Day;
    var formatDate = function formatDate(date) {
      return "".concat(date.getDate().toString().padStart(2, "0"), ".").concat((date.getMonth() + 1).toString().padStart(2, "0"));
    };
    var calculateWeekPeriod = function calculateWeekPeriod(weekIndex) {
      var baseStart = promoStartDate.getTime();
      var start = new Date(baseStart + weekIndex * Week);
      var end = new Date(start.getTime() + (weekDuration * Day - 1));
      return {
        start: start,
        end: end
      };
    };
    var activeWeekIndex = null;

    // Перевірка поточного тижня
    for (var i = 0; i < 10; i++) {
      // Обмежуємо 10 тижнями (якщо потрібно більше, просто змініть лічильник)
      var _calculateWeekPeriod = calculateWeekPeriod(i),
        start = _calculateWeekPeriod.start,
        end = _calculateWeekPeriod.end;
      if (currentDate >= start && currentDate <= end) {
        activeWeekIndex = i + 1;
        break;
      }
    }
    return activeWeekIndex;
  };
  var promoStartDate = new Date("2025-05-05T00:00:00");
  var weekDuration = 10;
  var activeWeek = getActiveWeek(promoStartDate, weekDuration) || 1;
  var mainPage = document.querySelector(".fav-page"),
    unauthMsgs = document.querySelectorAll('.unauth-msg'),
    participateBtns = document.querySelectorAll('.part-btn'),
    redirectBtns = document.querySelectorAll('.btn-join'),
    loader = document.querySelector(".spinner-overlay");
  var ukLeng = document.querySelector('#ukLeng');
  var enLeng = document.querySelector('#enLeng');
  var toggleClasses = function toggleClasses(elements, className) {
    return elements.forEach(function (el) {
      return el.classList.toggle("".concat(className));
    });
  };
  var toggleTranslates = function toggleTranslates(elements, dataAttr) {
    return elements.forEach(function (el) {
      el.setAttribute('data-translate', "".concat(dataAttr));
      el.innerHTML = i18nData[dataAttr] || '*----NEED TO BE TRANSLATED----*   key:  ' + dataAttr;
      el.removeAttribute('data-translate');
    });
  };
  var loaderBtn = false;
  var locale = "en";
  if (ukLeng) locale = 'uk';
  if (enLeng) locale = 'en';
  var debug = false;
  if (debug) hideLoader();
  var i18nData = {};
  var translateState = true;
  var userId = null;
  userId = 100300268;
  var box = document.querySelector('.shake-box');
  var initialDelay = Math.random() * 6000 + 4000;

  //slider vars

  var slider = document.querySelector('.prize__slider');
  var items = slider.querySelectorAll('.prize__slide');
  var dots = document.querySelectorAll('.prize__nav-dots-item');
  var btnLeft = document.querySelector('.prize__nav-left');
  var btnRight = document.querySelector('.prize__nav-right');
  var currentIndex = 1;
  var totalItems = items.length;
  var isDragging = false;
  var startX = 0;

  //slider vars

  var request = function request(link, extraOptions) {
    return fetch(apiURL + link, _objectSpread({
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    }, extraOptions || {})).then(function (res) {
      if (!res.ok) throw new Error('API error');
      return res.json();
    })["catch"](function (err) {
      console.error('API request failed:', err);
      reportError(err);
      document.querySelector('.fav-page').style.display = 'none';
      if (window.location.href.startsWith("https://www.favbet.hr/")) {
        window.location.href = '/promocije/promocija/stub/';
      } else {
        window.location.href = '/promos/promo/stub/';
      }
      return Promise.reject(err);
    });
  };
  function hideLoader() {
    loader.classList.add("hide");
    document.body.style.overflow = "auto";
    mainPage.classList.remove("loading");
  }
  function init() {
    return _init.apply(this, arguments);
  }
  function _init() {
    _init = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      var attempts, maxAttempts, attemptInterval, tryDetectUserId, quickCheckAndRender, waitForUserId;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            quickCheckAndRender = function _quickCheckAndRender() {
              checkUserAuth();

              // openPopupByAttr("prizeLaptop", true)

              setTimeout(hideLoader, 1000);
              SetSliderWidthBlur();
              setTimeout(triggerShake, initialDelay);
              participateBtns.forEach(function (btn) {
                btn.addEventListener('click', participate);
              });
              document.querySelectorAll('.popup__close').forEach(function (closeBtn) {
                closeBtn.addEventListener('click', closeAllPopups);
              });
              document.querySelectorAll('.open-btn').forEach(function (btn) {
                btn.addEventListener('click', function () {
                  var popupAttr = btn.getAttribute('data-popup');
                  openPopupByAttr(popupAttr);
                });
              });
              document.querySelector('.popups').addEventListener('click', function (e) {
                var openPopupEl = document.querySelector('.popup:not(.hide)');
                if (openPopupEl && !openPopupEl.contains(e.target)) {
                  closeAllPopups();
                }
              });
              updateSlider();
              slider.addEventListener('mousedown', handleStart);
              slider.addEventListener('mousemove', handleMove);
              slider.addEventListener('mouseup', handleEnd);
              slider.addEventListener('mouseleave', handleEnd);
              slider.addEventListener('touchstart', handleStart);
              slider.addEventListener('touchmove', handleMove);
              slider.addEventListener('touchend', handleEnd);
              btnLeft.addEventListener('click', function () {
                return moveSlider(-1);
              });
              btnRight.addEventListener('click', function () {
                return moveSlider(1);
              });
              // dots.forEach((dot, index) => dot.addEventListener('click', () => goToSlide(index)));
            };
            tryDetectUserId = function _tryDetectUserId() {
              if (window.store) {
                var state = window.store.getState();
                userId = state.auth.isAuthorized && state.auth.id || '';
              } else if (window.g_user_id) {
                userId = window.g_user_id;
              }
            };
            attempts = 0;
            maxAttempts = 20;
            attemptInterval = 50;
            waitForUserId = new Promise(function (resolve) {
              var interval = setInterval(function () {
                tryDetectUserId();
                if (userId || attempts >= maxAttempts) {
                  quickCheckAndRender();
                  clearInterval(interval);
                  resolve();
                }
                attempts++;
              }, attemptInterval);
            });
            _context.next = 8;
            return waitForUserId;
          case 8:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    return _init.apply(this, arguments);
  }
  function loadTranslations() {
    return request("/new-translates/".concat(locale)).then(function (json) {
      i18nData = json;
      translate();
      var targetNode = document.getElementById("samChill");
      var mutationObserver = new MutationObserver(function (mutations) {
        mutationObserver.disconnect();
        translate();
        mutationObserver.observe(targetNode, {
          childList: true,
          subtree: true
        });
      });
      mutationObserver.observe(targetNode, {
        childList: true,
        subtree: true
      });
    });
  }
  function SetSliderWidthBlur() {
    var slider = document.querySelector('.challange__current');
    var slides = slider.querySelectorAll('.challange__current-item');
    var tabs = document.querySelectorAll('.challange__tabs-item');
    var dots = document.querySelectorAll('.challange__nav-dots-item');
    var btnLeft = document.querySelector('.challange__nav-left');
    var btnRight = document.querySelector('.challange__nav-right');
    var currentIndex = 0;
    function updateSlider(index) {
      slides.forEach(function (slide) {
        return slide.classList.remove('_active');
      });
      tabs.forEach(function (tab) {
        return tab.classList.remove('_active');
      });
      dots.forEach(function (dot) {
        return dot.classList.remove('_active');
      });
      slides[index].classList.add('_active');
      tabs[index].classList.add('_active');
      dots[index].classList.add('_active');
    }
    function moveLeft() {
      currentIndex = (currentIndex - 1 + slides.length) % slides.length;
      updateSlider(currentIndex);
    }
    function moveRight() {
      currentIndex = (currentIndex + 1) % slides.length;
      updateSlider(currentIndex);
    }
    btnLeft.addEventListener('click', moveLeft);
    btnRight.addEventListener('click', moveRight);
    tabs.forEach(function (tab, index) {
      tab.addEventListener('click', function () {
        currentIndex = index;
        updateSlider(currentIndex);
      });
    });
    dots.forEach(function (dot, index) {
      dot.addEventListener('click', function () {
        currentIndex = index;
        updateSlider(currentIndex);
      });
    });
  }
  function checkUserAuth() {
    var loadTime = 200;
    setTimeout(function () {
      var showElements = function showElements(elements) {
        return elements.forEach(function (el) {
          return el.classList.remove('hide');
        });
      };
      var hideElements = function hideElements(elements) {
        return elements.forEach(function (el) {
          return el.classList.add('hide');
        });
      };
      if (!userId) {
        hideElements(participateBtns);
        hideElements(redirectBtns);
        showElements(unauthMsgs);
        hideLoader();
        return Promise.resolve(false);
      }
      hideElements(unauthMsgs);
      return request("/favuser/".concat(userId, "?nocache=1")).then(function (res) {
        if (res.userid) {
          hideElements(participateBtns);
          showElements(redirectBtns);
        } else {
          showElements(participateBtns);
          hideElements(redirectBtns);
        }
        hideLoader();
      });
    }, loadTime);
  }
  function reportError(err) {
    var reportData = {
      origin: window.location.href,
      userid: userId,
      errorText: (err === null || err === void 0 ? void 0 : err.error) || (err === null || err === void 0 ? void 0 : err.text) || (err === null || err === void 0 ? void 0 : err.message) || 'Unknown error',
      type: (err === null || err === void 0 ? void 0 : err.name) || 'UnknownError',
      stack: (err === null || err === void 0 ? void 0 : err.stack) || ''
    };
    fetch('https://fav-prom.com/api-cms/reports/add', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(reportData)
    })["catch"](console.warn);
  }
  function translate() {
    var elems = document.querySelectorAll('[data-translate]');
    if (elems && elems.length) {
      if (translateState) {
        elems.forEach(function (elem) {
          var key = elem.getAttribute('data-translate');
          elem.innerHTML = i18nData[key] || '*----NEED TO BE TRANSLATED----*   key:  ' + key;
          if (i18nData[key]) {
            elem.removeAttribute('data-translate');
          }
        });
      } else {
        console.log("translation works!");
      }
    }
    refreshLocalizedClass(mainPage);
  }
  function refreshLocalizedClass(element) {
    if (!element) {
      return;
    }
    for (var _i = 0, _arr = ['uk', 'en']; _i < _arr.length; _i++) {
      var lang = _arr[_i];
      element.classList.remove(lang);
    }
    element.classList.add(locale);
  }
  function renderUsers(week) {
    request("/users/".concat(week)).then(function (data) {
      var users = data;
      populateUsersTable(users, userId, week);
    });
  }
  function populateUsersTable(users, currentUserId, week) {
    resultsTable.innerHTML = '';
    resultsTableOther.innerHTML = '';
    if (!(users !== null && users !== void 0 && users.length)) return;
    var currentUser = users.find(function (user) {
      return user.userid === currentUserId;
    });
    var isTopCurrentUser = currentUser && users.slice(0, 10).some(function (user) {
      return user.userid === currentUserId;
    });
    var topUsersLength = !userId || isTopCurrentUser ? 13 : 10;
    var topUsers = users.slice(0, topUsersLength);
    topUsers.forEach(function (user) {
      displayUser(user, user.userid === currentUserId, resultsTable, topUsers, isTopCurrentUser, week);
    });
    if (!isTopCurrentUser && currentUser) {
      displayUser(currentUser, true, resultsTableOther, users, false, week);
    }
  }
  function displayUser(user, isCurrentUser, table, users, isTopCurrentUser, week) {
    var renderRow = function renderRow(userData) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var _options$highlight = options.highlight,
        highlight = _options$highlight === void 0 ? false : _options$highlight,
        _options$neighbor = options.neighbor,
        neighbor = _options$neighbor === void 0 ? false : _options$neighbor;
      var userRow = document.createElement('div');
      userRow.classList.add('table__row');
      var userPlace = users.indexOf(userData) + 1;
      var prizeKey = debug ? null : getPrizeTranslationKey(userPlace, week);
      if (userPlace <= 3) {
        userRow.classList.add("place".concat(userPlace));
      }
      if (highlight || isCurrentUser && !neighbor) {
        userRow.classList.add('you');
      } else if (neighbor) {
        userRow.classList.add('_neighbor');
      }
      userRow.innerHTML = "\n            <div class=\"table__row-item\">\n                ".concat(userPlace < 10 ? '0' + userPlace : userPlace, "\n                ").concat(isCurrentUser && !neighbor ? '<span class="you">' + translateKey("you") + '</span>' : '', "\n            </div>\n            <div class=\"table__row-item\">\n                ").concat(isCurrentUser && !neighbor ? userData.userid : maskUserId(userData.userid), "\n            </div>\n            <div class=\"table__row-item\">\n                ").concat(userData.points, "\n            </div>\n            <div class=\"table__row-item\">\n                ").concat(prizeKey ? translateKey(prizeKey) : ' - ', "\n            </div>\n        ");
      table.append(userRow);
    };
    if (isCurrentUser && !isTopCurrentUser) {
      var index = users.indexOf(user);
      if (users[index - 1]) {
        renderRow(users[index - 1], {
          neighbor: true
        });
      }
      renderRow(user, {
        highlight: true
      });
      if (users[index + 1]) {
        renderRow(users[index + 1], {
          neighbor: true
        });
      }
    } else {
      renderRow(user);
    }
  }
  function translateKey(key, defaultValue) {
    if (!key) {
      return;
    }
    var needKey = debug ? key : "*----NEED TO BE TRANSLATED----* key: ".concat(key);
    defaultValue = needKey || key;
    return i18nData[key] || defaultValue;
  }
  function maskUserId(userId) {
    return "**" + userId.toString().slice(2);
  }
  function getPrizeTranslationKey(place, week) {
    if (place <= 3) return "prize_".concat(week, "-").concat(place);
    if (place <= 10) return "prize_".concat(week, "-4-10");
    if (place <= 25) return "prize_".concat(week, "-11-25");
    if (place <= 50) return "prize_".concat(week, "-26-50");
    if (place <= 75) return "prize_".concat(week, "-51-75");
    if (place <= 100) return "prize_".concat(week, "-76-100");
    if (place <= 125) return "prize_".concat(week, "-101-125");
    if (place <= 150) return "prize_".concat(week, "-126-150");
    if (place <= 175) return "prize_".concat(week, "-151-175");
    if (place <= 200) return "prize_".concat(week, "-176-200");
  }
  function participate() {
    if (!userId) {
      return;
    }
    var params = {
      userid: userId
    };
    fetch(apiURL + '/user/', {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify(params)
    }).then(function (res) {
      return res.json();
    }).then(function (res) {
      loaderBtn = true;
      toggleClasses(participateBtns, "loader");
      toggleTranslates(participateBtns, "loader");
      setTimeout(function () {
        toggleTranslates(participateBtns, "loader_ready");
        toggleClasses(participateBtns, "done");
        toggleClasses(participateBtns, "loader");
      }, 500);
      setTimeout(function () {
        checkUserAuth();
      }, 1000);
    });
  }
  function updateSlider() {
    items.forEach(function (item, index) {
      var distance = index - currentIndex;
      var newPosition = distance * 105;
      if (distance > totalItems / 2) {
        newPosition -= totalItems * 105;
      } else if (distance < -totalItems / 2) {
        newPosition += totalItems * 105;
      }
      var scale = index === currentIndex ? 1 : 1;
      item.style.transform = "translateX(".concat(newPosition, "%) scale(").concat(scale, ")");
      item.style.zIndex = index === currentIndex ? 2 : 1;
      var isVisible = Math.abs(distance) <= 1 || index === 0 && currentIndex === totalItems - 1 || index === totalItems - 1 && currentIndex === 0;
      item.classList.toggle('hidden', !isVisible);
      item.classList.toggle('active', index === currentIndex);
      item.classList.remove('left-slide', 'right-slide');
      if (distance === 1 || currentIndex === totalItems - 1 && index === 0) {
        item.classList.add('right-slide');
      } else if (distance === -1 || currentIndex === 0 && index === totalItems - 1) {
        item.classList.add('left-slide');
      }
    });
    dots.forEach(function (dot) {
      return dot.classList.remove('_active');
    });
    if (dots[currentIndex]) {
      dots[currentIndex].classList.add('_active');
    }
  }
  function moveSlider(offset) {
    currentIndex = (currentIndex + offset + totalItems) % totalItems;
    updateSlider();
  }
  function goToSlide(index) {
    currentIndex = index;
    updateSlider();
  }
  function handleStart(event) {
    isDragging = true;
    startX = event.clientX || event.touches[0].clientX;
  }
  function handleMove(event) {
    if (!isDragging) return;
    var currentX = event.clientX || event.touches[0].clientX;
    var diffX = currentX - startX;
    if (Math.abs(diffX) > 50) {
      moveSlider(diffX > 0 ? -1 : 1);
      isDragging = false;
    }
  }
  function handleEnd() {
    isDragging = false;
  }
  function openPopupByAttr(popupAttr) {
    var isShowProgress = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    var allPopups = document.querySelectorAll('.popup');
    allPopups.forEach(function (p) {
      return p.classList.add('hide');
    });
    var targetPopup = document.querySelector(".popup[data-popup=\"".concat(popupAttr, "\"]"));
    if (targetPopup) {
      targetPopup.classList.remove('hide');
      document.querySelector('.popups').classList.remove('opacity-overlay');
    }
    var progress = document.querySelector('.popups .progress');
    if (progress) {
      progress.classList.toggle('hide', !isShowProgress);
    }
  }
  function closeAllPopups() {
    document.querySelectorAll('.popup').forEach(function (p) {
      return p.classList.add('hide');
    });
    document.querySelectorAll('.popups .progress').forEach(function (p) {
      return p.classList.add('hide');
    });
    document.querySelector('.popups').classList.add('opacity-overlay');
  }
  function triggerShake() {
    box.classList.add('shake');
    setTimeout(function () {
      box.classList.remove('shake');
      var nextShake = Math.random() * 6000 + 4000;
      setTimeout(triggerShake, nextShake);
    }, 1200);
  }
  loadTranslations().then(init);

  // init()
})();
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOlsiYXBpVVJMIiwiZ2V0QWN0aXZlV2VlayIsInByb21vU3RhcnREYXRlIiwid2Vla0R1cmF0aW9uIiwiY3VycmVudERhdGUiLCJEYXRlIiwid2Vla0RhdGVzIiwiRGF5IiwiV2VlayIsImZvcm1hdERhdGUiLCJkYXRlIiwiZ2V0RGF0ZSIsInRvU3RyaW5nIiwicGFkU3RhcnQiLCJnZXRNb250aCIsImNhbGN1bGF0ZVdlZWtQZXJpb2QiLCJ3ZWVrSW5kZXgiLCJiYXNlU3RhcnQiLCJnZXRUaW1lIiwic3RhcnQiLCJlbmQiLCJhY3RpdmVXZWVrSW5kZXgiLCJpIiwiYWN0aXZlV2VlayIsIm1haW5QYWdlIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwidW5hdXRoTXNncyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJwYXJ0aWNpcGF0ZUJ0bnMiLCJyZWRpcmVjdEJ0bnMiLCJsb2FkZXIiLCJ1a0xlbmciLCJlbkxlbmciLCJ0b2dnbGVDbGFzc2VzIiwiZWxlbWVudHMiLCJjbGFzc05hbWUiLCJmb3JFYWNoIiwiZWwiLCJjbGFzc0xpc3QiLCJ0b2dnbGUiLCJ0b2dnbGVUcmFuc2xhdGVzIiwiZGF0YUF0dHIiLCJzZXRBdHRyaWJ1dGUiLCJpbm5lckhUTUwiLCJpMThuRGF0YSIsInJlbW92ZUF0dHJpYnV0ZSIsImxvYWRlckJ0biIsImxvY2FsZSIsImRlYnVnIiwiaGlkZUxvYWRlciIsInRyYW5zbGF0ZVN0YXRlIiwidXNlcklkIiwiYm94IiwiaW5pdGlhbERlbGF5IiwiTWF0aCIsInJhbmRvbSIsInNsaWRlciIsIml0ZW1zIiwiZG90cyIsImJ0bkxlZnQiLCJidG5SaWdodCIsImN1cnJlbnRJbmRleCIsInRvdGFsSXRlbXMiLCJsZW5ndGgiLCJpc0RyYWdnaW5nIiwic3RhcnRYIiwicmVxdWVzdCIsImxpbmsiLCJleHRyYU9wdGlvbnMiLCJmZXRjaCIsImhlYWRlcnMiLCJ0aGVuIiwicmVzIiwib2siLCJFcnJvciIsImpzb24iLCJlcnIiLCJjb25zb2xlIiwiZXJyb3IiLCJyZXBvcnRFcnJvciIsInN0eWxlIiwiZGlzcGxheSIsIndpbmRvdyIsImxvY2F0aW9uIiwiaHJlZiIsInN0YXJ0c1dpdGgiLCJQcm9taXNlIiwicmVqZWN0IiwiYWRkIiwiYm9keSIsIm92ZXJmbG93IiwicmVtb3ZlIiwiaW5pdCIsInRyeURldGVjdFVzZXJJZCIsInF1aWNrQ2hlY2tBbmRSZW5kZXIiLCJjaGVja1VzZXJBdXRoIiwic2V0VGltZW91dCIsIlNldFNsaWRlcldpZHRoQmx1ciIsInRyaWdnZXJTaGFrZSIsImJ0biIsImFkZEV2ZW50TGlzdGVuZXIiLCJwYXJ0aWNpcGF0ZSIsImNsb3NlQnRuIiwiY2xvc2VBbGxQb3B1cHMiLCJwb3B1cEF0dHIiLCJnZXRBdHRyaWJ1dGUiLCJvcGVuUG9wdXBCeUF0dHIiLCJlIiwib3BlblBvcHVwRWwiLCJjb250YWlucyIsInRhcmdldCIsInVwZGF0ZVNsaWRlciIsImhhbmRsZVN0YXJ0IiwiaGFuZGxlTW92ZSIsImhhbmRsZUVuZCIsIm1vdmVTbGlkZXIiLCJzdG9yZSIsInN0YXRlIiwiZ2V0U3RhdGUiLCJhdXRoIiwiaXNBdXRob3JpemVkIiwiaWQiLCJnX3VzZXJfaWQiLCJhdHRlbXB0cyIsIm1heEF0dGVtcHRzIiwiYXR0ZW1wdEludGVydmFsIiwid2FpdEZvclVzZXJJZCIsInJlc29sdmUiLCJpbnRlcnZhbCIsInNldEludGVydmFsIiwiY2xlYXJJbnRlcnZhbCIsImxvYWRUcmFuc2xhdGlvbnMiLCJ0cmFuc2xhdGUiLCJ0YXJnZXROb2RlIiwiZ2V0RWxlbWVudEJ5SWQiLCJtdXRhdGlvbk9ic2VydmVyIiwiTXV0YXRpb25PYnNlcnZlciIsIm11dGF0aW9ucyIsImRpc2Nvbm5lY3QiLCJvYnNlcnZlIiwiY2hpbGRMaXN0Iiwic3VidHJlZSIsInNsaWRlcyIsInRhYnMiLCJpbmRleCIsInNsaWRlIiwidGFiIiwiZG90IiwibW92ZUxlZnQiLCJtb3ZlUmlnaHQiLCJsb2FkVGltZSIsInNob3dFbGVtZW50cyIsImhpZGVFbGVtZW50cyIsInVzZXJpZCIsInJlcG9ydERhdGEiLCJvcmlnaW4iLCJlcnJvclRleHQiLCJ0ZXh0IiwibWVzc2FnZSIsInR5cGUiLCJuYW1lIiwic3RhY2siLCJtZXRob2QiLCJKU09OIiwic3RyaW5naWZ5Iiwid2FybiIsImVsZW1zIiwiZWxlbSIsImtleSIsImxvZyIsInJlZnJlc2hMb2NhbGl6ZWRDbGFzcyIsImVsZW1lbnQiLCJsYW5nIiwicmVuZGVyVXNlcnMiLCJ3ZWVrIiwiZGF0YSIsInVzZXJzIiwicG9wdWxhdGVVc2Vyc1RhYmxlIiwiY3VycmVudFVzZXJJZCIsInJlc3VsdHNUYWJsZSIsInJlc3VsdHNUYWJsZU90aGVyIiwiY3VycmVudFVzZXIiLCJmaW5kIiwidXNlciIsImlzVG9wQ3VycmVudFVzZXIiLCJzbGljZSIsInNvbWUiLCJ0b3BVc2Vyc0xlbmd0aCIsInRvcFVzZXJzIiwiZGlzcGxheVVzZXIiLCJpc0N1cnJlbnRVc2VyIiwidGFibGUiLCJyZW5kZXJSb3ciLCJ1c2VyRGF0YSIsIm9wdGlvbnMiLCJoaWdobGlnaHQiLCJuZWlnaGJvciIsInVzZXJSb3ciLCJjcmVhdGVFbGVtZW50IiwidXNlclBsYWNlIiwiaW5kZXhPZiIsInByaXplS2V5IiwiZ2V0UHJpemVUcmFuc2xhdGlvbktleSIsInRyYW5zbGF0ZUtleSIsIm1hc2tVc2VySWQiLCJwb2ludHMiLCJhcHBlbmQiLCJkZWZhdWx0VmFsdWUiLCJuZWVkS2V5IiwicGxhY2UiLCJwYXJhbXMiLCJpdGVtIiwiZGlzdGFuY2UiLCJuZXdQb3NpdGlvbiIsInNjYWxlIiwidHJhbnNmb3JtIiwiekluZGV4IiwiaXNWaXNpYmxlIiwiYWJzIiwib2Zmc2V0IiwiZ29Ub1NsaWRlIiwiZXZlbnQiLCJjbGllbnRYIiwidG91Y2hlcyIsImN1cnJlbnRYIiwiZGlmZlgiLCJpc1Nob3dQcm9ncmVzcyIsImFsbFBvcHVwcyIsInAiLCJ0YXJnZXRQb3B1cCIsInByb2dyZXNzIiwibmV4dFNoYWtlIl0sIm1hcHBpbmdzIjoiOzs7K0NBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBLENBQUMsWUFBWTtFQUVULElBQU1BLE1BQU0sR0FBRyxpQ0FBaUM7RUFFaEQsSUFBTUMsYUFBYSxHQUFHLFNBQWhCQSxhQUFhLENBQUlDLGNBQWMsRUFBRUMsWUFBWSxFQUFLO0lBQ3BELElBQU1DLFdBQVcsR0FBRyxJQUFJQyxJQUFJLEVBQUU7SUFDOUIsSUFBSUMsU0FBUyxHQUFHLEVBQUU7SUFFbEIsSUFBTUMsR0FBRyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLElBQUk7SUFDL0IsSUFBTUMsSUFBSSxHQUFHTCxZQUFZLEdBQUdJLEdBQUc7SUFFL0IsSUFBTUUsVUFBVSxHQUFHLFNBQWJBLFVBQVUsQ0FBSUMsSUFBSTtNQUFBLGlCQUNqQkEsSUFBSSxDQUFDQyxPQUFPLEVBQUUsQ0FBQ0MsUUFBUSxFQUFFLENBQUNDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLGNBQUksQ0FBQ0gsSUFBSSxDQUFDSSxRQUFRLEVBQUUsR0FBRyxDQUFDLEVBQUVGLFFBQVEsRUFBRSxDQUFDQyxRQUFRLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQztJQUFBLENBQUU7SUFFeEcsSUFBTUUsbUJBQW1CLEdBQUcsU0FBdEJBLG1CQUFtQixDQUFJQyxTQUFTLEVBQUs7TUFDdkMsSUFBTUMsU0FBUyxHQUFHZixjQUFjLENBQUNnQixPQUFPLEVBQUU7TUFDMUMsSUFBTUMsS0FBSyxHQUFHLElBQUlkLElBQUksQ0FBQ1ksU0FBUyxHQUFHRCxTQUFTLEdBQUdSLElBQUksQ0FBQztNQUNwRCxJQUFJWSxHQUFHLEdBQUcsSUFBSWYsSUFBSSxDQUFDYyxLQUFLLENBQUNELE9BQU8sRUFBRSxJQUFJZixZQUFZLEdBQUdJLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQztNQUM5RCxPQUFPO1FBQUVZLEtBQUssRUFBTEEsS0FBSztRQUFFQyxHQUFHLEVBQUhBO01BQUksQ0FBQztJQUN6QixDQUFDO0lBRUQsSUFBSUMsZUFBZSxHQUFHLElBQUk7O0lBRTFCO0lBQ0EsS0FBSyxJQUFJQyxDQUFDLEdBQUcsQ0FBQyxFQUFFQSxDQUFDLEdBQUcsRUFBRSxFQUFFQSxDQUFDLEVBQUUsRUFBRTtNQUFFO01BQzNCLDJCQUF1QlAsbUJBQW1CLENBQUNPLENBQUMsQ0FBQztRQUFyQ0gsS0FBSyx3QkFBTEEsS0FBSztRQUFFQyxHQUFHLHdCQUFIQSxHQUFHO01BQ2xCLElBQUloQixXQUFXLElBQUllLEtBQUssSUFBSWYsV0FBVyxJQUFJZ0IsR0FBRyxFQUFFO1FBQzVDQyxlQUFlLEdBQUdDLENBQUMsR0FBRyxDQUFDO1FBQ3ZCO01BQ0o7SUFDSjtJQUVBLE9BQU9ELGVBQWU7RUFDMUIsQ0FBQztFQUVELElBQU1uQixjQUFjLEdBQUcsSUFBSUcsSUFBSSxDQUFDLHFCQUFxQixDQUFDO0VBQ3RELElBQU1GLFlBQVksR0FBRyxFQUFFO0VBRXZCLElBQU1vQixVQUFVLEdBQUd0QixhQUFhLENBQUNDLGNBQWMsRUFBRUMsWUFBWSxDQUFDLElBQUksQ0FBQztFQUduRSxJQUFNcUIsUUFBUSxHQUFHQyxRQUFRLENBQUNDLGFBQWEsQ0FBQyxXQUFXLENBQUM7SUFDaERDLFVBQVUsR0FBR0YsUUFBUSxDQUFDRyxnQkFBZ0IsQ0FBQyxhQUFhLENBQUM7SUFDckRDLGVBQWUsR0FBR0osUUFBUSxDQUFDRyxnQkFBZ0IsQ0FBQyxXQUFXLENBQUM7SUFDeERFLFlBQVksR0FBR0wsUUFBUSxDQUFDRyxnQkFBZ0IsQ0FBQyxXQUFXLENBQUM7SUFDckRHLE1BQU0sR0FBR04sUUFBUSxDQUFDQyxhQUFhLENBQUMsa0JBQWtCLENBQUM7RUFFdkQsSUFBTU0sTUFBTSxHQUFHUCxRQUFRLENBQUNDLGFBQWEsQ0FBQyxTQUFTLENBQUM7RUFDaEQsSUFBTU8sTUFBTSxHQUFHUixRQUFRLENBQUNDLGFBQWEsQ0FBQyxTQUFTLENBQUM7RUFFaEQsSUFBTVEsYUFBYSxHQUFHLFNBQWhCQSxhQUFhLENBQUlDLFFBQVEsRUFBRUMsU0FBUztJQUFBLE9BQUtELFFBQVEsQ0FBQ0UsT0FBTyxDQUFDLFVBQUFDLEVBQUU7TUFBQSxPQUFJQSxFQUFFLENBQUNDLFNBQVMsQ0FBQ0MsTUFBTSxXQUFJSixTQUFTLEVBQUc7SUFBQSxFQUFDO0VBQUE7RUFDMUcsSUFBTUssZ0JBQWdCLEdBQUcsU0FBbkJBLGdCQUFnQixDQUFJTixRQUFRLEVBQUVPLFFBQVE7SUFBQSxPQUFLUCxRQUFRLENBQUNFLE9BQU8sQ0FBQyxVQUFBQyxFQUFFLEVBQUk7TUFDcEVBLEVBQUUsQ0FBQ0ssWUFBWSxDQUFDLGdCQUFnQixZQUFLRCxRQUFRLEVBQUc7TUFDaERKLEVBQUUsQ0FBQ00sU0FBUyxHQUFHQyxRQUFRLENBQUNILFFBQVEsQ0FBQyxJQUFJLDBDQUEwQyxHQUFHQSxRQUFRO01BQzFGSixFQUFFLENBQUNRLGVBQWUsQ0FBQyxnQkFBZ0IsQ0FBQztJQUN4QyxDQUFDLENBQUM7RUFBQTtFQUVGLElBQUlDLFNBQVMsR0FBRyxLQUFLO0VBRXJCLElBQUlDLE1BQU0sR0FBRyxJQUFJO0VBRWpCLElBQUloQixNQUFNLEVBQUVnQixNQUFNLEdBQUcsSUFBSTtFQUN6QixJQUFJZixNQUFNLEVBQUVlLE1BQU0sR0FBRyxJQUFJO0VBRXpCLElBQUlDLEtBQUssR0FBRyxLQUFLO0VBRWpCLElBQUlBLEtBQUssRUFBRUMsVUFBVSxFQUFFO0VBRXZCLElBQUlMLFFBQVEsR0FBRyxDQUFDLENBQUM7RUFDakIsSUFBTU0sY0FBYyxHQUFHLElBQUk7RUFDM0IsSUFBSUMsTUFBTSxHQUFHLElBQUk7RUFFakJBLE1BQU0sR0FBRyxTQUFTO0VBRWxCLElBQU1DLEdBQUcsR0FBRzVCLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLFlBQVksQ0FBQztFQUNoRCxJQUFNNEIsWUFBWSxHQUFHQyxJQUFJLENBQUNDLE1BQU0sRUFBRSxHQUFHLElBQUksR0FBRyxJQUFJOztFQUVoRDs7RUFFQSxJQUFNQyxNQUFNLEdBQUdoQyxRQUFRLENBQUNDLGFBQWEsQ0FBQyxnQkFBZ0IsQ0FBQztFQUN2RCxJQUFNZ0MsS0FBSyxHQUFHRCxNQUFNLENBQUM3QixnQkFBZ0IsQ0FBQyxlQUFlLENBQUM7RUFDdEQsSUFBTStCLElBQUksR0FBR2xDLFFBQVEsQ0FBQ0csZ0JBQWdCLENBQUMsdUJBQXVCLENBQUM7RUFDL0QsSUFBTWdDLE9BQU8sR0FBR25DLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLGtCQUFrQixDQUFDO0VBQzFELElBQU1tQyxRQUFRLEdBQUdwQyxRQUFRLENBQUNDLGFBQWEsQ0FBQyxtQkFBbUIsQ0FBQztFQUU1RCxJQUFJb0MsWUFBWSxHQUFHLENBQUM7RUFDcEIsSUFBTUMsVUFBVSxHQUFHTCxLQUFLLENBQUNNLE1BQU07RUFDL0IsSUFBSUMsVUFBVSxHQUFHLEtBQUs7RUFDdEIsSUFBSUMsTUFBTSxHQUFHLENBQUM7O0VBRWQ7O0VBRUEsSUFBTUMsT0FBTyxHQUFHLFNBQVZBLE9BQU8sQ0FBYUMsSUFBSSxFQUFFQyxZQUFZLEVBQUU7SUFDMUMsT0FBT0MsS0FBSyxDQUFDdEUsTUFBTSxHQUFHb0UsSUFBSTtNQUN0QkcsT0FBTyxFQUFFO1FBQ0wsUUFBUSxFQUFFLGtCQUFrQjtRQUM1QixjQUFjLEVBQUU7TUFDcEI7SUFBQyxHQUNHRixZQUFZLElBQUksQ0FBQyxDQUFDLEVBQ3hCLENBQ0dHLElBQUksQ0FBQyxVQUFBQyxHQUFHLEVBQUk7TUFDVCxJQUFJLENBQUNBLEdBQUcsQ0FBQ0MsRUFBRSxFQUFFLE1BQU0sSUFBSUMsS0FBSyxDQUFDLFdBQVcsQ0FBQztNQUN6QyxPQUFPRixHQUFHLENBQUNHLElBQUksRUFBRTtJQUNyQixDQUFDLENBQUMsU0FDSSxDQUFDLFVBQUFDLEdBQUcsRUFBSTtNQUNWQyxPQUFPLENBQUNDLEtBQUssQ0FBQyxxQkFBcUIsRUFBRUYsR0FBRyxDQUFDO01BRXpDRyxXQUFXLENBQUNILEdBQUcsQ0FBQztNQUVoQnBELFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLFdBQVcsQ0FBQyxDQUFDdUQsS0FBSyxDQUFDQyxPQUFPLEdBQUcsTUFBTTtNQUMxRCxJQUFJQyxNQUFNLENBQUNDLFFBQVEsQ0FBQ0MsSUFBSSxDQUFDQyxVQUFVLENBQUMsd0JBQXdCLENBQUMsRUFBRTtRQUMzREgsTUFBTSxDQUFDQyxRQUFRLENBQUNDLElBQUksR0FBRyw0QkFBNEI7TUFDdkQsQ0FBQyxNQUFNO1FBQ0hGLE1BQU0sQ0FBQ0MsUUFBUSxDQUFDQyxJQUFJLEdBQUcscUJBQXFCO01BQ2hEO01BRUEsT0FBT0UsT0FBTyxDQUFDQyxNQUFNLENBQUNYLEdBQUcsQ0FBQztJQUM5QixDQUFDLENBQUM7RUFFVixDQUFDO0VBRUQsU0FBUzNCLFVBQVUsR0FBRTtJQUNqQm5CLE1BQU0sQ0FBQ1EsU0FBUyxDQUFDa0QsR0FBRyxDQUFDLE1BQU0sQ0FBQztJQUM1QmhFLFFBQVEsQ0FBQ2lFLElBQUksQ0FBQ1QsS0FBSyxDQUFDVSxRQUFRLEdBQUcsTUFBTTtJQUNyQ25FLFFBQVEsQ0FBQ2UsU0FBUyxDQUFDcUQsTUFBTSxDQUFDLFNBQVMsQ0FBQztFQUN4QztFQUFDLFNBRWNDLElBQUk7SUFBQTtFQUFBO0VBQUE7SUFBQSxtRUFBbkI7TUFBQSw0Q0FLYUMsZUFBZSxFQVNmQyxtQkFBbUI7TUFBQTtRQUFBO1VBQUE7WUFBbkJBLG1CQUFtQixtQ0FBRztjQUMzQkMsYUFBYSxFQUFFOztjQUVmOztjQUVBQyxVQUFVLENBQUMvQyxVQUFVLEVBQUUsSUFBSSxDQUFDO2NBRTVCZ0Qsa0JBQWtCLEVBQUU7Y0FFcEJELFVBQVUsQ0FBQ0UsWUFBWSxFQUFFN0MsWUFBWSxDQUFDO2NBRXRDekIsZUFBZSxDQUFDUSxPQUFPLENBQUMsVUFBQStELEdBQUcsRUFBSTtnQkFDM0JBLEdBQUcsQ0FBQ0MsZ0JBQWdCLENBQUMsT0FBTyxFQUFFQyxXQUFXLENBQUM7Y0FDOUMsQ0FBQyxDQUFDO2NBRUY3RSxRQUFRLENBQUNHLGdCQUFnQixDQUFDLGVBQWUsQ0FBQyxDQUFDUyxPQUFPLENBQUMsVUFBQWtFLFFBQVEsRUFBSTtnQkFDM0RBLFFBQVEsQ0FBQ0YsZ0JBQWdCLENBQUMsT0FBTyxFQUFFRyxjQUFjLENBQUM7Y0FDdEQsQ0FBQyxDQUFDO2NBRUYvRSxRQUFRLENBQUNHLGdCQUFnQixDQUFDLFdBQVcsQ0FBQyxDQUFDUyxPQUFPLENBQUMsVUFBQStELEdBQUcsRUFBSTtnQkFDbERBLEdBQUcsQ0FBQ0MsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLFlBQU07a0JBQ2hDLElBQU1JLFNBQVMsR0FBR0wsR0FBRyxDQUFDTSxZQUFZLENBQUMsWUFBWSxDQUFDO2tCQUNoREMsZUFBZSxDQUFDRixTQUFTLENBQUM7Z0JBQzlCLENBQUMsQ0FBQztjQUNOLENBQUMsQ0FBQztjQUVGaEYsUUFBUSxDQUFDQyxhQUFhLENBQUMsU0FBUyxDQUFDLENBQUMyRSxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsVUFBQ08sQ0FBQyxFQUFLO2dCQUMvRCxJQUFNQyxXQUFXLEdBQUdwRixRQUFRLENBQUNDLGFBQWEsQ0FBQyxtQkFBbUIsQ0FBQztnQkFDL0QsSUFBSW1GLFdBQVcsSUFBSSxDQUFDQSxXQUFXLENBQUNDLFFBQVEsQ0FBQ0YsQ0FBQyxDQUFDRyxNQUFNLENBQUMsRUFBRTtrQkFDaERQLGNBQWMsRUFBRTtnQkFDcEI7Y0FDSixDQUFDLENBQUM7Y0FHRlEsWUFBWSxFQUFFO2NBRWR2RCxNQUFNLENBQUM0QyxnQkFBZ0IsQ0FBQyxXQUFXLEVBQUVZLFdBQVcsQ0FBQztjQUNqRHhELE1BQU0sQ0FBQzRDLGdCQUFnQixDQUFDLFdBQVcsRUFBRWEsVUFBVSxDQUFDO2NBQ2hEekQsTUFBTSxDQUFDNEMsZ0JBQWdCLENBQUMsU0FBUyxFQUFFYyxTQUFTLENBQUM7Y0FDN0MxRCxNQUFNLENBQUM0QyxnQkFBZ0IsQ0FBQyxZQUFZLEVBQUVjLFNBQVMsQ0FBQztjQUVoRDFELE1BQU0sQ0FBQzRDLGdCQUFnQixDQUFDLFlBQVksRUFBRVksV0FBVyxDQUFDO2NBQ2xEeEQsTUFBTSxDQUFDNEMsZ0JBQWdCLENBQUMsV0FBVyxFQUFFYSxVQUFVLENBQUM7Y0FDaER6RCxNQUFNLENBQUM0QyxnQkFBZ0IsQ0FBQyxVQUFVLEVBQUVjLFNBQVMsQ0FBQztjQUU5Q3ZELE9BQU8sQ0FBQ3lDLGdCQUFnQixDQUFDLE9BQU8sRUFBRTtnQkFBQSxPQUFNZSxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUM7Y0FBQSxFQUFDO2NBQ3ZEdkQsUUFBUSxDQUFDd0MsZ0JBQWdCLENBQUMsT0FBTyxFQUFFO2dCQUFBLE9BQU1lLFVBQVUsQ0FBQyxDQUFDLENBQUM7Y0FBQSxFQUFDO2NBQ3ZEO1lBR0osQ0FBQztZQTNEUXRCLGVBQWUsK0JBQUc7Y0FDdkIsSUFBSVgsTUFBTSxDQUFDa0MsS0FBSyxFQUFFO2dCQUNkLElBQU1DLEtBQUssR0FBR25DLE1BQU0sQ0FBQ2tDLEtBQUssQ0FBQ0UsUUFBUSxFQUFFO2dCQUNyQ25FLE1BQU0sR0FBR2tFLEtBQUssQ0FBQ0UsSUFBSSxDQUFDQyxZQUFZLElBQUlILEtBQUssQ0FBQ0UsSUFBSSxDQUFDRSxFQUFFLElBQUksRUFBRTtjQUMzRCxDQUFDLE1BQU0sSUFBSXZDLE1BQU0sQ0FBQ3dDLFNBQVMsRUFBRTtnQkFDekJ2RSxNQUFNLEdBQUcrQixNQUFNLENBQUN3QyxTQUFTO2NBQzdCO1lBQ0osQ0FBQztZQVhHQyxRQUFRLEdBQUcsQ0FBQztZQUNWQyxXQUFXLEdBQUcsRUFBRTtZQUNoQkMsZUFBZSxHQUFHLEVBQUU7WUErRHBCQyxhQUFhLEdBQUcsSUFBSXhDLE9BQU8sQ0FBQyxVQUFDeUMsT0FBTyxFQUFLO2NBQzNDLElBQU1DLFFBQVEsR0FBR0MsV0FBVyxDQUFDLFlBQU07Z0JBQy9CcEMsZUFBZSxFQUFFO2dCQUNqQixJQUFJMUMsTUFBTSxJQUFJd0UsUUFBUSxJQUFJQyxXQUFXLEVBQUU7a0JBQ25DOUIsbUJBQW1CLEVBQUU7a0JBQ3JCb0MsYUFBYSxDQUFDRixRQUFRLENBQUM7a0JBQ3ZCRCxPQUFPLEVBQUU7Z0JBQ2I7Z0JBQ0FKLFFBQVEsRUFBRTtjQUNkLENBQUMsRUFBRUUsZUFBZSxDQUFDO1lBQ3ZCLENBQUMsQ0FBQztZQUFBO1lBQUEsT0FFSUMsYUFBYTtVQUFBO1VBQUE7WUFBQTtRQUFBO01BQUE7SUFBQSxDQUN0QjtJQUFBO0VBQUE7RUFFRCxTQUFTSyxnQkFBZ0IsR0FBRztJQUN4QixPQUFPakUsT0FBTywyQkFBb0JuQixNQUFNLEVBQUcsQ0FDdEN3QixJQUFJLENBQUMsVUFBQUksSUFBSSxFQUFJO01BQ1YvQixRQUFRLEdBQUcrQixJQUFJO01BQ2Z5RCxTQUFTLEVBQUU7TUFDWCxJQUFNQyxVQUFVLEdBQUc3RyxRQUFRLENBQUM4RyxjQUFjLENBQUMsVUFBVSxDQUFDO01BQ3RELElBQU1DLGdCQUFnQixHQUFHLElBQUlDLGdCQUFnQixDQUFDLFVBQVVDLFNBQVMsRUFBRTtRQUMvREYsZ0JBQWdCLENBQUNHLFVBQVUsRUFBRTtRQUM3Qk4sU0FBUyxFQUFFO1FBQ1hHLGdCQUFnQixDQUFDSSxPQUFPLENBQUNOLFVBQVUsRUFBRTtVQUFFTyxTQUFTLEVBQUUsSUFBSTtVQUFFQyxPQUFPLEVBQUU7UUFBSyxDQUFDLENBQUM7TUFDNUUsQ0FBQyxDQUFDO01BQ0ZOLGdCQUFnQixDQUFDSSxPQUFPLENBQUNOLFVBQVUsRUFBRTtRQUNqQ08sU0FBUyxFQUFFLElBQUk7UUFDZkMsT0FBTyxFQUFFO01BQ2IsQ0FBQyxDQUFDO0lBRU4sQ0FBQyxDQUFDO0VBQ1Y7RUFHQSxTQUFTNUMsa0JBQWtCLEdBQUU7SUFDekIsSUFBTXpDLE1BQU0sR0FBR2hDLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLHFCQUFxQixDQUFDO0lBQzVELElBQU1xSCxNQUFNLEdBQUd0RixNQUFNLENBQUM3QixnQkFBZ0IsQ0FBQywwQkFBMEIsQ0FBQztJQUNsRSxJQUFNb0gsSUFBSSxHQUFHdkgsUUFBUSxDQUFDRyxnQkFBZ0IsQ0FBQyx1QkFBdUIsQ0FBQztJQUMvRCxJQUFNK0IsSUFBSSxHQUFHbEMsUUFBUSxDQUFDRyxnQkFBZ0IsQ0FBQywyQkFBMkIsQ0FBQztJQUNuRSxJQUFNZ0MsT0FBTyxHQUFHbkMsUUFBUSxDQUFDQyxhQUFhLENBQUMsc0JBQXNCLENBQUM7SUFDOUQsSUFBTW1DLFFBQVEsR0FBR3BDLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLHVCQUF1QixDQUFDO0lBRWhFLElBQUlvQyxZQUFZLEdBQUcsQ0FBQztJQUVwQixTQUFTa0QsWUFBWSxDQUFDaUMsS0FBSyxFQUFFO01BQ3pCRixNQUFNLENBQUMxRyxPQUFPLENBQUMsVUFBQTZHLEtBQUs7UUFBQSxPQUFJQSxLQUFLLENBQUMzRyxTQUFTLENBQUNxRCxNQUFNLENBQUMsU0FBUyxDQUFDO01BQUEsRUFBQztNQUMxRG9ELElBQUksQ0FBQzNHLE9BQU8sQ0FBQyxVQUFBOEcsR0FBRztRQUFBLE9BQUlBLEdBQUcsQ0FBQzVHLFNBQVMsQ0FBQ3FELE1BQU0sQ0FBQyxTQUFTLENBQUM7TUFBQSxFQUFDO01BQ3BEakMsSUFBSSxDQUFDdEIsT0FBTyxDQUFDLFVBQUErRyxHQUFHO1FBQUEsT0FBSUEsR0FBRyxDQUFDN0csU0FBUyxDQUFDcUQsTUFBTSxDQUFDLFNBQVMsQ0FBQztNQUFBLEVBQUM7TUFFcERtRCxNQUFNLENBQUNFLEtBQUssQ0FBQyxDQUFDMUcsU0FBUyxDQUFDa0QsR0FBRyxDQUFDLFNBQVMsQ0FBQztNQUN0Q3VELElBQUksQ0FBQ0MsS0FBSyxDQUFDLENBQUMxRyxTQUFTLENBQUNrRCxHQUFHLENBQUMsU0FBUyxDQUFDO01BQ3BDOUIsSUFBSSxDQUFDc0YsS0FBSyxDQUFDLENBQUMxRyxTQUFTLENBQUNrRCxHQUFHLENBQUMsU0FBUyxDQUFDO0lBQ3hDO0lBRUEsU0FBUzRELFFBQVEsR0FBRztNQUNoQnZGLFlBQVksR0FBRyxDQUFDQSxZQUFZLEdBQUcsQ0FBQyxHQUFHaUYsTUFBTSxDQUFDL0UsTUFBTSxJQUFJK0UsTUFBTSxDQUFDL0UsTUFBTTtNQUNqRWdELFlBQVksQ0FBQ2xELFlBQVksQ0FBQztJQUM5QjtJQUVBLFNBQVN3RixTQUFTLEdBQUc7TUFDakJ4RixZQUFZLEdBQUcsQ0FBQ0EsWUFBWSxHQUFHLENBQUMsSUFBSWlGLE1BQU0sQ0FBQy9FLE1BQU07TUFDakRnRCxZQUFZLENBQUNsRCxZQUFZLENBQUM7SUFDOUI7SUFFQUYsT0FBTyxDQUFDeUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFZ0QsUUFBUSxDQUFDO0lBQzNDeEYsUUFBUSxDQUFDd0MsZ0JBQWdCLENBQUMsT0FBTyxFQUFFaUQsU0FBUyxDQUFDO0lBRTdDTixJQUFJLENBQUMzRyxPQUFPLENBQUMsVUFBQzhHLEdBQUcsRUFBRUYsS0FBSyxFQUFLO01BQ3pCRSxHQUFHLENBQUM5QyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsWUFBTTtRQUNoQ3ZDLFlBQVksR0FBR21GLEtBQUs7UUFDcEJqQyxZQUFZLENBQUNsRCxZQUFZLENBQUM7TUFDOUIsQ0FBQyxDQUFDO0lBQ04sQ0FBQyxDQUFDO0lBRUZILElBQUksQ0FBQ3RCLE9BQU8sQ0FBQyxVQUFDK0csR0FBRyxFQUFFSCxLQUFLLEVBQUs7TUFDekJHLEdBQUcsQ0FBQy9DLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxZQUFNO1FBQ2hDdkMsWUFBWSxHQUFHbUYsS0FBSztRQUNwQmpDLFlBQVksQ0FBQ2xELFlBQVksQ0FBQztNQUM5QixDQUFDLENBQUM7SUFDTixDQUFDLENBQUM7RUFFTjtFQUVBLFNBQVNrQyxhQUFhLEdBQUc7SUFDckIsSUFBTXVELFFBQVEsR0FBRyxHQUFHO0lBRXBCdEQsVUFBVSxDQUFDLFlBQU07TUFDYixJQUFNdUQsWUFBWSxHQUFHLFNBQWZBLFlBQVksQ0FBSXJILFFBQVE7UUFBQSxPQUFLQSxRQUFRLENBQUNFLE9BQU8sQ0FBQyxVQUFBQyxFQUFFO1VBQUEsT0FBSUEsRUFBRSxDQUFDQyxTQUFTLENBQUNxRCxNQUFNLENBQUMsTUFBTSxDQUFDO1FBQUEsRUFBQztNQUFBO01BQ3RGLElBQU02RCxZQUFZLEdBQUcsU0FBZkEsWUFBWSxDQUFJdEgsUUFBUTtRQUFBLE9BQUtBLFFBQVEsQ0FBQ0UsT0FBTyxDQUFDLFVBQUFDLEVBQUU7VUFBQSxPQUFJQSxFQUFFLENBQUNDLFNBQVMsQ0FBQ2tELEdBQUcsQ0FBQyxNQUFNLENBQUM7UUFBQSxFQUFDO01BQUE7TUFFbkYsSUFBSSxDQUFDckMsTUFBTSxFQUFFO1FBQ1RxRyxZQUFZLENBQUM1SCxlQUFlLENBQUM7UUFDN0I0SCxZQUFZLENBQUMzSCxZQUFZLENBQUM7UUFDMUIwSCxZQUFZLENBQUM3SCxVQUFVLENBQUM7UUFDeEJ1QixVQUFVLEVBQUU7UUFDWixPQUFPcUMsT0FBTyxDQUFDeUMsT0FBTyxDQUFDLEtBQUssQ0FBQztNQUNqQztNQUVBeUIsWUFBWSxDQUFDOUgsVUFBVSxDQUFDO01BRXhCLE9BQU93QyxPQUFPLG9CQUFhZixNQUFNLGdCQUFhLENBQUNvQixJQUFJLENBQUMsVUFBQUMsR0FBRyxFQUFJO1FBQ3ZELElBQUlBLEdBQUcsQ0FBQ2lGLE1BQU0sRUFBRTtVQUNaRCxZQUFZLENBQUM1SCxlQUFlLENBQUM7VUFDN0IySCxZQUFZLENBQUMxSCxZQUFZLENBQUM7UUFDOUIsQ0FBQyxNQUFNO1VBQ0gwSCxZQUFZLENBQUMzSCxlQUFlLENBQUM7VUFDN0I0SCxZQUFZLENBQUMzSCxZQUFZLENBQUM7UUFDOUI7UUFDQW9CLFVBQVUsRUFBRTtNQUNoQixDQUFDLENBQUM7SUFDTixDQUFDLEVBQUVxRyxRQUFRLENBQUM7RUFDaEI7RUFFQSxTQUFTdkUsV0FBVyxDQUFDSCxHQUFHLEVBQUU7SUFDdEIsSUFBTThFLFVBQVUsR0FBRztNQUNmQyxNQUFNLEVBQUV6RSxNQUFNLENBQUNDLFFBQVEsQ0FBQ0MsSUFBSTtNQUM1QnFFLE1BQU0sRUFBRXRHLE1BQU07TUFDZHlHLFNBQVMsRUFBRSxDQUFBaEYsR0FBRyxhQUFIQSxHQUFHLHVCQUFIQSxHQUFHLENBQUVFLEtBQUssTUFBSUYsR0FBRyxhQUFIQSxHQUFHLHVCQUFIQSxHQUFHLENBQUVpRixJQUFJLE1BQUlqRixHQUFHLGFBQUhBLEdBQUcsdUJBQUhBLEdBQUcsQ0FBRWtGLE9BQU8sS0FBSSxlQUFlO01BQ3JFQyxJQUFJLEVBQUUsQ0FBQW5GLEdBQUcsYUFBSEEsR0FBRyx1QkFBSEEsR0FBRyxDQUFFb0YsSUFBSSxLQUFJLGNBQWM7TUFDakNDLEtBQUssRUFBRSxDQUFBckYsR0FBRyxhQUFIQSxHQUFHLHVCQUFIQSxHQUFHLENBQUVxRixLQUFLLEtBQUk7SUFDekIsQ0FBQztJQUVENUYsS0FBSyxDQUFDLDBDQUEwQyxFQUFFO01BQzlDNkYsTUFBTSxFQUFFLE1BQU07TUFDZDVGLE9BQU8sRUFBRTtRQUNMLGNBQWMsRUFBRTtNQUNwQixDQUFDO01BQ0RtQixJQUFJLEVBQUUwRSxJQUFJLENBQUNDLFNBQVMsQ0FBQ1YsVUFBVTtJQUNuQyxDQUFDLENBQUMsU0FBTSxDQUFDN0UsT0FBTyxDQUFDd0YsSUFBSSxDQUFDO0VBQzFCO0VBRUEsU0FBU2pDLFNBQVMsR0FBRztJQUNqQixJQUFNa0MsS0FBSyxHQUFHOUksUUFBUSxDQUFDRyxnQkFBZ0IsQ0FBQyxrQkFBa0IsQ0FBQztJQUMzRCxJQUFJMkksS0FBSyxJQUFJQSxLQUFLLENBQUN2RyxNQUFNLEVBQUU7TUFDdkIsSUFBR2IsY0FBYyxFQUFDO1FBQ2RvSCxLQUFLLENBQUNsSSxPQUFPLENBQUMsVUFBQW1JLElBQUksRUFBSTtVQUNsQixJQUFNQyxHQUFHLEdBQUdELElBQUksQ0FBQzlELFlBQVksQ0FBQyxnQkFBZ0IsQ0FBQztVQUMvQzhELElBQUksQ0FBQzVILFNBQVMsR0FBR0MsUUFBUSxDQUFDNEgsR0FBRyxDQUFDLElBQUksMENBQTBDLEdBQUdBLEdBQUc7VUFDbEYsSUFBSTVILFFBQVEsQ0FBQzRILEdBQUcsQ0FBQyxFQUFFO1lBQ2ZELElBQUksQ0FBQzFILGVBQWUsQ0FBQyxnQkFBZ0IsQ0FBQztVQUMxQztRQUNKLENBQUMsQ0FBQztNQUNOLENBQUMsTUFBSTtRQUNEZ0MsT0FBTyxDQUFDNEYsR0FBRyxDQUFDLG9CQUFvQixDQUFDO01BQ3JDO0lBQ0o7SUFDQUMscUJBQXFCLENBQUNuSixRQUFRLENBQUM7RUFDbkM7RUFFQSxTQUFTbUoscUJBQXFCLENBQUNDLE9BQU8sRUFBRTtJQUNwQyxJQUFJLENBQUNBLE9BQU8sRUFBRTtNQUNWO0lBQ0o7SUFDQSx3QkFBbUIsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLDBCQUFFO01BQTVCLElBQU1DLElBQUk7TUFDWEQsT0FBTyxDQUFDckksU0FBUyxDQUFDcUQsTUFBTSxDQUFDaUYsSUFBSSxDQUFDO0lBQ2xDO0lBQ0FELE9BQU8sQ0FBQ3JJLFNBQVMsQ0FBQ2tELEdBQUcsQ0FBQ3pDLE1BQU0sQ0FBQztFQUNqQztFQUVBLFNBQVM4SCxXQUFXLENBQUNDLElBQUksRUFBRTtJQUN2QjVHLE9BQU8sa0JBQVc0RyxJQUFJLEVBQUcsQ0FDcEJ2RyxJQUFJLENBQUMsVUFBQXdHLElBQUksRUFBSTtNQUNWLElBQU1DLEtBQUssR0FBR0QsSUFBSTtNQUNsQkUsa0JBQWtCLENBQUNELEtBQUssRUFBRTdILE1BQU0sRUFBRTJILElBQUksQ0FBQztJQUMzQyxDQUFDLENBQUM7RUFDVjtFQUVBLFNBQVNHLGtCQUFrQixDQUFDRCxLQUFLLEVBQUVFLGFBQWEsRUFBRUosSUFBSSxFQUFFO0lBQ3BESyxZQUFZLENBQUN4SSxTQUFTLEdBQUcsRUFBRTtJQUMzQnlJLGlCQUFpQixDQUFDekksU0FBUyxHQUFHLEVBQUU7SUFDaEMsSUFBSSxFQUFDcUksS0FBSyxhQUFMQSxLQUFLLGVBQUxBLEtBQUssQ0FBRWpILE1BQU0sR0FBRTtJQUNwQixJQUFNc0gsV0FBVyxHQUFHTCxLQUFLLENBQUNNLElBQUksQ0FBQyxVQUFBQyxJQUFJO01BQUEsT0FBSUEsSUFBSSxDQUFDOUIsTUFBTSxLQUFLeUIsYUFBYTtJQUFBLEVBQUM7SUFDckUsSUFBTU0sZ0JBQWdCLEdBQUdILFdBQVcsSUFBSUwsS0FBSyxDQUFDUyxLQUFLLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDQyxJQUFJLENBQUMsVUFBQUgsSUFBSTtNQUFBLE9BQUlBLElBQUksQ0FBQzlCLE1BQU0sS0FBS3lCLGFBQWE7SUFBQSxFQUFDO0lBQ3RHLElBQU1TLGNBQWMsR0FBRyxDQUFDeEksTUFBTSxJQUFJcUksZ0JBQWdCLEdBQUksRUFBRSxHQUFHLEVBQUU7SUFDN0QsSUFBTUksUUFBUSxHQUFHWixLQUFLLENBQUNTLEtBQUssQ0FBQyxDQUFDLEVBQUVFLGNBQWMsQ0FBQztJQUMvQ0MsUUFBUSxDQUFDeEosT0FBTyxDQUFDLFVBQUFtSixJQUFJLEVBQUk7TUFDckJNLFdBQVcsQ0FBQ04sSUFBSSxFQUFFQSxJQUFJLENBQUM5QixNQUFNLEtBQUt5QixhQUFhLEVBQUVDLFlBQVksRUFBRVMsUUFBUSxFQUFFSixnQkFBZ0IsRUFBRVYsSUFBSSxDQUFDO0lBQ3BHLENBQUMsQ0FBQztJQUNGLElBQUksQ0FBQ1UsZ0JBQWdCLElBQUlILFdBQVcsRUFBRTtNQUNsQ1EsV0FBVyxDQUFDUixXQUFXLEVBQUUsSUFBSSxFQUFFRCxpQkFBaUIsRUFBRUosS0FBSyxFQUFFLEtBQUssRUFBRUYsSUFBSSxDQUFDO0lBQ3pFO0VBQ0o7RUFFQSxTQUFTZSxXQUFXLENBQUNOLElBQUksRUFBRU8sYUFBYSxFQUFFQyxLQUFLLEVBQUVmLEtBQUssRUFBRVEsZ0JBQWdCLEVBQUVWLElBQUksRUFBRTtJQUM1RSxJQUFNa0IsU0FBUyxHQUFHLFNBQVpBLFNBQVMsQ0FBSUMsUUFBUSxFQUFtQjtNQUFBLElBQWpCQyxPQUFPLHVFQUFHLENBQUMsQ0FBQztNQUNyQyx5QkFBZ0RBLE9BQU8sQ0FBL0NDLFNBQVM7UUFBVEEsU0FBUyxtQ0FBRyxLQUFLO1FBQUEsb0JBQXVCRCxPQUFPLENBQTVCRSxRQUFRO1FBQVJBLFFBQVEsa0NBQUcsS0FBSztNQUMzQyxJQUFNQyxPQUFPLEdBQUc3SyxRQUFRLENBQUM4SyxhQUFhLENBQUMsS0FBSyxDQUFDO01BQzdDRCxPQUFPLENBQUMvSixTQUFTLENBQUNrRCxHQUFHLENBQUMsWUFBWSxDQUFDO01BRW5DLElBQU0rRyxTQUFTLEdBQUd2QixLQUFLLENBQUN3QixPQUFPLENBQUNQLFFBQVEsQ0FBQyxHQUFHLENBQUM7TUFDN0MsSUFBTVEsUUFBUSxHQUFHekosS0FBSyxHQUFHLElBQUksR0FBRzBKLHNCQUFzQixDQUFDSCxTQUFTLEVBQUV6QixJQUFJLENBQUM7TUFFdkUsSUFBSXlCLFNBQVMsSUFBSSxDQUFDLEVBQUU7UUFDaEJGLE9BQU8sQ0FBQy9KLFNBQVMsQ0FBQ2tELEdBQUcsZ0JBQVMrRyxTQUFTLEVBQUc7TUFDOUM7TUFFQSxJQUFJSixTQUFTLElBQUlMLGFBQWEsSUFBSSxDQUFDTSxRQUFRLEVBQUU7UUFDekNDLE9BQU8sQ0FBQy9KLFNBQVMsQ0FBQ2tELEdBQUcsQ0FBQyxLQUFLLENBQUM7TUFDaEMsQ0FBQyxNQUFNLElBQUk0RyxRQUFRLEVBQUU7UUFDakJDLE9BQU8sQ0FBQy9KLFNBQVMsQ0FBQ2tELEdBQUcsQ0FBQyxXQUFXLENBQUM7TUFDdEM7TUFFQTZHLE9BQU8sQ0FBQzFKLFNBQVMsNEVBRVg0SixTQUFTLEdBQUcsRUFBRSxHQUFHLEdBQUcsR0FBR0EsU0FBUyxHQUFHQSxTQUFTLCtCQUM1Q1QsYUFBYSxJQUFJLENBQUNNLFFBQVEsR0FBRyxvQkFBb0IsR0FBR08sWUFBWSxDQUFDLEtBQUssQ0FBQyxHQUFHLFNBQVMsR0FBRyxFQUFFLGdHQUd4RmIsYUFBYSxJQUFJLENBQUNNLFFBQVEsR0FBR0gsUUFBUSxDQUFDeEMsTUFBTSxHQUFHbUQsVUFBVSxDQUFDWCxRQUFRLENBQUN4QyxNQUFNLENBQUMsZ0dBRzFFd0MsUUFBUSxDQUFDWSxNQUFNLGdHQUdmSixRQUFRLEdBQUdFLFlBQVksQ0FBQ0YsUUFBUSxDQUFDLEdBQUcsS0FBSyxtQ0FFbEQ7TUFFR1YsS0FBSyxDQUFDZSxNQUFNLENBQUNULE9BQU8sQ0FBQztJQUN6QixDQUFDO0lBQ0QsSUFBSVAsYUFBYSxJQUFJLENBQUNOLGdCQUFnQixFQUFFO01BQ3BDLElBQU14QyxLQUFLLEdBQUdnQyxLQUFLLENBQUN3QixPQUFPLENBQUNqQixJQUFJLENBQUM7TUFDakMsSUFBSVAsS0FBSyxDQUFDaEMsS0FBSyxHQUFHLENBQUMsQ0FBQyxFQUFFO1FBQ2xCZ0QsU0FBUyxDQUFDaEIsS0FBSyxDQUFDaEMsS0FBSyxHQUFHLENBQUMsQ0FBQyxFQUFFO1VBQUVvRCxRQUFRLEVBQUU7UUFBSyxDQUFDLENBQUM7TUFDbkQ7TUFDQUosU0FBUyxDQUFDVCxJQUFJLEVBQUU7UUFBRVksU0FBUyxFQUFFO01BQUssQ0FBQyxDQUFDO01BQ3BDLElBQUluQixLQUFLLENBQUNoQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLEVBQUU7UUFDbEJnRCxTQUFTLENBQUNoQixLQUFLLENBQUNoQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLEVBQUU7VUFBRW9ELFFBQVEsRUFBRTtRQUFLLENBQUMsQ0FBQztNQUNuRDtJQUNKLENBQUMsTUFBTTtNQUNISixTQUFTLENBQUNULElBQUksQ0FBQztJQUNuQjtFQUNKO0VBR0EsU0FBU29CLFlBQVksQ0FBQ25DLEdBQUcsRUFBRXVDLFlBQVksRUFBRTtJQUNyQyxJQUFJLENBQUN2QyxHQUFHLEVBQUU7TUFDTjtJQUNKO0lBQ0EsSUFBSXdDLE9BQU8sR0FBR2hLLEtBQUssR0FBR3dILEdBQUcsa0RBQTJDQSxHQUFHLENBQUU7SUFFekV1QyxZQUFZLEdBQUlDLE9BQU8sSUFBSXhDLEdBQUc7SUFDOUIsT0FBTzVILFFBQVEsQ0FBQzRILEdBQUcsQ0FBQyxJQUFJdUMsWUFBWTtFQUN4QztFQUVBLFNBQVNILFVBQVUsQ0FBQ3pKLE1BQU0sRUFBRTtJQUN4QixPQUFPLElBQUksR0FBR0EsTUFBTSxDQUFDeEMsUUFBUSxFQUFFLENBQUM4SyxLQUFLLENBQUMsQ0FBQyxDQUFDO0VBQzVDO0VBRUEsU0FBU2lCLHNCQUFzQixDQUFDTyxLQUFLLEVBQUVuQyxJQUFJLEVBQUU7SUFDekMsSUFBSW1DLEtBQUssSUFBSSxDQUFDLEVBQUUsdUJBQWdCbkMsSUFBSSxjQUFJbUMsS0FBSztJQUM3QyxJQUFJQSxLQUFLLElBQUksRUFBRSxFQUFFLHVCQUFnQm5DLElBQUk7SUFDckMsSUFBSW1DLEtBQUssSUFBSSxFQUFFLEVBQUUsdUJBQWdCbkMsSUFBSTtJQUNyQyxJQUFJbUMsS0FBSyxJQUFJLEVBQUUsRUFBRSx1QkFBZ0JuQyxJQUFJO0lBQ3JDLElBQUltQyxLQUFLLElBQUksRUFBRSxFQUFFLHVCQUFnQm5DLElBQUk7SUFDckMsSUFBSW1DLEtBQUssSUFBSSxHQUFHLEVBQUUsdUJBQWdCbkMsSUFBSTtJQUN0QyxJQUFJbUMsS0FBSyxJQUFJLEdBQUcsRUFBRSx1QkFBZ0JuQyxJQUFJO0lBQ3RDLElBQUltQyxLQUFLLElBQUksR0FBRyxFQUFFLHVCQUFnQm5DLElBQUk7SUFDdEMsSUFBSW1DLEtBQUssSUFBSSxHQUFHLEVBQUUsdUJBQWdCbkMsSUFBSTtJQUN0QyxJQUFJbUMsS0FBSyxJQUFJLEdBQUcsRUFBRSx1QkFBZ0JuQyxJQUFJO0VBQzFDO0VBRUEsU0FBU3pFLFdBQVcsR0FBRztJQUNuQixJQUFJLENBQUNsRCxNQUFNLEVBQUU7TUFDVDtJQUNKO0lBQ0EsSUFBTStKLE1BQU0sR0FBRztNQUFFekQsTUFBTSxFQUFFdEc7SUFBTyxDQUFDO0lBQ2pDa0IsS0FBSyxDQUFDdEUsTUFBTSxHQUFHLFFBQVEsRUFBRTtNQUNyQnVFLE9BQU8sRUFBRTtRQUNMLFFBQVEsRUFBRSxrQkFBa0I7UUFDNUIsY0FBYyxFQUFFO01BQ3BCLENBQUM7TUFDRDRGLE1BQU0sRUFBRSxNQUFNO01BQ2R6RSxJQUFJLEVBQUUwRSxJQUFJLENBQUNDLFNBQVMsQ0FBQzhDLE1BQU07SUFDL0IsQ0FBQyxDQUFDLENBQUMzSSxJQUFJLENBQUMsVUFBQUMsR0FBRztNQUFBLE9BQUlBLEdBQUcsQ0FBQ0csSUFBSSxFQUFFO0lBQUEsRUFBQyxDQUNyQkosSUFBSSxDQUFDLFVBQUFDLEdBQUcsRUFBSTtNQUNUMUIsU0FBUyxHQUFHLElBQUk7TUFDaEJiLGFBQWEsQ0FBQ0wsZUFBZSxFQUFFLFFBQVEsQ0FBQztNQUN4Q1ksZ0JBQWdCLENBQUNaLGVBQWUsRUFBRSxRQUFRLENBQUM7TUFDM0NvRSxVQUFVLENBQUMsWUFBSztRQUNaeEQsZ0JBQWdCLENBQUNaLGVBQWUsRUFBRSxjQUFjLENBQUM7UUFDakRLLGFBQWEsQ0FBQ0wsZUFBZSxFQUFFLE1BQU0sQ0FBQztRQUN0Q0ssYUFBYSxDQUFDTCxlQUFlLEVBQUUsUUFBUSxDQUFDO01BQzVDLENBQUMsRUFBRSxHQUFHLENBQUM7TUFDUG9FLFVBQVUsQ0FBQyxZQUFJO1FBQ1hELGFBQWEsRUFBRTtNQUNuQixDQUFDLEVBQUUsSUFBSSxDQUFDO0lBRVosQ0FBQyxDQUFDO0VBQ1Y7RUFDQSxTQUFTZ0IsWUFBWSxHQUFHO0lBQ3BCdEQsS0FBSyxDQUFDckIsT0FBTyxDQUFDLFVBQUMrSyxJQUFJLEVBQUVuRSxLQUFLLEVBQUs7TUFDM0IsSUFBTW9FLFFBQVEsR0FBR3BFLEtBQUssR0FBR25GLFlBQVk7TUFDckMsSUFBSXdKLFdBQVcsR0FBR0QsUUFBUSxHQUFHLEdBQUc7TUFFaEMsSUFBSUEsUUFBUSxHQUFHdEosVUFBVSxHQUFHLENBQUMsRUFBRTtRQUMzQnVKLFdBQVcsSUFBSXZKLFVBQVUsR0FBRyxHQUFHO01BQ25DLENBQUMsTUFBTSxJQUFJc0osUUFBUSxHQUFHLENBQUN0SixVQUFVLEdBQUcsQ0FBQyxFQUFFO1FBQ25DdUosV0FBVyxJQUFJdkosVUFBVSxHQUFHLEdBQUc7TUFDbkM7TUFFQSxJQUFNd0osS0FBSyxHQUFHdEUsS0FBSyxLQUFLbkYsWUFBWSxHQUFHLENBQUMsR0FBRyxDQUFDO01BRTVDc0osSUFBSSxDQUFDbkksS0FBSyxDQUFDdUksU0FBUyx3QkFBaUJGLFdBQVcsc0JBQVlDLEtBQUssTUFBRztNQUNwRUgsSUFBSSxDQUFDbkksS0FBSyxDQUFDd0ksTUFBTSxHQUFHeEUsS0FBSyxLQUFLbkYsWUFBWSxHQUFHLENBQUMsR0FBRyxDQUFDO01BRWxELElBQU00SixTQUFTLEdBQUduSyxJQUFJLENBQUNvSyxHQUFHLENBQUNOLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFDcENwRSxLQUFLLEtBQUssQ0FBQyxJQUFJbkYsWUFBWSxLQUFLQyxVQUFVLEdBQUcsQ0FBRSxJQUMvQ2tGLEtBQUssS0FBS2xGLFVBQVUsR0FBRyxDQUFDLElBQUlELFlBQVksS0FBSyxDQUFFO01BRXBEc0osSUFBSSxDQUFDN0ssU0FBUyxDQUFDQyxNQUFNLENBQUMsUUFBUSxFQUFFLENBQUNrTCxTQUFTLENBQUM7TUFDM0NOLElBQUksQ0FBQzdLLFNBQVMsQ0FBQ0MsTUFBTSxDQUFDLFFBQVEsRUFBRXlHLEtBQUssS0FBS25GLFlBQVksQ0FBQztNQUV2RHNKLElBQUksQ0FBQzdLLFNBQVMsQ0FBQ3FELE1BQU0sQ0FBQyxZQUFZLEVBQUUsYUFBYSxDQUFDO01BQ2xELElBQUl5SCxRQUFRLEtBQUssQ0FBQyxJQUFLdkosWUFBWSxLQUFLQyxVQUFVLEdBQUcsQ0FBQyxJQUFJa0YsS0FBSyxLQUFLLENBQUUsRUFBRTtRQUNwRW1FLElBQUksQ0FBQzdLLFNBQVMsQ0FBQ2tELEdBQUcsQ0FBQyxhQUFhLENBQUM7TUFDckMsQ0FBQyxNQUFNLElBQUk0SCxRQUFRLEtBQUssQ0FBQyxDQUFDLElBQUt2SixZQUFZLEtBQUssQ0FBQyxJQUFJbUYsS0FBSyxLQUFLbEYsVUFBVSxHQUFHLENBQUUsRUFBRTtRQUM1RXFKLElBQUksQ0FBQzdLLFNBQVMsQ0FBQ2tELEdBQUcsQ0FBQyxZQUFZLENBQUM7TUFDcEM7SUFDSixDQUFDLENBQUM7SUFFRjlCLElBQUksQ0FBQ3RCLE9BQU8sQ0FBQyxVQUFBK0csR0FBRztNQUFBLE9BQUlBLEdBQUcsQ0FBQzdHLFNBQVMsQ0FBQ3FELE1BQU0sQ0FBQyxTQUFTLENBQUM7SUFBQSxFQUFDO0lBQ3BELElBQUlqQyxJQUFJLENBQUNHLFlBQVksQ0FBQyxFQUFFO01BQ3BCSCxJQUFJLENBQUNHLFlBQVksQ0FBQyxDQUFDdkIsU0FBUyxDQUFDa0QsR0FBRyxDQUFDLFNBQVMsQ0FBQztJQUMvQztFQUNKO0VBRUEsU0FBUzJCLFVBQVUsQ0FBQ3dHLE1BQU0sRUFBRTtJQUN4QjlKLFlBQVksR0FBRyxDQUFDQSxZQUFZLEdBQUc4SixNQUFNLEdBQUc3SixVQUFVLElBQUlBLFVBQVU7SUFDaEVpRCxZQUFZLEVBQUU7RUFDbEI7RUFFQSxTQUFTNkcsU0FBUyxDQUFDNUUsS0FBSyxFQUFFO0lBQ3RCbkYsWUFBWSxHQUFHbUYsS0FBSztJQUNwQmpDLFlBQVksRUFBRTtFQUNsQjtFQUVBLFNBQVNDLFdBQVcsQ0FBQzZHLEtBQUssRUFBRTtJQUN4QjdKLFVBQVUsR0FBRyxJQUFJO0lBQ2pCQyxNQUFNLEdBQUc0SixLQUFLLENBQUNDLE9BQU8sSUFBSUQsS0FBSyxDQUFDRSxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUNELE9BQU87RUFDdEQ7RUFFQSxTQUFTN0csVUFBVSxDQUFDNEcsS0FBSyxFQUFFO0lBQ3ZCLElBQUksQ0FBQzdKLFVBQVUsRUFBRTtJQUNqQixJQUFNZ0ssUUFBUSxHQUFHSCxLQUFLLENBQUNDLE9BQU8sSUFBSUQsS0FBSyxDQUFDRSxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUNELE9BQU87SUFDMUQsSUFBTUcsS0FBSyxHQUFHRCxRQUFRLEdBQUcvSixNQUFNO0lBRS9CLElBQUlYLElBQUksQ0FBQ29LLEdBQUcsQ0FBQ08sS0FBSyxDQUFDLEdBQUcsRUFBRSxFQUFFO01BQ3RCOUcsVUFBVSxDQUFDOEcsS0FBSyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7TUFDOUJqSyxVQUFVLEdBQUcsS0FBSztJQUN0QjtFQUNKO0VBRUEsU0FBU2tELFNBQVMsR0FBRztJQUNqQmxELFVBQVUsR0FBRyxLQUFLO0VBQ3RCO0VBRUEsU0FBUzBDLGVBQWUsQ0FBQ0YsU0FBUyxFQUEwQjtJQUFBLElBQXhCMEgsY0FBYyx1RUFBRyxLQUFLO0lBQ3RELElBQU1DLFNBQVMsR0FBRzNNLFFBQVEsQ0FBQ0csZ0JBQWdCLENBQUMsUUFBUSxDQUFDO0lBQ3JEd00sU0FBUyxDQUFDL0wsT0FBTyxDQUFDLFVBQUFnTSxDQUFDO01BQUEsT0FBSUEsQ0FBQyxDQUFDOUwsU0FBUyxDQUFDa0QsR0FBRyxDQUFDLE1BQU0sQ0FBQztJQUFBLEVBQUM7SUFFL0MsSUFBTTZJLFdBQVcsR0FBRzdNLFFBQVEsQ0FBQ0MsYUFBYSwrQkFBdUIrRSxTQUFTLFNBQUs7SUFDL0UsSUFBSTZILFdBQVcsRUFBRTtNQUNiQSxXQUFXLENBQUMvTCxTQUFTLENBQUNxRCxNQUFNLENBQUMsTUFBTSxDQUFDO01BQ3BDbkUsUUFBUSxDQUFDQyxhQUFhLENBQUMsU0FBUyxDQUFDLENBQUNhLFNBQVMsQ0FBQ3FELE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQztJQUN6RTtJQUVBLElBQU0ySSxRQUFRLEdBQUc5TSxRQUFRLENBQUNDLGFBQWEsQ0FBQyxtQkFBbUIsQ0FBQztJQUM1RCxJQUFJNk0sUUFBUSxFQUFFO01BQ1ZBLFFBQVEsQ0FBQ2hNLFNBQVMsQ0FBQ0MsTUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDMkwsY0FBYyxDQUFDO0lBQ3REO0VBQ0o7RUFHQSxTQUFTM0gsY0FBYyxHQUFHO0lBQ3RCL0UsUUFBUSxDQUFDRyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsQ0FBQ1MsT0FBTyxDQUFDLFVBQUFnTSxDQUFDO01BQUEsT0FBSUEsQ0FBQyxDQUFDOUwsU0FBUyxDQUFDa0QsR0FBRyxDQUFDLE1BQU0sQ0FBQztJQUFBLEVBQUM7SUFDekVoRSxRQUFRLENBQUNHLGdCQUFnQixDQUFDLG1CQUFtQixDQUFDLENBQUNTLE9BQU8sQ0FBQyxVQUFBZ00sQ0FBQztNQUFBLE9BQUlBLENBQUMsQ0FBQzlMLFNBQVMsQ0FBQ2tELEdBQUcsQ0FBQyxNQUFNLENBQUM7SUFBQSxFQUFDO0lBQ3BGaEUsUUFBUSxDQUFDQyxhQUFhLENBQUMsU0FBUyxDQUFDLENBQUNhLFNBQVMsQ0FBQ2tELEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQztFQUN0RTtFQUVBLFNBQVNVLFlBQVksR0FBRztJQUNwQjlDLEdBQUcsQ0FBQ2QsU0FBUyxDQUFDa0QsR0FBRyxDQUFDLE9BQU8sQ0FBQztJQUUxQlEsVUFBVSxDQUFDLFlBQU07TUFDYjVDLEdBQUcsQ0FBQ2QsU0FBUyxDQUFDcUQsTUFBTSxDQUFDLE9BQU8sQ0FBQztNQUM3QixJQUFNNEksU0FBUyxHQUFHakwsSUFBSSxDQUFDQyxNQUFNLEVBQUUsR0FBRyxJQUFJLEdBQUcsSUFBSTtNQUM3Q3lDLFVBQVUsQ0FBQ0UsWUFBWSxFQUFFcUksU0FBUyxDQUFDO0lBQ3ZDLENBQUMsRUFBRSxJQUFJLENBQUM7RUFDWjtFQUlBcEcsZ0JBQWdCLEVBQUUsQ0FBQzVELElBQUksQ0FBQ3FCLElBQUksQ0FBQzs7RUFFN0I7QUFFSixDQUFDLEdBQUciLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiAoKSB7XG5cbiAgICBjb25zdCBhcGlVUkwgPSAnaHR0cHM6Ly9mYXYtcHJvbS5jb20vYXBpX3NhbV91YSdcblxuICAgIGNvbnN0IGdldEFjdGl2ZVdlZWsgPSAocHJvbW9TdGFydERhdGUsIHdlZWtEdXJhdGlvbikgPT4ge1xuICAgICAgICBjb25zdCBjdXJyZW50RGF0ZSA9IG5ldyBEYXRlKCk7XG4gICAgICAgIGxldCB3ZWVrRGF0ZXMgPSBbXTtcblxuICAgICAgICBjb25zdCBEYXkgPSAyNCAqIDYwICogNjAgKiAxMDAwO1xuICAgICAgICBjb25zdCBXZWVrID0gd2Vla0R1cmF0aW9uICogRGF5O1xuXG4gICAgICAgIGNvbnN0IGZvcm1hdERhdGUgPSAoZGF0ZSkgPT5cbiAgICAgICAgICAgIGAke2RhdGUuZ2V0RGF0ZSgpLnRvU3RyaW5nKCkucGFkU3RhcnQoMiwgXCIwXCIpfS4keyhkYXRlLmdldE1vbnRoKCkgKyAxKS50b1N0cmluZygpLnBhZFN0YXJ0KDIsIFwiMFwiKX1gO1xuXG4gICAgICAgIGNvbnN0IGNhbGN1bGF0ZVdlZWtQZXJpb2QgPSAod2Vla0luZGV4KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBiYXNlU3RhcnQgPSBwcm9tb1N0YXJ0RGF0ZS5nZXRUaW1lKCk7XG4gICAgICAgICAgICBjb25zdCBzdGFydCA9IG5ldyBEYXRlKGJhc2VTdGFydCArIHdlZWtJbmRleCAqIFdlZWspO1xuICAgICAgICAgICAgbGV0IGVuZCA9IG5ldyBEYXRlKHN0YXJ0LmdldFRpbWUoKSArICh3ZWVrRHVyYXRpb24gKiBEYXkgLSAxKSk7XG4gICAgICAgICAgICByZXR1cm4geyBzdGFydCwgZW5kIH07XG4gICAgICAgIH07XG5cbiAgICAgICAgbGV0IGFjdGl2ZVdlZWtJbmRleCA9IG51bGw7XG5cbiAgICAgICAgLy8g0J/QtdGA0LXQstGW0YDQutCwINC/0L7RgtC+0YfQvdC+0LPQviDRgtC40LbQvdGPXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTA7IGkrKykgeyAvLyDQntCx0LzQtdC20YPRlNC80L4gMTAg0YLQuNC20L3Rj9C80LggKNGP0LrRidC+INC/0L7RgtGA0ZbQsdC90L4g0LHRltC70YzRiNC1LCDQv9GA0L7RgdGC0L4g0LfQvNGW0L3RltGC0Ywg0LvRltGH0LjQu9GM0L3QuNC6KVxuICAgICAgICAgICAgY29uc3QgeyBzdGFydCwgZW5kIH0gPSBjYWxjdWxhdGVXZWVrUGVyaW9kKGkpO1xuICAgICAgICAgICAgaWYgKGN1cnJlbnREYXRlID49IHN0YXJ0ICYmIGN1cnJlbnREYXRlIDw9IGVuZCkge1xuICAgICAgICAgICAgICAgIGFjdGl2ZVdlZWtJbmRleCA9IGkgKyAxO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGFjdGl2ZVdlZWtJbmRleDtcbiAgICB9O1xuXG4gICAgY29uc3QgcHJvbW9TdGFydERhdGUgPSBuZXcgRGF0ZShcIjIwMjUtMDUtMDVUMDA6MDA6MDBcIik7XG4gICAgY29uc3Qgd2Vla0R1cmF0aW9uID0gMTA7XG5cbiAgICBjb25zdCBhY3RpdmVXZWVrID0gZ2V0QWN0aXZlV2Vlayhwcm9tb1N0YXJ0RGF0ZSwgd2Vla0R1cmF0aW9uKSB8fCAxO1xuXG5cbiAgICBjb25zdCBtYWluUGFnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZmF2LXBhZ2VcIiksXG4gICAgICAgIHVuYXV0aE1zZ3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudW5hdXRoLW1zZycpLFxuICAgICAgICBwYXJ0aWNpcGF0ZUJ0bnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucGFydC1idG4nKSxcbiAgICAgICAgcmVkaXJlY3RCdG5zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmJ0bi1qb2luJyksXG4gICAgICAgIGxvYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc3Bpbm5lci1vdmVybGF5XCIpXG5cbiAgICBjb25zdCB1a0xlbmcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdWtMZW5nJyk7XG4gICAgY29uc3QgZW5MZW5nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2VuTGVuZycpO1xuXG4gICAgY29uc3QgdG9nZ2xlQ2xhc3NlcyA9IChlbGVtZW50cywgY2xhc3NOYW1lKSA9PiBlbGVtZW50cy5mb3JFYWNoKGVsID0+IGVsLmNsYXNzTGlzdC50b2dnbGUoYCR7Y2xhc3NOYW1lfWApKTtcbiAgICBjb25zdCB0b2dnbGVUcmFuc2xhdGVzID0gKGVsZW1lbnRzLCBkYXRhQXR0cikgPT4gZWxlbWVudHMuZm9yRWFjaChlbCA9PiB7XG4gICAgICAgIGVsLnNldEF0dHJpYnV0ZSgnZGF0YS10cmFuc2xhdGUnLCBgJHtkYXRhQXR0cn1gKVxuICAgICAgICBlbC5pbm5lckhUTUwgPSBpMThuRGF0YVtkYXRhQXR0cl0gfHwgJyotLS0tTkVFRCBUTyBCRSBUUkFOU0xBVEVELS0tLSogICBrZXk6ICAnICsgZGF0YUF0dHI7XG4gICAgICAgIGVsLnJlbW92ZUF0dHJpYnV0ZSgnZGF0YS10cmFuc2xhdGUnKTtcbiAgICB9KTtcblxuICAgIGxldCBsb2FkZXJCdG4gPSBmYWxzZVxuXG4gICAgbGV0IGxvY2FsZSA9IFwiZW5cIlxuXG4gICAgaWYgKHVrTGVuZykgbG9jYWxlID0gJ3VrJztcbiAgICBpZiAoZW5MZW5nKSBsb2NhbGUgPSAnZW4nO1xuXG4gICAgbGV0IGRlYnVnID0gZmFsc2VcblxuICAgIGlmIChkZWJ1ZykgaGlkZUxvYWRlcigpXG5cbiAgICBsZXQgaTE4bkRhdGEgPSB7fTtcbiAgICBjb25zdCB0cmFuc2xhdGVTdGF0ZSA9IHRydWU7XG4gICAgbGV0IHVzZXJJZCA9IG51bGw7XG5cbiAgICB1c2VySWQgPSAxMDAzMDAyNjhcblxuICAgIGNvbnN0IGJveCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaGFrZS1ib3gnKTtcbiAgICBjb25zdCBpbml0aWFsRGVsYXkgPSBNYXRoLnJhbmRvbSgpICogNjAwMCArIDQwMDA7XG5cbiAgICAvL3NsaWRlciB2YXJzXG5cbiAgICBjb25zdCBzbGlkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJpemVfX3NsaWRlcicpO1xuICAgIGNvbnN0IGl0ZW1zID0gc2xpZGVyLnF1ZXJ5U2VsZWN0b3JBbGwoJy5wcml6ZV9fc2xpZGUnKTtcbiAgICBjb25zdCBkb3RzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnByaXplX19uYXYtZG90cy1pdGVtJyk7XG4gICAgY29uc3QgYnRuTGVmdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcml6ZV9fbmF2LWxlZnQnKTtcbiAgICBjb25zdCBidG5SaWdodCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcml6ZV9fbmF2LXJpZ2h0Jyk7XG5cbiAgICBsZXQgY3VycmVudEluZGV4ID0gMTtcbiAgICBjb25zdCB0b3RhbEl0ZW1zID0gaXRlbXMubGVuZ3RoO1xuICAgIGxldCBpc0RyYWdnaW5nID0gZmFsc2U7XG4gICAgbGV0IHN0YXJ0WCA9IDA7XG5cbiAgICAvL3NsaWRlciB2YXJzXG5cbiAgICBjb25zdCByZXF1ZXN0ID0gZnVuY3Rpb24gKGxpbmssIGV4dHJhT3B0aW9ucykge1xuICAgICAgICByZXR1cm4gZmV0Y2goYXBpVVJMICsgbGluaywge1xuICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICdBY2NlcHQnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIC4uLihleHRyYU9wdGlvbnMgfHwge30pXG4gICAgICAgIH0pXG4gICAgICAgICAgICAudGhlbihyZXMgPT4ge1xuICAgICAgICAgICAgICAgIGlmICghcmVzLm9rKSB0aHJvdyBuZXcgRXJyb3IoJ0FQSSBlcnJvcicpO1xuICAgICAgICAgICAgICAgIHJldHVybiByZXMuanNvbigpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaChlcnIgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0FQSSByZXF1ZXN0IGZhaWxlZDonLCBlcnIpO1xuXG4gICAgICAgICAgICAgICAgcmVwb3J0RXJyb3IoZXJyKTtcblxuICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mYXYtcGFnZScpLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgICAgICAgICAgaWYgKHdpbmRvdy5sb2NhdGlvbi5ocmVmLnN0YXJ0c1dpdGgoXCJodHRwczovL3d3dy5mYXZiZXQuaHIvXCIpKSB7XG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gJy9wcm9tb2NpamUvcHJvbW9jaWphL3N0dWIvJztcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9ICcvcHJvbW9zL3Byb21vL3N0dWIvJztcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoZXJyKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaGlkZUxvYWRlcigpe1xuICAgICAgICBsb2FkZXIuY2xhc3NMaXN0LmFkZChcImhpZGVcIilcbiAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvdyA9IFwiYXV0b1wiXG4gICAgICAgIG1haW5QYWdlLmNsYXNzTGlzdC5yZW1vdmUoXCJsb2FkaW5nXCIpXG4gICAgfVxuXG4gICAgYXN5bmMgZnVuY3Rpb24gaW5pdCgpIHtcbiAgICAgICAgbGV0IGF0dGVtcHRzID0gMDtcbiAgICAgICAgY29uc3QgbWF4QXR0ZW1wdHMgPSAyMDtcbiAgICAgICAgY29uc3QgYXR0ZW1wdEludGVydmFsID0gNTA7XG5cbiAgICAgICAgZnVuY3Rpb24gdHJ5RGV0ZWN0VXNlcklkKCkge1xuICAgICAgICAgICAgaWYgKHdpbmRvdy5zdG9yZSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHN0YXRlID0gd2luZG93LnN0b3JlLmdldFN0YXRlKCk7XG4gICAgICAgICAgICAgICAgdXNlcklkID0gc3RhdGUuYXV0aC5pc0F1dGhvcml6ZWQgJiYgc3RhdGUuYXV0aC5pZCB8fCAnJztcbiAgICAgICAgICAgIH0gZWxzZSBpZiAod2luZG93LmdfdXNlcl9pZCkge1xuICAgICAgICAgICAgICAgIHVzZXJJZCA9IHdpbmRvdy5nX3VzZXJfaWQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBxdWlja0NoZWNrQW5kUmVuZGVyKCkge1xuICAgICAgICAgICAgY2hlY2tVc2VyQXV0aCgpO1xuXG4gICAgICAgICAgICAvLyBvcGVuUG9wdXBCeUF0dHIoXCJwcml6ZUxhcHRvcFwiLCB0cnVlKVxuXG4gICAgICAgICAgICBzZXRUaW1lb3V0KGhpZGVMb2FkZXIsIDEwMDApO1xuXG4gICAgICAgICAgICBTZXRTbGlkZXJXaWR0aEJsdXIoKVxuXG4gICAgICAgICAgICBzZXRUaW1lb3V0KHRyaWdnZXJTaGFrZSwgaW5pdGlhbERlbGF5KTtcblxuICAgICAgICAgICAgcGFydGljaXBhdGVCdG5zLmZvckVhY2goYnRuID0+IHtcbiAgICAgICAgICAgICAgICBidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBwYXJ0aWNpcGF0ZSk7XG4gICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucG9wdXBfX2Nsb3NlJykuZm9yRWFjaChjbG9zZUJ0biA9PiB7XG4gICAgICAgICAgICAgICAgY2xvc2VCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjbG9zZUFsbFBvcHVwcyk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm9wZW4tYnRuJykuZm9yRWFjaChidG4gPT4ge1xuICAgICAgICAgICAgICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcG9wdXBBdHRyID0gYnRuLmdldEF0dHJpYnV0ZSgnZGF0YS1wb3B1cCcpO1xuICAgICAgICAgICAgICAgICAgICBvcGVuUG9wdXBCeUF0dHIocG9wdXBBdHRyKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucG9wdXBzJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IG9wZW5Qb3B1cEVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBvcHVwOm5vdCguaGlkZSknKTtcbiAgICAgICAgICAgICAgICBpZiAob3BlblBvcHVwRWwgJiYgIW9wZW5Qb3B1cEVsLmNvbnRhaW5zKGUudGFyZ2V0KSkge1xuICAgICAgICAgICAgICAgICAgICBjbG9zZUFsbFBvcHVwcygpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuXG5cbiAgICAgICAgICAgIHVwZGF0ZVNsaWRlcigpO1xuXG4gICAgICAgICAgICBzbGlkZXIuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgaGFuZGxlU3RhcnQpO1xuICAgICAgICAgICAgc2xpZGVyLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIGhhbmRsZU1vdmUpO1xuICAgICAgICAgICAgc2xpZGVyLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCBoYW5kbGVFbmQpO1xuICAgICAgICAgICAgc2xpZGVyLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCBoYW5kbGVFbmQpO1xuXG4gICAgICAgICAgICBzbGlkZXIuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsIGhhbmRsZVN0YXJ0KTtcbiAgICAgICAgICAgIHNsaWRlci5hZGRFdmVudExpc3RlbmVyKCd0b3VjaG1vdmUnLCBoYW5kbGVNb3ZlKTtcbiAgICAgICAgICAgIHNsaWRlci5hZGRFdmVudExpc3RlbmVyKCd0b3VjaGVuZCcsIGhhbmRsZUVuZCk7XG5cbiAgICAgICAgICAgIGJ0bkxlZnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBtb3ZlU2xpZGVyKC0xKSk7XG4gICAgICAgICAgICBidG5SaWdodC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IG1vdmVTbGlkZXIoMSkpO1xuICAgICAgICAgICAgLy8gZG90cy5mb3JFYWNoKChkb3QsIGluZGV4KSA9PiBkb3QuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBnb1RvU2xpZGUoaW5kZXgpKSk7XG5cblxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3Qgd2FpdEZvclVzZXJJZCA9IG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBpbnRlcnZhbCA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0cnlEZXRlY3RVc2VySWQoKTtcbiAgICAgICAgICAgICAgICBpZiAodXNlcklkIHx8IGF0dGVtcHRzID49IG1heEF0dGVtcHRzKSB7XG4gICAgICAgICAgICAgICAgICAgIHF1aWNrQ2hlY2tBbmRSZW5kZXIoKTtcbiAgICAgICAgICAgICAgICAgICAgY2xlYXJJbnRlcnZhbChpbnRlcnZhbCk7XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYXR0ZW1wdHMrKztcbiAgICAgICAgICAgIH0sIGF0dGVtcHRJbnRlcnZhbCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGF3YWl0IHdhaXRGb3JVc2VySWQ7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbG9hZFRyYW5zbGF0aW9ucygpIHtcbiAgICAgICAgcmV0dXJuIHJlcXVlc3QoYC9uZXctdHJhbnNsYXRlcy8ke2xvY2FsZX1gKVxuICAgICAgICAgICAgLnRoZW4oanNvbiA9PiB7XG4gICAgICAgICAgICAgICAgaTE4bkRhdGEgPSBqc29uO1xuICAgICAgICAgICAgICAgIHRyYW5zbGF0ZSgpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHRhcmdldE5vZGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNhbUNoaWxsXCIpO1xuICAgICAgICAgICAgICAgIGNvbnN0IG11dGF0aW9uT2JzZXJ2ZXIgPSBuZXcgTXV0YXRpb25PYnNlcnZlcihmdW5jdGlvbiAobXV0YXRpb25zKSB7XG4gICAgICAgICAgICAgICAgICAgIG11dGF0aW9uT2JzZXJ2ZXIuZGlzY29ubmVjdCgpO1xuICAgICAgICAgICAgICAgICAgICB0cmFuc2xhdGUoKTtcbiAgICAgICAgICAgICAgICAgICAgbXV0YXRpb25PYnNlcnZlci5vYnNlcnZlKHRhcmdldE5vZGUsIHsgY2hpbGRMaXN0OiB0cnVlLCBzdWJ0cmVlOiB0cnVlIH0pO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIG11dGF0aW9uT2JzZXJ2ZXIub2JzZXJ2ZSh0YXJnZXROb2RlLCB7XG4gICAgICAgICAgICAgICAgICAgIGNoaWxkTGlzdDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgc3VidHJlZTogdHJ1ZVxuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICB9KTtcbiAgICB9XG5cblxuICAgIGZ1bmN0aW9uIFNldFNsaWRlcldpZHRoQmx1cigpe1xuICAgICAgICBjb25zdCBzbGlkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2hhbGxhbmdlX19jdXJyZW50Jyk7XG4gICAgICAgIGNvbnN0IHNsaWRlcyA9IHNsaWRlci5xdWVyeVNlbGVjdG9yQWxsKCcuY2hhbGxhbmdlX19jdXJyZW50LWl0ZW0nKTtcbiAgICAgICAgY29uc3QgdGFicyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jaGFsbGFuZ2VfX3RhYnMtaXRlbScpO1xuICAgICAgICBjb25zdCBkb3RzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNoYWxsYW5nZV9fbmF2LWRvdHMtaXRlbScpO1xuICAgICAgICBjb25zdCBidG5MZWZ0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNoYWxsYW5nZV9fbmF2LWxlZnQnKTtcbiAgICAgICAgY29uc3QgYnRuUmlnaHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2hhbGxhbmdlX19uYXYtcmlnaHQnKTtcblxuICAgICAgICBsZXQgY3VycmVudEluZGV4ID0gMDtcblxuICAgICAgICBmdW5jdGlvbiB1cGRhdGVTbGlkZXIoaW5kZXgpIHtcbiAgICAgICAgICAgIHNsaWRlcy5mb3JFYWNoKHNsaWRlID0+IHNsaWRlLmNsYXNzTGlzdC5yZW1vdmUoJ19hY3RpdmUnKSk7XG4gICAgICAgICAgICB0YWJzLmZvckVhY2godGFiID0+IHRhYi5jbGFzc0xpc3QucmVtb3ZlKCdfYWN0aXZlJykpO1xuICAgICAgICAgICAgZG90cy5mb3JFYWNoKGRvdCA9PiBkb3QuY2xhc3NMaXN0LnJlbW92ZSgnX2FjdGl2ZScpKTtcblxuICAgICAgICAgICAgc2xpZGVzW2luZGV4XS5jbGFzc0xpc3QuYWRkKCdfYWN0aXZlJyk7XG4gICAgICAgICAgICB0YWJzW2luZGV4XS5jbGFzc0xpc3QuYWRkKCdfYWN0aXZlJyk7XG4gICAgICAgICAgICBkb3RzW2luZGV4XS5jbGFzc0xpc3QuYWRkKCdfYWN0aXZlJyk7XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBtb3ZlTGVmdCgpIHtcbiAgICAgICAgICAgIGN1cnJlbnRJbmRleCA9IChjdXJyZW50SW5kZXggLSAxICsgc2xpZGVzLmxlbmd0aCkgJSBzbGlkZXMubGVuZ3RoO1xuICAgICAgICAgICAgdXBkYXRlU2xpZGVyKGN1cnJlbnRJbmRleCk7XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBtb3ZlUmlnaHQoKSB7XG4gICAgICAgICAgICBjdXJyZW50SW5kZXggPSAoY3VycmVudEluZGV4ICsgMSkgJSBzbGlkZXMubGVuZ3RoO1xuICAgICAgICAgICAgdXBkYXRlU2xpZGVyKGN1cnJlbnRJbmRleCk7XG4gICAgICAgIH1cblxuICAgICAgICBidG5MZWZ0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgbW92ZUxlZnQpO1xuICAgICAgICBidG5SaWdodC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIG1vdmVSaWdodCk7XG5cbiAgICAgICAgdGFicy5mb3JFYWNoKCh0YWIsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICB0YWIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgY3VycmVudEluZGV4ID0gaW5kZXg7XG4gICAgICAgICAgICAgICAgdXBkYXRlU2xpZGVyKGN1cnJlbnRJbmRleCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgZG90cy5mb3JFYWNoKChkb3QsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICBkb3QuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgY3VycmVudEluZGV4ID0gaW5kZXg7XG4gICAgICAgICAgICAgICAgdXBkYXRlU2xpZGVyKGN1cnJlbnRJbmRleCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG5cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjaGVja1VzZXJBdXRoKCkge1xuICAgICAgICBjb25zdCBsb2FkVGltZSA9IDIwMDtcblxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHNob3dFbGVtZW50cyA9IChlbGVtZW50cykgPT4gZWxlbWVudHMuZm9yRWFjaChlbCA9PiBlbC5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJykpO1xuICAgICAgICAgICAgY29uc3QgaGlkZUVsZW1lbnRzID0gKGVsZW1lbnRzKSA9PiBlbGVtZW50cy5mb3JFYWNoKGVsID0+IGVsLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKSk7XG5cbiAgICAgICAgICAgIGlmICghdXNlcklkKSB7XG4gICAgICAgICAgICAgICAgaGlkZUVsZW1lbnRzKHBhcnRpY2lwYXRlQnRucyk7XG4gICAgICAgICAgICAgICAgaGlkZUVsZW1lbnRzKHJlZGlyZWN0QnRucyk7XG4gICAgICAgICAgICAgICAgc2hvd0VsZW1lbnRzKHVuYXV0aE1zZ3MpO1xuICAgICAgICAgICAgICAgIGhpZGVMb2FkZXIoKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKGZhbHNlKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaGlkZUVsZW1lbnRzKHVuYXV0aE1zZ3MpO1xuXG4gICAgICAgICAgICByZXR1cm4gcmVxdWVzdChgL2ZhdnVzZXIvJHt1c2VySWR9P25vY2FjaGU9MWApLnRoZW4ocmVzID0+IHtcbiAgICAgICAgICAgICAgICBpZiAocmVzLnVzZXJpZCkge1xuICAgICAgICAgICAgICAgICAgICBoaWRlRWxlbWVudHMocGFydGljaXBhdGVCdG5zKTtcbiAgICAgICAgICAgICAgICAgICAgc2hvd0VsZW1lbnRzKHJlZGlyZWN0QnRucyk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgc2hvd0VsZW1lbnRzKHBhcnRpY2lwYXRlQnRucyk7XG4gICAgICAgICAgICAgICAgICAgIGhpZGVFbGVtZW50cyhyZWRpcmVjdEJ0bnMpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBoaWRlTG9hZGVyKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSwgbG9hZFRpbWUpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJlcG9ydEVycm9yKGVycikge1xuICAgICAgICBjb25zdCByZXBvcnREYXRhID0ge1xuICAgICAgICAgICAgb3JpZ2luOiB3aW5kb3cubG9jYXRpb24uaHJlZixcbiAgICAgICAgICAgIHVzZXJpZDogdXNlcklkLFxuICAgICAgICAgICAgZXJyb3JUZXh0OiBlcnI/LmVycm9yIHx8IGVycj8udGV4dCB8fCBlcnI/Lm1lc3NhZ2UgfHwgJ1Vua25vd24gZXJyb3InLFxuICAgICAgICAgICAgdHlwZTogZXJyPy5uYW1lIHx8ICdVbmtub3duRXJyb3InLFxuICAgICAgICAgICAgc3RhY2s6IGVycj8uc3RhY2sgfHwgJydcbiAgICAgICAgfTtcblxuICAgICAgICBmZXRjaCgnaHR0cHM6Ly9mYXYtcHJvbS5jb20vYXBpLWNtcy9yZXBvcnRzL2FkZCcsIHtcbiAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShyZXBvcnREYXRhKVxuICAgICAgICB9KS5jYXRjaChjb25zb2xlLndhcm4pO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHRyYW5zbGF0ZSgpIHtcbiAgICAgICAgY29uc3QgZWxlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS10cmFuc2xhdGVdJylcbiAgICAgICAgaWYgKGVsZW1zICYmIGVsZW1zLmxlbmd0aCkge1xuICAgICAgICAgICAgaWYodHJhbnNsYXRlU3RhdGUpe1xuICAgICAgICAgICAgICAgIGVsZW1zLmZvckVhY2goZWxlbSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGtleSA9IGVsZW0uZ2V0QXR0cmlidXRlKCdkYXRhLXRyYW5zbGF0ZScpO1xuICAgICAgICAgICAgICAgICAgICBlbGVtLmlubmVySFRNTCA9IGkxOG5EYXRhW2tleV0gfHwgJyotLS0tTkVFRCBUTyBCRSBUUkFOU0xBVEVELS0tLSogICBrZXk6ICAnICsga2V5O1xuICAgICAgICAgICAgICAgICAgICBpZiAoaTE4bkRhdGFba2V5XSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZWxlbS5yZW1vdmVBdHRyaWJ1dGUoJ2RhdGEtdHJhbnNsYXRlJyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJ0cmFuc2xhdGlvbiB3b3JrcyFcIilcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZWZyZXNoTG9jYWxpemVkQ2xhc3MobWFpblBhZ2UpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJlZnJlc2hMb2NhbGl6ZWRDbGFzcyhlbGVtZW50KSB7XG4gICAgICAgIGlmICghZWxlbWVudCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGZvciAoY29uc3QgbGFuZyBvZiBbJ3VrJywgJ2VuJ10pIHtcbiAgICAgICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShsYW5nKTtcbiAgICAgICAgfVxuICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQobG9jYWxlKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiByZW5kZXJVc2Vycyh3ZWVrKSB7XG4gICAgICAgIHJlcXVlc3QoYC91c2Vycy8ke3dlZWt9YClcbiAgICAgICAgICAgIC50aGVuKGRhdGEgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHVzZXJzID0gZGF0YTtcbiAgICAgICAgICAgICAgICBwb3B1bGF0ZVVzZXJzVGFibGUodXNlcnMsIHVzZXJJZCwgd2Vlayk7XG4gICAgICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBwb3B1bGF0ZVVzZXJzVGFibGUodXNlcnMsIGN1cnJlbnRVc2VySWQsIHdlZWspIHtcbiAgICAgICAgcmVzdWx0c1RhYmxlLmlubmVySFRNTCA9ICcnO1xuICAgICAgICByZXN1bHRzVGFibGVPdGhlci5pbm5lckhUTUwgPSAnJztcbiAgICAgICAgaWYgKCF1c2Vycz8ubGVuZ3RoKSByZXR1cm47XG4gICAgICAgIGNvbnN0IGN1cnJlbnRVc2VyID0gdXNlcnMuZmluZCh1c2VyID0+IHVzZXIudXNlcmlkID09PSBjdXJyZW50VXNlcklkKTtcbiAgICAgICAgY29uc3QgaXNUb3BDdXJyZW50VXNlciA9IGN1cnJlbnRVc2VyICYmIHVzZXJzLnNsaWNlKDAsIDEwKS5zb21lKHVzZXIgPT4gdXNlci51c2VyaWQgPT09IGN1cnJlbnRVc2VySWQpO1xuICAgICAgICBjb25zdCB0b3BVc2Vyc0xlbmd0aCA9ICF1c2VySWQgfHwgaXNUb3BDdXJyZW50VXNlciAgPyAxMyA6IDEwO1xuICAgICAgICBjb25zdCB0b3BVc2VycyA9IHVzZXJzLnNsaWNlKDAsIHRvcFVzZXJzTGVuZ3RoKTtcbiAgICAgICAgdG9wVXNlcnMuZm9yRWFjaCh1c2VyID0+IHtcbiAgICAgICAgICAgIGRpc3BsYXlVc2VyKHVzZXIsIHVzZXIudXNlcmlkID09PSBjdXJyZW50VXNlcklkLCByZXN1bHRzVGFibGUsIHRvcFVzZXJzLCBpc1RvcEN1cnJlbnRVc2VyLCB3ZWVrKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGlmICghaXNUb3BDdXJyZW50VXNlciAmJiBjdXJyZW50VXNlcikge1xuICAgICAgICAgICAgZGlzcGxheVVzZXIoY3VycmVudFVzZXIsIHRydWUsIHJlc3VsdHNUYWJsZU90aGVyLCB1c2VycywgZmFsc2UsIHdlZWspO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZGlzcGxheVVzZXIodXNlciwgaXNDdXJyZW50VXNlciwgdGFibGUsIHVzZXJzLCBpc1RvcEN1cnJlbnRVc2VyLCB3ZWVrKSB7XG4gICAgICAgIGNvbnN0IHJlbmRlclJvdyA9ICh1c2VyRGF0YSwgb3B0aW9ucyA9IHt9KSA9PiB7XG4gICAgICAgICAgICBjb25zdCB7IGhpZ2hsaWdodCA9IGZhbHNlLCBuZWlnaGJvciA9IGZhbHNlIH0gPSBvcHRpb25zO1xuICAgICAgICAgICAgY29uc3QgdXNlclJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgdXNlclJvdy5jbGFzc0xpc3QuYWRkKCd0YWJsZV9fcm93Jyk7XG5cbiAgICAgICAgICAgIGNvbnN0IHVzZXJQbGFjZSA9IHVzZXJzLmluZGV4T2YodXNlckRhdGEpICsgMTtcbiAgICAgICAgICAgIGNvbnN0IHByaXplS2V5ID0gZGVidWcgPyBudWxsIDogZ2V0UHJpemVUcmFuc2xhdGlvbktleSh1c2VyUGxhY2UsIHdlZWspO1xuXG4gICAgICAgICAgICBpZiAodXNlclBsYWNlIDw9IDMpIHtcbiAgICAgICAgICAgICAgICB1c2VyUm93LmNsYXNzTGlzdC5hZGQoYHBsYWNlJHt1c2VyUGxhY2V9YCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChoaWdobGlnaHQgfHwgaXNDdXJyZW50VXNlciAmJiAhbmVpZ2hib3IpIHtcbiAgICAgICAgICAgICAgICB1c2VyUm93LmNsYXNzTGlzdC5hZGQoJ3lvdScpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChuZWlnaGJvcikge1xuICAgICAgICAgICAgICAgIHVzZXJSb3cuY2xhc3NMaXN0LmFkZCgnX25laWdoYm9yJyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHVzZXJSb3cuaW5uZXJIVE1MID0gYFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRhYmxlX19yb3ctaXRlbVwiPlxuICAgICAgICAgICAgICAgICR7dXNlclBsYWNlIDwgMTAgPyAnMCcgKyB1c2VyUGxhY2UgOiB1c2VyUGxhY2V9XG4gICAgICAgICAgICAgICAgJHtpc0N1cnJlbnRVc2VyICYmICFuZWlnaGJvciA/ICc8c3BhbiBjbGFzcz1cInlvdVwiPicgKyB0cmFuc2xhdGVLZXkoXCJ5b3VcIikgKyAnPC9zcGFuPicgOiAnJ31cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRhYmxlX19yb3ctaXRlbVwiPlxuICAgICAgICAgICAgICAgICR7aXNDdXJyZW50VXNlciAmJiAhbmVpZ2hib3IgPyB1c2VyRGF0YS51c2VyaWQgOiBtYXNrVXNlcklkKHVzZXJEYXRhLnVzZXJpZCl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0YWJsZV9fcm93LWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAke3VzZXJEYXRhLnBvaW50c31cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRhYmxlX19yb3ctaXRlbVwiPlxuICAgICAgICAgICAgICAgICR7cHJpemVLZXkgPyB0cmFuc2xhdGVLZXkocHJpemVLZXkpIDogJyAtICd9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgYDtcblxuICAgICAgICAgICAgdGFibGUuYXBwZW5kKHVzZXJSb3cpO1xuICAgICAgICB9O1xuICAgICAgICBpZiAoaXNDdXJyZW50VXNlciAmJiAhaXNUb3BDdXJyZW50VXNlcikge1xuICAgICAgICAgICAgY29uc3QgaW5kZXggPSB1c2Vycy5pbmRleE9mKHVzZXIpO1xuICAgICAgICAgICAgaWYgKHVzZXJzW2luZGV4IC0gMV0pIHtcbiAgICAgICAgICAgICAgICByZW5kZXJSb3codXNlcnNbaW5kZXggLSAxXSwgeyBuZWlnaGJvcjogdHJ1ZSB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJlbmRlclJvdyh1c2VyLCB7IGhpZ2hsaWdodDogdHJ1ZSB9KTtcbiAgICAgICAgICAgIGlmICh1c2Vyc1tpbmRleCArIDFdKSB7XG4gICAgICAgICAgICAgICAgcmVuZGVyUm93KHVzZXJzW2luZGV4ICsgMV0sIHsgbmVpZ2hib3I6IHRydWUgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZW5kZXJSb3codXNlcik7XG4gICAgICAgIH1cbiAgICB9XG5cblxuICAgIGZ1bmN0aW9uIHRyYW5zbGF0ZUtleShrZXksIGRlZmF1bHRWYWx1ZSkge1xuICAgICAgICBpZiAoIWtleSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGxldCBuZWVkS2V5ID0gZGVidWcgPyBrZXkgOiBgKi0tLS1ORUVEIFRPIEJFIFRSQU5TTEFURUQtLS0tKiBrZXk6ICR7a2V5fWBcblxuICAgICAgICBkZWZhdWx0VmFsdWUgPSAgbmVlZEtleSB8fCBrZXk7XG4gICAgICAgIHJldHVybiBpMThuRGF0YVtrZXldIHx8IGRlZmF1bHRWYWx1ZTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBtYXNrVXNlcklkKHVzZXJJZCkge1xuICAgICAgICByZXR1cm4gXCIqKlwiICsgdXNlcklkLnRvU3RyaW5nKCkuc2xpY2UoMik7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0UHJpemVUcmFuc2xhdGlvbktleShwbGFjZSwgd2Vlaykge1xuICAgICAgICBpZiAocGxhY2UgPD0gMykgcmV0dXJuIGBwcml6ZV8ke3dlZWt9LSR7cGxhY2V9YDtcbiAgICAgICAgaWYgKHBsYWNlIDw9IDEwKSByZXR1cm4gYHByaXplXyR7d2Vla30tNC0xMGA7XG4gICAgICAgIGlmIChwbGFjZSA8PSAyNSkgcmV0dXJuIGBwcml6ZV8ke3dlZWt9LTExLTI1YDtcbiAgICAgICAgaWYgKHBsYWNlIDw9IDUwKSByZXR1cm4gYHByaXplXyR7d2Vla30tMjYtNTBgO1xuICAgICAgICBpZiAocGxhY2UgPD0gNzUpIHJldHVybiBgcHJpemVfJHt3ZWVrfS01MS03NWA7XG4gICAgICAgIGlmIChwbGFjZSA8PSAxMDApIHJldHVybiBgcHJpemVfJHt3ZWVrfS03Ni0xMDBgO1xuICAgICAgICBpZiAocGxhY2UgPD0gMTI1KSByZXR1cm4gYHByaXplXyR7d2Vla30tMTAxLTEyNWA7XG4gICAgICAgIGlmIChwbGFjZSA8PSAxNTApIHJldHVybiBgcHJpemVfJHt3ZWVrfS0xMjYtMTUwYDtcbiAgICAgICAgaWYgKHBsYWNlIDw9IDE3NSkgcmV0dXJuIGBwcml6ZV8ke3dlZWt9LTE1MS0xNzVgO1xuICAgICAgICBpZiAocGxhY2UgPD0gMjAwKSByZXR1cm4gYHByaXplXyR7d2Vla30tMTc2LTIwMGA7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcGFydGljaXBhdGUoKSB7XG4gICAgICAgIGlmICghdXNlcklkKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgcGFyYW1zID0geyB1c2VyaWQ6IHVzZXJJZCB9O1xuICAgICAgICBmZXRjaChhcGlVUkwgKyAnL3VzZXIvJywge1xuICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICdBY2NlcHQnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkocGFyYW1zKVxuICAgICAgICB9KS50aGVuKHJlcyA9PiByZXMuanNvbigpKVxuICAgICAgICAgICAgLnRoZW4ocmVzID0+IHtcbiAgICAgICAgICAgICAgICBsb2FkZXJCdG4gPSB0cnVlXG4gICAgICAgICAgICAgICAgdG9nZ2xlQ2xhc3NlcyhwYXJ0aWNpcGF0ZUJ0bnMsIFwibG9hZGVyXCIpXG4gICAgICAgICAgICAgICAgdG9nZ2xlVHJhbnNsYXRlcyhwYXJ0aWNpcGF0ZUJ0bnMsIFwibG9hZGVyXCIpXG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PntcbiAgICAgICAgICAgICAgICAgICAgdG9nZ2xlVHJhbnNsYXRlcyhwYXJ0aWNpcGF0ZUJ0bnMsIFwibG9hZGVyX3JlYWR5XCIpXG4gICAgICAgICAgICAgICAgICAgIHRvZ2dsZUNsYXNzZXMocGFydGljaXBhdGVCdG5zLCBcImRvbmVcIilcbiAgICAgICAgICAgICAgICAgICAgdG9nZ2xlQ2xhc3NlcyhwYXJ0aWNpcGF0ZUJ0bnMsIFwibG9hZGVyXCIpXG4gICAgICAgICAgICAgICAgfSwgNTAwKVxuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCk9PntcbiAgICAgICAgICAgICAgICAgICAgY2hlY2tVc2VyQXV0aCgpXG4gICAgICAgICAgICAgICAgfSwgMTAwMClcblxuICAgICAgICAgICAgfSk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIHVwZGF0ZVNsaWRlcigpIHtcbiAgICAgICAgaXRlbXMuZm9yRWFjaCgoaXRlbSwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGRpc3RhbmNlID0gaW5kZXggLSBjdXJyZW50SW5kZXg7XG4gICAgICAgICAgICBsZXQgbmV3UG9zaXRpb24gPSBkaXN0YW5jZSAqIDEwNTtcblxuICAgICAgICAgICAgaWYgKGRpc3RhbmNlID4gdG90YWxJdGVtcyAvIDIpIHtcbiAgICAgICAgICAgICAgICBuZXdQb3NpdGlvbiAtPSB0b3RhbEl0ZW1zICogMTA1O1xuICAgICAgICAgICAgfSBlbHNlIGlmIChkaXN0YW5jZSA8IC10b3RhbEl0ZW1zIC8gMikge1xuICAgICAgICAgICAgICAgIG5ld1Bvc2l0aW9uICs9IHRvdGFsSXRlbXMgKiAxMDU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnN0IHNjYWxlID0gaW5kZXggPT09IGN1cnJlbnRJbmRleCA/IDEgOiAxO1xuXG4gICAgICAgICAgICBpdGVtLnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGVYKCR7bmV3UG9zaXRpb259JSkgc2NhbGUoJHtzY2FsZX0pYDtcbiAgICAgICAgICAgIGl0ZW0uc3R5bGUuekluZGV4ID0gaW5kZXggPT09IGN1cnJlbnRJbmRleCA/IDIgOiAxO1xuXG4gICAgICAgICAgICBjb25zdCBpc1Zpc2libGUgPSBNYXRoLmFicyhkaXN0YW5jZSkgPD0gMSB8fFxuICAgICAgICAgICAgICAgIChpbmRleCA9PT0gMCAmJiBjdXJyZW50SW5kZXggPT09IHRvdGFsSXRlbXMgLSAxKSB8fFxuICAgICAgICAgICAgICAgIChpbmRleCA9PT0gdG90YWxJdGVtcyAtIDEgJiYgY3VycmVudEluZGV4ID09PSAwKTtcblxuICAgICAgICAgICAgaXRlbS5jbGFzc0xpc3QudG9nZ2xlKCdoaWRkZW4nLCAhaXNWaXNpYmxlKTtcbiAgICAgICAgICAgIGl0ZW0uY2xhc3NMaXN0LnRvZ2dsZSgnYWN0aXZlJywgaW5kZXggPT09IGN1cnJlbnRJbmRleCk7XG5cbiAgICAgICAgICAgIGl0ZW0uY2xhc3NMaXN0LnJlbW92ZSgnbGVmdC1zbGlkZScsICdyaWdodC1zbGlkZScpO1xuICAgICAgICAgICAgaWYgKGRpc3RhbmNlID09PSAxIHx8IChjdXJyZW50SW5kZXggPT09IHRvdGFsSXRlbXMgLSAxICYmIGluZGV4ID09PSAwKSkge1xuICAgICAgICAgICAgICAgIGl0ZW0uY2xhc3NMaXN0LmFkZCgncmlnaHQtc2xpZGUnKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZGlzdGFuY2UgPT09IC0xIHx8IChjdXJyZW50SW5kZXggPT09IDAgJiYgaW5kZXggPT09IHRvdGFsSXRlbXMgLSAxKSkge1xuICAgICAgICAgICAgICAgIGl0ZW0uY2xhc3NMaXN0LmFkZCgnbGVmdC1zbGlkZScpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICBkb3RzLmZvckVhY2goZG90ID0+IGRvdC5jbGFzc0xpc3QucmVtb3ZlKCdfYWN0aXZlJykpO1xuICAgICAgICBpZiAoZG90c1tjdXJyZW50SW5kZXhdKSB7XG4gICAgICAgICAgICBkb3RzW2N1cnJlbnRJbmRleF0uY2xhc3NMaXN0LmFkZCgnX2FjdGl2ZScpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbW92ZVNsaWRlcihvZmZzZXQpIHtcbiAgICAgICAgY3VycmVudEluZGV4ID0gKGN1cnJlbnRJbmRleCArIG9mZnNldCArIHRvdGFsSXRlbXMpICUgdG90YWxJdGVtcztcbiAgICAgICAgdXBkYXRlU2xpZGVyKCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ29Ub1NsaWRlKGluZGV4KSB7XG4gICAgICAgIGN1cnJlbnRJbmRleCA9IGluZGV4O1xuICAgICAgICB1cGRhdGVTbGlkZXIoKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBoYW5kbGVTdGFydChldmVudCkge1xuICAgICAgICBpc0RyYWdnaW5nID0gdHJ1ZTtcbiAgICAgICAgc3RhcnRYID0gZXZlbnQuY2xpZW50WCB8fCBldmVudC50b3VjaGVzWzBdLmNsaWVudFg7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaGFuZGxlTW92ZShldmVudCkge1xuICAgICAgICBpZiAoIWlzRHJhZ2dpbmcpIHJldHVybjtcbiAgICAgICAgY29uc3QgY3VycmVudFggPSBldmVudC5jbGllbnRYIHx8IGV2ZW50LnRvdWNoZXNbMF0uY2xpZW50WDtcbiAgICAgICAgY29uc3QgZGlmZlggPSBjdXJyZW50WCAtIHN0YXJ0WDtcblxuICAgICAgICBpZiAoTWF0aC5hYnMoZGlmZlgpID4gNTApIHtcbiAgICAgICAgICAgIG1vdmVTbGlkZXIoZGlmZlggPiAwID8gLTEgOiAxKTtcbiAgICAgICAgICAgIGlzRHJhZ2dpbmcgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGhhbmRsZUVuZCgpIHtcbiAgICAgICAgaXNEcmFnZ2luZyA9IGZhbHNlO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIG9wZW5Qb3B1cEJ5QXR0cihwb3B1cEF0dHIsIGlzU2hvd1Byb2dyZXNzID0gZmFsc2UpIHtcbiAgICAgICAgY29uc3QgYWxsUG9wdXBzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnBvcHVwJyk7XG4gICAgICAgIGFsbFBvcHVwcy5mb3JFYWNoKHAgPT4gcC5jbGFzc0xpc3QuYWRkKCdoaWRlJykpO1xuXG4gICAgICAgIGNvbnN0IHRhcmdldFBvcHVwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLnBvcHVwW2RhdGEtcG9wdXA9XCIke3BvcHVwQXR0cn1cIl1gKTtcbiAgICAgICAgaWYgKHRhcmdldFBvcHVwKSB7XG4gICAgICAgICAgICB0YXJnZXRQb3B1cC5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJyk7XG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucG9wdXBzJykuY2xhc3NMaXN0LnJlbW92ZSgnb3BhY2l0eS1vdmVybGF5Jyk7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBwcm9ncmVzcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wb3B1cHMgLnByb2dyZXNzJyk7XG4gICAgICAgIGlmIChwcm9ncmVzcykge1xuICAgICAgICAgICAgcHJvZ3Jlc3MuY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZScsICFpc1Nob3dQcm9ncmVzcyk7XG4gICAgICAgIH1cbiAgICB9XG5cblxuICAgIGZ1bmN0aW9uIGNsb3NlQWxsUG9wdXBzKCkge1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucG9wdXAnKS5mb3JFYWNoKHAgPT4gcC5jbGFzc0xpc3QuYWRkKCdoaWRlJykpO1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucG9wdXBzIC5wcm9ncmVzcycpLmZvckVhY2gocCA9PiBwLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKSk7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wb3B1cHMnKS5jbGFzc0xpc3QuYWRkKCdvcGFjaXR5LW92ZXJsYXknKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiB0cmlnZ2VyU2hha2UoKSB7XG4gICAgICAgIGJveC5jbGFzc0xpc3QuYWRkKCdzaGFrZScpO1xuXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgYm94LmNsYXNzTGlzdC5yZW1vdmUoJ3NoYWtlJyk7XG4gICAgICAgICAgICBjb25zdCBuZXh0U2hha2UgPSBNYXRoLnJhbmRvbSgpICogNjAwMCArIDQwMDA7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KHRyaWdnZXJTaGFrZSwgbmV4dFNoYWtlKTtcbiAgICAgICAgfSwgMTIwMCk7XG4gICAgfVxuXG5cblxuICAgIGxvYWRUcmFuc2xhdGlvbnMoKS50aGVuKGluaXQpXG5cbiAgICAvLyBpbml0KClcblxufSkoKTtcbiJdfQ==
