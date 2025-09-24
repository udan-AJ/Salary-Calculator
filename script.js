document.getElementById("salaryForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const basic = parseFloat(document.getElementById("basicSalary").value) || 0;
  const normalOT = parseFloat(document.getElementById("normalOT").value) || 0;
  const specialOT = parseFloat(document.getElementById("specialOT").value) || 0;
  const lieuLeaves = parseFloat(document.getElementById("lieuLeaves").value) || 0;

  // Calculate pay components
  const normalOTPay = (basic / 240) * 1.5 * normalOT;
  const specialOTPay = (basic / 240) * 2 * specialOT;
  const lieuLeavePay = (basic / 20) * lieuLeaves;

  const grossSalary = basic + normalOTPay + specialOTPay + lieuLeavePay;

  // Deduction calculation (excluding normal OT pay)
  const deductionBase = basic + (grossSalary - basic - normalOTPay);
  const deduction = deductionBase * 0.08;

  const netSalary = grossSalary - deduction;

  // Display results
  document.getElementById("normalOTPay").textContent = `Normal OT Pay: Rs. ${normalOTPay.toFixed(2)}`;
  document.getElementById("specialOTPay").textContent = `Special OT Pay: Rs. ${specialOTPay.toFixed(2)}`;
  document.getElementById("lieuLeavePay").textContent = `Lieu Leave Pay: Rs. ${lieuLeavePay.toFixed(2)}`;
  document.getElementById("grossSalary").textContent = `Gross Salary: Rs. ${grossSalary.toFixed(2)}`;
  document.getElementById("deduction").textContent = `Deduction (8%): Rs. ${deduction.toFixed(2)}`;
  document.getElementById("netSalary").textContent = `Net Salary: Rs. ${netSalary.toFixed(2)}`;

  document.getElementById("result").style.display = "block";
});

