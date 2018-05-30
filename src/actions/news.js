import firebase from 'firebase';

export function newsFetch() {

  return (dispatch) => {
    firebase.database().ref('News')
        .once('value', (snapshot) => {
          console.log('News', snapshot.val());
          dispatch({ type: 'news_fetch_success',
          profiles: snapshot.val(),
        });
      }
    ).catch(err => {
      console.log('Something Wrong While fetching News', err);
    })
  }
}
