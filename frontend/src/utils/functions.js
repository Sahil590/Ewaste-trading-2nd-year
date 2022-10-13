function convertListingDate(listingDate) {
    var date = new Date(listingDate);
    return date.getDate() + '-' + (date.getMonth() + 1) + '-' + date.getFullYear();
}

export default convertListingDate
