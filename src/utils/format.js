export function intOfKr(value = 0) {
  return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

const krOfInt = (value) => {
  return parseInt(value.replaceAll(",", ""));
};
