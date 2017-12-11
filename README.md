# npm-gulp
フロントエンドエンジニアによる、フロントエンドエンジニアのための依存関係を極力減らした開発環境を目指します。

[![GitHub issues](https://img.shields.io/github/issues/t--takai/front_gulp_framework.svg?style=flat)](https://github.com/t--takai/front_gulp_framework/issues)
[![GitHub forks](https://img.shields.io/github/forks/t--takai/front_gulp_framework.svg?style=flat)](https://github.com/t--takai/front_gulp_framework/network)
[![GitHub stars](https://img.shields.io/github/stars/t--takai/front_gulp_framework.svg?style=flat)](https://github.com/t--takai/front_gulp_framework/stargazers)
[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg?style=flat)](https://github.com/t--takai/front_gulp_framework/blob/master/LICENSE)

***

## Setup

1. install Xcode at AppStore
1. install Homebrew [How to install](https://brew.sh/index_ja.html)
1. `$ brew install node`
1. clone
```
$ git clone https://github.com/t--takai/front_gulp_framework.git
$ cd front_gulp_framework
$ npm install
```

## Running

```
$ npm test
```

## Browsing Any Device

```
[Browsersync] Access URLs:
 --------------------------------------
       Local: http://localhost:3000      # 仮想Winでは使えない
    External: http://10.27.165.223:3000  # 仮想Winで使える
 --------------------------------------
```

1. 環境構築
    1. `$ brew cask install ngrok`
    1. `$ ngrok` // ngrokが動くのか確認をするだけ
1. Macの外からでも閲覧できるURLを発行
    1. ※ローカルで起動しているページのポート番号を入れ起動する。
    1. `$ ngrok http 3000`

参考: [ngrokを使用してローカル環境を外部に公開する - Qiita](https://qiita.com/kitaro729/items/44214f9f81d3ebda58bd)

***

## Thanks & Resources

* Design philosophy
    * [MCSS - Multilayer CSS](https://operatino.github.io/MCSS/ja/)
    * [npm で依存もタスクも一元化する - Qiita](http://qiita.com/Jxck_/items/efaff21b977ddc782971)
    * [僕がnpm installに-gをつけないわけ - Qiita](https://qiita.com/Mic-U/items/cd456d6bea72937464f8)
* Role model
    * [tj/frontend-boilerplate](https://github.com/tj/frontend-boilerplate)
    * [h5bp/html5-boilerplate](https://github.com/h5bp/html5-boilerplate)
    * [nmihalyov/gulp-pure-start](https://github.com/nmihalyov/gulp-pure-start)
    * [minamarkham/sassy-starter](https://github.com/minamarkham/sassy-starter)
    * [bjankord/Style-Guide-Boilerplate](https://github.com/bjankord/Style-Guide-Boilerplate)
    * [mozilla-neutrino/neutrino-dev](https://github.com/mozilla-neutrino/neutrino-dev)
    * [vigetlabs/blendid](https://github.com/vigetlabs/blendid)
    * [kayac/kayac-html5-starter](https://github.com/kayac/kayac-html5-starter)
    * [zoxon/gulp-front](https://github.com/zoxon/gulp-front)
* Reference
    * [gulpjs/gulp](https://github.com/gulpjs/gulp/blob/master/docs/recipes/server-with-livereload-and-css-injection.md)
    * [pugjs/pug](https://github.com/pugjs/pug)