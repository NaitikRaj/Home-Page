document.addEventListener('DOMContentLoaded', function() {
    const textElement = document.getElementById('typed-text');
    const textArray = ["WELCOME TO", "Printers Helps Solutions"];
    let textIndex = 0;
    let charIndex = 0;
    let currentText = '';
    let isDeleting = false;
    
    function type() {
      if (isDeleting) {
        currentText = textArray[textIndex].substring(0, charIndex--);
      } else {
        currentText = textArray[textIndex].substring(0, charIndex++);
      }
  
      textElement.textContent = currentText;
  
      if (!isDeleting && charIndex === textArray[textIndex].length) {
        setTimeout(() => isDeleting = true, 1000); // Wait before deleting
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        textIndex = (textIndex + 1) % textArray.length;
      }
  
      setTimeout(type, isDeleting ? 50 : 100);
    }
  
    type();
  });
  