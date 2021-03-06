#Фотоальбом (онлайн сервис)

Второй выпускной проект. Разработка онлайн сервиса для загрузки, хранения, обсуждения фотографий.

##Разработчики
* Александр Собакарь [Xaosaki](https://github.com/Xaosaki) - наставник
* Елена Валеева [Nikkie8](https://github.com/Nikkie8) - тимлид, js
* Андрей Сухов [AndreySukhov](https://github.com/AndreySukhov) - верстка
* Олег Унгер [OlekUnger](https://github.com/OlekUnger) - верстка
* Тишук Надежда [rainjeck](https://github.com/rainjeck) - js
* Игорь Соловьёв [iasoloviev61](https://github.com/iasoloviev61) - php/node.js

##Технологии
* Gulp 4.0
* sass
* BEM
* npm

##Установка
1. Клонируем репозиторий
```bash
$ git clone git@github.com:Nikkie8/photo-album.git _path/to/folder_ # вместо _path/to/folder_ укажите название папки, в которую хотите склонировать
```
2. Устанавливаем зависимости
```bash
$ npm i
```
3. Запускаем сборщик
```bash
$ gulp
```

##Инструкции, руководства, памятки

###Верстальщикам
1. Установите проект.
2. Ваша рабочая папка ./source/views (там уже готова база)
    * fonts - шрифты
    * images - изображение
    * sprite - изображения для создания png и svg спрайтов
3. Общие принципы:
    * Верстаем блоками
    * Для именования классов используем BEM (договоритесь сами, _ или -- будете использовать для модификаторов)
    * Создавайте осмысленные коммиты
    * Перед тем как делать что-то новое, обязательно проверьте, нет ли обновлений в master, сделайте пул из мастер ветки
```bash
$ git pull origin master # в master буду добавлять глобальные исправления (например, изменения в сборке и т.д.)
```
4. Под каждый блок создаете отдельную ветку, сливать с другими ветками ее не нужно, этим будет заниматься тимлид
```bash
$ git checkout -b front/_block-name_ # вместо _block-name_ подставляете название своего блока, например, front/footer
```
5. Создаем файл _block-name_.pug в соответствующей директории (./source/views/template/blocks)
    * В этом файле будет верстка только вашего блока, который в дальшейшем будет включен в код страницы
    * Для подключения шапки к блоку используйте include ../global/head
    * Перед push в репозиторий удалите include ../global/head, оставьте только то, что относится к данному блоку
6. Стили для блока пишутся в соответствующем _block-name_.scss файле в директории (./source/views/style/blocks), не забудьте включить его в main.scss
7. Если в вашем блоке появляются новые блоки, создаем под них отдельные файлы по той же схеме.
8. Для push в репозиторий
```bash
$ git push origin front/_block-name_ # _front/_block-name_ - имя ветки, которую вы создавали в самом начале под блок
```

* Папки mixins для style и template - для создания новых миксинов (под каждый миксин отдельный файл, ветку отдельную создавать не надо, пушите в ветке блока, в процессе верстки которого миксин создали)
* Папки pages в стилях и template не трогаем, заполнять их будет либо тимлид, либо ответственный за сборку страниц (назначим позже)

* в качестве примера создала базу под footer (кроме ветки в репозитории).

* Если сборка работает криво, либо хотите что-то поменять/дополнить, пишите в слак, добавим.
