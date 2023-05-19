<!DOCTYPE html>
<html lang="ru">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Тестирование lab2.js</title>
    <!-- добавим стили mocha для отображения результатов -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/mocha/3.2.0/mocha.css">
    <!-- добавляем сам фреймворк mocha -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/mocha/3.2.0/mocha.js"></script>
    <script>
        // включаем режим тестирования в стиле BDD
        mocha.setup('bdd');
    </script>
    <!-- добавим chai -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/chai/3.5.0/chai.js"></script>
    <script>
        // chai предоставляет большое количество функций. Объявим assert глобально
        let assert = chai.assert;
    </script>
</head>

<body>
    <script src="lab2.js"></script>

    <!-- скрипт со спецификацией -->
    <script>
        'use strict';

        describe("pow", function () {

            it("pow(2, 2) => 4", function () {
                assert.strictEqual(pow(2, 2), 4);
            });

            it("pow(2, 0) => 1", function () {
                assert.strictEqual(pow(2, 0), 1);
            });

            it("pow(2, -2) => 0.25", function () {
                assert.strictEqual(pow(2, -2), 0.25);
            });

        });

        describe("sumTo", function () {

            it("sumTo(100) => 5050", function () {
                assert.strictEqual(sumTo(100), 5050);
            });

        });

        describe("factorial", function () {

            it("factorial(0) => 1n", function () {
                assert.strictEqual(factorial(0), 1n);
            });

            it("factorial(5) => 120n", function () {
                assert.strictEqual(factorial(5), 120n);
            });

        });

        describe("fib", function () {

            it("fib(0) => 0n", function () {
                assert.strictEqual(fib(0), 0n);
            });

            it("fib(100) => 354224848179261915075n", function () {
                assert.strictEqual(fib(100), 354224848179261915075n);
            });

        });

        describe("compare", function () {

            it("compare(5)(4) => false", function () {
                assert.isFalse(compare(5)(4));
            });

            it("compare(5)(5) => null", function () {
                assert.isNull(compare(5)(5));
            });

            it("compare(5)(6) => true", function () {
                assert.isTrue(compare(5)(6));
            });

        });

        describe("sum", function () {

            it("sum() => 0", function () {
                assert.strictEqual(sum(), 0);
            });

            it("sum(1) => 1", function () {
                assert.strictEqual(sum(1), 1);
            });

            it("sum(1, 2) => 3", function () {
                assert.strictEqual(sum(1, 2), 3);
            });

        });

    </script>

    <!-- элемент с id="mocha" будет содержать результаты тестов -->
    <div id="mocha"></div>

    <!-- запускаем тесты! -->
    <script>
        mocha.run();
    </script>
</body>

</html>