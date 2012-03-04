apis = [{
  name: "Ember",
  properties: [
    {
      name: "A(arr)",
      type: "クラスメソッド",
      head_description: "Array like なオブジェクトからEmber.NativeArrayを生成する。",
      description: "Array like なオブジェクトからEmber.NativeArrayを生成します。通常は配列を作るだけで自動的にNativeArrayが生成されるので、このメソッドを使うのはEXTEND_PROTOTYPESがfalseの時だけでしょう。",
      arguments: [
                  {name: "arr",
                   description: "array like なオブジェクト"}  
                 ],
      return_description: "NativeArray オブジェクト。引数がundefinedの場合は空の NativeArray が返される",
      samples: [
                {description: "配列を渡して拡張された NativeArray を取得する",
                 jsFiddleUrl: "http://jsfiddle.net/arumons/aGxBY/embedded/"}
      
               ]
    },
    {
      name: "addBeforeObserver(obj, path, target, method)",
      type: "クラスメソッド",
      head_description: "指定したプロパティにオブザーバを設定する。",
      description: "指定したプロパティにオブザーバーを設定します。ここで設定したオブザーバーはsetメソッドで値が変更される前に呼び出されます。",
      arguments: [
                  {name: "obj",
                   description: "observe の対象となるオブジェクト"},
                  {name: "path",
                   description: "observe の対象となるプロパティ名。foo.bar のようにドットで子オブジェクトのプロパティも指定できる"}
                 ],
      return_description: "Ember オブジェクト",
      samples: [
                {description: "オブジェクトに addBeforeObserver を設定する",
                 jsFiddleUrl: "http://jsfiddle.net/arumons/BhJA5/embedded/"
                }
               ]
            
    },
    {
      name: "addListener(obj, eventName, target, method, xform)",
      type: "クラスメソッド",
      head_description: "イベントを登録する。",
      description: "イベントを登録します。",
      arguments: [
                  {name: "obj",
                   description: "イベントの発生元となるオブジェクト"},
                  {name: "eventName",
                   description: "ここで指定したイベントが発生した際に、引数として渡した method が呼び出される"},
                  {name: "target",
                   description: "イベントハンドラのレシーバとなるオブジェクト"},
                  {name: "method",
                   description: "イベントハンドラ"},
                  {xform: "addObserver の内部で addListener が呼び出される際に引数の変換用関数がこの引数に渡される。通常は意識する必要はない。"}
                 ],
      return_description: "undefined",
      samples: [
                {description: "addListner を呼び出してイベントが発生した際に、イベントハンドラを呼び出す。",
                 jsFiddleUrl: "http://jsfiddle.net/arumons/p8vvD/embedded/"
                }
               ]
    }
  ]
}];

App.APIs = Em.Object.create({
  content: apis
});

/*
classes: [  {class: "_global_"},
                    {class: "Array"},
                    {class: "Ember"},
                    {class: "Ember.Application"},
                    {class: "Ember.Array"},
                    {class: "Ember.ArrayController"},
                    {class: "Ember.ArrayProxy"},
                    {class: "Ember.Binding"},
                    {class: "Ember.CollectionView"},
                    {class: "Ember.Comparable"},
                    {class: "Ember.ComputedProperty"},
                    {class: "Ember.Copyable"},
                    {class: "Ember.CoreObject"},
                    {class: "Ember.Enumerable"},
                    {class: "Ember.Error"},
                    {class: "Ember.Freezable"},
                    {class: "Ember.Handlebars"},
                    {class: "Ember.Logger"},
                    {class: "Ember.Mixin"},
                    {class: "Ember.MutableArray"},
                    {class: "Ember.MutableEnumerable"},
                    {class: "Ember.NativeArray"},
                    {class: "Ember.Object"},
                    {class: "Ember.Observable"},
                    {class: "Ember.platform"},
                    {class: "Ember.RenderBuffer"},
                    {class: "Ember.RunLoop"},
                    {class: "Ember.Set"},
                    {class: "Ember.StateManager"},
                    {class: "Ember.String"},
                    {class: "Ember.TextArea"},
                    {class: "Ember.TextField"},
                    {class: "Ember.TextSupport"},
                    {class: "Ember.View"},
                    {class: "Function"},
                    {class: "Handlebars.helpers"},
                    {class: "String"},
                    {class: "window"}
                  ]
*/
