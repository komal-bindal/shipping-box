export const getFilteredData = (data, searchText) => {
  const wildCardSymbols = ["(", ")", "[", "]", "\\", "+", "^", "$", "?", "*"];

  if (searchText === "") return data;

  let searchTextRegex = "";
  for (let i = 0; i < searchText.length; i++) {
    if (wildCardSymbols.includes(searchText.charAt(i))) {
      searchTextRegex = searchTextRegex + "\\" + searchText.charAt(i);
    } else {
      searchTextRegex = searchTextRegex + searchText.charAt(i);
    }
  }

  let filteredData = data.filter(
    (item) => item.receiverName?.search(searchTextRegex) !== -1
  );

  return filteredData;
};

export const getPrice = (country, weight) =>
  parseFloat(country?.split("(")[1].split(" ")[0]) * weight;

export const getColumnsConfig = ({ getBoxColorCell, getPriceCell }) => {
  return {
    receiverName: { label: "Receiver Name" },
    weight: { label: "Weight (in kgs)" },
    destinationCountry: { label: "Destination Country" },
    boxColor: { label: "Box Color", customCell: getBoxColorCell },
    shippingCost: { label: "Shipping cost (INR)", customCell: getPriceCell },
  };
};
