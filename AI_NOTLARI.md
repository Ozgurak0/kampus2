# AI Notları - Proje Geliştirme Süreci

## 1. Kullanılan Prompt'lar ve Amaçları

* **Prompt 1:** "Etkinlikler sayfasına başlığa göre arama yapabileceğimiz bir arama kutusu ekle, büyük küçük harfe dikkat etmesin ve eşleşenleri anlık olarak göstersin."
  * *Amacı:* Kullanıcılar arama çubuğuna bir şeyler yazdığında sayfadaki etkinliklerin anında filtrelenmesini ve harf duyarlılığının ortadan kalkmasını sağlamak.

* **Prompt 2:** "Arama sonucunda eşleşen etkinlik sayısını ekranda gösteren ve hiç sonuç bulunamadığında 'Sonuç bulunamadı' mesajı çıkaran kodu ekle."
  * *Amacı:* Kullanıcıya kaç tane etkinlik bulduğunu göstermek ve sonuç yoksa boş bir ekran yerine bilgilendirici bir mesaj sunmak.

* **Prompt 3:** "Aramayı sıfırlamak ve tüm etkinliklerin tekrar listelenmesini sağlamak için bir 'Temizle' butonu ekle."
  * *Amacı:* Kullanıcının tek tıkla arama kutusunu ve filtreyi sıfırlayıp tüm listeye geri dönebilmesini kolaylaştırmak.

* **Prompt 4:** "Siteme sağ üst köşede çalışan bir açık/koyu mod (dark mode) geçişi eklemek için `theme.js` dosyası ile nasıl bir yapı kurmalıyım açıkla ve uygula?"
  * *Amacı:* Kullanıcı deneyimini artırmak için sayfaya interaktif bir tema değiştirme özelliği kazandırmak.

## 2. Yapay Zekâ Önerisinin Değerlendirilmesi
Yapay zekanın önerdiği temel arama mantığını ve filtreleme yapısını doğrudan kabul ettim. Ancak yapay zekanın önerdiği bazı tasarım (CSS) sınıfları benim kendi `style.css` dosyamın renk paletine uymadığı için, arama kutusu ve butonun tasarımını kendi sitemin genel havasına uyacak şekilde küçük değiştirdim.

## 3. Kod Açıklamaları

* **Event Listener Açıklaması:** 
  `addEventListener('input', ...)` yapısı, arama çubuğuna yazılan her bir harfi anlık olarak takip eder. Kullanıcı klavyeden bir tuşa basıp harf girdiğinde veya sildiğinde tarayıcı bu olayı algılar ve filtreleme fonksiyonunu hemen çalıştırır.

* **Filtreleme Koşulu Açıklaması:** 
  Kodun içerisinde kullanılan `toLowerCase()` fonksiyonu, aranan kelimeyi ve etkinlik başlıklarını tamamen küçük harfe dönüştürür. Bu sayede kullanıcı büyük harfle de yazsa, küçük harfle de yazsa karşılaştırma hatasız yapılır ve büyük/küçük harf farkı ortadan kalkmış olur.