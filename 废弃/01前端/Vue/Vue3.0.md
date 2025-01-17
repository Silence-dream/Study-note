## Node（后端）中的 MVC 与 前端中的 MVVM 之间的区别（了解内容）

 + MVC 主要是后端的分层开发思想；把 一个完整的后端项目，分成了三个部分：
    + Model：（数据层）主要负责 数据库的操作；
    + View：（视图层）所有前端页面，统称为 View 层
    + Controller：（业务逻辑层）主要处理对应的业务逻辑；（对于后台来说，这是开发的重点）
 + MVVM是**前端页面的分层开发思想**，主要关注于 **视图层** 分离，也就是说：MVVM把前端的视图层，分为了 三部分 Model, View,  ViewModel
    + Model 是 页面中，需要用到的数据
    + View 是页面中的HTML结构；
    + ViewModel 是 一个 中间的调度者,提供了双向数据绑定的概念；
 + 为什么有了MVC还要有MVVM
    + 因为 MVC是后端的开发思想，并没有明确定义前端的页面该如何开发；
    + MVVM 是前端的页面的开发思想，把每个页面，分成了三个部分，同时 VM 作为 MVVM 的核心，提供了双向数据绑定的概念，前端程序员，不需要手动渲染页面了，而且，页面数据发送变化，也不需要程序员手动把 数据的变化同步到Model中；这所有的操作，都是 VM 自动完成的！
    + 有了 MVVM 的思想以后，前端只关心 页面交互逻辑，不关心页面如何渲染；

![MVVM](images/MVVM.png)![MVC和MVVM](images/MVC和MVVM.png)

## Vue.js 基本代码 和 MVVM 之间的对应关系

1. 注意：Vue中，不推荐程序员手动操作DOM元素；所以，在Vue项目中，没有极其变态的需求，一般不要引入 Jquery；
2. Vue代码解析执行的步骤：
    1. 当 VM 实例对象，被 创建完成之后  把模板和数据进行绑定 存储到内存中；
    2. 当 VM 调用mount()方法的时候 ，看到mount(元素)把内存中已经渲染好的html结构插入到元素中去
3. 注意：每当 vm 实例对象，监听到 data 中数据发生了变化，就会立即 重新解析 重新指向model内，所有的代码；



## 什么是Vue中的指令

定义： Vue 中，通过一些特殊的语法，扩展了 HTML 的能力；

+ 将来 创建 Vue 实例的时候，Vue 会把 这些指令 都进行解析，从而，根据不同的指令，执行不同的操作、渲染不同的结果；

### 8.1 Vue指令之 `插值表达式 {{ }}`

1. 基本使用演示
    在指定的位置动态插入内容，例如：

    ```html
    <p>{{msg}}</p>
    ```

2. 在插值表达式中 使用简单的语句

3. 注意：插值表达式只能用在元素的内容区域；不能用在元素的属性节点中；

### 8.2 Vue指令之 `v-cloak`

1. 解决的问题
    + 插值表达式有闪烁的问题（`v-cloak` 指令来解决闪烁问题）
2. 应用场景
    + 当 网络比较卡的时候，我们可以为 最外层的 元素，添加 `v-cloak` ，防止用户看到 插值表达式

### 8.3 Vue指令之 `v-text`

1. 基本使用
    在 元素的属性节点上，添加`v-text`指令，例如：

    ```html
    <p v-text="msg"></p>
    ```

2. 在`v-text`中 使用简单的语句

3. `v-text` 与 `{{}}` 的区别

    + 是否覆盖内容
    + 指令闪烁问题

4. 应用场景

    + 向指定元素的内容区域中，渲染指定的文本；

### 8.4 Vue指令之 `v-html`

1. 基本使用
    在 元素的属性节点上，添加`v-html`指令，例如：

    ```html
    <div v-html="msg"></div>
    ```

2. 应用场景
    当 服务器返回的数据中，包含的HTML的标签，此时，这些标签只能使用 `v-html` 来渲染；

### 8.5 Vue指令之 `v-bind:` 属性绑定

1. 基本使用

    + `v-bind:` 是为 html 属性节点动态绑定数据的，例如：

        ```html
        <button v-bind:title="titleStr">按钮</button>
        ```

2. 应用场景

    + 如果元素的属性值，需要动态地进行绑定，则需要使用`v-bind:` 指令

3. 简写形式

    + `v-bind:` 指令可以简写成 `:`，例如，可以简写成如下格式：

        ```html
        <button :title="titleStr">按钮</button>
        ```

### 8.6 Vue指令之 `v-on:` 事件绑定

1. 基本使用：
    `v-on:` 的作用，是为 HTML 元素，绑定 事件处理函数，例如：

     ```html
     <input type="button" value="按钮" v-on:click="事件处理函数名" />
     ```

2. 绑定事件处理函数并传参：

    ```html
    <input type="button" value="按钮" v-on:click="show(123)" />
    ```

3. 简写形式：
    `v-on:` 指令可以简写成 `@`，例如，可以简写成如下格式：

    ```html
    <input type="button" value="按钮" @click="事件处理函数名" />
    ```

### 8.7 【案例】跑马灯效果

### 8.8 Vue指令之 `v-model` 实现 双向数据绑定

1. 基本使用：

  + 可以把页面上数据的变化，自动同步更新到 `VM` 实例的 `data` 中。例如：

    ```html
    <input type="text" v-model="msg"/>
    ```

2.  和 `v-bind:`的区别：
    + `v-bind:` 只能实现单向的数据同步 `data ---> 页面`；
    + `v-model` 可以实现双向的数据同步 `data <--> 页面`；
3.  注意： 
    + `v-model` 只能 和 **表单元素** 配合使用，例如 `input、select、textarea` 等；
    + `v-model` 是 Vue 中 **唯一支持** 双向数据绑定的指令；
4.  应用场景：
    + 【案例】自动计算文本框中，字符串的长度
    + 【案例】简易加法计算器



### 8.9 在Vue中使用class样式

1. 类名数组：

    + 通过 `v-bind:` 为元素的 `class` 绑定具体的类名：

     ```html
     <p :class="['thin', 'red', 'big']">彬哥最帅</p>
     ```

2. 类名数组中使用**三元表达式**，按需为元素添加某些类名

    ```html
    <p :class="['thin', flag ? 'red' : '']">彬哥最帅a a a</p>
    ```

3. 应用场景

    + 【案例】网页开关灯

## Vue常用特性

### 表单基本操作

- 获取单选框中的值

    - 通过v-model

    ```html
     	<!-- 
    		1、 两个单选框需要同时通过v-model 双向绑定 一个值 
            2、 每一个单选框必须要有value属性  且value 值不能一样 
    		3、 当某一个单选框选中的时候 v-model  会将当前的 value值 改变 data 中的 数据
    
    		gender 的值就是选中的值，我们只需要实时监控他的值就可以了
    	-->
       <input type="radio" id="male" value="1" v-model='gender'>
       <label for="male">男</label>
    
       <input type="radio" id="female" value="2" v-model='gender'>
       <label for="female">女</label>
    
    <script>
        new Vue({
             data: {
                 // 默认会让当前的 value 值为 2 的单选框选中
                    gender: 2,  
                },
        })
    
    </script>
    ```

- 获取复选框中的值

    - 通过v-model
    - 和获取单选框中的值一样 
    - 复选框 `checkbox` 这种的组合时   data 中的 hobby 我们要定义成数组 否则无法实现多选

    ```html
    	<!-- 
    		1、 复选框需要同时通过v-model 双向绑定 一个值 
            2、 每一个复选框必须要有value属性  且value 值不能一样 
    		3、 当某一个单选框选中的时候 v-model  会将当前的 value值 改变 data 中的 数据
    
    		hobby 的值就是选中的值，我们只需要实时监控他的值就可以了
    	-->
    
    <div>
       <span>爱好：</span>
       <input type="checkbox" id="ball" value="1" v-model='hobby'>
       <label for="ball">篮球</label>
       <input type="checkbox" id="sing" value="2" v-model='hobby'>
       <label for="sing">唱歌</label>
       <input type="checkbox" id="code" value="3" v-model='hobby'>
       <label for="code">写代码</label>
     </div>
    <script>
        new Vue({
             data: {
                    // 默认会让当前的 value 值为 2 和 3 的复选框选中
                    hobby: ['2', '3'],
                },
        })
    </script>
    ```

