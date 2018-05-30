import firebase from 'firebase';

export function profilesFetch() {
  console.log('Inside ProfilesFetch');
  return (dispatch) => {
    console.log('Should be dispatching');
    firebase.database().ref('Profiles')
        .once('value', (snapshot) => {
          console.log('Profiles', snapshot.val());
          dispatch({ type: 'profiles_fetch_success',
          profiles: snapshot.val(),
        });
      }
    ).catch(err => {
      console.log('Something Wrong While fetching profiles', err);
    })
  }
}
