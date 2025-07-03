(function () {

    const apiURL = 'https://fav-prom.com/api_sam_ua'

    const getActiveWeek = (promoStartDate, weekDuration) => {
        const currentDate = new Date();
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

    const promoStartDate = new Date("2025-07-14T00:00:00");
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


    const mainPage = document.querySelector(".fav-page"),
        unauthMsgs = document.querySelectorAll('.unauth-msg'),
        participateBtns = document.querySelectorAll('.part-btn'),
        redirectBtns = document.querySelectorAll('.btn-join'),
        loader = document.querySelector(".spinner-overlay"),
        currentCardsWrap = document.querySelector('.challange__current');

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
    let locale = sessionStorage.getItem("locale") || "en"

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

                reportError(err);

                document.querySelector('.fav-page').style.display = 'none';
                if (window.location.href.startsWith("https://www.favbet.hr/")) {
                    window.location.href = '/promocije/promocija/stub/';
                } else {
                    window.location.href = '/promos/promo/stub/';
                }

                return Promise.reject(err);
            });

    }

    function hideLoader(){
        loader.classList.add("hide")
        document.body.style.overflow = "auto"
        mainPage.classList.remove("loading")
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

        tabs.forEach((tab, index) => {
            tab.addEventListener('click', () => {
                currentIndex = index;
                updateSlider(currentIndex);
            });
        });

        dots.forEach((dot, index) => {
            dot.addEventListener('click', () => {
                currentIndex = index;
                updateSlider(currentIndex);
            });
        });

    }

    function checkUserAuth() {
        const loadTime = 200;

        setTimeout(() => {
            const showElements = (elements) => elements.forEach(el => el.classList.remove('hide'));
            const hideElements = (elements) => elements.forEach(el => el.classList.add('hide'));

            if (!userId) {
                hideElements(participateBtns);
                hideElements(redirectBtns);
                showElements(unauthMsgs);
                hideLoader();
                return Promise.resolve(false);
            }

            hideElements(unauthMsgs);

            return request(`/favuser/${userId}?nocache=1`).then(res => {
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
            sessionStorage.setItem("locale", "uk");
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

