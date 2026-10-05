/* ==========================================================================
   Staff QR Hub — app.js
   --------------------------------------------------------------------------
   อ่านข้อมูลจาก staffLinks (assets/js/links.js) แล้ว render Card อัตโนมัติ
   จำนวนรายการเพิ่ม/ลดได้อิสระ โดยไม่ต้องแก้โครง HTML
   ========================================================================== */

(function () {
    "use strict";

    /* --- Inline SVG icons (ไม่พึ่ง CDN / icon font เพื่อให้โหลดเร็ว) ------ */
    var ICON_ATTRS =
        'viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" ' +
        'stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"';

    var ICON_PATHS = {
        link:     '<path d="M10.6 13.4a4 4 0 0 0 5.66 0l2.83-2.83a4 4 0 0 0-5.66-5.66l-1.1 1.1"/>' +
                  '<path d="M13.4 10.6a4 4 0 0 0-5.66 0L4.91 13.4a4 4 0 0 0 5.66 5.66l1.1-1.1"/>',
        document: '<path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z"/>' +
                  '<path d="M14 3v5h5M9 13h6M9 17h4"/>',
        form:     '<rect x="4" y="3" width="16" height="18" rx="2"/>' +
                  '<path d="M8 8h8M8 12h8M8 16h5"/>',
        calendar: '<rect x="3" y="5" width="18" height="16" rx="2"/>' +
                  '<path d="M3 10h18M8 3v4M16 3v4"/>',
        people:   '<path d="M16 19v-1.5a3.5 3.5 0 0 0-3.5-3.5h-4A3.5 3.5 0 0 0 5 17.5V19"/>' +
                  '<circle cx="10.5" cy="8" r="3.2"/>' +
                  '<path d="M19 19v-1.2a3.3 3.3 0 0 0-2.5-3.2M15.6 5.2a3.1 3.1 0 0 1 0 5.8"/>',
        chat:     '<path d="M20 12a7 7 0 0 1-7 7H9l-4 2.5V17a7 7 0 0 1 4-12.7h4a7 7 0 0 1 7 7z"/>' +
                  '<path d="M9.5 12h5"/>',
        folder:   '<path d="M4 7a2 2 0 0 1 2-2h3.2l1.8 2.2H18a2 2 0 0 1 2 2V17a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z"/>',
        clock:    '<circle cx="12" cy="12" r="8.2"/><path d="M12 7.8V12l3 1.8"/>',
        chart:    '<path d="M4 20V4M4 20h16"/>' +
                  '<path d="M8.5 20v-6M13 20V9.5M17.5 20v-8.5"/>',
        shield:   '<path d="M12 3l7 2.8v5.4c0 4.2-2.8 7.6-7 9.3-4.2-1.7-7-5.1-7-9.3V5.8z"/>' +
                  '<path d="M9.3 12.1l2 2 3.4-3.6"/>',
        phone:    '<path d="M6.5 3.5h2l1.6 3.8-2 1.3a11 11 0 0 0 5.3 5.3l1.3-2 3.8 1.6v2a2.5 2.5 0 0 1-2.7 2.5A14.5 14.5 0 0 1 4 6.2A2.5 2.5 0 0 1 6.5 3.5z"/>',
        tool:     '<path d="M14.3 6.2a3.8 3.8 0 0 1 5.2 5.2l-8.4 8.4a2.3 2.3 0 0 1-3.3-3.3z"/>' +
                  '<path d="M9 8L5.5 4.5M4 10l3.5-3.5"/>'
    };

    var ARROW_ICON =
        '<svg ' + ICON_ATTRS + '><path d="M9 6l6 6-6 6"/></svg>';

    function iconMarkup(name) {
        var paths = ICON_PATHS[name] || ICON_PATHS.link;
        return '<svg ' + ICON_ATTRS + '>' + paths + '</svg>';
    }

    /* --- Helpers ---------------------------------------------------------- */

    /** ลิงก์ที่ชี้ออกไปนอกโดเมนนี้ ให้เปิดแท็บใหม่ */
    function isExternal(url) {
        try {
            var target = new URL(url, window.location.href);
            if (target.protocol !== "http:" && target.protocol !== "https:") {
                return false;
            }
            return target.host !== window.location.host;
        } catch (err) {
            return false;
        }
    }

    function el(tag, className) {
        var node = document.createElement(tag);
        if (className) {
            node.className = className;
        }
        return node;
    }

    /* --- Card builder ----------------------------------------------------- */
    function buildCard(item) {
        var li = el("li", "card-item");

        var link = el("a", "card");
        link.href = item.url || "#";

        if (isExternal(link.href)) {
            link.target = "_blank";
            link.rel = "noopener noreferrer";
        }

        var label = item.title || "";
        if (item.description) {
            label += " — " + item.description;
        }
        link.setAttribute("aria-label", label);

        // Icon
        var icon = el("span", "card__icon");
        icon.innerHTML = iconMarkup(item.icon);
        link.appendChild(icon);

        // Title + description
        var body = el("span", "card__body");

        var title = el("span", "card__title");
        title.textContent = item.title || "";
        body.appendChild(title);

        if (item.description) {
            var desc = el("span", "card__desc");
            desc.textContent = item.description;
            body.appendChild(desc);
        }

        link.appendChild(body);

        // Arrow
        var arrow = el("span", "card__arrow");
        arrow.innerHTML = ARROW_ICON;
        link.appendChild(arrow);

        li.appendChild(link);
        return li;
    }

    /* --- Render ----------------------------------------------------------- */
    function render() {
        var grid = document.getElementById("linkGrid");
        var fallback = document.getElementById("gridFallback");

        if (!grid) {
            return;
        }

        var items = (typeof staffLinks !== "undefined" && Array.isArray(staffLinks))
            ? staffLinks
            : [];

        var valid = items.filter(function (item) {
            return item && item.title && item.url;
        });

        if (!valid.length) {
            if (fallback) {
                fallback.hidden = false;
            }
            return;
        }

        var fragment = document.createDocumentFragment();
        valid.forEach(function (item) {
            fragment.appendChild(buildCard(item));
        });

        grid.textContent = "";
        grid.appendChild(fragment);

        if (fallback) {
            fallback.hidden = true;
        }
    }

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", render);
    } else {
        render();
    }
})();
