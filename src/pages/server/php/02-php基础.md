---
title: 02-php基础
icon: markdown
---

# php简要札记

---

1， HTML里面不能直接写php代码

2， php文件里面可以写html标签，但是php代码里面不能写html

3， php里面负责解析字符串，但是最终执行环境在浏览器

4， 如果混编php和html的话，只要是php的代码就必须要通过标记给包裹起来



## 1.0 数组的操作

​	数组分为两种类型

#### 索引数组

​	通过索引来操作数组

​	1， array(添加数组的成员， 成员类型不限)

```php
<?php
  	$arr = array(1, 2, 3, true, "abc");
	// 通过索引取值
	echo $arr[4]; // "abc"
	echo $arr[3]; // 本来应该是true，但是输出为了1

	// php中遍历数组
	// 在php中小数点是拼接字符的意思  这里的length调用错误
	/* for($i = 0; $i < $arr.length; $i++) { */
	// 使用count方法能够计算当前数组的长度
    for($i = 0; $i < count($arr); $i++) {
      	// 打印每一项的值
      	echo $arr[$i]." "; // 使内容之间有些距离
	}

	print_r($arr);
	/*
		Array(
			[0] => 1
			[1] => 2
			[3] => 3
			[4] => 1
			[5] => abc
		)
	*/
?>
```

​	2，中括号的方式，[ ]

​	与上面没有太大的差异

​		

#### 关联数组

​	以键值对的方式描述数据，类似于js中的字面量对象

```php
// 语法： array($key => $value, $key => $value)

<?php
  	$arr = array (
  		"name" => "yiyang",
  		"age" => 20,
  		"gender" => true
	);
	echo $arr["gender"]; // 1

	// 打印数组，使用print_r( )的方法
	print_r($arr);
    /*
		Array(
			[name] => yiyang
			[age] => 20
			[gender] => 1
		)
	*/

	/* 遍历关联数组的方法 */
	/* 
    	foreach(数组对象 as 键 => 值) {
          ...
    	}
    */
	foreach($arr as $key => $value) {
      	echo $key . ":" . $value . "</br>";
	}
	/*	=> 输出
		name:yiyang
		age:20
		gender:1
	*/

	// 简洁语法
	foreach($arr as $value) {
      echo $value . "</br>";
	}
?>
```

​	

​	** 所有的数组本质上都是关联数组, foreach方法也可以操作索引数组;

​	** 如果通过空的中括号赋值，会自动追加和排序，还会变成混合数组



#### 操作数组的方法

​	count( )   计算数组的长度length

​	unset( )   使用数组删除某一项会有一点点小问题

```php
<?php
  	$arr = [1, 2, 3, 4, 5];
	print_r($arr);
	unset($arr[2])
    echo '<hr/>';
	print_r($arr);
	/*
		之前： Array([0] => 1 [1] => 2 [2] => 3 [3] => 4 [4] => 5)
		现在： Array([0] => 1 [1] => 2 [3] => 4 [4] => 5)
	*/
	// 索引和值都没有，变成了稀疏的了
?>
	
```



#### 深度数组 / 二维数组

```php
<?php
  	/* $arr = array(
		1, 2, 3,
  		"name" => "tylor",
  		array()
	); */
  
  	// 描述学生对象
  	$arr = array(
		// 描述第一个学生对象的数据
  		"name"=>array(
        	"name" => "tylor",
          	"age" => 20
        ),
  		array(
        	"name" => "Bluce",
          	"age" => 18
        )
	);

	print_r($arr);
    /* Array(
			[0] => Array(
					[name] => tylor 
					[age] => 20
					) 
			[1] => Array(
					[name] => Bluce
					[age] => 18 
					)
			)
	*/

	// 通过嵌套循环输出当前的数组
	foreach($arr as $key => $value) {
      	// 二维数组的遍历
      	// print_r($value); 两个内层数组
      	foreach($value as $subkey => $subvalue) {
          	echo $subkey . ":" . $subvalue . "<br/>";
      	}
	}
	/* ==> 输出
		name：tylor
		age:20
		name:Bluce
		age:18
	*/
?>
```



---



## 2.0 数据类型的转换和运算符

​	主要分为两种，自动转换和强制类型转换，也就是显式转换和隐式转换，自动转换用的多

#### php中强制类型转换

​	bool( )   string( )  object( )

```php
<?php
  	$str = '123';
	var_dump($str); // string(3) '123'
	var_dump((int)$str); // int(123)
	
	echo '<br/>';
	// 转换成数组
	var_dump((array)$str); // Array {[0] => string(3) '123'}

	$abc = 'jackey';
	$num = (int)$abc;
	var_dump($num); // int(0)
?>
```



