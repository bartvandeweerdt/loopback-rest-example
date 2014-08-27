module.exports = function (Poi) {

    Poi.greet = function (msg, cb) {
        cb(null, 'Greetings... ' + msg);
    };

    /*Poi.validate('geo', function (err) {
        if (this.name === 'bad') err();
    }, {
        message: 'Bad geo point'
    });*/

    Poi.remoteMethod('greet', {
            accepts: {arg: 'msg', type: 'string'},
            returns: {arg: 'greeting', type: 'string'}
        }
    );

};