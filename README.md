# Тестовый проект
Тестовое задание:

Laravel

Завести новый проект. С помощью фабрики создать 10 пользователей. 
В контроллере отдавать список пользоватей и для сущности User добавить поле description,
в которое выводить список навыков в разных комбинациях с использованием
паттерна Декоратор (реализации применять рандомно).
Варианты навыков: ['php', 'js', 'golang', 'java']

Написать тестовый метод, который проверит, что контроллером отдается
список пользователей с непустым массивом навыков 


Vue/React

Сделать список пользователей с навыками. Добавить форму создания нового
пользователя с валидацией имени (либо только цифры не более 12 символов,
либо только буквы в обоих регистрах)


Полностью рабочее приложение не нужно. Я буду смотреть на код.

devops

На гитхабе создать репозиторий и в файле Readme.md  описать процесс деплоя сделанного приложения на компьютере, чтобы я мог его задеплоить

## Содержание
- [Технологии](#технологии)
- [Требования](#требования)
- [Запуск](#запуск)
- [Тестирование](#тестирование)

## Технологии
- [PHP](https://www.php.net/)
- [Laravel](https://laravel.com/)
- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Bootstrap](https://react-bootstrap.netlify.app)

## Требования
- Composer v2.7+
- NodeJS v20.0+
- npm v10.0+
- PHP v8.3+

## Запуск

### Запуск back
- cd .\back\
- composer install
- php artisan migrate
- php artisan serve
- [http://127.0.0.1:8000/api/users/](http://127.0.0.1:8000/api/users/)

### Запуск front
- cd .\front\
- npm install
- npm start
- [http://localhost:3000/](http://localhost:3000/)

## Тестирование

### Тестирование back
- php artisan test

### Тестирование front
- npm run build