import LinkIcon from "@mui/icons-material/Link"
import { MdExtension as ExtensionIcon } from "react-icons/md"
import {
  SiBun as BunIcon,
  SiCodepen as CodepenIcon,
  SiCodesandbox as CodesandboxIcon,
  SiDeno as DenoIcon,
  SiDocker as DockerIcon,
  SiGithub as GitHubIcon,
  SiGo as GoIcon,
  SiJavascript as JavaScriptIcon,
  SiJquery as JqueryIcon,
  SiJsr as JsrIcon,
  SiMinio as MinIOIcon,
  SiMui as MuiIcon,
  SiNodedotjs as NodeIcon,
  SiNpm as NpmIcon,
  SiPython as PythonIcon,
  SiQiita as QiitaIcon,
  SiRubyonrails as RailsIcon,
  SiReact as ReactIcon,
  SiRedux as ReduxIcon,
  SiRuby as RubyIcon,
  SiRust as RustIcon,
  SiTypescript as TypeScriptIcon,
  SiVim as VimIcon,
  SiZenn as ZennIcon,
  SiZsh as ZshIcon,
} from "react-icons/si"
import { SlNote as NoteIcon } from "react-icons/sl"
import { OmitByValue, PickByValue, entries, keys } from "./util"

export const contentsTagLogo = {
  axum: { type: "skill", description: "RustWebフレームワーク" },
  bash: { type: "skill", description: "シェルスクリプト言語" },
  Bun: {
    logo: { icon: <BunIcon />, color: "#f3e8b8", backgroundColor: "#000" },
    type: "skill",
    description: "JavaScriptランタイム",
  },
  Chevrotain: { type: "skill", description: "パーサービルダー" },
  Deno: {
    logo: { icon: <DenoIcon />, color: "#000000" },
    type: "skill",
    description: "JavaScriptランタイム",
  },
  Docker: {
    logo: { icon: <DockerIcon />, color: "#2496ed" },
    type: "skill",
    description: "コンテナ化技術",
  },
  Go: {
    logo: { icon: <GoIcon />, color: "#00acd7" },
    type: "skill",
    description: "システムプログラミング言語",
  },
  JavaScript: {
    logo: { icon: <JavaScriptIcon />, color: "#f7df1e" },
    type: "skill",
    description: "Webプログラミング言語",
  },
  jQuery: {
    logo: { icon: <JqueryIcon />, color: "#0865a7" },
    type: "skill",
    description: "DOM操作ライブラリ",
  },
  minIO: {
    logo: { icon: <MinIOIcon />, color: "#c72745" },
    type: "skill",
    description: "オブジェクトストレージサーバ",
  },
  MUI: {
    logo: { icon: <MuiIcon />, color: "#0081cb" },
    type: "skill",
    description: "UIコンポーネントライブラリ",
  },
  "Node.js": {
    logo: { icon: <NodeIcon />, color: "#68a063" },
    type: "skill",
    description: "JavaScriptランタイム",
  },
  Python: {
    logo: { icon: <PythonIcon />, color: "#306998" },
    type: "skill",
    description: "汎用プログラミング言語",
  },
  Rails: {
    logo: { icon: <RailsIcon />, color: "#cc0000" },
    type: "skill",
    description: "Ruby用Webフレームワーク",
  },
  React: {
    logo: { icon: <ReactIcon />, color: "#61dafb" },
    type: "skill",
    description: "UI開発ライブラリ",
  },
  Redux: {
    logo: { icon: <ReduxIcon />, color: "#764abc" },
    type: "skill",
    description: "React用状態管理ライブラリ",
  },
  Ruby: {
    logo: { icon: <RubyIcon />, color: "#cc342d" },
    type: "skill",
    description: "汎用プログラミング言語",
  },
  Rust: {
    logo: { icon: <RustIcon />, color: "#000000" },
    type: "skill",
    description: "システムプログラミング言語",
  },
  "Peg.js/Peggy": { type: "skill", description: "パーサージェネレーター" },
  SQL: { type: "skill", description: "DB操作" },
  vim: {
    logo: { icon: <VimIcon />, color: "#019733" },
    type: "skill",
    description: "テキストエディタ",
  },
  zsh: {
    logo: { icon: <ZshIcon />, color: "#e84e0e" },
    type: "skill",
    description: "シェルスクリプト言語",
  },
  TextAliveAppAPI: { type: "skill", description: "歌詞連動アニメーションAPI" },
  TypeScript: {
    logo: { icon: <TypeScriptIcon />, color: "#3178c6" },
    type: "skill",
    description: "JavaScriptの型付け拡張",
  },
  構文解析: { type: "skill", description: "テキストの構造化" },
  画像処理: { type: "skill", description: "" },
  並列処理: { type: "skill", description: "" },
  アプリ: { type: "genre", description: "" },
  モジュール: {
    type: "genre",
    description: "アプリに組み込む頒布可能な状態の部分要素",
  },
  CUIツール: { type: "genre", description: "" },
  スクリプト: { type: "genre", description: "" },
  設定ファイル: { type: "genre", description: "" },
  ブラウザ拡張機能: { type: "genre", description: "" },
  esolang: { type: "genre", description: "難解プログラミング言語" },
  インターン: { type: "state", description: "" },
  課題: { type: "state", description: "" },
  研究用: { type: "state", description: "" },
  自分用: { type: "state", description: "" },
  コンテスト向け: { type: "state", description: "" },
  個人開発: { type: "state", description: "" },
  チーム開発: { type: "state", description: "" },
  "フォーク・コントリビュート": { type: "state", description: "" },
  パッケージ配布有: {
    logo: { icon: <NpmIcon />, color: "#cb3837" },
    type: "auto",
    description: "deno/x・jsr・npmを経由して利用可能",
  },
  リポジトリ有: {
    logo: { icon: <GitHubIcon />, color: "#181717" },
    type: "auto",
    description: "リポジトリ公開中",
  },
  記事有: {
    logo: { icon: <NoteIcon />, color: "#000000" },
    type: "auto",
    description: "記事公開中",
  },
  デモ有: {
    logo: { icon: <CodepenIcon />, color: "#000000" },
    type: "auto",
    description: "デモ公開中",
  },
} as const satisfies Record<
  string,
  {
    logo?: { icon: JSX.Element; color: string; backgroundColor?: string }
    type: "skill" | "auto" | "state" | "genre"
    description: string
  }
