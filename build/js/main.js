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
  var currentDate = new Date("2025-07-24T00:00:00");
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
  var promoStartDate = new Date("2025-07-15T00:00:00");
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
  console.log(currentDayNumber);
  var mainPage = document.querySelector(".fav-page"),
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
    tableTabs = document.querySelectorAll('.table__tabs-item');
  console.log(btnOpen);
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
      var prize = res.number;
      var streakBonus = res.streakBonus || debug;
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
      if (prize === 'fs25_3oaks') openPopupByAttr('prize25FsLuckyPenny', true);
      if (prize === 'fs25_playson') openPopupByAttr('prize25FsCoinStrike', true);
      if (prize === 'fs40') openPopupByAttr('prize40FsPirots3', true);
      if (prize === 'fs25_bgaming') openPopupByAttr('prize25FsSnoopDogg', true);
      if (prize === 'fs25_pushGaming') openPopupByAttr('prize25FsBigBamboo', true);
      if (prize === 'fs10') openPopupByAttr('prize10FsHitSlot', true);
      if (prize === 'fs30') openPopupByAttr('prize30FsShinigCrown', true);
      if (prize === 'fs25_hacksaw') openPopupByAttr('prize25FsLeBandit', true);
      if (prize === 'fs20') openPopupByAttr('prize20FsLuckOfPanda', true);
    });
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
      console.log(day);
      if (i + 1 <= streak) {
        day.classList.add('_active');
      }
    });
    streakDaysPopup.forEach(function (day, i) {
      day.classList.remove("_active");
      console.log(day);
      if (i + 1 <= streak) {
        day.classList.add('_active');
      }
    });
  }
  function setUserProgress(userData) {
    var spinAllowed = userData.spinAllowed,
      pointsPerDay = userData.pointsPerDay,
      streak = userData.spinsStreak,
      lastUpdate = userData.lastUpdate;
    console.log(streakDays);
    setStreakDays(streak);
    pointsPerDay = 10002;
    var thresholdPoints = 1000;
    pointsPerDay = pointsPerDay > thresholdPoints ? thresholdPoints : pointsPerDay;
    counterPoints.textContent = "".concat(pointsPerDay);
    var progress = Math.min(pointsPerDay / thresholdPoints * 100, 100);
    if (progress >= 100) {
      progress = 100;
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
    setProgressWidth(progress);
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
      var spinDate = new Date(spin.betDate);
      var formattedDate = spinDate.toLocaleDateString('uk-UA').slice(0, 5);
      var status = resolveStatusTranslation(spin.status);
      if (status) {
        var spinElement = document.createElement('div');
        spinElement.classList.add('spins-row-item');
        var isWin = spin.status === "win";
        var statusClass = isWin ? '_done' : '';
        spinElement.innerHTML = "\n                    <span class=\"content-date\">".concat(formattedDate, "</span>\n                    <span class=\"content-prize\">ID:").concat(spin.cardID, "</span>\n<!--                    <span class=\"content-status ").concat(statusClass, "\"></span>-->\n                ");
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
    request("/betsHistory").then(function (res) {
      var user = res.find(function (user) {
        return user.userid === userId;
      });
      var bets = user === null || user === void 0 ? void 0 : user.bets;
      displayBetsHistory(bets);
    });
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
              setBetHistory();
              tableTabs.forEach(function (tab) {
                tab.addEventListener('click', function () {
                  tableTabs.forEach(function (t) {
                    return t.classList.remove('active');
                  });
                  console.log(tableTabs);
                  var tabNum = Number(tab.getAttribute("data-week"));
                  tab.classList.add('active');
                  // renderUsers(tabNum);
                });
              });

              // renderUsers(activeWeek)

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
    updateSlider(currentDayNumber - 1);
    tabs.forEach(function (tab, i) {
      if (i + 1 <= currentDayNumber) {
        tab.classList.add('_open');
        tab.classList.remove('_lock');
      } else {
        tab.classList.remove('_active');
        tab.classList.add('_lock');
        tab.classList.remove('_open');
      }
      if (i + 1 === activeWeek) {
        tab.classList.add('_active');
      }
    });

    // function moveLeft() {
    //     currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    //     updateSlider(currentIndex);
    // }
    //
    // function moveRight() {
    //     currentIndex = (currentIndex + 1) % slides.length;
    //     updateSlider(currentIndex);
    // }
    //
    // btnLeft.addEventListener('click', moveLeft);
    // btnRight.addEventListener('click', moveRight);

    // tabs.forEach((tab, index) => {
    //     tab.addEventListener('click', () => {
    //         currentIndex = index;
    //         updateSlider(currentIndex);
    //     });
    // });
    //
    // dots.forEach((dot, index) => {
    //     dot.addEventListener('click', () => {
    //         currentIndex = index;
    //         updateSlider(currentIndex);
    //     });
    // });
  }

  function checkUserAuth() {
    var loadTime = 200;
    request("/favuser/".concat(userId)).then(function (user) {
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
          currentCardsWrap.classList.add('_unauth');
          return Promise.resolve(false);
        } else {
          currentCardsWrap.classList.remove('_unauth');
        }
        hideElements(unauthMsgs);
        if (user.userid) {
          hideElements(participateBtns);
          showElements(redirectBtns);
        } else {
          showElements(participateBtns);
          hideElements(redirectBtns);
        }
        hideLoader();
        setUserProgress(user);
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
      userRow.innerHTML = "\n            <div class=\"table__row-item\">\n                ".concat(userPlace < 10 ? '0' + userPlace : userPlace, "\n                ").concat(isCurrentUser && !neighbor ? '<span class="you">' + translateKey("you") + '</span>' : '', "\n            </div>\n            <div class=\"table__row-item\">\n                ").concat(isCurrentUser && !neighbor ? userData.userid : maskUserId(userData.userid), "\n            </div>\n            <div class=\"table__row-item\">\n                ").concat(userData.points, "\n            </div>\n            <div class=\"table__row-item\">\n                ").concat(prizeKey ? translateKey(prizeKey) : ' - ', "\n            </div>\n            <div class=\"table__row-item\">\n                ").concat(prizeKey ? translateKey(prizeKey) : ' - ', "\n            </div>\n        ");
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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOlsiYXBpVVJMIiwiY3VycmVudERhdGUiLCJEYXRlIiwiZ2V0QWN0aXZlV2VlayIsInByb21vU3RhcnREYXRlIiwid2Vla0R1cmF0aW9uIiwid2Vla0RhdGVzIiwiRGF5IiwiV2VlayIsImZvcm1hdERhdGUiLCJkYXRlIiwiZ2V0RGF0ZSIsInRvU3RyaW5nIiwicGFkU3RhcnQiLCJnZXRNb250aCIsImNhbGN1bGF0ZVdlZWtQZXJpb2QiLCJ3ZWVrSW5kZXgiLCJiYXNlU3RhcnQiLCJnZXRUaW1lIiwic3RhcnQiLCJlbmQiLCJhY3RpdmVXZWVrSW5kZXgiLCJpIiwiYWN0aXZlV2VlayIsImNvbnNvbGUiLCJsb2ciLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJmb3JFYWNoIiwibGlzdCIsImNsYXNzTGlzdCIsImFkZCIsImN1cnJlbnRMaXN0IiwicXVlcnlTZWxlY3RvciIsInJlbW92ZSIsImdldEN1cnJlbnREYXlOdW1iZXIiLCJkaWZmSW5NcyIsImRheU51bWJlciIsIk1hdGgiLCJmbG9vciIsImN1cnJlbnREYXlOdW1iZXIiLCJtYWluUGFnZSIsImNoYWxsYW5nZUJsb2NrIiwiY2hhbGxhbmdlRGVwb3NpdEJ0biIsInVuYXV0aE1zZ3MiLCJwYXJ0aWNpcGF0ZUJ0bnMiLCJyZWRpcmVjdEJ0bnMiLCJsb2FkZXIiLCJjdXJyZW50Q2FyZHNXcmFwIiwicHJvZ3Jlc3NCYXIiLCJjaGFsbGFuZ2VCbHVyIiwiY2hhbGxhbmdlQmx1clN0YXR1cyIsInByb2dyZXNzQm94IiwiY2hhbGxhbmdlQnRuUG9pbnRlciIsImJ0bk9wZW4iLCJjb3VudGVyUG9pbnRzIiwicG9wdXBzIiwic3RyZWFrRGF5cyIsInN0cmVha0RheXNQb3B1cCIsInJlc3VsdHNUYWJsZSIsInJlc3VsdHNUYWJsZU90aGVyIiwidGFibGVUYWJzIiwidWtMZW5nIiwiZW5MZW5nIiwidG9nZ2xlQ2xhc3NlcyIsImVsZW1lbnRzIiwiY2xhc3NOYW1lIiwiZWwiLCJ0b2dnbGUiLCJ0b2dnbGVUcmFuc2xhdGVzIiwiZGF0YUF0dHIiLCJzZXRBdHRyaWJ1dGUiLCJpbm5lckhUTUwiLCJpMThuRGF0YSIsInJlbW92ZUF0dHJpYnV0ZSIsImxvYWRlckJ0biIsImxvY2FsZSIsInNlc3Npb25TdG9yYWdlIiwiZ2V0SXRlbSIsImRlYnVnIiwiaGlkZUxvYWRlciIsInRyYW5zbGF0ZVN0YXRlIiwidXNlcklkIiwiTnVtYmVyIiwiYm94IiwiaW5pdGlhbERlbGF5IiwicmFuZG9tIiwic2xpZGVyIiwiaXRlbXMiLCJkb3RzIiwiYnRuTGVmdCIsImJ0blJpZ2h0IiwiY3VycmVudEluZGV4IiwidG90YWxJdGVtcyIsImxlbmd0aCIsImlzRHJhZ2dpbmciLCJzdGFydFgiLCJyZXF1ZXN0IiwibGluayIsImV4dHJhT3B0aW9ucyIsImZldGNoIiwiaGVhZGVycyIsInRoZW4iLCJyZXMiLCJvayIsIkVycm9yIiwianNvbiIsImVyciIsImVycm9yIiwiUHJvbWlzZSIsInJlamVjdCIsImJvZHkiLCJzdHlsZSIsIm92ZXJmbG93IiwiaW5pdFNwaW4iLCJ0ZXh0Q29udGVudCIsInRyYW5zbGF0ZUtleSIsInNlbmRTcGluUmVxdWVzdCIsInByaXplIiwibnVtYmVyIiwic3RyZWFrQm9udXMiLCJzZXRTdHJlYWtEYXlzIiwib3BlblBvcHVwQnlBdHRyIiwicmVzb2x2ZSIsInR5cGUiLCJwYXJhbXMiLCJ1c2VyaWQiLCJtZXRob2QiLCJKU09OIiwic3RyaW5naWZ5Iiwic3RyZWFrIiwiZGF5Iiwic2V0VXNlclByb2dyZXNzIiwidXNlckRhdGEiLCJzcGluQWxsb3dlZCIsInBvaW50c1BlckRheSIsInNwaW5zU3RyZWFrIiwibGFzdFVwZGF0ZSIsInRocmVzaG9sZFBvaW50cyIsInByb2dyZXNzIiwibWluIiwidG9GaXhlZCIsInNldFByb2dyZXNzV2lkdGgiLCJwcm9ncmVzc1BlcmNlbnQiLCJ3aWR0aCIsImJhclJlY3QiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJwYXJlbnRSZWN0IiwicmlnaHRFZGdlIiwicmlnaHQiLCJsZWZ0IiwicmVzb2x2ZVN0YXR1c1RyYW5zbGF0aW9uIiwic3RhdHVzIiwiZGlzcGxheUJldHNIaXN0b3J5IiwiYmV0cyIsInNwaW5JdGVtIiwibm9TcGluSXRlbSIsIm5vQmV0cyIsIndhcm4iLCJ1cGQiLCJzcGluIiwic3BpbkRhdGUiLCJiZXREYXRlIiwiZm9ybWF0dGVkRGF0ZSIsInRvTG9jYWxlRGF0ZVN0cmluZyIsInNsaWNlIiwic3BpbkVsZW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiaXNXaW4iLCJzdGF0dXNDbGFzcyIsImNhcmRJRCIsImFwcGVuZENoaWxkIiwic2V0QmV0SGlzdG9yeSIsInN0YWdlTnVtIiwidXNlciIsImZpbmQiLCJpbml0IiwidHJ5RGV0ZWN0VXNlcklkIiwicXVpY2tDaGVja0FuZFJlbmRlciIsImNoZWNrVXNlckF1dGgiLCJhZGRFdmVudExpc3RlbmVyIiwidGFiIiwidCIsInRhYk51bSIsImdldEF0dHJpYnV0ZSIsInNldFRpbWVvdXQiLCJTZXRTbGlkZXJXaWR0aEJsdXIiLCJ0cmlnZ2VyU2hha2UiLCJidG4iLCJwYXJ0aWNpcGF0ZSIsImNsb3NlQnRuIiwiY2xvc2VBbGxQb3B1cHMiLCJwb3B1cEF0dHIiLCJlIiwib3BlblBvcHVwRWwiLCJjb250YWlucyIsInRhcmdldCIsInVwZGF0ZVNsaWRlciIsImhhbmRsZVN0YXJ0IiwiaGFuZGxlTW92ZSIsImhhbmRsZUVuZCIsIm1vdmVTbGlkZXIiLCJ3aW5kb3ciLCJzdG9yZSIsInN0YXRlIiwiZ2V0U3RhdGUiLCJhdXRoIiwiaXNBdXRob3JpemVkIiwiaWQiLCJnX3VzZXJfaWQiLCJhdHRlbXB0cyIsIm1heEF0dGVtcHRzIiwiYXR0ZW1wdEludGVydmFsIiwid2FpdEZvclVzZXJJZCIsImludGVydmFsIiwic2V0SW50ZXJ2YWwiLCJjbGVhckludGVydmFsIiwibG9hZFRyYW5zbGF0aW9ucyIsInRyYW5zbGF0ZSIsInRhcmdldE5vZGUiLCJnZXRFbGVtZW50QnlJZCIsIm11dGF0aW9uT2JzZXJ2ZXIiLCJNdXRhdGlvbk9ic2VydmVyIiwibXV0YXRpb25zIiwiZGlzY29ubmVjdCIsIm9ic2VydmUiLCJjaGlsZExpc3QiLCJzdWJ0cmVlIiwic2xpZGVzIiwidGFicyIsImluZGV4Iiwic2xpZGUiLCJkb3QiLCJsb2FkVGltZSIsInNob3dFbGVtZW50cyIsImhpZGVFbGVtZW50cyIsInJlcG9ydEVycm9yIiwicmVwb3J0RGF0YSIsIm9yaWdpbiIsImxvY2F0aW9uIiwiaHJlZiIsImVycm9yVGV4dCIsInRleHQiLCJtZXNzYWdlIiwibmFtZSIsInN0YWNrIiwiZWxlbXMiLCJlbGVtIiwia2V5IiwicmVmcmVzaExvY2FsaXplZENsYXNzIiwiZWxlbWVudCIsImxhbmciLCJyZW5kZXJVc2VycyIsIndlZWsiLCJkYXRhIiwidXNlcnMiLCJwb3B1bGF0ZVVzZXJzVGFibGUiLCJjdXJyZW50VXNlcklkIiwiY3VycmVudFVzZXIiLCJpc1RvcEN1cnJlbnRVc2VyIiwic29tZSIsInRvcFVzZXJzTGVuZ3RoIiwidG9wVXNlcnMiLCJkaXNwbGF5VXNlciIsImlzQ3VycmVudFVzZXIiLCJ0YWJsZSIsInJlbmRlclJvdyIsIm9wdGlvbnMiLCJoaWdobGlnaHQiLCJuZWlnaGJvciIsInVzZXJSb3ciLCJ1c2VyUGxhY2UiLCJpbmRleE9mIiwicHJpemVLZXkiLCJnZXRQcml6ZVRyYW5zbGF0aW9uS2V5IiwibWFza1VzZXJJZCIsInBvaW50cyIsImFwcGVuZCIsImRlZmF1bHRWYWx1ZSIsIm5lZWRLZXkiLCJwbGFjZSIsIml0ZW0iLCJkaXN0YW5jZSIsIm5ld1Bvc2l0aW9uIiwic2NhbGUiLCJ0cmFuc2Zvcm0iLCJ6SW5kZXgiLCJpc1Zpc2libGUiLCJhYnMiLCJvZmZzZXQiLCJnb1RvU2xpZGUiLCJldmVudCIsImNsaWVudFgiLCJ0b3VjaGVzIiwiY3VycmVudFgiLCJkaWZmWCIsInAiLCJuZXh0U2hha2UiLCJwYXJlbnRFbGVtZW50IiwibG5nQnRuIiwicmVtb3ZlSXRlbSIsInNldEl0ZW0iLCJyZWxvYWQi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QUFRLENBQUMrRCxNQUFNLEVBQUU7RUFDNUIsQ0FBQyxDQUFDO0FBR04sQ0FBQyxHQUFHOztBQUVKO0FBQ0EsU0FBU3BMLGVBQWUsQ0FBQ3NFLFNBQVMsRUFBMEI7RUFBQSxJQUF4QmlILGNBQWMsdUVBQUcsS0FBSztFQUN0RCxJQUFNQyxTQUFTLEdBQUd4UixRQUFRLENBQUNDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQztFQUNyRHVSLFNBQVMsQ0FBQ3RSLE9BQU8sQ0FBQyxVQUFBNFEsQ0FBQztJQUFBLE9BQUlBLENBQUMsQ0FBQzFRLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLE1BQU0sQ0FBQztFQUFBLEVBQUM7RUFFL0MsSUFBTW9SLFdBQVcsR0FBR3pSLFFBQVEsQ0FBQ08sYUFBYSwrQkFBdUIrSixTQUFTLFNBQUs7RUFDL0UsSUFBSW1ILFdBQVcsRUFBRTtJQUNiQSxXQUFXLENBQUNyUixTQUFTLENBQUNJLE1BQU0sQ0FBQyxNQUFNLENBQUM7SUFDcENSLFFBQVEsQ0FBQ08sYUFBYSxDQUFDLFNBQVMsQ0FBQyxDQUFDSCxTQUFTLENBQUNJLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQztFQUN6RTtFQUVBLElBQU15RyxRQUFRLEdBQUdqSCxRQUFRLENBQUNPLGFBQWEsQ0FBQyxtQkFBbUIsQ0FBQztFQUM1RCxJQUFJMEcsUUFBUSxFQUFFO0lBQ1ZBLFFBQVEsQ0FBQzdHLFNBQVMsQ0FBQ3NDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQzZPLGNBQWMsQ0FBQztFQUN0RDtBQUNKO0FBQ0EiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiAoKSB7XG5cbiAgICBjb25zdCBhcGlVUkwgPSAnaHR0cHM6Ly9mYXYtcHJvbS5jb20vYXBpX3NhbV91YSdcblxuICAgIGNvbnN0IGN1cnJlbnREYXRlID0gbmV3IERhdGUoXCIyMDI1LTA3LTI0VDAwOjAwOjAwXCIpO1xuXG4gICAgY29uc3QgZ2V0QWN0aXZlV2VlayA9IChwcm9tb1N0YXJ0RGF0ZSwgd2Vla0R1cmF0aW9uKSA9PiB7XG5cbiAgICAgICAgbGV0IHdlZWtEYXRlcyA9IFtdO1xuXG4gICAgICAgIGNvbnN0IERheSA9IDI0ICogNjAgKiA2MCAqIDEwMDA7XG4gICAgICAgIGNvbnN0IFdlZWsgPSB3ZWVrRHVyYXRpb24gKiBEYXk7XG5cbiAgICAgICAgY29uc3QgZm9ybWF0RGF0ZSA9IChkYXRlKSA9PlxuICAgICAgICAgICAgYCR7ZGF0ZS5nZXREYXRlKCkudG9TdHJpbmcoKS5wYWRTdGFydCgyLCBcIjBcIil9LiR7KGRhdGUuZ2V0TW9udGgoKSArIDEpLnRvU3RyaW5nKCkucGFkU3RhcnQoMiwgXCIwXCIpfWA7XG5cbiAgICAgICAgY29uc3QgY2FsY3VsYXRlV2Vla1BlcmlvZCA9ICh3ZWVrSW5kZXgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGJhc2VTdGFydCA9IHByb21vU3RhcnREYXRlLmdldFRpbWUoKTtcbiAgICAgICAgICAgIGNvbnN0IHN0YXJ0ID0gbmV3IERhdGUoYmFzZVN0YXJ0ICsgd2Vla0luZGV4ICogV2Vlayk7XG4gICAgICAgICAgICBsZXQgZW5kID0gbmV3IERhdGUoc3RhcnQuZ2V0VGltZSgpICsgKHdlZWtEdXJhdGlvbiAqIERheSAtIDEpKTtcbiAgICAgICAgICAgIHJldHVybiB7IHN0YXJ0LCBlbmQgfTtcbiAgICAgICAgfTtcblxuICAgICAgICBsZXQgYWN0aXZlV2Vla0luZGV4ID0gbnVsbDtcblxuICAgICAgICAvLyDQn9C10YDQtdCy0ZbRgNC60LAg0L/QvtGC0L7Rh9C90L7Qs9C+INGC0LjQttC90Y9cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgaSsrKSB7IC8vINCe0LHQvNC10LbRg9GU0LzQviAxMCDRgtC40LbQvdGP0LzQuCAo0Y/QutGJ0L4g0L/QvtGC0YDRltCx0L3QviDQsdGW0LvRjNGI0LUsINC/0YDQvtGB0YLQviDQt9C80ZbQvdGW0YLRjCDQu9GW0YfQuNC70YzQvdC40LopXG4gICAgICAgICAgICBjb25zdCB7IHN0YXJ0LCBlbmQgfSA9IGNhbGN1bGF0ZVdlZWtQZXJpb2QoaSk7XG4gICAgICAgICAgICBpZiAoY3VycmVudERhdGUgPj0gc3RhcnQgJiYgY3VycmVudERhdGUgPD0gZW5kKSB7XG4gICAgICAgICAgICAgICAgYWN0aXZlV2Vla0luZGV4ID0gaSArIDE7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gYWN0aXZlV2Vla0luZGV4O1xuICAgIH07XG5cbiAgICBjb25zdCBwcm9tb1N0YXJ0RGF0ZSA9IG5ldyBEYXRlKFwiMjAyNS0wNy0xNVQwMDowMDowMFwiKTtcbiAgICBjb25zdCB3ZWVrRHVyYXRpb24gPSA3O1xuXG4gICAgY29uc3QgYWN0aXZlV2VlayA9IGdldEFjdGl2ZVdlZWsocHJvbW9TdGFydERhdGUsIHdlZWtEdXJhdGlvbikgfHwgMTtcblxuICAgIGNvbnNvbGUubG9nKGFjdGl2ZVdlZWspXG5cbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZ2FtZXNfX2xpc3QnKS5mb3JFYWNoKGxpc3QgPT4ge1xuICAgICAgICBsaXN0LmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcbiAgICB9KTtcblxuICAgIGNvbnN0IGN1cnJlbnRMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLmdhbWVzX19saXN0Ll93ZWVrJHthY3RpdmVXZWVrfWApO1xuXG4gICAgY29uc29sZS5sb2coY3VycmVudExpc3QpO1xuICAgIGlmIChjdXJyZW50TGlzdCkge1xuICAgICAgICBjdXJyZW50TGlzdC5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJyk7XG4gICAgfVxuXG4gICAgY29uc3QgZ2V0Q3VycmVudERheU51bWJlciA9IChwcm9tb1N0YXJ0RGF0ZSkgPT4ge1xuICAgICAgICBjb25zdCBkaWZmSW5NcyA9IGN1cnJlbnREYXRlIC0gcHJvbW9TdGFydERhdGU7XG4gICAgICAgIGxldCBkYXlOdW1iZXIgPSBNYXRoLmZsb29yKGRpZmZJbk1zIC8gKDI0ICogNjAgKiA2MCAqIDEwMDApKSArIDE7XG4gICAgICAgIGlmKGFjdGl2ZVdlZWsgPiAxKXtcbiAgICAgICAgICAgZGF5TnVtYmVyID0gZGF5TnVtYmVyIC0gKChhY3RpdmVXZWVrIC0gMSkgKiA3KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZGF5TnVtYmVyO1xuICAgIH07XG5cbiAgICBjb25zdCBkYXlOdW1iZXIgPSBnZXRDdXJyZW50RGF5TnVtYmVyKHByb21vU3RhcnREYXRlKTtcbiAgICBjb25zdCBjdXJyZW50RGF5TnVtYmVyID0gZGF5TnVtYmVyID4gMCA/IGRheU51bWJlciA6IDE7XG4gICAgY29uc29sZS5sb2coY3VycmVudERheU51bWJlcik7XG5cblxuICAgIGNvbnN0IG1haW5QYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5mYXYtcGFnZVwiKSxcbiAgICAgICAgY2hhbGxhbmdlQmxvY2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2hhbGxhbmdlJyksXG4gICAgICAgIGNoYWxsYW5nZURlcG9zaXRCdG4gPSBjaGFsbGFuZ2VCbG9jay5xdWVyeVNlbGVjdG9yKCcuYnRuLWpvaW4nKSxcbiAgICAgICAgdW5hdXRoTXNncyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy51bmF1dGgtbXNnJyksXG4gICAgICAgIHBhcnRpY2lwYXRlQnRucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wYXJ0LWJ0bicpLFxuICAgICAgICByZWRpcmVjdEJ0bnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYnRuLWpvaW4nKSxcbiAgICAgICAgbG9hZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zcGlubmVyLW92ZXJsYXlcIiksXG4gICAgICAgIGN1cnJlbnRDYXJkc1dyYXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2hhbGxhbmdlX19jdXJyZW50JyksXG4gICAgICAgIHByb2dyZXNzQmFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNoYWxsYW5nZV9fcHJvZ3Jlc3MtYmFyJyksXG4gICAgICAgIGNoYWxsYW5nZUJsdXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2hhbGxhbmdlX19ibHVyJyksXG4gICAgICAgIGNoYWxsYW5nZUJsdXJTdGF0dXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2hhbGxhbmdlX19ibHVyLXN0YXR1cycpLFxuICAgICAgICBwcm9ncmVzc0JveCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jaGFsbGFuZ2VfX3Byb2dyZXNzLWJveCcpLFxuICAgICAgICBjaGFsbGFuZ2VCdG5Qb2ludGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNoYWxsYW5nZV9fYnRuLXBvaW50ZXInKSxcbiAgICAgICAgYnRuT3BlbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idG4tb3BlbicpLFxuICAgICAgICBjb3VudGVyUG9pbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvdW50ZXItcG9pbnRzJyksXG4gICAgICAgIHBvcHVwcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wb3B1cHMnKSxcbiAgICAgICAgc3RyZWFrRGF5cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIucHJvZ3Jlc3NfX2RheXMtaXRlbVwiKSxcbiAgICAgICAgc3RyZWFrRGF5c1BvcHVwID0gcG9wdXBzLnF1ZXJ5U2VsZWN0b3JBbGwoXCIucHJvZ3Jlc3NfX2RheXMtaXRlbVwiKSxcbiAgICAgICAgcmVzdWx0c1RhYmxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RhYmxlJyksXG4gICAgICAgIHJlc3VsdHNUYWJsZU90aGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RhYmxlT3RoZXInKSxcbiAgICAgICAgdGFibGVUYWJzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRhYmxlX190YWJzLWl0ZW0nKTtcblxuXG4gICAgY29uc29sZS5sb2coYnRuT3BlbilcblxuXG5cbiAgICBjb25zdCB1a0xlbmcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdWtMZW5nJyk7XG4gICAgY29uc3QgZW5MZW5nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2VuTGVuZycpO1xuXG4gICAgY29uc3QgdG9nZ2xlQ2xhc3NlcyA9IChlbGVtZW50cywgY2xhc3NOYW1lKSA9PiBlbGVtZW50cy5mb3JFYWNoKGVsID0+IGVsLmNsYXNzTGlzdC50b2dnbGUoYCR7Y2xhc3NOYW1lfWApKTtcbiAgICBjb25zdCB0b2dnbGVUcmFuc2xhdGVzID0gKGVsZW1lbnRzLCBkYXRhQXR0cikgPT4gZWxlbWVudHMuZm9yRWFjaChlbCA9PiB7XG4gICAgICAgIGVsLnNldEF0dHJpYnV0ZSgnZGF0YS10cmFuc2xhdGUnLCBgJHtkYXRhQXR0cn1gKVxuICAgICAgICBlbC5pbm5lckhUTUwgPSBpMThuRGF0YVtkYXRhQXR0cl0gfHwgJyotLS0tTkVFRCBUTyBCRSBUUkFOU0xBVEVELS0tLSogICBrZXk6ICAnICsgZGF0YUF0dHI7XG4gICAgICAgIGVsLnJlbW92ZUF0dHJpYnV0ZSgnZGF0YS10cmFuc2xhdGUnKTtcbiAgICB9KTtcblxuICAgIGxldCBsb2FkZXJCdG4gPSBmYWxzZVxuXG4gICAgLy8gbGV0IGxvY2FsZSA9IFwiZW5cIlxuICAgIGxldCBsb2NhbGUgPSBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKFwibG9jYWxlXCIpIHx8IFwidWtcIlxuXG4gICAgaWYgKHVrTGVuZykgbG9jYWxlID0gJ3VrJztcbiAgICBpZiAoZW5MZW5nKSBsb2NhbGUgPSAnZW4nO1xuXG4gICAgbGV0IGRlYnVnID0gZmFsc2VcblxuICAgIGlmIChkZWJ1ZykgaGlkZUxvYWRlcigpXG5cbiAgICBsZXQgaTE4bkRhdGEgPSB7fTtcbiAgICBjb25zdCB0cmFuc2xhdGVTdGF0ZSA9IHRydWU7XG4gICAgLy8gbGV0IHVzZXJJZCA9IG51bGw7XG4gICAgbGV0IHVzZXJJZCA9IE51bWJlcihzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKFwidXNlcklkXCIpKSA/PyBudWxsXG5cbiAgICAvLyB1c2VySWQgPSAxMDAzMDAyNjhcblxuICAgIGNvbnN0IGJveCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaGFrZS1ib3gnKTtcbiAgICBjb25zdCBpbml0aWFsRGVsYXkgPSBNYXRoLnJhbmRvbSgpICogNjAwMCArIDQwMDA7XG5cbiAgICAvL3NsaWRlciB2YXJzXG5cbiAgICBjb25zdCBzbGlkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJpemVfX3NsaWRlcicpO1xuICAgIGNvbnN0IGl0ZW1zID0gc2xpZGVyLnF1ZXJ5U2VsZWN0b3JBbGwoJy5wcml6ZV9fc2xpZGUnKTtcbiAgICBjb25zdCBkb3RzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnByaXplX19uYXYtZG90cy1pdGVtJyk7XG4gICAgY29uc3QgYnRuTGVmdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcml6ZV9fbmF2LWxlZnQnKTtcbiAgICBjb25zdCBidG5SaWdodCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcml6ZV9fbmF2LXJpZ2h0Jyk7XG5cbiAgICBsZXQgY3VycmVudEluZGV4ID0gMTtcbiAgICBjb25zdCB0b3RhbEl0ZW1zID0gaXRlbXMubGVuZ3RoO1xuICAgIGxldCBpc0RyYWdnaW5nID0gZmFsc2U7XG4gICAgbGV0IHN0YXJ0WCA9IDA7XG5cbiAgICAvL3NsaWRlciB2YXJzXG5cbiAgICBjb25zdCByZXF1ZXN0ID0gZnVuY3Rpb24gKGxpbmssIGV4dHJhT3B0aW9ucykge1xuICAgICAgICByZXR1cm4gZmV0Y2goYXBpVVJMICsgbGluaywge1xuICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICdBY2NlcHQnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIC4uLihleHRyYU9wdGlvbnMgfHwge30pXG4gICAgICAgIH0pXG4gICAgICAgICAgICAudGhlbihyZXMgPT4ge1xuICAgICAgICAgICAgICAgIGlmICghcmVzLm9rKSB0aHJvdyBuZXcgRXJyb3IoJ0FQSSBlcnJvcicpO1xuICAgICAgICAgICAgICAgIHJldHVybiByZXMuanNvbigpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaChlcnIgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0FQSSByZXF1ZXN0IGZhaWxlZDonLCBlcnIpO1xuXG4gICAgICAgICAgICAgICAgLy8gcmVwb3J0RXJyb3IoZXJyKTtcbiAgICAgICAgICAgICAgICAvL1xuICAgICAgICAgICAgICAgIC8vIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mYXYtcGFnZScpLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgICAgICAgICAgLy8gaWYgKHdpbmRvdy5sb2NhdGlvbi5ocmVmLnN0YXJ0c1dpdGgoXCJodHRwczovL3d3dy5mYXZiZXQuaHIvXCIpKSB7XG4gICAgICAgICAgICAgICAgLy8gICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gJy9wcm9tb2NpamUvcHJvbW9jaWphL3N0dWIvJztcbiAgICAgICAgICAgICAgICAvLyB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9ICcvcHJvbW9zL3Byb21vL3N0dWIvJztcbiAgICAgICAgICAgICAgICAvLyB9XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoZXJyKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaGlkZUxvYWRlcigpe1xuICAgICAgICBsb2FkZXIuY2xhc3NMaXN0LmFkZChcImhpZGVcIilcbiAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvdyA9IFwiYXV0b1wiXG4gICAgICAgIG1haW5QYWdlLmNsYXNzTGlzdC5yZW1vdmUoXCJsb2FkaW5nXCIpXG4gICAgfVxuXG5cblxuICAgIGZ1bmN0aW9uIGluaXRTcGluKCl7XG5cbiAgICAgICAgYnRuT3Blbi50ZXh0Q29udGVudCA9IHRyYW5zbGF0ZUtleShcImxvYWRlclwiKVxuICAgICAgICBjaGFsbGFuZ2VCdG5Qb2ludGVyLmNsYXNzTGlzdC5hZGQoXCJoaWRlXCIpO1xuXG5cbiAgICAgICAgc2VuZFNwaW5SZXF1ZXN0KCkudGhlbihyZXMgPT4ge1xuXG4gICAgICAgICAgICBjb25zdCBwcml6ZSA9IHJlcy5udW1iZXI7XG4gICAgICAgICAgICBjb25zdCBzdHJlYWtCb251cyA9IHJlcy5zdHJlYWtCb251cyB8fCBkZWJ1ZztcblxuICAgICAgICAgICAgYnRuT3Blbi50ZXh0Q29udGVudCA9IHRyYW5zbGF0ZUtleShcIm9wZW5CdG5cIilcblxuICAgICAgICAgICAgYnRuT3Blbi5jbGFzc0xpc3QuYWRkKFwiaGlkZVwiKTtcbiAgICAgICAgICAgIGNoYWxsYW5nZURlcG9zaXRCdG4uY2xhc3NMaXN0LnJlbW92ZShcImhpZGVcIik7XG5cbiAgICAgICAgICAgIHNldFN0cmVha0RheXMoc3RyZWFrQm9udXMpXG5cbiAgICAgICAgICAgIGlmIChwcml6ZSA9PT0gJ3Jlc3BpbicpIG9wZW5Qb3B1cEJ5QXR0cigndW5sdWNreVBvcHVwJywgdHJ1ZSk7XG4gICAgICAgICAgICBpZiAocHJpemUgPT09ICdub3RoaW5nJykgb3BlblBvcHVwQnlBdHRyKCd1bmx1Y2t5UG9wdXAnLCB0cnVlKTtcbiAgICAgICAgICAgIGlmIChwcml6ZSA9PT0gJ3doZWVsQnViYmxlU3BhbnMnKSBvcGVuUG9wdXBCeUF0dHIoJ3ByaXplNTBQb2ludHMnLCB0cnVlKTtcbiAgICAgICAgICAgIGlmIChwcml6ZSA9PT0gJ2lwaG9uZScpIG9wZW5Qb3B1cEJ5QXR0cigncHJpemVJcGhvbmUnLCB0cnVlKTtcbiAgICAgICAgICAgIGlmIChwcml6ZSA9PT0gJ21hY0Jvb2snKSBvcGVuUG9wdXBCeUF0dHIoJ3ByaXplTGFwdG9wJywgdHJ1ZSk7XG4gICAgICAgICAgICBpZiAocHJpemUgPT09ICdhaXJQb2RzJykgb3BlblBvcHVwQnlBdHRyKCdwcml6ZUFpcnBvZHMnLCB0cnVlKTtcbiAgICAgICAgICAgIGlmIChwcml6ZSA9PT0gJ2FwcGxlV2F0Y2gnKSBvcGVuUG9wdXBCeUF0dHIoJ3ByaXplV2F0Y2gnLCB0cnVlKTtcbiAgICAgICAgICAgIGlmIChwcml6ZSA9PT0gJ3JvemV0a2FHaWZ0Q2FyZCcpIG9wZW5Qb3B1cEJ5QXR0cigncHJpemVHaWZ0JywgdHJ1ZSk7XG4gICAgICAgICAgICBpZiAocHJpemUgPT09ICdmczUwJykgb3BlblBvcHVwQnlBdHRyKCdwcml6ZTUwRnNHYXRlT2x5bXAnLCB0cnVlKTtcbiAgICAgICAgICAgIGlmIChwcml6ZSA9PT0gJ2ZzMjVfM29ha3MnKSBvcGVuUG9wdXBCeUF0dHIoJ3ByaXplMjVGc0x1Y2t5UGVubnknLCB0cnVlKTtcbiAgICAgICAgICAgIGlmIChwcml6ZSA9PT0gJ2ZzMjVfcGxheXNvbicpIG9wZW5Qb3B1cEJ5QXR0cigncHJpemUyNUZzQ29pblN0cmlrZScsIHRydWUpO1xuICAgICAgICAgICAgaWYgKHByaXplID09PSAnZnM0MCcpIG9wZW5Qb3B1cEJ5QXR0cigncHJpemU0MEZzUGlyb3RzMycsIHRydWUpO1xuICAgICAgICAgICAgaWYgKHByaXplID09PSAnZnMyNV9iZ2FtaW5nJykgb3BlblBvcHVwQnlBdHRyKCdwcml6ZTI1RnNTbm9vcERvZ2cnLCB0cnVlKTtcbiAgICAgICAgICAgIGlmIChwcml6ZSA9PT0gJ2ZzMjVfcHVzaEdhbWluZycpIG9wZW5Qb3B1cEJ5QXR0cigncHJpemUyNUZzQmlnQmFtYm9vJywgdHJ1ZSk7XG4gICAgICAgICAgICBpZiAocHJpemUgPT09ICdmczEwJykgb3BlblBvcHVwQnlBdHRyKCdwcml6ZTEwRnNIaXRTbG90JywgdHJ1ZSk7XG4gICAgICAgICAgICBpZiAocHJpemUgPT09ICdmczMwJykgb3BlblBvcHVwQnlBdHRyKCdwcml6ZTMwRnNTaGluaWdDcm93bicsIHRydWUpO1xuICAgICAgICAgICAgaWYgKHByaXplID09PSAnZnMyNV9oYWNrc2F3Jykgb3BlblBvcHVwQnlBdHRyKCdwcml6ZTI1RnNMZUJhbmRpdCcsIHRydWUpO1xuICAgICAgICAgICAgaWYgKHByaXplID09PSAnZnMyMCcpIG9wZW5Qb3B1cEJ5QXR0cigncHJpemUyMEZzTHVja09mUGFuZGEnLCB0cnVlKTtcblxuXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc2VuZFNwaW5SZXF1ZXN0KCkge1xuICAgICAgICBpZiAoIXVzZXJJZCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGRlYnVnKSB7XG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHtcbiAgICAgICAgICAgICAgICBudW1iZXI6ICdyZXNwaW4nLFxuICAgICAgICAgICAgICAgIHR5cGU6ICd0ZXN0J1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBwYXJhbXMgPSB7dXNlcmlkOiB1c2VySWR9O1xuICAgICAgICByZXR1cm4gcmVxdWVzdCgnL3NwaW4nLCB7XG4gICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHBhcmFtcylcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc2V0U3RyZWFrRGF5cyhzdHJlYWspIHtcbiAgICAgICAgc3RyZWFrRGF5cy5mb3JFYWNoKChkYXksIGkpID0+e1xuICAgICAgICAgICAgZGF5LmNsYXNzTGlzdC5yZW1vdmUoXCJfYWN0aXZlXCIpXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhkYXkpXG4gICAgICAgICAgICBpZihpICsgMSA8PSBzdHJlYWspe1xuICAgICAgICAgICAgICAgIGRheS5jbGFzc0xpc3QuYWRkKCdfYWN0aXZlJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgIHN0cmVha0RheXNQb3B1cC5mb3JFYWNoKChkYXksIGkpID0+e1xuICAgICAgICAgICAgZGF5LmNsYXNzTGlzdC5yZW1vdmUoXCJfYWN0aXZlXCIpXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhkYXkpXG4gICAgICAgICAgICBpZihpICsgMSA8PSBzdHJlYWspe1xuICAgICAgICAgICAgICAgIGRheS5jbGFzc0xpc3QuYWRkKCdfYWN0aXZlJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc2V0VXNlclByb2dyZXNzKHVzZXJEYXRhKXtcbiAgICAgICAgbGV0IHNwaW5BbGxvd2VkID0gdXNlckRhdGEuc3BpbkFsbG93ZWQsXG4gICAgICAgICAgICBwb2ludHNQZXJEYXkgPSB1c2VyRGF0YS5wb2ludHNQZXJEYXksXG4gICAgICAgICAgICBzdHJlYWsgPSB1c2VyRGF0YS5zcGluc1N0cmVhayxcbiAgICAgICAgICAgIGxhc3RVcGRhdGUgPSB1c2VyRGF0YS5sYXN0VXBkYXRlXG5cbiAgICAgICAgY29uc29sZS5sb2coc3RyZWFrRGF5cylcblxuICAgICAgICBzZXRTdHJlYWtEYXlzKHN0cmVhaylcblxuICAgICAgICBwb2ludHNQZXJEYXkgPSAxMDAwMlxuXG4gICAgICAgIGNvbnN0IHRocmVzaG9sZFBvaW50cyA9IDEwMDBcblxuICAgICAgICBwb2ludHNQZXJEYXkgPSBwb2ludHNQZXJEYXkgPiB0aHJlc2hvbGRQb2ludHMgPyB0aHJlc2hvbGRQb2ludHMgOiBwb2ludHNQZXJEYXk7XG5cblxuICAgICAgICBjb3VudGVyUG9pbnRzLnRleHRDb250ZW50ID0gYCR7cG9pbnRzUGVyRGF5fWBcblxuICAgICAgICBsZXQgcHJvZ3Jlc3MgPSBNYXRoLm1pbigocG9pbnRzUGVyRGF5IC8gdGhyZXNob2xkUG9pbnRzKSAqIDEwMCwgMTAwKTtcblxuXG4gICAgICAgIGlmIChwcm9ncmVzcyA+PSAxMDApIHtcbiAgICAgICAgICAgIHByb2dyZXNzID0gMTAwXG4gICAgICAgICAgICBjaGFsbGFuZ2VCbHVyLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKVxuICAgICAgICAgICAgcHJvZ3Jlc3NCb3guY2xhc3NMaXN0LnJlbW92ZSgnX2xvY2snKVxuICAgICAgICAgICAgcHJvZ3Jlc3NCb3guY2xhc3NMaXN0LmFkZCgnX29wZW4nKVxuICAgICAgICAgICAgY2hhbGxhbmdlQnRuUG9pbnRlci5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZVwiKVxuICAgICAgICAgICAgYnRuT3Blbi5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJylcbiAgICAgICAgICAgIGNoYWxsYW5nZURlcG9zaXRCdG4uY2xhc3NMaXN0LmFkZCgnaGlkZScpXG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgY2hhbGxhbmdlQmx1ci5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJylcbiAgICAgICAgICAgIHByb2dyZXNzQm94LmNsYXNzTGlzdC5hZGQoJ19sb2NrJylcbiAgICAgICAgICAgIHByb2dyZXNzQm94LmNsYXNzTGlzdC5yZW1vdmUoJ19vcGVuJylcbiAgICAgICAgICAgIGNoYWxsYW5nZUJ0blBvaW50ZXIuY2xhc3NMaXN0LmFkZChcImhpZGVcIilcbiAgICAgICAgICAgIGJ0bk9wZW4uY2xhc3NMaXN0LmFkZCgnaGlkZScpXG4gICAgICAgICAgICBjaGFsbGFuZ2VEZXBvc2l0QnRuLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKVxuXG5cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnNvbGUubG9nKGDQn9GA0L7Qs9GA0LXRgSDQutC+0YDQuNGB0YLRg9Cy0LDRh9CwOiAke3Byb2dyZXNzLnRvRml4ZWQoMCl9JWApO1xuXG4gICAgICAgIHNldFByb2dyZXNzV2lkdGgocHJvZ3Jlc3MpO1xuXG5cbiAgICAgICAgY29uc29sZS5sb2codXNlckRhdGEpXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc2V0UHJvZ3Jlc3NXaWR0aChwcm9ncmVzc1BlcmNlbnQpIHtcblxuICAgICAgICBwcm9ncmVzc0Jhci5zdHlsZS53aWR0aCA9IGAke3Byb2dyZXNzUGVyY2VudH0lYDtcblxuICAgICAgICBjb25zdCBiYXJSZWN0ID0gcHJvZ3Jlc3NCYXIuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgIGNvbnN0IHBhcmVudFJlY3QgPSBjdXJyZW50Q2FyZHNXcmFwLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuXG4gICAgICAgIGNvbnN0IHJpZ2h0RWRnZSA9IGJhclJlY3QucmlnaHQgLSBwYXJlbnRSZWN0LmxlZnQgLSA1O1xuXG4gICAgICAgIGNoYWxsYW5nZUJsdXIuc3R5bGUubGVmdCA9IGAke3JpZ2h0RWRnZX1weGA7XG4gICAgICAgIGNoYWxsYW5nZUJsdXJTdGF0dXMudGV4dENvbnRlbnQgPSBgJHtwcm9ncmVzc1BlcmNlbnQudG9GaXhlZCgwKX0lYDtcblxuXG4gICAgfVxuICAgIGZ1bmN0aW9uIHJlc29sdmVTdGF0dXNUcmFuc2xhdGlvbihzdGF0dXMpIHtcbiAgICAgICAgaWYgKCFzdGF0dXMgfHwgc3RhdHVzID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgcmV0dXJuIHRyYW5zbGF0ZUtleSgnYmV0VW5kZWZpbmVkJyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHN0YXR1cyA9PT0gJ3dpbicpIHtcbiAgICAgICAgICAgIHJldHVybiB0cmFuc2xhdGVLZXkoJ3dpbkJldCcpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChzdGF0dXMgPT09ICdsb3NlJykge1xuICAgICAgICAgICAgcmV0dXJuIHRyYW5zbGF0ZUtleSgnbG9zZUJldCcpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZGlzcGxheUJldHNIaXN0b3J5KGJldHMpIHtcbiAgICAgICAgY29uc3Qgc3Bpbkl0ZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3BpbnMtcm93Jyk7XG4gICAgICAgIGNvbnN0IG5vU3Bpbkl0ZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubm8tc3BpbnMnKTtcbiAgICAgICAgY29uc3Qgbm9CZXRzID0gIWJldHMgfHwgYmV0cy5sZW5ndGggPT09IDA7XG5cbiAgICAgICAgaWYgKG5vQmV0cyAmJiAhZGVidWcpIHtcbiAgICAgICAgICAgIHNwaW5JdGVtLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcbiAgICAgICAgICAgIG5vU3Bpbkl0ZW0uY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYoZGVidWcpe1xuICAgICAgICAgICAgY29uc29sZS53YXJuKFwiZGVidWcgYmV0IGhpc3RvcnlcIilcbiAgICAgICAgICAgIHJldHVybjtcblxuICAgICAgICB9XG5cbiAgICAgICAgc3Bpbkl0ZW0uaW5uZXJIVE1MID1cbiAgICAgICAgICAgIGBcbiAgICAgICA8ZGl2IGNsYXNzPVwic3BpbnMtcm93LWhlYWRcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb250ZW50LWRhdGVcIiBkYXRhLXRyYW5zbGF0ZT1cIm15QmV0RGF0ZVwiPjwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRlbnQtcHJpemVcIiBkYXRhLXRyYW5zbGF0ZT1cIm15QmV0SWRcIj48L2Rpdj5cbjwhLS0gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGVudC1zdGF0dXNcIiBkYXRhLXRyYW5zbGF0ZT1cIm15QmV0U3RhdHVzXCI+PC9kaXY+LS0+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICBgO1xuICAgICAgICBzcGluSXRlbS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJyk7XG4gICAgICAgIG5vU3Bpbkl0ZW0uY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xuXG4gICAgICAgIGxldCB1cGQgPSAwO1xuXG4gICAgICAgIGJldHMuZm9yRWFjaChzcGluID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHNwaW5EYXRlID0gbmV3IERhdGUoc3Bpbi5iZXREYXRlKTtcbiAgICAgICAgICAgIGNvbnN0IGZvcm1hdHRlZERhdGUgPSBzcGluRGF0ZS50b0xvY2FsZURhdGVTdHJpbmcoJ3VrLVVBJykuc2xpY2UoMCwgNSk7XG4gICAgICAgICAgICBjb25zdCBzdGF0dXMgPSByZXNvbHZlU3RhdHVzVHJhbnNsYXRpb24oc3Bpbi5zdGF0dXMpO1xuXG4gICAgICAgICAgICBpZiAoc3RhdHVzKSB7XG4gICAgICAgICAgICAgICAgY29uc3Qgc3BpbkVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICBzcGluRWxlbWVudC5jbGFzc0xpc3QuYWRkKCdzcGlucy1yb3ctaXRlbScpO1xuXG4gICAgICAgICAgICAgICAgY29uc3QgaXNXaW4gPSBzcGluLnN0YXR1cyA9PT0gXCJ3aW5cIjtcbiAgICAgICAgICAgICAgICBjb25zdCBzdGF0dXNDbGFzcyA9IGlzV2luID8gJ19kb25lJyA6ICcnO1xuXG4gICAgICAgICAgICAgICAgc3BpbkVsZW1lbnQuaW5uZXJIVE1MID0gYFxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImNvbnRlbnQtZGF0ZVwiPiR7Zm9ybWF0dGVkRGF0ZX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiY29udGVudC1wcml6ZVwiPklEOiR7c3Bpbi5jYXJkSUR9PC9zcGFuPlxuPCEtLSAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJjb250ZW50LXN0YXR1cyAke3N0YXR1c0NsYXNzfVwiPjwvc3Bhbj4tLT5cbiAgICAgICAgICAgICAgICBgO1xuICAgICAgICAgICAgICAgIHNwaW5JdGVtLmFwcGVuZENoaWxkKHNwaW5FbGVtZW50KTtcbiAgICAgICAgICAgICAgICB1cGQrKztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKHVwZCA9PT0gMCkge1xuICAgICAgICAgICAgc3Bpbkl0ZW0uY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xuICAgICAgICAgICAgbm9TcGluSXRlbS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzZXRCZXRIaXN0b3J5KHN0YWdlTnVtKXtcbiAgICAgICAgcmVxdWVzdChcIi9iZXRzSGlzdG9yeVwiKS50aGVuKChyZXMpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHVzZXIgPSByZXMuZmluZCh1c2VyID0+IHVzZXIudXNlcmlkID09PSB1c2VySWQpO1xuICAgICAgICAgICAgY29uc3QgYmV0cyA9IHVzZXI/LmJldHNcbiAgICAgICAgICAgIGRpc3BsYXlCZXRzSGlzdG9yeShiZXRzKVxuICAgICAgICB9KVxuICAgIH1cblxuXG4gICAgYXN5bmMgZnVuY3Rpb24gaW5pdCgpIHtcbiAgICAgICAgbGV0IGF0dGVtcHRzID0gMDtcbiAgICAgICAgY29uc3QgbWF4QXR0ZW1wdHMgPSAyMDtcbiAgICAgICAgY29uc3QgYXR0ZW1wdEludGVydmFsID0gNTA7XG5cbiAgICAgICAgZnVuY3Rpb24gdHJ5RGV0ZWN0VXNlcklkKCkge1xuICAgICAgICAgICAgaWYgKHdpbmRvdy5zdG9yZSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHN0YXRlID0gd2luZG93LnN0b3JlLmdldFN0YXRlKCk7XG4gICAgICAgICAgICAgICAgdXNlcklkID0gc3RhdGUuYXV0aC5pc0F1dGhvcml6ZWQgJiYgc3RhdGUuYXV0aC5pZCB8fCAnJztcbiAgICAgICAgICAgIH0gZWxzZSBpZiAod2luZG93LmdfdXNlcl9pZCkge1xuICAgICAgICAgICAgICAgIHVzZXJJZCA9IHdpbmRvdy5nX3VzZXJfaWQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBxdWlja0NoZWNrQW5kUmVuZGVyKCkge1xuICAgICAgICAgICAgY2hlY2tVc2VyQXV0aCgpO1xuXG5cblxuICAgICAgICAgICAgLy8gb3BlblBvcHVwQnlBdHRyKFwicHJpemVMYXB0b3BcIiwgdHJ1ZSlcblxuICAgICAgICAgICAgYnRuT3Blbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGluaXRTcGluKTtcblxuICAgICAgICAgICAgc2V0QmV0SGlzdG9yeSgpXG5cbiAgICAgICAgICAgIHRhYmxlVGFicy5mb3JFYWNoKHRhYiA9PiB7XG4gICAgICAgICAgICAgICAgdGFiLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT57XG4gICAgICAgICAgICAgICAgICAgIHRhYmxlVGFicy5mb3JFYWNoKHQgPT4gdC5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKSk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHRhYmxlVGFicylcblxuICAgICAgICAgICAgICAgICAgICBsZXQgdGFiTnVtID0gTnVtYmVyKHRhYi5nZXRBdHRyaWJ1dGUoXCJkYXRhLXdlZWtcIikpXG4gICAgICAgICAgICAgICAgICAgIHRhYi5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgICAgICAgICAgICAgICAgICAgLy8gcmVuZGVyVXNlcnModGFiTnVtKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgIC8vIHJlbmRlclVzZXJzKGFjdGl2ZVdlZWspXG5cbiAgICAgICAgICAgIHNldFRpbWVvdXQoaGlkZUxvYWRlciwgMTAwMCk7XG5cbiAgICAgICAgICAgIFNldFNsaWRlcldpZHRoQmx1cigpXG5cbiAgICAgICAgICAgIHNldFRpbWVvdXQodHJpZ2dlclNoYWtlLCBpbml0aWFsRGVsYXkpO1xuXG4gICAgICAgICAgICBwYXJ0aWNpcGF0ZUJ0bnMuZm9yRWFjaChidG4gPT4ge1xuICAgICAgICAgICAgICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHBhcnRpY2lwYXRlKTtcbiAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wb3B1cF9fY2xvc2UnKS5mb3JFYWNoKGNsb3NlQnRuID0+IHtcbiAgICAgICAgICAgICAgICBjbG9zZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNsb3NlQWxsUG9wdXBzKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcub3Blbi1idG4nKS5mb3JFYWNoKGJ0biA9PiB7XG4gICAgICAgICAgICAgICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBwb3B1cEF0dHIgPSBidG4uZ2V0QXR0cmlidXRlKCdkYXRhLXBvcHVwJyk7XG4gICAgICAgICAgICAgICAgICAgIG9wZW5Qb3B1cEJ5QXR0cihwb3B1cEF0dHIpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wb3B1cHMnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3Qgb3BlblBvcHVwRWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucG9wdXA6bm90KC5oaWRlKScpO1xuICAgICAgICAgICAgICAgIGlmIChvcGVuUG9wdXBFbCAmJiAhb3BlblBvcHVwRWwuY29udGFpbnMoZS50YXJnZXQpKSB7XG4gICAgICAgICAgICAgICAgICAgIGNsb3NlQWxsUG9wdXBzKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG5cblxuICAgICAgICAgICAgdXBkYXRlU2xpZGVyKCk7XG5cbiAgICAgICAgICAgIHNsaWRlci5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCBoYW5kbGVTdGFydCk7XG4gICAgICAgICAgICBzbGlkZXIuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgaGFuZGxlTW92ZSk7XG4gICAgICAgICAgICBzbGlkZXIuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIGhhbmRsZUVuZCk7XG4gICAgICAgICAgICBzbGlkZXIuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsIGhhbmRsZUVuZCk7XG5cbiAgICAgICAgICAgIHNsaWRlci5hZGRFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0JywgaGFuZGxlU3RhcnQpO1xuICAgICAgICAgICAgc2xpZGVyLmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNobW92ZScsIGhhbmRsZU1vdmUpO1xuICAgICAgICAgICAgc2xpZGVyLmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoZW5kJywgaGFuZGxlRW5kKTtcblxuICAgICAgICAgICAgYnRuTGVmdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IG1vdmVTbGlkZXIoLTEpKTtcbiAgICAgICAgICAgIGJ0blJpZ2h0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gbW92ZVNsaWRlcigxKSk7XG4gICAgICAgICAgICAvLyBkb3RzLmZvckVhY2goKGRvdCwgaW5kZXgpID0+IGRvdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IGdvVG9TbGlkZShpbmRleCkpKTtcblxuXG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCB3YWl0Rm9yVXNlcklkID0gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGludGVydmFsID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRyeURldGVjdFVzZXJJZCgpO1xuICAgICAgICAgICAgICAgIGlmICh1c2VySWQgfHwgYXR0ZW1wdHMgPj0gbWF4QXR0ZW1wdHMpIHtcbiAgICAgICAgICAgICAgICAgICAgcXVpY2tDaGVja0FuZFJlbmRlcigpO1xuICAgICAgICAgICAgICAgICAgICBjbGVhckludGVydmFsKGludGVydmFsKTtcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBhdHRlbXB0cysrO1xuICAgICAgICAgICAgfSwgYXR0ZW1wdEludGVydmFsKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgYXdhaXQgd2FpdEZvclVzZXJJZDtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBsb2FkVHJhbnNsYXRpb25zKCkge1xuICAgICAgICByZXR1cm4gcmVxdWVzdChgL25ldy10cmFuc2xhdGVzLyR7bG9jYWxlfWApXG4gICAgICAgICAgICAudGhlbihqc29uID0+IHtcbiAgICAgICAgICAgICAgICBpMThuRGF0YSA9IGpzb247XG4gICAgICAgICAgICAgICAgdHJhbnNsYXRlKCk7XG4gICAgICAgICAgICAgICAgY29uc3QgdGFyZ2V0Tm9kZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2FtQ2hpbGxcIik7XG4gICAgICAgICAgICAgICAgY29uc3QgbXV0YXRpb25PYnNlcnZlciA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKGZ1bmN0aW9uIChtdXRhdGlvbnMpIHtcbiAgICAgICAgICAgICAgICAgICAgbXV0YXRpb25PYnNlcnZlci5kaXNjb25uZWN0KCk7XG4gICAgICAgICAgICAgICAgICAgIHRyYW5zbGF0ZSgpO1xuICAgICAgICAgICAgICAgICAgICBtdXRhdGlvbk9ic2VydmVyLm9ic2VydmUodGFyZ2V0Tm9kZSwgeyBjaGlsZExpc3Q6IHRydWUsIHN1YnRyZWU6IHRydWUgfSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgbXV0YXRpb25PYnNlcnZlci5vYnNlcnZlKHRhcmdldE5vZGUsIHtcbiAgICAgICAgICAgICAgICAgICAgY2hpbGRMaXN0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBzdWJ0cmVlOiB0cnVlXG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIH0pO1xuICAgIH1cblxuXG4gICAgZnVuY3Rpb24gU2V0U2xpZGVyV2lkdGhCbHVyKCl7XG4gICAgICAgIGNvbnN0IHNsaWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jaGFsbGFuZ2VfX2N1cnJlbnQnKTtcbiAgICAgICAgY29uc3Qgc2xpZGVzID0gc2xpZGVyLnF1ZXJ5U2VsZWN0b3JBbGwoJy5jaGFsbGFuZ2VfX2N1cnJlbnQtaXRlbScpO1xuICAgICAgICBjb25zdCB0YWJzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNoYWxsYW5nZV9fdGFicy1pdGVtJyk7XG4gICAgICAgIGNvbnN0IGRvdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY2hhbGxhbmdlX19uYXYtZG90cy1pdGVtJyk7XG4gICAgICAgIGNvbnN0IGJ0bkxlZnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2hhbGxhbmdlX19uYXYtbGVmdCcpO1xuICAgICAgICBjb25zdCBidG5SaWdodCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jaGFsbGFuZ2VfX25hdi1yaWdodCcpO1xuXG4gICAgICAgIGxldCBjdXJyZW50SW5kZXggPSAwO1xuXG4gICAgICAgIGZ1bmN0aW9uIHVwZGF0ZVNsaWRlcihpbmRleCkge1xuICAgICAgICAgICAgc2xpZGVzLmZvckVhY2goc2xpZGUgPT4gc2xpZGUuY2xhc3NMaXN0LnJlbW92ZSgnX2FjdGl2ZScpKTtcbiAgICAgICAgICAgIHRhYnMuZm9yRWFjaCh0YWIgPT4gdGFiLmNsYXNzTGlzdC5yZW1vdmUoJ19hY3RpdmUnKSk7XG4gICAgICAgICAgICBkb3RzLmZvckVhY2goZG90ID0+IGRvdC5jbGFzc0xpc3QucmVtb3ZlKCdfYWN0aXZlJykpO1xuXG4gICAgICAgICAgICBzbGlkZXNbaW5kZXhdLmNsYXNzTGlzdC5hZGQoJ19hY3RpdmUnKTtcbiAgICAgICAgICAgIHRhYnNbaW5kZXhdLmNsYXNzTGlzdC5hZGQoJ19hY3RpdmUnKTtcbiAgICAgICAgICAgIGRvdHNbaW5kZXhdLmNsYXNzTGlzdC5hZGQoJ19hY3RpdmUnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHVwZGF0ZVNsaWRlcihjdXJyZW50RGF5TnVtYmVyIC0gMSk7XG4gICAgICAgIHRhYnMuZm9yRWFjaCgodGFiLCBpKSA9PntcbiAgICAgICAgICAgIGlmKGkgKyAxIDw9IGN1cnJlbnREYXlOdW1iZXIpe1xuICAgICAgICAgICAgICAgIHRhYi5jbGFzc0xpc3QuYWRkKCdfb3BlbicpO1xuICAgICAgICAgICAgICAgIHRhYi5jbGFzc0xpc3QucmVtb3ZlKCdfbG9jaycpO1xuXG4gICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICB0YWIuY2xhc3NMaXN0LnJlbW92ZSgnX2FjdGl2ZScpO1xuICAgICAgICAgICAgICAgIHRhYi5jbGFzc0xpc3QuYWRkKCdfbG9jaycpO1xuICAgICAgICAgICAgICAgIHRhYi5jbGFzc0xpc3QucmVtb3ZlKCdfb3BlbicpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYoaSArIDEgPT09IGFjdGl2ZVdlZWspe1xuICAgICAgICAgICAgICAgIHRhYi5jbGFzc0xpc3QuYWRkKCdfYWN0aXZlJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gKTtcblxuICAgICAgICAvLyBmdW5jdGlvbiBtb3ZlTGVmdCgpIHtcbiAgICAgICAgLy8gICAgIGN1cnJlbnRJbmRleCA9IChjdXJyZW50SW5kZXggLSAxICsgc2xpZGVzLmxlbmd0aCkgJSBzbGlkZXMubGVuZ3RoO1xuICAgICAgICAvLyAgICAgdXBkYXRlU2xpZGVyKGN1cnJlbnRJbmRleCk7XG4gICAgICAgIC8vIH1cbiAgICAgICAgLy9cbiAgICAgICAgLy8gZnVuY3Rpb24gbW92ZVJpZ2h0KCkge1xuICAgICAgICAvLyAgICAgY3VycmVudEluZGV4ID0gKGN1cnJlbnRJbmRleCArIDEpICUgc2xpZGVzLmxlbmd0aDtcbiAgICAgICAgLy8gICAgIHVwZGF0ZVNsaWRlcihjdXJyZW50SW5kZXgpO1xuICAgICAgICAvLyB9XG4gICAgICAgIC8vXG4gICAgICAgIC8vIGJ0bkxlZnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBtb3ZlTGVmdCk7XG4gICAgICAgIC8vIGJ0blJpZ2h0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgbW92ZVJpZ2h0KTtcblxuICAgICAgICAvLyB0YWJzLmZvckVhY2goKHRhYiwgaW5kZXgpID0+IHtcbiAgICAgICAgLy8gICAgIHRhYi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgLy8gICAgICAgICBjdXJyZW50SW5kZXggPSBpbmRleDtcbiAgICAgICAgLy8gICAgICAgICB1cGRhdGVTbGlkZXIoY3VycmVudEluZGV4KTtcbiAgICAgICAgLy8gICAgIH0pO1xuICAgICAgICAvLyB9KTtcbiAgICAgICAgLy9cbiAgICAgICAgLy8gZG90cy5mb3JFYWNoKChkb3QsIGluZGV4KSA9PiB7XG4gICAgICAgIC8vICAgICBkb3QuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIC8vICAgICAgICAgY3VycmVudEluZGV4ID0gaW5kZXg7XG4gICAgICAgIC8vICAgICAgICAgdXBkYXRlU2xpZGVyKGN1cnJlbnRJbmRleCk7XG4gICAgICAgIC8vICAgICB9KTtcbiAgICAgICAgLy8gfSk7XG5cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjaGVja1VzZXJBdXRoKCkge1xuICAgICAgICBjb25zdCBsb2FkVGltZSA9IDIwMDtcbiAgICAgICAgcmVxdWVzdChgL2ZhdnVzZXIvJHt1c2VySWR9YCkudGhlbigodXNlcikgPT4ge1xuXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBzaG93RWxlbWVudHMgPSAoZWxlbWVudHMpID0+IGVsZW1lbnRzLmZvckVhY2goZWwgPT4gZWwuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpKTtcbiAgICAgICAgICAgICAgICBjb25zdCBoaWRlRWxlbWVudHMgPSAoZWxlbWVudHMpID0+IGVsZW1lbnRzLmZvckVhY2goZWwgPT4gZWwuY2xhc3NMaXN0LmFkZCgnaGlkZScpKTtcblxuICAgICAgICAgICAgICAgIGlmICghdXNlcklkKSB7XG4gICAgICAgICAgICAgICAgICAgIGhpZGVFbGVtZW50cyhwYXJ0aWNpcGF0ZUJ0bnMpO1xuICAgICAgICAgICAgICAgICAgICBoaWRlRWxlbWVudHMocmVkaXJlY3RCdG5zKTtcbiAgICAgICAgICAgICAgICAgICAgc2hvd0VsZW1lbnRzKHVuYXV0aE1zZ3MpO1xuICAgICAgICAgICAgICAgICAgICBoaWRlTG9hZGVyKCk7XG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRDYXJkc1dyYXAuY2xhc3NMaXN0LmFkZCgnX3VuYXV0aCcpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKGZhbHNlKTtcbiAgICAgICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudENhcmRzV3JhcC5jbGFzc0xpc3QucmVtb3ZlKCdfdW5hdXRoJyk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaGlkZUVsZW1lbnRzKHVuYXV0aE1zZ3MpO1xuXG4gICAgICAgICAgICAgICAgaWYgKHVzZXIudXNlcmlkKSB7XG4gICAgICAgICAgICAgICAgICAgIGhpZGVFbGVtZW50cyhwYXJ0aWNpcGF0ZUJ0bnMpO1xuICAgICAgICAgICAgICAgICAgICBzaG93RWxlbWVudHMocmVkaXJlY3RCdG5zKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBzaG93RWxlbWVudHMocGFydGljaXBhdGVCdG5zKTtcbiAgICAgICAgICAgICAgICAgICAgaGlkZUVsZW1lbnRzKHJlZGlyZWN0QnRucyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGhpZGVMb2FkZXIoKTtcblxuICAgICAgICAgICAgICAgIHNldFVzZXJQcm9ncmVzcyh1c2VyKTtcblxuICAgICAgICAgICAgfSwgbG9hZFRpbWUpXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVwb3J0RXJyb3IoZXJyKSB7XG4gICAgICAgIGNvbnN0IHJlcG9ydERhdGEgPSB7XG4gICAgICAgICAgICBvcmlnaW46IHdpbmRvdy5sb2NhdGlvbi5ocmVmLFxuICAgICAgICAgICAgdXNlcmlkOiB1c2VySWQsXG4gICAgICAgICAgICBlcnJvclRleHQ6IGVycj8uZXJyb3IgfHwgZXJyPy50ZXh0IHx8IGVycj8ubWVzc2FnZSB8fCAnVW5rbm93biBlcnJvcicsXG4gICAgICAgICAgICB0eXBlOiBlcnI/Lm5hbWUgfHwgJ1Vua25vd25FcnJvcicsXG4gICAgICAgICAgICBzdGFjazogZXJyPy5zdGFjayB8fCAnJ1xuICAgICAgICB9O1xuXG4gICAgICAgIGZldGNoKCdodHRwczovL2Zhdi1wcm9tLmNvbS9hcGktY21zL3JlcG9ydHMvYWRkJywge1xuICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHJlcG9ydERhdGEpXG4gICAgICAgIH0pLmNhdGNoKGNvbnNvbGUud2Fybik7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gdHJhbnNsYXRlKCkge1xuICAgICAgICBjb25zdCBlbGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLXRyYW5zbGF0ZV0nKVxuICAgICAgICBpZiAoZWxlbXMgJiYgZWxlbXMubGVuZ3RoKSB7XG4gICAgICAgICAgICBpZih0cmFuc2xhdGVTdGF0ZSl7XG4gICAgICAgICAgICAgICAgZWxlbXMuZm9yRWFjaChlbGVtID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qga2V5ID0gZWxlbS5nZXRBdHRyaWJ1dGUoJ2RhdGEtdHJhbnNsYXRlJyk7XG4gICAgICAgICAgICAgICAgICAgIGVsZW0uaW5uZXJIVE1MID0gaTE4bkRhdGFba2V5XSB8fCAnKi0tLS1ORUVEIFRPIEJFIFRSQU5TTEFURUQtLS0tKiAgIGtleTogICcgKyBrZXk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChpMThuRGF0YVtrZXldKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlbGVtLnJlbW92ZUF0dHJpYnV0ZSgnZGF0YS10cmFuc2xhdGUnKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInRyYW5zbGF0aW9uIHdvcmtzIVwiKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJlZnJlc2hMb2NhbGl6ZWRDbGFzcyhtYWluUGFnZSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVmcmVzaExvY2FsaXplZENsYXNzKGVsZW1lbnQpIHtcbiAgICAgICAgaWYgKCFlbGVtZW50KSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgZm9yIChjb25zdCBsYW5nIG9mIFsndWsnLCAnZW4nXSkge1xuICAgICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKGxhbmcpO1xuICAgICAgICB9XG4gICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChsb2NhbGUpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJlbmRlclVzZXJzKHdlZWspIHtcbiAgICAgICAgcmVxdWVzdChgL3VzZXJzLyR7d2Vla31gKVxuICAgICAgICAgICAgLnRoZW4oZGF0YSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgdXNlcnMgPSBkYXRhO1xuICAgICAgICAgICAgICAgIHBvcHVsYXRlVXNlcnNUYWJsZSh1c2VycywgdXNlcklkLCB3ZWVrKTtcbiAgICAgICAgICAgIH0pO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHBvcHVsYXRlVXNlcnNUYWJsZSh1c2VycywgY3VycmVudFVzZXJJZCwgd2Vlaykge1xuICAgICAgICByZXN1bHRzVGFibGUuaW5uZXJIVE1MID0gJyc7XG4gICAgICAgIHJlc3VsdHNUYWJsZU90aGVyLmlubmVySFRNTCA9ICcnO1xuICAgICAgICBpZiAoIXVzZXJzPy5sZW5ndGgpIHJldHVybjtcbiAgICAgICAgY29uc3QgY3VycmVudFVzZXIgPSB1c2Vycy5maW5kKHVzZXIgPT4gdXNlci51c2VyaWQgPT09IGN1cnJlbnRVc2VySWQpO1xuICAgICAgICBjb25zdCBpc1RvcEN1cnJlbnRVc2VyID0gY3VycmVudFVzZXIgJiYgdXNlcnMuc2xpY2UoMCwgMTApLnNvbWUodXNlciA9PiB1c2VyLnVzZXJpZCA9PT0gY3VycmVudFVzZXJJZCk7XG4gICAgICAgIGNvbnN0IHRvcFVzZXJzTGVuZ3RoID0gIXVzZXJJZCB8fCBpc1RvcEN1cnJlbnRVc2VyICA/IDEzIDogMTA7XG4gICAgICAgIGNvbnN0IHRvcFVzZXJzID0gdXNlcnMuc2xpY2UoMCwgdG9wVXNlcnNMZW5ndGgpO1xuICAgICAgICB0b3BVc2Vycy5mb3JFYWNoKHVzZXIgPT4ge1xuICAgICAgICAgICAgZGlzcGxheVVzZXIodXNlciwgdXNlci51c2VyaWQgPT09IGN1cnJlbnRVc2VySWQsIHJlc3VsdHNUYWJsZSwgdG9wVXNlcnMsIGlzVG9wQ3VycmVudFVzZXIsIHdlZWspO1xuICAgICAgICB9KTtcbiAgICAgICAgaWYgKCFpc1RvcEN1cnJlbnRVc2VyICYmIGN1cnJlbnRVc2VyKSB7XG4gICAgICAgICAgICBkaXNwbGF5VXNlcihjdXJyZW50VXNlciwgdHJ1ZSwgcmVzdWx0c1RhYmxlT3RoZXIsIHVzZXJzLCBmYWxzZSwgd2Vlayk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBkaXNwbGF5VXNlcih1c2VyLCBpc0N1cnJlbnRVc2VyLCB0YWJsZSwgdXNlcnMsIGlzVG9wQ3VycmVudFVzZXIsIHdlZWspIHtcbiAgICAgICAgY29uc3QgcmVuZGVyUm93ID0gKHVzZXJEYXRhLCBvcHRpb25zID0ge30pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHsgaGlnaGxpZ2h0ID0gZmFsc2UsIG5laWdoYm9yID0gZmFsc2UgfSA9IG9wdGlvbnM7XG4gICAgICAgICAgICBjb25zdCB1c2VyUm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICB1c2VyUm93LmNsYXNzTGlzdC5hZGQoJ3RhYmxlX19yb3cnKTtcblxuICAgICAgICAgICAgY29uc3QgdXNlclBsYWNlID0gdXNlcnMuaW5kZXhPZih1c2VyRGF0YSkgKyAxO1xuICAgICAgICAgICAgY29uc3QgcHJpemVLZXkgPSBkZWJ1ZyA/IG51bGwgOiBnZXRQcml6ZVRyYW5zbGF0aW9uS2V5KHVzZXJQbGFjZSwgd2Vlayk7XG5cbiAgICAgICAgICAgIGlmICh1c2VyUGxhY2UgPD0gMykge1xuICAgICAgICAgICAgICAgIHVzZXJSb3cuY2xhc3NMaXN0LmFkZChgcGxhY2Uke3VzZXJQbGFjZX1gKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGhpZ2hsaWdodCB8fCBpc0N1cnJlbnRVc2VyICYmICFuZWlnaGJvcikge1xuICAgICAgICAgICAgICAgIHVzZXJSb3cuY2xhc3NMaXN0LmFkZCgneW91Jyk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKG5laWdoYm9yKSB7XG4gICAgICAgICAgICAgICAgdXNlclJvdy5jbGFzc0xpc3QuYWRkKCdfbmVpZ2hib3InKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdXNlclJvdy5pbm5lckhUTUwgPSBgXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGFibGVfX3Jvdy1pdGVtXCI+XG4gICAgICAgICAgICAgICAgJHt1c2VyUGxhY2UgPCAxMCA/ICcwJyArIHVzZXJQbGFjZSA6IHVzZXJQbGFjZX1cbiAgICAgICAgICAgICAgICAke2lzQ3VycmVudFVzZXIgJiYgIW5laWdoYm9yID8gJzxzcGFuIGNsYXNzPVwieW91XCI+JyArIHRyYW5zbGF0ZUtleShcInlvdVwiKSArICc8L3NwYW4+JyA6ICcnfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGFibGVfX3Jvdy1pdGVtXCI+XG4gICAgICAgICAgICAgICAgJHtpc0N1cnJlbnRVc2VyICYmICFuZWlnaGJvciA/IHVzZXJEYXRhLnVzZXJpZCA6IG1hc2tVc2VySWQodXNlckRhdGEudXNlcmlkKX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRhYmxlX19yb3ctaXRlbVwiPlxuICAgICAgICAgICAgICAgICR7dXNlckRhdGEucG9pbnRzfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGFibGVfX3Jvdy1pdGVtXCI+XG4gICAgICAgICAgICAgICAgJHtwcml6ZUtleSA/IHRyYW5zbGF0ZUtleShwcml6ZUtleSkgOiAnIC0gJ31cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRhYmxlX19yb3ctaXRlbVwiPlxuICAgICAgICAgICAgICAgICR7cHJpemVLZXkgPyB0cmFuc2xhdGVLZXkocHJpemVLZXkpIDogJyAtICd9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgYDtcblxuICAgICAgICAgICAgdGFibGUuYXBwZW5kKHVzZXJSb3cpO1xuICAgICAgICB9O1xuICAgICAgICBpZiAoaXNDdXJyZW50VXNlciAmJiAhaXNUb3BDdXJyZW50VXNlcikge1xuICAgICAgICAgICAgY29uc3QgaW5kZXggPSB1c2Vycy5pbmRleE9mKHVzZXIpO1xuICAgICAgICAgICAgaWYgKHVzZXJzW2luZGV4IC0gMV0pIHtcbiAgICAgICAgICAgICAgICByZW5kZXJSb3codXNlcnNbaW5kZXggLSAxXSwgeyBuZWlnaGJvcjogdHJ1ZSB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJlbmRlclJvdyh1c2VyLCB7IGhpZ2hsaWdodDogdHJ1ZSB9KTtcbiAgICAgICAgICAgIGlmICh1c2Vyc1tpbmRleCArIDFdKSB7XG4gICAgICAgICAgICAgICAgcmVuZGVyUm93KHVzZXJzW2luZGV4ICsgMV0sIHsgbmVpZ2hib3I6IHRydWUgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZW5kZXJSb3codXNlcik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiB0cmFuc2xhdGVLZXkoa2V5LCBkZWZhdWx0VmFsdWUpIHtcbiAgICAgICAgaWYgKCFrZXkpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBsZXQgbmVlZEtleSA9IGRlYnVnID8ga2V5IDogYCotLS0tTkVFRCBUTyBCRSBUUkFOU0xBVEVELS0tLSoga2V5OiAke2tleX1gXG5cbiAgICAgICAgZGVmYXVsdFZhbHVlID0gIG5lZWRLZXkgfHwga2V5O1xuICAgICAgICByZXR1cm4gaTE4bkRhdGFba2V5XSB8fCBkZWZhdWx0VmFsdWU7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbWFza1VzZXJJZCh1c2VySWQpIHtcbiAgICAgICAgcmV0dXJuIFwiKipcIiArIHVzZXJJZC50b1N0cmluZygpLnNsaWNlKDIpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldFByaXplVHJhbnNsYXRpb25LZXkocGxhY2UsIHdlZWspIHtcbiAgICAgICAgaWYgKHBsYWNlIDw9IDMpIHJldHVybiBgcHJpemVfJHt3ZWVrfS0ke3BsYWNlfWA7XG4gICAgICAgIGlmIChwbGFjZSA8PSAxMCkgcmV0dXJuIGBwcml6ZV8ke3dlZWt9LTQtMTBgO1xuICAgICAgICBpZiAocGxhY2UgPD0gMjUpIHJldHVybiBgcHJpemVfJHt3ZWVrfS0xMS0yNWA7XG4gICAgICAgIGlmIChwbGFjZSA8PSA1MCkgcmV0dXJuIGBwcml6ZV8ke3dlZWt9LTI2LTUwYDtcbiAgICAgICAgaWYgKHBsYWNlIDw9IDc1KSByZXR1cm4gYHByaXplXyR7d2Vla30tNTEtNzVgO1xuICAgICAgICBpZiAocGxhY2UgPD0gMTAwKSByZXR1cm4gYHByaXplXyR7d2Vla30tNzYtMTAwYDtcbiAgICAgICAgaWYgKHBsYWNlIDw9IDEyNSkgcmV0dXJuIGBwcml6ZV8ke3dlZWt9LTEwMS0xMjVgO1xuICAgICAgICBpZiAocGxhY2UgPD0gMTUwKSByZXR1cm4gYHByaXplXyR7d2Vla30tMTI2LTE1MGA7XG4gICAgICAgIGlmIChwbGFjZSA8PSAxNzUpIHJldHVybiBgcHJpemVfJHt3ZWVrfS0xNTEtMTc1YDtcbiAgICAgICAgaWYgKHBsYWNlIDw9IDIwMCkgcmV0dXJuIGBwcml6ZV8ke3dlZWt9LTE3Ni0yMDBgO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHBhcnRpY2lwYXRlKCkge1xuICAgICAgICBpZiAoIXVzZXJJZCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHBhcmFtcyA9IHsgdXNlcmlkOiB1c2VySWQgfTtcbiAgICAgICAgZmV0Y2goYXBpVVJMICsgJy91c2VyLycsIHtcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAnQWNjZXB0JzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHBhcmFtcylcbiAgICAgICAgfSkudGhlbihyZXMgPT4gcmVzLmpzb24oKSlcbiAgICAgICAgICAgIC50aGVuKHJlcyA9PiB7XG4gICAgICAgICAgICAgICAgbG9hZGVyQnRuID0gdHJ1ZVxuICAgICAgICAgICAgICAgIHRvZ2dsZUNsYXNzZXMocGFydGljaXBhdGVCdG5zLCBcImxvYWRlclwiKVxuICAgICAgICAgICAgICAgIHRvZ2dsZVRyYW5zbGF0ZXMocGFydGljaXBhdGVCdG5zLCBcImxvYWRlclwiKVxuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT57XG4gICAgICAgICAgICAgICAgICAgIHRvZ2dsZVRyYW5zbGF0ZXMocGFydGljaXBhdGVCdG5zLCBcImxvYWRlcl9yZWFkeVwiKVxuICAgICAgICAgICAgICAgICAgICB0b2dnbGVDbGFzc2VzKHBhcnRpY2lwYXRlQnRucywgXCJkb25lXCIpXG4gICAgICAgICAgICAgICAgICAgIHRvZ2dsZUNsYXNzZXMocGFydGljaXBhdGVCdG5zLCBcImxvYWRlclwiKVxuICAgICAgICAgICAgICAgIH0sIDUwMClcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpPT57XG4gICAgICAgICAgICAgICAgICAgIGNoZWNrVXNlckF1dGgoKVxuICAgICAgICAgICAgICAgIH0sIDEwMDApXG5cbiAgICAgICAgICAgIH0pO1xuICAgIH1cbiAgICBmdW5jdGlvbiB1cGRhdGVTbGlkZXIoKSB7XG4gICAgICAgIGl0ZW1zLmZvckVhY2goKGl0ZW0sIGluZGV4KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBkaXN0YW5jZSA9IGluZGV4IC0gY3VycmVudEluZGV4O1xuICAgICAgICAgICAgbGV0IG5ld1Bvc2l0aW9uID0gZGlzdGFuY2UgKiAxMDU7XG5cbiAgICAgICAgICAgIGlmIChkaXN0YW5jZSA+IHRvdGFsSXRlbXMgLyAyKSB7XG4gICAgICAgICAgICAgICAgbmV3UG9zaXRpb24gLT0gdG90YWxJdGVtcyAqIDEwNTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZGlzdGFuY2UgPCAtdG90YWxJdGVtcyAvIDIpIHtcbiAgICAgICAgICAgICAgICBuZXdQb3NpdGlvbiArPSB0b3RhbEl0ZW1zICogMTA1O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb25zdCBzY2FsZSA9IGluZGV4ID09PSBjdXJyZW50SW5kZXggPyAxIDogMTtcblxuICAgICAgICAgICAgaXRlbS5zdHlsZS50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlWCgke25ld1Bvc2l0aW9ufSUpIHNjYWxlKCR7c2NhbGV9KWA7XG4gICAgICAgICAgICBpdGVtLnN0eWxlLnpJbmRleCA9IGluZGV4ID09PSBjdXJyZW50SW5kZXggPyAyIDogMTtcblxuICAgICAgICAgICAgY29uc3QgaXNWaXNpYmxlID0gTWF0aC5hYnMoZGlzdGFuY2UpIDw9IDEgfHxcbiAgICAgICAgICAgICAgICAoaW5kZXggPT09IDAgJiYgY3VycmVudEluZGV4ID09PSB0b3RhbEl0ZW1zIC0gMSkgfHxcbiAgICAgICAgICAgICAgICAoaW5kZXggPT09IHRvdGFsSXRlbXMgLSAxICYmIGN1cnJlbnRJbmRleCA9PT0gMCk7XG5cbiAgICAgICAgICAgIGl0ZW0uY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZGVuJywgIWlzVmlzaWJsZSk7XG4gICAgICAgICAgICBpdGVtLmNsYXNzTGlzdC50b2dnbGUoJ2FjdGl2ZScsIGluZGV4ID09PSBjdXJyZW50SW5kZXgpO1xuXG4gICAgICAgICAgICBpdGVtLmNsYXNzTGlzdC5yZW1vdmUoJ2xlZnQtc2xpZGUnLCAncmlnaHQtc2xpZGUnKTtcbiAgICAgICAgICAgIGlmIChkaXN0YW5jZSA9PT0gMSB8fCAoY3VycmVudEluZGV4ID09PSB0b3RhbEl0ZW1zIC0gMSAmJiBpbmRleCA9PT0gMCkpIHtcbiAgICAgICAgICAgICAgICBpdGVtLmNsYXNzTGlzdC5hZGQoJ3JpZ2h0LXNsaWRlJyk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGRpc3RhbmNlID09PSAtMSB8fCAoY3VycmVudEluZGV4ID09PSAwICYmIGluZGV4ID09PSB0b3RhbEl0ZW1zIC0gMSkpIHtcbiAgICAgICAgICAgICAgICBpdGVtLmNsYXNzTGlzdC5hZGQoJ2xlZnQtc2xpZGUnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgZG90cy5mb3JFYWNoKGRvdCA9PiBkb3QuY2xhc3NMaXN0LnJlbW92ZSgnX2FjdGl2ZScpKTtcbiAgICAgICAgaWYgKGRvdHNbY3VycmVudEluZGV4XSkge1xuICAgICAgICAgICAgZG90c1tjdXJyZW50SW5kZXhdLmNsYXNzTGlzdC5hZGQoJ19hY3RpdmUnKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIG1vdmVTbGlkZXIob2Zmc2V0KSB7XG4gICAgICAgIGN1cnJlbnRJbmRleCA9IChjdXJyZW50SW5kZXggKyBvZmZzZXQgKyB0b3RhbEl0ZW1zKSAlIHRvdGFsSXRlbXM7XG4gICAgICAgIHVwZGF0ZVNsaWRlcigpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdvVG9TbGlkZShpbmRleCkge1xuICAgICAgICBjdXJyZW50SW5kZXggPSBpbmRleDtcbiAgICAgICAgdXBkYXRlU2xpZGVyKCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaGFuZGxlU3RhcnQoZXZlbnQpIHtcbiAgICAgICAgaXNEcmFnZ2luZyA9IHRydWU7XG4gICAgICAgIHN0YXJ0WCA9IGV2ZW50LmNsaWVudFggfHwgZXZlbnQudG91Y2hlc1swXS5jbGllbnRYO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGhhbmRsZU1vdmUoZXZlbnQpIHtcbiAgICAgICAgaWYgKCFpc0RyYWdnaW5nKSByZXR1cm47XG4gICAgICAgIGNvbnN0IGN1cnJlbnRYID0gZXZlbnQuY2xpZW50WCB8fCBldmVudC50b3VjaGVzWzBdLmNsaWVudFg7XG4gICAgICAgIGNvbnN0IGRpZmZYID0gY3VycmVudFggLSBzdGFydFg7XG5cbiAgICAgICAgaWYgKE1hdGguYWJzKGRpZmZYKSA+IDUwKSB7XG4gICAgICAgICAgICBtb3ZlU2xpZGVyKGRpZmZYID4gMCA/IC0xIDogMSk7XG4gICAgICAgICAgICBpc0RyYWdnaW5nID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBoYW5kbGVFbmQoKSB7XG4gICAgICAgIGlzRHJhZ2dpbmcgPSBmYWxzZTtcbiAgICB9XG5cbiAgICAvLyBmdW5jdGlvbiBvcGVuUG9wdXBCeUF0dHIocG9wdXBBdHRyLCBpc1Nob3dQcm9ncmVzcyA9IGZhbHNlKSB7XG4gICAgLy8gICAgIGNvbnN0IGFsbFBvcHVwcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wb3B1cCcpO1xuICAgIC8vICAgICBhbGxQb3B1cHMuZm9yRWFjaChwID0+IHAuY2xhc3NMaXN0LmFkZCgnaGlkZScpKTtcbiAgICAvL1xuICAgIC8vICAgICBjb25zdCB0YXJnZXRQb3B1cCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5wb3B1cFtkYXRhLXBvcHVwPVwiJHtwb3B1cEF0dHJ9XCJdYCk7XG4gICAgLy8gICAgIGlmICh0YXJnZXRQb3B1cCkge1xuICAgIC8vICAgICAgICAgdGFyZ2V0UG9wdXAuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpO1xuICAgIC8vICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBvcHVwcycpLmNsYXNzTGlzdC5yZW1vdmUoJ29wYWNpdHktb3ZlcmxheScpO1xuICAgIC8vICAgICB9XG4gICAgLy9cbiAgICAvLyAgICAgY29uc3QgcHJvZ3Jlc3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucG9wdXBzIC5wcm9ncmVzcycpO1xuICAgIC8vICAgICBpZiAocHJvZ3Jlc3MpIHtcbiAgICAvLyAgICAgICAgIHByb2dyZXNzLmNsYXNzTGlzdC50b2dnbGUoJ2hpZGUnLCAhaXNTaG93UHJvZ3Jlc3MpO1xuICAgIC8vICAgICB9XG4gICAgLy8gfVxuXG5cbiAgICBmdW5jdGlvbiBjbG9zZUFsbFBvcHVwcygpIHtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnBvcHVwJykuZm9yRWFjaChwID0+IHAuY2xhc3NMaXN0LmFkZCgnaGlkZScpKTtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnBvcHVwcyAucHJvZ3Jlc3MnKS5mb3JFYWNoKHAgPT4gcC5jbGFzc0xpc3QuYWRkKCdoaWRlJykpO1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucG9wdXBzJykuY2xhc3NMaXN0LmFkZCgnb3BhY2l0eS1vdmVybGF5Jyk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gdHJpZ2dlclNoYWtlKCkge1xuICAgICAgICBib3guY2xhc3NMaXN0LmFkZCgnc2hha2UnKTtcblxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIGJveC5jbGFzc0xpc3QucmVtb3ZlKCdzaGFrZScpO1xuICAgICAgICAgICAgY29uc3QgbmV4dFNoYWtlID0gTWF0aC5yYW5kb20oKSAqIDYwMDAgKyA0MDAwO1xuICAgICAgICAgICAgc2V0VGltZW91dCh0cmlnZ2VyU2hha2UsIG5leHRTaGFrZSk7XG4gICAgICAgIH0sIDEyMDApO1xuICAgIH1cblxuXG5cbiAgICBsb2FkVHJhbnNsYXRpb25zKCkudGhlbihpbml0KVxuXG4gICAgLy8gaW5pdCgpXG5cblxuICAgIC8vLyBURVNUXG5cbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubWVudS10ZXN0X19idG4nKS5mb3JFYWNoKGJ0biA9PiB7XG4gICAgICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIGJ0bi5wYXJlbnRFbGVtZW50LmNsYXNzTGlzdC50b2dnbGUoJ29wZW4nKTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PiB7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWVudS1idG5cIik/LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1lbnUtdGVzdFwiKT8uY2xhc3NMaXN0LnRvZ2dsZShcImhpZGVcIik7XG4gICAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgY29uc3QgbG5nQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5sbmctYnRuXCIpXG5cbiAgICBsbmdCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgaWYgKHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oXCJsb2NhbGVcIikpIHtcbiAgICAgICAgICAgIHNlc3Npb25TdG9yYWdlLnJlbW92ZUl0ZW0oXCJsb2NhbGVcIik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKFwibG9jYWxlXCIsIFwiZW5cIik7XG4gICAgICAgIH1cbiAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xuICAgIH0pO1xuXG4gICAgY29uc3QgYXV0aEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYXV0aC1idG5cIilcbiAgICBjb25zdCBiZXRCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJ0bi1iZXQtb25saW5lXCIpXG5cbiAgICBhdXRoQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PntcbiAgICAgICAgaWYodXNlcklkKXtcbiAgICAgICAgICAgIHNlc3Npb25TdG9yYWdlLnJlbW92ZUl0ZW0oXCJ1c2VySWRcIilcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKFwidXNlcklkXCIsIFwiNzc3Nzc3XCIpXG4gICAgICAgIH1cbiAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpXG4gICAgfSk7XG5cblxufSkoKTtcblxuLy8g0YbRjiDRhNGD0L3QutGG0ZbRjiDQstC40LTQsNC70LgsINCwINC+0YHQvdC+0LLQvdGDINGA0L7Qt9C60L7QvNC10L3RgtC4XG5mdW5jdGlvbiBvcGVuUG9wdXBCeUF0dHIocG9wdXBBdHRyLCBpc1Nob3dQcm9ncmVzcyA9IGZhbHNlKSB7XG4gICAgY29uc3QgYWxsUG9wdXBzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnBvcHVwJyk7XG4gICAgYWxsUG9wdXBzLmZvckVhY2gocCA9PiBwLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKSk7XG5cbiAgICBjb25zdCB0YXJnZXRQb3B1cCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5wb3B1cFtkYXRhLXBvcHVwPVwiJHtwb3B1cEF0dHJ9XCJdYCk7XG4gICAgaWYgKHRhcmdldFBvcHVwKSB7XG4gICAgICAgIHRhcmdldFBvcHVwLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKTtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBvcHVwcycpLmNsYXNzTGlzdC5yZW1vdmUoJ29wYWNpdHktb3ZlcmxheScpO1xuICAgIH1cblxuICAgIGNvbnN0IHByb2dyZXNzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBvcHVwcyAucHJvZ3Jlc3MnKTtcbiAgICBpZiAocHJvZ3Jlc3MpIHtcbiAgICAgICAgcHJvZ3Jlc3MuY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZScsICFpc1Nob3dQcm9ncmVzcyk7XG4gICAgfVxufVxuLy8g0YbRjiDRhNGD0L3QutGG0ZbRjiDQstC40LTQsNC70LgsINCwINC+0YHQvdC+0LLQvdGDINGA0L7Qt9C60L7QvNC10L3RgtC4XG5cbiJdfQ==
