SET API_BASE_URL=http://localhost:8080
pact-provider-verifier pacts/books-web-client-books-api.json --provider-base-url=%API_BASE_URL%