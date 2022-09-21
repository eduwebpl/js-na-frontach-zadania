# It's time to `CLI` !

_~ "Aplikacja do handlu" strikes back 😱_

### Powód:

> Zrozumienie podziału na narzędzia konsolowe (deweloperskie) i faktyczne programy / biblioteki pisane na potrzeby biznesowe

---

### Narracja:

Pamiętasz naszą "Aplikację do handlu" z zadania [w01e03](../w01e03-object-oriented-structure) ??

Przygotowanie wersji demonstracyjnej dla naszych analityków biznesowych - trwa wieki... Czasem potrzebują danych fikcyjnych i to jest ok. Czasem jednak muszą mieć konkretne dane — żeby pokazać klientowi, jak to działa. Niezależnie od tego, co jest potrzebne — zawsze angażuje to jednego z programistów. Niestety nasi deweloperzy nie mają dość czasu na pisanie logiki do aplikacji, jeśli za każdym razem muszą dodatkowo przygotowywać odpowiednie dane pod demo...

Wpadliśmy na genialny pomysł. Jeśli poświęcimy Twoje 😉 roboczogodziny z tego sprinta, będziemy mogli wybudować narzędzie — pozwalające na przygotowywanie danych pod nasze demo.

Problem naszego produktu jest taki, że nie mamy żadnego GUI... jeszcze. Jednak spokojnie, przygotujemy narzędzie konsolowe, ale jako _CLI (Command Line Interface)_. Właściwie to "prawie jak CLI". Ustaw uruchamianie tego programu na `"script": {}`, nasi analitycy zajmą się resztą. Warunkiem będzie przygotowanie odpowiednich zapytań o konfigurację danych.

