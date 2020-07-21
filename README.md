Create Word Doc
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
    4. Установка плагинов 
        Если не обновляется html удалить hot из devServer
        После установки eslint создать 2 файла "src" .eslintignore .eslintrc
        Также установить правила от google      

3. Создать папку с рабочими файлами "src/" - develepers
    1. Создать файлы проекта index .html .js scss/ .scss
    2. Импортировать в js css файл 
    2. Также добавить favicon.ico

4. Установить normalize.css
