angular
	.module('createAHero.component.library')
	.service('library', LibraryService);

function LibraryService($http) {
	var books = [];

    $http({
        method: 'GET',
        url: 'http://localhost:3000/library'
    }).then(function(response) {
        response.data.forEach(function(item) {
            books.push(item);
        });
    });

    function addBook(bookData) {
        books.push(bookData);
        $http({
            method: 'POST',
            url: 'http://localhost:3000/library',
            data: bookData
        }).then(function(response) {
            
        });
    }

	return {
		books: books,
        addBook: addBook
	}
}