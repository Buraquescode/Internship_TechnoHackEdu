// JavaScript code is already included in the HTML file above.

$(document).ready(function() {
    let timerInterval;
    let hours = 0;
    let minutes = 0;
    let seconds = 0;

    function startTimer() {
        timerInterval = setInterval(updateTimer, 1000);
    }

    function stopTimer() {
        clearInterval(timerInterval);
    }

    function resetTimer() {
        stopTimer();
        hours = 0;
        minutes = 0;
        seconds = 0;
        updateTimer();
    }

    function updateTimer() {
        seconds++;
        if (seconds === 60) {
            seconds = 0;
            minutes++;
        }
        if (minutes === 60) {
            minutes = 0;
            hours++;
        }
        let formattedTime = formatTime(hours) + ":" + formatTime(minutes) + ":" + formatTime(seconds);
        $("#timer").text(formattedTime);
    }

    function formatTime(time) {
        return time < 10 ? "0" + time : time;
    }

    $("#startBtn").click(function() {
        startTimer();
    });

    $("#stopBtn").click(function() {
        stopTimer();
    });

    $("#resetBtn").click(function() {
        resetTimer();
    });
});