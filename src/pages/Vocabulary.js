import React from 'react';
import './Pages.css';

// Kelime dağarcığını Türkçe-Esperanto olarak zenginleştirelim
const vocabularyCategories = [
  {
    title: 'Temel İfadeler ve Selamlaşma',
    words: [
      { eo: 'Saluton', tr: 'Merhaba' },
      { eo: 'Bonan matenon', tr: 'Günaydın' },
      { eo: 'Bonan tagon', tr: 'İyi günler' },
      { eo: 'Bonan vesperon', tr: 'İyi akşamlar' },
      { eo: 'Ĝis revido', tr: 'Görüşürüz' },
      { eo: 'Kiel vi fartas?', tr: 'Nasılsın?' },
      { eo: 'Mi fartas bone', tr: 'İyiyim' },
      { eo: 'Dankon', tr: 'Teşekkürler' },
      { eo: 'Nedankinde', tr: 'Rica ederim' },
      { eo: 'Bonvolu', tr: 'Lütfen' },
      { eo: 'Jes', tr: 'Evet' },
      { eo: 'Ne', tr: 'Hayır' },
      { eo: 'Pardonu min', tr: 'Özür dilerim' },
    ]
  },
  {
    title: 'İnsanlar ve Aile',
    words: [
      { eo: 'Homo', tr: 'İnsan' },
      { eo: 'Viro', tr: 'Adam' },
      { eo: 'Virino', tr: 'Kadın' },
      { eo: 'Infano', tr: 'Çocuk' },
      { eo: 'Amiko', tr: 'Arkadaş' },
      { eo: 'Familio', tr: 'Aile' },
      { eo: 'Patro', tr: 'Baba' },
      { eo: 'Patrino', tr: 'Anne' },
      { eo: 'Frato', tr: 'Erkek kardeş' },
      { eo: 'Fratino', tr: 'Kız kardeş' },
      { eo: 'Filo', tr: 'Oğul' },
      { eo: 'Filino', tr: 'Kız evlat' },
    ]
  },
  {
    title: 'Temel İsimler',
    words: [
      { eo: 'Domo', tr: 'Ev' },
      { eo: 'Lernejo', tr: 'Okul' },
      { eo: 'Libro', tr: 'Kitap' },
      { eo: 'Akvo', tr: 'Su' },
      { eo: 'Manĝaĵo', tr: 'Yemek' },
      { eo: 'Urbo', tr: 'Şehir' },
      { eo: 'Lando', tr: 'Ülke' },
      { eo: 'Mondo', tr: 'Dünya' },
      { eo: 'Nomo', tr: 'İsim' },
    ]
  },
  {
    title: 'Temel Fiiller',
    words: [
      { eo: 'Esti', tr: 'Olmak' },
      { eo: 'Havi', tr: 'Sahip olmak' },
      { eo: 'Iri', tr: 'Gitmek' },
      { eo: 'Veni', tr: 'Gelmek' },
      { eo: 'Vidi', tr: 'Görmek' },
      { eo: 'Aŭdi', tr: 'Duymak' },
      { eo: 'Paroli', tr: 'Konuşmak' },
      { eo: 'Lerni', tr: 'Öğrenmek' },
      { eo: 'Manĝi', tr: 'Yemek yemek' },
      { eo: 'Trinki', tr: 'İçmek' },
      { eo: 'Ami', tr: 'Sevmek' },
      { eo: 'Fari', tr: 'Yapmak' },
    ]
  },
  {
    title: 'Sıfatlar',
    words: [
        { eo: 'Bona', tr: 'İyi' },
        { eo: 'Malbona', tr: 'Kötü' },
        { eo: 'Granda', tr: 'Büyük' },
        { eo: 'Malgranda', tr: 'Küçük' },
        { eo: 'Bela', tr: 'Güzel' },
        { eo: 'Nova', tr: 'Yeni' },
        { eo: 'Malnova', tr: 'Eski' },
        { eo: 'Feliĉa', tr: 'Mutlu' },
        { eo: 'Rapida', tr: 'Hızlı' },
    ]
  },
  {
    title: 'Soru Kelimeleri',
    words: [
        { eo: 'Kiu', tr: 'Kim' },
        { eo: 'Kio', tr: 'Ne' },
        { eo: 'Kie', tr: 'Nerede' },
        { eo: 'Kiam', tr: 'Ne zaman' },
        { eo: 'Kial', tr: 'Neden' },
        { eo: 'Kiel', tr: 'Nasıl' },
        { eo: 'Kiom', tr: 'Ne kadar' },
    ]
  },
  {
    title: 'Sayılar',
    words: [
        { eo: 'Nulo', tr: 'Sıfır' },
        { eo: 'Unu', tr: 'Bir' },
        { eo: 'Du', tr: 'İki' },
        { eo: 'Tri', tr: 'Üç' },
        { eo: 'Kvar', tr: 'Dört' },
        { eo: 'Kvin', tr: 'Beş' },
        { eo: 'Ses', tr: 'Altı' },
        { eo: 'Sep', tr: 'Yedi' },
        { eo: 'Ok', tr: 'Sekiz' },
        { eo: 'Naŭ', tr: 'Dokuz' },
        { eo: 'Dek', tr: 'On' },
    ]
  },
  {
    title: 'Renkler',
    words: [
        { eo: 'Ruĝa', tr: 'Kırmızı' },
        { eo: 'Blua', tr: 'Mavi' },
        { eo: 'Verda', tr: 'Yeşil' },
        { eo: 'Flava', tr: 'Sarı' },
        { eo: 'Nigra', tr: 'Siyah' },
        { eo: 'Blanka', tr: 'Beyaz' },
        { eo: 'Oranĝkolora', tr: 'Turuncu' },
        { eo: 'Bruna', tr: 'Kahverengi' },
    ]
  }
];

const Vocabulary = () => {
  return (
    <div className="page-container">
      <div className="page-header">
        <h1>Temel <span>Kelime Bilgisi</span></h1>
        <p>Bu temel kelimeler ve ifadelerle Esperanto kelime dağarcığınızı oluşturmaya başlayın.</p>
      </div>
      <div className="vocab-grid">
        {vocabularyCategories.map(category => (
          <div className="vocab-card" key={category.title}>
            <h3>{category.title}</h3>
            <ul>
              {category.words.map(word => (
                <li key={word.eo}>
                  <span>{word.eo}</span>
                  <span>{word.tr}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Vocabulary;