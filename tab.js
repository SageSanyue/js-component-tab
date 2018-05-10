function Tab (node){
    this.node = node
    this.init()
    this.bind()
  }
  
Tab.prototype = {
      constructor: Tab,
      init: function(){
        this.tabHeader = this.node.querySelectorAll(".tab>li")
        this.tabContainer = this.node.querySelectorAll(".content>li")        
      },
      bind: function(){
        var _this = this
        this.tabHeader.forEach(function(tab){
            tab.onclick = function(e){
                var target = e.target
                var index = [].indexOf.call(_this.tabHeader,target)
                _this.tabHeader.forEach(function(tabLi){
                    tabLi.classList.remove("active")
                })
                _this.tabContainer.forEach(function(content){
                    content.classList.remove("active")
                })
                target.classList.add("active")
                _this.tabContainer[index].classList.add("active")
            }
        })
      }
    
    }
  
  var tab1 = new Tab(document.querySelectorAll('.tab-container')[0]);
  var tab2 = new Tab(document.querySelectorAll('.tab-container')[1]);
  