- 获取下拉框和文本框中的值

    - 通过v-model

    ```html
       <div>
          <span>职业：</span>
           <!--
    			1、 需要给select  通过v-model 双向绑定 一个值 
                2、 每一个option  必须要有value属性  且value 值不能一样 
    		    3、 当某一个option选中的时候 v-model  会将当前的 value值 改变 data 中的 数据
    		     occupation 的值就是选中的值，我们只需要实时监控他的值就可以了
    		-->
           <!-- multiple  多选 -->
          <select v-model='occupation' multiple>
              <option value="0">请选择职业...</option>
              <option value="1">教师</option>
              <option value="2">软件工程师</option>
              <option value="3">律师</option>
          </select>
             <!-- textarea 是 一个双标签   不需要绑定value 属性的  -->
            <textarea v-model='desc'></textarea>
      </div>
    <script>
        new Vue({
             data: {
                    // 默认会让当前的 value 值为 2 和 3 的下拉框选中
                     occupation: ['2', '3'],
                 	 desc: 'nihao'
                },
        })
    </script>
    ```

### 表单修饰符

- .number  转换为数值

    - 注意点：	
    - 当开始输入非数字的字符串时，因为Vue无法将字符串转换成数值
    - 所以属性值将实时更新成相同的字符串。即使后面输入数字，也将被视作字符串。

- .trim  自动过滤用户输入的首尾空白字符

    - 只能去掉首尾的 不能去除中间的空格

- .lazy   将input事件切换成change事件

    - .lazy 修饰符延迟了同步更新属性值的时机。即将原本绑定在 input 事件的同步逻辑转变为绑定在 change 事件上

- 在失去焦点 或者 按下回车键时才更新

    ```html
    <!-- 自动将用户的输入值转为数值类型 -->
    <input v-model.number="age" type="number">
    
    <!--自动过滤用户输入的首尾空白字符   -->
    <input v-model.trim="msg">
    
    <!-- 在“change”时而非“input”时更新 -->
    <input v-model.lazy="msg" >
    ```

###  自定义指令

- 内置指令不能满足我们特殊的需求
- Vue允许我们自定义指令

#### Vue.directive  注册全局指令

```html
<!-- 
  使用自定义的指令，只需在对用的元素中，加上'v-'的前缀形成类似于内部指令'v-if'，'v-text'的形式。 
-->
<input type="text" v-focus>
<script>
// 注意点： 
//   1、 在自定义指令中  如果以驼峰命名的方式定义 如  Vue.directive('focusA',function(){}) 
//   2、 在HTML中使用的时候 只能通过 v-focus-a 来使用 
    
// 注册一个全局自定义指令 v-focus
Vue.directive('focus', {
  	// 当绑定元素插入到 DOM 中。 其中 el为dom元素
  	inserted: function (el) {
    		// 聚焦元素
    		el.focus();
 	}
});
new Vue({
　　el:'#app'
});
</script>
```

#### Vue.directive  注册全局指令 带参数

```html
  <input type="text" v-color='msg'>
 <script type="text/javascript">
    /*
      自定义指令-带参数
      bind - 只调用一次，在指令第一次绑定到元素上时候调用

    */
    Vue.directive('color', {
      // bind声明周期, 只调用一次，指令第一次绑定到元素时调用。在这里可以进行一次性的初始化设置
      // el 为当前自定义指令的DOM元素  
      // binding 为自定义的函数形参   通过自定义属性传递过来的值 存在 binding.value 里面
      bind: function(el, binding){
        // 根据指令的参数设置背景色
        // console.log(binding.value.color)
        el.style.backgroundColor = binding.value.color;
      }
    });
    var vm = new Vue({
      el: '#app',
      data: {
        msg: {
          color: 'blue'
        }
      }
    });
  </script>
```

#### 自定义指令局部指令

- 局部指令，需要定义在  directives 的选项   用法和全局用法一样 
- 局部指令只能在当前组件里面使用
- 当全局指令和局部指令同名时以局部指令为准

```html
<input type="text" v-color='msg'>
 <input type="text" v-focus>
 <script type="text/javascript">
    /*
      自定义指令-局部指令
    */
    var vm = new Vue({
      el: '#app',
      data: {
        msg: {
          color: 'red'
        }
      },
   	  //局部指令，需要定义在  directives 的选项
      directives: {
        color: {
          bind: function(el, binding){
            el.style.backgroundColor = binding.value.color;
          }
        },
        focus: {
          inserted: function(el) {
            el.focus();
          }
        }
      }
    });
  </script>
```

###  计算属性   computed

- 模板中放入太多的逻辑会让模板过重且难以维护  使用计算属性可以让模板更加的简洁
- **计算属性是基于它们的响应式依赖进行缓存的**
- computed比较适合对多个变量或者对象进行处理后返回一个结果值，也就是数多个变量中的某一个值发生了变化则我们监控的这个值也就会发生变化

```html
<div id="computed-basics">
  <p>Has published books:</p>
  <span>{{ publishedBooksMessage }}</span>
</div>

<script>
    Vue.createApp({
  data() {
    return {
      author: {
        name: 'John Doe',
        books: [
          'Vue 2 - Advanced Guide',
          'Vue 3 - Basic Guide',
          'Vue 4 - The Mystery'
        ]
      }
    }
  },
  computed: {
    // 计算属性的 getter
    publishedBooksMessage() {
      // `this` points to the vm instance
      return this.author.books.length > 0 ? 'Yes' : 'No'
    }
  }
}).mount('#computed-basics')
</script>
```

###  侦听器   watch

- 使用watch来响应数据的变化
- 一般用于异步或者开销较大的操作
- watch 中的属性 一定是data 中 已经存在的数据 
- **当需要监听一个对象的改变时，普通的watch方法无法监听到对象内部属性的改变，只有data中的数据才能够监听到变化，此时就需要deep属性对对象进行深度监听**

```html
<!DOCTYPE html>
<html lang="zh-cn">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script src="lib/vue3.0.global.js"></script>
</head>

<body>
    <div id="app">
        <div>
            <span>名：</span>
            <span>
                <input type="text" v-model='firstName'>
            </span>
        </div>
        <div>
            <span>姓：</span>
            <span>
                <input type="text" v-model='lastName'>
            </span>
        </div>
        <div>{{fullName}}</div>
    </div>

    <script type="text/javascript">
        let vm = Vue.createApp({
            data() {
                return {
                    firstName: 'Jim',
                    lastName: 'Green',
                    // fullName: 'Jim Green'
                }
            },
            //watch  属性 定义 和 data 已经 methods 平级 
            watch: {
                //   注意：  这里firstName  对应着data 中的 firstName 
                //   当 firstName 值 改变的时候  会自动触发 watch
                firstName: function (val) {
                    this.fullName = val + ' ' + this.lastName;
                    // console.log(1);
                },
                //   注意：  这里 lastName 对应着data 中的 lastName 
                lastName: function (val) {
                    this.fullName = this.firstName + ' ' + val;
                }
            }
        })
        vm.mount("#app")
    </script>
</body>

</html>
```



###  过滤器

- Vue.js允许自定义过滤器，可被用于一些常见的文本格式化。
- 过滤器可以用在两个地方：双花括号插值和v-bind表达式。
- 过滤器应该被添加在JavaScript表达式的尾部，由“管道”符号指示
- 支持级联操作
- 过滤器不改变真正的`data`，而只是改变渲染的结果，并返回过滤后的版本
- 全局注册时是filter，没有s的。而局部过滤器是filters，是有s的

