const pricingButton = document.querySelector(".pricing-selected");
pricingButton.addEventListener("click", event => {
  event.preventDefault();
});

class TabLink {
  constructor(element) {
    // Assign this.element to the passed in DOM element
    this.element = element;

    // Get the custom data attribute on the Link
    this.data = this.element.dataset.tab;
    //console.log(this.element.dataset.tab);

    // Using the custom data attribute get the associated Item element
    this.itemElement = document.querySelector(
      `.tabs-item[data-tab='${this.data}']`
    );
    //console.log(this.itemElement);

    // Using the Item element, create a new instance of the TabItem class
    this.tabItem = new TabItem(this.itemElement);
    //console.log(this.tabItem);

    // Add a click event listener on this instance, calling the select method on click
    this.element.addEventListener("click", () => this.select());
  }

  select() {
    // Get all of the elements with the tabs-link class
    const links = document.querySelectorAll(".tabs-link");

    // Using a loop or the forEach method remove the 'tabs-link-selected' class from all of the links
    Array.from(links).forEach(function(element) {
      element.classList.remove("tabs-link-selected");
    });

    // Add a class named "tabs-link-selected" to this link
    this.element.classList.add("tabs-link-selected");

    // Call the select method on the item associated with this link
    this.tabItem.select();
  }
}

class TabItem {
  constructor(element) {
    // Assign this.element to the passed in element
    this.element = element;
    //console.log(this.element);
  }

  select() {
    // Select all ".tabs-item" elements from the DOM
    const items = document.querySelectorAll(`.tabs-item`);

    // Remove the class "tabs-item-selected" from each element
    Array.from(items).forEach(function(element) {
      element.classList.remove("tabs-item-selected");
    });
    // Add a class named "tabs-item-selected" to this element
    this.element.classList.add("tabs-item-selected");
  }
}

/* START HERE: 
  - Select all classes named ".tabs-link" and assign that value to the links variable
  - With your selection in place, now chain a .forEach() method onto the links variable to iterate over the DOM NodeList
  - In your .forEach() method's callback function, return a new instance of TabLink and pass in each link as a parameter
  */

const links = document.querySelectorAll(".tabs-link");
links.forEach(function(link) {
  return new TabLink(link);
});

//forEach feature box div
let features = document.querySelectorAll(".feature-box div");
features.forEach(function(div) {
  div.style.color = "#c4c4c4";
});

let freeBoxItems = document.querySelectorAll(".free-box div");

for (let i = 0; i < freeBoxItems.length; i++) {
  if (freeBoxItems[i].textContent === "FREE") {
    freeBoxItems[i].style.color = "#5DD39E";
  }
}

for (let i = 0; i < freeBoxItems.length; i++) {
  if (freeBoxItems[i].textContent === "Included") {
    freeBoxItems[i].style.color = "#00A8E8";
  }
}

for (let i = 0; i < freeBoxItems.length; i++) {
  if (freeBoxItems[i].textContent === "N/A") {
    freeBoxItems[i].style.color = "#4f4f4f";
  }
}

let paidBoxItems = document.querySelectorAll(".paid-box div");

for (let i = 0; i < paidBoxItems.length; i++) {
  if (paidBoxItems[i].textContent === "Included") {
    paidBoxItems[i].style.color = "#00A8E8";
  }
}
