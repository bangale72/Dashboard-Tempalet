document.addEventListener("DOMContentLoaded", function() {
    // Sidebar toggle functionality
    const sidebar = document.getElementById("sidebar");
    const sidebarToggle = document.getElementById("sidebarToggle");
    const mainContent = document.getElementById("mainContent");
  
    sidebarToggle.addEventListener("click", function() {
      sidebar.classList.toggle("minimized");
      mainContent.classList.toggle("minimized");
    });
  
    // Line Chart - Sales Overview
    const ctxLine = document.getElementById("lineChart").getContext("2d");
    new Chart(ctxLine, {
      type: "line",
      data: {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
        datasets: [{
          label: "Sales ($)",
          data: [12000, 19000, 3000, 5000, 12000, 15000],
          borderColor: "#007bff",
          backgroundColor: "rgba(0, 123, 255, 0.1)",
          borderWidth: 2,
          fill: true
        }]
      },
      options: {
        responsive: true,
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  
    // Bar Chart - Revenue by Product
    const ctxBar = document.getElementById("barChart").getContext("2d");
    new Chart(ctxBar, {
      type: "bar",
      data: {
        labels: ["Product A", "Product B", "Product C", "Product D"],
        datasets: [{
          label: "Revenue ($)",
          data: [15000, 25000, 18000, 22000],
          backgroundColor: ["#007bff", "#28a745", "#ffc107", "#dc3545"],
          borderWidth: 1
        }]
      },
      options: {
        responsive: true,
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  
    // Pie Chart - Market Share
    const ctxPie = document.getElementById("pieChart").getContext("2d");
    new Chart(ctxPie, {
      type: "pie",
      data: {
        labels: ["Brand A", "Brand B", "Brand C"],
        datasets: [{
          data: [40, 25, 35],
          backgroundColor: ["#007bff", "#ffc107", "#28a745"],
          borderWidth: 1
        }]
      },
      options: {
        responsive: true
      }
    });
  });
  