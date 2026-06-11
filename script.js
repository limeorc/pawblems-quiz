(() => {
  const app = document.getElementById('app');
  const config = window.QUIZ_CONFIG;
  const data = window.QUIZ_DATA;
  const DESIGN_W = 1080;
  const DESIGN_H = 1920;
  const state = {
    name: '',
    step: 0,
    answers: [],
    scores: { brain: 0, aesthetic: 0, structure: 0 },
    scoringOrder: []
  };

  function scaleStyle(rect) {
    return `left:${rect.x / DESIGN_W * 100}%;top:${rect.y / DESIGN_H * 100}%;width:${rect.w / DESIGN_W * 100}%;height:${rect.h / DESIGN_H * 100}%;`;
  }

  function renderName() {
    app.innerHTML = `<section class="screen"><img class="bg" src="assets/q0.png" alt="輸入姓名"><input id="nameInput" class="name-input" autocomplete="name" placeholder="" aria-label="你的大名"><button id="nextBtn" class="next-btn" aria-label="下一步"></button><div id="error" class="error">請先輸入姓名</div></section>`;
    const input = document.getElementById('nameInput');
    input.focus({ preventScroll: true });
    const go = () => {
      const value = input.value.trim();
      if (!value) { document.getElementById('error').style.display = 'block'; return; }
      state.name = value;
      state.step = 1;
      renderQuestion(0);
    };
    document.getElementById('nextBtn').addEventListener('click', go);
    input.addEventListener('keydown', e => { if (e.key === 'Enter') go(); });
  }

  function renderQuestion(index) {
    const q = data.questions[index];
    const buttons = q.choices.map(choice => `<button class="hotspot" style="${scaleStyle(choice.rect)}" aria-label="${q.text}，選項 ${choice.key}：${choice.text}" data-key="${choice.key}"></button>`).join('');
    app.innerHTML = `<section class="screen"><img class="bg" src="${q.image}" alt="${q.text}">${buttons}</section>`;
    document.querySelectorAll('.hotspot').forEach(btn => {
      btn.addEventListener('click', () => answer(index, btn.dataset.key));
    });
  }

  function answer(index, key) {
    const q = data.questions[index];
    const choice = q.choices.find(c => c.key === key);
    state.scores[choice.type] += 1;
    state.scoringOrder.push(choice.type);
    state.answers.push({
      questionId: q.id,
      question: q.text,
      choiceKey: choice.key,
      choiceText: choice.text,
      type: choice.type,
      typeName: config.types[choice.type]
    });
    if (index < data.questions.length - 1) renderQuestion(index + 1);
    else renderLoading();
  }

  function getResultType() {
    const max = Math.max(...Object.values(state.scores));
    const tied = Object.keys(state.scores).filter(type => state.scores[type] === max);
    if (tied.length === 1) return tied[0];
    if (config.tieBreaker === 'lastAnswer') {
      for (let i = state.scoringOrder.length - 1; i >= 0; i--) {
        if (tied.includes(state.scoringOrder[i])) return state.scoringOrder[i];
      }
    }
    return tied[0];
  }

  function renderLoading() {
    app.innerHTML = `<section class="screen"><img class="bg" src="assets/loading.png" alt="等待測驗結果"><div class="loading-spin" aria-hidden="true"></div></section>`;
    setTimeout(finalize, 2000);
  }

  async function finalize() {
    const resultType = getResultType();
    const record = {
      id: `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
      createdAt: new Date().toISOString(),
      name: state.name,
      answers: state.answers,
      scores: { ...state.scores },
      resultType,
      resultName: config.types[resultType]
    };
    saveLocal(record);
    postRemote(record);
    renderResult(resultType);
  }

  function saveLocal(record) {
    const key = 'pawblems_quiz_records';
    const records = JSON.parse(localStorage.getItem(key) || '[]');
    records.push(record);
    localStorage.setItem(key, JSON.stringify(records));
  }

  function postRemote(record) {
    const url = (config.googleAppsScriptUrl || '').trim();
    if (!url) return;
    const body = new URLSearchParams({ action: 'create', payload: JSON.stringify(record) });
    fetch(url, { method: 'POST', mode: 'no-cors', body }).catch(() => {});
  }

  function renderResult(type) {
    app.innerHTML = `<section class="screen"><img class="bg" src="${data.resultImages[type]}" alt="你的測驗結果：${config.types[type]}"></section>`;
  }

  renderName();
})();
