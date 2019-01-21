// public, protected, private

function Container(id, className, tagName) {
  // public
  this.id = id;
  this.className = className;

  // protected
  this._tagName = tagName;

  // private
  var element;

  this.getElement = function() {
    return element;
  }

  this.setElement = function(newValue) {
    element = newValue;
  }
}

Container.prototype.render = function() {
  var element = this.getElement();

  if (!element) {
    element = document.createElement(this._tagName);
    element.id = this.id;
    element.className = this.className;

    this.setElement(element);
  }

  return element;
}

Container.prototype.remove = function() {
  var element = this.getElement();

  if(element) {
    element.parentElement.removeChild(element);
    this.setElement(null);
  }
}

function Menu(id, className, items) {
  Container.call(this, id, className, 'ul');

  // protected
  this._items = items;
}

Menu.prototype = Object.create(Container.prototype);
Menu.prototype.render = function() {
  var container = Container.prototype.render.call(this);
  
  this._items.forEach(function(item) {
    if(item instanceof Container) {
      container.appendChild(item.render());
    }
  });

  return container;
}

function MenuItem(className, link, title) {
  Container.call(this, '', className, 'li');

  this.link = link;
  this.title = title;
}

MenuItem.prototype = Object.create(Container.prototype);
MenuItem.prototype.render = function() {
  var container = Container.prototype.render.call(this);

  var a = document.createElement('a');
  a.textContent = this.title;
  a.href = this.link;

  container.appendChild(a);

  return container;
}

function SuperMenu(id, className, items, link, title) {
  MenuItem.call(this, 'item', link, title);
  Menu.call(this, id, className, items);
}

SuperMenu.prototype = Object.create(Menu.prototype);
SuperMenu.prototype.render = function() {
  if(this.link && this.title) {
    var menuItem = new MenuItem('item', this.link, this.title).render();
    var menu = Menu.prototype.render.call(this);
    menuItem.appendChild(menu);

    return menuItem;
  } else {
    return Menu.prototype.render.call(this);
  }
}



function CreateMenu(menu_arr) {
    var mass_men = [];

    menu_arr.forEach(function(entry) {
        console.log(entry.className);
        var m = new MenuItem(entry.className, entry.link, entry.title);
        mass_men.push(m);
    })
    return mass_men;
}

var menu_arr =[
  {className:'menu-item', link:'/Shop/Clothes', title:'Clothes'}, 
  {className:'menu-item', link:'/Shop/Shoes', title:'Shoes'},
  {className:'menu-item', link:'/Shop/Accessories', title:'Accessories'}  
 ];

var mass_men = CreateMenu(menu_arr);
var menu1 = new SuperMenu('submenu', 'submenu', mass_men, '/shop', 'Shop');


var menu_arr =[
  {className:'menu-item', link:'/authentication', title:'Authentication'},
  {className:'menu-item', link:'/blog', title:'Blog'}, 
  {className:'menu-item', link:'/news', title:'News'} 
 ];

var mass_men = CreateMenu(menu_arr);
mass_men.push(menu1);
var menu2 = new SuperMenu('menu', 'menu', mass_men, '/main', 'Main');



document.body.appendChild(menu2.render());
