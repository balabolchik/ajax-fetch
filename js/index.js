document.querySelector('.timestamp').innerText = new Date ().toLocaleTimeString();

document.querySelector('.ajax').addEventListener('click', getHtmlAjax);

function getHtmlAjax() {
  const xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
    if (xhr.readyState===4 && xhr.status===200) {
      document.querySelector('.html-container').innerHtml = xhr.responseText;
    }
  } 
  xhr.open('GET', 'client-data.html', true);
  xhr.send();
}