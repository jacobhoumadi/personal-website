/* ══════════════════════════════════════════════════════════════
   Contact : les boutons « Contactez-moi » copient l'adresse e-mail
   et affichent un petit message de confirmation.
   Utilisation : onclick="copyEmail(); return false;" sur un lien mailto.
   ══════════════════════════════════════════════════════════════ */
(function () {
    var EMAIL = 'jacob.radonirina@gmail.com';
    var LABELS = {
        fr: 'Adresse e-mail copiée',
        en: 'Email address copied',
        mg: 'Voadika ny adiresy mailaka'
    };
    var timer = null;

    function lang() {
        var l = (document.documentElement.lang || localStorage.getItem('lang') || 'fr').slice(0, 2);
        return LABELS[l] ? l : 'en';
    }

    function injectStyles() {
        if (document.getElementById('emailToastStyles')) return;
        var css = ''
            + '.email-toast{position:fixed;left:50%;bottom:28px;z-index:100000;display:flex;align-items:center;gap:12px;'
            + 'padding:14px 20px 14px 14px;border-radius:14px;background:#1A1D23;color:#fff;font-family:Poppins,sans-serif;'
            + 'font-size:14px;line-height:1.35;box-shadow:0 12px 32px rgba(0,0,0,.22);opacity:0;transform:translate(-50%,12px);'
            + 'transition:opacity .2s ease,transform .2s ease;max-width:calc(100vw - 32px)}'
            + '.email-toast.is-on{opacity:1;transform:translate(-50%,0)}'
            + '.email-toast[hidden]{display:none}'
            + '.email-toast-icon{width:30px;height:30px;flex:none;border-radius:50%;background:#0066FF;display:grid;place-items:center;font-weight:700}'
            + '.email-toast-text{display:flex;flex-direction:column;min-width:0}'
            + '.email-toast-text strong{font-weight:600}'
            + '.email-toast-text span{color:#C8D0DF;font-size:13px;overflow-wrap:anywhere}'
            + '@media (prefers-reduced-motion:reduce){.email-toast{transition:none}}';
        var style = document.createElement('style');
        style.id = 'emailToastStyles';
        style.textContent = css;
        document.head.appendChild(style);
    }

    function toast() {
        injectStyles();
        var t = document.getElementById('emailToast');
        if (!t) {
            t = document.createElement('div');
            t.id = 'emailToast';
            t.className = 'email-toast';
            t.setAttribute('role', 'status');
            t.setAttribute('aria-live', 'polite');
            t.hidden = true;
            t.innerHTML = '<span class="email-toast-icon" aria-hidden="true">✓</span>'
                + '<div class="email-toast-text"><strong></strong><span></span></div>';
            document.body.appendChild(t);
        }
        t.querySelector('strong').textContent = LABELS[lang()];
        t.querySelector('.email-toast-text span').textContent = EMAIL;
        t.hidden = false;
        requestAnimationFrame(function () { t.classList.add('is-on'); });
        clearTimeout(timer);
        timer = setTimeout(function () {
            t.classList.remove('is-on');
            setTimeout(function () { t.hidden = true; }, 250);
        }, 2600);
    }

    function fallbackCopy() {
        var ta = document.createElement('textarea');
        ta.value = EMAIL;
        ta.setAttribute('readonly', '');
        ta.style.position = 'fixed';
        ta.style.opacity = '0';
        document.body.appendChild(ta);
        ta.select();
        try { document.execCommand('copy'); } catch (e) {}
        ta.remove();
    }

    window.copyEmail = function () {
        if (navigator.clipboard && window.isSecureContext) {
            navigator.clipboard.writeText(EMAIL).catch(fallbackCopy);
        } else {
            fallbackCopy();
        }
        toast();
        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({ event: 'copy_email', page: location.pathname });
        return false;
    };
})();
