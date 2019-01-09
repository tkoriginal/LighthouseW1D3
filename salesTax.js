var salesTaxRates = {
  AB: 0.05,
  BC: 0.12,
  SK: 0.10
};

var companySalesData = [
  {
    name: "Telus",
    province: "BC",
    sales: [ 100, 200, 400 ]
  },
  {
    name: "Bombardier",
    province: "AB",
    sales: [ 80, 20, 10, 100, 90, 500 ]
  },
  {
    name: "Telus",
    province: "SK",
    sales: [ 500, 100 ]
  }
];

function calculateSalesTax(salesData, taxRates) {
  const companyReport = {}
  salesData.forEach(company => {
    const totalSale = company.sales.reduce((acc, cur) => acc + cur);
    const totalTax = totalSale * taxRates[company.province];
    if (companyReport[company.name]) {
      companyReport[company.name].totalSales += totalSale;
    } else {
      companyReport[company.name] = {totalSales:totalSale , totalTaxes: totalTax};
    }
  })
  return companyReport;
}

var results = calculateSalesTax(companySalesData, salesTaxRates);

console.log(results)