// Funcionalidade Interativa do Accordion (Módulos)
document.querySelectorAll('.accordion-header').forEach(button => {
  button.addEventListener('click', () => {
    const accordionItem = button.parentElement;
    
    // Toggle no item clicado
    accordionItem.classList.toggle('active');
    
    // Troca o sinal de + por -
    const icon = button.querySelector('span');
    if (accordionItem.classList.contains('active')) {
      icon.textContent = '-';
    } else {
      icon.textContent = '+';
    }
  });
});