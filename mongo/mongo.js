const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://Yoshi:lebronjame23@cluster0-dbzun.gcp.mongodb.net/toys', { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    console.log("we're connected!");
});

module.exports = db;