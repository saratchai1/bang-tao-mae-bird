const birds = [
  {
    id: 'white-throated-kingfisher',
    thai: 'นกกะเต็นอกขาว',
    english: 'White-throated Kingfisher',
    scientific: 'Halcyon smyrnensis',
    wiki: 'White-throated_kingfisher',
    habitat: 'waterside',
    habitatLabel: 'ริมอ่างและลำคลอง',
    time: 'เช้าตรู่ – สาย',
    spot: 'กิ่งไม้ สายไฟ และเสาริมน้ำ',
    description: 'นกกะเต็นสีสดที่มักเกาะในจุดเปิดเพื่อมองหาเหยื่อ สังเกตได้จากคอและอกสีขาว ปากแดง และปีกสีน้ำเงินเข้ม'
  },
  {
    id: 'common-kingfisher',
    thai: 'นกกะเต็นน้อยธรรมดา',
    english: 'Common Kingfisher',
    scientific: 'Alcedo atthis',
    wiki: 'Common_kingfisher',
    habitat: 'waterside',
    habitatLabel: 'ริมอ่างและลำคลอง',
    time: 'เช้าตรู่ – บ่าย',
    spot: 'กิ่งต่ำเหนือผิวน้ำและคันคลอง',
    description: 'ตัวเล็ก สีฟ้า–ส้มเด่น มักบินต่ำและเร็วเหนือผิวน้ำ เหมาะกับการเฝ้ามองตามจุดที่มีปลาเล็กและกิ่งสำหรับเกาะซุ่ม'
  },
  {
    id: 'little-egret',
    thai: 'นกยางเปีย',
    english: 'Little Egret',
    scientific: 'Egretta garzetta',
    wiki: 'Little_egret',
    habitat: 'waterside',
    habitatLabel: 'ริมอ่างและลำคลอง',
    time: 'เช้า – เย็น',
    spot: 'น้ำตื้น ขอบตลิ่ง และพื้นที่ชุ่มน้ำ',
    description: 'นกยางสีขาวรูปร่างเพรียว มักเดินช้า ๆ ในน้ำตื้นเพื่อจับปลา กุ้ง และสัตว์น้ำขนาดเล็ก'
  },
  {
    id: 'white-breasted-waterhen',
    thai: 'นกกวัก',
    english: 'White-breasted Waterhen',
    scientific: 'Amaurornis phoenicurus',
    wiki: 'White-breasted_waterhen',
    habitat: 'waterside',
    habitatLabel: 'พืชริมน้ำ',
    time: 'เช้าตรู่ – พลบค่ำ',
    spot: 'พงหญ้า กอพืช และขอบน้ำสงบ',
    description: 'ลำตัวเข้ม หน้ากับอกขาว ชอบเดินตามพงหญ้าริมน้ำ มักได้ยินเสียงร้องก่อนเห็นตัว'
  },
  {
    id: 'red-wattled-lapwing',
    thai: 'นกกระแตแต้แว้ด',
    english: 'Red-wattled Lapwing',
    scientific: 'Vanellus indicus',
    wiki: 'Red-wattled_lapwing',
    habitat: 'open',
    habitatLabel: 'พื้นที่เปิด',
    time: 'เช้า – เย็น',
    spot: 'คันดิน ลานโล่ง และขอบอ่าง',
    description: 'นกพื้นดินขายาวที่มีเสียงร้องเป็นเอกลักษณ์ พบง่ายในพื้นที่เปิดใกล้น้ำ โดยเฉพาะบริเวณที่มองเห็นพื้นโล่งชัดเจน'
  },
  {
    id: 'oriental-pied-hornbill',
    thai: 'นกแก๊ก',
    english: 'Oriental Pied Hornbill',
    scientific: 'Anthracoceros albirostris',
    wiki: 'Oriental_pied_hornbill',
    habitat: 'canopy',
    habitatLabel: 'เรือนยอดป่า',
    time: 'เช้าตรู่ – สาย',
    spot: 'ต้นไม้ใหญ่และแนวเรือนยอด',
    description: 'นกเงือกขนาดกลางสีดำ–ขาว ปากใหญ่มีโหนก มักเคลื่อนที่บนเรือนยอดและใช้ต้นไม้ใหญ่เป็นแหล่งอาหารและที่พัก'
  },
  {
    id: 'greater-racket-tailed-drongo',
    thai: 'นกแซงแซวหางบ่วงใหญ่',
    english: 'Greater Racket-tailed Drongo',
    scientific: 'Dicrurus paradiseus',
    wiki: 'Greater_racket-tailed_drongo',
    habitat: 'canopy',
    habitatLabel: 'ชายป่าและเรือนยอด',
    time: 'เช้า – สาย',
    spot: 'กิ่งโล่งใต้เรือนยอดและชายป่า',
    description: 'นกสีดำมันวาว หางยาวมีปลายคล้ายบ่วงเด่น ชอบเกาะในจุดที่มองเห็นช่องบินของแมลง และมีเสียงร้องหลากหลาย'
  },
  {
    id: 'blue-tailed-bee-eater',
    thai: 'นกจาบคาหัวเขียว',
    english: 'Blue-tailed Bee-eater',
    scientific: 'Merops philippinus',
    wiki: 'Blue-tailed_bee-eater',
    habitat: 'edge',
    habitatLabel: 'ชายป่าและพื้นที่เปิด',
    time: 'สาย – บ่าย',
    spot: 'กิ่งแห้ง สายไฟ และคันดินโล่ง',
    description: 'นกสีเขียวสดที่จับแมลงกลางอากาศ มักเลือกกิ่งโล่งหรือสายไฟเป็นจุดพักก่อนโฉบออกไปหาอาหาร'
  },
  {
    id: 'black-naped-oriole',
    thai: 'นกขมิ้นท้ายทอยดำ',
    english: 'Black-naped Oriole',
    scientific: 'Oriolus chinensis',
    wiki: 'Black-naped_oriole',
    habitat: 'canopy',
    habitatLabel: 'เรือนยอดป่า',
    time: 'เช้า – สาย',
    spot: 'พุ่มใบและยอดไม้ที่มีผลไม้',
    description: 'สีเหลืองสดตัดดำ เห็นได้เด่นเมื่อเคลื่อนผ่านยอดไม้ ชอบแมลง ผลไม้ และพื้นที่ที่มีพุ่มเรือนยอดต่อเนื่อง'
  },
  {
    id: 'greater-coucal',
    thai: 'นกกระปูดใหญ่',
    english: 'Greater Coucal',
    scientific: 'Centropus sinensis',
    wiki: 'Greater_coucal',
    habitat: 'edge',
    habitatLabel: 'พงหญ้าและชายป่า',
    time: 'เช้า – เย็น',
    spot: 'พงหนา กอหญ้า และกิ่งต่ำ',
    description: 'ตัวใหญ่สีดำ ปีกน้ำตาลแดง ชอบพุ่มรกและชายป่า บินไม่ไกลมากและมักเดินหรือกระโดดตามพืชระดับต่ำ'
  },
  {
    id: 'asian-koel',
    thai: 'นกกาเหว่า',
    english: 'Asian Koel',
    scientific: 'Eudynamys scolopaceus',
    wiki: 'Asian_koel',
    habitat: 'canopy',
    habitatLabel: 'เรือนยอดและสวน',
    time: 'เช้าตรู่',
    spot: 'ยอดไม้ใหญ่และไม้ผล',
    description: 'ได้ยินเสียงร้องได้ไกล โดยตัวผู้สีดำมันวาว ส่วนตัวเมียมีลายจุด ชอบอาศัยตามเรือนยอดและพื้นที่ที่มีผลไม้'
  },
  {
    id: 'olive-backed-sunbird',
    thai: 'นกกินปลีอกเหลือง',
    english: 'Olive-backed Sunbird',
    scientific: 'Cinnyris jugularis',
    wiki: 'Olive-backed_sunbird',
    habitat: 'edge',
    habitatLabel: 'ชายป่าและพุ่มดอก',
    time: 'เช้า – สาย',
    spot: 'พุ่มดอก ไม้ริมทาง และสวน',
    description: 'นกกินปลีขนาดเล็กที่เคลื่อนไหวรวดเร็ว มักเข้าใกล้พุ่มดอกเพื่อกินน้ำหวานและแมลงขนาดเล็ก'
  }
];

