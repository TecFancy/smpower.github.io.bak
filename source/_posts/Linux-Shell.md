---
title: Linux Shell
date: 2018-10-12 17:09:30
tags:
---

## 终端打印 

### `echo`

`echo` 打印一行文本。调用该命令后会在被打印文本的最后添加一个换行符。

下面是打印一行字符串的示例：

``` shell
$ echo "Hello Shell\!"  # 使用双引号
Hello Shell!
```

``` shell
$ echo 'Hello Shell!'  # 使用单引号
Hello Shell!
```

``` shell
$ echo Hello Shell!  # 不使用引号
Hello Shell!
```

下面是打印带有变量的示例：

``` shell
$ name=Olive
$ echo "$name"  # 输出 Olive
$ echo '$name'  # 输出 Olive
$ echo $name    # 输出 Olive
```

### `printf`

`printf` 格式化打印数据。

``` shell
#!/bin/sh

format="%-5s %-10s %-4s\n"

printf "$format" No Name  Mark
printf "$format" 1  Olive 80.35
printf "$format" 2  Jack  90.00
printf "$format" 3  Jeff  77.56

exit 0
```
