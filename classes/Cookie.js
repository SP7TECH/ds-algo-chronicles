class Cookie {
  constructor(color) {
    this.color = color;
  }

  //   Getter
  getColor() {
    return this.color;
  }

  //   Setter
  setColor(color) {
    this.color = color;
  }
}

let cookieOne = new Cookie("green");
console.log(cookieOne.getColor());

let cookieTwo = new Cookie("blue");
console.log(cookieTwo.getColor());

cookieTwo.setColor("yellow");
console.log(cookieTwo.getColor());
