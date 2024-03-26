---
title: 05-php基础
icon: markdown
---

  ​
# MySQL简要札记

---

​	
$$
在学习过程中，一定要记住不要被知识点弄的眼花缭乱，要分清主次，划分重难点
$$

## 1.0 navicat的使用

​	关于使用命令行创建和操作数据库，这个不必要掌握，不必要给自己增加学习难度；

​	使用图形化软件来操作，更加直观和清晰，而且简单容易上手；



__离线激活__

​	安装好的软件，需要注册或者购买激活码，课程提供的是有激活的软件

​	需要在离线的状态下，打开激活软件，选中安装好的软件，点击打开即可



#### 图形软件的使用

​	*** 在打开软件进行操作的时候，一定要运行phpstudy软件，因为它内部集成了MySQL的服务



##### 创建数据库的连接




##### 设置连接的信息

​		连接名称没有特殊的限制（尽量不要中文），其他的信息不用改，密码默认是root




##### 打开连接






##### 新建数据库

​	确认新建完成

##### 打开数据库连接

​	右键打开连接，或者双击连接，当前数据库变为绿色亮起

​	在表的位置，右键新建表

##### 新建表


​	如果主键为id，在底下可以设置  __自动递增__



##### 创建数据

​	建立好表头之后，就可以开始添加具体的数据了


---



## 2.0 MySQL语句的基本操作 

​	

​	SQL语句是所有数据同通用的操作语言



#### 打开编辑面板

​	在当前面板可以打开编辑，输入执行的语句，查询到相关数据



##### 打开查询面板


##### 编辑查询语句

​	-- 双横线表示注释

​	常用的关键字如下

| 关键字      | 解释   |
| -------- | ---- |
| select * | 字段列表 |
| from     | 表列表  |
| where    | 条件   |
| and      | 多个条件 |


#### 查询

​	查询可以返回一个结果集，是一个列表

```sql
-- 查询在这张表里面的所有id列和name列
select id,name from mytable

-- 带条件的查询
select * from mytable where id = 3

-- 查询年龄小于20岁的
select * from mytable where age < 20

-- 查询年龄小于20岁，性别为女生
-- and or not
select * from mytable where age < 20 and gender = 0
```



#### 增加

​	insert  [into]  表名[(字段1， 字段2，...)]  values(值1，值2)

```sql
-- 表名后没有指定字段，那么必须设置对应数量的值，并且主键不能重复
insert into mytable values('lili', 30, 0) -- 没有id的值，所以报错

-- 如果有标识列，一般可以给null值，系统会自动生成
insert into mytable values(null, 'lili', 30, 0)

-- 指定需要添加数据的字段
insert into mytable(name, age, gender) values('lili', 30, 0)

-- 对于值为null的值，可以不写
insert into mytable(name) values("ok")

-- 非空字段需要赋值，否则系统也不会自动为其生成默认值
insert into mytable(age,gender) values(40, 1) -- 虽然可以，但是不建议漏掉非空字段

```



#### 修改

```sql
-- 修改的语法 update 表名  set 字段1 = 值1， 字段2 = 值2 ...
update mytable set age = age + 1 -- 会把所有的都改变

-- 带条件的写法,只会改变第5条
update mytable set age = age + 10 where id = 5

-- 同样支持  or  and  not

-- 修改多个内容
update mytable set age = age + 1,gender = 1 where id = 5
```



#### 删除

​	不要轻易删除内容！！！！

```sql
-- 删除语句的语法 delete [from] 表名 where 条件
-- 删除的操作不能还原，要删除的话，就需要提前备份
delete from mytable where id = 8

-- 同时删除多个
delete from mytable where id in(4,5)
```



#### 小结

​	==>  查询是返回受影响的内容

​	==>  增加、删除和修改是返回受影响的行数





## 3.0  常见的函数说明



总条数 count

```sql
-- 查询可以满足条件的记录数
select count(*) from mytable

-- 选择符合条件的记录数
select count(id) from mytable

-- 如果当前空值，不会对null值进行计算
```



最大值、最小值  max min

