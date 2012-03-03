apis = [{
  name: "Ember",
  properties: [
    {
      name: "A",
      type: "クラスメソッド",
      description: "オブジェクトからEmber.NativeArrayを生成します。通常は配列を作るだけで自動的にNativeArrayが生成されるので、このメソッドを使うのはEXTEND_PROTOTYPESがfalseの時だけでしょう。"
    },
    {
      name: "addBeforeObserver",
      type: "クラスメソッド",
      description: "undefined"
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
