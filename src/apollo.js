import {ApolloClient, InMemoryCache, makeVar} from "@apollo/client";

const TOKEN = "token";

export const isLoggedInVar = makeVar(Boolean(localStorage.getItem(TOKEN)));

export const logUserIn = (token) => {
    localStorage.setItem(TOKEN, token);
    isLoggedInVar(true);
};

export const logUserOut = (history, routes) => {
    localStorage.removeItem(TOKEN);
    history.replace(routes.home, null);
    window.location.reload();
};

export const darkModeVar = makeVar(false);

export const client = new ApolloClient({
    uri: "http://localhost:4000/graphql",
    cache: new InMemoryCache(),
});