```html
  <div id="app">
    <input type="text" v-model='msg'>
      <!-- upper 被定义为接收单个参数的过滤器函数，表达式  msg  的值将作为参数传入到函数中 -->
    <div>{{msg | upper}}</div>
    <!--  
      支持级联操作
      upper  被定义为接收单个参数的过滤器函数，表达式msg 的值将作为参数传入到函数中。
	  然后继续调用同样被定义为接收单个参数的过滤器 lower ，将upper 的结果传递到lower中
 	-->
    <div>{{msg | upper | lower}}</div>
    <div :abc='msg | upper'>测试数据</div>
  </div>

<script type="text/javascript">
   //  lower  为全局过滤器     
   Vue.filter('lower', function(val) {
      return val.charAt(0).toLowerCase() + val.slice(1);
    });
    var vm = new Vue({
      el: '#app',
      data: {
        msg: ''
      },
       //filters  属性 定义 和 data 已经 methods 平级 
       //  定义filters 中的过滤器为局部过滤器 
      filters: {
        //   upper  自定义的过滤器名字 
        //    upper 被定义为接收单个参数的过滤器函数，表达式  msg  的值将作为参数传入到函数中
        upper: function(val) {
         //  过滤器中一定要有返回值 这样外界使用过滤器的时候才能拿到结果
          return val.charAt(0).toUpperCase() + val.slice(1);
        }
      }
    });
  </script>
```

####  过滤器中传递参数

```html
    <div id="box">
        <!--
			filterA 被定义为接收三个参数的过滤器函数。
  			其中 message 的值作为第一个参数，
			普通字符串 'arg1' 作为第二个参数，表达式 arg2 的值作为第三个参数。
		-->
        {{ message | filterA('arg1', 'arg2') }}
    </div>
    <script>
        // 在过滤器中 第一个参数 对应的是  管道符前面的数据   n  此时对应 message
        // 第2个参数  a 对应 实参  arg1 字符串
        // 第3个参数  b 对应 实参  arg2 字符串
        Vue.filter('filterA',function(n,a,b){
            if(n<10){
                return n+a;
            }else{
                return n+b;
            }
        });
        
        new Vue({
            el:"#box",
            data:{
                message: "哈哈哈"
            }
        })

    </script>
```





### 生命周期

- 事物从出生到死亡的过程
- Vue实例从创建 到销毁的过程 ，这些过程中会伴随着一些函数的自调用。我们称这些函数为钩子函数

####常用的 钩子函数

| beforeCreate  | 在实例初始化之后，数据观测和事件配置之前被调用 此时data 和 methods 以及页面的DOM结构都没有初始化   什么都做不了 |
| ------------- | ------------------------------------------------------------ |
| created       | 在实例创建完成后被立即调用此时data 和 methods已经可以使用  但是页面还没有渲染出来 |
| beforeMount   | 在挂载开始之前被调用   此时页面上还看不到真实数据 只是一个模板页面而已 |
| mounted       | el被新创建的vm.$el替换，并挂载到实例上去之后调用该钩子。  数据已经真实渲染到页面上  在这个钩子函数里面我们可以使用一些第三方的插件 |
| beforeUpdate  | 数据更新时调用，发生在虚拟DOM打补丁之前。   页面上数据还是旧的 |
| updated       | 由于数据更改导致的虚拟DOM重新渲染和打补丁，在这之后会调用该钩子。 页面上数据已经替换成最新的 |
| beforeDestroy | 实例销毁之前调用                                             |
| destroyed     | 实例销毁后调用                                               |

### 数组变异方法

- 在 Vue 中，直接修改对象属性的值无法触发响应式。当你直接修改了对象属性的值，你会发现，只有数据改了，但是页面内容并没有改变
- 变异数组方法即保持数组方法原有功能不变的前提下对其进行功能拓展

| `push()`    | 往数组最后面添加一个元素，成功返回当前数组的长度             |
| ----------- | ------------------------------------------------------------ |
| `pop()`     | 删除数组的最后一个元素，成功返回删除元素的值                 |
| `shift()`   | 删除数组的第一个元素，成功返回删除元素的值                   |
| `unshift()` | 往数组最前面添加一个元素，成功返回当前数组的长度             |
| `splice()`  | 有三个参数，第一个是想要删除的元素的下标（必选），第二个是想要删除的个数（必选），第三个是删除 后想要在原位置替换的值 |
| `sort()`    | sort()  使数组按照字符编码默认从小到大排序,成功返回排序后的数组 |
| `reverse()` | reverse()  将数组倒序，成功返回倒序后的数组                  |

### 替换数组

- 不会改变原始数组，但总是返回一个新数组

| filter | filter() 方法创建一个新的数组，新数组中的元素是通过检查指定数组中符合条件的所有元素。 |
| ------ | ------------------------------------------------------------ |
| concat | concat() 方法用于连接两个或多个数组。该方法不会改变现有的数组 |
| slice  | slice() 方法可从已有的数组中返回选定的元素。该方法并不会修改数组，而是返回一个子数组 |

### 动态数组响应式数据

- Vue.set(a,b,c)    让 触发视图重新更新一遍，数据动态起来
- a是要更改的数据 、   b是数据的第几项、   c是更改后的数据

###  图书列表案例

- 静态列表效果
- 基于数据实现模板效果
- 处理每行的操作按钮

#### 1、 提供的静态数据

- 数据存放在vue 中 data 属性中

```js
 var vm = new Vue({
      el: '#app',
      data: {
        books: [{
          id: 1,
          name: '三国演义',
          date: ''
        },{
          id: 2,
          name: '水浒传',
          date: ''
        },{
          id: 3,
          name: '红楼梦',
          date: ''
        },{
          id: 4,
          name: '西游记',
          date: ''
        }]
      }
    }); var vm = new Vue({
      el: '#app',
      data: {
        books: [{
          id: 1,
          name: '三国演义',
          date: ''
        },{
          id: 2,
          name: '水浒传',
          date: ''
        },{
          id: 3,
          name: '红楼梦',
          date: ''
        },{
          id: 4,
          name: '西游记',
          date: ''
        }]
      }
    });
```

#### 2、 把提供好的数据渲染到页面上

- 利用 v-for循环 遍历 books 将每一项数据渲染到对应的数据中

```html
 <tbody>
    <tr :key='item.id' v-for='item in books'>
       <!-- 对应的id 渲染到页面上 -->
       <td>{{item.id}}</td>
        <!-- 对应的name 渲染到页面上 -->
       <td>{{item.name}}</td>
       <td>{{item.date}}</td>
       <td>
         <!-- 阻止 a 标签的默认跳转 -->
         <a href="" @click.prevent>修改</a>
         <span>|</span>
       	  <a href="" @click.prevent>删除</a>
       </td>
     </tr>
</tbody>
```

#### 3、 添加图书

- 通过双向绑定获取到输入框中的输入内容 
- 给按钮添加点击事件 
- 把输入框中的数据存储到 data 中的 books  里面

```html
<div>
  <h1>图书管理</h1>
  <div class="book">
       <div>
         <label for="id">
           编号：
         </label>
          <!-- 3.1、通过双向绑定获取到输入框中的输入的 id  -->
         <input type="text" id="id" v-model='id'>
         <label for="name">
           名称：
         </label>
           <!-- 3.2、通过双向绑定获取到输入框中的输入的 name  -->
         <input type="text" id="name" v-model='name'>
            <!-- 3.3、给按钮添加点击事件  -->
         <button @click='handle'>提交</button>
       </div>
  </div>
</div>
  <script type="text/javascript">
    /*
      图书管理-添加图书
    */
    var vm = new Vue({
      el: '#app',
      data: {
        id: '',
        name: '',
        books: [{
          id: 1,
          name: '三国演义',
          date: ''
        },{
          id: 2,
          name: '水浒传',
          date: ''
        },{
          id: 3,
          name: '红楼梦',
          date: ''
        },{
          id: 4,
          name: '西游记',
          date: ''
        }]
      },
      methods: {
        handle: function(){
          // 3.4 定义一个新的对象book 存储 获取到输入框中 书 的id和名字 
          var book = {};
          book.id = this.id;
          book.name = this.name;
          book.date = '';
         // 3.5 把book  通过数组的变异方法 push 放到    books 里面
          this.books.push(book);
          //3.6 清空输入框
          this.id = '';
          this.name = '';
        }
      }
    });
  </script>
```

#### 4 修改图书-上 

