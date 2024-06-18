import {
  SiBun as BunIcon,
  SiDeno as DenoIcon,
  SiDocker as DockerIcon,
  SiGithub as GitHubIcon,
  SiJavascript as JavaScriptIcon,
  SiJsr as JsrIcon,
  SiMui as MuiIcon,
  SiNodedotjs as NodeIcon,
  SiNpm as NpmIcon,
  SiPython as PythonIcon,
  SiReact as ReactIcon,
  SiCodepen as CodepenIcon,
  SiCodesandbox as CodesandboxIcon,
  SiZenn as ZennIcon,
} from "react-icons/si";
import LinkIcon from '@mui/icons-material/Link';
import { OmitByValue, PickByValue, entries, keys } from "./util";

export const contentsTagLogo = {
  'Bun': {logo: {icon: <BunIcon />, color: '#f3e8b8'}, type: 'skill'},
  'Deno': {logo: {icon: <DenoIcon />, color: '#000000'}, type: 'skill'},
  'Docker': {logo: {icon: <DockerIcon />, color: '#2496ed'}, type: 'skill'},
  'JavaScript': {logo: {icon: <JavaScriptIcon />, color: '#f7df1e'}, type: 'skill'},
  'MUI': {logo: {icon: <MuiIcon />, color: '#0081cb'}, type: 'skill'},
  'Node.js': {logo: {icon: <NodeIcon />, color: '#68a063'}, type: 'skill'},
  'Python': {logo: {icon: <PythonIcon />, color: '#306998'}, type: 'skill'}, 
  'React': {logo: {icon: <ReactIcon />, color: '#61dafb'}, type: 'skill'},
  'Chevrotain': {type: 'skill'},
  'Peg.js/Peggy': {type: 'skill'},
  '構文解析': {type: 'skill'},
  'SQL': {type: 'skill'},
  'アプリ': {type: 'genre'},
  'モジュール': {type: 'genre'},
  'CUIツール': {type: 'genre'},
  'esolang': {type: 'genre'},
  '課題': {type: 'state'},
  '研究用': {type: 'state'},
  '自分用': {type: 'state'},
  'コンテスト向け': {type: 'state'},
  '個人開発': {type: 'state'},
  'フォーク・コントリビュート': {type: 'state'},
  'jsr公開中': {logo: {icon: <JsrIcon />, color: '#f3e8b8'}, type: 'auto'},
  'npm公開中': {logo: {icon: <NpmIcon />, color: '#cb3837'}, type: 'auto'},
  'GitHub公開中': {logo: {icon: <GitHubIcon />, color: '#181717'}, type: 'auto'},
} as const satisfies Record<string, {logo?:{icon: JSX.Element, color: string}, type: 'skill' | 'auto' | 'state' | 'genre'}>

export const contentsTags = keys(contentsTagLogo);
const contentsTagEntries = entries(contentsTagLogo)
type ContentsTagManual = keyof OmitByValue<typeof contentsTagLogo, {type: 'auto'}>;
type ContentsTagAuto = keyof PickByValue<typeof contentsTagLogo, {type: 'auto'}>;
export type ContentsTag = ContentsTagAuto | ContentsTagManual;
export const contentsTagsTree = {
  '技術': contentsTagEntries.filter(x => x[1].type === 'skill').map(x => x[0]),
  'ジャンル': contentsTagEntries.filter(x => x[1].type === 'genre').map(x => x[0]),
  '開発形態': contentsTagEntries.filter(x => x[1].type === 'state').map(x => x[0]),
  '公開状況': contentsTagEntries.filter(x => x[1].type === 'auto').map(x => x[0]),
} as const satisfies Record<string, ContentsTag[]>;

export const linkTypes = {
  jsr: {message: 'jsr', icon: <JsrIcon />, title: 'JSR', domain:['jsr.io']},
  github: {message: '実装', icon: <GitHubIcon />, title: 'GitHub', domain:['github.com']},
  npm: {message: 'npm', icon: <NpmIcon />, title: 'npm package', domain: ['npmjs.com']},
  zenn: {message: '記事', icon: <ZennIcon />, title: 'Zenn', domain: ['zenn.dev']},
  codepen: {message: 'デモ', icon: <CodepenIcon />, title: 'CodePen', domain: ['codepen.io']},
  codesandbox: {message: 'デモ', icon: <CodesandboxIcon />, title: 'CodeSandbox', domain: ['codesandbox.io']},
  other: {message: 'リンク', icon: <LinkIcon />, title: 'リンク', domain: []},
} as const satisfies Record<string, {message: string, icon: JSX.Element, title: string, domain: string[]}>;

