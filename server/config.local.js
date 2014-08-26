var isDevEnv = (process.env.NODE_ENV || 'development') === 'development';

module.exports = {
    isDevEnv: isDevEnv
};
