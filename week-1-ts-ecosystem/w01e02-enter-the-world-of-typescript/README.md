# Enter the World of TypeScript

### Powód:

> ... aby przekonać się na własnej skórze, że rozdzielenie typów od faktycznej reprezentacji danych — ma sens.  
> Sprawdzenie super mocy **TS** - _migracja **JS** do **TS** wykonywana krok-po-kroku_.

---

### Narracja:

W firmie zaczęliśmy budować widok _Koszyka zakupów_. Wszystko oparte jest o modułowe połączenia pomiędzy plikami **JS**, a prezentacja danych zawartych w koszyku odbywa się poprzez komponenty. Nie używamy żadnego nowoczesnego freamework'a — to nasza własna koncepcja połączeń pomiędzy elementami w `DOM`. Na razie zależy nam jedynie na _prezentacji danych_. Dane o `items` mają się po prostu renderować na widoku. Nie potrzebna jest żadna interakcja.  
Pomimo prostoty samej koncepcji widoku. Mam problemy z zachowaniem spójności danych oraz przekazywaniem ich pomiędzy komponentami w sposób `100%` poprawny. Chodzi tutaj o często powtarzające się literówki, konieczność ponownego uruchamiania aplikacji za każdym razem, jeśli coś jest zmienione — w celu sprawdzenia poprawności zapisów. Problemy te nasilają się w momencie, gdy chcemy zmienić cokolwiek w projekcie i robić _refactoring_ istniejących rozwiązań 🤯. Dodatkowo nasi Deweloperzy pamiętają, jakie są klasy w `DOM in JS` jednak jak przychodzi do pisania kodu — nie do końca pamiętają ilość argumentów, składnie metod etc. Spowalnia to proces pisania, ponieważ muszą sprawdzać dokumentację i inne przykłady / projekty.

Słyszeliśmy o potędze _TypeScript'a_ i jego możliwościach etapowego migrowania kodu z `.js` do `.ts` bardzo by nam to pasowało — ponieważ nie mamy mocy przerobowych do migrowania projektu "z dnia na dzień".

---

Główne problemy projektu:

- konieczność nieustannego uruchamiania i testowania w celu sprawdzenia czy nie ma literówek
- konieczność częstego biegania po dokumentacji [MDN](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction) w kontekście korzystania z `DOM` w **JS**.

### Zadanie:

1. Dokonaj migracji projektu z `JavaScript` do `TypeScript` robiąc to _krok po kroku_. Najlepiej, żeby podczas modyfikacji jednego modułu pozostałe dalej działały jako `JavaScript`. Tutaj bardzo ważne będą Twoje ustawienia w `tsconfig.json`
2. Dokonaj potrzebnych zmian związanych z używaniem `.ts`. Dodaj brakujące typy. Finalnie projekt ma być całkowicie "typescript'owy".
3. Przygotuj projekt pod działanie produkcyjne — dodaj wybrany przez siebie _bundler_ - skonfiguruj z **TS**. Ustal potrzebne skrypty do uruchamiania serwera _deweloperskiego_ i budowania _produkcji_.
