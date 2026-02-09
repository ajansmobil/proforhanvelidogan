/**
 * page/[id]/index.json dosyalarinda tr dolu ama en/de/ru bos alanlari
 * ceviri verisi ile doldurur. Calistirma: node fill-lang.js (web/page dizininden)
 */
const fs = require('fs');
const path = require('path');

const base = __dirname;
const ids = fs.readdirSync(base).filter(f => {
  const p = path.join(base, f);
  return fs.statSync(p).isDirectory() && fs.existsSync(path.join(p, 'index.json'));
});

// Kısa alan çevirileri: [id] -> { name: {en,de,ru}, description: {}, keyword: {}, spot: {} }
const shortTranslations = {
  'bilimsel-etkinlikler': {
    name: { en: 'Scientific Activities', de: 'Wissenschaftliche Aktivitäten', ru: 'Научная деятельность' },
    description: { en: 'Invited speaker at international panel (Kyrgyzstan), national congresses (AAA 2012 Antalya), Sakarya Endovascular Interventions Course, 9th International Cardiology Congress and 22nd Asian Society session chair, XV-XVI National Vascular Surgery Congress session chair.', de: 'Eingeladener Referent internationales Panel (Kirgisistan), nationale Kongresse (AAA 2012 Antalya), Sakarya Endovaskuläre Eingriffe Kurs, 9. Internationaler Kardiologie-Kongress und 22nd Asian Society Sitzungsleitung, XV-XVI. Nationaler Gefäßchirurgie-Kongress Sitzungsleitung.', ru: 'Приглашённый докладчик на международной панели (Кыргызстан), национальных конгрессах (AAA 2012 Анталья), курс эндоваскулярных вмешательств Сакарья, председатель секций 9-го Международного конгресса кардиологии и 22nd Asian Society, XV–XVI Национального конгресса сосудистой хирургии.' }
  },
  'dergi-hakemligi': {
    name: { en: 'Journal Peer Review', de: 'Zeitschriften-Gutachten', ru: 'Рецензирование журналов' },
    description: { en: 'Turkish Journal of Thoracic and Cardiovascular Surgery, Türkiye Klinikleri Journal of Cardiovascular Sciences, Journal of Vascular Surgery, Türkiye Klinikleri Journal of Case Reports, Cardiovascular Journal of Africa.', de: 'Türkische Zeitschrift für Thorax- und Herz-Gefäßchirurgie, Türkiye Klinikleri Journal of Cardiovascular Sciences, Gefäßchirurgie-Dergisi, Türkiye Klinikleri Journal of Case Reports, Cardiovascular Journal of Africa.', ru: 'Турецкий журнал торакальной и сердечно-сосудистой хирургии, Türkiye Klinikleri Journal of Cardiovascular Sciences, журнал сосудистой хирургии, Türkiye Klinikleri Journal of Case Reports, Cardiovascular Journal of Africa.' }
  },
  'kongre-hakemligi': {
    name: { en: 'Congress Peer Review', de: 'Kongress-Gutachten', ru: 'Рецензирование конгрессов' },
    description: { en: 'Peer review of abstracts for the 11th and 12th Turkish Thoracic and Cardiovascular Surgery Congress.', de: 'Gutachten für Beiträge zum 11. und 12. Türkischen Kongress für Thorax- und Herz-Gefäßchirurgie.', ru: 'Рецензирование тезисов 11-го и 12-го Турецкого конгресса торакальной и сердечно-сосудистой хирургии.' }
  },
  'oduller': {
    name: { en: 'Awards', de: 'Auszeichnungen', ru: 'Награды' },
    description: { en: 'Best poster award: Chlamydia pneumonia ompA Gene DNA (2nd Molecular and Diagnostic Microbiology Congress, 2002 Kemer-Antalya). Letter of commendation from Governorship of Trabzon.', de: 'Bester Poster-Preis: Chlamydia pneumonia ompA Gene DNA (2. Molecular and Diagnostic Microbiology Congress, 2002 Kemer-Antalya). Lobesbrief der Provinz Trabzon.', ru: 'Награда за лучший постер: Chlamydia pneumonia ompA Gene DNA (2-й конгресс молекулярной и диагностической микробиологии, 2002 Кемер-Анталья). Благодарность от губернаторства Трабзона.' }
  },
  'yuksek-lisans-tezleri': {
    name: { en: "Supervised Master's Theses", de: 'Betreute Masterarbeiten', ru: 'Научное руководство магистерскими диссертациями' },
    description: { en: 'Coronary bypass surgery with pulsatile and non-pulsatile cardiopulmonary bypass (Dr. Hasan Erdem, 2004); Proximal aortic surgery outcomes (Dr. Deniz Ceylan); Modified surgical maze in secondary atrial fibrillation (ADEAH, 2004).', de: 'Koronarbypass mit pulsatiler und nichtpulsatiler Herz-Lungen-Maschine (Dr. Hasan Erdem, 2004); Proximale Aortenchirurgie-Ergebnisse (Dr. Deniz Ceylan); Modifiziertes chirurgisches Maze bei sekundärem Vorhofflimmern (ADEAH, 2004).', ru: 'Коронарное шунтирование с пульсативным и непульсативным искусственным кровообращением (д-р Хасан Эрдем, 2004); Результаты проксимальной хирургии аорты (д-р Дениз Джейлан); Модифицированная хирургия лабиринта при вторичной фибрилляции предсердий (ADEAH, 2004).' }
  },
  'hs54qzyeyo': {
    name: { en: 'Treatment Methods', de: 'Behandlungsmethoden', ru: 'Методы лечения' }
  },
  'ebvuntqzxn': {
    name: { en: 'Academic Publications', de: 'Wissenschaftliche Publikationen', ru: 'Научные публикации' },
    description: { en: 'Assoc. Prof. Orhan Veli Doğan: supervised master\'s theses, peer review for Turkish Journal of Thoracic and Cardiovascular Surgery and Journal of Vascular Surgery, national and international congress session chair, endovascular courses.', de: 'Doç. Dr. Orhan Veli Doğan: Betreute Masterarbeiten, Gutachten für türkische Zeitschriften für Thorax- und Gefäßchirurgie, nationale und internationale Kongress-Sitzungsleitung, endovaskuläre Kurse.', ru: 'Доц. д-р Орхан Вели Доган: руководство магистерскими диссертациями, рецензирование в турецких журналах торакальной и сосудистой хирургии, председатель секций национальных и международных конгрессов, курсы по эндоваскулярным вмешательствам.' },
    keyword: { en: 'academic publications, cardiovascular surgery journal, congress peer review, Orhan Veli Doğan scientific', de: 'akademische Publikationen, Herz-Gefäßchirurgie Zeitschrift, Kongress-Gutachten, Orhan Veli Doğan wissenschaftlich', ru: 'научные публикации, журнал сердечно-сосудистой хирургии, рецензирование конгрессов, Орхан Вели Доган научный' },
    spot: { en: 'Master\'s theses, journal and congress peer review, national/international scientific activities. Assoc. Prof. Orhan Veli Doğan academic activities.', de: 'Masterarbeiten, Zeitschriften- und Kongress-Gutachten, nationale/internationale wissenschaftliche Aktivitäten. Doç. Dr. Orhan Veli Doğan akademische Tätigkeiten.', ru: 'Магистерские диссертации, рецензирование журналов и конгрессов, национальная/международная научная деятельность. Доц. д-р Орхан Вели Доган академическая деятельность.' }
  },
  'xnzu5au0ag': {
    name: { en: 'Contact', de: 'Kontakt', ru: 'Контакты' },
    description: { en: 'Assoc. Prof. Orhan Veli Doğan – Cardiovascular Surgery. Appointment and contact information. Director of Cardiovascular Surgery at Defne and Akademi Hospital.', de: 'Doç. Dr. Orhan Veli Doğan – Herz- und Gefäßchirurgie. Termin und Kontakt. KVC-Direktor Defne und Akademi Krankenhaus.', ru: 'Доц. д-р Орхан Вели Доган – сердечно-сосудистая хирургия. Запись на приём и контакты. Директор КВХ в больницах Defne и Akademi.' },
    keyword: { en: 'contact, appointment, cardiovascular surgery, Orhan Veli Doğan, Defne Hospital, Akademi Hospital', de: 'Kontakt, Termin, Herz-Gefäßchirurgie, Orhan Veli Doğan, Defne Krankenhaus, Akademi Krankenhaus', ru: 'контакты, запись, сердечно-сосудистая хирургия, Орхан Вели Доган, больница Defne, больница Akademi' },
    spot: { en: 'Appointment and contact. Get in touch with cardiovascular surgery specialist Assoc. Prof. Orhan Veli Doğan.', de: 'Termin und Kontakt. Kontakt mit Herz-Gefäßchirurg Doç. Dr. Orhan Veli Doğan.', ru: 'Запись и контакты. Свяжитесь со специалистом по сердечно-сосудистой хирургии доц. д-ром Орханом Вели Доганом.' }
  },
  'yvi9dlb59o': {
    name: { en: 'Curriculum Vitae', de: 'Lebenslauf', ru: 'Резюме' },
    description: { en: 'Assoc. Prof. Orhan Veli Doğan, Cardiovascular Surgery. Hacettepe Medical School, Dışkapı Training Hospital, Mustafa Kemal University. Director of Cardiovascular Surgery at Defne and Akademi Hospital.', de: 'Doç. Dr. Orhan Veli Doğan, Herz- und Gefäßchirurgie. Hacettepe Medizin, Dışkapı Ausbildungskrankenhaus, Mustafa Kemal Universität. KVC-Direktor Defne und Akademi Krankenhaus.', ru: 'Доц. д-р Орхан Вели Доган, сердечно-сосудистая хирургия. Медфак Хаджеттепе, учебная больница Дышкапы, университет Мустафы Кемаля. Директор КВХ в больницах Defne и Akademi.' },
    keyword: { en: 'Orhan Veli Doğan CV, cardiovascular surgery, Associate Professor, Hacettepe, Mustafa Kemal University', de: 'Orhan Veli Doğan Lebenslauf, Herz-Gefäßchirurgie, Dozent, Hacettepe, Mustafa Kemal Universität', ru: 'Орхан Вели Доган резюме, сердечно-сосудистая хирургия, доцент, Хаджеттепе, университет Мустафы Кемаля' },
    spot: { en: 'Assoc. Prof. Orhan Veli Doğan – Cardiovascular surgery specialist. Hacettepe and Mustafa Kemal University. Clinical chief and director of cardiovascular surgery.', de: 'Doç. Dr. Orhan Veli Doğan – Facharzt Herz-Gefäßchirurgie. Hacettepe und Mustafa Kemal Universität. Klinikchef und KVC-Direktor.', ru: 'Доц. д-р Орхан Вели Доган – специалист по сердечно-сосудистой хирургии. Хаджеттепе и университет Мустафы Кемаля. Руководитель клиники и директор КВХ.' }
  },
  'hakkimizda': {
    name: { en: 'Curriculum Vitae', de: 'Lebenslauf', ru: 'Резюме' },
    description: { en: 'Assoc. Prof. Orhan Veli Doğan, Cardiovascular Surgery. Hacettepe, Dışkapı Training Hospital, Mustafa Kemal University. Director of Cardiovascular Surgery at Defne and Akademi Hospital.', de: 'Doç. Dr. Orhan Veli Doğan, Herz- und Gefäßchirurgie. Hacettepe, Dışkapı Ausbildungskrankenhaus, Mustafa Kemal Universität. KVC-Direktor Defne und Akademi Krankenhaus.', ru: 'Доц. д-р Орхан Вели Доган, сердечно-сосудистая хирургия. Хаджеттепе, учебная больница Дышкапы, университет Мустафы Кемаля. Директор КВХ в больницах Defne и Akademi.' },
    keyword: { en: 'Orhan Veli Doğan CV, cardiovascular surgery, Associate Professor, Hacettepe, Mustafa Kemal University', de: 'Orhan Veli Doğan Lebenslauf, Herz-Gefäßchirurgie, Dozent, Hacettepe, Mustafa Kemal Universität', ru: 'Орхан Вели Доган резюме, сердечно-сосудистая хирургия, доцент, Хаджеттепе, университет Мустафы Кемаля' },
    spot: { en: 'Assoc. Prof. Orhan Veli Doğan – Cardiovascular surgery specialist. Hacettepe and Mustafa Kemal University. Clinical chief and KVC director.', de: 'Doç. Dr. Orhan Veli Doğan – Facharzt Herz-Gefäßchirurgie. Hacettepe und Mustafa Kemal Universität. Klinikchef und KVC-Direktor.', ru: 'Доц. д-р Орхан Вели Доган – специалист по сердечно-сосудистой хирургии. Хаджеттепе и университет Мустафы Кемаля. Руководитель клиники и директор КВХ.' }
  },
  'misyon': {
    name: { en: 'Mission', de: 'Mission', ru: 'Миссия' },
    description: { en: 'Assoc. Prof. Orhan Veli Doğan and team: patient-centred, evidence-based and reliable cardiovascular surgery care.', de: 'Doç. Dr. Orhan Veli Doğan und Team: patientenorientierte, evidenzbasierte und zuverlässige Herz-Gefäßchirurgie.', ru: 'Доц. д-р Орхан Вели Доган и команда: пациентоориентированная, доказательная и надёжная помощь в области сердечно-сосудистой хирургии.' },
    keyword: { en: 'mission, cardiovascular surgery, patient-centred, Orhan Veli Doğan', de: 'Mission, Herz-Gefäßchirurgie, patientenorientiert, Orhan Veli Doğan', ru: 'миссия, сердечно-сосудистая хирургия, пациентоориентированность, Орхан Вели Доган' },
    spot: { en: 'Cardiovascular surgery clinic mission: patient-centred and evidence-based care.', de: 'Mission der Klinik für Herz-Gefäßchirurgie: patientenorientierte und wissenschaftliche Versorgung.', ru: 'Миссия клиники сердечно-сосудистой хирургии: пациентоориентированная и научно обоснованная помощь.' }
  },
  'vizyon': {
    name: { en: 'Vision', de: 'Vision', ru: 'Видение' },
    description: { en: 'To be a leading and trusted centre in cardiovascular surgery; regional reference through education and scientific development.', de: 'Führendes und vertrauenswürdiges Zentrum in der Herz-Gefäßchirurgie; regionale Referenz durch Ausbildung und wissenschaftliche Entwicklung.', ru: 'Быть ведущим и надёжным центром в области сердечно-сосудистой хирургии; региональный ориентир через образование и научное развитие.' },
    keyword: { en: 'vision, cardiovascular surgery, reference centre, Orhan Veli Doğan', de: 'Vision, Herz-Gefäßchirurgie, Referenzzentrum, Orhan Veli Doğan', ru: 'видение, сердечно-сосудистая хирургия, референс-центр, Орхан Вели Доган' },
    spot: { en: 'Our vision: to be a leading and trusted reference centre in cardiovascular surgery.', de: 'Unsere Vision: führendes und vertrauenswürdiges Referenzzentrum in der Herz-Gefäßchirurgie.', ru: 'Наше видение: быть ведущим и надёжным референс-центром в области сердечно-сосудистой хирургии.' }
  },
  'gizlilikpolitikasi': {
    name: { en: 'Privacy Policy', de: 'Datenschutz', ru: 'Политика конфиденциальности' },
    description: { en: 'Proforhanvelidogan.com privacy policy: how we collect, use and protect your personal data.', de: 'Proforhanvelidogan.com Datenschutz: Erhebung, Nutzung und Schutz Ihrer personenbezogenen Daten.', ru: 'Политика конфиденциальности proforhanvelidogan.com: сбор, использование и защита персональных данных.' },
    keyword: { en: 'privacy policy, personal data, data protection, proforhanvelidogan', de: 'Datenschutz, personenbezogene Daten, proforhanvelidogan', ru: 'политика конфиденциальности, персональные данные, защита данных, proforhanvelidogan' },
    spot: { en: 'Site privacy policy: protection and use of personal data.', de: 'Datenschutz und Nutzungsbedingungen der Website.', ru: 'Политика сайта: защита и использование персональных данных.' }
  },
  'kalitepolitikamiz': {
    name: { en: 'Our Quality Policy', de: 'Unsere Qualitätspolitik', ru: 'Наша политика качества' },
    description: { en: 'Our quality policy: patient safety, continuous improvement and compliance with cardiovascular surgery standards. Assoc. Prof. Orhan Veli Doğan clinic.', de: 'Unsere Qualitätspolitik: Patientensicherheit, kontinuierliche Verbesserung, Standards der Herz-Gefäßchirurgie. Doç. Dr. Orhan Veli Doğan Klinik.', ru: 'Наша политика качества: безопасность пациентов, постоянное улучшение и соответствие стандартам сердечно-сосудистой хирургии. Клиника доц. д-ра Орхана Вели Догана.' },
    keyword: { en: 'quality policy, patient safety, cardiovascular surgery standards', de: 'Qualitätspolitik, Patientensicherheit, Herz-Gefäßchirurgie Standards', ru: 'политика качества, безопасность пациентов, стандарты сердечно-сосудистой хирургии' },
    spot: { en: 'Quality policy focused on patient safety and continuous improvement.', de: 'Qualitätspolitik mit Fokus auf Patientensicherheit und kontinuierliche Verbesserung.', ru: 'Политика качества с фокусом на безопасность пациентов и постоянное улучшение.' }
  },
  'kisiselveriler': {
    name: { en: 'Personal Data', de: 'Personenbezogene Daten', ru: 'Персональные данные' },
    description: { en: 'Processing of personal data, data controller information and data security under Turkish PDPA. Assoc. Prof. Orhan Veli Doğan website.', de: 'Verarbeitung personenbezogener Daten, Verantwortlicher, Datensicherheit nach türkischem DSG. Doç. Dr. Orhan Veli Doğan Website.', ru: 'Обработка персональных данных, сведения о контроллере и безопасность данных по турецкому Закону о персональных данных. Сайт доц. д-ра Орхана Вели Догана.' },
    keyword: { en: 'personal data, PDPA, data controller, data security', de: 'personenbezogene Daten, DSG, Verantwortlicher, Datensicherheit', ru: 'персональные данные, Закон о персональных данных, контроллер, безопасность данных' },
    spot: { en: 'Processing and protection of personal data under PDPA.', de: 'Verarbeitung und Schutz personenbezogener Daten nach DSG.', ru: 'Обработка и защита персональных данных по Закону.' }
  },
  'kullanicahaklari': {
    name: { en: 'User Rights', de: 'Betroffenenrechte', ru: 'Права пользователей' },
    description: { en: 'Your rights as data subject under PDPA: access, rectification, erasure, objection. How and when to apply.', de: 'Ihre Rechte als Betroffener nach DSG: Auskunft, Berichtigung, Löschung, Widerspruch. Antragswege und Fristen.', ru: 'Ваши права как субъекта данных по Закону: доступ, исправление, удаление, возражение. Порядок и сроки обращения.' },
    keyword: { en: 'user rights, PDPA data subject rights, access rectification erasure', de: 'Betroffenenrechte, DSG Auskunft Berichtigung Löschung', ru: 'права пользователей, права субъекта данных, доступ исправление удаление' },
    spot: { en: 'Data subject rights: access, rectification, erasure and objection.', de: 'Betroffenenrechte: Auskunft, Berichtigung, Löschung und Widerspruch.', ru: 'Права субъекта данных: доступ, исправление, удаление и возражение.' }
  },
  'yasaluyari': {
    name: { en: 'Legal Notice', de: 'Impressum / Rechtlicher Hinweis', ru: 'Правовая оговорка' },
    description: { en: 'Proforhanvelidogan.com legal notice: terms of use, limitation of liability and intellectual property.', de: 'Proforhanvelidogan.com Impressum: Nutzungsbedingungen, Haftungsbeschränkung, geistiges Eigentum.', ru: 'Правовая оговорка proforhanvelidogan.com: условия использования, ограничение ответственности и интеллектуальная собственность.' },
    keyword: { en: 'legal notice, terms of use, liability, proforhanvelidogan', de: 'Impressum, Nutzungsbedingungen, Haftung, proforhanvelidogan', ru: 'правовая оговорка, условия использования, ответственность, proforhanvelidogan' },
    spot: { en: 'Site terms of use and legal notice.', de: 'Nutzungsbedingungen und rechtlicher Hinweis der Website.', ru: 'Условия использования сайта и правовая оговорка.' }
  }
};

function setIfEmpty(obj, lang, value) {
  if (value != null && value !== '' && (!obj[lang] || obj[lang].trim() === '')) obj[lang] = value;
}

ids.forEach(id => {
  const jsonPath = path.join(base, id, 'index.json');
  const j = JSON.parse(fs.readFileSync(jsonPath, 'utf8'));
  const tr = shortTranslations[id];
  if (!tr) return;
  ['name', 'description', 'keyword', 'spot'].forEach(key => {
    if (!j[key] || !tr[key]) return;
    const target = j[key];
    if (typeof target !== 'object') return;
    ['en', 'de', 'ru'].forEach(lang => setIfEmpty(target, lang, tr[key][lang]));
  });
  fs.writeFileSync(jsonPath, JSON.stringify(j));
  console.log('OK', id);
});

console.log('Short fields done. Run fill-lang-text.js for text.en/de/ru if needed.');
