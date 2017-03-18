module.exports = function (User) {

    const post = (req,res) => {

        const {oid, given_name, family_name, email} = req.user;

        User.findUserByOID(oid)
            .then(user => {
                if (user) {
                    res.status(409).json({
                        status: 'error',
                        message: 'User already exist'
                    });
                } else {
                    return new User({
                        oid: oid, firstName: given_name, lastName: family_name, email: email, active: req.body.active
                    });
                }
            })
            .then(user => {
                return user.save()
            })
            .then(user => {
                res.status(200).json({
                    status: 'success',
                    data: user
                })
            })
            .catch(err => {})
    };

    const get = (req,res) => {

        User.find({})
            .then(users=>{
                res.status(200).send(users);
            }).catch(err=>{
                res.status(500).send(err);
            });
    };

    return {
        post: post,
        get: get
    };
};






  
