(function () {

    const apiURL = 'https://fav-prom.com/api_sam_ua'

    const currentDate = new Date("2025-07-24T00:00:00");

    const getActiveWeek = (promoStartDate, weekDuration) => {

        let weekDates = [];

        const Day = 24 * 60 * 60 * 1000;
        const Week = weekDuration * Day;

        const formatDate = (date) =>
            `${date.getDate().toString().padStart(2, "0")}.${(date.getMonth() + 1).toString().padStart(2, "0")}`;

        const calculateWeekPeriod = (weekIndex) => {
            const baseStart = promoStartDate.getTime();
            const start = new Date(baseStart + weekIndex * Week);
            let end = new Date(start.getTime() + (weekDuration * Day - 1));
            return { start, end };
        };

        let activeWeekIndex = null;

        // Перевірка поточного тижня
        for (let i = 0; i < 10; i++) { // Обмежуємо 10 тижнями (якщо потрібно більше, просто змініть лічильник)
            const { start, end } = calculateWeekPeriod(i);
            if (currentDate >= start && currentDate <= end) {
                activeWeekIndex = i + 1;
                break;
            }
        }

        return activeWeekIndex;
    };

    const promoStartDate = new Date("2025-07-15T00:00:00");
    const weekDuration = 7;

    const activeWeek = getActiveWeek(promoStartDate, weekDuration) || 1;

    console.log(activeWeek)

    document.querySelectorAll('.games__list').forEach(list => {
        list.classList.add('hide');
    });

    const currentList = document.querySelector(`.games__list._week${activeWeek}`);

    console.log(currentList);
    if (currentList) {
        currentList.classList.remove('hide');
    }

    const getCurrentDayNumber = (promoStartDate) => {
        const diffInMs = currentDate - promoStartDate;
        let dayNumber = Math.floor(diffInMs / (24 * 60 * 60 * 1000)) + 1;
        if(activeWeek > 1){
           dayNumber = dayNumber - ((activeWeek - 1) * 7);
        }
        return dayNumber;
    };

    const dayNumber = getCurrentDayNumber(promoStartDate);
    const currentDayNumber = dayNumber > 0 ? dayNumber : 1;
    console.log(currentDayNumber);


    const mainPage = document.querySelector(".fav-page"),
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


    console.log(btnOpen)



    const ukLeng = document.querySelector('#ukLeng');
    const enLeng = document.querySelector('#enLeng');

    const toggleClasses = (elements, className) => elements.forEach(el => el.classList.toggle(`${className}`));
    const toggleTranslates = (elements, dataAttr) => elements.forEach(el => {
        el.setAttribute('data-translate', `${dataAttr}`)
        el.innerHTML = i18nData[dataAttr] || '*----NEED TO BE TRANSLATED----*   key:  ' + dataAttr;
        el.removeAttribute('data-translate');
    });

    let loaderBtn = false

    // let locale = "en"
    let locale = sessionStorage.getItem("locale") || "uk"

    if (ukLeng) locale = 'uk';
    if (enLeng) locale = 'en';

    let debug = false

    if (debug) hideLoader()

    let i18nData = {};
    const translateState = true;
    // let userId = null;
    let userId = Number(sessionStorage.getItem("userId")) ?? null

    // userId = 100300268

    const box = document.querySelector('.shake-box');
    const initialDelay = Math.random() * 6000 + 4000;

    //slider vars

    const slider = document.querySelector('.prize__slider');
    const items = slider.querySelectorAll('.prize__slide');
    const dots = document.querySelectorAll('.prize__nav-dots-item');
    const btnLeft = document.querySelector('.prize__nav-left');
    const btnRight = document.querySelector('.prize__nav-right');

    let currentIndex = 1;
    const totalItems = items.length;
    let isDragging = false;
    let startX = 0;

    //slider vars

    const request = function (link, extraOptions) {
        return fetch(apiURL + link, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            ...(extraOptions || {})
        })
            .then(res => {
                if (!res.ok) throw new Error('API error');
                return res.json();
            })
            .catch(err => {
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

    }

    function hideLoader(){
        loader.classList.add("hide")
        document.body.style.overflow = "auto"
        mainPage.classList.remove("loading")
    }



    function initSpin(){

        btnOpen.textContent = translateKey("loader")
        challangeBtnPointer.classList.add("hide");


        sendSpinRequest().then(res => {

            const prize = res.number;
            const streakBonus = res.streakBonus || debug;

            btnOpen.textContent = translateKey("openBtn")

            btnOpen.classList.add("hide");
            challangeDepositBtn.classList.remove("hide");

            setStreakDays(streakBonus)

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


        })
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

        const params = {userid: userId};
        return request('/spin', {
            method: 'POST',
            body: JSON.stringify(params)
        });
    }

    function setStreakDays(streak) {
        streakDays.forEach((day, i) =>{
            day.classList.remove("_active")
            console.log(day)
            if(i + 1 <= streak){
                day.classList.add('_active');
            }
        })
        streakDaysPopup.forEach((day, i) =>{
            day.classList.remove("_active")
            console.log(day)
            if(i + 1 <= streak){
                day.classList.add('_active');
            }
        })
    }

    function setUserProgress(userData){
        let spinAllowed = userData.spinAllowed,
            pointsPerDay = userData.pointsPerDay,
            streak = userData.spinsStreak,
            lastUpdate = userData.lastUpdate

        console.log(streakDays)

        setStreakDays(streak)

        pointsPerDay = 10002

        const thresholdPoints = 1000

        pointsPerDay = pointsPerDay > thresholdPoints ? thresholdPoints : pointsPerDay;


        counterPoints.textContent = `${pointsPerDay}`

        let progress = Math.min((pointsPerDay / thresholdPoints) * 100, 100);


        if (progress >= 100) {
            progress = 100
            challangeBlur.classList.add('hide')
            progressBox.classList.remove('_lock')
            progressBox.classList.add('_open')
            challangeBtnPointer.classList.remove("hide")
            btnOpen.classList.remove('hide')
            challangeDepositBtn.classList.add('hide')
        }else{
            challangeBlur.classList.remove('hide')
            progressBox.classList.add('_lock')
            progressBox.classList.remove('_open')
            challangeBtnPointer.classList.add("hide")
            btnOpen.classList.add('hide')
            challangeDepositBtn.classList.remove('hide')


        }

        console.log(`Прогрес користувача: ${progress.toFixed(0)}%`);

        setProgressWidth(progress);


        console.log(userData)
    }

    function setProgressWidth(progressPercent) {

        progressBar.style.width = `${progressPercent}%`;

        const barRect = progressBar.getBoundingClientRect();
        const parentRect = currentCardsWrap.getBoundingClientRect();

        const rightEdge = barRect.right - parentRect.left - 5;

        challangeBlur.style.left = `${rightEdge}px`;
        challangeBlurStatus.textContent = `${progressPercent.toFixed(0)}%`;


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
        const spinItem = document.querySelector('.spins-row');
        const noSpinItem = document.querySelector('.no-spins');
        const noBets = !bets || bets.length === 0;

        if (noBets && !debug) {
            spinItem.classList.add('hide');
            noSpinItem.classList.remove('hide');
            return;
        }

        if(debug){
            console.warn("debug bet history")
            return;

        }

        spinItem.innerHTML =
            `
       <div class="spins-row-head">
            <div class="content-date" data-translate="myBetDate"></div>
            <div class="content-prize" data-translate="myBetId"></div>
<!--            <div class="content-status" data-translate="myBetStatus"></div>-->
        </div>
        `;
        spinItem.classList.remove('hide');
        noSpinItem.classList.add('hide');

        let upd = 0;

        bets.forEach(spin => {
            const spinDate = new Date(spin.betDate);
            const formattedDate = spinDate.toLocaleDateString('uk-UA').slice(0, 5);
            const status = resolveStatusTranslation(spin.status);

            if (status) {
                const spinElement = document.createElement('div');
                spinElement.classList.add('spins-row-item');

                const isWin = spin.status === "win";
                const statusClass = isWin ? '_done' : '';

                spinElement.innerHTML = `
                    <span class="content-date">${formattedDate}</span>
                    <span class="content-prize">ID:${spin.cardID}</span>
<!--                    <span class="content-status ${statusClass}"></span>-->
                `;
                spinItem.appendChild(spinElement);
                upd++;
            }
        });

        if (upd === 0) {
            spinItem.classList.add('hide');
            noSpinItem.classList.remove('hide');
        }
    }

    function setBetHistory(stageNum){
        request("/betsHistory").then((res) => {
            const user = res.find(user => user.userid === userId);
            const bets = user?.bets
            displayBetsHistory(bets)
        })
    }


    async function init() {
        let attempts = 0;
        const maxAttempts = 20;
        const attemptInterval = 50;

        function tryDetectUserId() {
            if (window.store) {
                const state = window.store.getState();
                userId = state.auth.isAuthorized && state.auth.id || '';
            } else if (window.g_user_id) {
                userId = window.g_user_id;
            }
        }

        function quickCheckAndRender() {
            checkUserAuth();



            // openPopupByAttr("prizeLaptop", true)

            btnOpen.addEventListener('click', initSpin);

            setBetHistory()

            tableTabs.forEach(tab => {
                tab.addEventListener('click', () =>{
                    tableTabs.forEach(t => t.classList.remove('active'));
                    console.log(tableTabs)

                    let tabNum = Number(tab.getAttribute("data-week"))
                    tab.classList.add('active');
                    // renderUsers(tabNum);
                });
            })

            // renderUsers(activeWeek)

            setTimeout(hideLoader, 1000);

            SetSliderWidthBlur()

            setTimeout(triggerShake, initialDelay);

            participateBtns.forEach(btn => {
                btn.addEventListener('click', participate);
            })

            document.querySelectorAll('.popup__close').forEach(closeBtn => {
                closeBtn.addEventListener('click', closeAllPopups);
            });

            document.querySelectorAll('.open-btn').forEach(btn => {
                btn.addEventListener('click', () => {
                    const popupAttr = btn.getAttribute('data-popup');
                    openPopupByAttr(popupAttr);
                });
            });

            document.querySelector('.popups').addEventListener('click', (e) => {
                const openPopupEl = document.querySelector('.popup:not(.hide)');
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

            btnLeft.addEventListener('click', () => moveSlider(-1));
            btnRight.addEventListener('click', () => moveSlider(1));
            // dots.forEach((dot, index) => dot.addEventListener('click', () => goToSlide(index)));


        }

        const waitForUserId = new Promise((resolve) => {
            const interval = setInterval(() => {
                tryDetectUserId();
                if (userId || attempts >= maxAttempts) {
                    quickCheckAndRender();
                    clearInterval(interval);
                    resolve();
                }
                attempts++;
            }, attemptInterval);
        });

        await waitForUserId;
    }

    function loadTranslations() {
        return request(`/new-translates/${locale}`)
            .then(json => {
                i18nData = json;
                translate();
                const targetNode = document.getElementById("samChill");
                const mutationObserver = new MutationObserver(function (mutations) {
                    mutationObserver.disconnect();
                    translate();
                    mutationObserver.observe(targetNode, { childList: true, subtree: true });
                });
                mutationObserver.observe(targetNode, {
                    childList: true,
                    subtree: true
                });

            });
    }


    function SetSliderWidthBlur(){
        const slider = document.querySelector('.challange__current');
        const slides = slider.querySelectorAll('.challange__current-item');
        const tabs = document.querySelectorAll('.challange__tabs-item');
        const dots = document.querySelectorAll('.challange__nav-dots-item');
        const btnLeft = document.querySelector('.challange__nav-left');
        const btnRight = document.querySelector('.challange__nav-right');

        let currentIndex = 0;

        function updateSlider(index) {
            slides.forEach(slide => slide.classList.remove('_active'));
            tabs.forEach(tab => tab.classList.remove('_active'));
            dots.forEach(dot => dot.classList.remove('_active'));

            slides[index].classList.add('_active');
            tabs[index].classList.add('_active');
            dots[index].classList.add('_active');
        }

        updateSlider(currentDayNumber - 1);
        tabs.forEach((tab, i) =>{
            if(i + 1 <= currentDayNumber){
                tab.classList.add('_open');
                tab.classList.remove('_lock');

            }else{
                tab.classList.remove('_active');
                tab.classList.add('_lock');
                tab.classList.remove('_open');
            }
            if(i + 1 === activeWeek){
                tab.classList.add('_active');
            }
        } );

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
        const loadTime = 200;
        request(`/favuser/${userId}`).then((user) => {

            setTimeout(() => {
                const showElements = (elements) => elements.forEach(el => el.classList.remove('hide'));
                const hideElements = (elements) => elements.forEach(el => el.classList.add('hide'));

                if (!userId) {
                    hideElements(participateBtns);
                    hideElements(redirectBtns);
                    showElements(unauthMsgs);
                    hideLoader();
                    currentCardsWrap.classList.add('_unauth');
                    return Promise.resolve(false);
                }else{
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

            }, loadTime)
        })
    }

    function reportError(err) {
        const reportData = {
            origin: window.location.href,
            userid: userId,
            errorText: err?.error || err?.text || err?.message || 'Unknown error',
            type: err?.name || 'UnknownError',
            stack: err?.stack || ''
        };

        fetch('https://fav-prom.com/api-cms/reports/add', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(reportData)
        }).catch(console.warn);
    }

    function translate() {
        const elems = document.querySelectorAll('[data-translate]')
        if (elems && elems.length) {
            if(translateState){
                elems.forEach(elem => {
                    const key = elem.getAttribute('data-translate');
                    elem.innerHTML = i18nData[key] || '*----NEED TO BE TRANSLATED----*   key:  ' + key;
                    if (i18nData[key]) {
                        elem.removeAttribute('data-translate');
                    }
                })
            }else{
                console.log("translation works!")
            }
        }
        refreshLocalizedClass(mainPage);
    }

    function refreshLocalizedClass(element) {
        if (!element) {
            return;
        }
        for (const lang of ['uk', 'en']) {
            element.classList.remove(lang);
        }
        element.classList.add(locale);
    }

    function renderUsers(week) {
        request(`/users/${week}`)
            .then(data => {
                const users = data;
                populateUsersTable(users, userId, week);
            });
    }

    function populateUsersTable(users, currentUserId, week) {
        resultsTable.innerHTML = '';
        resultsTableOther.innerHTML = '';
        if (!users?.length) return;
        const currentUser = users.find(user => user.userid === currentUserId);
        const isTopCurrentUser = currentUser && users.slice(0, 10).some(user => user.userid === currentUserId);
        const topUsersLength = !userId || isTopCurrentUser  ? 13 : 10;
        const topUsers = users.slice(0, topUsersLength);
        topUsers.forEach(user => {
            displayUser(user, user.userid === currentUserId, resultsTable, topUsers, isTopCurrentUser, week);
        });
        if (!isTopCurrentUser && currentUser) {
            displayUser(currentUser, true, resultsTableOther, users, false, week);
        }
    }

    function displayUser(user, isCurrentUser, table, users, isTopCurrentUser, week) {
        const renderRow = (userData, options = {}) => {
            const { highlight = false, neighbor = false } = options;
            const userRow = document.createElement('div');
            userRow.classList.add('table__row');

            const userPlace = users.indexOf(userData) + 1;
            const prizeKey = debug ? null : getPrizeTranslationKey(userPlace, week);

            if (userPlace <= 3) {
                userRow.classList.add(`place${userPlace}`);
            }

            if (highlight || isCurrentUser && !neighbor) {
                userRow.classList.add('you');
            } else if (neighbor) {
                userRow.classList.add('_neighbor');
            }

            userRow.innerHTML = `
            <div class="table__row-item">
                ${userPlace < 10 ? '0' + userPlace : userPlace}
                ${isCurrentUser && !neighbor ? '<span class="you">' + translateKey("you") + '</span>' : ''}
            </div>
            <div class="table__row-item">
                ${isCurrentUser && !neighbor ? userData.userid : maskUserId(userData.userid)}
            </div>
            <div class="table__row-item">
                ${userData.points}
            </div>
            <div class="table__row-item">
                ${prizeKey ? translateKey(prizeKey) : ' - '}
            </div>
            <div class="table__row-item">
                ${prizeKey ? translateKey(prizeKey) : ' - '}
            </div>
        `;

            table.append(userRow);
        };
        if (isCurrentUser && !isTopCurrentUser) {
            const index = users.indexOf(user);
            if (users[index - 1]) {
                renderRow(users[index - 1], { neighbor: true });
            }
            renderRow(user, { highlight: true });
            if (users[index + 1]) {
                renderRow(users[index + 1], { neighbor: true });
            }
        } else {
            renderRow(user);
        }
    }

    function translateKey(key, defaultValue) {
        if (!key) {
            return;
        }
        let needKey = debug ? key : `*----NEED TO BE TRANSLATED----* key: ${key}`

        defaultValue =  needKey || key;
        return i18nData[key] || defaultValue;
    }

    function maskUserId(userId) {
        return "**" + userId.toString().slice(2);
    }

    function getPrizeTranslationKey(place, week) {
        if (place <= 3) return `prize_${week}-${place}`;
        if (place <= 10) return `prize_${week}-4-10`;
        if (place <= 25) return `prize_${week}-11-25`;
        if (place <= 50) return `prize_${week}-26-50`;
        if (place <= 75) return `prize_${week}-51-75`;
        if (place <= 100) return `prize_${week}-76-100`;
        if (place <= 125) return `prize_${week}-101-125`;
        if (place <= 150) return `prize_${week}-126-150`;
        if (place <= 175) return `prize_${week}-151-175`;
        if (place <= 200) return `prize_${week}-176-200`;
    }

    function participate() {
        if (!userId) {
            return;
        }
        const params = { userid: userId };
        fetch(apiURL + '/user/', {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify(params)
        }).then(res => res.json())
            .then(res => {
                loaderBtn = true
                toggleClasses(participateBtns, "loader")
                toggleTranslates(participateBtns, "loader")
                setTimeout(() =>{
                    toggleTranslates(participateBtns, "loader_ready")
                    toggleClasses(participateBtns, "done")
                    toggleClasses(participateBtns, "loader")
                }, 500)
                setTimeout(()=>{
                    checkUserAuth()
                }, 1000)

            });
    }
    function updateSlider() {
        items.forEach((item, index) => {
            const distance = index - currentIndex;
            let newPosition = distance * 105;

            if (distance > totalItems / 2) {
                newPosition -= totalItems * 105;
            } else if (distance < -totalItems / 2) {
                newPosition += totalItems * 105;
            }

            const scale = index === currentIndex ? 1 : 1;

            item.style.transform = `translateX(${newPosition}%) scale(${scale})`;
            item.style.zIndex = index === currentIndex ? 2 : 1;

            const isVisible = Math.abs(distance) <= 1 ||
                (index === 0 && currentIndex === totalItems - 1) ||
                (index === totalItems - 1 && currentIndex === 0);

            item.classList.toggle('hidden', !isVisible);
            item.classList.toggle('active', index === currentIndex);

            item.classList.remove('left-slide', 'right-slide');
            if (distance === 1 || (currentIndex === totalItems - 1 && index === 0)) {
                item.classList.add('right-slide');
            } else if (distance === -1 || (currentIndex === 0 && index === totalItems - 1)) {
                item.classList.add('left-slide');
            }
        });

        dots.forEach(dot => dot.classList.remove('_active'));
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
        const currentX = event.clientX || event.touches[0].clientX;
        const diffX = currentX - startX;

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
        document.querySelectorAll('.popup').forEach(p => p.classList.add('hide'));
        document.querySelectorAll('.popups .progress').forEach(p => p.classList.add('hide'));
        document.querySelector('.popups').classList.add('opacity-overlay');
    }

    function triggerShake() {
        box.classList.add('shake');

        setTimeout(() => {
            box.classList.remove('shake');
            const nextShake = Math.random() * 6000 + 4000;
            setTimeout(triggerShake, nextShake);
        }, 1200);
    }



    loadTranslations().then(init)

    // init()


    /// TEST

    document.querySelectorAll('.menu-test__btn').forEach(btn => {
        btn.addEventListener('click', () => {
            btn.parentElement.classList.toggle('open');
        });
    });

    document.addEventListener("DOMContentLoaded", () => {
        document.querySelector(".menu-btn")?.addEventListener("click", () => {
            document.querySelector(".menu-test")?.classList.toggle("hide");
        });
    });

    const lngBtn = document.querySelector(".lng-btn")

    lngBtn.addEventListener("click", () => {
        if (sessionStorage.getItem("locale")) {
            sessionStorage.removeItem("locale");
        } else {
            sessionStorage.setItem("locale", "en");
        }
        window.location.reload();
    });

    const authBtn = document.querySelector(".auth-btn")
    const betBtn = document.querySelector(".btn-bet-online")

    authBtn.addEventListener("click", () =>{
        if(userId){
            sessionStorage.removeItem("userId")
        }else{
            sessionStorage.setItem("userId", "777777")
        }
        window.location.reload()
    });


})();

// цю функцію видали, а основну розкоменти
function openPopupByAttr(popupAttr, isShowProgress = false) {
    const allPopups = document.querySelectorAll('.popup');
    allPopups.forEach(p => p.classList.add('hide'));

    const targetPopup = document.querySelector(`.popup[data-popup="${popupAttr}"]`);
    if (targetPopup) {
        targetPopup.classList.remove('hide');
        document.querySelector('.popups').classList.remove('opacity-overlay');
    }

    const progress = document.querySelector('.popups .progress');
    if (progress) {
        progress.classList.toggle('hide', !isShowProgress);
    }
}
// цю функцію видали, а основну розкоменти

