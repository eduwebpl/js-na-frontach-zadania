# _Nest_ pagination problem

### Powód:

> Zrozumienie tworzenia i podłączania middleware w serwerach opartych o "Nest.js". Praktyczny sposób implementowania i decydowania o rodzaju zastosowania middleware w projekcie. 

---

### Narracja:

Migrowaliśmy nasz serwer API dla struktury `back-end` do `Nest.js`. Dalej trzymamy dane `in-memory`. Natrafiamy na ten sam problem, który mieliśmy podczas paginacji w `w02e03`.

Nasze endpointy w `*.controller.ts` mają powtarzalną logikę:
```typescript
const { skip, limit } = req.query
let computedSkip = 0
if (skip) {
  computedSkip = Number(skip)
}
let computedLimit
if (limit) {
  computedLimit = Number(limit)
}
```

Zapytania obsługujące paginacje pozostają niezmienne:
                                 
[/users?skip=0&limit=4](http://localhost:3000/users?skip=0&limit=4)

oraz:

[/fruits?skip=10&limit=10](http://localhost:3000/fruits?skip=10&limit=10)
      
Nie wiemy jednak jak w `Nest` przygotować sobie Paginację w podobny "niepowtarzalny" sposób i w ogóle — jak do tego podejść `Pipe`, `Interceptor`, `Guard` a może po prostu `Middleware` - może własny `@Custom route decorator` ?

Potrzebujemy Twojej pomocy.

---

Główne problemy projektu:
 - konieczność powtarzania "odpakowywania" danych pod paginację per `metoda` w `*.controller.js`

### Zadanie:

1. Przygotuj kod odpowiedzialny za paginację
2. Spraw, aby podobnie jak w zadaniu `w02e03` logika była w jednym miejscu
3. Metody controller'ów mają mieć dostarczoną samą paginację, aby z niej korzystać
4. Korzystaj z pagniacji tylko tam, gdzie to faktycznie potrzebne.