>

export const contentsTags = keys(contentsTagLogo)
const contentsTagEntries = entries(contentsTagLogo)
type ContentsTagManual = keyof OmitByValue<
  typeof contentsTagLogo,
  { type: "auto" }
>
type ContentsTagAuto = keyof PickByValue<
  typeof contentsTagLogo,
  { type: "auto" }
>
export type ContentsTag = ContentsTagAuto | ContentsTagManual
export const contentsTagsTree = {
  技術: contentsTagEntries
    .filter((x) => x[1].type === "skill")
    .map((x) => x[0]),
  ジャンル: contentsTagEntries
    .filter((x) => x[1].type === "genre")
    .map((x) => x[0]),
  開発形態: contentsTagEntries
    .filter((x) => x[1].type === "state")
    .map((x) => x[0]),
  公開状況: contentsTagEntries
    .filter((x) => x[1].type === "auto")
    .map((x) => x[0]),
} as const satisfies Record<string, ContentsTag[]>

export const linkTypes = {
  deno: {
    message: "deno/x",
    icon: <DenoIcon />,
    title: "deno.land/x",
    domain: ["deno.land"],
  },
  jsr: { message: "jsr", icon: <JsrIcon />, title: "JSR", domain: ["jsr.io"] },
  npm: {
    message: "npm",
    icon: <NpmIcon />,
    title: "npm package",
    domain: ["npmjs.com"],
  },
  extension: {
    message: "導入",
    icon: <ExtensionIcon />,
    title: "ブラウザ拡張機能",
    domain: ["chromewebstore.google.com"],
  },
  github: {
    message: "実装",
    icon: <GitHubIcon />,
    title: "GitHub",
    domain: ["github.com"],
  },
  note: {
    message: "記事",
    icon: <NoteIcon />,
    title: "Note",
    domain: ["note.com"],
  },
  qiita: {
    message: "記事",
    icon: <QiitaIcon />,
    title: "Qiita",
    domain: ["qiita.com"],
  },
  zenn: {
    message: "記事",
    icon: <ZennIcon />,
    title: "Zenn",
    domain: ["zenn.dev"],
  },
  codepen: {
    message: "デモ",
    icon: <CodepenIcon />,
    title: "CodePen",
    domain: ["codepen.io"],
  },
  codesandbox: {
    message: "デモ",
    icon: <CodesandboxIcon />,
    title: "CodeSandbox",
    domain: ["codesandbox.io"],
  },
  other: { message: "リンク", icon: <LinkIcon />, title: "リンク", domain: [] },
} as const satisfies Record<
  string,
  { message: string; icon: JSX.Element; title: string; domain: string[] }
