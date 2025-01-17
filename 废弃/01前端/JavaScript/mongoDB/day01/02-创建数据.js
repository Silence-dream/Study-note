const mongoose = require("mongoose");
mongoose.connect('mongodb://localhost/my_database', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log("数据库连接成功")).catch(() => console.log("数据库连接失败"));

// 创建数据集合规则

let studentSchema = new mongoose.Schema({
  // 字段:数据类型
  name: String,
  age: Number,
  address: String,
  hobbbies: Array
})
const Student = new mongoose.model("Student", studentSchema);

// 给Studen添加数据

let luo = new Student({
  name: "罗志祥",
  age: 41,
  address: "台湾省基隆市",
  hobbbies: ["多人运动创始人", "时间管理大师"]
})

// 保存数据
luo.save();