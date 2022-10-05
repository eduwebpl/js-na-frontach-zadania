# Simple Nest server side API !

### Powód:

> Ocena wartości frameworka poprzez migrowanie istniejącego projektu. 

---

### Narracja:
Chcemy dokonać migracji aplikacji z zadania: [w02e05-simple-sever-side](../../week-2-wide-perspective/w02e05-simple-server-side). 

- Przechodzimy na framework _NestJS_.
- Jeśli jeszcze nie masz rozwiązanego zadania `w02e05` możesz przygotować ten serwer od `0` względem wytycznych z tamtego zadania
- Migruj wszystko, co się da; np. pamiętaj, że w Nest nie jesteśmy skazani na `TypeORM` możemy z powodzeniem zastosować inne podejście.
- Odwzoruj układ `endpoint` w controllerach
- Zastosuj dobre praktyki z `Nest` i podziel projekt per `feature`.

... po prostu - ubrudź ręce kodem, aby przećwiczyć techniczne aspekty tym razem w _NestJS_.

---

Główne problemy projektu:

- Chcemy zmienić back-end'owy framework — czy to możliwe?

### Zadanie:

1. Wystaw serwer na podstawie `NestJS`
2. Przenieś konfigurację:
   - twardego zapisu danych
   - ORM (jeśli zastosowany w `w02e05`)
3. Rozplanuj moduły w projekcie
4. Przenieś walidowanie danych wejściowych przy składaniu zamówienia i logowaniu do realiów `NestJS`
5. Przenieś `loggera` i zastosuj odpowiednie konteksty logowania
6. Sprawdź podstawową obsługę błędów w aplikacji
7. Przenieś zapytania `REST` z plików `.http` aby pokazać, że z pkt. widzenia samej aplikacji — jej działanie się nie zmieniło. Zmiana Frameworka  to tak naprawdę _refactoring_ naszej aplikacji.
8. Przenieś i użyj zmiennych z `.env`

