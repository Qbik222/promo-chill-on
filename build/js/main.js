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
                  renderUsers(tabNum);
                });
              });
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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOlsiYXBpVVJMIiwiY3VycmVudERhdGUiLCJEYXRlIiwiZ2V0QWN0aXZlV2VlayIsInByb21vU3RhcnREYXRlIiwid2Vla0R1cmF0aW9uIiwid2Vla0RhdGVzIiwiRGF5IiwiV2VlayIsImZvcm1hdERhdGUiLCJkYXRlIiwiZ2V0RGF0ZSIsInRvU3RyaW5nIiwicGFkU3RhcnQiLCJnZXRNb250aCIsImNhbGN1bGF0ZVdlZWtQZXJpb2QiLCJ3ZWVrSW5kZXgiLCJiYXNlU3RhcnQiLCJnZXRUaW1lIiwic3RhcnQiLCJlbmQiLCJhY3RpdmVXZWVrSW5kZXgiLCJpIiwiYWN0aXZlV2VlayIsImNvbnNvbGUiLCJsb2ciLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJmb3JFYWNoIiwibGlzdCIsImNsYXNzTGlzdCIsImFkZCIsImN1cnJlbnRMaXN0IiwicXVlcnlTZWxlY3RvciIsInJlbW92ZSIsImdldEN1cnJlbnREYXlOdW1iZXIiLCJkaWZmSW5NcyIsImRheU51bWJlciIsIk1hdGgiLCJmbG9vciIsImN1cnJlbnREYXlOdW1iZXIiLCJtYWluUGFnZSIsImNoYWxsYW5nZUJsb2NrIiwiY2hhbGxhbmdlRGVwb3NpdEJ0biIsInVuYXV0aE1zZ3MiLCJwYXJ0aWNpcGF0ZUJ0bnMiLCJyZWRpcmVjdEJ0bnMiLCJsb2FkZXIiLCJjdXJyZW50Q2FyZHNXcmFwIiwicHJvZ3Jlc3NCYXIiLCJjaGFsbGFuZ2VCbHVyIiwiY2hhbGxhbmdlQmx1clN0YXR1cyIsInByb2dyZXNzQm94IiwiY2hhbGxhbmdlQnRuUG9pbnRlciIsImJ0bk9wZW4iLCJjb3VudGVyUG9pbnRzIiwicG9wdXBzIiwic3RyZWFrRGF5cyIsInN0cmVha0RheXNQb3B1cCIsInJlc3VsdHNUYWJsZSIsInJlc3VsdHNUYWJsZU90aGVyIiwidGFibGVUYWJzIiwidWtMZW5nIiwiZW5MZW5nIiwidG9nZ2xlQ2xhc3NlcyIsImVsZW1lbnRzIiwiY2xhc3NOYW1lIiwiZWwiLCJ0b2dnbGUiLCJ0b2dnbGVUcmFuc2xhdGVzIiwiZGF0YUF0dHIiLCJzZXRBdHRyaWJ1dGUiLCJpbm5lckhUTUwiLCJpMThuRGF0YSIsInJlbW92ZUF0dHJpYnV0ZSIsImxvYWRlckJ0biIsImxvY2FsZSIsInNlc3Npb25TdG9yYWdlIiwiZ2V0SXRlbSIsImRlYnVnIiwiaGlkZUxvYWRlciIsInRyYW5zbGF0ZVN0YXRlIiwidXNlcklkIiwiTnVtYmVyIiwiYm94IiwiaW5pdGlhbERlbGF5IiwicmFuZG9tIiwic2xpZGVyIiwiaXRlbXMiLCJkb3RzIiwiYnRuTGVmdCIsImJ0blJpZ2h0IiwiY3VycmVudEluZGV4IiwidG90YWxJdGVtcyIsImxlbmd0aCIsImlzRHJhZ2dpbmciLCJzdGFydFgiLCJyZXF1ZXN0IiwibGluayIsImV4dHJhT3B0aW9ucyIsImZldGNoIiwiaGVhZGVycyIsInRoZW4iLCJyZXMiLCJvayIsIkVycm9yIiwianNvbiIsImVyciIsImVycm9yIiwiUHJvbWlzZSIsInJlamVjdCIsImJvZHkiLCJzdHlsZSIsIm92ZXJmbG93IiwiaW5pdFNwaW4iLCJ0ZXh0Q29udGVudCIsInRyYW5zbGF0ZUtleSIsInNlbmRTcGluUmVxdWVzdCIsInByaXplIiwibnVtYmVyIiwic3RyZWFrQm9udXMiLCJzZXRTdHJlYWtEYXlzIiwib3BlblBvcHVwQnlBdHRyIiwicmVzb2x2ZSIsInR5cGUiLCJwYXJhbXMiLCJ1c2VyaWQiLCJtZXRob2QiLCJKU09OIiwic3RyaW5naWZ5Iiwic3RyZWFrIiwiZGF5Iiwic2V0VXNlclByb2dyZXNzIiwidXNlckRhdGEiLCJzcGluQWxsb3dlZCIsInBvaW50c1BlckRheSIsInNwaW5zU3RyZWFrIiwibGFzdFVwZGF0ZSIsInRocmVzaG9sZFBvaW50cyIsInByb2dyZXNzIiwibWluIiwidG9GaXhlZCIsInNldFByb2dyZXNzV2lkdGgiLCJwcm9ncmVzc1BlcmNlbnQiLCJ3aWR0aCIsImJhclJlY3QiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJwYXJlbnRSZWN0IiwicmlnaHRFZGdlIiwicmlnaHQiLCJsZWZ0IiwicmVzb2x2ZVN0YXR1c1RyYW5zbGF0aW9uIiwic3RhdHVzIiwiZGlzcGxheUJldHNIaXN0b3J5IiwiYmV0cyIsInNwaW5JdGVtIiwibm9TcGluSXRlbSIsIm5vQmV0cyIsIndhcm4iLCJ1cGQiLCJzcGluIiwic3BpbkRhdGUiLCJiZXREYXRlIiwiZm9ybWF0dGVkRGF0ZSIsInRvTG9jYWxlRGF0ZVN0cmluZyIsInNsaWNlIiwic3BpbkVsZW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiaXNXaW4iLCJzdGF0dXNDbGFzcyIsImNhcmRJRCIsImFwcGVuZENoaWxkIiwic2V0QmV0SGlzdG9yeSIsInN0YWdlTnVtIiwidXNlciIsImZpbmQiLCJpbml0IiwidHJ5RGV0ZWN0VXNlcklkIiwicXVpY2tDaGVja0FuZFJlbmRlciIsImNoZWNrVXNlckF1dGgiLCJhZGRFdmVudExpc3RlbmVyIiwidGFiIiwidCIsInRhYk51bSIsImdldEF0dHJpYnV0ZSIsInJlbmRlclVzZXJzIiwic2V0VGltZW91dCIsIlNldFNsaWRlcldpZHRoQmx1ciIsInRyaWdnZXJTaGFrZSIsImJ0biIsInBhcnRpY2lwYXRlIiwiY2xvc2VCdG4iLCJjbG9zZUFsbFBvcHVwcyIsInBvcHVwQXR0ciIsImUiLCJvcGVuUG9wdXBFbCIsImNvbnRhaW5zIiwidGFyZ2V0IiwidXBkYXRlU2xpZGVyIiwiaGFuZGxlU3RhcnQiLCJoYW5kbGVNb3ZlIiwiaGFuZGxlRW5kIiwibW92ZVNsaWRlciIsIndpbmRvdyIsInN0b3JlIiwic3RhdGUiLCJnZXRTdGF0ZSIsImF1dGgiLCJpc0F1dGhvcml6ZWQiLCJpZCIsImdfdXNlcl9pZCIsImF0dGVtcHRzIiwibWF4QXR0ZW1wdHMiLCJhdHRlbXB0SW50ZXJ2YWwiLCJ3YWl0Rm9yVXNlcklkIiwiaW50ZXJ2YWwiLCJzZXRJbnRlcnZhbCIsImNsZWFySW50ZXJ2YWwiLCJsb2FkVHJhbnNsYXRpb25zIiwidHJhbnNsYXRlIiwidGFyZ2V0Tm9kZSIsImdldEVsZW1lbnRCeUlkIiwibXV0YXRpb25PYnNlcnZlciIsIk11dGF0aW9uT2JzZXJ2ZXIiLCJtdXRhdGlvbnMiLCJkaXNjb25uZWN0Iiwib2JzZXJ2ZSIsImNoaWxkTGlzdCIsInN1YnRyZWUiLCJzbGlkZXMiLCJ0YWJzIiwiaW5kZXgiLCJzbGlkZSIsImRvdCIsImxvYWRUaW1lIiwic2hvd0VsZW1lbnRzIiwiaGlkZUVsZW1lbnRzIiwicmVwb3J0RXJyb3IiLCJyZXBvcnREYXRhIiwib3JpZ2luIiwibG9jYXRpb24iLCJocmVmIiwiZXJyb3JUZXh0IiwidGV4dCIsIm1lc3NhZ2UiLCJuYW1lIiwic3RhY2siLCJlbGVtcyIsImVsZW0iLCJrZXkiLCJyZWZyZXNoTG9jYWxpemVkQ2xhc3MiLCJlbGVtZW50IiwibGFuZyIsIndlZWsiLCJkYXRhIiwidXNlcnMiLCJwb3B1bGF0ZVVzZXJzVGFibGUiLCJjdXJyZW50VXNlcklkIiwiY3VycmVudFVzZXIiLCJpc1RvcEN1cnJlbnRVc2VyIiwic29tZSIsInRvcFVzZXJzTGVuZ3RoIiwidG9wVXNlcnMiLCJkaXNwbGF5VXNlciIsImlzQ3VycmVudFVzZXIiLCJ0YWJsZSIsInJlbmRlclJvdyIsIm9wdGlvbnMiLCJoaWdobGlnaHQiLCJuZWlnaGJvciIsInVzZXJSb3ciLCJ1c2VyUGxhY2UiLCJpbmRleE9mIiwicHJpemVLZXkiLCJnZXRQcml6ZVRyYW5zbGF0aW9uS2V5IiwibWFza1VzZXJJZCIsInBvaW50cyIsImFwcGVuZCIsImRlZmF1bHRWYWx1ZSIsIm5lZWRLZXkiLCJwbGFjZSIsIml0ZW0iLCJkaXN0YW5jZSIsIm5ld1Bvc2l0aW9uIiwic2NhbGUiLCJ0cmFuc2Zvcm0iLCJ6SW5kZXgiLCJpc1Zpc2libGUiLCJhYnMiLCJvZmZzZXQiLCJnb1RvU2xpZGUiLCJldmVudCIsImNsaWVudFgiLCJ0b3VjaGVzIiwiY3VycmVudFgiLCJkaWZmWCIsInAiLCJuZXh0U2hha2UiLCJwYXJlbnRFbGVtZW50IiwibG5nQnRuIiwicmVtb3ZlSXRlbSIsInNldEl0ZW0iLCJyZWxvYWQi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LFFBQVEsRUFBRSxRQUFRLENBQUM7SUFDOUM7SUFDQWxHLE1BQU0sQ0FBQ3FDLFFBQVEsQ0FBQzhELE1BQU0sRUFBRTtFQUM1QixDQUFDLENBQUM7QUFHTixDQUFDLEdBQUc7O0FBRUo7QUFDQSxTQUFTcEwsZUFBZSxDQUFDdUUsU0FBUyxFQUEwQjtFQUFBLElBQXhCZ0gsY0FBYyx1RUFBRyxLQUFLO0VBQ3RELElBQU1DLFNBQVMsR0FBR3hSLFFBQVEsQ0FBQ0MsZ0JBQWdCLENBQUMsUUFBUSxDQUFDO0VBQ3JEdVIsU0FBUyxDQUFDdFIsT0FBTyxDQUFDLFVBQUE0USxDQUFDO0lBQUEsT0FBSUEsQ0FBQyxDQUFDMVEsU0FBUyxDQUFDQyxHQUFHLENBQUMsTUFBTSxDQUFDO0VBQUEsRUFBQztFQUUvQyxJQUFNb1IsV0FBVyxHQUFHelIsUUFBUSxDQUFDTyxhQUFhLCtCQUF1QmdLLFNBQVMsU0FBSztFQUMvRSxJQUFJa0gsV0FBVyxFQUFFO0lBQ2JBLFdBQVcsQ0FBQ3JSLFNBQVMsQ0FBQ0ksTUFBTSxDQUFDLE1BQU0sQ0FBQztJQUNwQ1IsUUFBUSxDQUFDTyxhQUFhLENBQUMsU0FBUyxDQUFDLENBQUNILFNBQVMsQ0FBQ0ksTUFBTSxDQUFDLGlCQUFpQixDQUFDO0VBQ3pFO0VBRUEsSUFBTXlHLFFBQVEsR0FBR2pILFFBQVEsQ0FBQ08sYUFBYSxDQUFDLG1CQUFtQixDQUFDO0VBQzVELElBQUkwRyxRQUFRLEVBQUU7SUFDVkEsUUFBUSxDQUFDN0csU0FBUyxDQUFDc0MsTUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDNk8sY0FBYyxDQUFDO0VBQ3REO0FBQ0o7QUFDQSIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uICgpIHtcblxuICAgIGNvbnN0IGFwaVVSTCA9ICdodHRwczovL2Zhdi1wcm9tLmNvbS9hcGlfc2FtX3VhJ1xuXG4gICAgY29uc3QgY3VycmVudERhdGUgPSBuZXcgRGF0ZShcIjIwMjUtMDctMjRUMDA6MDA6MDBcIik7XG5cbiAgICBjb25zdCBnZXRBY3RpdmVXZWVrID0gKHByb21vU3RhcnREYXRlLCB3ZWVrRHVyYXRpb24pID0+IHtcblxuICAgICAgICBsZXQgd2Vla0RhdGVzID0gW107XG5cbiAgICAgICAgY29uc3QgRGF5ID0gMjQgKiA2MCAqIDYwICogMTAwMDtcbiAgICAgICAgY29uc3QgV2VlayA9IHdlZWtEdXJhdGlvbiAqIERheTtcblxuICAgICAgICBjb25zdCBmb3JtYXREYXRlID0gKGRhdGUpID0+XG4gICAgICAgICAgICBgJHtkYXRlLmdldERhdGUoKS50b1N0cmluZygpLnBhZFN0YXJ0KDIsIFwiMFwiKX0uJHsoZGF0ZS5nZXRNb250aCgpICsgMSkudG9TdHJpbmcoKS5wYWRTdGFydCgyLCBcIjBcIil9YDtcblxuICAgICAgICBjb25zdCBjYWxjdWxhdGVXZWVrUGVyaW9kID0gKHdlZWtJbmRleCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgYmFzZVN0YXJ0ID0gcHJvbW9TdGFydERhdGUuZ2V0VGltZSgpO1xuICAgICAgICAgICAgY29uc3Qgc3RhcnQgPSBuZXcgRGF0ZShiYXNlU3RhcnQgKyB3ZWVrSW5kZXggKiBXZWVrKTtcbiAgICAgICAgICAgIGxldCBlbmQgPSBuZXcgRGF0ZShzdGFydC5nZXRUaW1lKCkgKyAod2Vla0R1cmF0aW9uICogRGF5IC0gMSkpO1xuICAgICAgICAgICAgcmV0dXJuIHsgc3RhcnQsIGVuZCB9O1xuICAgICAgICB9O1xuXG4gICAgICAgIGxldCBhY3RpdmVXZWVrSW5kZXggPSBudWxsO1xuXG4gICAgICAgIC8vINCf0LXRgNC10LLRltGA0LrQsCDQv9C+0YLQvtGH0L3QvtCz0L4g0YLQuNC20L3Rj1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEwOyBpKyspIHsgLy8g0J7QsdC80LXQttGD0ZTQvNC+IDEwINGC0LjQttC90Y/QvNC4ICjRj9C60YnQviDQv9C+0YLRgNGW0LHQvdC+INCx0ZbQu9GM0YjQtSwg0L/RgNC+0YHRgtC+INC30LzRltC90ZbRgtGMINC70ZbRh9C40LvRjNC90LjQuilcbiAgICAgICAgICAgIGNvbnN0IHsgc3RhcnQsIGVuZCB9ID0gY2FsY3VsYXRlV2Vla1BlcmlvZChpKTtcbiAgICAgICAgICAgIGlmIChjdXJyZW50RGF0ZSA+PSBzdGFydCAmJiBjdXJyZW50RGF0ZSA8PSBlbmQpIHtcbiAgICAgICAgICAgICAgICBhY3RpdmVXZWVrSW5kZXggPSBpICsgMTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBhY3RpdmVXZWVrSW5kZXg7XG4gICAgfTtcblxuICAgIGNvbnN0IHByb21vU3RhcnREYXRlID0gbmV3IERhdGUoXCIyMDI1LTA3LTE1VDAwOjAwOjAwXCIpO1xuICAgIGNvbnN0IHdlZWtEdXJhdGlvbiA9IDc7XG5cbiAgICBjb25zdCBhY3RpdmVXZWVrID0gZ2V0QWN0aXZlV2Vlayhwcm9tb1N0YXJ0RGF0ZSwgd2Vla0R1cmF0aW9uKSB8fCAxO1xuXG4gICAgY29uc29sZS5sb2coYWN0aXZlV2VlaylcblxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5nYW1lc19fbGlzdCcpLmZvckVhY2gobGlzdCA9PiB7XG4gICAgICAgIGxpc3QuY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xuICAgIH0pO1xuXG4gICAgY29uc3QgY3VycmVudExpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuZ2FtZXNfX2xpc3QuX3dlZWske2FjdGl2ZVdlZWt9YCk7XG5cbiAgICBjb25zb2xlLmxvZyhjdXJyZW50TGlzdCk7XG4gICAgaWYgKGN1cnJlbnRMaXN0KSB7XG4gICAgICAgIGN1cnJlbnRMaXN0LmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKTtcbiAgICB9XG5cbiAgICBjb25zdCBnZXRDdXJyZW50RGF5TnVtYmVyID0gKHByb21vU3RhcnREYXRlKSA9PiB7XG4gICAgICAgIGNvbnN0IGRpZmZJbk1zID0gY3VycmVudERhdGUgLSBwcm9tb1N0YXJ0RGF0ZTtcbiAgICAgICAgbGV0IGRheU51bWJlciA9IE1hdGguZmxvb3IoZGlmZkluTXMgLyAoMjQgKiA2MCAqIDYwICogMTAwMCkpICsgMTtcbiAgICAgICAgaWYoYWN0aXZlV2VlayA+IDEpe1xuICAgICAgICAgICBkYXlOdW1iZXIgPSBkYXlOdW1iZXIgLSAoKGFjdGl2ZVdlZWsgLSAxKSAqIDcpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBkYXlOdW1iZXI7XG4gICAgfTtcblxuICAgIGNvbnN0IGRheU51bWJlciA9IGdldEN1cnJlbnREYXlOdW1iZXIocHJvbW9TdGFydERhdGUpO1xuICAgIGNvbnN0IGN1cnJlbnREYXlOdW1iZXIgPSBkYXlOdW1iZXIgPiAwID8gZGF5TnVtYmVyIDogMTtcbiAgICBjb25zb2xlLmxvZyhjdXJyZW50RGF5TnVtYmVyKTtcblxuXG4gICAgY29uc3QgbWFpblBhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmZhdi1wYWdlXCIpLFxuICAgICAgICBjaGFsbGFuZ2VCbG9jayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jaGFsbGFuZ2UnKSxcbiAgICAgICAgY2hhbGxhbmdlRGVwb3NpdEJ0biA9IGNoYWxsYW5nZUJsb2NrLnF1ZXJ5U2VsZWN0b3IoJy5idG4tam9pbicpLFxuICAgICAgICB1bmF1dGhNc2dzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnVuYXV0aC1tc2cnKSxcbiAgICAgICAgcGFydGljaXBhdGVCdG5zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnBhcnQtYnRuJyksXG4gICAgICAgIHJlZGlyZWN0QnRucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5idG4tam9pbicpLFxuICAgICAgICBsb2FkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNwaW5uZXItb3ZlcmxheVwiKSxcbiAgICAgICAgY3VycmVudENhcmRzV3JhcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jaGFsbGFuZ2VfX2N1cnJlbnQnKSxcbiAgICAgICAgcHJvZ3Jlc3NCYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2hhbGxhbmdlX19wcm9ncmVzcy1iYXInKSxcbiAgICAgICAgY2hhbGxhbmdlQmx1ciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jaGFsbGFuZ2VfX2JsdXInKSxcbiAgICAgICAgY2hhbGxhbmdlQmx1clN0YXR1cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jaGFsbGFuZ2VfX2JsdXItc3RhdHVzJyksXG4gICAgICAgIHByb2dyZXNzQm94ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNoYWxsYW5nZV9fcHJvZ3Jlc3MtYm94JyksXG4gICAgICAgIGNoYWxsYW5nZUJ0blBvaW50ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2hhbGxhbmdlX19idG4tcG9pbnRlcicpLFxuICAgICAgICBidG5PcGVuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJ0bi1vcGVuJyksXG4gICAgICAgIGNvdW50ZXJQb2ludHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY291bnRlci1wb2ludHMnKSxcbiAgICAgICAgcG9wdXBzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBvcHVwcycpLFxuICAgICAgICBzdHJlYWtEYXlzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5wcm9ncmVzc19fZGF5cy1pdGVtXCIpLFxuICAgICAgICBzdHJlYWtEYXlzUG9wdXAgPSBwb3B1cHMucXVlcnlTZWxlY3RvckFsbChcIi5wcm9ncmVzc19fZGF5cy1pdGVtXCIpLFxuICAgICAgICByZXN1bHRzVGFibGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGFibGUnKSxcbiAgICAgICAgcmVzdWx0c1RhYmxlT3RoZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGFibGVPdGhlcicpLFxuICAgICAgICB0YWJsZVRhYnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudGFibGVfX3RhYnMtaXRlbScpO1xuXG5cbiAgICBjb25zb2xlLmxvZyhidG5PcGVuKVxuXG5cblxuICAgIGNvbnN0IHVrTGVuZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN1a0xlbmcnKTtcbiAgICBjb25zdCBlbkxlbmcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZW5MZW5nJyk7XG5cbiAgICBjb25zdCB0b2dnbGVDbGFzc2VzID0gKGVsZW1lbnRzLCBjbGFzc05hbWUpID0+IGVsZW1lbnRzLmZvckVhY2goZWwgPT4gZWwuY2xhc3NMaXN0LnRvZ2dsZShgJHtjbGFzc05hbWV9YCkpO1xuICAgIGNvbnN0IHRvZ2dsZVRyYW5zbGF0ZXMgPSAoZWxlbWVudHMsIGRhdGFBdHRyKSA9PiBlbGVtZW50cy5mb3JFYWNoKGVsID0+IHtcbiAgICAgICAgZWwuc2V0QXR0cmlidXRlKCdkYXRhLXRyYW5zbGF0ZScsIGAke2RhdGFBdHRyfWApXG4gICAgICAgIGVsLmlubmVySFRNTCA9IGkxOG5EYXRhW2RhdGFBdHRyXSB8fCAnKi0tLS1ORUVEIFRPIEJFIFRSQU5TTEFURUQtLS0tKiAgIGtleTogICcgKyBkYXRhQXR0cjtcbiAgICAgICAgZWwucmVtb3ZlQXR0cmlidXRlKCdkYXRhLXRyYW5zbGF0ZScpO1xuICAgIH0pO1xuXG4gICAgbGV0IGxvYWRlckJ0biA9IGZhbHNlXG5cbiAgICAvLyBsZXQgbG9jYWxlID0gXCJlblwiXG4gICAgbGV0IGxvY2FsZSA9IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oXCJsb2NhbGVcIikgfHwgXCJ1a1wiXG5cbiAgICBpZiAodWtMZW5nKSBsb2NhbGUgPSAndWsnO1xuICAgIGlmIChlbkxlbmcpIGxvY2FsZSA9ICdlbic7XG5cbiAgICBsZXQgZGVidWcgPSBmYWxzZVxuXG4gICAgaWYgKGRlYnVnKSBoaWRlTG9hZGVyKClcblxuICAgIGxldCBpMThuRGF0YSA9IHt9O1xuICAgIGNvbnN0IHRyYW5zbGF0ZVN0YXRlID0gdHJ1ZTtcbiAgICAvLyBsZXQgdXNlcklkID0gbnVsbDtcbiAgICBsZXQgdXNlcklkID0gTnVtYmVyKHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oXCJ1c2VySWRcIikpID8/IG51bGxcblxuICAgIC8vIHVzZXJJZCA9IDEwMDMwMDI2OFxuXG4gICAgY29uc3QgYm94ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNoYWtlLWJveCcpO1xuICAgIGNvbnN0IGluaXRpYWxEZWxheSA9IE1hdGgucmFuZG9tKCkgKiA2MDAwICsgNDAwMDtcblxuICAgIC8vc2xpZGVyIHZhcnNcblxuICAgIGNvbnN0IHNsaWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcml6ZV9fc2xpZGVyJyk7XG4gICAgY29uc3QgaXRlbXMgPSBzbGlkZXIucXVlcnlTZWxlY3RvckFsbCgnLnByaXplX19zbGlkZScpO1xuICAgIGNvbnN0IGRvdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucHJpemVfX25hdi1kb3RzLWl0ZW0nKTtcbiAgICBjb25zdCBidG5MZWZ0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByaXplX19uYXYtbGVmdCcpO1xuICAgIGNvbnN0IGJ0blJpZ2h0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByaXplX19uYXYtcmlnaHQnKTtcblxuICAgIGxldCBjdXJyZW50SW5kZXggPSAxO1xuICAgIGNvbnN0IHRvdGFsSXRlbXMgPSBpdGVtcy5sZW5ndGg7XG4gICAgbGV0IGlzRHJhZ2dpbmcgPSBmYWxzZTtcbiAgICBsZXQgc3RhcnRYID0gMDtcblxuICAgIC8vc2xpZGVyIHZhcnNcblxuICAgIGNvbnN0IHJlcXVlc3QgPSBmdW5jdGlvbiAobGluaywgZXh0cmFPcHRpb25zKSB7XG4gICAgICAgIHJldHVybiBmZXRjaChhcGlVUkwgKyBsaW5rLCB7XG4gICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgJ0FjY2VwdCc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgLi4uKGV4dHJhT3B0aW9ucyB8fCB7fSlcbiAgICAgICAgfSlcbiAgICAgICAgICAgIC50aGVuKHJlcyA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKCFyZXMub2spIHRocm93IG5ldyBFcnJvcignQVBJIGVycm9yJyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlcy5qc29uKCk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmNhdGNoKGVyciA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignQVBJIHJlcXVlc3QgZmFpbGVkOicsIGVycik7XG5cbiAgICAgICAgICAgICAgICAvLyByZXBvcnRFcnJvcihlcnIpO1xuICAgICAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAgICAgLy8gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZhdi1wYWdlJykuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgICAgICAgICAvLyBpZiAod2luZG93LmxvY2F0aW9uLmhyZWYuc3RhcnRzV2l0aChcImh0dHBzOi8vd3d3LmZhdmJldC5oci9cIikpIHtcbiAgICAgICAgICAgICAgICAvLyAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSAnL3Byb21vY2lqZS9wcm9tb2NpamEvc3R1Yi8nO1xuICAgICAgICAgICAgICAgIC8vIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gJy9wcm9tb3MvcHJvbW8vc3R1Yi8nO1xuICAgICAgICAgICAgICAgIC8vIH1cblxuICAgICAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChlcnIpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBoaWRlTG9hZGVyKCl7XG4gICAgICAgIGxvYWRlci5jbGFzc0xpc3QuYWRkKFwiaGlkZVwiKVxuICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93ID0gXCJhdXRvXCJcbiAgICAgICAgbWFpblBhZ2UuY2xhc3NMaXN0LnJlbW92ZShcImxvYWRpbmdcIilcbiAgICB9XG5cblxuXG4gICAgZnVuY3Rpb24gaW5pdFNwaW4oKXtcblxuICAgICAgICBidG5PcGVuLnRleHRDb250ZW50ID0gdHJhbnNsYXRlS2V5KFwibG9hZGVyXCIpXG4gICAgICAgIGNoYWxsYW5nZUJ0blBvaW50ZXIuY2xhc3NMaXN0LmFkZChcImhpZGVcIik7XG5cblxuICAgICAgICBzZW5kU3BpblJlcXVlc3QoKS50aGVuKHJlcyA9PiB7XG5cbiAgICAgICAgICAgIGNvbnN0IHByaXplID0gcmVzLm51bWJlcjtcbiAgICAgICAgICAgIGNvbnN0IHN0cmVha0JvbnVzID0gcmVzLnN0cmVha0JvbnVzIHx8IGRlYnVnO1xuXG4gICAgICAgICAgICBidG5PcGVuLnRleHRDb250ZW50ID0gdHJhbnNsYXRlS2V5KFwib3BlbkJ0blwiKVxuXG4gICAgICAgICAgICBidG5PcGVuLmNsYXNzTGlzdC5hZGQoXCJoaWRlXCIpO1xuICAgICAgICAgICAgY2hhbGxhbmdlRGVwb3NpdEJ0bi5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZVwiKTtcblxuICAgICAgICAgICAgc2V0U3RyZWFrRGF5cyhzdHJlYWtCb251cylcblxuICAgICAgICAgICAgaWYgKHByaXplID09PSAncmVzcGluJykgb3BlblBvcHVwQnlBdHRyKCd1bmx1Y2t5UG9wdXAnLCB0cnVlKTtcbiAgICAgICAgICAgIGlmIChwcml6ZSA9PT0gJ25vdGhpbmcnKSBvcGVuUG9wdXBCeUF0dHIoJ3VubHVja3lQb3B1cCcsIHRydWUpO1xuICAgICAgICAgICAgaWYgKHByaXplID09PSAnd2hlZWxCdWJibGVTcGFucycpIG9wZW5Qb3B1cEJ5QXR0cigncHJpemU1MFBvaW50cycsIHRydWUpO1xuICAgICAgICAgICAgaWYgKHByaXplID09PSAnaXBob25lJykgb3BlblBvcHVwQnlBdHRyKCdwcml6ZUlwaG9uZScsIHRydWUpO1xuICAgICAgICAgICAgaWYgKHByaXplID09PSAnbWFjQm9vaycpIG9wZW5Qb3B1cEJ5QXR0cigncHJpemVMYXB0b3AnLCB0cnVlKTtcbiAgICAgICAgICAgIGlmIChwcml6ZSA9PT0gJ2FpclBvZHMnKSBvcGVuUG9wdXBCeUF0dHIoJ3ByaXplQWlycG9kcycsIHRydWUpO1xuICAgICAgICAgICAgaWYgKHByaXplID09PSAnYXBwbGVXYXRjaCcpIG9wZW5Qb3B1cEJ5QXR0cigncHJpemVXYXRjaCcsIHRydWUpO1xuICAgICAgICAgICAgaWYgKHByaXplID09PSAncm96ZXRrYUdpZnRDYXJkJykgb3BlblBvcHVwQnlBdHRyKCdwcml6ZUdpZnQnLCB0cnVlKTtcbiAgICAgICAgICAgIGlmIChwcml6ZSA9PT0gJ2ZzNTAnKSBvcGVuUG9wdXBCeUF0dHIoJ3ByaXplNTBGc0dhdGVPbHltcCcsIHRydWUpO1xuICAgICAgICAgICAgaWYgKHByaXplID09PSAnZnMyNV8zb2FrcycpIG9wZW5Qb3B1cEJ5QXR0cigncHJpemUyNUZzTHVja3lQZW5ueScsIHRydWUpO1xuICAgICAgICAgICAgaWYgKHByaXplID09PSAnZnMyNV9wbGF5c29uJykgb3BlblBvcHVwQnlBdHRyKCdwcml6ZTI1RnNDb2luU3RyaWtlJywgdHJ1ZSk7XG4gICAgICAgICAgICBpZiAocHJpemUgPT09ICdmczQwJykgb3BlblBvcHVwQnlBdHRyKCdwcml6ZTQwRnNQaXJvdHMzJywgdHJ1ZSk7XG4gICAgICAgICAgICBpZiAocHJpemUgPT09ICdmczI1X2JnYW1pbmcnKSBvcGVuUG9wdXBCeUF0dHIoJ3ByaXplMjVGc1Nub29wRG9nZycsIHRydWUpO1xuICAgICAgICAgICAgaWYgKHByaXplID09PSAnZnMyNV9wdXNoR2FtaW5nJykgb3BlblBvcHVwQnlBdHRyKCdwcml6ZTI1RnNCaWdCYW1ib28nLCB0cnVlKTtcbiAgICAgICAgICAgIGlmIChwcml6ZSA9PT0gJ2ZzMTAnKSBvcGVuUG9wdXBCeUF0dHIoJ3ByaXplMTBGc0hpdFNsb3QnLCB0cnVlKTtcbiAgICAgICAgICAgIGlmIChwcml6ZSA9PT0gJ2ZzMzAnKSBvcGVuUG9wdXBCeUF0dHIoJ3ByaXplMzBGc1NoaW5pZ0Nyb3duJywgdHJ1ZSk7XG4gICAgICAgICAgICBpZiAocHJpemUgPT09ICdmczI1X2hhY2tzYXcnKSBvcGVuUG9wdXBCeUF0dHIoJ3ByaXplMjVGc0xlQmFuZGl0JywgdHJ1ZSk7XG4gICAgICAgICAgICBpZiAocHJpemUgPT09ICdmczIwJykgb3BlblBvcHVwQnlBdHRyKCdwcml6ZTIwRnNMdWNrT2ZQYW5kYScsIHRydWUpO1xuXG5cbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzZW5kU3BpblJlcXVlc3QoKSB7XG4gICAgICAgIGlmICghdXNlcklkKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZGVidWcpIHtcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoe1xuICAgICAgICAgICAgICAgIG51bWJlcjogJ3Jlc3BpbicsXG4gICAgICAgICAgICAgICAgdHlwZTogJ3Rlc3QnXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHBhcmFtcyA9IHt1c2VyaWQ6IHVzZXJJZH07XG4gICAgICAgIHJldHVybiByZXF1ZXN0KCcvc3BpbicsIHtcbiAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkocGFyYW1zKVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzZXRTdHJlYWtEYXlzKHN0cmVhaykge1xuICAgICAgICBzdHJlYWtEYXlzLmZvckVhY2goKGRheSwgaSkgPT57XG4gICAgICAgICAgICBkYXkuY2xhc3NMaXN0LnJlbW92ZShcIl9hY3RpdmVcIilcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGRheSlcbiAgICAgICAgICAgIGlmKGkgKyAxIDw9IHN0cmVhayl7XG4gICAgICAgICAgICAgICAgZGF5LmNsYXNzTGlzdC5hZGQoJ19hY3RpdmUnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICAgc3RyZWFrRGF5c1BvcHVwLmZvckVhY2goKGRheSwgaSkgPT57XG4gICAgICAgICAgICBkYXkuY2xhc3NMaXN0LnJlbW92ZShcIl9hY3RpdmVcIilcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGRheSlcbiAgICAgICAgICAgIGlmKGkgKyAxIDw9IHN0cmVhayl7XG4gICAgICAgICAgICAgICAgZGF5LmNsYXNzTGlzdC5hZGQoJ19hY3RpdmUnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzZXRVc2VyUHJvZ3Jlc3ModXNlckRhdGEpe1xuICAgICAgICBsZXQgc3BpbkFsbG93ZWQgPSB1c2VyRGF0YS5zcGluQWxsb3dlZCxcbiAgICAgICAgICAgIHBvaW50c1BlckRheSA9IHVzZXJEYXRhLnBvaW50c1BlckRheSxcbiAgICAgICAgICAgIHN0cmVhayA9IHVzZXJEYXRhLnNwaW5zU3RyZWFrLFxuICAgICAgICAgICAgbGFzdFVwZGF0ZSA9IHVzZXJEYXRhLmxhc3RVcGRhdGVcblxuICAgICAgICBjb25zb2xlLmxvZyhzdHJlYWtEYXlzKVxuXG4gICAgICAgIHNldFN0cmVha0RheXMoc3RyZWFrKVxuXG4gICAgICAgIHBvaW50c1BlckRheSA9IDEwMDAyXG5cbiAgICAgICAgY29uc3QgdGhyZXNob2xkUG9pbnRzID0gMTAwMFxuXG4gICAgICAgIHBvaW50c1BlckRheSA9IHBvaW50c1BlckRheSA+IHRocmVzaG9sZFBvaW50cyA/IHRocmVzaG9sZFBvaW50cyA6IHBvaW50c1BlckRheTtcblxuXG4gICAgICAgIGNvdW50ZXJQb2ludHMudGV4dENvbnRlbnQgPSBgJHtwb2ludHNQZXJEYXl9YFxuXG4gICAgICAgIGxldCBwcm9ncmVzcyA9IE1hdGgubWluKChwb2ludHNQZXJEYXkgLyB0aHJlc2hvbGRQb2ludHMpICogMTAwLCAxMDApO1xuXG5cbiAgICAgICAgaWYgKHByb2dyZXNzID49IDEwMCkge1xuICAgICAgICAgICAgcHJvZ3Jlc3MgPSAxMDBcbiAgICAgICAgICAgIGNoYWxsYW5nZUJsdXIuY2xhc3NMaXN0LmFkZCgnaGlkZScpXG4gICAgICAgICAgICBwcm9ncmVzc0JveC5jbGFzc0xpc3QucmVtb3ZlKCdfbG9jaycpXG4gICAgICAgICAgICBwcm9ncmVzc0JveC5jbGFzc0xpc3QuYWRkKCdfb3BlbicpXG4gICAgICAgICAgICBjaGFsbGFuZ2VCdG5Qb2ludGVyLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRlXCIpXG4gICAgICAgICAgICBidG5PcGVuLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKVxuICAgICAgICAgICAgY2hhbGxhbmdlRGVwb3NpdEJ0bi5jbGFzc0xpc3QuYWRkKCdoaWRlJylcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICBjaGFsbGFuZ2VCbHVyLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKVxuICAgICAgICAgICAgcHJvZ3Jlc3NCb3guY2xhc3NMaXN0LmFkZCgnX2xvY2snKVxuICAgICAgICAgICAgcHJvZ3Jlc3NCb3guY2xhc3NMaXN0LnJlbW92ZSgnX29wZW4nKVxuICAgICAgICAgICAgY2hhbGxhbmdlQnRuUG9pbnRlci5jbGFzc0xpc3QuYWRkKFwiaGlkZVwiKVxuICAgICAgICAgICAgYnRuT3Blbi5jbGFzc0xpc3QuYWRkKCdoaWRlJylcbiAgICAgICAgICAgIGNoYWxsYW5nZURlcG9zaXRCdG4uY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpXG5cblxuICAgICAgICB9XG5cbiAgICAgICAgY29uc29sZS5sb2coYNCf0YDQvtCz0YDQtdGBINC60L7RgNC40YHRgtGD0LLQsNGH0LA6ICR7cHJvZ3Jlc3MudG9GaXhlZCgwKX0lYCk7XG5cbiAgICAgICAgc2V0UHJvZ3Jlc3NXaWR0aChwcm9ncmVzcyk7XG5cblxuICAgICAgICBjb25zb2xlLmxvZyh1c2VyRGF0YSlcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzZXRQcm9ncmVzc1dpZHRoKHByb2dyZXNzUGVyY2VudCkge1xuXG4gICAgICAgIHByb2dyZXNzQmFyLnN0eWxlLndpZHRoID0gYCR7cHJvZ3Jlc3NQZXJjZW50fSVgO1xuXG4gICAgICAgIGNvbnN0IGJhclJlY3QgPSBwcm9ncmVzc0Jhci5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgICAgY29uc3QgcGFyZW50UmVjdCA9IGN1cnJlbnRDYXJkc1dyYXAuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG5cbiAgICAgICAgY29uc3QgcmlnaHRFZGdlID0gYmFyUmVjdC5yaWdodCAtIHBhcmVudFJlY3QubGVmdCAtIDU7XG5cbiAgICAgICAgY2hhbGxhbmdlQmx1ci5zdHlsZS5sZWZ0ID0gYCR7cmlnaHRFZGdlfXB4YDtcbiAgICAgICAgY2hhbGxhbmdlQmx1clN0YXR1cy50ZXh0Q29udGVudCA9IGAke3Byb2dyZXNzUGVyY2VudC50b0ZpeGVkKDApfSVgO1xuXG5cbiAgICB9XG4gICAgZnVuY3Rpb24gcmVzb2x2ZVN0YXR1c1RyYW5zbGF0aW9uKHN0YXR1cykge1xuICAgICAgICBpZiAoIXN0YXR1cyB8fCBzdGF0dXMgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJhbnNsYXRlS2V5KCdiZXRVbmRlZmluZWQnKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoc3RhdHVzID09PSAnd2luJykge1xuICAgICAgICAgICAgcmV0dXJuIHRyYW5zbGF0ZUtleSgnd2luQmV0Jyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHN0YXR1cyA9PT0gJ2xvc2UnKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJhbnNsYXRlS2V5KCdsb3NlQmV0Jyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBkaXNwbGF5QmV0c0hpc3RvcnkoYmV0cykge1xuICAgICAgICBjb25zdCBzcGluSXRlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zcGlucy1yb3cnKTtcbiAgICAgICAgY29uc3Qgbm9TcGluSXRlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uby1zcGlucycpO1xuICAgICAgICBjb25zdCBub0JldHMgPSAhYmV0cyB8fCBiZXRzLmxlbmd0aCA9PT0gMDtcblxuICAgICAgICBpZiAobm9CZXRzICYmICFkZWJ1Zykge1xuICAgICAgICAgICAgc3Bpbkl0ZW0uY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xuICAgICAgICAgICAgbm9TcGluSXRlbS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJyk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZihkZWJ1Zyl7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oXCJkZWJ1ZyBiZXQgaGlzdG9yeVwiKVxuICAgICAgICAgICAgcmV0dXJuO1xuXG4gICAgICAgIH1cblxuICAgICAgICBzcGluSXRlbS5pbm5lckhUTUwgPVxuICAgICAgICAgICAgYFxuICAgICAgIDxkaXYgY2xhc3M9XCJzcGlucy1yb3ctaGVhZFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRlbnQtZGF0ZVwiIGRhdGEtdHJhbnNsYXRlPVwibXlCZXREYXRlXCI+PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGVudC1wcml6ZVwiIGRhdGEtdHJhbnNsYXRlPVwibXlCZXRJZFwiPjwvZGl2PlxuPCEtLSAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb250ZW50LXN0YXR1c1wiIGRhdGEtdHJhbnNsYXRlPVwibXlCZXRTdGF0dXNcIj48L2Rpdj4tLT5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIGA7XG4gICAgICAgIHNwaW5JdGVtLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKTtcbiAgICAgICAgbm9TcGluSXRlbS5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XG5cbiAgICAgICAgbGV0IHVwZCA9IDA7XG5cbiAgICAgICAgYmV0cy5mb3JFYWNoKHNwaW4gPT4ge1xuICAgICAgICAgICAgY29uc3Qgc3BpbkRhdGUgPSBuZXcgRGF0ZShzcGluLmJldERhdGUpO1xuICAgICAgICAgICAgY29uc3QgZm9ybWF0dGVkRGF0ZSA9IHNwaW5EYXRlLnRvTG9jYWxlRGF0ZVN0cmluZygndWstVUEnKS5zbGljZSgwLCA1KTtcbiAgICAgICAgICAgIGNvbnN0IHN0YXR1cyA9IHJlc29sdmVTdGF0dXNUcmFuc2xhdGlvbihzcGluLnN0YXR1cyk7XG5cbiAgICAgICAgICAgIGlmIChzdGF0dXMpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBzcGluRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgIHNwaW5FbGVtZW50LmNsYXNzTGlzdC5hZGQoJ3NwaW5zLXJvdy1pdGVtJyk7XG5cbiAgICAgICAgICAgICAgICBjb25zdCBpc1dpbiA9IHNwaW4uc3RhdHVzID09PSBcIndpblwiO1xuICAgICAgICAgICAgICAgIGNvbnN0IHN0YXR1c0NsYXNzID0gaXNXaW4gPyAnX2RvbmUnIDogJyc7XG5cbiAgICAgICAgICAgICAgICBzcGluRWxlbWVudC5pbm5lckhUTUwgPSBgXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiY29udGVudC1kYXRlXCI+JHtmb3JtYXR0ZWREYXRlfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJjb250ZW50LXByaXplXCI+SUQ6JHtzcGluLmNhcmRJRH08L3NwYW4+XG48IS0tICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImNvbnRlbnQtc3RhdHVzICR7c3RhdHVzQ2xhc3N9XCI+PC9zcGFuPi0tPlxuICAgICAgICAgICAgICAgIGA7XG4gICAgICAgICAgICAgICAgc3Bpbkl0ZW0uYXBwZW5kQ2hpbGQoc3BpbkVsZW1lbnQpO1xuICAgICAgICAgICAgICAgIHVwZCsrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICBpZiAodXBkID09PSAwKSB7XG4gICAgICAgICAgICBzcGluSXRlbS5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XG4gICAgICAgICAgICBub1NwaW5JdGVtLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHNldEJldEhpc3Rvcnkoc3RhZ2VOdW0pe1xuICAgICAgICByZXF1ZXN0KFwiL2JldHNIaXN0b3J5XCIpLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICAgICAgY29uc3QgdXNlciA9IHJlcy5maW5kKHVzZXIgPT4gdXNlci51c2VyaWQgPT09IHVzZXJJZCk7XG4gICAgICAgICAgICBjb25zdCBiZXRzID0gdXNlcj8uYmV0c1xuICAgICAgICAgICAgZGlzcGxheUJldHNIaXN0b3J5KGJldHMpXG4gICAgICAgIH0pXG4gICAgfVxuXG5cbiAgICBhc3luYyBmdW5jdGlvbiBpbml0KCkge1xuICAgICAgICBsZXQgYXR0ZW1wdHMgPSAwO1xuICAgICAgICBjb25zdCBtYXhBdHRlbXB0cyA9IDIwO1xuICAgICAgICBjb25zdCBhdHRlbXB0SW50ZXJ2YWwgPSA1MDtcblxuICAgICAgICBmdW5jdGlvbiB0cnlEZXRlY3RVc2VySWQoKSB7XG4gICAgICAgICAgICBpZiAod2luZG93LnN0b3JlKSB7XG4gICAgICAgICAgICAgICAgY29uc3Qgc3RhdGUgPSB3aW5kb3cuc3RvcmUuZ2V0U3RhdGUoKTtcbiAgICAgICAgICAgICAgICB1c2VySWQgPSBzdGF0ZS5hdXRoLmlzQXV0aG9yaXplZCAmJiBzdGF0ZS5hdXRoLmlkIHx8ICcnO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh3aW5kb3cuZ191c2VyX2lkKSB7XG4gICAgICAgICAgICAgICAgdXNlcklkID0gd2luZG93LmdfdXNlcl9pZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIHF1aWNrQ2hlY2tBbmRSZW5kZXIoKSB7XG4gICAgICAgICAgICBjaGVja1VzZXJBdXRoKCk7XG5cblxuXG4gICAgICAgICAgICAvLyBvcGVuUG9wdXBCeUF0dHIoXCJwcml6ZUxhcHRvcFwiLCB0cnVlKVxuXG4gICAgICAgICAgICBidG5PcGVuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaW5pdFNwaW4pO1xuXG4gICAgICAgICAgICBzZXRCZXRIaXN0b3J5KClcblxuICAgICAgICAgICAgdGFibGVUYWJzLmZvckVhY2godGFiID0+IHtcbiAgICAgICAgICAgICAgICB0YWIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PntcbiAgICAgICAgICAgICAgICAgICAgdGFibGVUYWJzLmZvckVhY2godCA9PiB0LmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2codGFibGVUYWJzKVxuXG4gICAgICAgICAgICAgICAgICAgIGxldCB0YWJOdW0gPSBOdW1iZXIodGFiLmdldEF0dHJpYnV0ZShcImRhdGEtd2Vla1wiKSlcbiAgICAgICAgICAgICAgICAgICAgdGFiLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuICAgICAgICAgICAgICAgICAgICByZW5kZXJVc2Vycyh0YWJOdW0pO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgcmVuZGVyVXNlcnMoYWN0aXZlV2VlaylcblxuICAgICAgICAgICAgc2V0VGltZW91dChoaWRlTG9hZGVyLCAxMDAwKTtcblxuICAgICAgICAgICAgU2V0U2xpZGVyV2lkdGhCbHVyKClcblxuICAgICAgICAgICAgc2V0VGltZW91dCh0cmlnZ2VyU2hha2UsIGluaXRpYWxEZWxheSk7XG5cbiAgICAgICAgICAgIHBhcnRpY2lwYXRlQnRucy5mb3JFYWNoKGJ0biA9PiB7XG4gICAgICAgICAgICAgICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgcGFydGljaXBhdGUpO1xuICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnBvcHVwX19jbG9zZScpLmZvckVhY2goY2xvc2VCdG4gPT4ge1xuICAgICAgICAgICAgICAgIGNsb3NlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2xvc2VBbGxQb3B1cHMpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5vcGVuLWJ0bicpLmZvckVhY2goYnRuID0+IHtcbiAgICAgICAgICAgICAgICBidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHBvcHVwQXR0ciA9IGJ0bi5nZXRBdHRyaWJ1dGUoJ2RhdGEtcG9wdXAnKTtcbiAgICAgICAgICAgICAgICAgICAgb3BlblBvcHVwQnlBdHRyKHBvcHVwQXR0cik7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBvcHVwcycpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBvcGVuUG9wdXBFbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wb3B1cDpub3QoLmhpZGUpJyk7XG4gICAgICAgICAgICAgICAgaWYgKG9wZW5Qb3B1cEVsICYmICFvcGVuUG9wdXBFbC5jb250YWlucyhlLnRhcmdldCkpIHtcbiAgICAgICAgICAgICAgICAgICAgY2xvc2VBbGxQb3B1cHMoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcblxuXG4gICAgICAgICAgICB1cGRhdGVTbGlkZXIoKTtcblxuICAgICAgICAgICAgc2xpZGVyLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIGhhbmRsZVN0YXJ0KTtcbiAgICAgICAgICAgIHNsaWRlci5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBoYW5kbGVNb3ZlKTtcbiAgICAgICAgICAgIHNsaWRlci5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgaGFuZGxlRW5kKTtcbiAgICAgICAgICAgIHNsaWRlci5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgaGFuZGxlRW5kKTtcblxuICAgICAgICAgICAgc2xpZGVyLmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCBoYW5kbGVTdGFydCk7XG4gICAgICAgICAgICBzbGlkZXIuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2htb3ZlJywgaGFuZGxlTW92ZSk7XG4gICAgICAgICAgICBzbGlkZXIuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hlbmQnLCBoYW5kbGVFbmQpO1xuXG4gICAgICAgICAgICBidG5MZWZ0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gbW92ZVNsaWRlcigtMSkpO1xuICAgICAgICAgICAgYnRuUmlnaHQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBtb3ZlU2xpZGVyKDEpKTtcbiAgICAgICAgICAgIC8vIGRvdHMuZm9yRWFjaCgoZG90LCBpbmRleCkgPT4gZG90LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gZ29Ub1NsaWRlKGluZGV4KSkpO1xuXG5cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHdhaXRGb3JVc2VySWQgPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdHJ5RGV0ZWN0VXNlcklkKCk7XG4gICAgICAgICAgICAgICAgaWYgKHVzZXJJZCB8fCBhdHRlbXB0cyA+PSBtYXhBdHRlbXB0cykge1xuICAgICAgICAgICAgICAgICAgICBxdWlja0NoZWNrQW5kUmVuZGVyKCk7XG4gICAgICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpO1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGF0dGVtcHRzKys7XG4gICAgICAgICAgICB9LCBhdHRlbXB0SW50ZXJ2YWwpO1xuICAgICAgICB9KTtcblxuICAgICAgICBhd2FpdCB3YWl0Rm9yVXNlcklkO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGxvYWRUcmFuc2xhdGlvbnMoKSB7XG4gICAgICAgIHJldHVybiByZXF1ZXN0KGAvbmV3LXRyYW5zbGF0ZXMvJHtsb2NhbGV9YClcbiAgICAgICAgICAgIC50aGVuKGpzb24gPT4ge1xuICAgICAgICAgICAgICAgIGkxOG5EYXRhID0ganNvbjtcbiAgICAgICAgICAgICAgICB0cmFuc2xhdGUoKTtcbiAgICAgICAgICAgICAgICBjb25zdCB0YXJnZXROb2RlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzYW1DaGlsbFwiKTtcbiAgICAgICAgICAgICAgICBjb25zdCBtdXRhdGlvbk9ic2VydmVyID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIoZnVuY3Rpb24gKG11dGF0aW9ucykge1xuICAgICAgICAgICAgICAgICAgICBtdXRhdGlvbk9ic2VydmVyLmRpc2Nvbm5lY3QoKTtcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNsYXRlKCk7XG4gICAgICAgICAgICAgICAgICAgIG11dGF0aW9uT2JzZXJ2ZXIub2JzZXJ2ZSh0YXJnZXROb2RlLCB7IGNoaWxkTGlzdDogdHJ1ZSwgc3VidHJlZTogdHJ1ZSB9KTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBtdXRhdGlvbk9ic2VydmVyLm9ic2VydmUodGFyZ2V0Tm9kZSwge1xuICAgICAgICAgICAgICAgICAgICBjaGlsZExpc3Q6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIHN1YnRyZWU6IHRydWVcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgfSk7XG4gICAgfVxuXG5cbiAgICBmdW5jdGlvbiBTZXRTbGlkZXJXaWR0aEJsdXIoKXtcbiAgICAgICAgY29uc3Qgc2xpZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNoYWxsYW5nZV9fY3VycmVudCcpO1xuICAgICAgICBjb25zdCBzbGlkZXMgPSBzbGlkZXIucXVlcnlTZWxlY3RvckFsbCgnLmNoYWxsYW5nZV9fY3VycmVudC1pdGVtJyk7XG4gICAgICAgIGNvbnN0IHRhYnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY2hhbGxhbmdlX190YWJzLWl0ZW0nKTtcbiAgICAgICAgY29uc3QgZG90cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jaGFsbGFuZ2VfX25hdi1kb3RzLWl0ZW0nKTtcbiAgICAgICAgY29uc3QgYnRuTGVmdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jaGFsbGFuZ2VfX25hdi1sZWZ0Jyk7XG4gICAgICAgIGNvbnN0IGJ0blJpZ2h0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNoYWxsYW5nZV9fbmF2LXJpZ2h0Jyk7XG5cbiAgICAgICAgbGV0IGN1cnJlbnRJbmRleCA9IDA7XG5cbiAgICAgICAgZnVuY3Rpb24gdXBkYXRlU2xpZGVyKGluZGV4KSB7XG4gICAgICAgICAgICBzbGlkZXMuZm9yRWFjaChzbGlkZSA9PiBzbGlkZS5jbGFzc0xpc3QucmVtb3ZlKCdfYWN0aXZlJykpO1xuICAgICAgICAgICAgdGFicy5mb3JFYWNoKHRhYiA9PiB0YWIuY2xhc3NMaXN0LnJlbW92ZSgnX2FjdGl2ZScpKTtcbiAgICAgICAgICAgIGRvdHMuZm9yRWFjaChkb3QgPT4gZG90LmNsYXNzTGlzdC5yZW1vdmUoJ19hY3RpdmUnKSk7XG5cbiAgICAgICAgICAgIHNsaWRlc1tpbmRleF0uY2xhc3NMaXN0LmFkZCgnX2FjdGl2ZScpO1xuICAgICAgICAgICAgdGFic1tpbmRleF0uY2xhc3NMaXN0LmFkZCgnX2FjdGl2ZScpO1xuICAgICAgICAgICAgZG90c1tpbmRleF0uY2xhc3NMaXN0LmFkZCgnX2FjdGl2ZScpO1xuICAgICAgICB9XG5cbiAgICAgICAgdXBkYXRlU2xpZGVyKGN1cnJlbnREYXlOdW1iZXIgLSAxKTtcbiAgICAgICAgdGFicy5mb3JFYWNoKCh0YWIsIGkpID0+e1xuICAgICAgICAgICAgaWYoaSArIDEgPD0gY3VycmVudERheU51bWJlcil7XG4gICAgICAgICAgICAgICAgdGFiLmNsYXNzTGlzdC5hZGQoJ19vcGVuJyk7XG4gICAgICAgICAgICAgICAgdGFiLmNsYXNzTGlzdC5yZW1vdmUoJ19sb2NrJyk7XG5cbiAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgIHRhYi5jbGFzc0xpc3QucmVtb3ZlKCdfYWN0aXZlJyk7XG4gICAgICAgICAgICAgICAgdGFiLmNsYXNzTGlzdC5hZGQoJ19sb2NrJyk7XG4gICAgICAgICAgICAgICAgdGFiLmNsYXNzTGlzdC5yZW1vdmUoJ19vcGVuJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZihpICsgMSA9PT0gYWN0aXZlV2Vlayl7XG4gICAgICAgICAgICAgICAgdGFiLmNsYXNzTGlzdC5hZGQoJ19hY3RpdmUnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSApO1xuXG4gICAgICAgIC8vIGZ1bmN0aW9uIG1vdmVMZWZ0KCkge1xuICAgICAgICAvLyAgICAgY3VycmVudEluZGV4ID0gKGN1cnJlbnRJbmRleCAtIDEgKyBzbGlkZXMubGVuZ3RoKSAlIHNsaWRlcy5sZW5ndGg7XG4gICAgICAgIC8vICAgICB1cGRhdGVTbGlkZXIoY3VycmVudEluZGV4KTtcbiAgICAgICAgLy8gfVxuICAgICAgICAvL1xuICAgICAgICAvLyBmdW5jdGlvbiBtb3ZlUmlnaHQoKSB7XG4gICAgICAgIC8vICAgICBjdXJyZW50SW5kZXggPSAoY3VycmVudEluZGV4ICsgMSkgJSBzbGlkZXMubGVuZ3RoO1xuICAgICAgICAvLyAgICAgdXBkYXRlU2xpZGVyKGN1cnJlbnRJbmRleCk7XG4gICAgICAgIC8vIH1cbiAgICAgICAgLy9cbiAgICAgICAgLy8gYnRuTGVmdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIG1vdmVMZWZ0KTtcbiAgICAgICAgLy8gYnRuUmlnaHQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBtb3ZlUmlnaHQpO1xuXG4gICAgICAgIC8vIHRhYnMuZm9yRWFjaCgodGFiLCBpbmRleCkgPT4ge1xuICAgICAgICAvLyAgICAgdGFiLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAvLyAgICAgICAgIGN1cnJlbnRJbmRleCA9IGluZGV4O1xuICAgICAgICAvLyAgICAgICAgIHVwZGF0ZVNsaWRlcihjdXJyZW50SW5kZXgpO1xuICAgICAgICAvLyAgICAgfSk7XG4gICAgICAgIC8vIH0pO1xuICAgICAgICAvL1xuICAgICAgICAvLyBkb3RzLmZvckVhY2goKGRvdCwgaW5kZXgpID0+IHtcbiAgICAgICAgLy8gICAgIGRvdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgLy8gICAgICAgICBjdXJyZW50SW5kZXggPSBpbmRleDtcbiAgICAgICAgLy8gICAgICAgICB1cGRhdGVTbGlkZXIoY3VycmVudEluZGV4KTtcbiAgICAgICAgLy8gICAgIH0pO1xuICAgICAgICAvLyB9KTtcblxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNoZWNrVXNlckF1dGgoKSB7XG4gICAgICAgIGNvbnN0IGxvYWRUaW1lID0gMjAwO1xuICAgICAgICByZXF1ZXN0KGAvZmF2dXNlci8ke3VzZXJJZH1gKS50aGVuKCh1c2VyKSA9PiB7XG5cbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHNob3dFbGVtZW50cyA9IChlbGVtZW50cykgPT4gZWxlbWVudHMuZm9yRWFjaChlbCA9PiBlbC5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJykpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGhpZGVFbGVtZW50cyA9IChlbGVtZW50cykgPT4gZWxlbWVudHMuZm9yRWFjaChlbCA9PiBlbC5jbGFzc0xpc3QuYWRkKCdoaWRlJykpO1xuXG4gICAgICAgICAgICAgICAgaWYgKCF1c2VySWQpIHtcbiAgICAgICAgICAgICAgICAgICAgaGlkZUVsZW1lbnRzKHBhcnRpY2lwYXRlQnRucyk7XG4gICAgICAgICAgICAgICAgICAgIGhpZGVFbGVtZW50cyhyZWRpcmVjdEJ0bnMpO1xuICAgICAgICAgICAgICAgICAgICBzaG93RWxlbWVudHModW5hdXRoTXNncyk7XG4gICAgICAgICAgICAgICAgICAgIGhpZGVMb2FkZXIoKTtcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudENhcmRzV3JhcC5jbGFzc0xpc3QuYWRkKCdfdW5hdXRoJyk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoZmFsc2UpO1xuICAgICAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgICAgICBjdXJyZW50Q2FyZHNXcmFwLmNsYXNzTGlzdC5yZW1vdmUoJ191bmF1dGgnKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBoaWRlRWxlbWVudHModW5hdXRoTXNncyk7XG5cbiAgICAgICAgICAgICAgICBpZiAodXNlci51c2VyaWQpIHtcbiAgICAgICAgICAgICAgICAgICAgaGlkZUVsZW1lbnRzKHBhcnRpY2lwYXRlQnRucyk7XG4gICAgICAgICAgICAgICAgICAgIHNob3dFbGVtZW50cyhyZWRpcmVjdEJ0bnMpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHNob3dFbGVtZW50cyhwYXJ0aWNpcGF0ZUJ0bnMpO1xuICAgICAgICAgICAgICAgICAgICBoaWRlRWxlbWVudHMocmVkaXJlY3RCdG5zKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaGlkZUxvYWRlcigpO1xuXG4gICAgICAgICAgICAgICAgc2V0VXNlclByb2dyZXNzKHVzZXIpO1xuXG4gICAgICAgICAgICB9LCBsb2FkVGltZSlcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBmdW5jdGlvbiByZXBvcnRFcnJvcihlcnIpIHtcbiAgICAgICAgY29uc3QgcmVwb3J0RGF0YSA9IHtcbiAgICAgICAgICAgIG9yaWdpbjogd2luZG93LmxvY2F0aW9uLmhyZWYsXG4gICAgICAgICAgICB1c2VyaWQ6IHVzZXJJZCxcbiAgICAgICAgICAgIGVycm9yVGV4dDogZXJyPy5lcnJvciB8fCBlcnI/LnRleHQgfHwgZXJyPy5tZXNzYWdlIHx8ICdVbmtub3duIGVycm9yJyxcbiAgICAgICAgICAgIHR5cGU6IGVycj8ubmFtZSB8fCAnVW5rbm93bkVycm9yJyxcbiAgICAgICAgICAgIHN0YWNrOiBlcnI/LnN0YWNrIHx8ICcnXG4gICAgICAgIH07XG5cbiAgICAgICAgZmV0Y2goJ2h0dHBzOi8vZmF2LXByb20uY29tL2FwaS1jbXMvcmVwb3J0cy9hZGQnLCB7XG4gICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkocmVwb3J0RGF0YSlcbiAgICAgICAgfSkuY2F0Y2goY29uc29sZS53YXJuKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiB0cmFuc2xhdGUoKSB7XG4gICAgICAgIGNvbnN0IGVsZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtdHJhbnNsYXRlXScpXG4gICAgICAgIGlmIChlbGVtcyAmJiBlbGVtcy5sZW5ndGgpIHtcbiAgICAgICAgICAgIGlmKHRyYW5zbGF0ZVN0YXRlKXtcbiAgICAgICAgICAgICAgICBlbGVtcy5mb3JFYWNoKGVsZW0gPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBrZXkgPSBlbGVtLmdldEF0dHJpYnV0ZSgnZGF0YS10cmFuc2xhdGUnKTtcbiAgICAgICAgICAgICAgICAgICAgZWxlbS5pbm5lckhUTUwgPSBpMThuRGF0YVtrZXldIHx8ICcqLS0tLU5FRUQgVE8gQkUgVFJBTlNMQVRFRC0tLS0qICAga2V5OiAgJyArIGtleTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGkxOG5EYXRhW2tleV0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsZW0ucmVtb3ZlQXR0cmlidXRlKCdkYXRhLXRyYW5zbGF0ZScpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwidHJhbnNsYXRpb24gd29ya3MhXCIpXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmVmcmVzaExvY2FsaXplZENsYXNzKG1haW5QYWdlKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiByZWZyZXNoTG9jYWxpemVkQ2xhc3MoZWxlbWVudCkge1xuICAgICAgICBpZiAoIWVsZW1lbnQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBmb3IgKGNvbnN0IGxhbmcgb2YgWyd1aycsICdlbiddKSB7XG4gICAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUobGFuZyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKGxvY2FsZSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVuZGVyVXNlcnMod2Vlaykge1xuICAgICAgICByZXF1ZXN0KGAvdXNlcnMvJHt3ZWVrfWApXG4gICAgICAgICAgICAudGhlbihkYXRhID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCB1c2VycyA9IGRhdGE7XG4gICAgICAgICAgICAgICAgcG9wdWxhdGVVc2Vyc1RhYmxlKHVzZXJzLCB1c2VySWQsIHdlZWspO1xuICAgICAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcG9wdWxhdGVVc2Vyc1RhYmxlKHVzZXJzLCBjdXJyZW50VXNlcklkLCB3ZWVrKSB7XG4gICAgICAgIHJlc3VsdHNUYWJsZS5pbm5lckhUTUwgPSAnJztcbiAgICAgICAgcmVzdWx0c1RhYmxlT3RoZXIuaW5uZXJIVE1MID0gJyc7XG4gICAgICAgIGlmICghdXNlcnM/Lmxlbmd0aCkgcmV0dXJuO1xuICAgICAgICBjb25zdCBjdXJyZW50VXNlciA9IHVzZXJzLmZpbmQodXNlciA9PiB1c2VyLnVzZXJpZCA9PT0gY3VycmVudFVzZXJJZCk7XG4gICAgICAgIGNvbnN0IGlzVG9wQ3VycmVudFVzZXIgPSBjdXJyZW50VXNlciAmJiB1c2Vycy5zbGljZSgwLCAxMCkuc29tZSh1c2VyID0+IHVzZXIudXNlcmlkID09PSBjdXJyZW50VXNlcklkKTtcbiAgICAgICAgY29uc3QgdG9wVXNlcnNMZW5ndGggPSAhdXNlcklkIHx8IGlzVG9wQ3VycmVudFVzZXIgID8gMTMgOiAxMDtcbiAgICAgICAgY29uc3QgdG9wVXNlcnMgPSB1c2Vycy5zbGljZSgwLCB0b3BVc2Vyc0xlbmd0aCk7XG4gICAgICAgIHRvcFVzZXJzLmZvckVhY2godXNlciA9PiB7XG4gICAgICAgICAgICBkaXNwbGF5VXNlcih1c2VyLCB1c2VyLnVzZXJpZCA9PT0gY3VycmVudFVzZXJJZCwgcmVzdWx0c1RhYmxlLCB0b3BVc2VycywgaXNUb3BDdXJyZW50VXNlciwgd2Vlayk7XG4gICAgICAgIH0pO1xuICAgICAgICBpZiAoIWlzVG9wQ3VycmVudFVzZXIgJiYgY3VycmVudFVzZXIpIHtcbiAgICAgICAgICAgIGRpc3BsYXlVc2VyKGN1cnJlbnRVc2VyLCB0cnVlLCByZXN1bHRzVGFibGVPdGhlciwgdXNlcnMsIGZhbHNlLCB3ZWVrKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGRpc3BsYXlVc2VyKHVzZXIsIGlzQ3VycmVudFVzZXIsIHRhYmxlLCB1c2VycywgaXNUb3BDdXJyZW50VXNlciwgd2Vlaykge1xuICAgICAgICBjb25zdCByZW5kZXJSb3cgPSAodXNlckRhdGEsIG9wdGlvbnMgPSB7fSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgeyBoaWdobGlnaHQgPSBmYWxzZSwgbmVpZ2hib3IgPSBmYWxzZSB9ID0gb3B0aW9ucztcbiAgICAgICAgICAgIGNvbnN0IHVzZXJSb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIHVzZXJSb3cuY2xhc3NMaXN0LmFkZCgndGFibGVfX3JvdycpO1xuXG4gICAgICAgICAgICBjb25zdCB1c2VyUGxhY2UgPSB1c2Vycy5pbmRleE9mKHVzZXJEYXRhKSArIDE7XG4gICAgICAgICAgICBjb25zdCBwcml6ZUtleSA9IGRlYnVnID8gbnVsbCA6IGdldFByaXplVHJhbnNsYXRpb25LZXkodXNlclBsYWNlLCB3ZWVrKTtcblxuICAgICAgICAgICAgaWYgKHVzZXJQbGFjZSA8PSAzKSB7XG4gICAgICAgICAgICAgICAgdXNlclJvdy5jbGFzc0xpc3QuYWRkKGBwbGFjZSR7dXNlclBsYWNlfWApO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoaGlnaGxpZ2h0IHx8IGlzQ3VycmVudFVzZXIgJiYgIW5laWdoYm9yKSB7XG4gICAgICAgICAgICAgICAgdXNlclJvdy5jbGFzc0xpc3QuYWRkKCd5b3UnKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAobmVpZ2hib3IpIHtcbiAgICAgICAgICAgICAgICB1c2VyUm93LmNsYXNzTGlzdC5hZGQoJ19uZWlnaGJvcicpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB1c2VyUm93LmlubmVySFRNTCA9IGBcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0YWJsZV9fcm93LWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAke3VzZXJQbGFjZSA8IDEwID8gJzAnICsgdXNlclBsYWNlIDogdXNlclBsYWNlfVxuICAgICAgICAgICAgICAgICR7aXNDdXJyZW50VXNlciAmJiAhbmVpZ2hib3IgPyAnPHNwYW4gY2xhc3M9XCJ5b3VcIj4nICsgdHJhbnNsYXRlS2V5KFwieW91XCIpICsgJzwvc3Bhbj4nIDogJyd9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0YWJsZV9fcm93LWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAke2lzQ3VycmVudFVzZXIgJiYgIW5laWdoYm9yID8gdXNlckRhdGEudXNlcmlkIDogbWFza1VzZXJJZCh1c2VyRGF0YS51c2VyaWQpfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGFibGVfX3Jvdy1pdGVtXCI+XG4gICAgICAgICAgICAgICAgJHt1c2VyRGF0YS5wb2ludHN9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0YWJsZV9fcm93LWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAke3ByaXplS2V5ID8gdHJhbnNsYXRlS2V5KHByaXplS2V5KSA6ICcgLSAnfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGFibGVfX3Jvdy1pdGVtXCI+XG4gICAgICAgICAgICAgICAgJHtwcml6ZUtleSA/IHRyYW5zbGF0ZUtleShwcml6ZUtleSkgOiAnIC0gJ31cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICBgO1xuXG4gICAgICAgICAgICB0YWJsZS5hcHBlbmQodXNlclJvdyk7XG4gICAgICAgIH07XG4gICAgICAgIGlmIChpc0N1cnJlbnRVc2VyICYmICFpc1RvcEN1cnJlbnRVc2VyKSB7XG4gICAgICAgICAgICBjb25zdCBpbmRleCA9IHVzZXJzLmluZGV4T2YodXNlcik7XG4gICAgICAgICAgICBpZiAodXNlcnNbaW5kZXggLSAxXSkge1xuICAgICAgICAgICAgICAgIHJlbmRlclJvdyh1c2Vyc1tpbmRleCAtIDFdLCB7IG5laWdoYm9yOiB0cnVlIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmVuZGVyUm93KHVzZXIsIHsgaGlnaGxpZ2h0OiB0cnVlIH0pO1xuICAgICAgICAgICAgaWYgKHVzZXJzW2luZGV4ICsgMV0pIHtcbiAgICAgICAgICAgICAgICByZW5kZXJSb3codXNlcnNbaW5kZXggKyAxXSwgeyBuZWlnaGJvcjogdHJ1ZSB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJlbmRlclJvdyh1c2VyKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHRyYW5zbGF0ZUtleShrZXksIGRlZmF1bHRWYWx1ZSkge1xuICAgICAgICBpZiAoIWtleSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGxldCBuZWVkS2V5ID0gZGVidWcgPyBrZXkgOiBgKi0tLS1ORUVEIFRPIEJFIFRSQU5TTEFURUQtLS0tKiBrZXk6ICR7a2V5fWBcblxuICAgICAgICBkZWZhdWx0VmFsdWUgPSAgbmVlZEtleSB8fCBrZXk7XG4gICAgICAgIHJldHVybiBpMThuRGF0YVtrZXldIHx8IGRlZmF1bHRWYWx1ZTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBtYXNrVXNlcklkKHVzZXJJZCkge1xuICAgICAgICByZXR1cm4gXCIqKlwiICsgdXNlcklkLnRvU3RyaW5nKCkuc2xpY2UoMik7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0UHJpemVUcmFuc2xhdGlvbktleShwbGFjZSwgd2Vlaykge1xuICAgICAgICBpZiAocGxhY2UgPD0gMykgcmV0dXJuIGBwcml6ZV8ke3dlZWt9LSR7cGxhY2V9YDtcbiAgICAgICAgaWYgKHBsYWNlIDw9IDEwKSByZXR1cm4gYHByaXplXyR7d2Vla30tNC0xMGA7XG4gICAgICAgIGlmIChwbGFjZSA8PSAyNSkgcmV0dXJuIGBwcml6ZV8ke3dlZWt9LTExLTI1YDtcbiAgICAgICAgaWYgKHBsYWNlIDw9IDUwKSByZXR1cm4gYHByaXplXyR7d2Vla30tMjYtNTBgO1xuICAgICAgICBpZiAocGxhY2UgPD0gNzUpIHJldHVybiBgcHJpemVfJHt3ZWVrfS01MS03NWA7XG4gICAgICAgIGlmIChwbGFjZSA8PSAxMDApIHJldHVybiBgcHJpemVfJHt3ZWVrfS03Ni0xMDBgO1xuICAgICAgICBpZiAocGxhY2UgPD0gMTI1KSByZXR1cm4gYHByaXplXyR7d2Vla30tMTAxLTEyNWA7XG4gICAgICAgIGlmIChwbGFjZSA8PSAxNTApIHJldHVybiBgcHJpemVfJHt3ZWVrfS0xMjYtMTUwYDtcbiAgICAgICAgaWYgKHBsYWNlIDw9IDE3NSkgcmV0dXJuIGBwcml6ZV8ke3dlZWt9LTE1MS0xNzVgO1xuICAgICAgICBpZiAocGxhY2UgPD0gMjAwKSByZXR1cm4gYHByaXplXyR7d2Vla30tMTc2LTIwMGA7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcGFydGljaXBhdGUoKSB7XG4gICAgICAgIGlmICghdXNlcklkKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgcGFyYW1zID0geyB1c2VyaWQ6IHVzZXJJZCB9O1xuICAgICAgICBmZXRjaChhcGlVUkwgKyAnL3VzZXIvJywge1xuICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICdBY2NlcHQnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkocGFyYW1zKVxuICAgICAgICB9KS50aGVuKHJlcyA9PiByZXMuanNvbigpKVxuICAgICAgICAgICAgLnRoZW4ocmVzID0+IHtcbiAgICAgICAgICAgICAgICBsb2FkZXJCdG4gPSB0cnVlXG4gICAgICAgICAgICAgICAgdG9nZ2xlQ2xhc3NlcyhwYXJ0aWNpcGF0ZUJ0bnMsIFwibG9hZGVyXCIpXG4gICAgICAgICAgICAgICAgdG9nZ2xlVHJhbnNsYXRlcyhwYXJ0aWNpcGF0ZUJ0bnMsIFwibG9hZGVyXCIpXG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PntcbiAgICAgICAgICAgICAgICAgICAgdG9nZ2xlVHJhbnNsYXRlcyhwYXJ0aWNpcGF0ZUJ0bnMsIFwibG9hZGVyX3JlYWR5XCIpXG4gICAgICAgICAgICAgICAgICAgIHRvZ2dsZUNsYXNzZXMocGFydGljaXBhdGVCdG5zLCBcImRvbmVcIilcbiAgICAgICAgICAgICAgICAgICAgdG9nZ2xlQ2xhc3NlcyhwYXJ0aWNpcGF0ZUJ0bnMsIFwibG9hZGVyXCIpXG4gICAgICAgICAgICAgICAgfSwgNTAwKVxuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCk9PntcbiAgICAgICAgICAgICAgICAgICAgY2hlY2tVc2VyQXV0aCgpXG4gICAgICAgICAgICAgICAgfSwgMTAwMClcblxuICAgICAgICAgICAgfSk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIHVwZGF0ZVNsaWRlcigpIHtcbiAgICAgICAgaXRlbXMuZm9yRWFjaCgoaXRlbSwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGRpc3RhbmNlID0gaW5kZXggLSBjdXJyZW50SW5kZXg7XG4gICAgICAgICAgICBsZXQgbmV3UG9zaXRpb24gPSBkaXN0YW5jZSAqIDEwNTtcblxuICAgICAgICAgICAgaWYgKGRpc3RhbmNlID4gdG90YWxJdGVtcyAvIDIpIHtcbiAgICAgICAgICAgICAgICBuZXdQb3NpdGlvbiAtPSB0b3RhbEl0ZW1zICogMTA1O1xuICAgICAgICAgICAgfSBlbHNlIGlmIChkaXN0YW5jZSA8IC10b3RhbEl0ZW1zIC8gMikge1xuICAgICAgICAgICAgICAgIG5ld1Bvc2l0aW9uICs9IHRvdGFsSXRlbXMgKiAxMDU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnN0IHNjYWxlID0gaW5kZXggPT09IGN1cnJlbnRJbmRleCA/IDEgOiAxO1xuXG4gICAgICAgICAgICBpdGVtLnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGVYKCR7bmV3UG9zaXRpb259JSkgc2NhbGUoJHtzY2FsZX0pYDtcbiAgICAgICAgICAgIGl0ZW0uc3R5bGUuekluZGV4ID0gaW5kZXggPT09IGN1cnJlbnRJbmRleCA/IDIgOiAxO1xuXG4gICAgICAgICAgICBjb25zdCBpc1Zpc2libGUgPSBNYXRoLmFicyhkaXN0YW5jZSkgPD0gMSB8fFxuICAgICAgICAgICAgICAgIChpbmRleCA9PT0gMCAmJiBjdXJyZW50SW5kZXggPT09IHRvdGFsSXRlbXMgLSAxKSB8fFxuICAgICAgICAgICAgICAgIChpbmRleCA9PT0gdG90YWxJdGVtcyAtIDEgJiYgY3VycmVudEluZGV4ID09PSAwKTtcblxuICAgICAgICAgICAgaXRlbS5jbGFzc0xpc3QudG9nZ2xlKCdoaWRkZW4nLCAhaXNWaXNpYmxlKTtcbiAgICAgICAgICAgIGl0ZW0uY2xhc3NMaXN0LnRvZ2dsZSgnYWN0aXZlJywgaW5kZXggPT09IGN1cnJlbnRJbmRleCk7XG5cbiAgICAgICAgICAgIGl0ZW0uY2xhc3NMaXN0LnJlbW92ZSgnbGVmdC1zbGlkZScsICdyaWdodC1zbGlkZScpO1xuICAgICAgICAgICAgaWYgKGRpc3RhbmNlID09PSAxIHx8IChjdXJyZW50SW5kZXggPT09IHRvdGFsSXRlbXMgLSAxICYmIGluZGV4ID09PSAwKSkge1xuICAgICAgICAgICAgICAgIGl0ZW0uY2xhc3NMaXN0LmFkZCgncmlnaHQtc2xpZGUnKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZGlzdGFuY2UgPT09IC0xIHx8IChjdXJyZW50SW5kZXggPT09IDAgJiYgaW5kZXggPT09IHRvdGFsSXRlbXMgLSAxKSkge1xuICAgICAgICAgICAgICAgIGl0ZW0uY2xhc3NMaXN0LmFkZCgnbGVmdC1zbGlkZScpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICBkb3RzLmZvckVhY2goZG90ID0+IGRvdC5jbGFzc0xpc3QucmVtb3ZlKCdfYWN0aXZlJykpO1xuICAgICAgICBpZiAoZG90c1tjdXJyZW50SW5kZXhdKSB7XG4gICAgICAgICAgICBkb3RzW2N1cnJlbnRJbmRleF0uY2xhc3NMaXN0LmFkZCgnX2FjdGl2ZScpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbW92ZVNsaWRlcihvZmZzZXQpIHtcbiAgICAgICAgY3VycmVudEluZGV4ID0gKGN1cnJlbnRJbmRleCArIG9mZnNldCArIHRvdGFsSXRlbXMpICUgdG90YWxJdGVtcztcbiAgICAgICAgdXBkYXRlU2xpZGVyKCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ29Ub1NsaWRlKGluZGV4KSB7XG4gICAgICAgIGN1cnJlbnRJbmRleCA9IGluZGV4O1xuICAgICAgICB1cGRhdGVTbGlkZXIoKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBoYW5kbGVTdGFydChldmVudCkge1xuICAgICAgICBpc0RyYWdnaW5nID0gdHJ1ZTtcbiAgICAgICAgc3RhcnRYID0gZXZlbnQuY2xpZW50WCB8fCBldmVudC50b3VjaGVzWzBdLmNsaWVudFg7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaGFuZGxlTW92ZShldmVudCkge1xuICAgICAgICBpZiAoIWlzRHJhZ2dpbmcpIHJldHVybjtcbiAgICAgICAgY29uc3QgY3VycmVudFggPSBldmVudC5jbGllbnRYIHx8IGV2ZW50LnRvdWNoZXNbMF0uY2xpZW50WDtcbiAgICAgICAgY29uc3QgZGlmZlggPSBjdXJyZW50WCAtIHN0YXJ0WDtcblxuICAgICAgICBpZiAoTWF0aC5hYnMoZGlmZlgpID4gNTApIHtcbiAgICAgICAgICAgIG1vdmVTbGlkZXIoZGlmZlggPiAwID8gLTEgOiAxKTtcbiAgICAgICAgICAgIGlzRHJhZ2dpbmcgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGhhbmRsZUVuZCgpIHtcbiAgICAgICAgaXNEcmFnZ2luZyA9IGZhbHNlO1xuICAgIH1cblxuICAgIC8vIGZ1bmN0aW9uIG9wZW5Qb3B1cEJ5QXR0cihwb3B1cEF0dHIsIGlzU2hvd1Byb2dyZXNzID0gZmFsc2UpIHtcbiAgICAvLyAgICAgY29uc3QgYWxsUG9wdXBzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnBvcHVwJyk7XG4gICAgLy8gICAgIGFsbFBvcHVwcy5mb3JFYWNoKHAgPT4gcC5jbGFzc0xpc3QuYWRkKCdoaWRlJykpO1xuICAgIC8vXG4gICAgLy8gICAgIGNvbnN0IHRhcmdldFBvcHVwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLnBvcHVwW2RhdGEtcG9wdXA9XCIke3BvcHVwQXR0cn1cIl1gKTtcbiAgICAvLyAgICAgaWYgKHRhcmdldFBvcHVwKSB7XG4gICAgLy8gICAgICAgICB0YXJnZXRQb3B1cC5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJyk7XG4gICAgLy8gICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucG9wdXBzJykuY2xhc3NMaXN0LnJlbW92ZSgnb3BhY2l0eS1vdmVybGF5Jyk7XG4gICAgLy8gICAgIH1cbiAgICAvL1xuICAgIC8vICAgICBjb25zdCBwcm9ncmVzcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wb3B1cHMgLnByb2dyZXNzJyk7XG4gICAgLy8gICAgIGlmIChwcm9ncmVzcykge1xuICAgIC8vICAgICAgICAgcHJvZ3Jlc3MuY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZScsICFpc1Nob3dQcm9ncmVzcyk7XG4gICAgLy8gICAgIH1cbiAgICAvLyB9XG5cblxuICAgIGZ1bmN0aW9uIGNsb3NlQWxsUG9wdXBzKCkge1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucG9wdXAnKS5mb3JFYWNoKHAgPT4gcC5jbGFzc0xpc3QuYWRkKCdoaWRlJykpO1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucG9wdXBzIC5wcm9ncmVzcycpLmZvckVhY2gocCA9PiBwLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKSk7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wb3B1cHMnKS5jbGFzc0xpc3QuYWRkKCdvcGFjaXR5LW92ZXJsYXknKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiB0cmlnZ2VyU2hha2UoKSB7XG4gICAgICAgIGJveC5jbGFzc0xpc3QuYWRkKCdzaGFrZScpO1xuXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgYm94LmNsYXNzTGlzdC5yZW1vdmUoJ3NoYWtlJyk7XG4gICAgICAgICAgICBjb25zdCBuZXh0U2hha2UgPSBNYXRoLnJhbmRvbSgpICogNjAwMCArIDQwMDA7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KHRyaWdnZXJTaGFrZSwgbmV4dFNoYWtlKTtcbiAgICAgICAgfSwgMTIwMCk7XG4gICAgfVxuXG5cblxuICAgIGxvYWRUcmFuc2xhdGlvbnMoKS50aGVuKGluaXQpXG5cbiAgICAvLyBpbml0KClcblxuXG4gICAgLy8vIFRFU1RcblxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5tZW51LXRlc3RfX2J0bicpLmZvckVhY2goYnRuID0+IHtcbiAgICAgICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgYnRuLnBhcmVudEVsZW1lbnQuY2xhc3NMaXN0LnRvZ2dsZSgnb3BlbicpO1xuICAgICAgICB9KTtcbiAgICB9KTtcblxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsICgpID0+IHtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tZW51LWJ0blwiKT8uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWVudS10ZXN0XCIpPy5jbGFzc0xpc3QudG9nZ2xlKFwiaGlkZVwiKTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICBjb25zdCBsbmdCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmxuZy1idG5cIilcblxuICAgIGxuZ0J0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICBpZiAoc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbShcImxvY2FsZVwiKSkge1xuICAgICAgICAgICAgc2Vzc2lvblN0b3JhZ2UucmVtb3ZlSXRlbShcImxvY2FsZVwiKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oXCJsb2NhbGVcIiwgXCJlblwiKTtcbiAgICAgICAgfVxuICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XG4gICAgfSk7XG5cbiAgICBjb25zdCBhdXRoQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hdXRoLWJ0blwiKVxuICAgIGNvbnN0IGJldEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYnRuLWJldC1vbmxpbmVcIilcblxuICAgIGF1dGhCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+e1xuICAgICAgICBpZih1c2VySWQpe1xuICAgICAgICAgICAgc2Vzc2lvblN0b3JhZ2UucmVtb3ZlSXRlbShcInVzZXJJZFwiKVxuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oXCJ1c2VySWRcIiwgXCI3Nzc3NzdcIilcbiAgICAgICAgfVxuICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKClcbiAgICB9KTtcblxuXG59KSgpO1xuXG4vLyDRhtGOINGE0YPQvdC60YbRltGOINCy0LjQtNCw0LvQuCwg0LAg0L7RgdC90L7QstC90YMg0YDQvtC30LrQvtC80LXQvdGC0LhcbmZ1bmN0aW9uIG9wZW5Qb3B1cEJ5QXR0cihwb3B1cEF0dHIsIGlzU2hvd1Byb2dyZXNzID0gZmFsc2UpIHtcbiAgICBjb25zdCBhbGxQb3B1cHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucG9wdXAnKTtcbiAgICBhbGxQb3B1cHMuZm9yRWFjaChwID0+IHAuY2xhc3NMaXN0LmFkZCgnaGlkZScpKTtcblxuICAgIGNvbnN0IHRhcmdldFBvcHVwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLnBvcHVwW2RhdGEtcG9wdXA9XCIke3BvcHVwQXR0cn1cIl1gKTtcbiAgICBpZiAodGFyZ2V0UG9wdXApIHtcbiAgICAgICAgdGFyZ2V0UG9wdXAuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpO1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucG9wdXBzJykuY2xhc3NMaXN0LnJlbW92ZSgnb3BhY2l0eS1vdmVybGF5Jyk7XG4gICAgfVxuXG4gICAgY29uc3QgcHJvZ3Jlc3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucG9wdXBzIC5wcm9ncmVzcycpO1xuICAgIGlmIChwcm9ncmVzcykge1xuICAgICAgICBwcm9ncmVzcy5jbGFzc0xpc3QudG9nZ2xlKCdoaWRlJywgIWlzU2hvd1Byb2dyZXNzKTtcbiAgICB9XG59XG4vLyDRhtGOINGE0YPQvdC60YbRltGOINCy0LjQtNCw0LvQuCwg0LAg0L7RgdC90L7QstC90YMg0YDQvtC30LrQvtC80LXQvdGC0LhcblxuIl19
