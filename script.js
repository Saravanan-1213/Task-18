var container= document.createElement("div");
container.setAttribute("class","container");

var row = document.createElement("div");
row.setAttribute("class","row");

container.append(row);

 var res=fetch("https://restcountries.com/v2/all")
.then((data)=>data.json())
.then((data1)=>{
  for (var i=0;i<data1.length;i++){
  var div=document.createElement("div");
  row.innerHTML+=`<div class="col-md-4">
  <div class="card border-warning mb-3" style="max-width: 18rem;">
  <div class="card-header">Countryname:${data1[i].name}</div>
  <img src="${data1[i].flag}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Capital:${data1[i].capital}</h5>
    <h5 class="card-title">Region:${data1[i].region}</h5>
    <h5 class="card-title">Latitude:</h5>
    <h5 class="card-title">Longitude:</h5>
    <h5 class="card-title">Coutry Code:${data1[i].alpha3Code}</h5>
    <a href="#" class="btn btn-primary">Click for Weather</a>
    </div>
    </div>
</div>`
document.body.append(container);
  }
})