- 点击修改按钮的时候 获取到要修改的书籍名单
    - 4.1  给修改按钮添加点击事件，  需要把当前的图书的id 传递过去 这样才知道需要修改的是哪一本书籍
- 把需要修改的书籍名单填充到表单里面
    - 4.2  根据传递过来的id 查出books 中 对应书籍的详细信息
    - 4.3 把获取到的信息填充到表单

```html
 <div id="app">
    <div class="grid">
      <div>
        <h1>图书管理</h1>
        <div class="book">
          <div>
            <label for="id">
              编号：
            </label>
            <input type="text" id="id" v-model='id' :disabled="flag">
            <label for="name">
              名称：
            </label>
            <input type="text" id="name" v-model='name'>
            <button @click='handle'>提交</button>
          </div>
        </div>
      </div>
      <table>
        <thead>
          <tr>
            <th>编号</th>
            <th>名称</th>
            <th>时间</th>
            <th>操作</th>
          </tr>
        </thead>
        <tbody>
          <tr :key='item.id' v-for='item in books'>
            <td>{{item.id}}</td>
            <td>{{item.name}}</td>
            <td>{{item.date}}</td>
            <td>
              <!--- 
				4.1  给修改按钮添加点击事件，  需要把当前的图书的id 传递过去 
				这样才知道需要修改的是哪一本书籍
  				--->  
              <a href="" @click.prevent='toEdit(item.id)'>修改</a>
              <span>|</span>
              <a href="" @click.prevent>删除</a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
 <script type="text/javascript">
    /*
      图书管理-添加图书
    */
    var vm = new Vue({
      el: '#app',
      data: {
        flag: false,
        id: '',
        name: '',
        books: [{
          id: 1,
          name: '三国演义',
          date: ''
        },{
          id: 2,
          name: '水浒传',
          date: ''
        },{
          id: 3,
          name: '红楼梦',
          date: ''
        },{
          id: 4,
          name: '西游记',
          date: ''
        }]
      },
      methods: {
        handle: function(){
          // 3.4 定义一个新的对象book 存储 获取到输入框中 书 的id和名字 
          var book = {};
          book.id = this.id;
          book.name = this.name;
          book.date = '';
         // 3.5 把book  通过数组的变异方法 push 放到    books 里面
          this.books.push(book);
          //3.6 清空输入框
          this.id = '';
          this.name = '';
        },
        toEdit: function(id){
          console.log(id)
          //4.2  根据传递过来的id 查出books 中 对应书籍的详细信息
          var book = this.books.filter(function(item){
            return item.id == id;
          });
          console.log(book)
          //4.3 把获取到的信息填充到表单
          // this.id   和  this.name 通过双向绑定 绑定到了表单中  一旦数据改变视图自动更新
          this.id = book[0].id;
          this.name = book[0].name;
        }
      }
    });
  </script>
```

#### 5  修改图书-下

- 5.1  定义一个标识符， 主要是控制 编辑状态下当前编辑书籍的id 不能被修改 即 处于编辑状态下 当前控制书籍编号的输入框禁用  
- 5.2  通过属性绑定给书籍编号的 绑定 disabled 的属性  flag 为 true 即为禁用
- 5.3  flag 默认值为false   处于编辑状态 要把 flag 改为true 即当前表单为禁用 
- 5.4  复用添加方法   用户点击提交的时候依然执行 handle 中的逻辑如果 flag为true 即 表单处于不可输入状态 此时执行的用户编辑数据数据

```html
<div id="app">
    <div class="grid">
      <div>
        <h1>图书管理</h1>
        <div class="book">
          <div>
            <label for="id">
              编号：
            </label>
              <!-- 5.2 通过属性绑定 绑定 disabled 的属性  flag 为 true 即为禁用      -->
            <input type="text" id="id" v-model='id' :disabled="flag">
            <label for="name">
              名称：
            </label>
            <input type="text" id="name" v-model='name'>
            <button @click='handle'>提交</button>
          </div>
        </div>
      </div>
      <table>
        <thead>
          <tr>
            <th>编号</th>
            <th>名称</th>
            <th>时间</th>
            <th>操作</th>
          </tr>
        </thead>
        <tbody>
          <tr :key='item.id' v-for='item in books'>
            <td>{{item.id}}</td>
            <td>{{item.name}}</td>
            <td>{{item.date}}</td>
            <td>
              <a href="" @click.prevent='toEdit(item.id)'>修改</a>
              <span>|</span>
              <a href="" @click.prevent>删除</a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>   
<script type="text/javascript">
        /*图书管理-添加图书*/
        var vm = new Vue({
            el: '#app',
            data: {
                // 5.1  定义一个标识符， 主要是控制 编辑状态下当前编辑书籍的id 不能被修改 
                // 即 处于编辑状态下 当前控制书籍编号的输入框禁用 
                flag: false,
                id: '',
                name: '',
              
            },
            methods: {
                handle: function() {
                   /*
                     5.4  复用添加方法   用户点击提交的时候依然执行 handle 中的逻辑
                 		 如果 flag为true 即 表单处于不可输入状态 此时执行的用户编辑数据数据	
                   */ 
                    if (this.flag) {
                        // 编辑图书
                        // 5.5  根据当前的ID去更新数组中对应的数据  
                        this.books.some((item) => {
                            if (item.id == this.id) {
                                // 箭头函数中 this 指向父级作用域的this 
                                item.name = this.name;
                                // 完成更新操作之后，需要终止循环
                                return true;
                            }
                        });
                        // 5.6 编辑完数据后表单要处以可以输入的状态
                        this.flag = false;
                    //  5.7  如果 flag为false  表单处于输入状态 此时执行的用户添加数据    
                    } else { 
                        var book = {};
                        book.id = this.id;
                        book.name = this.name;
                        book.date = '';
                        this.books.push(book);
                        // 清空表单
                        this.id = '';
                        this.name = '';
                    }
                    // 清空表单
                    this.id = '';
                    this.name = '';
                },
                toEdit: function(id) {
                     /*
                     5.3  flag 默认值为false   处于编辑状态 要把 flag 改为true 即当前表单为禁					  用 
                     */ 
                    this.flag = true;
                    console.log(id)
                    var book = this.books.filter(function(item) {
                        return item.id == id;
                    });
                    console.log(book)
                    this.id = book[0].id;
                    this.name = book[0].name;
                }
            }
        });
    </script>
```

#### 6 删除图书

- 6.1 给删除按钮添加事件 把当前需要删除的书籍id 传递过来
- 6.2 根据id从数组中查找元素的索引
- 6.3 根据索引删除数组元素

```html
  <tbody>
          <tr :key='item.id' v-for='item in books'>
            <td>{{item.id}}</td>
            <td>{{item.name}}</td>
            <td>{{item.date}}</td>
            <td>
              <a href="" @click.prevent='toEdit(item.id)'>修改</a>
              <span>|</span>
               <!--  6.1 给删除按钮添加事件 把当前需要删除的书籍id 传递过来  --> 
              <a href="" @click.prevent='deleteBook(item.id)'>删除</a>
            </td>
          </tr>
</tbody>
  <script type="text/javascript">
    /*
      图书管理-添加图书
    */
    var vm = new Vue({
      methods: {
        deleteBook: function(id){
          // 删除图书
          #// 6.2 根据id从数组中查找元素的索引
          // var index = this.books.findIndex(function(item){
          //   return item.id == id;
          // });
          #// 6.3 根据索引删除数组元素
          // this.books.splice(index, 1);
          // -------------------------
         #// 方法二：通过filter方法进行删除
		
          # 6.4  根据filter 方法 过滤出来id 不是要删除书籍的id 
          # 因为 filter 是替换数组不会修改原始数据 所以需要 把 不是要删除书籍的id  赋值给 books 
          this.books = this.books.filter(function(item){
            return item.id != id;
          });
        }
      }
    });
  </script>
```



### 常用特性应用场景

#### 1 过滤器

- Vue.filter  定义一个全局过滤器

