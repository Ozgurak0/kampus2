# Yazılım Kulübü

BPR201 - İnternet Tabanlı Programlama dersi kapsamında hazırlanan, yazılım geliştirmeye yeni başlayan öğrenciler için örnek bir kulüp tanıtım ve etkinlik sitesidir. Proje; HTML ile sayfa yapısını, CSS ile görsel düzeni ve JavaScript ile temel etkileşimleri göstermeyi amaçlar.

## Özellikler

- Ana sayfa, etkinlikler ve hakkımızda sayfaları arasında gezinme
- Etkinlik başlıklarında anlık arama, sonuç sayısı ve eşleşme bulunamadığında bilgilendirme
- Aramayı temizleyerek tüm etkinlikleri yeniden listeleme
- Sayfalar arasında ortak kullanılan, mobil ekranlara uyumlu tasarım
- Oturum süresince hatırlanan açık/koyu tema seçeneği

## Kullanılan teknolojiler

- **HTML5:** Sayfa içeriği ve semantik yapı
- **CSS3:** Ortak tasarım, düzen, etkileşim efektleri ve mobil uyumluluk
- **JavaScript (vanilla):** Etkinlik arama/filtreleme ve tema düğmesi
- **Python `http.server` (isteğe bağlı):** Projeyi yerel web sunucusunda görüntüleme

Proje için npm, framework, veritabanı veya ek paket kurulumu gerekmez.

## Sayfalar

- **Ana Sayfa (`index.html`):** Kulübü ve öğrenme alanlarını tanıtır; etkinliklere bağlantı verir.
- **Etkinlikler (`etkinlikler.html`):** Örnek etkinlik kartlarını listeler. Arama kutusu başlıklara göre filtreleme yapar.
- **Hakkımızda (`hakkimizda.html`):** Projenin kulüp, çalışma ortamı ve hedefleri hakkında bilgi verir.

## Proje dosyaları

```text
.
├── index.html
├── etkinlikler.html
├── hakkimizda.html
├── style.css
├── etkinlikler.js
├── tema.js
└── README.md
```

`style.css` üç sayfanın ortak stil dosyasıdır. `etkinlikler.js` etkinlikler sayfasındaki aramayı, `tema.js` tüm sayfalardaki tema düğmesini yönetir.

## Çalıştırma

### Yerel bilgisayarda

1. Proje dosyalarını aynı klasöre indirin veya klonlayın.
2. Bu klasörde bir terminal açın.
3. Python 3 ile basit web sunucusunu başlatın:

   ```bash
   python3 -m http.server 8000
   ```

4. Tarayıcıda [http://localhost:8000](http://localhost:8000) adresini açın.
5. Sayfalar arasında üst menüden geçiş yapın. Dosyalarda değişiklik yaptıktan sonra kaydedip tarayıcıyı yenileyin.

Sunucuyu durdurmak için terminalde `Ctrl+C` tuşlarına basın. Python kullanmadan da `index.html` dosyasını tarayıcıda açabilirsiniz; ancak yerel sunucu yöntemi önerilir.

### GitHub Codespaces'te

Terminalde aynı `python3 -m http.server 8000` komutunu çalıştırın. **Ports** panelinde 8000 portunu açıp **Open in Browser** seçeneğini kullanın. İşiniz bittiğinde sunucuyu `Ctrl+C` ile durdurun.

## Kapsam

Bu proje eğitim amaçlı statik bir örnektir. Etkinlik içerikleri örnektir; kullanıcı girişi, form gönderimi veya veritabanı bağlantısı bulunmaz. Etkinlik eklemek ya da düzenlemek için `etkinlikler.html` dosyasındaki kartları güncelleyin.
