import firebase from 'firebase';

export function newsFetch() {

  return (dispatch) => {
    firebase.database().ref('News')
        .once('value', (snapshot) => {
          dispatch({ type: 'news_fetch_success',
          news: snapshot.val(),
        });
      }
    ).catch(err => {
      console.log('Something Wrong While fetching News', err);
    })
  }
}
