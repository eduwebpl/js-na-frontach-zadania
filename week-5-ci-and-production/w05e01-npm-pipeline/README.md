# `npm` pipeline

### Powód:

> Sposoby na uzależnianie wykonania zadań `1` po `2`-gim. Na czym polega `exit code 0` oraz `exit code 1` (n). Poznanie `vitest` i jego czaderskiego (pomocnego) `ui`. Uświadomienie sobie ile elementów pod spodem robią za nas narzędzia takie jak `vite`, `webpack` etc. na froncie.

---

### Narracja:

Ok, przyznaje Ci się — przekombinowaliśmy 😭. Początkowo nasz projekt _Shopping-Lister_ ™ nie miał być w ogóle postawiony na `Vue`. Ta decyzja wyszła w międzyczasie, jednak nie mieliśmy wtedy pojęcia o takich narzędziach jak [vite](https://www.npmjs.com/package/vite). Konfigurowaliśmy ręcznie [rollup](https://www.npmjs.com/package/rollup)'a! Dodatkowo samo [vue](https://www.npmjs.com/package/vue) nie jest skonfigurowane z pełną obsługą [SFC](https://vuejs.org/guide/scaling-up/sfc.html). To, co widzisz to raczej nasze samodzielne działania w tym kierunku.

Pomimo tego, nie chcemy wcale migrować projektu do nowszego `stacku`. Nie ma na to: czasu i pieniędzy. Teraz mamy inne problemy, które chcemy zaadresować.

Aktualnie, żeby pracować przy projekcie, **każdy developer** musi wykonać następujące czynności:

- `npm run transpile`
- `npm run bundle`
- `npm run copy-index`
- `npm run serve`

I _puff_ dopiero wtedy projekt się nam ukazuje. Co więcej, komendy: `transpile` oraz `bundle` trzeba powtórzyć co każdą zmianę w pliku.

To są aż `4` komendy i dopiero można pracować 😱.

To nie może tak wyglądać — potrzebujemy automatyzacji tego procesu.

Dodatkowo zmieniają się nam osoby na stanowisku _budowniczego_ projektu. Chodzi o to, że do budowania produkcji nie jest potrzebny skrypt `serve` ale trzeba, w którymś momencie uruchomić testy. Osoba odpowiedzialna za budowanie projektu powinna więc uruchomić po kolei skrypty: `transpile` > `bundle` > `copy-index` i gdzieś (?) dodatkowo dać testowanie. Ludzie odpowiedzialni za to zadanie często gubią kolejność wykonywania tych skryptów i znów — mamy problem.

Testowanie mamy przygotowane za pomocą: [vitest](https://vitest.dev/). Sprawdź sobie super komendę: `npm run test:ui` - uruchamia ona super _UI_ do testowania. Pozwoli Ci to sprawdzić, co jest nie tak z jednym z testów. Nie wiemy, czemu nie działa poprawnie.

Wracając do sedna sprawy:

Prosimy Cię o jakieś "połączenie" tych skryptów. Tak, aby możliwe było wykonanie ich wszystkich w odpowiednich wariantach tylko za pomocą `2` komend.

- Przygotuj skrypt: `build` do budowania produkcji w odpowiedni sposób wykorzystujący już gotowe skrypty
- Przygotuj skrypt: `start` albo `dev`, który pozwoli na odpowiednio zrobiony tzw. _watch mode_ dla transpilera i bundlera.

Chcemy, żeby zadanie było wykonane przy możliwie _NIE doinstalowywaniu_ żadnego innego narzędzia `CLI`. Żadnej dodatkowej biblioteki `npm`. Podobno da się to osiągnąć stosując `Shell control-operators`.

Tutaj przykład:

- [Linux - Control-operators](https://www.w3resource.com/linux-system-administration/control-operators.php)

Dodatkowo czasem trzeba przekazać jakiś `positional argument` do skryptu. Pomocne może być to źródło (dokumentacja `npm`):

- [npm-run-script](https://docs.npmjs.com/cli/v8/commands/npm-run-script)

---

Główne problemy projektu:

- projekt posiada `2` błędy, celowo. Żeby niemożliwe było wybudowanie produkcji.
- trzeba uruchomić aż `4` polecenia, żeby postawić wersję `dev` środowiska
- trzeba uruchomić znów `4` polecenia, żeby zbudować produkcyjną wersję aplikacji (zamiast `serve` gdzieś trzeba dać `test`).

### Zadanie 1:

1. Przygotuj skrypt w `package.json` budujący produkcję
2. Nie modyfikuj już istniejących skryptów
3. Skrypt ten powinien w odpowiedniej kolejności uruchamiać pozostałe
4. Uwzględnij testowanie aplikacji przed wybudowaniem
5. Jeśli którykolwiek skrypt — nie powiedzie się, kolejny nie powinien być uruchamiany
6. Zrób to możliwie jak najniższym nakładem pracy (najlepiej bez dodatkowych bibliotek `npm`)
7. Napraw `2` błędy w aplikacji (jeden zgłaszany w testach, drugi zgłasza compiler `tsc`)
   - błędy te zostały umieszczone celowo, aby możliwe było sprawdzenie, czy produkcja nie buduje się, jeśli są błędy.
8. Potwierdź wybudowanie prawidłowej wersji produkcyjnej do [/dist](dist)

### Zadanie 2:

1. Przygotuj skrypt w `package.json` do development'u
2. Nie modyfikuj już istniejących skryptów
3. Skrypt ten powinien w odpowiedniej kolejności uruchamiać pozostałe
4. Aplikacja nie musi być testowana, ale powinna być wystawiona za pomocą `live-server` - komenda: `npm run serve`
5. Skrypt powinien modyfikować zachowanie transpilera i bundlera tak, aby te narzędzia były uruchamiane w tzw. _watch mode_.
6. Potwierdź prawidłowe działanie skryptu, jeśli coś zmienisz w aplikacji — zmiana powinna być widoczna prawie natychmiast w przeglądarce.
