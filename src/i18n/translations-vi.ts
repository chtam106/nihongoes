import type { TranslationTree } from '@/i18n/translations.ts';

export const viTranslations: TranslationTree = {
  common: {
    playAudio: 'Nghe phát âm',
    back: 'Quay lại',
    scrollTop: 'Lên đầu trang'
  },
  errorBoundary: {
    title: 'Oops, đã có lỗi xảy ra',
    body: 'Ứng dụng gặp lỗi không mong muốn. Hãy tải lại trang để tiếp tục.',
    reload: 'Tải lại trang',
    showDetails: 'Hiện chi tiết lỗi',
    hideDetails: 'Ẩn chi tiết lỗi',
    detailsTitle: 'Chi tiết lỗi',
    copy: 'Sao chép',
    copied: 'Đã sao chép',
    close: 'Đóng'
  },
  audio: {
    settings: 'Cài đặt âm thanh',
    voice: 'Giọng đọc',
    auto: 'Tự động',
    speed: 'Tốc độ',
    test: 'Nghe thử',
    noVoices: 'Trình duyệt của bạn không có giọng tiếng Nhật.'
  },
  seo: {
    home: {
      description:
        'Học bảng chữ cái tiếng Nhật - hiragana và katakana - với bảng chữ đầy đủ, phát âm chuẩn và nhiều bài tập giúp bạn ghi nhớ từng chữ tiếng Nhật dễ dàng.'
    },
    notFound: {
      title: 'Không tìm thấy trang (404)',
      description: 'Không tìm thấy trang bạn yêu cầu.'
    },
    kanji: {
      title: 'Học Kanji thông dụng (Jōyō) từng bước',
      description:
        'Học kanji thông dụng (Jōyō) theo từng bài nhỏ, mỗi bài 10 chữ, kèm nghĩa, âm ON và KUN, từ ví dụ và phát âm chuẩn.'
    },
    alphabet: {
      title: 'Bảng chữ cái tiếng Nhật - Hiragana và Katakana',
      description:
        'Học bảng chữ cái tiếng Nhật - hiragana và katakana - với bảng chữ đầy đủ, phát âm chuẩn và nhiều bài tập giúp bạn ghi nhớ từng chữ tiếng Nhật dễ dàng.',
      hiragana: {
        title: 'Bảng Hiragana & Luyện tập (ひらがな)',
        description:
          'Học hiragana qua bảng tương tác gồm seion, tenten, maru và yoon. Nhấn để nghe phát âm chuẩn.'
      },
      katakana: {
        title: 'Bảng Katakana & Luyện tập (カタカナ)',
        description:
          'Luyện katakana với bảng chữ đầy đủ, phát âm bản xứ và bài tập cho từ mượn và nhấn mạnh.'
      },
      combined: {
        title: 'Bảng gộp Hiragana + Katakana',
        description:
          'Một bảng gojuon ghép hiragana và katakana trong từng ô kèm romaji và phát âm chuẩn - so sánh cả hai bảng chữ cạnh nhau.'
      },
      exercise: {
        title: 'Bài tập & Quiz Kana tiếng Nhật',
        description:
          'Luyện hiragana và katakana qua quiz romaji, chọn chữ, nghe chọn chữ và ghép cặp bảng chữ.',
        romaji: {
          title: 'Quiz Romaji - Luyện Hiragana & Katakana',
          description:
            'Nhìn chữ kana và chọn romaji đúng. Luyện đọc hiragana và katakana từng bước.'
        },
        character: {
          title: 'Quiz Chọn chữ Kana',
          description:
            'Nhìn romaji và chọn chữ hiragana hoặc katakana đúng. Rèn nhận diện kana với phản hồi tức thì.'
        },
        listen: {
          title: 'Quiz Nghe & Chọn chữ Kana',
          description: 'Nghe phát âm chuẩn và chọn đúng chữ hiragana hoặc katakana.'
        },
        scriptPair: {
          title: 'Quiz Ghép Hiragana ↔ Katakana',
          description: 'Ghép cặp hiragana và katakana để củng cố cả hai bảng chữ cùng lúc.'
        },
        writing: {
          title: 'Luyện viết Kana với hoạt ảnh thứ tự nét',
          description:
            'Chọn một chữ hiragana hoặc katakana cơ bản, tập viết bằng tay và làm theo hoạt ảnh hướng dẫn thứ tự nét.'
        },
        sentence: {
          title: 'Luyện phiên âm romaji câu Kana',
          description:
            'Đọc các câu viết toàn hiragana, toàn katakana hoặc kết hợp và gõ phiên âm romaji để đọc trôi chảy hơn.'
        }
      }
    }
  },
  language: {
    label: 'Ngôn ngữ',
    en: 'English',
    vi: 'Tiếng Việt'
  },
  nav: {
    home: 'Trang chủ',
    alphabet: 'Bảng chữ cái',
    hiragana: 'Hiragana',
    katakana: 'Katakana',
    combined: 'Bảng gộp',
    exercise: 'Luyện tập',
    openMenu: 'Mở menu',
    closeMenu: 'Đóng menu',
    mainNavigation: 'Điều hướng chính',
    collapse: 'Thu gọn {{label}}',
    expand: 'Mở rộng {{label}}'
  },
  home: {
    title: 'Học tiếng Nhật cùng Nihongoes',
    intro:
      'Đọc và luyện kana từng bước, rồi học tiếp với khóa JLPT N5 có lộ trình - bảng chữ tương tác, âm thanh, bài kiểm tra và luyện viết.',
    hiraganaDescription: 'Học bảng âm cơ bản dùng cho từ tiếng Nhật thuần.',
    katakanaDescription: 'Học bảng chữ dùng cho từ mượn và nhấn mạnh.',
    combinedDescription: 'So sánh hiragana và katakana cạnh nhau trong cùng một bảng.',
    exerciseDescription: 'Tự kiểm tra romaji và chữ kana, có phản hồi âm thanh.',
    alphabetSection: 'Bảng chữ cái & luyện tập',
    coursesSection: 'Khóa học'
  },
  notFound: {
    title: 'Không tìm thấy trang',
    body: 'Trang bạn tìm không tồn tại hoặc có thể đã được di chuyển. Hãy quay về trang chủ để tiếp tục.',
    backHome: 'Về trang chủ'
  },
  alphabet: {
    title: 'Bảng chữ cái',
    subtitle: 'Chọn bảng chữ để học.',
    intro:
      'Tiếng Nhật viết kết hợp ba hệ chữ. Hiragana và katakana là bảng âm tiết - mỗi chữ tương ứng đúng một âm - còn kanji là chữ biểu nghĩa mượn từ tiếng Hán. Hãy học hai bảng kana trước: chúng bao trùm mọi âm trong tiếng Nhật và là nền tảng cho mọi thứ về sau.',
    systemsHeading: 'Hệ thống chữ viết tiếng Nhật',
    systemHiragana:
      'Hiragana (ひらがな) - bảng âm tiết nét tròn gồm 46 âm cơ bản, dùng cho từ thuần Nhật, trợ từ ngữ pháp và đuôi từ.',
    systemKatakana:
      'Katakana (カタカナ) - cùng các âm đó nhưng nét vuông, dùng cho từ ngoại lai, tên nước ngoài và để nhấn mạnh.',
    systemKanji:
      'Kanji (漢字) - chữ biểu nghĩa mượn từ tiếng Hán; bạn sẽ học dần qua các khóa JLPT.',
    hiraganaDescription: 'ひらがな - bảng âm tiếng Nhật cơ bản',
    katakanaDescription: 'カタカナ - dùng cho từ ngoại lai và nhấn mạnh',
    combinedDescription: 'Xem hiragana và katakana cạnh nhau trong cùng một bảng',
    exerciseDescription: 'Luyện hiragana và katakana',
    hiraganaPageDescription:
      'Hiragana là nền tảng của chữ viết tiếng Nhật. 46 âm cơ bản (seion) dùng để viết trợ từ ngữ pháp, đuôi động từ và tính từ, cùng các từ thuần Nhật. Dấu hữu thanh (tenten và maru) và âm ghép yoon với ゃ/ゅ/ょ nhỏ mở rộng bộ này để bao trùm mọi âm tiếng Nhật.',
    katakanaPageDescription:
      'Katakana có đúng các âm như hiragana nhưng nét vuông và sắc hơn. Nó dùng cho từ ngoại lai, tên nước ngoài, từ tượng thanh, thuật ngữ khoa học và những từ cần nhấn mạnh. Học cùng hiragana giúp bạn đọc được biển hiệu, thực đơn và tên sản phẩm.',
    combinedPageDescription:
      'Hai bảng kana dùng chung các âm, nên bảng này ghép chúng trong từng ô: hiragana bên trái, katakana bên phải. Dùng để so sánh hình dạng cạnh nhau và củng cố cả hai bảng cùng lúc.',
    tapHint: 'Nhấn vào chữ để nghe phát âm.'
  },
  chart: {
    seion: 'Seion',
    voiced: 'Tenten / Maru ({{dakuten}} / {{handakuten}})',
    voicedDescription:
      'Thêm dấu tenten ({{dakuten}}) để hữu thanh hóa: k→g, s→z, t→d, h→b. Dấu maru ({{handakuten}}) biến h→p. Ví dụ: {{base}} ({{baseRomaji}}) + {{dakuten}} = {{voiced}} ({{voicedRomaji}}).',
    yoon: 'Yoon',
    yoonDescription:
      'Âm ghép với {{small1}}, {{small2}}, {{small3}} nhỏ - ví dụ: {{base}} + {{small1}} = {{result}} ({{romaji}}).',
    chouon: 'Trường âm (Chouon)',
    chouonHiragana:
      'Trường âm kéo dài nguyên âm thành hai phách. Trong hiragana, thêm nguyên âm tương ứng: あ->ああ, い->いい, う->うう. Hàng え thường thêm い, hàng お thường thêm う (nên えい đọc như ē, おう như ō).',
    chouonKatakana:
      'Trường âm kéo dài nguyên âm thành hai phách. Trong katakana, nó được viết bằng dấu kéo dài ー, bất kể là nguyên âm nào.',
    chouonColVowel: 'Nguyên âm',
    chouonColLong: 'Trường âm',
    chouonColExample: 'Ví dụ',
    playAudio: 'Phát {{char}}, {{romaji}}'
  },
  exercise: {
    title: 'Luyện tập',
    hubSubtitle: 'Chọn loại bài tập.',
    romajiDescription: 'Nhìn chữ kana và gõ romaji.',
    characterDescription: 'Chọn chữ kana đúng từ romaji, hoặc chọn romaji từ kana.',
    characterTabChooseKana: 'Chọn kana',
    characterTabChooseRomaji: 'Chọn romaji',
    listenDescription: 'Nghe và chọn chữ kana đúng.',
    scriptPairDescription: 'Ghép cặp hiragana và katakana.',
    writing: 'Luyện viết',
    writingDescription:
      'Luyện viết kana bằng tay - xem theo hàng, hoặc viết một chữ ngẫu nhiên từ phiên âm romaji.',
    writingRow: 'Hàng',
    writingCanvasAria: 'Vùng luyện viết',
    writingClear: 'Xóa nét viết',
    writingUndo: 'Xóa nét vừa viết',
    writingPreviousRow: 'Hàng trước',
    writingNextRow: 'Hàng sau',
    writingMode: 'Chế độ',
    writingModeRow: 'Tô chữ',
    writingModeRomaji: 'Từ romaji',
    writingRomajiPrompt: 'Viết chữ kana này',
    writingReveal: 'Xem đáp án',
    writingHideAnswer: 'Ẩn đáp án',
    writingNext: 'Chữ khác',
    strokeOrderTitle: 'Thứ tự nét',
    strokeOrderPrevious: 'Chữ trước',
    strokeOrderNext: 'Chữ sau',
    strokeOrderReplay: 'Chạm vào chữ để xem lại thứ tự nét.',
    strokeOrderUnavailable: 'Chữ này chưa có dữ liệu thứ tự nét.',
    strokeOrderNote:
      'Chạm vào một chữ để xem thứ tự nét. Nét chữ theo kiểu viết tay nên có thể không khớp với chữ in trên màn hình.',
    sentence: 'Phiên âm câu',
    sentenceTitle: 'Đọc câu và gõ phiên âm romaji',
    sentenceDescription: 'Nhìn câu viết bằng kana và gõ phiên âm romaji.',
    sentenceHint1: 'Viết trường âm thành hai nguyên âm liền nhau (không cần dấu gạch trên đầu).',
    sentenceHint2: 'Trợ từ đọc theo âm thật (は=wa, へ=e, を=o); gõ theo mặt chữ cũng được.',
    sentenceHint3: 'Gõ có hay không có dấu cách giữa các từ đều được.',
    sentenceType: 'Loại câu',
    sentenceTypeHiragana: 'Hiragana',
    sentenceTypeKatakana: 'Katakana',
    sentenceTypeMixed: 'Kết hợp',
    sentenceProgress: 'Câu {{current}} / {{total}}',
    sentenceScore: 'Đúng: {{correct}} / {{total}}',
    sentencePrompt: 'Gõ phiên âm romaji cho câu này',
    sentenceInputPlaceholder: 'Nhập romaji',
    showAnswer: 'Hiện đáp án',
    hideAnswer: 'Ẩn đáp án',
    sentenceComplete: 'Hoàn thành bài tập!',
    sentenceRestart: 'Làm lại',
    chooseCharacter: 'Nhận diện kana & romaji',
    listenPickShort: 'Nghe & chọn',
    script: 'Bảng chữ',
    scriptAll: 'All',
    scriptKana: 'kana',
    scope: 'Phạm vi',
    rowFrom: 'Từ hàng',
    rowTo: 'Đến hàng',
    allRows: 'Tất cả các hàng',
    guessRomaji: 'Điền romaji',
    romajiInputPlaceholder: 'Nhập romaji',
    check: 'Kiểm tra',
    scriptPair: 'Hiragana ↔ Katakana',
    pairDirection: 'Hướng',
    pairHiraToKata: 'あ → ア',
    pairKataToHira: 'ア → あ',
    pairHiraToKataLabel: 'Hiragana sang Katakana',
    pairKataToHiraLabel: 'Katakana sang Hiragana',
    pairMixed: 'Hỗn hợp',
    questionListen: 'Bạn nghe thấy chữ {{script}} nào?',
    questionScriptPairHiraToKata: 'Katakana tương ứng là gì?',
    questionScriptPairKataToHira: 'Hiragana tương ứng là gì?',
    replayAudio: 'Nghe lại',
    questionRomaji: 'Romaji của {{script}} này là gì?',
    questionCharacter: 'Chữ {{script}} này là gì?',
    scopeAll: 'All',
    scopeSeion: 'Seion',
    scopeDakuten: 'Tenten',
    scopeHandakuten: 'Maru',
    scopeYoon: 'Yoon',
    scopeLegend:
      'Seion = 46 kana cơ bản; Tenten ({{dakuten}}) và Maru ({{handakuten}}) = dấu hữu thanh; Yoon = âm ghép với ゃ/ゅ/ょ nhỏ.',
    groupSeionRows: 'Hàng seion',
    groupYoonRows: 'Hàng yoon',
    rowDefault: 'Hàng',
    yoonRowDefault: 'Hàng yoon',
    rowToLast: 'Đến hàng cuối',
    rowLabel: 'Hàng {{name}} ({{char}})'
  },
  kanji: {
    overviewTitle: 'Kanji',
    overviewSubtitle: 'Chọn một lớp để bắt đầu học.',
    overviewIntro:
      'Học kanji từng bước: chọn một lớp bên dưới và học theo từng bài, kèm nghĩa, âm ON và KUN, từ ví dụ và luyện viết.',
    collectionsHeading: 'Jōyō kanji theo lớp',
    aboutHeading: 'Kanji là gì?',
    aboutWhat:
      'Kanji (漢字) là chữ biểu nghĩa mượn từ tiếng Hán. Mỗi chữ mang một nghĩa và một hoặc nhiều cách đọc, được viết xen kẽ với hai bảng chữ hiragana và katakana.',
    aboutCount:
      'Tổng cộng có hàng chục nghìn chữ kanji, nhưng chỉ cần khoảng 2.136 chữ Jōyō (thông dụng) là đọc được hầu hết tiếng Nhật hiện đại - báo chí, sách vở và biển hiệu. Trong đó khoảng 1.000 chữ được dạy ở bậc tiểu học.',
    aboutJlpt:
      'Với JLPT, bạn cần khoảng 100 chữ ở N5, 300 ở N4, 650 ở N3, 1.000 ở N2 và hơn 2.000 ở N1.',
    tipsHeading: 'Cách học kanji',
    tipsContext:
      'Học kanji qua từ vựng - các từ thật trong ngữ cảnh - thay vì học thuộc từng chữ rời rạc.',
    tipsRadicals:
      'Phân tách mỗi kanji thành các bộ thủ (thành phần cấu tạo); nhớ 休 là "người 亻 + cây 木" dễ hơn nhiều so với nhớ từng nét.',
    tipsReview:
      'Luyện cả hai chiều - nhận diện nghĩa và nhớ lại chữ - và ôn lại thường xuyên để nhớ cách đọc.',
    lessonsHeading: 'Danh sách bài học',
    lessonLabel: 'Bài {{number}}',
    lessonCount: '{{count}} bài',
    kanjiCount: '{{count}} chữ kanji',
    detailHint: 'Bấm vào từ ví dụ để nghe phát âm.',
    meaningLabel: 'Nghĩa',
    onReading: 'Âm ON',
    kunReading: 'Âm KUN',
    readingsTitle: 'Âm ON & Âm KUN',
    onReadingDesc:
      'Âm ON (音読み) là âm đọc mượn từ tiếng Hán, thường dùng trong từ ghép, vd 三月 (さんがつ, tháng Ba).',
    kunReadingDesc:
      'Âm KUN (訓読み) là âm đọc thuần Nhật, dùng khi chữ đứng riêng hoặc có đuôi kana, vd 三つ (みっつ, ba cái).',
    examples: 'Từ ví dụ',
    mnemonic: 'Cách ghi nhớ',
    note: 'Lưu ý',
    kanjiHeading: 'Chữ {{number}}',
    practiceHeading: 'Luyện tập',
    practiceSubtitle: 'Tự kiểm tra kanji của bài này.',
    quizTitle: 'Luyện nghĩa',
    quizMeaning: 'Nhìn kanji chọn nghĩa',
    quizCharacter: 'Nhìn nghĩa chọn kanji',
    quizMeaningPrompt: 'Kanji này nghĩa là gì?',
    quizCharacterPrompt: 'Kanji nào mang nghĩa này?',
    writing: 'Viết kanji',
    writingKanji: 'Kanji',
    reviewLesson: 'Xem lại bài học',
    radicals: 'Bộ thủ',
    radicalsTitle: 'Bộ thủ kanji (部首)',
    radicalsSubtitle: '214 thành phần cấu tạo nên chữ kanji.',
    radicalsIntro:
      'Bộ thủ (bushu) là các thành phần cấu tạo nên chữ kanji. Phần lớn gợi ý ý nghĩa - ví dụ 氵(nước) xuất hiện trong 海 (biển) và 泳 (bơi). Học bộ thủ giúp phân tích, ghi nhớ và tra cứu kanji dễ hơn. Bên dưới sắp xếp theo số nét.',
    radicalsStrokesGroup: '{{count}} nét',
    radicalsCount: '{{count}} bộ thủ',
    radicalsLegendHeading: 'Cách đọc thẻ bộ thủ',
    radicalsLegendChar: 'Chữ lớn - bộ thủ ở dạng đứng riêng.',
    radicalsLegendVariant:
      'Chữ nhỏ bên dưới - biến thể (dạng ghép) dùng khi bộ nằm trong chữ khác, vd 人 → 亻, 水 → 氵.',
    radicalsLegendMeaning: 'Dòng in đậm - nghĩa của bộ thủ (Hán-Việt - nghĩa tiếng Việt).',
    radicalsLegendName: 'Dòng xám - tên tiếng Nhật của bộ thủ (romaji).',
    notFoundTitle: 'Không tìm thấy bài học',
    notFoundBody: 'Bài kanji này không tồn tại. Hãy quay lại trang tổng quan Kanji.'
  },
  course: {
    lessonsHeading: 'Danh sách bài học',
    phrasesHeading: 'Mẫu câu',
    referenceHeading: 'Từ vựng tham khảo',
    referenceSubtitle: 'Từ mở rộng liên quan tới bài học, cũng có trong bài luyện từ vựng.',
    lessonLabel: 'Bài {{number}}',
    focusLabel: 'Trong bài này',
    audioHint: 'Bấm vào bất kỳ từ vựng hoặc câu nào để nghe phát âm.',
    vocabulary: 'Từ vựng',
    grammar: 'Ngữ pháp',
    examples: 'Ví dụ',
    answers: 'Cách trả lời',
    previousLesson: 'Bài trước',
    nextLesson: 'Bài sau',
    counts: '{{vocab}} từ · {{grammar}} điểm ngữ pháp',
    notFoundTitle: 'Không tìm thấy bài học',
    notFoundBody: 'Bài học này không tồn tại. Hãy quay lại trang tổng quan khóa học.',
    practiceHeading: 'Luyện tập',
    exerciseSubtitle:
      'Tự kiểm tra từ vựng, ngữ pháp, đọc hiểu, luyện nghe và viết kanji của bài này.',
    startExercise: 'Từ vựng',
    startGrammar: 'Ngữ pháp',
    grammarClozePrompt: 'Điền vào chỗ trống',
    vocabWordToMeaning: 'Chữ -> nghĩa',
    vocabMeaningToWord: 'Nghĩa -> chữ',
    vocabPromptMeaning: 'Từ này nghĩa là gì?',
    vocabPromptWord: 'Từ nào có nghĩa là',
    vocabScript: 'Loại chữ',
    vocabScriptKana: 'Kana',
    vocabScriptKanji: 'Kanji',
    vocabScriptAll: 'Tất cả',
    listening: 'Luyện nghe',
    startListening: 'Luyện nghe',
    listenPrompt: 'Bạn nghe được gì?',
    play: 'Phát âm thanh',
    replay: 'Nghe lại',
    speechUnsupported: 'Trình duyệt của bạn không hỗ trợ phát âm thanh cho bài này.',
    reading: 'Đọc hiểu',
    startReading: 'Đọc hiểu',
    writing: 'Viết kanji',
    startWriting: 'Viết kanji',
    writingToggleGuide: 'Ẩn/hiện nét mờ',
    writingWord: 'Từ',
    writingPrevWord: 'Từ trước',
    writingNextWord: 'Từ sau',
    comprehension: 'Câu hỏi đọc hiểu',
    showTranslation: 'Hiện bản dịch',
    hideTranslation: 'Ẩn bản dịch',
    showPhonetics: 'Hiện phiên âm',
    hidePhonetics: 'Ẩn phiên âm',
    questionProgress: 'Câu {{current}} / {{total}}',
    chooseAnswer: 'Chọn đáp án đúng',
    typeAnswer: 'Điền từ còn thiếu',
    inputPlaceholder: 'Đáp án của bạn (kana)',
    check: 'Kiểm tra',
    answerWas: 'Đáp án: {{answer}}',
    correct: 'Correct',
    incorrect: 'Incorrect',
    next: 'Tiếp theo',
    seeResults: 'Xem kết quả',
    resultTitle: 'Hoàn thành bài tập!',
    resultGreat: 'Xuất sắc! Bạn nắm rất chắc bài này.',
    resultGood: 'Khá tốt - xem lại câu sai rồi thử lại nhé.',
    resultKeepGoing: 'Cố lên - hãy ôn lại bài rồi làm lại.',
    retry: 'Làm lại',
    reviewLesson: 'Xem lại bài học'
  }
};
