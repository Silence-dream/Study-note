---
tags : 
- http
- http cache-control
---

 `**Cache-Control**` 通用消息头字段，被用于在http请求和响应中，通过指定指令来实现缓存机制。缓存指令是单向的，这意味着在请求中设置的指令，不一定被包含在响应中。

## 语法

指令格式具有以下有效规则：

-   不区分大小写，但建议使用小写。
-   多个指令以逗号分隔。
-   具有可选参数，可以用令牌或者带引号的字符串语法。


## 缓存请求指令
客户端可以在HTTP请求中使用的标准 Cache-Control 指令。

```
Cache-Control: max-age=<seconds>
Cache-Control: max-stale[=<seconds>]
Cache-Control: min-fresh=<seconds>
Cache-control: no-cache
Cache-control: no-store
Cache-control: no-transform
Cache-control: only-if-cached
```

## 缓存响应指令
服务器可以在响应中使用的标准 Cache-Control 指令。

```
Cache-control: must-revalidate
Cache-control: no-cache
Cache-control: no-store
Cache-control: no-transform
Cache-control: public
Cache-control: private
Cache-control: proxy-revalidate
Cache-Control: max-age=<seconds>
Cache-control: s-maxage=<seconds>
```


## 指令

`public`

表明响应可以被任何对象（包括：发送请求的客户端，代理服务器，等等）缓存，即使是通常不可缓存的内容。（例如：1.该响应没有`max-age`指令或`Expires`消息头；2. 该响应对应的请求方法是 [POST](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Methods/POST) 。）

`private`

表明响应只能被单个用户缓存，不能作为共享缓存（即代理服务器不能缓存它）。私有缓存可以缓存响应内容，比如：对应用户的本地浏览器。

`no-cache`

在发布缓存副本之前，强制要求缓存把请求提交给原始服务器进行验证(协商缓存验证)。

`no-store`

缓存不应存储有关客户端请求或服务器响应的任何内容，即不使用任何缓存。



`max-age=<seconds>`

设置缓存存储的最大周期，超过这个时间缓存被认为过期(单位秒)。与`Expires`相反，时间是相对于请求的时间。

`s-maxage=<seconds>`

覆盖`max-age`或者`Expires`头，但是仅适用于共享缓存(比如各个代理)，私有缓存会忽略它。

`max-stale[=<seconds>]`

表明客户端愿意接收一个已经过期的资源。可以设置一个可选的秒数，表示响应不能已经过时超过该给定的时间。

`min-fresh=<seconds>`

表示客户端希望获取一个能在指定的秒数内保持其最新状态的响应。

`stale-while-revalidate=<seconds>` Experimental

表明客户端愿意接受陈旧的响应，同时在后台异步检查新的响应。秒值指示客户愿意接受陈旧响应的时间长度。

`stale-if-error=<seconds>` Experimental

表示如果新的检查失败，则客户愿意接受陈旧的响应。秒数值表示客户在初始到期后愿意接受陈旧响应的时间。

`must-revalidate`

一旦资源过期（比如已经超过`max-age`），在成功向原始服务器验证之前，缓存不能用该资源响应后续请求。

`proxy-revalidate`

与must-revalidate作用相同，但它仅适用于共享缓存（例如代理），并被私有缓存忽略。

`immutable` Experimental

表示响应正文不会随时间而改变。资源（如果未过期）在服务器上不发生改变，因此客户端不应发送重新验证请求头（例如`If-None-Match`或I`f-Modified-Since`）来检查更新，即使用户显式地刷新页面。在Firefox中，immutable只能被用在 `https://` transactions. 有关更多信息，请参阅[这里](http://bitsup.blogspot.de/2016/05/cache-control-immutable.html)。


`no-transform`

不得对资源进行转换或转变。`Content-Encoding`、`Content-Range`、`Content-Type`等HTTP头不能由代理修改。例如，非透明代理或者如[Google's Light Mode](https://support.google.com/webmasters/answer/6211428?hl=en)可能对图像格式进行转换，以便节省缓存空间或者减少缓慢链路上的流量。`no-transform`指令不允许这样做。

`only-if-cached`

表明客户端只接受已缓存的响应，并且不要向原始服务器检查是否有更新的拷贝。