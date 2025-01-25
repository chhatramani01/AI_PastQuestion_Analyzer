document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("uploadForm");
    const processState = document.getElementById("processState");
    const stateMessages = document.getElementById("stateMessages");
    const outputBox = document.getElementById("outputBox");
    const outputContent = document.getElementById("outputContent");
    const pdfEmbed = document.getElementById("pdfEmbed");
    const pdfViewer = document.getElementById("pdfViewer");
    const downloadLink = document.getElementById("downloadLink");

    // Show process state
    function updateProcessState(message) {
        stateMessages.innerHTML += `<div>${message}</div>`;
        processState.style.display = "block";
    }

    const progressBarContainer = document.querySelector(".progress");
const progressBar = document.getElementById("progressBar");

function updateProgress(percentage) {
    progressBar.style.width = `${percentage}%`;
    progressBar.setAttribute("aria-valuenow", percentage);
}

// Inside the form submission handler
updateProcessState("Converting PDF to images...");
progressBarContainer.style.display = "block";
updateProgress(25);

// After extracting questions
updateProcessState("Extracting questions from images...");
updateProgress(50);

// After analyzing questions
updateProcessState("Analyzing questions...");
updateProgress(75);

// After processing is complete
updateProcessState("Processing complete!");
updateProgress(100);

    // Show output box
    function showOutput(content, pdfPath) {
        outputContent.textContent = content;
        outputBox.style.display = "block";
        pdfViewer.src = pdfPath;
        pdfEmbed.style.display = "block";
        downloadLink.href = pdfPath;
    }

    // Reset UI
    function resetUI() {
        stateMessages.innerHTML = "";
        processState.style.display = "none";
        outputBox.style.display = "none";
        pdfEmbed.style.display = "none";
    }

    // Handle form submission
    form.addEventListener("submit", async function (event) {
        event.preventDefault();

        // Reset UI
        resetUI();

        const formData = new FormData(form);

        try {
            // Step 1: Convert PDF to images
            updateProcessState("Converting PDF to images...");
            const response = await fetch("/", {
                method: "POST",
                body: formData,
            });

            if (!response.ok) {
                throw new Error("Failed to process the PDF.");
            }

            const data = await response.json();

            if (data.error) {
                throw new Error(data.error);
            }

            // Step 2: Extract questions
            updateProcessState("Extracting questions from images...");

            // Step 3: Analyze questions
            updateProcessState("Analyzing questions...");

            // Step 4: Show output
            updateProcessState("Processing complete!");
            showOutput(data.analyzed_questions, data.pdf_path);
        } catch (error) {
            updateProcessState(`Error: ${error.message}`);
        }
    });
});