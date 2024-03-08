export interface Data {
  id: number;
  title: string;
  description: string;
  keywordIds?: number[];
  storyLabel?: string;
  videos: Video[];
}

export interface Video {
  id: string;
  filename: string;
  buttonLabel?: string;
}

export interface Keyword {
  id: number;
  value: string;
  label: string;
}

export const allData: Data[] = [
  {
    id: 1,
    title: 'そもそも著作権とは',
    description:
      '映画など違法ダウンロードが禁止されているもの、オープンソースのような誰でもダウンロードできるもの、その違いが知りたくなった3人は先生の元へ向かいます。',
    keywordIds: [0, 1, 2, 3],
    videos: [
      {
        id: '01a',
        filename: '2022_01a_somosomo',
      },
      {
        id: '01b',
        filename: '2022_01b_somosomo',
      },
    ],
  },
  {
    id: 2,
    title: '著作物を公衆に送信する権利',
    description:
      '香澄が作成した動画をSNSで公開しようとするも「著作権違反に当たる」と言われて驚く直哉。著作権にはどのような権利があるのでしょうか？',
    keywordIds: [4, 5, 6],
    videos: [
      {
        id: '02a',
        filename: '2022_02a_koushu',
      },
      {
        id: '02b',
        filename: '2022_02b_koushu',
      },
    ],
  },
  {
    id: 3,
    title: '著作者が持つ人格的な権利',
    description:
      '香澄さんが創った動画を、勝手に改変してしまった葵。悪気のなさはわかりつつも、モヤモヤしてしまう香澄。その原因は動画への思い入れを否定されように感じたからかも？',
    keywordIds: [7, 8, 9, 10, 11],
    videos: [
      {
        id: '03a',
        filename: '2022_03a_jinkaku',
      },
      {
        id: '03b',
        filename: '2022_03b_jinkaku',
      },
    ],
  },
  {
    id: 4,
    title: '著作物の保護期間と利用の仕方',
    description:
      'オープンキャンパスで学科紹介ビデオを制作することになった涼太。授業での著作権の特別な扱いを理解しながら、内田先生からもらった資料の権利関係を整理していく。',
    keywordIds: [12, 13, 14],
    videos: [
      {
        id: '04a',
        filename: '2022_02a_hogokikan',
      },
      {
        id: '04b',
        filename: '2022_02b_hogokikan',
      },
    ],
  },
  {
    id: 5,
    title: '学校教育にかかわりの深い特別なルール',
    description:
      '授業のときに先生が使ったり配ったりする資料、学生たちがゼミのときに配布している資料などには、他の人が作った著作物が含まれている。このような、教育の場での他の人の著作物の利用について、どう考えたらいいのか、ルールはどうなっているのか考えてゆく。',
    keywordIds: [15, 13, 16],
    videos: [
      {
        id: '05a',
        filename: '2022_05a_gakkou',
      },
      {
        id: '05b',
        filename: '2022_05b_gakkou',
      },
    ],
  },
  {
    id: 6,
    title: 'SNSで著作権侵害？',
    description:
      '香澄のキャラ弁をSNSにアップしようとする葵。キャラ弁にも著作権が関係することを知って…',
    keywordIds: [17, 5, 18, 19, 20],
    videos: [
      {
        id: '06a',
        filename: '2022_06a_sns',
      },
      {
        id: '06b',
        filename: '2022_06b_sns',
      },
    ],
  },
  {
    id: 7,
    title: '利用規約を読みましょう',
    description:
      'フリー素材を使って軽音部のポスターを作った葵。香澄はフリー素材を自由に使ってよいのか気になっているが...',
    keywordIds: [21, 22, 23],
    videos: [
      {
        id: '07a',
        filename: '2022_07a_riyoukiyaku',
      },
      {
        id: '07b',
        filename: '2022_07b_riyoukiyaku',
      },
    ],
  },
  {
    id: 8,
    title: '引用について学ぶ',
    description:
      'レポートに取り組む三人。レポートを見た先輩は「引用」方法が気になっている、引用にどんな問題が？',
    keywordIds: [24, 25, 26],
    videos: [
      {
        id: '08a',
        filename: '2022_08a_innyou',
      },
      {
        id: '08b',
        filename: '2022_08b_innyou',
      },
    ],
  },
  {
    id: 9,
    title: 'それってパクリですか？',
    description:
      'SNSで市のポスターのイラストがパクリという投稿を見つけた葵と直哉だが、香澄は首を傾げている。',
    keywordIds: [27, 28, 29, 30],
    videos: [
      {
        id: '09a',
        filename: '2023_09a_pakuri',
      },
      {
        id: '09b',
        filename: '2023_09b_pakuri',
      },
    ],
  },
  {
    id: 10,
    title: '有罪？損害賠償？著作権が侵害されたとき',
    description:
      '映画館での著作権侵害の警告や損害賠償の記事など侵害行為への対応に疑問を持った葵、香澄が内田先生に質問します。',
    keywordIds: [31, 32, 20, 33, 34, 35, 7, 36],
    videos: [
      {
        id: '10a',
        filename: '2023_10a_shingai',
      },
      {
        id: '10b',
        filename: '2023_10b_shingai',
      },
    ],
  },
  {
    id: 11,
    title: 'ステージイベントと著作権',
    description:
      '学園祭実行委員の打ち合わせで、先輩からステージイベントの著作権処理について尋ねられた三人。入場無料の教育機関でのイベントでも著作権処理が必要？',
    keywordIds: [37, 38, 7, 39],
    videos: [
      {
        id: '11a',
        filename: '2023_11a_stageevent',
      },
      {
        id: '11b',
        filename: '2023_11b_stageevent',
      },
    ],
  },
  {
    id: 12,
    title: 'どこまで似ていて大丈夫？学園祭のポスター',
    description:
      '学園祭のポスター作りに取り組む三人。あの漫画のキャラクターを使うのはさすがに無理でも小道具や衣装だけなら大丈夫？',
    keywordIds: [14, 40, 41],
    videos: [
      {
        id: '12a',
        filename: '2023_12a_poster',
      },
      {
        id: '12b',
        filename: '2023_12b_poster',
      },
    ],
  },
  {
    id: 13,
    title: '著作隣接権に注意！\n音楽イベント動画のアップロード',
    description:
      '学園祭の動画を動画共有サイトにアップロードしようとしている香澄と葵。軽音楽部とダンス部で同じ音楽を使っているのに…？',
    keywordIds: [42, 37, 43],
    videos: [
      {
        id: '13a',
        filename: '2023_13a_musicevent',
      },
      {
        id: '13b',
        filename: '2023_13b_musicevent',
      },
    ],
  },
  {
    id: 14,
    title: 'その権利、譲渡しちゃって大丈夫？',
    description:
      'とっておきのにゃんこ映像でコンクールに応募しようとする直哉。入賞賞金に目が眩んでいるようだけれど、入賞した際の映像の著作権については確認していないようで…',
    keywordIds: [44, 4],
    videos: [
      {
        id: '14a',
        filename: '2023_14a_kenrijouto',
      },
      {
        id: '14b',
        filename: '2023_14b_kenrijouto',
      },
    ],
  },
  {
    id: 15,
    title: '私の作品、この範囲なら使っていいですよ！\n利用許諾とライセンス設定',
    description:
      'オリジナルイラストを一般公開しようとする葵。イラストを意図通りに使ってもらうために、クリエイティブ・コモンズ・ライセンスや利用規約を書くメリットなどを学びます。',
    keywordIds: [14, 45],
    videos: [
      {
        id: '15a',
        filename: '2023_15a_kyodaku',
      },
      {
        id: '15b',
        filename: '2023_15b_kyodaku',
      },
    ],
  },
  {
    id: 16,
    title: '類似性の難しさ',
    description:
      '香澄が小説投稿サイトで公開しているものとよく似た作品を見つけた直哉だが、香澄は困惑するとともに迷っているようでもある。',
    keywordIds: [27, 46, 47, 48],
    videos: [
      {
        id: '16a',
        filename: '2023_16a_ruijisei',
      },
      {
        id: '16b',
        filename: '2023_16b_ruijisei',
      },
    ],
  },
  {
    id: 17,
    title: '著作権と似ているけど違う権利　知的財産権',
    description:
      '著作権以外にも人の考えだしたものを守る仕組みが存在する。車のデザインの話題をきっかけに、それらを学びます。',
    keywordIds: [49, 50, 51, 52, 53, 54, 55],
    videos: [
      {
        id: '17a',
        filename: '2023_17a_chitekizaisanken',
      },
      {
        id: '17b',
        filename: '2023_17b_chitekizaisanken',
      },
    ],
  },
  {
    id: 18,
    title: '海外の著作物の利用',
    description:
      '海外の歌詞をサイトで使いたい直哉と香澄。ベルヌ条約や戦時加算について内田先生に学びます。',
    keywordIds: [56, 57, 58],
    videos: [
      {
        id: '18a',
        filename: '2023_18a_kaigai',
      },
      {
        id: '18b',
        filename: '2023_18b_kaigai',
      },
    ],
  },
  {
    id: 19,
    title: '二次的著作物ってどんなもの？',
    description:
      '葵の描いた漫画を小説にしたいと友達から言われ、香澄と直哉に相談する葵。使って良いとも思うけれど、どう使われてどう公開されるのかも気になって…',
    keywordIds: [59, 60, 41],
    videos: [
      {
        id: '19a',
        filename: '2023_19a_nijiteki',
      },
      {
        id: '19b',
        filename: '2023_19b_nijiteki',
      },
    ],
  },
  {
    id: 20,
    title: '著作物が写り込んでしまったらどうしたらいいの？',
    description:
      '涼太は研究室紹介の動画作成のため、研究室での作業風景を撮影し、その動画を編集する中で研究室に掲示されていたポスターが写り込んでいたことに気が付いた。このまま公開しても問題ないのだろうか…',
    keywordIds: [61, 62],
    videos: [
      {
        id: '20a',
        filename: '2023_20a_utsurikomi',
      },
      {
        id: '20b',
        filename: '2023_20b_utsurikomi',
      },
    ],
  },
  {
    id: 21,
    title: '私的使用のための複製ってどういうこと？',
    description:
      '定期試験が近いので一緒に勉強をすることに。葵は専門科目でわからないところがあると言っていたので、直哉が自宅にあった書籍の一部をコピーして渡したところ、香澄から著作権侵害ではないかとの指摘を受けた…',
    keywordIds: [63, 64],
    videos: [
      {
        id: '21a',
        filename: '2023_21a_shitekisiyou',
      },
      {
        id: '21b',
        filename: '2023_21b_shitekisiyou',
      },
    ],
  },
  {
    id: 22,
    title: 'AIが学んでAIが作り出す？ 生成AIと著作権',
    description:
      '直哉がイベント用にお絵かきAIを使って作成したイラストは、昔のCDジャケットに似ていた。こんなときどうしたらいいだろう。生成AIが既存の画像を学習して絵を作り出す仕組みと著作権との関係を、どう考えたらいいだろう？',
    keywordIds: [65, 66, 27, 46],
    videos: [
      {
        id: '22a',
        filename: '2023_22ab_ai',
        buttonLabel: '物語編／解説編を見る',
      },
    ],
  },
  {
    id: 23,
    title: '出演俳優からみた著作権（インタビュー集）',
    description:
      '主演5名の俳優さんに、本作出演での経験を踏まえ、インタビューしました。今後役立ちそうな著作権の知識、クリエイティブ・コモンズ・ライセンスでの本教材の提供、その他著作権に関わるさまざまな考えを伺います。',
    keywordIds: [67, 45],
    videos: [
      {
        id: '23a',
        filename: '2023_23a_interview',
        buttonLabel: 'インタビューを見る',
      },
    ],
  },
  {
    id: 24,
    title: '出演俳優からのおすすめとメッセージ',
    description:
      '主演5名の俳優さんに、本作におけるおすすめポイントと、メッセージを伺いました。',
    keywordIds: [67, 68, 69],
    storyLabel: 'INTERVIEW',
    videos: [
      {
        id: '24a',
        filename: '2023_interview1',
        buttonLabel: 'おすすめを見る',
      },
      {
        id: '24b',
        filename: '2023_interview2',
        buttonLabel: 'メッセージを見る',
      },
    ],
  },
];

