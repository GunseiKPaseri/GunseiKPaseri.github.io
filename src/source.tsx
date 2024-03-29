import {
  SiBun as BunIcon,
  SiDeno as DenoIcon,
  SiDocker as DockerIcon,
  SiGithub as GitHubIcon,
  SiJavascript as JavaScriptIcon,
  SiMui as MuiIcon,
  SiNodedotjs as NodeIcon,
  SiNpm as NpmIcon,
  SiPython as PythonIcon,
  SiReact as ReactIcon,
  SiCodepen as CodepenIcon,
  SiZenn as ZennIcon,
} from "react-icons/si";
import LinkIcon from '@mui/icons-material/Link';

export const contentsTagLogo = {
  'Bun': {logo: <BunIcon />, color: '#f3e8b8'},
  'Deno': {logo: <DenoIcon />, color: '#000000'},
  'Docker': {logo: <DockerIcon />, color: '#2496ed'},
  'JavaScript': {logo: <JavaScriptIcon />, color: '#f7df1e'},
  'MUI': {logo: <MuiIcon />, color: '#0081cb'},
  'Node.js': {logo: <NodeIcon />, color: '#68a063'},
  'Python': {logo: <PythonIcon />, color: '#306998'}, 
  'React': {logo: <ReactIcon />, color: '#61dafb'},
  'SQL': undefined,
  'esolang': undefined,
  '外部提出': undefined,
  '個人開発': undefined,
  'フォーク・コントリビュート': undefined,
  'npmパッケージ公開中': {logo: <NpmIcon />, color: '#cb3837'},
  'GitHubリポジトリ公開中': {logo: <GitHubIcon />, color: '#181717'},
} as const satisfies Record<string, {logo: JSX.Element, color: string} | undefined>

export type ContentsTag = keyof typeof contentsTagLogo;
export const contentsTags = Object.keys(contentsTagLogo) as ContentsTag[];

export const linkTypes = {
  github: {message: '実装', icon: <GitHubIcon />, title: 'GitHub'},
  npm: {message: 'npm', icon: <NpmIcon />, title: 'npm package'},
  zenn: {message: '記事', icon: <ZennIcon />, title: 'Zenn'},
  codepen: {message: 'デモ', icon: <CodepenIcon />, title: 'CodePen'},
  other: {message: 'リンク', icon: <LinkIcon />, title: 'リンク'},
} as const satisfies Record<string, {message: string, icon: JSX.Element, title: string}>;

export type LinkType = keyof typeof linkTypes;
export const linkType = Object.keys(linkTypes) as LinkType[];

export type Source = {
  id: number,
  title: string,
  description: string,
  summary: string,
  link?: {url: string, type: LinkType, message?: string}[],
  img?: string,
  tag: ContentsTag[],
};

type SourceOmited = Omit<Source, 'id' | 'tag'> & {tag: Exclude<ContentsTag, 'npmパッケージ公開中' | 'GitHubリポジトリ公開中'>[]};

