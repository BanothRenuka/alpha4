// ================= STUDENT PERFORMANCE =================
new Chart(document.getElementById("performanceChart"), {
    type: "line",
    data: {
        labels: ["2019", "2020", "2021", "2022", "2023", "2024"],
        datasets: [{
            label: "Average GPA",
            data: [2.8, 2.9, 3.0, 3.1, 3.2, 3.3],
            borderColor: "green",
            fill: false
        }]
    }
});

// ================= SUBJECT-WISE SCORES =================
new Chart(document.getElementById("subjectChart"), {
    type: "bar",
    data: {
        labels: ["Math", "Science", "English", "History", "Computer"],
        datasets: [{
            label: "Average Score (%)",
            data: [75, 78, 82, 70, 85],
            backgroundColor: "lightgreen"
        }]
    }
});

// ================= RESOURCE ALLOCATION =================
new Chart(document.getElementById("resourceChart"), {
    type: "pie",
    data: {
        labels: ["Faculty", "Infrastructure", "Technology", "Library", "Sports"],
        datasets: [{
            data: [35, 25, 20, 10, 10],
            backgroundColor: [
                "green",
                "orange",
                "blue",
                "purple",
                "red"
            ]
        }]
    }
});

// ================= CLASSROOM UTILIZATION =================
new Chart(document.getElementById("utilizationChart"), {
    type: "bar",
    data: {
        labels: ["Room A", "Room B", "Room C", "Room D", "Room E"],
        datasets: [{
            label: "Utilization (%)",
            data: [85, 70, 90, 60, 75],
            backgroundColor: "teal"
        }]
    }
});

// ================= GAP ANALYSIS =================
new Chart(document.getElementById("gapChart"), {
    type: "line",
    data: {
        labels: ["Dept A", "Dept B", "Dept C", "Dept D"],
        datasets: [
            {
                label: "Resources Allocated",
                data: [80, 70, 60, 90],
                borderColor: "blue",
                fill: false
            },
            {
                label: "Performance Index",
                data: [70, 75, 65, 85],
                borderColor: "red",
                fill: false
            }
        ]
    }
});
