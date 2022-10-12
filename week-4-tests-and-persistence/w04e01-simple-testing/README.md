# Simple testing

### Powód:

> Poznanie `vitest` jako framework'a do testowania. W ujęciu globalnym: zapoznanie się z ogólnym _Testing API_. Podstawy budowania Unit testów i testowania w dowolnym projekcie nodowym. 

---

### Narracja:

Mamy prosty program _Divider APP_ do obliczenia wyniku dzielenia. Na jego przykładzie, napisz testy. 
- Interesuje cię logika: [divider.js](./src/app/divider.js)

To o jej przetestowanie Cię prosimy🙏 

Potrzebujemy programu do testowania, skryptu do uruchamiania testów i samego przetestowania tego rozwiązania. 
Po wykonaniu podstawowego testu — sprawdź czy jesteś w stanie wymyślić tzw. _Edge cases_ (przypadki brzegowe) dla swojego kodu.
Popraw wtedy implementację (refactor) dopisz tyle testów ile potrzeba, żeby upewnić się o prawidłowym funkcjonowaniu `divider`'a

---

Główne problemy projektu:
 - brak pokrycia testem głównej funkcjonalności programu 

### Zadanie:

1. Doinstaluj [vitest](https://vitest.dev/) do projektu
2. Znajdź wtyczki pomocnicze do _vitest_ dla swojego _IDE_
3. Dopisz testy dla [divider.js](./src/app/divider.js)
4. Zastanów się nad tzw. _edge cases_ w swoich testach
5. Refaktoryzuj i dopisz logikę do `divder` - jeśli uznasz to za stosowne
6. Możesz również refaktoryzować i poprawiać [AppView](./src/app/app.view.js)
7. Przygotuj skrypt do uruchamiania testów jako tzw. `watch mode`
8. Przygotuj inny skrypt do uruchamiania testów przez narzędzia _continous integration_


