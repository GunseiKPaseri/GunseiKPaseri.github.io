import LinkIcon from "@mui/icons-material/Link"
import WorkIcon from "@mui/icons-material/Work"
import { BiPackage as PackageIcon } from "react-icons/bi"
import {
  FaCss3 as CSSIcon,
  FaRaspberryPi as RaspberryPiIcon,
  FaUbuntu as UbuntuIcon,
  FaUnity as UnityIcon,
} from "react-icons/fa"
import {
  MdSettingsApplications as ConfigIcon,
  MdExtension as ExtensionIcon,
} from "react-icons/md"
import {
  SiBun as BunIcon,
  SiCodepen as CodepenIcon,
  SiCodesandbox as CodesandboxIcon,
  SiDeno as DenoIcon,
  SiDocker as DockerIcon,
  SiExpress as ExpressIcon,
  SiFortinet as FortinetIcon,
  SiGithub as GitHubIcon,
  SiGo as GoIcon,
  SiGoogleappsscript as GoogleAppsScriptIcon,
  SiJavascript as JavaScriptIcon,
  SiJquery as JqueryIcon,
  SiJsr as JsrIcon,
  SiMinio as MinIOIcon,
  SiMui as MuiIcon,
  SiNodedotjs as NodeIcon,
  SiNpm as NpmIcon,
  SiPrisma as PrismaIcon,
  SiPython as PythonIcon,
  SiQiita as QiitaIcon,
  SiRubyonrails as RailsIcon,
  SiReact as ReactIcon,
  SiRedux as ReduxIcon,
  SiRuby as RubyIcon,
  SiRust as RustIcon,
  SiTailscale as TailscaleIcon,
  SiTensorflow as TensorflowIcon,
  SiTypescript as TypeScriptIcon,
  SiVim as VimIcon,
  SiWireshark as WiresharkIcon,
  SiZenn as ZennIcon,
  SiZsh as ZshIcon,
} from "react-icons/si"
import { SlNote as NoteIcon } from "react-icons/sl"
import {
  TbBrandCSharp as CSharpIcon,
  TbBrandCpp as CppIcon,
  TbSql as SQLIcon,
} from "react-icons/tb"
import { VscAzure as AzureIcon } from "react-icons/vsc"
import type {
  ContentsTagClassificationRecordConditions,
  ContentsTagRecordConditions,
  LinkItemRecordConditions,
  SourceOmited,
  TreeLogosConditions,
} from "./sourceMeta"

export const contentsTagClassificationRecord = {
  skill: {
    text: "スキル",
  },
  state: {
    text: "開発形態",
  },
  appstyle: {
    text: "使用形態",
  },
  publication: {
    text: "公開状況",
  },
  techStack: {
    text: "技術スタック",
    subTags: {
      hardware: {
        text: "ハードウェア・ネットワーク",
      },
      infra: {
        text: "基盤技術・OS",
      },
      language: {
        text: "言語",
      },
      webback: {
        text: "Webバックエンド",
      },
      webfront: {
        text: "Webフロントエンド",
      },
      module: {
        text: "API・モジュール",
      },
      tool: {
        text: "ツール",
      },
    },
  },
} as const satisfies ContentsTagClassificationRecordConditions

export type ContentsTagClassificationRecord =
  typeof contentsTagClassificationRecord

