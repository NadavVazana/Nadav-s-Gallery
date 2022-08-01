function init() {
    createProjects()
    renderProjs()
    
}




function onModalClick(projId){
    var proj = getProjectById(projId)
    updateModal(proj)


}

function contactSubmit(ev){
  ev.preventDefault()
  var $email = $('.email').val()
  var $subject = $('.subject').val()
  var $message = $('.message').val()
  window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=nadavvivsa@gmail.com&su=${$subject}&body=${$message}&bcc=${$email}`)
}

function updateModal(proj){
 var $elModal =  $('.modal-body')
  var strHTML = `  <h2>${proj.name}</h2>
  <p class="item-intro text-muted">${proj.desc}</p>
 <a target="_blank" href="${proj.url}"> <img class="img-fluid d-block mx-auto" src="${proj.img}" alt=""></a>
  <p>${proj.desc}</p>
  <ul class="list-inline">
    <li>Date: January 2017</li>
    <li>Client: Window</li>
    <li>Category: Photography</li>
  </ul>
  <div class="">
  <button class="btn btn-primary" data-dismiss="modal" type="button">
      <i class="fa fa-times"></i>
      Close Project</button>

      <button onclick="window.open('${proj.url}', '_blank');" class="btn text-primary bg-danger">Try the demo! </button>
      
      `

      $elModal.html(strHTML)
}
function renderProjs(){
    var projs = getProjects()

    var strHTML = projs.map(proj =>{ 
 return `<div class="col-md-4 col-sm-6 portfolio-item">
 <a class="portfolio-link" data-toggle="modal"  href="#portfolio-modal" onclick=onModalClick('${proj.id}') >
   <div class="portfolio-hover">
     <div class="portfolio-hover-content">
       <i class="fa fa-plus fa-3x"></i>
     </div>
   </div>
   <img class="img-fluid" src="${proj.img}" alt="">
 </a>
 <div class="portfolio-caption">
   <h4>${proj.name}</h4>
   <p class="text-muted">${proj.desc}</p>
 </div>
</div>`
    })

    $('.projs').html(strHTML.join(''))
}





