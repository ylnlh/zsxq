---
title: 04-php基础
icon: markdown
---

  ​
# php简要札记

---

$$
了解http的请求，有助于我们更加清楚页面请求和相应的过程到底发生了什么
$$

## 1.0 HTTP协议

 	关于协议

​	对于应用层开发人员，接触最多的网络协议通常都是传输层的TCP，为什么这么说，因为再往上的应用层协议，如：HTTP、HTTPS、POP3、SMTP、RPC、FTP、TELNET等等都是基于TCP传输层协议。但对于IP协议，对于应用程序员来说更多的印象还是IP地址这个东西，实际上IP协议是位于TCP协议之下的网络层，对于应用层程序员来说很难直接接触

​	IP协议 ：  IP的责任就是把数据从源传送到目的地。它不负责保证传送可靠性，流控制，包顺序和其它对于主机到主机协议来说很普通的服务

​	TCP协议：TCP（Transmission Control Protocol 传输控制协议）是一种面向连接的、可靠的、基于字节流的传输层通信协议

​	HTTP协议：HTTP 是基于 TCP/IP 协议的应用层协议。它不涉及数据包（packet）传输，主要规定了客户端和服务器之间的通信格式，默认使用80端口



#### TCP协议的3次握手

​	在我们获得页面数据之前，客户端需要与服务器端进行三次握手的"问候"

​	简单来说：

​		1， 客户端向服务器发起问候，携带编号number

​		2， 服务器如果收到客户端的问候，回复问候，携带其他编号number

​		3，客户端确认连接成功，回复服务器收到返回的数据

​	

为什么是3次握手？

​	这个问题的本质是, 通信不可靠, 但是通信双发需要就某个问题达成一致. 而要解决这个问题, 无论你在消息中包含什么信息, 三次通信是理论上的最小值

​	已失效的连接请求报文段的产生在这样一种情况下：

 - client发出的第一个连接请求报文段并没有丢失，而是在某个网络结点长时间的滞留了，以致延误到连接释放以后的某个时间才到达server。
 - 本来这是一个早已失效的报文段。但server收到此失效的连接请求报文段后，就误认为是client再次发出的一个新的连接请求。于是就向client发出确认报文段，同意建立连接。
 - 假设不采用“三次握手”，那么只要server发出确认，新的连接就建立了。由于现在client并没有发出建立连接的请求，因此不会理睬server的确认，也不会向server发送数据。
 - 但server却以为新的运输连接已经建立，并一直等待client发来数据。这样，server的很多资源就白白浪费掉了。
 - 采用“三次握手”的办法可以防止上述现象发生。例如刚才那种情况，client不会向server的确认发出确认。server由于收不到确认，就知道client并没有要求建立连接





#### 4次分手怎么回事 

- TCP协议是一种面向连接的、可靠的、基于字节流的运输层通信协议。
- TCP是全双工模式，这就意味着，当主机1发出FIN报文段时，只是表示主机1已经没有数据要发送了，主机1告诉主机2，它的数据已经全部发送完毕了；
- 但是，这个时候主机1还是可以接受来自主机2的数据；当主机2返回ACK报文段时，表示它已经知道主机1没有数据发送了，但是主机2还是可以发送数据到主机1的；
- 当主机2也发送了FIN报文段时，这个时候就表示主机2也没有数据要发送了，就会告诉主机1，我也没有数据要发送了，之后彼此就会愉快的中断这次TCP连接。
- 如果要正确的理解四次分手的原理，就需要了解四次分手过程中的状态变化

---



## 2.0 请求报文

​	在结束协议的连接之后，客户端向服务器正式发起请求

​	发起请求的时候，需要具体介绍当前的请求情况，方便服务器做出快速响应



#### 请求报文的常见格式

​	__请求报文包含     请求行--请求头--请求体__





##### 请求行

​	请求方式 + 空格 + 请求路径 + 空格 + HTTP协议版本

​	 =>     GET  /demo.php  HTTP/1.1



##### 请求头

| 键               | 值                          |
| --------------- | -------------------------- |
| Host            | 请求的主机                      |
| Cache-Control   | 控制缓存(例如：max-age=60  缓存60秒) |
| Accept          | 客户端想要接收的文档类型，逗号分隔          |
| User-Agent      | 标识什么客户端帮你发送的这次请求           |
| Referer         | 这次请求的来源                    |
| Accept-Encoding | 可以接受的压缩编码                  |
| Cookie          | 客户端本地的小票信息                 |



##### 请求体

​	客户端需要向服务端发送的内容

 - get请求，会把基本的参数拼接到url的后面，所以基本使用不上请求体
 - post请求使用请求体会比较频繁



