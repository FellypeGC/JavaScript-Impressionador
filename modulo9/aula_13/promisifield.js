function getUser() {
  console.log('Recuperando informações do usuário');
  const promise1 = new Promise((resolve) => {
    setTimeout(() => {
      resolve({ id: 0, name: 'Daniel', surname: 'Porto' });
    }, 2000)
  });

  return promise1;
}

function getFriendList(user) {
  console.log(
    `Recuperando lista de amigos do usuário ${user.name} ${user.surname}`
  );
  const promise2 = new Promise(resolve => {
    setTimeout(() => {
      resolve(['joão', 'bruna', 'felipe', 'Lira']);
    }, 2000);
  });

  return promise2;
};

function getPhotos(username) {
  console.log(`Recuperando lista de fotos do usuário ${username}`);
  const promise3 = new Promise(reject => {
    setTimeout(() => {
      reject('Não foi possível acessar as fotos. Usuário desabilitou o perfil');
    }, 2000);
  });

  return promise3;
}

// getUser((user) =>
//   getFriendList(user, (friends) => {
//     getPhotos(friends[3], console.log);
//   })
// );

async function displayLirasPhotos() {
  try {
    const user = await getUser();
    const friends = await getFriendList(user);
    const photos = await getPhotos(friends[3]);
    console.log(photos);
  }
  catch (error) {
    console.error(error);
  } finally {
    console.log('Treinando a conexão com o Instagram');
  }
}

displayLirasPhotos();
