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
  document.getElementById("normalOTPay").textContent = `Normal OT Pay: ₹ ${normalOTPay.toFixed(2)}`;
  document.getElementById("specialOTPay").textContent = `Special OT Pay: ₹ ${specialOTPay.toFixed(2)}`;
  document.getElementById("lieuLeavePay").textContent = `Lieu Leave Pay: ₹ ${lieuLeavePay.toFixed(2)}`;
  document.getElementById("grossSalary").textContent = `Gross Salary: ₹ ${grossSalary.toFixed(2)}`;
  document.getElementById("deduction").textContent = `Deduction (8%): ₹ ${deduction.toFixed(2)}`;
  document.getElementById("netSalary").textContent = `Net Salary: ₹ ${netSalary.toFixed(2)}`;

  document.getElementById("result").style.display = "block";
});