#### get请求



​	get请求没有请求体，因为都在url的问号后面



#### post请求

​	如果上传文件的话



---



## 3.0 响应报文

​	

#### 状态行 - 响应行 - 响应体

​	响应体一般来说是HTML，也可以是css或者javascript

​	注意：返回什么类型文件，就修改响应头里的响应类型



---



## 4.0 请求样式文件



#### 请求css文件

​	虽然要请求的是css文件，但是link的是php文件

​	由于php是后台文件，最终是在php中返回内容给浏览器，并且可以设置当前的文件类型

```php
<link rel="stylesheet" href="css.php" />
```

​	在css.php中书写的代码

```php
<?php
  	// 设置响应头的类型
  	header("Content-Type:text/css;charset=utf-8;");
  	echo "body{background:red;}";
?>
```



#### header方法发送重定向操作

​	页面跳转

```html
<a href="data.php">点击重定向</a>
```

​	在data.php中完成跳转

```php
<?php
  	// 立马做出跳转
  	// header("Location:01-getsmt.php");
  
  	// 在指定的时间之后跳转
  	header("refresh:3;url=01-getsmt.php");
?>
```



#### header方法实现下载功能

```php
<?php
  	// 实现当前页面的自动下载
  	header("Content-Type:application/octet-stream");

	// 指定文件名称, 自动下载，设置下载名称
	header("Content-Disposition:attachment;filename=tmp.php");
  
?>
```



#### 设置请求头制作图片防盗链

```php
<?php
  	// 获取请求报文数据
  	// print_r(getallheaders());
  
  	$refer = getallheaders()["Referer"];
	echo $referer; // http:127.0.0.1/day04/03-test.html

	// 获取url中各个部分的值
	print_r(parse_url($referer));

	/*
		Array(
			[scheme] => http
			[host] => 127.0.0.1
			[path] => /day04/03-test.html
		)
	*/

?>
```



------

​	

## 5.0 HTTP协议无状态



#### HTTP会话

​	客户端打开与服务器的连接发出请求到服务器响应客户端请求的全过程称之为会话



#### HTTP无状态

​	HTTP协议，本来是进行共享多个计算机之间的文件而产生的文件传输协议

​	而请求的时候，服务器没有记录当前的信息

​	就比如，去火车站取票，刷身份证拿到票之后，整个会话结束，不会有任何记录

==============

​	动态网站的出现，表单提交，购物车的DOM操作，付款的跳转...

​	有了交互的需要，需要携带一些数据在不同页面之间跳转，无凭无据的，可如何是好



------



## 6.0 Cookie



#### 什么是cookie

##### 关于cookie的描述

- 因为HTTP协议是无状态的，即服务器不知道用户上一次做了什么，这严重阻碍了交互式Web应用程序的实现。在典型的网上购物场景中，用户浏览了几个页面，买了一盒饼干和两瓶饮料。最后结帐时，由于HTTP的无状态性，不通过额外的手段，服务器并不知道用户到底买了什么，所以Cookie就是用来绕开HTTP的无状态性的“额外手段”之一。服务器可以设置或读取Cookies中包含信息，借此维护用户跟服务器会话中的状态。
- 在刚才的购物场景中，当用户选购了第一项商品，服务器在向用户发送网页的同时，还发送了一段Cookie，记录着那项商品的信息。当用户访问另一个页面，浏览器会把Cookie发送给服务器，于是服务器知道他之前选购了什么。用户继续选购饮料，服务器就在原来那段Cookie里追加新的商品信息。结帐时，服务器读取发送来的Cookie就行了。
- Cookie另一个典型的应用是当登录一个网站时，网站往往会请求用户输入用户名和密码，并且用户可以勾选“下次自动登录”。如果勾选了，那么下次访问同一网站时，用户会发现没输入用户名和密码就已经登录了。这正是因为前一次登录时，服务器发送了包含登录凭据（用户名加密码的某种加密形式）的Cookie到用户的硬盘上。第二次登录时，如果该Cookie尚未到期，浏览器会发送该Cookie，服务器验证凭据，于是不必输入用户名和密码就让用户登录了。

##### cookie小结

​	cookie是一个文件，用来存储当前的一些信息和服务器保持交流

​	在前端介绍的sessionStorage和localStorage也是类似的功能

