document.addEventListener('DOMContentLoaded', () => {
    const mainView = document.getElementById('main-view');
    const detailsView = document.getElementById('details-view');
    const toDetailsButton = document.getElementById('to-details');
    const toMainButton = document.getElementById('to-main');

    toDetailsButton.addEventListener('click', () => {
        mainView.classList.add('hidden');
        detailsView.classList.remove('hidden');
    });

    toMainButton.addEventListener('click', () => {
        detailsView.classList.add('hidden');
        mainView.classList.remove('hidden');
    });
});