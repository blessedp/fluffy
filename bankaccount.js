class Account{

    withDraw(){

    }
    deposit(){

    }
}

class savingsAccount extends Account{
    constructor(minBalance = 500){
        super();
        this.balance =minBalance;
    }
    deposit(amount){
        if (amount<0){
            return 'Invalid deposit amount';
        }
        this.balance += amount;
        return this.balance;
    }
    withDraw(amount){
        if (this.amount > this.balance){
            return 'Cannot withdraw beyond the current account balance';
        }else if (this.balance <0){
            return 'Invalid withdraw amount';
        }else{
            this.balance -= amount;
            if(this.balance < 501){
                this.balance += amount;
                return 'Cannot withdraw beyond minimum account balance';
            }else{
                return this.balance;
            }
        }
        this.balance -= amount;
        return this.balance;
    }
}
class currentAccount extends Account{
    constructor(minBalance = 0){
        super();
        this.balance =minBalance;
    }
    deposit(amount){
        if (amount<0){
            return 'Invalid deposit amount';
        }
        this.balance += amount;
        return "Your account balance now is" + this.balance;
    }

    withDraw(amount){
        if (amount < 0){
            return 'Invalid withdraw amount';
        }
            
        else if(amount> this.balance){
            return "Cannot withdraw beyond the current account balance";
            
            
        }

        
    
       else this.balance -= amount;
        return this.balance;
    }
    
}

var savaccount =new savingsAccount();
console.log("Your savings account balance is" + savaccount.balance);
