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
  var _Number;
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
  var promoStartDate = new Date("2025-07-14T00:00:00");
  var weekDuration = 7;
  var activeWeek = getActiveWeek(promoStartDate, weekDuration) || 1;
  console.log(activeWeek);
  document.querySelectorAll('.games__list').forEach(function (list) {
    list.classList.add('hide');
  });
  var currentList = document.querySelector(".games__list._week".concat(activeWeek));
  console.log(currentList);
  if (currentList) {
    currentList.classList.remove('hide');
  }
  var mainPage = document.querySelector(".fav-page"),
    unauthMsgs = document.querySelectorAll('.unauth-msg'),
    participateBtns = document.querySelectorAll('.part-btn'),
    redirectBtns = document.querySelectorAll('.btn-join'),
    loader = document.querySelector(".spinner-overlay"),
    currentCardsWrap = document.querySelector('.challange__current');
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

  // let locale = "en"
  var locale = sessionStorage.getItem("locale") || "en";
  if (ukLeng) locale = 'uk';
  if (enLeng) locale = 'en';
  var debug = false;
  if (debug) hideLoader();
  var i18nData = {};
  var translateState = true;
  // let userId = null;
  var userId = (_Number = Number(sessionStorage.getItem("userId"))) !== null && _Number !== void 0 ? _Number : null;

  // userId = 100300268

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

  // function openPopupByAttr(popupAttr, isShowProgress = false) {
  //     const allPopups = document.querySelectorAll('.popup');
  //     allPopups.forEach(p => p.classList.add('hide'));
  //
  //     const targetPopup = document.querySelector(`.popup[data-popup="${popupAttr}"]`);
  //     if (targetPopup) {
  //         targetPopup.classList.remove('hide');
  //         document.querySelector('.popups').classList.remove('opacity-overlay');
  //     }
  //
  //     const progress = document.querySelector('.popups .progress');
  //     if (progress) {
  //         progress.classList.toggle('hide', !isShowProgress);
  //     }
  // }

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

  /// TEST

  document.querySelectorAll('.menu-test__btn').forEach(function (btn) {
    btn.addEventListener('click', function () {
      btn.parentElement.classList.toggle('open');
    });
  });
  document.addEventListener("DOMContentLoaded", function () {
    var _document$querySelect;
    (_document$querySelect = document.querySelector(".menu-btn")) === null || _document$querySelect === void 0 ? void 0 : _document$querySelect.addEventListener("click", function () {
      var _document$querySelect2;
      (_document$querySelect2 = document.querySelector(".menu-test")) === null || _document$querySelect2 === void 0 ? void 0 : _document$querySelect2.classList.toggle("hide");
    });
  });
  var lngBtn = document.querySelector(".lng-btn");
  lngBtn.addEventListener("click", function () {
    if (sessionStorage.getItem("locale")) {
      sessionStorage.removeItem("locale");
    } else {
      sessionStorage.setItem("locale", "uk");
    }
    window.location.reload();
  });
  var authBtn = document.querySelector(".auth-btn");
  var betBtn = document.querySelector(".btn-bet-online");
  authBtn.addEventListener("click", function () {
    if (userId) {
      sessionStorage.removeItem("userId");
    } else {
      sessionStorage.setItem("userId", "777777");
    }
    window.location.reload();
  });
})();

