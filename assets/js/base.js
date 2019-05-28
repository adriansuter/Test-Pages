(function (w, d) {
  let layout = d.getElementById('layout'),
    menu = d.getElementById('menu'),
    menuLink = d.getElementById('menuLink'),
    content = d.getElementById('main');

  function toggleClass (element, className) {
    let classes = element.className.split(/\s+/),
      length = classes.length,
      i = 0;

    for (; i < length; i++) {
      if (classes[i] === className) {
        classes.splice(i, 1);
        break;
      }
    }
    // The className is not found
    if (length === classes.length) {
      classes.push(className);
    }

    element.className = classes.join(' ');
  }

  function toggleAll (e) {
    let active = 'active';

    e.preventDefault();
    toggleClass(layout, active);
    toggleClass(menu, active);
    toggleClass(menuLink, active);
  }

  menuLink.onclick = function (e) {
    toggleAll(e);
  };

  content.onclick = function (e) {
    if (menu.className.indexOf('active') !== -1) {
      toggleAll(e);
    }
  };

}(window, window.document));
