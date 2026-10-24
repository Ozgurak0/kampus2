# Test Notları

Bu testler etkinlik arama davranışını, sayfa gezinmesini ve temel mobil/klavye kullanımını doğrulamak içindir. Testleri tarayıcıda gerçekleştirin; **Gerçekleşen Sonuç** ve **Geçti/Kaldı** sütunlarını deneme sonrasında doldurun.

| Test/İşlem | Beklenen Sonuç | Gerçekleşen Sonuç | Geçti/Kaldı |
|---|---|---|---|
| **1. Başlığın tamamını veya bir bölümünü arama:** Etkinlikler sayfasında arama alanına önce `HTML Atölyesi`, sonra `Atölye` yaz. | Her iki aramada da yalnızca **HTML Atölyesi** kartı görünür. Sonuç sayacı `1 / 8` gösterir. | Test sırasında doldurulacak. | Henüz test edilmedi |
| **2. Büyük/küçük harf:** Arama alanına sırasıyla `html` ve `HTML` yaz. | Her iki arama da aynı etkinlik kartını bulur; sonuç sayacı her ikisinde de `1 / 8` gösterir. | Test sırasında doldurulacak. | Henüz test edilmedi |
| **3. Eşleşmeyen ifade:** Arama alanına etkinlik başlıklarında bulunmayan `Muzik Festivali 999` yaz. | Hiçbir kart görünmez, sayaç `0 / 8` gösterir ve eşleşme bulunamadığını belirten mesaj görünür. | Test sırasında doldurulacak. | Henüz test edilmedi |
| **4. Boşluk ve Temizle:** Arama alanına yalnızca boşluk karakterleri yaz. Ardından `Temizle` düğmesine bas. | Yalnızca boşluk girildiğinde arama boş kabul edilir ve 8 kartın tamamı görünür. `Temizle` sonrasında alan boş kalır, tüm kartlar yeniden listelenir ve odak arama alanına döner. | Test sırasında doldurulacak. | Henüz test edilmedi |
| **5. Üç sayfanın menü bağlantıları:** Ana menüden **Ana Sayfa**, **Etkinlikler** ve **Hakkımızda** bağlantılarını sırayla aç. | Her bağlantı ilgili sayfayı açar. Açık sayfanın menü bağlantısı `aria-current="page"` ile gösterilir. | Test sırasında doldurulacak. | Henüz test edilmedi |
| **6. 390 px ve Tab ile kontrol:** Tarayıcı görünüm genişliğini 390 px yap. Yatay kayma/taşma olup olmadığını kontrol et; sonra Tab tuşuyla menü, tema düğmesi, arama alanı ve `Temizle` düğmesi arasında ilerle. | Sayfa yatay taşma yapmaz; kartlar tek sütunda görünür. Tab ile etkileşimli öğelere ulaşılır ve odak görünür biçimde ayırt edilir. | Test sırasında doldurulacak. | Henüz test edilmedi |
