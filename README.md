# Bileşen Yaşam Döngüsü - Full-Stack React Todo

Bu projede bileşen yaşam döngüleri ile uğraşacaksınız. Daha önce yaptığınız ToDo list uygulamasına benzer bir uygulama oluşturacaksınız fakat bu sefer "yapılacaklar listesi" elemanları oluşturmak, düzenlemek ve silmek için bir API ile etkileşimde olacak.

## Pratik yapacağınız yetenekler

- Sıfırdan React bileşenleri oluşturmak
- İlk renderdan sonra `ComponentDidMount` kullanarak sunucuya bir request göndermek
- Bir submit event handler kullanarak bir (`POST`) requestiyle başka sunucuya istek yapmak
- Sunucuda var olan bir kaynağı (`PATCH`) ile editlemek için bir click handler kullanma
- Sunucudaki state'i güncel tutmak için frontendi update etme
- Tamamlananlar öğeleri görünümden kaldırmak için filtreleme

## Giriş

Bu projede `yapılacaklar listesine` eleman eklenmesine, tamamlandı olarak işaretlenmesine ve viewden kaldırılmasına izin veren bir uygulama oluşturacaksınız.
Uygulama şunları içermelidir:

- Şu dosyadaki [gif](./todo.gif) örneği ilham alarak projenizi DOM'a aktarın.
- Tüm yapılacaklar state'ini "App.js" bileşeni içinde tutun
- `yapılacaklar` elemanının üzerine tıklanması halinde state'indeki "tamamlandı" durumunu toogle(aç/kapa) şeklinde dizayn edin.
- Todo form bileşeni submit edildiğinde listeye yeni bir "todo" elemanı eklensin.
- Tamamlananlar butonuna tıklandığında "tamamlandı" durumları true olanları listeden kaldırsın.

## Araçlar

- Node 16.x
- NPM 8.x (Şu komutla NPM'yi update edebilirsiniz: `npm i -g npm`)
- Postman (postman desktop versiyonunu indirin [buradan](https://www.postman.com/downloads/))
- Chrome >= 96.x

Diğer tarayıcı/Node/NPM versiyonları projeyi çalıştırabilir ama test edilmedi.

## Proje Kurulumu

- Forklayın, klonlayın, ve `npm install`.
- Projeyi çalıştırmak için `npm run dev` komutunu kullanın.
- `http://localhost:3000` adresinden uygulamnıza ulaşabilirsiniz.

## Proje Talimatları

### API Uç noktası

Bu projede aşağıdaki uç noktalar mevcuttur ve kodlamadan önce Postman ile incelenmelidir:

- `GET http://localhost:9000/api/todos`
  1. Payload gerektirmez
  2. Sunucuda değişiklik yapmaz
  3. `200 OK` cevabıyla ve tüm todoları içeren bir payload döndürür
- `POST http://localhost:9000/api/todos`
  1.Bir `isim` (string) ve opsiyonel `tamamlandi` (boolean) ile bir payload gereklidir
  2. Sunucuda yeni bir todo oluşturur
  3. `201 Oluşturuldu` cevabı ve yeni todoyu içeren bir payload döndürür
- `PATCH http://localhost:9000/api/todos/:id`
  1. Payload gerektirmez
  2. URL'den gönderilen id üzerinde `tamamlandi` değişkenini günceller
  3. `200 OK` cevabı ile güncellenen todo yu döndürür

API, istekler kusurluysa başka yanıtlar verir:

- `422 İşlenemeyen Varlık` eğer payload gönderilmemişse veya yanlışsa
- `404 Bulunamadı` istenen todo mevcut değilse veya URL yanlışsa

### React Bileşenleri

- **Tüm bileşenleri oluşturun. Dosyaları `frontend/components` klasöründe bulabilirsiniz.**
- **Stillere odaklanmanıza gerek yok. Bugün form yerine fonksiyonlara önem vermenizi istiyoruz.**
React uygulamanız yukarıda anlatılan uç noktayı kullanarak aşağıdaki işlevleri içermelidir:

- Yapılacaklar listenizde yeni bir todo eklemek için bir text input, bir gönder butonu, bir tamamlananları göster butonu bulunmalıdır..
- `<App />` proje için gerekli bütün dataları depolamalı.
  - Bütün uygulama verileri burada tutulmalı `<App />`.
  - Tüm `handler` fonksiyonları burada bulunmalı `<App />`.
- `<TodoList />` yapılacaklar dizisini alıp, listedeki elemanları yineleyerek `<Todo />` bileşeniyle tüm elemanlar için bir view oluşturacak.
- `<Todo />` `yapılacaklar` dizisinden elemanları alıp ekrana yazdıran bileşendir.
- `<Form />` bileşeni inputlarınızın barındığı bileşendir, bir text input, `Yapılacak Ekle` ve `Tamamlananları Kaldır` butonları.
  - Text inputunuz kullanıcının girdiği veriyi almalı ve `Enter` tuşuna basıldığında veya `Yapılacak Ekle` butonuna basıldığında listeye yeni girdiyi ekleyebilecek şekilde tasarlanmalıdır.
  - Yeni yapılacak elemanı eklendiğinde, re-render edilmeli ve eklenen eleman ekrana yazdırılmalıdır.


