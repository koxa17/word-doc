### Create Word Doc

Настройка проекта

0. Создания репозитория и первый commit

   1. Создать файл ".gitignore" - node_modules, dist - папка с production

1. Инициализация проекта npm init

   1. В package.json добавить
      "main" : "webpack.config.js"
      "private": true,
   2. В scripts добавить
      "start": "webpack",
      "buidl": "webpack --mode production"

2. Установка пакета Wepback

   1. Создание файлы webpack.sonfig.js
   2. Настройка
   3. Установка плагинов
      1. Если не обновляется html удалить hot из devServer
      2. После установки eslint создать 2 файла "src" .eslintignore .eslintrc
      3. Также установить правила от google

3. Создать папку с рабочими файлами "src/" - develepers

   1. Создать файлы проекта index .html .js scss/ .scss
   2. Импортировать в js css файл
   3. Также добавить favicon.ico

4. Установить normalize.css

5. Создать 2 файла variable & mixin scss импортироваить их во все scss файлы

   1. На каждый компонент создать свой scss

6. Готовую верстку закинуть в assets разбив на страницы

7. Создаем структру JS
   1. Создать 2 папки core & components
   2. в core поместить глобальные классы
   3. в components создать папку для каждого компонента