>

export const linkType = keys(linkTypes)
export type LinkType = (typeof linkType)[number]

type LinkDetail = { url: string; type: LinkType; message?: string }

export type Source = {
  id: number
  title: string
  description: string
  date: string
  summary: string
  link?: LinkDetail[]
  img?: string
  tag: ContentsTag[]
  visible: boolean
  recent: boolean
  score?: 0 | 1 | 2 | 3 | 4 | 5
}

type SourceOmited = Omit<
  Source,
  "id" | "tag" | "link" | "visible" | "recent"
> & {
  tag: ContentsTagManual[]
  link?: (string | LinkDetail)[]
}

const sourcesOrigin: SourceOmited[] = [
  {
    title: "PKSHA Technology インターン選考",
    summary: "PKSHA Technology インターン選考",
    description:
      "PKSHA Technology インターン選考に参加しました。Maasチームの一員として、旧システムのリプレイス業務に参加しました。",
    date: "2023-12-31",
    tag: ["インターン", "Go"],
    score: 1,
  },
  {
    title: "freee株式会社サマーインターン",
    summary: "フロントエンド・バックエンドエンジニア(2週間)",
    description: "メンターと共に新規機能の実装に取り組んだ。",
    date: "2021-08-31",
    tag: ["インターン", "Ruby", "Rails", "React", "個人開発"],
    score: 1,
  },
  {
    title: "ゆめみ2023夏インターン",
    summary: "2023サーバサイドエンジニア(2週間)",
    description:
      "ゆめみのサマーインターンに参加しました。ほぼ初Rust、初Macという初めてだらけの環境でしたが、何とかへばりついてやっていけました。",
    date: "2023-09-09",
    tag: ["インターン", "Rust", "axum", "チーム開発"],
    link: ["https://note.com/gunseikpaseri/n/n4276746bf6b2"],
    score: 1,
  },
  {
    title: "perfect-ini-parser",
    summary: "空白付INIパーサー",
    description: `
iniのパースを行う際、改行・タグ・空白文字を無視することが多いが、空白文字を含めてパース・一部編集後も復元することができるパーサー。
ファイル変更時の差分を最小限にすることができる。
`,
    link: [
      "https://jsr.io/@gunseikpaseri/perfect-ini-parser",
      "https://github.com/GunseiKPaseri/perfect-ini-parser",
      "https://zenn.dev/gunseikpaseri/articles/parser-published-jsr",
    ],
    tag: [
      "Deno",
      "個人開発",
      "自分用",
      "JavaScript",
      "TypeScript",
      "構文解析",
      "Chevrotain",
      "モジュール",
    ],
    date: "2024-06-01",
    score: 2,
  },
  {
    title: "perfect-json-parser",
    summary: "空白付JSONパーサー",
    description: `
JSONのパースを行う際、改行・タグ・空白文字を無視することが多いが、空白文字を含めてパース・一部編集後も復元することができるパーサー。
ファイル変更時の差分を最小限にすることができる。
`,
    link: [
      "https://jsr.io/@gunseikpaseri/perfect-json-parser",
      "https://github.com/GunseiKPaseri/perfect-json-parser",
      "https://zenn.dev/gunseikpaseri/articles/parser-published-jsr",
    ],
    tag: [
      "Deno",
      "個人開発",
      "自分用",
      "JavaScript",
      "TypeScript",
      "構文解析",
      "Chevrotain",
      "モジュール",
    ],
    date: "2024-06-01",
    score: 2,
  },
  {
    title: "E2EENCLOUD（仮称）",
    summary: "クラウドストレージ風サーバアプリ",
    description: `
クラウドストレージのようにサーバにファイルをアップロード・保管できるアプリケーション。
ディレクトリ階層の他タグ付機能により柔軟なファイル管理を提供。
FIDO2やTOTP等の多要素認証に対応。
エンドツーエンド暗号化により、サーバには暗号化されたファイルのみが保存される。
フロントエンドはNode.jsを利用したSPA、バックエンドはDenoで開発したRestAPIサーバ。
バックエンドの動作にはminio・maildev・mysqlを利用しており、DockerComposeでセットアップできるようになっている。
現在は最低限ローカルで稼働させることができるが、デプロイに向け継続的に開発中。
趣味レベルでは最も力を入れている中心的なプロジェクトであり、各種開発ツールの試験的な利用等にも活用している。
2023年に技育展にて発表。
`,
    link: [
      {
        url: "https://docs.google.com/presentation/d/e/2PACX-1vSscrKP19Mm_AKqQygBGAlr0IyOS0Tkd8BJQkSiKCPxLk8d7CTkWd9vW6-U1Bycmw/pub?start=false&loop=false&delayms=3000",
        type: "other",
        message: "発表資料",
      },
      "https://github.com/GunseiKPaseri/e2eencloud",
    ],
    tag: [
      "React",
      "Redux",
      "個人開発",
      "コンテスト向け",
      "Deno",
      "Node.js",
      "JavaScript",
      "TypeScript",
      "Docker",
      "minIO",
      "SQL",
      "MUI",
      "アプリ",
    ],
    img: "./e2eencloud.png",
    date: "2023-08-12",
    score: 4,
  },
  {
    title: "LyricTyper",
    summary: "歌詞連動アニメーション",
    description:
      "音楽に合わせてタイミングよく歌詞が動くWebアプリケーション（リリックアプリ）を作ることができる、[TextAlive App API](https://developer.textalive.jp/)を用いて、歌詞をタイピングゲームのように表示して楽しむことができるアプリケーション。**第一回マジカルミライ プログラミングコンテストにて入選**。グラフィックライブラリを用いずにHTML要素とCSSによる変形で形を作っている。",
    link: [
      "https://github.com/GunseiKPaseri/textalive_lyrictyper",
      {
        url: "https://magicalmirai.com/2020/procon/entry.html#entry_no07",
        type: "other",
        message: "入選エントリー",
      },
    ],
    img: "./lyrictyper.png",
    tag: [
      "個人開発",
      "コンテスト向け",
      "Node.js",
      "JavaScript",
      "TypeScript",
      "TextAliveAppAPI",
      "アプリ",
    ],
    date: "2020-09-18",
    score: 4,
  },
  {
    title: "react-window-system",
    summary: "React用ウィンドウシステムライブラリ",
    description:
      "Reactでウィンドウシステムを実現するためのライブラリ。ウィンドウのドラッグ・リサイズ・最小化・最大化・閉じる等の操作を実現する。ウィンドウのZオーダーを保持するための機能も実装。ウィンドウの中身にReactコンポーネントを配置できる。スナップ機能（Windowsで左右にぶつけると半分最大化できたりするやつ）にも対応．",
    link: [
      "https://codesandbox.io/p/sandbox/react-window-system-demo-p75t2w?file=%2Fsrc%2FApp.tsx&from-embed=",
      "https://zenn.dev/gunseikpaseri/articles/react-window-system",
      "https://github.com/GunseiKPaseri/react-window-system",
      "https://www.npmjs.com/package/react-window-system",
    ],
    img: "./react-window-system.png",
    tag: [
      "個人開発",
      "自分用",
      "Bun",
      "React",
      "JavaScript",
      "TypeScript",
      "モジュール",
    ],
    date: "2024-02-05",
    score: 3,
  },
  {
    title: "TRIMMER",
    summary: "簡易テキスト余白・改行除去ツール",
    description:
      "PDFからコピペしたいとき、余分な改行・スペースと思しきものを自動で除去してくれる簡易的なツール。",
    link: ["https://codepen.io/GunseiKPaseri/full/WNdBoQe"],
    tag: ["個人開発", "自分用", "JavaScript", "アプリ"],
    date: "2021-12-31",
    score: 3,
  },
  {
    title: "promise_array_parallel",
    summary: "簡易並列処理ライブラリ",
    description:
      "与えられた複数の非同期関数について、完了後に並列数を制限しながら別の非同期関数を実行する等を簡易的に実現する。JavaScript標準のPromise.all等と使い心地が揃うようにしている。またGitHubActionを利用し、GitHub経由でリリースするとnpm及びdeno.landにおいて自動で公開されるようになっており、Node.js・Deno両環境で使うことができる。研究の際に欲しかった機能を改めてパッケージ化。",
    link: [
      "https://github.com/GunseiKPaseri/promise_array_parallel",
      "https://www.npmjs.com/package/promise_array_parallel",
      "https://deno.land/x/promise_array_parallel",
    ],
    tag: [
      "個人開発",
      "研究用",
      "Deno",
      "Node.js",
      "JavaScript",
      "TypeScript",
      "モジュール",
      "並列処理",
    ],
    date: "2022-11-01",
    score: 2,
  },
  {
    title: "gunseikpaseri.github.io",
    summary: "ポートフォリオサイト",
    description:
      "作者の実装したアプリケーション等をまとめたこのポートフォリオサイト。簡単なタグ検索機能が付属する。",
    link: [
      "https://github.com/GunseiKPaseri/gunseikpaseri.github.io",
      "https://gunseikpaseri.github.io/",
    ],
    tag: [
      "個人開発",
      "自分用",
      "JavaScript",
      "TypeScript",
      "React",
      "MUI",
      "アプリ",
    ],
    date: "2023-05-15",
    score: 2,
  },
  {
    title: "deno-session",
    summary: "Opine用セッション管理ライブラリ",
    description:
      "[Opine](https://deno.land/x/opine)用のセッション管理ライブラリ。既存のものが型解決するようにTypeScriptで書き直し。実装直後に[oak](https://deno.land/x/oak)でええやんで放置。",
    link: [
      "https://github.com/GunseiKPaseri/deno-session",
      "https://zenn.dev/gunseikpaseri/articles/deno-session-third-pirty",
    ],
    tag: [
      "個人開発",
      "自分用",
      "Deno",
      "TypeScript",
      "JavaScript",
      "モジュール",
    ],
    date: "2022-01-08",
  },
  {
    title: "tenjijs（仮称）",
    summary: "点字を利用した難解プログラミング言語",
    description:
      "点字でプログラムする難解プログラミング言語。[fizzbuzzを解くソースコードの例](https://github.com/GunseiKPaseri/tenjijs/blob/main/example_fizzbuzz2.tj)はこのようになっており、非常に読み取りずらい。[PEG.js](https://pegjs.org/)・[escodegen](https://github.com/estools/escodegen)を利用したAltJSで実現。vitestを用いて正常に実行できるかを確認できる。授業課題。文法の解説・プレイグラウンドを作成予定。",
    link: ["https://github.com/GunseiKPaseri/tenjijs"],
    img: "./tenjijs.png",
    tag: [
      "個人開発",
      "課題",
      "JavaScript",
      "TypeScript",
      "esolang",
      "構文解析",
      "Peg.js/Peggy",
    ],
    date: "2023-01-07",
    score: 2,
  },
  {
    title: "detect-chinese",
    summary: "文字種検出パッケージ",
    description:
      "文字列に「中国語にしか使われない漢字が含まれているかどうか」を調べることで、対象の文字列が「中国語かどうか」を判定する。特定の文字が含まれているかを正規表現で検出しているだけだが、Unicodeが5桁になる文字種を正常に判定できるようにする、連続する文字に関してハイフンで結ぶことでファイルサイズを削減する、等の修正を行いマージされた。",
    link: [
      "https://github.com/Neos21/detect-chinese",
      "https://www.npmjs.com/package/@neos21/detect-chinese",
    ],
    tag: [
      "フォーク・コントリビュート",
      "自分用",
      "TypeScript",
      "JavaScript",
      "モジュール",
    ],
    date: "2022-07-26",
  },
  {
    title: "imghashjs",
    summary: "類似画像検出ライブラリ",
    description:
      "imghashと呼ばれる画像要約技術で、類似した画像を列挙するために使用可能なライブラリです。ahash・dhash・mhash・phashに対応。ブラウザ・node.js両対応。python等の出力に揃えようと試みたまま止まっている。",
    link: [
      "https://github.com/GunseiKPaseri/imghashjs",
      "https://www.npmjs.com/package/imghashjs",
    ],
    tag: [
      "自分用",
      "JavaScript",
      "TypeScript",
      "モジュール",
      "Node.js",
      "画像処理",
    ],
    date: "2022-03-13",
    score: 1,
  },
  {
    title: "俺得拡張機能集",
    summary: "自分用アーミーナイフ",
    description: "QRコードの表示、文字化け変換、Unicodeの表示機能を有する",
    link: [
      "https://chromewebstore.google.com/detail/%E4%BF%BA%E5%BE%97%E6%8B%A1%E5%BC%B5%E6%A9%9F%E8%83%BD%E9%9B%86/ikaoaeddhkepbhjbfjjnpghheikmgmda",
    ],
    tag: ["自分用", "JavaScript", "アプリ", "ブラウザ拡張機能", "jQuery"],
    date: "2021-08-19",
  },
  {
    title: "PicPickDL",
    summary: "画像ダウンロードツール",
    description:
      "現在表示中のWebページ内に存在する画像を一覧表示・表示位置検知するブラウザ拡張機能。恐らく現在は正常に動作しない。",
    link: [
      "https://github.com/GunseiKPaseri/picpickdl",
      "https://chromewebstore.google.com/detail/picpickdl/blmeebooelogdcajapgeiooajiphebpp",
    ],
    img: "./picpickdl.jpg",
    tag: [
      "自分用",
      "アプリ",
      "JavaScript",
      "TypeScript",
      "ブラウザ拡張機能",
      "React",
      "MUI",
    ],
    date: "2021-09-27",
  },
  {
    title: "Mery構文ファイル",
    summary: "Mery用の色分けファイル",
    description:
      "テキストエディタMeryの色分け用の構文ファイルです。JavaScriptとCSS3を用意しています。",
    link: ["https://github.com/GunseiKPaseri/Mery_msy"],
    tag: ["自分用", "設定ファイル"],
    date: "2018-02-08",
    score: 2,
  },
  {
    title: "SimpleClock",
    summary: "時計アプリ",
    description:
      "簡単な時計アプリです。年越しとかゾロ目の時を眺めるのに使います。",
    link: [
      "https://github.com/GunseiKPaseri/SimpleClock",
      "https://gunseikpaseri.github.io/SimpleClock/",
    ],
    tag: ["自分用", "アプリ", "JavaScript", "jQuery"],
    img: "./simpleclock.png",
    date: "2017-10-07",
    score: 1,
  },
  {
    title: "カスタムbashプロンプト",
    summary: "自作のパンくずリスト型表示",
    description:
      "bashのプロンプトを自作しました。パンくずリスト型でディレクトリ情報・git情報・pyenv等を表示します。現在は[starship](https://starship.rs/ja-JP/)を利用しているので使用していないです。",
    link: ["https://qiita.com/GunseiKPaseri/items/e594c8e261905e3d0281"],
    tag: ["自分用", "bash", "スクリプト"],
    date: "2020-09-17",
  },
  {
    title: "sb.webscraping",
    summary: "ニコニコ大百科コメント欄スクレイピングスクリプト",
    description:
      "ニコニコ大百科記事の自動取得を行うスクリプト。ユーザ記事・動画記事を仕様変更やお絵カキコ・ピコカキコを取得できるよう[変更を加えた](https://github.com/GunseiKPaseri/sb.webscraping/compare/857aaa0...5453de5)。メンテナンスを行っていないため現在動作するか不明。",
    link: ["https://github.com/GunseiKPaseri/sb.webscraping/tree/somefix"],
    tag: ["フォーク・コントリビュート", "自分用", "Python", "CUIツール"],
    date: "2020-09-08",
  },
  {
    title: ".dotfiles",
    summary: "個人設定ファイル",
    description:
      "自分用の設定ファイルをまとめたリポジトリ。zshrc・vimrc・tmux.conf等が含まれる。",
    tag: ["自分用", "vim", "zsh", "設定ファイル", "スクリプト"],
    link: ["https://github.com/GunseiKPaseri/.dotfiles"],
    date: "2023-01-21",
  },
  {
    title: "自宅サーバ",
    summary: "自宅サーバ構築",
    description:
      "自宅サーバをRaspiで運用しています。dockerを利用しNextcloud・Jellyfin・Gitea等を利用中。公開できるものを用意したい。",
    tag: ["自分用", "Docker"],
    date: "2023-02-11",
  },
]

