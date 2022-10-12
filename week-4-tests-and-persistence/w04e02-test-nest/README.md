# Test the _Nest_

### Powód:

> Przećwiczenie koncepcji testowania dla `services`. W Nest.js

---

### Narracja:

Musimy przetestować naszą aplikację napisaną w `Nest.js`. Podczas jej budowania nasi `dev` pozostawili pliki `.spec.ts` nieruszone (dokładnie w takim stanie, w jakim zostały wygenerowane). Teraz nie potrafimy już uruchomić testów; inaczej: uruchamiamy je, ale w konsoli same błędy.

Pomóż nam naprawić istniejące testy. Zaproponuj przetestowanie serwisu odpowiedzialnego za Autoryzację.
              
Dopiero zaczynamy budowę. Nasza aplikacja przechowuje dopiero i potrafi zalogować `User`. 
- Siedzimy na `sqlite` + `prisma`.
- requesty `.http` masz w katalogu [requests](requests)
- na razie obsługujemy moduł `users`
- tokeny autoryzacyjne w tym momencie są przechowywane `in-db` (jednak nie są jeszcze szyfrowane więc to nie najlepsza praktyka)
- posiadamy `seed` dla bazy danych — użyj go, żeby zobaczyć jak to działa


---

Główne problemy projektu:
 - brak poprawnych testów
              
> Uwaga:   
> pamiętaj, żeby fizycznie na `:3000` zobaczyć działanie aplikacji, trzeba dokonać migracji oraz seed (skrypty przygotowane w [package.json](package.json))

### Zadanie:

1. Uruchom testy
2. Napraw istniejące - (stub)
3. Dodaj nowe testy dla `auth.service`
4. Zastanów się co najlepiej i w jaki sposób przetestować w tym serwisie
5. Jeśli uważasz za stosowne, po wykonaniu testów, popraw / refaktoryzuj kod.
6. Wszystkie testy powinny się finalnie świecić na zielono.

### Bonus:

1. Zaproponuj szyfrowanie dla zapisywanych tokenów `inDB` tak, aby logowanie dalej działało, jednak żeby token "po ewentualnym wykradzeniu z DB" - był niemalże bezużyteczny.