| 内容      | cookie                                   | localStorage                    | sessionStorage                  |
| ------- | ---------------------------------------- | ------------------------------- | ------------------------------- |
| 生命周期    | 一般由服务器生成，可设置失效的时间，如果在浏览器端生成cookie，默认关闭浏览器后失效 | 除非被删除，否则永久保存                    | 仅在当前会话下有效，关闭页面或者浏览器后被删除         |
| 数据大小    | 4k                                       | 20M                             | 5M                              |
| 与服务器端通信 | 携带在http请求头中，若保存cookie过多数据会带来性能问题         | 仅在客户端即浏览器中保存，不参与和服务器的通信         | 仅在客户端即浏览器中保存，不参与和服务器的通信         |
| 易用性     | 需要程序员自己封装                                | 原生接口可以接受，亦可以再次封装来对obj和Arr有更好的支持 | 原生接口可以接受，亦可以再次封装来对obj和Arr有更好的支持 |





#### 使用cookie

```php
<?php
  	// 创建cookie
  	// setcookie("username", "tylor");  // 可以在请求头中查看
  
	// 判断是否拥有某个指定名称的cookie值 -- $_COOKIE
	if(isset($_COOKIE["username"])) {
      	echo "欢迎回来，朕的小仙女";
	}else {
		echo "大人头一回来，是打尖儿还是住店呀~";
      	setcookie("username", "tylor");
    }
  
?>
```

​	chrome： 设置 => 更多设置 => 内容设置 => cookie    

​	可以看到明文存储的cookie设置的值;



##### cookie的参数

​	cookie的有效期

```php
<?php
    // 时间是秒, 时间参照php的默认起始时间(1970-1-1)
    // setcookie("username", "tylor", 100);
    setcookie("username", "tylor", time() + 10);

	// 设置永久的时间
	setcookie("username", "tylor", PHP_INT_MAX);

?>
```

​	cookie的有效目录

```php
<?php
    // 在不同的文件夹输出cookie中的键
  	echo $_COOKIE["username"];

	// 通过path可以设置访问权限，参照网站根目录
	setcookie("username", "tylor", PHP_INT_MAX, "/day05/down");
	// 设置父级目录，子目录可以访问，设置子目录，上层不能访问  "/" 代表整站可以访问
	// Domain: 域名  path： 路径   secure：只有在https这类安全的协议下才会发送
	

	// 某网站中显示的cookie
	// set-cookie: ds_user_id=3265153328; Domain=.instagram.com; expires=Wed, 13-Feb-2019 14:19:35 GMT; Max-Age=7776000; Path=/; Secure

?>
```



#### 删除cookie

```php
<?php
  	// 处理删除cookie的php文件
  
  	// 1.0 怎么创建的就怎么删除的
  	// setcookie("username", "");  如果开始不是这样设置的，这样删除就不行
  	setcookie("username", "", PHP_INT_MAX, "/day05/down");
	echo "ok";

	// 2.0 设置一个过期时间，也是可以删除的 
?>
```



##### 关于cookie的缺陷

- Cookie会被附加在每个HTTP请求中，所以无形中增加了流量
- 由于在HTTP请求中的Cookie是明文传递的，所以安全性成问题，除非用HTTPS
- Cookie的大小限制在4KB左右，对于复杂的存储需求来说是不够用的



#### 登录案例

​	使用写好的表单文件, 在头部判断是否为post提交

```php
<?php
  	function login() {
      	// 验证用户数据是否合法
  		if(!isset($_POST["username"]) || trim($_POST["username"]) === "") {
          	$GLOBALS["error"] = "请输入用户名";
          	return;
  		}
  		if(!isset($_POST["password"]) || trim($_POST["password"]) === "") {
          	$GLOBALS["error"] = "请输入密码";
          	return; 
  		}
  
  		// 接收用户数据
  		$username = $_POST["username"];
 		$password = $_POST["password"];
  
  		// 读取文件，进行相应判断
  		$dataArr = json_decode(file_get_contents("users.json"), true);
  		foreach($dataArr as $value) {
          	// 如果下面的条件满足，说明至少用户名是正确的
          	if($value["username"] == $username) {
              	$user = $value;
              	break;
          	}
  		}
  		// 如果这里没有值，告诉用户用户名不存在
  		if(!isset($user)) {
          	$GLOBALS["error"] = "用户名不存在";
          	return;
  		}
        // 能走到这里来，证明$user已经拿到了用户的值  
  		if($user["password"] != $password) {
          	$GLOBALS["error"] = "密码输入错误";
          	return;
  		}
          
  		// 匹配成功跳转至主页，否则回到登录页
  		// !!!!!   将登陆成功的数据，写入到cookie中
  		setcookie("isLogin", true);
  		header("Location:./main.php");
  	}
  
  	// 判断是否为post提交
  	if($_SERVER["REQUEST_METHOD"] === "POST") {
      	login();
  	}
 
?>
```