```html
 <tr :key='item.id' v-for='item in books'>
            <td>{{item.id}}</td>
            <td>{{item.name}}</td>
     		<!-- 1.3  调用过滤器 -->
            <td>{{item.date | format('yyyy-MM-dd hh:mm:ss')}}</td>
            <td>
              <a href="" @click.prevent='toEdit(item.id)'>修改</a>
              <span>|</span>
              <a href="" @click.prevent='deleteBook(item.id)'>删除</a>
            </td>
</tr>

<script>
    	#1.1  Vue.filter  定义一个全局过滤器
	    Vue.filter('format', function(value, arg) {
              function dateFormat(date, format) {
                if (typeof date === "string") {
                  var mts = date.match(/(\/Date\((\d+)\)\/)/);
                  if (mts && mts.length >= 3) {
                    date = parseInt(mts[2]);
                  }
                }
                date = new Date(date);
                if (!date || date.toUTCString() == "Invalid Date") {
                  return "";
                }
                var map = {
                  "M": date.getMonth() + 1, //月份 
                  "d": date.getDate(), //日 
                  "h": date.getHours(), //小时 
                  "m": date.getMinutes(), //分 
                  "s": date.getSeconds(), //秒 
                  "q": Math.floor((date.getMonth() + 3) / 3), //季度 
                  "S": date.getMilliseconds() //毫秒 
                };
                format = format.replace(/([yMdhmsqS])+/g, function(all, t) {
                  var v = map[t];
                  if (v !== undefined) {
                    if (all.length > 1) {
                      v = '0' + v;
                      v = v.substr(v.length - 2);
                    }
                    return v;
                  } else if (t === 'y') {
                    return (date.getFullYear() + '').substr(4 - all.length);
                  }
                  return all;
                });
                return format;
              }
              return dateFormat(value, arg);
            })
#1.2  提供的数据 包含一个时间戳   为毫秒数
   [{
          id: 1,
          name: '三国演义',
          date: 2525609975000
        },{
          id: 2,
          name: '水浒传',
          date: 2525609975000
        },{
          id: 3,
          name: '红楼梦',
          date: 2525609975000
        },{
          id: 4,
          name: '西游记',
          date: 2525609975000
        }];
</script>
```

#### 2 自定义指令

- 让表单自动获取焦点
- 通过Vue.directive 自定义指定

```html
<!-- 2.2  通过v-自定义属性名 调用自定义指令 -->
<input type="text" id="id" v-model='id' :disabled="flag" v-focus>

<script>
    # 2.1   通过Vue.directive 自定义指定
	Vue.directive('focus', {
      inserted: function (el) {
        el.focus();
      }
    });

</script>
```

#### 3 计算属性

- 通过计算属性计算图书的总数
    - 图书的总数就是计算数组的长度 

```html
 <div class="total">
        <span>图书总数：</span>
     	<!-- 3.2 在页面上 展示出来 -->
        <span>{{total}}</span>
</div>

  <script type="text/javascript">
    /*
      计算属性与方法的区别:计算属性是基于依赖进行缓存的，而方法不缓存
    */
    var vm = new Vue({
      data: {
        flag: false,
        submitFlag: false,
        id: '',
        name: '',
        books: []
      },
      computed: {
        total: function(){
          // 3.1  计算图书的总数
          return this.books.length;
        }
      },
    });
  </script>

```



####  生命周期

-   2.0

![lifecycle](images/lifecycle.png)

-   3.0

![vue3.0说明图](images/vue3.0说明图.png)





## 组件

### 组件

- 组件 (Component) 是 Vue.js 最强大的功能之一
- 组件可以扩展 HTML 元素，封装可重用的代码

### 组件注册

#### 全局注册

- vm.component('组件名称', { })     第1个参数是标签名称，第2个参数是一个选项对象
- **全局组件**注册后，任何**vue实例**都可以用

##### 组件基础用

```html
<div id="example">
  <!-- 2、 组件使用 组件名称 是以HTML标签的形式使用  -->  
  <my-component></my-component>
</div>
<script>
    //   注册组件
    // 1、 my-component 就是组件中自定义的标签名
	Vue.component('my-component', {
      template: '<div>A custom component!</div>'
    })

    // 创建根实例
    new Vue({
      el: '#example'
    })

</script>
```

##### 组件注意事项

- 组件参数的data值必须是函数同时这个函数要求返回一个对象 
- 组件模板必须是单个根元素
- 组件模板的内容可以是模板字符串

```html
  <div id="app">
     <!-- 
		4、  组件可以重复使用多次 
	      因为data中返回的是一个对象所以每个组件中的数据是私有的
		  即每个实例可以维护一份被返回对象的独立的拷贝   
	--> 
    <button-counter></button-counter>
    <button-counter></button-counter>
    <button-counter></button-counter>
      <!-- 8、必须使用短横线的方式使用组件 -->
     <hello-world></hello-world>
  </div>

<script type="text/javascript">
	//5  如果使用驼峰式命名组件，那么在使用组件的时候，只能在字符串模板中用驼峰的方式使用组件，
    // 7、但是在普通的标签模板中，必须使用短横线的方式使用组件
     Vue.component('HelloWorld', {
      data: function(){
        return {
          msg: 'HelloWorld'
        }
      },
      template: '<div>{{msg}}</div>'
    });



    Vue.component('button-counter', {
      // 1、组件参数的data值必须是函数 
      // 同时这个函数要求返回一个对象  
      data: function(){
        return {
          count: 0
        }
      },
      //  2、组件模板必须是单个根元素
      //  3、组件模板的内容可以是模板字符串  
      template: `
        <div>
          <button @click="handle">点击了{{count}}次</button>
          <button>测试123</button>
			#  6 在字符串模板中可以使用驼峰的方式使用组件	
		   <HelloWorld></HelloWorld>
        </div>
      `,
      methods: {
        handle: function(){
          this.count += 2;
        }
      }
    })
    var vm = new Vue({
      el: '#app',
      data: {

      }
    });
  </script>
```

#### 局部注册

- 只能在当前注册它的vue实例中使用

```html
  <div id="app">
      <my-component></my-component>
  </div>


<script>
    // 定义组件的模板
    var Child = {
      template: '<div>A custom component!</div>'
    }
    new Vue({
      //局部注册组件  
      components: {
        // <my-component> 将只在父模板可用  一定要在实例上注册了才能在html文件中使用
        'my-component': Child
      }
    })
 </script>
```

### Vue 调试工具

### Vue组件之间传值

#### 父组件向子组件传值

- 父组件发送的形式是以属性的形式绑定值到子组件身上。
- 然后子组件用属性props接收
- 在props中使用驼峰形式，模板中需要使用短横线的形式字符串形式的模板中没有这个限制

```html
  <div id="app">
    <div>{{pmsg}}</div>
     <!--1、menu-item  在 APP中嵌套着 故 menu-item   为  子组件      -->
     <!-- 给子组件传入一个静态的值 -->
    <menu-item title='来自父组件的值'></menu-item>
    <!-- 2、 需要动态的数据的时候 需要属性绑定的形式设置 此时 ptitle  来自父组件data 中的数据 . 
		  传的值可以是数字、对象、数组等等
	-->
    <menu-item :title='ptitle' content='hello'></menu-item>
  </div>

  <script type="text/javascript">
    Vue.component('menu-item', {
      // 3、 子组件用属性props接收父组件传递过来的数据  
      props: ['title', 'content'],
      data: function() {
        return {
          msg: '子组件本身的数据'
        }
      },
      template: '<div>{{msg + "----" + title + "-----" + content}}</div>'
    });
    var vm = new Vue({
      el: '#app',
      data: {
        pmsg: '父组件中内容',
        ptitle: '动态绑定属性'
      }
    });
  </script>
```

#### 子组件向父组件传值

- 子组件用`$emit()`触发事件
- `$emit()`  第一个参数为 自定义的事件名称     第二个参数为需要传递的数据
- 父组件用v-on 监听子组件的事件

