class UserService {
    create(user) {
        return fetch("http://localhost:8080/user", {
            method: "post",
            headers: new Headers({
                "Content-type": "application/json;chartSet=UTF-8"
            }),
            body: JSON.stringify(user)
        })
    }

    authentication(user) {
        return fetch("http://localhost:8080/authentication", {
            method: "post",
            headers: new Headers({
                "Content-type": "application/json;chartSet=UTF-8"
            }),
            body: JSON.stringify(user)
        });
    }
}

export const userService = new UserService();

