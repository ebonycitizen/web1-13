//change page
function getFileName()
{
  return window.location.href.split('/').pop();
}

var filename = getFileName();
var opt;
if(filename === 'other.html')
{
  opt = document.querySelector('option[value="other.html"]');
}
else
{
  opt = document.querySelector('option[value="index.html"]');
}
opt.selected = true;

document.getElementById('form').select.onchange = function()
{
  location.href = document.getElementById('form').select.value;
}

//cookie
var last_date = getCookie('lastDate');
if(last_date)
{
  document.getElementById('cookie').textContent = '前回訪れた時間' + last_date;
}
else
{
  document.getElementById('cookie').textContent = '初めまして';
}

var current_time = new Date();
setCookie('lastDate', current_time.toString(), 7);

//countdown
var separate_time = function(time)
{
  var sec = time.getSeconds();
  var min = time.getMinutes();
  var hours = time.getHours();
  var days = time.getDate();
  var month = time.getMonth();
  var year = time.getFullYear();
  return [sec, min, hours, days, month, year];
}
var update = function()
{
  var now = new Date();
  var counter = separate_time(now);
  document.getElementById('countdown').textContent =
    counter[5] + '年' +
    counter[4] + '月' +
    counter[3] + '日' +
    counter[2] + '時' +
    counter[1] + '分' +
    counter[0] + '秒';
  refresh();
}

var refresh = function()
{
  setTimeout(update, 1000);
}

update();