```html
 <div id="app">
    <div :style='{fontSize: fontSize + "px"}'>{{pmsg}}</div>
     <!-- 2 父组件用v-on 监听子组件的事件
		这里 enlarge-text  是从 $emit 中的第一个参数对应   handle 为对应的事件处理函数	
	-->	
    <menu-item :parr='parr' @enlarge-text='handle($event)'></menu-item>
  </div>
  <script type="text/javascript" src="js/vue.js"></script>
  <script type="text/javascript">
    /*
      子组件向父组件传值-携带参数
    */

    Vue.component('menu-item', {
      props: ['parr'],
      template: `
        <div>
          <ul>
            <li :key='index' v-for='(item,index) in parr'>{{item}}</li>
          </ul>
			###  1、子组件用$emit()触发事件
			### 第一个参数为 自定义的事件名称   第二个参数为需要传递的数据  
          <button @click='$emit("enlarge-text", 5)'>扩大父组件中字体大小</button>
          <button @click='$emit("enlarge-text", 10)'>扩大父组件中字体大小</button>
        </div>
      `
    });
    var vm = new Vue({
      el: '#app',
      data: {
        pmsg: '父组件中内容',
        parr: ['apple','orange','banana'],
        fontSize: 10
      },
      methods: {
        handle: function(val){
          // 扩大字体大小
          this.fontSize += val;
        }
      }
    });
  </script>

```

#### 兄弟之间的传递

- 兄弟之间传递数据需要借助于事件中心，通过事件中心传递数据   
    - 提供事件中心    var hub = new Vue()
- 传递数据方，通过一个事件触发hub.$emit(方法名，传递的数据)
- 接收数据方，通过mounted(){} 钩子中  触发hub.$on()方法名
- 销毁事件 通过hub.$off()方法名销毁之后无法进行传递数据

```html
 <div id="app">
    <div>父组件</div>
    <div>
      <button @click='handle'>销毁事件</button>
    </div>
    <test-tom></test-tom>
    <test-jerry></test-jerry>
  </div>
  <script type="text/javascript" src="js/vue.js"></script>
  <script type="text/javascript">
    /*
      兄弟组件之间数据传递
    */
    //1、 提供事件中心
    var hub = new Vue();

    Vue.component('test-tom', {
      data: function(){
        return {
          num: 0
        }
      },
      template: `
        <div>
          <div>TOM:{{num}}</div>
          <div>
            <button @click='handle'>点击</button>
          </div>
        </div>
      `,
      methods: {
        handle: function(){
          //2、传递数据方，通过一个事件触发hub.$emit(方法名，传递的数据)   触发兄弟组件的事件
          hub.$emit('jerry-event', 2);
        }
      },
      mounted: function() {
       // 3、接收数据方，通过mounted(){} 钩子中  触发hub.$on(方法名
        hub.$on('tom-event', (val) => {
          this.num += val;
        });
      }
    });
    Vue.component('test-jerry', {
      data: function(){
        return {
          num: 0
        }
      },
      template: `
        <div>
          <div>JERRY:{{num}}</div>
          <div>
            <button @click='handle'>点击</button>
          </div>
        </div>
      `,
      methods: {
        handle: function(){
          //2、传递数据方，通过一个事件触发hub.$emit(方法名，传递的数据)   触发兄弟组件的事件
          hub.$emit('tom-event', 1);
        }
      },
      mounted: function() {
        // 3、接收数据方，通过mounted(){} 钩子中  触发hub.$on()方法名
        hub.$on('jerry-event', (val) => {
          this.num += val;
        });
      }
    });
    var vm = new Vue({
      el: '#app',
      data: {

      },
      methods: {
        handle: function(){
          //4、销毁事件 通过hub.$off()方法名销毁之后无法进行传递数据  
          hub.$off('tom-event');
          hub.$off('jerry-event');
        }
      }
    });
  </script>

```

## vue-cli

### 安装与启动

```powershell
# 1
npm install -g @vue/cli
# OR
yarn global add @vue/cli

# 2
npm install -g @vue/cli @vue/cli-service-global
# or
yarn global add @vue/cli @vue/cli-service-global

# 3 创建项目
vue create 项目名称
```





### 使用sass全局方法 @mixnin

-   先运行 vue add style-resources-loader

配置vue.config.js

```
const path = require("path");
module.exports = {
  pluginOptions: {
    "style-resources-loader": {
      preProcessor: "scss",
      patterns: [path.resolve(__dirname, "./src/mixnin.scss")]
    }
  }
};

```



### 样式穿透

https://github.com/vuejs/rfcs/blob/master/active-rfcs/0023-scoped-styles-changes.md



## vue-router

### 安装

```powershell
#下载 vue-router包
npm install vue-router@next

# 在src文件夹里面新建routes文件夹
├─.browserslistrc
├─.eslintrc.js
├─.gitignore
├─babel.config.js
├─package.json
├─README.md
├─yarn.lock
├─src #在这里新建
|  ├─App.vue
|  ├─main.js
|  ├─routes # 新建我!!!
|  |   └index.js #在这里面写vue-router的配置文件
|  ├─components
|  |     └HelloWorld.vue
|  ├─assets
|  |   └logo.png
├─public
|   ├─favicon.ico
|   └index.html

```

#### 配置文件书写

```js
/*
|  ├─routes # 新建我!!!
|  |   └index.js 我是配置文件哦!!
*/

import { createRouter, createWebHashHistory } from "vue-router";

// 导入组件
import HelloWorld from "../components/HelloWorld";
const routes = [
  {
    name: "home",
    path: "/home",
    component: HelloWorld
  }
];
// 3.创建路由
const router = createRouter({
  history: createWebHashHistory(),
  // 定义好的路由
  routes
});
// 导出 router
export default router;

```

#### main.js文件的书写



```js
/*
├─src #在这里新建
|  ├─App.vue
|  ├─main.js
*/

import { createApp } from "vue";
import App from "./App.vue";
// 引入路由配置
import routes from "./routes";
createApp(App)
  //使用路由
  .use(routes)
  .mount("#app");
```





### 路由重定向 router-redirect

```js
  let routes = [
    // 重定向
     {
      path: "原路由",
      redirect: "要跳转到哪个路由"
    },
    {其他路由规则}
  ]
```

### 嵌套路由 router-nest

```js
  let routes = [
    // 重定向
     {
      path: "父组件路由规则",
      component: "组件名",
      children: [
        // 子路由规则
        {
        path: "父组件路由规则",
        component: "组件名",
        // children: [{}]
        }
      ]
    }
  ]
```

### 路由传参 router-dynamic

#### 直接接收

在路由规则中

```js
   let routes = [
    // 重定向
     {
      path: "父组件路由规则/:占位符名称",
      component: "组件名",
    }
  ]
```

在对应组件中

```vue
<template>
  <div>
    <p>{{$router.params.占位符名称}}</p>
  </div>
</template>

<script>
export default {
};
</script>

<style></style>

```

#### 通过props属性

在路由规则中

```js
   let routes = [
    // 重定向
     {
      path: "父组件路由规则/:占位符名称",
      component: "组件名",
      props: true
    }
  ]
```

在对应组件中

```vue
<template>
  <div>
    <p>{{占位符名称}}</p>
  </div>
</template>

<script>
export default {
  props: ["占位符名称"]
};
</script>

<style></style>

```

#### 通过回调函数

在路由规则中

```js
   let routes = [
    // 重定向
     {
      path: "父组件路由规则/:占位符名称",
      component: "组件名",
      // 通过回调函数的方式传值给组件,对应组件通过props获取传入的参数
      props: router=>({属性名: router.params.占位符名称,属性名:属性值,...})
    }
  ]
```

在对应组件中

```vue
<template>
  <div>
    <p>{{属性名}}</p>
  </div>
</template>

<script>
export default {
  props: ["属性名","属性名",...]
};
</script>

<style></style>

```


### 编程式导航 router-program

```js
//  如果在methods中 在created 在watch这样的方法中 使用this.$router.push() 跳转到另外的路由
//  如果想前进一步(go(1)、forwar()) 后退一步(go(-1)、back())
```

### 命名路由

在路由规则中

```js
   let routes = [
     {
      name: "路由的名字"
      path: "父组件路由规则/:占位符名称",
      component: "组件名",
    }
  ]
```

在对应组件中

```vue
<template>
	<!-- 如果传入了参数记得去router/index.js里面开启props -->
  <router-link :to="{ name: '路由的名字',params:{ 属性名: 属性值}}">超链接</router-link>
</template>

<script>
export default {
};
</script>

<style></style>

```

