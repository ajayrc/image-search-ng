export const FLICKR_PHOTO_SEARCH_URL = 'https://www.flickr.com/services/rest/?method=flickr.photos.search&';
export const FLICKER_PERSON_URL = (user_id: string) => `https://www.flickr.com/people/${user_id}`; // todo make tagged template or utility function
export const DEBOUNCE_TIME_IMAGE_SEARCH = 300; // wait before firing query to server