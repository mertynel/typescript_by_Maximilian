type baccount = {money: number, deposit:(value: number) => void}

let bankAccount:baccount = {
    money: 2000,
    deposit(value: number) {
        this.money += value;
    }    
}

let myself: {name: string, bankAccount:baccount, hobbies: Array<string>} = {
    name: "Max",
    bankAccount: bankAccount,
    hobbies: ["  ", " "]
};

myself.bankAccount.deposit(3000);

console.log()