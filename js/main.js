document.addEventListener('DOMContentLoaded',()=>{
  document.querySelectorAll('.collapsible').forEach(btn=>{
    btn.addEventListener('click',function(){
      this.classList.toggle('active');
      let content=this.nextElementSibling;
      content.style.display = content.style.display==='block'?'none':'block';
    });
  });
});

function convertCtoF(){
  let c=parseFloat(document.getElementById('celsius').value);
  document.getElementById('c_to_f_result').innerText = (c*9/5+32).toFixed(2);
}
function convertFtoC(){
  let f=parseFloat(document.getElementById('fahrenheit').value);
  document.getElementById('f_to_c_result').innerText = ((f-32)*5/9).toFixed(2);
}
function convertMtoF(){
  let m=parseFloat(document.getElementById('meters').value);
  document.getElementById('m_to_f_result').innerText = (m*3.28084).toFixed(2);
}
function convertFtoM(){
  let ft=parseFloat(document.getElementById('feet').value);
  document.getElementById('f_to_m_result').innerText = (ft/3.28084).toFixed(2);
}
function computeTax(){
  let inc=parseFloat(document.getElementById('income').value);
  let tax=inc*0.1;
  document.getElementById('tax_result').innerText = tax.toFixed(2);
}
function computeFactorial(){
  let n=parseInt(document.getElementById('fact_n').value);
  let i=1,f=1;
  while(i<=n){ f*=i; i++; }
  document.getElementById('fact_result').innerText=f;
}
function computeSum(){
  let n=parseInt(document.getElementById('sum_n').value);
  let i=1,s=0;
  do{ s+=i; i++; }while(i<=n);
  document.getElementById('sum_result').innerText=s;
}
function computeAverage(){
  let n=parseInt(document.getElementById('avg_n').value);
  let s=0;
  for(let i=1;i<=n;i++) s+=i;
  document.getElementById('avg_result').innerText=(s/n).toFixed(2);
}
function computePayroll(){
  let h=parseFloat(document.getElementById('hours').value);
  let r=parseFloat(document.getElementById('rate').value);
  document.getElementById('payroll_result').innerText=(h*r).toFixed(2);
}

// PAYROLL FUNCTIONS
let payrollList = [];

function renderPayroll(){
  let tbody=document.querySelector('#payroll_table tbody');
  tbody.innerHTML="";
  payrollList.forEach((p,i)=>{
    tbody.innerHTML += `<tr>
      <td>${i+1}</td>
      <td>${p.name}</td>
      <td>${p.days}</td>
      <td>${p.rate}</td>
      <td>${p.gross.toFixed(2)}</td>
      <td>${p.deduct.toFixed(2)}</td>
      <td>${p.net.toFixed(2)}</td>
    </tr>`;
  });
}

function addPayroll(){
  let name=document.getElementById('emp_name').value;
  let days=parseFloat(document.getElementById('days_worked').value);
  let rate=parseFloat(document.getElementById('daily_rate').value);
  let ded=parseFloat(document.getElementById('deduction').value);

  let gross = days * rate;
  let net = gross - ded;

  payrollList.push({name:name, days:days, rate:rate, gross:gross, deduct:ded, net:net});
  renderPayroll();
}

function deletePayroll(){
  let n=parseInt(document.getElementById('delete_no').value);
  if(n>=1 && n<=payrollList.length){
    payrollList.splice(n-1,1);
    renderPayroll();
  }
}

// PROGRESSIVE TAX
function computeTax(){
  let inc=parseFloat(document.getElementById('income').value);
  let tax=0;

  if(inc <= 250000) tax=0;
  else if(inc <= 400000) tax = (inc-250000)*0.20;
  else if(inc <= 800000) tax = 30000 + (inc-400000)*0.25;
  else if(inc <= 2000000) tax = 130000 + (inc-800000)*0.30;
  else if(inc <= 8000000) tax = 490000 + (inc-2000000)*0.32;
  else tax = 2410000 + (inc-8000000)*0.35;

  document.getElementById('tax_result').innerText = tax.toLocaleString();
}
