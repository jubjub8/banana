document.addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementById('downloadBtn');

    btn.addEventListener('click', () => {
        // Alerta opcional para orientar o usuário
        console.log("Preparando documento para impressão...");
        window.print();
    });
});