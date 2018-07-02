var CheckDisabledTableColumn = function (selector, tableCell, table, disabledColClass) {
    var self = this;
    /**
     * @var selector - селектор который берется за основу
     * @var tableCell - родительская ячейка селектора
     * @var table - родитель-таблица (основной контейнер)
     * @var disabledColClass - класс, добавляемый ко всем ячейкам 
    */

    self.checkDataColIndex = function(){
        // Определяем индекс ячеек колонки у таблицы
        var selectorIndex;
        $(selector).each(function(){
            var disabledAttribute = $(this).attr('disabled');
            if(disabledAttribute){
                selectorIndex = $(this).parents(tableCell).index();
                self.addClassByIndex(selectorIndex);
            }
        });
    }

    self.addClassByIndex = function(indexValue){
        // добавляем класс ячейкам с заранее определенным индексом
        var eachTableRow = $(table).find('tr');
        eachTableRow.each(function(){
            var td = $(this).find(tableCell).eq(indexValue);
            if(!td.hasClass(disabledColClass)){
                td.addClass(disabledColClass);
            }
        });
    }

    self.init = function(){
        self.checkDataColIndex();
    }

    self.init();

}

var newTableColumnCheck = new CheckDisabledTableColumn(
    'input[type="radio"]',
    'td',
    'table',
    'm__status_disabled'
);