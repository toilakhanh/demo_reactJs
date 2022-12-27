import moment from "moment";

export const yearSelect = () => {
  const year = new Date().getFullYear();
  const arr = [];
  for (let index = 1; index < 100; index++) {
    const element = year - index;
    const item = { value: element, label: element };
    arr.push(item);
  }
  return arr;
};

export const monthSelect = () => {
  const arr = [];
  for (let index = 1; index <= 12; index++) {
    const element = index < 10 ? `0${index}` : index;
    const item = { value: element, label: element };
    arr.push(item);
  }
  return arr;
};

export const daysInMonth = (year: string = "1970", month: string = "01") => {
  const days = moment(`${year}-${month}`, "YYYY-MM").daysInMonth();
  const arr = [];
  for (let index = 1; index <= days; index++) {
    const element = index < 10 ? `0${index}` : index;
    const item = { value: element, label: element };
    arr.push(item);
  }
  return arr;
};
