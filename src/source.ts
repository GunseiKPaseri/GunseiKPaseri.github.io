export const contentsTags = [
  'JavaScript',
  'Deno',
  'Node.js',
  'React',
  'MUI',
  'Python',
  'Docker',
  'SQL',
  'esolang',
  '外部提出',
  '個人開発',
  'フォーク・コントリビュート',
  'npmパッケージ公開中',
] as const;

export type ContentsTag = typeof contentsTags[number];
export type Source = {
  id: number,
  title: string,
  description: string,
  summary: string,
  link?: {url: string, type: 'github' | 'npm' | 'other'}[],
  img?: string,
  tag: ContentsTag[],
};

const sourcesOrigin: Omit<Source, 'id'>[] = [
  {
    title: 'E2EENCLOUD',
    summary: 'クラウドストレージ風サーバアプリ',
    description: 'クラウドストレージのようにサーバにファイルをアップロード・保管できるアプリケーション。エンドツーエンド暗号化により、サーバには暗号化されたファイルのみが保存される。フロントエンドをNode.js、バックエンドをDenoで開発している（Denoへ統一予定）。バックエンドの動作にはminio・maildev・mysqlを利用しており、DockerComposeで起動できるようになっている。現在は最低限ローカルで稼働させることができるが、デプロイを目指し継続的に開発中。',
    link: [{
      url: 'https://github.com/GunseiKPaseri/e2eencloud',
      type: 'github',
    }],
    tag: ['React', '個人開発', 'Deno', 'Node.js', 'JavaScript', 'Docker', 'SQL', 'MUI'],
    img: './e2eencloud.png',
  },
  {
    title: 'LyricTyper',
    summary: '歌詞表示アプリ',
    description: '音楽に合わせてタイミングよく歌詞が動くWebアプリケーション（リリックアプリ）を作ることができる、[TextAlive App API](https://developer.textalive.jp/)を用いて、歌詞をタイピングゲームのように表示して楽しむことができるアプリケーション。**第一回マジカルミライ プログラミングコンテストにて入選**。',
    link: [
      {
        url: 'https://github.com/GunseiKPaseri/textalive_lyrictyper',
        type: 'github',
      },
      {
        url: 'https://magicalmirai.com/2020/procon/entry.html#entry_no07',
        type: 'other',
      }
    ],
    tag: ['個人開発', '外部提出', 'Node.js', 'JavaScript'],
  },
  {
    title: 'promise_array_parallel',
    summary: '簡易並列処理パッケージ',
    description: '与えられた複数の非同期関数について、完了後に並列数を制限しながら別の非同期関数を実行する等を簡易的に実現する。JavaScript標準のPromise.all等と使い心地が揃うようにしている。またGitHubActionを利用し、GitHub経由でリリースするとnpm及びdeno.landにおいて自動で公開されるようになっており、Node.js・Deno両環境で使うことができる。',
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
    description: '作者の実装したアプリケーション等をまとめたポートフォリオサイト。簡単なタグ検索機能が付属する。',
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
    description: '文字列に「中国語にしか使われない漢字が含まれているかどうか」を調べることで、対象の文字列が「中国語かどうか」を判定する。特定の文字が含まれているかを正規表現で検出しているだけだが、Unicodeが5桁になる文字種を正常に判定できるようにする、連続する文字に関してハイフンで結ぶことでファイルサイズを削減する、等の修正を行った。',
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
    description: 'Web Stream APIによりNode.jsに限らずブラウザ上でもストリーム処理が容易に実現できるようになったが、Web Crypto APIの暗号処理・ハッシュ関数については未対応である。[提案](https://github.com/wintercg/proposal-webcrypto-streams/blob/main/explainer.md)はされているものの実現の目途は経っていない様子。E2EEENCLOUDではブラウザ上での暗号化・復号処理が求められるが、これを利用することで暗号化ファイルのダウンロードを待たずに復号処理に移ることができる。実現に向けて作業中。',
    tag: ['JavaScript'],
  },
];

export const sources = sourcesOrigin.map((s, i) => {
  return ({
    ...s,
    tag: (s.link?.some(x => x.type === 'npm') ? [...s.tag, 'npmパッケージ公開中'] : s.tag),
    id: i
  } satisfies Source)
});