## vuex

### VueX概述

#### 为什么要学习VueX

父向子传值：父元素v-bind 属性绑定数据，子元素使用props接受父元素传递的数据
子向父传值：父元素v-on事件绑定，子元素使用$emit触发，并通过回调函数把值传递给父元素
兄弟组件之间共享数据：EventBus(mitt)
emitter.on()  接收数据的那个组件
emitter.emit() 发送数据的那个组件

#### VueX简介

![image-20201027154214547](images/image-20201027154214547.png).

Vuex是实现组件全局状态（数据）管理的一种机制，可以方便的实现组件之间的数据共享

使用Vuex管理数据的好处：
A.能够在vuex中集中管理共享的数据，便于开发和后期进行维护
B.能够高效的实现组件之间的数据共享，提高开发效率
C.存储在vuex中的数据是响应式的，当数据发生改变时，页面中的数据也会同步更新

`注意,不是任何数据都适合放在vuex中的，一般情况下，只有组件之间共享的数据，才有必要存储到vuex 中；对于组件中的私有数据，依旧存储在组件自身的data 中即可`

### VueX的基本使用

1.安装

```shell
# If using Vue 3.0 + Vuex 4.0:
npm install vuex@next --save
```

2.配置(store/index.js)

```js
// 引入VueX
import { createStore } from "vuex";

export default createStore({
  // state提供唯一的公共数据源，所有共享的数据都要统一放到Store的state中进行存储
  state(){
      return {
      }
  },
  // mutations用于修改Store中的数据 相当于methods
  mutations: {},
  // actions用于处理异步任务
  actions: {},
  // getters 用于对Store中的数据进行加工处理形成新的数据。 相当于computed计算属性
  getters: {}
});

```

3.挂载(src/main.js)

```js
import { createApp } from "vue";
import App from "./App.vue";
import store from "./store";
createApp(App)
  .use(store)
  .mount("#app");

```

### VueX的核心概念

#### State(类似于Vue中的data选项)

State提供唯一的公共数据源，所有共享的数据都要统一放到Store的State中进行存储

定义语法:

```js
const store = createStore({
  state () {
    return {
      属性名: 属性值
    }
  }
})
```

访问:

```js
// 组件的script中访问(方法1)
this.$store.state.全局数据属性名

// 组件的script中访问(方法2)
// 1.首先在store中定义数据(store/index.js)
import { createStore } from "vuex";

export default createStore({
  state() {
    return {
      count: 0,
      msg: "Welcome to Your Vue2"
    };
  },
  mutations: {},
  actions: {},
  modules: {}
});

// 2.在需要用到这个数据的组件中
<script>
import { mapState } from "vuex";
export default {
  name: "HelloWorld",
  computed: {
    // count() {
    //   return this.$store.state.count;
    // },
    // msg() {
    //   return this.$store.state.msga;
    // },
    ...mapState(["count", "msg"])
  }
};
</script>
```

#### mutation 相当于Vue中methods

Mutation 用于修改Store中的数据。
1.只能通过mutation 变更Store 数据，不可以直接操作Store 中的数据。
2.通过这种方式虽然操作起来稍微繁琐一些，但是可以集中监控所有数据的变化。

##### 方法1(未传参数)

1.store/index.js

```js
// 定义Mutation
import { createStore } from "vuex";

export default createStore({
  state(){
    return {
      aname: "张三"
    }
  },
  mutations: {
    // 1.获取state中的数据
    // 2.传参问题
    changeName(state){
      state.aname = "李四"
    }
  }
});

```

2.在某一个组件文件中

```js
// 触发mutation
<template>
  <div class="hello">
    <h1 @click="changeName">{{ msg }}</h1>
  </div>
</template>

<script>
import {mapState,mapMutations} from "vuex"
export default {
  name: "HelloWorld",
  props: {
    msg: String
  },
  data(){
    return {
      name: "我最喜欢福原爱"
    }
  },
  // created(){
  //   this.handleChange();
  // },
  methods: {
    // 这个方法是用来触发store中的mutations中的changeName方法的
     handleChange(){
       this.$store.commit("changeName");
     },
  },
  computed: {
    ...mapState(['aname'])
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>

```

##### 方法2(传参数)

1.store/index.js

```js
import { createStore } from "vuex";

export default createStore({
  state(){
    return {
      aname: "张三"
    }
  },
  mutations: {
    // 1.获取state中的数据
    // 2.传参问题
    changeOtherName(state,name1){
      state.aname = name1;
    }
  }

});
```

2.在某一个组件文件中

```js
<template>
  <div class="hello">
    <h1 @click="changeName">{{ msg }}</h1>
    <h2 @click="changeOtherName(name)">{{aname}}</h2>
  </div>
</template>

<script>
import {mapState,mapMutations} from "vuex"
export default {
  name: "HelloWorld",
  props: {
    msg: String
  },
  data(){
    return {
      name: "我最喜欢福原爱"
    }
  },
  // created(){
  //   this.handleChange();
  // },
  methods: {
    // 这个方法是用来触发store中的mutations中的changeName方法的
    handelOtherChange(){
       let name = this.name;
       this.$store.commit("changeOtherName",name);
     }
    ...mapMutations(['changeName','changeOtherName'])
  },
  computed: {
    ...mapState(['aname'])
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>

```

##### 方法3

1.store/index.js

```js
import { createStore } from "vuex";

export default createStore({
  state(){
    return {
      aname: "张三"
    }
  },
  mutations: {
    // 1.获取state中的数据
    // 2.传参问题
    changeName(state){
      state.aname = "李四"
    },
    changeOtherName(state,name1){
      state.aname = name1;
    }
  }
});
```

2.在某一个组件文件中

```js
<template>
  <div class="hello">
    <h1 @click="changeName">{{ msg }}</h1>
    <h2 @click="changeOtherName(name)">{{aname}}</h2>
  </div>
</template>

<script>
import {mapState,mapMutations} from "vuex"
export default {
  name: "HelloWorld",
  props: {
    msg: String
  },
  data(){
    return {
      name: "我最喜欢福原爱"
    }
  },
  // created(){
  //   this.handleChange();
  // },
  methods: {
    ...mapMutations(['changeName','changeOtherName'])
  },
  computed: {
    ...mapState(['aname'])
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>


```

#### action 用于异步处理数据

Action 用于处理异步任务。
如果通过异步操作变更数据，必须通过Action，而不能使用Mutation，
但是在Action 中还是要通过触发Mutation 的方式间接变更数据。

##### 方法1

1.store/index.js

```js
import { createStore } from "vuex";

export default createStore({
  // 让计数器 每秒加2
  state() {
    return {
      count: 0
    };
  },
  mutations: {
    add(state, val) {
      state.count += val;
    }
  },
  actions: {
    // context就是上下文
    asyncAdd(context, val) {
      console.log(context);
      setInterval(function() {
        // 用commit触发同步方法
        context.commit("add", val);
      }, 1000);
    }
  },
  getters: {}
});

```

2.在某一个组件中

```js
methods: {
  handle() {
    // 在调用dispatch 函数，
    // 触发actions 时携带参数
    this.$store.dispatch('addNAsync', 5)
  }
}  
```

##### 方法2

2.在某一个组件中使用

```js
<template>
  <div class="hello">
    <h1 @click="asyncAdd(2)">{{ msg }}</h1>
    <p>{{ count }}</p>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  name: "HelloWorld",
  props: {
    msg: String
  },
  computed: {
    ...mapState(["count"])
  },
  methods: {
    ...mapActions(["asyncAdd"])
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>

```

#### getter 相当于 Vue 中computed

Getter 用于对Store 中的数据进行加工处理形成新的数据。
1.Getter 可以对Store 中已有的数据加工处理之后形成新的数据，类似Vue 的计算属性。
2.Store 中数据发生变化，Getter 的数据也会跟着变化

##### 方法1

1.store/index.js

