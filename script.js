function redirectToAffiliate(product) {
    let url;
    switch (product) {
        case 'fitness':
            url = 'https://affiliate-link-for-fitness-tracker.com';
            break;
        case 'skincare':
            url = 'https://affiliate-link-for-moisturizer.com';
            break;
        case 'tech':
            url = 'https://affiliate-link-for-headphones.com';
            break;
        case 'all':
            url = 'https://affiliate-link-for-all-products.com';
            break;
        default:
            url = '#';
    }
    window.location.href = url;
}
