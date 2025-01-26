document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("uploadForm");
    const processState = document.getElementById("processState");
    const stateMessages = document.getElementById("stateMessages");
    const outputBox = document.getElementById("outputBox");
    const outputContent = document.getElementById("outputContent");
    const pdfEmbed = document.getElementById("pdfEmbed");
    const pdfViewer = document.getElementById("pdfViewer");
    const downloadLink = document.getElementById("downloadLink");
    const saveSettingsButton = document.getElementById("saveSettings");
    const apiKeyInput = document.getElementById("apiKey");
    const modelNameInput = document.getElementById("modelName");

    let apiKey = "";
    let modelName = "gemini-1.5-flash";

    // Load settings from localStorage
    if (localStorage.getItem("apiKey")) {
        apiKey = localStorage.getItem("apiKey");
        apiKeyInput.value = apiKey;
    }
    if (localStorage.getItem("modelName")) {
        modelName = localStorage.getItem("modelName");
        modelNameInput.value = modelName;
    }

    // Save settings
    saveSettingsButton.addEventListener("click", function () {
        apiKey = apiKeyInput.value;
        modelName = modelNameInput.value;
        localStorage.setItem("apiKey", apiKey);
        localStorage.setItem("modelName", modelName);
        alert("Settings saved successfully!");
    });

    // Show process state
    function updateProcessState(message) {
        stateMessages.innerHTML += `<div>${message}</div>`;
        processState.style.display = "block";
    }

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
    
            // Get API key and model name from localStorage
            const apiKey = localStorage.getItem("apiKey") || "";
            const modelName = localStorage.getItem("modelName") || "gemini-1.5-flash";
    
            const response = await fetch("/", {
                method: "POST",
                body: formData,
                headers: {
                    "X-API-Key": apiKey,
                    "X-Model-Name": modelName,
                },
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