```php
<?php
  	// 判断当前有没有定义全局成员
  	if(isset($GLOBALS["error"])) {
?>
      	<div class="alert alert-danger" role="alert"><?php echo $GLOBALS["error"] ?></div>
<?php
  	}
?>
```



##### 使用cookie进行判断

​	在跳转的首页去判断用户是否之前登录过

```php
<?php
  	// 约定好判断的名字是什么
  	if($_COOKIE["isLogin"] != true) {
      	header("Location:login.php");
  	}
?>
```



##### 删除cookie值

​	在点击退出登录的页面中，设置跳转到logout.php文件，在此文件中处理删除

```php
<?php
  	// 在删除cookie的时候，要注意它是怎么添加的
  	setcookie("isLogin", "");
	
	// 回去登录页面
  	header("Location:login.php");
?>
```



#### 关于JSON的小补充



##### JSON数据格式

​	JSON数据格式目前是使用的最多的，用来传递大量数据的文件

```JSON
[
  	{
      	"title" : "《毒液》",
      	"director" : "tylor swift",
      	"actors" : "Kobe Bryent",
      	"time" : "2020-12-12",
      	"src" : "./upload/xxx.avi"
  	},
  	{
      	"title" : "《觉醒》",
      	"director" : "王家卫",
      	"actors" : "Lebron james",
      	"time" : "2019-1-14",
      	"src" : "./upload/xxx.avi"
  	}
]
```



##### JSON的特点

- 在json格式的文件中，不允许写任何的注释
- 属性和值，必须要使用双引号包含，值为数值或者非字符，没有undefined
- 对应关系
  - 对象 => { }  后期可以将其转换为一个对象
  - 数组 => [ ]  后期可以将其转换为一个数组
- 单个json的数据用对象表示，多个就是上面见到的数组的格式，这种数据类型以后会经常见到

##### JSON的方法

```php
<?php
  	// 要使用JSON里面的数据，首先要去读取数据
  	$str = file_get_contents("movie.json");
	echo $str;
	
	// 这里见到的数组其实是个字符串
	/*
		[
            {
                "title" : "《毒液》",
                "director" : "tylor swift",
                "actors" : "Kobe Bryent",
                "time" : "2020-12-12",
                "src" : "./upload/xxx.avi"
            },
            {
                "title" : "《觉醒》",
                "director" : "王家卫",
                "actors" : "Lebron james",
                "time" : "2019-1-14",
                "src" : "./upload/xxx.avi"
            }
        ]
	*/
	
  	// 读取出的数据，需要转换为最终需要的数据  数组
	// ！！！ json_encode()	
	// 可以将php数组或者对象转换为json格式的字符串
	
	// ！！！ json_decode()
	/* 可以将json格式的字符串转换为数组或者对象，
			- 如果发现json格式的数组以中括号包裹，就可以将字符串转换为数组
            - 如果发现json格式的数组以大括号包裹，就可以将字符串转换为对象
    */
	$arr = json_decode($str);
	print_r($arr);
	/*
		Array(
			[0] => stdclass object (
				[title] => 《毒液》,
                [director] => tylor swift,
                [actors] => Kobe Bryent,
                [time] => 2020-12-12,
                [src] => ./upload/xxx.avi
			)
			[1] => stdclass object (
				[title] : 《觉醒》,
                [director] : 王家卫,
                [actors] : Lebron james,
                [time] : 2019-1-14,
                [src] : [./upload/xxx.avi]
			)
		)
	*/
	// 这里多加一个true代表设置为数组，不然设置为一个对象
	$arr = json_decode($str, true);


	$arr2 = Array(
    	"name" => "tylor",
      	"age" => 32,
      	"gender" => true
    );
	// 转换为json格式的字符串
	$str2 = json_encode($arr2);
	echo $str2;
	/* {
			"name" : "tylor",
			"age" : "20",
			"gender" : true
		}
	*/
?>
```



------



## 7.0 Session



#### session和cookie的区别

- session 保存在服务器，客户端不知道其中的信息；cookie 保存在客户端，服务器能够知道其中的信息
- session 中保存的是对象，cookie 中保存的是字符串
- session 不能区分路径，同一个用户在访问一个网站期间，所有的session在任何地方都可以访问到。而 cookie 中如果设置了路径参数，那么同一个网站不同路径下的 cookie 互相是不可以访问的
- cookie 不是很安全，本人可以分析存放在本地的 COOKIE 并进行 COOKIE欺骗
- session 会在一定时间内保存在服务器上。当访问增多，会占用你服务器的性能。考虑到减轻服务器性能方面，应该使用 COOKIE
- 单个 cookie 保存的数据不能超过 4k ，很多浏览器都限制一个站点最多保存 20 个 cookie
- session 是通过 cookie来工作的

