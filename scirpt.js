document.addEventListener('DOMContentLoaded', function() {
    // Exemple de mise à jour dynamique du nombre de joueurs
    function updatePlayerCount() {
        // Remplacez ceci par une véritable requête pour obtenir le nombre de joueurs
        const playerCount = Math.floor(Math.random() * 100);
        document.getElementById('player-count').textContent = playerCount;
    }

    // Mettre à jour toutes les 10 secondes
    setInterval(updatePlayerCount, 10000);

    // Mise à jour initiale
    updatePlayerCount();
});