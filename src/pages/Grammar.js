import React from 'react';
import './Pages.css';

const Grammar = () => {
  return (
    <div className="page-container">
      <div className="page-header">
        <h1>Esperanto'nun <span>Grameri</span></h1>
        <p>Esperanto grameri, istisnasız yapısı ve mantıksal kurallarıyla ünlüdür. Öğrenmesi son derece kolaydır.</p>
      </div>

      <div className="grammar-section">
        <h2>Temel Yapı Taşları: Kelime Sonları</h2>
        <p>Esperanto'da bir kelimenin türünü son harfine bakarak anında anlayabilirsiniz. Bu, dili çok öngörülebilir kılar.</p>
        <ul>
          <li><strong>İsimler (Substantivoj):</strong> Her zaman <code>-o</code> ile biter. Çoğul yapmak için sonuna <code>-j</code> eklenir. <br/>
            Örnek: <code>libro</code> (kitap) → <code>libroj</code> (kitaplar), <code>domo</code> (ev) → <code>domoj</code> (evler).</li>
          <li><strong>Sıfatlar (Adjektivoj):</strong> Her zaman <code>-a</code> ile biter. Nitelediği isme sayı (çoğul <code>-j</code>) ve durum (nesne <code>-n</code>) olarak uyum sağlar.<br/>
            Örnek: <code>bela</code> (güzel) → <code>bela libro</code> (güzel kitap), <code>belaj libroj</code> (güzel kitaplar).</li>
          <li><strong>Belirtici Zarflar (Adverboj):</strong> Her zaman <code>-e</code> ile biter.<br/>
            Örnek: <code>rapide</code> (hızlıca), <code>bone</code> (iyi bir şekilde).</li>
          <li><strong>Tanımlık (Artikolo):</strong> Sadece bir tane belirli tanımlık vardır: <code>la</code>. Her kelime için aynıdır, değişmez.</li>
        </ul>
      </div>

      <div className="grammar-section">
        <h2>Fiiller (Verboj): İstisnasız Zamanlar</h2>
        <p>Esperanto'da fiil çekimleri inanılmaz derecede basittir. Kişilere göre asla değişmezler ve her fiil aynı kuralı takip eder. Mastar hali <code>-i</code> ile biter.</p>
        <ul>
          <li><strong>Geniş Zaman (Prezenco):</strong> <code>-as</code> eki alır. <br/>
            Örnek: <code>Mi legas.</code> (Ben okurum.), <code>Ili lernas.</code> (Onlar öğrenirler.)</li>
          <li><strong>Geçmiş Zaman (Preterito):</strong> <code>-is</code> eki alır. <br/>
            Örnek: <code>Mi legis.</code> (Ben okudum.), <code>Ili lernis.</code> (Onlar öğrendiler.)</li>
          <li><strong>Gelecek Zaman (Futuro):</strong> <code>-os</code> eki alır. <br/>
            Örnek: <code>Mi legos.</code> (Ben okuyacağım.), <code>Ili lernos.</code> (Onlar öğrenecekler.)</li>
          <li><strong>Şart Kipi (Kondicionalo):</strong> <code>-us</code> eki alır. <br/>
            Örnek: <code>Mi legus.</code> (Ben okurdum / okusam.)</li>
          <li><strong>Emir Kipi (Imperativo):</strong> <code>-u</code> eki alır. <br/>
            Örnek: <code>Legu!</code> (Oku!), <code>Venu!</code> (Gel!)</li>
        </ul>
      </div>

      <div className="grammar-section">
        <h2>Nesne Durumu (-n eki): Esnek Cümle Yapısı</h2>
        <p>Esperanto'nun en güçlü özelliklerinden biri, cümlenin doğrudan nesnesini belirtmek için kullanılan <code>-n</code> ekidir. Bu ek sayesinde kelime sırasını özgürce değiştirebilirsiniz.</p>
        <ul>
            <li><code>La hundo ĉasas la katon.</code> (Köpek kediyi kovalar.)</li>
            <li><code>La katon ĉasas la hundo.</code> (Kediyi köpek kovalar.)</li>
        </ul>
        <p>Her iki cümlede de <code>katon</code> kelimesi <code>-n</code> eki aldığı için nesne olduğu bellidir ve cümlenin anlamı değişmez.</p>
      </div>

      <div className="grammar-section">
        <h2>Kelime Türetme: Ön Ekler ve Son Ekler</h2>
        <p>Az sayıda kök kelime öğrenerek, mantıksal eklerle binlerce yeni kelime türetebilirsiniz.</p>
        <ul>
          <li><strong><code>mal-</code> ön eki:</strong> Kelimenin zıt anlamını oluşturur. <br/>
            Örnek: <code>bona</code> (iyi) → <code>malbona</code> (kötü), <code>granda</code> (büyük) → <code>malgranda</code> (küçük).</li>
          <li><strong><code>-ej-</code> son eki:</strong> Bir eylemin yapıldığı yeri belirtir.<br/>
            Örnek: <code>lerni</code> (öğrenmek) → <code>lernejo</code> (okul), <code>kuiri</code> (pişirmek) → <code>kuirejo</code> (mutfak).</li>
          <li><strong><code>-il-</code> son eki:</strong> Bir aleti veya aracı belirtir.<br/>
            Örnek: <code>tranĉi</code> (kesmek) → <code>tranĉilo</code> (bıçak), <code>skribi</code> (yazmak) → <code>skribilo</code> (kalem).</li>
        </ul>
      </div>
    </div>
  );
};

export default Grammar;