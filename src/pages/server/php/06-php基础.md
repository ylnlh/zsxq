---
title: 06-php基础
icon: markdown
---

  ​
# MYSQL基本操作案例



## 1.0 PHP操作数据库的封装



​	对不同表都相同操作，但是不需要重复写相同代码，只是语句不同

#### 封装代码

```php
<?php
  	header("Content-type:text/html;charset=utf-8");
    // 1.0  封装增加、删除和修改的操作
    function opt($sql) {
  		// 创建连接
    	$conn = mysqli_connect("localhost", "root", "root", "mytable");
  		// 如果连接成功返回连接对象，如果不成功，返回false
  		if(!$conn) {
          	die("数据库连接失败~");
  		}
  		// 设置编码
  		mysqli_set_chartset($conn, "utf8");
  		// 执行$sql语句，接收返回值
  		$res = mysqli_query($conn, $sql);
  		// 及时关闭连接
  		mysqli_close($conn);
  		// 返回结果
  		return $res;
    }
    // 2.0  封装查询操作
  	function select() {
      	// 创建连接
    	$conn = mysqli_connect("localhost", "root", "root", "mytable");
  		// 如果连接成功返回连接对象，如果不成功，返回false
  		if(!$conn) {
          	die("数据库连接失败~");
  		}
  		// 设置编码
  		mysqli_set_chartset($conn, "utf8");
  		// 查询语句的返回值，成功返回资源（结果集），不成功返回false
  		$res = mysqli_query($conn, $sql);
      	if(!$res) {
          	echo "查询失败";
      	} else if (mysqli_num_rows($res) == 0) {
          	echo "没有查找到数据~";
      	} else {
          	// 有结果集也有数据行
          	while($arr = mysqli_fetch_assoc($res)) {
              	$result = $arr;
          	}
          	// 及时关闭连接
  			mysqli_close($conn);
          	return $return;
      	}
      
      	// 操作完毕，关闭连接
  		mysqli_close($conn);
  	}
?>
```



#### 测试调用

```php
<?php
  	header("Content-type:text/html;charset=utf-8");
  
  	// 载入封装的文件
  	include_once "./common.php";

	$res = opt("insert into mytable values(null, '张三', 28, '男', 1112334)");
	// 如果有限制唯一的值，注意在写入的时候会报错

	if($res) {
      	echo "新增成功";
	} else {
      	echo "新增失败";
	}
?>
```



---



## 2.0 用户管理案例

​	案例需求：

​		1，通过注册页面，上传用户信息

​		2，在用户列表中展示所有用户的信息



#### 创建对应的表格和表头


创建测试数据



#### 在首页展示用户信息

​	1，使用写好的结构和样式

​	2，将html页面改造成php文件

​	3，通过php代码，获取数据

##### 步骤1：封装查询操作

​	新建common.js文件，处理查询封装

```php
<?php
  	// 封装查询操作
  	function getData($sql) {
  		// 创建数据库连接
      	$conn = mysqli_connect("localhost", "host", "host", "heima");
  		mysqli_set_chartset($conn, "utf8");
  		// 判断连接是否成功
  		if(!$conn) {
          	die("数据库连接失败")
  		}
  		// 执行sql语句
  		$res = mysqli_query($conn, $sql);
  		// !!!! 这里替代了原始直接在页面头部打印的方式
  		$returnVal = "";
  		if(!$res) {
          	$returnVal =  "查询失败， 难道查询姿势不正确 ?";
  		} else if (mysqli_num_rows($res) == 0) {
          	$returnVal =  "数据集是空的o";
  		} else {
          	// 获取读取的信息
			while($arr = mysqli_fetch_assoc($res)) {
              	$result[] = $arr;
			}
          	// 断开数据库连接
          	mysqli_close($conn);
          	// 返回最终的数据
          	return $result;
  		}
  		// 就算读取失败也需要关闭
  		mysqli_close($conn);
  		return $returnVal;
  	}
  
?>
```



##### 步骤2：引入封装查询模块


```php
<?php
  	// 引入封装的查询模块
  	include "common.php";
	// 调用查询的方法
  	$res = getData("select id,name,photo,gender,birthday from userInfo");
	
	// 这里$res是当前的函数的返回值，函数内部也会有一些打印值，容易误导;
	
?>
```



##### 步骤3：修改html结构

​	删除默认“死”的数据，开始php模块

```php
<?php
  	// 判断是不是数组，是数组就遍历，不是数组就输出值
	if(is_array($res)) {
      	// 遍历实现数据
	} else {
      	// 没有tr和td，所以去外面了
      	// echo $res;
      	echo "<tr><td colspan='6'>".$res."</td></tr>";
	}
?>
```