#### 运算符

 -  +号只能是运算符，系统默认会隐式转换成数值，如果转换不了，就会给一个默认值

    ​	默认值类型 

    | 数据类型   | 默认值   |
    | ------ | ----- |
    | int    | 0     |
    | object | null  |
    | bool   | false |
    | float  | 0.0   |

 -  在php中，拼接的运算符，是小数点.



运算符类型

| 算术运算符              | 赋值运算符        | 逻辑运算符        | 比较运算符             |
| ------------------ | ------------ | ------------ | ----------------- |
| + 加 -  减  * 乘  / 除 | = 一般赋值       | ！取反          | > 大于 < 小于         |
| % 求余，相除完剩余的结果      | += 在本身追加     | &&  与，严格要求   | >= 大于等于  <=小于等于   |
| ++  自加单独没区别        | -= 在本身扣除     | \|\|  或，满足一项 | == 是否相等  === 是否全等 |
| -- 同上              | *=  /=  同上逻辑 |              | != 不相等   !==  不全等 |

**三元运算符**        表达式会返回true或者false      **?**        如果为true返回值1      **:**      如果为false返回值2



---



## 3.0 php常用语法

​	顺序结构  =>  流程控制  =>   循环

#### 流程控制和循环

##### 流程控制

 - if...else
 - switch...case

```php
<?php
  	$age = 40;
	if($age > 18) {
      	echo '您已成年';
	} else {
      	echo  '您未成年';
    }
  	// 简写
	if($age > 10) :
		echo '您已成年';
	else :
		echo '您未成年';
	endif;
	/*
		if():
		elseif():
		elseif():
		else:
		endif;
	*/
?>
```



##### 循环

```php
<?php
	// 正常循环
  	for($i = 0; $i < 10; $i++) {
      	// 输出语句
  	}

	// 指令式循环
	for($i = 0; $i < 10; $i++) :
		// 输出语句
	endfor;
?>
```

习惯使然，没有什么强制要求;



#### 函数

```php
<?php
    // 函数声明
    function getSum($num) {
      $sum = 0;
      for($i = 0; $i <= $num; $i++) {
          $sum += $i
      }
      return $sum;
    }
    echo getSum(100);

    /*
      !!!!!  在函数中没有作用域链，访问不到外部的变量值,
      如果找不到当前变量或者当前变量没有赋值，则转换为int类型就是0,
      如果确实需要访问外部数据，可以使用global，添加对外部成员的引用
    */
	$num = 200;
	function getNum() {
      // 添加到全局中
      global $num;// 引用的同时不能赋值
      $num=10;
      echo $num;
	}
	getNum();
?>
```



#### 超全局变量

| 超全局变量名称   | 作用              |
| --------- | --------------- |
| $GLOBALS  | 引用全局作用域中可用的全部变量 |
| $_SERVER  | 获取服务端相关信息       |
| $_REQUEST | 获取提交参数          |
| $_POST    | 获取post提交参数      |
| $_GET     | 获取get提交参数       |
| $_FILES   | 获取上传文件          |
| $_ENV     | 操作环境变量          |
| $_COOKIE  | 操作cookie        |
| $_SESSION | 操作session       |



##### $GLOBALS

```php
<?php
  	$name = 'jack Ma';
	$age = 40;

	function test() {
      	// echo $GLOBALS;
      	print_r($GLOBALS)
	}

	test();
	/*
		Array(
			[_GET] => Array()
			[_POST] => Array()
			[_COOKIE] => Array()
			[_FILES] => Array()
			[GLOBALS] => Array
			* RECURSION（递归） *
			[name] => jack Ma
			[age] => 40
		)
	*/
?>
```



#### 常量

```php
<?php
  	// ！！！定义说明  不可修改，区分大小写，一般用大写
  	// define(name, value, insensitive); insensitive -> 不敏感，迟钝的
  	define("PI", 3.14, false); // 设置为true则代表不区分大小写

	echo PI; // 3.14
?>
```



预设常量（魔术常量）

​	在不同的使用场景下，代表不同的值

| 常量名称          | 作用                   |
| ------------- | -------------------- |
| \__LINE__     | 可以获取当前的代码行           |
| \__FILE__     | 可以获取当前文件的路径   目录+文件名 |
| \__DIR__      | 可以获取当前文件的目录          |
| \__FUNCTION__ | 可以获取当前魔术常量所在的函数      |



```php
09
10  <?php
11    echo __LINE__;  // 11  返回当前的行号
12  ?>
13
```



---



## 4.0 php中的文件载入

​	说明： 在一个文件中引入另外一个文件的方法

​	__html,css都有类似的方法，但是javascript不行，所以才有了后期的模块化__



