const fs = require('fs');
const path = require('path');

const dataPath = path.join(__dirname, '../data/plans.json');

function loadPlans(){
    try{
        const data = fs.readFileSync(dataPath, 'utf-8');
        return JSON.parse(data);
    }catch(err){
        console.error('❌ 데이터 불러오기 실패:', err);
        return [];
    }
}

function savePlans(plans){
    if(!plans) {
        console.error('❌ 저장할 plans가 undefined입니다.');
        return;
    }


    try{
        fs.writeFileSync(dataPath, JSON.stringify(plans, null, 2), 'utf-8');
    }catch(err){
        console.error('❌ 데이터 저장 실패:', err);
    }
}
module.exports = {
    loadPlans,
    savePlans
}