module.exports = {
    db: {
        connector: "mongodb",
        name: "db",
        url: process.env.MONGOLAB_URI || process.env.MONGOHQ_URL || "mongodb://localhost:27017/cronos-care-dev"
    }
};
