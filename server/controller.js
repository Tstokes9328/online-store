module.exports = {
    getFeatured: (req, res) => {
        req.app.get('db').get_featured_products().then(response => {
            res.status(200).send(response)
        })
    },

    getBestSellers: (req, res) => {
        req.app.get('db').get_best_sellers().then(response => {
            res.status(200).send(response)
        })
    },

    getAllTees: (req, res) => {
        req.app.get('db').get_tees().then(response => {
            res.status(200).send(response)
        })
    }
}