export const contentsTagRecord = {
  axum: { type: "webback", description: "Rust向けWebフレームワーク" },
  Azure: {
    logo: { icon: <AzureIcon />, color: "#0089d6" },
    type: "infra",
    description: "クラウドサービス",
  },
  bash: { type: "infra", description: "シェル・スクリプト言語" },
  Bun: {
    logo: { icon: <BunIcon />, color: "#f3e8b8", backgroundColor: "#000" },
    type: "webback",
    description: "JavaScriptランタイム",
  },
  "C++": {
    logo: { icon: <CppIcon />, color: "#00599c" },
    type: "language",
    description: "汎用プログラミング言語",
    score: 2,
  },
  Chevrotain: {
    type: "module",
    description: "JavaScript向けパーサービルドツール",
  },
  "C#": {
    logo: { icon: <CSharpIcon />, color: "#239120" },
    type: "language",
    description: "汎用プログラミング言語",
  },
  CSS: {
    logo: { icon: <CSSIcon />, color: "#264de4" },
    type: "language",
    description: "Webスタイルシート言語",
  },
  Deno: {
    logo: { icon: <DenoIcon />, color: "#000000" },
    type: "webback",
    description: "JavaScriptランタイム",
  },
  Docker: {
    logo: { icon: <DockerIcon />, color: "#2496ed" },
    type: "infra",
    description: "コンテナ化技術",
  },
  Express: {
    logo: { icon: <ExpressIcon />, color: "#000000" },
    type: "webback",
    description: "Node.js向けWebフレームワーク",
  },
  FortiGate: {
    logo: { icon: <FortinetIcon />, color: "#ee3124" },
    type: "hardware",
    description: "ファイアウォール・UTM装置",
  },
  GAS: {
    logo: { icon: <GoogleAppsScriptIcon />, color: "#f4b400" },
    type: "tool",
    description: "Google自動化言語・アプリケーションフレームワーク",
  },
  Go: {
    logo: { icon: <GoIcon />, color: "#00acd7" },
    type: "language",
    description: "システムプログラミング言語",
    score: 2,
  },
  JavaScript: {
    logo: { icon: <JavaScriptIcon />, color: "#f7df1e" },
    type: "language",
    description: "Webプログラミング言語",
    score: 4,
  },
  jQuery: {
    logo: { icon: <JqueryIcon />, color: "#0865a7" },
    type: "webfront",
    description: "JavaScript向けDOM操作ライブラリ",
  },
  minIO: {
    logo: { icon: <MinIOIcon />, color: "#c72745" },
    type: "webback",
    description: "オブジェクトストレージサーバ",
  },
  MUI: {
    logo: { icon: <MuiIcon />, color: "#0081cb" },
    type: "webfront",
    description: "React向けUIコンポーネントライブラリ",
  },
  "Node.js": {
    logo: { icon: <NodeIcon />, color: "#68a063" },
    type: "webback",
    description: "JavaScriptランタイム",
  },
  oak: {
    type: "webback",
    description: "Deno向けWebフレームワーク",
  },
  Prisma: {
    logo: { icon: <PrismaIcon />, color: "#000000" },
    type: "webback",
    description: "ORMフレームワーク",
  },
  Python: {
    logo: { icon: <PythonIcon />, color: "#306998" },
    type: "language",
    description: "汎用プログラミング言語",
    score: 2,
  },
  Rails: {
    logo: { icon: <RailsIcon />, color: "#cc0000" },
    type: "webback",
    description: "Ruby用Webフレームワーク",
  },
  RaspberryPi: {
    logo: { icon: <RaspberryPiIcon />, color: "#c51a4a" },
    type: "hardware",
    description: "シングルボードコンピュータ",
  },
  React: {
    logo: { icon: <ReactIcon />, color: "#61dafb" },
    type: "webfront",
    description: "JavaScript向けUI開発ライブラリ",
  },
  Redux: {
    logo: { icon: <ReduxIcon />, color: "#764abc" },
    type: "webfront",
    description: "React向け状態管理ライブラリ",
  },
  Ruby: {
    logo: { icon: <RubyIcon />, color: "#cc342d" },
    type: "language",
    description: "汎用プログラミング言語",
    score: 3,
  },
  Rust: {
    logo: { icon: <RustIcon />, color: "#000000" },
    type: "language",
    description: "システムプログラミング言語",
    score: 3,
  },
  "Peg.js/Peggy": {
    type: "module",
    description: "JavaScript向けパーサージェネレーター",
  },
  SQL: {
    logo: { icon: <SQLIcon />, color: "#000000" },
    type: "language",
    description: "DB操作言語",
  },
  Tailscale: {
    logo: { icon: <TailscaleIcon />, color: "#000000" },
    type: "infra",
    description: "VPNサービス",
  },
  "TensorFlow.js": {
    logo: { icon: <TensorflowIcon />, color: "#ff6f00" },
    type: "module",
    description: "機械学習ライブラリ",
  },
  Ubuntu: {
    logo: { icon: <UbuntuIcon />, color: "#dd4814" },
    type: "infra",
    description: "Linuxディストリビューション",
  },
  Unity: {
    logo: { icon: <UnityIcon />, color: "#000000" },
    type: "tool",
    description: "ゲームエンジン",
  },
  vim: {
    logo: { icon: <VimIcon />, color: "#019733" },
    type: "tool",
    description: "テキストエディタ",
  },
  VMWare: {
    type: "infra",
    description: "仮想化ソフトウェア",
  },
  WireShark: {
    logo: { icon: <WiresharkIcon />, color: "#2286b6" },
    type: "tool",
    description: "パケットキャプチャツール",
  },
  zsh: {
    logo: { icon: <ZshIcon />, color: "#e84e0e" },
    type: "tool",
    description: "シェル",
  },
  TextAliveAppAPI: {
    type: "module",
    description: "JavaScript向け歌詞連動アニメーションAPI",
  },
  Textlint: {
    type: "tool",
    description: "テキスト検査ツール",
  },
  TypeScript: {
    logo: { icon: <TypeScriptIcon />, color: "#3178c6" },
    type: "language",
    description: "JavaScriptの型付け拡張",
    score: 4,
  },
  構文解析: { type: "skill", description: "テキストの構造化" },
  画像処理: { type: "skill", description: "" },
  並列処理: { type: "skill", description: "" },
  暗号処理: { type: "skill", description: "" },
  機械学習: { type: "skill", description: "" },
  フロントエンド: { type: "skill", description: "" },
  サーバサイド: { type: "skill", description: "" },
  インフラ: { type: "skill", description: "" },
  資格: { type: "skill", description: "" },
  Webアプリ: { type: "appstyle", description: "" },
  モジュール: {
    type: "appstyle",
    description: "アプリに組み込む頒布可能な状態の部分要素",
  },
  CUIツール: { type: "appstyle", description: "" },
  スクリプト: { type: "appstyle", description: "" },
  設定ファイル: { type: "appstyle", description: "" },
  ブラウザ拡張機能: { type: "appstyle", description: "" },
  esolang: { type: "appstyle", description: "難解プログラミング言語" },
  インターン: { type: "state", description: "" },
  課題: { type: "state", description: "" },
  研究用: { type: "state", description: "" },
  "自分用・趣味": { type: "state", description: "" },
  コンテスト向け: { type: "state", description: "" },
  個人開発: { type: "state", description: "" },
  チーム開発: { type: "state", description: "" },
  "フォーク・コントリビュート": { type: "state", description: "" },
  パッケージ配布有: {
    logo: { icon: <NpmIcon />, color: "#cb3837" },
    type: "publication",
    description: "deno/x・jsr・npmを経由して利用可能",
  },
  リポジトリ有: {
    logo: { icon: <GitHubIcon />, color: "#181717" },
    type: "publication",
    description: "リポジトリ公開中",
  },
  記事有: {
    logo: { icon: <NoteIcon />, color: "#000000" },
    type: "publication",
    description: "記事公開中",
  },
  デモ有: {
    logo: { icon: <CodepenIcon />, color: "#000000" },
    type: "publication",
    description: "デモ公開中",
  },
} as const satisfies ContentsTagRecordConditions

