//user <= {}
//friends => ['joão', 'bruna', 'felipe', 'Lira'];
//photos <= ['Egito', 'Bahamas', 'Maldivas', 'Suécia']

function getUser(callback) {
  console.log('Recuperando informações do usuário...');
  setTimeout(() => {
    callback({id: 0, name: "Daniel", surname: 'Porto'});
  }, 2000);
}

function getFriendList(user) {
  console.log(
    `Recuperando lista de amigos do usuário ${user.name} ${user.surname}`
  );
  setTimeout(() => {
    callback(['João', 'Bruna', 'Felipe', 'Lira']);
  }, 2000);
}

function getPhotos(username, callback) {
  console.log(`Recuperando lista de fotos do usuário ${username}`);
  setTimeout(() => {
    callback(['Egito', 'Bahamas', 'Maldivas', 'Suécia']);
  }, 2000);
}

//Callback hell

getUser((user) => 
  getFriendList(user, (friends) => {
    getPhotos(friends[3], console.log);
  })
);