import axios from "axios";

async function getAndPrintCovidData() {
  try {
    const response = await axios.get("https://api.covid19api.com/summary");
    console.log("Đã lấy dữ liệu thành công, đang xuất thống kê:");
    console.log("Dữ liệu Covid hôm nay:");
    console.log(
      `Nhiễm mới: ${response.data.Global.NewConfirmed} - Số người chết mới: ${response.data.Global.NewDeaths} - Tổng số người chết: ${response.data.Global.TotalDeaths}`
    );
    console.log(
      `Quốc Gia có số lượng tổng cộng người chết nhiều nhất là: ${getCountryWithMostTotalDeaths(response)[0][0]} (${getCountryWithMostTotalDeaths(response)[0][1]} người) `
    );
    console.log(
      `Quốc Gia có số lượng người mắc mới trong ngày nhiều nhất là: ${getCountryWithMostNewConfirm(response)[0][0]} (${getCountryWithMostNewConfirm(response)[0][1]} người)`
    );
  } catch (error) {
    console.error(error);
  }
}
async function runCode() {
  console.log("Đang lấy dữ liệu, xin vui lòng chờ...");
  await getAndPrintCovidData();
}
function getCountryWithMostNewConfirm(object) {
  let newConfirmed = object.data.Countries.map((country) => {
    return [country.Country, country.NewConfirmed];
  });
  let mostNewConfirmed = newConfirmed.reduce((country1, country2) => {
    return Math.max(country1, country2[1]);
  }, []);
  return newConfirmed.filter((country) => {
    return country[1] === mostNewConfirmed;
  });
}
function getCountryWithMostTotalDeaths(object) {
  let totalDeaths = object.data.Countries.map((country) => {
    return [country.Country, country.TotalDeaths];
  });
  let mostTotalDeaths = totalDeaths.reduce((country1, country2) => {
    return Math.max(country1, country2[1]);
  }, []);
  return totalDeaths.filter((country) => {
    return country[1] === mostTotalDeaths;
  });
}
runCode();
