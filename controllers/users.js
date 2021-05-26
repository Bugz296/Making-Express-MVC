class Users{
    index(req, res){
        res.render('index');
    }
    result(req, res){
        res.render('result', {
            user: req.body, 
            luckyNum: Math.floor(Math.random()*1001)
        });
    }
}
module.exports = new Users;