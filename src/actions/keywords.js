import firebase from 'firebase';

export function keywordsFetch() {

  return (dispatch) => {
    console.log('inside keywordsFetch');
    firebase.database().ref('Keywords')
        .once('value', (snapshot) => {
          dispatch({ type: 'keywords_fetch_success',
          keywords: snapshot.val(),
        });
      }
    ).catch(err => {
      console.log('Something Wrong While fetching keywords', err);
    })
  }
}
