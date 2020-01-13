// ==UserScript==
// @name         Yandex Lyceum - Theme Changer
// @version      1.0
// @description  Аддон для Яндекс LMS, который меняет цветовую схему сайта
// @author       Ilsur Gilmutdinov - ilsur_dev
// @match        *://lyceum.yandex.ru/*
// @match        *://lms.yandex.ru/*
// @downloadUrl  https://github.com/ilsur-dev/yandex-lms-theme-changer/raw/master/lms_theme-changer.user.js
// @updateUrl    https://github.com/ilsur-dev/yandex-lms-theme-changer/raw/master/lms_theme-changer.meta.js
// @run-at       document-start
// @grant        none
// ==/UserScript==

(function() {
    'use strict';


    // Доступные темы: dark; light
    var activeTheme = 'dark';

    // Скрыть Яндекс Чат
    var hideChat = true;


    function addGlobalStyle(css) {
        var head, style;
        head = document.getElementsByTagName('head')[0];
        if (!head) { return; }
        style = document.createElement('style');
        style.type = 'text/css';
        style.innerHTML = css;
        head.appendChild(style);
    }

    var darkStyle = `
    :root {
        background-color: #0a0a0a;
        --color-indicator-grey: #454647;
        --color-separator: #363738;
        --color-text-control: #e1e3e6;
        --color-text-heading: #e1e3e6;
        --color-link: #e1e3e6;
        --color-text-main: #76787a;
        --color-text-status: #76787a;
        --color-background-main: #454647;
        --color-background-menu: #2c2d2e;
        --color-control-outline: #454647;
        --color-background-notification-center: #2c2d2e;
        --color-comments-form-background: #2c2d2e;
        --color-background-panel: #19191a !important;
        --color-control-hover: #666;
    }
    .comments__comment_own .comments__comment-text {
        background-color: #454647;
    }
    .link-list_type_main .link-list__item {
        background-color: #19191a;
    }
    .course-card {
        background-color: #19191a;
    }
    .Link_view_lyceum.Link_theme_normal {
        color: #e1e3e6;
    }
    .Accordion {
        border: 1px solid #363738;
    }
    .Accordion-Item {
        border-top: 1px solid #363738;
    }
    .Accordion-Group:not(:last-of-type) .Accordion-Item:last-of-type {
        border-bottom-color: #363738;
    }

    .logo_lang_ru {
        background-image: url("data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20xml%3Aspace%3D%22preserve%22%20width%3D%22267.553mm%22%20height%3D%2252.2525mm%22%20style%3D%22shape-rendering%3AgeometricPrecision%3B%20text-rendering%3AgeometricPrecision%3B%20image-rendering%3AoptimizeQuality%3B%20fill-rule%3Aevenodd%3B%20clip-rule%3Aevenodd%22%20viewBox%3D%220%200%2026614%205198%22%3E%20%3Cdefs%3E%20%3Cstyle%20type%3D%22text%2Fcss%22%3E%20%3C!%5BCDATA%5B%20.fil0%20%7Bfill%3A%23FEFEFE%3Bfill-rule%3Anonzero%7D%20%5D%5D%3E%20%3C%2Fstyle%3E%20%3C%2Fdefs%3E%20%3Cg%20id%3D%22%D0%A1%D0%BB%D0%BE%D0%B9_x0020_1%22%3E%20%3Cmetadata%20id%3D%22CorelCorpID_0Corel-Layer%22%3E%3C%2Fmetadata%3E%20%3Cpath%20class%3D%22fil0%22%20d%3D%22M1756%20415l-262%200c-396%2C0%20-779%2C262%20-779%2C1022%200%2C734%20351%2C970%20779%2C970l262%200%200%20-1992zm-409%202401l-779%201750%20-568%200%20856%20-1871c-403%2C-205%20-671%2C-575%20-671%2C-1258%200%2C-958%20607%2C-1437%201328%2C-1437l735%200%200%204566%20-492%200%200%20-1750%20-409%200z%22%3E%3C%2Fpath%3E%20%3Cpath%20class%3D%22fil0%22%20d%3D%22M11800%202956c0%2C-1008%20390%2C-1653%201143%2C-1653%20288%2C0%20453%2C76%20594%2C166l-70%20472c-134%2C-115%20-326%2C-223%20-530%2C-223%20-358%2C0%20-613%2C402%20-613%2C1213%200%2C804%20191%2C1264%20594%2C1264%20242%2C0%20427%2C-96%20542%2C-198l115%20371c-172%2C147%20-376%2C242%20-670%2C242%20-690%2C0%20-1105%2C-555%20-1105%2C-1654zm-1456%207l0%201603%20-498%200%200%20-3219%20498%200%200%201488%20773%20-1488%20504%200%20-798%201514%20913%201705%20-542%200%20-850%20-1603zm-2343%20-300l824%200c0%2C-549%20-90%2C-952%20-377%2C-952%20-307%2C0%20-415%2C377%20-447%2C952zm549%201947c-664%2C0%20-1073%2C-530%20-1073%2C-1519%200%2C-1035%20288%2C-1788%20971%2C-1788%20536%2C0%20887%2C402%20887%2C1494l0%20274%20-1341%200c0%2C728%20205%2C1111%20601%2C1111%20281%2C0%20504%2C-127%20632%2C-217l115%20384c-205%2C159%20-473%2C261%20-792%2C261zm-2120%20-2860l-555%200%200%2057c0%2C677%20-32%2C1667%20-301%2C2350l856%200%200%20-2407zm747%203448l-447%200%200%20-632%20-1379%200%200%20632%20-447%200%200%20-1041%20198%200c294%2C-683%20326%2C-1679%20326%2C-2535l0%20-275%201494%200%200%202810%20255%200%200%201041zm-2560%20-3851l0%203219%20-492%200%200%20-1444%20-741%200%200%201444%20-498%200%200%20-3219%20498%200%200%201367%20741%200%200%20-1367%20492%200z%22%3E%3C%2Fpath%3E%20%3Cpath%20class%3D%22fil0%22%20d%3D%22M15446%203416c-70%2C837%20-268%2C1175%20-657%2C1175%20-77%2C0%20-109%2C-13%20-109%2C-13l-19%20-300c0%2C0%2026%2C7%2070%2C7%20262%2C0%20377%2C-281%20428%2C-894%20128%2C-1418%20141%2C-3219%20141%2C-3391l1570%200%200%204566%20-319%200%200%20-4304%20-977%200c0%2C134%20-6%2C1705%20-128%2C3154z%22%3E%3C%2Fpath%3E%20%3Cpath%20class%3D%22fil0%22%20d%3D%22M19099%202324c0%2C-166%2013%2C-306%2025%2C-440l-19%200c-44%2C140%20-102%2C274%20-172%2C415l-1047%202267%20-256%200%200%20-3219%20281%200%200%202235c0%2C173%20-13%2C313%20-25%2C454l19%200c44%2C-147%20108%2C-288%20172%2C-428l1047%20-2261%20262%200%200%203219%20-287%200%200%20-2242z%22%3E%3C%2Fpath%3E%20%3Cpolygon%20class%3D%22fil0%22%20points%3D%2221889%2C5198%2021851%2C4566%2020153%2C4566%2020153%2C1347%2020453%2C1347%2020453%2C4323%2021532%2C4323%2021532%2C1347%2021832%2C1347%2021832%2C4323%2022126%2C4323%2022126%2C5198%20%22%3E%3C%2Fpolygon%3E%20%3Cpath%20class%3D%22fil0%22%20d%3D%22M22790%202771l1168%200c51%2C-855%20-204%2C-1238%20-530%2C-1238%20-338%2C0%20-613%2C434%20-638%2C1238zm702%201597c428%2C0%20651%2C-345%20651%2C-345l96%20242c0%2C0%20-243%2C364%20-753%2C364%20-684%2C0%20-996%2C-619%20-996%2C-1673%200%2C-1053%20395%2C-1673%20938%2C-1673%20556%2C0%20913%2C582%20811%2C1725l-1456%200c13%2C881%20243%2C1360%20709%2C1360z%22%3E%3C%2Fpath%3E%20%3Cg%20id%3D%22_2047580303488%22%3E%20%3Cpath%20class%3D%22fil0%22%20d%3D%22M26327%202324c0%2C-85%202%2C-162%206%2C-233%205%2C-70%2011%2C-139%2020%2C-207l-20%200c-21%2C72%20-46%2C141%20-76%2C207%20-30%2C66%20-62%2C135%20-96%2C208l-1047%202266%20-255%200%200%20-3217%20281%200%200%202234c0%2C85%20-2%2C164%20-7%2C236%20-4%2C72%20-10%2C145%20-19%2C217l19%200c22%2C-72%2047%2C-144%2077%2C-214%2030%2C-70%2062%2C-141%2096%2C-214l1047%20-2259%20261%200%200%203217%20-287%200%200%20-2241z%22%3E%3C%2Fpath%3E%20%3Cpath%20class%3D%22fil0%22%20d%3D%22M25140%20428l268%200c0%2C293%20115%2C434%20332%2C434%20223%2C0%20338%2C-141%20338%2C-434l262%200c0%2C389%20-217%2C638%20-600%2C638%20-377%2C0%20-600%2C-249%20-600%2C-638z%22%3E%3C%2Fpath%3E%20%3C%2Fg%3E%20%3C%2Fg%3E%3C%2Fsvg%3E");
        background-size: contain;
        background-repeat: no-repeat;
    }
    .user2__menu .menu__item.menu__item_hovered_yes {
        background-color: #2c2d2e;
    }
    .user2__menu {
        background: #19191a;
    }
    .user2__menu-footer {
        background: #19191a;
    }
    .user-account {
        color: #e1e3e6;
    }
    .user2__add-account.user-account {
        color: #e1e3e6;
    }
    .user2__footer-link.button2 {
        color: #e1e3e6;
    }
    .user2__menu .menu__item_type_link {
        color: #e1e3e6;
    }
    .notification-center {
        border-radius: 0;
    }
    .user-icon_size_s {
        fill: #FFF;
    }
    .main-nav__menu {
        border-radius: 0;
    }
    .material__note {
        background: #19191a !important;
    }
    .material__annotation {
        background: #2c2d2e !important;
    }
    .code-editor {
        background-color: #19191a !important;
    }
    .monaco-editor .margin {
        background-color: #19191a !important;
    }
    .monaco-editor, .monaco-editor-background, .monaco-editor .inputarea.ime-input {
        background-color: #19191a !important;
    }
    code[class*=language-], pre[class*=language-] {
        text-shadow: 0 1px #000;
    }
    .token.operator {
        background: none !important;
    }
    .textinput_view_classic.textinput_theme_normal .textinput__box {
        background-color: #19191a !important;
    }
    .Sideblock_theme_normal .Sideblock-Content {
        background: #19191a;
    }
    .monaco-editor .view-overlays .current-line {
        border: 2px solid #2c2d2e !important;
    }
    .mtk1 {color: #e1e3e6 !important;}
    .mtk14 {color: #14b38e !important;}
    .mtk23 {color: #008acc !important;}

    .Button2_view_lyceum.Button2_theme_normal:before {
        background-color: #e1e3e6;
    }
    `;

    if (activeTheme === 'dark') {
        addGlobalStyle(darkStyle);
    }

    if (hideChat) {
        addGlobalStyle('.ya-chat-widget {display: none !important;}')
    }

})();