#### 在php文件中设置session

​	要开启session的功能，才能使用session

```php
<?php
  	// !!! php中默认不能使用session功能，如果需要使用则需要手动设置
	session_start();
	/*
		1, 在服务器端动态生成一个sessionID
		2, 在服务器端动态生成一个可以存放本次会话数据的文件，文件名以sess_sessionID构成
		3, 通过相应头动态设置cookie， 在cookie中存放了本次会话所生成的sessionID
	*/
  
  	// 创建session  使用超全局变量 $_SESSION["name"] = value;
  	$_SESSION["user"] = Array(
							"name" => "dilireba",
  							"age" => 25
						);
?>
```


##### 发起请求过程

- 第一次向服务器发起请求不会存在这些参数
- 服务器创建sessionID存储对应的内容
- 服务器返回参数在cookie中
- 客户端通过返回回来的cookie的值，继续请求
- 服务器根据cookie中sessionID的值找到对应文件处理相关操作

##### 文件存放位置

C:\phpStudy\PHPTutorial\tmp\tmp

修改配置文件

```php
// 搜索 session.auto_start   将原本的0改为1即可
```



#### session的基本操作

##### 读取session的值

```php
<?php
 	session_start();
	$str = $_SESSION["username"];
?>
```

##### 删除session的值

```php
<?php
  	session_start();

  	// 删除一个session的值
	unset($_SESSION["username"]);

	// 清空session所有的值
	$_SESSION = [];

	// 销毁session文件
	session_destroy();
?>
```



#### 登录案例

##### 步骤1：将原先设置cookie的地方改写为session

```php
<?php
  	...
  
  		// 匹配成功跳转至主页，否则回到登录页
  		/* 
  			!!!!!   将登陆成功的数据，写入到cookie中
  			setcookie("isLogin", true);
  		*/
  		// 写入session数据
  		session_start();
  		$_SESSION["user"] = Array(
								"username" => $_POST["username"],
  								"userpwd" => $_POST["password"],
  								"isLogin" => "yes"
							);
  		header("Location:./main.php");

  	...
?>
```



##### 步骤2：在main文件中判断

```php
<?php
  	session_start();
  	// 判断是否写入了session
  	if(!isset($_SESSION["user"]) || $_SESSION["user"]["isLogin"] !== "yes") {
      	header("Location:login.php");
  	}
?>
```



##### 步骤3：退出登录

```php
<?php
  	session_start();
  	// 删除session
  	unset($_SESSION["user"]);
	
	// 回去登录页面
  	header("Location:login.php");
?>
```



| 区别        | cookie        | session          |
| --------- | ------------- | ---------------- |
| 存储位置      | 浏览器           | 服务器              |
| 浏览器携带的数据量 | 多             | 少（只携带session-id） |
| 存储的数据类型   | 只能是字符串        | 任意类型             |
| 安全性       | 较低            | 较高               |
| 默认的有效路径   | 当前路径及其子路径     | 整站有效             |
| 数据的传输量    | 有限制4k，不能超过20个 | 无限制              |



------



## 8.0 MySQL



#### 什么是数据库

​	存储数据的仓库，按照特定的方式来存储数据	

​	txt  => json  =>   数据库

- 前两者存储量小，不利维护，不利管理，不利更新
- 数据库主要逻辑 （增删查改）CRUD

#### 如何操作数据库

​	第一种方式： 通过命令行工具创建数据库

​	默认密码：root





```php
// 数据库命令行常见操作
mysql> show databases;  -- 显示全部数据库
mysql> create database <db-name>;  -- 创建一个指定名称的数据库
mysql> use <db-name>;  -- 使用一个数据库，相当于进入指定的数据库
mysql> show tables;  -- 显示当前数据库中有哪些表
mysql> create table <table-name> (id int, name varchar(20), age int);  -- 创建一个指定名称的数据表，并添加 3 个列
mysql> desc <table-name>;  -- 查看指定表结构
mysql> source ./path/to/sql-file.sql  -- 执行本地 SQL 文件中的 SQL 语句
mysql> drop table <table-name>;  -- 删除一个指定名称的数据表
mysql> drop database <db-name>;  -- 删除一个指定名称的数据库
mysql> exit|quit;  -- 退出数据库终端
```



#### 安装可视化工具-navicat

##### 断网激活

