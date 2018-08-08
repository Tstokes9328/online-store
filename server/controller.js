module.exports = {
    getFeatured: (req, res) => {
        req.app.get('db').get_featured_products().then(response => {
            res.status(200).send(response)
        })
    }
}