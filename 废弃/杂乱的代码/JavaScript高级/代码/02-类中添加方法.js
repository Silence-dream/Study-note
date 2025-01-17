// 1. 创建类 class  创建一个 明星类
// class Star {
//   // 类的共有属性放到 constructor 里面
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
//   sing(song) {
//     console.log(this.name + "唱" + song);
//   }
// }

// // 2. 利用类创建对象 new
// var ldh = new Star("刘德华", 18);
// var zxy = new Star("张学友", 18);
// console.log(ldh);
// console.log(zxy);
// // (1) 我们类里面所有的函数不需要写function
// //(2) 多个函数方法之间不需要添加逗号分隔
// ldh.sing("冰雨");
// zxy.sing("李香兰");

// class Star {
//   // 类的共有属性放到 constructor 里面
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
//   sing(song) {
//     console.log(this.name + "唱" + song);
//   }
// }

// var ldh = new Star("刘德华", 18);
// console.log(ldh);
// ldh.sing("冰雨");

class Star {
  // 类的共有属性放到 constructor 里面
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  sing(song) {
    console.log(this.name + "唱" + song);
  }
}

var ldh = new Star("刘德华", 18);
console.log(ldh);
ldh.sing("冰雨");
