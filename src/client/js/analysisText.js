
function validUrl(str) {
  const pattern = new RegExp(
    '^(https?:\\/\\/)?' + 
      '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' +
      '((\\d{1,3}\\.){3}\\d{1,3}))' + 
      '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + 
      '(\\?[;&a-z\\d%_.~+=-]*)?' + 
      '(\\#[-a-z\\d_]*)?$',
    'i'
  ) 
  return !!pattern.test(str)
}
const post = async (url = '', data = {}) => {
  const response = await fetch(url, {
    method: 'POST',
    credentials: 'same-origin',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
  try {
      return await response.json()
  } catch (error) {
    console.log(error)
  }
}

function analysis(artical , lang) {

    let test = (artical == null || artical.length == 0 || typeof artical !== "string")
    if(test)
    {
       alert("Empty artical input is an invalid submit" )   
    }

    if(validUrl(artical)){
        alert('Good URL');
        return;
    }
    else{
      fetch("http://localhost:8082/artical", 
        {   
            method:'POST', 
            headers:{"content-type":"application/json"}, 
            body:JSON.stringify({
              artical:artical,
              lang:lang
            })
        })
          .then(res => res.json())
          .then(res => {
              console.log(res);
              return res;
          })
          .then(res => {

            document.getElementById('text').textContent = res.text
            document.getElementById('agreement').textContent = res.agreement
            document.getElementById('confidence').textContent = res.confidence
            document.getElementById('score_tag').textContent = res.score_tag
            document.getElementById('subjectivity').textContent = res.subjectivity
            document.getElementById('irony').textContent = res.irony

          
          })}
        
}
export{
    analysis
}
    










