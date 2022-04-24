import axios from "axios";

function getCovidData() {
  return new Promise((resolve, reject) => {
    const dataFromAPI = axios.get("https://api.covid19api.com/summary");
    console.log("Đang lấy dữ liệu, xin vui lòng chờ...");
    console.log(dataFromAPI)
    resolve(dataFromAPI);
  });
}
function getCountryWithMostNewConfirm(inputData) {
  let newConfirmed = inputData.data.Countries.map((country) => {
    return [country.Country, country.NewConfirmed];
  });
  let mostNewConfirmed = newConfirmed.reduce((country1, country2) => {
    return Math.max(country1, country2[1]);
  }, []);
  return newConfirmed.filter((country) => {
    return country[1] === mostNewConfirmed;
  });
}
function getCountryWithMostTotalDeaths(inputData) {
  let totalDeaths = inputData.data.Countries.map((country) => {
    return [country.Country, country.TotalDeaths];
  });
  let mostTotalDeaths = totalDeaths.reduce((country1, country2) => {
    return Math.max(country1, country2[1]);
  }, []);
  return totalDeaths.filter((country) => {
    return country[1] === mostTotalDeaths;
  });
}

getCovidData()
.then((data) => {
  console.log("Đã lấy dữ liệu thành công, đang xuất thống kê:");
  console.log("Dữ liệu Covid hôm nay:");
  console.log(
    `Nhiễm mới: ${data.data.Global.NewConfirmed} - Số người chết mới: ${data.data.Global.NewDeaths} - Tổng số người chết: ${data.data.Global.TotalDeaths}`
  );
  console.log(
    `Quốc Gia có số lượng tổng cộng người chết nhiều nhất là ${getCountryWithMostTotalDeaths(data)[0][0]}: ${getCountryWithMostTotalDeaths(data)[0][1]} người `
  );
  console.log(
    `Quốc Gia có số lượng người mắc mới trong ngày nhiều nhất là ${getCountryWithMostNewConfirm(data)[0][0]}: ${getCountryWithMostNewConfirm(data)[0][1]} người`
  );
})
.catch((error) => {
    console.log(error)
})

