export function getItems(url) {
  return new Promise((resolve, reject) => {
    fetch(url)
      .then(res => res.json())
      .then((result) => {
        resolve(result);
      }, (error) => {
        reject(error);
      });
  });
}