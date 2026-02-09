// Kurumsal alt sayfalar için text.tr içerikleri (min 2000 karakter, HTML). Çalıştırma: node _kurumsal-texts.js
const fs = require('fs');
const path = require('path');

const texts = {
  misyon: `<p>Doç. Dr. Orhan Veli Doğan ve ekibi olarak <b>misyonumuz</b>, kalp damar cerrahisi alanında hasta odaklı, bilimsel kanıta dayalı ve güvenilir sağlık hizmeti sunmaktır.</p>
<p>Hastalarımızın tanı ve tedavi süreçlerinde ulusal ve uluslararası kılavuzlara uygun, güncel yöntemleri uyguluyoruz. Koroner bypass, kapak cerrahisi, TAVİ, vasküler ve endovasküler girişimlerde deneyimli kadromuzla bölgemizde referans merkez olmayı hedefliyoruz.</p>
<p>Eğitim ve bilimsel gelişime önem veriyoruz; yüksek lisans tezleri yönetimi, dergi ve kongre hakemliği, ulusal ve uluslararası bilimsel toplantılardaki katılımımız bu misyonun bir parçasıdır. Hasta güvenliği ve kalite standartları her zaman önceliğimizdir.</p>
<p>Özel Defne Hastanesi ve Özel Akademi Hastanesi Kalp Damar Cerrahisi Direktörlüğü dönemlerinde edinilen klinik deneyim, Mustafa Kemal Üniversitesi Tıp Fakültesi ve Ankara Dışkapı Eğitim Hastanesi geçmişiyle birleşerek hizmet kalitesini desteklemektedir.</p>
<p>Misyonumuzu gerçekleştirirken hasta ve hasta yakınlarıyla şeffaf iletişim kurmayı, etik ilkelere bağlı kalmayı ve sürekli iyileştirme anlayışını benimsiyoruz. Kalp damar cerrahisi alanında erişkin kalp cerrahisi, konjenital kalp ameliyatları ve vasküler ile endovasküler girişimlerde kanıta dayalı uygulamaları ön planda tutuyoruz. Türk Göğüs Kalp Damar Cerrahisi Derneği ve Türk Damar Cerrahisi Derneği üyelikleriyle mesleki standartlara bağlılığımızı sürdürüyoruz. Amacımız, her hasta için en uygun tedavi seçeneğini sunmak ve hasta memnuniyetini en üst düzeyde tutmaktır. Bu misyon, Hacettepe Üniversitesi Tıp Fakültesi, Ankara Dışkapı Eğitim Hastanesi ve Mustafa Kemal Üniversitesi Tıp Fakültesi kökenli eğitim ve klinik deneyimle beslenmektedir.</p>`,
  vizyon: `<p><b>Vizyonumuz</b>, kalp damar cerrahisi alanında bölgesel ve ulusal düzeyde tanınan, güvenilir ve öncü bir merkez olmaktır.</p>
<p>Koroner arter hastalığı, kapak hastalıkları, aort ve periferik damar hastalıkları ile doğuştan kalp hastalıklarında güncel cerrahi ve endovasküler yöntemleri uygulayarak hasta sonuçlarını en üst düzeyde tutmayı hedefliyoruz. TAVİ, minimal invaziv cerrahi, EVAR, TEVAR ve karotis stentleme gibi ileri tekniklerde deneyimimizi sürdürüyoruz.</p>
<p>Eğitim ve araştırma faaliyetleriyle kalp damar cerrahisi alanına katkı sunmayı, ulusal ve uluslararası kongre ve kurslarda yer almayı vizyonumuzun bir parçası olarak görüyoruz. Türk Göğüs Kalp Damar Cerrahisi Derneği ve Türk Damar Cerrahisi Derneği üyelikleri bu yöndeki bağlantılarımızı güçlendirmektedir.</p>
<p>Hasta memnuniyeti, güvenlik ve kalite odaklı hizmet anlayışıyla bölgede tercih edilen bir merkez olmak vizyonumuzun özünü oluşturmaktadır. Hacettepe Üniversitesi ve Ankara Dışkapı Eğitim Hastanesi kökenli akademik birikimimizi, Mustafa Kemal Üniversitesi Tıp Fakültesi ve özel hastane deneyimimizle birleştirerek hasta odaklı bir vizyon sunuyoruz. Gelecekte de kalp damar cerrahisi alanındaki yenilikleri takip ederek hastalarımıza en iyi tedavi seçeneklerini sunmayı sürdüreceğiz. Bölgesel referans merkez olma hedefi, ekip çalışması ve sürekli eğitimle desteklenmektedir.</p>`,
  kalitepolitikamiz: `<p><b>Kalite politikamız</b>, hasta güvenliğini ve sürekli iyileştirmeyi merkeze alan bir anlayışla kalp damar cerrahisi hizmetlerini sunmaktır.</p>
<p>Ulusal ve uluslararası kalite standartlarına uyum, enfeksiyon kontrolü, ameliyat öncesi ve sonrası bakım protokollerinin güncel kılavuzlara göre uygulanması temel ilkelerimizdendir. Koroner bypass, kapak cerrahisi, TAVİ ve vasküler girişimlerde kanıta dayalı tıp ilkelerini takip ediyoruz.</p>
<p>Ekip içi eğitim, hasta ve yakınlarıyla iletişim, tıbbi kayıtların düzenli tutulması ve olay bildirim sistemleriyle kalite göstergelerini izliyoruz. Özel Defne Hastanesi ve Özel Akademi Hastanesi dönemlerinde uyguladığımız kalite yönetimi deneyimini mevcut hizmetlerimize yansıtıyoruz.</p>
<p>Hasta odaklı yaklaşım, şeffaflık ve sürekli gelişim kalite politikamızın vazgeçilmez unsurlarıdır. Ameliyathane ve yoğun bakım süreçlerinde uluslararası kılavuzlara uygun protokoller uygulanır. Hasta kimlik doğrulama, cerrahi taraf işaretleme ve güvenli cerrahi kontrol listeleri gibi uygulamalarla hasta güvenliği desteklenir. Kalite politikamız, Doç. Dr. Orhan Veli Doğan ve ekibinin Ankara Dışkapı, Trabzon Ahi Evren, Sakarya Üniversitesi ve Mustafa Kemal Üniversitesi deneyimleriyle şekillenmiştir. Düzenli iç denetim ve geri bildirimlerle kalite seviyemizi yükseltmeyi hedefliyoruz.</p>`,
  gizlilikpolitikasi: `<p><b>Gizlilik Politikası</b></p>
<p>Proforhanvelidogan.com olarak kişisel verilerinizin güvenliği ve gizliliği bizim için önemlidir. Bu metin, sitemizi ziyaret ettiğinizde veya iletişim formu aracılığıyla paylaştığınız bilgilerin nasıl toplandığını, kullanıldığını ve korunduğunu açıklamaktadır.</p>
<p><b>Toplanan Veriler:</b> İletişim formu üzerinden ilettiğiniz ad, soyad, e-posta, telefon ve mesaj içeriği; teknik olarak IP adresi, tarayıcı türü ve çerez verileri toplanabilmektedir.</p>
<p><b>Kullanım Amaçları:</b> Taleplerinize yanıt vermek, randevu ve iletişim süreçlerini yürütmek, site deneyimini iyileştirmek ve yasal yükümlülüklerimizi yerine getirmek amacıyla verileriniz işlenebilir.</p>
<p><b>Veri Güvenliği:</b> Kişisel verileriniz uygun teknik ve idari tedbirlerle korunmaktadır. Verileriniz, yalnızca yetkili personel ve hizmet sağlayıcılar tarafından, gerektiği ölçüde erişilebilir durumdadır.</p>
<p><b>Üçüncü Taraflarla Paylaşım:</b> Yasal zorunluluk veya açık rızanız dışında kişisel verileriniz üçüncü taraflarla paylaşılmamaktadır.</p>
<p>6698 sayılı Kişisel Verilerin Korunması Kanunu kapsamında haklarınız için Kişisel Veriler ve Kullanıcı Hakları sayfalarımıza bakınız. Bu politika güncellenebilir; değişiklikler sitede yayınlanacaktır. Çerez kullanımı, site işlevselliği ve kullanıcı tercihlerine göre yönetilebilir. Site üzerinden iletişime geçtiğinizde, iletişim bilgileriniz yalnızca talebinize yanıt ve gerekirse randevu süreçleri için kullanılacaktır. Veri saklama süreleri, yasal zorunluluklar ve hizmet amacına uygun olarak belirlenmektedir.</p>`,
  kisiselveriler: `<p><b>Kişisel Verilerin İşlenmesi</b></p>
<p>Bu sayfa, 6698 sayılı Kişisel Verilerin Korunması Kanunu (KVKK) kapsamında Doç. Dr. Orhan Veli Doğan / proforhanvelidogan.com tarafından işlenen kişisel verilerinize ilişkin bilgilendirme amacıyla hazırlanmıştır.</p>
<p><b>Veri Sorumlusu:</b> Kişisel verileriniz, veri sorumlusu sıfatıyla Doç. Dr. Orhan Veli Doğan ve web sitesi / iletişim hizmeti kapsamında yetkili birim tarafından işlenmektedir.</p>
<p><b>İşleme Amaçları:</b> Randevu ve iletişim taleplerinizin karşılanması, hasta bilgilendirme, yasal ve sözleşmesel yükümlülüklerin yerine getirilmesi, meşru menfaat kapsamında hizmet kalitesinin artırılması amaçlarıyla kişisel verileriniz işlenebilmektedir.</p>
<p><b>İşleme Hukuki Sebepleri:</b> Açık rızanız, sözleşmenin ifası, hukuki yükümlülük ve meşru menfaat gibi KVKK 5. ve 6. maddelerinde sayılan sebeplere dayanılarak işlem yapılmaktadır.</p>
<p><b>Veri Güvenliği:</b> Verilerinizin yetkisiz erişim, kayıp veya hasara karşı korunması için gerekli teknik ve idari tedbirler alınmaktadır. Saklama süreleri, ilgili mevzuat ve işleme amacına uygun olarak belirlenmektedir.</p>
<p>Detaylı haklarınız ve başvuru yolları için Kullanıcı Hakları sayfamızı inceleyebilirsiniz. Özel nitelikli kişisel veriler (örneğin sağlık verileri) yalnızca açık rızanız veya Kanunda öngörülen diğer istisnalar çerçevesinde işlenir. Web sitemiz üzerinden iletişim kurduğunuzda ilettiğiniz ad, iletişim bilgileri ve mesaj içeriği yalnızca talebinize yanıt ve gerekirse randevu süreçleri için kullanılır; bu veriler üçüncü taraflarla paylaşılmaz. Veri minimizasyonu ilkesi gereği yalnızca gerekli veriler toplanır ve işlenir.</p>`,
  kullanicahaklari: `<p><b>KVKK Kapsamında Veri Sahibi Haklarınız</b></p>
<p>6698 sayılı Kişisel Verilerin Korunması Kanunu (KVKK) uyarınca kişisel verileriniz üzerinde aşağıdaki haklara sahipsiniz. Bu haklar, Doç. Dr. Orhan Veli Doğan / proforhanvelidogan.com nezdinde veri sorumlusu olan birim tarafından değerlendirilecektir.</p>
<p><b>Bilgi talep etme:</b> Kişisel verilerinizin işlenip işlenmediğini, işlendiyse buna ilişkin bilgi talep etme hakkına sahipsiniz.</p>
<p><b>Erişim:</b> İşlenmiş olması halinde kişisel verilerinize erişim talep edebilirsiniz.</p>
<p><b>Düzeltme ve silme:</b> Kişisel verilerinizin eksik veya yanlış işlenmiş olması halinde düzeltilmesini, KVKK 7. maddesinde öngörülen şartlar çerçevesinde silinmesini veya yok edilmesini talep edebilirsiniz.</p>
<p><b>İtiraz:</b> İşlenen verilerinizin münhasıran otomatik sistemler vasıtasıyla analiz edilmesi suretiyle aleyhinize bir sonucun ortaya çıkmasına itiraz edebilirsiniz.</p>
<p><b>Başvuru:</b> Bu haklarınızı kullanmak için veri sorumlusuna yazılı veya KVKK’da tanımlanan diğer yöntemlerle başvurabilirsiniz. Başvurularınız en geç otuz gün içinde sonuçlandırılacaktır.</p>
<p>İletişim ve başvuru kanalları sitemizin İletişim sayfasında yer almaktadır. Başvurularda kimliğinizi tespit edici bilgiler ve talebinizin niteliğine göre gerekli açıklamaların iletilmesi gerekmektedir. Başvurunuzun reddedilmesi halinde gerekçeli yanıt yazılı olarak bildirilir; Kanun kapsamında Şikayet Haklılığına karar verilirse başvuru ücretsiz sonuçlandırılır. Veri sorumlusuna başvuru, Kişisel Verileri Koruma Kuruluna şikayet hakkınızı etkilemez; Kurula şikayet için Kanunda öngörülen süre ve usuller geçerlidir.</p>`,
  yasaluyari: `<p><b>Yasal Uyarı</b></p>
<p>Proforhanvelidogan.com internet sitesine erişim ve kullanım, aşağıdaki koşulların kabulü anlamına gelir. Lütfen bu sayfayı dikkatle okuyunuz.</p>
<p><b>Genel:</b> Bu site, Doç. Dr. Orhan Veli Doğan – Kalp Damar Cerrahisi ile ilgili bilgilendirme ve iletişim amacıyla yayınlanmaktadır. Sitedeki tıbbi bilgiler genel bilgilendirme niteliğindedir; kişisel tanı veya tedavi yerine geçmez. Sağlık durumunuzla ilgili kararlar için mutlaka bir hekime başvurunuz.</p>
<p><b>Fikri Mülkiyet:</b> Sitedeki metin, görsel ve tasarım öğeleri, ilgili mevzuat kapsamında korunmaktadır. İzinsiz kopyalama, çoğaltma veya ticari kullanım yasaktır.</p>
<p><b>Sorumluluk Sınırı:</b> Sitede yer alan bilgilerin güncelliği ve doğruluğu için makul çaba gösterilmekle birlikte, herhangi bir hatadan veya eksiklikten doğan zararlardan dolayı sorumluluk kabul edilmemektedir. Bağlantı verilen üçüncü taraf sitelerinin içeriklerinden sorumlu değiliz.</p>
<p><b>İletişim ve Veri:</b> İletişim formu aracılığıyla ilettiğiniz kişisel verileriniz gizlilik ve kişisel veriler politikamız kapsamında işlenmektedir. KVKK kapsamındaki haklarınızı Kullanıcı Hakları sayfasından inceleyebilirsiniz.</p>
<p>Bu yasal uyarı metni değiştirilebilir; güncel metin sitede yayınlanacaktır. Site yalnızca Türkiye Cumhuriyeti sınırları içinde bilgilendirme amacıyla sunulmaktadır. Uyuşmazlıklarda Türkiye Cumhuriyeti kanunları uygulanır; yetkili mahkemeler ve icra daireleri Türkiye’deki ilgili yerlerdir. Sitede yer alan hiçbir ifade, tanı veya tedavi taahhüdü oluşturmaz; tüm tıbbi kararlar hekim-hasta görüşmesi sonrasında alınmalıdır.</p>`
};

function addText(id, html) {
  const oneLine = html.replace(/\r?\n/g, ' ').replace(/\s+/g, ' ').trim();
  const dir = path.join(__dirname, id);
  const file = path.join(dir, 'index.json');
  if (!fs.existsSync(file)) { console.log('skip', id); return; }
  const json = JSON.parse(fs.readFileSync(file, 'utf8'));
  json.text = { tr: oneLine };
  fs.writeFileSync(file, JSON.stringify(json, null, 0));
  console.log(id, oneLine.length, 'chars');
}

['misyon','vizyon','kalitepolitikamiz','gizlilikpolitikasi','kisiselveriler','kullanicahaklari','yasaluyari'].forEach(id => addText(id, texts[id]));
