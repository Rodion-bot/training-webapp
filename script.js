
document.addEventListener("DOMContentLoaded", () => {
    const tg = window.Telegram.WebApp;
    tg.expand();

    const exerciseSelect = document.getElementById("exercise");
    const form = document.getElementById("training-form");

    exercises.forEach(ex => {
        const option = document.createElement("option");
        option.value = ex;
        option.textContent = ex;
        exerciseSelect.appendChild(option);
    });

    form.addEventListener("submit", (e) => {
        e.preventDefault();
        const data = {
            date: form.date.value,
            exercise: form.exercise.value,
            weight: form.weight.value,
            reps: form.reps.value,
            sets: form.sets.value
        };
        tg.sendData(JSON.stringify(data));
        tg.close();
    });
});