export type AutoContents = "publication"

export const linkItemRecord = {
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
} as const satisfies LinkItemRecordConditions

export const sourcesOrigin: SourceOmited[] = [
  {
    title: "基本情報技術者試験(FE)",
    summary: "IPAが行う情報処理技術者試験",
    description:
      "技術に関心を持った頃、せっかくなので取り組むべきという薦めを受けて基本情報技術者試験に取り組みました。合格しました。",
    date: "2017-05-17",
    tag: ["資格"],
    score: 1,
  },
  {
    title: "応用情報技術者試験(AP)",
    summary: "IPAが行う情報処理技術者試験",
    description:
      "技術の道で生きると決めた後、応用情報技術者試験に取り組みました。合格しました。",
    date: "2019-12-20",
    tag: ["資格"],
    score: 1,
  },
  {
    title:
      "情報処理安全確保支援士試験（未登録なので情報処理安全確保支援士は名乗れません）",
    summary: "IPAが行う情報処理技術者試験",
    description:
      "情報セキュリティに関心が高かった頃、理解を深めるため情報処理安全確保支援士試験に取り組みました。合格しましたがセキスペには登録していません。",
    date: "2021-06-25",
    tag: ["資格"],
    score: 1,
  },
  {
    title: "PKSHA Technology インターン選考",
    summary: "PKSHA Technology インターン選考",
    description:
      "PKSHA Technology インターン選考に参加しました。Maasチームの一員として、旧システムのリプレイス業務に参加しました。",
    date: "2023-12-31",
    tag: ["インターン", "Go", "サーバサイド"],
    score: 2,
  },
  {
    title: "freee株式会社サマーインターン",
    summary: "フロントエンド・バックエンドエンジニア(2週間)",
    description: "メンターと共に新規機能の実装に取り組んだ。",
    date: "2021-08-31",
    tag: [
      "インターン",
      "Ruby",
      "Rails",
      "React",
      "個人開発",
      "サーバサイド",
      "フロントエンド",
    ],
    score: 2,
  },
  {
    title: "ゆめみ2023夏インターン",
    summary: "2023サーバサイドエンジニア(2週間)",
    description:
      "ゆめみのサマーインターンに参加しました。ほぼ初Rust、初Macという初めてだらけの環境でしたが、何とかへばりついてやっていけました。",
    date: "2023-09-09",
    tag: ["インターン", "Rust", "axum", "チーム開発", "サーバサイド"],
    link: ["https://note.com/gunseikpaseri/n/n4276746bf6b2"],
    score: 2,
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
      "自分用・趣味",
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
    title: "textlint-rule-ja-tojihiraki",
    summary: "漢字の閉じ開きを統一するTextlintルール",
    description: `
「感じる事」「感じること」のように漢字を読みやすく「ひらく」か「閉じる」かを各単語ごとに統一するTextlintルール。形態素解析したトークンを利用して判定する。
`,
    link: [
      "https://www.npmjs.com/package/textlint-rule-ja-tojihiraki",
      "https://github.com/GunseiKPaseri/textlint-rule-ja-tojihiraki",
      "https://zenn.dev/gunseikpaseri/articles/textlint-rule",
    ],
    tag: ["Node.js", "Textlint", "モジュール", "自分用・趣味"],
    date: "2024-08-15",
    score: 2,
  },
  {
    title: "textlint-rule-ja-overlooked-typo",
    summary: "見逃しそうなTypoを検出するTextlintルール",
    description: `
「二ュートン」「タぺストリー」「たいヘん」のような一目見ただけでは気づけないTypoを検出するTextlintルール。正規表現を利用して判定する。
`,
    link: [
      "https://www.npmjs.com/package/textlint-rule-ja-overlooked-typo",
      "https://github.com/GunseiKPaseri/textlint-rule-ja-overlooked-typo",
      "https://zenn.dev/gunseikpaseri/articles/textlint-rule",
    ],
    tag: ["Node.js", "Textlint", "モジュール", "自分用・趣味"],
    date: "2024-08-15",
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
      "自分用・趣味",
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
      "自分用・趣味",
      "コンテスト向け",
      "フロントエンド",
      "サーバサイド",
      "Deno",
      "Node.js",
      "JavaScript",
      "TypeScript",
      "Docker",
      "minIO",
      "SQL",
      "MUI",
      "oak",
      "Prisma",
      "Webアプリ",
      "暗号処理",
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
      "Webアプリ",
      "フロントエンド",
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
      "自分用・趣味",
      "Bun",
      "React",
      "JavaScript",
      "TypeScript",
      "モジュール",
      "フロントエンド",
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
    tag: ["個人開発", "自分用・趣味", "JavaScript", "Webアプリ"],
    date: "2021-12-31",
    score: 3,
  },
  {
    title: "promise-array-parallel",
    summary: "簡易並列処理ライブラリ",
    description:
      "与えられた複数の非同期関数について、完了後に並列数を制限しながら別の非同期関数を実行する等を簡易的に実現する。JavaScript標準のPromise.all等と使い心地が揃うようにしている。またGitHubActionを利用し、GitHub経由でリリースするとnpm及びdeno.landにおいて自動で公開されるようになっており、Node.js・Deno両環境で使うことができる。研究の際に欲しかった機能を改めてパッケージ化。",
    link: [
      "https://github.com/GunseiKPaseri/promise-array-parallel",
      "https://jsr.io/@gunseikpaseri/promise-array-parallel",
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
      "自分用・趣味",
      "JavaScript",
      "TypeScript",
      "React",
      "MUI",
      "Webアプリ",
      "フロントエンド",
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
      "自分用・趣味",
      "Deno",
      "TypeScript",
      "JavaScript",
      "モジュール",
      "サーバサイド",
    ],
    date: "2022-01-08",
  },
  {
    title: "tenjijs（仮称）",
    summary: "点字を利用した難解プログラミング言語",
    description:
      "点字(Unicode Braille Pattern)でプログラムする難解プログラミング言語。[fizzbuzzを解くソースコードの例](https://github.com/GunseiKPaseri/tenjijs/blob/main/example_fizzbuzz2.tj)はこのようになっており、非常に読み取りずらい。[PEG.js](https://pegjs.org/)・[escodegen](https://github.com/estools/escodegen)を利用したAltJSで実現。vitestを用いて正常に実行できるかを確認できる。授業課題。文法の解説・プレイグラウンドを作成予定。",
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
    score: 3,
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
      "自分用・趣味",
      "TypeScript",
      "JavaScript",
      "モジュール",
    ],
    date: "2022-07-26",
  },
  {
    title: "biome",
    summary: "Web開発ツールチェーン",
    description:
      "高速なformat・lintを提供する。ドキュメントの誤植修正、新規のルールを実装するプルリクが取り込まれている。",
    link: [
      {
        "type": "other",
        "message": "公式サイト",
        "url": "https://biomejs.dev/",
      },
      {
        "type": "github",
        "message": "Commits",
        "url": "https://github.com/biomejs/biome/commits?author=GunseiKPaseri",
      },
      "https://www.npmjs.com/package/@biomejs/biome",
    ],
    tag: [
      "フォーク・コントリビュート",
      "自分用・趣味",
      "TypeScript",
      "JavaScript",
      "Rust",
    ],
    date: "2024-09-19",
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
      "自分用・趣味",
      "JavaScript",
      "TypeScript",
      "モジュール",
      "Node.js",
      "画像処理",
    ],
    date: "2022-03-13",
    score: 2,
  },
  {
    title: "俺得拡張機能集",
    summary: "自分用アーミーナイフ",
    description: "QRコードの表示、文字化け変換、Unicodeの表示機能を有する",
    link: [
      "https://chromewebstore.google.com/detail/%E4%BF%BA%E5%BE%97%E6%8B%A1%E5%BC%B5%E6%A9%9F%E8%83%BD%E9%9B%86/ikaoaeddhkepbhjbfjjnpghheikmgmda",
    ],
    tag: ["自分用・趣味", "JavaScript", "ブラウザ拡張機能", "jQuery", "CSS"],
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
      "自分用・趣味",
      "JavaScript",
      "TypeScript",
      "ブラウザ拡張機能",
      "React",
      "MUI",
      "フロントエンド",
    ],
    date: "2021-09-27",
  },
  {
    title: "AtCoder",
    summary: "競技プログラミング",
    description:
      "AtCoderにて競技プログラミングを行っていました。当時はABCを中心に参加していました。",
    link: ["https://atcoder.jp/users/GunseiKPaseri"],
    tag: ["自分用・趣味", "C++"],
    date: "2021-06-06",
  },
  {
    title: "バッティングゲーム",
    summary: "VRゲーム",
    description:
      "Unityを利用して簡単なVRゲームを作成しました。バッティングゲームで、バットに見立てたリモコンを用い、投球を打ち返せるか試します。サインカーブを描く魔球等も実装しました。",
    tag: ["自分用・趣味", "C#", "Unity"],
    date: "2019-04-01",
  },
  {
    title: "Mery構文ファイル",
    summary: "Mery用の色分けファイル",
    description:
      "テキストエディタMeryの色分け用の構文ファイルです。JavaScriptとCSS3を用意しています。",
    link: ["https://github.com/GunseiKPaseri/Mery_msy"],
    tag: ["自分用・趣味", "設定ファイル"],
    date: "2018-02-08",
    score: 2,
  },
  {
    title: "SimpleClock",
    summary: "時計アプリ",
    description:
      "簡単な時計アプリです。年越しとかゾロ目の時を眺めるのに使います。CSSの作りこみも頑張りました",
    link: [
      "https://github.com/GunseiKPaseri/SimpleClock",
      "https://gunseikpaseri.github.io/SimpleClock/",
    ],
    tag: [
      "自分用・趣味",
      "Webアプリ",
      "JavaScript",
      "jQuery",
      "CSS",
      "フロントエンド",
    ],
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
    tag: ["自分用・趣味", "bash", "スクリプト"],
    date: "2020-09-17",
  },
  {
    title: "sb.webscraping",
    summary: "ニコニコ大百科コメント欄スクレイピングスクリプト",
    description:
      "ニコニコ大百科記事の自動取得を行うスクリプト。ユーザ記事・動画記事を仕様変更やお絵カキコ・ピコカキコを取得できるよう[変更を加えた](https://github.com/GunseiKPaseri/sb.webscraping/compare/857aaa0...5453de5)。メンテナンスを行っていないため現在動作するか不明。",
    link: ["https://github.com/GunseiKPaseri/sb.webscraping/tree/somefix"],
    tag: ["フォーク・コントリビュート", "自分用・趣味", "Python", "CUIツール"],
    date: "2020-09-08",
  },
  {
    title: ".dotfiles",
    summary: "個人設定ファイル",
    description:
      "自分用の設定ファイルをまとめたリポジトリ。zshrc・vimrc・tmux.conf等が含まれる。",
    tag: ["自分用・趣味", "vim", "zsh", "設定ファイル", "スクリプト"],
    link: ["https://github.com/GunseiKPaseri/.dotfiles"],
    date: "2023-01-21",
  },
  {
    title: "自宅サーバ",
    summary: "自宅サーバ構築",
    description:
      "自宅サーバをRaspiで運用しています。tailscaleを利用してイントラネットを構築。dockerで立ち上げたNextcloud・Jellyfin・Gitea等を自分用に利用中。ゆくゆくは公開サーバにしたい。",
    tag: [
      "自分用・趣味",
      "Docker",
      "RaspberryPi",
      "Tailscale",
      "Ubuntu",
      "インフラ",
    ],
    date: "2023-02-11",
  },
  {
    title: "研究室サーバ",
    summary: "研究室サーバ管理・運用",
    description:
      "研究室のラックサーバの運用管理を行っていました。10台以上の各種ラックの管理、新規サーバの設置・ネットワークの設定等を実施。Dockerを利用したPythonの機械学習研究用の環境構築、Azure上の仮想サーバの構築や操作、GASを用いたSlackへの定期的なBot通知など多岐に渡りました。",
    tag: [
      "研究用",
      "Docker",
      "Python",
      "FortiGate",
      "Ubuntu",
      "VMWare",
      "インフラ",
      "機械学習",
      "Azure",
      "GAS",
    ],
    date: "2023-04-01",
  },
]

export const treeLogos = [
  { conditions: "インターン", logo: { icon: <WorkIcon />, color: "#000000" } },
  {
    conditions: "モジュール",
    logo: { icon: <PackageIcon />, color: "#000000" },
  },
  {
    conditions: "設定ファイル",
    logo: { icon: <ConfigIcon />, color: "#000000" },
  },
  {
    conditions: "ブラウザ拡張機能",
    logo: { icon: <ExtensionIcon />, color: "#008800" },
  },
] as const satisfies TreeLogosConditions

export const historyOrigin: SourceOmited[] = [
  {
    title: "誕生",
    summary: "2000年という節目に生まれました",
    description: "",
    tag: [],
    date: "2000-00-00",
  },
  {
    title: "高校入学",
    summary: "頑張りました",
    description: "",
    tag: [],
    date: "2016-04-01",
  },
  {
    title: "大学入学",
    summary: "頑張りました",
    description: "",
    tag: [],
    date: "2019-04-01",
  },
  {
    title: "大学院入学",
    summary: "頑張りました",
    description: "",
    tag: [],
    date: "2023-04-01",
  },
]
