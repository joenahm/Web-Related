# JavaScript知识点

### 1. 基础
#### 1.1 基本语句

**JavaScript一般放在网页的`<script></script>`标签中间，也可以放在外部文件里（如script.js,1.1.1.js）。**

后半句话说明了放在外部js文件中的语句和`<script></script>`标签中的语句是同等级的，所以在外部js文件中的语句不应该加`<script></script>`标签。

**外部文件的引用方式是`<script src="文件地址"></script>`。**

比如当前目录中有一个"1.1.1.js",我可以通过`<script src="1.1.1.js"></script>`来引用它。这样它的内容就和写在当前网页中一样了。

**`<script></script>`标签可以放在`<head></head>`或`<body></body>`标签中，但是通常把它放在`<body></body>`标签的后边。**

比如：
```
<body>
	假装这里有很多HTML标签。。。
</body>
<script>
	alert("我叫李秀丽，我喜欢森健太郎！可是小野也喜欢他，我该怎么办呢？把森调职到中国来！(详见新标日初级上下册)");
</script>
```

这就是一个正常的`<script></script>`标签。对了，`alert()`是js的一个方法（就是函数），他能弹出一个小窗口，告诉你一点事情（也许有时你并不想知道）。

#### [点击去练一手！~](http://sjydzq.top/web/rensyuu.php?id=1509801967&type=js)