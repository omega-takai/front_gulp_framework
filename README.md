# npm-gulp
フロントエンドエンジニアによる、フロントエンドエンジニアのための

依存関係を極力減らした開発環境を目指します。

## 参考リンク
[npm で依存もタスクも一元化する - Qiita](http://qiita.com/Jxck_/items/efaff21b977ddc782971)

[僕がnpm installに-gをつけないわけ - Qiita](https://qiita.com/Mic-U/items/cd456d6bea72937464f8)

[gulpjs/gulp](https://github.com/gulpjs/gulp/blob/master/docs/recipes/server-with-livereload-and-css-injection.md)

***

## USAGE

環境構築__Mac側

1. install Xcode at AppStore
1. install Homebrew [How to install](https://brew.sh/index_ja.html)
1. `$ brew install node`

```
$ npm doctor // npmの診断をしています。以下の環境で動作を確認できました。
Check                               Value                        Recommendation
npm ping                            OK
npm -v                              v5.5.1
node -v                             v8.9.1
npm config get registry             https://registry.npmjs.org/
which git                           /usr/bin/git
Perms check on cached files         ok
Perms check on global node_modules  ok
Perms check on local node_modules   ok
Verify cache contents               verified 933 tarballs
```


環境構築__リポジトリ側
```
$ git clone https://github.com/t--takai/front_gulp_framework.git
$ npm install
```

動作確認
```
$ npm test
```

`npm test` で発行されたURLは仮想Winでも使える

例は以下の通り

```
[Browsersync] Access URLs:
 --------------------------------------
       Local: http://localhost:3000      # 仮想Winでは使えない
    External: http://10.27.165.223:3000  # 仮想Winで使える
 --------------------------------------
```


### USAGE__外部デバイスでブラウジング

1. 環境構築
  1. `$ brew cask install ngrok`
  1. `$ ngrok` // ngrokが動くのか確認をするだけ
1. Macの外からでも閲覧できるURLを発行
  1. ※ローカルで起動しているページのポート番号を入れ起動する。
  1. `$ ngrok http 3000`

参考: [ngrokを使用してローカル環境を外部に公開する - Qiita](https://qiita.com/kitaro729/items/44214f9f81d3ebda58bd)

***

***

### npm-run-script
https://docs.npmjs.com/cli/run-script

Lifecycle scripts  
run無し実行できるコマンド
```
$ npm start
$ npm restart
$ npm stop
$ npm test
```

### npm
https://docs.npmjs.com/getting-started/what-is-npm

| command      | discription                                    |
| ------------ | ---------------------------------------------- |
| access       | Set access level on published packages         |
| adduser      | Add a registry user account                    |
| bin          | Display npm bin folder                         |
| bugs         | Bugs for a package in a web browser maybe      |
| c            | Manage the npm configuration files             |
| cache        | Manipulates packages cache                     |
| completion   | Tab Completion for npm                         |
| config       | Manage the npm configuration files             |
| ddp          | Reduce duplication                             |
| dedupe       | Reduce duplication                             |
| deprecate    | Deprecate a version of a package               |
| dist-tag     | Modify package distribution tags               |
| docs         | Docs for a package in a web browser maybe      |
| doctor       | Check your environments                        |
| edit         | Edit an installed package                      |
| explore      | Browse an installed package                    |
| get          |                                                |
| help         | Get help on npm                                |
| help-search  | Search npm help documentation                  |
| i            | Install a package                              |
| init         | Interactively create a package.json file       |
| install      | Install a package                              |
| install-test | package(s) and run tests                       |
| it           |                                                |
| link         | Symlink a package folder                       |
| list         | List installed packages                        |
| ln           | Symlink a package folder                       |
| login        |                                                |
| logout       | Log out of the registry                        |
| ls           | List installed packages                        |
| outdated     | Check for outdated packages                    |
| owner        | Manage package owners                          |
| pack         | Create a tarball from a package                |
| ping         | Ping npm registry                              |
| prefix       | Display prefix                                 |
| profile      | Change settings on your registry profile       |
| prune        | Remove extraneous packages                     |
| publish      | Publish a package                              |
| rb           | Rebuild a package                              |
| rebuild      | Rebuild a package                              |
| repo         | Open package repository page in the browser    |
| restart      | Restart a package                              |
| root         | Display npm root                               |
| run          | Run arbitrary package scripts                  |
| run-script   | Run arbitrary package scripts                  |
| s            | Search for packages                            |
| se           | Search for packages                            |
| search       | Search for packages                            |
| set          |                                                |
| shrinkwrap   | Lock down dependency versions for publication  |
| star         | Mark your favorite packages                    |
| stars        | View packages marked as favorites              |
| start        | Start a package                                |
| stop         | Stop a package                                 |
| t            | Test a package                                 |
| team         | Manage organization teams and team memberships |
| test         | Test a package                                 |
| token        | Manage your authentication tokens              |
| tst          | Test a package                                 |
| un           | Remove a package                               |
| uninstall    | Remove a package                               |
| unpublish    | Remove a package from the registry             |
| unstar       |                                                |
| up           | Update a package                               |
| update       | Update a package                               |
| v            | View registry info                             |
| version      | Bump a package version                         |
| view         | View registry info                             |
| whoami       | Display npm username                           |
