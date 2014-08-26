module.exports = function(Poi){

    Poi.greet = function(msg, cb) {
        cb(null, 'Greetings... ' + msg);
    };

    Poi.remoteMethod(
        'greet',
        {
            accepts: {arg: 'msg', type: 'string'},
            returns: {arg: 'greeting', type: 'string'}
        }
    );
};