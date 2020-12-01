
const anaSayfa = function (req, res, next) {
  res.render('mekanlar-liste',
    {
      'baslik': 'Anasayfa',
      'footerIsim': 'Ahmet Can Akdaş 2020',
      'sayfaBaslik': {
        'siteAd': 'Mekan32',
        'aciklama': 'Isparta Civarındaki Mekanları Keşfedin!'
      },
      'mekanlar': [
        {
          'ad': 'Starbucks',
          'adres': 'Centrum Garden',
          'puan': '3',
          'imkanlar': ['Kahve', 'Pasta'],
          'mesafe': '10km'
        },
        {
          'ad': 'Gloria Jeans',
          'adres': 'Iyaş AVM',
          'puan': '2',
          'imkanlar': ['Kahve'],
          'mesafe': '5km'
        },
        {
          'ad': 'Alaçatı Muhallebicisi',
          'adres': 'Iyaş AVM karşısı',
          'puan': '3',
          'imkanlar': ['Kahve', 'Tatlı', 'Kahvaltı', 'Çay'],
          'mesafe': '7km'
        },
        {
          'ad': 'Kahve Dünyası',
          'adres': 'Iyaş AVM',
          'puan': '2',
          'imkanlar': ['Kahve', 'Tatlı', 'Çay'],
          'mesafe': '3km'
        },
        {
          'ad': 'Mack Bear',
          'adres': 'Iyaş AVM karşısı',
          'puan': '3',
          'imkanlar': ['Kahve', 'Tatlı'],
          'mesafe': '8km'
        }
      ]
    });
}

const mekanBilgisi = function (req, res, next) {
  res.render('mekan-detay',
    {
      'baslik': 'Mekan Bilgisi',
      'footerIsim': 'Ahmet Can Akdaş 2020',
      'sayfaBaslik': 'Starbucks',
      'mekanBilgisi': {
        'ad': 'Starbucks',
        'adres': 'Centrum Garden',
        'puan': 3,
        'imkanlar': ['Kahve', 'Pasta'],
        'koordinatlar': {
          'enlem': 37.781885,
          'boylam': 30.566034
        },
        'saatler':[
            {
              'gunler':'Pazartesi-Cuma',
              'acilis':'7:00',
              'kapanis':'23:00',
              'kapali':false
            },
            {
              'gunler':'Cumartesi',
              'acilis':'9:00',
              'kapanis':'22:30',
              'kapali':false
            },
            {
              'gunler':'Pazar',
              'kapali':true
            }
        ],
        'yorumlar':[
            {
              'yorumYapan':'Ahmet Can Akdaş',
              'puan':3,
              'tarih':'20 Kasım 2020',
              'yorumMetni':'İdare Eder'
            }
        ]
      }
  });
}

const yorumEkle = function (req, res, next) {
  res.render('yorum-ekle', { title: 'Yorum Ekle' });
}

module.exports = {
  anaSayfa,
  mekanBilgisi,
  yorumEkle
}