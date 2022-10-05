# Spot the bug

### Powód:

> Odnalezienie się w świecie asynchroniczności, serwerów i ich stanu danych

---

### Narracja:

Hej, to znów my _Twój ulubiony zespół do spraw server API_. Mamy do Ciebie prośbę.

Robimy serwis z Raportami dla użytkowników. Mamy przygotowany wstępny `POC`. To już działa dobrze.
Dane mamy zapisywane przez _Prisma_. Jeszcze nie ma dodawania użytkowników i nie mają oni haseł.
Na razie przyjmujemy, że logują się mailem. To nam nie przeszkadza. 

Przygotowaliśmy [AuthService](./src/users/auth.service.ts) — który generuje `Token` i to dzięki jego wartości można wysyłać odpowiednie request `REST` do naszej aplikacji. Na razie przechowujemy te tokeny, `in-memory`
co oznacza, że dany użytkownik będzie poprawnie zalogowany tylko na czas, na jaki posiada token oraz dopóki serwer nie zostanie zrestartowany. To też jest ok — na razie może tak zostać.

Sprawdzisz, czy nasza logika podawania raportów działa ?

---

Główne problemy projektu:

- Trzeba zrobić test poprawności działania
- To, że użytkownicy logują się samym mailem, nie jest traktowane na razie jako "błąd"
- ... w każdym razie nie o ten błąd do znalezienia chodzi.

### Zadanie:

1. Instaluj projekt
2. Uruchom seed bazy danych
3. Uruchom serwer
4. Sprawdź endpointy i działanie serwera
5. Odnajdź błąd, który powoduje, że nie możemy produkcyjnie wystawić tej aplikacji 😭
6. Popraw go i potwierdź, że działa poprawnie
