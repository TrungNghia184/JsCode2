const gioAnCom = 19;
function an_com(thoiGian) {
  return new Promise((resolve, reject) => {
    console.log("Gio bat dau an com", new Date(), thoiGian);
    setTimeout(() => {
      console.log(`Gio an com xong`, new Date(), thoiGian + 2);
      resolve(thoiGian + 2);
    }, 2000);
  });
}

function xem_phim(thoiGian) {
  return new Promise((resolve, reject) => {
    console.log("Gio bat dau xem phim", new Date(), thoiGian);
    setTimeout(() => {
      console.log(`Gio xem phim xong`, new Date(), thoiGian + 1);
      resolve(thoiGian + 1);
    }, 1000);
  });
}

function di_dao(thoiGian) {
  return new Promise((resolve, reject) => {
    console.log("Gio bat dau di dao", new Date(), thoiGian);
    setTimeout(() => {
      console.log(`Gio di dao xong`, new Date(), thoiGian + 1);
      resolve(thoiGian + 1);
    }, 1000);
  });
}

function di_ngu(thoiGian) {
  console.log("Di ngu luc ", thoiGian);
}

// an_com(gioAnCom)
// .then((thoiGian) => {
//   return Promise.all([xem_phim(thoiGian), di_dao(thoiGian)])
// })
// .then((thoiGian) => {
//     di_ngu(thoiGian);
// });

async function batDau() {
  await an_com(gioAnCom)
  await xem_phim(gioAnCom + 2)
  await di_ngu(gioAnCom + 3)
}
batDau()

