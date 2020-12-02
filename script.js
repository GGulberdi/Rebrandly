// Information to reach API
const apiKey = '0ac2f9194adb482d903c32e29e70ab2c';
const url = 'https://api.rebrandly.com/v1/links';

// Some page elements
const inputField = document.querySelector('#input');
const shortenButton = document.querySelector('#shorten');
const responseField = document.querySelector('#responseField');

////////////////////////
const shortenUrl = () => {
    const urltoShorten = inputField.value;
    const xhr = new XMLHttpRequest();
    const data = JSON.stringify({destination:urltoShorten})
    
    xhr.responseType = 'json';
    xhr.onreadystatechange=()=>{
      if(xhr.readyState===XMLHttpRequest.DONE){
     renderResponse(xhr.response)
      }
    }
    
    
    xhr.open('POST', url);
    xhr.setRequestHeader('Content-Type','application/json')
    xhr.setRequestHeader('apikey',apiKey)
    xhr.send(data);
    }
    
    
    // Clear page and call AJAX functions
    const displayShortUrl = (event) => {
      event.preventDefault();
      while(responseField.firstChild){
        responseField.removeChild(responseField.firstChild);
      }
      shortenUrl();
    }
    
    shortenButton.addEventListener('click', displayShortUrl);
    