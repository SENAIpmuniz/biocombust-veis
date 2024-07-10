const themeBtn = document.getElementById('themeSwitcher')
const grayBtn = document.getElementById("graySwitcher")
const daltBtn = document.getElementById("daltonicSwitcher")
const htmlAcess = document.getElementById("master")

//===========================================================================
// CONFIGURANDO LOCAL STORAGE
//===========================================================================

const prefersColorScheme = window.matchMedia('(prefers-color-scheme: dark)');

var settings = {
    darkMode: prefersColorScheme.matches,
    colorblind: false,
    monochrome: false,
    fontSize: 90,
}

function setSettingsAccessibilityStorage(object) {
    localStorage.setItem('settingsAccessibility', JSON.stringify(object))
}

// Caso exista dados salvos, aplicar todos os padrões ja aplicados do localstorage
if (localStorage.getItem('settingsAccessibility')) {
    settings = JSON.parse(localStorage.getItem('settingsAccessibility'))
}

// Setando valores dos inputs e temas
function validadeThemesAndInputs() {

    grayBtn.checked = settings.monochrome
    daltBtn.checked = settings.colorblind
    themeBtn.checked = settings.darkMode

    if (themeBtn.checked) {
        document.body.classList.add('theme-2')
        document.body.classList.remove('theme-1')
    } else {
        document.body.classList.add('theme-1')
        document.body.classList.remove('theme-2')
    }

    grayBtn.checked ? htmlAcess.classList.add('theme-3') : htmlAcess.classList.remove('theme-3')
    daltBtn.checked ? htmlAcess.classList.add('theme-4') : htmlAcess.classList.remove('theme-4')

    $('html').css("font-size", settings.fontSize + "%");
    $("#size").val(settings.fontSize)

}

validadeThemesAndInputs()

//===========================================================================
// FORM SELEÇÃO DE TEMA
//===========================================================================
const buttons = document.getElementsByClassName("form-check-input");
const arr = [...buttons];

arr.forEach((element) => {
    element.addEventListener("click", () => {
        element.style.opacity = "1";
        arr
            .filter(function (item) {
                return item != element;
            })
            .forEach((item) => {
                item.style.opacity = "1";
            });
    });
});

//===========================================================================
// SELETOR DE TEMA
//===========================================================================

// Botão de switch de tema

function switchTheme() {

    settings.darkMode = !settings.darkMode

    document.body.classList.toggle('theme-1')
    document.body.classList.toggle('theme-2')

    setSettingsAccessibilityStorage(settings)

}

themeBtn.addEventListener('click', switchTheme);

//===========================================================================
// ACESSIBILIDADE
//===========================================================================

grayBtn.addEventListener('click', () => {

    if (grayBtn.checked == true) {

        htmlAcess.classList.remove("theme-4")
        htmlAcess.classList.add("theme-3")
        daltBtn.checked = false

        settings = { ...settings, monochrome: true, colorblind: false }
        setSettingsAccessibilityStorage(settings)

    } else {
        htmlAcess.classList.remove("theme-4")
        htmlAcess.classList.remove("theme-3")
        daltBtn.checked = false

        settings = { ...settings, monochrome: false, colorblind: false }
        setSettingsAccessibilityStorage(settings)

    }
})

daltBtn.addEventListener('click', () => {

    if (daltBtn.checked == true) {
        htmlAcess.classList.remove("theme-3")
        htmlAcess.classList.add("theme-4")
        grayBtn.checked = false

        settings = { ...settings, monochrome: false, colorblind: true }
        setSettingsAccessibilityStorage(settings)

    } else {
        htmlAcess.classList.remove("theme-3")
        htmlAcess.classList.remove("theme-4")
        grayBtn.checked = false

        settings = { ...settings, monochrome: false, colorblind: false }
        setSettingsAccessibilityStorage(settings)

    }
})

//IMAGEM

const btn = document.querySelectorAll("button");
const root = document.documentElement;

function mudaCor(bt) {
    //pega o valor do data-cor do botão clicado e coloca como valor da variável --cor no :root;
    btn.forEach((datac) => {
        datac = this.getAttribute('data-cor');
        root.style.setProperty('--cor', datac);
    });

    //coloca classe ativo no btn clicado e remove dos irmãos
    btn.forEach((limpa) => {
        limpa.classList.remove('ativo');
    })
    bt.currentTarget.classList.add('ativo');
}

// função que ativa quando o btn é clicado
btn.forEach((trocar) => {
    trocar.addEventListener('click', mudaCor);
});

//===========================================================================
// MUDANÇA DE FONTE
//===========================================================================
$("#size").change(function () {
    $('html').css("font-size", $(this).val() + "%");

    settings.fontSize = $(this).val()
    setSettingsAccessibilityStorage(settings)

});


