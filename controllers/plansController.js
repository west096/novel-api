const { loadPlans, savePlans } = require('../utils/fileHandler');

let plans = loadPlans(); //서버 시작할 때 JSON파일 불러옴

function getPlans(req, res){
    res.json(plans); //전체 목록 응답
}

function createPlan(req, res){
  const {title, genre} = req.body;

  const newPlan = {
    id: plans.length ? plans[plans.length - 1].id + 1 : 1, //ID 생성
    title,
    genre,
  };

  plans.push(newPlan); //배열에 추가
  savePlans(plans); // 파일로 저장
  res.status(201).json(newPlan); //응답
}

function updatePlan(req, res){
  const planId = parseInt(req.params.id);
  const index = plans.findIndex(p => p.id === planId);

  if (index === -1){
    return res.status(404).json({error: '기획서를 찾을 수 없습니다.'});
  }

  const { title, genre } = req.body;

  //기존 데이터 덮어쓰기
  plans[index] = {id: planId, title, genre};
  savePlans(plans);

  res.json(plans[index]);
}

function deletePlan(req, res){
    const planId = parseInt(req.params.id);
    const index = plans.findIndex(p => p.id === planId);

    if(index === -1) {
        return res.status(404).json({error: '기획서를 찾을 수 없습니다.'});
    }

    const deleted = plans.splice(index, 1);
    savePlans(plans);

    return res.status(200).json({
      message: `ID가 ${planId}인 기획서가 삭제되었습니다.`,
      deleted: deleted[0],
    });
}

module.exports = {
    getPlans,
    createPlan,
    updatePlan,
    deletePlan,
};