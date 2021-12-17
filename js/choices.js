var textRemove = new Choices(document.getElementById('choices-text-remove-button'), {
    delimiter: ',',
    editItems: true,
    maxItemCount: 5,
    removeItemButton: true,
  });
 var multipleCancelButton = new Choices('#choices-multiple-remove-button', {
   removeItemButton: true,
 });
 var customTemplates = new Choices(document.getElementById('choices-single-custom-templates'), {
         callbackOnCreateTemplates: function(strToEl) {
           var classNames = this.config.classNames;
           var itemSelectText = this.config.itemSelectText;
           return {
             item: function(classNames, data) {
               return strToEl('\
                 <div\
                   class="'+ String(classNames.item) + ' ' + String(data.highlighted ? classNames.highlightedState : classNames.itemSelectable) + '"\
                   data-item\
                   data-id="'+ String(data.id) + '"\
                   data-value="'+ String(data.value) + '"\
                   '+ String(data.active ? 'aria-selected="true"' : '') + '\
                   '+ String(data.disabled ? 'aria-disabled="true"' : '') + '\
                   >\
                   <span style="margin-right:10px;">🎉</span> ' + String(data.label) + '\
                 </div>\
               ');
             },
             choice: function(classNames, data) {
               return strToEl('\
                 <div\
                   class="'+ String(classNames.item) + ' ' + String(classNames.itemChoice) + ' ' + String(data.disabled ? classNames.itemDisabled : classNames.itemSelectable) + '"\
                   data-select-text="'+ String(itemSelectText) + '"\
                   data-choice \
                   '+ String(data.disabled ? 'data-choice-disabled aria-disabled="true"' : 'data-choice-selectable') + '\
                   data-id="'+ String(data.id) + '"\
                   data-value="'+ String(data.value) + '"\
                   '+ String(data.groupId > 0 ? 'role="treeitem"' : 'role="option"') + '\
                   >\
                   <span style="margin-right:10px;">👉🏽</span> ' + String(data.label) + '\
                 </div>\
               ');
             },
           };
         }
       });
 