//===========================================================================
// TIMELINE
//===========================================================================
(function () {

    // VARIABLES
    const timeline = document.querySelector(".timeline ol"),
        elH = document.querySelectorAll(".timeline li > div"),
        arrows = document.querySelectorAll(".timeline .arrows .arrow"),
        arrowPrev = document.querySelector(".timeline .arrows .arrow__prev"),
        arrowNext = document.querySelector(".timeline .arrows .arrow__next"),
        firstItem = document.querySelector(".timeline li:first-child"),
        lastItem = document.querySelector(".timeline li:last-child"),
        xScrolling = 280,
        disabledClass = "disabled";

    // START
    window.addEventListener("load", init);

    function init() {
        setEqualHeights(elH);
        animateTl(xScrolling, arrows, timeline);
        // setSwipeFn(timeline, arrowPrev, arrowNext);
        setKeyboardFn(arrowPrev, arrowNext);
    }

    // SET EQUAL HEIGHTS
    function setEqualHeights(el) {
        let counter = 0;
        for (let i = 0; i < el.length; i++) {
            const singleHeight = el[i].offsetHeight;

            if (counter < singleHeight) {
                counter = singleHeight;
            }
        }

        for (let i = 0; i < el.length; i++) {
            el[i].style.height = `${counter}px`;
        }
    }

    // CHECK IF AN ELEMENT IS IN VIEWPORT
    // http://stackoverflow.com/questions/123999/how-to-tell-if-a-dom-element-is-visible-in-the-current-viewport
    function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    // SET STATE OF PREV/NEXT ARROWS
    function setBtnState(el, flag = true) {
        if (flag) {
            el.classList.add(disabledClass);
        } else {
            if (el.classList.contains(disabledClass)) {
                el.classList.remove(disabledClass);
            }
            el.disabled = false;
        }
    }

    // ANIMATE TIMELINE
    function animateTl(scrolling, el, tl) {
        let counter = 0;
        for (let i = 0; i < el.length; i++) {
            el[i].addEventListener("click", function () {
                if (!arrowPrev.disabled) {
                    arrowPrev.disabled = true;
                }
                if (!arrowNext.disabled) {
                    arrowNext.disabled = true;
                }
                const sign = (this.classList.contains("arrow__prev")) ? "" : "-";
                if (counter === 0) {
                    tl.style.transform = `translateX(-${scrolling}px)`;
                } else {
                    const tlStyle = getComputedStyle(tl);
                    // add more browser prefixes if needed here
                    const tlTransform = tlStyle.getPropertyValue("-webkit-transform") || tlStyle.getPropertyValue("transform");
                    const values = parseInt(tlTransform.split(",")[4]) + parseInt(`${sign}${scrolling}`);
                    tl.style.transform = `translateX(${values}px)`;
                }

                setTimeout(() => {
                    isElementInViewport(firstItem) ? setBtnState(arrowPrev) : setBtnState(arrowPrev, false);
                    isElementInViewport(lastItem) ? setBtnState(arrowNext) : setBtnState(arrowNext, false);
                }, 1100);

                counter++;
            });
        }
    }

    // ADD SWIPE SUPPORT FOR TOUCH DEVICES
    // function setSwipeFn(tl, prev, next) {
    //     const hammer = new Hammer(tl);
    //     hammer.on("swipeleft", () => next.click());
    //     hammer.on("swiperight", () => prev.click());
    // }

    // ADD BASIC KEYBOARD FUNCTIONALITY
    function setKeyboardFn(prev, next) {
        document.addEventListener("keydown", (e) => {
            if ((e.which === 37) || (e.which === 39)) {
                const timelineOfTop = timeline.offsetTop;
                const y = window.pageYOffset;
                if (timelineOfTop !== y) {
                    window.scrollTo(0, timelineOfTop);
                }
                if (e.which === 37) {
                    prev.click();
                } else if (e.which === 39) {
                    next.click();
                }
            }
        });
    }

})();

//===========================================================================
// VLIBRAS HABILIT
//===========================================================================
function vlibrashow() {
    document.getElementById("vlibras-show").classList.toggle("active");
}

//===========================================================================
// ITEM SPOT IMG MODAL
//===========================================================================
$('.modal').click(function () {
    var id = $(this).attr('id');
    id = $(this).attr("id").replace(/highlight-spot-modal-/g, "");
    $("#item-spot" + id).addClass("highlight-spot-visited");
});

//===========================================================================
// POPUP MODAL JAVASCRIPT POPUP
//===========================================================================
function popup(url, params) {
    if (typeof params == 'undefined') params = {};
    if (typeof params['win_name'] == 'undefined') params['win_name'] = 'jan_pop';
    if (typeof params['w'] == 'undefined') params['w'] = 810;
    if (typeof params['h'] == 'undefined') params['h'] = screen.height - 55;
    if (typeof params['scroll'] == 'undefined') params['scroll'] = 'yes';
    if (typeof params['resizable'] == 'undefined') params['resizable'] = 'yes';
    params['win'] = window.open(url, params['win_name'], 'scrollbars=' + params['scroll']
        + ',resizable=' + params['resizable'] + ',toolbar=no,location=no,directories=no,'
        + 'menubar=no,status=yes,top=0,left='
        + ((screen.width - params['w']) / 2) + ',width=' + params['w'] + ',height=' + params['h']);
    params['win'].focus();
}
//

$(function () {
    $('.scroll-down').click(function () {
        $('html, body').animate({ scrollTop: $('section.ok').offset().top }, 'slow');
        return false;
    });
});

//===========================================================================
// SCROLL PROGRESS
//===========================================================================

let progressSection = document.querySelector(".progress_section");
let progressBar = document.querySelector(".progress_bar");
let progressNum = document.querySelector(".progress_num");

function ScroolPercent() {
  return (
    (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100
  );
}

function main() {
  progressBar.style.width = `${ScroolPercent()}%`;
  progressNum.innerHTML = `${Math.ceil(ScroolPercent())}%`;
}

setInterval(() => {
  main();
}, 1000 / 60);


