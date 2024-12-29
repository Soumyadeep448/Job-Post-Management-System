document.getElementById("submit-btn").addEventListener("click", () => {
    const title = document.getElementById("job-title").value.trim();
    const description = document.getElementById("job-description").value.trim();
    const department = document.getElementById("job-department").value;
    const salaryMin = document.getElementById("salary-min").value;
    const salaryMax = document.getElementById("salary-max").value;
    const deadline = document.getElementById("application-deadline").value;

    // Validate inputs
    if (!title || !description || !department || !salaryMin || !salaryMax || !deadline) {
        alert("All fields are required!");
        return;
    }

    if (parseFloat(salaryMin) > parseFloat(salaryMax)) {
        alert("Minimum salary cannot be greater than maximum salary.");
        return;
    }

    // Mock submission (replace with actual submission logic)
    alert(`
        Job Post Created Successfully!
        Title: ${title}
        Description: ${description}
        Department: ${department}
        Salary: $${salaryMin} - $${salaryMax}
        Deadline: ${deadline}
    `);

    // Reset form after submission
    document.getElementById("job-post-form").reset();
});