```js
import { createStore } from "vuex";

export default createStore({
  // 第一步: 声明数据
  // 第二步: 写按钮 让数据变化
  // 第三步: 当数据变化的时候 把数据同步更新到页面上
  state(){
    return {
      count: 0
    }
  },
  mutations: {
    add(state){
      state.count ++;
    }
  },
  actions: {},
  getters: {
    num(state){
      return state.count
    }
  }
});


```

2.在某一个组件中使用

```js
<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <button @click="add">点我让数字自增{{num}}</button>
  </div>
</template>

<script>
import {mapMutations,mapGetters} from "vuex"
export default {
  name: "HelloWorld",
  props: {
    msg: String
  },
  methods: {
    ...mapMutations(['add'])
  },
  computed: {
  	// this.$srote.getters.num
    ...mapGetters(['num'])
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>


```

> https://www.v2ex.com/t/347227
> https://bigdata.bihell.com/language/javascript/vue/vuex.html#揭开-vuex-的神秘面纱
> https://cn.vuejs.org/v2/guide/state-management.html#简单状态管理起步使用











## vue-compositionAPI的使用

-   setup()

-   [介绍 | Vue3中文文档 - vuejs (vue3js.cn)](https://vue3js.cn/docs/zh/guide/composition-api-introduction.html#什么是组合式-api)

### 定义变量 ref、reactive

-   ref定义简单数据类型
-   reactive定义复杂数据类型

```vue
<template>
  <div class="box">
    <h1>这里相当于 optionsAPI里面的data</h1>
    <div>{{ hello }}</div>
    <div>{{ obj }}</div>
  </div>
</template>

<script>
// 注意要引入vue里面的方法才可以使用
import { reactive, ref } from "vue";
export default {
  name: "App",
  // components: {}
  setup() {
    let hello = ref("hello");
    let obj = reactive({
      name: "罗老师",
      age: 18
    });
    // 导出变量
    return {
      hello,
      obj
    };
  }
};
</script>

<style scoped>
.box {
  text-align: center;
  background-color: skyblue;
}
</style>

```

### 方法的使用



```vue
<template>
  <div class="box">
    <h1>这里相当于 optionsAPI里面的 methods</h1>
    <h2>
      您将学习到修改 ref 和 reactive 里面的值和使用
      在compositions里面使用optionsAPI里面的methods
    </h2>
    <div>{{ hello }}</div>
    <div>{{ obj }}</div>
    <button @click="changeName">点击我修改值</button>
  </div>
</template>

<script>
import { reactive, ref } from "vue";
export default {
  name: "App",
  // components: {}
  setup() {
    let hello = ref("hello");
    let obj = reactive({
      name: "罗老师别这样",
      age: 18
    });

    function changeName() {
      hello.value = "不hello";
      obj.name = "罗老师";
    }
    // 导出
    return {
      hello,
      obj,
      changeName
    };
  }
};
</script>

<style scoped>
.box {
  text-align: center;
  background-color: pink;
}
</style>

```

### watch监听值的变化

```js
<template>
  <div class="box">
    <h1>这里相当于 optionsAPI里面的 watch</h1>
    <h2>
      您将学习到在compositions里面使用optionsAPI里面的watch 注意看控制台
    </h2>
    <div>{{ num }}--{{ num2 }}</div>
    <button @click="changeNum">点击我数字变化</button>
  </div>
</template>

<script>
import { ref, watch } from "vue";
export default {
  name: "App",
  // components: {}
  setup() {
    let num = ref(100);
    let num2 = ref(200);

    function changeNum() {
      setInterval(() => {
        num.value++;
        num2.value++;
      }, 500);
    }
    // 监听单一的值;
    watch(
      () => num.value, //监听num
      (count, prevCount) => {
        console.log("num 变化后的值", count, "num 变化前的值", prevCount);
      }
    );
    //监听多个值
    watch(
      [num, num2], //监听num
      ([num, num2], [prevNum, prevNum2]) => {
        console.log("num 变化后的值", num, "num 变化前的值", prevNum);
        console.log("num2 变化后的值", num2, "num2 变化前的值", prevNum2);
      }
    );
    // 导出
    return {
      num,
      num2,
      changeNum
    };
  }
};
</script>

<style scoped>
.box {
  text-align: center;
  background-color: skyblue;
}
</style>

```



### watchEffect

```vue
<template>
  <div class="box">
    <h1>这里相当于 optionsAPI里面的 watch</h1>
    <h2>
      您将学习到在compositions里面使用optionsAPI里面的watch 注意看控制台
    </h2>
    <div>{{ num }}--{{ num2 }}</div>
    <button @click="changeNum">点击我数字变化</button>
  </div>
</template>

<script>
import { ref, watchEffect } from "vue";
export default {
  name: "App",
  // components: {}
  setup() {
    let num = ref(100);
    let num2 = ref(200);

    function changeNum() {
      setInterval(() => {
        num.value++;
        num2.value++;
      }, 500);
    }

    //监听多个值
    watchEffect(() => {
      console.log(num.value);
      console.log(num2.value);
    });

    // 导出
    return {
      num,
      num2,
      changeNum
    };
  }
};
</script>

<style scoped>
.box {
  text-align: center;
  background-color: pink;
}
</style>

```



### computed

```vue
<template>
  <div class="box">
    <h1>这里相当于 optionsAPI 里面的 computed</h1>
    <h2>注意看控制台</h2>
    <div>helloComputed={{ helloComputed }}</div>
    <div>numComputed={{ numComputed }}</div>
  </div>
</template>

<script>
// 注意要引入vue里面的方法才可以使用
import { computed, ref } from "vue";
export default {
  name: "App",
  // components: {}
  setup() {
    let hello = ref("hello");
    let helloComputed = computed(() => {
      return hello.value + "World"; //计算完毕之后变成helloWorld
    });
    let num = ref(21);
    let numComputed = computed({
      get: () => num.value + 11, //直接调用执行这里
      set: val => {
        // 2.执行这里
        console.log("numComputed.value=", val);
      }
    });
    // 1.给 numComputed 赋值
    numComputed.value = 20;
    // 导出变量
    return {
      helloComputed,
      numComputed
    };
  }
};
</script>

<style scoped>
.box {
  text-align: center;
  background-color: skyblue;
}
</style>

```



### 调用vuex

-   App.vue



```vue
<template>
  <div class="box">
    <h2>
      您将学习到修改 如何调用 vuex里面的值和方法
    </h2>
    <div>vuex里面的msg的值是---{{ msg }}</div>
    <div>vuex里面的msg被计算属性之后的值----{{ msgComputed }}</div>
    <button @click="changeMsg">点击修改vuex-msg</button>
  </div>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";
export default {
  name: "vuex",
  // components: {}
  setup() {
    let store = useStore();
    //获取 state() 里面的属性
    let msg = computed(() => store.state.msg);
    //获取 getters()里面的属性
    let msgComputed = computed(() => store.getters.msg);
    function changeMsg() {
      // 调用mutations的方法
      store.commit("changeMsg");
      // 调用actios里面的方法
      store.dispatch("fn");
    }
    return {
      msg,
      changeMsg,
      msgComputed
    };
  }
};
</script>

<style scoped>
.box {
  text-align: center;
  background-color: pink;
}
</style>

```

-   store/index.js



```js
import { createStore } from "vuex";

export default createStore({
  state() {
    return {
      msg: "here is vuex"
    };
  },
  mutations: {
    changeMsg(state) {
      state.msg = "msg被修改了";
    }
  },
  actions: {
    async fn() {
      let a;
      setTimeout(() => {
        a = 90;
      }, 0);
      a = 90;

      console.log(a);
    }
  },
  modules: {},
  getters: {
    msg(state) {
      return state.msg + "计算属性";
    }
  }
});

```



## vue获取元素

https://blog.csdn.net/weixin_43233914/article/details/108776124

https://vue3js.cn/docs/zh/guide/composition-api-template-refs.html#%E6%A8%A1%E6%9D%BF%E5%BC%95%E7%94%A8



## vue3语法糖

[rfcs/0000-script-setup.md at script-setup-2 · vuejs/rfcs (github.com)](https://github.com/vuejs/rfcs/blob/script-setup-2/active-rfcs/0000-script-setup.md#summary)