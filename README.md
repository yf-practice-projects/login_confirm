## nextauth(auth.js)
nextjsで使われる認証ライブラリ


## 本リポジトリについて
NextJS × nextauthによるログイン処理の実装方法をapp directoryで検証するために作成。
また、ログイン認証画面ではtailwindcssを使用。
バージョンは下記の通り。
・"next-auth": "^4.24.6"
・"next": "14.1.0"

## 実装メモ
02/29 自環境検証

nextjs14を使用した実装方法はvercelから出ている[nextjs-learn-dashboad](https://nextjs.org/learn/dashboard-app)で実装方法が示されている。
next-auth@bataを推奨？としているが、nextjs14を使用するうえでバグった。
ただし、next-authのバージョンは4.25.5以上のV4を使用すると動作するもよう(これより下は未確認)。

next-authのプロバイダーを設定する際、nameプロパティは必須ではないもののidは設定しなければ動かなかった。
next-auth/reactモジュール内のsighIn関数の引数にcallbackを設定できるように見えるが機能せず。
もしかしたらserver actionなら動くのかな。