document.getElementById("log_btn").addEventListener("click",logbtn);
var main_body = document.getElementById("main");
main_body.style.display = "none";

function logbtn()
{
    var log_boxs = document.getElementById("log_box");

    var users = document.getElementById("user_in").value;
    var userpass = document.getElementById("pass_in").value;
    if(users == "gautam" && userpass == "gautam321"){
        // alert("Invalid Username");
        log_boxs.style.display = "none";
        main_body.style.display = "block";

    }
    // else if(userpass == "123")
    //  {
    //         alert("Invalid Password");
    // }
    else
    {
            alert("Invalid  id or Password");

        // log_boxs.style.display = "none";
        // main_body.style.display = "block";

    }
}


//DEPOSIT 

document.getElementById("Deposit-btn").addEventListener("click",deposit_fn);

function deposit_fn()
{
    var input_amount = parseFloat(document.getElementById("input-deposit").value);

    var deposit_number = parseFloat(document.getElementById("deposit-number").innerHTML);

    var total = deposit_number + input_amount;

    document.getElementById("deposit-number").innerHTML = total;
     
    //deposit
    var depoam = parseFloat(document.getElementById("depo-am").innerHTML);

    var total_depo = input_amount + depoam;

    document.getElementById("depo-am").innerHTML = total_depo;

    //BALANCE 

    var balance  = parseFloat(document.getElementById("balance").innerHTML);

    var total_balance = balance + input_amount;

    document.getElementById("balance").innerHTML = total_balance;


}

//WITHDRAW

document.getElementById("Withdraw-btn").addEventListener("click",withdraw_fn);

function withdraw_fn()
{
    var  with_input = parseFloat(document.getElementById("with-input").value);

    var with_amount = parseFloat(document.getElementById("with-amount").innerHTML);

    var total_with = with_input + with_amount;

    document.getElementById("with-amount").innerHTML = total_with;


    // WITHDRAW  2


    var wit = parseFloat(document.getElementById("with-am").innerHTML);  
    
    var totalwith = wit+with_input;
    document.getElementById("with-am").innerHTML = total_with;



    //Final balance  after withdrawal

    var total_balance = document.getElementById("balance").innerHTML;

    var final_balance = total_balance - with_input;

    document.getElementById("balance").innerHTML = final_balance;

}