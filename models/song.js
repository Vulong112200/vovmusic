const mongoose = require('mongoose'); //goi mongoose 
const schema = mongoose.Schema({ //tao ra mot định hình dữ liệu cho user
    maBH: String,
    tenBH: String,
    maCD: String,
    maCS: String,
    moi: String,
    Anh: String,
    link: String,
    dateTime: String
}, {
    version: false,
    collection: 'song'
})
const SongModel = mongoose.model("song", schema); //tạo ra đối tượng ứng với cách định hình ở trên
module.exports = SongModel;