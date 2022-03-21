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
      } /* remove class when scrolling up
        else {
        delClass(elemTrigger[i], classToAdd);
        if (!hasClass(elemTrigger[i], elemTarget)) {
          for (j = 0; j < elTargetLength; ++j) {
            delClass(elTarget[j], classToAdd);
          }
        }
      } */
    }
  }
  // params:  trigger element, target element class, classes to add to target element, trigger element distance from top, unit ('percent' or 'pixels')
  // usage:   elementFromTop(elemTrigger, elemTarget, classToAdd, distanceFromTop, unit);

  window.addEventListener(
    "scroll",
    throttle(function () {
      elementFromTop(document.querySelectorAll("#presentation-EVOO"), "pidgeon", "move-down-class", 450, "pixels"); // as top of element hits top of viewport
      elementFromTop(document.querySelectorAll("#presentation-EVOO"), "limited-edition", "move-up-class", 450, "pixels");
      elementFromTop(document.querySelectorAll("#presentation-EVOO"), "organic", "move-right-img-class", 200, "pixels");
      elementFromTop(document.querySelectorAll("#presentation-EVOO"), "right-text", "move-left-class", 200, "pixels");
      elementFromTop(document.querySelectorAll("#manifesto"), "bird-manifesto", "move-right-class", 450, "pixels");
      elementFromTop(document.querySelectorAll("#manifesto"), "manifesto-text", "move-left-class", 450, "pixels");
      elementFromTop(document.querySelectorAll("#the-estates"), "the-estates-txt", "move-down-class", 300, "pixels");
      elementFromTop(document.querySelectorAll("#quality-awards"), "quality-awards-header", "move-down-class", 800, "pixels");
      elementFromTop(document.querySelectorAll("#quality-awards"), "quality-awards-content", "move-down-class", 700, "pixels");
      elementFromTop(document.querySelectorAll("#quality-awards"), "item-award", "move-up-class", 500, "pixels");
      elementFromTop(document.querySelectorAll("#flex-our-vision"), "our-vision-image", "move-up-class", 400, "pixels");
      elementFromTop(document.querySelectorAll("#flex-our-vision"), "our-vision-txt", "move-up-class", 250, "pixels");
      elementFromTop(document.querySelectorAll("#our-land"), "our-land", "move-down-class", 200, "pixels");
      elementFromTop(document.querySelectorAll("#meets-us"), "george", "move-right-george", 400, "pixels");
      elementFromTop(document.querySelectorAll("#meets-us"), "giouli", "move-right-giouli", 400, "pixels");
      elementFromTop(document.querySelectorAll("#meets-us"), "jim", "move-right-jim", 400, "pixels");
      elementFromTop(document.querySelectorAll("#meets-us"), "sakis", "move-right-sakis", 400, "pixels");
      elementFromTop(
        document.querySelectorAll("#products-main"),
        "pooring-olive-image",
        "move-left-pooring-olive-image",
        400,
        "pixels"
      );
      elementFromTop(document.querySelectorAll("#products-main"), "quality-text", "move-left-quality-text", 200, "pixels");
      elementFromTop(
        document.querySelectorAll("#products-main"),
        "characteristics-text",
        "move-right-characteristics-text",
        -550,
        "pixels"
      );
      elementFromTop(
        document.querySelectorAll("#products-main"),
        "characteristics-image",
        "move-right-characteristics-image",
        -350,
        "pixels"
      );
    }, 100),
    false
  );
})();