​	01-constant.php  用来描述一些固定的信息

```php
<?php
  	define("__SCHOOL_NAME", "传智播客");
	define("__ADDRESS__", "首都北京");

	echo "下面是被入的代码块";	
?>
```

​	02-require.php   用来载入上面的文件

```php
<?php
  	// include 相当于在这里复制粘贴了一份
  	include 'constant.php'; 
	echo SCHOOL_NAME; // 传智播客

  	// include_once   只会载入一次
  	include_once 'constant.php'; // 
	echo SCHOOL_NAME; // 传智播客 

  	// require  
  	require 'constant.php'; 
	echo SCHOOL_NAME; // 传智播客

  	// require_once
	require_once 'constant.php'; 
  	echo SCHOOL_NAME; // 传智播客
?>
```



|                   | require | require_once | include | include_once |
| ----------------- | ------- | ------------ | ------- | ------------ |
| 载入文件不存在是否影响后续代码执行 | 会       | 会            | 不会      | 不会           |
| 多次调用是否重复执行被载入的文件  | 会       | 不会           | 会       | 不会           |



总结：

 - include一般用于载入公共文件，这个文件的存在与否不能影响后续代码执行
 - require用于载入不可或缺的文件
 - 至于是否采用一次载入这种方式取决于被载入的文件

---



## 5.0 常用API

​	这里的api指的就是一些方法，或者内置函数



#### 字符串与数组的处理

| 方法                      | 作用                 |
| ----------------------- | ------------------ |
| strlen( )               | 获取字符串的长度           |
| mb_strlen( )            | 没有设置编码，就使用php默认的编码 |
| mb_internal_encoding( ) | 获取php内部默认的编码       |



strlen( )

```php
<?php
  	$str = "hello world";
	// 获取字符串的长度
	// 无法正确处理中文字符（宽字符集：php默认不支持的字符-中文、韩文、日文）
	echo strlen($str); // 11  加两个中文就变17  一个中文3个字节
?>
```



```php
<?php
  	// 获取函数内部默认的编码
	echo mb_internal_encoding(); // UTF-8
?>
```



mb_strlen( )

```php
<?php
  	$str = "hello world你好";
	// 没有变化就使用默认编码
	// 默认不能使用，如果想使用，就需要添加一个引用
	echo mb_strlen($str); // 13
?>
```

解开注释掉的那个引用


使用搜索查找到当前那个位置， 选择记事本打开，按住ctrl+f查找




__去掉前面的分号，！！！！！一定要记得手动重启一下服务器;__

备注：只有php5.6版本以上才支持，切换后点击应用



#### 时间处理函数

| 方法           | 名词      | 释义                                       |
| ------------ | ------- | ---------------------------------------- |
| time( )      | 时间戳     | 从Unix纪元(格林威治 1970-01-01 00:00:00)到现在的秒数  |
| date( )      | 格式化日期   | date("Y-m-d H:i:s")   或者   date("Y-m-d H-i-s",  $time) |
| strtotime( ) | 转换时间为秒数 | 把日期格式转换为秒数的时间戳                           |

```php
<?php
  	// 输出从1970-1-1 00:00:00到现在的秒数
  	echo time();// 1520697202

	echo date('Y-m-d H:i:s'); // 2018-11-12 05-14-52
	// !!!!  这里的时间与正常时间不同，有8个小时的误差
?>
```

修改配置文件


搜索timezone


点击查找下一个，找到属于这个开头的


！！！！手动重启服务器



​	strtotime( )

```php
<?php
  	echo strtotime("1970-1-2 00:00:00"); // 57600
?>
```



#### 文件操作

| 方法                   | 功能       | PHP  |
| -------------------- | -------- | ---- |
| file_get_contents( ) | 将文件读入字符串 | 4    |
| file_put_contents( ) | 将文件写入字符串 | 5    |



```php
<?php
  	// 设置当前页面的返回值是图片类型
  	header("Content-Type:image/jpg");
  	// file_get_contents( )
  	// 读取文件成功，返回一个字符串类型的值， 如果失败，返回false
  	$res = file_get_contents('data.text');
	
	var_dump($res); // bool(false)
	/*
		1, 读取任意类型的文件
		2, 如果读取图片，要在最前面加上一句代码
			header("Content-Type:image/jpg");
	*/
	$res1 = file_get_contents("./images/monkey.png");
	echo $res1;
?>
```



```php
<?php
  	// file_put_contents(文件路径, 需要写入的内容) 指定的内容写入文件，同时返回字符的长度
  	file_put_contents("data.txt", "这是我写入的内容");  // 24

	// 上一种写法会覆盖之前原本的内容
	// 需要加入一个参数 FILE_APPEND
	file_put_contents("data.txt", "这是我写入的内容", FILE_APPEND);
?>
```