export const allKeywords: Keyword[] = [
  {
    id: 0,
    value: '著作物',
    label: '著作物',
  },
  {
    id: 1,
    value: '著作者',
    label: '著作者',
  },
  {
    id: 2,
    value: '公正な利用',
    label: '公正な利用',
  },
  {
    id: 3,
    value: '著作者の権利の保護',
    label: '著作者の権利の保護',
  },
  {
    id: 4,
    value: '著作財産権',
    label: '著作財産権',
  },
  {
    id: 5,
    value: '公衆送信権',
    label: '公衆送信権',
  },
  {
    id: 6,
    value: '送信可能化権',
    label: '送信可能化権',
  },
  {
    id: 7,
    value: '著作者人格権',
    label: '著作者人格権',
  },
  {
    id: 8,
    value: '公表権',
    label: '公表権',
  },
  {
    id: 9,
    value: '氏名表示権',
    label: '氏名表示権',
  },
  {
    id: 10,
    value: '同一性保持権',
    label: '同一性保持権',
  },
  {
    id: 11,
    value: 'みなし著作者人格権',
    label: 'みなし著作者人格権',
  },
  {
    id: 12,
    value: '保護期間',
    label: '保護期間',
  },
  {
    id: 13,
    value: '権利制限規定',
    label: '権利制限規定',
  },
  {
    id: 14,
    value: '利用許諾',
    label: '利用許諾',
  },
  {
    id: 15,
    value: '著作権法35条',
    label: '著作権法35条',
  },
  {
    id: 16,
    value: '授業目的公衆送信補償金',
    label: '授業目的公衆送信補償金',
  },
  {
    id: 17,
    value: '複製権',
    label: '複製権',
  },
  {
    id: 18,
    value: 'SNS',
    label: 'SNS',
  },
  {
    id: 19,
    value: '罰則',
    label: '罰則',
  },
  {
    id: 20,
    value: '親告罪',
    label: '親告罪',
  },
  {
    id: 21,
    value: 'フリー素材',
    label: 'フリー素材',
  },
  {
    id: 22,
    value: 'ライセンス',
    label: 'ライセンス',
  },
  {
    id: 23,
    value: '商用利用',
    label: '商用利用',
  },
  {
    id: 24,
    value: '公表された著作物',
    label: '公表された著作物',
  },
  {
    id: 25,
    value: '主従関係',
    label: '主従関係',
  },
  {
    id: 26,
    value: '出所の明示',
    label: '出所の明示',
  },
  {
    id: 27,
    value: '類似性',
    label: '類似性',
  },
  {
    id: 28,
    value: '著作物性',
    label: '著作物性',
  },
  {
    id: 29,
    value: '画風',
    label: '画風',
  },
  {
    id: 30,
    value: '著作権侵害',
    label: '著作権侵害',
  },
  {
    id: 31,
    value: '刑事裁判',
    label: '刑事裁判',
  },
  {
    id: 32,
    value: '刑事罰',
    label: '刑事罰',
  },
  {
    id: 33,
    value: '民事裁判',
    label: '民事裁判',
  },
  {
    id: 34,
    value: '差し止め',
    label: '差し止め',
  },
  {
    id: 35,
    value: '損害賠償',
    label: '損害賠償',
  },
  {
    id: 36,
    value: '名誉回復',
    label: '名誉回復',
  },
  {
    id: 37,
    value: 'JASRAC',
    label: 'JASRAC',
  },
  {
    id: 38,
    value: '非営利',
    label: '非営利',
  },
  {
    id: 39,
    value: 'eスポーツ',
    label: 'eスポーツ',
  },
  {
    id: 40,
    value: '本質的特徴の直接感得性',
    label: '本質的特徴の直接感得性',
  },
  {
    id: 41,
    value: '翻案',
    label: '翻案',
  },
  {
    id: 42,
    value: '著作隣接権',
    label: '著作隣接権',
  },
  {
    id: 43,
    value: 'YouTube',
    label: 'YouTube',
  },
  {
    id: 44,
    value: '権利の譲渡',
    label: '権利の譲渡',
  },
  {
    id: 45,
    value: 'クリエイティブ・コモンズ・ライセンス',
    label: 'クリエイティブ・コモンズ・ライセンス',
  },
  {
    id: 46,
    value: '依拠性',
    label: '依拠性',
  },
  {
    id: 47,
    value: '設定',
    label: '設定',
  },
  {
    id: 48,
    value: 'アイディア',
    label: 'アイディア',
  },
  {
    id: 49,
    value: '知的財産権',
    label: '知的財産権',
  },
  {
    id: 50,
    value: '無方式主義',
    label: '無方式主義',
  },
  {
    id: 51,
    value: '特許権',
    label: '特許権',
  },
  {
    id: 52,
    value: '実用新案権',
    label: '実用新案権',
  },
  {
    id: 53,
    value: '育成者権',
    label: '育成者権',
  },
  {
    id: 54,
    value: '意匠権',
    label: '意匠権',
  },
  {
    id: 55,
    value: '商標権',
    label: '商標権',
  },
  {
    id: 56,
    value: 'ベルヌ条約',
    label: 'ベルヌ条約',
  },
  {
    id: 57,
    value: '著作権保護期間',
    label: '著作権保護期間',
  },
  {
    id: 58,
    value: '戦時加算',
    label: '戦時加算',
  },
  {
    id: 59,
    value: '二次的著作物',
    label: '二次的著作物',
  },
  {
    id: 60,
    value: '原著作物',
    label: '原著作物',
  },
  {
    id: 61,
    value: '写り込み',
    label: '写り込み',
  },
  {
    id: 62,
    value: '付随対象著作物',
    label: '付随対象著作物',
  },
  {
    id: 63,
    value: '複製',
    label: '複製',
  },
  {
    id: 64,
    value: '私的使用のための複製',
    label: '私的使用のための複製',
  },
  {
    id: 65,
    value: '生成AI',
    label: '生成AI',
  },
  {
    id: 66,
    value: 'AIの学習',
    label: 'AIの学習',
  },
  {
    id: 67,
    value: 'インタビュー',
    label: 'インタビュー',
  },
  {
    id: 68,
    value: 'おすすめ',
    label: 'おすすめ',
  },
  {
    id: 69,
    value: 'メッセージ',
    label: 'メッセージ',
  },
];