const categories = [
  ['all', 'นกทั้งหมด'],
  ['waterside', 'ป่าริมน้ำ'],
  ['canopy', 'เรือนยอดป่า'],
  ['edge', 'ชายป่า'],
  ['open', 'พื้นที่เปิด']
];

const grid = document.querySelector('#birdGrid');
const filterWrap = document.querySelector('#filters');
const modal = document.querySelector('#birdModal');
const modalClose = document.querySelector('#modalClose');
const imageCache = new Map();

function cardMarkup(bird, index) {
  return `<article class="bird-card reveal" data-habitat="${bird.habitat}" data-bird="${bird.id}" tabindex="0" role="button" aria-label="ดูรายละเอียด ${bird.thai}">
    <div class="bird-card__fallback">✦</div>
    <img class="bird-card__image" data-wiki="${bird.wiki}" alt="${bird.thai} (${bird.english})" loading="lazy" hidden>
    <span class="bird-card__number">${String(index + 1).padStart(2, '0')}</span>
    <span class="bird-card__arrow">↗</span>
    <div class="bird-card__content">
      <span class="bird-card__habitat">${bird.habitatLabel}</span>
      <h3>${bird.thai}</h3>
      <p>${bird.english}</p>
    </div>
  </article>`;
}

grid.innerHTML = birds.map(cardMarkup).join('');

