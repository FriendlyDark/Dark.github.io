(function () {
    'use strict';

    Lampa.Platform.tv();
    (function () {
        "use strict";
        function c() {
            var e = Lampa.Storage.get("menu_sort");
            if (e.includes("Русское")) {
                var f = e.indexOf("Русское");
                e.splice(f, 1);
                e.splice(4, 0, "Русское");
                Lampa.Storage.set(e);
            }
            var g = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"1.2em\" height=\"1.2em\" viewBox=\"0 0 48 48\"><g fill=\"none\" stroke=\"currentColor\" stroke-width=\"4\"><path stroke-linejoin=\"round\" d=\"M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4S4 12.954 4 24s8.954 20 20 20Z\"/><path stroke-linejoin=\"round\" d=\"M24 18a3 3 0 1 0 0-6a3 3 0 0 0 0 6Zm0 18a3 3 0 1 0 0-6a3 3 0 0 0 0 6Zm-9-9a3 3 0 1 0 0-6a3 3 0 0 0 0 6Zm18 0a3 3 0 1 0 0-6a3 3 0 0 0 0 6Z\"/><path stroke-linecap=\"round\" d=\"M24 44h20\"/></g></svg>";
            var h = $("<li class=\"menu__item selector\" data-action=\"ru_movie\"><div class=\"menu__ico\">" + g + "</div><div class=\"menu__text\">Русское</div></li>");
            var i = "<div class=\"settings-folder\" style=\"padding:0!important\"><div style=\"width:2.2em;height:1.7em;padding-right:.5em\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"1em\" height=\"1em\" viewBox=\"0 0 48 48\"><path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M12.071 33V15h5.893c3.331 0 6.032 2.707 6.032 6.045s-2.7 6.045-6.032 6.045h-5.893m5.893 0l5.892 5.905m3.073-11.92V28.5a4.5 4.5 0 0 0 4.5 4.5h0a4.5 4.5 0 0 0 4.5-4.5v-7.425m0 7.425V33\"/><rect width=\"37\" height=\"37\" x=\"5.5\" y=\"5.5\" fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" rx=\"4\" ry=\"4\"/></svg></div><div style=\"font-size:1.3em\">Русские фильмы</div></div>";
            var j = "<div class=\"settings-folder\" style=\"padding:0!important\"><div style=\"width:2.2em;height:1.7em;padding-right:.5em\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"1em\" height=\"1em\" viewBox=\"0 0 48 48\"><path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M12.071 33V15h5.893c3.331 0 6.032 2.707 6.032 6.045s-2.7 6.045-6.032 6.045h-5.893m5.893 0l5.892 5.905m3.073-11.92V28.5a4.5 4.5 0 0 0 4.5 4.5h0a4.5 4.5 0 0 0 4.5-4.5v-7.425m0 7.425V33\"/><rect width=\"37\" height=\"37\" x=\"5.5\" y=\"5.5\" fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" rx=\"4\" ry=\"4\"/></svg></div><div style=\"font-size:1.3em\">Русские сериалы</div></div>";
            var k = "<div class=\"settings-folder\" style=\"padding:0!important\"><div style=\"width:2.2em;height:1.7em;padding-right:.5em\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"1em\" height=\"1em\" viewBox=\"0 0 48 48\"><path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M12.071 33V15h5.893c3.331 0 6.032 2.707 6.032 6.045s-2.7 6.045-6.032 6.045h-5.893m5.893 0l5.892 5.905m3.073-11.92V28.5a4.5 4.5 0 0 0 4.5 4.5h0a4.5 4.5 0 0 0 4.5-4.5v-7.425m0 7.425V33\"/><rect width=\"37\" height=\"37\" x=\"5.5\" y=\"5.5\" fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" rx=\"4\" ry=\"4\"/></svg></div><div style=\"font-size:1.3em\">Русские мультфильмы</div></div>";
            var l = "<div class=\"settings-folder\" style=\"padding:0!important\"><div style=\"width:2.2em;height:1.7em;padding-right:.5em\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"1em\" height=\"1em\" viewBox=\"0 0 24 24\"><path fill=\"currentColor\" d=\"M2.185 6.758c-1.495 0-2.193.849-2.193 2.171v1.534c0 1.373.246 1.959 1.235 2.58l.763.474c.618.374.698.651.698 1.453v1.354c0 .393-.18.636-.521.636c-.342 0-.522-.228-.522-.636v-2.125H-.008v2.14c0 1.338.683 2.17 2.159 2.17c1.526 0 2.224-.882 2.224-2.17v-1.666c0-1.272-.326-1.927-1.265-2.529l-.763-.49c-.537-.342-.668-.586-.668-1.469v-1.24c0-.394.18-.637.503-.637c.341 0 .537.247.537.636v2.105h1.656V8.93c0-1.307-.698-2.17-2.19-2.17m2.711.162v1.635h1.17v9.797h1.687V8.555h1.17V6.92zm5.066 0l-.943 11.427h1.672l.23-3.053h1.227l.23 3.053h1.706l-.94-11.427Zm4.985 0v11.427h1.687v-4.78h1.024v3.917c0 .652.276.863.276.863h1.687c.004.004-.272-.207-.272-.863v-2.972c0-.949-.357-1.47-1.22-1.65v-.197c.86-.131 1.3-.768 1.3-1.797V8.929c0-1.257-.747-2.009-2.193-2.009zm5.02 0v1.635h1.169v9.797h1.687V8.555h1.17V6.92zm-8.529 1.55h.2l.399 5.274h-.997zm5.2.004h.437c.522 0 .667.212.667 1.06v1.419c0 .817-.18 1.06-.732 1.06h-.372z\"/></svg></div><div style=\"font-size:1.3em\">Start</div></div>";
            var m = "<div class=\"settings-folder\" style=\"padding:0!important\"><div style=\"width:2.2em;height:1.7em;padding-right:.5em\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"1em\" height=\"1em\" viewBox=\"0 0 24 24\"><path fill=\"currentColor\" d=\"M10.63 11.11a1.16 1.16 0 0 1-.81.77A4 4 0 0 1 8.2 12c-.11 0-.15 0-.15-.16V9.4c0-.09 0-.17.12-.17q.712-.01 1.42.07a1.3 1.3 0 0 1 1.04 1.81\"/><path fill=\"currentColor\" d=\"M17 2H7a5 5 0 0 0-5 5v10a5 5 0 0 0 5 5h10a5 5 0 0 0 5-5V7a5 5 0 0 0-5-5m-5.14 10.57a3 3 0 0 1-2 1c-.5.06-1 0-1.5.08H8v2.57c0 .2 0 .23-.21.23H6.37c-.15 0-.21-.05-.21-.21V7.79c0-.13 0-.2.18-.2H9.1A4 4 0 0 1 11 8a2.71 2.71 0 0 1 1.55 2.43a2.88 2.88 0 0 1-.69 2.14m5.94-1.29c0 .14-.08.17-.2.17a3.6 3.6 0 0 0-1.45.26l-.13.06a.58.58 0 0 0-.4.62v3.82c0 .23 0 .24-.23.24h-1.45c-.21 0-.23 0-.23-.23v-5.19c0-.38 0-.76-.05-1.14c0-.13 0-.19.17-.18h1.33a.23.23 0 0 1 .27.22c0 .2.07.41.1.58c.3-.21.59-.44.91-.63a2.35 2.35 0 0 1 1.19-.31c.12 0 .18 0 .18.17z\"/></svg></div><div style=\"font-size:1.3em\">Premier</div></div>";
            var n = "<div class=\"settings-folder\" style=\"padding:0!important\"><div style=\"width:2.2em;height:1.7em;padding-right:.5em\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"1em\" height=\"1em\" viewBox=\"0 0 24 24\"><path fill=\"currentColor\" d=\"M23.084 8.47h.373c.347 0 .55.174.55.444c0 .256-.19.463-.533.463h-.114v.357h-.276zm.643.455c0-.132-.1-.202-.243-.202h-.124v.408h.125c.143 0 .242-.074.242-.206m-1.646-.202h-.37v-.252h1.013v.252h-.368v1.01h-.275zm-.827 1.01l-.112-.308h-.472l-.108.309h-.288l.472-1.263h.319l.479 1.263Zm-.508-.534h.319l-.16-.44ZM19.04 8.47h.792v.249h-.516v.262h.472v.228h-.472v.276h.516v.248h-.792Zm-1.078.252h-.37V8.47h1.013v.252h-.369v1.01h-.274zm-1.993.38a.64.64 0 0 1 .652-.66c.37 0 .652.277.652.66c0 .382-.281.66-.652.66a.64.64 0 0 1-.652-.66m1.024 0c0-.26-.18-.407-.372-.407c-.193 0-.372.148-.372.406c0 .261.18.409.372.409c.191 0 .372-.15.372-.409m-1.768.125h-.516v.506h-.276V8.47h.276v.506h.516V8.47h.274v1.263h-.274ZM12.71 8.47h.263v.848h.001l.581-.848h.266v1.263h-.262v-.859h-.002l-.582.859h-.264zm-.8 1.263l-.475-.601v.6h-.276v-1.26h.276v.592l.472-.592h.324l-.505.623l.515.64zm-1.82-.643h.493v.208h-.493Zm-.852.137h-.516v.506h-.276V8.47h.276v.506h.516V8.47h.274v1.263h-.274ZM6.722 8.47h.263v.848h.001l.581-.848h.266v1.263H7.57v-.859h-.002l-.582.859h-.264zm.564-.114c-.178 0-.326-.09-.326-.305h.194c0 .104.04.16.132.16c.091 0 .132-.057.132-.16h.193c.001.216-.146.305-.325.305M5.953 9.734l-.111-.309H5.37l-.109.309h-.288l.472-1.263h.319l.479 1.263Zm-.508-.535h.319l-.16-.44Zm-2.033.303c.15 0 .211-.095.211-.322v-.71h.867v1.263h-.276v-1.01h-.322v.453c0 .402-.139.566-.48.566zm-.841-.274h-.517v.506h-.276V8.47h.276v.506h.517V8.47h.274v1.263H2.57ZM.007 9.102a.64.64 0 0 1 .652-.66a.64.64 0 0 1 .652.66c0 .383-.281.66-.652.66a.64.64 0 0 1-.652-.66m1.024 0c0-.259-.181-.406-.372-.406c-.193 0-.373.148-.373.406c0 .261.182.409.373.409s.372-.15.372-.409m6.857 1.66v5.264a.213.213 0 0 1-.213.213H6.303a.213.213 0 0 1-.213-.213v-5.264c0-.117.096-.212.213-.212h1.372c.118 0 .213.095.213.212M5.742 16l-1.599-2.736l1.516-2.466a.159.159 0 0 0-.13-.249l-1.666.003a.16.16 0 0 0-.132.07l-1.177 2.001h-.688v-1.86a.213.213 0 0 0-.212-.213H.282a.213.213 0 0 0-.213.212v5.264c0 .117.096.213.213.213h1.372a.213.213 0 0 0 .213-.213v-1.853h.836l1.17 1.99a.16.16 0 0 0 .136.078h1.598c.124 0 .2-.135.135-.241m17.99.239a.213.213 0 0 0 .212-.213v-5.264a.213.213 0 0 0-.212-.212h-1.323a.213.213 0 0 0-.212.212l.008 2.693l-2.401-2.903h-1.526a.213.213 0 0 0-.212.213v5.264c0 .117.095.212.212.212h1.32a.21.21 0 0 0 .212-.212v-2.696l2.377 2.906zm-6.216-5.455v5.22c0 .13-.105.235-.235.235H8.672a.235.235 0 0 1-.234-.235v-5.22c0-.13.105-.235.234-.235h8.61c.129 0 .234.106.234.235m-1.787 1.278a.075.075 0 0 0-.09-.073c-.93.186-4.223.214-5.327-.001a.074.074 0 0 0-.088.073v2.583c0 .046.04.08.086.074c.916-.136 4.396-.113 5.336.003a.074.074 0 0 0 .083-.074zm-7.841-1.3v5.264a.213.213 0 0 1-.213.213H6.303a.213.213 0 0 1-.213-.213v-5.264c0-.117.096-.212.213-.212h1.372c.118 0 .213.095.213.212M5.742 16l-1.599-2.736l1.516-2.466a.159.159 0 0 0-.13-.249l-1.666.003a.16.16 0 0 0-.132.07l-1.177 2.001h-.688v-1.86a.213.213 0 0 0-.212-.213H.282a.213.213 0 0 0-.213.212v5.264c0 .117.096.213.213.213h1.372a.213.213 0 0 0 .213-.213v-1.853h.836l1.17 1.99a.16.16 0 0 0 .136.078h1.598c.124 0 .2-.135.135-.241m17.99.239a.213.213 0 0 0 .212-.213v-5.264a.213.213 0 0 0-.212-.212h-1.323a.213.213 0 0 0-.212.212l.008 2.693l-2.401-2.903h-1.526a.213.213 0 0 0-.212.213v5.264c0 .117.095.212.212.212h1.32a.21.21 0 0 0 .212-.212v-2.696l2.377 2.906zm-6.216-5.455v5.22c0 .13-.105.235-.235.235H8.672a.235.235 0 0 1-.234-.235v-5.22c0-.13.105-.235.234-.235h8.61c.129 0 .234.106.234.235m-1.787 1.278a.075.075 0 0 0-.09-.073c-.93.186-4.223.214-5.327-.001a.074.074 0 0 0-.088.073v2.583c0 .046.04.08.086.074c.916-.136 4.396-.113 5.336.003a.074.074 0 0 0 .083-.074z\"/></svg></div><div style=\"font-size:1.3em\">KION</div></div>";
            var o = "<div class=\"settings-folder\" style=\"padding:0!important\"><div style=\"width:2.2em;height:1.7em;padding-right:.5em\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"1em\" height=\"1em\" viewBox=\"0 0 24 24\"><path fill=\"currentColor\" d=\"M4.863 5.537c-1.205 0-2.296.199-3.043.854c-.988.89-1.366 2.446-1.654 4.891a22 22 0 0 0-.149 2.282c0 1.252.195 2.235.77 2.972c.482.62 1.171.983 1.998 1.252c1.504.469 3.698.586 5.237.586c1.16 0 2.033-.176 2.63-.562c.54-.351.953-.843 1.251-1.521c.138-.293.207-.62.242-.714h-.574l-.161.41c-.482 1.228-1.447 1.825-3.17 1.825c-.666 0-1.516.012-2.48-.082c-2.665-.257-3.86-.643-4.525-1.486c-.678-.878-.816-2.329-.517-4.88c.149-1.322.402-3.709 1.47-4.563c.586-.468 1.378-.714 2.664-.714c.62 0 1.47.047 2.274.129c1.711.175 3.916.433 4.732 1.813c.091.164.137.305.137.305h.586c-.046-.117-.08-.234-.15-.363c-.436-.878-1.17-1.38-2.181-1.732c-.724-.257-1.62-.433-2.917-.562c-.724-.07-1.711-.14-2.47-.14M18.82 8.935c-.734 0-1.193.502-1.239 1.145l-.252 3.528c-.057.876.39 1.378 1.112 1.378s1.158-.526 1.48-1.005l1.547-2.395l-.138 2.021c-.057.818.367 1.379 1.158 1.379c.734 0 1.215-.444 1.261-1.11l.264-3.563c.046-.7-.287-1.378-1.204-1.378c-.504 0-.94.21-1.341.83l-1.605 2.464l.149-1.916c.046-.724-.39-1.378-1.192-1.378m-14.206 0c-.733 0-1.192.502-1.238 1.145l-.252 3.528c-.058.876.39 1.378 1.1 1.378s1.158-.526 1.491-1.005l1.548-2.394l-.138 2.02c-.069.818.367 1.379 1.158 1.379c.734 0 1.215-.444 1.261-1.11l.252-3.563c.058-.7-.275-1.378-1.192-1.378c-.516 0-.929.21-1.341.83l-1.605 2.464l.149-1.916c.046-.724-.401-1.378-1.193-1.378m7.602.047c-1.17 0-1.605.479-1.697 1.799l-.15 2.208c-.102 1.471.31 1.939 1.744 1.939h2.43c1.399 0 2.155-.584 2.155-1.636c0-.818-.607-1.332-1.398-1.448c.745-.152 1.387-.643 1.387-1.449c0-.9-.676-1.413-1.938-1.413zm.653 1.063h.562c.562 0 .894.245.894.665c0 .444-.344.701-.963.701h-.516s.046-.794.023-1.366m-.103 2.394h.62c.538 0 .916.222.916.678c0 .526-.39.76-1.043.76h-.676s.114-.725.183-1.438\"/></svg></div><div style=\"font-size:1.3em\">ИВИ</div></div>";
            var p = "<div class=\"settings-folder\" style=\"padding:0!important\"><div style=\"width:2.2em;height:1.7em;padding-right:.5em\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"1em\" height=\"1em\" viewBox=\"0 0 24 24\"><path fill=\"currentColor\" d=\"M20.698 9.692a3.286 3.286 0 0 0-3.293 3.285a3.285 3.285 0 0 0 3.293 3.278c1.824 0 3.302-1.462 3.302-3.278a3.29 3.29 0 0 0-3.302-3.285m-.008 5.191c-1.01 0-1.84-.895-1.84-1.906c0-1.018.83-1.913 1.84-1.913c1.018 0 1.848.895 1.848 1.913c0 1.01-.83 1.906-1.848 1.906m-8.476-5.076h-1.602l-1.897 2.637V7.852H7.26v8.288h1.454v-2.637l2.045 2.637h1.716l-2.521-3.204Zm5.634 0h-1.602l-1.897 2.637V7.852h-1.454v8.288h1.454v-2.637l2.045 2.637h1.717l-2.522-3.204ZM3.294 9.199a.73.73 0 0 0 .722-.73a.73.73 0 0 0-.722-.724a.73.73 0 0 0-.731.723c0 .403.328.731.73.731m1.889 0a.73.73 0 0 0 .723-.73a.73.73 0 0 0-.723-.724a.73.73 0 0 0-.731.723c0 .403.328.731.73.731m-3.778 0a.73.73 0 0 0 .722-.73a.73.73 0 0 0-.722-.724a.73.73 0 0 0-.731.723c0 .403.328.731.73.731m1.889.493A3.286 3.286 0 0 0 0 12.977a3.285 3.285 0 0 0 3.294 3.278c1.823 0 3.301-1.462 3.301-3.278a3.29 3.29 0 0 0-3.301-3.285m0 5.191c-1.01 0-1.84-.895-1.84-1.906c0-1.018.83-1.913 1.84-1.913c1.018 0 1.848.895 1.848 1.913c0 1.01-.83 1.906-1.848 1.906\"/></svg></div><div style=\"font-size:1.3em\">Okko</div></div>";
            var q = "<div class=\"settings-folder\" style=\"padding:0!important\"><div style=\"width:2.2em;height:1.7em;padding-right:.5em\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"1em\" height=\"1em\" viewBox=\"0 0 24 24\"><path fill=\"currentColor\" d=\"M12.049 0C5.45 0 .104 5.373.104 12S5.45 24 12.049 24c3.928 0 7.414-1.904 9.592-4.844l-9.803-5.174l6.256 6.418h-3.559l-4.373-6.086V20.4h-2.89V3.6h2.89v6.095L14.535 3.6h3.559l-6.422 6.627l9.98-5.368C19.476 1.911 15.984 0 12.05 0zm10.924 7.133l-9.994 4.027l10.917-.713a12 12 0 0 0-.923-3.314m-10.065 5.68l10.065 4.054c.458-1.036.774-2.149.923-3.314z\"/></svg></div><div style=\"font-size:1.3em\">КиноПоиск</div></div>";
            var r = "<div class=\"settings-folder\" style=\"padding:0!important\"><div style=\"width:2.2em;height:1.7em;padding-right:.5em\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"1em\" height=\"1em\" viewBox=\"0 0 48 48\"><path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M18.644 24.001L7.931 13.288L18.644 2.575L40.069 24L18.644 45.425L7.931 34.712z\"/></svg></div><div style=\"font-size:1.3em\">Wink</div></div>";
            var s = "<div class=\"settings-folder\" style=\"padding:0!important\"><div style=\"width:2.2em;height:1.7em;padding-right:.5em\"><svg viewBox=\"0 -0.5 17 17\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" class=\"si-glyph si-glyph-button-tv\" fill=\"#000000\"><g id=\"SVGRepo_bgCarrier\" stroke-width=\"0\"></g><g id=\"SVGRepo_tracerCarrier\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></g><g id=\"SVGRepo_iconCarrier\"> <title>1020</title> <defs> </defs> <g stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\"> <path d=\"M14.338,3.045 L9.008,4.047 L3.647,3.045 C2.195,3.045 1.016,4.373 1.016,6.011 L1.016,11.034 C1.016,12.672 2.195,14 3.647,14 L9.008,12.969 L14.338,14 C15.79,14 16.969,12.672 16.969,11.034 L16.969,6.011 C16.969,4.373 15.79,3.045 14.338,3.045 L14.338,3.045 Z M8.024,7.016 L6.026,7.016 L6.026,11.047 L4.964,11.047 L4.964,7.016 L2.984,7.016 L2.984,6 L8.024,6 L8.024,7.016 L8.024,7.016 Z M13.086,11.033 L11.959,11.033 L9.962,5.965 L11.262,5.965 L12.53,9.631 L13.761,5.965 L15.055,5.965 L13.086,11.033 L13.086,11.033 Z\" fill=\"#ffffff\" class=\"si-glyph-fill\"> </path> </g> </g></svg></div><div style=\"font-size:1.3em\">СТС</div></div>";
            var t = "<div class=\"settings-folder\" style=\"padding:0!important\"><div style=\"width:2.2em;height:1.7em;padding-right:.5em\"><svg viewBox=\"0 -0.5 17 17\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" class=\"si-glyph si-glyph-button-tv\" fill=\"#000000\"><g id=\"SVGRepo_bgCarrier\" stroke-width=\"0\"></g><g id=\"SVGRepo_tracerCarrier\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></g><g id=\"SVGRepo_iconCarrier\"> <title>1020</title> <defs> </defs> <g stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\"> <path d=\"M14.338,3.045 L9.008,4.047 L3.647,3.045 C2.195,3.045 1.016,4.373 1.016,6.011 L1.016,11.034 C1.016,12.672 2.195,14 3.647,14 L9.008,12.969 L14.338,14 C15.79,14 16.969,12.672 16.969,11.034 L16.969,6.011 C16.969,4.373 15.79,3.045 14.338,3.045 L14.338,3.045 Z M8.024,7.016 L6.026,7.016 L6.026,11.047 L4.964,11.047 L4.964,7.016 L2.984,7.016 L2.984,6 L8.024,6 L8.024,7.016 L8.024,7.016 Z M13.086,11.033 L11.959,11.033 L9.962,5.965 L11.262,5.965 L12.53,9.631 L13.761,5.965 L15.055,5.965 L13.086,11.033 L13.086,11.033 Z\" fill=\"#ffffff\" class=\"si-glyph-fill\"> </path> </g> </g></svg></div><div style=\"font-size:1.3em\">ТНТ</div></div>";
            h.on("hover:enter", function () {
                var a = {
                    title: i
                };
                var b = {
                    title: j
                };
                var c = {
                    title: k
                };
                var d = {
                    title: l
                };
                var e = {
                    title: m
                };
                var f = {
                    title: n
                };
                var g = {
                    title: o
                };
                var h = {
                    title: p
                };
                var u = {
                    title: q
                };
                var v = {
                    title: r
                };
                var w = {
                    title: s
                };
                var x = {
                    title: t
                };
                var y = [a, b, c, d, e, f, g, h, u, v, w, x];
                Lampa.Select.show({
                    title: Lampa.Lang.translate("settings_rest_source"),
                    items: y,
                    onSelect: function b(a) {
                        if (a.title === i) {
                            var c = {
                                url: "?cat=movie&airdate=2023-2025&without_genres=16&language=ru",
                                title: "Русские фильмы",
                                component: "category_full",
                                source: "cub",
                                card_type: "true",
                                page: 1
                            };
                            Lampa.Activity.push(c);
                        } else if (a.title === j) {
                            var d = {
                                url: "discover/tv?&with_original_language=ru",
                                title: "Русские сериалы",
                                component: "category_full",
                                source: "tmdb",
                                card_type: "true",
                                page: 1,
                                sort_by: "first_air_date.desc"
                            };
                            Lampa.Activity.push(d);
                        } else if (a.title === k) {
                            var e = {
                                url: "?cat=movie&airdate=2020-2025&genre=16&language=ru",
                                title: "Русские мультфильмы",
                                component: "category_full",
                                source: "cub",
                                card_type: "true",
                                page: 1
                            };
                            Lampa.Activity.push(e);
                        } else if (a.title === l) {
                            var f = {
                                url: "discover/tv",
                                title: "Start",
                                networks: "2493",
                                sort_by: "first_air_date.desc",
                                component: "category_full",
                                source: "tmdb",
                                card_type: "true",
                                page: 1
                            };
                            Lampa.Activity.push(f);
                        } else if (a.title === m) {
                            var g = {
                                url: "discover/tv",
                                title: "Premier",
                                networks: "2859",
                                sort_by: "first_air_date.desc",
                                component: "category_full",
                                source: "tmdb",
                                card_type: "true",
                                page: 1
                            };
                            Lampa.Activity.push(g);
                        } else if (a.title === n) {
                            var h = {
                                url: "discover/tv",
                                title: "KION",
                                networks: "4085",
                                sort_by: "first_air_date.desc",
                                component: "category_full",
                                source: "tmdb",
                                card_type: "true",
                                page: 1
                            };
                            Lampa.Activity.push(h);
                        } else if (a.title === o) {
                            var u = {
                                url: "discover/tv",
                                title: "ИВИ",
                                networks: "3923",
                                sort_by: "first_air_date.desc",
                                component: "category_full",
                                source: "tmdb",
                                card_type: "true",
                                page: 1
                            };
                            Lampa.Activity.push(u);
                        } else if (a.title === p) {
                            var v = {
                                url: "discover/tv",
                                title: "Okko",
                                networks: "3871",
                                sort_by: "first_air_date.desc",
                                component: "category_full",
                                source: "tmdb",
                                card_type: "true",
                                page: 1
                            };
                            Lampa.Activity.push(v);
                        } else if (a.title === q) {
                            var w = {
                                url: "discover/tv",
                                title: "КиноПоиск",
                                networks: "3827",
                                sort_by: "first_air_date.desc",
                                component: "category_full",
                                source: "tmdb",
                                card_type: "true",
                                page: 1
                            };
                            Lampa.Activity.push(w);
                        } else if (a.title === r) {
                            var x = {
                                url: "discover/tv",
                                title: "Wink",
                                networks: "5806",
                                sort_by: "first_air_date.desc",
                                component: "category_full",
                                source: "tmdb",
                                card_type: "true",
                                page: 1
                            };
                            Lampa.Activity.push(x);
                        } else if (a.title === s) {
                            var y = {
                                url: "discover/tv",
                                title: "СТС",
                                networks: "806",
                                sort_by: "first_air_date.desc",
                                component: "category_full",
                                source: "tmdb",
                                card_type: "true",
                                page: 1
                            };
                            Lampa.Activity.push(y);
                        } else if (a.title === t) {
                            var z = {
                                url: "discover/tv",
                                title: "ТНТ",
                                networks: "1191",
                                sort_by: "first_air_date.desc",
                                component: "category_full",
                                source: "tmdb",
                                card_type: "true",
                                page: 1
                            };
                            Lampa.Activity.push(z);
                        }
                    },
                    onBack: function a() {
                        Lampa.Controller.toggle("menu");
                    }
                });
            });
            $(".menu .menu__list").eq(0).append(h);
        }
        if (window.appready) {
            c();
        } else {
            Lampa.Listener.follow("app", function (a) {
                if (a.type == "ready") {
                    c();
                }
            });
        }
    })();
    (function () {
        'use strict';

        function a() {
            window.plugin_tmdb_mod_ready = true;
            function a(a) {
                var b = a.card || a;
                var c = a.next_episode_to_air || a.episode || {};
                if (b.source == undefined) {
                    b.source = "tmdb";
                }
                Lampa.Arrays.extend(b, {
                    title: b.name,
                    original_title: b.original_name,
                    release_date: b.first_air_date
                });
                b.release_year = ((b.release_date || "0000") + "").slice(0, 4);
                function d(a) {
                    if (a) {
                        a.remove();
                    }
                }
                this.build = function () {
                    this.card = Lampa.Template.js("card_episode");
                    this.img_poster = this.card.querySelector(".card__img") || {};
                    this.img_episode = this.card.querySelector(".full-episode__img img") || {};
                    this.card.querySelector(".card__title").innerText = b.title;
                    this.card.querySelector(".full-episode__num").innerText = b.unwatched || "";
                    if (c && c.air_date) {
                        this.card.querySelector(".full-episode__name").innerText = c.name || Lang.translate("noname");
                        this.card.querySelector(".full-episode__num").innerText = c.episode_number || "";
                        this.card.querySelector(".full-episode__date").innerText = c.air_date ? Lampa.Utils.parseTime(c.air_date).full : "----";
                    }
                    if (b.release_year == "0000") {
                        d(this.card.querySelector(".card__age"));
                    } else {
                        this.card.querySelector(".card__age").innerText = b.release_year;
                    }
                    this.card.addEventListener("visible", this.visible.bind(this));
                };
                this.image = function () {
                    var a = this;
                    this.img_poster.onload = function () { };
                    this.img_poster.onerror = function () {
                        a.img_poster.src = "./img/img_broken.svg";
                    };
                    this.img_episode.onload = function () {
                        a.card.querySelector(".full-episode__img").classList.add("full-episode__img--loaded");
                    };
                    this.img_episode.onerror = function () {
                        a.img_episode.src = "./img/img_broken.svg";
                    };
                };
                this.create = function () {
                    var a = this;
                    this.build();
                    this.card.addEventListener("hover:focus", function () {
                        if (a.onFocus) {
                            a.onFocus(a.card, b);
                        }
                    });
                    this.card.addEventListener("hover:hover", function () {
                        if (a.onHover) {
                            a.onHover(a.card, b);
                        }
                    });
                    this.card.addEventListener("hover:enter", function () {
                        if (a.onEnter) {
                            a.onEnter(a.card, b);
                        }
                    });
                    this.image();
                };
                this.visible = function () {
                    if (b.poster_path) {
                        this.img_poster.src = Lampa.Api.img(b.poster_path);
                    } else if (b.profile_path) {
                        this.img_poster.src = Lampa.Api.img(b.profile_path);
                    } else if (b.poster) {
                        this.img_poster.src = b.poster;
                    } else if (b.img) {
                        this.img_poster.src = b.img;
                    } else {
                        this.img_poster.src = "./img/img_broken.svg";
                    }
                    if (b.still_path) {
                        this.img_episode.src = Lampa.Api.img(c.still_path, "w300");
                    } else if (b.backdrop_path) {
                        this.img_episode.src = Lampa.Api.img(b.backdrop_path, "w300");
                    } else if (c.img) {
                        this.img_episode.src = c.img;
                    } else if (b.img) {
                        this.img_episode.src = b.img;
                    } else {
                        this.img_episode.src = "./img/img_broken.svg";
                    }
                    if (this.onVisible) {
                        this.onVisible(this.card, b);
                    }
                };
                this.destroy = function () {
                    this.img_poster.onerror = function () { };
                    this.img_poster.onload = function () { };
                    this.img_episode.onerror = function () { };
                    this.img_episode.onload = function () { };
                    this.img_poster.src = "";
                    this.img_episode.src = "";
                    d(this.card);
                    this.card = null;
                    this.img_poster = null;
                    this.img_episode = null;
                };
                this.render = function (a) {
                    if (a) {
                        return this.card;
                    } else {
                        return $(this.card);
                    }
                };
            }
            function b(b) {
                this.network = new Lampa.Reguest();
                this.main = function () {
                    var c = this;
                    var d = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
                    var e = arguments.length > 1 ? arguments[1] : undefined;
                    var f = arguments.length > 2 ? arguments[2] : undefined;
                    var g = [function (a) {
                        c.get("movie/now_playing", d, function (b) {
                            b.title = Lampa.Lang.translate("title_now_watch");
                            a(b);
                        }, a);
                    }, function (b) {
                        b({
                            source: "tmdb",
                            results: Lampa.TimeTable.lately().slice(0, 20),
                            title: Lampa.Lang.translate("title_upcoming_episodes"),
                            nomore: true,
                            cardClass: function d(b, c) {
                                return new a(b, c);
                            }
                        });
                    }, function (a) {
                        c.get("trending/movie/day", d, function (b) {
                            b.title = Lampa.Lang.translate("title_trend_day");
                            a(b);
                        }, a);
                    }, function (a) {
                        c.get("trending/movie/week", d, function (b) {
                            b.title = Lampa.Lang.translate("title_trend_week");
                            a(b);
                        }, a);
                    }, function (a) {
                        c.get("discover/movie?vote_average.gte=5&vote_average.lte=9&with_original_language=ru&sort_by=primary_release_date.desc&primary_release_date.lte=" + new Date().toISOString().substr(0, 10), d, function (b) {
                            b.title = Lampa.Lang.translate("Русские фильмы");
                            a(b);
                        }, a);
                    }, function (a) {
                        c.get("discover/tv?with_original_language=ru&sort_by=first_air_date.desc", d, function (b) {
                            b.title = Lampa.Lang.translate("Русские сериалы");
                            b.small = true;
                            b.wide = true;
                            b.results.forEach(function (a) {
                                a.promo = a.overview;
                                a.promo_title = a.title || a.name;
                            });
                            a(b);
                        }, a);
                    }, function (a) {
                        c.get("movie/upcoming", d, function (b) {
                            ;
                            b.title = Lampa.Lang.translate("title_upcoming");
                            a(b);
                        }, a);
                    }, function (a) {
                        c.get("discover/movie?vote_average.gte=5&vote_average.lte=9&with_genres=16&with_original_language=ru&sort_by=primary_release_date.desc&primary_release_date.lte=" + new Date().toISOString().substr(0, 10), d, function (b) {
                            b.title = Lampa.Lang.translate("Русские мультфильмы");
                            b.small = true;
                            b.wide = true;
                            b.results.forEach(function (a) {
                                ;
                                a.promo = a.overview;
                                a.promo_title = a.title || a.name;
                            });
                            a(b);
                        }, a);
                    }, function (a) {
                        c.get("movie/popular", d, function (b) {
                            b.title = Lampa.Lang.translate("title_popular_movie");
                            a(b);
                        }, a);
                    }, function (a) {
                        c.get("trending/tv/week", d, function (b) {
                            ;
                            b.title = Lampa.Lang.translate("title_popular_tv");
                            a(b);
                        }, a);
                    }, function (a) {
                        c.get("discover/tv?with_networks=2493&sort_by=first_air_date.desc", d, function (b) {
                            b.title = Lampa.Lang.translate("Start");
                            b.small = true;
                            b.wide = true;
                            b.results.forEach(function (a) {
                                ;
                                a.promo = a.overview;
                                a.promo_title = a.title || a.name;
                            });
                            a(b);
                        }, a);
                    }, function (a) {
                        c.get("discover/tv?with_networks=2859&sort_by=first_air_date.desc", d, function (b) {
                            b.title = Lampa.Lang.translate("Premier");
                            a(b);
                        }, a);
                    }, function (a) {
                        c.get("discover/tv?with_networks=4085&sort_by=first_air_date.desc", d, function (b) {
                            b.title = Lampa.Lang.translate("KION");
                            a(b);
                        }, a);
                    }, function (a) {
                        c.get("discover/tv?with_networks=3923&sort_by=first_air_date.desc", d, function (b) {
                            b.title = Lampa.Lang.translate("IVI");
                            b.small = true;
                            b.wide = true;
                            b.results.forEach(function (a) {
                                a.promo = a.overview;
                                a.promo_title = a.title || a.name;
                            });
                            a(b);
                        }, a);
                    }, function (a) {
                        c.get("discover/tv?with_networks=3871&sort_by=first_air_date.desc", d, function (b) {
                            b.title = Lampa.Lang.translate("OKKO");
                            a(b);
                        }, a);
                    }, function (a) {
                        c.get("discover/tv?with_networks=3827&sort_by=first_air_date.desc", d, function (b) {
                            b.title = Lampa.Lang.translate("КиноПоиск");
                            a(b);
                        }, a);
                    }, function (a) {
                        c.get("discover/tv?with_networks=5806&sort_by=first_air_date.desc", d, function (b) {
                            b.title = Lampa.Lang.translate("Wink");
                            b.small = true;
                            b.wide = true;
                            b.results.forEach(function (a) {
                                a.promo = a.overview;
                                a.promo_title = a.title || a.name;
                            });
                            a(b);
                        }, a);
                    }, function (a) {
                        c.get("discover/tv?with_networks=806&sort_by=first_air_date.desc", d, function (b) {
                            b.title = Lampa.Lang.translate("СТС");
                            a(b);
                        }, a);
                    }, function (a) {
                        c.get("discover/tv?with_networks=1191&sort_by=first_air_date.desc", d, function (b) {
                            b.title = Lampa.Lang.translate("ТНТ");
                            a(b);
                        }, a);
                    }, function (a) {
                        c.get("movie/top_rated", d, function (b) {
                            b.title = Lampa.Lang.translate("title_top_movie");
                            a(b);
                        }, a);
                    }, function (a) {
                        c.get("tv/top_rated", d, function (b) {
                            ;
                            b.title = Lampa.Lang.translate("title_top_tv");
                            a(b);
                        }, a);
                    }];
                    Lampa.Arrays.insert(g, 0, Lampa.Api.partPersons(g, g.length - 1, "movie"));
                    b.genres.movie.forEach(function (a) {
                        var b = function e(b) {
                            c.get("discover/movie?with_genres=" + a.id, d, function (c) {
                                c.title = Lampa.Lang.translate(a.title.replace(/[^a-z_]/g, ""));
                                b(c);
                            }, b);
                        };
                        g.push(b);
                    });
                    function h(a, b) {
                        Lampa.Api.partNext(g, 6, a, b);
                    }
                    h(e, f);
                    return h;
                };
            }
            function c() {
                Object.assign(Lampa.Api.sources.tmdb, new b(Lampa.Api.sources.tmdb));
            }
            if (window.appready) {
                c();
            } else {
                Lampa.Listener.follow("app", function (a) {
                    if (a.type == "ready") {
                        c();
                    }
                });
            }
        }
        var b = {
            name: "rus_movie_main",
            type: "trigger",
            default: true
        };
        var c = {
            name: "Русские новинки на главной",
            description: "Показывает или отключает подборки русских новинок на главной странице. После изменения параметра приложение нужно перезапустить"
        };
        Lampa.SettingsApi.addParam({
            component: "interface",
            param: b,
            field: c,
            onRender: function (a) {
                // TOLOOK
                setTimeout(function () {
                    $("div[data-name=\"rus_movie_main\"]").insertAfter("div[data-name=\"interface_size\"]");
                }, 0);
            }
        });
        if (Lampa.Storage.get("rus_movie_main") !== false) {
            if (!window.plugin_tmdb_mod_ready) {
                a();
            }
        }
    })();
})();