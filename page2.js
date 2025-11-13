// JS for Proceed Button
document.getElementById('proceedBtn').addEventListener('click', function() {
    const checkboxes = document.querySelectorAll('#dropdown input[type="checkbox"]');
    const anyChecked = Array.from(checkboxes).some(cb => cb.checked);

    if (anyChecked) {
        // Navigate to page 3
        window.location.href = 'page3.html';
    } else {
        alert('Please select at least one category before proceeding.');
    }
});