categories.forEach(([key, label], index) => {
  const count = key === 'all' ? birds.length : birds.filter(b => b.habitat === key).length;
  const button = document.createElement('button');
  button.type = 'button';
  button.className = `filter-btn${index === 0 ? ' is-active' : ''}`;
  button.dataset.filter = key;
  button.innerHTML = `${label} <span>${String(count).padStart(2, '0')}</span>`;
  filterWrap.appendChild(button);
});

filterWrap.addEventListener('click', (event) => {
  const button = event.target.closest('.filter-btn');
  if (!button) return;
  document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.toggle('is-active', btn === button));
  const filter = button.dataset.filter;
  document.querySelectorAll('.bird-card').forEach(card => {
    card.classList.toggle('is-hidden', filter !== 'all' && card.dataset.habitat !== filter);
  });
});

async function loadWikiImage(img) {
  const title = img.dataset.wiki;
  try {
    if (!imageCache.has(title)) {
      const response = await fetch(`https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(title)}`);
      if (!response.ok) throw new Error('Image data unavailable');
      const data = await response.json();
      imageCache.set(title, data.thumbnail?.source || data.originalimage?.source || '');
    }
    const src = imageCache.get(title);
    if (src) {
      img.src = src.replace(/\/\d+px-/, '/640px-');
      img.hidden = false;
    }
  } catch (error) {
    img.hidden = true;
  }
}

document.querySelectorAll('.bird-card__image').forEach(loadWikiImage);

function openBird(birdId) {
  const bird = birds.find(item => item.id === birdId);
  if (!bird) return;
  const cardImg = document.querySelector(`[data-bird="${birdId}"] .bird-card__image`);
  const modalImg = document.querySelector('#modalImage');
  modalImg.src = cardImg?.src || '';
  modalImg.alt = `${bird.thai} (${bird.english})`;
  document.querySelector('#modalHabitat').textContent = bird.habitatLabel;
  document.querySelector('#modalEnglish').textContent = bird.english;
  document.querySelector('#modalTitle').textContent = bird.thai;
  document.querySelector('#modalScientific').textContent = bird.scientific;
  document.querySelector('#modalDescription').textContent = bird.description;
  document.querySelector('#modalTime').textContent = bird.time;
  document.querySelector('#modalSpot').textContent = bird.spot;
  modal.showModal();
}

grid.addEventListener('click', event => {
  const card = event.target.closest('.bird-card');
  if (card) openBird(card.dataset.bird);
});
grid.addEventListener('keydown', event => {
  if ((event.key === 'Enter' || event.key === ' ') && event.target.classList.contains('bird-card')) {
    event.preventDefault();
    openBird(event.target.dataset.bird);
  }
});
modalClose.addEventListener('click', () => modal.close());
modal.addEventListener('click', event => {
  const rect = modal.getBoundingClientRect();
  const outside = event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom;
  if (outside) modal.close();
});

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.08 });
document.querySelectorAll('.reveal').forEach((el, index) => {
  el.style.transitionDelay = `${Math.min(index % 5, 4) * 55}ms`;
  revealObserver.observe(el);
});

const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
if (!reduceMotion) {
  window.addEventListener('scroll', () => {
    const y = window.scrollY;
    document.querySelector('.karst--left').style.transform = `scaleX(-1) translateY(${y * 0.045}px)`;
    document.querySelector('.karst--right').style.transform = `translateY(${y * 0.06}px)`;
    document.querySelector('.forest--back').style.transform = `translateY(${y * 0.025}px)`;
  }, { passive: true });
}

const soundButton = document.querySelector('#soundscapeButton');
let audioContext;
let soundNodes = [];
function stopSoundscape() {
  soundNodes.forEach(node => { try { node.stop?.(); node.disconnect?.(); } catch (_) {} });
  soundNodes = [];
  soundButton.classList.remove('is-playing');
  soundButton.lastChild.textContent = ' เปิดบรรยากาศป่า';
}
function startSoundscape() {
  audioContext = audioContext || new (window.AudioContext || window.webkitAudioContext)();
  const master = audioContext.createGain();
  master.gain.value = 0.025;
  master.connect(audioContext.destination);
  const noiseBuffer = audioContext.createBuffer(1, audioContext.sampleRate * 2, audioContext.sampleRate);
  const data = noiseBuffer.getChannelData(0);
  for (let i = 0; i < data.length; i++) data[i] = Math.random() * 2 - 1;
  const noise = audioContext.createBufferSource();
  noise.buffer = noiseBuffer;
  noise.loop = true;
  const filter = audioContext.createBiquadFilter();
  filter.type = 'lowpass';
  filter.frequency.value = 900;
  noise.connect(filter).connect(master);
  noise.start();
  soundNodes.push(noise, filter, master);
  soundButton.classList.add('is-playing');
  soundButton.lastChild.textContent = ' ปิดบรรยากาศป่า';
}
soundButton.addEventListener('click', () => soundButton.classList.contains('is-playing') ? stopSoundscape() : startSoundscape());
