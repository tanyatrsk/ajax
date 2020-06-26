const url = 'http://cors-test.appspot.com/test';
const methods = ['GET', 'POST', 'WEIRD'];

function xhRequest(Url, method) {
  const xhr = new XMLHttpRequest();
  xhr.open(method, Url);
  xhr.send();
  const htmlText = document.querySelector(`.${method.toLowerCase()}`);
  xhr.onload = function Load() {
    if (xhr.status === 200 && xhr.readyState === 4 && JSON.parse(xhr.response).status === 'ok') {
      htmlText.style.color = 'green';
      htmlText.style.fontStyle = 'bold';
      htmlText.textContent = 'OK';
    }
  };
  xhr.onerror = function Error() {
    htmlText.style.color = 'red';
    htmlText.style.fontStyle = 'bold';
    htmlText.textContent = 'Failed';
  };
}
methods.forEach((method) => {
  xhRequest(url, method);
});
