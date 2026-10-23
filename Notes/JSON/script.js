// JSON is a common formate to data transfer; size got comparse

const student = {
    name: "Arafat Rahman Samir",
    id: "23-55488-3",
    cgpa: 3.60,
    isStudent: true   
}

//JS to JSON:
const JSON = JSON.stringify(student);
console.log(JSON);

//JSON to JS:
const JsObj = JSON.parse(in_JSON);
console.log(JsObj);