##### 步骤4：遍历生成数据

```php
<?php
  	...
  	// 处理if中的数据
  	if(is_array($res) {
      	foreach($res as $key => $value) {
?>
  			<tr>
  				<th scope="row"> <?php echo $value["id"] ?> </th>
  				<td>
  					<img src=<?php echo $value["photo"] ?> class="rounded" alt=<?php echo $value["name"] ?> />
  				</td>
  				<td><?php echo $value["name"] ?></td>
  				<td><?php echo $value["gender"] ?></td>
  				<td><?php echo $value["birthday"] ?></td>
  				<td class="text-center">
  					<button class="btn btn-info btn-sm">编辑</button>
  					<button class="btn btn-danger btn-sm">删除</button>
  				</td>
  			</tr>  
<?php        
      	} else {
            echo "<tr><td colspan='6'>".$res."</td></tr>";
        }
  	}
?>
```



##### 步骤5：计算年龄

```php
<?php
  	// 1.0 获取原始的数据离1970-1-1间隔的秒数
  	$time1 = strtotime($value["birthday"]); // 可以获取指定日期参数距离原始1970-1-1所间隔的秒数
  	// 2.0 获取今天距离原始值的所间隔的秒数
	$time2 = time();
  	// 3.0 计算两个时间相关的秒数， 在转换为年龄
  	$age = ceil((time2 - time1) / 60 / 60 / 24 / 365); // 向上取整

	echo $age;
?>
```



#### 用户填写数据，后端录入

​	1，在原有的html上进行修改，改成php后缀名的文件

​	2，在头部开始判断

##### 在注册页进行验证操作

```php
<?php
  	function register() {
      	// 验证用户输入
      	if(!isset($_POST["name"]) || trim($_POST["name"]) == "") {
          	$GLOBALS["msg"] = "请输入用户名";
            return;
      	}
  		if(!isset($_POST["gender"]) || $_POST["gender"] == "-1") {
          	$GLOBALS["msg"] = "请选择性别";
            return;
      	}
  		if(!isset($_POST["birthday"]) || trim($_POST["birthday"]) == "") {
          	$GLOBALS["msg"] = "请选择日期";
            return;
      	}
  		// 判断用户是否成功选择了文件
  		if(!isset($_FILES) || $_FILES["img"]["error"] != 0) {
          	$GLOBALS["msg"] = "文件上传失败";
            return;
  		}
  
  	}
  
  	// 判断用户是否提交了post请求
  	if($_SERVER["REQUEST_METHOD"] == "POST") {
      	register();
  	}
?>
```



```php
<?php
  	// 根据查询全局中是否设置了当前变量
  	if(isset($GLOBALE["msg"]) && count($GLOBALE["msg"]) != 0) {
?>
  		<div class="alert alert-danger" role="alert"> <?php echo $GLOBALE["msg"] ?> </div> 
<?php    
  	}
?>
```



##### 收集用户信息

```php
<?php
  	// ...  上面为非空验证
    // 收集用户信息
    $name = $_POST["name"];
    $gender = $_POST["gender"];
    $birthday = $_POST["birthday"];
	// name   tmp_name   error
    // $img = "./asset/img/".$_FILES["img"]["name"];
	$img = "./asset/img/".uniqid().strrchr($_FILES["img"]["name"], ".");

    // 上传图片 > 如果用户选择了图片
    move_uploaded_file($_FILES["img"]["tmp_name"], $img);

    // 实现用户数据的添加 : 操作数据库
	
?>
```



在common.js中封装操作

```php
<?php
  	// 封装增加、删除和修改操作
  	function opt() {
      	// 创建数据库连接
      	$conn = mysqli_connect("localhost", "host", "host", "heima");
  		mysqli_set_chartset($conn, "utf8");
  		// 判断连接是否成功
  		if(!$conn) {
          	die("数据库连接失败")
  		}
  		// 执行sql语句  成功返回true  失败返回false
  		$res = mysqli_query($conn, $sql);
  		
  		// 关闭连接
  		mysqli_close($conn);
  		return $res;
  	}
  
?>
```



引入函数，操作数据

```php
<?php
  	include "common.php";

	// ... 接着上面的来写
	// 实现用户数据的添加 : 操作数据库
	//  !!!!!   一定要加引号
	$res = opt("insert into userInfo values(null,'$name','$img','$gender','$birthday')");
  	
	// 跳转到用户列表页
    header("Location:static.php");
?>
```



#### 删除和编辑



##### 改造按钮

​	将默认的button按钮改造为a标签，并且加入href的链接

