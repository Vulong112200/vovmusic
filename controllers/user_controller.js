const UserModel = require('../models/user');
async function addUser(req, res) {
    try {
        let user = new UserModel(req.body);
        if (user.name.length == 0 || user.password.length == 0 || user.email.length == 0) {
            console.log("hi");
            res.status(500).json({
                status: "fail",
                message: "Something is null"
            })
        } else {
            let listUser = await UserModel.find({ email: user.email });
            if (listUser.length == 0) {
                console.log("Email khong trung");
                await user.save();
                res.status(201).json({
                    status: "success"
                })
            } else {
                res.status(500).json({
                    status: "fail to save",
                    message: "Username is being used"
                })
            }
        }
    } catch (err) {
        res.status(500).json({
            status: "fail",
            message: "Something went wrong. Please try again later"
        })
    }
} // da test
async function userInfo(req, res) {
    try {
        let user = await UserModel.find({ _id: req.params.IDUser });
        if (user.length != 0) {
            res.status(200).json({
                status: "found",
                user
            })
        } else {
            res.status(404).json({
                status: "not found",
                message: "User not found"
            })
        }
    } catch (err) {
        res.status(500).json({
            status: "fail",
            message: "Something went wrong. Please try again later."
        })
    }
} // ok
async function findUser(req, res) {
    try {
        let user = await UserModel.find({ email: req.body.email, password: req.body.password });
        if (user.length != 0) {
            res.status(200).json({
                status: "found",
                user
            })
        } else {
            res.status(404).json({
                status: "not found",
                message: "khong co user nao ten voi pass vay nha"
            })
        }
    } catch (err) {
        res.status(500).json({
            status: "fail",
            message: "Something went wrong. Please try again later"
        })
    }
} //ok
async function updateInfo(req, res) {
    try {
        let name = req.body.HoTen;
        let ngsinh = req.body.NgaySinh;
        let mail = req.body.Mail;
        let anh = req.body.Anh;
        if (name.length == 0 || ngsinh.length != 10 || mail.length == 0 || anh.length == 0) {
            res.status(500).json({
                status: "fail to save",
                message: "Something is null"
            })
        } else {
            let user = await UserModel.findById(req.params.IDUser);
            user.HoTen = name;
            user.NgaySinh = ngsinh;
            user.Anh = anh;
            user.Mail = mail;
            console.log("new info: " + user);
            await user.save();
            res.status(201).json({
                status: "saved",
                message: "user updated"
            })
        }
    } catch (err) {
        res.status(500).json({
            status: "fail",
            message: "Something went wrong. Please try again later"
        })
    }
} //ok
async function updatePass(req, res) {
    try {
        let newpass = req.body.password;
        console.log(" pass moi: " + newpass);
        let user = await UserModel.findOne({ id: req.params.IDUser });
        console.log(user.length);
        if (user.length != 0) {
            console.log("hihi");
            user.password = newpass;
            console.log(user);
            await user.save();
            res.status(201).json({
                status: "saved",
                message: "password changed"
            })
        } else {
            res.status(500).json({
                status: "fail to save",
                message: "old password wrong"
            })
        }

    } catch (err) {
        console.log(err)
        res.status(500).json({
            status: "fail",
            message: "Something went wrong. Please try again later."
        })
    }
} //ok
async function allUser(req, res) {
    try {
        await UserModel.find({}, function(ERROR, user) {
            res.json(
                user
            )
        });
        res.status(500).json({
            status: "fail to load",
            message: "sai ở đâu rồi T_T"
        })
    } catch (err) {
        console.log(err);
        res.status(500).json({
            status: "fail",
            message: "Something went wrong. Please try again later"
        })
    }
}
module.exports = {
    userInfo,
    addUser,
    findUser,
    updateInfo,
    updatePass,
    allUser
}