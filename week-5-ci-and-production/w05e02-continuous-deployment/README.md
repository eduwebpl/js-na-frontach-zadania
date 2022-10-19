# Continoooous deployment

### Powód:

> Utrwalenie zagadnień `GitHub Actions`. Połączenie odpowiednich akcji w ciąg przyczynowo — skutkowy. Wystawienie automatycznego cyklu `Continous Deployment`.

---

### Narracja:
Tym razem nasza aplikacja _Shopping-Lister_ ™, doczekała się poprawnej konfiguracji z [vite](https://www.npmjs.com/package/vite) okraszonej configiem z [create-vue](https://www.npmjs.com/package/create-vue)!.

Tak wygląda Front-end: [/shopping-lister-front](shopping-lister-front)

Dodatkowo zamiast na fikcyjnych danych z `.service`, bazujemy na back-end'zie: [/shopping-lister-api](shopping-lister-api)
                  
Na początek - sprawdź czy to działa jako `development stack`.

Uruchom projekt z `-api` (pamiętaj o `migrate` oraz `seed` dla DB!). Sprawdź jego endpointy. Jest napisany z użyciem `Nest.js`.

Uruchom testy jednostkowe, powinny również działać. 

Podobnie wystaw front-end na procie `:8200` (zauważ, że tylko taki jest obsługiwany przez `cors` w aplikacji back-end).

Jeśli wszystko przebiegnie sprawnie, powinna pojawić się aplikacja z danymi z back-end'u.

I to jest właśnie nasz _PROBLEM_.  
Posiadamy w firmie serwer tzw. _Stage_ (to nasz serwer wewnętrzny, ale serwuje jakąś wersję "produkcji") i za każdym razem, kiedy chcemy zaktualizować `front` i `back` - musimy to robić ręcznie.

Proszę Cię o przygotowanie `.github/workflows` jako struktura folderów i w nich `GithubActions` - pliki `.yml` odpowiedzialne za deployment aplikacji.

W katalogu `/workflows` może istnieć kilka konfiguracji (plików `.yml`).
Dlatego też będziemy serwować poprzez runner `ubuntu-latest` całe nasze monorepo.

Wystaw odpowiednie pliki z akacjami dla `-front` oraz `-api`. Pamiętaj o uwzględnieniu testów oraz lint'owania, sprawdź i potwierdź czy z `lint` idzie w parze uruchomienie `prettiera` - jeśli nie, dodaj odpowiednie skrypty.
           
_UWAGA:_  
Dla poprawnego wykonania tego zadania będziesz potrzebować nowego repozytorium, ponieważ aby `GitHub` poprawnie "podnosił" akcje, muszą one mieszkać na szczycie struktury katalogów `.github/workflows`.

W tym układzie na początku utwórz własne repozytorium do tego zadania. Niech będzie ono prywatne. Przekopiuj do niego katalogi:
- [/shopping-lister-api](shopping-lister-api)
- [/shopping-lister-front](shopping-lister-front)

Dodaj odpowiednie pliki w nowo utworzonym katalogu `.github/workflows` i jak ukończysz zadanie, zaproś reviewer'a swojego kodu (@iceener / @michaljabi). Aby zobaczył "Actions" + zrobił własny `PR` aby uruchomić akcje. 

Przekopiuj również zawartość `.github/workflows` tutaj (w tej samej strukturze katalogów) i oddając `PR` - daj w komentarzu link do Repo dla Reviewer'a.

---

Główne problemy projektu:

- brak automatycznego serwowania wersji produkcyjnych na serwery typu "stage". 

---

### Hinty

- Musisz zadbać o odpowiednią kolejność `jobs` w kontekście budowania produkcji dla [/shopping-lister-front](shopping-lister-front) - finalnie zrób deploy do fikcyjnego katalogu np: `shopping-lister-front-stage`

- Podobnie kolejność akcji będzie miała znaczenie dla [/shopping-lister-api](shopping-lister-api), wystaw produkcje za pomocą [pm2](https://www.npmjs.com/package/pm2) - zauważ, że jest już przygotowany plik: [ecosystem.config.js](shopping-lister-api/ecosystem.config.js), tutaj również przyda się fikcyjny katalog produkcji np: `shopping-lister-api-stage`
- jako `runs-on` wykorzystaj `ubuntu-latest`, tak abyśmy zobaczyli, jak działa cały flow.
- poczytaj o [working-directory](https://docs.github.com/en/actions/using-workflows/workflow-syntax-for-github-actions#defaultsrun) w `defailts.run` - to się przyda, ponieważ mamy tutaj 2 projekty w jednym repo.
- pamiętaj o "share'owaniu" pomiędzy `jobs` danych po instalacji za pomocą [actions/cache](https://github.com/actions/cache) 

### Zadanie:

1. Utwórz nowe repozytorium prywatne powiązane nazwą z zadaniem np. `w05e02-continuous-deployment`
2. Przekopiuj do tego repozytorium katalogi: 
   - [/shopping-lister-api](shopping-lister-api)
   - [/shopping-lister-front](shopping-lister-front)
3. Za pomocą [GitHub Actions](https://docs.github.com/en/actions) wybuduj produkcyjne wersje 2 projektów
4. Rozwiązane zadanie to działające 2 `workflow` (jedno dla `-api` jedno dla `-front`) w zakładce "Actions" Twojego repozytorium projektu na `github.com` (akcje powinny wystawiać i budować produkcje)
5. Po rozwiązaniu zadania dodaj w `collaborators` jednego z Reviewers
6. Wystaw `PR` do CodeReview, w którym umieścisz pliki `.yml` w katalogu `.github/workflows` z Twojego repo, oraz link do niego dla Reviewer (dodanego wcześniej (pkt. 5) jako collaborator)
7. Dla ułatwienia sobie zadania najpierw wystaw lokalnie i sprawdź, jak działają front i back połączone ze sobą. 
