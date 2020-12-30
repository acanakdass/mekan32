var mongoose = require('mongoose');

// //Bağlandığında bağlantı bilgilerin yazdır
mongoose.connection.on('connected', function () {
    console.log('Mongoose ' + dbURI + ' adresindeki veritabanına bağlandı\n');
});

// //Bağlantı hatası olduğunda hata bilgisini yazdır
mongoose.connection.on('error', function (err) {
    console.log('Mongoose bağlantı hatası :\n' + err);
});

// //Bağlantı kesildiğinde kesilme bilgisini yazdır
mongoose.connection.on('disconnected', function () {
    console.log('Mongoose bağlantısı kesildi \n' + err);
});

var dbURI = 'mongodb+srv://mekan32:acanakdas1@cluster0.9nszo.mongodb.net/mekan32?retryWrites=true&w=majority';
mongoose.connect(dbURI,{useNewUrlParser:true});


kapat = function (msg, callback) {
    mongoose.connection.close(function () {
        console.log('Mongoose kapatıldı\n ' + msg);
        callback();
    });
    // };// nodemon kullanıyorsanız ayrı bir kapatma işlemi gerekir.
    process.once('SIGUSR2', function () {
        kapat('nodemon kapatıldı\n', function () {
            process.kill(process.pid, 'SIGUSR2');
        });
    });

    // Uygulama kapandığında kapat.
    process.on('SIGINT', function () {
        kapat('Uygulama kapatıldı\n', function () {
            process.exit(0);
        });
    });

    // Herokudan kapatma işlemi gerçekleşirse
    process.on('SIGTERM', function () {
        kapat('heroku kapatıldı\n', function () {
            process.exit(0);
        });
    });
}



require('./mekansema');
