const accessTokenName = 'access-token';

function logIn(accessToken: string) {
    localStorage.setItem(accessTokenName, accessToken);
}

function logOut() {
    localStorage.removeItem(accessTokenName);
}

function isLoggedIn() {
    return localStorage.getItem(accessTokenName) != null;
}

function getAuthHeaders() {
    return {
        'Authorization': `Bearer ${localStorage.getItem(accessTokenName)}`
    };
}

export { logIn, logOut, isLoggedIn, getAuthHeaders }