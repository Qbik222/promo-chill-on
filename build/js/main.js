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
  var currentDate = new Date("2025-07-15T00:00:01");
  var getActiveWeek = function getActiveWeek(promoStartDate, weekDuration) {
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
  var getCurrentDayNumber = function getCurrentDayNumber(promoStartDate) {
    var diffInMs = currentDate - promoStartDate;
    var dayNumber = Math.floor(diffInMs / (24 * 60 * 60 * 1000)) + 1;
    if (activeWeek > 1) {
      dayNumber = dayNumber - (activeWeek - 1) * 7;
    }
    return dayNumber;
  };
  var dayNumber = getCurrentDayNumber(promoStartDate);
  var currentDayNumber = dayNumber > 0 ? dayNumber : 1;
  var activeDayInWeekNumber = getDayNumberInRange(currentDate);
  var sliderDayInWeekNumber = activeDayInWeekNumber;
  console.log(activeDayInWeekNumber);
  console.log(currentDayNumber);
  var mainPage = document.querySelector(".fav-page"),
    challange = document.querySelector(".challange"),
    challangeBtns = challange.querySelectorAll(".btn"),
    challangeBlock = document.querySelector('.challange'),
    challangeDepositBtn = challangeBlock.querySelector('.btn-join'),
    unauthMsgs = document.querySelectorAll('.unauth-msg'),
    participateBtns = document.querySelectorAll('.part-btn'),
    redirectBtns = document.querySelectorAll('.btn-join'),
    loader = document.querySelector(".spinner-overlay"),
    currentCardsWrap = document.querySelector('.challange__current'),
    progressBar = document.querySelector('.challange__progress-bar'),
    challangeBlur = document.querySelector('.challange__blur'),
    challangeBlurStatus = document.querySelector('.challange__blur-status'),
    progressBox = document.querySelector('.challange__progress-box'),
    challangeBtnPointer = document.querySelector('.challange__btn-pointer'),
    btnOpen = document.querySelector('.btn-open'),
    counterPoints = document.querySelector('.counter-points'),
    popups = document.querySelector('.popups'),
    streakDays = document.querySelectorAll(".progress__days-item"),
    streakDaysPopup = popups.querySelectorAll(".progress__days-item"),
    resultsTable = document.querySelector('#table'),
    resultsTableOther = document.querySelector('#tableOther'),
    tableTabs = document.querySelectorAll('.table__tabs-item'),
    dropSpins = document.querySelector('.drop--spins'),
    lastUpdBlock = document.querySelector('.last-upd');
  console.log(btnOpen);
  var sliderDayIndex = currentDayNumber;
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
  var locale = sessionStorage.getItem("locale") || "uk";
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

  function formatDateTimeCustom(isoString) {
    var date = new Date(isoString);
    var kyivDate = new Date(date.toLocaleString('en-US', {
      timeZone: 'Europe/Kyiv'
    }));
    var day = String(kyivDate.getDate()).padStart(2, '0');
    var month = String(kyivDate.getMonth() + 1).padStart(2, '0');
    var year = kyivDate.getFullYear();
    var hours = String(kyivDate.getHours()).padStart(2, '0');
    var minutes = String(kyivDate.getMinutes()).padStart(2, '0');
    return "".concat(day, ".").concat(month, ".").concat(year, ". ").concat(hours, ":").concat(minutes);
  }
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

      // reportError(err);
      //
      // document.querySelector('.fav-page').style.display = 'none';
      // if (window.location.href.startsWith("https://www.favbet.hr/")) {
      //     window.location.href = '/promocije/promocija/stub/';
      // } else {
      //     window.location.href = '/promos/promo/stub/';
      // }

      return Promise.reject(err);
    });
  };
  function hideLoader() {
    loader.classList.add("hide");
    document.body.style.overflow = "auto";
    mainPage.classList.remove("loading");
  }
  function initSpin() {
    btnOpen.textContent = translateKey("loader");
    challangeBtnPointer.classList.add("hide");
    sendSpinRequest().then(function (res) {
      console.log(res);
      var prize = res.number;
      var streakBonus = res.streakBonus || debug;
      console.log(streakBonus);
      btnOpen.textContent = translateKey("openBtn");
      btnOpen.classList.add("hide");
      challangeDepositBtn.classList.remove("hide");
      setStreakDays(streakBonus);
      if (prize === 'respin') openPopupByAttr('unluckyPopup', true);
      if (prize === 'nothing') openPopupByAttr('unluckyPopup', true);
      if (prize === 'wheelBubbleSpans') openPopupByAttr('prize50Points', true);
      if (prize === 'iphone') openPopupByAttr('prizeIphone', true);
      if (prize === 'macBook') openPopupByAttr('prizeLaptop', true);
      if (prize === 'airPods') openPopupByAttr('prizeAirpods', true);
      if (prize === 'appleWatch') openPopupByAttr('prizeWatch', true);
      if (prize === 'rozetkaGiftCard') openPopupByAttr('prizeGift', true);
      if (prize === 'fs50') openPopupByAttr('prize50FsGateOlymp', true);
      if (prize === 'points50') openPopupByAttr('50PointsInfo', true);
      if (prize === 'fs25_3oaks') openPopupByAttr('prize25FsLuckyPenny', true);
      if (prize === 'fs25_playson') openPopupByAttr('prize25FsCoinStrike', true);
      if (prize === 'fs40') openPopupByAttr('prize40FsPirots3', true);
      if (prize === 'fs25_bgaming') openPopupByAttr('prize25FsSnoopDogg', true);
      if (prize === 'fs25_pushGaming') openPopupByAttr('prize25FsBigBamboo', true);
      if (prize === 'fs10') openPopupByAttr('prize10FsHitSlot', true);
      if (prize === 'fs30') openPopupByAttr('prize30FsShinigCrown', true);
      if (prize === 'fs25_hacksaw') openPopupByAttr('prize25FsLeBandit', true);
      if (prize === 'fs20') openPopupByAttr('prize20FsLuckOfPanda', true);
      request("/favuser/".concat(userId)).then(function (user) {
        setUserProgress(user, activeDayInWeekNumber);
        displayBetsHistory(user.spins);
      });
    });
  }
  function setDayNumbersForWeek(tableTabs, promoStartDateStr, currentDateStr) {
    var promoStartDate = new Date(promoStartDateStr);
    var currentDate = new Date(currentDateStr);
    var msPerDay = 1000 * 60 * 60 * 24;
    promoStartDate.setHours(0, 0, 0, 0);
    currentDate.setHours(0, 0, 0, 0);
    var currentWeekday = currentDate.getDay(); // 0 - неділя, 1 - понеділок ...
    var offsetToMonday = (currentWeekday + 6) % 7; // скільки днів назад до понеділка
    var mondayOfCurrentWeek = new Date(currentDate);
    mondayOfCurrentWeek.setDate(currentDate.getDate() - offsetToMonday);
    for (var i = 0; i < tableTabs.length; i++) {
      var tabDate = new Date(mondayOfCurrentWeek);
      tabDate.setDate(mondayOfCurrentWeek.getDate() + i);
      var dayDiff = Math.floor((tabDate - promoStartDate) / msPerDay) + 1;
      var isInRange = dayDiff >= 1 && dayDiff <= 28;
      var challengeTabs = document.querySelectorAll(".challange__tabs-item");
      console.log(isInRange);
      console.log(challengeTabs[i]);
      challengeTabs[i].dataset.dayNum = isInRange ? dayDiff : null;
    }
  }
  function sendSpinRequest() {
    if (!userId) {
      return;
    }
    if (debug) {
      return Promise.resolve({
        number: 'respin',
        type: 'test'
      });
    }
    var params = {
      userid: userId
    };
    return request('/spin', {
      method: 'POST',
      body: JSON.stringify(params)
    });
  }
  function setStreakDays(streak) {
    streakDays.forEach(function (day, i) {
      day.classList.remove("_active");
      if (i + 1 <= streak) {
        day.classList.add('_active');
      }
    });
    streakDaysPopup.forEach(function (day, i) {
      day.classList.remove("_active");
      if (i + 1 <= streak) {
        day.classList.add('_active');
      }
    });
  }
  function getSlideNumForDays(currentIndex) {
    var newTabs = document.querySelectorAll('.challange__tabs-item');
    setDayNumbersForWeek(newTabs, promoStartDate, currentDate);
    console.log(newTabs);
    var currentSlideDayNum = null;
    newTabs.forEach(function (tab) {
      var tabDayNum = Number(tab.getAttribute('data-day-num'));
      console.log(tabDayNum, currentIndex);
      if (tabDayNum === currentIndex) {
        currentSlideDayNum = tabDayNum;
      }
    });
    console.log(currentSlideDayNum);
    return currentSlideDayNum;
  }
  function setUserProgress(userData, dayNum) {
    var _hasPointsForDayNumbe, _hasPointsForDayNumbe2;
    console.log(userData);
    var spinAllowed = userData.spinAllowed,
      pastPoits = userData.dayStartPoints,
      chosedDayPoints = (_hasPointsForDayNumbe = (_hasPointsForDayNumbe2 = hasPointsForDayNumber(dayNum, pastPoits)) === null || _hasPointsForDayNumbe2 === void 0 ? void 0 : _hasPointsForDayNumbe2.points) !== null && _hasPointsForDayNumbe !== void 0 ? _hasPointsForDayNumbe : 0,
      isCurrentDay = dayNum === activeDayInWeekNumber,
      pointsPerDay = isCurrentDay ? userData.pointsPerDay : chosedDayPoints,
      streak = userData.spinsStreak,
      lastUpdate = userData.lastUpdate;
    if (!isCurrentDay) {
      console.log(challangeBtns);
      challangeBtns.forEach(function (btn) {
        return btn.classList.add("_lock");
      });
      challangeBtnPointer.classList.add("hide");
    }
    if (isCurrentDay) {
      challangeBtns.forEach(function (btn) {
        return btn.classList.remove("_lock");
      });
      challangeBtnPointer.classList.remove("hide");
    }
    setStreakDays(streak);
    var thresholdPoints = 1000;
    pointsPerDay = pointsPerDay > thresholdPoints ? thresholdPoints : pointsPerDay;
    if (!pointsPerDay) pointsPerDay = 0;
    console.log(pointsPerDay);
    counterPoints.textContent = "".concat(pointsPerDay);
    var progress = Math.min(pointsPerDay / thresholdPoints * 100, 100);
    console.log(progress);
    if (progress >= 100) {
      challangeBlur.classList.add('hide');
      progressBox.classList.remove('_lock');
      progressBox.classList.add('_open');
      challangeBtnPointer.classList.remove("hide");
      btnOpen.classList.remove('hide');
      challangeDepositBtn.classList.add('hide');
    } else {
      challangeBlur.classList.remove('hide');
      progressBox.classList.add('_lock');
      progressBox.classList.remove('_open');
      challangeBtnPointer.classList.add("hide");
      btnOpen.classList.add('hide');
      challangeDepositBtn.classList.remove('hide');
    }
    console.log("\u041F\u0440\u043E\u0433\u0440\u0435\u0441 \u043A\u043E\u0440\u0438\u0441\u0442\u0443\u0432\u0430\u0447\u0430: ".concat(progress.toFixed(0), "%"));
    if (userId) {
      setProgressWidth(progress);
    }
    console.log(userData);
  }
  function setProgressWidth(progressPercent) {
    progressBar.style.width = "".concat(progressPercent, "%");
    var barRect = progressBar.getBoundingClientRect();
    var parentRect = currentCardsWrap.getBoundingClientRect();
    var rightEdge = barRect.right - parentRect.left - 5;
    challangeBlur.style.left = "".concat(rightEdge, "px");
    challangeBlurStatus.textContent = "".concat(progressPercent.toFixed(0), "%");
  }
  //
  // function hasPointsForDayNumber(dayNumber, dayPointsArray) {
  //     const startDate = new Date('2025-07-14');
  //     const targetDate = new Date(startDate);
  //     targetDate.setDate(startDate.getDate() + dayNumber - 1);
  //     targetDate.setHours(0, 0, 0, 0);
  //
  //     return dayPointsArray.some(entry => {
  //         const entryDate = new Date(entry.date);
  //         entryDate.setHours(0, 0, 0, 0);
  //         return entryDate.getTime() === targetDate.getTime();
  //     });
  // }

  function hasPointsForDayNumber(dayNumber, dayPointsArray) {
    var startDate = new Date('2025-07-14');
    var targetDate = new Date(startDate);
    targetDate.setDate(startDate.getDate() + dayNumber - 1);
    targetDate.setHours(0, 0, 0, 0);
    var match = dayPointsArray.find(function (entry) {
      var entryDate = new Date(entry.date);
      entryDate.setHours(0, 0, 0, 0);
      return entryDate.getTime() === targetDate.getTime();
    });
    return match || null;
  }
  function getDayNumberInRange(dateStr) {
    var inputDate = new Date(dateStr);
    var startDate = new Date('2025-07-14');
    var endDate = new Date('2025-08-10');

    // Очищаємо час, щоб порівняння було лише по даті
    inputDate.setHours(0, 0, 0, 0);
    startDate.setHours(0, 0, 0, 0);
    endDate.setHours(0, 0, 0, 0);
    if (inputDate < startDate || inputDate > endDate) {
      return null;
    }
    var msPerDay = 1000 * 60 * 60 * 24;
    var dayNumber = Math.floor((inputDate - startDate) / msPerDay) + 1;
    return dayNumber;
  }
  function resolveStatusTranslation(status) {
    if (!status || status === 'undefined') {
      return translateKey('betUndefined');
    }
    if (status === 'win') {
      return translateKey('winBet');
    }
    if (status === 'lose') {
      return translateKey('loseBet');
    }
  }
  function displayBetsHistory(bets) {
    console.log(bets);
    var spinItem = document.querySelector('.spins-row');
    var noSpinItem = document.querySelector('.no-spins');
    var noBets = !bets || bets.length === 0;
    if (noBets && !debug) {
      spinItem.classList.add('hide');
      noSpinItem.classList.remove('hide');
      return;
    }
    if (debug) {
      console.warn("debug bet history");
      return;
    }
    spinItem.innerHTML = "\n       <div class=\"spins-row-head\">\n            <div class=\"content-date\" data-translate=\"myBetDate\"></div>\n            <div class=\"content-prize\" data-translate=\"myBetId\"></div>\n<!--            <div class=\"content-status\" data-translate=\"myBetStatus\"></div>-->\n        </div>\n        ";
    spinItem.classList.remove('hide');
    noSpinItem.classList.add('hide');
    var upd = 0;
    bets.forEach(function (spin) {
      var spinDate = new Date(spin.date);
      var formattedDate = spinDate.toLocaleDateString('uk-UA').slice(0, 5);
      var status = resolveStatusTranslation(spin.status);
      if (status) {
        var spinElement = document.createElement('div');
        spinElement.classList.add('spins-row-item');
        var isWin = spin.status === "win";
        var statusClass = isWin ? '_done' : '';
        spinElement.innerHTML = "\n                    <span class=\"content-date\">".concat(formattedDate, "</span>\n                    <span class=\"content-prize\">").concat(spin.name, "</span>\n<!--                    <span class=\"content-status ").concat(statusClass, "\"></span>-->\n                ");
        spinItem.appendChild(spinElement);
        upd++;
      }
    });
    if (upd === 0) {
      spinItem.classList.add('hide');
      noSpinItem.classList.remove('hide');
    }
  }
  function setBetHistory(stageNum) {
    // request("/betsHistory").then((res) => {
    //     const user = res.find(user => user.userid === userId);
    //     const bets = user?.bets
    //     displayBetsHistory(bets)
    // })
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

              btnOpen.addEventListener('click', initSpin);

              // setBetHistory()

              renderUsers(activeWeek);
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
              updateSlider(null, sliderDayIndex);
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
              tableTabs.forEach(function (tab) {
                tab.addEventListener('click', function (e) {
                  var weekNum = Number(tab.getAttribute('data-week'));
                  tableTabs.forEach(function (t) {
                    return t.classList.remove('active');
                  });
                  tab.classList.add('active');
                  renderUsers(weekNum);
                });
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
    var currentIndex = currentDayNumber - 1;
    console.log(currentDayNumber);
    function updateSlider(index, dayIndex) {
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
      console.log(sliderDayIndex);
    }
    updateSlider(currentDayNumber - 1, sliderDayIndex);
    tabs.forEach(function (tab, i) {
      if (i + 1 <= currentDayNumber) {
        tab.classList.add('_open');
        tab.classList.remove('_lock');
      } else {
        tab.classList.remove('_active');
        tab.classList.add('_lock');
        tab.classList.remove('_open');
      }
      if (i + 1 === currentDayNumber) {
        tab.classList.add('_active');
      }
    });
    function moveLeft() {
      currentIndex = (currentIndex - 1 + slides.length) % slides.length;
      sliderDayIndex = currentIndex;
      updateSlider(currentIndex, sliderDayIndex);
      request("/favuser/".concat(userId)).then(function (user) {
        setUserProgress(user, getSlideNumForDays(currentIndex + 1));
        displayBetsHistory(user.spins);
      });
    }
    function moveRight() {
      currentIndex = (currentIndex + 1) % slides.length;
      sliderDayIndex = currentIndex;
      updateSlider(currentIndex, sliderDayIndex);
      request("/favuser/".concat(userId)).then(function (user) {
        setUserProgress(user, getSlideNumForDays(currentIndex + 1));
        displayBetsHistory(user.spins);
      });
    }
    btnLeft.addEventListener('click', moveLeft);
    btnRight.addEventListener('click', moveRight);
    tabs.forEach(function (tab, index) {
      tab.addEventListener('click', function () {
        currentIndex = index;
        sliderDayIndex = index;
        updateSlider(currentIndex, sliderDayIndex);
        request("/favuser/".concat(userId)).then(function (user) {
          setUserProgress(user, getSlideNumForDays(currentIndex + 1));
          displayBetsHistory(user.spins);
        });
      });
    });
    dots.forEach(function (dot, index) {
      dot.addEventListener('click', function () {
        currentIndex = index;
        updateSlider(currentIndex, sliderDayIndex);
      });
    });
  }
  function checkUserAuth() {
    var loadTime = 200;
    request("/favuser/".concat(userId)).then(function (user) {
      displayBetsHistory(user.spins);
      lastUpdBlock.textContent = user.lastUpdate ? formatDateTimeCustom(user.lastUpdate) : "--:--";
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
        dropSpins.classList.add('hide');
        challangeBtnPointer.classList.add('hide');
        if (!userId) {
          hideElements(participateBtns);
          hideElements(redirectBtns);
          showElements(unauthMsgs);
          hideLoader();
          currentCardsWrap.classList.add('_unauth');
          return Promise.resolve(false);
        } else {
          currentCardsWrap.classList.remove('_unauth');
        }
        hideElements(unauthMsgs);
        if (user.userid) {
          hideElements(participateBtns);
          showElements(redirectBtns);
          displayBetsHistory(user.spins);
          setUserProgress(user, activeDayInWeekNumber);
          // challangeBtnPointer.classList.remove('hide');
          dropSpins.classList.remove('hide');
        } else {
          showElements(participateBtns);
          hideElements(redirectBtns);
        }
        hideLoader();
      }, loadTime);
    });
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
    console.log(users);
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
      resultsTableOther.classList.add('hide');
      displayUser(user, user.userid === currentUserId, resultsTable, topUsers, isTopCurrentUser, week);
    });
    if (!isTopCurrentUser && currentUser) {
      resultsTableOther.classList.remove('hide');
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
      // const userPlace = 35
      var prizeKey = debug ? null : getPrizeTranslationKey(userPlace, week);
      if (userPlace <= 3) {
        userRow.classList.add("place".concat(userPlace));
      }
      if (highlight || isCurrentUser && !neighbor) {
        userRow.classList.add('you');
      } else if (neighbor) {
        userRow.classList.add('_neighbor');
      }
      userRow.innerHTML = "\n            <div class=\"table__row-item\">\n                ".concat(userPlace < 10 ? '0' + userPlace : userPlace, "\n                ").concat(isCurrentUser && !neighbor ? '<span class="you">' + translateKey("you") + '</span>' : '', "\n            </div>\n            <div class=\"table__row-item\">\n                ").concat(isCurrentUser && !neighbor ? userData.userid : maskUserId(userData.userid), "\n            </div>\n            <div class=\"table__row-item\">\n                ").concat(userData.pointsWeek, "\n            </div>\n            <div class=\"table__row-item\">\n                ").concat(prizeKey ? translateKey(prizeKey) : ' - ', "\n            </div>\n            <div class=\"table__row-item\">\n                ").concat(prizeKey ? getWagerByPlace(userPlace) : ' - ', "\n            </div>\n        ");
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
  function getPrizeTranslationKey(place) {
    if (place >= 1 && place <= 10) return "prize_".concat(place);
    if (place >= 11 && place <= 20) return 'prize_11-20';
    if (place >= 21 && place <= 30) return 'prize_21-30';
    if (place >= 31 && place <= 40) return 'prize_31-40';
    if (place >= 41 && place <= 50) return 'prize_41-50';
    if (place >= 51 && place <= 70) return 'prize_51-70';
    if (place >= 71 && place <= 100) return 'prize_71-100';
    if (place >= 101 && place <= 150) return 'prize_101-150';
    if (place >= 151 && place <= 200) return 'prize_151-200';
    if (place >= 201 && place <= 250) return 'prize_201-250';
    if (place >= 251 && place <= 300) return 'prize_251-300';
    if (place >= 301 && place <= 350) return 'prize_301-350';
    if (place >= 351 && place <= 400) return 'prize_351-400';
    if (place >= 401 && place <= 450) return 'prize_401-450';
    if (place >= 451 && place <= 500) return 'prize_451-500';
    if (place >= 501 && place <= 550) return 'prize_501-550';
    if (place >= 551 && place <= 650) return 'prize_551-650';
    if (place >= 651 && place <= 750) return 'prize_651-750';
    if (place >= 751 && place <= 850) return 'prize_751-850';
    if (place >= 851 && place <= 950) return 'prize_851-950';
    if (place >= 951 && place <= 1000) return 'prize_951-1000';
    return null;
  }
  function getWagerByPlace(place) {
    if (place >= 1 && place <= 10) return '-';
    if (place >= 11 && place <= 20) return 'х1';
    if (place >= 21 && place <= 30) return 'х1';
    if (place >= 31 && place <= 40) return 'х2';
    if (place >= 41 && place <= 50) return 'х2';
    if (place >= 51 && place <= 70) return 'х3';
    if (place >= 71 && place <= 100) return 'х3';
    if (place >= 101 && place <= 150) return 'х4';
    if (place >= 151 && place <= 200) return 'х4';
    if (place >= 201 && place <= 250) return 'х5';
    if (place >= 251 && place <= 300) return 'х5';
    if (place >= 301 && place <= 350) return 'х6';
    if (place >= 351 && place <= 400) return 'х7';
    if (place >= 401 && place <= 450) return 'х8';
    if (place >= 451 && place <= 500) return 'х9';
    if (place >= 501 && place <= 550) return 'х10';
    if (place >= 551 && place <= 1000) return '-';
    return "-";
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
        renderUsers(activeWeek);
        tableTabs.forEach(function (tab, index) {
          if (index + 1 === activeWeek) {
            tab.classList.add('active');
          } else {
            tab.classList.remove('active');
          }
        });
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
  //     document.body.style.overflow = 'hidden';
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
    document.body.style.overflow = 'auto';
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
      sessionStorage.setItem("locale", "en");
    }
    window.location.reload();
  });
  var authBtn = document.querySelector(".auth-btn");
  var betBtn = document.querySelector(".btn-bet-online");
  authBtn.addEventListener("click", function () {
    if (userId) {
      sessionStorage.removeItem("userId");
    } else {
      sessionStorage.setItem("userId", "7777778");
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
  document.body.style.overflow = 'hidden';
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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOlsiYXBpVVJMIiwiY3VycmVudERhdGUiLCJEYXRlIiwiZ2V0QWN0aXZlV2VlayIsInByb21vU3RhcnREYXRlIiwid2Vla0R1cmF0aW9uIiwid2Vla0RhdGVzIiwiRGF5IiwiV2VlayIsImZvcm1hdERhdGUiLCJkYXRlIiwiZ2V0RGF0ZSIsInRvU3RyaW5nIiwicGFkU3RhcnQiLCJnZXRNb250aCIsImNhbGN1bGF0ZVdlZWtQZXJpb2QiLCJ3ZWVrSW5kZXgiLCJiYXNlU3RhcnQiLCJnZXRUaW1lIiwic3RhcnQiLCJlbmQiLCJhY3RpdmVXZWVrSW5kZXgiLCJpIiwiYWN0aXZlV2VlayIsImNvbnNvbGUiLCJsb2ciLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJmb3JFYWNoIiwibGlzdCIsImNsYXNzTGlzdCIsImFkZCIsImN1cnJlbnRMaXN0IiwicXVlcnlTZWxlY3RvciIsInJlbW92ZSIsImdldEN1cnJlbnREYXlOdW1iZXIiLCJkaWZmSW5NcyIsImRheU51bWJlciIsIk1hdGgiLCJmbG9vciIsImN1cnJlbnREYXlOdW1iZXIiLCJhY3RpdmVEYXlJbldlZWtOdW1iZXIiLCJnZXREYXlOdW1iZXJJblJhbmdlIiwic2xpZGVyRGF5SW5XZWVrTnVtYmVyIiwibWFpblBhZ2UiLCJjaGFsbGFuZ2UiLCJjaGFsbGFuZ2VCdG5zIiwiY2hhbGxhbmdlQmxvY2siLCJjaGFsbGFuZ2VEZXBvc2l0QnRuIiwidW5hdXRoTXNncyIsInBhcnRpY2lwYXRlQnRucyIsInJlZGlyZWN0QnRucyIsImxvYWRlciIsImN1cnJlbnRDYXJkc1dyYXAiLCJwcm9ncmVzc0JhciIsImNoYWxsYW5nZUJsdXIiLCJjaGFsbGFuZ2VCbHVyU3RhdHVzIiwicHJvZ3Jlc3NCb3giLCJjaGFsbGFuZ2VCdG5Qb2ludGVyIiwiYnRuT3BlbiIsImNvdW50ZXJQb2ludHMiLCJwb3B1cHMiLCJzdHJlYWtEYXlzIiwic3RyZWFrRGF5c1BvcHVwIiwicmVzdWx0c1RhYmxlIiwicmVzdWx0c1RhYmxlT3RoZXIiLCJ0YWJsZVRhYnMiLCJkcm9wU3BpbnMiLCJsYXN0VXBkQmxvY2siLCJzbGlkZXJEYXlJbmRleCIsInVrTGVuZyIsImVuTGVuZyIsInRvZ2dsZUNsYXNzZXMiLCJlbGVtZW50cyIsImNsYXNzTmFtZSIsImVsIiwidG9nZ2xlIiwidG9nZ2xlVHJhbnNsYXRlcyIsImRhdGFBdHRyIiwic2V0QXR0cmlidXRlIiwiaW5uZXJIVE1MIiwiaTE4bkRhdGEiLCJyZW1vdmVBdHRyaWJ1dGUiLCJsb2FkZXJCdG4iLCJsb2NhbGUiLCJzZXNzaW9uU3RvcmFnZSIsImdldEl0ZW0iLCJkZWJ1ZyIsImhpZGVMb2FkZXIiLCJ0cmFuc2xhdGVTdGF0ZSIsInVzZXJJZCIsIk51bWJlciIsImJveCIsImluaXRpYWxEZWxheSIsInJhbmRvbSIsInNsaWRlciIsIml0ZW1zIiwiZG90cyIsImJ0bkxlZnQiLCJidG5SaWdodCIsImN1cnJlbnRJbmRleCIsInRvdGFsSXRlbXMiLCJsZW5ndGgiLCJpc0RyYWdnaW5nIiwic3RhcnRYIiwiZm9ybWF0RGF0ZVRpbWVDdXN0b20iLCJpc29TdHJpbmciLCJreWl2RGF0ZSIsInRvTG9jYWxlU3RyaW5nIiwidGltZVpvbmUiLCJkYXkiLCJTdHJpbmciLCJtb250aCIsInllYXIiLCJnZXRGdWxsWWVhciIsImhvdXJzIiwiZ2V0SG91cnMiLCJtaW51dGVzIiwiZ2V0TWludXRlcyIsInJlcXVlc3QiLCJsaW5rIiwiZXh0cmFPcHRpb25zIiwiZmV0Y2giLCJoZWFkZXJzIiwidGhlbiIsInJlcyIsIm9rIiwiRXJyb3IiLCJqc29uIiwiZXJyIiwiZXJyb3IiLCJQcm9taXNlIiwicmVqZWN0IiwiYm9keSIsInN0eWxlIiwib3ZlcmZsb3ciLCJpbml0U3BpbiIsInRleHRDb250ZW50IiwidHJhbnNsYXRlS2V5Iiwic2VuZFNwaW5SZXF1ZXN0IiwicHJpemUiLCJudW1iZXIiLCJzdHJlYWtCb251cyIsInNldFN0cmVha0RheXMiLCJvcGVuUG9wdXBCeUF0dHIiLCJ1c2VyIiwic2V0VXNlclByb2dyZXNzIiwiZGlzcGxheUJldHNIaXN0b3J5Iiwic3BpbnMiLCJzZXREYXlOdW1iZXJzRm9yV2VlayIsInByb21vU3RhcnREYXRlU3RyIiwiY3VycmVudERhdGVTdHIiLCJtc1BlckRheSIsInNldEhvdXJzIiwiY3VycmVudFdlZWtkYXkiLCJnZXREYXkiLCJvZmZzZXRUb01vbmRheSIsIm1vbmRheU9mQ3VycmVudFdlZWsiLCJzZXREYXRlIiwidGFiRGF0ZSIsImRheURpZmYiLCJpc0luUmFuZ2UiLCJjaGFsbGVuZ2VUYWJzIiwiZGF0YXNldCIsImRheU51bSIsInJlc29sdmUiLCJ0eXBlIiwicGFyYW1zIiwidXNlcmlkIiwibWV0aG9kIiwiSlNPTiIsInN0cmluZ2lmeSIsInN0cmVhayIsImdldFNsaWRlTnVtRm9yRGF5cyIsIm5ld1RhYnMiLCJjdXJyZW50U2xpZGVEYXlOdW0iLCJ0YWIiLCJ0YWJEYXlOdW0iLCJnZXRBdHRyaWJ1dGUiLCJ1c2VyRGF0YSIsInNwaW5BbGxvd2VkIiwicGFzdFBvaXRzIiwiZGF5U3RhcnRQb2ludHMiLCJjaG9zZWREYXlQb2ludHMiLCJoYXNQb2ludHNGb3JEYXlOdW1iZXIiLCJwb2ludHMiLCJpc0N1cnJlbnREYXkiLCJwb2ludHNQZXJEYXkiLCJzcGluc1N0cmVhayIsImxhc3RVcGRhdGUiLCJidG4iLCJ0aHJlc2hvbGRQb2ludHMiLCJwcm9ncmVzcyIsIm1pbiIsInRvRml4ZWQiLCJzZXRQcm9ncmVzc1dpZHRoIiwicHJvZ3Jlc3NQZXJjZW50Iiwid2lkdGgiLCJiYXJSZWN0IiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwicGFyZW50UmVjdCIsInJpZ2h0RWRnZSIsInJpZ2h0IiwibGVmdCIsImRheVBvaW50c0FycmF5Iiwic3RhcnREYXRlIiwidGFyZ2V0RGF0ZSIsIm1hdGNoIiwiZmluZCIsImVudHJ5IiwiZW50cnlEYXRlIiwiZGF0ZVN0ciIsImlucHV0RGF0ZSIsImVuZERhdGUiLCJyZXNvbHZlU3RhdHVzVHJhbnNsYXRpb24iLCJzdGF0dXMiLCJiZXRzIiwic3Bpbkl0ZW0iLCJub1NwaW5JdGVtIiwibm9CZXRzIiwid2FybiIsInVwZCIsInNwaW4iLCJzcGluRGF0ZSIsImZvcm1hdHRlZERhdGUiLCJ0b0xvY2FsZURhdGVTdHJpbmciLCJzbGljZSIsInNwaW5FbGVtZW50IiwiY3JlYXRlRWxlbWVudCIsImlzV2luIiwic3RhdHVzQ2xhc3MiLCJuYW1lIiwiYXBwZW5kQ2hpbGQiLCJzZXRCZXRIaXN0b3J5Iiwic3RhZ2VOdW0iLCJpbml0IiwidHJ5RGV0ZWN0VXNlcklkIiwicXVpY2tDaGVja0FuZFJlbmRlciIsImNoZWNrVXNlckF1dGgiLCJhZGRFdmVudExpc3RlbmVyIiwicmVuZGVyVXNlcnMiLCJzZXRUaW1lb3V0IiwiU2V0U2xpZGVyV2lkdGhCbHVyIiwidHJpZ2dlclNoYWtlIiwicGFydGljaXBhdGUiLCJjbG9zZUJ0biIsImNsb3NlQWxsUG9wdXBzIiwicG9wdXBBdHRyIiwiZSIsIm9wZW5Qb3B1cEVsIiwiY29udGFpbnMiLCJ0YXJnZXQiLCJ1cGRhdGVTbGlkZXIiLCJoYW5kbGVTdGFydCIsImhhbmRsZU1vdmUiLCJoYW5kbGVFbmQiLCJtb3ZlU2xpZGVyIiwid2Vla051bSIsInQiLCJ3aW5kb3ciLCJzdG9yZSIsInN0YXRlIiwiZ2V0U3RhdGUiLCJhdXRoIiwiaXNBdXRob3JpemVkIiwiaWQiLCJnX3VzZXJfaWQiLCJhdHRlbXB0cyIsIm1heEF0dGVtcHRzIiwiYXR0ZW1wdEludGVydmFsIiwid2FpdEZvclVzZXJJZCIsImludGVydmFsIiwic2V0SW50ZXJ2YWwiLCJjbGVhckludGVydmFsIiwibG9hZFRyYW5zbGF0aW9ucyIsInRyYW5zbGF0ZSIsInRhcmdldE5vZGUiLCJnZXRFbGVtZW50QnlJZCIsIm11dGF0aW9uT2JzZXJ2ZXIiLCJNdXRhdGlvbk9ic2VydmVyIiwibXV0YXRpb25zIiwiZGlzY29ubmVjdCIsIm9ic2VydmUiLCJjaGlsZExpc3QiLCJzdWJ0cmVlIiwic2xpZGVzIiwidGFicyIsImluZGV4IiwiZGF5SW5kZXgiLCJzbGlkZSIsImRvdCIsIm1vdmVMZWZ0IiwibW92ZVJpZ2h0IiwibG9hZFRpbWUiLCJzaG93RWxlbWVudHMiLCJoaWRlRWxlbWVudHMiLCJyZXBvcnRFcnJvciIsInJlcG9ydERhdGEiLCJvcmlnaW4iLCJsb2NhdGlvbiIsImhyZWYiLCJlcnJvclRleHQiLCJ0ZXh0IiwibWVzc2FnZSIsInN0YWNrIiwiZWxlbXMiLCJlbGVtIiwia2V5IiwicmVmcmVzaExvY2FsaXplZENsYXNzIiwiZWxlbWVudCIsImxhbmciLCJ3ZWVrIiwiZGF0YSIsInVzZXJzIiwicG9wdWxhdGVVc2Vyc1RhYmxlIiwiY3VycmVudFVzZXJJZCIsImN1cnJlbnRVc2VyIiwiaXNUb3BDdXJyZW50VXNlciIsInNvbWUiLCJ0b3BVc2Vyc0xlbmd0aCIsInRvcFVzZXJzIiwiZGlzcGxheVVzZXIiLCJpc0N1cnJlbnRVc2VyIiwidGFibGUiLCJyZW5kZXJSb3ciLCJvcHRpb25zIiwiaGlnaGxpZ2h0IiwibmVpZ2hib3IiLCJ1c2VyUm93IiwidXNlclBsYWNlIiwiaW5kZXhPZiIsInByaXplS2V5IiwiZ2V0UHJpemVUcmFuc2xhdGlvbktleSIsIm1hc2tVc2VySWQiLCJwb2ludHNXZWVrIiwiZ2V0V2FnZXJCeVBsYWNlIiwiYXBwZW5kIiwiZGVmYXVsdFZhbHVlIiwibmVlZEtleSIsInBsYWNlIiwiaXRlbSIsImRpc3RhbmNlIiwibmV3UG9zaXRpb24iLCJzY2FsZSIsInRyYW5zZm9ybSIsInpJbmRleCIsImlzVmlzaWJsZSIsImFicyIsIm9mZnNldCIsImdvVG9TbGlkZSIsImV2ZW50IiwiY2xpZW50WCIsInRvdWNoZXMiLCJjdXJyZW50WCIsImRpZmZYIiwicCIsIm5leHRTaGFrZSIsInBhcmVudEVsZW1lbnQiLCJsbmdCdG4iLCJyZW1vdmVJdGVtIiwic2V0SXRlbSIsInJlbG9hZCIsImF1dGhCdG4iLCJiZXRCdG4iLCJpc1Nob3dQcm9ncmVzcyIsImFsbFBvcHVwcyIsInRhcmdldFBvcHVwIl0sIm1hcHBpbmdz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S0FBSyxJQUFJLEVBQUUsRUFBRSxPQUFPLGFBQWE7SUFDcEQsSUFBSUEsS0FBSyxJQUFJLEVBQUUsSUFBSUEsS0FBSyxJQUFJLEdBQUcsRUFBRSxPQUFPLGNBQWM7SUFDdEQsSUFBSUEsS0FBSyxJQUFJLEdBQUcsSUFBSUEsS0FBSyxJQUFJLEdBQUcsRUFBRSxPQUFPLGVBQWU7SUFDeEQsSUFBSUEsS0FBSyxJQUFJLEdBQUcsSUFBSUEsS0FBSyxJQUFJLEdBQUcsRUFBRSxPQUFPLGVBQWU7SUFDeEQsSUFBSUEsS0FBSyxJQUFJLEdBQUcsSUFBSUEsS0FBSyxJQUFJLEdBQUcsRUFBRSxPQUFPLGVBQWU7SUFDeEQsSUFBSUEsS0FBSyxJQUFJLEdBQUcsSUFBSUEsS0FBSyxJQUFJLEdBQUcsRUFBRSxPQUFPLGVBQWU7SUFDeEQsSUFBSUEsS0FBSyxJQUFJLEdBQUcsSUFBSUEsS0FBSyxJQUFJLEdBQUcsRUFBRSxPQUFPLGVBQWU7SUFDeEQsSUFBSUEsS0FBSyxJQUFJLEdBQUcsSUFBSUEsS0FBSyxJQUFJLEdBQUcsRUFBRSxPQUFPLGVBQWU7SUFDeEQsSUFBSUEsS0FBSyxJQUFJLEdBQUcsSUFBSUEsS0FBSyxJQUFJLEdBQUcsRUFBRSxPQUFPLGVBQWU7SUFDeEQsSUFBSUEsS0FBSyxJQUFJLEdBQUcsSUFBSUEsS0FBSyxJQUFJLEdBQUcsRUFBRSxPQUFPLGVBQWU7SUFDeEQsSUFBSUEsS0FBSyxJQUFJLEdBQUcsSUFBSUEsS0FBSyxJQUFJLEdBQUcsRUFBRSxPQUFPLGVBQWU7SUFDeEQsSUFBSUEsS0FBSyxJQUFJLEdBQUcsSUFBSUEsS0FBSyxJQUFJLEdBQUcsRUFBRSxPQUFPLGVBQWU7SUFDeEQsSUFBSUEsS0FBSyxJQUFJLEdBQUcsSUFBSUEsS0FBSyxJQUFJLEdBQUcsRUFBRSxPQUFPLGVBQWU7SUFDeEQsSUFBSUEsS0FBSyxJQUFJLEdBQUcsSUFBSUEsS0FBSyxJQUFJLEdBQUcsRUFBRSxPQUFPLGVBQWU7SUFDeEQsSUFBSUEsS0FBSyxJQUFJLEdBQUcsSUFBSUEsS0FBSyxJQUFJLEdBQUcsRUFBRSxPQUFPLGVBQWU7SUFDeEQsSUFBSUEsS0FBSyxJQUFJLEdBQUcsSUFBSUEsS0FBSyxJQUFJLElBQUksRUFBRSxPQUFPLGdCQUFnQjtJQUMxRCxPQUFPLElBQUk7RUFDZjtFQUVBLFNBQVNKLGVBQWUsQ0FBQ0ksS0FBSyxFQUFFO0lBQzVCLElBQUlBLEtBQUssSUFBSSxDQUFDLElBQUlBLEtBQUssSUFBSSxFQUFFLEVBQUUsT0FBTyxHQUFHO0lBQ3pDLElBQUlBLEtBQUssSUFBSSxFQUFFLElBQUlBLEtBQUssSUFBSSxFQUFFLEVBQUUsT0FBTyxJQUFJO0lBQzNDLElBQUlBLEtBQUssSUFBSSxFQUFFLElBQUlBLEtBQUssSUFBSSxFQUFFLEVBQUUsT0FBTyxJQUFJO0lBQzNDLElBQUlBLEtBQUssSUFBSSxFQUFFLElBQUlBLEtBQUssSUFBSSxFQUFFLEVBQUUsT0FBTyxJQUFJO0lBQzNDLElBQUlBLEtBQUssSUFBSSxFQUFFLElBQUlBLEtBQUssSUFBSSxFQUFFLEVBQUUsT0FBTyxJQUFJO0lBQzNDLElBQUlBLEtBQUssSUFBSSxFQUFFLElBQUlBLEtBQUssSUFBSSxFQUFFLEVBQUUsT0FBTyxJQUFJO0lBQzNDLElBQUlBLEtBQUssSUFBSSxFQUFFLElBQUlBLEtBQUssSUFBSSxHQUFHLEVBQUUsT0FBTyxJQUFJO0lBQzVDLElBQUlBLEtBQUssSUFBSSxHQUFHLElBQUlBLEtBQUssSUFBSSxHQUFHLEVBQUUsT0FBTyxJQUFJO0lBQzdDLElBQUlBLEtBQUssSUFBSSxHQUFHLElBQUlBLEtBQUssSUFBSSxHQUFHLEVBQUUsT0FBTyxJQUFJO0lBQzdDLElBQUlBLEtBQUssSUFBSSxHQUFHLElBQUlBLEtBQUssSUFBSSxHQUFHLEVBQUUsT0FBTyxJQUFJO0lBQzdDLElBQUlBLEtBQUssSUFBSSxHQUFHLElBQUlBLEtBQUssSUFBSSxHQUFHLEVBQUUsT0FBTyxJQUFJO0lBQzdDLElBQUlBLEtBQUssSUFBSSxHQUFHLElBQUlBLEtBQUssSUFBSSxHQUFHLEVBQUUsT0FBTyxJQUFJO0lBQzdDLElBQUlBLEtB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KGZ1bmN0aW9uICgpIHtcblxuICAgIGNvbnN0IGFwaVVSTCA9ICdodHRwczovL2Zhdi1wcm9tLmNvbS9hcGlfc2FtX3VhJ1xuXG4gICAgY29uc3QgY3VycmVudERhdGUgPSBuZXcgRGF0ZShcIjIwMjUtMDctMTVUMDA6MDA6MDFcIik7XG5cbiAgICBjb25zdCBnZXRBY3RpdmVXZWVrID0gKHByb21vU3RhcnREYXRlLCB3ZWVrRHVyYXRpb24pID0+IHtcblxuICAgICAgICBsZXQgd2Vla0RhdGVzID0gW107XG5cbiAgICAgICAgY29uc3QgRGF5ID0gMjQgKiA2MCAqIDYwICogMTAwMDtcbiAgICAgICAgY29uc3QgV2VlayA9IHdlZWtEdXJhdGlvbiAqIERheTtcblxuICAgICAgICBjb25zdCBmb3JtYXREYXRlID0gKGRhdGUpID0+XG4gICAgICAgICAgICBgJHtkYXRlLmdldERhdGUoKS50b1N0cmluZygpLnBhZFN0YXJ0KDIsIFwiMFwiKX0uJHsoZGF0ZS5nZXRNb250aCgpICsgMSkudG9TdHJpbmcoKS5wYWRTdGFydCgyLCBcIjBcIil9YDtcblxuICAgICAgICBjb25zdCBjYWxjdWxhdGVXZWVrUGVyaW9kID0gKHdlZWtJbmRleCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgYmFzZVN0YXJ0ID0gcHJvbW9TdGFydERhdGUuZ2V0VGltZSgpO1xuICAgICAgICAgICAgY29uc3Qgc3RhcnQgPSBuZXcgRGF0ZShiYXNlU3RhcnQgKyB3ZWVrSW5kZXggKiBXZWVrKTtcbiAgICAgICAgICAgIGxldCBlbmQgPSBuZXcgRGF0ZShzdGFydC5nZXRUaW1lKCkgKyAod2Vla0R1cmF0aW9uICogRGF5IC0gMSkpO1xuICAgICAgICAgICAgcmV0dXJuIHsgc3RhcnQsIGVuZCB9O1xuICAgICAgICB9O1xuXG4gICAgICAgIGxldCBhY3RpdmVXZWVrSW5kZXggPSBudWxsO1xuXG4gICAgICAgIC8vINCf0LXRgNC10LLRltGA0LrQsCDQv9C+0YLQvtGH0L3QvtCz0L4g0YLQuNC20L3Rj1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEwOyBpKyspIHsgLy8g0J7QsdC80LXQttGD0ZTQvNC+IDEwINGC0LjQttC90Y/QvNC4ICjRj9C60YnQviDQv9C+0YLRgNGW0LHQvdC+INCx0ZbQu9GM0YjQtSwg0L/RgNC+0YHRgtC+INC30LzRltC90ZbRgtGMINC70ZbRh9C40LvRjNC90LjQuilcbiAgICAgICAgICAgIGNvbnN0IHsgc3RhcnQsIGVuZCB9ID0gY2FsY3VsYXRlV2Vla1BlcmlvZChpKTtcbiAgICAgICAgICAgIGlmIChjdXJyZW50RGF0ZSA+PSBzdGFydCAmJiBjdXJyZW50RGF0ZSA8PSBlbmQpIHtcbiAgICAgICAgICAgICAgICBhY3RpdmVXZWVrSW5kZXggPSBpICsgMTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBhY3RpdmVXZWVrSW5kZXg7XG4gICAgfTtcblxuICAgIGNvbnN0IHByb21vU3RhcnREYXRlID0gbmV3IERhdGUoXCIyMDI1LTA3LTE0VDAwOjAwOjAwXCIpO1xuICAgIGNvbnN0IHdlZWtEdXJhdGlvbiA9IDc7XG5cbiAgICBjb25zdCBhY3RpdmVXZWVrID0gZ2V0QWN0aXZlV2Vlayhwcm9tb1N0YXJ0RGF0ZSwgd2Vla0R1cmF0aW9uKSB8fCAxO1xuXG4gICAgY29uc29sZS5sb2coYWN0aXZlV2VlaylcblxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5nYW1lc19fbGlzdCcpLmZvckVhY2gobGlzdCA9PiB7XG4gICAgICAgIGxpc3QuY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xuICAgIH0pO1xuXG4gICAgY29uc3QgY3VycmVudExpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuZ2FtZXNfX2xpc3QuX3dlZWske2FjdGl2ZVdlZWt9YCk7XG5cbiAgICBjb25zb2xlLmxvZyhjdXJyZW50TGlzdCk7XG4gICAgaWYgKGN1cnJlbnRMaXN0KSB7XG4gICAgICAgIGN1cnJlbnRMaXN0LmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKTtcbiAgICB9XG5cbiAgICBjb25zdCBnZXRDdXJyZW50RGF5TnVtYmVyID0gKHByb21vU3RhcnREYXRlKSA9PiB7XG4gICAgICAgIGNvbnN0IGRpZmZJbk1zID0gY3VycmVudERhdGUgLSBwcm9tb1N0YXJ0RGF0ZTtcbiAgICAgICAgbGV0IGRheU51bWJlciA9IE1hdGguZmxvb3IoZGlmZkluTXMgLyAoMjQgKiA2MCAqIDYwICogMTAwMCkpICsgMTtcbiAgICAgICAgaWYoYWN0aXZlV2VlayA+IDEpe1xuICAgICAgICAgICBkYXlOdW1iZXIgPSBkYXlOdW1iZXIgLSAoKGFjdGl2ZVdlZWsgLSAxKSAqIDcpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBkYXlOdW1iZXI7XG4gICAgfTtcblxuICAgIGNvbnN0IGRheU51bWJlciA9IGdldEN1cnJlbnREYXlOdW1iZXIocHJvbW9TdGFydERhdGUpO1xuICAgIGNvbnN0IGN1cnJlbnREYXlOdW1iZXIgPSBkYXlOdW1iZXIgPiAwID8gZGF5TnVtYmVyIDogMTtcblxuICAgIGxldCBhY3RpdmVEYXlJbldlZWtOdW1iZXIgPSBnZXREYXlOdW1iZXJJblJhbmdlKGN1cnJlbnREYXRlKVxuICAgIGxldCBzbGlkZXJEYXlJbldlZWtOdW1iZXIgPSBhY3RpdmVEYXlJbldlZWtOdW1iZXJcblxuICAgIGNvbnNvbGUubG9nKGFjdGl2ZURheUluV2Vla051bWJlcilcbiAgICBjb25zb2xlLmxvZyhjdXJyZW50RGF5TnVtYmVyKTtcblxuXG4gICAgY29uc3QgbWFpblBhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmZhdi1wYWdlXCIpLFxuICAgICAgICBjaGFsbGFuZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNoYWxsYW5nZVwiKSxcbiAgICAgICAgY2hhbGxhbmdlQnRucyA9IGNoYWxsYW5nZS5xdWVyeVNlbGVjdG9yQWxsKFwiLmJ0blwiKSxcbiAgICAgICAgY2hhbGxhbmdlQmxvY2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2hhbGxhbmdlJyksXG4gICAgICAgIGNoYWxsYW5nZURlcG9zaXRCdG4gPSBjaGFsbGFuZ2VCbG9jay5xdWVyeVNlbGVjdG9yKCcuYnRuLWpvaW4nKSxcbiAgICAgICAgdW5hdXRoTXNncyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy51bmF1dGgtbXNnJyksXG4gICAgICAgIHBhcnRpY2lwYXRlQnRucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wYXJ0LWJ0bicpLFxuICAgICAgICByZWRpcmVjdEJ0bnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYnRuLWpvaW4nKSxcbiAgICAgICAgbG9hZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zcGlubmVyLW92ZXJsYXlcIiksXG4gICAgICAgIGN1cnJlbnRDYXJkc1dyYXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2hhbGxhbmdlX19jdXJyZW50JyksXG4gICAgICAgIHByb2dyZXNzQmFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNoYWxsYW5nZV9fcHJvZ3Jlc3MtYmFyJyksXG4gICAgICAgIGNoYWxsYW5nZUJsdXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2hhbGxhbmdlX19ibHVyJyksXG4gICAgICAgIGNoYWxsYW5nZUJsdXJTdGF0dXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2hhbGxhbmdlX19ibHVyLXN0YXR1cycpLFxuICAgICAgICBwcm9ncmVzc0JveCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jaGFsbGFuZ2VfX3Byb2dyZXNzLWJveCcpLFxuICAgICAgICBjaGFsbGFuZ2VCdG5Qb2ludGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNoYWxsYW5nZV9fYnRuLXBvaW50ZXInKSxcbiAgICAgICAgYnRuT3BlbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idG4tb3BlbicpLFxuICAgICAgICBjb3VudGVyUG9pbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvdW50ZXItcG9pbnRzJyksXG4gICAgICAgIHBvcHVwcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wb3B1cHMnKSxcbiAgICAgICAgc3RyZWFrRGF5cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIucHJvZ3Jlc3NfX2RheXMtaXRlbVwiKSxcbiAgICAgICAgc3RyZWFrRGF5c1BvcHVwID0gcG9wdXBzLnF1ZXJ5U2VsZWN0b3JBbGwoXCIucHJvZ3Jlc3NfX2RheXMtaXRlbVwiKSxcbiAgICAgICAgcmVzdWx0c1RhYmxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RhYmxlJyksXG4gICAgICAgIHJlc3VsdHNUYWJsZU90aGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RhYmxlT3RoZXInKSxcbiAgICAgICAgdGFibGVUYWJzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRhYmxlX190YWJzLWl0ZW0nKSxcbiAgICAgICAgZHJvcFNwaW5zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRyb3AtLXNwaW5zJyksXG4gICAgICAgIGxhc3RVcGRCbG9jayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5sYXN0LXVwZCcpO1xuXG5cbiAgICBjb25zb2xlLmxvZyhidG5PcGVuKVxuXG5cbiAgICBsZXQgc2xpZGVyRGF5SW5kZXggPSBjdXJyZW50RGF5TnVtYmVyO1xuXG5cbiAgICBjb25zdCB1a0xlbmcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdWtMZW5nJyk7XG4gICAgY29uc3QgZW5MZW5nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2VuTGVuZycpO1xuXG4gICAgY29uc3QgdG9nZ2xlQ2xhc3NlcyA9IChlbGVtZW50cywgY2xhc3NOYW1lKSA9PiBlbGVtZW50cy5mb3JFYWNoKGVsID0+IGVsLmNsYXNzTGlzdC50b2dnbGUoYCR7Y2xhc3NOYW1lfWApKTtcbiAgICBjb25zdCB0b2dnbGVUcmFuc2xhdGVzID0gKGVsZW1lbnRzLCBkYXRhQXR0cikgPT4gZWxlbWVudHMuZm9yRWFjaChlbCA9PiB7XG4gICAgICAgIGVsLnNldEF0dHJpYnV0ZSgnZGF0YS10cmFuc2xhdGUnLCBgJHtkYXRhQXR0cn1gKVxuICAgICAgICBlbC5pbm5lckhUTUwgPSBpMThuRGF0YVtkYXRhQXR0cl0gfHwgJyotLS0tTkVFRCBUTyBCRSBUUkFOU0xBVEVELS0tLSogICBrZXk6ICAnICsgZGF0YUF0dHI7XG4gICAgICAgIGVsLnJlbW92ZUF0dHJpYnV0ZSgnZGF0YS10cmFuc2xhdGUnKTtcbiAgICB9KTtcblxuICAgIGxldCBsb2FkZXJCdG4gPSBmYWxzZVxuXG4gICAgLy8gbGV0IGxvY2FsZSA9IFwiZW5cIlxuICAgIGxldCBsb2NhbGUgPSBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKFwibG9jYWxlXCIpIHx8IFwidWtcIlxuXG4gICAgaWYgKHVrTGVuZykgbG9jYWxlID0gJ3VrJztcbiAgICBpZiAoZW5MZW5nKSBsb2NhbGUgPSAnZW4nO1xuXG4gICAgbGV0IGRlYnVnID0gZmFsc2VcblxuICAgIGlmIChkZWJ1ZykgaGlkZUxvYWRlcigpXG5cbiAgICBsZXQgaTE4bkRhdGEgPSB7fTtcbiAgICBjb25zdCB0cmFuc2xhdGVTdGF0ZSA9IHRydWU7XG4gICAgLy8gbGV0IHVzZXJJZCA9IG51bGw7XG4gICAgbGV0IHVzZXJJZCA9IE51bWJlcihzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKFwidXNlcklkXCIpKSA/PyBudWxsXG5cbiAgICAvLyB1c2VySWQgPSAxMDAzMDAyNjhcblxuICAgIGNvbnN0IGJveCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaGFrZS1ib3gnKTtcbiAgICBjb25zdCBpbml0aWFsRGVsYXkgPSBNYXRoLnJhbmRvbSgpICogNjAwMCArIDQwMDA7XG5cbiAgICAvL3NsaWRlciB2YXJzXG5cbiAgICBjb25zdCBzbGlkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJpemVfX3NsaWRlcicpO1xuICAgIGNvbnN0IGl0ZW1zID0gc2xpZGVyLnF1ZXJ5U2VsZWN0b3JBbGwoJy5wcml6ZV9fc2xpZGUnKTtcbiAgICBjb25zdCBkb3RzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnByaXplX19uYXYtZG90cy1pdGVtJyk7XG4gICAgY29uc3QgYnRuTGVmdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcml6ZV9fbmF2LWxlZnQnKTtcbiAgICBjb25zdCBidG5SaWdodCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcml6ZV9fbmF2LXJpZ2h0Jyk7XG5cbiAgICBsZXQgY3VycmVudEluZGV4ID0gMTtcbiAgICBjb25zdCB0b3RhbEl0ZW1zID0gaXRlbXMubGVuZ3RoO1xuICAgIGxldCBpc0RyYWdnaW5nID0gZmFsc2U7XG4gICAgbGV0IHN0YXJ0WCA9IDA7XG5cbiAgICAvL3NsaWRlciB2YXJzXG5cbiAgICBmdW5jdGlvbiBmb3JtYXREYXRlVGltZUN1c3RvbShpc29TdHJpbmcpIHtcbiAgICAgICAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKGlzb1N0cmluZyk7XG5cbiAgICAgICAgY29uc3Qga3lpdkRhdGUgPSBuZXcgRGF0ZShkYXRlLnRvTG9jYWxlU3RyaW5nKCdlbi1VUycsIHsgdGltZVpvbmU6ICdFdXJvcGUvS3lpdicgfSkpO1xuXG4gICAgICAgIGNvbnN0IGRheSA9IFN0cmluZyhreWl2RGF0ZS5nZXREYXRlKCkpLnBhZFN0YXJ0KDIsICcwJyk7XG4gICAgICAgIGNvbnN0IG1vbnRoID0gU3RyaW5nKGt5aXZEYXRlLmdldE1vbnRoKCkgKyAxKS5wYWRTdGFydCgyLCAnMCcpO1xuICAgICAgICBjb25zdCB5ZWFyID0ga3lpdkRhdGUuZ2V0RnVsbFllYXIoKTtcbiAgICAgICAgY29uc3QgaG91cnMgPSBTdHJpbmcoa3lpdkRhdGUuZ2V0SG91cnMoKSkucGFkU3RhcnQoMiwgJzAnKTtcbiAgICAgICAgY29uc3QgbWludXRlcyA9IFN0cmluZyhreWl2RGF0ZS5nZXRNaW51dGVzKCkpLnBhZFN0YXJ0KDIsICcwJyk7XG5cbiAgICAgICAgcmV0dXJuIGAke2RheX0uJHttb250aH0uJHt5ZWFyfS4gJHtob3Vyc306JHttaW51dGVzfWA7XG4gICAgfVxuXG4gICAgY29uc3QgcmVxdWVzdCA9IGZ1bmN0aW9uIChsaW5rLCBleHRyYU9wdGlvbnMpIHtcbiAgICAgICAgcmV0dXJuIGZldGNoKGFwaVVSTCArIGxpbmssIHtcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAnQWNjZXB0JzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAuLi4oZXh0cmFPcHRpb25zIHx8IHt9KVxuICAgICAgICB9KVxuICAgICAgICAgICAgLnRoZW4ocmVzID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoIXJlcy5vaykgdGhyb3cgbmV3IEVycm9yKCdBUEkgZXJyb3InKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzLmpzb24oKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuY2F0Y2goZXJyID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCdBUEkgcmVxdWVzdCBmYWlsZWQ6JywgZXJyKTtcblxuICAgICAgICAgICAgICAgIC8vIHJlcG9ydEVycm9yKGVycik7XG4gICAgICAgICAgICAgICAgLy9cbiAgICAgICAgICAgICAgICAvLyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZmF2LXBhZ2UnKS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICAgICAgICAgIC8vIGlmICh3aW5kb3cubG9jYXRpb24uaHJlZi5zdGFydHNXaXRoKFwiaHR0cHM6Ly93d3cuZmF2YmV0LmhyL1wiKSkge1xuICAgICAgICAgICAgICAgIC8vICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9ICcvcHJvbW9jaWplL3Byb21vY2lqYS9zdHViLyc7XG4gICAgICAgICAgICAgICAgLy8gfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSAnL3Byb21vcy9wcm9tby9zdHViLyc7XG4gICAgICAgICAgICAgICAgLy8gfVxuXG4gICAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KGVycik7XG4gICAgICAgICAgICB9KTtcblxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGhpZGVMb2FkZXIoKXtcbiAgICAgICAgbG9hZGVyLmNsYXNzTGlzdC5hZGQoXCJoaWRlXCIpXG4gICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3cgPSBcImF1dG9cIlxuICAgICAgICBtYWluUGFnZS5jbGFzc0xpc3QucmVtb3ZlKFwibG9hZGluZ1wiKVxuICAgIH1cblxuXG5cbiAgICBmdW5jdGlvbiBpbml0U3Bpbigpe1xuXG4gICAgICAgIGJ0bk9wZW4udGV4dENvbnRlbnQgPSB0cmFuc2xhdGVLZXkoXCJsb2FkZXJcIilcbiAgICAgICAgY2hhbGxhbmdlQnRuUG9pbnRlci5jbGFzc0xpc3QuYWRkKFwiaGlkZVwiKTtcblxuXG4gICAgICAgIHNlbmRTcGluUmVxdWVzdCgpLnRoZW4ocmVzID0+IHtcblxuICAgICAgICAgICAgY29uc29sZS5sb2cocmVzKVxuXG4gICAgICAgICAgICBjb25zdCBwcml6ZSA9IHJlcy5udW1iZXI7XG4gICAgICAgICAgICBjb25zdCBzdHJlYWtCb251cyA9IHJlcy5zdHJlYWtCb251cyB8fCBkZWJ1ZztcblxuICAgICAgICAgICAgY29uc29sZS5sb2coc3RyZWFrQm9udXMpXG5cbiAgICAgICAgICAgIGJ0bk9wZW4udGV4dENvbnRlbnQgPSB0cmFuc2xhdGVLZXkoXCJvcGVuQnRuXCIpXG5cbiAgICAgICAgICAgIGJ0bk9wZW4uY2xhc3NMaXN0LmFkZChcImhpZGVcIik7XG4gICAgICAgICAgICBjaGFsbGFuZ2VEZXBvc2l0QnRuLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRlXCIpO1xuXG4gICAgICAgICAgICBzZXRTdHJlYWtEYXlzKHN0cmVha0JvbnVzKVxuXG4gICAgICAgICAgICBpZiAocHJpemUgPT09ICdyZXNwaW4nKSBvcGVuUG9wdXBCeUF0dHIoJ3VubHVja3lQb3B1cCcsIHRydWUpO1xuICAgICAgICAgICAgaWYgKHByaXplID09PSAnbm90aGluZycpIG9wZW5Qb3B1cEJ5QXR0cigndW5sdWNreVBvcHVwJywgdHJ1ZSk7XG4gICAgICAgICAgICBpZiAocHJpemUgPT09ICd3aGVlbEJ1YmJsZVNwYW5zJykgb3BlblBvcHVwQnlBdHRyKCdwcml6ZTUwUG9pbnRzJywgdHJ1ZSk7XG4gICAgICAgICAgICBpZiAocHJpemUgPT09ICdpcGhvbmUnKSBvcGVuUG9wdXBCeUF0dHIoJ3ByaXplSXBob25lJywgdHJ1ZSk7XG4gICAgICAgICAgICBpZiAocHJpemUgPT09ICdtYWNCb29rJykgb3BlblBvcHVwQnlBdHRyKCdwcml6ZUxhcHRvcCcsIHRydWUpO1xuICAgICAgICAgICAgaWYgKHByaXplID09PSAnYWlyUG9kcycpIG9wZW5Qb3B1cEJ5QXR0cigncHJpemVBaXJwb2RzJywgdHJ1ZSk7XG4gICAgICAgICAgICBpZiAocHJpemUgPT09ICdhcHBsZVdhdGNoJykgb3BlblBvcHVwQnlBdHRyKCdwcml6ZVdhdGNoJywgdHJ1ZSk7XG4gICAgICAgICAgICBpZiAocHJpemUgPT09ICdyb3pldGthR2lmdENhcmQnKSBvcGVuUG9wdXBCeUF0dHIoJ3ByaXplR2lmdCcsIHRydWUpO1xuICAgICAgICAgICAgaWYgKHByaXplID09PSAnZnM1MCcpIG9wZW5Qb3B1cEJ5QXR0cigncHJpemU1MEZzR2F0ZU9seW1wJywgdHJ1ZSk7XG4gICAgICAgICAgICBpZiAocHJpemUgPT09ICdwb2ludHM1MCcpIG9wZW5Qb3B1cEJ5QXR0cignNTBQb2ludHNJbmZvJywgdHJ1ZSk7XG4gICAgICAgICAgICBpZiAocHJpemUgPT09ICdmczI1XzNvYWtzJykgb3BlblBvcHVwQnlBdHRyKCdwcml6ZTI1RnNMdWNreVBlbm55JywgdHJ1ZSk7XG4gICAgICAgICAgICBpZiAocHJpemUgPT09ICdmczI1X3BsYXlzb24nKSBvcGVuUG9wdXBCeUF0dHIoJ3ByaXplMjVGc0NvaW5TdHJpa2UnLCB0cnVlKTtcbiAgICAgICAgICAgIGlmIChwcml6ZSA9PT0gJ2ZzNDAnKSBvcGVuUG9wdXBCeUF0dHIoJ3ByaXplNDBGc1Bpcm90czMnLCB0cnVlKTtcbiAgICAgICAgICAgIGlmIChwcml6ZSA9PT0gJ2ZzMjVfYmdhbWluZycpIG9wZW5Qb3B1cEJ5QXR0cigncHJpemUyNUZzU25vb3BEb2dnJywgdHJ1ZSk7XG4gICAgICAgICAgICBpZiAocHJpemUgPT09ICdmczI1X3B1c2hHYW1pbmcnKSBvcGVuUG9wdXBCeUF0dHIoJ3ByaXplMjVGc0JpZ0JhbWJvbycsIHRydWUpO1xuICAgICAgICAgICAgaWYgKHByaXplID09PSAnZnMxMCcpIG9wZW5Qb3B1cEJ5QXR0cigncHJpemUxMEZzSGl0U2xvdCcsIHRydWUpO1xuICAgICAgICAgICAgaWYgKHByaXplID09PSAnZnMzMCcpIG9wZW5Qb3B1cEJ5QXR0cigncHJpemUzMEZzU2hpbmlnQ3Jvd24nLCB0cnVlKTtcbiAgICAgICAgICAgIGlmIChwcml6ZSA9PT0gJ2ZzMjVfaGFja3NhdycpIG9wZW5Qb3B1cEJ5QXR0cigncHJpemUyNUZzTGVCYW5kaXQnLCB0cnVlKTtcbiAgICAgICAgICAgIGlmIChwcml6ZSA9PT0gJ2ZzMjAnKSBvcGVuUG9wdXBCeUF0dHIoJ3ByaXplMjBGc0x1Y2tPZlBhbmRhJywgdHJ1ZSk7XG5cblxuICAgICAgICAgICAgcmVxdWVzdChgL2ZhdnVzZXIvJHt1c2VySWR9YCkudGhlbih1c2VyID0+IHtcbiAgICAgICAgICAgICAgICBzZXRVc2VyUHJvZ3Jlc3ModXNlciwgYWN0aXZlRGF5SW5XZWVrTnVtYmVyKVxuICAgICAgICAgICAgICAgIGRpc3BsYXlCZXRzSGlzdG9yeSh1c2VyLnNwaW5zKVxuICAgICAgICAgICAgfSlcblxuXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc2V0RGF5TnVtYmVyc0ZvcldlZWsodGFibGVUYWJzLCBwcm9tb1N0YXJ0RGF0ZVN0ciwgY3VycmVudERhdGVTdHIpIHtcbiAgICAgICAgY29uc3QgcHJvbW9TdGFydERhdGUgPSBuZXcgRGF0ZShwcm9tb1N0YXJ0RGF0ZVN0cik7XG4gICAgICAgIGNvbnN0IGN1cnJlbnREYXRlID0gbmV3IERhdGUoY3VycmVudERhdGVTdHIpO1xuICAgICAgICBjb25zdCBtc1BlckRheSA9IDEwMDAgKiA2MCAqIDYwICogMjQ7XG5cbiAgICAgICAgcHJvbW9TdGFydERhdGUuc2V0SG91cnMoMCwgMCwgMCwgMCk7XG4gICAgICAgIGN1cnJlbnREYXRlLnNldEhvdXJzKDAsIDAsIDAsIDApO1xuXG4gICAgICAgIGNvbnN0IGN1cnJlbnRXZWVrZGF5ID0gY3VycmVudERhdGUuZ2V0RGF5KCk7IC8vIDAgLSDQvdC10LTRltC70Y8sIDEgLSDQv9C+0L3QtdC00ZbQu9C+0LogLi4uXG4gICAgICAgIGNvbnN0IG9mZnNldFRvTW9uZGF5ID0gKGN1cnJlbnRXZWVrZGF5ICsgNikgJSA3OyAvLyDRgdC60ZbQu9GM0LrQuCDQtNC90ZbQsiDQvdCw0LfQsNC0INC00L4g0L/QvtC90LXQtNGW0LvQutCwXG4gICAgICAgIGNvbnN0IG1vbmRheU9mQ3VycmVudFdlZWsgPSBuZXcgRGF0ZShjdXJyZW50RGF0ZSk7XG4gICAgICAgIG1vbmRheU9mQ3VycmVudFdlZWsuc2V0RGF0ZShjdXJyZW50RGF0ZS5nZXREYXRlKCkgLSBvZmZzZXRUb01vbmRheSk7XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0YWJsZVRhYnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IHRhYkRhdGUgPSBuZXcgRGF0ZShtb25kYXlPZkN1cnJlbnRXZWVrKTtcbiAgICAgICAgICAgIHRhYkRhdGUuc2V0RGF0ZShtb25kYXlPZkN1cnJlbnRXZWVrLmdldERhdGUoKSArIGkpO1xuXG4gICAgICAgICAgICBjb25zdCBkYXlEaWZmID0gTWF0aC5mbG9vcigodGFiRGF0ZSAtIHByb21vU3RhcnREYXRlKSAvIG1zUGVyRGF5KSArIDE7XG5cbiAgICAgICAgICAgIGNvbnN0IGlzSW5SYW5nZSA9IGRheURpZmYgPj0gMSAmJiBkYXlEaWZmIDw9IDI4O1xuXG4gICAgICAgICAgICBjb25zdCBjaGFsbGVuZ2VUYWJzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5jaGFsbGFuZ2VfX3RhYnMtaXRlbVwiKVxuXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhpc0luUmFuZ2UpO1xuXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhjaGFsbGVuZ2VUYWJzW2ldKTtcblxuICAgICAgICAgICAgY2hhbGxlbmdlVGFic1tpXS5kYXRhc2V0LmRheU51bSA9IGlzSW5SYW5nZSA/IGRheURpZmYgOiBudWxsO1xuICAgICAgICB9XG4gICAgfVxuXG5cbiAgICBmdW5jdGlvbiBzZW5kU3BpblJlcXVlc3QoKSB7XG4gICAgICAgIGlmICghdXNlcklkKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZGVidWcpIHtcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoe1xuICAgICAgICAgICAgICAgIG51bWJlcjogJ3Jlc3BpbicsXG4gICAgICAgICAgICAgICAgdHlwZTogJ3Rlc3QnXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHBhcmFtcyA9IHt1c2VyaWQ6IHVzZXJJZH07XG4gICAgICAgIHJldHVybiByZXF1ZXN0KCcvc3BpbicsIHtcbiAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkocGFyYW1zKVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzZXRTdHJlYWtEYXlzKHN0cmVhaykge1xuICAgICAgICBzdHJlYWtEYXlzLmZvckVhY2goKGRheSwgaSkgPT57XG4gICAgICAgICAgICBkYXkuY2xhc3NMaXN0LnJlbW92ZShcIl9hY3RpdmVcIilcbiAgICAgICAgICAgIGlmKGkgKyAxIDw9IHN0cmVhayl7XG4gICAgICAgICAgICAgICAgZGF5LmNsYXNzTGlzdC5hZGQoJ19hY3RpdmUnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICAgc3RyZWFrRGF5c1BvcHVwLmZvckVhY2goKGRheSwgaSkgPT57XG4gICAgICAgICAgICBkYXkuY2xhc3NMaXN0LnJlbW92ZShcIl9hY3RpdmVcIilcbiAgICAgICAgICAgIGlmKGkgKyAxIDw9IHN0cmVhayl7XG4gICAgICAgICAgICAgICAgZGF5LmNsYXNzTGlzdC5hZGQoJ19hY3RpdmUnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXRTbGlkZU51bUZvckRheXMoY3VycmVudEluZGV4KXtcblxuXG5cbiAgICAgICAgY29uc3QgbmV3VGFicyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jaGFsbGFuZ2VfX3RhYnMtaXRlbScpO1xuXG4gICAgICAgIHNldERheU51bWJlcnNGb3JXZWVrKG5ld1RhYnMsIHByb21vU3RhcnREYXRlLCBjdXJyZW50RGF0ZSk7XG5cbiAgICAgICAgY29uc29sZS5sb2cobmV3VGFicyk7XG5cbiAgICAgICAgbGV0IGN1cnJlbnRTbGlkZURheU51bSA9IG51bGxcblxuICAgICAgICBuZXdUYWJzLmZvckVhY2godGFiID0+e1xuICAgICAgICAgICAgY29uc3QgdGFiRGF5TnVtID0gTnVtYmVyKHRhYi5nZXRBdHRyaWJ1dGUoJ2RhdGEtZGF5LW51bScpKTtcblxuICAgICAgICAgICAgY29uc29sZS5sb2codGFiRGF5TnVtLCBjdXJyZW50SW5kZXgpO1xuICAgICAgICAgICAgaWYodGFiRGF5TnVtID09PSBjdXJyZW50SW5kZXgpe1xuICAgICAgICAgICAgICAgIGN1cnJlbnRTbGlkZURheU51bSA9IHRhYkRheU51bVxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuXG4gICAgICAgIGNvbnNvbGUubG9nKGN1cnJlbnRTbGlkZURheU51bSk7XG5cblxuICAgICAgICByZXR1cm4gY3VycmVudFNsaWRlRGF5TnVtXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc2V0VXNlclByb2dyZXNzKHVzZXJEYXRhLCBkYXlOdW0pIHtcblxuICAgICAgICBjb25zb2xlLmxvZyh1c2VyRGF0YSk7XG5cbiAgICAgICAgbGV0IHNwaW5BbGxvd2VkID0gdXNlckRhdGEuc3BpbkFsbG93ZWQsXG4gICAgICAgICAgICBwYXN0UG9pdHMgPSB1c2VyRGF0YS5kYXlTdGFydFBvaW50cyxcbiAgICAgICAgICAgIGNob3NlZERheVBvaW50cyA9IGhhc1BvaW50c0ZvckRheU51bWJlcihkYXlOdW0sIHBhc3RQb2l0cyk/LnBvaW50cyA/PyAwLFxuICAgICAgICAgICAgaXNDdXJyZW50RGF5ID0gZGF5TnVtID09PSBhY3RpdmVEYXlJbldlZWtOdW1iZXIsXG4gICAgICAgICAgICBwb2ludHNQZXJEYXkgPSAgaXNDdXJyZW50RGF5ID8gdXNlckRhdGEucG9pbnRzUGVyRGF5IDogY2hvc2VkRGF5UG9pbnRzLFxuICAgICAgICAgICAgc3RyZWFrID0gdXNlckRhdGEuc3BpbnNTdHJlYWssXG4gICAgICAgICAgICBsYXN0VXBkYXRlID0gdXNlckRhdGEubGFzdFVwZGF0ZVxuXG5cbiAgICAgICAgaWYoIWlzQ3VycmVudERheSl7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhjaGFsbGFuZ2VCdG5zKVxuICAgICAgICAgICAgY2hhbGxhbmdlQnRucy5mb3JFYWNoKGJ0biA9PiBidG4uY2xhc3NMaXN0LmFkZChcIl9sb2NrXCIpKTtcbiAgICAgICAgICAgIGNoYWxsYW5nZUJ0blBvaW50ZXIuY2xhc3NMaXN0LmFkZChcImhpZGVcIik7XG4gICAgICAgIH1cbiAgICAgICAgaWYoaXNDdXJyZW50RGF5KXtcbiAgICAgICAgICAgIGNoYWxsYW5nZUJ0bnMuZm9yRWFjaChidG4gPT4gYnRuLmNsYXNzTGlzdC5yZW1vdmUoXCJfbG9ja1wiKSk7XG4gICAgICAgICAgICBjaGFsbGFuZ2VCdG5Qb2ludGVyLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRlXCIpO1xuICAgICAgICB9XG4gICAgICAgIHNldFN0cmVha0RheXMoc3RyZWFrKVxuXG4gICAgICAgIGNvbnN0IHRocmVzaG9sZFBvaW50cyA9IDEwMDBcblxuICAgICAgICBwb2ludHNQZXJEYXkgPSBwb2ludHNQZXJEYXkgPiB0aHJlc2hvbGRQb2ludHMgPyB0aHJlc2hvbGRQb2ludHMgOiBwb2ludHNQZXJEYXk7XG5cbiAgICAgICAgaWYoIXBvaW50c1BlckRheSkgcG9pbnRzUGVyRGF5ID0gMFxuXG4gICAgICAgIGNvbnNvbGUubG9nKHBvaW50c1BlckRheSlcblxuICAgICAgICBjb3VudGVyUG9pbnRzLnRleHRDb250ZW50ID0gYCR7cG9pbnRzUGVyRGF5fWBcblxuICAgICAgICBsZXQgcHJvZ3Jlc3MgPSBNYXRoLm1pbigocG9pbnRzUGVyRGF5IC8gdGhyZXNob2xkUG9pbnRzKSAqIDEwMCwgMTAwKTtcblxuICAgICAgICBjb25zb2xlLmxvZyhwcm9ncmVzcyk7XG5cbiAgICAgICAgaWYgKHByb2dyZXNzID49IDEwMCkge1xuICAgICAgICAgICAgY2hhbGxhbmdlQmx1ci5jbGFzc0xpc3QuYWRkKCdoaWRlJylcbiAgICAgICAgICAgIHByb2dyZXNzQm94LmNsYXNzTGlzdC5yZW1vdmUoJ19sb2NrJylcbiAgICAgICAgICAgIHByb2dyZXNzQm94LmNsYXNzTGlzdC5hZGQoJ19vcGVuJylcbiAgICAgICAgICAgIGNoYWxsYW5nZUJ0blBvaW50ZXIuY2xhc3NMaXN0LnJlbW92ZShcImhpZGVcIilcbiAgICAgICAgICAgIGJ0bk9wZW4uY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpXG4gICAgICAgICAgICBjaGFsbGFuZ2VEZXBvc2l0QnRuLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKVxuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIGNoYWxsYW5nZUJsdXIuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpXG4gICAgICAgICAgICBwcm9ncmVzc0JveC5jbGFzc0xpc3QuYWRkKCdfbG9jaycpXG4gICAgICAgICAgICBwcm9ncmVzc0JveC5jbGFzc0xpc3QucmVtb3ZlKCdfb3BlbicpXG4gICAgICAgICAgICBjaGFsbGFuZ2VCdG5Qb2ludGVyLmNsYXNzTGlzdC5hZGQoXCJoaWRlXCIpXG4gICAgICAgICAgICBidG5PcGVuLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKVxuICAgICAgICAgICAgY2hhbGxhbmdlRGVwb3NpdEJ0bi5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJylcblxuICAgICAgICB9XG5cbiAgICAgICAgY29uc29sZS5sb2coYNCf0YDQvtCz0YDQtdGBINC60L7RgNC40YHRgtGD0LLQsNGH0LA6ICR7cHJvZ3Jlc3MudG9GaXhlZCgwKX0lYCk7XG5cblxuICAgICAgICBpZih1c2VySWQpe1xuICAgICAgICAgICAgc2V0UHJvZ3Jlc3NXaWR0aChwcm9ncmVzcyk7XG4gICAgICAgIH1cblxuXG4gICAgICAgIGNvbnNvbGUubG9nKHVzZXJEYXRhKVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHNldFByb2dyZXNzV2lkdGgocHJvZ3Jlc3NQZXJjZW50KSB7XG5cbiAgICAgICAgcHJvZ3Jlc3NCYXIuc3R5bGUud2lkdGggPSBgJHtwcm9ncmVzc1BlcmNlbnR9JWA7XG5cbiAgICAgICAgY29uc3QgYmFyUmVjdCA9IHByb2dyZXNzQmFyLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgICBjb25zdCBwYXJlbnRSZWN0ID0gY3VycmVudENhcmRzV3JhcC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcblxuICAgICAgICBjb25zdCByaWdodEVkZ2UgPSBiYXJSZWN0LnJpZ2h0IC0gcGFyZW50UmVjdC5sZWZ0IC0gNTtcblxuICAgICAgICBjaGFsbGFuZ2VCbHVyLnN0eWxlLmxlZnQgPSBgJHtyaWdodEVkZ2V9cHhgO1xuICAgICAgICBjaGFsbGFuZ2VCbHVyU3RhdHVzLnRleHRDb250ZW50ID0gYCR7cHJvZ3Jlc3NQZXJjZW50LnRvRml4ZWQoMCl9JWA7XG5cblxuICAgIH1cbiAgICAvL1xuICAgIC8vIGZ1bmN0aW9uIGhhc1BvaW50c0ZvckRheU51bWJlcihkYXlOdW1iZXIsIGRheVBvaW50c0FycmF5KSB7XG4gICAgLy8gICAgIGNvbnN0IHN0YXJ0RGF0ZSA9IG5ldyBEYXRlKCcyMDI1LTA3LTE0Jyk7XG4gICAgLy8gICAgIGNvbnN0IHRhcmdldERhdGUgPSBuZXcgRGF0ZShzdGFydERhdGUpO1xuICAgIC8vICAgICB0YXJnZXREYXRlLnNldERhdGUoc3RhcnREYXRlLmdldERhdGUoKSArIGRheU51bWJlciAtIDEpO1xuICAgIC8vICAgICB0YXJnZXREYXRlLnNldEhvdXJzKDAsIDAsIDAsIDApO1xuICAgIC8vXG4gICAgLy8gICAgIHJldHVybiBkYXlQb2ludHNBcnJheS5zb21lKGVudHJ5ID0+IHtcbiAgICAvLyAgICAgICAgIGNvbnN0IGVudHJ5RGF0ZSA9IG5ldyBEYXRlKGVudHJ5LmRhdGUpO1xuICAgIC8vICAgICAgICAgZW50cnlEYXRlLnNldEhvdXJzKDAsIDAsIDAsIDApO1xuICAgIC8vICAgICAgICAgcmV0dXJuIGVudHJ5RGF0ZS5nZXRUaW1lKCkgPT09IHRhcmdldERhdGUuZ2V0VGltZSgpO1xuICAgIC8vICAgICB9KTtcbiAgICAvLyB9XG5cbiAgICBmdW5jdGlvbiBoYXNQb2ludHNGb3JEYXlOdW1iZXIoZGF5TnVtYmVyLCBkYXlQb2ludHNBcnJheSkge1xuICAgICAgICBjb25zdCBzdGFydERhdGUgPSBuZXcgRGF0ZSgnMjAyNS0wNy0xNCcpO1xuICAgICAgICBjb25zdCB0YXJnZXREYXRlID0gbmV3IERhdGUoc3RhcnREYXRlKTtcbiAgICAgICAgdGFyZ2V0RGF0ZS5zZXREYXRlKHN0YXJ0RGF0ZS5nZXREYXRlKCkgKyBkYXlOdW1iZXIgLSAxKTtcbiAgICAgICAgdGFyZ2V0RGF0ZS5zZXRIb3VycygwLCAwLCAwLCAwKTtcblxuICAgICAgICBjb25zdCBtYXRjaCA9IGRheVBvaW50c0FycmF5LmZpbmQoZW50cnkgPT4ge1xuICAgICAgICAgICAgY29uc3QgZW50cnlEYXRlID0gbmV3IERhdGUoZW50cnkuZGF0ZSk7XG4gICAgICAgICAgICBlbnRyeURhdGUuc2V0SG91cnMoMCwgMCwgMCwgMCk7XG4gICAgICAgICAgICByZXR1cm4gZW50cnlEYXRlLmdldFRpbWUoKSA9PT0gdGFyZ2V0RGF0ZS5nZXRUaW1lKCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBtYXRjaCB8fCBudWxsO1xuICAgIH1cblxuXG4gICAgZnVuY3Rpb24gZ2V0RGF5TnVtYmVySW5SYW5nZShkYXRlU3RyKSB7XG4gICAgICAgIGNvbnN0IGlucHV0RGF0ZSA9IG5ldyBEYXRlKGRhdGVTdHIpO1xuICAgICAgICBjb25zdCBzdGFydERhdGUgPSBuZXcgRGF0ZSgnMjAyNS0wNy0xNCcpO1xuICAgICAgICBjb25zdCBlbmREYXRlID0gbmV3IERhdGUoJzIwMjUtMDgtMTAnKTtcblxuICAgICAgICAvLyDQntGH0LjRidCw0ZTQvNC+INGH0LDRgSwg0YnQvtCxINC/0L7RgNGW0LLQvdGP0L3QvdGPINCx0YPQu9C+INC70LjRiNC1INC/0L4g0LTQsNGC0ZZcbiAgICAgICAgaW5wdXREYXRlLnNldEhvdXJzKDAsIDAsIDAsIDApO1xuICAgICAgICBzdGFydERhdGUuc2V0SG91cnMoMCwgMCwgMCwgMCk7XG4gICAgICAgIGVuZERhdGUuc2V0SG91cnMoMCwgMCwgMCwgMCk7XG5cbiAgICAgICAgaWYgKGlucHV0RGF0ZSA8IHN0YXJ0RGF0ZSB8fCBpbnB1dERhdGUgPiBlbmREYXRlKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IG1zUGVyRGF5ID0gMTAwMCAqIDYwICogNjAgKiAyNDtcbiAgICAgICAgY29uc3QgZGF5TnVtYmVyID0gTWF0aC5mbG9vcigoaW5wdXREYXRlIC0gc3RhcnREYXRlKSAvIG1zUGVyRGF5KSArIDE7XG5cbiAgICAgICAgcmV0dXJuIGRheU51bWJlcjtcbiAgICB9XG5cblxuICAgIGZ1bmN0aW9uIHJlc29sdmVTdGF0dXNUcmFuc2xhdGlvbihzdGF0dXMpIHtcbiAgICAgICAgaWYgKCFzdGF0dXMgfHwgc3RhdHVzID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgcmV0dXJuIHRyYW5zbGF0ZUtleSgnYmV0VW5kZWZpbmVkJyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHN0YXR1cyA9PT0gJ3dpbicpIHtcbiAgICAgICAgICAgIHJldHVybiB0cmFuc2xhdGVLZXkoJ3dpbkJldCcpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChzdGF0dXMgPT09ICdsb3NlJykge1xuICAgICAgICAgICAgcmV0dXJuIHRyYW5zbGF0ZUtleSgnbG9zZUJldCcpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZGlzcGxheUJldHNIaXN0b3J5KGJldHMpIHtcblxuICAgICAgICBjb25zb2xlLmxvZyhiZXRzKTtcbiAgICAgICAgY29uc3Qgc3Bpbkl0ZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3BpbnMtcm93Jyk7XG4gICAgICAgIGNvbnN0IG5vU3Bpbkl0ZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubm8tc3BpbnMnKTtcbiAgICAgICAgY29uc3Qgbm9CZXRzID0gIWJldHMgfHwgYmV0cy5sZW5ndGggPT09IDA7XG5cbiAgICAgICAgaWYgKG5vQmV0cyAmJiAhZGVidWcpIHtcbiAgICAgICAgICAgIHNwaW5JdGVtLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcbiAgICAgICAgICAgIG5vU3Bpbkl0ZW0uY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYoZGVidWcpe1xuICAgICAgICAgICAgY29uc29sZS53YXJuKFwiZGVidWcgYmV0IGhpc3RvcnlcIilcbiAgICAgICAgICAgIHJldHVybjtcblxuICAgICAgICB9XG5cbiAgICAgICAgc3Bpbkl0ZW0uaW5uZXJIVE1MID1cbiAgICAgICAgICAgIGBcbiAgICAgICA8ZGl2IGNsYXNzPVwic3BpbnMtcm93LWhlYWRcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb250ZW50LWRhdGVcIiBkYXRhLXRyYW5zbGF0ZT1cIm15QmV0RGF0ZVwiPjwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRlbnQtcHJpemVcIiBkYXRhLXRyYW5zbGF0ZT1cIm15QmV0SWRcIj48L2Rpdj5cbjwhLS0gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGVudC1zdGF0dXNcIiBkYXRhLXRyYW5zbGF0ZT1cIm15QmV0U3RhdHVzXCI+PC9kaXY+LS0+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICBgO1xuICAgICAgICBzcGluSXRlbS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJyk7XG4gICAgICAgIG5vU3Bpbkl0ZW0uY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xuXG4gICAgICAgIGxldCB1cGQgPSAwO1xuXG4gICAgICAgIGJldHMuZm9yRWFjaChzcGluID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHNwaW5EYXRlID0gbmV3IERhdGUoc3Bpbi5kYXRlKTtcbiAgICAgICAgICAgIGNvbnN0IGZvcm1hdHRlZERhdGUgPSBzcGluRGF0ZS50b0xvY2FsZURhdGVTdHJpbmcoJ3VrLVVBJykuc2xpY2UoMCwgNSk7XG4gICAgICAgICAgICBjb25zdCBzdGF0dXMgPSByZXNvbHZlU3RhdHVzVHJhbnNsYXRpb24oc3Bpbi5zdGF0dXMpO1xuXG4gICAgICAgICAgICBpZiAoc3RhdHVzKSB7XG4gICAgICAgICAgICAgICAgY29uc3Qgc3BpbkVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICBzcGluRWxlbWVudC5jbGFzc0xpc3QuYWRkKCdzcGlucy1yb3ctaXRlbScpO1xuXG4gICAgICAgICAgICAgICAgY29uc3QgaXNXaW4gPSBzcGluLnN0YXR1cyA9PT0gXCJ3aW5cIjtcbiAgICAgICAgICAgICAgICBjb25zdCBzdGF0dXNDbGFzcyA9IGlzV2luID8gJ19kb25lJyA6ICcnO1xuXG4gICAgICAgICAgICAgICAgc3BpbkVsZW1lbnQuaW5uZXJIVE1MID0gYFxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImNvbnRlbnQtZGF0ZVwiPiR7Zm9ybWF0dGVkRGF0ZX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiY29udGVudC1wcml6ZVwiPiR7c3Bpbi5uYW1lfTwvc3Bhbj5cbjwhLS0gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiY29udGVudC1zdGF0dXMgJHtzdGF0dXNDbGFzc31cIj48L3NwYW4+LS0+XG4gICAgICAgICAgICAgICAgYDtcbiAgICAgICAgICAgICAgICBzcGluSXRlbS5hcHBlbmRDaGlsZChzcGluRWxlbWVudCk7XG4gICAgICAgICAgICAgICAgdXBkKys7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmICh1cGQgPT09IDApIHtcbiAgICAgICAgICAgIHNwaW5JdGVtLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcbiAgICAgICAgICAgIG5vU3Bpbkl0ZW0uY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc2V0QmV0SGlzdG9yeShzdGFnZU51bSl7XG4gICAgICAgIC8vIHJlcXVlc3QoXCIvYmV0c0hpc3RvcnlcIikudGhlbigocmVzKSA9PiB7XG4gICAgICAgIC8vICAgICBjb25zdCB1c2VyID0gcmVzLmZpbmQodXNlciA9PiB1c2VyLnVzZXJpZCA9PT0gdXNlcklkKTtcbiAgICAgICAgLy8gICAgIGNvbnN0IGJldHMgPSB1c2VyPy5iZXRzXG4gICAgICAgIC8vICAgICBkaXNwbGF5QmV0c0hpc3RvcnkoYmV0cylcbiAgICAgICAgLy8gfSlcbiAgICB9XG5cblxuICAgIGFzeW5jIGZ1bmN0aW9uIGluaXQoKSB7XG4gICAgICAgIGxldCBhdHRlbXB0cyA9IDA7XG4gICAgICAgIGNvbnN0IG1heEF0dGVtcHRzID0gMjA7XG4gICAgICAgIGNvbnN0IGF0dGVtcHRJbnRlcnZhbCA9IDUwO1xuXG4gICAgICAgIGZ1bmN0aW9uIHRyeURldGVjdFVzZXJJZCgpIHtcbiAgICAgICAgICAgIGlmICh3aW5kb3cuc3RvcmUpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBzdGF0ZSA9IHdpbmRvdy5zdG9yZS5nZXRTdGF0ZSgpO1xuICAgICAgICAgICAgICAgIHVzZXJJZCA9IHN0YXRlLmF1dGguaXNBdXRob3JpemVkICYmIHN0YXRlLmF1dGguaWQgfHwgJyc7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHdpbmRvdy5nX3VzZXJfaWQpIHtcbiAgICAgICAgICAgICAgICB1c2VySWQgPSB3aW5kb3cuZ191c2VyX2lkO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gcXVpY2tDaGVja0FuZFJlbmRlcigpIHtcbiAgICAgICAgICAgIGNoZWNrVXNlckF1dGgoKTtcblxuICAgICAgICAgICAgLy8gb3BlblBvcHVwQnlBdHRyKFwicHJpemVMYXB0b3BcIiwgdHJ1ZSlcblxuICAgICAgICAgICAgYnRuT3Blbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGluaXRTcGluKTtcblxuICAgICAgICAgICAgLy8gc2V0QmV0SGlzdG9yeSgpXG5cbiAgICAgICAgICAgIHJlbmRlclVzZXJzKGFjdGl2ZVdlZWspXG5cbiAgICAgICAgICAgIHNldFRpbWVvdXQoaGlkZUxvYWRlciwgMTAwMCk7XG5cbiAgICAgICAgICAgIFNldFNsaWRlcldpZHRoQmx1cigpXG5cbiAgICAgICAgICAgIHNldFRpbWVvdXQodHJpZ2dlclNoYWtlLCBpbml0aWFsRGVsYXkpO1xuXG4gICAgICAgICAgICBwYXJ0aWNpcGF0ZUJ0bnMuZm9yRWFjaChidG4gPT4ge1xuICAgICAgICAgICAgICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHBhcnRpY2lwYXRlKTtcbiAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wb3B1cF9fY2xvc2UnKS5mb3JFYWNoKGNsb3NlQnRuID0+IHtcbiAgICAgICAgICAgICAgICBjbG9zZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNsb3NlQWxsUG9wdXBzKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcub3Blbi1idG4nKS5mb3JFYWNoKGJ0biA9PiB7XG4gICAgICAgICAgICAgICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBwb3B1cEF0dHIgPSBidG4uZ2V0QXR0cmlidXRlKCdkYXRhLXBvcHVwJyk7XG4gICAgICAgICAgICAgICAgICAgIG9wZW5Qb3B1cEJ5QXR0cihwb3B1cEF0dHIpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wb3B1cHMnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3Qgb3BlblBvcHVwRWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucG9wdXA6bm90KC5oaWRlKScpO1xuICAgICAgICAgICAgICAgIGlmIChvcGVuUG9wdXBFbCAmJiAhb3BlblBvcHVwRWwuY29udGFpbnMoZS50YXJnZXQpKSB7XG4gICAgICAgICAgICAgICAgICAgIGNsb3NlQWxsUG9wdXBzKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG5cblxuICAgICAgICAgICAgdXBkYXRlU2xpZGVyKG51bGwsIHNsaWRlckRheUluZGV4KTtcblxuICAgICAgICAgICAgc2xpZGVyLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIGhhbmRsZVN0YXJ0KTtcbiAgICAgICAgICAgIHNsaWRlci5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBoYW5kbGVNb3ZlKTtcbiAgICAgICAgICAgIHNsaWRlci5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgaGFuZGxlRW5kKTtcbiAgICAgICAgICAgIHNsaWRlci5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgaGFuZGxlRW5kKTtcblxuICAgICAgICAgICAgc2xpZGVyLmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCBoYW5kbGVTdGFydCk7XG4gICAgICAgICAgICBzbGlkZXIuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2htb3ZlJywgaGFuZGxlTW92ZSk7XG4gICAgICAgICAgICBzbGlkZXIuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hlbmQnLCBoYW5kbGVFbmQpO1xuXG4gICAgICAgICAgICBidG5MZWZ0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gbW92ZVNsaWRlcigtMSkpO1xuICAgICAgICAgICAgYnRuUmlnaHQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBtb3ZlU2xpZGVyKDEpKTtcblxuICAgICAgICAgICAgdGFibGVUYWJzLmZvckVhY2godGFiID0+IHtcbiAgICAgICAgICAgICAgICB0YWIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBsZXQgd2Vla051bSA9IE51bWJlcih0YWIuZ2V0QXR0cmlidXRlKCdkYXRhLXdlZWsnKSk7XG4gICAgICAgICAgICAgICAgICAgIHRhYmxlVGFicy5mb3JFYWNoKHQgPT4gdC5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKSk7XG4gICAgICAgICAgICAgICAgICAgIHRhYi5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgICAgICAgICAgICAgICAgICAgcmVuZGVyVXNlcnMod2Vla051bSlcbiAgICAgICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICAvLyBkb3RzLmZvckVhY2goKGRvdCwgaW5kZXgpID0+IGRvdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IGdvVG9TbGlkZShpbmRleCkpKTtcblxuXG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCB3YWl0Rm9yVXNlcklkID0gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGludGVydmFsID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRyeURldGVjdFVzZXJJZCgpO1xuICAgICAgICAgICAgICAgIGlmICh1c2VySWQgfHwgYXR0ZW1wdHMgPj0gbWF4QXR0ZW1wdHMpIHtcbiAgICAgICAgICAgICAgICAgICAgcXVpY2tDaGVja0FuZFJlbmRlcigpO1xuICAgICAgICAgICAgICAgICAgICBjbGVhckludGVydmFsKGludGVydmFsKTtcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBhdHRlbXB0cysrO1xuICAgICAgICAgICAgfSwgYXR0ZW1wdEludGVydmFsKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgYXdhaXQgd2FpdEZvclVzZXJJZDtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBsb2FkVHJhbnNsYXRpb25zKCkge1xuICAgICAgICByZXR1cm4gcmVxdWVzdChgL25ldy10cmFuc2xhdGVzLyR7bG9jYWxlfWApXG4gICAgICAgICAgICAudGhlbihqc29uID0+IHtcbiAgICAgICAgICAgICAgICBpMThuRGF0YSA9IGpzb247XG4gICAgICAgICAgICAgICAgdHJhbnNsYXRlKCk7XG4gICAgICAgICAgICAgICAgY29uc3QgdGFyZ2V0Tm9kZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2FtQ2hpbGxcIik7XG4gICAgICAgICAgICAgICAgY29uc3QgbXV0YXRpb25PYnNlcnZlciA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKGZ1bmN0aW9uIChtdXRhdGlvbnMpIHtcbiAgICAgICAgICAgICAgICAgICAgbXV0YXRpb25PYnNlcnZlci5kaXNjb25uZWN0KCk7XG4gICAgICAgICAgICAgICAgICAgIHRyYW5zbGF0ZSgpO1xuICAgICAgICAgICAgICAgICAgICBtdXRhdGlvbk9ic2VydmVyLm9ic2VydmUodGFyZ2V0Tm9kZSwgeyBjaGlsZExpc3Q6IHRydWUsIHN1YnRyZWU6IHRydWUgfSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgbXV0YXRpb25PYnNlcnZlci5vYnNlcnZlKHRhcmdldE5vZGUsIHtcbiAgICAgICAgICAgICAgICAgICAgY2hpbGRMaXN0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBzdWJ0cmVlOiB0cnVlXG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIH0pO1xuICAgIH1cblxuXG4gICAgZnVuY3Rpb24gU2V0U2xpZGVyV2lkdGhCbHVyKCl7XG4gICAgICAgIGNvbnN0IHNsaWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jaGFsbGFuZ2VfX2N1cnJlbnQnKTtcbiAgICAgICAgY29uc3Qgc2xpZGVzID0gc2xpZGVyLnF1ZXJ5U2VsZWN0b3JBbGwoJy5jaGFsbGFuZ2VfX2N1cnJlbnQtaXRlbScpO1xuICAgICAgICBjb25zdCB0YWJzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNoYWxsYW5nZV9fdGFicy1pdGVtJyk7XG4gICAgICAgIGNvbnN0IGRvdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY2hhbGxhbmdlX19uYXYtZG90cy1pdGVtJyk7XG4gICAgICAgIGNvbnN0IGJ0bkxlZnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2hhbGxhbmdlX19uYXYtbGVmdCcpO1xuICAgICAgICBjb25zdCBidG5SaWdodCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jaGFsbGFuZ2VfX25hdi1yaWdodCcpO1xuXG4gICAgICAgIGxldCBjdXJyZW50SW5kZXggPSBjdXJyZW50RGF5TnVtYmVyIC0gMTtcblxuICAgICAgICBjb25zb2xlLmxvZyhjdXJyZW50RGF5TnVtYmVyKVxuXG4gICAgICAgIGZ1bmN0aW9uIHVwZGF0ZVNsaWRlcihpbmRleCwgZGF5SW5kZXgpIHtcbiAgICAgICAgICAgIHNsaWRlcy5mb3JFYWNoKHNsaWRlID0+IHNsaWRlLmNsYXNzTGlzdC5yZW1vdmUoJ19hY3RpdmUnKSk7XG4gICAgICAgICAgICB0YWJzLmZvckVhY2godGFiID0+IHRhYi5jbGFzc0xpc3QucmVtb3ZlKCdfYWN0aXZlJykpO1xuICAgICAgICAgICAgZG90cy5mb3JFYWNoKGRvdCA9PiBkb3QuY2xhc3NMaXN0LnJlbW92ZSgnX2FjdGl2ZScpKTtcblxuICAgICAgICAgICAgc2xpZGVzW2luZGV4XS5jbGFzc0xpc3QuYWRkKCdfYWN0aXZlJyk7XG4gICAgICAgICAgICB0YWJzW2luZGV4XS5jbGFzc0xpc3QuYWRkKCdfYWN0aXZlJyk7XG4gICAgICAgICAgICBkb3RzW2luZGV4XS5jbGFzc0xpc3QuYWRkKCdfYWN0aXZlJyk7XG5cbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHNsaWRlckRheUluZGV4KVxuXG4gICAgICAgIH1cblxuICAgICAgICB1cGRhdGVTbGlkZXIoY3VycmVudERheU51bWJlciAtIDEsIHNsaWRlckRheUluZGV4KTtcbiAgICAgICAgdGFicy5mb3JFYWNoKCh0YWIsIGkpID0+e1xuICAgICAgICAgICAgaWYoaSArIDEgPD0gY3VycmVudERheU51bWJlcil7XG4gICAgICAgICAgICAgICAgdGFiLmNsYXNzTGlzdC5hZGQoJ19vcGVuJyk7XG4gICAgICAgICAgICAgICAgdGFiLmNsYXNzTGlzdC5yZW1vdmUoJ19sb2NrJyk7XG5cbiAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgIHRhYi5jbGFzc0xpc3QucmVtb3ZlKCdfYWN0aXZlJyk7XG4gICAgICAgICAgICAgICAgdGFiLmNsYXNzTGlzdC5hZGQoJ19sb2NrJyk7XG4gICAgICAgICAgICAgICAgdGFiLmNsYXNzTGlzdC5yZW1vdmUoJ19vcGVuJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZihpICsgMSA9PT0gY3VycmVudERheU51bWJlcil7XG4gICAgICAgICAgICAgICAgdGFiLmNsYXNzTGlzdC5hZGQoJ19hY3RpdmUnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSApO1xuXG4gICAgICAgIGZ1bmN0aW9uIG1vdmVMZWZ0KCkge1xuICAgICAgICAgICAgY3VycmVudEluZGV4ID0gKGN1cnJlbnRJbmRleCAtIDEgKyBzbGlkZXMubGVuZ3RoKSAlIHNsaWRlcy5sZW5ndGg7XG4gICAgICAgICAgICBzbGlkZXJEYXlJbmRleCA9IGN1cnJlbnRJbmRleFxuICAgICAgICAgICAgdXBkYXRlU2xpZGVyKGN1cnJlbnRJbmRleCAsIHNsaWRlckRheUluZGV4KTtcbiAgICAgICAgICAgIHJlcXVlc3QoYC9mYXZ1c2VyLyR7dXNlcklkfWApLnRoZW4odXNlciA9PiB7XG4gICAgICAgICAgICAgICAgc2V0VXNlclByb2dyZXNzKHVzZXIsIGdldFNsaWRlTnVtRm9yRGF5cyhjdXJyZW50SW5kZXggKyAxKSlcbiAgICAgICAgICAgICAgICBkaXNwbGF5QmV0c0hpc3RvcnkodXNlci5zcGlucylcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBtb3ZlUmlnaHQoKSB7XG4gICAgICAgICAgICBjdXJyZW50SW5kZXggPSAoY3VycmVudEluZGV4ICsgMSkgJSBzbGlkZXMubGVuZ3RoO1xuICAgICAgICAgICAgc2xpZGVyRGF5SW5kZXggPSBjdXJyZW50SW5kZXhcbiAgICAgICAgICAgIHVwZGF0ZVNsaWRlcihjdXJyZW50SW5kZXgsIHNsaWRlckRheUluZGV4KTtcbiAgICAgICAgICAgIHJlcXVlc3QoYC9mYXZ1c2VyLyR7dXNlcklkfWApLnRoZW4odXNlciA9PiB7XG4gICAgICAgICAgICAgICAgc2V0VXNlclByb2dyZXNzKHVzZXIsIGdldFNsaWRlTnVtRm9yRGF5cyhjdXJyZW50SW5kZXggKyAxKSlcbiAgICAgICAgICAgICAgICBkaXNwbGF5QmV0c0hpc3RvcnkodXNlci5zcGlucylcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cblxuICAgICAgICBidG5MZWZ0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgbW92ZUxlZnQpO1xuICAgICAgICBidG5SaWdodC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIG1vdmVSaWdodCk7XG5cbiAgICAgICAgdGFicy5mb3JFYWNoKCh0YWIsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICB0YWIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgY3VycmVudEluZGV4ID0gaW5kZXg7XG4gICAgICAgICAgICAgICAgc2xpZGVyRGF5SW5kZXggPSBpbmRleFxuICAgICAgICAgICAgICAgIHVwZGF0ZVNsaWRlcihjdXJyZW50SW5kZXgsIHNsaWRlckRheUluZGV4KTtcbiAgICAgICAgICAgICAgICByZXF1ZXN0KGAvZmF2dXNlci8ke3VzZXJJZH1gKS50aGVuKHVzZXIgPT4ge1xuICAgICAgICAgICAgICAgICAgICBzZXRVc2VyUHJvZ3Jlc3ModXNlciwgZ2V0U2xpZGVOdW1Gb3JEYXlzKGN1cnJlbnRJbmRleCArIDEpKVxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5QmV0c0hpc3RvcnkodXNlci5zcGlucylcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGRvdHMuZm9yRWFjaCgoZG90LCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgZG90LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgIGN1cnJlbnRJbmRleCA9IGluZGV4O1xuICAgICAgICAgICAgICAgIHVwZGF0ZVNsaWRlcihjdXJyZW50SW5kZXgsIHNsaWRlckRheUluZGV4KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcblxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNoZWNrVXNlckF1dGgoKSB7XG4gICAgICAgIGNvbnN0IGxvYWRUaW1lID0gMjAwO1xuICAgICAgICByZXF1ZXN0KGAvZmF2dXNlci8ke3VzZXJJZH1gKS50aGVuKCh1c2VyKSA9PiB7XG5cbiAgICAgICAgICAgIGRpc3BsYXlCZXRzSGlzdG9yeSh1c2VyLnNwaW5zKVxuXG4gICAgICAgICAgICBsYXN0VXBkQmxvY2sudGV4dENvbnRlbnQgPSB1c2VyLmxhc3RVcGRhdGUgPyBmb3JtYXREYXRlVGltZUN1c3RvbSh1c2VyLmxhc3RVcGRhdGUpIDogXCItLTotLVwiXG5cbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHNob3dFbGVtZW50cyA9IChlbGVtZW50cykgPT4gZWxlbWVudHMuZm9yRWFjaChlbCA9PiBlbC5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJykpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGhpZGVFbGVtZW50cyA9IChlbGVtZW50cykgPT4gZWxlbWVudHMuZm9yRWFjaChlbCA9PiBlbC5jbGFzc0xpc3QuYWRkKCdoaWRlJykpO1xuXG4gICAgICAgICAgICAgICAgZHJvcFNwaW5zLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcbiAgICAgICAgICAgICAgICBjaGFsbGFuZ2VCdG5Qb2ludGVyLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcblxuXG4gICAgICAgICAgICAgICAgaWYgKCF1c2VySWQpIHtcbiAgICAgICAgICAgICAgICAgICAgaGlkZUVsZW1lbnRzKHBhcnRpY2lwYXRlQnRucyk7XG4gICAgICAgICAgICAgICAgICAgIGhpZGVFbGVtZW50cyhyZWRpcmVjdEJ0bnMpO1xuICAgICAgICAgICAgICAgICAgICBzaG93RWxlbWVudHModW5hdXRoTXNncyk7XG4gICAgICAgICAgICAgICAgICAgIGhpZGVMb2FkZXIoKTtcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudENhcmRzV3JhcC5jbGFzc0xpc3QuYWRkKCdfdW5hdXRoJyk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoZmFsc2UpO1xuICAgICAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgICAgICBjdXJyZW50Q2FyZHNXcmFwLmNsYXNzTGlzdC5yZW1vdmUoJ191bmF1dGgnKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBoaWRlRWxlbWVudHModW5hdXRoTXNncyk7XG5cbiAgICAgICAgICAgICAgICBpZiAodXNlci51c2VyaWQpIHtcbiAgICAgICAgICAgICAgICAgICAgaGlkZUVsZW1lbnRzKHBhcnRpY2lwYXRlQnRucyk7XG4gICAgICAgICAgICAgICAgICAgIHNob3dFbGVtZW50cyhyZWRpcmVjdEJ0bnMpO1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5QmV0c0hpc3RvcnkodXNlci5zcGlucylcbiAgICAgICAgICAgICAgICAgICAgc2V0VXNlclByb2dyZXNzKHVzZXIsIGFjdGl2ZURheUluV2Vla051bWJlcik7XG4gICAgICAgICAgICAgICAgICAgIC8vIGNoYWxsYW5nZUJ0blBvaW50ZXIuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpO1xuICAgICAgICAgICAgICAgICAgICBkcm9wU3BpbnMuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHNob3dFbGVtZW50cyhwYXJ0aWNpcGF0ZUJ0bnMpO1xuICAgICAgICAgICAgICAgICAgICBoaWRlRWxlbWVudHMocmVkaXJlY3RCdG5zKTtcbiAgICAgICAgICAgICAgICB9XG5cblxuXG5cbiAgICAgICAgICAgICAgICBoaWRlTG9hZGVyKCk7XG5cblxuXG5cblxuICAgICAgICAgICAgfSwgbG9hZFRpbWUpXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVwb3J0RXJyb3IoZXJyKSB7XG4gICAgICAgIGNvbnN0IHJlcG9ydERhdGEgPSB7XG4gICAgICAgICAgICBvcmlnaW46IHdpbmRvdy5sb2NhdGlvbi5ocmVmLFxuICAgICAgICAgICAgdXNlcmlkOiB1c2VySWQsXG4gICAgICAgICAgICBlcnJvclRleHQ6IGVycj8uZXJyb3IgfHwgZXJyPy50ZXh0IHx8IGVycj8ubWVzc2FnZSB8fCAnVW5rbm93biBlcnJvcicsXG4gICAgICAgICAgICB0eXBlOiBlcnI/Lm5hbWUgfHwgJ1Vua25vd25FcnJvcicsXG4gICAgICAgICAgICBzdGFjazogZXJyPy5zdGFjayB8fCAnJ1xuICAgICAgICB9O1xuXG4gICAgICAgIGZldGNoKCdodHRwczovL2Zhdi1wcm9tLmNvbS9hcGktY21zL3JlcG9ydHMvYWRkJywge1xuICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHJlcG9ydERhdGEpXG4gICAgICAgIH0pLmNhdGNoKGNvbnNvbGUud2Fybik7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gdHJhbnNsYXRlKCkge1xuICAgICAgICBjb25zdCBlbGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLXRyYW5zbGF0ZV0nKVxuICAgICAgICBpZiAoZWxlbXMgJiYgZWxlbXMubGVuZ3RoKSB7XG4gICAgICAgICAgICBpZih0cmFuc2xhdGVTdGF0ZSl7XG4gICAgICAgICAgICAgICAgZWxlbXMuZm9yRWFjaChlbGVtID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qga2V5ID0gZWxlbS5nZXRBdHRyaWJ1dGUoJ2RhdGEtdHJhbnNsYXRlJyk7XG4gICAgICAgICAgICAgICAgICAgIGVsZW0uaW5uZXJIVE1MID0gaTE4bkRhdGFba2V5XSB8fCAnKi0tLS1ORUVEIFRPIEJFIFRSQU5TTEFURUQtLS0tKiAgIGtleTogICcgKyBrZXk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChpMThuRGF0YVtrZXldKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlbGVtLnJlbW92ZUF0dHJpYnV0ZSgnZGF0YS10cmFuc2xhdGUnKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInRyYW5zbGF0aW9uIHdvcmtzIVwiKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJlZnJlc2hMb2NhbGl6ZWRDbGFzcyhtYWluUGFnZSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVmcmVzaExvY2FsaXplZENsYXNzKGVsZW1lbnQpIHtcbiAgICAgICAgaWYgKCFlbGVtZW50KSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgZm9yIChjb25zdCBsYW5nIG9mIFsndWsnLCAnZW4nXSkge1xuICAgICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKGxhbmcpO1xuICAgICAgICB9XG4gICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChsb2NhbGUpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJlbmRlclVzZXJzKHdlZWspIHtcbiAgICAgICAgcmVxdWVzdChgL3VzZXJzLyR7d2Vla31gKVxuICAgICAgICAgICAgLnRoZW4oZGF0YSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgdXNlcnMgPSBkYXRhO1xuICAgICAgICAgICAgICAgIHBvcHVsYXRlVXNlcnNUYWJsZSh1c2VycywgdXNlcklkLCB3ZWVrKTtcbiAgICAgICAgICAgIH0pO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHBvcHVsYXRlVXNlcnNUYWJsZSh1c2VycywgY3VycmVudFVzZXJJZCwgd2Vlaykge1xuICAgICAgICBjb25zb2xlLmxvZyh1c2Vycyk7XG4gICAgICAgIHJlc3VsdHNUYWJsZS5pbm5lckhUTUwgPSAnJztcbiAgICAgICAgcmVzdWx0c1RhYmxlT3RoZXIuaW5uZXJIVE1MID0gJyc7XG4gICAgICAgIGlmICghdXNlcnM/Lmxlbmd0aCkgcmV0dXJuO1xuICAgICAgICBjb25zdCBjdXJyZW50VXNlciA9IHVzZXJzLmZpbmQodXNlciA9PiB1c2VyLnVzZXJpZCA9PT0gY3VycmVudFVzZXJJZCk7XG4gICAgICAgIGNvbnN0IGlzVG9wQ3VycmVudFVzZXIgPSBjdXJyZW50VXNlciAmJiB1c2Vycy5zbGljZSgwLCAxMCkuc29tZSh1c2VyID0+IHVzZXIudXNlcmlkID09PSBjdXJyZW50VXNlcklkKTtcbiAgICAgICAgY29uc3QgdG9wVXNlcnNMZW5ndGggPSAhdXNlcklkIHx8IGlzVG9wQ3VycmVudFVzZXIgID8gMTMgOiAxMDtcbiAgICAgICAgY29uc3QgdG9wVXNlcnMgPSB1c2Vycy5zbGljZSgwLCB0b3BVc2Vyc0xlbmd0aCk7XG4gICAgICAgIHRvcFVzZXJzLmZvckVhY2godXNlciA9PiB7XG4gICAgICAgICAgICByZXN1bHRzVGFibGVPdGhlci5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XG4gICAgICAgICAgICBkaXNwbGF5VXNlcih1c2VyLCB1c2VyLnVzZXJpZCA9PT0gY3VycmVudFVzZXJJZCwgcmVzdWx0c1RhYmxlLCB0b3BVc2VycywgaXNUb3BDdXJyZW50VXNlciwgd2Vlayk7XG4gICAgICAgIH0pO1xuICAgICAgICBpZiAoIWlzVG9wQ3VycmVudFVzZXIgJiYgY3VycmVudFVzZXIpIHtcbiAgICAgICAgICAgIHJlc3VsdHNUYWJsZU90aGVyLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKTtcbiAgICAgICAgICAgIGRpc3BsYXlVc2VyKGN1cnJlbnRVc2VyLCB0cnVlLCByZXN1bHRzVGFibGVPdGhlciwgdXNlcnMsIGZhbHNlLCB3ZWVrKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGRpc3BsYXlVc2VyKHVzZXIsIGlzQ3VycmVudFVzZXIsIHRhYmxlLCB1c2VycywgaXNUb3BDdXJyZW50VXNlciwgd2Vlaykge1xuICAgICAgICBjb25zdCByZW5kZXJSb3cgPSAodXNlckRhdGEsIG9wdGlvbnMgPSB7fSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgeyBoaWdobGlnaHQgPSBmYWxzZSwgbmVpZ2hib3IgPSBmYWxzZSB9ID0gb3B0aW9ucztcbiAgICAgICAgICAgIGNvbnN0IHVzZXJSb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIHVzZXJSb3cuY2xhc3NMaXN0LmFkZCgndGFibGVfX3JvdycpO1xuXG4gICAgICAgICAgICBjb25zdCB1c2VyUGxhY2UgPSB1c2Vycy5pbmRleE9mKHVzZXJEYXRhKSArIDE7XG4gICAgICAgICAgICAvLyBjb25zdCB1c2VyUGxhY2UgPSAzNVxuICAgICAgICAgICAgY29uc3QgcHJpemVLZXkgPSBkZWJ1ZyA/IG51bGwgOiBnZXRQcml6ZVRyYW5zbGF0aW9uS2V5KHVzZXJQbGFjZSwgd2Vlayk7XG5cbiAgICAgICAgICAgIGlmICh1c2VyUGxhY2UgPD0gMykge1xuICAgICAgICAgICAgICAgIHVzZXJSb3cuY2xhc3NMaXN0LmFkZChgcGxhY2Uke3VzZXJQbGFjZX1gKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGhpZ2hsaWdodCB8fCBpc0N1cnJlbnRVc2VyICYmICFuZWlnaGJvcikge1xuICAgICAgICAgICAgICAgIHVzZXJSb3cuY2xhc3NMaXN0LmFkZCgneW91Jyk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKG5laWdoYm9yKSB7XG4gICAgICAgICAgICAgICAgdXNlclJvdy5jbGFzc0xpc3QuYWRkKCdfbmVpZ2hib3InKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdXNlclJvdy5pbm5lckhUTUwgPSBgXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGFibGVfX3Jvdy1pdGVtXCI+XG4gICAgICAgICAgICAgICAgJHt1c2VyUGxhY2UgPCAxMCA/ICcwJyArIHVzZXJQbGFjZSA6IHVzZXJQbGFjZX1cbiAgICAgICAgICAgICAgICAke2lzQ3VycmVudFVzZXIgJiYgIW5laWdoYm9yID8gJzxzcGFuIGNsYXNzPVwieW91XCI+JyArIHRyYW5zbGF0ZUtleShcInlvdVwiKSArICc8L3NwYW4+JyA6ICcnfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGFibGVfX3Jvdy1pdGVtXCI+XG4gICAgICAgICAgICAgICAgJHtpc0N1cnJlbnRVc2VyICYmICFuZWlnaGJvciA/IHVzZXJEYXRhLnVzZXJpZCA6IG1hc2tVc2VySWQodXNlckRhdGEudXNlcmlkKX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRhYmxlX19yb3ctaXRlbVwiPlxuICAgICAgICAgICAgICAgICR7dXNlckRhdGEucG9pbnRzV2Vla31cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRhYmxlX19yb3ctaXRlbVwiPlxuICAgICAgICAgICAgICAgICR7cHJpemVLZXkgPyB0cmFuc2xhdGVLZXkocHJpemVLZXkpIDogJyAtICd9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0YWJsZV9fcm93LWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAke3ByaXplS2V5ID8gZ2V0V2FnZXJCeVBsYWNlKHVzZXJQbGFjZSkgOiAnIC0gJ31cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICBgO1xuXG4gICAgICAgICAgICB0YWJsZS5hcHBlbmQodXNlclJvdyk7XG4gICAgICAgIH07XG4gICAgICAgIGlmIChpc0N1cnJlbnRVc2VyICYmICFpc1RvcEN1cnJlbnRVc2VyKSB7XG4gICAgICAgICAgICBjb25zdCBpbmRleCA9IHVzZXJzLmluZGV4T2YodXNlcik7XG4gICAgICAgICAgICBpZiAodXNlcnNbaW5kZXggLSAxXSkge1xuICAgICAgICAgICAgICAgIHJlbmRlclJvdyh1c2Vyc1tpbmRleCAtIDFdLCB7IG5laWdoYm9yOiB0cnVlIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmVuZGVyUm93KHVzZXIsIHsgaGlnaGxpZ2h0OiB0cnVlIH0pO1xuICAgICAgICAgICAgaWYgKHVzZXJzW2luZGV4ICsgMV0pIHtcbiAgICAgICAgICAgICAgICByZW5kZXJSb3codXNlcnNbaW5kZXggKyAxXSwgeyBuZWlnaGJvcjogdHJ1ZSB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJlbmRlclJvdyh1c2VyKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHRyYW5zbGF0ZUtleShrZXksIGRlZmF1bHRWYWx1ZSkge1xuICAgICAgICBpZiAoIWtleSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGxldCBuZWVkS2V5ID0gZGVidWcgPyBrZXkgOiBgKi0tLS1ORUVEIFRPIEJFIFRSQU5TTEFURUQtLS0tKiBrZXk6ICR7a2V5fWBcblxuICAgICAgICBkZWZhdWx0VmFsdWUgPSAgbmVlZEtleSB8fCBrZXk7XG4gICAgICAgIHJldHVybiBpMThuRGF0YVtrZXldIHx8IGRlZmF1bHRWYWx1ZTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBtYXNrVXNlcklkKHVzZXJJZCkge1xuICAgICAgICByZXR1cm4gXCIqKlwiICsgdXNlcklkLnRvU3RyaW5nKCkuc2xpY2UoMik7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0UHJpemVUcmFuc2xhdGlvbktleShwbGFjZSkge1xuICAgICAgICBpZiAocGxhY2UgPj0gMSAmJiBwbGFjZSA8PSAxMCkgcmV0dXJuIGBwcml6ZV8ke3BsYWNlfWA7XG4gICAgICAgIGlmIChwbGFjZSA+PSAxMSAmJiBwbGFjZSA8PSAyMCkgcmV0dXJuICdwcml6ZV8xMS0yMCc7XG4gICAgICAgIGlmIChwbGFjZSA+PSAyMSAmJiBwbGFjZSA8PSAzMCkgcmV0dXJuICdwcml6ZV8yMS0zMCc7XG4gICAgICAgIGlmIChwbGFjZSA+PSAzMSAmJiBwbGFjZSA8PSA0MCkgcmV0dXJuICdwcml6ZV8zMS00MCc7XG4gICAgICAgIGlmIChwbGFjZSA+PSA0MSAmJiBwbGFjZSA8PSA1MCkgcmV0dXJuICdwcml6ZV80MS01MCc7XG4gICAgICAgIGlmIChwbGFjZSA+PSA1MSAmJiBwbGFjZSA8PSA3MCkgcmV0dXJuICdwcml6ZV81MS03MCc7XG4gICAgICAgIGlmIChwbGFjZSA+PSA3MSAmJiBwbGFjZSA8PSAxMDApIHJldHVybiAncHJpemVfNzEtMTAwJztcbiAgICAgICAgaWYgKHBsYWNlID49IDEwMSAmJiBwbGFjZSA8PSAxNTApIHJldHVybiAncHJpemVfMTAxLTE1MCc7XG4gICAgICAgIGlmIChwbGFjZSA+PSAxNTEgJiYgcGxhY2UgPD0gMjAwKSByZXR1cm4gJ3ByaXplXzE1MS0yMDAnO1xuICAgICAgICBpZiAocGxhY2UgPj0gMjAxICYmIHBsYWNlIDw9IDI1MCkgcmV0dXJuICdwcml6ZV8yMDEtMjUwJztcbiAgICAgICAgaWYgKHBsYWNlID49IDI1MSAmJiBwbGFjZSA8PSAzMDApIHJldHVybiAncHJpemVfMjUxLTMwMCc7XG4gICAgICAgIGlmIChwbGFjZSA+PSAzMDEgJiYgcGxhY2UgPD0gMzUwKSByZXR1cm4gJ3ByaXplXzMwMS0zNTAnO1xuICAgICAgICBpZiAocGxhY2UgPj0gMzUxICYmIHBsYWNlIDw9IDQwMCkgcmV0dXJuICdwcml6ZV8zNTEtNDAwJztcbiAgICAgICAgaWYgKHBsYWNlID49IDQwMSAmJiBwbGFjZSA8PSA0NTApIHJldHVybiAncHJpemVfNDAxLTQ1MCc7XG4gICAgICAgIGlmIChwbGFjZSA+PSA0NTEgJiYgcGxhY2UgPD0gNTAwKSByZXR1cm4gJ3ByaXplXzQ1MS01MDAnO1xuICAgICAgICBpZiAocGxhY2UgPj0gNTAxICYmIHBsYWNlIDw9IDU1MCkgcmV0dXJuICdwcml6ZV81MDEtNTUwJztcbiAgICAgICAgaWYgKHBsYWNlID49IDU1MSAmJiBwbGFjZSA8PSA2NTApIHJldHVybiAncHJpemVfNTUxLTY1MCc7XG4gICAgICAgIGlmIChwbGFjZSA+PSA2NTEgJiYgcGxhY2UgPD0gNzUwKSByZXR1cm4gJ3ByaXplXzY1MS03NTAnO1xuICAgICAgICBpZiAocGxhY2UgPj0gNzUxICYmIHBsYWNlIDw9IDg1MCkgcmV0dXJuICdwcml6ZV83NTEtODUwJztcbiAgICAgICAgaWYgKHBsYWNlID49IDg1MSAmJiBwbGFjZSA8PSA5NTApIHJldHVybiAncHJpemVfODUxLTk1MCc7XG4gICAgICAgIGlmIChwbGFjZSA+PSA5NTEgJiYgcGxhY2UgPD0gMTAwMCkgcmV0dXJuICdwcml6ZV85NTEtMTAwMCc7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldFdhZ2VyQnlQbGFjZShwbGFjZSkge1xuICAgICAgICBpZiAocGxhY2UgPj0gMSAmJiBwbGFjZSA8PSAxMCkgcmV0dXJuICctJztcbiAgICAgICAgaWYgKHBsYWNlID49IDExICYmIHBsYWNlIDw9IDIwKSByZXR1cm4gJ9GFMSc7XG4gICAgICAgIGlmIChwbGFjZSA+PSAyMSAmJiBwbGFjZSA8PSAzMCkgcmV0dXJuICfRhTEnO1xuICAgICAgICBpZiAocGxhY2UgPj0gMzEgJiYgcGxhY2UgPD0gNDApIHJldHVybiAn0YUyJztcbiAgICAgICAgaWYgKHBsYWNlID49IDQxICYmIHBsYWNlIDw9IDUwKSByZXR1cm4gJ9GFMic7XG4gICAgICAgIGlmIChwbGFjZSA+PSA1MSAmJiBwbGFjZSA8PSA3MCkgcmV0dXJuICfRhTMnO1xuICAgICAgICBpZiAocGxhY2UgPj0gNzEgJiYgcGxhY2UgPD0gMTAwKSByZXR1cm4gJ9GFMyc7XG4gICAgICAgIGlmIChwbGFjZSA+PSAxMDEgJiYgcGxhY2UgPD0gMTUwKSByZXR1cm4gJ9GFNCc7XG4gICAgICAgIGlmIChwbGFjZSA+PSAxNTEgJiYgcGxhY2UgPD0gMjAwKSByZXR1cm4gJ9GFNCc7XG4gICAgICAgIGlmIChwbGFjZSA+PSAyMDEgJiYgcGxhY2UgPD0gMjUwKSByZXR1cm4gJ9GFNSc7XG4gICAgICAgIGlmIChwbGFjZSA+PSAyNTEgJiYgcGxhY2UgPD0gMzAwKSByZXR1cm4gJ9GFNSc7XG4gICAgICAgIGlmIChwbGFjZSA+PSAzMDEgJiYgcGxhY2UgPD0gMzUwKSByZXR1cm4gJ9GFNic7XG4gICAgICAgIGlmIChwbGFjZSA+PSAzNTEgJiYgcGxhY2UgPD0gNDAwKSByZXR1cm4gJ9GFNyc7XG4gICAgICAgIGlmIChwbGFjZSA+PSA0MDEgJiYgcGxhY2UgPD0gNDUwKSByZXR1cm4gJ9GFOCc7XG4gICAgICAgIGlmIChwbGFjZSA+PSA0NTEgJiYgcGxhY2UgPD0gNTAwKSByZXR1cm4gJ9GFOSc7XG4gICAgICAgIGlmIChwbGFjZSA+PSA1MDEgJiYgcGxhY2UgPD0gNTUwKSByZXR1cm4gJ9GFMTAnO1xuICAgICAgICBpZiAocGxhY2UgPj0gNTUxICYmIHBsYWNlIDw9IDEwMDApIHJldHVybiAnLSc7XG4gICAgICAgIHJldHVybiBcIi1cIjtcbiAgICB9XG5cblxuXG4gICAgZnVuY3Rpb24gcGFydGljaXBhdGUoKSB7XG4gICAgICAgIGlmICghdXNlcklkKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgcGFyYW1zID0geyB1c2VyaWQ6IHVzZXJJZCB9O1xuICAgICAgICBmZXRjaChhcGlVUkwgKyAnL3VzZXIvJywge1xuICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICdBY2NlcHQnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkocGFyYW1zKVxuICAgICAgICB9KS50aGVuKHJlcyA9PiByZXMuanNvbigpKVxuICAgICAgICAgICAgLnRoZW4ocmVzID0+IHtcbiAgICAgICAgICAgICAgICBsb2FkZXJCdG4gPSB0cnVlXG4gICAgICAgICAgICAgICAgdG9nZ2xlQ2xhc3NlcyhwYXJ0aWNpcGF0ZUJ0bnMsIFwibG9hZGVyXCIpXG4gICAgICAgICAgICAgICAgdG9nZ2xlVHJhbnNsYXRlcyhwYXJ0aWNpcGF0ZUJ0bnMsIFwibG9hZGVyXCIpXG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PntcbiAgICAgICAgICAgICAgICAgICAgdG9nZ2xlVHJhbnNsYXRlcyhwYXJ0aWNpcGF0ZUJ0bnMsIFwibG9hZGVyX3JlYWR5XCIpXG4gICAgICAgICAgICAgICAgICAgIHRvZ2dsZUNsYXNzZXMocGFydGljaXBhdGVCdG5zLCBcImRvbmVcIilcbiAgICAgICAgICAgICAgICAgICAgdG9nZ2xlQ2xhc3NlcyhwYXJ0aWNpcGF0ZUJ0bnMsIFwibG9hZGVyXCIpXG4gICAgICAgICAgICAgICAgfSwgNTAwKVxuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCk9PntcbiAgICAgICAgICAgICAgICAgICAgY2hlY2tVc2VyQXV0aCgpXG4gICAgICAgICAgICAgICAgICAgIHJlbmRlclVzZXJzKGFjdGl2ZVdlZWspXG4gICAgICAgICAgICAgICAgICAgIHRhYmxlVGFicy5mb3JFYWNoKCh0YWIsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZihpbmRleCArIDEgPT09IGFjdGl2ZVdlZWspe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhYi5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhYi5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB9LCAxMDAwKVxuXG4gICAgICAgICAgICB9KTtcbiAgICB9XG4gICAgZnVuY3Rpb24gdXBkYXRlU2xpZGVyKCkge1xuICAgICAgICBpdGVtcy5mb3JFYWNoKChpdGVtLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgZGlzdGFuY2UgPSBpbmRleCAtIGN1cnJlbnRJbmRleDtcbiAgICAgICAgICAgIGxldCBuZXdQb3NpdGlvbiA9IGRpc3RhbmNlICogMTA1O1xuXG4gICAgICAgICAgICBpZiAoZGlzdGFuY2UgPiB0b3RhbEl0ZW1zIC8gMikge1xuICAgICAgICAgICAgICAgIG5ld1Bvc2l0aW9uIC09IHRvdGFsSXRlbXMgKiAxMDU7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGRpc3RhbmNlIDwgLXRvdGFsSXRlbXMgLyAyKSB7XG4gICAgICAgICAgICAgICAgbmV3UG9zaXRpb24gKz0gdG90YWxJdGVtcyAqIDEwNTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29uc3Qgc2NhbGUgPSBpbmRleCA9PT0gY3VycmVudEluZGV4ID8gMSA6IDE7XG5cbiAgICAgICAgICAgIGl0ZW0uc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZVgoJHtuZXdQb3NpdGlvbn0lKSBzY2FsZSgke3NjYWxlfSlgO1xuICAgICAgICAgICAgaXRlbS5zdHlsZS56SW5kZXggPSBpbmRleCA9PT0gY3VycmVudEluZGV4ID8gMiA6IDE7XG5cbiAgICAgICAgICAgIGNvbnN0IGlzVmlzaWJsZSA9IE1hdGguYWJzKGRpc3RhbmNlKSA8PSAxIHx8XG4gICAgICAgICAgICAgICAgKGluZGV4ID09PSAwICYmIGN1cnJlbnRJbmRleCA9PT0gdG90YWxJdGVtcyAtIDEpIHx8XG4gICAgICAgICAgICAgICAgKGluZGV4ID09PSB0b3RhbEl0ZW1zIC0gMSAmJiBjdXJyZW50SW5kZXggPT09IDApO1xuXG4gICAgICAgICAgICBpdGVtLmNsYXNzTGlzdC50b2dnbGUoJ2hpZGRlbicsICFpc1Zpc2libGUpO1xuICAgICAgICAgICAgaXRlbS5jbGFzc0xpc3QudG9nZ2xlKCdhY3RpdmUnLCBpbmRleCA9PT0gY3VycmVudEluZGV4KTtcblxuICAgICAgICAgICAgaXRlbS5jbGFzc0xpc3QucmVtb3ZlKCdsZWZ0LXNsaWRlJywgJ3JpZ2h0LXNsaWRlJyk7XG4gICAgICAgICAgICBpZiAoZGlzdGFuY2UgPT09IDEgfHwgKGN1cnJlbnRJbmRleCA9PT0gdG90YWxJdGVtcyAtIDEgJiYgaW5kZXggPT09IDApKSB7XG4gICAgICAgICAgICAgICAgaXRlbS5jbGFzc0xpc3QuYWRkKCdyaWdodC1zbGlkZScpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChkaXN0YW5jZSA9PT0gLTEgfHwgKGN1cnJlbnRJbmRleCA9PT0gMCAmJiBpbmRleCA9PT0gdG90YWxJdGVtcyAtIDEpKSB7XG4gICAgICAgICAgICAgICAgaXRlbS5jbGFzc0xpc3QuYWRkKCdsZWZ0LXNsaWRlJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGRvdHMuZm9yRWFjaChkb3QgPT4gZG90LmNsYXNzTGlzdC5yZW1vdmUoJ19hY3RpdmUnKSk7XG4gICAgICAgIGlmIChkb3RzW2N1cnJlbnRJbmRleF0pIHtcbiAgICAgICAgICAgIGRvdHNbY3VycmVudEluZGV4XS5jbGFzc0xpc3QuYWRkKCdfYWN0aXZlJyk7XG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIGZ1bmN0aW9uIG1vdmVTbGlkZXIob2Zmc2V0KSB7XG4gICAgICAgIGN1cnJlbnRJbmRleCA9IChjdXJyZW50SW5kZXggKyBvZmZzZXQgKyB0b3RhbEl0ZW1zKSAlIHRvdGFsSXRlbXM7XG4gICAgICAgIHVwZGF0ZVNsaWRlcigpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdvVG9TbGlkZShpbmRleCkge1xuICAgICAgICBjdXJyZW50SW5kZXggPSBpbmRleDtcbiAgICAgICAgdXBkYXRlU2xpZGVyKCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaGFuZGxlU3RhcnQoZXZlbnQpIHtcbiAgICAgICAgaXNEcmFnZ2luZyA9IHRydWU7XG4gICAgICAgIHN0YXJ0WCA9IGV2ZW50LmNsaWVudFggfHwgZXZlbnQudG91Y2hlc1swXS5jbGllbnRYO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGhhbmRsZU1vdmUoZXZlbnQpIHtcbiAgICAgICAgaWYgKCFpc0RyYWdnaW5nKSByZXR1cm47XG4gICAgICAgIGNvbnN0IGN1cnJlbnRYID0gZXZlbnQuY2xpZW50WCB8fCBldmVudC50b3VjaGVzWzBdLmNsaWVudFg7XG4gICAgICAgIGNvbnN0IGRpZmZYID0gY3VycmVudFggLSBzdGFydFg7XG5cbiAgICAgICAgaWYgKE1hdGguYWJzKGRpZmZYKSA+IDUwKSB7XG4gICAgICAgICAgICBtb3ZlU2xpZGVyKGRpZmZYID4gMCA/IC0xIDogMSk7XG4gICAgICAgICAgICBpc0RyYWdnaW5nID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBoYW5kbGVFbmQoKSB7XG4gICAgICAgIGlzRHJhZ2dpbmcgPSBmYWxzZTtcbiAgICB9XG5cbiAgICAvLyBmdW5jdGlvbiBvcGVuUG9wdXBCeUF0dHIocG9wdXBBdHRyLCBpc1Nob3dQcm9ncmVzcyA9IGZhbHNlKSB7XG4gICAgLy8gICAgIGNvbnN0IGFsbFBvcHVwcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wb3B1cCcpO1xuICAgIC8vICAgICBhbGxQb3B1cHMuZm9yRWFjaChwID0+IHAuY2xhc3NMaXN0LmFkZCgnaGlkZScpKTtcbiAgICAvLyAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvdyA9ICdoaWRkZW4nO1xuICAgIC8vXG4gICAgLy8gICAgIGNvbnN0IHRhcmdldFBvcHVwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLnBvcHVwW2RhdGEtcG9wdXA9XCIke3BvcHVwQXR0cn1cIl1gKTtcbiAgICAvLyAgICAgaWYgKHRhcmdldFBvcHVwKSB7XG4gICAgLy8gICAgICAgICB0YXJnZXRQb3B1cC5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJyk7XG4gICAgLy8gICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucG9wdXBzJykuY2xhc3NMaXN0LnJlbW92ZSgnb3BhY2l0eS1vdmVybGF5Jyk7XG4gICAgLy8gICAgIH1cbiAgICAvL1xuICAgIC8vICAgICBjb25zdCBwcm9ncmVzcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wb3B1cHMgLnByb2dyZXNzJyk7XG4gICAgLy8gICAgIGlmIChwcm9ncmVzcykge1xuICAgIC8vICAgICAgICAgcHJvZ3Jlc3MuY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZScsICFpc1Nob3dQcm9ncmVzcyk7XG4gICAgLy8gICAgIH1cbiAgICAvLyB9XG5cblxuICAgIGZ1bmN0aW9uIGNsb3NlQWxsUG9wdXBzKCkge1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucG9wdXAnKS5mb3JFYWNoKHAgPT4gcC5jbGFzc0xpc3QuYWRkKCdoaWRlJykpO1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucG9wdXBzIC5wcm9ncmVzcycpLmZvckVhY2gocCA9PiBwLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKSk7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wb3B1cHMnKS5jbGFzc0xpc3QuYWRkKCdvcGFjaXR5LW92ZXJsYXknKTtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvdyA9ICdhdXRvJztcbiAgICB9XG5cbiAgICBmdW5jdGlvbiB0cmlnZ2VyU2hha2UoKSB7XG4gICAgICAgIGJveC5jbGFzc0xpc3QuYWRkKCdzaGFrZScpO1xuXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgYm94LmNsYXNzTGlzdC5yZW1vdmUoJ3NoYWtlJyk7XG4gICAgICAgICAgICBjb25zdCBuZXh0U2hha2UgPSBNYXRoLnJhbmRvbSgpICogNjAwMCArIDQwMDA7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KHRyaWdnZXJTaGFrZSwgbmV4dFNoYWtlKTtcbiAgICAgICAgfSwgMTIwMCk7XG4gICAgfVxuXG5cblxuICAgIGxvYWRUcmFuc2xhdGlvbnMoKS50aGVuKGluaXQpXG5cbiAgICAvLyBpbml0KClcblxuXG4gICAgLy8vIFRFU1RcblxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5tZW51LXRlc3RfX2J0bicpLmZvckVhY2goYnRuID0+IHtcbiAgICAgICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgYnRuLnBhcmVudEVsZW1lbnQuY2xhc3NMaXN0LnRvZ2dsZSgnb3BlbicpO1xuICAgICAgICB9KTtcbiAgICB9KTtcblxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsICgpID0+IHtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tZW51LWJ0blwiKT8uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWVudS10ZXN0XCIpPy5jbGFzc0xpc3QudG9nZ2xlKFwiaGlkZVwiKTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICBjb25zdCBsbmdCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmxuZy1idG5cIilcblxuICAgIGxuZ0J0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICBpZiAoc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbShcImxvY2FsZVwiKSkge1xuICAgICAgICAgICAgc2Vzc2lvblN0b3JhZ2UucmVtb3ZlSXRlbShcImxvY2FsZVwiKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oXCJsb2NhbGVcIiwgXCJlblwiKTtcbiAgICAgICAgfVxuICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XG4gICAgfSk7XG5cbiAgICBjb25zdCBhdXRoQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hdXRoLWJ0blwiKVxuICAgIGNvbnN0IGJldEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYnRuLWJldC1vbmxpbmVcIilcblxuICAgIGF1dGhCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+e1xuICAgICAgICBpZih1c2VySWQpe1xuICAgICAgICAgICAgc2Vzc2lvblN0b3JhZ2UucmVtb3ZlSXRlbShcInVzZXJJZFwiKVxuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oXCJ1c2VySWRcIiwgXCI3Nzc3Nzc4XCIpXG4gICAgICAgIH1cbiAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpXG4gICAgfSk7XG5cblxufSkoKTtcblxuLy8g0YbRjiDRhNGD0L3QutGG0ZbRjiDQstC40LTQsNC70LgsINCwINC+0YHQvdC+0LLQvdGDINGA0L7Qt9C60L7QvNC10L3RgtC4XG5mdW5jdGlvbiBvcGVuUG9wdXBCeUF0dHIocG9wdXBBdHRyLCBpc1Nob3dQcm9ncmVzcyA9IGZhbHNlKSB7XG4gICAgY29uc3QgYWxsUG9wdXBzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnBvcHVwJyk7XG4gICAgYWxsUG9wdXBzLmZvckVhY2gocCA9PiBwLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKSk7XG4gICAgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvdyA9ICdoaWRkZW4nO1xuXG4gICAgY29uc3QgdGFyZ2V0UG9wdXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAucG9wdXBbZGF0YS1wb3B1cD1cIiR7cG9wdXBBdHRyfVwiXWApO1xuICAgIGlmICh0YXJnZXRQb3B1cCkge1xuICAgICAgICB0YXJnZXRQb3B1cC5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJyk7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wb3B1cHMnKS5jbGFzc0xpc3QucmVtb3ZlKCdvcGFjaXR5LW92ZXJsYXknKTtcbiAgICB9XG5cbiAgICBjb25zdCBwcm9ncmVzcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wb3B1cHMgLnByb2dyZXNzJyk7XG4gICAgaWYgKHByb2dyZXNzKSB7XG4gICAgICAgIHByb2dyZXNzLmNsYXNzTGlzdC50b2dnbGUoJ2hpZGUnLCAhaXNTaG93UHJvZ3Jlc3MpO1xuICAgIH1cbn1cbi8vINGG0Y4g0YTRg9C90LrRhtGW0Y4g0LLQuNC00LDQu9C4LCDQsCDQvtGB0L3QvtCy0L3RgyDRgNC+0LfQutC+0LzQtdC90YLQuFxuXG4iXX0=
