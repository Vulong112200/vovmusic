const mongoose = require('mongoose'); //goi mongoose 
const schema = mongoose.Schema({ //tao ra mot định hình dữ liệu cho user
    id: String,
    name: String,
    email: String,
    password: String,
    Quyen: String,
    Anh: String
}, {
    version: false,
    collection: 'user'
})
const UserModel = mongoose.model("user", schema); //tạo ra đối tượng ứng với cách định hình ở trên
module.exports = UserModel;