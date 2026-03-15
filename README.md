# Сайт Федерации Го Санкт-Петербурга
[![Deploy to Server](https://github.com/M1r7/go-spb/actions/workflows/deploy.yml/badge.svg)](https://github.com/M1r7/go-spb/actions/workflows/deploy.yml)

Официальный сайт Федерации Го Санкт-Петербурга. Содержит информацию о клубах, новости и другую полезную информацию для игроков в го.

Построен на генераторе статических сайтов [Hugo](https://gohugo.io/) и автоматически развёртывается через GitHub Actions.

Доступен по адресу [spb.gofederation.ru](https://spb.gofederation.ru).

## Структура проекта
- `/content/` — Весь контент сайта в формате Markdown. Каждый файл может содержать блок [front matter](https://gohugo.io/content-management/front-matter/) (метаданные).
- `/layouts/` — HTML-шаблоны, определяющие внешний вид
страниц.
- `/assets/` — Ресурсы (CSS, JS, встраиваемые SVG и т.д.).
- `/static/` — Статические файлы.
- `/config.toml` — конфигурационный файл Hugo.

### /content/posts/ — Новости
Front matter обрабатывает два особых свойства:
```toml
announce = 'Мастер-классы в феврале'
announce_until = 2026-03-01
```
Логика их обработки: если определено свойство `announce`, то ссылка на новость (с текстом из `announce`) попадает на [страницу `/welcome/`](#contentwelcomemd--лендинговая-страница). При этом если `announce_until` определено, то анонс будет висеть до указанной даты, а если не определено, то бессрочно

### /content/welcome.md — Лендинговая страница
Страница расположена по постоянному адресу [https://spb.gofederation.ru/welcome/](https://spb.gofederation.ru/welcome). Ссылка печатается на флаерах и других физических носителях.

Рекомендованные варианты QR-кодов:\
![image](https://raw.githubusercontent.com/M1r7/go-spb/refs/heads/master/static/img/qr_code.svg)
![image](https://raw.githubusercontent.com/M1r7/go-spb/refs/heads/master/static/img/qr_code_no_logo.svg)

Страница имеет [собственный шаблон](https://github.com/M1r7/go-spb/blob/master/layouts/welcome.html), кроме этого, на страницу добавляются некоторые новости, см. [описание /content/posts/](#contentposts--новости)

## Для контрибьюторов
Создание Issue и PR приветствуется. Если хотите добавить страницу, новость или мероприятие, исправить очепятку — смело создавайте PR, если хотите глобально что-то переделать (изменить структуру, добавить категорию страниц, ...) — лучше сперва создайте Issue, обсудим.

Сайт построен на шаблонизаторе [Hugo](https://gohugo.io/).

Развёртывание происходит автоматически через [GitHub Actions](https://github.com/M1r7/go-spb/blob/master/.github/workflows/deploy.yml) из ветки `master`.

### Чтобы поэкспериментировать локально:
1. [Установите Hugo](https://gohugo.io/installation/) на своём компьютере.
2. В корневой директории проекта выполните команду
```bash
hugo server
```
3. Hugo запустит локальный веб-сервер. Найдите в выводе команды строку `Web Server is available at http://localhost:1313/ (bind address 127.0.0.1)`. Перейдите по указанной ссылке.
4. Можете менять файлы сайта и смотреть, как это влияет на результат. Hugo автоматически отслеживает изменения, перезапускать сервер не нужно.

### Как добавить клуб
1. Создайте директорию `/content/clubs/<название клуба>`, а в ней файл `index.md` (по аналогии с существующими).
2. Во front matter обязательно добавьте поле address (например `address = 'улица Марата, 48'`). Не забудьте про `title` и `description`: они попадут в `<html><head>` и помогут с SEO.
3. Если на странице будут фотографии — положите их в ту же директорию, пример вставки картинки есть в [/content/clubs/central_club/index.md](https://github.com/M1r7/go-spb/blob/master/content/clubs/central_club/index.md).
