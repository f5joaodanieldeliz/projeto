import { getDatabase, ref, onValue, set } from 'firebase/database';
import uuid from 'react-native-uuid';

export function cadastrarAnimalPerdido(userId, animalPerdido) {
  const db = getDatabase();
  const reference = ref(db, 'animaisPerdidos');
  let animalUUid = uuid.v1();
  onValue(reference, (snapshot) => {
    let animaisPerdidos = {};
    if(snapshot.val() !== null){
      animaisPerdidos = snapshot.val()
    }
    animaisPerdidos[[`${animalUUid}`]] = animalPerdido;
    console.log("Animais Perdidos " + JSON.stringify(animaisPerdidos));
    set(reference, animaisPerdidos);
  }); 
}

export function cadastrarAnimalDoacao(userId, animalDoacao) {
  const db = getDatabase();
  const reference = ref(db, 'animaisDoacao');
  let animalUUid = uuid.v1();
  onValue(reference, (snapshot) => {
    let animaisDoacao = {};
    if(snapshot.val() !== null){
      animaisDoacao = snapshot.val()
    }
    animaisDoacao[[`${animalUUid}`]] = animalDoacao;
    console.log("Animais Perdidos " + JSON.stringify(animaisDoacao));
    set(reference, animaisDoacao);  
  });
  }

  export function cadastrarUsuario(userId, usuario, nome) {
    const db = getDatabase();
    const reference = ref(db, 'usuario');
    onValue(reference, (snapshot) => {
      let usuarios = {};
      if(snapshot.val() !== null){
        usuarios = snapshot.val()
      }
      usuarios[[`${nome}`]] = usuario;
      console.log("usuarios" + JSON.stringify(usuario));
      set(reference, usuarios);
    });
  }

  

  