## Bug Meet
刚生成项目的时候可能会遇到一个文件找不到的`bug`,查看了`github`上面的[issue](https://github.com/nuxt-community/koa-template/issues/44#issuecomment-460150842)

按照其给出的解答对相应的库升级之后即可。
```js
npm install backpack-core@0.8.3 eslint@3.19.0 eslint-loader@2.1.1 -D
```

然后这个项目就能够使用`npm run dev`正常启动了。

## Notes
相关的配置都可以在`nuxt.config.js`里面去进行配置,然后想要更多的配置文件的话，可以去参考一下`nuxt.js`的[文档](https://nuxtjs.org/api/configuration-build)就可以了.