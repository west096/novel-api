function validatePlan(req, res, next){
    const{title, genre} = req.body;

    if(!title || !genre){
        return res.status(400).json({error: 'title과 genre는 필수입니다.'});
    }

    next(); //다음단계로 넘어가기
}

module.exports = validatePlan;