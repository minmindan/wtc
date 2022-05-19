farch_data()
function farch_data(){
  fetch("https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-C0032-001?Authorization=CWB-8EC8FBB4-2033-46CD-A8C6-AC7F705F0D4A")
  .then(function(response) {
    return response.json()
  }).then(function(data){
    printt(data);
    console.log(data);
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
  });
}

function none(){
  hover0.classList.remove('boom');
  hover1.classList.remove('boom');
  hover2.classList.remove('boom');
  hover3.classList.remove('boom');
  hover4.classList.remove('boom');
  hover5.classList.remove('boom');
  hover6.classList.remove('boom');
  hover7.classList.remove('boom');
  hover8.classList.remove('boom');
  hover9.classList.remove('boom');
  hover10.classList.remove('boom');
  hover11.classList.remove('boom');
  hover12.classList.remove('boom');
  hover13.classList.remove('boom');
  hover14.classList.remove('boom');
  hover15.classList.remove('boom');
  hover16.classList.remove('boom');
  hover17.classList.remove('boom');
  hover18.classList.remove('boom');
  hover19.classList.remove('boom');
  hover20.classList.remove('boom');
  hover21.classList.remove('boom');
};
function none_(){
  Chiayim.classList.add('none');
  NewTaipeim.classList.add('none');
  HsinchuCitym.classList.add('none');
  HsinchuCitym.classList.add('none');
  NewTaipeim.classList.add('none');
  Hsinchum.classList.add('none');
  taipeim.classList.add('none');
  Tainanm.classList.add('none');
  Ilanm.classList.add('none');
  Miaolim.classList.add('none');
  NewTaipeim.classList.add('none');
  Hualienm.classList.add('none');
  Taichungm.classList.add('none');
  Taitungm.classList.add('none');
  Taoyuanm.classList.add('none');
  Nantoum.classList.add('none');
  Kaohsiungm.classList.add('none');
  Kinmenm.classList.add('none');
  Pingtungm.classList.add('none');
  Keelungm.classList.add('none');
  Penghum.classList.add('none');
  Changhuam.classList.add('none');
};

var box = document.querySelectorAll('.box')

ChiayiCounty.addEventListener('click',function(){
  none();
  hover0.classList.add('boom');
  package.classList.remove('none');
  Chiayim.classList.remove('none');
});

NewTaipei.addEventListener('click',function(){
  none();
  hover1.classList.add('boom');
  package.classList.remove('none');
  NewTaipeim.classList.remove('none');
});

ChiayiCity.addEventListener('click',function(){
  none();
  hover2.classList.add('boom');
  package.classList.remove('none');
  HsinchuCitym.classList.remove('none');
});

HsinchuCity.addEventListener('click',function(){
  none();
  hover3.classList.add('boom');
  package.classList.remove('none');
  HsinchuCitym.classList.remove('none');
});

HsinchuCounty.addEventListener('click',function(){
  none();
  hover4.classList.add('boom');;
  package.classList.remove('none');
  Hsinchum.classList.remove('none');
});

taipei.addEventListener('click',function(){
  none();
  hover5.classList.add('boom');
  package.classList.remove('none');
  taipeim.classList.remove('none');
});

TainanCity.addEventListener('click',function(){
  none();
  hover6.classList.add('boom');
  package.classList.remove('none');
  Tainanm.classList.remove('none');
});

Yilan.addEventListener('click',function(){
  none();
  hover7.classList.add('boom');
  package.classList.remove('none');
  Ilanm.classList.remove('none');
});

MiaoliCounty.addEventListener('click',function(){
  none();
  hover8.classList.add('boom');
  package.classList.remove('none');
  Miaolim.classList.remove('none');
});

YunlinCounty.addEventListener('click',function(){
  none();
  hover9.classList.add('boom');
  package.classList.remove('none');
  NewTaipeim.classList.remove('none');
});

Hualien.addEventListener('click',function(){
  none();
  hover10.classList.add('boom');
  package.classList.remove('none');
  Hualienm.classList.remove('none');
});

TaichungCity.addEventListener('click',function(){
  none();
  hover11.classList.add('boom');
  package.classList.remove('none');
  Taichungm.classList.remove('none');
});

Taitung.addEventListener('click',function(){
  none();
  hover12.classList.add('boom');
  package.classList.remove('none');
  Taitungm.classList.remove('none');
});

TaoyuanCity.addEventListener('click',function(){
  none();
  hover13.classList.add('boom');
  package.classList.remove('none');
  Taoyuanm.classList.remove('none');
});

NantouCounty.addEventListener('click',function(){
  none();
  hover14.classList.add('boom');
  package.classList.remove('none');
  Nantoum.classList.remove('none');
});

KaohsiungCity.addEventListener('click',function(){
  none();
  hover15.classList.add('boom');
  package.classList.remove('none');
  Kaohsiungm.classList.remove('none');
});

kinmen.addEventListener('click',function(){
  none();
    hover16.classList.add('boom');
    package.classList.remove('none');
    Kinmenm.classList.remove('none');
});

PingtungCounty.addEventListener('click',function(){
  none();
  hover17.classList.add('boom');
  package.classList.remove('none');
  Pingtungm.classList.remove('none');
});

Keelung.addEventListener('click',function(){
  none();
  hover18.classList.add('boom');
  package.classList.remove('none');
  Keelungm.classList.remove('none');
});

Penghu.addEventListener('click',function(){
  none();
  hover19.classList.add('boom');
  package.classList.remove('none');
  Penghum.classList.remove('none');
});

ChanghuaCounty.addEventListener('click',function(){
  none();
  hover20.classList.add('boom');
  package.classList.remove('none');
  Changhuam.classList.remove('none');;
});

Lienchiang.addEventListener('click',function(){
  none();
  hover21.classList.add('boom');
  package.classList.remove('none');
  NewTaipeim.classList.remove('none');
});

but.addEventListener('click',function(){
  none();
  package.classList.add('none')
  none_();
})