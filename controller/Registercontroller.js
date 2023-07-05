var Registermodel = require('../model/Register');

const Register = async(req,res) =>{

    var data = await Registermodel.create(req.body);

   res.redirect('feed');
//    data

}

const login = async (req, res) => {
    // var data = await registermodel.findOne();
    // res.status(200).json({
    //     status:"success",
    //     data
    // })
    try {
        // check if the user exists
        const data = await Registermodel.findOne({ email: req.body.email });
        if (data) {
            //check if password matches
            const result = req.body.password === data.password;
            if (result) {
                res.redirect('/feed');
            } else {
                res.status(400).json({ error: "password doesn't match" });
            }
        } else {
            res.status(400).json({ error: "User doesn't exist" });
        }
    } catch (error) {
        res.status(400).json({ error });
    }
}

module.exports = {Register,login} ;   