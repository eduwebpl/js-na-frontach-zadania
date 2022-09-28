# Simple server side API !

### Powód:

> Chcemy przećwiczyć stawianie serwera od `0` w oparciu, o wszystkie dobre praktyki i potrzebne elementy.  
> Na razie potraktujemy "logikę biznesową" w bardzo uproszczony sposób w celu przećwiczenia najpierw elementów "technicznych" budowy naszego rozwiązania serwerowego.

---

### Narracja:
Potrzebujemy "prostą" aplikację, która na podstawie `Product[]` zebranych w `Order` wystawi dla `Client` konkretną `Invoice`.

Nie ma więcej danych, tak wiem, bardzo to "abstrakcyjne". Jednak interpretacja należy do Ciebie.
Ponieważ chodzi tutaj bardziej o przećwiczenie "technicznych aspektów" takich jak:

- wystawienie serwera
- obsługa zmiennych środowiskowych
- obsługa błędów
- logger
- twardy zapis w mini-bazie (np. `sqlite`)
- wykorzystanie ORM

... po prostu - ubrudź ręce kodem, aby przećwiczyć techniczne aspekty.

### Wymagania techniczne

- Aplikacja ma działać jako `REST API` i serwować zasoby na odpowiednich dedykowanych endpoint'ach.

                        
- Nie używaj "kombajnów" do rozwiązania zadania, np. NestJS czy Adonis - odpada. Chodzi tutaj o przećwiczenie podstawowych założeń serwera `http` i samodzielnych decyzjach co do architektury projektu

- idziemy raczej w _mini-framework_'i np. `express` 
  
- OPCJONALNE: jeśli już korzystał(a/e)ś z np. `express` wybierz inny mini-framework, sprawdź np.
  - [hapi](https://hapi.dev/tutorials/?lang=en_US)
  - [h3](https://github.com/unjs/h3)
  - [koa](https://koajs.com/#introduction)
  - jednak _"mierz czas na zamiary"_ - jeśli wiesz, że to nie masz "extra" czasu na coś nowego (choć bardzo podobnego co do zasady do `express`'a) - pomiń ten krok.
- dodaj twardy zapis do bazy danych. Przećwicz np. `knex` + `sqlite` + `objection` lub `Prisma` + `sqlite`
- dodaj jeden ze sprawdzonych loggerów np.:
  - [pino](https://getpino.io/#/)
  - [winston](https://github.com/winstonjs/winston#table-of-contents)
- dodaj obsługę plików `.env`
- upewnij się, że każdy `response` jest wysyłany jako `json`
- upewnij się, że możesz przyjąć `request` i odczytać jego `body` jako JSON
- dodaj `middleware` i endpoint do uwierzytelnienia klienta. Jeśli nie masz pomysłu na `JWT` - na razie może być to jakiś "fikcyjny" _in DB Token_ przypisany do `Client`

### Wymagania funkcjonalne

- Klient powinien móc złożyć zamówienie dopiero, jeśli się zaloguje
- Klient może złożyć wiele zamówień
- Produkty powinny być jedynie `seed`'owane
- Po złożeniu zamówienia powinna się pojawić Faktura
- Rozwiąż problem, że ceny na fakturze powinny nie ulegać zmianie, jeśli zmienimy aktualną cenę produktu
- Każdy element powinien mieć jedynie podstawowe dane np. Produkt: nazwa, cena, data_dodania,

Nie komplikuj samego modelu danych, w rzeczywistej aplikacji powinniśmy rozważyć stany magazynowe, rodzaj towaru, itp. itd.  
Celowo nie chcemy komplikować, żeby skupić się na samym postawieniu serwera API, konstrukcji endpointów, walidacji danych wejściowych, obsłudze errorów i logowaniu.

---

Główne problemy projektu:

- Proces opisany jest abstrakcyjnie, więc nie mając konkretnych wymagań — musisz improwizować.

### Zadanie:

1. Wystaw serwer na podstawie `express`
2. Dodaj twardy zapis danych (np. `sqlite`)
3. Dodaj ORM (np. `Objection.js` lub `Prisma`)
4. Rozplanuj endpointy i sposób dostępu do zasobów
5. Waliduj dane wejściowe przy składaniu zamówienia i logowaniu
6. Dodaj loggera
7. Sprawdź obsługę błędów w aplikacji
8. Rozpisz zapytania `REST` w plikach `.http` aby pokazać jak "testujesz" sposób działania serwera
9. Dodaj odpowiednie skrypty do obsługi procesu `dev` w `package.json` oraz obsługę `.env`

