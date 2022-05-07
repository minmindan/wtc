farch_data()
function farch_data(){
  fetch("https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-C0032-001?Authorization=CWB-8EC8FBB4-2033-46CD-A8C6-AC7F705F0D4A")
  .then(function(response) {
    return response.json()
  }).then(function(data){
    printt(data);
    return data;
  })
 }
let ii = 0;
function printt(data){
    var citys=data.records.location
   citys.forEach(citys => {
    var locationName = citys.locationName;
    var startTime = citys.weatherElement[0].time[0].startTime.substr(11,5).replaceAll('-',"/")
    var endTime = citys.weatherElement[0].time[0].endTime.substr(11,5).replaceAll('-',"/")
    var minT=citys.weatherElement[2].time[0].parameter.parameterName;
    var maxT =citys.weatherElement[4].time[0].parameter.parameterName;
    var pop =citys.weatherElement[3].time[0].parameter.parameterName;
    var ci =citys.weatherElement[1].time[0].parameter.parameterName;
    var ex
    if(ci >= 80){
      ex = '<p style="color: red;">降雨機率高，建議備妥雨具</p>'
    }else if( ci >= 60){
      ex='<p style="color: #FF2A80;">有降雨可能，建議備妥雨具</p>'
    }else if( ci >= 40){
      ex='<p style="color: #FF8C84;">有機會降雨，建議備妥雨具</p>'
    }else{
      ex='<p style="color: #737CFF; width: 70%;">降雨機率低，出門時要注意防疫！</p>'
    }
    document.querySelector("#card").innerHTML += `<div id="hover${ii}" class="box"><h1>${locationName}</h1><p>${startTime} 至 ${endTime}</p><p>最低溫度:${minT}°C</p><p>最高溫度:${maxT}°C</p><p>${pop}</p><p>濕度:${ci}%</p>${ex}</div>`
    ii=ii+1; 
    return citys;
  });
}




ChiayiCounty.addEventListener('mouseenter',function(){
  hover0.classList.add('big')
});
ChiayiCounty.addEventListener('mouseleave',function(){
  hover0.classList.remove('big')
});

NewTaipei.addEventListener('mouseenter',function(){
  hover1.classList.add('big')
});
NewTaipei.addEventListener('mouseleave',function(){
  hover1.classList.remove('big')
});
ChiayiCity.addEventListener('mouseenter',function(){
  hover2.classList.add('big')
});
ChiayiCity.addEventListener('mouseleave',function(){
  hover2.classList.remove('big')
});
HsinchuCity.addEventListener('mouseenter',function(){
  hover3.classList.add('big')
});
HsinchuCity.addEventListener('mouseleave',function(){
  hover3.classList.remove('big')
});
HsinchuCounty.addEventListener('mouseenter',function(){
  hover4.classList.add('big')
});
HsinchuCounty.addEventListener('mouseleave',function(){
  hover4.classList.remove('big')
});
taipei.addEventListener('mouseenter',function(){
  hover5.classList.add('big')
});
taipei.addEventListener('mouseleave',function(){
  hover5.classList.remove('big')
});
TainanCity.addEventListener('mouseenter',function(){
  hover6.classList.add('big')
});
TainanCity.addEventListener('mouseleave',function(){
  hover6.classList.remove('big')
});
Yilan.addEventListener('mouseenter',function(){
  hover7.classList.add('big')
});
Yilan.addEventListener('mouseleave',function(){
  hover7.classList.remove('big')
});

MiaoliCounty.addEventListener('mouseenter',function(){
  hover8.classList.add('big')
});
MiaoliCounty.addEventListener('mouseleave',function(){
  hover8.classList.remove('big')
});
YunlinCounty.addEventListener('mouseenter',function(){
  hover9.classList.add('big')
});
YunlinCounty.addEventListener('mouseleave',function(){
  hover9.classList.remove('big')
});

Hualien.addEventListener('mouseenter',function(){
  hover10.classList.add('big')
});
Hualien.addEventListener('mouseleave',function(){
  hover10.classList.remove('big')
});

TaichungCity.addEventListener('mouseenter',function(){
  hover11.classList.add('big')
});
TaichungCity.addEventListener('mouseleave',function(){
  hover11.classList.remove('big')
});

Taitung.addEventListener('mouseenter',function(){
  hover12.classList.add('big')
});
Taitung.addEventListener('mouseleave',function(){
  hover12.classList.remove('big')
});

TaoyuanCity.addEventListener('mouseenter',function(){
  hover13.classList.add('big')
});

TaoyuanCity.addEventListener('mouseleave',function(){
  hover13.classList.remove('big')
});

NantouCounty.addEventListener('mouseenter',function(){
  hover14.classList.add('big')
});
NantouCounty.addEventListener('mouseleave',function(){
  hover14.classList.remove('big')
});

KaohsiungCity.addEventListener('mouseenter',function(){
  hover15.classList.add('big')
});
KaohsiungCity.addEventListener('mouseleave',function(){
  hover15.classList.remove('big')
});

kinmen.addEventListener('mouseenter',function(){
    hover16.classList.add('big')
});
kinmen.addEventListener('mouseleave',function(){
    hover16.classList.remove('big')
});

PingtungCounty.addEventListener('mouseenter',function(){
  hover17.classList.add('big')
});
PingtungCounty.addEventListener('mouseleave',function(){
  hover17.classList.remove('big')
});

Keelung.addEventListener('mouseenter',function(){
  hover18.classList.add('big')
});
Keelung.addEventListener('mouseleave',function(){
  hover18.classList.remove('big')
});

Penghu.addEventListener('mouseenter',function(){
  hover19.classList.add('big')
});
Penghu.addEventListener('mouseleave',function(){
  hover19.classList.remove('big')
});

ChanghuaCounty.addEventListener('mouseenter',function(){
  hover20.classList.add('big');
});
ChanghuaCounty.addEventListener('mouseleave',function(){
  hover20.classList.remove('big');
});

Lienchiang.addEventListener('mouseenter',function(){
  hover21.classList.add('big')
});
Lienchiang.addEventListener('mouseleave',function(){
  hover21.classList.remove('big')
});
