
document.getElementById("trainingForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const data = {
        date: document.getElementById("date").value,
        exercise: document.getElementById("exercise").value,
        weight: document.getElementById("weight").value,
        reps: document.getElementById("reps").value,
        sets: document.getElementById("sets").value,
    };

    if (window.Telegram.WebApp) {
        Telegram.WebApp.sendData(JSON.stringify(data));
        Telegram.WebApp.close();
    } else {
        alert("Ошибка: WebApp API не доступен.");
    }
});
