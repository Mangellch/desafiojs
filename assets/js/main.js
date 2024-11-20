let price = 400000

const precioSpan = document.querySelector(".initial-price");
precioSpan.innerHTML = price;

let amount = document.querySelector(".amount");
let totalValue = document.querySelector(".total-value");

const btnPlus = document.querySelector("#plus-button");
const btnMinus = document.querySelector("#minus-button");

const updateTotalValue = () => {
    totalValue.innerHTML = amount.innerHTML * price;
};

btnPlus.addEventListener("click", () => {
    amount.innerHTML++;
    updateTotalValue();
});

btnMinus.addEventListener("click", () => {
    if (amount.innerHTML > 0) {
        amount.innerHTML--;
        updateTotalValue();
    }
});
