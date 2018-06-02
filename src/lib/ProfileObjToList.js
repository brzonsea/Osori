export const ProfileObjToList = (profileObj) => {
  const profileKeys = Object.keys(profileObj);
  const profileList = profileKeys.map((key) => {
    return {
      key,
      ...profileObj[key]
    }
  });
  profileList.unshift({ key: '0' })
  return profileList;
}