​	新建del.php处理跳转的操作

```php
<?php
  	/*
  		<button class="btn btn-info btn-sm">编辑</button>
  		<button class="btn btn-danger btn-sm">删除</button>
  	*/
  	<a href="edit.php?id=<?php echo $value["id"] ?>" class="btn btn-info btn-sm">编辑</a>
  	<a href="del.php?id=<?php echo $value["id"] ?>" class="btn btn-danger btn-sm">删除</a>
  
?>
```



##### 删除操作

```php
<?php
  	include "common.php";
  	// 判断用户是否传入了id
  	if(isset($_GET["id"])) {
      	// 获取参数
  		$id = $_GET["id"];
      
      	// 生成sql语句
      	$sql = "delete from userInfo where id = '$id'";
      	// 调用函数执行sql语句
      	$res = opt($sql);
      	
      	// 刷新页面
      	if($res) {
          	header("Location:./static.php");
      	}
  	}
?>
```



##### 编辑操作

​	复制注册页面结构所有信息，存储为php文件

​	将标题改为编辑用户

```php
<?php
  	include "common.php";
  	// 1.0 显示默认数据
  	// 判断是否为get请求，是否获取到了id
  	if($_SERVER["REQUEST_METHOD"] == "GET" && isset($_GET["id"])) {
      	// 根据id号进行查询数据
      	$id = $_GET["id"];
      	// 创建sql语句
      	$sql = "select id,name,photo,gender,birthday from userInfo where id = '$id'";
      	// 因为传递了id条件，所以数组只会存储一条记录
      	$res = getData($sql)
         
        $value = $res[0];
  	} else if ($_SERVER["REQUEST_METHOD"] == "POST") {
      	// 2.0 实现编辑操作
      	// 调用函数方法
      	editUser()
  	}
  	
?>
```



​	根据获取到数据，注入到页面的表单中

```php
<form action="<?php echo $_SERVER['PHP_SELF'] ?>" method="post" enctype="multipart/form-data">
      <div class="form-group">
        <label for="name">姓名</label>
        <input type="text" class="form-control" id="name" name="name" value="<?php echo $value['name'] ?>">
      </div>
      <div class="form-group">
        <label for="gender">性别</label>
        <select class="form-control" id="gender" name="gender">
          <option value="-1">请选择性别</option>
          <option value="男" <?php echo $value['gender'] == "男" ? "selected" : ""; ?>>男</option>
          <option value="女" <?php echo $value['gender'] == "女" ? "selected" : ""; ?>>女</option>
        </select>
      </div>
      <div class="form-group">
        <label for="birthday">生日</label>
        <!-- date:年月日 -->
        <input type="date" class="form-control" id="birthday" name="birthday" value=<?php echo $value['birthday'] ?>>
      </div>
      <div class="form-group">
        <label for="img">头像</label>
        <input type="file" class="form-control" id="img" name="img">
      </div>
      <button class="btn btn-primary">保存</button>
    </form>
```



​	**   表单中，如果type类型和数据库里面的数据类型不一样，则不显示



##### 更新数据

​	在form表单中，增加一个隐藏的input作为接收参数使用

```php
      <input type="hidden" name="id" value = "<?php echo $value["id"] ?>">
```



```php
<?php
  include './common.php';
  // 创建函数实现编辑操作
  function editUser(){
    // 验证用户数据
    if(!isset($_POST["name"]) || trim($_POST["name"]) === ''){
      $GLOBALS["error"] = '请输入用户名';
      return;
    }
    if(!isset($_POST["gender"]) || $_POST["gender"] === '-1'){
      $GLOBALS["error"] = '请选择性别';
      return;
    }
    
    // 收集用户数据
    $id = $_POST["id"];
    $name = $_POST["name"];
    $gender = $_POST["gender"];
    $birthday = $_POST["birthday"];
    if(!empty($_FILES["img"]["name"]) && $_FILES["img"]["error"] == 0){
        // 实现文件上传操作
        $fileName = "./assets/img/".uniqid().strrchr($_FILES["img"]["name"],".");
        move_uploaded_file($_FILES["img"]["tmp_name"],$fileName);
        // 重新为$photo赋值
        $photo = $fileName;
        // 创建sql语句，执行编辑操作
        $sql = "update userInfo set name = '$name',gender = '$gender',birthday = '$birthday',photo = '$photo' where id = '$id'";
    }else{
      $sql = "update userInfo set name = '$name',gender = '$gender',birthday = '$birthday' where id = '$id'";
    }
    $res = opt($sql);
    if($res){
      // 实现页面的跳转
      header("Location:./static.php");
    }
  }
?>
```

