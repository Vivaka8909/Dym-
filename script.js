// Відкрити модальне вікно для квитків
document.getElementById("getTicketBtn").addEventListener("click", () => {
    document.getElementById("ticketModal").style.display = "block";
});

// Закрити модальне вікно для квитків
document.getElementById("closeTicketModal").addEventListener("click", () => {
    document.getElementById("ticketModal").style.display = "none";
});

// Відкрити модальне вікно для мерчу
document.getElementById("getMerchBtn").addEventListener("click", () => {
    document.getElementById("merchModal").style.display = "block";
});

// Закрити модальне вікно для мерчу
document.getElementById("closeMerchModal").addEventListener("click", () => {
    document.getElementById("merchModal").style.display = "none";
});

// Закриття модального вікна при натисканні поза межами
window.addEventListener("click", (e) => {
    if (e.target === document.getElementById("ticketModal")) {
        document.getElementById("ticketModal").style.display = "none";
    }
    if (e.target === document.getElementById("merchModal")) {
        document.getElementById("merchModal").style.display = "none";
    }
});




document.getElementById("subscribeForm").addEventListener("submit", (event) => {
    event.preventDefault();
    const email = document.getElementById("emailInput").value;

    if (email) {
        document.getElementById("subscribeMessage").innerText = `Дякуємо за підписку, ${email}!`;
        document.getElementById("subscribeForm").reset();
    } else {
        document.getElementById("subscribeMessage").innerText = "Будь ласка, введіть коректний email.";
    }
});

const searchInput = document.getElementById("searchInput");
const productRows = document.querySelectorAll("tbody tr");

searchInput.addEventListener("input", () => {
    const filter = searchInput.value.toLowerCase();

    productRows.forEach((row) => {
        const productName = row.querySelector("td:first-child").textContent.toLowerCase();
        row.style.display = productName.includes(filter) ? "" : "none";
    });
});


let ticketsSold = 0;

document.getElementById("getProductBtn").addEventListener("click", () => {
    ticketsSold += 1;
    document.getElementById("ticketsSold").innerText = `Продано квитків: ${ticketsSold}`;
});


window.addEventListener("load", () => {
    const progress = document.getElementById("progress");
    let width = 0;

    const interval = setInterval(() => {
        if (width >= 100) {
            clearInterval(interval);
            progress.style.width = "100%";
        } else {
            width += 10;
            progress.style.width = `${width}%`;
        }
    }, 100);
});



const cardPaymentForm = document.getElementById("cardPaymentForm");

cardPaymentForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const cardNumber = document.getElementById("cardNumber").value.trim();
    const expiryDate = document.getElementById("expiryDate").value.trim();
    const cvv = document.getElementById("cvv").value.trim();

    if (!cardNumber || !expiryDate || !cvv) {
        alert("Будь ласка, заповніть усі поля!");
    } else {
        alert("Оплата успішна!");
        cardPaymentForm.reset();
    }
});

const themeToggle = document.getElementById("themeToggle");

themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-theme");
    document.body.classList.toggle("light-theme");
});


function rateConcert(elementId, rating) {
    document.getElementById(elementId).textContent = rating;
}

function rateConcert2(elementId, rating) {
    document.getElementById(elementId).textContent = rating;
}