Phoenix + LiveView + tailwind から
typescript + nextjs + tailwind に

理由
- 保守が重くなってきた。

### 学ぶ
https://nextjs.org/learn/foundations/about-nextjs

命令型アプローチから宣言型アプローチへの変革
- 命令型
	- 命令を記述するイメージ
- 宣言型
	- 宣言をすると命令が走るイメージ

リアクトコア

```js
<script src="https://unpkg.com/react@17/umd/react.development.js"></script>
<script src="https://unpkg.com/react-dom@17/umd/react-dom.development.js"></script>
```

JSX
ルールがあるがほとんどHTML出かけるJSの文法
https://beta.reactjs.org/learn/writing-markup-with-jsx#the-rules-of-jsx
- ブラウザが読むにはコンパイラが必要
```js
<script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
```
Babelを使用
- 新しいコードを古くするやつ
- https://qiita.com/mzmz__02/items/e6fbe5e30cc3fd13788f
```js
<script type=text/jsx></script>
```

### Reactの概念

コンポーネント
- モジュール(機能)単位で管理する
- 関数で記述する
- UIを返す
- 複数の場合は`<>`で囲む
- functionはキャメルケース
- < /> で囲む
```js
function Header() {
  return <h1>Develop. Preview. Ship. 🚀</h1>;
}

ReactDOM.render(<Header />, app);
```
Props
- 引数
-  受け取ったときは{props}で来る
	- {} オブジェクトらしい
	- {引数} で受けてアンパックする
	- {変数} で変数として使用する
繰り返し
- array.map(() => ())でOK
- これをやる場合はkeyが必要になる
```js
 {names.map((name) => (
          <li key={name}>{name}</li>
        ))}
```
ボタンなどとの結び付け
- `onClick`などの用意されている関数で行う
- hookで管理されている状態を受け渡す
	- `useState()`でHook渡しを行える
		- useStateで状態を持てる？
		```js
		const [like, setLikes] = React.useState(0)
		```
		[状態, 状態更新関数]と持つことができる
		- 状態更新を利用して値をセットすることができる
		- `setLikes(like + 1)``
		- setLikesを使用する関数はコンポーネント内に持つデザインになっている。


### NEXT.JS
メインコンポーネントとして指定する
- export default をfunctionの前につけてあげる
```js
export default function HomePage() {}
```
pagesのindexがページ構造を管理している
- index.jsでないと読み込まれないため注意