function toPrettyNumberString(num) {
  return num.toLocaleString("en-US", { maximumFractionDigits: 2 });
}

function sumRatios(xArray, yArray) {
  return xArray
    .map((x, i) => x / (yArray[i] == 0 ? 1 : yArray[i]))
    .reduce((sum, nextval) => sum + nextval);
}

function getValuesByName(inputName) {
  return Array.from(document.getElementsByName(inputName)).map(
    (e) => +e.value.replace(new RegExp(",", 'g'), "")
  );
}

function calculate() {
  let result = toPrettyNumberString(
    sumRatios(getValuesByName("dividend"), getValuesByName("divisor"))
  );
  document.getElementById("result").innerHTML = "Result: &emsp;" + result;
}

function addRow() {
  let tableContent = document.getElementById("table-content");
  rowTemplate = tableContent.rows[0].cloneNode(true);
  rowTemplate.cells[0].firstChild.value = "";
  rowTemplate.cells[1].firstChild.value = "";
  rowTemplate.cells[2].firstChild.classList.toggle("d-none");
  tableContent.appendChild(rowTemplate);
}

function remRow(e) {
  e.closest("tr").remove();
}

function formatElementValue(e) {
  let numericValue = +e.value.replace(new RegExp(",", 'g'), "");
  e.value = isNaN(numericValue) ? e.value : toPrettyNumberString(numericValue);
}
