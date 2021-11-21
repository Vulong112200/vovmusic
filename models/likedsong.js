const mongoose = require('mongoose'); //goi mongoose 
const likedschema = mongoose.Schema({ //tao ra mot định hình dữ liệu cho user
    songName: String,
    imageSongURL: String,
}, {
    version: false,
    collection: 'liked-songs'
})
const LikedSongModel = mongoose.model("liked-songs", likedschema); //tạo ra đối tượng ứng với cách định hình ở trên
module.exports = LikedSongModel;