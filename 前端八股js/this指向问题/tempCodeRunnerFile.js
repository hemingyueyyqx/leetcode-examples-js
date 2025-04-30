var name = "window";
var person = {
  name: "person",
  sayName: function () {
    console.log(this.name);
  }
};
sayName();