# Pagination problem

### Powód:

> Zrozumienie zasad działania koncepcji middleware w serwerach opartych o "express" (i nie tylko). Praktyczny powód zastosowania middleware w projekcie.  

---

### Narracja:

Pisząc kolejny serwer API dla struktury `back-end` naszej aplikacji. Na wczesnym etapie projektowania - trzymając dane `in-memory`. Natrafiamy na ten sam problem, który niezaadresowany teraz, może zemścić się w przyszłości.
Wiele danych musi przychodzić z endpoint'ów jako paginowane.

W kilku kontrolerach jednak natrafiamy na problem powtarzalności kawałka kodu:
```javascript
const { skip, limit } = req.query
let computedSkip = 0
if (skip) {
  computedSkip = Number(skip)
}
let computedLimit
if (limit) {
  computedLimit = Number(limit)
}

// { skip: computedSkip, limit: computedLimit }
```

W callback'ach naszych `*.controller.js`!

Ten fragment odpowiedzialny jest w naszej aplikacji za obsługę np. następujących zapytań:

`http://localhost:3330/users?skip=0&limit=4`  

albo:  

`http://localhost:3330/fruits?skip=10&limit=10`
          
Nie chcemy go jednak powtarzać i Tutaj liczymy na Twoją pomoc. 
        
Wpadliśmy na pomysł, że jeśli przygotujemy dedykowane `middleware`, co zakryje to "wyłuskiwanie" danych z `req.query`. Wtedy problem się rozwiąże. Przykładowo będziemy mieli nowy obiekt dopięty do `req` np. `req.paginate`. To on będzie zawierał dane wykalkulowane przez middleware.

Pamiętaj, że ścieżki:
- `http://localhost:3330/users`
- `http://localhost:3330/fruits`

muszą dalej działać poprawnie.

Twoje zmiany nie powinny mieć żadnego wpływu na `*.repository.js` - te pliki pozostają nietknięte.

---

Główne problemy projektu:

- konieczność powtarzania "odpakowywania" danych pod paginację per `callback` w `*.controller.js`

### Zadanie:

1. Przygotuj `middleware` odpowiedzialny za paginację
2. Odpowiednio go nazwij i umieść w dedykowanym miejscu w projekcie, decyzja należy do Ciebie.
3. Powinien on maksymalnie upraszczać dostęp do paginacji, tak aby cała logika jej "odpakowywania" z `req` była zakryta
4. Wykorzystaj `middleware` w projekcie, tylko przy ścieżkach faktycznie obsługujących paginację

### Zadanie 3.2 [Bonus]:

1. Czy potrafisz przygotować `middleware` na tyle elastycznie, aby można było determinować w jak nazwanych polach `req.query` mieszkają wartości dla `limit` i `skip` (bo nie zawsze muszą się tak nazywać)
2. Na przykład dla różnych ścieżek będzie działać:

`/users?skip=0&limit=20`

`/orders?drop=20&limit=20`

W zależności od tego, co zostanie ustawione w momencie "montowania" `middleware` na danej ścieżce.
