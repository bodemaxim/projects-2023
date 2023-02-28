function emptyCheck(obj) {
    for (let key in obj) {
        return false;
    }
    return true;
  }