/*******************************
 Mallory Pulliam
 IT 3203 - Intro to Web Development
 Quiz JS File
 *******************************/

// DOM loads before script runs
document.addEventListener('DOMContentLoaded', () => {

    // Retrieve quiz form and results
    const quizForm = document.getElementById('quizForm');
    const resultsContainer = document.getElementById('quizResults');

    // Quiz answers
    const correctAnswers = {
        q1: 'tim berners-lee',
        q2: 'get',
        q3: 'http1.1',
        q4: 'quic',
        q5: ['multiplexing', 'serverpush', 'headercompression']
    };

    // Event listener for submit button
    quizForm.addEventListener('submit', (e) => {
        // Prevent the form from submitting in the traditional way
        e.preventDefault();

        let score = 0;
        let resultsHTML = '<h3>Your Results:</h3>';
        const totalQuestions = 5;

        // Question 1 Cheeck - Fill in the blank
        const q1Answer = quizForm.q1.value.trim().toLowerCase();
        if (q1Answer === correctAnswers.q1) {
            score++;
            resultsHTML += `
                <div class="question-result correct">
                    <p><strong>Question 1:</strong> Correct!</p>
                    <p>You answered: ${quizForm.q1.value}</p>
                </div>`;
        } else {
            resultsHTML += `
                <div class="question-result incorrect">
                    <p><strong>Question 1:</strong> Incorrect.</p>
                    <p>You answered: ${q1Answer || 'No Answer'}</p>
                    <p><strong>Correct Answer:</strong> Tim Berners-Lee</p>
                </div>`;
        }

        // Question 2 Check - Radio Buttons
        const q2Answer = quizForm.q2.value;
        if (q2Answer === correctAnswers.q2) {
            score++;
            resultsHTML += `
                <div class="question-result correct">
                    <p><strong>Question 2:</strong> Correct!</p>
                    <p>You answered: GET</p>
                </div>`;
        } else {
            resultsHTML += `
                <div class="question-result incorrect">
                    <p><strong>Question 2:</strong> Incorrect.</p>
                    <p>You answered: ${q2Answer ? q2Answer.toUpperCase() : 'No Answer'}</p>
                    <p><strong>Correct Answer:</strong> GET</p>
                </div>`;
        }

        // Question 3 Check - Radio Buttons
        const q3Answer = quizForm.q3.value;
        if (q3Answer === correctAnswers.q3) {
            score++;
            resultsHTML += `
                <div class="question-result correct">
                    <p><strong>Question 3:</strong> Correct!</p>
                    <p>You answered: HTTP/1.1</p>
                </div>`;
        } else {
            resultsHTML += `
                <div class="question-result incorrect">
                    <p><strong>Question 3:</strong> Incorrect.</p>
                    <p>You answered: ${q3Answer || 'No Answer'}</p>
                    <p><strong>Correct Answer:</strong> HTTP/1.1</p>
                </div>`;
        }

        // Question 4 Check - Radio Buttons
        const q4Answer = quizForm.q4.value;
        if (q4Answer === correctAnswers.q4) {
            score++;
            resultsHTML += `
                <div class="question-result correct">
                    <p><strong>Question 4:</strong> Correct!</p>
                    <p>You answered: QUIC</p>
                </div>`;
        } else {
            resultsHTML += `
                <div class="question-result incorrect">
                    <p><strong>Question 4:</strong> Incorrect.</p>
                    <p>You answered: ${q4Answer || 'No Answer'}</p>
                    <p><strong>Correct Answer:</strong> QUIC</p>
                </div>`;
        }

        // Question 5 Check - Checkboxes
        const q5Answers = [];
        // Checkbox checked values gather
        document.querySelectorAll('input[name="q5"]:checked').forEach((checkbox) => {
            q5Answers.push(checkbox.value);
        });

        // Check given answers against correct answers
        // Sort arrays to be sure order doesn't matter
        const isQ5Correct = q5Answers.length === correctAnswers.q5.length &&
                            q5Answers.sort().every((value, index) => value === correctAnswers.q5.sort()[index]);

        if (isQ5Correct) {
            score++;
            resultsHTML += `
                <div class="question-result correct">
                    <p><strong>Question 5:</strong> Correct!</p>
                    <p>You answered: Multiplexing, Server Push, Header Compression</p>
                </div>`;
        } else {
            resultsHTML += `
                <div class="question-result incorrect">
                    <p><strong>Question 5:</strong> Incorrect.</p>
                    <p>You answered: ${q5Answers.length > 0 ? q5Answers.join(', ') : 'No Answer'}</p>
                    <p><strong>Correct Answers:</strong> Multiplexing, Server Push, Header Compression</p>
                </div>`;
        }

        // Calculate and display overall score
        const finalScore = (score / totalQuestions) * 100;
        const passFail = finalScore >= 60 ? 
            '<span class="pass">Passed</span>' : 
            '<span class="fail">Failed</span>';

        // Show overall results at the top
        resultsHTML = `
            <h2>Overall Result: ${passFail}</h2>
            <p class="final-score"><strong>Your Score: ${finalScore}%</strong> (${score} out of ${totalQuestions} correct)</p>
            <hr>
            ${resultsHTML}
        `;

        // Display results
        resultsContainer.innerHTML = resultsHTML;

        // Go to results
        resultsContainer.scrollIntoView({ behavior: 'smooth' });
    });

    // Reset button - The <button type="reset"> clears quiz fields automatically.
    quizForm.addEventListener('reset', () => {
        resultsContainer.innerHTML = '';
    });

});
 