if (process.env.NODE_Env === 'production') {
    module.exports = {
        plugins: {
            autoprefixer: {},
            cssnano: {},
            'rucksack-css': {}
        }
    }
} else {
    module.exports = {
        plugins: {
            autoprefixer: {},
            'rucksack-css': {}
        }
    }
}