(function () {
  function debounce(fn, ms) {
    // https://remysharp.com/2010/07/21/throttling-function-calls
    var time = null;
    return function () {
      var a = arguments,
        t = this;
      clearTimeout(time);
      time = setTimeout(function () {
        fn.apply(t, a);
      }, ms);
    };
  }
  function throttle(fn, ms) {
    // Ryan Taylor comment - https://remysharp.com/2010/07/21/throttling-function-calls
    var time,
      last = 0;
    return function () {
      var a = arguments,
        t = this,
        now = +new Date(),
        exe = function () {
          last = now;
          fn.apply(t, a);
        };
      clearTimeout(time);
      now >= last + ms ? exe() : (time = setTimeout(exe, ms));
    };
  }
  function hasClass(el, cls) {
    if (el.className.match("(?:^|\\s)" + cls + "(?!\\S)")) {
      return true;
    }
  }
  function addClass(el, cls) {
    if (!el.className.match("(?:^|\\s)" + cls + "(?!\\S)")) {
      el.className += " " + cls;
    }
  }
  function delClass(el, cls) {
    el.className = el.className.replace(new RegExp("(?:^|\\s)" + cls + "(?!\\S)"), "");
  }

  document.documentElement.className += " js"; // adds class="js" to <html> element

  function elementFromTop(elemTrigger, elemTarget, classToAdd, distanceFromTop, unit) {
    var winY = window.innerHeight || document.documentElement.clientHeight,
      elTriggerLength = elemTrigger.length,
      elTargetLength,
      distTop,
      distPercent,
      distPixels,
      distUnit,
      elTarget,
      i,
      j;
    for (i = 0; i < elTriggerLength; ++i) {
      elTarget = document.querySelectorAll("." + elemTarget);
      elTargetLength = elTarget.length;
      distTop = elemTrigger[i].getBoundingClientRect().top;
      distPercent = Math.round((distTop / winY) * 100);
      distPixels = Math.round(distTop);
      distUnit = unit == "percent" ? distPercent : distPixels;
      if (distUnit <= distanceFromTop) {
        if (!hasClass(elemTrigger[i], elemTarget)) {
          for (j = 0; j < elTargetLength; ++j) {
            if (!hasClass(elTarget[j], classToAdd)) {
              addClass(elTarget[j], classToAdd);
            }
          }
        } else {
          if (!hasClass(elemTrigger[i], classToAdd)) {
            addClass(elemTrigger[i], classToAdd);
          }
        }
      } else {
        delClass(elemTrigger[i], classToAdd);
        if (!hasClass(elemTrigger[i], elemTarget)) {
          for (j = 0; j < elTargetLength; ++j) {
            delClass(elTarget[j], classToAdd);
          }
        }
      }
    }
  }
  // params:  trigger element, target element class, classes to add to target element, trigger element distance from top, unit ('percent' or 'pixels')
  // usage:   elementFromTop(elemTrigger, elemTarget, classToAdd, distanceFromTop, unit);

  window.addEventListener(
    "scroll",
    throttle(function () {
      elementFromTop(document.querySelectorAll("#presentation-EVOO"), "pidgeon", "move-down-class", 450, "pixels"); // as top of element hits top of viewport
      elementFromTop(document.querySelectorAll("#presentation-EVOO"), "limited-edition", "move-up-class", 450, "pixels");
      elementFromTop(document.querySelectorAll("#presentation-EVOO"), "organic", "move-right-class", 200, "pixels");
      elementFromTop(document.querySelectorAll("#presentation-EVOO"), "right-text", "move-left-class", 200, "pixels");

      elementFromTop(document.querySelectorAll(".white"), "bg", "bg--white", 100, "percent"); // as top of element enters bottom of viewport
      elementFromTop(document.querySelectorAll("#trigger-1"), "flower-1", "grow", 0, "pixels");
      elementFromTop(document.querySelectorAll("#trigger-2"), "flower-2", "grow", 70, "percent");
    }, 100),
    false
  );

  window.addEventListener(
    "resize",
    debounce(function () {
      elementFromTop(document.querySelectorAll(".peter-river"), "bg", "bg--peter-river", 0, "pixels"); // as top of element hits top of viewport

      elementFromTop(document.querySelectorAll(".white"), "bg", "bg--white", 100, "percent"); // as top of element enters bottom of viewport
      elementFromTop(document.querySelectorAll("#trigger-1"), "flower-1", "grow", 0, "pixels");
      elementFromTop(document.querySelectorAll("#trigger-2"), "flower-2", "grow", 70, "percent");
    }, 100),
    false
  );
})();
