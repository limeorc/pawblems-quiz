window.QUIZ_DATA = {
  questions: [
    {
      id: 'q1', image: 'assets/q1.png', text: '看到一個新企劃時，你第一個反應是？',
      choices: [
        { key: 'A', text: '我已經想好下一集和下下集了，這會是個超有戲的故事！', type: 'brain', rect: { x: 138, y: 823, w: 871, h: 185 } },
        { key: 'B', text: '這個視覺方向要先定好……咦，這好像很適合XXX風格耶！', type: 'aesthetic', rect: { x: 138, y: 1109, w: 871, h: 185 } }
      ]
    },
    {
      id: 'q2', image: 'assets/q2.png', text: '團隊討論時，你最常扮演哪種角色？',
      choices: [
        { key: 'A', text: '一邊補充設定，甚至已經開始想角色背景和劇情反轉。', type: 'brain', rect: { x: 138, y: 823, w: 871, h: 185 } },
        { key: 'B', text: '把大家的想法整理成可以執行的步驟，思考技術可行性。', type: 'structure', rect: { x: 138, y: 1109, w: 871, h: 185 } }
      ]
    },
    {
      id: 'q3', image: 'assets/q3.png', text: '看到一張美術圖時，你最容易先注意到什麼？',
      choices: [
        { key: 'A', text: '感受它的風格、配色、構圖和角色造型夠不夠吸引人。', type: 'aesthetic', rect: { x: 138, y: 823, w: 871, h: 185 } },
        { key: 'B', text: '開始想如果要進3D製作，模型、材質、燈光和鏡頭要怎麼做。', type: 'structure', rect: { x: 138, y: 1109, w: 871, h: 185 } }
      ]
    },
    {
      id: 'q4', image: 'assets/q4.png', text: '如果要讓角色被更多人喜歡，你最看重什麼？',
      choices: [
        { key: 'A', text: '替角色塑造人設、口頭禪、社群梗圖。', type: 'brain', rect: { x: 138, y: 823, w: 871, h: 185 } },
        { key: 'B', text: '嘗試多元的視覺風格、設計周邊商品，讓人一眼就想收藏。', type: 'aesthetic', rect: { x: 138, y: 1109, w: 871, h: 185 } }
      ]
    },
    {
      id: 'q5', image: 'assets/q5.png', text: '作品卡關了，你通常會先從哪裡開始找問題？',
      choices: [
        { key: 'A', text: '先想：是不是角色動機不夠清楚？世界觀哪裡還沒說服我？', type: 'brain', rect: { x: 138, y: 823, w: 871, h: 185 } },
        { key: 'B', text: '是不是我的場景、空間、細節，不夠貼合故事主軸？', type: 'structure', rect: { x: 138, y: 1109, w: 871, h: 185 } }
      ]
    },
    {
      id: 'q6', image: 'assets/q6.png', text: '什麼狀況最讓你受不了？',
      choices: [
        { key: 'A', text: '畫面明明可以更好看，配色、排版、風格就是差一點。', type: 'aesthetic', rect: { x: 138, y: 823, w: 871, h: 185 } },
        { key: 'B', text: '東西明明可以做得更完整，但細節、結構、技術沒有收乾淨。', type: 'structure', rect: { x: 138, y: 1109, w: 871, h: 185 } }
      ]
    },
    {
      id: 'q7', image: 'assets/q7.png', text: '如果你要介紹一個作品給朋友，你會怎麼說？',
      choices: [
        { key: 'A', text: '先講故事設定、角色關係、劇情亮點，講到自己越來越興奮。', type: 'brain', rect: { x: 138, y: 823, w: 871, h: 185 } },
        { key: 'B', text: '先講美術風格、畫面質感、視覺設計，覺得美感才是第一印象。', type: 'aesthetic', rect: { x: 138, y: 1066, w: 871, h: 185 } },
        { key: 'C', text: '先講製作細節、技術難度、光影材質，忍不住分析它到底怎麼做出來。', type: 'structure', rect: { x: 138, y: 1309, w: 871, h: 185 } }
      ]
    }
  ],
  resultImages: {
    brain: 'assets/result_brain.png',
    aesthetic: 'assets/result_aesthetic.png',
    structure: 'assets/result_structure.png'
  }
};
