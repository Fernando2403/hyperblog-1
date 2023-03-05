
function findUser(users, name){
let exportar = {}
for (let i = 0; i < users.length; i++){
  if(users[i].name == name){
    exportar = users[i];
    
  }
}
console.log(exportar)

}
findUser([
    {
        name: 'Erik',
        gender: 'male',
        age: 22,
    },
    {
        name: 'Daniela',
        gender: 'female',
        age: 22,
    },
    {
        name: 'Gustavo',
        gender: 'male',
        age: 49,
    },
    {
        name: 'María',
        gender: 'female',
        age: 35,
    },
], "Gustavo")