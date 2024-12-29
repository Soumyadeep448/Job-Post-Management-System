// Example job data
const jobs = [
    { id: 1, title: "Software Engineer", department: "IT" },
    { id: 2, title: "Marketing Specialist", department: "Marketing" },
    { id: 3, title: "HR Manager", department: "HR" },
];

// Populate job listings
function populateJobListings() {
    const jobList = document.getElementById("job-list");
    const jobSelect = document.getElementById("job-select");

    jobs.forEach(job => {
        // Add to job listings
        const listItem = document.createElement("li");
        listItem.textContent = `${job.title} - ${job.department}`;
        jobList.appendChild(listItem);

        // Add to job select dropdown
        const option = document.createElement("option");
        option.value = job.id;
        option.textContent = job.title;
        jobSelect.appendChild(option);
    });
}

// Handle job application submission
function submitApplication() {
    const name = document.getElementById("applicant-name").value;
    const email = document.getElementById("applicant-email").value;
    const jobId = document.getElementById("job-select").value;
    const resume = document.getElementById("applicant-resume").files[0];

    if (!name || !email || !jobId || !resume) {
        alert("All fields are required!");
        return;
    }

    alert(`Application submitted successfully!\nName: ${name}\nEmail: ${email}\nJob: ${jobs.find(job => job.id == jobId).title}`);
}

// Initialize the page
document.addEventListener("DOMContentLoaded", populateJobListings);
