import React from 'react';

const AuthorInfo = () => (
    <div class="col s12">
        <div class="card horizontal blue lighten-3">
            <div class="card-image">
                <img src="https://via.placeholder.com/200x200/0d47a1/fff" alt="" />
            </div>
            <div class="card-stacked">
                <div class="card-content blue-text text-darken-4">
                    <h5>Name Surname</h5>
                    <p>username: my_cool_username</p>
                    <p>email: my_cool@email.com</p>
                    <p>phone: 1-770-736-8031</p>
                </div>
            </div>
        </div>
    </div>
);

export { AuthorInfo };