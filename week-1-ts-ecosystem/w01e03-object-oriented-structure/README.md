# TypeScript - Object-Oriented Structure

### Powód:

> Przypomnienie sobie i zastosowanie klas w TypeScript.  
> Różnice pomiędzy klasą a instancją klasy. Zależności pomiędzy klasami.

---

### Narracja:

Niezdecydowanie naszego Klienta osiągnęło punkt krytyczny. Jego _"Aplikacja do handlu"_, zmienia się z dnia na dzień jak w kalejdoskopie 😱.
Pomimo tego, że na ten moment nie wiemy nawet, czy będzie to finalnie aplikacja z `GUI` i pisać mamy te _Front-End'y_... czy jednak będzie to prosty `CLI` i powinniśmy uderzać w _Back-End_.  
Jednak nasz nieustraszony _TeamLead_ znalazł część logiki, która może powstać w postaci "serwisowej", niezależnie od tego jakie _End'y_ nas czekają. Okazuje się, że warstwa działania _Koszyka_ i rodzaj _Prouktów_ są nam już doskonale znane i mamy potwierdzenie od Klienta, że "tak już zostaje... na razie.😑". Działajmy więc — czas wybudować model i sposób działania koszyka!

---

Główne problemy projektu:

- projektu jeszcze nie ma — trzeba go wybudować prawie od `0` 😘.
- nie da się "fizycznie przetestować" projektu, bo nie ma `GUI` ani `CLI` - trzeba to "zahardkodować", żeby potwierdzić, że działa.

### Zadanie:

1. Cały projekt ma być zrobiony w **TypeScript** i finalnie działać w **Node.js**
2. Przygotuj się pod _development_ projektu korzystając z narzędzi (bibliotek `npm`) takich jak `nodemon`, `ts-node` etc.
3. Wybuduj moduł - _klasę_, której zadaniem będzie obsługiwanie koszyka. Nadaj jej odpowiednią nazwę
4. Przygotuj tę klasę tak, aby nie dało się dodać produktów do koszyka "z zewnątrz". Jedynie poprzez metody istniejące w instancji tej klasy.
5. Koszyk będzie obsługiwał takie operacje jak:
   - dodanie produktu
   - pobranie (odczyt) jednego produktu po `id`
   - aktualizacja produktu po `id`
   - usunięcie produktu
   - odczyt wszystkich produktów
   - informacja o ilości produktów w koszyku
   - informacja o sumie cen produktów w koszyku
6. Koszyk będzie obsługiwał 3 rodzaje produktów: "Kup Teraz", "Aukcja", "Oddam Za Darmo". Przy czym jeden koszyk może obsługiwać tylko jeden rodzaj produktów.
   - nie ma większych wymagań co do samej konstrukcji produktu,
   - ważne, aby produkty był również tworzone za pomocą klas!
   - ważne, żeby miał nazwę, ilość oraz w przypadku kup teraz i aukcji — cenę.
7. Zaprezentuj "zahardkodowane" działanie koszyk w pliku `main.ts` (finalnie `main.ts`)