---



## 6.0 水果案例动态生成



静态网页生成：

​	1，在html文件中写入结构，

​	2，在css文件中写入样式

​	3，在js中完成页面基本效果

​	4，双击在浏览器中浏览网页

使用php将网页修改为动态网站：

​	1，将html文件修改为php格式

​	2，将主体的规律的数据，规律的存储到php语法的数组中

​	3，使用php中的遍历，得到数组中每一项的数据

​	4，生成页面结构，打印到页面中

​	5，通过ip地址访问当前的网页



​	__使用html书写的静态页面结构__

```html
<ul>
	<li>
		<a href="#">香蕉</a>
	</li>
	<li>
		<a href="#">苹果</a>
	</li>
	<li>
		<a href="#">橘子</a>
	</li>
  	...
</ul>
```



#### 步骤1： 整理主体内容数据

```php
<?php
    // 将图片的路径和a链接的内容整理到数组中
    $arr = array(
		array(
        	"src" => "img/banana1.jpg",
          	"name" => "香蕉"
        ),
  		array(
        	"src" => "img/apple.jpg",
          	"name" => "苹果"
        ),
  		array(
        	"src" => "img/orange.jpg",
          	"name" => "橘子"
        )
  		//...
  	)
?>
```



#### 步骤2：php和html代码混编

```php
<?php
  foreach($arr as $value) {
?>
  
	<li>
  		<img src="<?php echo $value['src'] ?>" alt="" />
  		<a href="#"><?php echo $value['name'] ?></a>
  	</li>

<?php } ?>
```



#### 步骤3：将数据存放在php文件

```php
// 新建 get_data.php 文件

<?php
  	/*
  		1, 如果还是直接用数组存起来，那么与上面的内容则无异
  		2, 而以后究竟以什么形式传入，或者传入的内容是什么方式补丁
  		3, 假设传入的方式为字符串，如何拆解想要的信息，映射到数组中
  	*/
  	$str = "img/pineapple1.jpg|菠萝";

	// ？？？ 如果是在php中该如何处理
	// 使用 explode( ) 方法
	// print_r(explode("|", $str)); Array([0] => img/pineapple1.jpg [1] => 菠萝)
	$value = explode("|", $str);
	
?>
```

如果使用javascript可以依照如下代码结构

```html
<script>
	var str = "img/pineapple1.jpg|菠萝";
  	console.log(str.split("|"));
  	// ["img/pineapple1.jpg", "菠萝"]
</script>
```



#### 步骤4：完成单个标签的拼接

```php
<?php
  	$str = "img/pineapple1.jpg|菠萝";
	$value = explode("|", $str);
	// ["img/pineapple1.jpg", "菠萝"]
?>
  
	<li>
  		<img src="<?php echo $value[0] ?>" alt="" />
  		<a href="#"><?php echo $value[1] ?></a>
  	</li>
```



#### 步骤5：数据和结构相分离

新建一个 data.txt 文件存入数据

```text
img/pineapple1.jpg|菠萝
```

在php文件中引入数据

```php
<?php
  	// !!!! 在这里引入了数据文件
  	$str = file_get_contents("data.txt");
  
	$value = explode("|", $str);
?>
  
	<li>
  		<img src="<?php echo $value['src'] ?>" alt="" />
  		<a href="#"><?php echo $value['name'] ?></a>
  	</li>
```



#### 步骤6：添加更多数据完成效果

- 通过换行存储数据
- 通过换行分割数据，再通过“|”分割数据

```tex
img/pineapple1.jpg|菠萝
img/orange1.jpg|橘子
```



- 读取文件内容，分割字符串

```php
<?php
 	// 引入文件
 	$str = file_get_contents("fruit.txt");

	// 拆分每一行数据
	// print_r(explode("\n", $str));
	/*
		Array(
			[0] =>  img/pineapple1.jpg|菠萝
			[1] =>  img/orange1.jpg|橘子
		)
	*/
	$arr = explode("\n", $str); 
  	foreach($arr as $value) {
      	// 继续拆分得到的每一行字符串
    	$result[] = explode("|", $value);
  	}
	// print_r($result);  能够得到最终的数组

	foreach($result as $value) {
?>
      <li>
          <img src="<?php echo $value[1] ?>" alt="" />
          <a href="#"><?php echo $value[2] ?></a>
      </li>
   
<?php
	}
?>
```

在文件结构首页引入php功能的文件

```php
<?php
  	include 'getList.php';
?>
```

引入最终的完整的txt文档，改变内层拆分的索引