// цю функцію видали, а основну розкоменти
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
// цю функцію видали, а основну розкоменти
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOlsiYXBpVVJMIiwiZ2V0QWN0aXZlV2VlayIsInByb21vU3RhcnREYXRlIiwid2Vla0R1cmF0aW9uIiwiY3VycmVudERhdGUiLCJEYXRlIiwid2Vla0RhdGVzIiwiRGF5IiwiV2VlayIsImZvcm1hdERhdGUiLCJkYXRlIiwiZ2V0RGF0ZSIsInRvU3RyaW5nIiwicGFkU3RhcnQiLCJnZXRNb250aCIsImNhbGN1bGF0ZVdlZWtQZXJpb2QiLCJ3ZWVrSW5kZXgiLCJiYXNlU3RhcnQiLCJnZXRUaW1lIiwic3RhcnQiLCJlbmQiLCJhY3RpdmVXZWVrSW5kZXgiLCJpIiwiYWN0aXZlV2VlayIsImNvbnNvbGUiLCJsb2ciLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJmb3JFYWNoIiwibGlzdCIsImNsYXNzTGlzdCIsImFkZCIsImN1cnJlbnRMaXN0IiwicXVlcnlTZWxlY3RvciIsInJlbW92ZSIsIm1haW5QYWdlIiwidW5hdXRoTXNncyIsInBhcnRpY2lwYXRlQnRucyIsInJlZGlyZWN0QnRucyIsImxvYWRlciIsImN1cnJlbnRDYXJkc1dyYXAiLCJ1a0xlbmciLCJlbkxlbmciLCJ0b2dnbGVDbGFzc2VzIiwiZWxlbWVudHMiLCJjbGFzc05hbWUiLCJlbCIsInRvZ2dsZSIsInRvZ2dsZVRyYW5zbGF0ZXMiLCJkYXRhQXR0ciIsInNldEF0dHJpYnV0ZSIsImlubmVySFRNTCIsImkxOG5EYXRhIiwicmVtb3ZlQXR0cmlidXRlIiwibG9hZGVyQnRuIiwibG9jYWxlIiwic2Vzc2lvblN0b3JhZ2UiLCJnZXRJdGVtIiwiZGVidWciLCJoaWRlTG9hZGVyIiwidHJhbnNsYXRlU3RhdGUiLCJ1c2VySWQiLCJOdW1iZXIiLCJib3giLCJpbml0aWFsRGVsYXkiLCJNYXRoIiwicmFuZG9tIiwic2xpZGVyIiwiaXRlbXMiLCJkb3RzIiwiYnRuTGVmdCIsImJ0blJpZ2h0IiwiY3VycmVudEluZGV4IiwidG90YWxJdGVtcyIsImxlbmd0aCIsImlzRHJhZ2dpbmciLCJzdGFydFgiLCJyZXF1ZXN0IiwibGluayIsImV4dHJhT3B0aW9ucyIsImZldGNoIiwiaGVhZGVycyIsInRoZW4iLCJyZXMiLCJvayIsIkVycm9yIiwianNvbiIsImVyciIsImVycm9yIiwicmVwb3J0RXJyb3IiLCJzdHlsZSIsImRpc3BsYXkiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsImhyZWYiLCJzdGFydHNXaXRoIiwiUHJvbWlzZSIsInJlamVjdCIsImJvZHkiLCJvdmVyZmxvdyIsImluaXQiLCJ0cnlEZXRlY3RVc2VySWQiLCJxdWlja0NoZWNrQW5kUmVuZGVyIiwiY2hlY2tVc2VyQXV0aCIsInNldFRpbWVvdXQiLCJTZXRTbGlkZXJXaWR0aEJsdXIiLCJ0cmlnZ2VyU2hha2UiLCJidG4iLCJhZGRFdmVudExpc3RlbmVyIiwicGFydGljaXBhdGUiLCJjbG9zZUJ0biIsImNsb3NlQWxsUG9wdXBzIiwicG9wdXBBdHRyIiwiZ2V0QXR0cmlidXRlIiwib3BlblBvcHVwQnlBdHRyIiwiZSIsIm9wZW5Qb3B1cEVsIiwiY29udGFpbnMiLCJ0YXJnZXQiLCJ1cGRhdGVTbGlkZXIiLCJoYW5kbGVTdGFydCIsImhhbmRsZU1vdmUiLCJoYW5kbGVFbmQiLCJtb3ZlU2xpZGVyIiwic3RvcmUiLCJzdGF0ZSIsImdldFN0YXRlIiwiYXV0aCIsImlzQXV0aG9yaXplZCIsImlkIiwiZ191c2VyX2lkIiwiYXR0ZW1wdHMiLCJtYXhBdHRlbXB0cyIsImF0dGVtcHRJbnRlcnZhbCIsIndhaXRGb3JVc2VySWQiLCJyZXNvbHZlIiwiaW50ZXJ2YWwiLCJzZXRJbnRlcnZhbCIsImNsZWFySW50ZXJ2YWwiLCJsb2FkVHJhbnNsYXRpb25zIiwidHJhbnNsYXRlIiwidGFyZ2V0Tm9kZSIsImdldEVsZW1lbnRCeUlkIiwibXV0YXRpb25PYnNlcnZlciIsIk11dGF0aW9uT2JzZXJ2ZXIiLCJtdXRhdGlvbnMiLCJkaXNjb25uZWN0Iiwib2JzZXJ2ZSIsImNoaWxkTGlzdCIsInN1YnRyZWUiLCJzbGlkZXMiLCJ0YWJzIiwiaW5kZXgiLCJzbGlkZSIsInRhYiIsImRvdCIsIm1vdmVMZWZ0IiwibW92ZVJpZ2h0IiwibG9hZFRpbWUiLCJzaG93RWxlbWVudHMiLCJoaWRlRWxlbWVudHMiLCJ1c2VyaWQiLCJyZXBvcnREYXRhIiwib3JpZ2luIiwiZXJyb3JUZXh0IiwidGV4dCIsIm1lc3NhZ2UiLCJ0eXBlIiwibmFtZSIsInN0YWNrIiwibWV0aG9kIiwiSlNPTiIsInN0cmluZ2lmeSIsIndhcm4iLCJlbGVtcyIsImVsZW0iLCJrZXkiLCJyZWZyZXNoTG9jYWxpemVkQ2xhc3MiLCJlbGVtZW50IiwibGFuZyIsInJlbmRlclVzZXJzIiwid2VlayIsImRhdGEiLCJ1c2VycyIsInBvcHVsYXRlVXNlcnNUYWJsZSIsImN1cnJlbnRVc2VySWQiLCJyZXN1bHRzVGFibGUiLCJyZXN1bHRzVGFibGVPdGhlciIsImN1cnJlbnRVc2VyIiwiZmluZCIsInVzZXIiLCJpc1RvcEN1cnJlbnRVc2VyIiwic2xpY2UiLCJzb21lIiwidG9wVXNlcnNMZW5ndGgiLCJ0b3BVc2VycyIsImRpc3BsYXlVc2VyIiwiaXNDdXJyZW50VXNlciIsInRhYmxlIiwicmVuZGVyUm93IiwidXNlckRhdGEiLCJvcHRpb25zIiwiaGlnaGxpZ2h0IiwibmVpZ2hib3IiLCJ1c2VyUm93IiwiY3JlYXRlRWxlbWVudCIsInVzZXJQbGFjZSIsImluZGV4T2YiLCJwcml6ZUtleSIsImdldFByaXplVHJhbnNsYXRpb25LZXkiLCJ0cmFuc2xhdGVLZXkiLCJtYXNrVXNlcklkIiwicG9pbnRzIiwiYXBwZW5kIiwiZGVmYXVsdFZhbHVlIiwibmVlZEtleSIsInBsYWNlIiwicGFyYW1zIiwiaXRlbSIsImRpc3RhbmNlIiwibmV3UG9zaXRpb24iLCJzY2FsZSIsInRyYW5zZm9ybSIsInpJbmRleCIsImlzVmlzaWJsZSIsImFicyIsIm9mZnNldCIsImdvVG9TbGlkZSIsImV2ZW50IiwiY2xpZW50WCIsInRvdWNoZXMiLCJjdXJyZW50WCIsImRpZmZYIiwicCIsIm5leHRTaGFrZSIsInBhcmVudEVsZW1lbnQiLCJsbmdCdG4iLCJyZW1vdmVJdGVtIiwic2V0SXRlbSIsInJlbG9hZCIsImF1dGhCdG4iLCJiZXRCdG4iLCJpc1Nob3dQcm9ncmVzcyIsImFsbFBvcHVwcyIsInRhcmdldFBvcHVwIiwicHJvZ3Jlc3MiXSwibWFwcGluZ3MiOiI7OzsrQ0FDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREEsQ0FBQyxZQUFZO0VBQUE7RUFFVCxJQUFNQSxNQUFNLEdBQUcsaUNBQWlDO0VBRWhELElBQU1DLGFBQWEsR0FBRyxTQUFoQkEsYUFBYSxDQUFJQyxjQUFjLEVBQUVDLFlBQVksRUFBSztJQUNwRCxJQUFNQyxXQUFXLEdBQUcsSUFBSUMsSUFBSSxFQUFFO0lBQzlCLElBQUlDLFNBQVMsR0FBRyxFQUFFO0lBRWxCLElBQU1DLEdBQUcsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxJQUFJO0lBQy9CLElBQU1DLElBQUksR0FBR0wsWUFBWSxHQUFHSSxHQUFHO0lBRS9CLElBQU1FLFVBQVUsR0FBRyxTQUFiQSxVQUFVLENBQUlDLElBQUk7TUFBQSxpQkFDakJBLElBQUksQ0FBQ0MsT0FBTyxFQUFFLENBQUNDLFFBQVEsRUFBRSxDQUFDQyxRQUFRLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxjQUFJLENBQUNILElBQUksQ0FBQ0ksUUFBUSxFQUFFLEdBQUcsQ0FBQyxFQUFFRixRQUFRLEVBQUUsQ0FBQ0MsUUFBUSxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUM7SUFBQSxDQUFFO0lBRXhHLElBQU1FLG1CQUFtQixHQUFHLFNBQXRCQSxtQkFBbUIsQ0FBSUMsU0FBUyxFQUFLO01BQ3ZDLElBQU1DLFNBQVMsR0FBR2YsY0FBYyxDQUFDZ0IsT0FBTyxFQUFFO01BQzFDLElBQU1DLEtBQUssR0FBRyxJQUFJZCxJQUFJLENBQUNZLFNBQVMsR0FBR0QsU0FBUyxHQUFHUixJQUFJLENBQUM7TUFDcEQsSUFBSVksR0FBRyxHQUFHLElBQUlmLElBQUksQ0FBQ2MsS0FBSyxDQUFDRCxPQUFPLEVBQUUsSUFBSWYsWUFBWSxHQUFHSSxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUM7TUFDOUQsT0FBTztRQUFFWSxLQUFLLEVBQUxBLEtBQUs7UUFBRUMsR0FBRyxFQUFIQTtNQUFJLENBQUM7SUFDekIsQ0FBQztJQUVELElBQUlDLGVBQWUsR0FBRyxJQUFJOztJQUUxQjtJQUNBLEtBQUssSUFBSUMsQ0FBQyxHQUFHLENBQUMsRUFBRUEsQ0FBQyxHQUFHLEVBQUUsRUFBRUEsQ0FBQyxFQUFFLEVBQUU7TUFBRTtNQUMzQiwyQkFBdUJQLG1CQUFtQixDQUFDTyxDQUFDLENBQUM7UUFBckNILEtBQUssd0JBQUxBLEtBQUs7UUFBRUMsR0FBRyx3QkFBSEEsR0FBRztNQUNsQixJQUFJaEIsV0FBVyxJQUFJZSxLQUFLLElBQUlmLFdBQVcsSUFBSWdCLEdBQUcsRUFBRTtRQUM1Q0MsZUFBZSxHQUFHQyxDQUFDLEdBQUcsQ0FBQztRQUN2QjtNQUNKO0lBQ0o7SUFFQSxPQUFPRCxlQUFlO0VBQzFCLENBQUM7RUFFRCxJQUFNbkIsY0FBYyxHQUFHLElBQUlHLElBQUksQ0FBQyxxQkFBcUIsQ0FBQztFQUN0RCxJQUFNRixZQUFZLEdBQUcsQ0FBQztFQUV0QixJQUFNb0IsVUFBVSxHQUFHdEIsYUFBYSxDQUFDQyxjQUFjLEVBQUVDLFlBQVksQ0FBQyxJQUFJLENBQUM7RUFFbkVxQixPQUFPLENBQUNDLEdBQUcsQ0FBQ0YsVUFBVSxDQUFDO0VBRXZCRyxRQUFRLENBQUNDLGdCQUFnQixDQUFDLGNBQWMsQ0FBQyxDQUFDQyxPQUFPLENBQUMsVUFBQUMsSUFBSSxFQUFJO0lBQ3REQSxJQUFJLENBQUNDLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLE1BQU0sQ0FBQztFQUM5QixDQUFDLENBQUM7RUFFRixJQUFNQyxXQUFXLEdBQUdOLFFBQVEsQ0FBQ08sYUFBYSw2QkFBc0JWLFVBQVUsRUFBRztFQUU3RUMsT0FBTyxDQUFDQyxHQUFHLENBQUNPLFdBQVcsQ0FBQztFQUN4QixJQUFJQSxXQUFXLEVBQUU7SUFDYkEsV0FBVyxDQUFDRixTQUFTLENBQUNJLE1BQU0sQ0FBQyxNQUFNLENBQUM7RUFDeEM7RUFHQSxJQUFNQyxRQUFRLEdBQUdULFFBQVEsQ0FBQ08sYUFBYSxDQUFDLFdBQVcsQ0FBQztJQUNoREcsVUFBVSxHQUFHVixRQUFRLENBQUNDLGdCQUFnQixDQUFDLGFBQWEsQ0FBQztJQUNyRFUsZUFBZSxHQUFHWCxRQUFRLENBQUNDLGdCQUFnQixDQUFDLFdBQVcsQ0FBQztJQUN4RFcsWUFBWSxHQUFHWixRQUFRLENBQUNDLGdCQUFnQixDQUFDLFdBQVcsQ0FBQztJQUNyRFksTUFBTSxHQUFHYixRQUFRLENBQUNPLGFBQWEsQ0FBQyxrQkFBa0IsQ0FBQztJQUNuRE8sZ0JBQWdCLEdBQUdkLFFBQVEsQ0FBQ08sYUFBYSxDQUFDLHFCQUFxQixDQUFDO0VBRXBFLElBQU1RLE1BQU0sR0FBR2YsUUFBUSxDQUFDTyxhQUFhLENBQUMsU0FBUyxDQUFDO0VBQ2hELElBQU1TLE1BQU0sR0FBR2hCLFFBQVEsQ0FBQ08sYUFBYSxDQUFDLFNBQVMsQ0FBQztFQUVoRCxJQUFNVSxhQUFhLEdBQUcsU0FBaEJBLGFBQWEsQ0FBSUMsUUFBUSxFQUFFQyxTQUFTO0lBQUEsT0FBS0QsUUFBUSxDQUFDaEIsT0FBTyxDQUFDLFVBQUFrQixFQUFFO01BQUEsT0FBSUEsRUFBRSxDQUFDaEIsU0FBUyxDQUFDaUIsTUFBTSxXQUFJRixTQUFTLEVBQUc7SUFBQSxFQUFDO0VBQUE7RUFDMUcsSUFBTUcsZ0JBQWdCLEdBQUcsU0FBbkJBLGdCQUFnQixDQUFJSixRQUFRLEVBQUVLLFFBQVE7SUFBQSxPQUFLTCxRQUFRLENBQUNoQixPQUFPLENBQUMsVUFBQWtCLEVBQUUsRUFBSTtNQUNwRUEsRUFBRSxDQUFDSSxZQUFZLENBQUMsZ0JBQWdCLFlBQUtELFFBQVEsRUFBRztNQUNoREgsRUFBRSxDQUFDSyxTQUFTLEdBQUdDLFFBQVEsQ0FBQ0gsUUFBUSxDQUFDLElBQUksMENBQTBDLEdBQUdBLFFBQVE7TUFDMUZILEVBQUUsQ0FBQ08sZUFBZSxDQUFDLGdCQUFnQixDQUFDO0lBQ3hDLENBQUMsQ0FBQztFQUFBO0VBRUYsSUFBSUMsU0FBUyxHQUFHLEtBQUs7O0VBRXJCO0VBQ0EsSUFBSUMsTUFBTSxHQUFHQyxjQUFjLENBQUNDLE9BQU8sQ0FBQyxRQUFRLENBQUMsSUFBSSxJQUFJO0VBRXJELElBQUloQixNQUFNLEVBQUVjLE1BQU0sR0FBRyxJQUFJO0VBQ3pCLElBQUliLE1BQU0sRUFBRWEsTUFBTSxHQUFHLElBQUk7RUFFekIsSUFBSUcsS0FBSyxHQUFHLEtBQUs7RUFFakIsSUFBSUEsS0FBSyxFQUFFQyxVQUFVLEVBQUU7RUFFdkIsSUFBSVAsUUFBUSxHQUFHLENBQUMsQ0FBQztFQUNqQixJQUFNUSxjQUFjLEdBQUcsSUFBSTtFQUMzQjtFQUNBLElBQUlDLE1BQU0sY0FBR0MsTUFBTSxDQUFDTixjQUFjLENBQUNDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyw2Q0FBSSxJQUFJOztFQUU3RDs7RUFFQSxJQUFNTSxHQUFHLEdBQUdyQyxRQUFRLENBQUNPLGFBQWEsQ0FBQyxZQUFZLENBQUM7RUFDaEQsSUFBTStCLFlBQVksR0FBR0MsSUFBSSxDQUFDQyxNQUFNLEVBQUUsR0FBRyxJQUFJLEdBQUcsSUFBSTs7RUFFaEQ7O0VBRUEsSUFBTUMsTUFBTSxHQUFHekMsUUFBUSxDQUFDTyxhQUFhLENBQUMsZ0JBQWdCLENBQUM7RUFDdkQsSUFBTW1DLEtBQUssR0FBR0QsTUFBTSxDQUFDeEMsZ0JBQWdCLENBQUMsZUFBZSxDQUFDO0VBQ3RELElBQU0wQyxJQUFJLEdBQUczQyxRQUFRLENBQUNDLGdCQUFnQixDQUFDLHVCQUF1QixDQUFDO0VBQy9ELElBQU0yQyxPQUFPLEdBQUc1QyxRQUFRLENBQUNPLGFBQWEsQ0FBQyxrQkFBa0IsQ0FBQztFQUMxRCxJQUFNc0MsUUFBUSxHQUFHN0MsUUFBUSxDQUFDTyxhQUFhLENBQUMsbUJBQW1CLENBQUM7RUFFNUQsSUFBSXVDLFlBQVksR0FBRyxDQUFDO0VBQ3BCLElBQU1DLFVBQVUsR0FBR0wsS0FBSyxDQUFDTSxNQUFNO0VBQy9CLElBQUlDLFVBQVUsR0FBRyxLQUFLO0VBQ3RCLElBQUlDLE1BQU0sR0FBRyxDQUFDOztFQUVkOztFQUVBLElBQU1DLE9BQU8sR0FBRyxTQUFWQSxPQUFPLENBQWFDLElBQUksRUFBRUMsWUFBWSxFQUFFO0lBQzFDLE9BQU9DLEtBQUssQ0FBQ2hGLE1BQU0sR0FBRzhFLElBQUk7TUFDdEJHLE9BQU8sRUFBRTtRQUNMLFFBQVEsRUFBRSxrQkFBa0I7UUFDNUIsY0FBYyxFQUFFO01BQ3BCO0lBQUMsR0FDR0YsWUFBWSxJQUFJLENBQUMsQ0FBQyxFQUN4QixDQUNHRyxJQUFJLENBQUMsVUFBQUMsR0FBRyxFQUFJO01BQ1QsSUFBSSxDQUFDQSxHQUFHLENBQUNDLEVBQUUsRUFBRSxNQUFNLElBQUlDLEtBQUssQ0FBQyxXQUFXLENBQUM7TUFDekMsT0FBT0YsR0FBRyxDQUFDRyxJQUFJLEVBQUU7SUFDckIsQ0FBQyxDQUFDLFNBQ0ksQ0FBQyxVQUFBQyxHQUFHLEVBQUk7TUFDVi9ELE9BQU8sQ0FBQ2dFLEtBQUssQ0FBQyxxQkFBcUIsRUFBRUQsR0FBRyxDQUFDO01BRXpDRSxXQUFXLENBQUNGLEdBQUcsQ0FBQztNQUVoQjdELFFBQVEsQ0FBQ08sYUFBYSxDQUFDLFdBQVcsQ0FBQyxDQUFDeUQsS0FBSyxDQUFDQyxPQUFPLEdBQUcsTUFBTTtNQUMxRCxJQUFJQyxNQUFNLENBQUNDLFFBQVEsQ0FBQ0MsSUFBSSxDQUFDQyxVQUFVLENBQUMsd0JBQXdCLENBQUMsRUFBRTtRQUMzREgsTUFBTSxDQUFDQyxRQUFRLENBQUNDLElBQUksR0FBRyw0QkFBNEI7TUFDdkQsQ0FBQyxNQUFNO1FBQ0hGLE1BQU0sQ0FBQ0MsUUFBUSxDQUFDQyxJQUFJLEdBQUcscUJBQXFCO01BQ2hEO01BRUEsT0FBT0UsT0FBTyxDQUFDQyxNQUFNLENBQUNWLEdBQUcsQ0FBQztJQUM5QixDQUFDLENBQUM7RUFFVixDQUFDO0VBRUQsU0FBUzVCLFVBQVUsR0FBRTtJQUNqQnBCLE1BQU0sQ0FBQ1QsU0FBUyxDQUFDQyxHQUFHLENBQUMsTUFBTSxDQUFDO0lBQzVCTCxRQUFRLENBQUN3RSxJQUFJLENBQUNSLEtBQUssQ0FBQ1MsUUFBUSxHQUFHLE1BQU07SUFDckNoRSxRQUFRLENBQUNMLFNBQVMsQ0FBQ0ksTUFBTSxDQUFDLFNBQVMsQ0FBQztFQUN4QztFQUFDLFNBRWNrRSxJQUFJO0lBQUE7RUFBQTtFQUFBO0lBQUEsbUVBQW5CO01BQUEsNENBS2FDLGVBQWUsRUFTZkMsbUJBQW1CO01BQUE7UUFBQTtVQUFBO1lBQW5CQSxtQkFBbUIsbUNBQUc7Y0FDM0JDLGFBQWEsRUFBRTs7Y0FFZjs7Y0FFQUMsVUFBVSxDQUFDN0MsVUFBVSxFQUFFLElBQUksQ0FBQztjQUU1QjhDLGtCQUFrQixFQUFFO2NBRXBCRCxVQUFVLENBQUNFLFlBQVksRUFBRTFDLFlBQVksQ0FBQztjQUV0QzNCLGVBQWUsQ0FBQ1QsT0FBTyxDQUFDLFVBQUErRSxHQUFHLEVBQUk7Z0JBQzNCQSxHQUFHLENBQUNDLGdCQUFnQixDQUFDLE9BQU8sRUFBRUMsV0FBVyxDQUFDO2NBQzlDLENBQUMsQ0FBQztjQUVGbkYsUUFBUSxDQUFDQyxnQkFBZ0IsQ0FBQyxlQUFlLENBQUMsQ0FBQ0MsT0FBTyxDQUFDLFVBQUFrRixRQUFRLEVBQUk7Z0JBQzNEQSxRQUFRLENBQUNGLGdCQUFnQixDQUFDLE9BQU8sRUFBRUcsY0FBYyxDQUFDO2NBQ3RELENBQUMsQ0FBQztjQUVGckYsUUFBUSxDQUFDQyxnQkFBZ0IsQ0FBQyxXQUFXLENBQUMsQ0FBQ0MsT0FBTyxDQUFDLFVBQUErRSxHQUFHLEVBQUk7Z0JBQ2xEQSxHQUFHLENBQUNDLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxZQUFNO2tCQUNoQyxJQUFNSSxTQUFTLEdBQUdMLEdBQUcsQ0FBQ00sWUFBWSxDQUFDLFlBQVksQ0FBQztrQkFDaERDLGVBQWUsQ0FBQ0YsU0FBUyxDQUFDO2dCQUM5QixDQUFDLENBQUM7Y0FDTixDQUFDLENBQUM7Y0FFRnRGLFFBQVEsQ0FBQ08sYUFBYSxDQUFDLFNBQVMsQ0FBQyxDQUFDMkUsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLFVBQUNPLENBQUMsRUFBSztnQkFDL0QsSUFBTUMsV0FBVyxHQUFHMUYsUUFBUSxDQUFDTyxhQUFhLENBQUMsbUJBQW1CLENBQUM7Z0JBQy9ELElBQUltRixXQUFXLElBQUksQ0FBQ0EsV0FBVyxDQUFDQyxRQUFRLENBQUNGLENBQUMsQ0FBQ0csTUFBTSxDQUFDLEVBQUU7a0JBQ2hEUCxjQUFjLEVBQUU7Z0JBQ3BCO2NBQ0osQ0FBQyxDQUFDO2NBR0ZRLFlBQVksRUFBRTtjQUVkcEQsTUFBTSxDQUFDeUMsZ0JBQWdCLENBQUMsV0FBVyxFQUFFWSxXQUFXLENBQUM7Y0FDakRyRCxNQUFNLENBQUN5QyxnQkFBZ0IsQ0FBQyxXQUFXLEVBQUVhLFVBQVUsQ0FBQztjQUNoRHRELE1BQU0sQ0FBQ3lDLGdCQUFnQixDQUFDLFNBQVMsRUFBRWMsU0FBUyxDQUFDO2NBQzdDdkQsTUFBTSxDQUFDeUMsZ0JBQWdCLENBQUMsWUFBWSxFQUFFYyxTQUFTLENBQUM7Y0FFaER2RCxNQUFNLENBQUN5QyxnQkFBZ0IsQ0FBQyxZQUFZLEVBQUVZLFdBQVcsQ0FBQztjQUNsRHJELE1BQU0sQ0FBQ3lDLGdCQUFnQixDQUFDLFdBQVcsRUFBRWEsVUFBVSxDQUFDO2NBQ2hEdEQsTUFBTSxDQUFDeUMsZ0JBQWdCLENBQUMsVUFBVSxFQUFFYyxTQUFTLENBQUM7Y0FFOUNwRCxPQUFPLENBQUNzQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUU7Z0JBQUEsT0FBTWUsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDO2NBQUEsRUFBQztjQUN2RHBELFFBQVEsQ0FBQ3FDLGdCQUFnQixDQUFDLE9BQU8sRUFBRTtnQkFBQSxPQUFNZSxVQUFVLENBQUMsQ0FBQyxDQUFDO2NBQUEsRUFBQztjQUN2RDtZQUdKLENBQUM7WUEzRFF0QixlQUFlLCtCQUFHO2NBQ3ZCLElBQUlULE1BQU0sQ0FBQ2dDLEtBQUssRUFBRTtnQkFDZCxJQUFNQyxLQUFLLEdBQUdqQyxNQUFNLENBQUNnQyxLQUFLLENBQUNFLFFBQVEsRUFBRTtnQkFDckNqRSxNQUFNLEdBQUdnRSxLQUFLLENBQUNFLElBQUksQ0FBQ0MsWUFBWSxJQUFJSCxLQUFLLENBQUNFLElBQUksQ0FBQ0UsRUFBRSxJQUFJLEVBQUU7Y0FDM0QsQ0FBQyxNQUFNLElBQUlyQyxNQUFNLENBQUNzQyxTQUFTLEVBQUU7Z0JBQ3pCckUsTUFBTSxHQUFHK0IsTUFBTSxDQUFDc0MsU0FBUztjQUM3QjtZQUNKLENBQUM7WUFYR0MsUUFBUSxHQUFHLENBQUM7WUFDVkMsV0FBVyxHQUFHLEVBQUU7WUFDaEJDLGVBQWUsR0FBRyxFQUFFO1lBK0RwQkMsYUFBYSxHQUFHLElBQUl0QyxPQUFPLENBQUMsVUFBQ3VDLE9BQU8sRUFBSztjQUMzQyxJQUFNQyxRQUFRLEdBQUdDLFdBQVcsQ0FBQyxZQUFNO2dCQUMvQnBDLGVBQWUsRUFBRTtnQkFDakIsSUFBSXhDLE1BQU0sSUFBSXNFLFFBQVEsSUFBSUMsV0FBVyxFQUFFO2tCQUNuQzlCLG1CQUFtQixFQUFFO2tCQUNyQm9DLGFBQWEsQ0FBQ0YsUUFBUSxDQUFDO2tCQUN2QkQsT0FBTyxFQUFFO2dCQUNiO2dCQUNBSixRQUFRLEVBQUU7Y0FDZCxDQUFDLEVBQUVFLGVBQWUsQ0FBQztZQUN2QixDQUFDLENBQUM7WUFBQTtZQUFBLE9BRUlDLGFBQWE7VUFBQTtVQUFBO1lBQUE7UUFBQTtNQUFBO0lBQUEsQ0FDdEI7SUFBQTtFQUFBO0VBRUQsU0FBU0ssZ0JBQWdCLEdBQUc7SUFDeEIsT0FBTzlELE9BQU8sMkJBQW9CdEIsTUFBTSxFQUFHLENBQ3RDMkIsSUFBSSxDQUFDLFVBQUFJLElBQUksRUFBSTtNQUNWbEMsUUFBUSxHQUFHa0MsSUFBSTtNQUNmc0QsU0FBUyxFQUFFO01BQ1gsSUFBTUMsVUFBVSxHQUFHbkgsUUFBUSxDQUFDb0gsY0FBYyxDQUFDLFVBQVUsQ0FBQztNQUN0RCxJQUFNQyxnQkFBZ0IsR0FBRyxJQUFJQyxnQkFBZ0IsQ0FBQyxVQUFVQyxTQUFTLEVBQUU7UUFDL0RGLGdCQUFnQixDQUFDRyxVQUFVLEVBQUU7UUFDN0JOLFNBQVMsRUFBRTtRQUNYRyxnQkFBZ0IsQ0FBQ0ksT0FBTyxDQUFDTixVQUFVLEVBQUU7VUFBRU8sU0FBUyxFQUFFLElBQUk7VUFBRUMsT0FBTyxFQUFFO1FBQUssQ0FBQyxDQUFDO01BQzVFLENBQUMsQ0FBQztNQUNGTixnQkFBZ0IsQ0FBQ0ksT0FBTyxDQUFDTixVQUFVLEVBQUU7UUFDakNPLFNBQVMsRUFBRSxJQUFJO1FBQ2ZDLE9BQU8sRUFBRTtNQUNiLENBQUMsQ0FBQztJQUVOLENBQUMsQ0FBQztFQUNWO0VBR0EsU0FBUzVDLGtCQUFrQixHQUFFO0lBQ3pCLElBQU10QyxNQUFNLEdBQUd6QyxRQUFRLENBQUNPLGFBQWEsQ0FBQyxxQkFBcUIsQ0FBQztJQUM1RCxJQUFNcUgsTUFBTSxHQUFHbkYsTUFBTSxDQUFDeEMsZ0JBQWdCLENBQUMsMEJBQTBCLENBQUM7SUFDbEUsSUFBTTRILElBQUksR0FBRzdILFFBQVEsQ0FBQ0MsZ0JBQWdCLENBQUMsdUJBQXVCLENBQUM7SUFDL0QsSUFBTTBDLElBQUksR0FBRzNDLFFBQVEsQ0FBQ0MsZ0JBQWdCLENBQUMsMkJBQTJCLENBQUM7SUFDbkUsSUFBTTJDLE9BQU8sR0FBRzVDLFFBQVEsQ0FBQ08sYUFBYSxDQUFDLHNCQUFzQixDQUFDO0lBQzlELElBQU1zQyxRQUFRLEdBQUc3QyxRQUFRLENBQUNPLGFBQWEsQ0FBQyx1QkFBdUIsQ0FBQztJQUVoRSxJQUFJdUMsWUFBWSxHQUFHLENBQUM7SUFFcEIsU0FBUytDLFlBQVksQ0FBQ2lDLEtBQUssRUFBRTtNQUN6QkYsTUFBTSxDQUFDMUgsT0FBTyxDQUFDLFVBQUE2SCxLQUFLO1FBQUEsT0FBSUEsS0FBSyxDQUFDM0gsU0FBUyxDQUFDSSxNQUFNLENBQUMsU0FBUyxDQUFDO01BQUEsRUFBQztNQUMxRHFILElBQUksQ0FBQzNILE9BQU8sQ0FBQyxVQUFBOEgsR0FBRztRQUFBLE9BQUlBLEdBQUcsQ0FBQzVILFNBQVMsQ0FBQ0ksTUFBTSxDQUFDLFNBQVMsQ0FBQztNQUFBLEVBQUM7TUFDcERtQyxJQUFJLENBQUN6QyxPQUFPLENBQUMsVUFBQStILEdBQUc7UUFBQSxPQUFJQSxHQUFHLENBQUM3SCxTQUFTLENBQUNJLE1BQU0sQ0FBQyxTQUFTLENBQUM7TUFBQSxFQUFDO01BRXBEb0gsTUFBTSxDQUFDRSxLQUFLLENBQUMsQ0FBQzFILFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLFNBQVMsQ0FBQztNQUN0Q3dILElBQUksQ0FBQ0MsS0FBSyxDQUFDLENBQUMxSCxTQUFTLENBQUNDLEdBQUcsQ0FBQyxTQUFTLENBQUM7TUFDcENzQyxJQUFJLENBQUNtRixLQUFLLENBQUMsQ0FBQzFILFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLFNBQVMsQ0FBQztJQUN4QztJQUVBLFNBQVM2SCxRQUFRLEdBQUc7TUFDaEJwRixZQUFZLEdBQUcsQ0FBQ0EsWUFBWSxHQUFHLENBQUMsR0FBRzhFLE1BQU0sQ0FBQzVFLE1BQU0sSUFBSTRFLE1BQU0sQ0FBQzVFLE1BQU07TUFDakU2QyxZQUFZLENBQUMvQyxZQUFZLENBQUM7SUFDOUI7SUFFQSxTQUFTcUYsU0FBUyxHQUFHO01BQ2pCckYsWUFBWSxHQUFHLENBQUNBLFlBQVksR0FBRyxDQUFDLElBQUk4RSxNQUFNLENBQUM1RSxNQUFNO01BQ2pENkMsWUFBWSxDQUFDL0MsWUFBWSxDQUFDO0lBQzlCO0lBRUFGLE9BQU8sQ0FBQ3NDLGdCQUFnQixDQUFDLE9BQU8sRUFBRWdELFFBQVEsQ0FBQztJQUMzQ3JGLFFBQVEsQ0FBQ3FDLGdCQUFnQixDQUFDLE9BQU8sRUFBRWlELFNBQVMsQ0FBQztJQUU3Q04sSUFBSSxDQUFDM0gsT0FBTyxDQUFDLFVBQUM4SCxHQUFHLEVBQUVGLEtBQUssRUFBSztNQUN6QkUsR0FBRyxDQUFDOUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLFlBQU07UUFDaENwQyxZQUFZLEdBQUdnRixLQUFLO1FBQ3BCakMsWUFBWSxDQUFDL0MsWUFBWSxDQUFDO01BQzlCLENBQUMsQ0FBQztJQUNOLENBQUMsQ0FBQztJQUVGSCxJQUFJLENBQUN6QyxPQUFPLENBQUMsVUFBQytILEdBQUcsRUFBRUgsS0FBSyxFQUFLO01BQ3pCRyxHQUFHLENBQUMvQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsWUFBTTtRQUNoQ3BDLFlBQVksR0FBR2dGLEtBQUs7UUFDcEJqQyxZQUFZLENBQUMvQyxZQUFZLENBQUM7TUFDOUIsQ0FBQyxDQUFDO0lBQ04sQ0FBQyxDQUFDO0VBRU47RUFFQSxTQUFTK0IsYUFBYSxHQUFHO0lBQ3JCLElBQU11RCxRQUFRLEdBQUcsR0FBRztJQUVwQnRELFVBQVUsQ0FBQyxZQUFNO01BQ2IsSUFBTXVELFlBQVksR0FBRyxTQUFmQSxZQUFZLENBQUluSCxRQUFRO1FBQUEsT0FBS0EsUUFBUSxDQUFDaEIsT0FBTyxDQUFDLFVBQUFrQixFQUFFO1VBQUEsT0FBSUEsRUFBRSxDQUFDaEIsU0FBUyxDQUFDSSxNQUFNLENBQUMsTUFBTSxDQUFDO1FBQUEsRUFBQztNQUFBO01BQ3RGLElBQU04SCxZQUFZLEdBQUcsU0FBZkEsWUFBWSxDQUFJcEgsUUFBUTtRQUFBLE9BQUtBLFFBQVEsQ0FBQ2hCLE9BQU8sQ0FBQyxVQUFBa0IsRUFBRTtVQUFBLE9BQUlBLEVBQUUsQ0FBQ2hCLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLE1BQU0sQ0FBQztRQUFBLEVBQUM7TUFBQTtNQUVuRixJQUFJLENBQUM4QixNQUFNLEVBQUU7UUFDVG1HLFlBQVksQ0FBQzNILGVBQWUsQ0FBQztRQUM3QjJILFlBQVksQ0FBQzFILFlBQVksQ0FBQztRQUMxQnlILFlBQVksQ0FBQzNILFVBQVUsQ0FBQztRQUN4QnVCLFVBQVUsRUFBRTtRQUNaLE9BQU9xQyxPQUFPLENBQUN1QyxPQUFPLENBQUMsS0FBSyxDQUFDO01BQ2pDO01BRUF5QixZQUFZLENBQUM1SCxVQUFVLENBQUM7TUFFeEIsT0FBT3lDLE9BQU8sb0JBQWFoQixNQUFNLGdCQUFhLENBQUNxQixJQUFJLENBQUMsVUFBQUMsR0FBRyxFQUFJO1FBQ3ZELElBQUlBLEdBQUcsQ0FBQzhFLE1BQU0sRUFBRTtVQUNaRCxZQUFZLENBQUMzSCxlQUFlLENBQUM7VUFDN0IwSCxZQUFZLENBQUN6SCxZQUFZLENBQUM7UUFDOUIsQ0FBQyxNQUFNO1VBQ0h5SCxZQUFZLENBQUMxSCxlQUFlLENBQUM7VUFDN0IySCxZQUFZLENBQUMxSCxZQUFZLENBQUM7UUFDOUI7UUFDQXFCLFVBQVUsRUFBRTtNQUNoQixDQUFDLENBQUM7SUFDTixDQUFDLEVBQUVtRyxRQUFRLENBQUM7RUFDaEI7RUFFQSxTQUFTckUsV0FBVyxDQUFDRixHQUFHLEVBQUU7SUFDdEIsSUFBTTJFLFVBQVUsR0FBRztNQUNmQyxNQUFNLEVBQUV2RSxNQUFNLENBQUNDLFFBQVEsQ0FBQ0MsSUFBSTtNQUM1Qm1FLE1BQU0sRUFBRXBHLE1BQU07TUFDZHVHLFNBQVMsRUFBRSxDQUFBN0UsR0FBRyxhQUFIQSxHQUFHLHVCQUFIQSxHQUFHLENBQUVDLEtBQUssTUFBSUQsR0FBRyxhQUFIQSxHQUFHLHVCQUFIQSxHQUFHLENBQUU4RSxJQUFJLE1BQUk5RSxHQUFHLGFBQUhBLEdBQUcsdUJBQUhBLEdBQUcsQ0FBRStFLE9BQU8sS0FBSSxlQUFlO01BQ3JFQyxJQUFJLEVBQUUsQ0FBQWhGLEdBQUcsYUFBSEEsR0FBRyx1QkFBSEEsR0FBRyxDQUFFaUYsSUFBSSxLQUFJLGNBQWM7TUFDakNDLEtBQUssRUFBRSxDQUFBbEYsR0FBRyxhQUFIQSxHQUFHLHVCQUFIQSxHQUFHLENBQUVrRixLQUFLLEtBQUk7SUFDekIsQ0FBQztJQUVEekYsS0FBSyxDQUFDLDBDQUEwQyxFQUFFO01BQzlDMEYsTUFBTSxFQUFFLE1BQU07TUFDZHpGLE9BQU8sRUFBRTtRQUNMLGNBQWMsRUFBRTtNQUNwQixDQUFDO01BQ0RpQixJQUFJLEVBQUV5RSxJQUFJLENBQUNDLFNBQVMsQ0FBQ1YsVUFBVTtJQUNuQyxDQUFDLENBQUMsU0FBTSxDQUFDMUksT0FBTyxDQUFDcUosSUFBSSxDQUFDO0VBQzFCO0VBRUEsU0FBU2pDLFNBQVMsR0FBRztJQUNqQixJQUFNa0MsS0FBSyxHQUFHcEosUUFBUSxDQUFDQyxnQkFBZ0IsQ0FBQyxrQkFBa0IsQ0FBQztJQUMzRCxJQUFJbUosS0FBSyxJQUFJQSxLQUFLLENBQUNwRyxNQUFNLEVBQUU7TUFDdkIsSUFBR2QsY0FBYyxFQUFDO1FBQ2RrSCxLQUFLLENBQUNsSixPQUFPLENBQUMsVUFBQW1KLElBQUksRUFBSTtVQUNsQixJQUFNQyxHQUFHLEdBQUdELElBQUksQ0FBQzlELFlBQVksQ0FBQyxnQkFBZ0IsQ0FBQztVQUMvQzhELElBQUksQ0FBQzVILFNBQVMsR0FBR0MsUUFBUSxDQUFDNEgsR0FBRyxDQUFDLElBQUksMENBQTBDLEdBQUdBLEdBQUc7VUFDbEYsSUFBSTVILFFBQVEsQ0FBQzRILEdBQUcsQ0FBQyxFQUFFO1lBQ2ZELElBQUksQ0FBQzFILGVBQWUsQ0FBQyxnQkFBZ0IsQ0FBQztVQUMxQztRQUNKLENBQUMsQ0FBQztNQUNOLENBQUMsTUFBSTtRQUNEN0IsT0FBTyxDQUFDQyxHQUFHLENBQUMsb0JBQW9CLENBQUM7TUFDckM7SUFDSjtJQUNBd0oscUJBQXFCLENBQUM5SSxRQUFRLENBQUM7RUFDbkM7RUFFQSxTQUFTOEkscUJBQXFCLENBQUNDLE9BQU8sRUFBRTtJQUNwQyxJQUFJLENBQUNBLE9BQU8sRUFBRTtNQUNWO0lBQ0o7SUFDQSx3QkFBbUIsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLDBCQUFFO01BQTVCLElBQU1DLElBQUk7TUFDWEQsT0FBTyxDQUFDcEosU0FBUyxDQUFDSSxNQUFNLENBQUNpSixJQUFJLENBQUM7SUFDbEM7SUFDQUQsT0FBTyxDQUFDcEosU0FBUyxDQUFDQyxHQUFHLENBQUN3QixNQUFNLENBQUM7RUFDakM7RUFFQSxTQUFTNkgsV0FBVyxDQUFDQyxJQUFJLEVBQUU7SUFDdkJ4RyxPQUFPLGtCQUFXd0csSUFBSSxFQUFHLENBQ3BCbkcsSUFBSSxDQUFDLFVBQUFvRyxJQUFJLEVBQUk7TUFDVixJQUFNQyxLQUFLLEdBQUdELElBQUk7TUFDbEJFLGtCQUFrQixDQUFDRCxLQUFLLEVBQUUxSCxNQUFNLEVBQUV3SCxJQUFJLENBQUM7SUFDM0MsQ0FBQyxDQUFDO0VBQ1Y7RUFFQSxTQUFTRyxrQkFBa0IsQ0FBQ0QsS0FBSyxFQUFFRSxhQUFhLEVBQUVKLElBQUksRUFBRTtJQUNwREssWUFBWSxDQUFDdkksU0FBUyxHQUFHLEVBQUU7SUFDM0J3SSxpQkFBaUIsQ0FBQ3hJLFNBQVMsR0FBRyxFQUFFO0lBQ2hDLElBQUksRUFBQ29JLEtBQUssYUFBTEEsS0FBSyxlQUFMQSxLQUFLLENBQUU3RyxNQUFNLEdBQUU7SUFDcEIsSUFBTWtILFdBQVcsR0FBR0wsS0FBSyxDQUFDTSxJQUFJLENBQUMsVUFBQUMsSUFBSTtNQUFBLE9BQUlBLElBQUksQ0FBQzdCLE1BQU0sS0FBS3dCLGFBQWE7SUFBQSxFQUFDO0lBQ3JFLElBQU1NLGdCQUFnQixHQUFHSCxXQUFXLElBQUlMLEtBQUssQ0FBQ1MsS0FBSyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQ0MsSUFBSSxDQUFDLFVBQUFILElBQUk7TUFBQSxPQUFJQSxJQUFJLENBQUM3QixNQUFNLEtBQUt3QixhQUFhO0lBQUEsRUFBQztJQUN0RyxJQUFNUyxjQUFjLEdBQUcsQ0FBQ3JJLE1BQU0sSUFBSWtJLGdCQUFnQixHQUFJLEVBQUUsR0FBRyxFQUFFO0lBQzdELElBQU1JLFFBQVEsR0FBR1osS0FBSyxDQUFDUyxLQUFLLENBQUMsQ0FBQyxFQUFFRSxjQUFjLENBQUM7SUFDL0NDLFFBQVEsQ0FBQ3ZLLE9BQU8sQ0FBQyxVQUFBa0ssSUFBSSxFQUFJO01BQ3JCTSxXQUFXLENBQUNOLElBQUksRUFBRUEsSUFBSSxDQUFDN0IsTUFBTSxLQUFLd0IsYUFBYSxFQUFFQyxZQUFZLEVBQUVTLFFBQVEsRUFBRUosZ0JBQWdCLEVBQUVWLElBQUksQ0FBQztJQUNwRyxDQUFDLENBQUM7SUFDRixJQUFJLENBQUNVLGdCQUFnQixJQUFJSCxXQUFXLEVBQUU7TUFDbENRLFdBQVcsQ0FBQ1IsV0FBVyxFQUFFLElBQUksRUFBRUQsaUJBQWlCLEVBQUVKLEtBQUssRUFBRSxLQUFLLEVBQUVGLElBQUksQ0FBQztJQUN6RTtFQUNKO0VBRUEsU0FBU2UsV0FBVyxDQUFDTixJQUFJLEVBQUVPLGFBQWEsRUFBRUMsS0FBSyxFQUFFZixLQUFLLEVBQUVRLGdCQUFnQixFQUFFVixJQUFJLEVBQUU7SUFDNUUsSUFBTWtCLFNBQVMsR0FBRyxTQUFaQSxTQUFTLENBQUlDLFFBQVEsRUFBbUI7TUFBQSxJQUFqQkMsT0FBTyx1RUFBRyxDQUFDLENBQUM7TUFDckMseUJBQWdEQSxPQUFPLENBQS9DQyxTQUFTO1FBQVRBLFNBQVMsbUNBQUcsS0FBSztRQUFBLG9CQUF1QkQsT0FBTyxDQUE1QkUsUUFBUTtRQUFSQSxRQUFRLGtDQUFHLEtBQUs7TUFDM0MsSUFBTUMsT0FBTyxHQUFHbEwsUUFBUSxDQUFDbUwsYUFBYSxDQUFDLEtBQUssQ0FBQztNQUM3Q0QsT0FBTyxDQUFDOUssU0FBUyxDQUFDQyxHQUFHLENBQUMsWUFBWSxDQUFDO01BRW5DLElBQU0rSyxTQUFTLEdBQUd2QixLQUFLLENBQUN3QixPQUFPLENBQUNQLFFBQVEsQ0FBQyxHQUFHLENBQUM7TUFDN0MsSUFBTVEsUUFBUSxHQUFHdEosS0FBSyxHQUFHLElBQUksR0FBR3VKLHNCQUFzQixDQUFDSCxTQUFTLEVBQUV6QixJQUFJLENBQUM7TUFFdkUsSUFBSXlCLFNBQVMsSUFBSSxDQUFDLEVBQUU7UUFDaEJGLE9BQU8sQ0FBQzlLLFNBQVMsQ0FBQ0MsR0FBRyxnQkFBUytLLFNBQVMsRUFBRztNQUM5QztNQUVBLElBQUlKLFNBQVMsSUFBSUwsYUFBYSxJQUFJLENBQUNNLFFBQVEsRUFBRTtRQUN6Q0MsT0FBTyxDQUFDOUssU0FBUyxDQUFDQyxHQUFHLENBQUMsS0FBSyxDQUFDO01BQ2hDLENBQUMsTUFBTSxJQUFJNEssUUFBUSxFQUFFO1FBQ2pCQyxPQUFPLENBQUM5SyxTQUFTLENBQUNDLEdBQUcsQ0FBQyxXQUFXLENBQUM7TUFDdEM7TUFFQTZLLE9BQU8sQ0FBQ3pKLFNBQVMsNEVBRVgySixTQUFTLEdBQUcsRUFBRSxHQUFHLEdBQUcsR0FBR0EsU0FBUyxHQUFHQSxTQUFTLCtCQUM1Q1QsYUFBYSxJQUFJLENBQUNNLFFBQVEsR0FBRyxvQkFBb0IsR0FBR08sWUFBWSxDQUFDLEtBQUssQ0FBQyxHQUFHLFNBQVMsR0FBRyxFQUFFLGdHQUd4RmIsYUFBYSxJQUFJLENBQUNNLFFBQVEsR0FBR0gsUUFBUSxDQUFDdkMsTUFBTSxHQUFHa0QsVUFBVSxDQUFDWCxRQUFRLENBQUN2QyxNQUFNLENBQUMsZ0dBRzFFdUMsUUFBUSxDQUFDWSxNQUFNLGdHQUdmSixRQUFRLEdBQUdFLFlBQVksQ0FBQ0YsUUFBUSxDQUFDLEdBQUcsS0FBSyxtQ0FFbEQ7TUFFR1YsS0FBSyxDQUFDZSxNQUFNLENBQUNULE9BQU8sQ0FBQztJQUN6QixDQUFDO0lBQ0QsSUFBSVAsYUFBYSxJQUFJLENBQUNOLGdCQUFnQixFQUFFO01BQ3BDLElBQU12QyxLQUFLLEdBQUcrQixLQUFLLENBQUN3QixPQUFPLENBQUNqQixJQUFJLENBQUM7TUFDakMsSUFBSVAsS0FBSyxDQUFDL0IsS0FBSyxHQUFHLENBQUMsQ0FBQyxFQUFFO1FBQ2xCK0MsU0FBUyxDQUFDaEIsS0FBSyxDQUFDL0IsS0FBSyxHQUFHLENBQUMsQ0FBQyxFQUFFO1VBQUVtRCxRQUFRLEVBQUU7UUFBSyxDQUFDLENBQUM7TUFDbkQ7TUFDQUosU0FBUyxDQUFDVCxJQUFJLEVBQUU7UUFBRVksU0FBUyxFQUFFO01BQUssQ0FBQyxDQUFDO01BQ3BDLElBQUluQixLQUFLLENBQUMvQixLQUFLLEdBQUcsQ0FBQyxDQUFDLEVBQUU7UUFDbEIrQyxTQUFTLENBQUNoQixLQUFLLENBQUMvQixLQUFLLEdBQUcsQ0FBQyxDQUFDLEVBQUU7VUFBRW1ELFFBQVEsRUFBRTtRQUFLLENBQUMsQ0FBQztNQUNuRDtJQUNKLENBQUMsTUFBTTtNQUNISixTQUFTLENBQUNULElBQUksQ0FBQztJQUNuQjtFQUNKO0VBR0EsU0FBU29CLFlBQVksQ0FBQ2xDLEdBQUcsRUFBRXNDLFlBQVksRUFBRTtJQUNyQyxJQUFJLENBQUN0QyxHQUFHLEVBQUU7TUFDTjtJQUNKO0lBQ0EsSUFBSXVDLE9BQU8sR0FBRzdKLEtBQUssR0FBR3NILEdBQUcsa0RBQTJDQSxHQUFHLENBQUU7SUFFekVzQyxZQUFZLEdBQUlDLE9BQU8sSUFBSXZDLEdBQUc7SUFDOUIsT0FBTzVILFFBQVEsQ0FBQzRILEdBQUcsQ0FBQyxJQUFJc0MsWUFBWTtFQUN4QztFQUVBLFNBQVNILFVBQVUsQ0FBQ3RKLE1BQU0sRUFBRTtJQUN4QixPQUFPLElBQUksR0FBR0EsTUFBTSxDQUFDakQsUUFBUSxFQUFFLENBQUNvTCxLQUFLLENBQUMsQ0FBQyxDQUFDO0VBQzVDO0VBRUEsU0FBU2lCLHNCQUFzQixDQUFDTyxLQUFLLEVBQUVuQyxJQUFJLEVBQUU7SUFDekMsSUFBSW1DLEtBQUssSUFBSSxDQUFDLEVBQUUsdUJBQWdCbkMsSUFBSSxjQUFJbUMsS0FBSztJQUM3QyxJQUFJQSxLQUFLLElBQUksRUFBRSxFQUFFLHVCQUFnQm5DLElBQUk7SUFDckMsSUFBSW1DLEtBQUssSUFBSSxFQUFFLEVBQUUsdUJBQWdCbkMsSUFBSTtJQUNyQyxJQUFJbUMsS0FBSyxJQUFJLEVBQUUsRUFBRSx1QkFBZ0JuQyxJQUFJO0lBQ3JDLElBQUltQyxLQUFLLElBQUksRUFBRSxFQUFFLHVCQUFnQm5DLElBQUk7SUFDckMsSUFBSW1DLEtBQUssSUFBSSxHQUFHLEVBQUUsdUJBQWdCbkMsSUFBSTtJQUN0QyxJQUFJbUMsS0FBSyxJQUFJLEdBQUcsRUFBRSx1QkFBZ0JuQyxJQUFJO0lBQ3RDLElBQUltQyxLQUFLLElBQUksR0FBRyxFQUFFLHVCQUFnQm5DLElBQUk7SUFDdEMsSUFBSW1DLEtBQUssSUFBSSxHQUFHLEVBQUUsdUJBQWdCbkMsSUFBSTtJQUN0QyxJQUFJbUMsS0FBSyxJQUFJLEdBQUcsRUFBRSx1QkFBZ0JuQyxJQUFJO0VBQzFDO0VBRUEsU0FBU3hFLFdBQVcsR0FBRztJQUNuQixJQUFJLENBQUNoRCxNQUFNLEVBQUU7TUFDVDtJQUNKO0lBQ0EsSUFBTTRKLE1BQU0sR0FBRztNQUFFeEQsTUFBTSxFQUFFcEc7SUFBTyxDQUFDO0lBQ2pDbUIsS0FBSyxDQUFDaEYsTUFBTSxHQUFHLFFBQVEsRUFBRTtNQUNyQmlGLE9BQU8sRUFBRTtRQUNMLFFBQVEsRUFBRSxrQkFBa0I7UUFDNUIsY0FBYyxFQUFFO01BQ3BCLENBQUM7TUFDRHlGLE1BQU0sRUFBRSxNQUFNO01BQ2R4RSxJQUFJLEVBQUV5RSxJQUFJLENBQUNDLFNBQVMsQ0FBQzZDLE1BQU07SUFDL0IsQ0FBQyxDQUFDLENBQUN2SSxJQUFJLENBQUMsVUFBQUMsR0FBRztNQUFBLE9BQUlBLEdBQUcsQ0FBQ0csSUFBSSxFQUFFO0lBQUEsRUFBQyxDQUNyQkosSUFBSSxDQUFDLFVBQUFDLEdBQUcsRUFBSTtNQUNUN0IsU0FBUyxHQUFHLElBQUk7TUFDaEJYLGFBQWEsQ0FBQ04sZUFBZSxFQUFFLFFBQVEsQ0FBQztNQUN4Q1csZ0JBQWdCLENBQUNYLGVBQWUsRUFBRSxRQUFRLENBQUM7TUFDM0NtRSxVQUFVLENBQUMsWUFBSztRQUNaeEQsZ0JBQWdCLENBQUNYLGVBQWUsRUFBRSxjQUFjLENBQUM7UUFDakRNLGFBQWEsQ0FBQ04sZUFBZSxFQUFFLE1BQU0sQ0FBQztRQUN0Q00sYUFBYSxDQUFDTixlQUFlLEVBQUUsUUFBUSxDQUFDO01BQzVDLENBQUMsRUFBRSxHQUFHLENBQUM7TUFDUG1FLFVBQVUsQ0FBQyxZQUFJO1FBQ1hELGFBQWEsRUFBRTtNQUNuQixDQUFDLEVBQUUsSUFBSSxDQUFDO0lBRVosQ0FBQyxDQUFDO0VBQ1Y7RUFDQSxTQUFTZ0IsWUFBWSxHQUFHO0lBQ3BCbkQsS0FBSyxDQUFDeEMsT0FBTyxDQUFDLFVBQUM4TCxJQUFJLEVBQUVsRSxLQUFLLEVBQUs7TUFDM0IsSUFBTW1FLFFBQVEsR0FBR25FLEtBQUssR0FBR2hGLFlBQVk7TUFDckMsSUFBSW9KLFdBQVcsR0FBR0QsUUFBUSxHQUFHLEdBQUc7TUFFaEMsSUFBSUEsUUFBUSxHQUFHbEosVUFBVSxHQUFHLENBQUMsRUFBRTtRQUMzQm1KLFdBQVcsSUFBSW5KLFVBQVUsR0FBRyxHQUFHO01BQ25DLENBQUMsTUFBTSxJQUFJa0osUUFBUSxHQUFHLENBQUNsSixVQUFVLEdBQUcsQ0FBQyxFQUFFO1FBQ25DbUosV0FBVyxJQUFJbkosVUFBVSxHQUFHLEdBQUc7TUFDbkM7TUFFQSxJQUFNb0osS0FBSyxHQUFHckUsS0FBSyxLQUFLaEYsWUFBWSxHQUFHLENBQUMsR0FBRyxDQUFDO01BRTVDa0osSUFBSSxDQUFDaEksS0FBSyxDQUFDb0ksU0FBUyx3QkFBaUJGLFdBQVcsc0JBQVlDLEtBQUssTUFBRztNQUNwRUgsSUFBSSxDQUFDaEksS0FBSyxDQUFDcUksTUFBTSxHQUFHdkUsS0FBSyxLQUFLaEYsWUFBWSxHQUFHLENBQUMsR0FBRyxDQUFDO01BRWxELElBQU13SixTQUFTLEdBQUcvSixJQUFJLENBQUNnSyxHQUFHLENBQUNOLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFDcENuRSxLQUFLLEtBQUssQ0FBQyxJQUFJaEYsWUFBWSxLQUFLQyxVQUFVLEdBQUcsQ0FBRSxJQUMvQytFLEtBQUssS0FBSy9FLFVBQVUsR0FBRyxDQUFDLElBQUlELFlBQVksS0FBSyxDQUFFO01BRXBEa0osSUFBSSxDQUFDNUwsU0FBUyxDQUFDaUIsTUFBTSxDQUFDLFFBQVEsRUFBRSxDQUFDaUwsU0FBUyxDQUFDO01BQzNDTixJQUFJLENBQUM1TCxTQUFTLENBQUNpQixNQUFNLENBQUMsUUFBUSxFQUFFeUcsS0FBSyxLQUFLaEYsWUFBWSxDQUFDO01BRXZEa0osSUFBSSxDQUFDNUwsU0FBUyxDQUFDSSxNQUFNLENBQUMsWUFBWSxFQUFFLGFBQWEsQ0FBQztNQUNsRCxJQUFJeUwsUUFBUSxLQUFLLENBQUMsSUFBS25KLFlBQVksS0FBS0MsVUFBVSxHQUFHLENBQUMsSUFBSStFLEtBQUssS0FBSyxDQUFFLEVBQUU7UUFDcEVrRSxJQUFJLENBQUM1TCxTQUFTLENBQUNDLEdBQUcsQ0FBQyxhQUFhLENBQUM7TUFDckMsQ0FBQyxNQUFNLElBQUk0TCxRQUFRLEtBQUssQ0FBQyxDQUFDLElBQUtuSixZQUFZLEtBQUssQ0FBQyxJQUFJZ0YsS0FBSyxLQUFLL0UsVUFBVSxHQUFHLENBQUUsRUFBRTtRQUM1RWlKLElBQUksQ0FBQzVMLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLFlBQVksQ0FBQztNQUNwQztJQUNKLENBQUMsQ0FBQztJQUVGc0MsSUFBSSxDQUFDekMsT0FBTyxDQUFDLFVBQUErSCxHQUFHO01BQUEsT0FBSUEsR0FBRyxDQUFDN0gsU0FBUyxDQUFDSSxNQUFNLENBQUMsU0FBUyxDQUFDO0lBQUEsRUFBQztJQUNwRCxJQUFJbUMsSUFBSSxDQUFDRyxZQUFZLENBQUMsRUFBRTtNQUNwQkgsSUFBSSxDQUFDRyxZQUFZLENBQUMsQ0FBQzFDLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLFNBQVMsQ0FBQztJQUMvQztFQUNKO0VBRUEsU0FBUzRGLFVBQVUsQ0FBQ3VHLE1BQU0sRUFBRTtJQUN4QjFKLFlBQVksR0FBRyxDQUFDQSxZQUFZLEdBQUcwSixNQUFNLEdBQUd6SixVQUFVLElBQUlBLFVBQVU7SUFDaEU4QyxZQUFZLEVBQUU7RUFDbEI7RUFFQSxTQUFTNEcsU0FBUyxDQUFDM0UsS0FBSyxFQUFFO0lBQ3RCaEYsWUFBWSxHQUFHZ0YsS0FBSztJQUNwQmpDLFlBQVksRUFBRTtFQUNsQjtFQUVBLFNBQVNDLFdBQVcsQ0FBQzRHLEtBQUssRUFBRTtJQUN4QnpKLFVBQVUsR0FBRyxJQUFJO0lBQ2pCQyxNQUFNLEdBQUd3SixLQUFLLENBQUNDLE9BQU8sSUFBSUQsS0FBSyxDQUFDRSxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUNELE9BQU87RUFDdEQ7RUFFQSxTQUFTNUcsVUFBVSxDQUFDMkcsS0FBSyxFQUFFO0lBQ3ZCLElBQUksQ0FBQ3pKLFVBQVUsRUFBRTtJQUNqQixJQUFNNEosUUFBUSxHQUFHSCxLQUFLLENBQUNDLE9BQU8sSUFBSUQsS0FBSyxDQUFDRSxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUNELE9BQU87SUFDMUQsSUFBTUcsS0FBSyxHQUFHRCxRQUFRLEdBQUczSixNQUFNO0lBRS9CLElBQUlYLElBQUksQ0FBQ2dLLEdBQUcsQ0FBQ08sS0FBSyxDQUFDLEdBQUcsRUFBRSxFQUFFO01BQ3RCN0csVUFBVSxDQUFDNkcsS0FBSyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7TUFDOUI3SixVQUFVLEdBQUcsS0FBSztJQUN0QjtFQUNKO0VBRUEsU0FBUytDLFNBQVMsR0FBRztJQUNqQi9DLFVBQVUsR0FBRyxLQUFLO0VBQ3RCOztFQUVBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTs7RUFHQSxTQUFTb0MsY0FBYyxHQUFHO0lBQ3RCckYsUUFBUSxDQUFDQyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsQ0FBQ0MsT0FBTyxDQUFDLFVBQUE2TSxDQUFDO01BQUEsT0FBSUEsQ0FBQyxDQUFDM00sU0FBUyxDQUFDQyxHQUFHLENBQUMsTUFBTSxDQUFDO0lBQUEsRUFBQztJQUN6RUwsUUFBUSxDQUFDQyxnQkFBZ0IsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDQyxPQUFPLENBQUMsVUFBQTZNLENBQUM7TUFBQSxPQUFJQSxDQUFDLENBQUMzTSxTQUFTLENBQUNDLEdBQUcsQ0FBQyxNQUFNLENBQUM7SUFBQSxFQUFDO0lBQ3BGTCxRQUFRLENBQUNPLGFBQWEsQ0FBQyxTQUFTLENBQUMsQ0FBQ0gsU0FBUyxDQUFDQyxHQUFHLENBQUMsaUJBQWlCLENBQUM7RUFDdEU7RUFFQSxTQUFTMkUsWUFBWSxHQUFHO0lBQ3BCM0MsR0FBRyxDQUFDakMsU0FBUyxDQUFDQyxHQUFHLENBQUMsT0FBTyxDQUFDO0lBRTFCeUUsVUFBVSxDQUFDLFlBQU07TUFDYnpDLEdBQUcsQ0FBQ2pDLFNBQVMsQ0FBQ0ksTUFBTSxDQUFDLE9BQU8sQ0FBQztNQUM3QixJQUFNd00sU0FBUyxHQUFHekssSUFBSSxDQUFDQyxNQUFNLEVBQUUsR0FBRyxJQUFJLEdBQUcsSUFBSTtNQUM3Q3NDLFVBQVUsQ0FBQ0UsWUFBWSxFQUFFZ0ksU0FBUyxDQUFDO0lBQ3ZDLENBQUMsRUFBRSxJQUFJLENBQUM7RUFDWjtFQUlBL0YsZ0JBQWdCLEVBQUUsQ0FBQ3pELElBQUksQ0FBQ2tCLElBQUksQ0FBQzs7RUFFN0I7O0VBR0E7O0VBRUExRSxRQUFRLENBQUNDLGdCQUFnQixDQUFDLGlCQUFpQixDQUFDLENBQUNDLE9BQU8sQ0FBQyxVQUFBK0UsR0FBRyxFQUFJO0lBQ3hEQSxHQUFHLENBQUNDLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxZQUFNO01BQ2hDRCxHQUFHLENBQUNnSSxhQUFhLENBQUM3TSxTQUFTLENBQUNpQixNQUFNLENBQUMsTUFBTSxDQUFDO0lBQzlDLENBQUMsQ0FBQztFQUNOLENBQUMsQ0FBQztFQUVGckIsUUFBUSxDQUFDa0YsZ0JBQWdCLENBQUMsa0JBQWtCLEVBQUUsWUFBTTtJQUFBO0lBQ2hELHlCQUFBbEYsUUFBUSxDQUFDTyxhQUFhLENBQUMsV0FBVyxDQUFDLDBEQUFuQyxzQkFBcUMyRSxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsWUFBTTtNQUFBO01BQ2pFLDBCQUFBbEYsUUFBUSxDQUFDTyxhQUFhLENBQUMsWUFBWSxDQUFDLDJEQUFwQyx1QkFBc0NILFNBQVMsQ0FBQ2lCLE1BQU0sQ0FBQyxNQUFNLENBQUM7SUFDbEUsQ0FBQyxDQUFDO0VBQ04sQ0FBQyxDQUFDO0VBRUYsSUFBTTZMLE1BQU0sR0FBR2xOLFFBQVEsQ0FBQ08sYUFBYSxDQUFDLFVBQVUsQ0FBQztFQUVqRDJNLE1BQU0sQ0FBQ2hJLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxZQUFNO0lBQ25DLElBQUlwRCxjQUFjLENBQUNDLE9BQU8sQ0FBQyxRQUFRLENBQUMsRUFBRTtNQUNsQ0QsY0FBYyxDQUFDcUwsVUFBVSxDQUFDLFFBQVEsQ0FBQztJQUN2QyxDQUFDLE1BQU07TUFDSHJMLGNBQWMsQ0FBQ3NMLE9BQU8sQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDO0lBQzFDO0lBQ0FsSixNQUFNLENBQUNDLFFBQVEsQ0FBQ2tKLE1BQU0sRUFBRTtFQUM1QixDQUFDLENBQUM7RUFFRixJQUFNQyxPQUFPLEdBQUd0TixRQUFRLENBQUNPLGFBQWEsQ0FBQyxXQUFXLENBQUM7RUFDbkQsSUFBTWdOLE1BQU0sR0FBR3ZOLFFBQVEsQ0FBQ08sYUFBYSxDQUFDLGlCQUFpQixDQUFDO0VBRXhEK00sT0FBTyxDQUFDcEksZ0JBQWdCLENBQUMsT0FBTyxFQUFFLFlBQUs7SUFDbkMsSUFBRy9DLE1BQU0sRUFBQztNQUNOTCxjQUFjLENBQUNxTCxVQUFVLENBQUMsUUFBUSxDQUFDO0lBQ3ZDLENBQUMsTUFBSTtNQUNEckwsY0FBYyxDQUFDc0wsT0FBTyxDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUM7SUFDOUM7SUFDQWxKLE1BQU0sQ0FBQ0MsUUFBUSxDQUFDa0osTUFBTSxFQUFFO0VBQzVCLENBQUMsQ0FBQztBQUdOLENBQUMsR0FBRzs7QUFFSjtBQUNBLFNBQVM3SCxlQUFlLENBQUNGLFNBQVMsRUFBMEI7RUFBQSxJQUF4QmtJLGNBQWMsdUVBQUcsS0FBSztFQUN0RCxJQUFNQyxTQUFTLEdBQUd6TixRQUFRLENBQUNDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQztFQUNyRHdOLFNBQVMsQ0FBQ3ZOLE9BQU8sQ0FBQyxVQUFBNk0sQ0FBQztJQUFBLE9BQUlBLENBQUMsQ0FBQzNNLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLE1BQU0sQ0FBQztFQUFBLEVBQUM7RUFFL0MsSUFBTXFOLFdBQVcsR0FBRzFOLFFBQVEsQ0FBQ08sYUFBYSwrQkFBdUIrRSxTQUFTLFNBQUs7RUFDL0UsSUFBSW9JLFdBQVcsRUFBRTtJQUNiQSxXQUFXLENBQUN0TixTQUFTLENBQUNJLE1BQU0sQ0FBQyxNQUFNLENBQUM7SUFDcENSLFFBQVEsQ0FBQ08sYUFBYSxDQUFDLFNBQVMsQ0FBQyxDQUFDSCxTQUFTLENBQUNJLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQztFQUN6RTtFQUVBLElBQU1tTixRQUFRLEdBQUczTixRQUFRLENBQUNPLGFBQWEsQ0FBQyxtQkFBbUIsQ0FBQztFQUM1RCxJQUFJb04sUUFBUSxFQUFFO0lBQ1ZBLFFBQVEsQ0FBQ3ZOLFNBQVMsQ0FBQ2lCLE1BQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQ21NLGNBQWMsQ0FBQztFQUN0RDtBQUNKO0FBQ0EiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiAoKSB7XG5cbiAgICBjb25zdCBhcGlVUkwgPSAnaHR0cHM6Ly9mYXYtcHJvbS5jb20vYXBpX3NhbV91YSdcblxuICAgIGNvbnN0IGdldEFjdGl2ZVdlZWsgPSAocHJvbW9TdGFydERhdGUsIHdlZWtEdXJhdGlvbikgPT4ge1xuICAgICAgICBjb25zdCBjdXJyZW50RGF0ZSA9IG5ldyBEYXRlKCk7XG4gICAgICAgIGxldCB3ZWVrRGF0ZXMgPSBbXTtcblxuICAgICAgICBjb25zdCBEYXkgPSAyNCAqIDYwICogNjAgKiAxMDAwO1xuICAgICAgICBjb25zdCBXZWVrID0gd2Vla0R1cmF0aW9uICogRGF5O1xuXG4gICAgICAgIGNvbnN0IGZvcm1hdERhdGUgPSAoZGF0ZSkgPT5cbiAgICAgICAgICAgIGAke2RhdGUuZ2V0RGF0ZSgpLnRvU3RyaW5nKCkucGFkU3RhcnQoMiwgXCIwXCIpfS4keyhkYXRlLmdldE1vbnRoKCkgKyAxKS50b1N0cmluZygpLnBhZFN0YXJ0KDIsIFwiMFwiKX1gO1xuXG4gICAgICAgIGNvbnN0IGNhbGN1bGF0ZVdlZWtQZXJpb2QgPSAod2Vla0luZGV4KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBiYXNlU3RhcnQgPSBwcm9tb1N0YXJ0RGF0ZS5nZXRUaW1lKCk7XG4gICAgICAgICAgICBjb25zdCBzdGFydCA9IG5ldyBEYXRlKGJhc2VTdGFydCArIHdlZWtJbmRleCAqIFdlZWspO1xuICAgICAgICAgICAgbGV0IGVuZCA9IG5ldyBEYXRlKHN0YXJ0LmdldFRpbWUoKSArICh3ZWVrRHVyYXRpb24gKiBEYXkgLSAxKSk7XG4gICAgICAgICAgICByZXR1cm4geyBzdGFydCwgZW5kIH07XG4gICAgICAgIH07XG5cbiAgICAgICAgbGV0IGFjdGl2ZVdlZWtJbmRleCA9IG51bGw7XG5cbiAgICAgICAgLy8g0J/QtdGA0LXQstGW0YDQutCwINC/0L7RgtC+0YfQvdC+0LPQviDRgtC40LbQvdGPXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTA7IGkrKykgeyAvLyDQntCx0LzQtdC20YPRlNC80L4gMTAg0YLQuNC20L3Rj9C80LggKNGP0LrRidC+INC/0L7RgtGA0ZbQsdC90L4g0LHRltC70YzRiNC1LCDQv9GA0L7RgdGC0L4g0LfQvNGW0L3RltGC0Ywg0LvRltGH0LjQu9GM0L3QuNC6KVxuICAgICAgICAgICAgY29uc3QgeyBzdGFydCwgZW5kIH0gPSBjYWxjdWxhdGVXZWVrUGVyaW9kKGkpO1xuICAgICAgICAgICAgaWYgKGN1cnJlbnREYXRlID49IHN0YXJ0ICYmIGN1cnJlbnREYXRlIDw9IGVuZCkge1xuICAgICAgICAgICAgICAgIGFjdGl2ZVdlZWtJbmRleCA9IGkgKyAxO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGFjdGl2ZVdlZWtJbmRleDtcbiAgICB9O1xuXG4gICAgY29uc3QgcHJvbW9TdGFydERhdGUgPSBuZXcgRGF0ZShcIjIwMjUtMDctMTRUMDA6MDA6MDBcIik7XG4gICAgY29uc3Qgd2Vla0R1cmF0aW9uID0gNztcblxuICAgIGNvbnN0IGFjdGl2ZVdlZWsgPSBnZXRBY3RpdmVXZWVrKHByb21vU3RhcnREYXRlLCB3ZWVrRHVyYXRpb24pIHx8IDE7XG5cbiAgICBjb25zb2xlLmxvZyhhY3RpdmVXZWVrKVxuXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmdhbWVzX19saXN0JykuZm9yRWFjaChsaXN0ID0+IHtcbiAgICAgICAgbGlzdC5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XG4gICAgfSk7XG5cbiAgICBjb25zdCBjdXJyZW50TGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5nYW1lc19fbGlzdC5fd2VlayR7YWN0aXZlV2Vla31gKTtcblxuICAgIGNvbnNvbGUubG9nKGN1cnJlbnRMaXN0KTtcbiAgICBpZiAoY3VycmVudExpc3QpIHtcbiAgICAgICAgY3VycmVudExpc3QuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpO1xuICAgIH1cblxuXG4gICAgY29uc3QgbWFpblBhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmZhdi1wYWdlXCIpLFxuICAgICAgICB1bmF1dGhNc2dzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnVuYXV0aC1tc2cnKSxcbiAgICAgICAgcGFydGljaXBhdGVCdG5zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnBhcnQtYnRuJyksXG4gICAgICAgIHJlZGlyZWN0QnRucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5idG4tam9pbicpLFxuICAgICAgICBsb2FkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNwaW5uZXItb3ZlcmxheVwiKSxcbiAgICAgICAgY3VycmVudENhcmRzV3JhcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jaGFsbGFuZ2VfX2N1cnJlbnQnKTtcblxuICAgIGNvbnN0IHVrTGVuZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN1a0xlbmcnKTtcbiAgICBjb25zdCBlbkxlbmcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZW5MZW5nJyk7XG5cbiAgICBjb25zdCB0b2dnbGVDbGFzc2VzID0gKGVsZW1lbnRzLCBjbGFzc05hbWUpID0+IGVsZW1lbnRzLmZvckVhY2goZWwgPT4gZWwuY2xhc3NMaXN0LnRvZ2dsZShgJHtjbGFzc05hbWV9YCkpO1xuICAgIGNvbnN0IHRvZ2dsZVRyYW5zbGF0ZXMgPSAoZWxlbWVudHMsIGRhdGFBdHRyKSA9PiBlbGVtZW50cy5mb3JFYWNoKGVsID0+IHtcbiAgICAgICAgZWwuc2V0QXR0cmlidXRlKCdkYXRhLXRyYW5zbGF0ZScsIGAke2RhdGFBdHRyfWApXG4gICAgICAgIGVsLmlubmVySFRNTCA9IGkxOG5EYXRhW2RhdGFBdHRyXSB8fCAnKi0tLS1ORUVEIFRPIEJFIFRSQU5TTEFURUQtLS0tKiAgIGtleTogICcgKyBkYXRhQXR0cjtcbiAgICAgICAgZWwucmVtb3ZlQXR0cmlidXRlKCdkYXRhLXRyYW5zbGF0ZScpO1xuICAgIH0pO1xuXG4gICAgbGV0IGxvYWRlckJ0biA9IGZhbHNlXG5cbiAgICAvLyBsZXQgbG9jYWxlID0gXCJlblwiXG4gICAgbGV0IGxvY2FsZSA9IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oXCJsb2NhbGVcIikgfHwgXCJlblwiXG5cbiAgICBpZiAodWtMZW5nKSBsb2NhbGUgPSAndWsnO1xuICAgIGlmIChlbkxlbmcpIGxvY2FsZSA9ICdlbic7XG5cbiAgICBsZXQgZGVidWcgPSBmYWxzZVxuXG4gICAgaWYgKGRlYnVnKSBoaWRlTG9hZGVyKClcblxuICAgIGxldCBpMThuRGF0YSA9IHt9O1xuICAgIGNvbnN0IHRyYW5zbGF0ZVN0YXRlID0gdHJ1ZTtcbiAgICAvLyBsZXQgdXNlcklkID0gbnVsbDtcbiAgICBsZXQgdXNlcklkID0gTnVtYmVyKHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oXCJ1c2VySWRcIikpID8/IG51bGxcblxuICAgIC8vIHVzZXJJZCA9IDEwMDMwMDI2OFxuXG4gICAgY29uc3QgYm94ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNoYWtlLWJveCcpO1xuICAgIGNvbnN0IGluaXRpYWxEZWxheSA9IE1hdGgucmFuZG9tKCkgKiA2MDAwICsgNDAwMDtcblxuICAgIC8vc2xpZGVyIHZhcnNcblxuICAgIGNvbnN0IHNsaWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcml6ZV9fc2xpZGVyJyk7XG4gICAgY29uc3QgaXRlbXMgPSBzbGlkZXIucXVlcnlTZWxlY3RvckFsbCgnLnByaXplX19zbGlkZScpO1xuICAgIGNvbnN0IGRvdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucHJpemVfX25hdi1kb3RzLWl0ZW0nKTtcbiAgICBjb25zdCBidG5MZWZ0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByaXplX19uYXYtbGVmdCcpO1xuICAgIGNvbnN0IGJ0blJpZ2h0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByaXplX19uYXYtcmlnaHQnKTtcblxuICAgIGxldCBjdXJyZW50SW5kZXggPSAxO1xuICAgIGNvbnN0IHRvdGFsSXRlbXMgPSBpdGVtcy5sZW5ndGg7XG4gICAgbGV0IGlzRHJhZ2dpbmcgPSBmYWxzZTtcbiAgICBsZXQgc3RhcnRYID0gMDtcblxuICAgIC8vc2xpZGVyIHZhcnNcblxuICAgIGNvbnN0IHJlcXVlc3QgPSBmdW5jdGlvbiAobGluaywgZXh0cmFPcHRpb25zKSB7XG4gICAgICAgIHJldHVybiBmZXRjaChhcGlVUkwgKyBsaW5rLCB7XG4gICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgJ0FjY2VwdCc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgLi4uKGV4dHJhT3B0aW9ucyB8fCB7fSlcbiAgICAgICAgfSlcbiAgICAgICAgICAgIC50aGVuKHJlcyA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKCFyZXMub2spIHRocm93IG5ldyBFcnJvcignQVBJIGVycm9yJyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlcy5qc29uKCk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmNhdGNoKGVyciA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignQVBJIHJlcXVlc3QgZmFpbGVkOicsIGVycik7XG5cbiAgICAgICAgICAgICAgICByZXBvcnRFcnJvcihlcnIpO1xuXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZhdi1wYWdlJykuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgICAgICAgICBpZiAod2luZG93LmxvY2F0aW9uLmhyZWYuc3RhcnRzV2l0aChcImh0dHBzOi8vd3d3LmZhdmJldC5oci9cIikpIHtcbiAgICAgICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSAnL3Byb21vY2lqZS9wcm9tb2NpamEvc3R1Yi8nO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gJy9wcm9tb3MvcHJvbW8vc3R1Yi8nO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChlcnIpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBoaWRlTG9hZGVyKCl7XG4gICAgICAgIGxvYWRlci5jbGFzc0xpc3QuYWRkKFwiaGlkZVwiKVxuICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93ID0gXCJhdXRvXCJcbiAgICAgICAgbWFpblBhZ2UuY2xhc3NMaXN0LnJlbW92ZShcImxvYWRpbmdcIilcbiAgICB9XG5cbiAgICBhc3luYyBmdW5jdGlvbiBpbml0KCkge1xuICAgICAgICBsZXQgYXR0ZW1wdHMgPSAwO1xuICAgICAgICBjb25zdCBtYXhBdHRlbXB0cyA9IDIwO1xuICAgICAgICBjb25zdCBhdHRlbXB0SW50ZXJ2YWwgPSA1MDtcblxuICAgICAgICBmdW5jdGlvbiB0cnlEZXRlY3RVc2VySWQoKSB7XG4gICAgICAgICAgICBpZiAod2luZG93LnN0b3JlKSB7XG4gICAgICAgICAgICAgICAgY29uc3Qgc3RhdGUgPSB3aW5kb3cuc3RvcmUuZ2V0U3RhdGUoKTtcbiAgICAgICAgICAgICAgICB1c2VySWQgPSBzdGF0ZS5hdXRoLmlzQXV0aG9yaXplZCAmJiBzdGF0ZS5hdXRoLmlkIHx8ICcnO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh3aW5kb3cuZ191c2VyX2lkKSB7XG4gICAgICAgICAgICAgICAgdXNlcklkID0gd2luZG93LmdfdXNlcl9pZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIHF1aWNrQ2hlY2tBbmRSZW5kZXIoKSB7XG4gICAgICAgICAgICBjaGVja1VzZXJBdXRoKCk7XG5cbiAgICAgICAgICAgIC8vIG9wZW5Qb3B1cEJ5QXR0cihcInByaXplTGFwdG9wXCIsIHRydWUpXG5cbiAgICAgICAgICAgIHNldFRpbWVvdXQoaGlkZUxvYWRlciwgMTAwMCk7XG5cbiAgICAgICAgICAgIFNldFNsaWRlcldpZHRoQmx1cigpXG5cbiAgICAgICAgICAgIHNldFRpbWVvdXQodHJpZ2dlclNoYWtlLCBpbml0aWFsRGVsYXkpO1xuXG4gICAgICAgICAgICBwYXJ0aWNpcGF0ZUJ0bnMuZm9yRWFjaChidG4gPT4ge1xuICAgICAgICAgICAgICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHBhcnRpY2lwYXRlKTtcbiAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wb3B1cF9fY2xvc2UnKS5mb3JFYWNoKGNsb3NlQnRuID0+IHtcbiAgICAgICAgICAgICAgICBjbG9zZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNsb3NlQWxsUG9wdXBzKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcub3Blbi1idG4nKS5mb3JFYWNoKGJ0biA9PiB7XG4gICAgICAgICAgICAgICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBwb3B1cEF0dHIgPSBidG4uZ2V0QXR0cmlidXRlKCdkYXRhLXBvcHVwJyk7XG4gICAgICAgICAgICAgICAgICAgIG9wZW5Qb3B1cEJ5QXR0cihwb3B1cEF0dHIpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wb3B1cHMnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3Qgb3BlblBvcHVwRWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucG9wdXA6bm90KC5oaWRlKScpO1xuICAgICAgICAgICAgICAgIGlmIChvcGVuUG9wdXBFbCAmJiAhb3BlblBvcHVwRWwuY29udGFpbnMoZS50YXJnZXQpKSB7XG4gICAgICAgICAgICAgICAgICAgIGNsb3NlQWxsUG9wdXBzKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG5cblxuICAgICAgICAgICAgdXBkYXRlU2xpZGVyKCk7XG5cbiAgICAgICAgICAgIHNsaWRlci5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCBoYW5kbGVTdGFydCk7XG4gICAgICAgICAgICBzbGlkZXIuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgaGFuZGxlTW92ZSk7XG4gICAgICAgICAgICBzbGlkZXIuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIGhhbmRsZUVuZCk7XG4gICAgICAgICAgICBzbGlkZXIuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsIGhhbmRsZUVuZCk7XG5cbiAgICAgICAgICAgIHNsaWRlci5hZGRFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0JywgaGFuZGxlU3RhcnQpO1xuICAgICAgICAgICAgc2xpZGVyLmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNobW92ZScsIGhhbmRsZU1vdmUpO1xuICAgICAgICAgICAgc2xpZGVyLmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoZW5kJywgaGFuZGxlRW5kKTtcblxuICAgICAgICAgICAgYnRuTGVmdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IG1vdmVTbGlkZXIoLTEpKTtcbiAgICAgICAgICAgIGJ0blJpZ2h0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gbW92ZVNsaWRlcigxKSk7XG4gICAgICAgICAgICAvLyBkb3RzLmZvckVhY2goKGRvdCwgaW5kZXgpID0+IGRvdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IGdvVG9TbGlkZShpbmRleCkpKTtcblxuXG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCB3YWl0Rm9yVXNlcklkID0gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGludGVydmFsID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRyeURldGVjdFVzZXJJZCgpO1xuICAgICAgICAgICAgICAgIGlmICh1c2VySWQgfHwgYXR0ZW1wdHMgPj0gbWF4QXR0ZW1wdHMpIHtcbiAgICAgICAgICAgICAgICAgICAgcXVpY2tDaGVja0FuZFJlbmRlcigpO1xuICAgICAgICAgICAgICAgICAgICBjbGVhckludGVydmFsKGludGVydmFsKTtcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBhdHRlbXB0cysrO1xuICAgICAgICAgICAgfSwgYXR0ZW1wdEludGVydmFsKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgYXdhaXQgd2FpdEZvclVzZXJJZDtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBsb2FkVHJhbnNsYXRpb25zKCkge1xuICAgICAgICByZXR1cm4gcmVxdWVzdChgL25ldy10cmFuc2xhdGVzLyR7bG9jYWxlfWApXG4gICAgICAgICAgICAudGhlbihqc29uID0+IHtcbiAgICAgICAgICAgICAgICBpMThuRGF0YSA9IGpzb247XG4gICAgICAgICAgICAgICAgdHJhbnNsYXRlKCk7XG4gICAgICAgICAgICAgICAgY29uc3QgdGFyZ2V0Tm9kZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2FtQ2hpbGxcIik7XG4gICAgICAgICAgICAgICAgY29uc3QgbXV0YXRpb25PYnNlcnZlciA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKGZ1bmN0aW9uIChtdXRhdGlvbnMpIHtcbiAgICAgICAgICAgICAgICAgICAgbXV0YXRpb25PYnNlcnZlci5kaXNjb25uZWN0KCk7XG4gICAgICAgICAgICAgICAgICAgIHRyYW5zbGF0ZSgpO1xuICAgICAgICAgICAgICAgICAgICBtdXRhdGlvbk9ic2VydmVyLm9ic2VydmUodGFyZ2V0Tm9kZSwgeyBjaGlsZExpc3Q6IHRydWUsIHN1YnRyZWU6IHRydWUgfSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgbXV0YXRpb25PYnNlcnZlci5vYnNlcnZlKHRhcmdldE5vZGUsIHtcbiAgICAgICAgICAgICAgICAgICAgY2hpbGRMaXN0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBzdWJ0cmVlOiB0cnVlXG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIH0pO1xuICAgIH1cblxuXG4gICAgZnVuY3Rpb24gU2V0U2xpZGVyV2lkdGhCbHVyKCl7XG4gICAgICAgIGNvbnN0IHNsaWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jaGFsbGFuZ2VfX2N1cnJlbnQnKTtcbiAgICAgICAgY29uc3Qgc2xpZGVzID0gc2xpZGVyLnF1ZXJ5U2VsZWN0b3JBbGwoJy5jaGFsbGFuZ2VfX2N1cnJlbnQtaXRlbScpO1xuICAgICAgICBjb25zdCB0YWJzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNoYWxsYW5nZV9fdGFicy1pdGVtJyk7XG4gICAgICAgIGNvbnN0IGRvdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY2hhbGxhbmdlX19uYXYtZG90cy1pdGVtJyk7XG4gICAgICAgIGNvbnN0IGJ0bkxlZnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2hhbGxhbmdlX19uYXYtbGVmdCcpO1xuICAgICAgICBjb25zdCBidG5SaWdodCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jaGFsbGFuZ2VfX25hdi1yaWdodCcpO1xuXG4gICAgICAgIGxldCBjdXJyZW50SW5kZXggPSAwO1xuXG4gICAgICAgIGZ1bmN0aW9uIHVwZGF0ZVNsaWRlcihpbmRleCkge1xuICAgICAgICAgICAgc2xpZGVzLmZvckVhY2goc2xpZGUgPT4gc2xpZGUuY2xhc3NMaXN0LnJlbW92ZSgnX2FjdGl2ZScpKTtcbiAgICAgICAgICAgIHRhYnMuZm9yRWFjaCh0YWIgPT4gdGFiLmNsYXNzTGlzdC5yZW1vdmUoJ19hY3RpdmUnKSk7XG4gICAgICAgICAgICBkb3RzLmZvckVhY2goZG90ID0+IGRvdC5jbGFzc0xpc3QucmVtb3ZlKCdfYWN0aXZlJykpO1xuXG4gICAgICAgICAgICBzbGlkZXNbaW5kZXhdLmNsYXNzTGlzdC5hZGQoJ19hY3RpdmUnKTtcbiAgICAgICAgICAgIHRhYnNbaW5kZXhdLmNsYXNzTGlzdC5hZGQoJ19hY3RpdmUnKTtcbiAgICAgICAgICAgIGRvdHNbaW5kZXhdLmNsYXNzTGlzdC5hZGQoJ19hY3RpdmUnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIG1vdmVMZWZ0KCkge1xuICAgICAgICAgICAgY3VycmVudEluZGV4ID0gKGN1cnJlbnRJbmRleCAtIDEgKyBzbGlkZXMubGVuZ3RoKSAlIHNsaWRlcy5sZW5ndGg7XG4gICAgICAgICAgICB1cGRhdGVTbGlkZXIoY3VycmVudEluZGV4KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIG1vdmVSaWdodCgpIHtcbiAgICAgICAgICAgIGN1cnJlbnRJbmRleCA9IChjdXJyZW50SW5kZXggKyAxKSAlIHNsaWRlcy5sZW5ndGg7XG4gICAgICAgICAgICB1cGRhdGVTbGlkZXIoY3VycmVudEluZGV4KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGJ0bkxlZnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBtb3ZlTGVmdCk7XG4gICAgICAgIGJ0blJpZ2h0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgbW92ZVJpZ2h0KTtcblxuICAgICAgICB0YWJzLmZvckVhY2goKHRhYiwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgIHRhYi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgICAgICBjdXJyZW50SW5kZXggPSBpbmRleDtcbiAgICAgICAgICAgICAgICB1cGRhdGVTbGlkZXIoY3VycmVudEluZGV4KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcblxuICAgICAgICBkb3RzLmZvckVhY2goKGRvdCwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgIGRvdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgICAgICBjdXJyZW50SW5kZXggPSBpbmRleDtcbiAgICAgICAgICAgICAgICB1cGRhdGVTbGlkZXIoY3VycmVudEluZGV4KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcblxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNoZWNrVXNlckF1dGgoKSB7XG4gICAgICAgIGNvbnN0IGxvYWRUaW1lID0gMjAwO1xuXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgY29uc3Qgc2hvd0VsZW1lbnRzID0gKGVsZW1lbnRzKSA9PiBlbGVtZW50cy5mb3JFYWNoKGVsID0+IGVsLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKSk7XG4gICAgICAgICAgICBjb25zdCBoaWRlRWxlbWVudHMgPSAoZWxlbWVudHMpID0+IGVsZW1lbnRzLmZvckVhY2goZWwgPT4gZWwuY2xhc3NMaXN0LmFkZCgnaGlkZScpKTtcblxuICAgICAgICAgICAgaWYgKCF1c2VySWQpIHtcbiAgICAgICAgICAgICAgICBoaWRlRWxlbWVudHMocGFydGljaXBhdGVCdG5zKTtcbiAgICAgICAgICAgICAgICBoaWRlRWxlbWVudHMocmVkaXJlY3RCdG5zKTtcbiAgICAgICAgICAgICAgICBzaG93RWxlbWVudHModW5hdXRoTXNncyk7XG4gICAgICAgICAgICAgICAgaGlkZUxvYWRlcigpO1xuICAgICAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoZmFsc2UpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBoaWRlRWxlbWVudHModW5hdXRoTXNncyk7XG5cbiAgICAgICAgICAgIHJldHVybiByZXF1ZXN0KGAvZmF2dXNlci8ke3VzZXJJZH0/bm9jYWNoZT0xYCkudGhlbihyZXMgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChyZXMudXNlcmlkKSB7XG4gICAgICAgICAgICAgICAgICAgIGhpZGVFbGVtZW50cyhwYXJ0aWNpcGF0ZUJ0bnMpO1xuICAgICAgICAgICAgICAgICAgICBzaG93RWxlbWVudHMocmVkaXJlY3RCdG5zKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBzaG93RWxlbWVudHMocGFydGljaXBhdGVCdG5zKTtcbiAgICAgICAgICAgICAgICAgICAgaGlkZUVsZW1lbnRzKHJlZGlyZWN0QnRucyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGhpZGVMb2FkZXIoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LCBsb2FkVGltZSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVwb3J0RXJyb3IoZXJyKSB7XG4gICAgICAgIGNvbnN0IHJlcG9ydERhdGEgPSB7XG4gICAgICAgICAgICBvcmlnaW46IHdpbmRvdy5sb2NhdGlvbi5ocmVmLFxuICAgICAgICAgICAgdXNlcmlkOiB1c2VySWQsXG4gICAgICAgICAgICBlcnJvclRleHQ6IGVycj8uZXJyb3IgfHwgZXJyPy50ZXh0IHx8IGVycj8ubWVzc2FnZSB8fCAnVW5rbm93biBlcnJvcicsXG4gICAgICAgICAgICB0eXBlOiBlcnI/Lm5hbWUgfHwgJ1Vua25vd25FcnJvcicsXG4gICAgICAgICAgICBzdGFjazogZXJyPy5zdGFjayB8fCAnJ1xuICAgICAgICB9O1xuXG4gICAgICAgIGZldGNoKCdodHRwczovL2Zhdi1wcm9tLmNvbS9hcGktY21zL3JlcG9ydHMvYWRkJywge1xuICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHJlcG9ydERhdGEpXG4gICAgICAgIH0pLmNhdGNoKGNvbnNvbGUud2Fybik7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gdHJhbnNsYXRlKCkge1xuICAgICAgICBjb25zdCBlbGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLXRyYW5zbGF0ZV0nKVxuICAgICAgICBpZiAoZWxlbXMgJiYgZWxlbXMubGVuZ3RoKSB7XG4gICAgICAgICAgICBpZih0cmFuc2xhdGVTdGF0ZSl7XG4gICAgICAgICAgICAgICAgZWxlbXMuZm9yRWFjaChlbGVtID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qga2V5ID0gZWxlbS5nZXRBdHRyaWJ1dGUoJ2RhdGEtdHJhbnNsYXRlJyk7XG4gICAgICAgICAgICAgICAgICAgIGVsZW0uaW5uZXJIVE1MID0gaTE4bkRhdGFba2V5XSB8fCAnKi0tLS1ORUVEIFRPIEJFIFRSQU5TTEFURUQtLS0tKiAgIGtleTogICcgKyBrZXk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChpMThuRGF0YVtrZXldKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlbGVtLnJlbW92ZUF0dHJpYnV0ZSgnZGF0YS10cmFuc2xhdGUnKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInRyYW5zbGF0aW9uIHdvcmtzIVwiKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJlZnJlc2hMb2NhbGl6ZWRDbGFzcyhtYWluUGFnZSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVmcmVzaExvY2FsaXplZENsYXNzKGVsZW1lbnQpIHtcbiAgICAgICAgaWYgKCFlbGVtZW50KSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgZm9yIChjb25zdCBsYW5nIG9mIFsndWsnLCAnZW4nXSkge1xuICAgICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKGxhbmcpO1xuICAgICAgICB9XG4gICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChsb2NhbGUpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJlbmRlclVzZXJzKHdlZWspIHtcbiAgICAgICAgcmVxdWVzdChgL3VzZXJzLyR7d2Vla31gKVxuICAgICAgICAgICAgLnRoZW4oZGF0YSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgdXNlcnMgPSBkYXRhO1xuICAgICAgICAgICAgICAgIHBvcHVsYXRlVXNlcnNUYWJsZSh1c2VycywgdXNlcklkLCB3ZWVrKTtcbiAgICAgICAgICAgIH0pO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHBvcHVsYXRlVXNlcnNUYWJsZSh1c2VycywgY3VycmVudFVzZXJJZCwgd2Vlaykge1xuICAgICAgICByZXN1bHRzVGFibGUuaW5uZXJIVE1MID0gJyc7XG4gICAgICAgIHJlc3VsdHNUYWJsZU90aGVyLmlubmVySFRNTCA9ICcnO1xuICAgICAgICBpZiAoIXVzZXJzPy5sZW5ndGgpIHJldHVybjtcbiAgICAgICAgY29uc3QgY3VycmVudFVzZXIgPSB1c2Vycy5maW5kKHVzZXIgPT4gdXNlci51c2VyaWQgPT09IGN1cnJlbnRVc2VySWQpO1xuICAgICAgICBjb25zdCBpc1RvcEN1cnJlbnRVc2VyID0gY3VycmVudFVzZXIgJiYgdXNlcnMuc2xpY2UoMCwgMTApLnNvbWUodXNlciA9PiB1c2VyLnVzZXJpZCA9PT0gY3VycmVudFVzZXJJZCk7XG4gICAgICAgIGNvbnN0IHRvcFVzZXJzTGVuZ3RoID0gIXVzZXJJZCB8fCBpc1RvcEN1cnJlbnRVc2VyICA/IDEzIDogMTA7XG4gICAgICAgIGNvbnN0IHRvcFVzZXJzID0gdXNlcnMuc2xpY2UoMCwgdG9wVXNlcnNMZW5ndGgpO1xuICAgICAgICB0b3BVc2Vycy5mb3JFYWNoKHVzZXIgPT4ge1xuICAgICAgICAgICAgZGlzcGxheVVzZXIodXNlciwgdXNlci51c2VyaWQgPT09IGN1cnJlbnRVc2VySWQsIHJlc3VsdHNUYWJsZSwgdG9wVXNlcnMsIGlzVG9wQ3VycmVudFVzZXIsIHdlZWspO1xuICAgICAgICB9KTtcbiAgICAgICAgaWYgKCFpc1RvcEN1cnJlbnRVc2VyICYmIGN1cnJlbnRVc2VyKSB7XG4gICAgICAgICAgICBkaXNwbGF5VXNlcihjdXJyZW50VXNlciwgdHJ1ZSwgcmVzdWx0c1RhYmxlT3RoZXIsIHVzZXJzLCBmYWxzZSwgd2Vlayk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBkaXNwbGF5VXNlcih1c2VyLCBpc0N1cnJlbnRVc2VyLCB0YWJsZSwgdXNlcnMsIGlzVG9wQ3VycmVudFVzZXIsIHdlZWspIHtcbiAgICAgICAgY29uc3QgcmVuZGVyUm93ID0gKHVzZXJEYXRhLCBvcHRpb25zID0ge30pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHsgaGlnaGxpZ2h0ID0gZmFsc2UsIG5laWdoYm9yID0gZmFsc2UgfSA9IG9wdGlvbnM7XG4gICAgICAgICAgICBjb25zdCB1c2VyUm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICB1c2VyUm93LmNsYXNzTGlzdC5hZGQoJ3RhYmxlX19yb3cnKTtcblxuICAgICAgICAgICAgY29uc3QgdXNlclBsYWNlID0gdXNlcnMuaW5kZXhPZih1c2VyRGF0YSkgKyAxO1xuICAgICAgICAgICAgY29uc3QgcHJpemVLZXkgPSBkZWJ1ZyA/IG51bGwgOiBnZXRQcml6ZVRyYW5zbGF0aW9uS2V5KHVzZXJQbGFjZSwgd2Vlayk7XG5cbiAgICAgICAgICAgIGlmICh1c2VyUGxhY2UgPD0gMykge1xuICAgICAgICAgICAgICAgIHVzZXJSb3cuY2xhc3NMaXN0LmFkZChgcGxhY2Uke3VzZXJQbGFjZX1gKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGhpZ2hsaWdodCB8fCBpc0N1cnJlbnRVc2VyICYmICFuZWlnaGJvcikge1xuICAgICAgICAgICAgICAgIHVzZXJSb3cuY2xhc3NMaXN0LmFkZCgneW91Jyk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKG5laWdoYm9yKSB7XG4gICAgICAgICAgICAgICAgdXNlclJvdy5jbGFzc0xpc3QuYWRkKCdfbmVpZ2hib3InKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdXNlclJvdy5pbm5lckhUTUwgPSBgXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGFibGVfX3Jvdy1pdGVtXCI+XG4gICAgICAgICAgICAgICAgJHt1c2VyUGxhY2UgPCAxMCA/ICcwJyArIHVzZXJQbGFjZSA6IHVzZXJQbGFjZX1cbiAgICAgICAgICAgICAgICAke2lzQ3VycmVudFVzZXIgJiYgIW5laWdoYm9yID8gJzxzcGFuIGNsYXNzPVwieW91XCI+JyArIHRyYW5zbGF0ZUtleShcInlvdVwiKSArICc8L3NwYW4+JyA6ICcnfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGFibGVfX3Jvdy1pdGVtXCI+XG4gICAgICAgICAgICAgICAgJHtpc0N1cnJlbnRVc2VyICYmICFuZWlnaGJvciA/IHVzZXJEYXRhLnVzZXJpZCA6IG1hc2tVc2VySWQodXNlckRhdGEudXNlcmlkKX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRhYmxlX19yb3ctaXRlbVwiPlxuICAgICAgICAgICAgICAgICR7dXNlckRhdGEucG9pbnRzfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGFibGVfX3Jvdy1pdGVtXCI+XG4gICAgICAgICAgICAgICAgJHtwcml6ZUtleSA/IHRyYW5zbGF0ZUtleShwcml6ZUtleSkgOiAnIC0gJ31cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICBgO1xuXG4gICAgICAgICAgICB0YWJsZS5hcHBlbmQodXNlclJvdyk7XG4gICAgICAgIH07XG4gICAgICAgIGlmIChpc0N1cnJlbnRVc2VyICYmICFpc1RvcEN1cnJlbnRVc2VyKSB7XG4gICAgICAgICAgICBjb25zdCBpbmRleCA9IHVzZXJzLmluZGV4T2YodXNlcik7XG4gICAgICAgICAgICBpZiAodXNlcnNbaW5kZXggLSAxXSkge1xuICAgICAgICAgICAgICAgIHJlbmRlclJvdyh1c2Vyc1tpbmRleCAtIDFdLCB7IG5laWdoYm9yOiB0cnVlIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmVuZGVyUm93KHVzZXIsIHsgaGlnaGxpZ2h0OiB0cnVlIH0pO1xuICAgICAgICAgICAgaWYgKHVzZXJzW2luZGV4ICsgMV0pIHtcbiAgICAgICAgICAgICAgICByZW5kZXJSb3codXNlcnNbaW5kZXggKyAxXSwgeyBuZWlnaGJvcjogdHJ1ZSB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJlbmRlclJvdyh1c2VyKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG4gICAgZnVuY3Rpb24gdHJhbnNsYXRlS2V5KGtleSwgZGVmYXVsdFZhbHVlKSB7XG4gICAgICAgIGlmICgha2V5KSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgbGV0IG5lZWRLZXkgPSBkZWJ1ZyA/IGtleSA6IGAqLS0tLU5FRUQgVE8gQkUgVFJBTlNMQVRFRC0tLS0qIGtleTogJHtrZXl9YFxuXG4gICAgICAgIGRlZmF1bHRWYWx1ZSA9ICBuZWVkS2V5IHx8IGtleTtcbiAgICAgICAgcmV0dXJuIGkxOG5EYXRhW2tleV0gfHwgZGVmYXVsdFZhbHVlO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIG1hc2tVc2VySWQodXNlcklkKSB7XG4gICAgICAgIHJldHVybiBcIioqXCIgKyB1c2VySWQudG9TdHJpbmcoKS5zbGljZSgyKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXRQcml6ZVRyYW5zbGF0aW9uS2V5KHBsYWNlLCB3ZWVrKSB7XG4gICAgICAgIGlmIChwbGFjZSA8PSAzKSByZXR1cm4gYHByaXplXyR7d2Vla30tJHtwbGFjZX1gO1xuICAgICAgICBpZiAocGxhY2UgPD0gMTApIHJldHVybiBgcHJpemVfJHt3ZWVrfS00LTEwYDtcbiAgICAgICAgaWYgKHBsYWNlIDw9IDI1KSByZXR1cm4gYHByaXplXyR7d2Vla30tMTEtMjVgO1xuICAgICAgICBpZiAocGxhY2UgPD0gNTApIHJldHVybiBgcHJpemVfJHt3ZWVrfS0yNi01MGA7XG4gICAgICAgIGlmIChwbGFjZSA8PSA3NSkgcmV0dXJuIGBwcml6ZV8ke3dlZWt9LTUxLTc1YDtcbiAgICAgICAgaWYgKHBsYWNlIDw9IDEwMCkgcmV0dXJuIGBwcml6ZV8ke3dlZWt9LTc2LTEwMGA7XG4gICAgICAgIGlmIChwbGFjZSA8PSAxMjUpIHJldHVybiBgcHJpemVfJHt3ZWVrfS0xMDEtMTI1YDtcbiAgICAgICAgaWYgKHBsYWNlIDw9IDE1MCkgcmV0dXJuIGBwcml6ZV8ke3dlZWt9LTEyNi0xNTBgO1xuICAgICAgICBpZiAocGxhY2UgPD0gMTc1KSByZXR1cm4gYHByaXplXyR7d2Vla30tMTUxLTE3NWA7XG4gICAgICAgIGlmIChwbGFjZSA8PSAyMDApIHJldHVybiBgcHJpemVfJHt3ZWVrfS0xNzYtMjAwYDtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBwYXJ0aWNpcGF0ZSgpIHtcbiAgICAgICAgaWYgKCF1c2VySWQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBwYXJhbXMgPSB7IHVzZXJpZDogdXNlcklkIH07XG4gICAgICAgIGZldGNoKGFwaVVSTCArICcvdXNlci8nLCB7XG4gICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgJ0FjY2VwdCc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShwYXJhbXMpXG4gICAgICAgIH0pLnRoZW4ocmVzID0+IHJlcy5qc29uKCkpXG4gICAgICAgICAgICAudGhlbihyZXMgPT4ge1xuICAgICAgICAgICAgICAgIGxvYWRlckJ0biA9IHRydWVcbiAgICAgICAgICAgICAgICB0b2dnbGVDbGFzc2VzKHBhcnRpY2lwYXRlQnRucywgXCJsb2FkZXJcIilcbiAgICAgICAgICAgICAgICB0b2dnbGVUcmFuc2xhdGVzKHBhcnRpY2lwYXRlQnRucywgXCJsb2FkZXJcIilcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+e1xuICAgICAgICAgICAgICAgICAgICB0b2dnbGVUcmFuc2xhdGVzKHBhcnRpY2lwYXRlQnRucywgXCJsb2FkZXJfcmVhZHlcIilcbiAgICAgICAgICAgICAgICAgICAgdG9nZ2xlQ2xhc3NlcyhwYXJ0aWNpcGF0ZUJ0bnMsIFwiZG9uZVwiKVxuICAgICAgICAgICAgICAgICAgICB0b2dnbGVDbGFzc2VzKHBhcnRpY2lwYXRlQnRucywgXCJsb2FkZXJcIilcbiAgICAgICAgICAgICAgICB9LCA1MDApXG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKT0+e1xuICAgICAgICAgICAgICAgICAgICBjaGVja1VzZXJBdXRoKClcbiAgICAgICAgICAgICAgICB9LCAxMDAwKVxuXG4gICAgICAgICAgICB9KTtcbiAgICB9XG4gICAgZnVuY3Rpb24gdXBkYXRlU2xpZGVyKCkge1xuICAgICAgICBpdGVtcy5mb3JFYWNoKChpdGVtLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgZGlzdGFuY2UgPSBpbmRleCAtIGN1cnJlbnRJbmRleDtcbiAgICAgICAgICAgIGxldCBuZXdQb3NpdGlvbiA9IGRpc3RhbmNlICogMTA1O1xuXG4gICAgICAgICAgICBpZiAoZGlzdGFuY2UgPiB0b3RhbEl0ZW1zIC8gMikge1xuICAgICAgICAgICAgICAgIG5ld1Bvc2l0aW9uIC09IHRvdGFsSXRlbXMgKiAxMDU7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGRpc3RhbmNlIDwgLXRvdGFsSXRlbXMgLyAyKSB7XG4gICAgICAgICAgICAgICAgbmV3UG9zaXRpb24gKz0gdG90YWxJdGVtcyAqIDEwNTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29uc3Qgc2NhbGUgPSBpbmRleCA9PT0gY3VycmVudEluZGV4ID8gMSA6IDE7XG5cbiAgICAgICAgICAgIGl0ZW0uc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZVgoJHtuZXdQb3NpdGlvbn0lKSBzY2FsZSgke3NjYWxlfSlgO1xuICAgICAgICAgICAgaXRlbS5zdHlsZS56SW5kZXggPSBpbmRleCA9PT0gY3VycmVudEluZGV4ID8gMiA6IDE7XG5cbiAgICAgICAgICAgIGNvbnN0IGlzVmlzaWJsZSA9IE1hdGguYWJzKGRpc3RhbmNlKSA8PSAxIHx8XG4gICAgICAgICAgICAgICAgKGluZGV4ID09PSAwICYmIGN1cnJlbnRJbmRleCA9PT0gdG90YWxJdGVtcyAtIDEpIHx8XG4gICAgICAgICAgICAgICAgKGluZGV4ID09PSB0b3RhbEl0ZW1zIC0gMSAmJiBjdXJyZW50SW5kZXggPT09IDApO1xuXG4gICAgICAgICAgICBpdGVtLmNsYXNzTGlzdC50b2dnbGUoJ2hpZGRlbicsICFpc1Zpc2libGUpO1xuICAgICAgICAgICAgaXRlbS5jbGFzc0xpc3QudG9nZ2xlKCdhY3RpdmUnLCBpbmRleCA9PT0gY3VycmVudEluZGV4KTtcblxuICAgICAgICAgICAgaXRlbS5jbGFzc0xpc3QucmVtb3ZlKCdsZWZ0LXNsaWRlJywgJ3JpZ2h0LXNsaWRlJyk7XG4gICAgICAgICAgICBpZiAoZGlzdGFuY2UgPT09IDEgfHwgKGN1cnJlbnRJbmRleCA9PT0gdG90YWxJdGVtcyAtIDEgJiYgaW5kZXggPT09IDApKSB7XG4gICAgICAgICAgICAgICAgaXRlbS5jbGFzc0xpc3QuYWRkKCdyaWdodC1zbGlkZScpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChkaXN0YW5jZSA9PT0gLTEgfHwgKGN1cnJlbnRJbmRleCA9PT0gMCAmJiBpbmRleCA9PT0gdG90YWxJdGVtcyAtIDEpKSB7XG4gICAgICAgICAgICAgICAgaXRlbS5jbGFzc0xpc3QuYWRkKCdsZWZ0LXNsaWRlJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGRvdHMuZm9yRWFjaChkb3QgPT4gZG90LmNsYXNzTGlzdC5yZW1vdmUoJ19hY3RpdmUnKSk7XG4gICAgICAgIGlmIChkb3RzW2N1cnJlbnRJbmRleF0pIHtcbiAgICAgICAgICAgIGRvdHNbY3VycmVudEluZGV4XS5jbGFzc0xpc3QuYWRkKCdfYWN0aXZlJyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBtb3ZlU2xpZGVyKG9mZnNldCkge1xuICAgICAgICBjdXJyZW50SW5kZXggPSAoY3VycmVudEluZGV4ICsgb2Zmc2V0ICsgdG90YWxJdGVtcykgJSB0b3RhbEl0ZW1zO1xuICAgICAgICB1cGRhdGVTbGlkZXIoKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnb1RvU2xpZGUoaW5kZXgpIHtcbiAgICAgICAgY3VycmVudEluZGV4ID0gaW5kZXg7XG4gICAgICAgIHVwZGF0ZVNsaWRlcigpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGhhbmRsZVN0YXJ0KGV2ZW50KSB7XG4gICAgICAgIGlzRHJhZ2dpbmcgPSB0cnVlO1xuICAgICAgICBzdGFydFggPSBldmVudC5jbGllbnRYIHx8IGV2ZW50LnRvdWNoZXNbMF0uY2xpZW50WDtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBoYW5kbGVNb3ZlKGV2ZW50KSB7XG4gICAgICAgIGlmICghaXNEcmFnZ2luZykgcmV0dXJuO1xuICAgICAgICBjb25zdCBjdXJyZW50WCA9IGV2ZW50LmNsaWVudFggfHwgZXZlbnQudG91Y2hlc1swXS5jbGllbnRYO1xuICAgICAgICBjb25zdCBkaWZmWCA9IGN1cnJlbnRYIC0gc3RhcnRYO1xuXG4gICAgICAgIGlmIChNYXRoLmFicyhkaWZmWCkgPiA1MCkge1xuICAgICAgICAgICAgbW92ZVNsaWRlcihkaWZmWCA+IDAgPyAtMSA6IDEpO1xuICAgICAgICAgICAgaXNEcmFnZ2luZyA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaGFuZGxlRW5kKCkge1xuICAgICAgICBpc0RyYWdnaW5nID0gZmFsc2U7XG4gICAgfVxuXG4gICAgLy8gZnVuY3Rpb24gb3BlblBvcHVwQnlBdHRyKHBvcHVwQXR0ciwgaXNTaG93UHJvZ3Jlc3MgPSBmYWxzZSkge1xuICAgIC8vICAgICBjb25zdCBhbGxQb3B1cHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucG9wdXAnKTtcbiAgICAvLyAgICAgYWxsUG9wdXBzLmZvckVhY2gocCA9PiBwLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKSk7XG4gICAgLy9cbiAgICAvLyAgICAgY29uc3QgdGFyZ2V0UG9wdXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAucG9wdXBbZGF0YS1wb3B1cD1cIiR7cG9wdXBBdHRyfVwiXWApO1xuICAgIC8vICAgICBpZiAodGFyZ2V0UG9wdXApIHtcbiAgICAvLyAgICAgICAgIHRhcmdldFBvcHVwLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKTtcbiAgICAvLyAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wb3B1cHMnKS5jbGFzc0xpc3QucmVtb3ZlKCdvcGFjaXR5LW92ZXJsYXknKTtcbiAgICAvLyAgICAgfVxuICAgIC8vXG4gICAgLy8gICAgIGNvbnN0IHByb2dyZXNzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBvcHVwcyAucHJvZ3Jlc3MnKTtcbiAgICAvLyAgICAgaWYgKHByb2dyZXNzKSB7XG4gICAgLy8gICAgICAgICBwcm9ncmVzcy5jbGFzc0xpc3QudG9nZ2xlKCdoaWRlJywgIWlzU2hvd1Byb2dyZXNzKTtcbiAgICAvLyAgICAgfVxuICAgIC8vIH1cblxuXG4gICAgZnVuY3Rpb24gY2xvc2VBbGxQb3B1cHMoKSB7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wb3B1cCcpLmZvckVhY2gocCA9PiBwLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKSk7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wb3B1cHMgLnByb2dyZXNzJykuZm9yRWFjaChwID0+IHAuY2xhc3NMaXN0LmFkZCgnaGlkZScpKTtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBvcHVwcycpLmNsYXNzTGlzdC5hZGQoJ29wYWNpdHktb3ZlcmxheScpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHRyaWdnZXJTaGFrZSgpIHtcbiAgICAgICAgYm94LmNsYXNzTGlzdC5hZGQoJ3NoYWtlJyk7XG5cbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICBib3guY2xhc3NMaXN0LnJlbW92ZSgnc2hha2UnKTtcbiAgICAgICAgICAgIGNvbnN0IG5leHRTaGFrZSA9IE1hdGgucmFuZG9tKCkgKiA2MDAwICsgNDAwMDtcbiAgICAgICAgICAgIHNldFRpbWVvdXQodHJpZ2dlclNoYWtlLCBuZXh0U2hha2UpO1xuICAgICAgICB9LCAxMjAwKTtcbiAgICB9XG5cblxuXG4gICAgbG9hZFRyYW5zbGF0aW9ucygpLnRoZW4oaW5pdClcblxuICAgIC8vIGluaXQoKVxuXG5cbiAgICAvLy8gVEVTVFxuXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm1lbnUtdGVzdF9fYnRuJykuZm9yRWFjaChidG4gPT4ge1xuICAgICAgICBidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICBidG4ucGFyZW50RWxlbWVudC5jbGFzc0xpc3QudG9nZ2xlKCdvcGVuJyk7XG4gICAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgKCkgPT4ge1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1lbnUtYnRuXCIpPy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tZW51LXRlc3RcIik/LmNsYXNzTGlzdC50b2dnbGUoXCJoaWRlXCIpO1xuICAgICAgICB9KTtcbiAgICB9KTtcblxuICAgIGNvbnN0IGxuZ0J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubG5nLWJ0blwiKVxuXG4gICAgbG5nQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIGlmIChzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKFwibG9jYWxlXCIpKSB7XG4gICAgICAgICAgICBzZXNzaW9uU3RvcmFnZS5yZW1vdmVJdGVtKFwibG9jYWxlXCIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbShcImxvY2FsZVwiLCBcInVrXCIpO1xuICAgICAgICB9XG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcbiAgICB9KTtcblxuICAgIGNvbnN0IGF1dGhCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmF1dGgtYnRuXCIpXG4gICAgY29uc3QgYmV0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5idG4tYmV0LW9ubGluZVwiKVxuXG4gICAgYXV0aEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT57XG4gICAgICAgIGlmKHVzZXJJZCl7XG4gICAgICAgICAgICBzZXNzaW9uU3RvcmFnZS5yZW1vdmVJdGVtKFwidXNlcklkXCIpXG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbShcInVzZXJJZFwiLCBcIjc3Nzc3N1wiKVxuICAgICAgICB9XG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKVxuICAgIH0pO1xuXG5cbn0pKCk7XG5cbi8vINGG0Y4g0YTRg9C90LrRhtGW0Y4g0LLQuNC00LDQu9C4LCDQsCDQvtGB0L3QvtCy0L3RgyDRgNC+0LfQutC+0LzQtdC90YLQuFxuZnVuY3Rpb24gb3BlblBvcHVwQnlBdHRyKHBvcHVwQXR0ciwgaXNTaG93UHJvZ3Jlc3MgPSBmYWxzZSkge1xuICAgIGNvbnN0IGFsbFBvcHVwcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wb3B1cCcpO1xuICAgIGFsbFBvcHVwcy5mb3JFYWNoKHAgPT4gcC5jbGFzc0xpc3QuYWRkKCdoaWRlJykpO1xuXG4gICAgY29uc3QgdGFyZ2V0UG9wdXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAucG9wdXBbZGF0YS1wb3B1cD1cIiR7cG9wdXBBdHRyfVwiXWApO1xuICAgIGlmICh0YXJnZXRQb3B1cCkge1xuICAgICAgICB0YXJnZXRQb3B1cC5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJyk7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wb3B1cHMnKS5jbGFzc0xpc3QucmVtb3ZlKCdvcGFjaXR5LW92ZXJsYXknKTtcbiAgICB9XG5cbiAgICBjb25zdCBwcm9ncmVzcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wb3B1cHMgLnByb2dyZXNzJyk7XG4gICAgaWYgKHByb2dyZXNzKSB7XG4gICAgICAgIHByb2dyZXNzLmNsYXNzTGlzdC50b2dnbGUoJ2hpZGUnLCAhaXNTaG93UHJvZ3Jlc3MpO1xuICAgIH1cbn1cbi8vINGG0Y4g0YTRg9C90LrRhtGW0Y4g0LLQuNC00LDQu9C4LCDQsCDQvtGB0L3QvtCy0L3RgyDRgNC+0LfQutC+0LzQtdC90YLQuFxuXG4iXX0=
