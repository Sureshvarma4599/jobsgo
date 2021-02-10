
//to display some jobs with window onload action

window.onload=function() {
    const promise= new Promise((resolve,reject)=>{
        const http=new XMLHttpRequest();
        http.open('GET',`https://cors-anywhere.herokuapp.com/jobs.github.com/positions.json`)
   
        http.onload=()=>{
            if(http.status===200){
                resolve(http.response)
            }
            else{
                reject(http.statusText)
            }
        }

        http.send();
      
    })
    promise.then((data)=>{
        console.log(JSON.parse(data))
        const result=JSON.parse(data)
        const final =result.slice(0,10);
        var user=``
      
        final.forEach(element => {
        user+=`
              <div id="user" onclick="window.open('${element.url}')">
              <div class="card"><img src="${element.company_logo}" alt=""></div>
               
               <div id="location">${element.created_at} <div id="location">${element.type}</div></div>
              
               <div id="company">${element.title}</div>
               <div id="location">${element.company}</div>
               <div id="location">${element.location}</div>
            </div>`
          });
         document.querySelector('.user1').innerHTML=user;
              
    })
    promise.catch((error)=>{
        console.log(error)
    })

}
//displaying more jobs on the landing page
var page=2;

const bton = document.querySelector('#next')
bton.onclick=function() {
    

    const promise= new Promise((resolve,reject)=>{
        const http=new XMLHttpRequest();
        http.open('GET',`https://cors-anywhere.herokuapp.com/jobs.github.com/positions.json?page=${page++}`)
   
        http.onload=()=>{
            if(http.status===200){
                resolve(http.response)
            }
            else{
                reject(http.statusText)
            }
        }

        http.send();
    })
    promise.then((data)=>{
        console.log(JSON.parse(data))
        const resp=JSON.parse(data)
        const final=resp.slice(0,10)
    
        var user=``
                  final.forEach(element => {
                    user+=`
                    <div id="filtered" onclick="window.open('${element.url}')">
                    <div class="card"><img src="${element.company_logo}" alt=""></div>
                    <div id="location">${element.created_at} <div id="location">${element.type}</div></div>
                    
                    <div id="company">${element.title}</div>
                    <div id="location">${element.company}</div>
                    <div id="location">${element.location}</div>
                    </div>
                    `  
                   });
                  document.querySelector('.user').innerHTML=user;
               
    })
    promise.catch((error)=>{
        console.log(error)
    })

}
//filtering the items 
var clicked = "false";
function check(){
    var checkBox = document.querySelector("#box");
  
    if(checkBox.checked==true){
        clicked="true";
    }else{
        clicked="false";
    }
}

const button = document.querySelector("#btn")
button.onclick=function() {
    
    const fil = document.querySelector("#jobtype").value;
      const promise= new Promise((resolve,reject)=>{
          const http=new XMLHttpRequest();
          http.open('GET',`https://cors-anywhere.herokuapp.com/jobs.github.com/positions.json?description=${fil}&full_time=${clicked}`)
  
          http.onload=()=>{
              if(http.status===200){
                  resolve(http.response)
              }
              else{
                  reject(http.statusText)
              }
          }
  
          http.send();
      })
      promise.then((data)=>{
          console.log(JSON.parse(data))
          const result=JSON.parse(data)
          const final = result.splice(0,10)
          var user=``
                    final.forEach(element => {
                      user+=`
                      <div id="searched" onclick="window.open('${element.url}')">
                      <div class="card"><img src="${element.company_logo}" alt=""></div>
                      <div id="location">${element.created_at} <div id="location">${element.type}</div> </div>
                      
                      <div id="company">${element.title}</div>
                      <div id="location">${element.company}</div>
                      <div id="location">${element.location}</div>
                      </div>
                      `  
                     });
                    document.querySelector('.user').innerHTML=user;
      })
      promise.catch((error)=>{
          console.log(error)
      })
  
  }

 