const sourcesOrigin: SourceOmited[] = [
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
    link: [{
      url: 'https://docs.google.com/presentation/d/e/2PACX-1vSscrKP19Mm_AKqQygBGAlr0IyOS0Tkd8BJQkSiKCPxLk8d7CTkWd9vW6-U1Bycmw/pub?start=false&loop=false&delayms=3000',
      type: 'other',
      message: '発表資料',
    },{
      url: 'https://github.com/GunseiKPaseri/e2eencloud',
      type: 'github',
    }],
    tag: ['React', '個人開発', '外部提出', 'Deno', 'Node.js', 'JavaScript', 'Docker', 'SQL', 'MUI'],
    img: './e2eencloud.png',
  },
  {
    title: 'LyricTyper',
    summary: '歌詞連動アニメーション',
    description: '音楽に合わせてタイミングよく歌詞が動くWebアプリケーション（リリックアプリ）を作ることができる、[TextAlive App API](https://developer.textalive.jp/)を用いて、歌詞をタイピングゲームのように表示して楽しむことができるアプリケーション。**第一回マジカルミライ プログラミングコンテストにて入選**。グラフィックライブラリを用いずにHTML要素とCSSによる変形で形を作っている。',
    link: [
      {
        url: 'https://github.com/GunseiKPaseri/textalive_lyrictyper',
        type: 'github',
      },
      {
        url: 'https://magicalmirai.com/2020/procon/entry.html#entry_no07',
        type: 'other',
        message: '入選エントリー',
      }
    ],
    tag: ['個人開発', '外部提出', 'Node.js', 'JavaScript'],
  },
  {
    title: 'react-window-system',
    summary: 'React用ウィンドウシステムライブラリ',
    description: 'Reactでウィンドウシステムを実現するためのライブラリ。ウィンドウのドラッグ・リサイズ・最小化・最大化・閉じる等の操作を実現する。ウィンドウのZオーダーを保持するための機能も実装。ウィンドウの中身にReactコンポーネントを配置できる。スナップ機能（Windowsで左右にぶつけると半分最大化できたりするやつ）にも対応．',
    link: [
      {
        url: 'https://codesandbox.io/p/sandbox/react-window-system-demo-p75t2w?file=%2Fsrc%2FApp.tsx&from-embed=',
        type: 'codepen',
      },{
      url: 'https://zenn.dev/gunseikpaseri/articles/react-window-system',
      type: 'zenn',
    },{
      url: 'https://github.com/GunseiKPaseri/react-window-system',
      type: 'github',
    },{
      url: 'https://www.npmjs.com/package/react-window-system',
      type: 'npm',
    }],
    tag: ['個人開発', 'Bun', 'React', 'JavaScript'],
  },
  {
    title: 'promise_array_parallel',
    summary: '簡易並列処理ライブラリ',
    description: '与えられた複数の非同期関数について、完了後に並列数を制限しながら別の非同期関数を実行する等を簡易的に実現する。JavaScript標準のPromise.all等と使い心地が揃うようにしている。またGitHubActionを利用し、GitHub経由でリリースするとnpm及びdeno.landにおいて自動で公開されるようになっており、Node.js・Deno両環境で使うことができる。研究の際に欲しかった機能を改めてパッケージ化。',
    link: [{
      url: 'https://github.com/GunseiKPaseri/promise_array_parallel',
      type: 'github',
    },{
      url: 'https://www.npmjs.com/package/promise_array_parallel',
      type: 'npm',
    }],
    tag: ['個人開発', 'Deno', 'Node.js', 'JavaScript'],
  },
  {
    title: 'gunseikpaseri.github.io',
    summary: 'ポートフォリオサイト',
    description: '作者の実装したアプリケーション等をまとめたこのポートフォリオサイト。簡単なタグ検索機能が付属する。',
    link: [
      {
        url: 'https://github.com/GunseiKPaseri/gunseikpaseri.github.io',
        type: 'github',
      },
      {
        url: 'https://gunseikpaseri.github.io/',
        type: 'other',
      }
    ],
    tag: ['個人開発', 'JavaScript', 'React', 'MUI'],
  },
  {
    title: 'tenjijs（仮称）',
    summary: '点字を利用した難解プログラミング言語',
    description: '点字でプログラムする難解プログラミング言語。[fizzbuzzを解くソースコードの例](https://github.com/GunseiKPaseri/tenjijs/blob/main/example_fizzbuzz2.tj)はこのようになっており、非常に読み取りずらい。[PEG.js](https://pegjs.org/)・[escodegen](https://github.com/estools/escodegen)を利用したAltJSで実現。vitestを用いて正常に実行できるかを確認できる。授業課題。文法の解説・プレイグラウンドを作成予定。',
    link: [
      {
        url: 'https://github.com/GunseiKPaseri/tenjijs',
        type: 'github',
      }
    ],
    img: './tenjijs.png',
    tag: ['個人開発', '外部提出', 'JavaScript', 'esolang'],
  },
  {
    title: 'detect-chinese',
    summary: '文字種検出パッケージ',
    description: '文字列に「中国語にしか使われない漢字が含まれているかどうか」を調べることで、対象の文字列が「中国語かどうか」を判定する。特定の文字が含まれているかを正規表現で検出しているだけだが、Unicodeが5桁になる文字種を正常に判定できるようにする、連続する文字に関してハイフンで結ぶことでファイルサイズを削減する、等の修正を行いマージされた。',
    link: [{
      url: 'https://github.com/Neos21/detect-chinese',
      type: 'github',
    }, {
      url: 'https://www.npmjs.com/package/@neos21/detect-chinese',
      type: 'npm',
    }],
    tag: ['フォーク・コントリビュート', 'JavaScript'],
  },
  {
    title: 'sb.webscraping',
    summary: 'ニコニコ大百科コメント欄スクレイピングスクリプト',
    description: 'ニコニコ大百科記事の自動取得を行うスクリプト。ユーザ記事・動画記事を仕様変更やお絵カキコ・ピコカキコを取得できるよう[変更を加えた](https://github.com/GunseiKPaseri/sb.webscraping/compare/857aaa0...5453de5)。メンテナンスを行っていないため現在動作するか不明。',
    link: [{
      url: 'https://github.com/GunseiKPaseri/sb.webscraping/tree/somefix',
      type: 'github',
    }],
    tag: ['フォーク・コントリビュート', 'Python'],
  },
  {
    title: 'web-crypto-stream（仮称）',
    summary: 'Web Stream APIで暗号化等を行う',
    description: 'Web Stream APIによりNode.jsに限らずブラウザ上でもストリーム処理が容易に実現できるようになったが、Web Crypto APIの暗号処理・ハッシュ関数については未対応である。[提案](https://github.com/wintercg/proposal-webcrypto-streams/blob/main/explainer.md)はされているものの実現の目途は経っていない様子。E2EEENCLOUDではブラウザ上での暗号化・復号処理が求められるが、これを利用することで暗号化ファイルのダウンロードを待たずに復号処理に移ることができる。実現に向けて作業中。暗号処理に自分が実装したプラグインを使うのはセキュリティ的観点からご法度ではあるが、提案が通るまでの繋ぎのつもりで。',
    tag: ['JavaScript'],
  },
];

export const sources = sourcesOrigin.map((s, i): Source => {
  const tag: Source['tag'] = [
    ...s.tag,
    ...(s.link?.some(x => x.type === 'npm') ? ['npmパッケージ公開中'] as const : []),
    ...(s.link?.some(x => x.type === 'github') ? ['GitHubリポジトリ公開中'] as const : []),
  ]
  return ({
    ...s,
    tag,
    id: i
  } satisfies Source)
});