​	得到当前的那个值

```sql
-- max 获取最大值  min  获取最小值
select max(age) from mytable

-- 如果是字符，按照字符的ascll码来排序
```



平均值  avg

```sql
-- 一般都是数值
select svg(age) from mytable
```



排序 order by 

​	select * | 字段列表  form  表列表  where order by     asc 升序    desc   降序

```sql
select * from mytable

-- 降序
select * from mytable order by id desc

-- 按照name排序  a-z
select * from mytable order by name

-- null值会排在前面

-- 实现按照性别，再按照年龄
select * from mytable order by gender,age
```



获取指定范围内的数据

​	limit  获取指定的前n条记录   只有一个参数

```sql
-- 前面3条数据
select * from mytable limit 3

-- 后面五条
-- 先做降序，然后再去筛选，并且一定要先排序，再获取，不然会报错
select * from mytable order by id desc limit 5

-- 中间范围的记录   n 偏移量从0开始, m 能够获取的记录数
select * from mytable limit 2,2

-- 第2种写法，和上面的一样
select * from mytable limit 4 offset 2
```

​	制作分页

```sql
int pageSize = 10;
int pagecount = 1;

select * from mytable pageSize 4 offset (pagecount - 1） * pageSize
```



#### 多表查询

​	在数据中，防止重复存储数据，所以会把不同的数据放在不同的地方存储

```sql
-- 返回初始的数据，没有内部关联的数据
select * from student

-- 用户需要的是最终的结果
-- 1.0 采用from where的方式
select * from student,class where student.cid = class.classid  -- where后面的这个 = 表示判断

-- 简写
select studentId,studentName,age,gender,className from student,class where student.cid = class.classid 

-- 2.0  join 和 inner join都是一样的   on和where的意思也是差不多的
select * from student inner join class on student.cid = class.classid


-- left join   如果对应不上的时候，自动让对应的值为空   right join 与之相反
select * from student left join class on student.cid = class.classid
```


---



## 4.0 PHP建立数据库连接



#### 建立与服务器的连接

```php
<?php
  	// 设置主机，用户名，密码，想操作的数据库
  	// 这个函数会自动打开连接
  	// 如果连接失败，返回false   如果连接成功就返回一个连接对象
  	$conn = mysqli_connect("localhost", "root", "root", "mybase");

	var_dump($conn); // 出来一堆东西证明连接成功
	
	// 假如出错了，错误信息会给详细的提示
	

	if(!$conn) {
      	// echo "连接失败";
      	// return;
      	die("连接失败");
      	// exit();
	} else {
      	echo "连接成功";
	}
	
	echo "这是连接之后的代码，如果有错误，将不会执行到这里";
?>
```



解决乱码的问题

```php
<?php
	// 有效
  	header("Content-Type:text/html;chartset=utf-8");
  	
	// 无效
  	// 为了保证服务器编码，与当前php编码保持一致，可以设置服务器返回数据的编码
  	mysqli_set_chartset($conn, "utf8");
?>
```





#### PHP操作sql增加、修改和删除

```php
<?php
  	// 新增数据 创建sql语句
  	$sql = "insert into mytable value(null, '张三', 30, 1)";
  
	// 执行sql语句  mysqli_query(连接对象， sql语句)
	// 有返回值
	$result = mysqli_query($conn, sql);

	var_dump($result); // bool(true)    |    bool(false)

	if($result) {
      	echo "新增成功";
	} else {
      	echo "新增失败<br>";
      	
      	// 输出具体的报错信息
      	echo mysqli_error($conn); 
	}

	// 获取更加详细的信息
	
?>
```



修改

```php
<?php
  
  	// 修改操作
  	$sql = "update mytable set age = 20 where id = 3";
  
	$result = mysqli_query($conn, sql);

	if($result) {
      	echo "修改功";
	} else {
      	echo "修改失败<br>";
      
      	// 输出具体的报错信息
      	echo mysqli_error($conn); 
	}
?>
```



删除