export const linkType = keys(linkTypes);
export type LinkType = (typeof linkType)[number];

type LinkDetail = {url: string, type: LinkType, message?: string};

export type Source = {
  id: number,
  title: string,
  description: string,
  summary: string,
  link?: LinkDetail[],
  img?: string,
  tag: ContentsTag[],
  visible: boolean,
};

type SourceOmited = Omit<Source, 'id' | 'tag' | 'link' | 'visible'>
  & {
    tag: ContentsTagManual[]
    link?: (string | LinkDetail)[]
  }

const sourcesOrigin: SourceOmited[] = [
  {
    title: 'perfect-ini-parser',
    summary: '空白付INIパーサー',
    description: `
iniのパースを行う際、改行・タグ・空白文字を無視することが多いが、空白文字を含めてパース・一部編集後も復元することができるパーサー。
ファイル変更時の差分を最小限にすることができる。
`,
    link: [
      'https://jsr.io/@gunseikpaseri/perfect-ini-parser',
      'https://github.com/GunseiKPaseri/perfect-ini-parser',
      'https://zenn.dev/gunseikpaseri/articles/parser-published-jsr',
    ],
    tag: ['Deno', '個人開発', '自分用', 'JavaScript', '構文解析', 'Chevrotain', 'モジュール'],
  },
  {
    title: 'perfect-json-parser',
    summary: '空白付JSONパーサー',
    description: `
JSONのパースを行う際、改行・タグ・空白文字を無視することが多いが、空白文字を含めてパース・一部編集後も復元することができるパーサー。
ファイル変更時の差分を最小限にすることができる。
`,
    link: [
      'https://jsr.io/@gunseikpaseri/perfect-json-parser',
      'https://github.com/GunseiKPaseri/perfect-json-parser',
      'https://zenn.dev/gunseikpaseri/articles/parser-published-jsr',
    ],
    tag: ['Deno', '個人開発', '自分用', 'JavaScript', '構文解析', 'Chevrotain', 'モジュール'],
  },
  {
    title: 'E2EENCLOUD（仮称）',
    summary: 'クラウドストレージ風サーバアプリ',
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
        url: 'https://docs.google.com/presentation/d/e/2PACX-1vSscrKP19Mm_AKqQygBGAlr0IyOS0Tkd8BJQkSiKCPxLk8d7CTkWd9vW6-U1Bycmw/pub?start=false&loop=false&delayms=3000',
        type: 'other',
        message: '発表資料',
      },
      'https://github.com/GunseiKPaseri/e2eencloud',
    ],
    tag: ['React', '個人開発', 'コンテスト向け', 'Deno', 'Node.js', 'JavaScript', 'Docker', 'SQL', 'MUI', 'アプリ'],
    img: './e2eencloud.png',
  },
  {
    title: 'LyricTyper',
    summary: '歌詞連動アニメーション',
    description: '音楽に合わせてタイミングよく歌詞が動くWebアプリケーション（リリックアプリ）を作ることができる、[TextAlive App API](https://developer.textalive.jp/)を用いて、歌詞をタイピングゲームのように表示して楽しむことができるアプリケーション。**第一回マジカルミライ プログラミングコンテストにて入選**。グラフィックライブラリを用いずにHTML要素とCSSによる変形で形を作っている。',
    link: [
      'https://github.com/GunseiKPaseri/textalive_lyrictyper',
      {
        url: 'https://magicalmirai.com/2020/procon/entry.html#entry_no07',
        type: 'other',
        message: '入選エントリー',
      }
    ],
    tag: ['個人開発', 'コンテスト向け', 'Node.js', 'JavaScript', 'アプリ'],
  },
  {
    title: 'react-window-system',
    summary: 'React用ウィンドウシステムライブラリ',
    description: 'Reactでウィンドウシステムを実現するためのライブラリ。ウィンドウのドラッグ・リサイズ・最小化・最大化・閉じる等の操作を実現する。ウィンドウのZオーダーを保持するための機能も実装。ウィンドウの中身にReactコンポーネントを配置できる。スナップ機能（Windowsで左右にぶつけると半分最大化できたりするやつ）にも対応．',
    link: [
      'https://codesandbox.io/p/sandbox/react-window-system-demo-p75t2w?file=%2Fsrc%2FApp.tsx&from-embed=',
      'https://zenn.dev/gunseikpaseri/articles/react-window-system',
      'https://github.com/GunseiKPaseri/react-window-system',
      'https://www.npmjs.com/package/react-window-system',
    ],
    tag: ['個人開発', '自分用', 'Bun', 'React', 'JavaScript', 'モジュール'],
  },
  {
    title: 'promise_array_parallel',
    summary: '簡易並列処理ライブラリ',
    description: '与えられた複数の非同期関数について、完了後に並列数を制限しながら別の非同期関数を実行する等を簡易的に実現する。JavaScript標準のPromise.all等と使い心地が揃うようにしている。またGitHubActionを利用し、GitHub経由でリリースするとnpm及びdeno.landにおいて自動で公開されるようになっており、Node.js・Deno両環境で使うことができる。研究の際に欲しかった機能を改めてパッケージ化。',
    link: [
      'https://github.com/GunseiKPaseri/promise_array_parallel',
      'https://www.npmjs.com/package/promise_array_parallel',
    ],
    tag: ['個人開発', '研究用', 'Deno', 'Node.js', 'JavaScript', 'モジュール'],
  },
  {
    title: 'gunseikpaseri.github.io',
    summary: 'ポートフォリオサイト',
    description: '作者の実装したアプリケーション等をまとめたこのポートフォリオサイト。簡単なタグ検索機能が付属する。',
    link: [
      'https://github.com/GunseiKPaseri/gunseikpaseri.github.io',
      'https://gunseikpaseri.github.io/'
    ],
    tag: ['個人開発', 'JavaScript', 'React', 'MUI', 'アプリ'],
  },
  {
    title: 'tenjijs（仮称）',
    summary: '点字を利用した難解プログラミング言語',
    description: '点字でプログラムする難解プログラミング言語。[fizzbuzzを解くソースコードの例](https://github.com/GunseiKPaseri/tenjijs/blob/main/example_fizzbuzz2.tj)はこのようになっており、非常に読み取りずらい。[PEG.js](https://pegjs.org/)・[escodegen](https://github.com/estools/escodegen)を利用したAltJSで実現。vitestを用いて正常に実行できるかを確認できる。授業課題。文法の解説・プレイグラウンドを作成予定。',
    link: ['https://github.com/GunseiKPaseri/tenjijs'],
    img: './tenjijs.png',
    tag: ['個人開発', '課題', 'JavaScript', 'esolang', '構文解析', 'Peg.js/Peggy'],
  },
  {
    title: 'detect-chinese',
    summary: '文字種検出パッケージ',
    description: '文字列に「中国語にしか使われない漢字が含まれているかどうか」を調べることで、対象の文字列が「中国語かどうか」を判定する。特定の文字が含まれているかを正規表現で検出しているだけだが、Unicodeが5桁になる文字種を正常に判定できるようにする、連続する文字に関してハイフンで結ぶことでファイルサイズを削減する、等の修正を行いマージされた。',
    link: [
      'https://github.com/Neos21/detect-chinese',
      'https://www.npmjs.com/package/@neos21/detect-chinese',
    ],
    tag: ['フォーク・コントリビュート', '自分用', 'JavaScript', 'モジュール'],
  },
  {
    title: 'sb.webscraping',
    summary: 'ニコニコ大百科コメント欄スクレイピングスクリプト',
    description: 'ニコニコ大百科記事の自動取得を行うスクリプト。ユーザ記事・動画記事を仕様変更やお絵カキコ・ピコカキコを取得できるよう[変更を加えた](https://github.com/GunseiKPaseri/sb.webscraping/compare/857aaa0...5453de5)。メンテナンスを行っていないため現在動作するか不明。',
    link: ['https://github.com/GunseiKPaseri/sb.webscraping/tree/somefix'],
    tag: ['フォーク・コントリビュート', '自分用', 'Python', 'CUIツール'],
  }
];

const linkDetailSuggester = (url: string):LinkDetail => {
  for(const [lt, lnk] of Object.entries(linkTypes)){
    if(lnk.domain.some(x => url.startsWith(`https://${x}/`) || url.startsWith(`https://www.${x}/`))){
      return {url, type: lt as LinkType} 
    }
  }
  return {url, type: 'other'};
}

export const sources = sourcesOrigin.map((s, i): Source => {
  const link: Source['link'] = s.link?.map(x => typeof x === 'string' ? linkDetailSuggester(x) : x)
  const tag: Source['tag'] = [
    ...s.tag,
    ...(link?.some(x => x.type === 'jsr') ? ['jsr公開中'] as const : []),
    ...(link?.some(x => x.type === 'npm') ? ['npm公開中'] as const : []),
    ...(link?.some(x => x.type === 'github') ? ['GitHub公開中'] as const : []),
  ]
  return ({
    ...s,
    tag,
    link,
    visible: true,
    id: i
  } satisfies Source)
});
