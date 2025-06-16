// START 1ST BOX JS SECTION
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
         
        const modalMoneyNoakhali = document.getElementById('modal-money-noakhali');
        modalMoneyNoakhali.innerHTML += `<p>You have donated ${donateInputNoakhali} and total ${newBalanceNoakhali}</p>`

        
    }
    else{
        alert('Kindly Enter amount greater than 0 and only number');
    }

})
// END 1ST BOX JS SECTION

// START 2ND BOX JS SECTION
document.getElementById('donate-feni').addEventListener('click', function(){

    const donateInputfeni = document.getElementById('donate-input-feni').value;
    const parseDonateInputfeni = parseFloat(donateInputfeni);

    const balancefeni = document.getElementById('balance-feni').innerText;
    const parseBalancefeni = parseFloat(balancefeni);

    const myBalance = document.getElementById('my-balance').innerText;
    const parseMyBalance = parseFloat(myBalance);

    if(parseDonateInputfeni > 0 && !isNaN(parseDonateInputfeni)){
         const newBalancefeni = parseDonateInputfeni + parseBalancefeni;
         document.getElementById('balance-feni').innerText = newBalancefeni;

         const newMyBalance = parseMyBalance - parseDonateInputfeni;
         document.getElementById('my-balance').innerText = newMyBalance;
         
        const modalMoneyfeni = document.getElementById('modal-money-feni');
        modalMoneyfeni.innerHTML += `<p>You have donated ${donateInputfeni} and total ${newBalancefeni}</p>`

        
    }
    else{
        alert('Kindly Enter amount greater than 0 and only number');
    }

})
// END 2ND BOX JS SECTION



// START 3RD BOX JS SECTION
document.getElementById('donate-quotaAid').addEventListener('click', function(){

    const donateInputquotaAid = document.getElementById('donate-input-quotaAid').value;
    const parseDonateInputquotaAid = parseFloat(donateInputquotaAid);

    const balancequotaAid = document.getElementById('balance-quotaAid').innerText;
    const parseBalancequotaAid = parseFloat(balancequotaAid);

    const myBalance = document.getElementById('my-balance').innerText;
    const parseMyBalance = parseFloat(myBalance);

    if(parseDonateInputquotaAid > 0 && !isNaN(parseDonateInputquotaAid)){
         const newBalancequotaAid = parseDonateInputquotaAid + parseBalancequotaAid;
         document.getElementById('balance-quotaAid').innerText = newBalancequotaAid;

         const newMyBalance = parseMyBalance - parseDonateInputquotaAid;
         document.getElementById('my-balance').innerText = newMyBalance;
         
        const modalMoneyquotaAid = document.getElementById('modal-money-quotaAid');
        modalMoneyquotaAid.innerHTML += `<p>You have donated ${donateInputquotaAid} and total ${newBalancequotaAid}</p>`

        
    }
    else{
        alert('Kindly Enter amount greater than 0 and only number');
    }

})
// END 3RD BOX JS SECTION