Zrobienie tego z poziomu `Node.js` jako program konsolowy tylko na podstawie [readline](https://nodejs.org/dist/latest-v16.x/docs/api/readline.html), byłoby bardzo karkołomne... Wykorzystasz więc biblioteki pomocnicze często spotykane w rozwiązaniach tego typu, takie jak [prompts](https://www.npmjs.com/package/prompts); [inquirer](https://www.npmjs.com/package/inquirer); [cli-table](https://www.npmjs.com/package/cli-table); [chalk](https://www.npmjs.com/package/chalk);  [gradient-string](https://www.npmjs.com/package/gradient-string)

Możesz zrobić _research_ we własnym zakresie i znaleźć inne pomocne rozwiązania.

Do logowania informacji na terminalu użyj narzędzia: [pino](https://www.npmjs.com/package/pino)  lub [winston](https://www.npmjs.com/package/winston). Wybierz jedno z tych rozwiązań.

Fikcyjne dane generuj za pomocą [@faker-js/faker](https://www.npmjs.com/package/@faker-js/faker)

---
Program powinien działać z poziomu terminala. Po uruchomieniu może pokazywać swój tytuł i musi prosić użytkownika (naszego analityka) o wykonanie akcji, związanej z dopisaniem produktów do koszyka.

Po dopisaniu produkty muszą być zapisane "twardo" np. w pliku `.json`. Później to właśnie z tego pliku będziemy _hydrować_ dane bezpośrednio do programu, który uruchomi się na demo dla klienta.

Będzie to w tym układzie program do serializacji danych.

Potraktuj to w ten sposób: teraz robisz program pomocniczy, który zapisze dane w postaci `.json` w pliku np. [cart-items.json](persistent-data/cart-items.json).

Na przykład jako 3 kolekcje danych:
```json
{
  "forFree": [],
  "buyNow": [],
  "auctions": []
}
```
Po uruchomieniu Twojego `CLI Tool'a`. Powinniśmy mieć możliwość dodania pełnego `item` do danej kolekcji.

Przykładowo, Twój program będzie wyświetlał takie komunikaty:
```
Jaki produkt chcesz dodać?
> "Kup Teraz" - buyNow
> "Za darmo" - forFree
> "Aukcja" - auction

> ("Kup Teraz" - buyNow)

Czy wygenerować produkt z danymi fikcyjnymi?
Tak / Nie (Nie)

Podaj nazwę produktu: Telewizor OLED 60"
Podaj ilość: 3
Podaj cenę jednostkową: 231.22
```

Co w efekcie powinno dopisać do naszego json'a:

```json
{
  "forFree": [],
  "buyNow": [
    {
      "id": "29e80726-122f-4962-b64a-30f792dfd23c",
      "name": "Telewizor OLED 60",
      "amount": 3,
      "price": 231.22
    }
  ],
  "auctions": []
}
```

Zadbaj o to, żeby potem użytkownik mógł zdecydować, czy chce pozostać w programie i dopisywać dalej — czy wyłączyć CLI.

Później to właśnie plik z tymi danymi będzie odczytywany przez program, który umieścisz tutaj np. jako:
`dist/showcase-demo.js`
W nim użyjesz klas z [w01e03](../w01e03-object-oriented-structure), tak aby pokazać działanie tego projektu na podstawie danych, przygotowanych w [cart-items.json](persistent-data/cart-items.json).

---

Program budujesz od `"0"`. To Twoja decyzja czy użyjesz `TypeScript`. Jednak polecamy zainstalować całą trójkę narzędzi pomocniczych:

1. [typescript](https://www.npmjs.com/package/typescript)
2. [eslint](https://www.npmjs.com/package/eslint)
3. [prettier](https://www.npmjs.com/package/prettier)

---

Przydatne linki do dokumentacji:
- https://nodejs.org/dist/latest-v16.x/docs/api/path.html
- https://nodejs.org/dist/latest-v16.x/docs/api/fs.html
- https://nodejs.org/dist/latest-v16.x/docs/api/events.html
- https://nodejs.org/dist/latest-v16.x/docs/api/path.html
- https://docs.npmjs.com/cli/v8/commands/npm-link

---
> Hint:  
> używanie niektórych wymienionych wyżej bibliotek, zwłaszcza napisanych jako moduły ESM w połączeniu z Typescript, może nie być takie łatwe i powodować błędy. Dlatego poniżej dodatkowa pomoc w tej sprawie.

Dodatkowe przydatne linki:
- https://www.typescriptlang.org/docs/handbook/esm-node.html
- https://nodejs.org/docs/latest-v16.x/api/packages.html#determining-module-system
- https://www.typescriptlang.org/tsconfig#esModuleInterop
- jeśli ustawienie (nodemon + ts-node) okaże się niemożliwe, gdy zdecydujesz się korzystać z TypeScript, warto sprawdzić: [tsc-watch](https://www.npmjs.com/package/tsc-watch)

### Zadanie :

Projekt budujesz od `"0"`. Sugestia jedynie co do miejsca przechowywania danych w [/persistent-data/](persistent-data)

1. Program `CLI` który piszesz, powinien uruchamiać się po wpisaniu polecenia:
```shell
npm run demo:prepare
```
2. Powinien zapytać, użytkownika czy chce dopisać dane — czy ma je wygenerować automatycznie i określić, do jakiej kolekcji dopisujemy `"forFree", "buyNow", "auctions"`
3. Po wpisaniu danych powinno być pytanie, czy kończymy, czy dopisujemy znowu
4. Generowanie automatyczne powinno określać ile rekordów wygenerować, np. od razu `3` czy `5` (waliduj aż do max `8` wpisów na raz)
5. Program powinien dawać możliwość usuwania danych
6. Możesz skorzystać z przygotowanych modeli i klas w [w01e03](../w01e03-object-oriented-structure)
7. Uruchomienie polecenia:
```shell
npm run demo:start
```
Powinno uruchomić faktyczne demo, czyli program który już masz napisany w [w01e03](../w01e03-object-oriented-structure) jednak z danymi z pliku [cart-items.json](persistent-data/cart-items.json). Możesz przekopiować program z [w01e03](../w01e03-object-oriented-structure) tutaj - dla wygodniejszego użycia.
8. Demo może być uruchamiane z pliku np. `src/showcase-demo.ts` czyli wynikowo: `dist/showcase-demo.js`. Musi ono pokazywać wszystkie dane z pliku załadowane do pamięci. Więc jakiekolwiek operacje na danych, nie powinny mieć wpływu na to, co jest w pliku.
9. Finalnie możesz w obydwu programach zastosować te same klasy - dla wygody podejścia, jednak wykorzystując mechanizm kompozycji lub dziedziczenia, rozszerzyć możliwości `CLI` o tryb "persistence", zapisu i odczytu danych z pliku `.json`

### BONUS:
2.1 Skorzystaj z wybudowanego projektu w  [w01e03](../w01e03-object-oriented-structure) mając gotowe elementy — skorzystaj z nich dzięki `npm link` zamiast kopiować tutaj te same klasy.

2.2 Dodaj interface obsługi do samego programu `showcase`, tak aby osoba pokazująca _DEMO_ mogła wybierać, co chce zrobić. Co w danym momencie pokazać albo, czy zakończyć program.

2.3 Faktycznie zbuduj `CLI` (Command line interface) razem z odpowiednim poleceniem w _terminalu_ w oparciu o pomocne linki:
-  https://www.npmjs.com/package/commander
-  https://docs.npmjs.com/cli/v8/configuring-npm/package-json#bin

