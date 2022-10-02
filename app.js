let saniye = document.querySelector(".sn");
let dakika = document.querySelector(".dk");
let saat = document.querySelector(".sa");
let tarihGos = document.querySelector(".tarihGos");
let saatGos = document.querySelector(".saatGos");

function analog() {
  let sn = new Date().getSeconds();
  let dk = new Date().getMinutes();
  let sa = new Date().getHours();
  let yil = new Date().getFullYear();
  let ay = new Date().getMonth() + 1;
  let gun = new Date().getDate();

  //   console.log(sa);
  //   console.log(saat, ":", dakika, ":", saniye);
  let saniyeDeg = sn * 6 + 90;
  saniye.style.transform = `rotate(${saniyeDeg}deg)`;
  let dkDeg = dk * 6 + 90;
  dakika.style.transform = `rotate(${dkDeg}deg)`;

  if (sn < 10) {
    sn = `0${sn}`;
  }
  if (dk < 10) {
    dk = `0${dk}`;
  }
    if (sa < 10) {
    sa = `0${sa}`;
  }

  if (sa > 12) {
    let saDeg = (sa - 12) * 30 + 90;
    saat.style.transform = `rotate(${saDeg}deg)`;
    // console.log(saDeg);
  } else {
    let saDeg = sa * 30 + 90;
    saat.style.transform = `rotate(${saDeg}deg)`;
  }

  if (gun < 10) {
    gun = `0${gun}`;
  }
  if (ay < 10) {
    ay = `0${ay}`;
  }

  let tarih = `${gun} - ${ay} - ${yil}`;
  tarihGos.innerText = tarih;
  let time = `${sa} : ${dk} : ${sn}`;
  saatGos.innerText = time;
}

let time = setInterval(analog, 1000);
