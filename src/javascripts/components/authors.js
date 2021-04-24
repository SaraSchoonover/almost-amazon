// FIXME: STUDENTS show your authors

const addAuthorForm = () => {
  document.querySelector('#store').innerHTML = '';
  document.querySelector('#add-button').innerHTML = '';
  document.querySelector('#form-container').innerHTML = `
    <form id="submit-book-form" class="mb-4">
      <div class="form-group">
      <label for="lastname">First name</label>
        <input type="text" class="form-control" id="firstName" placeholder="Enter First Name" required>
      </div>
      <div class="form-group">
        <label for="lastname">Last name</label>
        <input type="url" class="form-control" id="lastName" placeholder="Last Name" required>
      </div>
      <div class="form-group">
        <label for="email">Email</label>
        <input type="text" class="form-control" id="email" placeholder="Email" required>
      </div>
      <div class="form-group" id="select-author">
      </div>
      <button type="submit" id="submit-author" class="btn btn-primary">Submit Author</button>
    </form>`;

  // selectAuthor();
};

const showAuthors = (array) => {
  document.querySelector('#store').innerHTML = '';
  // CREATE A BUTTON TO ADD BOOKS
  document.querySelector('#form-container').innerHTML = '';
  document.querySelector('#add-button').innerHTML = '<button class="btn btn-success btn-lg mb-4" id="add-auth-btn">Add An Author</button>';
  // FIXME: STUDENTS create cards for your authors
  array.forEach((item) => {
    document.querySelector('#store').innerHTML += `<div class="card"><div class="card-body" style="height: 180px;"><h5 class="card-title">${item.first_name} ${item.last_name}</h5>
    <p class="card-text bold">${item.email}</p>
    <hr>
    <a href="#" id="author-name-title--${item.firebaseKey}"><h5>
    <a class-"card-title">${item.first_name} ${item.last_name}</h5></a>
        <button class="btn btn-info" data-toggle="modal" data-target="#formModal" id="edit-book-btn--${item.firebaseKey}">Edit Author</button>
        <button class="btn btn-danger" id="delete-book--${item.firebaseKey}">Delete Author</button>
      </div>
  </div>`;
  });
};

const emptyAuthors = () => {
  document.querySelector('#store').innerHTML = '<h1>No Authors</h1>';
};

export { showAuthors, emptyAuthors, addAuthorForm };