```php
<?php
  
  	// 修改操作
  	$sql = "delete from mytable where id = 4";
  
	$result = mysqli_query($conn, sql);

	if($result) {
      	echo "删除成功";
	} else {
      	echo "删除失败<br>";
      
      	// 输出具体的报错信息
      	echo mysqli_error($conn); 
	}
?>
```





#### php查询结果集

```php
<?php
  	// 1.0 设置响应头
  	header("Content-Type:text/html;chartset=utf-8");

	// 2.0 创建数据库连接
	$conn = mysqli_connect("localhost", "root", "root", "mybase");

	// 3.0 设置编码
	// mysqli_set_chartset($conn, "utf8");
	mysqli_query($conn, "set name as utf-8"); // 设置编码格式为utf-8

	if(!$conn) {
      	die("连接失败");
	} 

	// 4.0 创建sql语句
	$sql = "select * from mytable";
	
	// 5.0 执行sql语句   
	$result = mysqli_query($conn, $sql);

	var_dump($result);  // 获取到大致信息，几行几列，但是并不是具体的数据
	
?>
```



##### 判断当前返回结果集的状态

```php
<?php
  	if(!$result) {
      	die("查询失败");
	} else if(mysqli_num_rows($result) == 0) {
      	die("结果集为空");
	} else {
      	var_dump($result);
	}
  	
  	// 1, 如果查询失败， 会返回false
  	// 2，如果成功，有结果集，但是没有数据，     有结果集有数据
  	// !!!! 判断当前结果集中是否有数据
  	// mysqli_num_rows($result);
  	
?>
```



##### 展示结果集中的内容

​	获取数据的函数：

```php
<?php
  	// 1.0   mysqli_fetch_array
  	$arr = mysqli_fetch_array($result);
	
  	print_r($arr); // 关联数组和索引数组，两份
	// 数据以数组的方式返回
 
  	// 2.0   mysqli_fetch_assoc
	$arr1 = mysqli_fetch_assoc($result);

	print_r($arr1); // 关联数组
	// 数据以数组的方式返回
  
  	// 3.0   mysqli_fetch_row
	$arr2 = mysqli_fetch_row($result);

	print_r($arr2); // 索引数组
	// 数据以数组的方式返回
?>
```



```php
<?php
  	// mysqli_fetch_array(结果集资源， 返回内容的形式 MYSQL_ASSOC | MYSQL_NUM | MYSQL_BOTH); 常量
  	// 根据传值的不同，得到不同的结果，默认是both	
?>
```



##### 读取全部的数据

```php
<?php
  	// 上面的函数都只会读取一行数据，但是在读取完毕之后，会将指针指向下一行 
  	// 如果需要获取多行，则需要重复调用相同的方法，如果没有数据，则返回NULL
  	
  	// ！！！！而数据到底有多少，则未可以，所以循环的话并不知道何时停止，while循环就比较适合
  	while ($arr = mysqli_fetch_array($result, MYSQL_ASSOC);) {
      	$res[] = $arr;
  	}
  	
	print_r($res);
?>
```



| 方法                                       | 说明                |
| ---------------------------------------- | ----------------- |
| mysqli_connect("主机名称", "用户名"， “密码”， “数据库名”) | php连接MYSQL数据库     |
| mysqli_set_charset(连接对象，“utf8”);         | 设置数据库和服务器编码相同     |
| mysqli_query($conn, "set name as utf-8"); | 设置数据库和服务器编码的另一种方式 |
| mysqli_query(连接对象，sql语句)                 | 执行sql语句           |
| mysqli_num_rows(结果集[执行完sql语句之后的值])       | 返回结果集的条数          |
| mysqli_fetch_array(结果集，MYSQL_ASSOC)      | 提取查询语句之后的内容，需要循环  |
| mysqli_fetch_assoc(结果集)                  | 提取到查询语句之后的关联数组    |
| mysqli_fetch_row(结果集)                    | 提取到查询语句之后的索引数组    |
| mysqli_error(连接对象)                       | 返回具体的连接错误信息       |
| die(”提示错误信息“)                            | 终止操作，提示错误信息       |



