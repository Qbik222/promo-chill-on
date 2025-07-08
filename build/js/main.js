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
    return dayNumber - 1;
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
    tableTabs = document.querySelectorAll('.table__tabs-item'),
    dropSpins = document.querySelector('.drop--spins');
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
        setUserProgress(user);
        displayBetsHistory(user.spins);
      });
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

    // pointsPerDay = 10002

    var thresholdPoints = 1000;
    console.log(pointsPerDay);
    pointsPerDay = pointsPerDay > thresholdPoints ? thresholdPoints : pointsPerDay;
    if (!pointsPerDay) pointsPerDay = 0;
    counterPoints.textContent = "".concat(pointsPerDay);
    var progress = Math.min(pointsPerDay / thresholdPoints * 100, 100);
    console.log(progress);
    if (progress >= 100) {
      progress = 100;
      challangeBlur.classList.add('hide');
      progressBox.classList.remove('_lock');
      progressBox.classList.add('_open');
      challangeBtnPointer.classList.remove("hide");
      btnOpen.classList.remove('hide');
      challangeDepositBtn.classList.add('hide');
    } else {
      console.log("dsadas");
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

              tableTabs.forEach(function (tab, index) {
                if (index + 1 === activeWeek) {
                  tab.classList.add('active');
                } else {
                  tab.classList.remove('active');
                }
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
    var currentIndex = currentDayNumber - 1;
    console.log(currentDayNumber);
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
      if (i + 1 === currentDayNumber) {
        tab.classList.add('_active');
      }
    });
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
    request("/favuser/".concat(userId)).then(function (user) {
      displayBetsHistory(user.spins);
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
          setUserProgress(user);
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
      userRow.innerHTML = "\n            <div class=\"table__row-item\">\n                ".concat(userPlace < 10 ? '0' + userPlace : userPlace, "\n                ").concat(isCurrentUser && !neighbor ? '<span class="you">' + translateKey("you") + '</span>' : '', "\n            </div>\n            <div class=\"table__row-item\">\n                ").concat(isCurrentUser && !neighbor ? userData.userid : maskUserId(userData.userid), "\n            </div>\n            <div class=\"table__row-item\">\n                ").concat(userData.points, "\n            </div>\n            <div class=\"table__row-item\">\n                ").concat(prizeKey ? translateKey(prizeKey) : ' - ', "\n            </div>\n            <div class=\"table__row-item\">\n                ").concat(prizeKey ? getWagerByPlace(userPlace) : ' - ', "\n            </div>\n        ");
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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOlsiYXBpVVJMIiwiY3VycmVudERhdGUiLCJEYXRlIiwiZ2V0QWN0aXZlV2VlayIsInByb21vU3RhcnREYXRlIiwid2Vla0R1cmF0aW9uIiwid2Vla0RhdGVzIiwiRGF5IiwiV2VlayIsImZvcm1hdERhdGUiLCJkYXRlIiwiZ2V0RGF0ZSIsInRvU3RyaW5nIiwicGFkU3RhcnQiLCJnZXRNb250aCIsImNhbGN1bGF0ZVdlZWtQZXJpb2QiLCJ3ZWVrSW5kZXgiLCJiYXNlU3RhcnQiLCJnZXRUaW1lIiwic3RhcnQiLCJlbmQiLCJhY3RpdmVXZWVrSW5kZXgiLCJpIiwiYWN0aXZlV2VlayIsImNvbnNvbGUiLCJsb2ciLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJmb3JFYWNoIiwibGlzdCIsImNsYXNzTGlzdCIsImFkZCIsImN1cnJlbnRMaXN0IiwicXVlcnlTZWxlY3RvciIsInJlbW92ZSIsImdldEN1cnJlbnREYXlOdW1iZXIiLCJkaWZmSW5NcyIsImRheU51bWJlciIsIk1hdGgiLCJmbG9vciIsImN1cnJlbnREYXlOdW1iZXIiLCJtYWluUGFnZSIsImNoYWxsYW5nZUJsb2NrIiwiY2hhbGxhbmdlRGVwb3NpdEJ0biIsInVuYXV0aE1zZ3MiLCJwYXJ0aWNpcGF0ZUJ0bnMiLCJyZWRpcmVjdEJ0bnMiLCJsb2FkZXIiLCJjdXJyZW50Q2FyZHNXcmFwIiwicHJvZ3Jlc3NCYXIiLCJjaGFsbGFuZ2VCbHVyIiwiY2hhbGxhbmdlQmx1clN0YXR1cyIsInByb2dyZXNzQm94IiwiY2hhbGxhbmdlQnRuUG9pbnRlciIsImJ0bk9wZW4iLCJjb3VudGVyUG9pbnRzIiwicG9wdXBzIiwic3RyZWFrRGF5cyIsInN0cmVha0RheXNQb3B1cCIsInJlc3VsdHNUYWJsZSIsInJlc3VsdHNUYWJsZU90aGVyIiwidGFibGVUYWJzIiwiZHJvcFNwaW5zIiwidWtMZW5nIiwiZW5MZW5nIiwidG9nZ2xlQ2xhc3NlcyIsImVsZW1lbnRzIiwiY2xhc3NOYW1lIiwiZWwiLCJ0b2dnbGUiLCJ0b2dnbGVUcmFuc2xhdGVzIiwiZGF0YUF0dHIiLCJzZXRBdHRyaWJ1dGUiLCJpbm5lckhUTUwiLCJpMThuRGF0YSIsInJlbW92ZUF0dHJpYnV0ZSIsImxvYWRlckJ0biIsImxvY2FsZSIsInNlc3Npb25TdG9yYWdlIiwiZ2V0SXRlbSIsImRlYnVnIiwiaGlkZUxvYWRlciIsInRyYW5zbGF0ZVN0YXRlIiwidXNlcklkIiwiTnVtYmVyIiwiYm94IiwiaW5pdGlhbERlbGF5IiwicmFuZG9tIiwic2xpZGVyIiwiaXRlbXMiLCJkb3RzIiwiYnRuTGVmdCIsImJ0blJpZ2h0IiwiY3VycmVudEluZGV4IiwidG90YWxJdGVtcyIsImxlbmd0aCIsImlzRHJhZ2dpbmciLCJzdGFydFgiLCJyZXF1ZXN0IiwibGluayIsImV4dHJhT3B0aW9ucyIsImZldGNoIiwiaGVhZGVycyIsInRoZW4iLCJyZXMiLCJvayIsIkVycm9yIiwianNvbiIsImVyciIsImVycm9yIiwiUHJvbWlzZSIsInJlamVjdCIsImJvZHkiLCJzdHlsZSIsIm92ZXJmbG93IiwiaW5pdFNwaW4iLCJ0ZXh0Q29udGVudCIsInRyYW5zbGF0ZUtleSIsInNlbmRTcGluUmVxdWVzdCIsInByaXplIiwibnVtYmVyIiwic3RyZWFrQm9udXMiLCJzZXRTdHJlYWtEYXlzIiwib3BlblBvcHVwQnlBdHRyIiwidXNlciIsInNldFVzZXJQcm9ncmVzcyIsImRpc3BsYXlCZXRzSGlzdG9yeSIsInNwaW5zIiwicmVzb2x2ZSIsInR5cGUiLCJwYXJhbXMiLCJ1c2VyaWQiLCJtZXRob2QiLCJKU09OIiwic3RyaW5naWZ5Iiwic3RyZWFrIiwiZGF5IiwidXNlckRhdGEiLCJzcGluQWxsb3dlZCIsInBvaW50c1BlckRheSIsInNwaW5zU3RyZWFrIiwibGFzdFVwZGF0ZSIsInRocmVzaG9sZFBvaW50cyIsInByb2dyZXNzIiwibWluIiwidG9GaXhlZCIsInNldFByb2dyZXNzV2lkdGgiLCJwcm9ncmVzc1BlcmNlbnQiLCJ3aWR0aCIsImJhclJlY3QiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJwYXJlbnRSZWN0IiwicmlnaHRFZGdlIiwicmlnaHQiLCJsZWZ0IiwicmVzb2x2ZVN0YXR1c1RyYW5zbGF0aW9uIiwic3RhdHVzIiwiYmV0cyIsInNwaW5JdGVtIiwibm9TcGluSXRlbSIsIm5vQmV0cyIsIndhcm4iLCJ1cGQiLCJzcGluIiwic3BpbkRhdGUiLCJmb3JtYXR0ZWREYXRlIiwidG9Mb2NhbGVEYXRlU3RyaW5nIiwic2xpY2UiLCJzcGluRWxlbWVudCIsImNyZWF0ZUVsZW1lbnQiLCJpc1dpbiIsInN0YXR1c0NsYXNzIiwibmFtZSIsImFwcGVuZENoaWxkIiwic2V0QmV0SGlzdG9yeSIsInN0YWdlTnVtIiwiaW5pdCIsInRyeURldGVjdFVzZXJJZCIsInF1aWNrQ2hlY2tBbmRSZW5kZXIiLCJjaGVja1VzZXJBdXRoIiwiYWRkRXZlbnRMaXN0ZW5lciIsInRhYiIsImluZGV4IiwidCIsInRhYk51bSIsImdldEF0dHJpYnV0ZSIsInJlbmRlclVzZXJzIiwic2V0VGltZW91dCIsIlNldFNsaWRlcldpZHRoQmx1ciIsInRyaWdnZXJTaGFrZSIsImJ0biIsInBhcnRpY2lwYXRlIiwiY2xvc2VCdG4iLCJjbG9zZUFsbFBvcHVwcyIsInBvcHVwQXR0ciIsImUiLCJvcGVuUG9wdXBFbCIsImNvbnRhaW5zIiwidGFyZ2V0IiwidXBkYXRlU2xpZGVyIiwiaGFuZGxlU3RhcnQiLCJoYW5kbGVNb3ZlIiwiaGFuZGxlRW5kIiwibW92ZVNsaWRlciIsIndpbmRvdyIsInN0b3JlIiwic3RhdGUiLCJnZXRTdGF0ZSIsImF1dGgiLCJpc0F1dGhvcml6ZWQiLCJpZCIsImdfdXNlcl9pZCIsImF0dGVtcHRzIiwibWF4QXR0ZW1wdHMiLCJhdHRlbXB0SW50ZXJ2YWwiLCJ3YWl0Rm9yVXNlcklkIiwiaW50ZXJ2YWwiLCJzZXRJbnRlcnZhbCIsImNsZWFySW50ZXJ2YWwiLCJsb2FkVHJhbnNsYXRpb25zIiwidHJhbnNsYXRlIiwidGFyZ2V0Tm9kZSIsImdldEVsZW1lbnRCeUlkIiwibXV0YXRpb25PYnNlcnZlciIsIk11dGF0aW9uT2JzZXJ2ZXIiLCJtdXRhdGlvbnMiLCJkaXNjb25uZWN0Iiwib2JzZXJ2ZSIsImNoaWxkTGlzdCIsInN1YnRyZWUiLCJzbGlkZXMiLCJ0YWJzIiwic2xpZGUiLCJkb3QiLCJtb3ZlTGVmdCIsIm1vdmVSaWdodCIsImxvYWRUaW1lIiwic2hvd0VsZW1lbnRzIiwiaGlkZUVsZW1lbnRzIiwicmVwb3J0RXJyb3IiLCJyZXBvcnREYXRhIiwib3JpZ2luIiwibG9jYXRpb24iLCJocmVmIiwiZXJyb3JUZXh0IiwidGV4dCIsIm1lc3NhZ2UiLCJzdGFjayIsImVsZW1zIiwiZWxlbSIsImtleSIsInJlZnJlc2hMb2NhbGl6ZWRDbGFzcyIsImVsZW1lbnQiLCJsYW5nIiwid2VlayIsImRhdGEiLCJ1c2VycyIsInBvcHVsYXRlVXNlcnNUYWJsZSIsImN1cnJlbnRVc2VySWQiLCJjdXJyZW50VXNlciIsImZpbmQiLCJpc1RvcEN1cnJlbnRVc2VyIiwic29tZSIsInRvcFVzZXJzTGVuZ3RoIiwidG9wVXNlcnMiLCJkaXNwbGF5VXNlciIsImlzQ3VycmVudFVzZXIiLCJ0YWJsZSIsInJlbmRlclJvdyIsIm9wdGlvbnMiLCJoaWdobGlnaHQiLCJuZWlnaGJvciIsInVzZXJSb3ciLCJ1c2VyUGxhY2UiLCJpbmRleE9mIiwicHJpemVLZXkiLCJnZXRQcml6ZVRyYW5zbGF0aW9uS2V5IiwibWFza1VzZXJJZCIsInBvaW50cyIsImdldFdhZ2VyQnlQbGFjZSIsImFwcGVuZCIsImRlZmF1bHRWYWx1ZSIsIm5lZWRLZXkiLCJwbGFjZSIsIml0ZW0iLCJkaXN0YW5jZSIsIm5ld1Bvc2l0aW9uIiwic2NhbGUiLCJ0cmFuc2Zvcm0iLCJ6SW5kZXgiLCJpc1Zpc2libGUiLCJhYnMiLCJvZmZzZXQiLCJnb1RvU2xpZGUiLCJldmVudCIsImNsaWVudFgiLCJ0b3VjaGVzIiwiY3VycmVudFgiLCJkaWZmWCIsInAiLCJuZXh0U2hha2UiLCJwYXJlbnRFbGVtZW50IiwibG5nQnRuIiwicmVtb3ZlSXRlbSIsInNldEl0ZW0iLCJyZWxvYWQiLCJhdXRoQnRuIiwiYmV0QnRuIiwiaXNTaG93UHJvZ3Jlc3MiLCJhbGxQb3B1cHMiLCJ0YXJnZXRQb3B1cCJdLCJtYXBwaW5ncyI6Ijs7OytDQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQSxDQUFDLFlBQVk7RUFBQTtFQUVULElBQU1BLE1BQU0sR0FBRyxpQ0FBaUM7RUFFaEQsSUFBTUMsV0FBVyxHQUFHLElBQUlDLElBQUksQ0FBQyxxQkFBcUIsQ0FBQztFQUVuRCxJQUFNQyxhQUFhLEdBQUcsU0FBaEJBLGFBQWEsQ0FBSUMsY0FBYyxFQUFFQyxZQUFZLEVBQUs7SUFFcEQsSUFBSUMsU0FBUyxHQUFHLEVBQUU7SUFFbEIsSUFBTUMsR0FBRyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLElBQUk7SUFDL0IsSUFBTUMsSUFBSSxHQUFHSCxZQUFZLEdBQUdFLEdBQUc7SUFFL0IsSUFBTUUsVUFBVSxHQUFHLFNBQWJBLFVBQVUsQ0FBSUMsSUFBSTtNQUFBLGlCQUNqQkEsSUFBSSxDQUFDQyxPQUFPLEVBQUUsQ0FBQ0MsUUFBUSxFQUFFLENBQUNDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLGNBQUksQ0FBQ0gsSUFBSSxDQUFDSSxRQUFRLEVBQUUsR0FBRyxDQUFDLEVBQUVGLFFBQVEsRUFBRSxDQUFDQyxRQUFRLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQztJQUFBLENBQUU7SUFFeEcsSUFBTUUsbUJBQW1CLEdBQUcsU0FBdEJBLG1CQUFtQixDQUFJQyxTQUFTLEVBQUs7TUFDdkMsSUFBTUMsU0FBUyxHQUFHYixjQUFjLENBQUNjLE9BQU8sRUFBRTtNQUMxQyxJQUFNQyxLQUFLLEdBQUcsSUFBSWpCLElBQUksQ0FBQ2UsU0FBUyxHQUFHRCxTQUFTLEdBQUdSLElBQUksQ0FBQztNQUNwRCxJQUFJWSxHQUFHLEdBQUcsSUFBSWxCLElBQUksQ0FBQ2lCLEtBQUssQ0FBQ0QsT0FBTyxFQUFFLElBQUliLFlBQVksR0FBR0UsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDO01BQzlELE9BQU87UUFBRVksS0FBSyxFQUFMQSxLQUFLO1FBQUVDLEdBQUcsRUFBSEE7TUFBSSxDQUFDO0lBQ3pCLENBQUM7SUFFRCxJQUFJQyxlQUFlLEdBQUcsSUFBSTs7SUFFMUI7SUFDQSxLQUFLLElBQUlDLENBQUMsR0FBRyxDQUFDLEVBQUVBLENBQUMsR0FBRyxFQUFFLEVBQUVBLENBQUMsRUFBRSxFQUFFO01BQUU7TUFDM0IsMkJBQXVCUCxtQkFBbUIsQ0FBQ08sQ0FBQyxDQUFDO1FBQXJDSCxLQUFLLHdCQUFMQSxLQUFLO1FBQUVDLEdBQUcsd0JBQUhBLEdBQUc7TUFDbEIsSUFBSW5CLFdBQVcsSUFBSWtCLEtBQUssSUFBSWxCLFdBQVcsSUFBSW1CLEdBQUcsRUFBRTtRQUM1Q0MsZUFBZSxHQUFHQyxDQUFDLEdBQUcsQ0FBQztRQUN2QjtNQUNKO0lBQ0o7SUFFQSxPQUFPRCxlQUFlO0VBQzFCLENBQUM7RUFFRCxJQUFNakIsY0FBYyxHQUFHLElBQUlGLElBQUksQ0FBQyxxQkFBcUIsQ0FBQztFQUN0RCxJQUFNRyxZQUFZLEdBQUcsQ0FBQztFQUV0QixJQUFNa0IsVUFBVSxHQUFHcEIsYUFBYSxDQUFDQyxjQUFjLEVBQUVDLFlBQVksQ0FBQyxJQUFJLENBQUM7RUFFbkVtQixPQUFPLENBQUNDLEdBQUcsQ0FBQ0YsVUFBVSxDQUFDO0VBRXZCRyxRQUFRLENBQUNDLGdCQUFnQixDQUFDLGNBQWMsQ0FBQyxDQUFDQyxPQUFPLENBQUMsVUFBQUMsSUFBSSxFQUFJO0lBQ3REQSxJQUFJLENBQUNDLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLE1BQU0sQ0FBQztFQUM5QixDQUFDLENBQUM7RUFFRixJQUFNQyxXQUFXLEdBQUdOLFFBQVEsQ0FBQ08sYUFBYSw2QkFBc0JWLFVBQVUsRUFBRztFQUU3RUMsT0FBTyxDQUFDQyxHQUFHLENBQUNPLFdBQVcsQ0FBQztFQUN4QixJQUFJQSxXQUFXLEVBQUU7SUFDYkEsV0FBVyxDQUFDRixTQUFTLENBQUNJLE1BQU0sQ0FBQyxNQUFNLENBQUM7RUFDeEM7RUFFQSxJQUFNQyxtQkFBbUIsR0FBRyxTQUF0QkEsbUJBQW1CLENBQUkvQixjQUFjLEVBQUs7SUFDNUMsSUFBTWdDLFFBQVEsR0FBR25DLFdBQVcsR0FBR0csY0FBYztJQUM3QyxJQUFJaUMsU0FBUyxHQUFHQyxJQUFJLENBQUNDLEtBQUssQ0FBQ0gsUUFBUSxJQUFJLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQztJQUNoRSxJQUFHYixVQUFVLEdBQUcsQ0FBQyxFQUFDO01BQ2ZjLFNBQVMsR0FBR0EsU0FBUyxHQUFJLENBQUNkLFVBQVUsR0FBRyxDQUFDLElBQUksQ0FBRTtJQUNqRDtJQUNBLE9BQU9jLFNBQVMsR0FBRyxDQUFDO0VBQ3hCLENBQUM7RUFFRCxJQUFNQSxTQUFTLEdBQUdGLG1CQUFtQixDQUFDL0IsY0FBYyxDQUFDO0VBQ3JELElBQU1vQyxnQkFBZ0IsR0FBR0gsU0FBUyxHQUFHLENBQUMsR0FBR0EsU0FBUyxHQUFHLENBQUM7RUFDdERiLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDZSxnQkFBZ0IsQ0FBQztFQUc3QixJQUFNQyxRQUFRLEdBQUdmLFFBQVEsQ0FBQ08sYUFBYSxDQUFDLFdBQVcsQ0FBQztJQUNoRFMsY0FBYyxHQUFHaEIsUUFBUSxDQUFDTyxhQUFhLENBQUMsWUFBWSxDQUFDO0lBQ3JEVSxtQkFBbUIsR0FBR0QsY0FBYyxDQUFDVCxhQUFhLENBQUMsV0FBVyxDQUFDO0lBQy9EVyxVQUFVLEdBQUdsQixRQUFRLENBQUNDLGdCQUFnQixDQUFDLGFBQWEsQ0FBQztJQUNyRGtCLGVBQWUsR0FBR25CLFFBQVEsQ0FBQ0MsZ0JBQWdCLENBQUMsV0FBVyxDQUFDO0lBQ3hEbUIsWUFBWSxHQUFHcEIsUUFBUSxDQUFDQyxnQkFBZ0IsQ0FBQyxXQUFXLENBQUM7SUFDckRvQixNQUFNLEdBQUdyQixRQUFRLENBQUNPLGFBQWEsQ0FBQyxrQkFBa0IsQ0FBQztJQUNuRGUsZ0JBQWdCLEdBQUd0QixRQUFRLENBQUNPLGFBQWEsQ0FBQyxxQkFBcUIsQ0FBQztJQUNoRWdCLFdBQVcsR0FBR3ZCLFFBQVEsQ0FBQ08sYUFBYSxDQUFDLDBCQUEwQixDQUFDO0lBQ2hFaUIsYUFBYSxHQUFHeEIsUUFBUSxDQUFDTyxhQUFhLENBQUMsa0JBQWtCLENBQUM7SUFDMURrQixtQkFBbUIsR0FBR3pCLFFBQVEsQ0FBQ08sYUFBYSxDQUFDLHlCQUF5QixDQUFDO0lBQ3ZFbUIsV0FBVyxHQUFHMUIsUUFBUSxDQUFDTyxhQUFhLENBQUMsMEJBQTBCLENBQUM7SUFDaEVvQixtQkFBbUIsR0FBRzNCLFFBQVEsQ0FBQ08sYUFBYSxDQUFDLHlCQUF5QixDQUFDO0lBQ3ZFcUIsT0FBTyxHQUFHNUIsUUFBUSxDQUFDTyxhQUFhLENBQUMsV0FBVyxDQUFDO0lBQzdDc0IsYUFBYSxHQUFHN0IsUUFBUSxDQUFDTyxhQUFhLENBQUMsaUJBQWlCLENBQUM7SUFDekR1QixNQUFNLEdBQUc5QixRQUFRLENBQUNPLGFBQWEsQ0FBQyxTQUFTLENBQUM7SUFDMUN3QixVQUFVLEdBQUcvQixRQUFRLENBQUNDLGdCQUFnQixDQUFDLHNCQUFzQixDQUFDO0lBQzlEK0IsZUFBZSxHQUFHRixNQUFNLENBQUM3QixnQkFBZ0IsQ0FBQyxzQkFBc0IsQ0FBQztJQUNqRWdDLFlBQVksR0FBR2pDLFFBQVEsQ0FBQ08sYUFBYSxDQUFDLFFBQVEsQ0FBQztJQUMvQzJCLGlCQUFpQixHQUFHbEMsUUFBUSxDQUFDTyxhQUFhLENBQUMsYUFBYSxDQUFDO0lBQ3pENEIsU0FBUyxHQUFHbkMsUUFBUSxDQUFDQyxnQkFBZ0IsQ0FBQyxtQkFBbUIsQ0FBQztJQUMxRG1DLFNBQVMsR0FBR3BDLFFBQVEsQ0FBQ08sYUFBYSxDQUFDLGNBQWMsQ0FBQztFQUd0RFQsT0FBTyxDQUFDQyxHQUFHLENBQUM2QixPQUFPLENBQUM7RUFJcEIsSUFBTVMsTUFBTSxHQUFHckMsUUFBUSxDQUFDTyxhQUFhLENBQUMsU0FBUyxDQUFDO0VBQ2hELElBQU0rQixNQUFNLEdBQUd0QyxRQUFRLENBQUNPLGFBQWEsQ0FBQyxTQUFTLENBQUM7RUFFaEQsSUFBTWdDLGFBQWEsR0FBRyxTQUFoQkEsYUFBYSxDQUFJQyxRQUFRLEVBQUVDLFNBQVM7SUFBQSxPQUFLRCxRQUFRLENBQUN0QyxPQUFPLENBQUMsVUFBQXdDLEVBQUU7TUFBQSxPQUFJQSxFQUFFLENBQUN0QyxTQUFTLENBQUN1QyxNQUFNLFdBQUlGLFNBQVMsRUFBRztJQUFBLEVBQUM7RUFBQTtFQUMxRyxJQUFNRyxnQkFBZ0IsR0FBRyxTQUFuQkEsZ0JBQWdCLENBQUlKLFFBQVEsRUFBRUssUUFBUTtJQUFBLE9BQUtMLFFBQVEsQ0FBQ3RDLE9BQU8sQ0FBQyxVQUFBd0MsRUFBRSxFQUFJO01BQ3BFQSxFQUFFLENBQUNJLFlBQVksQ0FBQyxnQkFBZ0IsWUFBS0QsUUFBUSxFQUFHO01BQ2hESCxFQUFFLENBQUNLLFNBQVMsR0FBR0MsUUFBUSxDQUFDSCxRQUFRLENBQUMsSUFBSSwwQ0FBMEMsR0FBR0EsUUFBUTtNQUMxRkgsRUFBRSxDQUFDTyxlQUFlLENBQUMsZ0JBQWdCLENBQUM7SUFDeEMsQ0FBQyxDQUFDO0VBQUE7RUFFRixJQUFJQyxTQUFTLEdBQUcsS0FBSzs7RUFFckI7RUFDQSxJQUFJQyxNQUFNLEdBQUdDLGNBQWMsQ0FBQ0MsT0FBTyxDQUFDLFFBQVEsQ0FBQyxJQUFJLElBQUk7RUFFckQsSUFBSWhCLE1BQU0sRUFBRWMsTUFBTSxHQUFHLElBQUk7RUFDekIsSUFBSWIsTUFBTSxFQUFFYSxNQUFNLEdBQUcsSUFBSTtFQUV6QixJQUFJRyxLQUFLLEdBQUcsS0FBSztFQUVqQixJQUFJQSxLQUFLLEVBQUVDLFVBQVUsRUFBRTtFQUV2QixJQUFJUCxRQUFRLEdBQUcsQ0FBQyxDQUFDO0VBQ2pCLElBQU1RLGNBQWMsR0FBRyxJQUFJO0VBQzNCO0VBQ0EsSUFBSUMsTUFBTSxjQUFHQyxNQUFNLENBQUNOLGNBQWMsQ0FBQ0MsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLDZDQUFJLElBQUk7O0VBRTdEOztFQUVBLElBQU1NLEdBQUcsR0FBRzNELFFBQVEsQ0FBQ08sYUFBYSxDQUFDLFlBQVksQ0FBQztFQUNoRCxJQUFNcUQsWUFBWSxHQUFHaEQsSUFBSSxDQUFDaUQsTUFBTSxFQUFFLEdBQUcsSUFBSSxHQUFHLElBQUk7O0VBRWhEOztFQUVBLElBQU1DLE1BQU0sR0FBRzlELFFBQVEsQ0FBQ08sYUFBYSxDQUFDLGdCQUFnQixDQUFDO0VBQ3ZELElBQU13RCxLQUFLLEdBQUdELE1BQU0sQ0FBQzdELGdCQUFnQixDQUFDLGVBQWUsQ0FBQztFQUN0RCxJQUFNK0QsSUFBSSxHQUFHaEUsUUFBUSxDQUFDQyxnQkFBZ0IsQ0FBQyx1QkFBdUIsQ0FBQztFQUMvRCxJQUFNZ0UsT0FBTyxHQUFHakUsUUFBUSxDQUFDTyxhQUFhLENBQUMsa0JBQWtCLENBQUM7RUFDMUQsSUFBTTJELFFBQVEsR0FBR2xFLFFBQVEsQ0FBQ08sYUFBYSxDQUFDLG1CQUFtQixDQUFDO0VBRTVELElBQUk0RCxZQUFZLEdBQUcsQ0FBQztFQUNwQixJQUFNQyxVQUFVLEdBQUdMLEtBQUssQ0FBQ00sTUFBTTtFQUMvQixJQUFJQyxVQUFVLEdBQUcsS0FBSztFQUN0QixJQUFJQyxNQUFNLEdBQUcsQ0FBQzs7RUFFZDs7RUFFQSxJQUFNQyxPQUFPLEdBQUcsU0FBVkEsT0FBTyxDQUFhQyxJQUFJLEVBQUVDLFlBQVksRUFBRTtJQUMxQyxPQUFPQyxLQUFLLENBQUNyRyxNQUFNLEdBQUdtRyxJQUFJO01BQ3RCRyxPQUFPLEVBQUU7UUFDTCxRQUFRLEVBQUUsa0JBQWtCO1FBQzVCLGNBQWMsRUFBRTtNQUNwQjtJQUFDLEdBQ0dGLFlBQVksSUFBSSxDQUFDLENBQUMsRUFDeEIsQ0FDR0csSUFBSSxDQUFDLFVBQUFDLEdBQUcsRUFBSTtNQUNULElBQUksQ0FBQ0EsR0FBRyxDQUFDQyxFQUFFLEVBQUUsTUFBTSxJQUFJQyxLQUFLLENBQUMsV0FBVyxDQUFDO01BQ3pDLE9BQU9GLEdBQUcsQ0FBQ0csSUFBSSxFQUFFO0lBQ3JCLENBQUMsQ0FBQyxTQUNJLENBQUMsVUFBQUMsR0FBRyxFQUFJO01BQ1ZwRixPQUFPLENBQUNxRixLQUFLLENBQUMscUJBQXFCLEVBQUVELEdBQUcsQ0FBQzs7TUFFekM7TUFDQTtNQUNBO01BQ0E7TUFDQTtNQUNBO01BQ0E7TUFDQTs7TUFFQSxPQUFPRSxPQUFPLENBQUNDLE1BQU0sQ0FBQ0gsR0FBRyxDQUFDO0lBQzlCLENBQUMsQ0FBQztFQUVWLENBQUM7RUFFRCxTQUFTM0IsVUFBVSxHQUFFO0lBQ2pCbEMsTUFBTSxDQUFDakIsU0FBUyxDQUFDQyxHQUFHLENBQUMsTUFBTSxDQUFDO0lBQzVCTCxRQUFRLENBQUNzRixJQUFJLENBQUNDLEtBQUssQ0FBQ0MsUUFBUSxHQUFHLE1BQU07SUFDckN6RSxRQUFRLENBQUNYLFNBQVMsQ0FBQ0ksTUFBTSxDQUFDLFNBQVMsQ0FBQztFQUN4QztFQUlBLFNBQVNpRixRQUFRLEdBQUU7SUFFZjdELE9BQU8sQ0FBQzhELFdBQVcsR0FBR0MsWUFBWSxDQUFDLFFBQVEsQ0FBQztJQUM1Q2hFLG1CQUFtQixDQUFDdkIsU0FBUyxDQUFDQyxHQUFHLENBQUMsTUFBTSxDQUFDO0lBR3pDdUYsZUFBZSxFQUFFLENBQUNmLElBQUksQ0FBQyxVQUFBQyxHQUFHLEVBQUk7TUFFMUJoRixPQUFPLENBQUNDLEdBQUcsQ0FBQytFLEdBQUcsQ0FBQztNQUVoQixJQUFNZSxLQUFLLEdBQUdmLEdBQUcsQ0FBQ2dCLE1BQU07TUFDeEIsSUFBTUMsV0FBVyxHQUFHakIsR0FBRyxDQUFDaUIsV0FBVyxJQUFJekMsS0FBSztNQUU1Q3hELE9BQU8sQ0FBQ0MsR0FBRyxDQUFDZ0csV0FBVyxDQUFDO01BRXhCbkUsT0FBTyxDQUFDOEQsV0FBVyxHQUFHQyxZQUFZLENBQUMsU0FBUyxDQUFDO01BRTdDL0QsT0FBTyxDQUFDeEIsU0FBUyxDQUFDQyxHQUFHLENBQUMsTUFBTSxDQUFDO01BQzdCWSxtQkFBbUIsQ0FBQ2IsU0FBUyxDQUFDSSxNQUFNLENBQUMsTUFBTSxDQUFDO01BRTVDd0YsYUFBYSxDQUFDRCxXQUFXLENBQUM7TUFFMUIsSUFBSUYsS0FBSyxLQUFLLFFBQVEsRUFBRUksZUFBZSxDQUFDLGNBQWMsRUFBRSxJQUFJLENBQUM7TUFDN0QsSUFBSUosS0FBSyxLQUFLLFNBQVMsRUFBRUksZUFBZSxDQUFDLGNBQWMsRUFBRSxJQUFJLENBQUM7TUFDOUQsSUFBSUosS0FBSyxLQUFLLGtCQUFrQixFQUFFSSxlQUFlLENBQUMsZUFBZSxFQUFFLElBQUksQ0FBQztNQUN4RSxJQUFJSixLQUFLLEtBQUssUUFBUSxFQUFFSSxlQUFlLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQztNQUM1RCxJQUFJSixLQUFLLEtBQUssU0FBUyxFQUFFSSxlQUFlLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQztNQUM3RCxJQUFJSixLQUFLLEtBQUssU0FBUyxFQUFFSSxlQUFlLENBQUMsY0FBYyxFQUFFLElBQUksQ0FBQztNQUM5RCxJQUFJSixLQUFLLEtBQUssWUFBWSxFQUFFSSxlQUFlLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQztNQUMvRCxJQUFJSixLQUFLLEtBQUssaUJBQWlCLEVBQUVJLGVBQWUsQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDO01BQ25FLElBQUlKLEtBQUssS0FBSyxNQUFNLEVBQUVJLGVBQWUsQ0FBQyxvQkFBb0IsRUFBRSxJQUFJLENBQUM7TUFDakUsSUFBSUosS0FBSyxLQUFLLFVBQVUsRUFBRUksZUFBZSxDQUFDLGNBQWMsRUFBRSxJQUFJLENBQUM7TUFDL0QsSUFBSUosS0FBSyxLQUFLLFlBQVksRUFBRUksZUFBZSxDQUFDLHFCQUFxQixFQUFFLElBQUksQ0FBQztNQUN4RSxJQUFJSixLQUFLLEtBQUssY0FBYyxFQUFFSSxlQUFlLENBQUMscUJBQXFCLEVBQUUsSUFBSSxDQUFDO01BQzFFLElBQUlKLEtBQUssS0FBSyxNQUFNLEVBQUVJLGVBQWUsQ0FBQyxrQkFBa0IsRUFBRSxJQUFJLENBQUM7TUFDL0QsSUFBSUosS0FBSyxLQUFLLGNBQWMsRUFBRUksZUFBZSxDQUFDLG9CQUFvQixFQUFFLElBQUksQ0FBQztNQUN6RSxJQUFJSixLQUFLLEtBQUssaUJBQWlCLEVBQUVJLGVBQWUsQ0FBQyxvQkFBb0IsRUFBRSxJQUFJLENBQUM7TUFDNUUsSUFBSUosS0FBSyxLQUFLLE1BQU0sRUFBRUksZUFBZSxDQUFDLGtCQUFrQixFQUFFLElBQUksQ0FBQztNQUMvRCxJQUFJSixLQUFLLEtBQUssTUFBTSxFQUFFSSxlQUFlLENBQUMsc0JBQXNCLEVBQUUsSUFBSSxDQUFDO01BQ25FLElBQUlKLEtBQUssS0FBSyxjQUFjLEVBQUVJLGVBQWUsQ0FBQyxtQkFBbUIsRUFBRSxJQUFJLENBQUM7TUFDeEUsSUFBSUosS0FBSyxLQUFLLE1BQU0sRUFBRUksZUFBZSxDQUFDLHNCQUFzQixFQUFFLElBQUksQ0FBQztNQUduRXpCLE9BQU8sb0JBQWFmLE1BQU0sRUFBRyxDQUFDb0IsSUFBSSxDQUFDLFVBQUFxQixJQUFJLEVBQUk7UUFDdkNDLGVBQWUsQ0FBQ0QsSUFBSSxDQUFDO1FBQ3JCRSxrQkFBa0IsQ0FBQ0YsSUFBSSxDQUFDRyxLQUFLLENBQUM7TUFDbEMsQ0FBQyxDQUFDO0lBR04sQ0FBQyxDQUFDO0VBQ047RUFFQSxTQUFTVCxlQUFlLEdBQUc7SUFDdkIsSUFBSSxDQUFDbkMsTUFBTSxFQUFFO01BQ1Q7SUFDSjtJQUVBLElBQUlILEtBQUssRUFBRTtNQUNQLE9BQU84QixPQUFPLENBQUNrQixPQUFPLENBQUM7UUFDbkJSLE1BQU0sRUFBRSxRQUFRO1FBQ2hCUyxJQUFJLEVBQUU7TUFDVixDQUFDLENBQUM7SUFDTjtJQUVBLElBQU1DLE1BQU0sR0FBRztNQUFDQyxNQUFNLEVBQUVoRDtJQUFNLENBQUM7SUFDL0IsT0FBT2UsT0FBTyxDQUFDLE9BQU8sRUFBRTtNQUNwQmtDLE1BQU0sRUFBRSxNQUFNO01BQ2RwQixJQUFJLEVBQUVxQixJQUFJLENBQUNDLFNBQVMsQ0FBQ0osTUFBTTtJQUMvQixDQUFDLENBQUM7RUFDTjtFQUVBLFNBQVNSLGFBQWEsQ0FBQ2EsTUFBTSxFQUFFO0lBQzNCOUUsVUFBVSxDQUFDN0IsT0FBTyxDQUFDLFVBQUM0RyxHQUFHLEVBQUVsSCxDQUFDLEVBQUk7TUFDMUJrSCxHQUFHLENBQUMxRyxTQUFTLENBQUNJLE1BQU0sQ0FBQyxTQUFTLENBQUM7TUFDL0JWLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDK0csR0FBRyxDQUFDO01BQ2hCLElBQUdsSCxDQUFDLEdBQUcsQ0FBQyxJQUFJaUgsTUFBTSxFQUFDO1FBQ2ZDLEdBQUcsQ0FBQzFHLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLFNBQVMsQ0FBQztNQUNoQztJQUNKLENBQUMsQ0FBQztJQUNGMkIsZUFBZSxDQUFDOUIsT0FBTyxDQUFDLFVBQUM0RyxHQUFHLEVBQUVsSCxDQUFDLEVBQUk7TUFDL0JrSCxHQUFHLENBQUMxRyxTQUFTLENBQUNJLE1BQU0sQ0FBQyxTQUFTLENBQUM7TUFDL0JWLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDK0csR0FBRyxDQUFDO01BQ2hCLElBQUdsSCxDQUFDLEdBQUcsQ0FBQyxJQUFJaUgsTUFBTSxFQUFDO1FBQ2ZDLEdBQUcsQ0FBQzFHLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLFNBQVMsQ0FBQztNQUNoQztJQUNKLENBQUMsQ0FBQztFQUNOO0VBRUEsU0FBUzhGLGVBQWUsQ0FBQ1ksUUFBUSxFQUFDO0lBQzlCLElBQUlDLFdBQVcsR0FBR0QsUUFBUSxDQUFDQyxXQUFXO01BQ2xDQyxZQUFZLEdBQUdGLFFBQVEsQ0FBQ0UsWUFBWTtNQUNwQ0osTUFBTSxHQUFHRSxRQUFRLENBQUNHLFdBQVc7TUFDN0JDLFVBQVUsR0FBR0osUUFBUSxDQUFDSSxVQUFVO0lBRXBDckgsT0FBTyxDQUFDQyxHQUFHLENBQUNnQyxVQUFVLENBQUM7SUFFdkJpRSxhQUFhLENBQUNhLE1BQU0sQ0FBQzs7SUFFckI7O0lBRUEsSUFBTU8sZUFBZSxHQUFHLElBQUk7SUFFNUJ0SCxPQUFPLENBQUNDLEdBQUcsQ0FBQ2tILFlBQVksQ0FBQztJQUV6QkEsWUFBWSxHQUFHQSxZQUFZLEdBQUdHLGVBQWUsR0FBR0EsZUFBZSxHQUFHSCxZQUFZO0lBRTlFLElBQUcsQ0FBQ0EsWUFBWSxFQUFFQSxZQUFZLEdBQUcsQ0FBQztJQUlsQ3BGLGFBQWEsQ0FBQzZELFdBQVcsYUFBTXVCLFlBQVksQ0FBRTtJQUU3QyxJQUFJSSxRQUFRLEdBQUd6RyxJQUFJLENBQUMwRyxHQUFHLENBQUVMLFlBQVksR0FBR0csZUFBZSxHQUFJLEdBQUcsRUFBRSxHQUFHLENBQUM7SUFFcEV0SCxPQUFPLENBQUNDLEdBQUcsQ0FBQ3NILFFBQVEsQ0FBQztJQUdyQixJQUFJQSxRQUFRLElBQUksR0FBRyxFQUFFO01BQ2pCQSxRQUFRLEdBQUcsR0FBRztNQUNkN0YsYUFBYSxDQUFDcEIsU0FBUyxDQUFDQyxHQUFHLENBQUMsTUFBTSxDQUFDO01BQ25DcUIsV0FBVyxDQUFDdEIsU0FBUyxDQUFDSSxNQUFNLENBQUMsT0FBTyxDQUFDO01BQ3JDa0IsV0FBVyxDQUFDdEIsU0FBUyxDQUFDQyxHQUFHLENBQUMsT0FBTyxDQUFDO01BQ2xDc0IsbUJBQW1CLENBQUN2QixTQUFTLENBQUNJLE1BQU0sQ0FBQyxNQUFNLENBQUM7TUFDNUNvQixPQUFPLENBQUN4QixTQUFTLENBQUNJLE1BQU0sQ0FBQyxNQUFNLENBQUM7TUFDaENTLG1CQUFtQixDQUFDYixTQUFTLENBQUNDLEdBQUcsQ0FBQyxNQUFNLENBQUM7SUFDN0MsQ0FBQyxNQUFJO01BQ0RQLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLFFBQVEsQ0FBQztNQUNyQnlCLGFBQWEsQ0FBQ3BCLFNBQVMsQ0FBQ0ksTUFBTSxDQUFDLE1BQU0sQ0FBQztNQUN0Q2tCLFdBQVcsQ0FBQ3RCLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLE9BQU8sQ0FBQztNQUNsQ3FCLFdBQVcsQ0FBQ3RCLFNBQVMsQ0FBQ0ksTUFBTSxDQUFDLE9BQU8sQ0FBQztNQUNyQ21CLG1CQUFtQixDQUFDdkIsU0FBUyxDQUFDQyxHQUFHLENBQUMsTUFBTSxDQUFDO01BQ3pDdUIsT0FBTyxDQUFDeEIsU0FBUyxDQUFDQyxHQUFHLENBQUMsTUFBTSxDQUFDO01BQzdCWSxtQkFBbUIsQ0FBQ2IsU0FBUyxDQUFDSSxNQUFNLENBQUMsTUFBTSxDQUFDO0lBR2hEO0lBRUFWLE9BQU8sQ0FBQ0MsR0FBRywwSEFBeUJzSCxRQUFRLENBQUNFLE9BQU8sQ0FBQyxDQUFDLENBQUMsT0FBSTtJQUczRCxJQUFHOUQsTUFBTSxFQUFDO01BQ04rRCxnQkFBZ0IsQ0FBQ0gsUUFBUSxDQUFDO0lBQzlCO0lBR0F2SCxPQUFPLENBQUNDLEdBQUcsQ0FBQ2dILFFBQVEsQ0FBQztFQUN6QjtFQUVBLFNBQVNTLGdCQUFnQixDQUFDQyxlQUFlLEVBQUU7SUFFdkNsRyxXQUFXLENBQUNnRSxLQUFLLENBQUNtQyxLQUFLLGFBQU1ELGVBQWUsTUFBRztJQUUvQyxJQUFNRSxPQUFPLEdBQUdwRyxXQUFXLENBQUNxRyxxQkFBcUIsRUFBRTtJQUNuRCxJQUFNQyxVQUFVLEdBQUd2RyxnQkFBZ0IsQ0FBQ3NHLHFCQUFxQixFQUFFO0lBRTNELElBQU1FLFNBQVMsR0FBR0gsT0FBTyxDQUFDSSxLQUFLLEdBQUdGLFVBQVUsQ0FBQ0csSUFBSSxHQUFHLENBQUM7SUFFckR4RyxhQUFhLENBQUMrRCxLQUFLLENBQUN5QyxJQUFJLGFBQU1GLFNBQVMsT0FBSTtJQUMzQ3JHLG1CQUFtQixDQUFDaUUsV0FBVyxhQUFNK0IsZUFBZSxDQUFDRixPQUFPLENBQUMsQ0FBQyxDQUFDLE1BQUc7RUFHdEU7RUFDQSxTQUFTVSx3QkFBd0IsQ0FBQ0MsTUFBTSxFQUFFO0lBQ3RDLElBQUksQ0FBQ0EsTUFBTSxJQUFJQSxNQUFNLEtBQUssV0FBVyxFQUFFO01BQ25DLE9BQU92QyxZQUFZLENBQUMsY0FBYyxDQUFDO0lBQ3ZDO0lBQ0EsSUFBSXVDLE1BQU0sS0FBSyxLQUFLLEVBQUU7TUFDbEIsT0FBT3ZDLFlBQVksQ0FBQyxRQUFRLENBQUM7SUFDakM7SUFDQSxJQUFJdUMsTUFBTSxLQUFLLE1BQU0sRUFBRTtNQUNuQixPQUFPdkMsWUFBWSxDQUFDLFNBQVMsQ0FBQztJQUNsQztFQUNKO0VBRUEsU0FBU1Msa0JBQWtCLENBQUMrQixJQUFJLEVBQUU7SUFFOUJySSxPQUFPLENBQUNDLEdBQUcsQ0FBQ29JLElBQUksQ0FBQztJQUNqQixJQUFNQyxRQUFRLEdBQUdwSSxRQUFRLENBQUNPLGFBQWEsQ0FBQyxZQUFZLENBQUM7SUFDckQsSUFBTThILFVBQVUsR0FBR3JJLFFBQVEsQ0FBQ08sYUFBYSxDQUFDLFdBQVcsQ0FBQztJQUN0RCxJQUFNK0gsTUFBTSxHQUFHLENBQUNILElBQUksSUFBSUEsSUFBSSxDQUFDOUQsTUFBTSxLQUFLLENBQUM7SUFFekMsSUFBSWlFLE1BQU0sSUFBSSxDQUFDaEYsS0FBSyxFQUFFO01BQ2xCOEUsUUFBUSxDQUFDaEksU0FBUyxDQUFDQyxHQUFHLENBQUMsTUFBTSxDQUFDO01BQzlCZ0ksVUFBVSxDQUFDakksU0FBUyxDQUFDSSxNQUFNLENBQUMsTUFBTSxDQUFDO01BQ25DO0lBQ0o7SUFFQSxJQUFHOEMsS0FBSyxFQUFDO01BQ0x4RCxPQUFPLENBQUN5SSxJQUFJLENBQUMsbUJBQW1CLENBQUM7TUFDakM7SUFFSjtJQUVBSCxRQUFRLENBQUNyRixTQUFTLHVUQU9qQjtJQUNEcUYsUUFBUSxDQUFDaEksU0FBUyxDQUFDSSxNQUFNLENBQUMsTUFBTSxDQUFDO0lBQ2pDNkgsVUFBVSxDQUFDakksU0FBUyxDQUFDQyxHQUFHLENBQUMsTUFBTSxDQUFDO0lBRWhDLElBQUltSSxHQUFHLEdBQUcsQ0FBQztJQUVYTCxJQUFJLENBQUNqSSxPQUFPLENBQUMsVUFBQXVJLElBQUksRUFBSTtNQUNqQixJQUFNQyxRQUFRLEdBQUcsSUFBSWxLLElBQUksQ0FBQ2lLLElBQUksQ0FBQ3pKLElBQUksQ0FBQztNQUNwQyxJQUFNMkosYUFBYSxHQUFHRCxRQUFRLENBQUNFLGtCQUFrQixDQUFDLE9BQU8sQ0FBQyxDQUFDQyxLQUFLLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQztNQUN0RSxJQUFNWCxNQUFNLEdBQUdELHdCQUF3QixDQUFDUSxJQUFJLENBQUNQLE1BQU0sQ0FBQztNQUVwRCxJQUFJQSxNQUFNLEVBQUU7UUFDUixJQUFNWSxXQUFXLEdBQUc5SSxRQUFRLENBQUMrSSxhQUFhLENBQUMsS0FBSyxDQUFDO1FBQ2pERCxXQUFXLENBQUMxSSxTQUFTLENBQUNDLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQztRQUUzQyxJQUFNMkksS0FBSyxHQUFHUCxJQUFJLENBQUNQLE1BQU0sS0FBSyxLQUFLO1FBQ25DLElBQU1lLFdBQVcsR0FBR0QsS0FBSyxHQUFHLE9BQU8sR0FBRyxFQUFFO1FBRXhDRixXQUFXLENBQUMvRixTQUFTLGdFQUNZNEYsYUFBYSx3RUFDWkYsSUFBSSxDQUFDUyxJQUFJLDJFQUNMRCxXQUFXLG9DQUNoRDtRQUNEYixRQUFRLENBQUNlLFdBQVcsQ0FBQ0wsV0FBVyxDQUFDO1FBQ2pDTixHQUFHLEVBQUU7TUFDVDtJQUNKLENBQUMsQ0FBQztJQUVGLElBQUlBLEdBQUcsS0FBSyxDQUFDLEVBQUU7TUFDWEosUUFBUSxDQUFDaEksU0FBUyxDQUFDQyxHQUFHLENBQUMsTUFBTSxDQUFDO01BQzlCZ0ksVUFBVSxDQUFDakksU0FBUyxDQUFDSSxNQUFNLENBQUMsTUFBTSxDQUFDO0lBQ3ZDO0VBQ0o7RUFFQSxTQUFTNEksYUFBYSxDQUFDQyxRQUFRLEVBQUM7SUFDNUI7SUFDQTtJQUNBO0lBQ0E7SUFDQTtFQUFBO0VBQ0gsU0FHY0MsSUFBSTtJQUFBO0VBQUE7RUFBQTtJQUFBLG1FQUFuQjtNQUFBLDRDQUthQyxlQUFlLEVBU2ZDLG1CQUFtQjtNQUFBO1FBQUE7VUFBQTtZQUFuQkEsbUJBQW1CLG1DQUFHO2NBQzNCQyxhQUFhLEVBQUU7O2NBSWY7O2NBRUE3SCxPQUFPLENBQUM4SCxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUVqRSxRQUFRLENBQUM7O2NBRTNDOztjQUVBdEQsU0FBUyxDQUFDakMsT0FBTyxDQUFDLFVBQUN5SixHQUFHLEVBQUVDLEtBQUssRUFBSztnQkFDOUIsSUFBR0EsS0FBSyxHQUFHLENBQUMsS0FBSy9KLFVBQVUsRUFBQztrQkFDeEI4SixHQUFHLENBQUN2SixTQUFTLENBQUNDLEdBQUcsQ0FBQyxRQUFRLENBQUM7Z0JBQy9CLENBQUMsTUFBSTtrQkFDRHNKLEdBQUcsQ0FBQ3ZKLFNBQVMsQ0FBQ0ksTUFBTSxDQUFDLFFBQVEsQ0FBQztnQkFDbEM7Z0JBQ0FtSixHQUFHLENBQUNELGdCQUFnQixDQUFDLE9BQU8sRUFBRSxZQUFLO2tCQUMvQnZILFNBQVMsQ0FBQ2pDLE9BQU8sQ0FBQyxVQUFBMkosQ0FBQztvQkFBQSxPQUFJQSxDQUFDLENBQUN6SixTQUFTLENBQUNJLE1BQU0sQ0FBQyxRQUFRLENBQUM7a0JBQUEsRUFBQztrQkFDcERWLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDb0MsU0FBUyxDQUFDO2tCQUV0QixJQUFJMkgsTUFBTSxHQUFHcEcsTUFBTSxDQUFDaUcsR0FBRyxDQUFDSSxZQUFZLENBQUMsV0FBVyxDQUFDLENBQUM7a0JBQ2xESixHQUFHLENBQUN2SixTQUFTLENBQUNDLEdBQUcsQ0FBQyxRQUFRLENBQUM7a0JBQzNCMkosV0FBVyxDQUFDRixNQUFNLENBQUM7Z0JBQ3ZCLENBQUMsQ0FBQztjQUNOLENBQUMsQ0FBQztjQUVGRSxXQUFXLENBQUNuSyxVQUFVLENBQUM7Y0FFdkJvSyxVQUFVLENBQUMxRyxVQUFVLEVBQUUsSUFBSSxDQUFDO2NBRTVCMkcsa0JBQWtCLEVBQUU7Y0FFcEJELFVBQVUsQ0FBQ0UsWUFBWSxFQUFFdkcsWUFBWSxDQUFDO2NBRXRDekMsZUFBZSxDQUFDakIsT0FBTyxDQUFDLFVBQUFrSyxHQUFHLEVBQUk7Z0JBQzNCQSxHQUFHLENBQUNWLGdCQUFnQixDQUFDLE9BQU8sRUFBRVcsV0FBVyxDQUFDO2NBQzlDLENBQUMsQ0FBQztjQUVGckssUUFBUSxDQUFDQyxnQkFBZ0IsQ0FBQyxlQUFlLENBQUMsQ0FBQ0MsT0FBTyxDQUFDLFVBQUFvSyxRQUFRLEVBQUk7Z0JBQzNEQSxRQUFRLENBQUNaLGdCQUFnQixDQUFDLE9BQU8sRUFBRWEsY0FBYyxDQUFDO2NBQ3RELENBQUMsQ0FBQztjQUVGdkssUUFBUSxDQUFDQyxnQkFBZ0IsQ0FBQyxXQUFXLENBQUMsQ0FBQ0MsT0FBTyxDQUFDLFVBQUFrSyxHQUFHLEVBQUk7Z0JBQ2xEQSxHQUFHLENBQUNWLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxZQUFNO2tCQUNoQyxJQUFNYyxTQUFTLEdBQUdKLEdBQUcsQ0FBQ0wsWUFBWSxDQUFDLFlBQVksQ0FBQztrQkFDaEQ5RCxlQUFlLENBQUN1RSxTQUFTLENBQUM7Z0JBQzlCLENBQUMsQ0FBQztjQUNOLENBQUMsQ0FBQztjQUVGeEssUUFBUSxDQUFDTyxhQUFhLENBQUMsU0FBUyxDQUFDLENBQUNtSixnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsVUFBQ2UsQ0FBQyxFQUFLO2dCQUMvRCxJQUFNQyxXQUFXLEdBQUcxSyxRQUFRLENBQUNPLGFBQWEsQ0FBQyxtQkFBbUIsQ0FBQztnQkFDL0QsSUFBSW1LLFdBQVcsSUFBSSxDQUFDQSxXQUFXLENBQUNDLFFBQVEsQ0FBQ0YsQ0FBQyxDQUFDRyxNQUFNLENBQUMsRUFBRTtrQkFDaERMLGNBQWMsRUFBRTtnQkFDcEI7Y0FDSixDQUFDLENBQUM7Y0FHRk0sWUFBWSxFQUFFO2NBRWQvRyxNQUFNLENBQUM0RixnQkFBZ0IsQ0FBQyxXQUFXLEVBQUVvQixXQUFXLENBQUM7Y0FDakRoSCxNQUFNLENBQUM0RixnQkFBZ0IsQ0FBQyxXQUFXLEVBQUVxQixVQUFVLENBQUM7Y0FDaERqSCxNQUFNLENBQUM0RixnQkFBZ0IsQ0FBQyxTQUFTLEVBQUVzQixTQUFTLENBQUM7Y0FDN0NsSCxNQUFNLENBQUM0RixnQkFBZ0IsQ0FBQyxZQUFZLEVBQUVzQixTQUFTLENBQUM7Y0FFaERsSCxNQUFNLENBQUM0RixnQkFBZ0IsQ0FBQyxZQUFZLEVBQUVvQixXQUFXLENBQUM7Y0FDbERoSCxNQUFNLENBQUM0RixnQkFBZ0IsQ0FBQyxXQUFXLEVBQUVxQixVQUFVLENBQUM7Y0FDaERqSCxNQUFNLENBQUM0RixnQkFBZ0IsQ0FBQyxVQUFVLEVBQUVzQixTQUFTLENBQUM7Y0FFOUMvRyxPQUFPLENBQUN5RixnQkFBZ0IsQ0FBQyxPQUFPLEVBQUU7Z0JBQUEsT0FBTXVCLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQztjQUFBLEVBQUM7Y0FDdkQvRyxRQUFRLENBQUN3RixnQkFBZ0IsQ0FBQyxPQUFPLEVBQUU7Z0JBQUEsT0FBTXVCLFVBQVUsQ0FBQyxDQUFDLENBQUM7Y0FBQSxFQUFDO2NBQ3ZEO1lBR0osQ0FBQztZQW5GUTFCLGVBQWUsK0JBQUc7Y0FDdkIsSUFBSTJCLE1BQU0sQ0FBQ0MsS0FBSyxFQUFFO2dCQUNkLElBQU1DLEtBQUssR0FBR0YsTUFBTSxDQUFDQyxLQUFLLENBQUNFLFFBQVEsRUFBRTtnQkFDckM1SCxNQUFNLEdBQUcySCxLQUFLLENBQUNFLElBQUksQ0FBQ0MsWUFBWSxJQUFJSCxLQUFLLENBQUNFLElBQUksQ0FBQ0UsRUFBRSxJQUFJLEVBQUU7Y0FDM0QsQ0FBQyxNQUFNLElBQUlOLE1BQU0sQ0FBQ08sU0FBUyxFQUFFO2dCQUN6QmhJLE1BQU0sR0FBR3lILE1BQU0sQ0FBQ08sU0FBUztjQUM3QjtZQUNKLENBQUM7WUFYR0MsUUFBUSxHQUFHLENBQUM7WUFDVkMsV0FBVyxHQUFHLEVBQUU7WUFDaEJDLGVBQWUsR0FBRyxFQUFFO1lBdUZwQkMsYUFBYSxHQUFHLElBQUl6RyxPQUFPLENBQUMsVUFBQ2tCLE9BQU8sRUFBSztjQUMzQyxJQUFNd0YsUUFBUSxHQUFHQyxXQUFXLENBQUMsWUFBTTtnQkFDL0J4QyxlQUFlLEVBQUU7Z0JBQ2pCLElBQUk5RixNQUFNLElBQUlpSSxRQUFRLElBQUlDLFdBQVcsRUFBRTtrQkFDbkNuQyxtQkFBbUIsRUFBRTtrQkFDckJ3QyxhQUFhLENBQUNGLFFBQVEsQ0FBQztrQkFDdkJ4RixPQUFPLEVBQUU7Z0JBQ2I7Z0JBQ0FvRixRQUFRLEVBQUU7Y0FDZCxDQUFDLEVBQUVFLGVBQWUsQ0FBQztZQUN2QixDQUFDLENBQUM7WUFBQTtZQUFBLE9BRUlDLGFBQWE7VUFBQTtVQUFBO1lBQUE7UUFBQTtNQUFBO0lBQUEsQ0FDdEI7SUFBQTtFQUFBO0VBRUQsU0FBU0ksZ0JBQWdCLEdBQUc7SUFDeEIsT0FBT3pILE9BQU8sMkJBQW9CckIsTUFBTSxFQUFHLENBQ3RDMEIsSUFBSSxDQUFDLFVBQUFJLElBQUksRUFBSTtNQUNWakMsUUFBUSxHQUFHaUMsSUFBSTtNQUNmaUgsU0FBUyxFQUFFO01BQ1gsSUFBTUMsVUFBVSxHQUFHbk0sUUFBUSxDQUFDb00sY0FBYyxDQUFDLFVBQVUsQ0FBQztNQUN0RCxJQUFNQyxnQkFBZ0IsR0FBRyxJQUFJQyxnQkFBZ0IsQ0FBQyxVQUFVQyxTQUFTLEVBQUU7UUFDL0RGLGdCQUFnQixDQUFDRyxVQUFVLEVBQUU7UUFDN0JOLFNBQVMsRUFBRTtRQUNYRyxnQkFBZ0IsQ0FBQ0ksT0FBTyxDQUFDTixVQUFVLEVBQUU7VUFBRU8sU0FBUyxFQUFFLElBQUk7VUFBRUMsT0FBTyxFQUFFO1FBQUssQ0FBQyxDQUFDO01BQzVFLENBQUMsQ0FBQztNQUNGTixnQkFBZ0IsQ0FBQ0ksT0FBTyxDQUFDTixVQUFVLEVBQUU7UUFDakNPLFNBQVMsRUFBRSxJQUFJO1FBQ2ZDLE9BQU8sRUFBRTtNQUNiLENBQUMsQ0FBQztJQUVOLENBQUMsQ0FBQztFQUNWO0VBR0EsU0FBU3pDLGtCQUFrQixHQUFFO0lBQ3pCLElBQU1wRyxNQUFNLEdBQUc5RCxRQUFRLENBQUNPLGFBQWEsQ0FBQyxxQkFBcUIsQ0FBQztJQUM1RCxJQUFNcU0sTUFBTSxHQUFHOUksTUFBTSxDQUFDN0QsZ0JBQWdCLENBQUMsMEJBQTBCLENBQUM7SUFDbEUsSUFBTTRNLElBQUksR0FBRzdNLFFBQVEsQ0FBQ0MsZ0JBQWdCLENBQUMsdUJBQXVCLENBQUM7SUFDL0QsSUFBTStELElBQUksR0FBR2hFLFFBQVEsQ0FBQ0MsZ0JBQWdCLENBQUMsMkJBQTJCLENBQUM7SUFDbkUsSUFBTWdFLE9BQU8sR0FBR2pFLFFBQVEsQ0FBQ08sYUFBYSxDQUFDLHNCQUFzQixDQUFDO0lBQzlELElBQU0yRCxRQUFRLEdBQUdsRSxRQUFRLENBQUNPLGFBQWEsQ0FBQyx1QkFBdUIsQ0FBQztJQUVoRSxJQUFJNEQsWUFBWSxHQUFHckQsZ0JBQWdCLEdBQUcsQ0FBQztJQUV2Q2hCLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDZSxnQkFBZ0IsQ0FBQztJQUU3QixTQUFTK0osWUFBWSxDQUFDakIsS0FBSyxFQUFFO01BQ3pCZ0QsTUFBTSxDQUFDMU0sT0FBTyxDQUFDLFVBQUE0TSxLQUFLO1FBQUEsT0FBSUEsS0FBSyxDQUFDMU0sU0FBUyxDQUFDSSxNQUFNLENBQUMsU0FBUyxDQUFDO01BQUEsRUFBQztNQUMxRHFNLElBQUksQ0FBQzNNLE9BQU8sQ0FBQyxVQUFBeUosR0FBRztRQUFBLE9BQUlBLEdBQUcsQ0FBQ3ZKLFNBQVMsQ0FBQ0ksTUFBTSxDQUFDLFNBQVMsQ0FBQztNQUFBLEVBQUM7TUFDcER3RCxJQUFJLENBQUM5RCxPQUFPLENBQUMsVUFBQTZNLEdBQUc7UUFBQSxPQUFJQSxHQUFHLENBQUMzTSxTQUFTLENBQUNJLE1BQU0sQ0FBQyxTQUFTLENBQUM7TUFBQSxFQUFDO01BRXBEb00sTUFBTSxDQUFDaEQsS0FBSyxDQUFDLENBQUN4SixTQUFTLENBQUNDLEdBQUcsQ0FBQyxTQUFTLENBQUM7TUFDdEN3TSxJQUFJLENBQUNqRCxLQUFLLENBQUMsQ0FBQ3hKLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLFNBQVMsQ0FBQztNQUNwQzJELElBQUksQ0FBQzRGLEtBQUssQ0FBQyxDQUFDeEosU0FBUyxDQUFDQyxHQUFHLENBQUMsU0FBUyxDQUFDO0lBQ3hDO0lBRUF3SyxZQUFZLENBQUMvSixnQkFBZ0IsR0FBRyxDQUFDLENBQUM7SUFDbEMrTCxJQUFJLENBQUMzTSxPQUFPLENBQUMsVUFBQ3lKLEdBQUcsRUFBRS9KLENBQUMsRUFBSTtNQUNwQixJQUFHQSxDQUFDLEdBQUcsQ0FBQyxJQUFJa0IsZ0JBQWdCLEVBQUM7UUFDekI2SSxHQUFHLENBQUN2SixTQUFTLENBQUNDLEdBQUcsQ0FBQyxPQUFPLENBQUM7UUFDMUJzSixHQUFHLENBQUN2SixTQUFTLENBQUNJLE1BQU0sQ0FBQyxPQUFPLENBQUM7TUFFakMsQ0FBQyxNQUFJO1FBQ0RtSixHQUFHLENBQUN2SixTQUFTLENBQUNJLE1BQU0sQ0FBQyxTQUFTLENBQUM7UUFDL0JtSixHQUFHLENBQUN2SixTQUFTLENBQUNDLEdBQUcsQ0FBQyxPQUFPLENBQUM7UUFDMUJzSixHQUFHLENBQUN2SixTQUFTLENBQUNJLE1BQU0sQ0FBQyxPQUFPLENBQUM7TUFDakM7TUFDQSxJQUFHWixDQUFDLEdBQUcsQ0FBQyxLQUFLa0IsZ0JBQWdCLEVBQUM7UUFDMUI2SSxHQUFHLENBQUN2SixTQUFTLENBQUNDLEdBQUcsQ0FBQyxTQUFTLENBQUM7TUFDaEM7SUFDSixDQUFDLENBQUU7SUFFSCxTQUFTMk0sUUFBUSxHQUFHO01BQ2hCN0ksWUFBWSxHQUFHLENBQUNBLFlBQVksR0FBRyxDQUFDLEdBQUd5SSxNQUFNLENBQUN2SSxNQUFNLElBQUl1SSxNQUFNLENBQUN2SSxNQUFNO01BQ2pFd0csWUFBWSxDQUFDMUcsWUFBWSxDQUFDO0lBQzlCO0lBRUEsU0FBUzhJLFNBQVMsR0FBRztNQUNqQjlJLFlBQVksR0FBRyxDQUFDQSxZQUFZLEdBQUcsQ0FBQyxJQUFJeUksTUFBTSxDQUFDdkksTUFBTTtNQUNqRHdHLFlBQVksQ0FBQzFHLFlBQVksQ0FBQztJQUM5QjtJQUVBRixPQUFPLENBQUN5RixnQkFBZ0IsQ0FBQyxPQUFPLEVBQUVzRCxRQUFRLENBQUM7SUFDM0M5SSxRQUFRLENBQUN3RixnQkFBZ0IsQ0FBQyxPQUFPLEVBQUV1RCxTQUFTLENBQUM7SUFFN0NKLElBQUksQ0FBQzNNLE9BQU8sQ0FBQyxVQUFDeUosR0FBRyxFQUFFQyxLQUFLLEVBQUs7TUFDekJELEdBQUcsQ0FBQ0QsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLFlBQU07UUFDaEN2RixZQUFZLEdBQUd5RixLQUFLO1FBQ3BCaUIsWUFBWSxDQUFDMUcsWUFBWSxDQUFDO01BQzlCLENBQUMsQ0FBQztJQUNOLENBQUMsQ0FBQztJQUVGSCxJQUFJLENBQUM5RCxPQUFPLENBQUMsVUFBQzZNLEdBQUcsRUFBRW5ELEtBQUssRUFBSztNQUN6Qm1ELEdBQUcsQ0FBQ3JELGdCQUFnQixDQUFDLE9BQU8sRUFBRSxZQUFNO1FBQ2hDdkYsWUFBWSxHQUFHeUYsS0FBSztRQUNwQmlCLFlBQVksQ0FBQzFHLFlBQVksQ0FBQztNQUM5QixDQUFDLENBQUM7SUFDTixDQUFDLENBQUM7RUFFTjtFQUVBLFNBQVNzRixhQUFhLEdBQUc7SUFDckIsSUFBTXlELFFBQVEsR0FBRyxHQUFHO0lBQ3BCMUksT0FBTyxvQkFBYWYsTUFBTSxFQUFHLENBQUNvQixJQUFJLENBQUMsVUFBQ3FCLElBQUksRUFBSztNQUV6Q0Usa0JBQWtCLENBQUNGLElBQUksQ0FBQ0csS0FBSyxDQUFDO01BRTlCNEQsVUFBVSxDQUFDLFlBQU07UUFDYixJQUFNa0QsWUFBWSxHQUFHLFNBQWZBLFlBQVksQ0FBSTNLLFFBQVE7VUFBQSxPQUFLQSxRQUFRLENBQUN0QyxPQUFPLENBQUMsVUFBQXdDLEVBQUU7WUFBQSxPQUFJQSxFQUFFLENBQUN0QyxTQUFTLENBQUNJLE1BQU0sQ0FBQyxNQUFNLENBQUM7VUFBQSxFQUFDO1FBQUE7UUFDdEYsSUFBTTRNLFlBQVksR0FBRyxTQUFmQSxZQUFZLENBQUk1SyxRQUFRO1VBQUEsT0FBS0EsUUFBUSxDQUFDdEMsT0FBTyxDQUFDLFVBQUF3QyxFQUFFO1lBQUEsT0FBSUEsRUFBRSxDQUFDdEMsU0FBUyxDQUFDQyxHQUFHLENBQUMsTUFBTSxDQUFDO1VBQUEsRUFBQztRQUFBO1FBRW5GK0IsU0FBUyxDQUFDaEMsU0FBUyxDQUFDQyxHQUFHLENBQUMsTUFBTSxDQUFDO1FBQy9Cc0IsbUJBQW1CLENBQUN2QixTQUFTLENBQUNDLEdBQUcsQ0FBQyxNQUFNLENBQUM7UUFHekMsSUFBSSxDQUFDb0QsTUFBTSxFQUFFO1VBQ1QySixZQUFZLENBQUNqTSxlQUFlLENBQUM7VUFDN0JpTSxZQUFZLENBQUNoTSxZQUFZLENBQUM7VUFDMUIrTCxZQUFZLENBQUNqTSxVQUFVLENBQUM7VUFDeEJxQyxVQUFVLEVBQUU7VUFDWmpDLGdCQUFnQixDQUFDbEIsU0FBUyxDQUFDQyxHQUFHLENBQUMsU0FBUyxDQUFDO1VBQ3pDLE9BQU8rRSxPQUFPLENBQUNrQixPQUFPLENBQUMsS0FBSyxDQUFDO1FBQ2pDLENBQUMsTUFBSTtVQUNEaEYsZ0JBQWdCLENBQUNsQixTQUFTLENBQUNJLE1BQU0sQ0FBQyxTQUFTLENBQUM7UUFDaEQ7UUFFQTRNLFlBQVksQ0FBQ2xNLFVBQVUsQ0FBQztRQUV4QixJQUFJZ0YsSUFBSSxDQUFDTyxNQUFNLEVBQUU7VUFDYjJHLFlBQVksQ0FBQ2pNLGVBQWUsQ0FBQztVQUM3QmdNLFlBQVksQ0FBQy9MLFlBQVksQ0FBQztVQUMxQmdGLGtCQUFrQixDQUFDRixJQUFJLENBQUNHLEtBQUssQ0FBQztVQUM5QkYsZUFBZSxDQUFDRCxJQUFJLENBQUM7VUFDckI7VUFDQTlELFNBQVMsQ0FBQ2hDLFNBQVMsQ0FBQ0ksTUFBTSxDQUFDLE1BQU0sQ0FBQztRQUN0QyxDQUFDLE1BQU07VUFDSDJNLFlBQVksQ0FBQ2hNLGVBQWUsQ0FBQztVQUM3QmlNLFlBQVksQ0FBQ2hNLFlBQVksQ0FBQztRQUM5QjtRQUtBbUMsVUFBVSxFQUFFO01BTWhCLENBQUMsRUFBRTJKLFFBQVEsQ0FBQztJQUNoQixDQUFDLENBQUM7RUFDTjtFQUVBLFNBQVNHLFdBQVcsQ0FBQ25JLEdBQUcsRUFBRTtJQUN0QixJQUFNb0ksVUFBVSxHQUFHO01BQ2ZDLE1BQU0sRUFBRXJDLE1BQU0sQ0FBQ3NDLFFBQVEsQ0FBQ0MsSUFBSTtNQUM1QmhILE1BQU0sRUFBRWhELE1BQU07TUFDZGlLLFNBQVMsRUFBRSxDQUFBeEksR0FBRyxhQUFIQSxHQUFHLHVCQUFIQSxHQUFHLENBQUVDLEtBQUssTUFBSUQsR0FBRyxhQUFIQSxHQUFHLHVCQUFIQSxHQUFHLENBQUV5SSxJQUFJLE1BQUl6SSxHQUFHLGFBQUhBLEdBQUcsdUJBQUhBLEdBQUcsQ0FBRTBJLE9BQU8sS0FBSSxlQUFlO01BQ3JFckgsSUFBSSxFQUFFLENBQUFyQixHQUFHLGFBQUhBLEdBQUcsdUJBQUhBLEdBQUcsQ0FBRWdFLElBQUksS0FBSSxjQUFjO01BQ2pDMkUsS0FBSyxFQUFFLENBQUEzSSxHQUFHLGFBQUhBLEdBQUcsdUJBQUhBLEdBQUcsQ0FBRTJJLEtBQUssS0FBSTtJQUN6QixDQUFDO0lBRURsSixLQUFLLENBQUMsMENBQTBDLEVBQUU7TUFDOUMrQixNQUFNLEVBQUUsTUFBTTtNQUNkOUIsT0FBTyxFQUFFO1FBQ0wsY0FBYyxFQUFFO01BQ3BCLENBQUM7TUFDRFUsSUFBSSxFQUFFcUIsSUFBSSxDQUFDQyxTQUFTLENBQUMwRyxVQUFVO0lBQ25DLENBQUMsQ0FBQyxTQUFNLENBQUN4TixPQUFPLENBQUN5SSxJQUFJLENBQUM7RUFDMUI7RUFFQSxTQUFTMkQsU0FBUyxHQUFHO0lBQ2pCLElBQU00QixLQUFLLEdBQUc5TixRQUFRLENBQUNDLGdCQUFnQixDQUFDLGtCQUFrQixDQUFDO0lBQzNELElBQUk2TixLQUFLLElBQUlBLEtBQUssQ0FBQ3pKLE1BQU0sRUFBRTtNQUN2QixJQUFHYixjQUFjLEVBQUM7UUFDZHNLLEtBQUssQ0FBQzVOLE9BQU8sQ0FBQyxVQUFBNk4sSUFBSSxFQUFJO1VBQ2xCLElBQU1DLEdBQUcsR0FBR0QsSUFBSSxDQUFDaEUsWUFBWSxDQUFDLGdCQUFnQixDQUFDO1VBQy9DZ0UsSUFBSSxDQUFDaEwsU0FBUyxHQUFHQyxRQUFRLENBQUNnTCxHQUFHLENBQUMsSUFBSSwwQ0FBMEMsR0FBR0EsR0FBRztVQUNsRixJQUFJaEwsUUFBUSxDQUFDZ0wsR0FBRyxDQUFDLEVBQUU7WUFDZkQsSUFBSSxDQUFDOUssZUFBZSxDQUFDLGdCQUFnQixDQUFDO1VBQzFDO1FBQ0osQ0FBQyxDQUFDO01BQ04sQ0FBQyxNQUFJO1FBQ0RuRCxPQUFPLENBQUNDLEdBQUcsQ0FBQyxvQkFBb0IsQ0FBQztNQUNyQztJQUNKO0lBQ0FrTyxxQkFBcUIsQ0FBQ2xOLFFBQVEsQ0FBQztFQUNuQztFQUVBLFNBQVNrTixxQkFBcUIsQ0FBQ0MsT0FBTyxFQUFFO0lBQ3BDLElBQUksQ0FBQ0EsT0FBTyxFQUFFO01BQ1Y7SUFDSjtJQUNBLHdCQUFtQixDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsMEJBQUU7TUFBNUIsSUFBTUMsSUFBSTtNQUNYRCxPQUFPLENBQUM5TixTQUFTLENBQUNJLE1BQU0sQ0FBQzJOLElBQUksQ0FBQztJQUNsQztJQUNBRCxPQUFPLENBQUM5TixTQUFTLENBQUNDLEdBQUcsQ0FBQzhDLE1BQU0sQ0FBQztFQUNqQztFQUVBLFNBQVM2RyxXQUFXLENBQUNvRSxJQUFJLEVBQUU7SUFDdkI1SixPQUFPLGtCQUFXNEosSUFBSSxFQUFHLENBQ3BCdkosSUFBSSxDQUFDLFVBQUF3SixJQUFJLEVBQUk7TUFDVixJQUFNQyxLQUFLLEdBQUdELElBQUk7TUFDbEJFLGtCQUFrQixDQUFDRCxLQUFLLEVBQUU3SyxNQUFNLEVBQUUySyxJQUFJLENBQUM7SUFDM0MsQ0FBQyxDQUFDO0VBQ1Y7RUFFQSxTQUFTRyxrQkFBa0IsQ0FBQ0QsS0FBSyxFQUFFRSxhQUFhLEVBQUVKLElBQUksRUFBRTtJQUNwRG5NLFlBQVksQ0FBQ2MsU0FBUyxHQUFHLEVBQUU7SUFDM0JiLGlCQUFpQixDQUFDYSxTQUFTLEdBQUcsRUFBRTtJQUNoQyxJQUFJLEVBQUN1TCxLQUFLLGFBQUxBLEtBQUssZUFBTEEsS0FBSyxDQUFFakssTUFBTSxHQUFFO0lBQ3BCLElBQU1vSyxXQUFXLEdBQUdILEtBQUssQ0FBQ0ksSUFBSSxDQUFDLFVBQUF4SSxJQUFJO01BQUEsT0FBSUEsSUFBSSxDQUFDTyxNQUFNLEtBQUsrSCxhQUFhO0lBQUEsRUFBQztJQUNyRSxJQUFNRyxnQkFBZ0IsR0FBR0YsV0FBVyxJQUFJSCxLQUFLLENBQUN6RixLQUFLLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDK0YsSUFBSSxDQUFDLFVBQUExSSxJQUFJO01BQUEsT0FBSUEsSUFBSSxDQUFDTyxNQUFNLEtBQUsrSCxhQUFhO0lBQUEsRUFBQztJQUN0RyxJQUFNSyxjQUFjLEdBQUcsQ0FBQ3BMLE1BQU0sSUFBSWtMLGdCQUFnQixHQUFJLEVBQUUsR0FBRyxFQUFFO0lBQzdELElBQU1HLFFBQVEsR0FBR1IsS0FBSyxDQUFDekYsS0FBSyxDQUFDLENBQUMsRUFBRWdHLGNBQWMsQ0FBQztJQUMvQ0MsUUFBUSxDQUFDNU8sT0FBTyxDQUFDLFVBQUFnRyxJQUFJLEVBQUk7TUFDckJoRSxpQkFBaUIsQ0FBQzlCLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLE1BQU0sQ0FBQztNQUN2QzBPLFdBQVcsQ0FBQzdJLElBQUksRUFBRUEsSUFBSSxDQUFDTyxNQUFNLEtBQUsrSCxhQUFhLEVBQUV2TSxZQUFZLEVBQUU2TSxRQUFRLEVBQUVILGdCQUFnQixFQUFFUCxJQUFJLENBQUM7SUFDcEcsQ0FBQyxDQUFDO0lBQ0YsSUFBSSxDQUFDTyxnQkFBZ0IsSUFBSUYsV0FBVyxFQUFFO01BQ2xDdk0saUJBQWlCLENBQUM5QixTQUFTLENBQUNJLE1BQU0sQ0FBQyxNQUFNLENBQUM7TUFDMUN1TyxXQUFXLENBQUNOLFdBQVcsRUFBRSxJQUFJLEVBQUV2TSxpQkFBaUIsRUFBRW9NLEtBQUssRUFBRSxLQUFLLEVBQUVGLElBQUksQ0FBQztJQUN6RTtFQUNKO0VBRUEsU0FBU1csV0FBVyxDQUFDN0ksSUFBSSxFQUFFOEksYUFBYSxFQUFFQyxLQUFLLEVBQUVYLEtBQUssRUFBRUssZ0JBQWdCLEVBQUVQLElBQUksRUFBRTtJQUM1RSxJQUFNYyxTQUFTLEdBQUcsU0FBWkEsU0FBUyxDQUFJbkksUUFBUSxFQUFtQjtNQUFBLElBQWpCb0ksT0FBTyx1RUFBRyxDQUFDLENBQUM7TUFDckMseUJBQWdEQSxPQUFPLENBQS9DQyxTQUFTO1FBQVRBLFNBQVMsbUNBQUcsS0FBSztRQUFBLG9CQUF1QkQsT0FBTyxDQUE1QkUsUUFBUTtRQUFSQSxRQUFRLGtDQUFHLEtBQUs7TUFDM0MsSUFBTUMsT0FBTyxHQUFHdFAsUUFBUSxDQUFDK0ksYUFBYSxDQUFDLEtBQUssQ0FBQztNQUM3Q3VHLE9BQU8sQ0FBQ2xQLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLFlBQVksQ0FBQztNQUVuQyxJQUFNa1AsU0FBUyxHQUFHakIsS0FBSyxDQUFDa0IsT0FBTyxDQUFDekksUUFBUSxDQUFDLEdBQUcsQ0FBQztNQUM3QztNQUNBLElBQU0wSSxRQUFRLEdBQUduTSxLQUFLLEdBQUcsSUFBSSxHQUFHb00sc0JBQXNCLENBQUNILFNBQVMsRUFBRW5CLElBQUksQ0FBQztNQUV2RSxJQUFJbUIsU0FBUyxJQUFJLENBQUMsRUFBRTtRQUNoQkQsT0FBTyxDQUFDbFAsU0FBUyxDQUFDQyxHQUFHLGdCQUFTa1AsU0FBUyxFQUFHO01BQzlDO01BRUEsSUFBSUgsU0FBUyxJQUFJSixhQUFhLElBQUksQ0FBQ0ssUUFBUSxFQUFFO1FBQ3pDQyxPQUFPLENBQUNsUCxTQUFTLENBQUNDLEdBQUcsQ0FBQyxLQUFLLENBQUM7TUFDaEMsQ0FBQyxNQUFNLElBQUlnUCxRQUFRLEVBQUU7UUFDakJDLE9BQU8sQ0FBQ2xQLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLFdBQVcsQ0FBQztNQUN0QztNQUVBaVAsT0FBTyxDQUFDdk0sU0FBUyw0RUFFWHdNLFNBQVMsR0FBRyxFQUFFLEdBQUcsR0FBRyxHQUFHQSxTQUFTLEdBQUdBLFNBQVMsK0JBQzVDUCxhQUFhLElBQUksQ0FBQ0ssUUFBUSxHQUFHLG9CQUFvQixHQUFHMUosWUFBWSxDQUFDLEtBQUssQ0FBQyxHQUFHLFNBQVMsR0FBRyxFQUFFLGdHQUd4RnFKLGFBQWEsSUFBSSxDQUFDSyxRQUFRLEdBQUd0SSxRQUFRLENBQUNOLE1BQU0sR0FBR2tKLFVBQVUsQ0FBQzVJLFFBQVEsQ0FBQ04sTUFBTSxDQUFDLGdHQUcxRU0sUUFBUSxDQUFDNkksTUFBTSxnR0FHZkgsUUFBUSxHQUFHOUosWUFBWSxDQUFDOEosUUFBUSxDQUFDLEdBQUcsS0FBSyxnR0FHekNBLFFBQVEsR0FBR0ksZUFBZSxDQUFDTixTQUFTLENBQUMsR0FBRyxLQUFLLG1DQUV0RDtNQUVHTixLQUFLLENBQUNhLE1BQU0sQ0FBQ1IsT0FBTyxDQUFDO0lBQ3pCLENBQUM7SUFDRCxJQUFJTixhQUFhLElBQUksQ0FBQ0wsZ0JBQWdCLEVBQUU7TUFDcEMsSUFBTS9FLEtBQUssR0FBRzBFLEtBQUssQ0FBQ2tCLE9BQU8sQ0FBQ3RKLElBQUksQ0FBQztNQUNqQyxJQUFJb0ksS0FBSyxDQUFDMUUsS0FBSyxHQUFHLENBQUMsQ0FBQyxFQUFFO1FBQ2xCc0YsU0FBUyxDQUFDWixLQUFLLENBQUMxRSxLQUFLLEdBQUcsQ0FBQyxDQUFDLEVBQUU7VUFBRXlGLFFBQVEsRUFBRTtRQUFLLENBQUMsQ0FBQztNQUNuRDtNQUNBSCxTQUFTLENBQUNoSixJQUFJLEVBQUU7UUFBRWtKLFNBQVMsRUFBRTtNQUFLLENBQUMsQ0FBQztNQUNwQyxJQUFJZCxLQUFLLENBQUMxRSxLQUFLLEdBQUcsQ0FBQyxDQUFDLEVBQUU7UUFDbEJzRixTQUFTLENBQUNaLEtBQUssQ0FBQzFFLEtBQUssR0FBRyxDQUFDLENBQUMsRUFBRTtVQUFFeUYsUUFBUSxFQUFFO1FBQUssQ0FBQyxDQUFDO01BQ25EO0lBQ0osQ0FBQyxNQUFNO01BQ0hILFNBQVMsQ0FBQ2hKLElBQUksQ0FBQztJQUNuQjtFQUNKO0VBRUEsU0FBU1AsWUFBWSxDQUFDcUksR0FBRyxFQUFFK0IsWUFBWSxFQUFFO0lBQ3JDLElBQUksQ0FBQy9CLEdBQUcsRUFBRTtNQUNOO0lBQ0o7SUFDQSxJQUFJZ0MsT0FBTyxHQUFHMU0sS0FBSyxHQUFHMEssR0FBRyxrREFBMkNBLEdBQUcsQ0FBRTtJQUV6RStCLFlBQVksR0FBSUMsT0FBTyxJQUFJaEMsR0FBRztJQUM5QixPQUFPaEwsUUFBUSxDQUFDZ0wsR0FBRyxDQUFDLElBQUkrQixZQUFZO0VBQ3hDO0VBRUEsU0FBU0osVUFBVSxDQUFDbE0sTUFBTSxFQUFFO0lBQ3hCLE9BQU8sSUFBSSxHQUFHQSxNQUFNLENBQUN2RSxRQUFRLEVBQUUsQ0FBQzJKLEtBQUssQ0FBQyxDQUFDLENBQUM7RUFDNUM7RUFFQSxTQUFTNkcsc0JBQXNCLENBQUNPLEtBQUssRUFBRTtJQUNuQyxJQUFJQSxLQUFLLElBQUksQ0FBQyxJQUFJQSxLQUFLLElBQUksRUFBRSxFQUFFLHVCQUFnQkEsS0FBSztJQUNwRCxJQUFJQSxLQUFLLElBQUksRUFBRSxJQUFJQSxLQUFLLElBQUksRUFBRSxFQUFFLE9BQU8sYUFBYTtJQUNwRCxJQUFJQSxLQUFLLElBQUksRUFBRSxJQUFJQSxLQUFLLElBQUksRUFBRSxFQUFFLE9BQU8sYUFBYTtJQUNwRCxJQUFJQSxLQUFLLElBQUksRUFBRSxJQUFJQSxLQUFLLElBQUksRUFBRSxFQUFFLE9BQU8sYUFBYTtJQUNwRCxJQUFJQSxLQUFLLElBQUksRUFBRSxJQUFJQSxLQUFLLElBQUksRUFBRSxFQUFFLE9BQU8sYUFBYTtJQUNwRCxJQUFJQSxLQUFLLElBQUksRUFBRSxJQUFJQSxLQUFLLElBQUksRUFBRSxFQUFFLE9BQU8sYUFBYTtJQUNwRCxJQUFJQSxLQUFLLElBQUksRUFBRSxJQUFJQSxLQUFLLElBQUksR0FBRyxFQUFFLE9BQU8sY0FBYztJQUN0RCxJQUFJQSxLQUFLLElBQUksR0FBRyxJQUFJQSxLQUFLLElBQUksR0FBRyxFQUFFLE9BQU8sZUFBZTtJQUN4RCxJQUFJQSxLQUFLLElBQUksR0FBRyxJQUFJQSxLQUFLLElBQUksR0FBRyxFQUFFLE9BQU8sZUFBZTtJQUN4RCxJQUFJQSxLQUFLLElBQUksR0FBRyxJQUFJQSxLQUFLLElBQUksR0FBRyxFQUFFLE9BQU8sZUFBZTtJQUN4RCxJQUFJQSxLQUFLLElBQUksR0FBRyxJQUFJQSxLQUFLLElBQUksR0FBRyxFQUFFLE9BQU8sZUFBZTtJQUN4RCxJQUFJQSxLQUFLLElBQUksR0FBRyxJQUFJQSxLQUFLLElBQUksR0FBRyxFQUFFLE9BQU8sZUFBZTtJQUN4RCxJQUFJQSxLQUFLLElBQUksR0FBRyxJQUFJQSxLQUFLLElBQUksR0FBRyxFQUFFLE9BQU8sZUFBZTtJQUN4RCxJQUFJQSxLQUFLLElBQUksR0FBRyxJQUFJQSxLQUFLLElBQUksR0FBRyxFQUFFLE9BQU8sZUFBZTtJQUN4RCxJQUFJQSxLQUFLLElBQUksR0FBRyxJQUFJQSxLQUFLLElBQUksR0FBRyxFQUFFLE9BQU8sZUFBZTtJQUN4RCxJQUFJQSxLQUFLLElBQUksR0FBRyxJQUFJQSxLQUFLLElBQUksR0FBRyxFQUFFLE9BQU8sZUFBZTtJQUN4RCxJQUFJQSxLQUFLLElBQUksR0FBRyxJQUFJQSxLQUFLLElBQUksR0FBRyxFQUFFLE9BQU8sZUFBZTtJQUN4RCxJQUFJQSxLQUFLLElBQUksR0FBRyxJQUFJQSxLQUFLLElBQUksR0FBRyxFQUFFLE9BQU8sZUFBZTtJQUN4RCxJQUFJQSxLQUFLLElBQUksR0FBRyxJQUFJQSxLQUFLLElBQUksR0FBRyxFQUFFLE9BQU8sZUFBZTtJQUN4RCxJQUFJQSxLQUFLLElBQUksR0FBRyxJQUFJQSxLQUFLLElBQUksR0FBRyxFQUFFLE9BQU8sZUFBZTtJQUN4RCxJQUFJQSxLQUFLLElBQUksR0FBRyxJQUFJQSxLQUFLLElBQUksSUFBSSxFQUFFLE9BQU8sZ0JBQWdCO0lBQzFELE9BQU8sSUFBSTtFQUNmO0VBRUEsU0FBU0osZUFBZSxDQUFDSSxLQUFLLEVBQUU7SUFDNUIsSUFBSUEsS0FBSyxJQUFJLENBQUMsSUFBSUEsS0FBSyxJQUFJLEVBQUUsRUFBRSxPQUFPLEdBQUc7SUFDekMsSUFBSUEsS0FBSyxJQUFJLEVBQUUsSUFBSUEsS0FBSyxJQUFJLEVBQUUsRUFBRSxPQUFPLElBQUk7SUFDM0MsSUFBSUEsS0FBSyxJQUFJLEVBQUUsSUFBSUEsS0FBSyxJQUFJLEVBQUUsRUFBRSxPQUFPLElBQUk7SUFDM0MsSUFBSUEsS0FBSyxJQUFJLEVBQUUsSUFBSUEsS0FBSyxJQUFJLEVBQUUsRUFBRSxPQUFPLElBQUk7SUFDM0MsSUFBSUEsS0FBSyxJQUFJLEVBQUUsSUFBSUEsS0FBSyxJQUFJLEVBQUUsRUFBRSxPQUFPLElBQUk7SUFDM0MsSUFBSUEsS0FBSyxJQUFJLEVBQUUsSUFBSUEsS0FBSyxJQUFJLEVBQUUsRUFBRSxPQUFPLElBQUk7SUFDM0MsSUFBSUEsS0FBSyxJQUFJLEVBQUUsSUFBSUEsS0FBSyxJQUFJLEdBQUcsRUFBRSxPQUFPLElBQUk7SUFDNUMsSUFBSUEsS0FBSyxJQUFJLEdBQUcsSUFBSUEsS0FBSyxJQUFJLEdBQUcsRUFBRSxPQUFPLElBQUk7SUFDN0MsSUFBSUEsS0FBSyxJQUFJLEdBQUcsSUFBSUEsS0FBSyxJQUFJLEdBQUcsRUFBRSxPQUFPLElBQUk7SUFDN0MsSUFBSUEsS0FBSyxJQUFJLEdBQUcs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QUFDLFFBQVEsRUFBRSxTQUFTLENBQUM7SUFDL0M7SUFDQXBHLE1BQU0sQ0FBQ3NDLFFBQVEsQ0FBQytELE1BQU0sRUFBRTtFQUM1QixDQUFDLENBQUM7QUFHTixDQUFDLEdBQUc7O0FBRUo7QUFDQSxTQUFTdEwsZUFBZSxDQUFDdUUsU0FBUyxFQUEwQjtFQUFBLElBQXhCa0gsY0FBYyx1RUFBRyxLQUFLO0VBQ3RELElBQU1DLFNBQVMsR0FBRzNSLFFBQVEsQ0FBQ0MsZ0JBQWdCLENBQUMsUUFBUSxDQUFDO0VBQ3JEMFIsU0FBUyxDQUFDelIsT0FBTyxDQUFDLFVBQUErUSxDQUFDO0lBQUEsT0FBSUEsQ0FBQyxDQUFDN1EsU0FBUyxDQUFDQyxHQUFHLENBQUMsTUFBTSxDQUFDO0VBQUEsRUFBQztFQUMvQ0wsUUFBUSxDQUFDc0YsSUFBSSxDQUFDQyxLQUFLLENBQUNDLFFBQVEsR0FBRyxRQUFRO0VBRXZDLElBQU1vTSxXQUFXLEdBQUc1UixRQUFRLENBQUNPLGFBQWEsK0JBQXVCaUssU0FBUyxTQUFLO0VBQy9FLElBQUlvSCxXQUFXLEVBQUU7SUFDYkEsV0FBVyxDQUFDeFIsU0FBUyxDQUFDSSxNQUFNLENBQUMsTUFBTSxDQUFDO0lBQ3BDUixRQUFRLENBQUNPLGFBQWEsQ0FBQyxTQUFTLENBQUMsQ0FBQ0gsU0FBUyxDQUFDSSxNQUFNLENBQUMsaUJBQWlCLENBQUM7RUFDekU7RUFFQSxJQUFNNkcsUUFBUSxHQUFHckgsUUFBUSxDQUFDTyxhQUFhLENBQUMsbUJBQW1CLENBQUM7RUFDNUQsSUFBSThHLFFBQVEsRUFBRTtJQUNWQSxRQUFRLENBQUNqSCxTQUFTLENBQUN1QyxNQUFNLENBQUMsTUFBTSxFQUFFLENBQUMrTyxjQUFjLENBQUM7RUFDdEQ7QUFDSjtBQUNBIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gKCkge1xuXG4gICAgY29uc3QgYXBpVVJMID0gJ2h0dHBzOi8vZmF2LXByb20uY29tL2FwaV9zYW1fdWEnXG5cbiAgICBjb25zdCBjdXJyZW50RGF0ZSA9IG5ldyBEYXRlKFwiMjAyNS0wNy0yNFQwMDowMDowMFwiKTtcblxuICAgIGNvbnN0IGdldEFjdGl2ZVdlZWsgPSAocHJvbW9TdGFydERhdGUsIHdlZWtEdXJhdGlvbikgPT4ge1xuXG4gICAgICAgIGxldCB3ZWVrRGF0ZXMgPSBbXTtcblxuICAgICAgICBjb25zdCBEYXkgPSAyNCAqIDYwICogNjAgKiAxMDAwO1xuICAgICAgICBjb25zdCBXZWVrID0gd2Vla0R1cmF0aW9uICogRGF5O1xuXG4gICAgICAgIGNvbnN0IGZvcm1hdERhdGUgPSAoZGF0ZSkgPT5cbiAgICAgICAgICAgIGAke2RhdGUuZ2V0RGF0ZSgpLnRvU3RyaW5nKCkucGFkU3RhcnQoMiwgXCIwXCIpfS4keyhkYXRlLmdldE1vbnRoKCkgKyAxKS50b1N0cmluZygpLnBhZFN0YXJ0KDIsIFwiMFwiKX1gO1xuXG4gICAgICAgIGNvbnN0IGNhbGN1bGF0ZVdlZWtQZXJpb2QgPSAod2Vla0luZGV4KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBiYXNlU3RhcnQgPSBwcm9tb1N0YXJ0RGF0ZS5nZXRUaW1lKCk7XG4gICAgICAgICAgICBjb25zdCBzdGFydCA9IG5ldyBEYXRlKGJhc2VTdGFydCArIHdlZWtJbmRleCAqIFdlZWspO1xuICAgICAgICAgICAgbGV0IGVuZCA9IG5ldyBEYXRlKHN0YXJ0LmdldFRpbWUoKSArICh3ZWVrRHVyYXRpb24gKiBEYXkgLSAxKSk7XG4gICAgICAgICAgICByZXR1cm4geyBzdGFydCwgZW5kIH07XG4gICAgICAgIH07XG5cbiAgICAgICAgbGV0IGFjdGl2ZVdlZWtJbmRleCA9IG51bGw7XG5cbiAgICAgICAgLy8g0J/QtdGA0LXQstGW0YDQutCwINC/0L7RgtC+0YfQvdC+0LPQviDRgtC40LbQvdGPXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTA7IGkrKykgeyAvLyDQntCx0LzQtdC20YPRlNC80L4gMTAg0YLQuNC20L3Rj9C80LggKNGP0LrRidC+INC/0L7RgtGA0ZbQsdC90L4g0LHRltC70YzRiNC1LCDQv9GA0L7RgdGC0L4g0LfQvNGW0L3RltGC0Ywg0LvRltGH0LjQu9GM0L3QuNC6KVxuICAgICAgICAgICAgY29uc3QgeyBzdGFydCwgZW5kIH0gPSBjYWxjdWxhdGVXZWVrUGVyaW9kKGkpO1xuICAgICAgICAgICAgaWYgKGN1cnJlbnREYXRlID49IHN0YXJ0ICYmIGN1cnJlbnREYXRlIDw9IGVuZCkge1xuICAgICAgICAgICAgICAgIGFjdGl2ZVdlZWtJbmRleCA9IGkgKyAxO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGFjdGl2ZVdlZWtJbmRleDtcbiAgICB9O1xuXG4gICAgY29uc3QgcHJvbW9TdGFydERhdGUgPSBuZXcgRGF0ZShcIjIwMjUtMDctMTVUMDA6MDA6MDBcIik7XG4gICAgY29uc3Qgd2Vla0R1cmF0aW9uID0gNztcblxuICAgIGNvbnN0IGFjdGl2ZVdlZWsgPSBnZXRBY3RpdmVXZWVrKHByb21vU3RhcnREYXRlLCB3ZWVrRHVyYXRpb24pIHx8IDE7XG5cbiAgICBjb25zb2xlLmxvZyhhY3RpdmVXZWVrKVxuXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmdhbWVzX19saXN0JykuZm9yRWFjaChsaXN0ID0+IHtcbiAgICAgICAgbGlzdC5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XG4gICAgfSk7XG5cbiAgICBjb25zdCBjdXJyZW50TGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5nYW1lc19fbGlzdC5fd2VlayR7YWN0aXZlV2Vla31gKTtcblxuICAgIGNvbnNvbGUubG9nKGN1cnJlbnRMaXN0KTtcbiAgICBpZiAoY3VycmVudExpc3QpIHtcbiAgICAgICAgY3VycmVudExpc3QuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpO1xuICAgIH1cblxuICAgIGNvbnN0IGdldEN1cnJlbnREYXlOdW1iZXIgPSAocHJvbW9TdGFydERhdGUpID0+IHtcbiAgICAgICAgY29uc3QgZGlmZkluTXMgPSBjdXJyZW50RGF0ZSAtIHByb21vU3RhcnREYXRlO1xuICAgICAgICBsZXQgZGF5TnVtYmVyID0gTWF0aC5mbG9vcihkaWZmSW5NcyAvICgyNCAqIDYwICogNjAgKiAxMDAwKSkgKyAxO1xuICAgICAgICBpZihhY3RpdmVXZWVrID4gMSl7XG4gICAgICAgICAgIGRheU51bWJlciA9IGRheU51bWJlciAtICgoYWN0aXZlV2VlayAtIDEpICogNyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGRheU51bWJlciAtIDE7XG4gICAgfTtcblxuICAgIGNvbnN0IGRheU51bWJlciA9IGdldEN1cnJlbnREYXlOdW1iZXIocHJvbW9TdGFydERhdGUpO1xuICAgIGNvbnN0IGN1cnJlbnREYXlOdW1iZXIgPSBkYXlOdW1iZXIgPiAwID8gZGF5TnVtYmVyIDogMTtcbiAgICBjb25zb2xlLmxvZyhjdXJyZW50RGF5TnVtYmVyKTtcblxuXG4gICAgY29uc3QgbWFpblBhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmZhdi1wYWdlXCIpLFxuICAgICAgICBjaGFsbGFuZ2VCbG9jayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jaGFsbGFuZ2UnKSxcbiAgICAgICAgY2hhbGxhbmdlRGVwb3NpdEJ0biA9IGNoYWxsYW5nZUJsb2NrLnF1ZXJ5U2VsZWN0b3IoJy5idG4tam9pbicpLFxuICAgICAgICB1bmF1dGhNc2dzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnVuYXV0aC1tc2cnKSxcbiAgICAgICAgcGFydGljaXBhdGVCdG5zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnBhcnQtYnRuJyksXG4gICAgICAgIHJlZGlyZWN0QnRucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5idG4tam9pbicpLFxuICAgICAgICBsb2FkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNwaW5uZXItb3ZlcmxheVwiKSxcbiAgICAgICAgY3VycmVudENhcmRzV3JhcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jaGFsbGFuZ2VfX2N1cnJlbnQnKSxcbiAgICAgICAgcHJvZ3Jlc3NCYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2hhbGxhbmdlX19wcm9ncmVzcy1iYXInKSxcbiAgICAgICAgY2hhbGxhbmdlQmx1ciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jaGFsbGFuZ2VfX2JsdXInKSxcbiAgICAgICAgY2hhbGxhbmdlQmx1clN0YXR1cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jaGFsbGFuZ2VfX2JsdXItc3RhdHVzJyksXG4gICAgICAgIHByb2dyZXNzQm94ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNoYWxsYW5nZV9fcHJvZ3Jlc3MtYm94JyksXG4gICAgICAgIGNoYWxsYW5nZUJ0blBvaW50ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2hhbGxhbmdlX19idG4tcG9pbnRlcicpLFxuICAgICAgICBidG5PcGVuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJ0bi1vcGVuJyksXG4gICAgICAgIGNvdW50ZXJQb2ludHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY291bnRlci1wb2ludHMnKSxcbiAgICAgICAgcG9wdXBzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBvcHVwcycpLFxuICAgICAgICBzdHJlYWtEYXlzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5wcm9ncmVzc19fZGF5cy1pdGVtXCIpLFxuICAgICAgICBzdHJlYWtEYXlzUG9wdXAgPSBwb3B1cHMucXVlcnlTZWxlY3RvckFsbChcIi5wcm9ncmVzc19fZGF5cy1pdGVtXCIpLFxuICAgICAgICByZXN1bHRzVGFibGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGFibGUnKSxcbiAgICAgICAgcmVzdWx0c1RhYmxlT3RoZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGFibGVPdGhlcicpLFxuICAgICAgICB0YWJsZVRhYnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudGFibGVfX3RhYnMtaXRlbScpLFxuICAgICAgICBkcm9wU3BpbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZHJvcC0tc3BpbnMnKTtcblxuXG4gICAgY29uc29sZS5sb2coYnRuT3BlbilcblxuXG5cbiAgICBjb25zdCB1a0xlbmcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdWtMZW5nJyk7XG4gICAgY29uc3QgZW5MZW5nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2VuTGVuZycpO1xuXG4gICAgY29uc3QgdG9nZ2xlQ2xhc3NlcyA9IChlbGVtZW50cywgY2xhc3NOYW1lKSA9PiBlbGVtZW50cy5mb3JFYWNoKGVsID0+IGVsLmNsYXNzTGlzdC50b2dnbGUoYCR7Y2xhc3NOYW1lfWApKTtcbiAgICBjb25zdCB0b2dnbGVUcmFuc2xhdGVzID0gKGVsZW1lbnRzLCBkYXRhQXR0cikgPT4gZWxlbWVudHMuZm9yRWFjaChlbCA9PiB7XG4gICAgICAgIGVsLnNldEF0dHJpYnV0ZSgnZGF0YS10cmFuc2xhdGUnLCBgJHtkYXRhQXR0cn1gKVxuICAgICAgICBlbC5pbm5lckhUTUwgPSBpMThuRGF0YVtkYXRhQXR0cl0gfHwgJyotLS0tTkVFRCBUTyBCRSBUUkFOU0xBVEVELS0tLSogICBrZXk6ICAnICsgZGF0YUF0dHI7XG4gICAgICAgIGVsLnJlbW92ZUF0dHJpYnV0ZSgnZGF0YS10cmFuc2xhdGUnKTtcbiAgICB9KTtcblxuICAgIGxldCBsb2FkZXJCdG4gPSBmYWxzZVxuXG4gICAgLy8gbGV0IGxvY2FsZSA9IFwiZW5cIlxuICAgIGxldCBsb2NhbGUgPSBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKFwibG9jYWxlXCIpIHx8IFwidWtcIlxuXG4gICAgaWYgKHVrTGVuZykgbG9jYWxlID0gJ3VrJztcbiAgICBpZiAoZW5MZW5nKSBsb2NhbGUgPSAnZW4nO1xuXG4gICAgbGV0IGRlYnVnID0gZmFsc2VcblxuICAgIGlmIChkZWJ1ZykgaGlkZUxvYWRlcigpXG5cbiAgICBsZXQgaTE4bkRhdGEgPSB7fTtcbiAgICBjb25zdCB0cmFuc2xhdGVTdGF0ZSA9IHRydWU7XG4gICAgLy8gbGV0IHVzZXJJZCA9IG51bGw7XG4gICAgbGV0IHVzZXJJZCA9IE51bWJlcihzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKFwidXNlcklkXCIpKSA/PyBudWxsXG5cbiAgICAvLyB1c2VySWQgPSAxMDAzMDAyNjhcblxuICAgIGNvbnN0IGJveCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaGFrZS1ib3gnKTtcbiAgICBjb25zdCBpbml0aWFsRGVsYXkgPSBNYXRoLnJhbmRvbSgpICogNjAwMCArIDQwMDA7XG5cbiAgICAvL3NsaWRlciB2YXJzXG5cbiAgICBjb25zdCBzbGlkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJpemVfX3NsaWRlcicpO1xuICAgIGNvbnN0IGl0ZW1zID0gc2xpZGVyLnF1ZXJ5U2VsZWN0b3JBbGwoJy5wcml6ZV9fc2xpZGUnKTtcbiAgICBjb25zdCBkb3RzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnByaXplX19uYXYtZG90cy1pdGVtJyk7XG4gICAgY29uc3QgYnRuTGVmdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcml6ZV9fbmF2LWxlZnQnKTtcbiAgICBjb25zdCBidG5SaWdodCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcml6ZV9fbmF2LXJpZ2h0Jyk7XG5cbiAgICBsZXQgY3VycmVudEluZGV4ID0gMTtcbiAgICBjb25zdCB0b3RhbEl0ZW1zID0gaXRlbXMubGVuZ3RoO1xuICAgIGxldCBpc0RyYWdnaW5nID0gZmFsc2U7XG4gICAgbGV0IHN0YXJ0WCA9IDA7XG5cbiAgICAvL3NsaWRlciB2YXJzXG5cbiAgICBjb25zdCByZXF1ZXN0ID0gZnVuY3Rpb24gKGxpbmssIGV4dHJhT3B0aW9ucykge1xuICAgICAgICByZXR1cm4gZmV0Y2goYXBpVVJMICsgbGluaywge1xuICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICdBY2NlcHQnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIC4uLihleHRyYU9wdGlvbnMgfHwge30pXG4gICAgICAgIH0pXG4gICAgICAgICAgICAudGhlbihyZXMgPT4ge1xuICAgICAgICAgICAgICAgIGlmICghcmVzLm9rKSB0aHJvdyBuZXcgRXJyb3IoJ0FQSSBlcnJvcicpO1xuICAgICAgICAgICAgICAgIHJldHVybiByZXMuanNvbigpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaChlcnIgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0FQSSByZXF1ZXN0IGZhaWxlZDonLCBlcnIpO1xuXG4gICAgICAgICAgICAgICAgLy8gcmVwb3J0RXJyb3IoZXJyKTtcbiAgICAgICAgICAgICAgICAvL1xuICAgICAgICAgICAgICAgIC8vIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mYXYtcGFnZScpLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgICAgICAgICAgLy8gaWYgKHdpbmRvdy5sb2NhdGlvbi5ocmVmLnN0YXJ0c1dpdGgoXCJodHRwczovL3d3dy5mYXZiZXQuaHIvXCIpKSB7XG4gICAgICAgICAgICAgICAgLy8gICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gJy9wcm9tb2NpamUvcHJvbW9jaWphL3N0dWIvJztcbiAgICAgICAgICAgICAgICAvLyB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9ICcvcHJvbW9zL3Byb21vL3N0dWIvJztcbiAgICAgICAgICAgICAgICAvLyB9XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoZXJyKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaGlkZUxvYWRlcigpe1xuICAgICAgICBsb2FkZXIuY2xhc3NMaXN0LmFkZChcImhpZGVcIilcbiAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvdyA9IFwiYXV0b1wiXG4gICAgICAgIG1haW5QYWdlLmNsYXNzTGlzdC5yZW1vdmUoXCJsb2FkaW5nXCIpXG4gICAgfVxuXG5cblxuICAgIGZ1bmN0aW9uIGluaXRTcGluKCl7XG5cbiAgICAgICAgYnRuT3Blbi50ZXh0Q29udGVudCA9IHRyYW5zbGF0ZUtleShcImxvYWRlclwiKVxuICAgICAgICBjaGFsbGFuZ2VCdG5Qb2ludGVyLmNsYXNzTGlzdC5hZGQoXCJoaWRlXCIpO1xuXG5cbiAgICAgICAgc2VuZFNwaW5SZXF1ZXN0KCkudGhlbihyZXMgPT4ge1xuXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhyZXMpXG5cbiAgICAgICAgICAgIGNvbnN0IHByaXplID0gcmVzLm51bWJlcjtcbiAgICAgICAgICAgIGNvbnN0IHN0cmVha0JvbnVzID0gcmVzLnN0cmVha0JvbnVzIHx8IGRlYnVnO1xuXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhzdHJlYWtCb251cylcblxuICAgICAgICAgICAgYnRuT3Blbi50ZXh0Q29udGVudCA9IHRyYW5zbGF0ZUtleShcIm9wZW5CdG5cIilcblxuICAgICAgICAgICAgYnRuT3Blbi5jbGFzc0xpc3QuYWRkKFwiaGlkZVwiKTtcbiAgICAgICAgICAgIGNoYWxsYW5nZURlcG9zaXRCdG4uY2xhc3NMaXN0LnJlbW92ZShcImhpZGVcIik7XG5cbiAgICAgICAgICAgIHNldFN0cmVha0RheXMoc3RyZWFrQm9udXMpXG5cbiAgICAgICAgICAgIGlmIChwcml6ZSA9PT0gJ3Jlc3BpbicpIG9wZW5Qb3B1cEJ5QXR0cigndW5sdWNreVBvcHVwJywgdHJ1ZSk7XG4gICAgICAgICAgICBpZiAocHJpemUgPT09ICdub3RoaW5nJykgb3BlblBvcHVwQnlBdHRyKCd1bmx1Y2t5UG9wdXAnLCB0cnVlKTtcbiAgICAgICAgICAgIGlmIChwcml6ZSA9PT0gJ3doZWVsQnViYmxlU3BhbnMnKSBvcGVuUG9wdXBCeUF0dHIoJ3ByaXplNTBQb2ludHMnLCB0cnVlKTtcbiAgICAgICAgICAgIGlmIChwcml6ZSA9PT0gJ2lwaG9uZScpIG9wZW5Qb3B1cEJ5QXR0cigncHJpemVJcGhvbmUnLCB0cnVlKTtcbiAgICAgICAgICAgIGlmIChwcml6ZSA9PT0gJ21hY0Jvb2snKSBvcGVuUG9wdXBCeUF0dHIoJ3ByaXplTGFwdG9wJywgdHJ1ZSk7XG4gICAgICAgICAgICBpZiAocHJpemUgPT09ICdhaXJQb2RzJykgb3BlblBvcHVwQnlBdHRyKCdwcml6ZUFpcnBvZHMnLCB0cnVlKTtcbiAgICAgICAgICAgIGlmIChwcml6ZSA9PT0gJ2FwcGxlV2F0Y2gnKSBvcGVuUG9wdXBCeUF0dHIoJ3ByaXplV2F0Y2gnLCB0cnVlKTtcbiAgICAgICAgICAgIGlmIChwcml6ZSA9PT0gJ3JvemV0a2FHaWZ0Q2FyZCcpIG9wZW5Qb3B1cEJ5QXR0cigncHJpemVHaWZ0JywgdHJ1ZSk7XG4gICAgICAgICAgICBpZiAocHJpemUgPT09ICdmczUwJykgb3BlblBvcHVwQnlBdHRyKCdwcml6ZTUwRnNHYXRlT2x5bXAnLCB0cnVlKTtcbiAgICAgICAgICAgIGlmIChwcml6ZSA9PT0gJ3BvaW50czUwJykgb3BlblBvcHVwQnlBdHRyKCc1MFBvaW50c0luZm8nLCB0cnVlKTtcbiAgICAgICAgICAgIGlmIChwcml6ZSA9PT0gJ2ZzMjVfM29ha3MnKSBvcGVuUG9wdXBCeUF0dHIoJ3ByaXplMjVGc0x1Y2t5UGVubnknLCB0cnVlKTtcbiAgICAgICAgICAgIGlmIChwcml6ZSA9PT0gJ2ZzMjVfcGxheXNvbicpIG9wZW5Qb3B1cEJ5QXR0cigncHJpemUyNUZzQ29pblN0cmlrZScsIHRydWUpO1xuICAgICAgICAgICAgaWYgKHByaXplID09PSAnZnM0MCcpIG9wZW5Qb3B1cEJ5QXR0cigncHJpemU0MEZzUGlyb3RzMycsIHRydWUpO1xuICAgICAgICAgICAgaWYgKHByaXplID09PSAnZnMyNV9iZ2FtaW5nJykgb3BlblBvcHVwQnlBdHRyKCdwcml6ZTI1RnNTbm9vcERvZ2cnLCB0cnVlKTtcbiAgICAgICAgICAgIGlmIChwcml6ZSA9PT0gJ2ZzMjVfcHVzaEdhbWluZycpIG9wZW5Qb3B1cEJ5QXR0cigncHJpemUyNUZzQmlnQmFtYm9vJywgdHJ1ZSk7XG4gICAgICAgICAgICBpZiAocHJpemUgPT09ICdmczEwJykgb3BlblBvcHVwQnlBdHRyKCdwcml6ZTEwRnNIaXRTbG90JywgdHJ1ZSk7XG4gICAgICAgICAgICBpZiAocHJpemUgPT09ICdmczMwJykgb3BlblBvcHVwQnlBdHRyKCdwcml6ZTMwRnNTaGluaWdDcm93bicsIHRydWUpO1xuICAgICAgICAgICAgaWYgKHByaXplID09PSAnZnMyNV9oYWNrc2F3Jykgb3BlblBvcHVwQnlBdHRyKCdwcml6ZTI1RnNMZUJhbmRpdCcsIHRydWUpO1xuICAgICAgICAgICAgaWYgKHByaXplID09PSAnZnMyMCcpIG9wZW5Qb3B1cEJ5QXR0cigncHJpemUyMEZzTHVja09mUGFuZGEnLCB0cnVlKTtcblxuXG4gICAgICAgICAgICByZXF1ZXN0KGAvZmF2dXNlci8ke3VzZXJJZH1gKS50aGVuKHVzZXIgPT4ge1xuICAgICAgICAgICAgICAgIHNldFVzZXJQcm9ncmVzcyh1c2VyKVxuICAgICAgICAgICAgICAgIGRpc3BsYXlCZXRzSGlzdG9yeSh1c2VyLnNwaW5zKVxuICAgICAgICAgICAgfSlcblxuXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc2VuZFNwaW5SZXF1ZXN0KCkge1xuICAgICAgICBpZiAoIXVzZXJJZCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGRlYnVnKSB7XG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHtcbiAgICAgICAgICAgICAgICBudW1iZXI6ICdyZXNwaW4nLFxuICAgICAgICAgICAgICAgIHR5cGU6ICd0ZXN0J1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBwYXJhbXMgPSB7dXNlcmlkOiB1c2VySWR9O1xuICAgICAgICByZXR1cm4gcmVxdWVzdCgnL3NwaW4nLCB7XG4gICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHBhcmFtcylcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc2V0U3RyZWFrRGF5cyhzdHJlYWspIHtcbiAgICAgICAgc3RyZWFrRGF5cy5mb3JFYWNoKChkYXksIGkpID0+e1xuICAgICAgICAgICAgZGF5LmNsYXNzTGlzdC5yZW1vdmUoXCJfYWN0aXZlXCIpXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhkYXkpXG4gICAgICAgICAgICBpZihpICsgMSA8PSBzdHJlYWspe1xuICAgICAgICAgICAgICAgIGRheS5jbGFzc0xpc3QuYWRkKCdfYWN0aXZlJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgIHN0cmVha0RheXNQb3B1cC5mb3JFYWNoKChkYXksIGkpID0+e1xuICAgICAgICAgICAgZGF5LmNsYXNzTGlzdC5yZW1vdmUoXCJfYWN0aXZlXCIpXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhkYXkpXG4gICAgICAgICAgICBpZihpICsgMSA8PSBzdHJlYWspe1xuICAgICAgICAgICAgICAgIGRheS5jbGFzc0xpc3QuYWRkKCdfYWN0aXZlJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc2V0VXNlclByb2dyZXNzKHVzZXJEYXRhKXtcbiAgICAgICAgbGV0IHNwaW5BbGxvd2VkID0gdXNlckRhdGEuc3BpbkFsbG93ZWQsXG4gICAgICAgICAgICBwb2ludHNQZXJEYXkgPSB1c2VyRGF0YS5wb2ludHNQZXJEYXksXG4gICAgICAgICAgICBzdHJlYWsgPSB1c2VyRGF0YS5zcGluc1N0cmVhayxcbiAgICAgICAgICAgIGxhc3RVcGRhdGUgPSB1c2VyRGF0YS5sYXN0VXBkYXRlXG5cbiAgICAgICAgY29uc29sZS5sb2coc3RyZWFrRGF5cylcblxuICAgICAgICBzZXRTdHJlYWtEYXlzKHN0cmVhaylcblxuICAgICAgICAvLyBwb2ludHNQZXJEYXkgPSAxMDAwMlxuXG4gICAgICAgIGNvbnN0IHRocmVzaG9sZFBvaW50cyA9IDEwMDBcblxuICAgICAgICBjb25zb2xlLmxvZyhwb2ludHNQZXJEYXkpXG5cbiAgICAgICAgcG9pbnRzUGVyRGF5ID0gcG9pbnRzUGVyRGF5ID4gdGhyZXNob2xkUG9pbnRzID8gdGhyZXNob2xkUG9pbnRzIDogcG9pbnRzUGVyRGF5O1xuXG4gICAgICAgIGlmKCFwb2ludHNQZXJEYXkpIHBvaW50c1BlckRheSA9IDBcblxuXG5cbiAgICAgICAgY291bnRlclBvaW50cy50ZXh0Q29udGVudCA9IGAke3BvaW50c1BlckRheX1gXG5cbiAgICAgICAgbGV0IHByb2dyZXNzID0gTWF0aC5taW4oKHBvaW50c1BlckRheSAvIHRocmVzaG9sZFBvaW50cykgKiAxMDAsIDEwMCk7XG5cbiAgICAgICAgY29uc29sZS5sb2cocHJvZ3Jlc3MpO1xuXG5cbiAgICAgICAgaWYgKHByb2dyZXNzID49IDEwMCkge1xuICAgICAgICAgICAgcHJvZ3Jlc3MgPSAxMDBcbiAgICAgICAgICAgIGNoYWxsYW5nZUJsdXIuY2xhc3NMaXN0LmFkZCgnaGlkZScpXG4gICAgICAgICAgICBwcm9ncmVzc0JveC5jbGFzc0xpc3QucmVtb3ZlKCdfbG9jaycpXG4gICAgICAgICAgICBwcm9ncmVzc0JveC5jbGFzc0xpc3QuYWRkKCdfb3BlbicpXG4gICAgICAgICAgICBjaGFsbGFuZ2VCdG5Qb2ludGVyLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRlXCIpXG4gICAgICAgICAgICBidG5PcGVuLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKVxuICAgICAgICAgICAgY2hhbGxhbmdlRGVwb3NpdEJ0bi5jbGFzc0xpc3QuYWRkKCdoaWRlJylcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImRzYWRhc1wiKVxuICAgICAgICAgICAgY2hhbGxhbmdlQmx1ci5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJylcbiAgICAgICAgICAgIHByb2dyZXNzQm94LmNsYXNzTGlzdC5hZGQoJ19sb2NrJylcbiAgICAgICAgICAgIHByb2dyZXNzQm94LmNsYXNzTGlzdC5yZW1vdmUoJ19vcGVuJylcbiAgICAgICAgICAgIGNoYWxsYW5nZUJ0blBvaW50ZXIuY2xhc3NMaXN0LmFkZChcImhpZGVcIilcbiAgICAgICAgICAgIGJ0bk9wZW4uY2xhc3NMaXN0LmFkZCgnaGlkZScpXG4gICAgICAgICAgICBjaGFsbGFuZ2VEZXBvc2l0QnRuLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKVxuXG5cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnNvbGUubG9nKGDQn9GA0L7Qs9GA0LXRgSDQutC+0YDQuNGB0YLRg9Cy0LDRh9CwOiAke3Byb2dyZXNzLnRvRml4ZWQoMCl9JWApO1xuXG5cbiAgICAgICAgaWYodXNlcklkKXtcbiAgICAgICAgICAgIHNldFByb2dyZXNzV2lkdGgocHJvZ3Jlc3MpO1xuICAgICAgICB9XG5cblxuICAgICAgICBjb25zb2xlLmxvZyh1c2VyRGF0YSlcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzZXRQcm9ncmVzc1dpZHRoKHByb2dyZXNzUGVyY2VudCkge1xuXG4gICAgICAgIHByb2dyZXNzQmFyLnN0eWxlLndpZHRoID0gYCR7cHJvZ3Jlc3NQZXJjZW50fSVgO1xuXG4gICAgICAgIGNvbnN0IGJhclJlY3QgPSBwcm9ncmVzc0Jhci5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgICAgY29uc3QgcGFyZW50UmVjdCA9IGN1cnJlbnRDYXJkc1dyYXAuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG5cbiAgICAgICAgY29uc3QgcmlnaHRFZGdlID0gYmFyUmVjdC5yaWdodCAtIHBhcmVudFJlY3QubGVmdCAtIDU7XG5cbiAgICAgICAgY2hhbGxhbmdlQmx1ci5zdHlsZS5sZWZ0ID0gYCR7cmlnaHRFZGdlfXB4YDtcbiAgICAgICAgY2hhbGxhbmdlQmx1clN0YXR1cy50ZXh0Q29udGVudCA9IGAke3Byb2dyZXNzUGVyY2VudC50b0ZpeGVkKDApfSVgO1xuXG5cbiAgICB9XG4gICAgZnVuY3Rpb24gcmVzb2x2ZVN0YXR1c1RyYW5zbGF0aW9uKHN0YXR1cykge1xuICAgICAgICBpZiAoIXN0YXR1cyB8fCBzdGF0dXMgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJhbnNsYXRlS2V5KCdiZXRVbmRlZmluZWQnKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoc3RhdHVzID09PSAnd2luJykge1xuICAgICAgICAgICAgcmV0dXJuIHRyYW5zbGF0ZUtleSgnd2luQmV0Jyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHN0YXR1cyA9PT0gJ2xvc2UnKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJhbnNsYXRlS2V5KCdsb3NlQmV0Jyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBkaXNwbGF5QmV0c0hpc3RvcnkoYmV0cykge1xuXG4gICAgICAgIGNvbnNvbGUubG9nKGJldHMpO1xuICAgICAgICBjb25zdCBzcGluSXRlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zcGlucy1yb3cnKTtcbiAgICAgICAgY29uc3Qgbm9TcGluSXRlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uby1zcGlucycpO1xuICAgICAgICBjb25zdCBub0JldHMgPSAhYmV0cyB8fCBiZXRzLmxlbmd0aCA9PT0gMDtcblxuICAgICAgICBpZiAobm9CZXRzICYmICFkZWJ1Zykge1xuICAgICAgICAgICAgc3Bpbkl0ZW0uY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xuICAgICAgICAgICAgbm9TcGluSXRlbS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJyk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZihkZWJ1Zyl7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oXCJkZWJ1ZyBiZXQgaGlzdG9yeVwiKVxuICAgICAgICAgICAgcmV0dXJuO1xuXG4gICAgICAgIH1cblxuICAgICAgICBzcGluSXRlbS5pbm5lckhUTUwgPVxuICAgICAgICAgICAgYFxuICAgICAgIDxkaXYgY2xhc3M9XCJzcGlucy1yb3ctaGVhZFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRlbnQtZGF0ZVwiIGRhdGEtdHJhbnNsYXRlPVwibXlCZXREYXRlXCI+PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGVudC1wcml6ZVwiIGRhdGEtdHJhbnNsYXRlPVwibXlCZXRJZFwiPjwvZGl2PlxuPCEtLSAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb250ZW50LXN0YXR1c1wiIGRhdGEtdHJhbnNsYXRlPVwibXlCZXRTdGF0dXNcIj48L2Rpdj4tLT5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIGA7XG4gICAgICAgIHNwaW5JdGVtLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKTtcbiAgICAgICAgbm9TcGluSXRlbS5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XG5cbiAgICAgICAgbGV0IHVwZCA9IDA7XG5cbiAgICAgICAgYmV0cy5mb3JFYWNoKHNwaW4gPT4ge1xuICAgICAgICAgICAgY29uc3Qgc3BpbkRhdGUgPSBuZXcgRGF0ZShzcGluLmRhdGUpO1xuICAgICAgICAgICAgY29uc3QgZm9ybWF0dGVkRGF0ZSA9IHNwaW5EYXRlLnRvTG9jYWxlRGF0ZVN0cmluZygndWstVUEnKS5zbGljZSgwLCA1KTtcbiAgICAgICAgICAgIGNvbnN0IHN0YXR1cyA9IHJlc29sdmVTdGF0dXNUcmFuc2xhdGlvbihzcGluLnN0YXR1cyk7XG5cbiAgICAgICAgICAgIGlmIChzdGF0dXMpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBzcGluRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgIHNwaW5FbGVtZW50LmNsYXNzTGlzdC5hZGQoJ3NwaW5zLXJvdy1pdGVtJyk7XG5cbiAgICAgICAgICAgICAgICBjb25zdCBpc1dpbiA9IHNwaW4uc3RhdHVzID09PSBcIndpblwiO1xuICAgICAgICAgICAgICAgIGNvbnN0IHN0YXR1c0NsYXNzID0gaXNXaW4gPyAnX2RvbmUnIDogJyc7XG5cbiAgICAgICAgICAgICAgICBzcGluRWxlbWVudC5pbm5lckhUTUwgPSBgXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiY29udGVudC1kYXRlXCI+JHtmb3JtYXR0ZWREYXRlfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJjb250ZW50LXByaXplXCI+JHtzcGluLm5hbWV9PC9zcGFuPlxuPCEtLSAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJjb250ZW50LXN0YXR1cyAke3N0YXR1c0NsYXNzfVwiPjwvc3Bhbj4tLT5cbiAgICAgICAgICAgICAgICBgO1xuICAgICAgICAgICAgICAgIHNwaW5JdGVtLmFwcGVuZENoaWxkKHNwaW5FbGVtZW50KTtcbiAgICAgICAgICAgICAgICB1cGQrKztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKHVwZCA9PT0gMCkge1xuICAgICAgICAgICAgc3Bpbkl0ZW0uY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xuICAgICAgICAgICAgbm9TcGluSXRlbS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzZXRCZXRIaXN0b3J5KHN0YWdlTnVtKXtcbiAgICAgICAgLy8gcmVxdWVzdChcIi9iZXRzSGlzdG9yeVwiKS50aGVuKChyZXMpID0+IHtcbiAgICAgICAgLy8gICAgIGNvbnN0IHVzZXIgPSByZXMuZmluZCh1c2VyID0+IHVzZXIudXNlcmlkID09PSB1c2VySWQpO1xuICAgICAgICAvLyAgICAgY29uc3QgYmV0cyA9IHVzZXI/LmJldHNcbiAgICAgICAgLy8gICAgIGRpc3BsYXlCZXRzSGlzdG9yeShiZXRzKVxuICAgICAgICAvLyB9KVxuICAgIH1cblxuXG4gICAgYXN5bmMgZnVuY3Rpb24gaW5pdCgpIHtcbiAgICAgICAgbGV0IGF0dGVtcHRzID0gMDtcbiAgICAgICAgY29uc3QgbWF4QXR0ZW1wdHMgPSAyMDtcbiAgICAgICAgY29uc3QgYXR0ZW1wdEludGVydmFsID0gNTA7XG5cbiAgICAgICAgZnVuY3Rpb24gdHJ5RGV0ZWN0VXNlcklkKCkge1xuICAgICAgICAgICAgaWYgKHdpbmRvdy5zdG9yZSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHN0YXRlID0gd2luZG93LnN0b3JlLmdldFN0YXRlKCk7XG4gICAgICAgICAgICAgICAgdXNlcklkID0gc3RhdGUuYXV0aC5pc0F1dGhvcml6ZWQgJiYgc3RhdGUuYXV0aC5pZCB8fCAnJztcbiAgICAgICAgICAgIH0gZWxzZSBpZiAod2luZG93LmdfdXNlcl9pZCkge1xuICAgICAgICAgICAgICAgIHVzZXJJZCA9IHdpbmRvdy5nX3VzZXJfaWQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBxdWlja0NoZWNrQW5kUmVuZGVyKCkge1xuICAgICAgICAgICAgY2hlY2tVc2VyQXV0aCgpO1xuXG5cblxuICAgICAgICAgICAgLy8gb3BlblBvcHVwQnlBdHRyKFwicHJpemVMYXB0b3BcIiwgdHJ1ZSlcblxuICAgICAgICAgICAgYnRuT3Blbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGluaXRTcGluKTtcblxuICAgICAgICAgICAgLy8gc2V0QmV0SGlzdG9yeSgpXG5cbiAgICAgICAgICAgIHRhYmxlVGFicy5mb3JFYWNoKCh0YWIsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgaWYoaW5kZXggKyAxID09PSBhY3RpdmVXZWVrKXtcbiAgICAgICAgICAgICAgICAgICAgdGFiLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuICAgICAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgICAgICB0YWIuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRhYi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+e1xuICAgICAgICAgICAgICAgICAgICB0YWJsZVRhYnMuZm9yRWFjaCh0ID0+IHQuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJykpO1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh0YWJsZVRhYnMpXG5cbiAgICAgICAgICAgICAgICAgICAgbGV0IHRhYk51bSA9IE51bWJlcih0YWIuZ2V0QXR0cmlidXRlKFwiZGF0YS13ZWVrXCIpKVxuICAgICAgICAgICAgICAgICAgICB0YWIuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gICAgICAgICAgICAgICAgICAgIHJlbmRlclVzZXJzKHRhYk51bSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICByZW5kZXJVc2VycyhhY3RpdmVXZWVrKVxuXG4gICAgICAgICAgICBzZXRUaW1lb3V0KGhpZGVMb2FkZXIsIDEwMDApO1xuXG4gICAgICAgICAgICBTZXRTbGlkZXJXaWR0aEJsdXIoKVxuXG4gICAgICAgICAgICBzZXRUaW1lb3V0KHRyaWdnZXJTaGFrZSwgaW5pdGlhbERlbGF5KTtcblxuICAgICAgICAgICAgcGFydGljaXBhdGVCdG5zLmZvckVhY2goYnRuID0+IHtcbiAgICAgICAgICAgICAgICBidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBwYXJ0aWNpcGF0ZSk7XG4gICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucG9wdXBfX2Nsb3NlJykuZm9yRWFjaChjbG9zZUJ0biA9PiB7XG4gICAgICAgICAgICAgICAgY2xvc2VCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjbG9zZUFsbFBvcHVwcyk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm9wZW4tYnRuJykuZm9yRWFjaChidG4gPT4ge1xuICAgICAgICAgICAgICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcG9wdXBBdHRyID0gYnRuLmdldEF0dHJpYnV0ZSgnZGF0YS1wb3B1cCcpO1xuICAgICAgICAgICAgICAgICAgICBvcGVuUG9wdXBCeUF0dHIocG9wdXBBdHRyKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucG9wdXBzJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IG9wZW5Qb3B1cEVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBvcHVwOm5vdCguaGlkZSknKTtcbiAgICAgICAgICAgICAgICBpZiAob3BlblBvcHVwRWwgJiYgIW9wZW5Qb3B1cEVsLmNvbnRhaW5zKGUudGFyZ2V0KSkge1xuICAgICAgICAgICAgICAgICAgICBjbG9zZUFsbFBvcHVwcygpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuXG5cbiAgICAgICAgICAgIHVwZGF0ZVNsaWRlcigpO1xuXG4gICAgICAgICAgICBzbGlkZXIuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgaGFuZGxlU3RhcnQpO1xuICAgICAgICAgICAgc2xpZGVyLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIGhhbmRsZU1vdmUpO1xuICAgICAgICAgICAgc2xpZGVyLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCBoYW5kbGVFbmQpO1xuICAgICAgICAgICAgc2xpZGVyLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCBoYW5kbGVFbmQpO1xuXG4gICAgICAgICAgICBzbGlkZXIuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsIGhhbmRsZVN0YXJ0KTtcbiAgICAgICAgICAgIHNsaWRlci5hZGRFdmVudExpc3RlbmVyKCd0b3VjaG1vdmUnLCBoYW5kbGVNb3ZlKTtcbiAgICAgICAgICAgIHNsaWRlci5hZGRFdmVudExpc3RlbmVyKCd0b3VjaGVuZCcsIGhhbmRsZUVuZCk7XG5cbiAgICAgICAgICAgIGJ0bkxlZnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBtb3ZlU2xpZGVyKC0xKSk7XG4gICAgICAgICAgICBidG5SaWdodC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IG1vdmVTbGlkZXIoMSkpO1xuICAgICAgICAgICAgLy8gZG90cy5mb3JFYWNoKChkb3QsIGluZGV4KSA9PiBkb3QuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBnb1RvU2xpZGUoaW5kZXgpKSk7XG5cblxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3Qgd2FpdEZvclVzZXJJZCA9IG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBpbnRlcnZhbCA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0cnlEZXRlY3RVc2VySWQoKTtcbiAgICAgICAgICAgICAgICBpZiAodXNlcklkIHx8IGF0dGVtcHRzID49IG1heEF0dGVtcHRzKSB7XG4gICAgICAgICAgICAgICAgICAgIHF1aWNrQ2hlY2tBbmRSZW5kZXIoKTtcbiAgICAgICAgICAgICAgICAgICAgY2xlYXJJbnRlcnZhbChpbnRlcnZhbCk7XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYXR0ZW1wdHMrKztcbiAgICAgICAgICAgIH0sIGF0dGVtcHRJbnRlcnZhbCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGF3YWl0IHdhaXRGb3JVc2VySWQ7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbG9hZFRyYW5zbGF0aW9ucygpIHtcbiAgICAgICAgcmV0dXJuIHJlcXVlc3QoYC9uZXctdHJhbnNsYXRlcy8ke2xvY2FsZX1gKVxuICAgICAgICAgICAgLnRoZW4oanNvbiA9PiB7XG4gICAgICAgICAgICAgICAgaTE4bkRhdGEgPSBqc29uO1xuICAgICAgICAgICAgICAgIHRyYW5zbGF0ZSgpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHRhcmdldE5vZGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNhbUNoaWxsXCIpO1xuICAgICAgICAgICAgICAgIGNvbnN0IG11dGF0aW9uT2JzZXJ2ZXIgPSBuZXcgTXV0YXRpb25PYnNlcnZlcihmdW5jdGlvbiAobXV0YXRpb25zKSB7XG4gICAgICAgICAgICAgICAgICAgIG11dGF0aW9uT2JzZXJ2ZXIuZGlzY29ubmVjdCgpO1xuICAgICAgICAgICAgICAgICAgICB0cmFuc2xhdGUoKTtcbiAgICAgICAgICAgICAgICAgICAgbXV0YXRpb25PYnNlcnZlci5vYnNlcnZlKHRhcmdldE5vZGUsIHsgY2hpbGRMaXN0OiB0cnVlLCBzdWJ0cmVlOiB0cnVlIH0pO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIG11dGF0aW9uT2JzZXJ2ZXIub2JzZXJ2ZSh0YXJnZXROb2RlLCB7XG4gICAgICAgICAgICAgICAgICAgIGNoaWxkTGlzdDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgc3VidHJlZTogdHJ1ZVxuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICB9KTtcbiAgICB9XG5cblxuICAgIGZ1bmN0aW9uIFNldFNsaWRlcldpZHRoQmx1cigpe1xuICAgICAgICBjb25zdCBzbGlkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2hhbGxhbmdlX19jdXJyZW50Jyk7XG4gICAgICAgIGNvbnN0IHNsaWRlcyA9IHNsaWRlci5xdWVyeVNlbGVjdG9yQWxsKCcuY2hhbGxhbmdlX19jdXJyZW50LWl0ZW0nKTtcbiAgICAgICAgY29uc3QgdGFicyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jaGFsbGFuZ2VfX3RhYnMtaXRlbScpO1xuICAgICAgICBjb25zdCBkb3RzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNoYWxsYW5nZV9fbmF2LWRvdHMtaXRlbScpO1xuICAgICAgICBjb25zdCBidG5MZWZ0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNoYWxsYW5nZV9fbmF2LWxlZnQnKTtcbiAgICAgICAgY29uc3QgYnRuUmlnaHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2hhbGxhbmdlX19uYXYtcmlnaHQnKTtcblxuICAgICAgICBsZXQgY3VycmVudEluZGV4ID0gY3VycmVudERheU51bWJlciAtIDE7XG5cbiAgICAgICAgY29uc29sZS5sb2coY3VycmVudERheU51bWJlcilcblxuICAgICAgICBmdW5jdGlvbiB1cGRhdGVTbGlkZXIoaW5kZXgpIHtcbiAgICAgICAgICAgIHNsaWRlcy5mb3JFYWNoKHNsaWRlID0+IHNsaWRlLmNsYXNzTGlzdC5yZW1vdmUoJ19hY3RpdmUnKSk7XG4gICAgICAgICAgICB0YWJzLmZvckVhY2godGFiID0+IHRhYi5jbGFzc0xpc3QucmVtb3ZlKCdfYWN0aXZlJykpO1xuICAgICAgICAgICAgZG90cy5mb3JFYWNoKGRvdCA9PiBkb3QuY2xhc3NMaXN0LnJlbW92ZSgnX2FjdGl2ZScpKTtcblxuICAgICAgICAgICAgc2xpZGVzW2luZGV4XS5jbGFzc0xpc3QuYWRkKCdfYWN0aXZlJyk7XG4gICAgICAgICAgICB0YWJzW2luZGV4XS5jbGFzc0xpc3QuYWRkKCdfYWN0aXZlJyk7XG4gICAgICAgICAgICBkb3RzW2luZGV4XS5jbGFzc0xpc3QuYWRkKCdfYWN0aXZlJyk7XG4gICAgICAgIH1cblxuICAgICAgICB1cGRhdGVTbGlkZXIoY3VycmVudERheU51bWJlciAtIDEpO1xuICAgICAgICB0YWJzLmZvckVhY2goKHRhYiwgaSkgPT57XG4gICAgICAgICAgICBpZihpICsgMSA8PSBjdXJyZW50RGF5TnVtYmVyKXtcbiAgICAgICAgICAgICAgICB0YWIuY2xhc3NMaXN0LmFkZCgnX29wZW4nKTtcbiAgICAgICAgICAgICAgICB0YWIuY2xhc3NMaXN0LnJlbW92ZSgnX2xvY2snKTtcblxuICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgdGFiLmNsYXNzTGlzdC5yZW1vdmUoJ19hY3RpdmUnKTtcbiAgICAgICAgICAgICAgICB0YWIuY2xhc3NMaXN0LmFkZCgnX2xvY2snKTtcbiAgICAgICAgICAgICAgICB0YWIuY2xhc3NMaXN0LnJlbW92ZSgnX29wZW4nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmKGkgKyAxID09PSBjdXJyZW50RGF5TnVtYmVyKXtcbiAgICAgICAgICAgICAgICB0YWIuY2xhc3NMaXN0LmFkZCgnX2FjdGl2ZScpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9ICk7XG5cbiAgICAgICAgZnVuY3Rpb24gbW92ZUxlZnQoKSB7XG4gICAgICAgICAgICBjdXJyZW50SW5kZXggPSAoY3VycmVudEluZGV4IC0gMSArIHNsaWRlcy5sZW5ndGgpICUgc2xpZGVzLmxlbmd0aDtcbiAgICAgICAgICAgIHVwZGF0ZVNsaWRlcihjdXJyZW50SW5kZXgpO1xuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gbW92ZVJpZ2h0KCkge1xuICAgICAgICAgICAgY3VycmVudEluZGV4ID0gKGN1cnJlbnRJbmRleCArIDEpICUgc2xpZGVzLmxlbmd0aDtcbiAgICAgICAgICAgIHVwZGF0ZVNsaWRlcihjdXJyZW50SW5kZXgpO1xuICAgICAgICB9XG5cbiAgICAgICAgYnRuTGVmdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIG1vdmVMZWZ0KTtcbiAgICAgICAgYnRuUmlnaHQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBtb3ZlUmlnaHQpO1xuXG4gICAgICAgIHRhYnMuZm9yRWFjaCgodGFiLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgdGFiLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgIGN1cnJlbnRJbmRleCA9IGluZGV4O1xuICAgICAgICAgICAgICAgIHVwZGF0ZVNsaWRlcihjdXJyZW50SW5kZXgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGRvdHMuZm9yRWFjaCgoZG90LCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgZG90LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgIGN1cnJlbnRJbmRleCA9IGluZGV4O1xuICAgICAgICAgICAgICAgIHVwZGF0ZVNsaWRlcihjdXJyZW50SW5kZXgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY2hlY2tVc2VyQXV0aCgpIHtcbiAgICAgICAgY29uc3QgbG9hZFRpbWUgPSAyMDA7XG4gICAgICAgIHJlcXVlc3QoYC9mYXZ1c2VyLyR7dXNlcklkfWApLnRoZW4oKHVzZXIpID0+IHtcblxuICAgICAgICAgICAgZGlzcGxheUJldHNIaXN0b3J5KHVzZXIuc3BpbnMpXG5cbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHNob3dFbGVtZW50cyA9IChlbGVtZW50cykgPT4gZWxlbWVudHMuZm9yRWFjaChlbCA9PiBlbC5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJykpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGhpZGVFbGVtZW50cyA9IChlbGVtZW50cykgPT4gZWxlbWVudHMuZm9yRWFjaChlbCA9PiBlbC5jbGFzc0xpc3QuYWRkKCdoaWRlJykpO1xuXG4gICAgICAgICAgICAgICAgZHJvcFNwaW5zLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcbiAgICAgICAgICAgICAgICBjaGFsbGFuZ2VCdG5Qb2ludGVyLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcblxuXG4gICAgICAgICAgICAgICAgaWYgKCF1c2VySWQpIHtcbiAgICAgICAgICAgICAgICAgICAgaGlkZUVsZW1lbnRzKHBhcnRpY2lwYXRlQnRucyk7XG4gICAgICAgICAgICAgICAgICAgIGhpZGVFbGVtZW50cyhyZWRpcmVjdEJ0bnMpO1xuICAgICAgICAgICAgICAgICAgICBzaG93RWxlbWVudHModW5hdXRoTXNncyk7XG4gICAgICAgICAgICAgICAgICAgIGhpZGVMb2FkZXIoKTtcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudENhcmRzV3JhcC5jbGFzc0xpc3QuYWRkKCdfdW5hdXRoJyk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoZmFsc2UpO1xuICAgICAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgICAgICBjdXJyZW50Q2FyZHNXcmFwLmNsYXNzTGlzdC5yZW1vdmUoJ191bmF1dGgnKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBoaWRlRWxlbWVudHModW5hdXRoTXNncyk7XG5cbiAgICAgICAgICAgICAgICBpZiAodXNlci51c2VyaWQpIHtcbiAgICAgICAgICAgICAgICAgICAgaGlkZUVsZW1lbnRzKHBhcnRpY2lwYXRlQnRucyk7XG4gICAgICAgICAgICAgICAgICAgIHNob3dFbGVtZW50cyhyZWRpcmVjdEJ0bnMpO1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5QmV0c0hpc3RvcnkodXNlci5zcGlucylcbiAgICAgICAgICAgICAgICAgICAgc2V0VXNlclByb2dyZXNzKHVzZXIpO1xuICAgICAgICAgICAgICAgICAgICAvLyBjaGFsbGFuZ2VCdG5Qb2ludGVyLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKTtcbiAgICAgICAgICAgICAgICAgICAgZHJvcFNwaW5zLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBzaG93RWxlbWVudHMocGFydGljaXBhdGVCdG5zKTtcbiAgICAgICAgICAgICAgICAgICAgaGlkZUVsZW1lbnRzKHJlZGlyZWN0QnRucyk7XG4gICAgICAgICAgICAgICAgfVxuXG5cblxuXG4gICAgICAgICAgICAgICAgaGlkZUxvYWRlcigpO1xuXG5cblxuXG5cbiAgICAgICAgICAgIH0sIGxvYWRUaW1lKVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJlcG9ydEVycm9yKGVycikge1xuICAgICAgICBjb25zdCByZXBvcnREYXRhID0ge1xuICAgICAgICAgICAgb3JpZ2luOiB3aW5kb3cubG9jYXRpb24uaHJlZixcbiAgICAgICAgICAgIHVzZXJpZDogdXNlcklkLFxuICAgICAgICAgICAgZXJyb3JUZXh0OiBlcnI/LmVycm9yIHx8IGVycj8udGV4dCB8fCBlcnI/Lm1lc3NhZ2UgfHwgJ1Vua25vd24gZXJyb3InLFxuICAgICAgICAgICAgdHlwZTogZXJyPy5uYW1lIHx8ICdVbmtub3duRXJyb3InLFxuICAgICAgICAgICAgc3RhY2s6IGVycj8uc3RhY2sgfHwgJydcbiAgICAgICAgfTtcblxuICAgICAgICBmZXRjaCgnaHR0cHM6Ly9mYXYtcHJvbS5jb20vYXBpLWNtcy9yZXBvcnRzL2FkZCcsIHtcbiAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShyZXBvcnREYXRhKVxuICAgICAgICB9KS5jYXRjaChjb25zb2xlLndhcm4pO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHRyYW5zbGF0ZSgpIHtcbiAgICAgICAgY29uc3QgZWxlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS10cmFuc2xhdGVdJylcbiAgICAgICAgaWYgKGVsZW1zICYmIGVsZW1zLmxlbmd0aCkge1xuICAgICAgICAgICAgaWYodHJhbnNsYXRlU3RhdGUpe1xuICAgICAgICAgICAgICAgIGVsZW1zLmZvckVhY2goZWxlbSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGtleSA9IGVsZW0uZ2V0QXR0cmlidXRlKCdkYXRhLXRyYW5zbGF0ZScpO1xuICAgICAgICAgICAgICAgICAgICBlbGVtLmlubmVySFRNTCA9IGkxOG5EYXRhW2tleV0gfHwgJyotLS0tTkVFRCBUTyBCRSBUUkFOU0xBVEVELS0tLSogICBrZXk6ICAnICsga2V5O1xuICAgICAgICAgICAgICAgICAgICBpZiAoaTE4bkRhdGFba2V5XSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZWxlbS5yZW1vdmVBdHRyaWJ1dGUoJ2RhdGEtdHJhbnNsYXRlJyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJ0cmFuc2xhdGlvbiB3b3JrcyFcIilcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZWZyZXNoTG9jYWxpemVkQ2xhc3MobWFpblBhZ2UpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJlZnJlc2hMb2NhbGl6ZWRDbGFzcyhlbGVtZW50KSB7XG4gICAgICAgIGlmICghZWxlbWVudCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGZvciAoY29uc3QgbGFuZyBvZiBbJ3VrJywgJ2VuJ10pIHtcbiAgICAgICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShsYW5nKTtcbiAgICAgICAgfVxuICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQobG9jYWxlKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiByZW5kZXJVc2Vycyh3ZWVrKSB7XG4gICAgICAgIHJlcXVlc3QoYC91c2Vycy8ke3dlZWt9YClcbiAgICAgICAgICAgIC50aGVuKGRhdGEgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHVzZXJzID0gZGF0YTtcbiAgICAgICAgICAgICAgICBwb3B1bGF0ZVVzZXJzVGFibGUodXNlcnMsIHVzZXJJZCwgd2Vlayk7XG4gICAgICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBwb3B1bGF0ZVVzZXJzVGFibGUodXNlcnMsIGN1cnJlbnRVc2VySWQsIHdlZWspIHtcbiAgICAgICAgcmVzdWx0c1RhYmxlLmlubmVySFRNTCA9ICcnO1xuICAgICAgICByZXN1bHRzVGFibGVPdGhlci5pbm5lckhUTUwgPSAnJztcbiAgICAgICAgaWYgKCF1c2Vycz8ubGVuZ3RoKSByZXR1cm47XG4gICAgICAgIGNvbnN0IGN1cnJlbnRVc2VyID0gdXNlcnMuZmluZCh1c2VyID0+IHVzZXIudXNlcmlkID09PSBjdXJyZW50VXNlcklkKTtcbiAgICAgICAgY29uc3QgaXNUb3BDdXJyZW50VXNlciA9IGN1cnJlbnRVc2VyICYmIHVzZXJzLnNsaWNlKDAsIDEwKS5zb21lKHVzZXIgPT4gdXNlci51c2VyaWQgPT09IGN1cnJlbnRVc2VySWQpO1xuICAgICAgICBjb25zdCB0b3BVc2Vyc0xlbmd0aCA9ICF1c2VySWQgfHwgaXNUb3BDdXJyZW50VXNlciAgPyAxMyA6IDEwO1xuICAgICAgICBjb25zdCB0b3BVc2VycyA9IHVzZXJzLnNsaWNlKDAsIHRvcFVzZXJzTGVuZ3RoKTtcbiAgICAgICAgdG9wVXNlcnMuZm9yRWFjaCh1c2VyID0+IHtcbiAgICAgICAgICAgIHJlc3VsdHNUYWJsZU90aGVyLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcbiAgICAgICAgICAgIGRpc3BsYXlVc2VyKHVzZXIsIHVzZXIudXNlcmlkID09PSBjdXJyZW50VXNlcklkLCByZXN1bHRzVGFibGUsIHRvcFVzZXJzLCBpc1RvcEN1cnJlbnRVc2VyLCB3ZWVrKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGlmICghaXNUb3BDdXJyZW50VXNlciAmJiBjdXJyZW50VXNlcikge1xuICAgICAgICAgICAgcmVzdWx0c1RhYmxlT3RoZXIuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpO1xuICAgICAgICAgICAgZGlzcGxheVVzZXIoY3VycmVudFVzZXIsIHRydWUsIHJlc3VsdHNUYWJsZU90aGVyLCB1c2VycywgZmFsc2UsIHdlZWspO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZGlzcGxheVVzZXIodXNlciwgaXNDdXJyZW50VXNlciwgdGFibGUsIHVzZXJzLCBpc1RvcEN1cnJlbnRVc2VyLCB3ZWVrKSB7XG4gICAgICAgIGNvbnN0IHJlbmRlclJvdyA9ICh1c2VyRGF0YSwgb3B0aW9ucyA9IHt9KSA9PiB7XG4gICAgICAgICAgICBjb25zdCB7IGhpZ2hsaWdodCA9IGZhbHNlLCBuZWlnaGJvciA9IGZhbHNlIH0gPSBvcHRpb25zO1xuICAgICAgICAgICAgY29uc3QgdXNlclJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgdXNlclJvdy5jbGFzc0xpc3QuYWRkKCd0YWJsZV9fcm93Jyk7XG5cbiAgICAgICAgICAgIGNvbnN0IHVzZXJQbGFjZSA9IHVzZXJzLmluZGV4T2YodXNlckRhdGEpICsgMTtcbiAgICAgICAgICAgIC8vIGNvbnN0IHVzZXJQbGFjZSA9IDM1XG4gICAgICAgICAgICBjb25zdCBwcml6ZUtleSA9IGRlYnVnID8gbnVsbCA6IGdldFByaXplVHJhbnNsYXRpb25LZXkodXNlclBsYWNlLCB3ZWVrKTtcblxuICAgICAgICAgICAgaWYgKHVzZXJQbGFjZSA8PSAzKSB7XG4gICAgICAgICAgICAgICAgdXNlclJvdy5jbGFzc0xpc3QuYWRkKGBwbGFjZSR7dXNlclBsYWNlfWApO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoaGlnaGxpZ2h0IHx8IGlzQ3VycmVudFVzZXIgJiYgIW5laWdoYm9yKSB7XG4gICAgICAgICAgICAgICAgdXNlclJvdy5jbGFzc0xpc3QuYWRkKCd5b3UnKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAobmVpZ2hib3IpIHtcbiAgICAgICAgICAgICAgICB1c2VyUm93LmNsYXNzTGlzdC5hZGQoJ19uZWlnaGJvcicpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB1c2VyUm93LmlubmVySFRNTCA9IGBcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0YWJsZV9fcm93LWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAke3VzZXJQbGFjZSA8IDEwID8gJzAnICsgdXNlclBsYWNlIDogdXNlclBsYWNlfVxuICAgICAgICAgICAgICAgICR7aXNDdXJyZW50VXNlciAmJiAhbmVpZ2hib3IgPyAnPHNwYW4gY2xhc3M9XCJ5b3VcIj4nICsgdHJhbnNsYXRlS2V5KFwieW91XCIpICsgJzwvc3Bhbj4nIDogJyd9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0YWJsZV9fcm93LWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAke2lzQ3VycmVudFVzZXIgJiYgIW5laWdoYm9yID8gdXNlckRhdGEudXNlcmlkIDogbWFza1VzZXJJZCh1c2VyRGF0YS51c2VyaWQpfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGFibGVfX3Jvdy1pdGVtXCI+XG4gICAgICAgICAgICAgICAgJHt1c2VyRGF0YS5wb2ludHN9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0YWJsZV9fcm93LWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAke3ByaXplS2V5ID8gdHJhbnNsYXRlS2V5KHByaXplS2V5KSA6ICcgLSAnfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGFibGVfX3Jvdy1pdGVtXCI+XG4gICAgICAgICAgICAgICAgJHtwcml6ZUtleSA/IGdldFdhZ2VyQnlQbGFjZSh1c2VyUGxhY2UpIDogJyAtICd9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgYDtcblxuICAgICAgICAgICAgdGFibGUuYXBwZW5kKHVzZXJSb3cpO1xuICAgICAgICB9O1xuICAgICAgICBpZiAoaXNDdXJyZW50VXNlciAmJiAhaXNUb3BDdXJyZW50VXNlcikge1xuICAgICAgICAgICAgY29uc3QgaW5kZXggPSB1c2Vycy5pbmRleE9mKHVzZXIpO1xuICAgICAgICAgICAgaWYgKHVzZXJzW2luZGV4IC0gMV0pIHtcbiAgICAgICAgICAgICAgICByZW5kZXJSb3codXNlcnNbaW5kZXggLSAxXSwgeyBuZWlnaGJvcjogdHJ1ZSB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJlbmRlclJvdyh1c2VyLCB7IGhpZ2hsaWdodDogdHJ1ZSB9KTtcbiAgICAgICAgICAgIGlmICh1c2Vyc1tpbmRleCArIDFdKSB7XG4gICAgICAgICAgICAgICAgcmVuZGVyUm93KHVzZXJzW2luZGV4ICsgMV0sIHsgbmVpZ2hib3I6IHRydWUgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZW5kZXJSb3codXNlcik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiB0cmFuc2xhdGVLZXkoa2V5LCBkZWZhdWx0VmFsdWUpIHtcbiAgICAgICAgaWYgKCFrZXkpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBsZXQgbmVlZEtleSA9IGRlYnVnID8ga2V5IDogYCotLS0tTkVFRCBUTyBCRSBUUkFOU0xBVEVELS0tLSoga2V5OiAke2tleX1gXG5cbiAgICAgICAgZGVmYXVsdFZhbHVlID0gIG5lZWRLZXkgfHwga2V5O1xuICAgICAgICByZXR1cm4gaTE4bkRhdGFba2V5XSB8fCBkZWZhdWx0VmFsdWU7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbWFza1VzZXJJZCh1c2VySWQpIHtcbiAgICAgICAgcmV0dXJuIFwiKipcIiArIHVzZXJJZC50b1N0cmluZygpLnNsaWNlKDIpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldFByaXplVHJhbnNsYXRpb25LZXkocGxhY2UpIHtcbiAgICAgICAgaWYgKHBsYWNlID49IDEgJiYgcGxhY2UgPD0gMTApIHJldHVybiBgcHJpemVfJHtwbGFjZX1gO1xuICAgICAgICBpZiAocGxhY2UgPj0gMTEgJiYgcGxhY2UgPD0gMjApIHJldHVybiAncHJpemVfMTEtMjAnO1xuICAgICAgICBpZiAocGxhY2UgPj0gMjEgJiYgcGxhY2UgPD0gMzApIHJldHVybiAncHJpemVfMjEtMzAnO1xuICAgICAgICBpZiAocGxhY2UgPj0gMzEgJiYgcGxhY2UgPD0gNDApIHJldHVybiAncHJpemVfMzEtNDAnO1xuICAgICAgICBpZiAocGxhY2UgPj0gNDEgJiYgcGxhY2UgPD0gNTApIHJldHVybiAncHJpemVfNDEtNTAnO1xuICAgICAgICBpZiAocGxhY2UgPj0gNTEgJiYgcGxhY2UgPD0gNzApIHJldHVybiAncHJpemVfNTEtNzAnO1xuICAgICAgICBpZiAocGxhY2UgPj0gNzEgJiYgcGxhY2UgPD0gMTAwKSByZXR1cm4gJ3ByaXplXzcxLTEwMCc7XG4gICAgICAgIGlmIChwbGFjZSA+PSAxMDEgJiYgcGxhY2UgPD0gMTUwKSByZXR1cm4gJ3ByaXplXzEwMS0xNTAnO1xuICAgICAgICBpZiAocGxhY2UgPj0gMTUxICYmIHBsYWNlIDw9IDIwMCkgcmV0dXJuICdwcml6ZV8xNTEtMjAwJztcbiAgICAgICAgaWYgKHBsYWNlID49IDIwMSAmJiBwbGFjZSA8PSAyNTApIHJldHVybiAncHJpemVfMjAxLTI1MCc7XG4gICAgICAgIGlmIChwbGFjZSA+PSAyNTEgJiYgcGxhY2UgPD0gMzAwKSByZXR1cm4gJ3ByaXplXzI1MS0zMDAnO1xuICAgICAgICBpZiAocGxhY2UgPj0gMzAxICYmIHBsYWNlIDw9IDM1MCkgcmV0dXJuICdwcml6ZV8zMDEtMzUwJztcbiAgICAgICAgaWYgKHBsYWNlID49IDM1MSAmJiBwbGFjZSA8PSA0MDApIHJldHVybiAncHJpemVfMzUxLTQwMCc7XG4gICAgICAgIGlmIChwbGFjZSA+PSA0MDEgJiYgcGxhY2UgPD0gNDUwKSByZXR1cm4gJ3ByaXplXzQwMS00NTAnO1xuICAgICAgICBpZiAocGxhY2UgPj0gNDUxICYmIHBsYWNlIDw9IDUwMCkgcmV0dXJuICdwcml6ZV80NTEtNTAwJztcbiAgICAgICAgaWYgKHBsYWNlID49IDUwMSAmJiBwbGFjZSA8PSA1NTApIHJldHVybiAncHJpemVfNTAxLTU1MCc7XG4gICAgICAgIGlmIChwbGFjZSA+PSA1NTEgJiYgcGxhY2UgPD0gNjUwKSByZXR1cm4gJ3ByaXplXzU1MS02NTAnO1xuICAgICAgICBpZiAocGxhY2UgPj0gNjUxICYmIHBsYWNlIDw9IDc1MCkgcmV0dXJuICdwcml6ZV82NTEtNzUwJztcbiAgICAgICAgaWYgKHBsYWNlID49IDc1MSAmJiBwbGFjZSA8PSA4NTApIHJldHVybiAncHJpemVfNzUxLTg1MCc7XG4gICAgICAgIGlmIChwbGFjZSA+PSA4NTEgJiYgcGxhY2UgPD0gOTUwKSByZXR1cm4gJ3ByaXplXzg1MS05NTAnO1xuICAgICAgICBpZiAocGxhY2UgPj0gOTUxICYmIHBsYWNlIDw9IDEwMDApIHJldHVybiAncHJpemVfOTUxLTEwMDAnO1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXRXYWdlckJ5UGxhY2UocGxhY2UpIHtcbiAgICAgICAgaWYgKHBsYWNlID49IDEgJiYgcGxhY2UgPD0gMTApIHJldHVybiAnLSc7XG4gICAgICAgIGlmIChwbGFjZSA+PSAxMSAmJiBwbGFjZSA8PSAyMCkgcmV0dXJuICfRhTEnO1xuICAgICAgICBpZiAocGxhY2UgPj0gMjEgJiYgcGxhY2UgPD0gMzApIHJldHVybiAn0YUxJztcbiAgICAgICAgaWYgKHBsYWNlID49IDMxICYmIHBsYWNlIDw9IDQwKSByZXR1cm4gJ9GFMic7XG4gICAgICAgIGlmIChwbGFjZSA+PSA0MSAmJiBwbGFjZSA8PSA1MCkgcmV0dXJuICfRhTInO1xuICAgICAgICBpZiAocGxhY2UgPj0gNTEgJiYgcGxhY2UgPD0gNzApIHJldHVybiAn0YUzJztcbiAgICAgICAgaWYgKHBsYWNlID49IDcxICYmIHBsYWNlIDw9IDEwMCkgcmV0dXJuICfRhTMnO1xuICAgICAgICBpZiAocGxhY2UgPj0gMTAxICYmIHBsYWNlIDw9IDE1MCkgcmV0dXJuICfRhTQnO1xuICAgICAgICBpZiAocGxhY2UgPj0gMTUxICYmIHBsYWNlIDw9IDIwMCkgcmV0dXJuICfRhTQnO1xuICAgICAgICBpZiAocGxhY2UgPj0gMjAxICYmIHBsYWNlIDw9IDI1MCkgcmV0dXJuICfRhTUnO1xuICAgICAgICBpZiAocGxhY2UgPj0gMjUxICYmIHBsYWNlIDw9IDMwMCkgcmV0dXJuICfRhTUnO1xuICAgICAgICBpZiAocGxhY2UgPj0gMzAxICYmIHBsYWNlIDw9IDM1MCkgcmV0dXJuICfRhTYnO1xuICAgICAgICBpZiAocGxhY2UgPj0gMzUxICYmIHBsYWNlIDw9IDQwMCkgcmV0dXJuICfRhTcnO1xuICAgICAgICBpZiAocGxhY2UgPj0gNDAxICYmIHBsYWNlIDw9IDQ1MCkgcmV0dXJuICfRhTgnO1xuICAgICAgICBpZiAocGxhY2UgPj0gNDUxICYmIHBsYWNlIDw9IDUwMCkgcmV0dXJuICfRhTknO1xuICAgICAgICBpZiAocGxhY2UgPj0gNTAxICYmIHBsYWNlIDw9IDU1MCkgcmV0dXJuICfRhTEwJztcbiAgICAgICAgaWYgKHBsYWNlID49IDU1MSAmJiBwbGFjZSA8PSAxMDAwKSByZXR1cm4gJy0nO1xuICAgICAgICByZXR1cm4gXCItXCI7XG4gICAgfVxuXG5cblxuICAgIGZ1bmN0aW9uIHBhcnRpY2lwYXRlKCkge1xuICAgICAgICBpZiAoIXVzZXJJZCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHBhcmFtcyA9IHsgdXNlcmlkOiB1c2VySWQgfTtcbiAgICAgICAgZmV0Y2goYXBpVVJMICsgJy91c2VyLycsIHtcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAnQWNjZXB0JzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHBhcmFtcylcbiAgICAgICAgfSkudGhlbihyZXMgPT4gcmVzLmpzb24oKSlcbiAgICAgICAgICAgIC50aGVuKHJlcyA9PiB7XG4gICAgICAgICAgICAgICAgbG9hZGVyQnRuID0gdHJ1ZVxuICAgICAgICAgICAgICAgIHRvZ2dsZUNsYXNzZXMocGFydGljaXBhdGVCdG5zLCBcImxvYWRlclwiKVxuICAgICAgICAgICAgICAgIHRvZ2dsZVRyYW5zbGF0ZXMocGFydGljaXBhdGVCdG5zLCBcImxvYWRlclwiKVxuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT57XG4gICAgICAgICAgICAgICAgICAgIHRvZ2dsZVRyYW5zbGF0ZXMocGFydGljaXBhdGVCdG5zLCBcImxvYWRlcl9yZWFkeVwiKVxuICAgICAgICAgICAgICAgICAgICB0b2dnbGVDbGFzc2VzKHBhcnRpY2lwYXRlQnRucywgXCJkb25lXCIpXG4gICAgICAgICAgICAgICAgICAgIHRvZ2dsZUNsYXNzZXMocGFydGljaXBhdGVCdG5zLCBcImxvYWRlclwiKVxuICAgICAgICAgICAgICAgIH0sIDUwMClcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpPT57XG4gICAgICAgICAgICAgICAgICAgIGNoZWNrVXNlckF1dGgoKVxuICAgICAgICAgICAgICAgIH0sIDEwMDApXG5cbiAgICAgICAgICAgIH0pO1xuICAgIH1cbiAgICBmdW5jdGlvbiB1cGRhdGVTbGlkZXIoKSB7XG4gICAgICAgIGl0ZW1zLmZvckVhY2goKGl0ZW0sIGluZGV4KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBkaXN0YW5jZSA9IGluZGV4IC0gY3VycmVudEluZGV4O1xuICAgICAgICAgICAgbGV0IG5ld1Bvc2l0aW9uID0gZGlzdGFuY2UgKiAxMDU7XG5cbiAgICAgICAgICAgIGlmIChkaXN0YW5jZSA+IHRvdGFsSXRlbXMgLyAyKSB7XG4gICAgICAgICAgICAgICAgbmV3UG9zaXRpb24gLT0gdG90YWxJdGVtcyAqIDEwNTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZGlzdGFuY2UgPCAtdG90YWxJdGVtcyAvIDIpIHtcbiAgICAgICAgICAgICAgICBuZXdQb3NpdGlvbiArPSB0b3RhbEl0ZW1zICogMTA1O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb25zdCBzY2FsZSA9IGluZGV4ID09PSBjdXJyZW50SW5kZXggPyAxIDogMTtcblxuICAgICAgICAgICAgaXRlbS5zdHlsZS50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlWCgke25ld1Bvc2l0aW9ufSUpIHNjYWxlKCR7c2NhbGV9KWA7XG4gICAgICAgICAgICBpdGVtLnN0eWxlLnpJbmRleCA9IGluZGV4ID09PSBjdXJyZW50SW5kZXggPyAyIDogMTtcblxuICAgICAgICAgICAgY29uc3QgaXNWaXNpYmxlID0gTWF0aC5hYnMoZGlzdGFuY2UpIDw9IDEgfHxcbiAgICAgICAgICAgICAgICAoaW5kZXggPT09IDAgJiYgY3VycmVudEluZGV4ID09PSB0b3RhbEl0ZW1zIC0gMSkgfHxcbiAgICAgICAgICAgICAgICAoaW5kZXggPT09IHRvdGFsSXRlbXMgLSAxICYmIGN1cnJlbnRJbmRleCA9PT0gMCk7XG5cbiAgICAgICAgICAgIGl0ZW0uY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZGVuJywgIWlzVmlzaWJsZSk7XG4gICAgICAgICAgICBpdGVtLmNsYXNzTGlzdC50b2dnbGUoJ2FjdGl2ZScsIGluZGV4ID09PSBjdXJyZW50SW5kZXgpO1xuXG4gICAgICAgICAgICBpdGVtLmNsYXNzTGlzdC5yZW1vdmUoJ2xlZnQtc2xpZGUnLCAncmlnaHQtc2xpZGUnKTtcbiAgICAgICAgICAgIGlmIChkaXN0YW5jZSA9PT0gMSB8fCAoY3VycmVudEluZGV4ID09PSB0b3RhbEl0ZW1zIC0gMSAmJiBpbmRleCA9PT0gMCkpIHtcbiAgICAgICAgICAgICAgICBpdGVtLmNsYXNzTGlzdC5hZGQoJ3JpZ2h0LXNsaWRlJyk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGRpc3RhbmNlID09PSAtMSB8fCAoY3VycmVudEluZGV4ID09PSAwICYmIGluZGV4ID09PSB0b3RhbEl0ZW1zIC0gMSkpIHtcbiAgICAgICAgICAgICAgICBpdGVtLmNsYXNzTGlzdC5hZGQoJ2xlZnQtc2xpZGUnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgZG90cy5mb3JFYWNoKGRvdCA9PiBkb3QuY2xhc3NMaXN0LnJlbW92ZSgnX2FjdGl2ZScpKTtcbiAgICAgICAgaWYgKGRvdHNbY3VycmVudEluZGV4XSkge1xuICAgICAgICAgICAgZG90c1tjdXJyZW50SW5kZXhdLmNsYXNzTGlzdC5hZGQoJ19hY3RpdmUnKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIG1vdmVTbGlkZXIob2Zmc2V0KSB7XG4gICAgICAgIGN1cnJlbnRJbmRleCA9IChjdXJyZW50SW5kZXggKyBvZmZzZXQgKyB0b3RhbEl0ZW1zKSAlIHRvdGFsSXRlbXM7XG4gICAgICAgIHVwZGF0ZVNsaWRlcigpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdvVG9TbGlkZShpbmRleCkge1xuICAgICAgICBjdXJyZW50SW5kZXggPSBpbmRleDtcbiAgICAgICAgdXBkYXRlU2xpZGVyKCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaGFuZGxlU3RhcnQoZXZlbnQpIHtcbiAgICAgICAgaXNEcmFnZ2luZyA9IHRydWU7XG4gICAgICAgIHN0YXJ0WCA9IGV2ZW50LmNsaWVudFggfHwgZXZlbnQudG91Y2hlc1swXS5jbGllbnRYO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGhhbmRsZU1vdmUoZXZlbnQpIHtcbiAgICAgICAgaWYgKCFpc0RyYWdnaW5nKSByZXR1cm47XG4gICAgICAgIGNvbnN0IGN1cnJlbnRYID0gZXZlbnQuY2xpZW50WCB8fCBldmVudC50b3VjaGVzWzBdLmNsaWVudFg7XG4gICAgICAgIGNvbnN0IGRpZmZYID0gY3VycmVudFggLSBzdGFydFg7XG5cbiAgICAgICAgaWYgKE1hdGguYWJzKGRpZmZYKSA+IDUwKSB7XG4gICAgICAgICAgICBtb3ZlU2xpZGVyKGRpZmZYID4gMCA/IC0xIDogMSk7XG4gICAgICAgICAgICBpc0RyYWdnaW5nID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBoYW5kbGVFbmQoKSB7XG4gICAgICAgIGlzRHJhZ2dpbmcgPSBmYWxzZTtcbiAgICB9XG5cbiAgICAvLyBmdW5jdGlvbiBvcGVuUG9wdXBCeUF0dHIocG9wdXBBdHRyLCBpc1Nob3dQcm9ncmVzcyA9IGZhbHNlKSB7XG4gICAgLy8gICAgIGNvbnN0IGFsbFBvcHVwcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wb3B1cCcpO1xuICAgIC8vICAgICBhbGxQb3B1cHMuZm9yRWFjaChwID0+IHAuY2xhc3NMaXN0LmFkZCgnaGlkZScpKTtcbiAgICAvLyAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvdyA9ICdoaWRkZW4nO1xuICAgIC8vXG4gICAgLy8gICAgIGNvbnN0IHRhcmdldFBvcHVwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLnBvcHVwW2RhdGEtcG9wdXA9XCIke3BvcHVwQXR0cn1cIl1gKTtcbiAgICAvLyAgICAgaWYgKHRhcmdldFBvcHVwKSB7XG4gICAgLy8gICAgICAgICB0YXJnZXRQb3B1cC5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJyk7XG4gICAgLy8gICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucG9wdXBzJykuY2xhc3NMaXN0LnJlbW92ZSgnb3BhY2l0eS1vdmVybGF5Jyk7XG4gICAgLy8gICAgIH1cbiAgICAvL1xuICAgIC8vICAgICBjb25zdCBwcm9ncmVzcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wb3B1cHMgLnByb2dyZXNzJyk7XG4gICAgLy8gICAgIGlmIChwcm9ncmVzcykge1xuICAgIC8vICAgICAgICAgcHJvZ3Jlc3MuY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZScsICFpc1Nob3dQcm9ncmVzcyk7XG4gICAgLy8gICAgIH1cbiAgICAvLyB9XG5cblxuICAgIGZ1bmN0aW9uIGNsb3NlQWxsUG9wdXBzKCkge1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucG9wdXAnKS5mb3JFYWNoKHAgPT4gcC5jbGFzc0xpc3QuYWRkKCdoaWRlJykpO1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucG9wdXBzIC5wcm9ncmVzcycpLmZvckVhY2gocCA9PiBwLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKSk7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wb3B1cHMnKS5jbGFzc0xpc3QuYWRkKCdvcGFjaXR5LW92ZXJsYXknKTtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvdyA9ICdhdXRvJztcbiAgICB9XG5cbiAgICBmdW5jdGlvbiB0cmlnZ2VyU2hha2UoKSB7XG4gICAgICAgIGJveC5jbGFzc0xpc3QuYWRkKCdzaGFrZScpO1xuXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgYm94LmNsYXNzTGlzdC5yZW1vdmUoJ3NoYWtlJyk7XG4gICAgICAgICAgICBjb25zdCBuZXh0U2hha2UgPSBNYXRoLnJhbmRvbSgpICogNjAwMCArIDQwMDA7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KHRyaWdnZXJTaGFrZSwgbmV4dFNoYWtlKTtcbiAgICAgICAgfSwgMTIwMCk7XG4gICAgfVxuXG5cblxuICAgIGxvYWRUcmFuc2xhdGlvbnMoKS50aGVuKGluaXQpXG5cbiAgICAvLyBpbml0KClcblxuXG4gICAgLy8vIFRFU1RcblxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5tZW51LXRlc3RfX2J0bicpLmZvckVhY2goYnRuID0+IHtcbiAgICAgICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgYnRuLnBhcmVudEVsZW1lbnQuY2xhc3NMaXN0LnRvZ2dsZSgnb3BlbicpO1xuICAgICAgICB9KTtcbiAgICB9KTtcblxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsICgpID0+IHtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tZW51LWJ0blwiKT8uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWVudS10ZXN0XCIpPy5jbGFzc0xpc3QudG9nZ2xlKFwiaGlkZVwiKTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICBjb25zdCBsbmdCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmxuZy1idG5cIilcblxuICAgIGxuZ0J0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICBpZiAoc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbShcImxvY2FsZVwiKSkge1xuICAgICAgICAgICAgc2Vzc2lvblN0b3JhZ2UucmVtb3ZlSXRlbShcImxvY2FsZVwiKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oXCJsb2NhbGVcIiwgXCJlblwiKTtcbiAgICAgICAgfVxuICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XG4gICAgfSk7XG5cbiAgICBjb25zdCBhdXRoQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hdXRoLWJ0blwiKVxuICAgIGNvbnN0IGJldEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYnRuLWJldC1vbmxpbmVcIilcblxuICAgIGF1dGhCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+e1xuICAgICAgICBpZih1c2VySWQpe1xuICAgICAgICAgICAgc2Vzc2lvblN0b3JhZ2UucmVtb3ZlSXRlbShcInVzZXJJZFwiKVxuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oXCJ1c2VySWRcIiwgXCI3Nzc3Nzc4XCIpXG4gICAgICAgIH1cbiAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpXG4gICAgfSk7XG5cblxufSkoKTtcblxuLy8g0YbRjiDRhNGD0L3QutGG0ZbRjiDQstC40LTQsNC70LgsINCwINC+0YHQvdC+0LLQvdGDINGA0L7Qt9C60L7QvNC10L3RgtC4XG5mdW5jdGlvbiBvcGVuUG9wdXBCeUF0dHIocG9wdXBBdHRyLCBpc1Nob3dQcm9ncmVzcyA9IGZhbHNlKSB7XG4gICAgY29uc3QgYWxsUG9wdXBzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnBvcHVwJyk7XG4gICAgYWxsUG9wdXBzLmZvckVhY2gocCA9PiBwLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKSk7XG4gICAgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvdyA9ICdoaWRkZW4nO1xuXG4gICAgY29uc3QgdGFyZ2V0UG9wdXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAucG9wdXBbZGF0YS1wb3B1cD1cIiR7cG9wdXBBdHRyfVwiXWApO1xuICAgIGlmICh0YXJnZXRQb3B1cCkge1xuICAgICAgICB0YXJnZXRQb3B1cC5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJyk7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wb3B1cHMnKS5jbGFzc0xpc3QucmVtb3ZlKCdvcGFjaXR5LW92ZXJsYXknKTtcbiAgICB9XG5cbiAgICBjb25zdCBwcm9ncmVzcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wb3B1cHMgLnByb2dyZXNzJyk7XG4gICAgaWYgKHByb2dyZXNzKSB7XG4gICAgICAgIHByb2dyZXNzLmNsYXNzTGlzdC50b2dnbGUoJ2hpZGUnLCAhaXNTaG93UHJvZ3Jlc3MpO1xuICAgIH1cbn1cbi8vINGG0Y4g0YTRg9C90LrRhtGW0Y4g0LLQuNC00LDQu9C4LCDQsCDQvtGB0L3QvtCy0L3RgyDRgNC+0LfQutC+0LzQtdC90YLQuFxuXG4iXX0=
