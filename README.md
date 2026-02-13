# Сайт Федерации Го Санкт-Петербурга
[![Deploy to Server](https://github.com/M1r7/go-spb/actions/workflows/deploy.yml/badge.svg)](https://github.com/M1r7/go-spb/actions/workflows/deploy.yml)

Сайт доступен по адресу [https://spb.gofederation.ru](https://spb.gofederation.ru)

## О структуре
- `/content/` — Контент сайта. Формат файла — Markdown, в начале может быть специальный блок [Front Matter](https://gohugo.io/content-management/front-matter/) с метаданными.
- `/layouts/` — Шаблоны
- `/static/` — Статические файлы

### /content/posts/ — Новости
Front matter обрабатывает два особых свойства:
```toml
announce = 'Мастер-классы в феврале'
announce_until = 2026-03-01
```
Логика работы:
- Если определено свойство `announce` то ссылка на новость (с текстом из `announce`) попадает на страницу `/welcome`. При этом если `announce_until` определено то анонс будет висеть до указанной даты, а если не определено то бессрочно

### /content/welcome.md — Лендинговая страница
Страница расположена по постоянному адресу [https://spb.gofederation.ru/welcome](https://spb.gofederation.ru/welcome). Cсылка печатается на флаерах и других физических носителях.

Эта страница имеет специальный шаблон, и основная часть генерации реализована в нём, а не в контенте. Во front matter определён список "полезных ссылок" в формате
```yaml
links:
- name: Telegram канал
  comment: Расписание центрального Го клуба и другие новости
  href: https://t.me/GameGoSPb
  icon: fa-brands fa-telegram
  icon2: fa-solid fa-bullhorn
```
Кроме этого на страницу добавляются некоторые новости, см. описание /content/posts/

## Для контрибьюторов
Создание Issue и PR приветствуется. Если хотите добавить страницу, новость или мероприятие, исправить очепятку — смело создавайте PR, если хотите глобально что-то переделать (изменить структуру, добавить категорию страниц, ...) — лучше сперва создайте Issue, обсудим.

## Для разработчиков
Сайт построен на шаблонизаторе [Hugo](https://gohugo.io/).

Развёртывание происходит автоматически через [GitHub Action](https://github.com/M1r7/go-spb/blob/master/.github/workflows/deploy.yml) из ветки `master`.

### Запуск локально
1. [Установите Hugo](https://gohugo.io/installation/) на своём компьютере.
2. В корневой директории проекта выполните команду
```bash
hugo server
```
3. Hugo запустит локальный веб сервер. Найдите в выводе команды строку `Web Server is available at http://localhost:1313/ (bind address 127.0.0.1)`. Перейдите по указанной ссылке.
4. Можете менять файлы сайта и смотреть как это влияет на результат.
