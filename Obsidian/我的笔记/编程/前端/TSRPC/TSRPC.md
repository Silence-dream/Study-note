---
tags : 
- TSPRC
---
Ptl是Protocol的缩写

## TSRPC 是什么

引用[官网](https://tsrpc.cn/docs/introduction.html)的语句

> TSRPC 是专为 TypeScript 设计的 RPC 框架，经千万级用户验证。  
> 适用于 HTTP API、WebSocket 实时应用、NodeJS 微服务等场景。

一直以来，前后端通信都存在着一些痛点。

1. 依赖文档或第三方语言定义协议，沟通成本高，维护难度大。
2. 缺乏类型安全，前后端联调常被拼写等低级错误困扰，甚至埋下安全隐患。
3. JSON 支持的类型有限，发送二进制数据 `ArrayBuffer` 、处理 `Date` `ObjectId` 等类型转换都很麻烦。
4. 请求和响应都是明文，极易抓包破解，字符串加密方式有限，二进制序列化门槛太高。
5. 实时类业务增多，但 HTTP、WebSocket 技术框架各异，一套代码难以兼容。
6. Serverless 日渐成熟，容器、云函数各有千秋，但不同云厂商标准不一，一套代码难以兼容。
7. 前端平台日趋多样，浏览器、小程序…… 网络请求各有差异，一套代码难以兼容。
	1. 所有的现存框架，都无法支持 TypeScript 的高级类型，如 [Union Types](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#union-types)、[Intersection Types](https://www.typescriptlang.org/docs/handbook/2/objects.html#intersection-types)、[Utility Types](https://www.typescriptlang.org/docs/handbook/utility-types.html) 等。

## 特性

TSRPC 具有一些前所未有的强大特性，给您带来极致的开发体验。

- 🥤 **原汁原味 TypeScript**
    - 直接基于 TypeScript 的 `type` 和 `interface` 定义协议
    - 无需装饰器、注解、第三方语言
    - 支持 TypeScript 高级类型，如 [Union Types](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#union-types)、[Intersection Types](https://www.typescriptlang.org/docs/handbook/2/objects.html#intersection-types)、[Utility Types](https://www.typescriptlang.org/docs/handbook/utility-types.html) 等。
- 👓 **类型安全**
    - 开发时全程代码提示，避免低级错误
    - 运行时自动参数校验，总是类型安全
- 🔥 **更强的 JSON**
    - 支持在 JSON 中传输更多数据类型
    - 例如 `ArrayBuffer`、`Date`、`ObjectId`
- 💾 **支持二进制传输**
    - 可将 TypeScript 类型直接编码为二进制
    - 包体更小、更易加密、无需 Protobuf
- 🔥 **支持 Serverless**
    - 同时支持 Serverless 云函数和容器化部署
    - 兼容阿里云、腾讯云、AWS 标准
- 🔥 **一键生成接口文档**
    - 一键生成多种格式的接口文档
    - 例如 Swagger / OpenAPI / Markdown
- ☎ **多协议**
    - 同时支持 HTTP / WebSocket
    - 传输协议无关的架构，轻松扩展至任意信道
- 💻 **跨平台**
    - 浏览器 / 小程序 / App / NodeJS 多平台支持
    - 兼容 Restful API 调用，兼容 Internet Explorer 10
- ⚡️ **高性能**
    - 单核单进程 5000+ QPS 吞吐量（测试于 Macbook Air M1, 2020)
    - 经过数个千万用户级项目验证，单元测试、压力测试、DevOps 方案齐备





笔记暂存b战
https://www.bilibili.com/video/BV1hM4y1u7B4/?spm_id_from=..search-card.all.click&vd_source=f98b43858b5992ffd82a2a5cf18fe873