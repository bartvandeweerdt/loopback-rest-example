var loopback = require('loopback');

var ds = loopback.createDataSource('memory');

var Customer = ds.createModel('customer',
    {
        id: {
            type: Number, id: true
        },
        name: String,
        emails: [String],
        age: Number,
        address: {
            street: String,
            city: String,
            postalcode: String
        }
    },
    {strict: true}
);

Customer.create({
    name: 'John1',
    emails: ['john@x.com', 'jhon@y.com'],
    age: 30,
    address: {
        foo: "bar"
    },
    herp: "derp"
}, function (err, customer1) {
    console.log('Customer 1: ', customer1.toObject());
    Customer.create({
        name: 'John2',
        emails: ['john@x.com', 'jhon@y.com'],
        age: 30
    }, function (err, customer2) {
        console.log('Customer 2: ', customer2.toObject());
        Customer.findById(customer2.id, function (err, customer3) {
            console.log(customer3.toObject());
        });
        Customer.find({where: {name: 'John1'}, limit: 3}, function (err, customers) {
            customers.forEach(function (c) {
                console.log(c.toObject());
            });
        });
    });
});