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
    },

    getAllShirts: (req, res) => {
        req.app.get('db').get_shirts().then(response => {
            res.status(200).send(response)
        })
    },

    getAllJackets: (req, res) => {
        req.app.get('db').get_jackets().then(response => {
            res.status(200).send(response);
        })
    },

    getAllPants: (req, res) => {
        req.app.get('db').get_pants().then(response => {
            res.status(200).send(response)
        })
    },

    getProductInfo: (req, res) => {
        let { id } = req.params;
        req.app.get('db').get_product_info(id).then(response => {
            res.status(200).send(response)
        })
    },

    getUser: (req, res) => {
        console.log('req obj:', req.user);
        if(req.user){
            res.status(200).send(req.user)
        } else {
            res.status(401).send('Nope, not you..')
        }
    }
}