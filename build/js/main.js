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
    console.log(userData);
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
      console.log(sliderDayIndex);
      updateSlider(currentIndex, sliderDayIndex);
    }
    function moveRight() {
      currentIndex = (currentIndex + 1) % slides.length;
      sliderDayIndex = currentIndex;
      updateSlider(currentIndex, sliderDayIndex);
    }
    btnLeft.addEventListener('click', moveLeft);
    btnRight.addEventListener('click', moveRight);
    tabs.forEach(function (tab, index) {
      tab.addEventListener('click', function () {
        currentIndex = index;
        sliderDayIndex = index;
        updateSlider(currentIndex, sliderDayIndex);
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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOlsiYXBpVVJMIiwiY3VycmVudERhdGUiLCJEYXRlIiwiZ2V0QWN0aXZlV2VlayIsInByb21vU3RhcnREYXRlIiwid2Vla0R1cmF0aW9uIiwid2Vla0RhdGVzIiwiRGF5IiwiV2VlayIsImZvcm1hdERhdGUiLCJkYXRlIiwiZ2V0RGF0ZSIsInRvU3RyaW5nIiwicGFkU3RhcnQiLCJnZXRNb250aCIsImNhbGN1bGF0ZVdlZWtQZXJpb2QiLCJ3ZWVrSW5kZXgiLCJiYXNlU3RhcnQiLCJnZXRUaW1lIiwic3RhcnQiLCJlbmQiLCJhY3RpdmVXZWVrSW5kZXgiLCJpIiwiYWN0aXZlV2VlayIsImNvbnNvbGUiLCJsb2ciLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJmb3JFYWNoIiwibGlzdCIsImNsYXNzTGlzdCIsImFkZCIsImN1cnJlbnRMaXN0IiwicXVlcnlTZWxlY3RvciIsInJlbW92ZSIsImdldEN1cnJlbnREYXlOdW1iZXIiLCJkaWZmSW5NcyIsImRheU51bWJlciIsIk1hdGgiLCJmbG9vciIsImN1cnJlbnREYXlOdW1iZXIiLCJtYWluUGFnZSIsImNoYWxsYW5nZUJsb2NrIiwiY2hhbGxhbmdlRGVwb3NpdEJ0biIsInVuYXV0aE1zZ3MiLCJwYXJ0aWNpcGF0ZUJ0bnMiLCJyZWRpcmVjdEJ0bnMiLCJsb2FkZXIiLCJjdXJyZW50Q2FyZHNXcmFwIiwicHJvZ3Jlc3NCYXIiLCJjaGFsbGFuZ2VCbHVyIiwiY2hhbGxhbmdlQmx1clN0YXR1cyIsInByb2dyZXNzQm94IiwiY2hhbGxhbmdlQnRuUG9pbnRlciIsImJ0bk9wZW4iLCJjb3VudGVyUG9pbnRzIiwicG9wdXBzIiwic3RyZWFrRGF5cyIsInN0cmVha0RheXNQb3B1cCIsInJlc3VsdHNUYWJsZSIsInJlc3VsdHNUYWJsZU90aGVyIiwidGFibGVUYWJzIiwiZHJvcFNwaW5zIiwibGFzdFVwZEJsb2NrIiwic2xpZGVyRGF5SW5kZXgiLCJ1a0xlbmciLCJlbkxlbmciLCJ0b2dnbGVDbGFzc2VzIiwiZWxlbWVudHMiLCJjbGFzc05hbWUiLCJlbCIsInRvZ2dsZSIsInRvZ2dsZVRyYW5zbGF0ZXMiLCJkYXRhQXR0ciIsInNldEF0dHJpYnV0ZSIsImlubmVySFRNTCIsImkxOG5EYXRhIiwicmVtb3ZlQXR0cmlidXRlIiwibG9hZGVyQnRuIiwibG9jYWxlIiwic2Vzc2lvblN0b3JhZ2UiLCJnZXRJdGVtIiwiZGVidWciLCJoaWRlTG9hZGVyIiwidHJhbnNsYXRlU3RhdGUiLCJ1c2VySWQiLCJOdW1iZXIiLCJib3giLCJpbml0aWFsRGVsYXkiLCJyYW5kb20iLCJzbGlkZXIiLCJpdGVtcyIsImRvdHMiLCJidG5MZWZ0IiwiYnRuUmlnaHQiLCJjdXJyZW50SW5kZXgiLCJ0b3RhbEl0ZW1zIiwibGVuZ3RoIiwiaXNEcmFnZ2luZyIsInN0YXJ0WCIsImZvcm1hdERhdGVUaW1lQ3VzdG9tIiwiaXNvU3RyaW5nIiwia3lpdkRhdGUiLCJ0b0xvY2FsZVN0cmluZyIsInRpbWVab25lIiwiZGF5IiwiU3RyaW5nIiwibW9udGgiLCJ5ZWFyIiwiZ2V0RnVsbFllYXIiLCJob3VycyIsImdldEhvdXJzIiwibWludXRlcyIsImdldE1pbnV0ZXMiLCJyZXF1ZXN0IiwibGluayIsImV4dHJhT3B0aW9ucyIsImZldGNoIiwiaGVhZGVycyIsInRoZW4iLCJyZXMiLCJvayIsIkVycm9yIiwianNvbiIsImVyciIsImVycm9yIiwiUHJvbWlzZSIsInJlamVjdCIsImJvZHkiLCJzdHlsZSIsIm92ZXJmbG93IiwiaW5pdFNwaW4iLCJ0ZXh0Q29udGVudCIsInRyYW5zbGF0ZUtleSIsInNlbmRTcGluUmVxdWVzdCIsInByaXplIiwibnVtYmVyIiwic3RyZWFrQm9udXMiLCJzZXRTdHJlYWtEYXlzIiwib3BlblBvcHVwQnlBdHRyIiwidXNlciIsInNldFVzZXJQcm9ncmVzcyIsImRpc3BsYXlCZXRzSGlzdG9yeSIsInNwaW5zIiwicmVzb2x2ZSIsInR5cGUiLCJwYXJhbXMiLCJ1c2VyaWQiLCJtZXRob2QiLCJKU09OIiwic3RyaW5naWZ5Iiwic3RyZWFrIiwidXNlckRhdGEiLCJzcGluQWxsb3dlZCIsInBvaW50c1BlckRheSIsInNwaW5zU3RyZWFrIiwibGFzdFVwZGF0ZSIsInRocmVzaG9sZFBvaW50cyIsInByb2dyZXNzIiwibWluIiwidG9GaXhlZCIsInNldFByb2dyZXNzV2lkdGgiLCJwcm9ncmVzc1BlcmNlbnQiLCJ3aWR0aCIsImJhclJlY3QiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJwYXJlbnRSZWN0IiwicmlnaHRFZGdlIiwicmlnaHQiLCJsZWZ0IiwicmVzb2x2ZVN0YXR1c1RyYW5zbGF0aW9uIiwic3RhdHVzIiwiYmV0cyIsInNwaW5JdGVtIiwibm9TcGluSXRlbSIsIm5vQmV0cyIsIndhcm4iLCJ1cGQiLCJzcGluIiwic3BpbkRhdGUiLCJmb3JtYXR0ZWREYXRlIiwidG9Mb2NhbGVEYXRlU3RyaW5nIiwic2xpY2UiLCJzcGluRWxlbWVudCIsImNyZWF0ZUVsZW1lbnQiLCJpc1dpbiIsInN0YXR1c0NsYXNzIiwibmFtZSIsImFwcGVuZENoaWxkIiwic2V0QmV0SGlzdG9yeSIsInN0YWdlTnVtIiwiaW5pdCIsInRyeURldGVjdFVzZXJJZCIsInF1aWNrQ2hlY2tBbmRSZW5kZXIiLCJjaGVja1VzZXJBdXRoIiwiYWRkRXZlbnRMaXN0ZW5lciIsInRhYiIsImluZGV4IiwidCIsInRhYk51bSIsImdldEF0dHJpYnV0ZSIsInJlbmRlclVzZXJzIiwic2V0VGltZW91dCIsIlNldFNsaWRlcldpZHRoQmx1ciIsInRyaWdnZXJTaGFrZSIsImJ0biIsInBhcnRpY2lwYXRlIiwiY2xvc2VCdG4iLCJjbG9zZUFsbFBvcHVwcyIsInBvcHVwQXR0ciIsImUiLCJvcGVuUG9wdXBFbCIsImNvbnRhaW5zIiwidGFyZ2V0IiwidXBkYXRlU2xpZGVyIiwiaGFuZGxlU3RhcnQiLCJoYW5kbGVNb3ZlIiwiaGFuZGxlRW5kIiwibW92ZVNsaWRlciIsIndpbmRvdyIsInN0b3JlIiwic3RhdGUiLCJnZXRTdGF0ZSIsImF1dGgiLCJpc0F1dGhvcml6ZWQiLCJpZCIsImdfdXNlcl9pZCIsImF0dGVtcHRzIiwibWF4QXR0ZW1wdHMiLCJhdHRlbXB0SW50ZXJ2YWwiLCJ3YWl0Rm9yVXNlcklkIiwiaW50ZXJ2YWwiLCJzZXRJbnRlcnZhbCIsImNsZWFySW50ZXJ2YWwiLCJsb2FkVHJhbnNsYXRpb25zIiwidHJhbnNsYXRlIiwidGFyZ2V0Tm9kZSIsImdldEVsZW1lbnRCeUlkIiwibXV0YXRpb25PYnNlcnZlciIsIk11dGF0aW9uT2JzZXJ2ZXIiLCJtdXRhdGlvbnMiLCJkaXNjb25uZWN0Iiwib2JzZXJ2ZSIsImNoaWxkTGlzdCIsInN1YnRyZWUiLCJzbGlkZXMiLCJ0YWJzIiwiZGF5SW5kZXgiLCJzbGlkZSIsImRvdCIsIm1vdmVMZWZ0IiwibW92ZVJpZ2h0IiwibG9hZFRpbWUiLCJzaG93RWxlbWVudHMiLCJoaWRlRWxlbWVudHMiLCJyZXBvcnRFcnJvciIsInJlcG9ydERhdGEiLCJvcmlnaW4iLCJsb2NhdGlvbiIsImhyZWYiLCJlcnJvclRleHQiLCJ0ZXh0IiwibWVzc2FnZSIsInN0YWNrIiwiZWxlbXMiLCJlbGVtIiwia2V5IiwicmVmcmVzaExvY2FsaXplZENsYXNzIiwiZWxlbWVudCIsImxhbmciLCJ3ZWVrIiwiZGF0YSIsInVzZXJzIiwicG9wdWxhdGVVc2Vyc1RhYmxlIiwiY3VycmVudFVzZXJJZCIsImN1cnJlbnRVc2VyIiwiZmluZCIsImlzVG9wQ3VycmVudFVzZXIiLCJzb21lIiwidG9wVXNlcnNMZW5ndGgiLCJ0b3BVc2VycyIsImRpc3BsYXlVc2VyIiwiaXNDdXJyZW50VXNlciIsInRhYmxlIiwicmVuZGVyUm93Iiwib3B0aW9ucyIsImhpZ2hsaWdodCIsIm5laWdoYm9yIiwidXNlclJvdyIsInVzZXJQbGFjZSIsImluZGV4T2YiLCJwcml6ZUtleSIsImdldFByaXplVHJhbnNsYXRpb25LZXkiLCJtYXNrVXNlcklkIiwicG9pbnRzV2VlayIsImdldFdhZ2VyQnlQbGFjZSIsImFwcGVuZCIsImRlZmF1bHRWYWx1ZSIsIm5lZWRLZXkiLCJwbGFjZSIsIml0ZW0iLCJkaXN0YW5jZSIsIm5ld1Bvc2l0aW9uIiwic2NhbGUiLCJ0cmFuc2Zvcm0iLCJ6SW5kZXgiLCJpc1Zpc2libGUiLCJhYnMiLCJvZmZzZXQiLCJnb1RvU2xpZGUiLCJldmVudCIsImNsaWVudFgiLCJ0b3VjaGVzIiwiY3VycmVudFgiLCJkaWZmWCIsInAiLCJuZXh0U2hha2UiLCJwYXJlbnRFbGVtZW50IiwibG5nQnRuIiwicmVtb3ZlSXRlbSIsInNldEl0ZW0iLCJyZWxvYWQiLCJhdXRoQnRuIiwiYmV0QnRuIiwiaXNTaG93UHJvZ3Jlc3MiLCJhbGxQb3B1cHMiLCJ0YXJnZXRQb3B1cCJdLCJtYXBwaW5ncyI6Ijs7OytDQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQSxDQUFDLFlBQVk7RUFBQTtFQUVULElBQU1BLE1BQU0sR0FBRyxpQ0FBaUM7RUFFaEQsSUFBTUMsV0FBVyxHQUFHLElBQUlDLElBQUksQ0FBQyxxQkFBcUIsQ0FBQztFQUVuRCxJQUFNQyxhQUFhLEdBQUcsU0FBaEJBLGFBQWEsQ0FBSUMsY0FBYyxFQUFFQyxZQUFZLEVBQUs7SUFFcEQsSUFBSUMsU0FBUyxHQUFHLEVBQUU7SUFFbEIsSUFBTUMsR0FBRyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLElBQUk7SUFDL0IsSUFBTUMsSUFBSSxHQUFHSCxZQUFZLEdBQUdFLEdBQUc7SUFFL0IsSUFBTUUsVUFBVSxHQUFHLFNBQWJBLFVBQVUsQ0FBSUMsSUFBSTtNQUFBLGlCQUNqQkEsSUFBSSxDQUFDQyxPQUFPLEVBQUUsQ0FBQ0MsUUFBUSxFQUFFLENBQUNDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLGNBQUksQ0FBQ0gsSUFBSSxDQUFDSSxRQUFRLEVBQUUsR0FBRyxDQUFDLEVBQUVGLFFBQVEsRUFBRSxDQUFDQyxRQUFRLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQztJQUFBLENBQUU7SUFFeEcsSUFBTUUsbUJBQW1CLEdB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QUssSUFBSSxHQUFHLEVBQUUsT0FBTyxlQUFlO0lBQ3hELElBQUlBLEtBQUssSUFBSSxHQUFHLElBQUlBLEtBQUssSUFBSSxHQUFHLEVBQUUsT0FBTyxlQUFlO0lBQ3hELElBQUlBLEtBQUssSUFBSSxHQUFHLElBQUlBLEtBQUssSUFBSSxHQUFHLEVBQUUsT0FBTyxlQUFlO0lBQ3hELElBQUlBLEtBQUssSUFBSSxHQUFHLElBQUlBLEtBQUssSUFBSSxHQUFHLEVBQUUsT0FBTyxlQUFlO0lBQ3hELElBQUlBLEtBQUssSUFBSSxHQUFHLElBQUlBLEtBQUssSUFBSSxHQUFHLEVBQUUsT0FBTyxlQUFlO0lBQ3hELElBQUlBLEtBQUssSUFBSSxHQUFHLElBQUlBLEtBQUssSUFBSSxHQUFHLEVBQUUsT0FBTyxlQUFlO0lBQ3hELElBQUlBLEtBQUssSUFBSSxHQUFHLElBQUlBLEtBQUssSUFBSSxHQUFHLEVBQUUsT0FBTyxlQUFlO0lBQ3hELElBQUlBLEtBQUssSUFBSSxHQUFHLElBQUlBLEtBQUssSUFBSSxHQUFHLEVBQUUsT0FBTyxlQUFlO0lBQ3hELElBQUlBLEtBQUssSUFBSSxHQUFHLElBQUlBLEtBQUssSUFBSSxHQUFHLEVBQUUsT0FBTyxlQUFlO0lBQ3hELElBQUlBLEtBQUssSUFBSSxHQUFHLElBQUlBLEtBQUssSUFBSSxHQUFHLEVBQUUsT0FBTyxlQUFlO0lBQ3hELElBQUlBLEtBQUssSUFBSSxHQUFHLElBQUlBLEtBQUssSUFBSSxHQUFHLEVBQUUsT0FBTyxlQUFlO0lBQ3hELElBQUlBLEtBQUssSUFBSSxHQUFHLElBQUlBLEtBQUssSUFBSSxHQUFHLEVBQUUsT0FBTyxlQUFlO0lBQ3hELElBQUlBLEtBQUssSUFBSSxHQUFHLElBQUlBLEtBQUssSUFBSSxJQUFJLEVBQUUsT0FBTyxnQkFBZ0I7SUFDMUQsT0FBTyxJQUFJO0VBQ2Y7RUFFQSxTQUFTSixlQUFlLENBQUNJLEtBQUssRUFBRTtJQUM1QixJQUFJQSxLQUFLLElBQUksQ0FBQyxJQUFJQSxLQUFLLElBQUksRUFBRSxFQUFFLE9BQU8sR0FBRztJQUN6QyxJQUFJQSxLQUFLLElBQUksRUFBRSxJQUFJQSxLQUFLLElBQUksRUFBRSxFQUFFLE9BQU8sSUFBSTtJQUMzQyxJQUFJQSxLQUFLLElBQUksRUFBRSxJQUFJQSxLQUFLLElBQUksRUFBRSxFQUFFLE9BQU8sSUFBSTtJQUMzQyxJQUFJQSxLQUFLLElBQUksRUFBRSxJQUFJQSxLQUFLLElBQUksRUFBRSxFQUFFLE9BQU8sSUFBSTtJQUMzQyxJQUFJQSxLQUFLLElBQUksRUFBRSxJQUFJQSxLQUFLLElBQUksRUFBRSxFQUFFLE9BQU8sSUFBSTtJQUMzQyxJQUFJQSxLQUFLLElBQUksRUFBRSxJQUFJQSxLQUFLLElBQUksRUFBRSxFQUFFLE9BQU8sSUFBSTtJQUMzQyxJQUFJQSxLQUFLLElBQUksRUFBRSxJQUFJQSxLQUFLLElBQUksR0FBRyxFQUFFLE9BQU8sSUFBSTtJQUM1QyxJQUFJQSxLQUFLLElBQUksR0FBRyxJQUFJQSxLQUFLLElBQUksR0FBRyxFQUFFLE9BQU8sSUFBSTtJQUM3QyxJQUFJQSxLQUFLLElBQUksR0FBRyxJQUFJQSxLQUFLLElBQUksR0FBRyxFQUFFLE9BQU8sSUFBSTtJQUM3QyxJQUFJQSxLQUFLLElBQUksR0FBRyxJQUFJQSxLQUFLLElBQUksR0FBRyxFQUFFLE9BQU8sSUFBSTtJQUM3QyxJQUFJQSxLQUFLLElBQUksR0FBRyxJQUFJQSxLQUFLLElBQUksR0FBRyxFQUFFLE9BQU8sSUFBSTtJQUM3QyxJQUFJQSxLQUFLLElBQUksR0FBRyxJQUFJQSxLQUFLLElBQUksR0FBRyxFQUFFLE9BQU8sSUFBSTtJQUM3QyxJQUFJQSxLQUFLLElBQUksR0FBRyxJQUFJQSxLQUFLLElBQUksR0FBRyxFQUFFLE9BQU8sSUFBSTtJQUM3QyxJQUFJQSxLQUFLLElBQUksR0FBRyxJQUFJQSxLQUFLLElBQUksR0FBRyxFQUFFLE9BQU8sSUFBSTtJQUM3QyxJQUFJQSxLQUFLLElBQUksR0FBRyxJQUFJQSxLQUFLLElBQUksR0FBRyxFQUFFLE9BQU8sSUFBSTtJQUM3QyxJQUFJQSxLQUFL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Rzs7QUFFSjtBQUNBLFNBQVN0TCxlQUFlLENBQUNzRSxTQUFTLEVBQTBCO0VBQUEsSUFBeEJtSCxjQUFjLHVFQUFHLEtBQUs7RUFDdEQsSUFBTUMsU0FBUyxHQUFHM1MsUUFBUSxDQUFDQyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUM7RUFDckQwUyxTQUFTLENBQUN6UyxPQUFPLENBQUMsVUFBQStSLENBQUM7SUFBQSxPQUFJQSxDQUFDLENBQUM3UixTQUFTLENBQUNDLEdBQUcsQ0FBQyxNQUFNLENBQUM7RUFBQSxFQUFDO0VBQy9DTCxRQUFRLENBQUNzRyxJQUFJLENBQUNDLEtBQUssQ0FBQ0MsUUFBUSxHQUFHLFFBQVE7RUFFdkMsSUFBTW9NLFdBQVcsR0FBRzVTLFFBQVEsQ0FBQ08sYUFBYSwrQkFBdUJnTCxTQUFTLFNBQUs7RUFDL0UsSUFBSXFILFdBQVcsRUFBRTtJQUNiQSxXQUFXLENBQUN4UyxTQUFTLENBQUNJLE1BQU0sQ0FBQyxNQUFNLENBQUM7SUFDcENSLFFBQVEsQ0FBQ08sYUFBYSxDQUFDLFNBQVMsQ0FBQyxDQUFDSCxTQUFTLENBQUNJLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQztFQUN6RTtFQUVBLElBQU00SCxRQUFRLEdBQUdwSSxRQUFRLENBQUNPLGFBQWEsQ0FBQyxtQkFBbUIsQ0FBQztFQUM1RCxJQUFJNkgsUUFBUSxFQUFFO0lBQ1ZBLFFBQVEsQ0FBQ2hJLFNBQVMsQ0FBQ3lDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQzZQLGNBQWMsQ0FBQztFQUN0RDtBQUNKO0FBQ0EiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiAoKSB7XG5cbiAgICBjb25zdCBhcGlVUkwgPSAnaHR0cHM6Ly9mYXYtcHJvbS5jb20vYXBpX3NhbV91YSdcblxuICAgIGNvbnN0IGN1cnJlbnREYXRlID0gbmV3IERhdGUoXCIyMDI1LTA3LTI0VDAwOjAwOjAwXCIpO1xuXG4gICAgY29uc3QgZ2V0QWN0aXZlV2VlayA9IChwcm9tb1N0YXJ0RGF0ZSwgd2Vla0R1cmF0aW9uKSA9PiB7XG5cbiAgICAgICAgbGV0IHdlZWtEYXRlcyA9IFtdO1xuXG4gICAgICAgIGNvbnN0IERheSA9IDI0ICogNjAgKiA2MCAqIDEwMDA7XG4gICAgICAgIGNvbnN0IFdlZWsgPSB3ZWVrRHVyYXRpb24gKiBEYXk7XG5cbiAgICAgICAgY29uc3QgZm9ybWF0RGF0ZSA9IChkYXRlKSA9PlxuICAgICAgICAgICAgYCR7ZGF0ZS5nZXREYXRlKCkudG9TdHJpbmcoKS5wYWRTdGFydCgyLCBcIjBcIil9LiR7KGRhdGUuZ2V0TW9udGgoKSArIDEpLnRvU3RyaW5nKCkucGFkU3RhcnQoMiwgXCIwXCIpfWA7XG5cbiAgICAgICAgY29uc3QgY2FsY3VsYXRlV2Vla1BlcmlvZCA9ICh3ZWVrSW5kZXgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGJhc2VTdGFydCA9IHByb21vU3RhcnREYXRlLmdldFRpbWUoKTtcbiAgICAgICAgICAgIGNvbnN0IHN0YXJ0ID0gbmV3IERhdGUoYmFzZVN0YXJ0ICsgd2Vla0luZGV4ICogV2Vlayk7XG4gICAgICAgICAgICBsZXQgZW5kID0gbmV3IERhdGUoc3RhcnQuZ2V0VGltZSgpICsgKHdlZWtEdXJhdGlvbiAqIERheSAtIDEpKTtcbiAgICAgICAgICAgIHJldHVybiB7IHN0YXJ0LCBlbmQgfTtcbiAgICAgICAgfTtcblxuICAgICAgICBsZXQgYWN0aXZlV2Vla0luZGV4ID0gbnVsbDtcblxuICAgICAgICAvLyDQn9C10YDQtdCy0ZbRgNC60LAg0L/QvtGC0L7Rh9C90L7Qs9C+INGC0LjQttC90Y9cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgaSsrKSB7IC8vINCe0LHQvNC10LbRg9GU0LzQviAxMCDRgtC40LbQvdGP0LzQuCAo0Y/QutGJ0L4g0L/QvtGC0YDRltCx0L3QviDQsdGW0LvRjNGI0LUsINC/0YDQvtGB0YLQviDQt9C80ZbQvdGW0YLRjCDQu9GW0YfQuNC70YzQvdC40LopXG4gICAgICAgICAgICBjb25zdCB7IHN0YXJ0LCBlbmQgfSA9IGNhbGN1bGF0ZVdlZWtQZXJpb2QoaSk7XG4gICAgICAgICAgICBpZiAoY3VycmVudERhdGUgPj0gc3RhcnQgJiYgY3VycmVudERhdGUgPD0gZW5kKSB7XG4gICAgICAgICAgICAgICAgYWN0aXZlV2Vla0luZGV4ID0gaSArIDE7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gYWN0aXZlV2Vla0luZGV4O1xuICAgIH07XG5cbiAgICBjb25zdCBwcm9tb1N0YXJ0RGF0ZSA9IG5ldyBEYXRlKFwiMjAyNS0wNy0xNVQwMDowMDowMFwiKTtcbiAgICBjb25zdCB3ZWVrRHVyYXRpb24gPSA3O1xuXG4gICAgY29uc3QgYWN0aXZlV2VlayA9IGdldEFjdGl2ZVdlZWsocHJvbW9TdGFydERhdGUsIHdlZWtEdXJhdGlvbikgfHwgMTtcblxuICAgIGNvbnNvbGUubG9nKGFjdGl2ZVdlZWspXG5cbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZ2FtZXNfX2xpc3QnKS5mb3JFYWNoKGxpc3QgPT4ge1xuICAgICAgICBsaXN0LmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcbiAgICB9KTtcblxuICAgIGNvbnN0IGN1cnJlbnRMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLmdhbWVzX19saXN0Ll93ZWVrJHthY3RpdmVXZWVrfWApO1xuXG4gICAgY29uc29sZS5sb2coY3VycmVudExpc3QpO1xuICAgIGlmIChjdXJyZW50TGlzdCkge1xuICAgICAgICBjdXJyZW50TGlzdC5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJyk7XG4gICAgfVxuXG4gICAgY29uc3QgZ2V0Q3VycmVudERheU51bWJlciA9IChwcm9tb1N0YXJ0RGF0ZSkgPT4ge1xuICAgICAgICBjb25zdCBkaWZmSW5NcyA9IGN1cnJlbnREYXRlIC0gcHJvbW9TdGFydERhdGU7XG4gICAgICAgIGxldCBkYXlOdW1iZXIgPSBNYXRoLmZsb29yKGRpZmZJbk1zIC8gKDI0ICogNjAgKiA2MCAqIDEwMDApKSArIDE7XG4gICAgICAgIGlmKGFjdGl2ZVdlZWsgPiAxKXtcbiAgICAgICAgICAgZGF5TnVtYmVyID0gZGF5TnVtYmVyIC0gKChhY3RpdmVXZWVrIC0gMSkgKiA3KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZGF5TnVtYmVyIC0gMTtcbiAgICB9O1xuXG4gICAgY29uc3QgZGF5TnVtYmVyID0gZ2V0Q3VycmVudERheU51bWJlcihwcm9tb1N0YXJ0RGF0ZSk7XG4gICAgY29uc3QgY3VycmVudERheU51bWJlciA9IGRheU51bWJlciA+IDAgPyBkYXlOdW1iZXIgOiAxO1xuICAgIGNvbnNvbGUubG9nKGN1cnJlbnREYXlOdW1iZXIpO1xuXG5cbiAgICBjb25zdCBtYWluUGFnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZmF2LXBhZ2VcIiksXG4gICAgICAgIGNoYWxsYW5nZUJsb2NrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNoYWxsYW5nZScpLFxuICAgICAgICBjaGFsbGFuZ2VEZXBvc2l0QnRuID0gY2hhbGxhbmdlQmxvY2sucXVlcnlTZWxlY3RvcignLmJ0bi1qb2luJyksXG4gICAgICAgIHVuYXV0aE1zZ3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudW5hdXRoLW1zZycpLFxuICAgICAgICBwYXJ0aWNpcGF0ZUJ0bnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucGFydC1idG4nKSxcbiAgICAgICAgcmVkaXJlY3RCdG5zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmJ0bi1qb2luJyksXG4gICAgICAgIGxvYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc3Bpbm5lci1vdmVybGF5XCIpLFxuICAgICAgICBjdXJyZW50Q2FyZHNXcmFwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNoYWxsYW5nZV9fY3VycmVudCcpLFxuICAgICAgICBwcm9ncmVzc0JhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jaGFsbGFuZ2VfX3Byb2dyZXNzLWJhcicpLFxuICAgICAgICBjaGFsbGFuZ2VCbHVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNoYWxsYW5nZV9fYmx1cicpLFxuICAgICAgICBjaGFsbGFuZ2VCbHVyU3RhdHVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNoYWxsYW5nZV9fYmx1ci1zdGF0dXMnKSxcbiAgICAgICAgcHJvZ3Jlc3NCb3ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2hhbGxhbmdlX19wcm9ncmVzcy1ib3gnKSxcbiAgICAgICAgY2hhbGxhbmdlQnRuUG9pbnRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jaGFsbGFuZ2VfX2J0bi1wb2ludGVyJyksXG4gICAgICAgIGJ0bk9wZW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYnRuLW9wZW4nKSxcbiAgICAgICAgY291bnRlclBvaW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb3VudGVyLXBvaW50cycpLFxuICAgICAgICBwb3B1cHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucG9wdXBzJyksXG4gICAgICAgIHN0cmVha0RheXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnByb2dyZXNzX19kYXlzLWl0ZW1cIiksXG4gICAgICAgIHN0cmVha0RheXNQb3B1cCA9IHBvcHVwcy5xdWVyeVNlbGVjdG9yQWxsKFwiLnByb2dyZXNzX19kYXlzLWl0ZW1cIiksXG4gICAgICAgIHJlc3VsdHNUYWJsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0YWJsZScpLFxuICAgICAgICByZXN1bHRzVGFibGVPdGhlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0YWJsZU90aGVyJyksXG4gICAgICAgIHRhYmxlVGFicyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50YWJsZV9fdGFicy1pdGVtJyksXG4gICAgICAgIGRyb3BTcGlucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kcm9wLS1zcGlucycpLFxuICAgICAgICBsYXN0VXBkQmxvY2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubGFzdC11cGQnKTtcblxuXG4gICAgY29uc29sZS5sb2coYnRuT3BlbilcblxuXG4gICAgbGV0IHNsaWRlckRheUluZGV4ID0gY3VycmVudERheU51bWJlcjtcblxuXG4gICAgY29uc3QgdWtMZW5nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3VrTGVuZycpO1xuICAgIGNvbnN0IGVuTGVuZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNlbkxlbmcnKTtcblxuICAgIGNvbnN0IHRvZ2dsZUNsYXNzZXMgPSAoZWxlbWVudHMsIGNsYXNzTmFtZSkgPT4gZWxlbWVudHMuZm9yRWFjaChlbCA9PiBlbC5jbGFzc0xpc3QudG9nZ2xlKGAke2NsYXNzTmFtZX1gKSk7XG4gICAgY29uc3QgdG9nZ2xlVHJhbnNsYXRlcyA9IChlbGVtZW50cywgZGF0YUF0dHIpID0+IGVsZW1lbnRzLmZvckVhY2goZWwgPT4ge1xuICAgICAgICBlbC5zZXRBdHRyaWJ1dGUoJ2RhdGEtdHJhbnNsYXRlJywgYCR7ZGF0YUF0dHJ9YClcbiAgICAgICAgZWwuaW5uZXJIVE1MID0gaTE4bkRhdGFbZGF0YUF0dHJdIHx8ICcqLS0tLU5FRUQgVE8gQkUgVFJBTlNMQVRFRC0tLS0qICAga2V5OiAgJyArIGRhdGFBdHRyO1xuICAgICAgICBlbC5yZW1vdmVBdHRyaWJ1dGUoJ2RhdGEtdHJhbnNsYXRlJyk7XG4gICAgfSk7XG5cbiAgICBsZXQgbG9hZGVyQnRuID0gZmFsc2VcblxuICAgIC8vIGxldCBsb2NhbGUgPSBcImVuXCJcbiAgICBsZXQgbG9jYWxlID0gc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbShcImxvY2FsZVwiKSB8fCBcInVrXCJcblxuICAgIGlmICh1a0xlbmcpIGxvY2FsZSA9ICd1ayc7XG4gICAgaWYgKGVuTGVuZykgbG9jYWxlID0gJ2VuJztcblxuICAgIGxldCBkZWJ1ZyA9IGZhbHNlXG5cbiAgICBpZiAoZGVidWcpIGhpZGVMb2FkZXIoKVxuXG4gICAgbGV0IGkxOG5EYXRhID0ge307XG4gICAgY29uc3QgdHJhbnNsYXRlU3RhdGUgPSB0cnVlO1xuICAgIC8vIGxldCB1c2VySWQgPSBudWxsO1xuICAgIGxldCB1c2VySWQgPSBOdW1iZXIoc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbShcInVzZXJJZFwiKSkgPz8gbnVsbFxuXG4gICAgLy8gdXNlcklkID0gMTAwMzAwMjY4XG5cbiAgICBjb25zdCBib3ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2hha2UtYm94Jyk7XG4gICAgY29uc3QgaW5pdGlhbERlbGF5ID0gTWF0aC5yYW5kb20oKSAqIDYwMDAgKyA0MDAwO1xuXG4gICAgLy9zbGlkZXIgdmFyc1xuXG4gICAgY29uc3Qgc2xpZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByaXplX19zbGlkZXInKTtcbiAgICBjb25zdCBpdGVtcyA9IHNsaWRlci5xdWVyeVNlbGVjdG9yQWxsKCcucHJpemVfX3NsaWRlJyk7XG4gICAgY29uc3QgZG90cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wcml6ZV9fbmF2LWRvdHMtaXRlbScpO1xuICAgIGNvbnN0IGJ0bkxlZnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJpemVfX25hdi1sZWZ0Jyk7XG4gICAgY29uc3QgYnRuUmlnaHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJpemVfX25hdi1yaWdodCcpO1xuXG4gICAgbGV0IGN1cnJlbnRJbmRleCA9IDE7XG4gICAgY29uc3QgdG90YWxJdGVtcyA9IGl0ZW1zLmxlbmd0aDtcbiAgICBsZXQgaXNEcmFnZ2luZyA9IGZhbHNlO1xuICAgIGxldCBzdGFydFggPSAwO1xuXG4gICAgLy9zbGlkZXIgdmFyc1xuXG4gICAgZnVuY3Rpb24gZm9ybWF0RGF0ZVRpbWVDdXN0b20oaXNvU3RyaW5nKSB7XG4gICAgICAgIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZShpc29TdHJpbmcpO1xuXG4gICAgICAgIGNvbnN0IGt5aXZEYXRlID0gbmV3IERhdGUoZGF0ZS50b0xvY2FsZVN0cmluZygnZW4tVVMnLCB7IHRpbWVab25lOiAnRXVyb3BlL0t5aXYnIH0pKTtcblxuICAgICAgICBjb25zdCBkYXkgPSBTdHJpbmcoa3lpdkRhdGUuZ2V0RGF0ZSgpKS5wYWRTdGFydCgyLCAnMCcpO1xuICAgICAgICBjb25zdCBtb250aCA9IFN0cmluZyhreWl2RGF0ZS5nZXRNb250aCgpICsgMSkucGFkU3RhcnQoMiwgJzAnKTtcbiAgICAgICAgY29uc3QgeWVhciA9IGt5aXZEYXRlLmdldEZ1bGxZZWFyKCk7XG4gICAgICAgIGNvbnN0IGhvdXJzID0gU3RyaW5nKGt5aXZEYXRlLmdldEhvdXJzKCkpLnBhZFN0YXJ0KDIsICcwJyk7XG4gICAgICAgIGNvbnN0IG1pbnV0ZXMgPSBTdHJpbmcoa3lpdkRhdGUuZ2V0TWludXRlcygpKS5wYWRTdGFydCgyLCAnMCcpO1xuXG4gICAgICAgIHJldHVybiBgJHtkYXl9LiR7bW9udGh9LiR7eWVhcn0uICR7aG91cnN9OiR7bWludXRlc31gO1xuICAgIH1cblxuICAgIGNvbnN0IHJlcXVlc3QgPSBmdW5jdGlvbiAobGluaywgZXh0cmFPcHRpb25zKSB7XG4gICAgICAgIHJldHVybiBmZXRjaChhcGlVUkwgKyBsaW5rLCB7XG4gICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgJ0FjY2VwdCc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgLi4uKGV4dHJhT3B0aW9ucyB8fCB7fSlcbiAgICAgICAgfSlcbiAgICAgICAgICAgIC50aGVuKHJlcyA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKCFyZXMub2spIHRocm93IG5ldyBFcnJvcignQVBJIGVycm9yJyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlcy5qc29uKCk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmNhdGNoKGVyciA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignQVBJIHJlcXVlc3QgZmFpbGVkOicsIGVycik7XG5cbiAgICAgICAgICAgICAgICAvLyByZXBvcnRFcnJvcihlcnIpO1xuICAgICAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAgICAgLy8gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZhdi1wYWdlJykuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgICAgICAgICAvLyBpZiAod2luZG93LmxvY2F0aW9uLmhyZWYuc3RhcnRzV2l0aChcImh0dHBzOi8vd3d3LmZhdmJldC5oci9cIikpIHtcbiAgICAgICAgICAgICAgICAvLyAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSAnL3Byb21vY2lqZS9wcm9tb2NpamEvc3R1Yi8nO1xuICAgICAgICAgICAgICAgIC8vIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gJy9wcm9tb3MvcHJvbW8vc3R1Yi8nO1xuICAgICAgICAgICAgICAgIC8vIH1cblxuICAgICAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChlcnIpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBoaWRlTG9hZGVyKCl7XG4gICAgICAgIGxvYWRlci5jbGFzc0xpc3QuYWRkKFwiaGlkZVwiKVxuICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93ID0gXCJhdXRvXCJcbiAgICAgICAgbWFpblBhZ2UuY2xhc3NMaXN0LnJlbW92ZShcImxvYWRpbmdcIilcbiAgICB9XG5cblxuXG4gICAgZnVuY3Rpb24gaW5pdFNwaW4oKXtcblxuICAgICAgICBidG5PcGVuLnRleHRDb250ZW50ID0gdHJhbnNsYXRlS2V5KFwibG9hZGVyXCIpXG4gICAgICAgIGNoYWxsYW5nZUJ0blBvaW50ZXIuY2xhc3NMaXN0LmFkZChcImhpZGVcIik7XG5cblxuICAgICAgICBzZW5kU3BpblJlcXVlc3QoKS50aGVuKHJlcyA9PiB7XG5cbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlcylcblxuICAgICAgICAgICAgY29uc3QgcHJpemUgPSByZXMubnVtYmVyO1xuICAgICAgICAgICAgY29uc3Qgc3RyZWFrQm9udXMgPSByZXMuc3RyZWFrQm9udXMgfHwgZGVidWc7XG5cbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHN0cmVha0JvbnVzKVxuXG4gICAgICAgICAgICBidG5PcGVuLnRleHRDb250ZW50ID0gdHJhbnNsYXRlS2V5KFwib3BlbkJ0blwiKVxuXG4gICAgICAgICAgICBidG5PcGVuLmNsYXNzTGlzdC5hZGQoXCJoaWRlXCIpO1xuICAgICAgICAgICAgY2hhbGxhbmdlRGVwb3NpdEJ0bi5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZVwiKTtcblxuICAgICAgICAgICAgc2V0U3RyZWFrRGF5cyhzdHJlYWtCb251cylcblxuICAgICAgICAgICAgaWYgKHByaXplID09PSAncmVzcGluJykgb3BlblBvcHVwQnlBdHRyKCd1bmx1Y2t5UG9wdXAnLCB0cnVlKTtcbiAgICAgICAgICAgIGlmIChwcml6ZSA9PT0gJ25vdGhpbmcnKSBvcGVuUG9wdXBCeUF0dHIoJ3VubHVja3lQb3B1cCcsIHRydWUpO1xuICAgICAgICAgICAgaWYgKHByaXplID09PSAnd2hlZWxCdWJibGVTcGFucycpIG9wZW5Qb3B1cEJ5QXR0cigncHJpemU1MFBvaW50cycsIHRydWUpO1xuICAgICAgICAgICAgaWYgKHByaXplID09PSAnaXBob25lJykgb3BlblBvcHVwQnlBdHRyKCdwcml6ZUlwaG9uZScsIHRydWUpO1xuICAgICAgICAgICAgaWYgKHByaXplID09PSAnbWFjQm9vaycpIG9wZW5Qb3B1cEJ5QXR0cigncHJpemVMYXB0b3AnLCB0cnVlKTtcbiAgICAgICAgICAgIGlmIChwcml6ZSA9PT0gJ2FpclBvZHMnKSBvcGVuUG9wdXBCeUF0dHIoJ3ByaXplQWlycG9kcycsIHRydWUpO1xuICAgICAgICAgICAgaWYgKHByaXplID09PSAnYXBwbGVXYXRjaCcpIG9wZW5Qb3B1cEJ5QXR0cigncHJpemVXYXRjaCcsIHRydWUpO1xuICAgICAgICAgICAgaWYgKHByaXplID09PSAncm96ZXRrYUdpZnRDYXJkJykgb3BlblBvcHVwQnlBdHRyKCdwcml6ZUdpZnQnLCB0cnVlKTtcbiAgICAgICAgICAgIGlmIChwcml6ZSA9PT0gJ2ZzNTAnKSBvcGVuUG9wdXBCeUF0dHIoJ3ByaXplNTBGc0dhdGVPbHltcCcsIHRydWUpO1xuICAgICAgICAgICAgaWYgKHByaXplID09PSAncG9pbnRzNTAnKSBvcGVuUG9wdXBCeUF0dHIoJzUwUG9pbnRzSW5mbycsIHRydWUpO1xuICAgICAgICAgICAgaWYgKHByaXplID09PSAnZnMyNV8zb2FrcycpIG9wZW5Qb3B1cEJ5QXR0cigncHJpemUyNUZzTHVja3lQZW5ueScsIHRydWUpO1xuICAgICAgICAgICAgaWYgKHByaXplID09PSAnZnMyNV9wbGF5c29uJykgb3BlblBvcHVwQnlBdHRyKCdwcml6ZTI1RnNDb2luU3RyaWtlJywgdHJ1ZSk7XG4gICAgICAgICAgICBpZiAocHJpemUgPT09ICdmczQwJykgb3BlblBvcHVwQnlBdHRyKCdwcml6ZTQwRnNQaXJvdHMzJywgdHJ1ZSk7XG4gICAgICAgICAgICBpZiAocHJpemUgPT09ICdmczI1X2JnYW1pbmcnKSBvcGVuUG9wdXBCeUF0dHIoJ3ByaXplMjVGc1Nub29wRG9nZycsIHRydWUpO1xuICAgICAgICAgICAgaWYgKHByaXplID09PSAnZnMyNV9wdXNoR2FtaW5nJykgb3BlblBvcHVwQnlBdHRyKCdwcml6ZTI1RnNCaWdCYW1ib28nLCB0cnVlKTtcbiAgICAgICAgICAgIGlmIChwcml6ZSA9PT0gJ2ZzMTAnKSBvcGVuUG9wdXBCeUF0dHIoJ3ByaXplMTBGc0hpdFNsb3QnLCB0cnVlKTtcbiAgICAgICAgICAgIGlmIChwcml6ZSA9PT0gJ2ZzMzAnKSBvcGVuUG9wdXBCeUF0dHIoJ3ByaXplMzBGc1NoaW5pZ0Nyb3duJywgdHJ1ZSk7XG4gICAgICAgICAgICBpZiAocHJpemUgPT09ICdmczI1X2hhY2tzYXcnKSBvcGVuUG9wdXBCeUF0dHIoJ3ByaXplMjVGc0xlQmFuZGl0JywgdHJ1ZSk7XG4gICAgICAgICAgICBpZiAocHJpemUgPT09ICdmczIwJykgb3BlblBvcHVwQnlBdHRyKCdwcml6ZTIwRnNMdWNrT2ZQYW5kYScsIHRydWUpO1xuXG5cbiAgICAgICAgICAgIHJlcXVlc3QoYC9mYXZ1c2VyLyR7dXNlcklkfWApLnRoZW4odXNlciA9PiB7XG4gICAgICAgICAgICAgICAgc2V0VXNlclByb2dyZXNzKHVzZXIpXG4gICAgICAgICAgICAgICAgZGlzcGxheUJldHNIaXN0b3J5KHVzZXIuc3BpbnMpXG4gICAgICAgICAgICB9KVxuXG5cbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzZW5kU3BpblJlcXVlc3QoKSB7XG4gICAgICAgIGlmICghdXNlcklkKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZGVidWcpIHtcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoe1xuICAgICAgICAgICAgICAgIG51bWJlcjogJ3Jlc3BpbicsXG4gICAgICAgICAgICAgICAgdHlwZTogJ3Rlc3QnXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHBhcmFtcyA9IHt1c2VyaWQ6IHVzZXJJZH07XG4gICAgICAgIHJldHVybiByZXF1ZXN0KCcvc3BpbicsIHtcbiAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkocGFyYW1zKVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzZXRTdHJlYWtEYXlzKHN0cmVhaykge1xuICAgICAgICBzdHJlYWtEYXlzLmZvckVhY2goKGRheSwgaSkgPT57XG4gICAgICAgICAgICBkYXkuY2xhc3NMaXN0LnJlbW92ZShcIl9hY3RpdmVcIilcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGRheSlcbiAgICAgICAgICAgIGlmKGkgKyAxIDw9IHN0cmVhayl7XG4gICAgICAgICAgICAgICAgZGF5LmNsYXNzTGlzdC5hZGQoJ19hY3RpdmUnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICAgc3RyZWFrRGF5c1BvcHVwLmZvckVhY2goKGRheSwgaSkgPT57XG4gICAgICAgICAgICBkYXkuY2xhc3NMaXN0LnJlbW92ZShcIl9hY3RpdmVcIilcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGRheSlcbiAgICAgICAgICAgIGlmKGkgKyAxIDw9IHN0cmVhayl7XG4gICAgICAgICAgICAgICAgZGF5LmNsYXNzTGlzdC5hZGQoJ19hY3RpdmUnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzZXRVc2VyUHJvZ3Jlc3ModXNlckRhdGEpe1xuXG4gICAgICAgIGNvbnNvbGUubG9nKHVzZXJEYXRhKTtcbiAgICAgICAgbGV0IHNwaW5BbGxvd2VkID0gdXNlckRhdGEuc3BpbkFsbG93ZWQsXG4gICAgICAgICAgICBwb2ludHNQZXJEYXkgPSB1c2VyRGF0YS5wb2ludHNQZXJEYXksXG4gICAgICAgICAgICBzdHJlYWsgPSB1c2VyRGF0YS5zcGluc1N0cmVhayxcbiAgICAgICAgICAgIGxhc3RVcGRhdGUgPSB1c2VyRGF0YS5sYXN0VXBkYXRlXG5cbiAgICAgICAgY29uc29sZS5sb2coc3RyZWFrRGF5cylcblxuICAgICAgICBzZXRTdHJlYWtEYXlzKHN0cmVhaylcblxuICAgICAgICAvLyBwb2ludHNQZXJEYXkgPSAxMDAwMlxuXG4gICAgICAgIGNvbnN0IHRocmVzaG9sZFBvaW50cyA9IDEwMDBcblxuICAgICAgICBjb25zb2xlLmxvZyhwb2ludHNQZXJEYXkpXG5cbiAgICAgICAgcG9pbnRzUGVyRGF5ID0gcG9pbnRzUGVyRGF5ID4gdGhyZXNob2xkUG9pbnRzID8gdGhyZXNob2xkUG9pbnRzIDogcG9pbnRzUGVyRGF5O1xuXG4gICAgICAgIGlmKCFwb2ludHNQZXJEYXkpIHBvaW50c1BlckRheSA9IDBcblxuXG5cbiAgICAgICAgY291bnRlclBvaW50cy50ZXh0Q29udGVudCA9IGAke3BvaW50c1BlckRheX1gXG5cbiAgICAgICAgbGV0IHByb2dyZXNzID0gTWF0aC5taW4oKHBvaW50c1BlckRheSAvIHRocmVzaG9sZFBvaW50cykgKiAxMDAsIDEwMCk7XG5cbiAgICAgICAgY29uc29sZS5sb2cocHJvZ3Jlc3MpO1xuXG5cbiAgICAgICAgaWYgKHByb2dyZXNzID49IDEwMCkge1xuICAgICAgICAgICAgcHJvZ3Jlc3MgPSAxMDBcbiAgICAgICAgICAgIGNoYWxsYW5nZUJsdXIuY2xhc3NMaXN0LmFkZCgnaGlkZScpXG4gICAgICAgICAgICBwcm9ncmVzc0JveC5jbGFzc0xpc3QucmVtb3ZlKCdfbG9jaycpXG4gICAgICAgICAgICBwcm9ncmVzc0JveC5jbGFzc0xpc3QuYWRkKCdfb3BlbicpXG4gICAgICAgICAgICBjaGFsbGFuZ2VCdG5Qb2ludGVyLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRlXCIpXG4gICAgICAgICAgICBidG5PcGVuLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKVxuICAgICAgICAgICAgY2hhbGxhbmdlRGVwb3NpdEJ0bi5jbGFzc0xpc3QuYWRkKCdoaWRlJylcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImRzYWRhc1wiKVxuICAgICAgICAgICAgY2hhbGxhbmdlQmx1ci5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJylcbiAgICAgICAgICAgIHByb2dyZXNzQm94LmNsYXNzTGlzdC5hZGQoJ19sb2NrJylcbiAgICAgICAgICAgIHByb2dyZXNzQm94LmNsYXNzTGlzdC5yZW1vdmUoJ19vcGVuJylcbiAgICAgICAgICAgIGNoYWxsYW5nZUJ0blBvaW50ZXIuY2xhc3NMaXN0LmFkZChcImhpZGVcIilcbiAgICAgICAgICAgIGJ0bk9wZW4uY2xhc3NMaXN0LmFkZCgnaGlkZScpXG4gICAgICAgICAgICBjaGFsbGFuZ2VEZXBvc2l0QnRuLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKVxuXG5cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnNvbGUubG9nKGDQn9GA0L7Qs9GA0LXRgSDQutC+0YDQuNGB0YLRg9Cy0LDRh9CwOiAke3Byb2dyZXNzLnRvRml4ZWQoMCl9JWApO1xuXG5cbiAgICAgICAgaWYodXNlcklkKXtcbiAgICAgICAgICAgIHNldFByb2dyZXNzV2lkdGgocHJvZ3Jlc3MpO1xuICAgICAgICB9XG5cblxuICAgICAgICBjb25zb2xlLmxvZyh1c2VyRGF0YSlcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzZXRQcm9ncmVzc1dpZHRoKHByb2dyZXNzUGVyY2VudCkge1xuXG4gICAgICAgIHByb2dyZXNzQmFyLnN0eWxlLndpZHRoID0gYCR7cHJvZ3Jlc3NQZXJjZW50fSVgO1xuXG4gICAgICAgIGNvbnN0IGJhclJlY3QgPSBwcm9ncmVzc0Jhci5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgICAgY29uc3QgcGFyZW50UmVjdCA9IGN1cnJlbnRDYXJkc1dyYXAuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG5cbiAgICAgICAgY29uc3QgcmlnaHRFZGdlID0gYmFyUmVjdC5yaWdodCAtIHBhcmVudFJlY3QubGVmdCAtIDU7XG5cbiAgICAgICAgY2hhbGxhbmdlQmx1ci5zdHlsZS5sZWZ0ID0gYCR7cmlnaHRFZGdlfXB4YDtcbiAgICAgICAgY2hhbGxhbmdlQmx1clN0YXR1cy50ZXh0Q29udGVudCA9IGAke3Byb2dyZXNzUGVyY2VudC50b0ZpeGVkKDApfSVgO1xuXG5cbiAgICB9XG4gICAgZnVuY3Rpb24gcmVzb2x2ZVN0YXR1c1RyYW5zbGF0aW9uKHN0YXR1cykge1xuICAgICAgICBpZiAoIXN0YXR1cyB8fCBzdGF0dXMgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJhbnNsYXRlS2V5KCdiZXRVbmRlZmluZWQnKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoc3RhdHVzID09PSAnd2luJykge1xuICAgICAgICAgICAgcmV0dXJuIHRyYW5zbGF0ZUtleSgnd2luQmV0Jyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHN0YXR1cyA9PT0gJ2xvc2UnKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJhbnNsYXRlS2V5KCdsb3NlQmV0Jyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBkaXNwbGF5QmV0c0hpc3RvcnkoYmV0cykge1xuXG4gICAgICAgIGNvbnNvbGUubG9nKGJldHMpO1xuICAgICAgICBjb25zdCBzcGluSXRlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zcGlucy1yb3cnKTtcbiAgICAgICAgY29uc3Qgbm9TcGluSXRlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uby1zcGlucycpO1xuICAgICAgICBjb25zdCBub0JldHMgPSAhYmV0cyB8fCBiZXRzLmxlbmd0aCA9PT0gMDtcblxuICAgICAgICBpZiAobm9CZXRzICYmICFkZWJ1Zykge1xuICAgICAgICAgICAgc3Bpbkl0ZW0uY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xuICAgICAgICAgICAgbm9TcGluSXRlbS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJyk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZihkZWJ1Zyl7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oXCJkZWJ1ZyBiZXQgaGlzdG9yeVwiKVxuICAgICAgICAgICAgcmV0dXJuO1xuXG4gICAgICAgIH1cblxuICAgICAgICBzcGluSXRlbS5pbm5lckhUTUwgPVxuICAgICAgICAgICAgYFxuICAgICAgIDxkaXYgY2xhc3M9XCJzcGlucy1yb3ctaGVhZFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRlbnQtZGF0ZVwiIGRhdGEtdHJhbnNsYXRlPVwibXlCZXREYXRlXCI+PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGVudC1wcml6ZVwiIGRhdGEtdHJhbnNsYXRlPVwibXlCZXRJZFwiPjwvZGl2PlxuPCEtLSAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb250ZW50LXN0YXR1c1wiIGRhdGEtdHJhbnNsYXRlPVwibXlCZXRTdGF0dXNcIj48L2Rpdj4tLT5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIGA7XG4gICAgICAgIHNwaW5JdGVtLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKTtcbiAgICAgICAgbm9TcGluSXRlbS5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XG5cbiAgICAgICAgbGV0IHVwZCA9IDA7XG5cbiAgICAgICAgYmV0cy5mb3JFYWNoKHNwaW4gPT4ge1xuICAgICAgICAgICAgY29uc3Qgc3BpbkRhdGUgPSBuZXcgRGF0ZShzcGluLmRhdGUpO1xuICAgICAgICAgICAgY29uc3QgZm9ybWF0dGVkRGF0ZSA9IHNwaW5EYXRlLnRvTG9jYWxlRGF0ZVN0cmluZygndWstVUEnKS5zbGljZSgwLCA1KTtcbiAgICAgICAgICAgIGNvbnN0IHN0YXR1cyA9IHJlc29sdmVTdGF0dXNUcmFuc2xhdGlvbihzcGluLnN0YXR1cyk7XG5cbiAgICAgICAgICAgIGlmIChzdGF0dXMpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBzcGluRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgIHNwaW5FbGVtZW50LmNsYXNzTGlzdC5hZGQoJ3NwaW5zLXJvdy1pdGVtJyk7XG5cbiAgICAgICAgICAgICAgICBjb25zdCBpc1dpbiA9IHNwaW4uc3RhdHVzID09PSBcIndpblwiO1xuICAgICAgICAgICAgICAgIGNvbnN0IHN0YXR1c0NsYXNzID0gaXNXaW4gPyAnX2RvbmUnIDogJyc7XG5cbiAgICAgICAgICAgICAgICBzcGluRWxlbWVudC5pbm5lckhUTUwgPSBgXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiY29udGVudC1kYXRlXCI+JHtmb3JtYXR0ZWREYXRlfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJjb250ZW50LXByaXplXCI+JHtzcGluLm5hbWV9PC9zcGFuPlxuPCEtLSAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJjb250ZW50LXN0YXR1cyAke3N0YXR1c0NsYXNzfVwiPjwvc3Bhbj4tLT5cbiAgICAgICAgICAgICAgICBgO1xuICAgICAgICAgICAgICAgIHNwaW5JdGVtLmFwcGVuZENoaWxkKHNwaW5FbGVtZW50KTtcbiAgICAgICAgICAgICAgICB1cGQrKztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKHVwZCA9PT0gMCkge1xuICAgICAgICAgICAgc3Bpbkl0ZW0uY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xuICAgICAgICAgICAgbm9TcGluSXRlbS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzZXRCZXRIaXN0b3J5KHN0YWdlTnVtKXtcbiAgICAgICAgLy8gcmVxdWVzdChcIi9iZXRzSGlzdG9yeVwiKS50aGVuKChyZXMpID0+IHtcbiAgICAgICAgLy8gICAgIGNvbnN0IHVzZXIgPSByZXMuZmluZCh1c2VyID0+IHVzZXIudXNlcmlkID09PSB1c2VySWQpO1xuICAgICAgICAvLyAgICAgY29uc3QgYmV0cyA9IHVzZXI/LmJldHNcbiAgICAgICAgLy8gICAgIGRpc3BsYXlCZXRzSGlzdG9yeShiZXRzKVxuICAgICAgICAvLyB9KVxuICAgIH1cblxuXG4gICAgYXN5bmMgZnVuY3Rpb24gaW5pdCgpIHtcbiAgICAgICAgbGV0IGF0dGVtcHRzID0gMDtcbiAgICAgICAgY29uc3QgbWF4QXR0ZW1wdHMgPSAyMDtcbiAgICAgICAgY29uc3QgYXR0ZW1wdEludGVydmFsID0gNTA7XG5cbiAgICAgICAgZnVuY3Rpb24gdHJ5RGV0ZWN0VXNlcklkKCkge1xuICAgICAgICAgICAgaWYgKHdpbmRvdy5zdG9yZSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHN0YXRlID0gd2luZG93LnN0b3JlLmdldFN0YXRlKCk7XG4gICAgICAgICAgICAgICAgdXNlcklkID0gc3RhdGUuYXV0aC5pc0F1dGhvcml6ZWQgJiYgc3RhdGUuYXV0aC5pZCB8fCAnJztcbiAgICAgICAgICAgIH0gZWxzZSBpZiAod2luZG93LmdfdXNlcl9pZCkge1xuICAgICAgICAgICAgICAgIHVzZXJJZCA9IHdpbmRvdy5nX3VzZXJfaWQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBxdWlja0NoZWNrQW5kUmVuZGVyKCkge1xuICAgICAgICAgICAgY2hlY2tVc2VyQXV0aCgpO1xuXG5cblxuICAgICAgICAgICAgLy8gb3BlblBvcHVwQnlBdHRyKFwicHJpemVMYXB0b3BcIiwgdHJ1ZSlcblxuICAgICAgICAgICAgYnRuT3Blbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGluaXRTcGluKTtcblxuICAgICAgICAgICAgLy8gc2V0QmV0SGlzdG9yeSgpXG5cbiAgICAgICAgICAgIHRhYmxlVGFicy5mb3JFYWNoKCh0YWIsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgaWYoaW5kZXggKyAxID09PSBhY3RpdmVXZWVrKXtcbiAgICAgICAgICAgICAgICAgICAgdGFiLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuICAgICAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgICAgICB0YWIuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRhYi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+e1xuICAgICAgICAgICAgICAgICAgICB0YWJsZVRhYnMuZm9yRWFjaCh0ID0+IHQuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJykpO1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh0YWJsZVRhYnMpXG5cbiAgICAgICAgICAgICAgICAgICAgbGV0IHRhYk51bSA9IE51bWJlcih0YWIuZ2V0QXR0cmlidXRlKFwiZGF0YS13ZWVrXCIpKVxuICAgICAgICAgICAgICAgICAgICB0YWIuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gICAgICAgICAgICAgICAgICAgIHJlbmRlclVzZXJzKHRhYk51bSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICByZW5kZXJVc2VycyhhY3RpdmVXZWVrKVxuXG4gICAgICAgICAgICBzZXRUaW1lb3V0KGhpZGVMb2FkZXIsIDEwMDApO1xuXG4gICAgICAgICAgICBTZXRTbGlkZXJXaWR0aEJsdXIoKVxuXG4gICAgICAgICAgICBzZXRUaW1lb3V0KHRyaWdnZXJTaGFrZSwgaW5pdGlhbERlbGF5KTtcblxuICAgICAgICAgICAgcGFydGljaXBhdGVCdG5zLmZvckVhY2goYnRuID0+IHtcbiAgICAgICAgICAgICAgICBidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBwYXJ0aWNpcGF0ZSk7XG4gICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucG9wdXBfX2Nsb3NlJykuZm9yRWFjaChjbG9zZUJ0biA9PiB7XG4gICAgICAgICAgICAgICAgY2xvc2VCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjbG9zZUFsbFBvcHVwcyk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm9wZW4tYnRuJykuZm9yRWFjaChidG4gPT4ge1xuICAgICAgICAgICAgICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcG9wdXBBdHRyID0gYnRuLmdldEF0dHJpYnV0ZSgnZGF0YS1wb3B1cCcpO1xuICAgICAgICAgICAgICAgICAgICBvcGVuUG9wdXBCeUF0dHIocG9wdXBBdHRyKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucG9wdXBzJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IG9wZW5Qb3B1cEVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBvcHVwOm5vdCguaGlkZSknKTtcbiAgICAgICAgICAgICAgICBpZiAob3BlblBvcHVwRWwgJiYgIW9wZW5Qb3B1cEVsLmNvbnRhaW5zKGUudGFyZ2V0KSkge1xuICAgICAgICAgICAgICAgICAgICBjbG9zZUFsbFBvcHVwcygpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuXG5cbiAgICAgICAgICAgIHVwZGF0ZVNsaWRlcihudWxsLCBzbGlkZXJEYXlJbmRleCk7XG5cbiAgICAgICAgICAgIHNsaWRlci5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCBoYW5kbGVTdGFydCk7XG4gICAgICAgICAgICBzbGlkZXIuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgaGFuZGxlTW92ZSk7XG4gICAgICAgICAgICBzbGlkZXIuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIGhhbmRsZUVuZCk7XG4gICAgICAgICAgICBzbGlkZXIuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsIGhhbmRsZUVuZCk7XG5cbiAgICAgICAgICAgIHNsaWRlci5hZGRFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0JywgaGFuZGxlU3RhcnQpO1xuICAgICAgICAgICAgc2xpZGVyLmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNobW92ZScsIGhhbmRsZU1vdmUpO1xuICAgICAgICAgICAgc2xpZGVyLmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoZW5kJywgaGFuZGxlRW5kKTtcblxuICAgICAgICAgICAgYnRuTGVmdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IG1vdmVTbGlkZXIoLTEpKTtcbiAgICAgICAgICAgIGJ0blJpZ2h0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gbW92ZVNsaWRlcigxKSk7XG4gICAgICAgICAgICAvLyBkb3RzLmZvckVhY2goKGRvdCwgaW5kZXgpID0+IGRvdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IGdvVG9TbGlkZShpbmRleCkpKTtcblxuXG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCB3YWl0Rm9yVXNlcklkID0gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGludGVydmFsID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRyeURldGVjdFVzZXJJZCgpO1xuICAgICAgICAgICAgICAgIGlmICh1c2VySWQgfHwgYXR0ZW1wdHMgPj0gbWF4QXR0ZW1wdHMpIHtcbiAgICAgICAgICAgICAgICAgICAgcXVpY2tDaGVja0FuZFJlbmRlcigpO1xuICAgICAgICAgICAgICAgICAgICBjbGVhckludGVydmFsKGludGVydmFsKTtcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBhdHRlbXB0cysrO1xuICAgICAgICAgICAgfSwgYXR0ZW1wdEludGVydmFsKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgYXdhaXQgd2FpdEZvclVzZXJJZDtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBsb2FkVHJhbnNsYXRpb25zKCkge1xuICAgICAgICByZXR1cm4gcmVxdWVzdChgL25ldy10cmFuc2xhdGVzLyR7bG9jYWxlfWApXG4gICAgICAgICAgICAudGhlbihqc29uID0+IHtcbiAgICAgICAgICAgICAgICBpMThuRGF0YSA9IGpzb247XG4gICAgICAgICAgICAgICAgdHJhbnNsYXRlKCk7XG4gICAgICAgICAgICAgICAgY29uc3QgdGFyZ2V0Tm9kZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2FtQ2hpbGxcIik7XG4gICAgICAgICAgICAgICAgY29uc3QgbXV0YXRpb25PYnNlcnZlciA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKGZ1bmN0aW9uIChtdXRhdGlvbnMpIHtcbiAgICAgICAgICAgICAgICAgICAgbXV0YXRpb25PYnNlcnZlci5kaXNjb25uZWN0KCk7XG4gICAgICAgICAgICAgICAgICAgIHRyYW5zbGF0ZSgpO1xuICAgICAgICAgICAgICAgICAgICBtdXRhdGlvbk9ic2VydmVyLm9ic2VydmUodGFyZ2V0Tm9kZSwgeyBjaGlsZExpc3Q6IHRydWUsIHN1YnRyZWU6IHRydWUgfSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgbXV0YXRpb25PYnNlcnZlci5vYnNlcnZlKHRhcmdldE5vZGUsIHtcbiAgICAgICAgICAgICAgICAgICAgY2hpbGRMaXN0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBzdWJ0cmVlOiB0cnVlXG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIH0pO1xuICAgIH1cblxuXG4gICAgZnVuY3Rpb24gU2V0U2xpZGVyV2lkdGhCbHVyKCl7XG4gICAgICAgIGNvbnN0IHNsaWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jaGFsbGFuZ2VfX2N1cnJlbnQnKTtcbiAgICAgICAgY29uc3Qgc2xpZGVzID0gc2xpZGVyLnF1ZXJ5U2VsZWN0b3JBbGwoJy5jaGFsbGFuZ2VfX2N1cnJlbnQtaXRlbScpO1xuICAgICAgICBjb25zdCB0YWJzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNoYWxsYW5nZV9fdGFicy1pdGVtJyk7XG4gICAgICAgIGNvbnN0IGRvdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY2hhbGxhbmdlX19uYXYtZG90cy1pdGVtJyk7XG4gICAgICAgIGNvbnN0IGJ0bkxlZnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2hhbGxhbmdlX19uYXYtbGVmdCcpO1xuICAgICAgICBjb25zdCBidG5SaWdodCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jaGFsbGFuZ2VfX25hdi1yaWdodCcpO1xuXG4gICAgICAgIGxldCBjdXJyZW50SW5kZXggPSBjdXJyZW50RGF5TnVtYmVyIC0gMTtcblxuICAgICAgICBjb25zb2xlLmxvZyhjdXJyZW50RGF5TnVtYmVyKVxuXG4gICAgICAgIGZ1bmN0aW9uIHVwZGF0ZVNsaWRlcihpbmRleCwgZGF5SW5kZXgpIHtcbiAgICAgICAgICAgIHNsaWRlcy5mb3JFYWNoKHNsaWRlID0+IHNsaWRlLmNsYXNzTGlzdC5yZW1vdmUoJ19hY3RpdmUnKSk7XG4gICAgICAgICAgICB0YWJzLmZvckVhY2godGFiID0+IHRhYi5jbGFzc0xpc3QucmVtb3ZlKCdfYWN0aXZlJykpO1xuICAgICAgICAgICAgZG90cy5mb3JFYWNoKGRvdCA9PiBkb3QuY2xhc3NMaXN0LnJlbW92ZSgnX2FjdGl2ZScpKTtcblxuICAgICAgICAgICAgc2xpZGVzW2luZGV4XS5jbGFzc0xpc3QuYWRkKCdfYWN0aXZlJyk7XG4gICAgICAgICAgICB0YWJzW2luZGV4XS5jbGFzc0xpc3QuYWRkKCdfYWN0aXZlJyk7XG4gICAgICAgICAgICBkb3RzW2luZGV4XS5jbGFzc0xpc3QuYWRkKCdfYWN0aXZlJyk7XG5cbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHNsaWRlckRheUluZGV4KVxuXG4gICAgICAgIH1cblxuICAgICAgICB1cGRhdGVTbGlkZXIoY3VycmVudERheU51bWJlciAtIDEsIHNsaWRlckRheUluZGV4KTtcbiAgICAgICAgdGFicy5mb3JFYWNoKCh0YWIsIGkpID0+e1xuICAgICAgICAgICAgaWYoaSArIDEgPD0gY3VycmVudERheU51bWJlcil7XG4gICAgICAgICAgICAgICAgdGFiLmNsYXNzTGlzdC5hZGQoJ19vcGVuJyk7XG4gICAgICAgICAgICAgICAgdGFiLmNsYXNzTGlzdC5yZW1vdmUoJ19sb2NrJyk7XG5cbiAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgIHRhYi5jbGFzc0xpc3QucmVtb3ZlKCdfYWN0aXZlJyk7XG4gICAgICAgICAgICAgICAgdGFiLmNsYXNzTGlzdC5hZGQoJ19sb2NrJyk7XG4gICAgICAgICAgICAgICAgdGFiLmNsYXNzTGlzdC5yZW1vdmUoJ19vcGVuJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZihpICsgMSA9PT0gY3VycmVudERheU51bWJlcil7XG4gICAgICAgICAgICAgICAgdGFiLmNsYXNzTGlzdC5hZGQoJ19hY3RpdmUnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSApO1xuXG4gICAgICAgIGZ1bmN0aW9uIG1vdmVMZWZ0KCkge1xuICAgICAgICAgICAgY3VycmVudEluZGV4ID0gKGN1cnJlbnRJbmRleCAtIDEgKyBzbGlkZXMubGVuZ3RoKSAlIHNsaWRlcy5sZW5ndGg7XG4gICAgICAgICAgICBzbGlkZXJEYXlJbmRleCA9IGN1cnJlbnRJbmRleFxuICAgICAgICAgICAgY29uc29sZS5sb2coc2xpZGVyRGF5SW5kZXgpXG4gICAgICAgICAgICB1cGRhdGVTbGlkZXIoY3VycmVudEluZGV4ICwgc2xpZGVyRGF5SW5kZXgpO1xuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gbW92ZVJpZ2h0KCkge1xuICAgICAgICAgICAgY3VycmVudEluZGV4ID0gKGN1cnJlbnRJbmRleCArIDEpICUgc2xpZGVzLmxlbmd0aDtcbiAgICAgICAgICAgIHNsaWRlckRheUluZGV4ID0gY3VycmVudEluZGV4XG4gICAgICAgICAgICB1cGRhdGVTbGlkZXIoY3VycmVudEluZGV4LCBzbGlkZXJEYXlJbmRleCk7XG4gICAgICAgIH1cblxuICAgICAgICBidG5MZWZ0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgbW92ZUxlZnQpO1xuICAgICAgICBidG5SaWdodC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIG1vdmVSaWdodCk7XG5cbiAgICAgICAgdGFicy5mb3JFYWNoKCh0YWIsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICB0YWIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgY3VycmVudEluZGV4ID0gaW5kZXg7XG4gICAgICAgICAgICAgICAgc2xpZGVyRGF5SW5kZXggPSBpbmRleFxuICAgICAgICAgICAgICAgIHVwZGF0ZVNsaWRlcihjdXJyZW50SW5kZXgsIHNsaWRlckRheUluZGV4KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcblxuICAgICAgICBkb3RzLmZvckVhY2goKGRvdCwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgIGRvdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgICAgICBjdXJyZW50SW5kZXggPSBpbmRleDtcbiAgICAgICAgICAgICAgICB1cGRhdGVTbGlkZXIoY3VycmVudEluZGV4LCBzbGlkZXJEYXlJbmRleCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG5cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjaGVja1VzZXJBdXRoKCkge1xuICAgICAgICBjb25zdCBsb2FkVGltZSA9IDIwMDtcbiAgICAgICAgcmVxdWVzdChgL2ZhdnVzZXIvJHt1c2VySWR9YCkudGhlbigodXNlcikgPT4ge1xuXG4gICAgICAgICAgICBkaXNwbGF5QmV0c0hpc3RvcnkodXNlci5zcGlucylcblxuICAgICAgICAgICAgbGFzdFVwZEJsb2NrLnRleHRDb250ZW50ID0gdXNlci5sYXN0VXBkYXRlID8gZm9ybWF0RGF0ZVRpbWVDdXN0b20odXNlci5sYXN0VXBkYXRlKSA6IFwiLS06LS1cIlxuXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBzaG93RWxlbWVudHMgPSAoZWxlbWVudHMpID0+IGVsZW1lbnRzLmZvckVhY2goZWwgPT4gZWwuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpKTtcbiAgICAgICAgICAgICAgICBjb25zdCBoaWRlRWxlbWVudHMgPSAoZWxlbWVudHMpID0+IGVsZW1lbnRzLmZvckVhY2goZWwgPT4gZWwuY2xhc3NMaXN0LmFkZCgnaGlkZScpKTtcblxuICAgICAgICAgICAgICAgIGRyb3BTcGlucy5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XG4gICAgICAgICAgICAgICAgY2hhbGxhbmdlQnRuUG9pbnRlci5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XG5cblxuICAgICAgICAgICAgICAgIGlmICghdXNlcklkKSB7XG4gICAgICAgICAgICAgICAgICAgIGhpZGVFbGVtZW50cyhwYXJ0aWNpcGF0ZUJ0bnMpO1xuICAgICAgICAgICAgICAgICAgICBoaWRlRWxlbWVudHMocmVkaXJlY3RCdG5zKTtcbiAgICAgICAgICAgICAgICAgICAgc2hvd0VsZW1lbnRzKHVuYXV0aE1zZ3MpO1xuICAgICAgICAgICAgICAgICAgICBoaWRlTG9hZGVyKCk7XG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRDYXJkc1dyYXAuY2xhc3NMaXN0LmFkZCgnX3VuYXV0aCcpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKGZhbHNlKTtcbiAgICAgICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudENhcmRzV3JhcC5jbGFzc0xpc3QucmVtb3ZlKCdfdW5hdXRoJyk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaGlkZUVsZW1lbnRzKHVuYXV0aE1zZ3MpO1xuXG4gICAgICAgICAgICAgICAgaWYgKHVzZXIudXNlcmlkKSB7XG4gICAgICAgICAgICAgICAgICAgIGhpZGVFbGVtZW50cyhwYXJ0aWNpcGF0ZUJ0bnMpO1xuICAgICAgICAgICAgICAgICAgICBzaG93RWxlbWVudHMocmVkaXJlY3RCdG5zKTtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheUJldHNIaXN0b3J5KHVzZXIuc3BpbnMpXG4gICAgICAgICAgICAgICAgICAgIHNldFVzZXJQcm9ncmVzcyh1c2VyKTtcbiAgICAgICAgICAgICAgICAgICAgLy8gY2hhbGxhbmdlQnRuUG9pbnRlci5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJyk7XG4gICAgICAgICAgICAgICAgICAgIGRyb3BTcGlucy5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJyk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgc2hvd0VsZW1lbnRzKHBhcnRpY2lwYXRlQnRucyk7XG4gICAgICAgICAgICAgICAgICAgIGhpZGVFbGVtZW50cyhyZWRpcmVjdEJ0bnMpO1xuICAgICAgICAgICAgICAgIH1cblxuXG5cblxuICAgICAgICAgICAgICAgIGhpZGVMb2FkZXIoKTtcblxuXG5cblxuXG4gICAgICAgICAgICB9LCBsb2FkVGltZSlcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBmdW5jdGlvbiByZXBvcnRFcnJvcihlcnIpIHtcbiAgICAgICAgY29uc3QgcmVwb3J0RGF0YSA9IHtcbiAgICAgICAgICAgIG9yaWdpbjogd2luZG93LmxvY2F0aW9uLmhyZWYsXG4gICAgICAgICAgICB1c2VyaWQ6IHVzZXJJZCxcbiAgICAgICAgICAgIGVycm9yVGV4dDogZXJyPy5lcnJvciB8fCBlcnI/LnRleHQgfHwgZXJyPy5tZXNzYWdlIHx8ICdVbmtub3duIGVycm9yJyxcbiAgICAgICAgICAgIHR5cGU6IGVycj8ubmFtZSB8fCAnVW5rbm93bkVycm9yJyxcbiAgICAgICAgICAgIHN0YWNrOiBlcnI/LnN0YWNrIHx8ICcnXG4gICAgICAgIH07XG5cbiAgICAgICAgZmV0Y2goJ2h0dHBzOi8vZmF2LXByb20uY29tL2FwaS1jbXMvcmVwb3J0cy9hZGQnLCB7XG4gICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkocmVwb3J0RGF0YSlcbiAgICAgICAgfSkuY2F0Y2goY29uc29sZS53YXJuKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiB0cmFuc2xhdGUoKSB7XG4gICAgICAgIGNvbnN0IGVsZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtdHJhbnNsYXRlXScpXG4gICAgICAgIGlmIChlbGVtcyAmJiBlbGVtcy5sZW5ndGgpIHtcbiAgICAgICAgICAgIGlmKHRyYW5zbGF0ZVN0YXRlKXtcbiAgICAgICAgICAgICAgICBlbGVtcy5mb3JFYWNoKGVsZW0gPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBrZXkgPSBlbGVtLmdldEF0dHJpYnV0ZSgnZGF0YS10cmFuc2xhdGUnKTtcbiAgICAgICAgICAgICAgICAgICAgZWxlbS5pbm5lckhUTUwgPSBpMThuRGF0YVtrZXldIHx8ICcqLS0tLU5FRUQgVE8gQkUgVFJBTlNMQVRFRC0tLS0qICAga2V5OiAgJyArIGtleTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGkxOG5EYXRhW2tleV0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsZW0ucmVtb3ZlQXR0cmlidXRlKCdkYXRhLXRyYW5zbGF0ZScpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwidHJhbnNsYXRpb24gd29ya3MhXCIpXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmVmcmVzaExvY2FsaXplZENsYXNzKG1haW5QYWdlKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiByZWZyZXNoTG9jYWxpemVkQ2xhc3MoZWxlbWVudCkge1xuICAgICAgICBpZiAoIWVsZW1lbnQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBmb3IgKGNvbnN0IGxhbmcgb2YgWyd1aycsICdlbiddKSB7XG4gICAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUobGFuZyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKGxvY2FsZSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVuZGVyVXNlcnMod2Vlaykge1xuICAgICAgICByZXF1ZXN0KGAvdXNlcnMvJHt3ZWVrfWApXG4gICAgICAgICAgICAudGhlbihkYXRhID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCB1c2VycyA9IGRhdGE7XG4gICAgICAgICAgICAgICAgcG9wdWxhdGVVc2Vyc1RhYmxlKHVzZXJzLCB1c2VySWQsIHdlZWspO1xuICAgICAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcG9wdWxhdGVVc2Vyc1RhYmxlKHVzZXJzLCBjdXJyZW50VXNlcklkLCB3ZWVrKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKHVzZXJzKTtcbiAgICAgICAgcmVzdWx0c1RhYmxlLmlubmVySFRNTCA9ICcnO1xuICAgICAgICByZXN1bHRzVGFibGVPdGhlci5pbm5lckhUTUwgPSAnJztcbiAgICAgICAgaWYgKCF1c2Vycz8ubGVuZ3RoKSByZXR1cm47XG4gICAgICAgIGNvbnN0IGN1cnJlbnRVc2VyID0gdXNlcnMuZmluZCh1c2VyID0+IHVzZXIudXNlcmlkID09PSBjdXJyZW50VXNlcklkKTtcbiAgICAgICAgY29uc3QgaXNUb3BDdXJyZW50VXNlciA9IGN1cnJlbnRVc2VyICYmIHVzZXJzLnNsaWNlKDAsIDEwKS5zb21lKHVzZXIgPT4gdXNlci51c2VyaWQgPT09IGN1cnJlbnRVc2VySWQpO1xuICAgICAgICBjb25zdCB0b3BVc2Vyc0xlbmd0aCA9ICF1c2VySWQgfHwgaXNUb3BDdXJyZW50VXNlciAgPyAxMyA6IDEwO1xuICAgICAgICBjb25zdCB0b3BVc2VycyA9IHVzZXJzLnNsaWNlKDAsIHRvcFVzZXJzTGVuZ3RoKTtcbiAgICAgICAgdG9wVXNlcnMuZm9yRWFjaCh1c2VyID0+IHtcbiAgICAgICAgICAgIHJlc3VsdHNUYWJsZU90aGVyLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcbiAgICAgICAgICAgIGRpc3BsYXlVc2VyKHVzZXIsIHVzZXIudXNlcmlkID09PSBjdXJyZW50VXNlcklkLCByZXN1bHRzVGFibGUsIHRvcFVzZXJzLCBpc1RvcEN1cnJlbnRVc2VyLCB3ZWVrKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGlmICghaXNUb3BDdXJyZW50VXNlciAmJiBjdXJyZW50VXNlcikge1xuICAgICAgICAgICAgcmVzdWx0c1RhYmxlT3RoZXIuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpO1xuICAgICAgICAgICAgZGlzcGxheVVzZXIoY3VycmVudFVzZXIsIHRydWUsIHJlc3VsdHNUYWJsZU90aGVyLCB1c2VycywgZmFsc2UsIHdlZWspO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZGlzcGxheVVzZXIodXNlciwgaXNDdXJyZW50VXNlciwgdGFibGUsIHVzZXJzLCBpc1RvcEN1cnJlbnRVc2VyLCB3ZWVrKSB7XG4gICAgICAgIGNvbnN0IHJlbmRlclJvdyA9ICh1c2VyRGF0YSwgb3B0aW9ucyA9IHt9KSA9PiB7XG4gICAgICAgICAgICBjb25zdCB7IGhpZ2hsaWdodCA9IGZhbHNlLCBuZWlnaGJvciA9IGZhbHNlIH0gPSBvcHRpb25zO1xuICAgICAgICAgICAgY29uc3QgdXNlclJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgdXNlclJvdy5jbGFzc0xpc3QuYWRkKCd0YWJsZV9fcm93Jyk7XG5cbiAgICAgICAgICAgIGNvbnN0IHVzZXJQbGFjZSA9IHVzZXJzLmluZGV4T2YodXNlckRhdGEpICsgMTtcbiAgICAgICAgICAgIC8vIGNvbnN0IHVzZXJQbGFjZSA9IDM1XG4gICAgICAgICAgICBjb25zdCBwcml6ZUtleSA9IGRlYnVnID8gbnVsbCA6IGdldFByaXplVHJhbnNsYXRpb25LZXkodXNlclBsYWNlLCB3ZWVrKTtcblxuICAgICAgICAgICAgaWYgKHVzZXJQbGFjZSA8PSAzKSB7XG4gICAgICAgICAgICAgICAgdXNlclJvdy5jbGFzc0xpc3QuYWRkKGBwbGFjZSR7dXNlclBsYWNlfWApO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoaGlnaGxpZ2h0IHx8IGlzQ3VycmVudFVzZXIgJiYgIW5laWdoYm9yKSB7XG4gICAgICAgICAgICAgICAgdXNlclJvdy5jbGFzc0xpc3QuYWRkKCd5b3UnKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAobmVpZ2hib3IpIHtcbiAgICAgICAgICAgICAgICB1c2VyUm93LmNsYXNzTGlzdC5hZGQoJ19uZWlnaGJvcicpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB1c2VyUm93LmlubmVySFRNTCA9IGBcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0YWJsZV9fcm93LWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAke3VzZXJQbGFjZSA8IDEwID8gJzAnICsgdXNlclBsYWNlIDogdXNlclBsYWNlfVxuICAgICAgICAgICAgICAgICR7aXNDdXJyZW50VXNlciAmJiAhbmVpZ2hib3IgPyAnPHNwYW4gY2xhc3M9XCJ5b3VcIj4nICsgdHJhbnNsYXRlS2V5KFwieW91XCIpICsgJzwvc3Bhbj4nIDogJyd9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0YWJsZV9fcm93LWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAke2lzQ3VycmVudFVzZXIgJiYgIW5laWdoYm9yID8gdXNlckRhdGEudXNlcmlkIDogbWFza1VzZXJJZCh1c2VyRGF0YS51c2VyaWQpfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGFibGVfX3Jvdy1pdGVtXCI+XG4gICAgICAgICAgICAgICAgJHt1c2VyRGF0YS5wb2ludHNXZWVrfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGFibGVfX3Jvdy1pdGVtXCI+XG4gICAgICAgICAgICAgICAgJHtwcml6ZUtleSA/IHRyYW5zbGF0ZUtleShwcml6ZUtleSkgOiAnIC0gJ31cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRhYmxlX19yb3ctaXRlbVwiPlxuICAgICAgICAgICAgICAgICR7cHJpemVLZXkgPyBnZXRXYWdlckJ5UGxhY2UodXNlclBsYWNlKSA6ICcgLSAnfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIGA7XG5cbiAgICAgICAgICAgIHRhYmxlLmFwcGVuZCh1c2VyUm93KTtcbiAgICAgICAgfTtcbiAgICAgICAgaWYgKGlzQ3VycmVudFVzZXIgJiYgIWlzVG9wQ3VycmVudFVzZXIpIHtcbiAgICAgICAgICAgIGNvbnN0IGluZGV4ID0gdXNlcnMuaW5kZXhPZih1c2VyKTtcbiAgICAgICAgICAgIGlmICh1c2Vyc1tpbmRleCAtIDFdKSB7XG4gICAgICAgICAgICAgICAgcmVuZGVyUm93KHVzZXJzW2luZGV4IC0gMV0sIHsgbmVpZ2hib3I6IHRydWUgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZW5kZXJSb3codXNlciwgeyBoaWdobGlnaHQ6IHRydWUgfSk7XG4gICAgICAgICAgICBpZiAodXNlcnNbaW5kZXggKyAxXSkge1xuICAgICAgICAgICAgICAgIHJlbmRlclJvdyh1c2Vyc1tpbmRleCArIDFdLCB7IG5laWdoYm9yOiB0cnVlIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmVuZGVyUm93KHVzZXIpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gdHJhbnNsYXRlS2V5KGtleSwgZGVmYXVsdFZhbHVlKSB7XG4gICAgICAgIGlmICgha2V5KSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgbGV0IG5lZWRLZXkgPSBkZWJ1ZyA/IGtleSA6IGAqLS0tLU5FRUQgVE8gQkUgVFJBTlNMQVRFRC0tLS0qIGtleTogJHtrZXl9YFxuXG4gICAgICAgIGRlZmF1bHRWYWx1ZSA9ICBuZWVkS2V5IHx8IGtleTtcbiAgICAgICAgcmV0dXJuIGkxOG5EYXRhW2tleV0gfHwgZGVmYXVsdFZhbHVlO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIG1hc2tVc2VySWQodXNlcklkKSB7XG4gICAgICAgIHJldHVybiBcIioqXCIgKyB1c2VySWQudG9TdHJpbmcoKS5zbGljZSgyKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXRQcml6ZVRyYW5zbGF0aW9uS2V5KHBsYWNlKSB7XG4gICAgICAgIGlmIChwbGFjZSA+PSAxICYmIHBsYWNlIDw9IDEwKSByZXR1cm4gYHByaXplXyR7cGxhY2V9YDtcbiAgICAgICAgaWYgKHBsYWNlID49IDExICYmIHBsYWNlIDw9IDIwKSByZXR1cm4gJ3ByaXplXzExLTIwJztcbiAgICAgICAgaWYgKHBsYWNlID49IDIxICYmIHBsYWNlIDw9IDMwKSByZXR1cm4gJ3ByaXplXzIxLTMwJztcbiAgICAgICAgaWYgKHBsYWNlID49IDMxICYmIHBsYWNlIDw9IDQwKSByZXR1cm4gJ3ByaXplXzMxLTQwJztcbiAgICAgICAgaWYgKHBsYWNlID49IDQxICYmIHBsYWNlIDw9IDUwKSByZXR1cm4gJ3ByaXplXzQxLTUwJztcbiAgICAgICAgaWYgKHBsYWNlID49IDUxICYmIHBsYWNlIDw9IDcwKSByZXR1cm4gJ3ByaXplXzUxLTcwJztcbiAgICAgICAgaWYgKHBsYWNlID49IDcxICYmIHBsYWNlIDw9IDEwMCkgcmV0dXJuICdwcml6ZV83MS0xMDAnO1xuICAgICAgICBpZiAocGxhY2UgPj0gMTAxICYmIHBsYWNlIDw9IDE1MCkgcmV0dXJuICdwcml6ZV8xMDEtMTUwJztcbiAgICAgICAgaWYgKHBsYWNlID49IDE1MSAmJiBwbGFjZSA8PSAyMDApIHJldHVybiAncHJpemVfMTUxLTIwMCc7XG4gICAgICAgIGlmIChwbGFjZSA+PSAyMDEgJiYgcGxhY2UgPD0gMjUwKSByZXR1cm4gJ3ByaXplXzIwMS0yNTAnO1xuICAgICAgICBpZiAocGxhY2UgPj0gMjUxICYmIHBsYWNlIDw9IDMwMCkgcmV0dXJuICdwcml6ZV8yNTEtMzAwJztcbiAgICAgICAgaWYgKHBsYWNlID49IDMwMSAmJiBwbGFjZSA8PSAzNTApIHJldHVybiAncHJpemVfMzAxLTM1MCc7XG4gICAgICAgIGlmIChwbGFjZSA+PSAzNTEgJiYgcGxhY2UgPD0gNDAwKSByZXR1cm4gJ3ByaXplXzM1MS00MDAnO1xuICAgICAgICBpZiAocGxhY2UgPj0gNDAxICYmIHBsYWNlIDw9IDQ1MCkgcmV0dXJuICdwcml6ZV80MDEtNDUwJztcbiAgICAgICAgaWYgKHBsYWNlID49IDQ1MSAmJiBwbGFjZSA8PSA1MDApIHJldHVybiAncHJpemVfNDUxLTUwMCc7XG4gICAgICAgIGlmIChwbGFjZSA+PSA1MDEgJiYgcGxhY2UgPD0gNTUwKSByZXR1cm4gJ3ByaXplXzUwMS01NTAnO1xuICAgICAgICBpZiAocGxhY2UgPj0gNTUxICYmIHBsYWNlIDw9IDY1MCkgcmV0dXJuICdwcml6ZV81NTEtNjUwJztcbiAgICAgICAgaWYgKHBsYWNlID49IDY1MSAmJiBwbGFjZSA8PSA3NTApIHJldHVybiAncHJpemVfNjUxLTc1MCc7XG4gICAgICAgIGlmIChwbGFjZSA+PSA3NTEgJiYgcGxhY2UgPD0gODUwKSByZXR1cm4gJ3ByaXplXzc1MS04NTAnO1xuICAgICAgICBpZiAocGxhY2UgPj0gODUxICYmIHBsYWNlIDw9IDk1MCkgcmV0dXJuICdwcml6ZV84NTEtOTUwJztcbiAgICAgICAgaWYgKHBsYWNlID49IDk1MSAmJiBwbGFjZSA8PSAxMDAwKSByZXR1cm4gJ3ByaXplXzk1MS0xMDAwJztcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0V2FnZXJCeVBsYWNlKHBsYWNlKSB7XG4gICAgICAgIGlmIChwbGFjZSA+PSAxICYmIHBsYWNlIDw9IDEwKSByZXR1cm4gJy0nO1xuICAgICAgICBpZiAocGxhY2UgPj0gMTEgJiYgcGxhY2UgPD0gMjApIHJldHVybiAn0YUxJztcbiAgICAgICAgaWYgKHBsYWNlID49IDIxICYmIHBsYWNlIDw9IDMwKSByZXR1cm4gJ9GFMSc7XG4gICAgICAgIGlmIChwbGFjZSA+PSAzMSAmJiBwbGFjZSA8PSA0MCkgcmV0dXJuICfRhTInO1xuICAgICAgICBpZiAocGxhY2UgPj0gNDEgJiYgcGxhY2UgPD0gNTApIHJldHVybiAn0YUyJztcbiAgICAgICAgaWYgKHBsYWNlID49IDUxICYmIHBsYWNlIDw9IDcwKSByZXR1cm4gJ9GFMyc7XG4gICAgICAgIGlmIChwbGFjZSA+PSA3MSAmJiBwbGFjZSA8PSAxMDApIHJldHVybiAn0YUzJztcbiAgICAgICAgaWYgKHBsYWNlID49IDEwMSAmJiBwbGFjZSA8PSAxNTApIHJldHVybiAn0YU0JztcbiAgICAgICAgaWYgKHBsYWNlID49IDE1MSAmJiBwbGFjZSA8PSAyMDApIHJldHVybiAn0YU0JztcbiAgICAgICAgaWYgKHBsYWNlID49IDIwMSAmJiBwbGFjZSA8PSAyNTApIHJldHVybiAn0YU1JztcbiAgICAgICAgaWYgKHBsYWNlID49IDI1MSAmJiBwbGFjZSA8PSAzMDApIHJldHVybiAn0YU1JztcbiAgICAgICAgaWYgKHBsYWNlID49IDMwMSAmJiBwbGFjZSA8PSAzNTApIHJldHVybiAn0YU2JztcbiAgICAgICAgaWYgKHBsYWNlID49IDM1MSAmJiBwbGFjZSA8PSA0MDApIHJldHVybiAn0YU3JztcbiAgICAgICAgaWYgKHBsYWNlID49IDQwMSAmJiBwbGFjZSA8PSA0NTApIHJldHVybiAn0YU4JztcbiAgICAgICAgaWYgKHBsYWNlID49IDQ1MSAmJiBwbGFjZSA8PSA1MDApIHJldHVybiAn0YU5JztcbiAgICAgICAgaWYgKHBsYWNlID49IDUwMSAmJiBwbGFjZSA8PSA1NTApIHJldHVybiAn0YUxMCc7XG4gICAgICAgIGlmIChwbGFjZSA+PSA1NTEgJiYgcGxhY2UgPD0gMTAwMCkgcmV0dXJuICctJztcbiAgICAgICAgcmV0dXJuIFwiLVwiO1xuICAgIH1cblxuXG5cbiAgICBmdW5jdGlvbiBwYXJ0aWNpcGF0ZSgpIHtcbiAgICAgICAgaWYgKCF1c2VySWQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBwYXJhbXMgPSB7IHVzZXJpZDogdXNlcklkIH07XG4gICAgICAgIGZldGNoKGFwaVVSTCArICcvdXNlci8nLCB7XG4gICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgJ0FjY2VwdCc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShwYXJhbXMpXG4gICAgICAgIH0pLnRoZW4ocmVzID0+IHJlcy5qc29uKCkpXG4gICAgICAgICAgICAudGhlbihyZXMgPT4ge1xuICAgICAgICAgICAgICAgIGxvYWRlckJ0biA9IHRydWVcbiAgICAgICAgICAgICAgICB0b2dnbGVDbGFzc2VzKHBhcnRpY2lwYXRlQnRucywgXCJsb2FkZXJcIilcbiAgICAgICAgICAgICAgICB0b2dnbGVUcmFuc2xhdGVzKHBhcnRpY2lwYXRlQnRucywgXCJsb2FkZXJcIilcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+e1xuICAgICAgICAgICAgICAgICAgICB0b2dnbGVUcmFuc2xhdGVzKHBhcnRpY2lwYXRlQnRucywgXCJsb2FkZXJfcmVhZHlcIilcbiAgICAgICAgICAgICAgICAgICAgdG9nZ2xlQ2xhc3NlcyhwYXJ0aWNpcGF0ZUJ0bnMsIFwiZG9uZVwiKVxuICAgICAgICAgICAgICAgICAgICB0b2dnbGVDbGFzc2VzKHBhcnRpY2lwYXRlQnRucywgXCJsb2FkZXJcIilcbiAgICAgICAgICAgICAgICB9LCA1MDApXG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKT0+e1xuICAgICAgICAgICAgICAgICAgICBjaGVja1VzZXJBdXRoKClcbiAgICAgICAgICAgICAgICAgICAgcmVuZGVyVXNlcnMoYWN0aXZlV2VlaylcbiAgICAgICAgICAgICAgICAgICAgdGFibGVUYWJzLmZvckVhY2goKHRhYiwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKGluZGV4ICsgMSA9PT0gYWN0aXZlV2Vlayl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFiLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFiLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIH0sIDEwMDApXG5cbiAgICAgICAgICAgIH0pO1xuICAgIH1cbiAgICBmdW5jdGlvbiB1cGRhdGVTbGlkZXIoKSB7XG4gICAgICAgIGl0ZW1zLmZvckVhY2goKGl0ZW0sIGluZGV4KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBkaXN0YW5jZSA9IGluZGV4IC0gY3VycmVudEluZGV4O1xuICAgICAgICAgICAgbGV0IG5ld1Bvc2l0aW9uID0gZGlzdGFuY2UgKiAxMDU7XG5cbiAgICAgICAgICAgIGlmIChkaXN0YW5jZSA+IHRvdGFsSXRlbXMgLyAyKSB7XG4gICAgICAgICAgICAgICAgbmV3UG9zaXRpb24gLT0gdG90YWxJdGVtcyAqIDEwNTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZGlzdGFuY2UgPCAtdG90YWxJdGVtcyAvIDIpIHtcbiAgICAgICAgICAgICAgICBuZXdQb3NpdGlvbiArPSB0b3RhbEl0ZW1zICogMTA1O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb25zdCBzY2FsZSA9IGluZGV4ID09PSBjdXJyZW50SW5kZXggPyAxIDogMTtcblxuICAgICAgICAgICAgaXRlbS5zdHlsZS50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlWCgke25ld1Bvc2l0aW9ufSUpIHNjYWxlKCR7c2NhbGV9KWA7XG4gICAgICAgICAgICBpdGVtLnN0eWxlLnpJbmRleCA9IGluZGV4ID09PSBjdXJyZW50SW5kZXggPyAyIDogMTtcblxuICAgICAgICAgICAgY29uc3QgaXNWaXNpYmxlID0gTWF0aC5hYnMoZGlzdGFuY2UpIDw9IDEgfHxcbiAgICAgICAgICAgICAgICAoaW5kZXggPT09IDAgJiYgY3VycmVudEluZGV4ID09PSB0b3RhbEl0ZW1zIC0gMSkgfHxcbiAgICAgICAgICAgICAgICAoaW5kZXggPT09IHRvdGFsSXRlbXMgLSAxICYmIGN1cnJlbnRJbmRleCA9PT0gMCk7XG5cbiAgICAgICAgICAgIGl0ZW0uY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZGVuJywgIWlzVmlzaWJsZSk7XG4gICAgICAgICAgICBpdGVtLmNsYXNzTGlzdC50b2dnbGUoJ2FjdGl2ZScsIGluZGV4ID09PSBjdXJyZW50SW5kZXgpO1xuXG4gICAgICAgICAgICBpdGVtLmNsYXNzTGlzdC5yZW1vdmUoJ2xlZnQtc2xpZGUnLCAncmlnaHQtc2xpZGUnKTtcbiAgICAgICAgICAgIGlmIChkaXN0YW5jZSA9PT0gMSB8fCAoY3VycmVudEluZGV4ID09PSB0b3RhbEl0ZW1zIC0gMSAmJiBpbmRleCA9PT0gMCkpIHtcbiAgICAgICAgICAgICAgICBpdGVtLmNsYXNzTGlzdC5hZGQoJ3JpZ2h0LXNsaWRlJyk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGRpc3RhbmNlID09PSAtMSB8fCAoY3VycmVudEluZGV4ID09PSAwICYmIGluZGV4ID09PSB0b3RhbEl0ZW1zIC0gMSkpIHtcbiAgICAgICAgICAgICAgICBpdGVtLmNsYXNzTGlzdC5hZGQoJ2xlZnQtc2xpZGUnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgZG90cy5mb3JFYWNoKGRvdCA9PiBkb3QuY2xhc3NMaXN0LnJlbW92ZSgnX2FjdGl2ZScpKTtcbiAgICAgICAgaWYgKGRvdHNbY3VycmVudEluZGV4XSkge1xuICAgICAgICAgICAgZG90c1tjdXJyZW50SW5kZXhdLmNsYXNzTGlzdC5hZGQoJ19hY3RpdmUnKTtcbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbW92ZVNsaWRlcihvZmZzZXQpIHtcbiAgICAgICAgY3VycmVudEluZGV4ID0gKGN1cnJlbnRJbmRleCArIG9mZnNldCArIHRvdGFsSXRlbXMpICUgdG90YWxJdGVtcztcbiAgICAgICAgdXBkYXRlU2xpZGVyKCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ29Ub1NsaWRlKGluZGV4KSB7XG4gICAgICAgIGN1cnJlbnRJbmRleCA9IGluZGV4O1xuICAgICAgICB1cGRhdGVTbGlkZXIoKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBoYW5kbGVTdGFydChldmVudCkge1xuICAgICAgICBpc0RyYWdnaW5nID0gdHJ1ZTtcbiAgICAgICAgc3RhcnRYID0gZXZlbnQuY2xpZW50WCB8fCBldmVudC50b3VjaGVzWzBdLmNsaWVudFg7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaGFuZGxlTW92ZShldmVudCkge1xuICAgICAgICBpZiAoIWlzRHJhZ2dpbmcpIHJldHVybjtcbiAgICAgICAgY29uc3QgY3VycmVudFggPSBldmVudC5jbGllbnRYIHx8IGV2ZW50LnRvdWNoZXNbMF0uY2xpZW50WDtcbiAgICAgICAgY29uc3QgZGlmZlggPSBjdXJyZW50WCAtIHN0YXJ0WDtcblxuICAgICAgICBpZiAoTWF0aC5hYnMoZGlmZlgpID4gNTApIHtcbiAgICAgICAgICAgIG1vdmVTbGlkZXIoZGlmZlggPiAwID8gLTEgOiAxKTtcbiAgICAgICAgICAgIGlzRHJhZ2dpbmcgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGhhbmRsZUVuZCgpIHtcbiAgICAgICAgaXNEcmFnZ2luZyA9IGZhbHNlO1xuICAgIH1cblxuICAgIC8vIGZ1bmN0aW9uIG9wZW5Qb3B1cEJ5QXR0cihwb3B1cEF0dHIsIGlzU2hvd1Byb2dyZXNzID0gZmFsc2UpIHtcbiAgICAvLyAgICAgY29uc3QgYWxsUG9wdXBzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnBvcHVwJyk7XG4gICAgLy8gICAgIGFsbFBvcHVwcy5mb3JFYWNoKHAgPT4gcC5jbGFzc0xpc3QuYWRkKCdoaWRlJykpO1xuICAgIC8vICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93ID0gJ2hpZGRlbic7XG4gICAgLy9cbiAgICAvLyAgICAgY29uc3QgdGFyZ2V0UG9wdXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAucG9wdXBbZGF0YS1wb3B1cD1cIiR7cG9wdXBBdHRyfVwiXWApO1xuICAgIC8vICAgICBpZiAodGFyZ2V0UG9wdXApIHtcbiAgICAvLyAgICAgICAgIHRhcmdldFBvcHVwLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKTtcbiAgICAvLyAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wb3B1cHMnKS5jbGFzc0xpc3QucmVtb3ZlKCdvcGFjaXR5LW92ZXJsYXknKTtcbiAgICAvLyAgICAgfVxuICAgIC8vXG4gICAgLy8gICAgIGNvbnN0IHByb2dyZXNzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBvcHVwcyAucHJvZ3Jlc3MnKTtcbiAgICAvLyAgICAgaWYgKHByb2dyZXNzKSB7XG4gICAgLy8gICAgICAgICBwcm9ncmVzcy5jbGFzc0xpc3QudG9nZ2xlKCdoaWRlJywgIWlzU2hvd1Byb2dyZXNzKTtcbiAgICAvLyAgICAgfVxuICAgIC8vIH1cblxuXG4gICAgZnVuY3Rpb24gY2xvc2VBbGxQb3B1cHMoKSB7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wb3B1cCcpLmZvckVhY2gocCA9PiBwLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKSk7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wb3B1cHMgLnByb2dyZXNzJykuZm9yRWFjaChwID0+IHAuY2xhc3NMaXN0LmFkZCgnaGlkZScpKTtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBvcHVwcycpLmNsYXNzTGlzdC5hZGQoJ29wYWNpdHktb3ZlcmxheScpO1xuICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93ID0gJ2F1dG8nO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHRyaWdnZXJTaGFrZSgpIHtcbiAgICAgICAgYm94LmNsYXNzTGlzdC5hZGQoJ3NoYWtlJyk7XG5cbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICBib3guY2xhc3NMaXN0LnJlbW92ZSgnc2hha2UnKTtcbiAgICAgICAgICAgIGNvbnN0IG5leHRTaGFrZSA9IE1hdGgucmFuZG9tKCkgKiA2MDAwICsgNDAwMDtcbiAgICAgICAgICAgIHNldFRpbWVvdXQodHJpZ2dlclNoYWtlLCBuZXh0U2hha2UpO1xuICAgICAgICB9LCAxMjAwKTtcbiAgICB9XG5cblxuXG4gICAgbG9hZFRyYW5zbGF0aW9ucygpLnRoZW4oaW5pdClcblxuICAgIC8vIGluaXQoKVxuXG5cbiAgICAvLy8gVEVTVFxuXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm1lbnUtdGVzdF9fYnRuJykuZm9yRWFjaChidG4gPT4ge1xuICAgICAgICBidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICBidG4ucGFyZW50RWxlbWVudC5jbGFzc0xpc3QudG9nZ2xlKCdvcGVuJyk7XG4gICAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgKCkgPT4ge1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1lbnUtYnRuXCIpPy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tZW51LXRlc3RcIik/LmNsYXNzTGlzdC50b2dnbGUoXCJoaWRlXCIpO1xuICAgICAgICB9KTtcbiAgICB9KTtcblxuICAgIGNvbnN0IGxuZ0J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubG5nLWJ0blwiKVxuXG4gICAgbG5nQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIGlmIChzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKFwibG9jYWxlXCIpKSB7XG4gICAgICAgICAgICBzZXNzaW9uU3RvcmFnZS5yZW1vdmVJdGVtKFwibG9jYWxlXCIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbShcImxvY2FsZVwiLCBcImVuXCIpO1xuICAgICAgICB9XG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcbiAgICB9KTtcblxuICAgIGNvbnN0IGF1dGhCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmF1dGgtYnRuXCIpXG4gICAgY29uc3QgYmV0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5idG4tYmV0LW9ubGluZVwiKVxuXG4gICAgYXV0aEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT57XG4gICAgICAgIGlmKHVzZXJJZCl7XG4gICAgICAgICAgICBzZXNzaW9uU3RvcmFnZS5yZW1vdmVJdGVtKFwidXNlcklkXCIpXG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbShcInVzZXJJZFwiLCBcIjc3Nzc3NzhcIilcbiAgICAgICAgfVxuICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKClcbiAgICB9KTtcblxuXG59KSgpO1xuXG4vLyDRhtGOINGE0YPQvdC60YbRltGOINCy0LjQtNCw0LvQuCwg0LAg0L7RgdC90L7QstC90YMg0YDQvtC30LrQvtC80LXQvdGC0LhcbmZ1bmN0aW9uIG9wZW5Qb3B1cEJ5QXR0cihwb3B1cEF0dHIsIGlzU2hvd1Byb2dyZXNzID0gZmFsc2UpIHtcbiAgICBjb25zdCBhbGxQb3B1cHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucG9wdXAnKTtcbiAgICBhbGxQb3B1cHMuZm9yRWFjaChwID0+IHAuY2xhc3NMaXN0LmFkZCgnaGlkZScpKTtcbiAgICBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93ID0gJ2hpZGRlbic7XG5cbiAgICBjb25zdCB0YXJnZXRQb3B1cCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5wb3B1cFtkYXRhLXBvcHVwPVwiJHtwb3B1cEF0dHJ9XCJdYCk7XG4gICAgaWYgKHRhcmdldFBvcHVwKSB7XG4gICAgICAgIHRhcmdldFBvcHVwLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKTtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBvcHVwcycpLmNsYXNzTGlzdC5yZW1vdmUoJ29wYWNpdHktb3ZlcmxheScpO1xuICAgIH1cblxuICAgIGNvbnN0IHByb2dyZXNzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBvcHVwcyAucHJvZ3Jlc3MnKTtcbiAgICBpZiAocHJvZ3Jlc3MpIHtcbiAgICAgICAgcHJvZ3Jlc3MuY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZScsICFpc1Nob3dQcm9ncmVzcyk7XG4gICAgfVxufVxuLy8g0YbRjiDRhNGD0L3QutGG0ZbRjiDQstC40LTQsNC70LgsINCwINC+0YHQvdC+0LLQvdGDINGA0L7Qt9C60L7QvNC10L3RgtC4XG5cbiJdfQ==
