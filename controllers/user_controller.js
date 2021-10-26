const UserModel = require('../models/user');
async function addUser(req, res) {
    try {
        let user = new UserModel(req.body);
        if (user.Username.length == 0 || user.HoTen.length == 0 || user.NgaySinh.length == 0 || user.Password.length == 0 || user.Mail.length == 0 || user.PhanQuyen.length == 0) {
            console.log("hi");
            res.status(500).json({
                status: "fail",
                message: "Something is null"
            })
        } else {
            let listUser = await UserModel.find({ Username: user.Username });
            if (listUser.length == 0) {
                console.log("Username khong trung");
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
        let newpass = req.body.Password;
        console.log(" pass moi: " + newpass);
        console.log(req.body.OldPass)
        let user = await UserModel.find({ _id: req.params.IDUser, Password: req.body.OldPass });
        console.log(user.length);
        if (user.length != 0) {
            console.log("hihi");
            user[0].Password = newpass;
            console.log(user[0]);
            await user[0].save();
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
        let dsuser = await UserModel.find();

        res.status(200).json({
            status: "found rồi",
            dsuser
        })

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