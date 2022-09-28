# Dungeons and the Princess

### Powód:

> Zrozumienie i przećwiczenie koncepcji rzucania wyjątków. Potrzeba określenia pochodzenia, czyli: kto rzuca błąd? Z jakiego miejsca naszej aplikacji on pochodzi?

---

### Narracja:

Księżniczka (`Person`) została uwięziona w podziemiach (`Underground`) głębokiego lochu (`Dungeon`). Będące na zamku osoby (`Person`) o różnej "profesji" (`Title`) - pragną ruszyć na pomoc Księżniczce.

Reguły gry nie są jednak proste i musisz je określić dla całej ścieżki:  
`Castle` ➡️`Dungeon` ➡️`Underground`

Do zamku w celu uratowania księżniczki wyruszają `4` "Misje ratunkowe".
Musisz zaaplikować reguły gry zgodnie z wymaganiami zawartymi poniżej.
W tym układzie tylko `3x` `knight` są w stanie z powodzeniem uratować księżniczkę.
   
### Wymagania:
- _RQ1_: `peasant` nie może zejść do lochu w `Castle`
- _RQ2_: `queen` nie może wejść do `Dungeon`
- _RQ3_: `king` nie może zejść niżej do `Underground`
- _RQ4_: tylko `knight` może próbować uratować więźnia
- _RQ5_: każda osoba innego `Title` próbująca uratować więźnia, spowoduje ustawienie dodatkowej barykady
- _RQ6_: jeden `knight` zdejmuje jedną barykadę na drodze do ocalenia księżniczki
- _RQ7_: jeśli nie ma barykad - księżniczka jest ocalona
- _RQ8_: przed każda misją ratunkową - mamy tę samą ilość początkową barykad.

`RQ od 1 do 4` - powinny rzucać odpowiednie wyjątki.

Tylko misja ratunkowa w której występuje sytuacja, że mamy `3` rycerzy `knight` próbujących odbić księżniczkę `princess` - powinna zakończyć się powodzeniem.
         
W naszym układzie jest to misja nr. `#4`
```
// Misja ratunkowa 4:
hades.initTheBarricades()
kingdom.gotoTheDungeon(knightBrienne)
kingdom.gotoTheDungeon(knightJohn)
kingdom.gotoTheDungeon(knightBruce)
```
     
Twoje misje powinny być tak obsługiwane, żeby było wiadomo że zakończyły się niepowodzeniem (odpowiedni wyjątek). Dodatkowo, najważniejsze w tym zadaniu to odpowiedź na pytania:
> Co poszło nie tak?   
> Na którym etapie?
           
Z poziomu organizowanej misji (`1-3`) - powinniśmy umieć odpowiedzieć na pytanie - dlaczego nie udało się uwolnić księżniczki. Co poszło nie tak i gdzie się to wydarzyło. Zakładamy, że w przyszłości - w zależności od tego kto "zgłosił" porażkę - będziemy inaczej reagować. Na razie - tylko pokaż na konsoli co się wydarzyło.

Zwróć uwagę aby odpowiednio obsługiwać błędy (wyjątki), tak aby każda z misji mogła "dojść do skutku". Jednak jedyny pozytywny rezultat będzie miała misja nr. `4`

---

Główne problemy projektu:

- projekt napisany w jednym pliku.
- trzeba dokończyć pisanie "reguł gry"
- nie ma plików konfiguracyjnych do `TS`, oraz skryptów do `build` i `dev`

### Zadanie:

1. Dokończ pisanie kodu zgodnie z wymaganiami do projektu (`RQ`)
2. Odpowiednio obsługuj błędy - od Ciebie zależy jaką będą miały treść
3. Doprowadź `4` misje ratunkowe do skutku, instancje "śmiałków" są już przygotowane
4. Dla ułatwienia realizacji reguł - masz odpowiednie komentarze w kodzie
5. Tylko misja ratunkowa z `3` rycerzami powinna się powieść (musimy zdjąć `3` barykady). Pozostałe powinny dać rezultat negatywny wraz z wskazaniem co poszło nie tak
6. Podziel kod tak aby nie był napisany w jednym boskim `main.ts`
7. Dopisz odpowiednie skrypty do uruchamiania wersji dev i budowania projektu.
   
#### (Dla chętnych znających testy w `js` - jako dodatek):

1. Potraktuj misje jako przypadki testowe
2. Zainstaluj `vitest` jako _test runner_ - sprawdź go jako alternatywa dla np. `jest`, zauważ ile elementów tam będzie działało "out-of-the-box"
3. Rozpisz te przypadki testowe i sprawdź czy zachowują się poprawnie
4. Dopiero po potwierdzeniu, że "świecą się na zielono" - refaktoryzuj kod, np.:
   - zmień sposób przeprowadzania misji na bardziej "re-używalny" (w kontrze do hardkodu, który mamy teraz w misjach z `main.ts`)
   - "doszlifuj" finalny podział elementów w projekcie