const linkDetailSuggester = (url: string): LinkDetail => {
  for (const [lt, lnk] of entries(linkTypes)) {
    if (
      lnk.domain.some(
        (x) =>
          url.startsWith(`https://${x}/`) ||
          url.startsWith(`https://www.${x}/`),
      )
    ) {
      return { url, type: lt }
    }
  }
  return { url, type: "other" }
}

const compareSource = (a: Source, b: Source) => {
  // pick up recent item
  if (a.recent && !b.recent) return -1
  if (!a.recent && b.recent) return 1

  // compare score
  if ((a.score ?? 0) > (b.score ?? 0)) return -1
  if ((a.score ?? 0) < (b.score ?? 0)) return 1

  // compare date
  return b.date.localeCompare(a.date)
}

export const sources = sourcesOrigin
  .map((s, i): Source => {
    const link: Source["link"] = s.link?.map((x) =>
      typeof x === "string" ? linkDetailSuggester(x) : x,
    )
    const tag: Source["tag"] = [
      ...s.tag,
      ...(link?.some(
        (x) => x.type === "deno" || x.type === "jsr" || x.type === "npm",
      )
        ? (["パッケージ配布有"] as const)
        : []),
      ...(link?.some((x) => x.type === "github")
        ? (["リポジトリ有"] as const)
        : []),
      ...(link?.some(
        (x) => x.type === "note" || x.type === "qiita" || x.type === "zenn",
      )
        ? (["記事有"] as const)
        : []),
      ...(link?.some((x) => x.type === "codepen" || x.type === "codesandbox")
        ? (["デモ有"] as const)
        : []),
    ]

    const date = new Date(s.date)
    // 半年以内の記事はnewマークを表示
    const recent = Date.now() - date.getTime() < 1000 * 60 * 60 * 24 * 180

    return {
      ...s,
      tag,
      link,
      visible: true,
      id: i,
      recent,
    } satisfies Source
  })
  .toSorted(compareSource)

const sourcesValue = Object.values(sources)
export const contentsTagCount = Object.fromEntries(
  contentsTags.map((tag): [ContentsTag, number] => {
    return [
      tag,
      sourcesValue.reduce((acc, x) => (x.tag.includes(tag) ? acc + 1 : acc), 0),
    ]
  }),
) as Record<ContentsTag, number>
