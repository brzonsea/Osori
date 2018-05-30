import firebase from 'firebase';

export function profilesFetch() {
  return (dispatch) => {
    firebase.database().ref('Profiles')
        .once('value', (snapshot) => {
          dispatch({ type: 'profiles_fetch_success',
          profiles: snapshot.val(),
        });
      }
    ).catch(err => {
      console.log('Something Wrong While fetching profiles', err);
    })
  }
}
