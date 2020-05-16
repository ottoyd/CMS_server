module.exports = (err, req, res, next) => {
    // console.log(err);
    if (err.name == 'SequelizeValidationError') {
        let errors = err.errors.map(el => ({
            msg : el.message
        }))
        return res.status(400).json({
            errors
        })
    } else if (err.name == 'SequelizeUniqueConstraintError') {
        let errors = err.errors.map(el => ({
            msg : el.message
        }))
        // console.log(errors);
        return res.status(400).json({
            errors
        })
    } else if (err.name == 'Wrong Pass Or Email') {
        let errors = [{msg: "Wrong Pass Or Email"}]
        return res.status(404).json({
            errors
        })
    } else {
        return res.status(500).json(err)
    }
}