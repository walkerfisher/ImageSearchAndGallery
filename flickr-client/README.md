# Flickr Search Prompt

We want to use the Flickr API in order to load photos from the search term the user types into the `input` defined in `App.js`.

When the user types into the `<input />`, we should send a query to Flickr with that search term. Then, we would like to display the photos Flickr returns in a grid, placed below the input.

If the task is completed with time to spare, we will discuss a few ways to improve and extend the work.

## Help

Feel free to ask any questions you have - the intention is to understand how you approach a problem, and how you communicate your questions about a problem.

### Flickr Documentation

Flickr provides documentation API documentation for the "Search" endpoint, and for constructing the URL from the search response.

* Search Endpoint: https://www.flickr.com/services/api/flickr.photos.search.html
* Constructing a Photo URL: https://www.flickr.com/services/api/misc.urls.html
* Search endpoint:
  * Base: https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key
  * Sample query - "car": https://www.flickr.com/services/rest/?text=car&method=flickr.photos.search&api_key=513f1c3c888abd4225b7f9a3105a275f&format=json&nojsoncallback=1

### Hints

The interviewer aleady has a solution to this prompt, so do not worry about being hung up on a detail. Instead, discuss the issue(s) you perceive with the interviewer, and they will act as a discussion partner or provide code snippets as needed.
