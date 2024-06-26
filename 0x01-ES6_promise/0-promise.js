// 0-promise.js
export default function getResponseFromAPI() {
  return new Promise((resolve, reject) => {
    const condition = true; // You can change this to false to test the rejection
    if (condition) {
      resolve('success');
    } else {
      reject(new Error('error'));
    }
  });
}

