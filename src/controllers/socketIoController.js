import connection from '../configs/connectDB';
import moment from 'moment';
//import formatMsg from './Helper/formatMsg';
require('dotenv').config();

function formatMsg(phone_login, name_user, text) {
    return {
      phone_login,
      name_user,
      text,
      time: moment().format('h:mm a')
    };
  }
const getPageMember = async(req, res) => {
    var tokenUser = req.cookies.token;
    var token = jwt.verify(tokenUser, process.env.JWT_ACCESS_TOKEN);
    var phone_login = token.user.phone_login;
    const [results, fields] = await connection.execute('SELECT * FROM `users` WHERE `phone_login` = ? AND `veri` = 1', [phone_login]);
    var { password_v1, otp, ...user } = results[0];
    return res.render('member/index.ejs', { user });
}


const sendMessageAdmin = (io) => {
    // var time = TimeCreate();
    io.on('connection', (socket) => {
        socket.on('data-server', (msg) => {
            io.emit('data-server', msg);
        });

        socket.on('chatmess', (data) => {
            console.log(data);
            var phone = data.phone_login;
            var name = data.name;
            var mgs = data.msg;
            var time = moment().format('h:mm a');
            if(msg != ''){
            connection.query('INSERT INTO `chatbox` `phone_login`= ? , `user_name`= ? , `content`= ? , `time`= ? ', [phone, name, msg, time], function(err, check){
                if(check){
                    console.log('insert thah cong'+check);
                    io.emit('chatmess', formatMsg(phone, name, mgs, time));
                }
            });
            }

        });
        // socket.on("disconnect", () => {
        // console.log('a user disconnect ' + socket.id);
        // });
    });
}
module.exports = {
    sendMessageAdmin,
}