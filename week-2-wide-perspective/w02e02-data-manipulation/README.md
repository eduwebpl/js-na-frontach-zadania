# Data manipulation

### Powód:

> Sprawdzenie, że obok programowania Obiektowego, programowanie funkcyjne też ma swoje ogromne zalety, zwłaszcza jeśli chodzi o manipulację danymi.  
> Dodatkowe uzbrojenie funkcyjnego podejścia o programowanie reaktywne, daje nam doskonały `toolset` do zarządzania stanem danych.  
> 
> Wartość tej komunikacji i manipulacji danymi będzie dla nas istotna nie tylko na front-endzie, te podejścia z powodzeniem będziemy mogli zaimplementować na back-endzie.

---

### Narracja:

Posiadasz kolekcję danych zamówień. Należy odpowiednio zinterpretować te dane, tak by każdy `tile` wyświetlał właściwe informacje w naszym _Dashboard_. Zwróć uwagę, jakich informacji potrzeba uruchom: [index.html](index.html)

Zależy nam na tym, aby dodatkowo symulować "dostarczenie" tych danych przez zapytanie `AJAX`. Muszą one jednak być w tej postaci co w [data-collection](src/orders/orders.fake-data.js). Sposób symulacji — zależy do Ciebie. Może być od prostego `Promise` aż po bardziej zaawansowane (faktyczne zapytania np. z `axios` + `json-server`) 

---

Główne problemy projektu:

- Dane o `/orders` przychodzą z `API` w konkretnej postaci
- Nie ma jeszcze EndPoint'a `/orders` - trzeba zapytania _AJAX_ symulować
- Dane o zamówieniach trzeba odpowiednio przedstawić w zależności od wymogów `tile` w naszym `dashboard`.
- Na razie nie chcemy wprowadzać żadnego Frameworka `fornt-end`'owego
- Możemy się zgodzić na dodatkową bibliotekę jednak nie do manipulacji `DOM`... raczej do manipulacji rozgłaszania danych.

### Zadanie (1.1):

1. Zinterpretuj dane i przedstaw stan faktyczny na `tiles`. Potrzebujemy:
    - Zamówienie najwyżej sprzedane
    - Sumę cen wszystkich zamówień
    - Listę numerów i dat wszystkich zamówień z tego (2022) roku
    - Sumę wszystkich zamówień
   
2. Nie dodawaj żadnego framework'a SPA — jednak masz możliwość dorzucenia "bundlera" i/lub "transpilera" (TypeScript) jeśli chcesz.
3. W zadaniu liczy się Twoja umiejętność i pomysł na manipulację danymi zawartymi w źródle i to głównie będzie brane pod "ocenę". 
4. Nie przeszkadza to jednak w zrobieniu porządku i wprowadzeniu własnego zarządzania DOM, w zależności od potrzeb i budowy komponentowej (to jednak dodatkowy element! - skup się na nim po wykonaniu zadania głównego)
5.  Symulowanie zapytania `AJAX` możesz rozwinąć wg. dowolnego własnego pomysłu, jednak ma to zawsze być rozwiązane asynchronicznie
- Od prostego `Promise`
- aż po faktyczny mini-serwer Node.js (np, `h3` lub `json-server`) z danymi na end-point bazujący na pliku z orders

### Bonus: Zadanie dodatkowe (1.2)  
#### [wyższy stopień trudności🤪]:

> Zakładamy tutaj, że dodajesz nowy przycisk na przykład `button.button.is-link{Refresh}`: ([emmet abbr](https://docs.emmet.io/abbreviations/)) po jego przyciśnięciu chcemy fikcyjnie dodać do listy nowe zamówienie, zgodnie z formatem danych oraz przeliczyć całe GUI — re-renderować jego zawartość.

1. Dodaj przycisk, po którego przyciśnięciu fikcyjnie dodamy nowy rekord do naszej listy zamówień
2. Po dodaniu zamówienia znów uruchamiamy fikcyjnego _AJAX_'a i wysyłamy ponowne pseudozapytanie.
3. Widok powinien się "przeliczyć" i uwzględnić nowe dane
4. Rozważ zastosowanie dodatkowej biblioteki do "rozgłaszania danych". 
    - Tutaj dobrym pomysłem jest wykorzystanie wzorca _Obserwator_
    - Sprawdź koncepcje `Observables` w różnych bibliotekach JS
    - Ewentualnie zastosuj bibliotekę na kształt `EventEmmiter`'a (będzie to mniej elastyczne rozwiązanie, gubiące stan danych na dłuższą metę, jednak na takim "jednowidoku" - zadziała poprawnie)
5. Pomocne linki do zadania dodatkowego:
    - [events](https://www.skypack.dev/view/events) | z bundlerem: [npm events](https://www.npmjs.com/package/events)
    - [rxjs](https://www.skypack.dev/view/rxjs) | z bundlerem: [npm rxjs](https://www.npmjs.com/package/rxjs)
