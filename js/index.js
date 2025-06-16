

document.getElementById('donate-noakhali').addEventListener('click', function(){

    const donateInputNoakhali = document.getElementById('donate-input-noakhali').value;
    const parseDonateInputNoakhali = parseFloat(donateInputNoakhali);

    const balanceNoakhali = document.getElementById('balance-noakhali').innerText;
    const parseBalanceNoakhali = parseFloat(balanceNoakhali);

    const myBalance = document.getElementById('my-balance').innerText;
    const parseMyBalance = parseFloat(myBalance);

    if(parseDonateInputNoakhali > 0 && !isNaN(parseDonateInputNoakhali)){
         const newBalanceNoakhali = parseDonateInputNoakhali + parseBalanceNoakhali;
         document.getElementById('balance-noakhali').innerText = newBalanceNoakhali;

         const newMyBalance = parseMyBalance - parseDonateInputNoakhali;
         document.getElementById('my-balance').innerText = newMyBalance;
         
        const modalMoney = document.getElementById('modal-money');
        modalMoney.innerHTML += `<p>You have donated ${donateInputNoakhali} and total ${newBalanceNoakhali}</p>`

        
    }
    else{
        alert('Kindly Enter amount greater than 0 and only number');
    }

})