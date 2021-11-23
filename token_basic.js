const jwt = require("jsonwebtoken");

const token = jwt.sign({ test:true },'my-secret-key'); // 토큰 발급
console.log(token);

const verifiy = jwt.verify(token, 'my-secret-key'); // 검증?
const decoded = jwt.decode(token+'a'); // 디코드
// 데이터는 아무나 까서 볼수 있는데 이게 유효한지 아닌지 확인은 서버만 확인 가능 

console.log(verifiy);
console.log(decoded);