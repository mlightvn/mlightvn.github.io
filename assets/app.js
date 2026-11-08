// vietkeys.com: the typing demo (keys → text, Telex / VNI) and the remembered page language.
(function () {
  'use strict';

  // Each example: the keys typed and the text after each key (as VietKeys types it)
  var EXAMPLES = {
    telex: [
      { keys: 'Tieengs Vieejt', out: ['T', 'Ti', 'Tie', 'Tiê', 'Tiên', 'Tiêng', 'Tiếng', 'Tiếng ', 'Tiếng V', 'Tiếng Vi', 'Tiếng Vie', 'Tiếng Viê', 'Tiếng Việ', 'Tiếng Việt'] },
      { keys: 'Xin chaof', out: ['X', 'Xi', 'Xin', 'Xin ', 'Xin c', 'Xin ch', 'Xin cha', 'Xin chao', 'Xin chào'] },
      { keys: 'dduowcj', out: ['d', 'đ', 'đu', 'đuo', 'đươ', 'đươc', 'được'] }
    ],
    vni: [
      { keys: 'Tie6ng1 Vie65t', out: ['T', 'Ti', 'Tie', 'Tiê', 'Tiên', 'Tiêng', 'Tiếng', 'Tiếng ', 'Tiếng V', 'Tiếng Vi', 'Tiếng Vie', 'Tiếng Viê', 'Tiếng Việ', 'Tiếng Việt'] },
      { keys: 'Xin chao2', out: ['X', 'Xi', 'Xin', 'Xin ', 'Xin c', 'Xin ch', 'Xin cha', 'Xin chao', 'Xin chào'] },
      { keys: 'd9uo7c5', out: ['d', 'đ', 'đu', 'đuo', 'đươ', 'đươc', 'được'] }
    ]
  };
  var KEY_MS = 260, PAUSE_MS = 1700;

  var demo = document.querySelector('[data-demo]');
  if (demo) {
    var keysEl = demo.querySelector('[data-keys]');
    var outEl = demo.querySelector('[data-out]');
    var buttons = demo.querySelectorAll('[data-method]');
    var still = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    var method = 'telex', index = 0, step = 0, timer = 0;

    var showKeys = function (keys, upto) {
      keysEl.textContent = '';
      for (var i = 0; i < keys.length; i++) {
        var k = document.createElement('kbd');
        var ch = keys.charAt(i);
        k.textContent = ch === ' ' ? '␣' : ch;
        if (ch === ' ') k.className = 'space';
        if (i < upto) k.className += ' done';
        if (i === upto) k.className += ' now';
        keysEl.appendChild(k);
      }
    };
    var showOut = function (text) {
      outEl.textContent = text;
      var caret = document.createElement('span');
      caret.className = 'caret';
      caret.setAttribute('aria-hidden', 'true');
      outEl.appendChild(caret);
    };
    var tick = function () {
      var ex = EXAMPLES[method][index];
      if (step < ex.keys.length) {
        showKeys(ex.keys, step);
        showOut(ex.out[step]);
        step++;
        timer = setTimeout(tick, KEY_MS);
      } else {
        showKeys(ex.keys, ex.keys.length);
        timer = setTimeout(function () {
          index = (index + 1) % EXAMPLES[method].length;
          step = 0;
          showOut('');
          tick();
        }, PAUSE_MS);
      }
    };
    var start = function (m) {
      method = m;
      index = 0;
      step = 0;
      clearTimeout(timer);
      for (var i = 0; i < buttons.length; i++) buttons[i].setAttribute('aria-pressed', String(buttons[i].getAttribute('data-method') === m));
      if (still) {
        var ex = EXAMPLES[m][0];
        showKeys(ex.keys, ex.keys.length);
        showOut(ex.out[ex.out.length - 1]);
      } else {
        tick();
      }
    };
    for (var i = 0; i < buttons.length; i++) {
      buttons[i].addEventListener('click', function () { start(this.getAttribute('data-method')); });
    }
    start('telex');
  }

  // A language picked by hand wins over the browser language (see the redirect on /)
  var links = document.querySelectorAll('[data-lang]');
  for (var j = 0; j < links.length; j++) {
    links[j].addEventListener('click', function () {
      try { localStorage.setItem('vk-lang', this.getAttribute('data-lang')); } catch (e) { /* private mode */ }
    });
  }
})();
