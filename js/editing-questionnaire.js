var $i = 0;
$(function() {
    $( ".form_component" ).sortable({
    // revert: true,
    placeholder: "ui-state-highlight",
    update:function(){
    $(".form_component > li").each(function(index, element) {
        $(this).on("click",function(){setClicked(index);});
      });
    }
    });

    $(".utilityCol .utility" ).draggable({
    appendTo: "body",
    connectToSortable: ".form_component",
    opacity:0.4,
    cursor: "move",
    helper: "clone",
    revert: "invalid",
    start:function(event,ui){
     var $tra = ui.helper;

    }
    });

  $(".form_component").droppable({
      accept: ".utility",
      classes: {
        "ui-droppable-active": "ui-state-highlight"
      },
      drop: function( event, ui ) { //排序时不调用
        var html = ui.draggable.html();
        if(html.indexOf("formOption")>0){
          pushItem(ui.draggable);
        };
      }
    });
});

//添加不同组件
function pushItem($item){
  if($item.find("span.title").text()=="单行文本" ){
      var $list = $(".form_component");
      var $newHtml = "<div name='paper' dir='1'><input class='commonInput cl_singleLine' type='text' value='' disabled='true'/><p class='hint_section'>提示</p></div><span class='deleteButton' onclick='deleteThis(this)'></span><span class='cloneButton'  onclick='cloneThis(this)'></span>";
      $item.removeAttr("data-title id title");
      $item.find("span.formOption").remove();
      $item.find("span.deleteButton").remove();
      $item.find("span.cloneButton").remove();
      $item.find('div').remove();
	  $item.attr('title','拖动可交换位置.')
      $item.append($newHtml);
  }if($item.find("span.title").text()=="多行文本"){
      var $list = $(".form_component");
      var $newHtml = "<div name='paper' dir='2'><textarea class='commonInput cl_multiple select_medium'  disabled='true'></textarea><p class='hint_section'></p></div><span class='deleteButton' onclick='deleteThis(this)'></span><span class='cloneButton'  onclick='cloneThis(this)'></span>";
      $item.removeAttr("data-title id title");
      $item.find("span.formOption").remove();
      $item.find("span.deleteButton").remove();
      $item.find("span.cloneButton").remove();
      $item.find('div').remove();
	  $item.attr('title','拖动可交换位置.')
      $item.append($newHtml);
  }if($item.find("span.title").text()=="单选"){
      var time = new Date().getTime();
      var $list = $(".form_component");
      var $newHtml = "<div name='paper' dir='3'><ul class='radio_img_ul clearfix'><li class='radio_img_list'><input type='radio' class='check_radio' name='"+time+"' value='选项1' disabled='true'><label dir='选项1' class='optionValue'>选项1</label></li><li class='radio_img_list'><input type='radio' class='check_radio' name='"+time+"' value='选项2' disabled='true'><label dir='选项2'  class='optionValue'>选项2</label></li><li class='radio_img_list'><input type='radio' class='check_radio' name='"+time+"' value='选项3' disabled='true'><label dir='选项3'  class='optionValue'>选项3</label></li></ul><p class='hint_section'></p></div><span class='deleteButton' onclick='deleteThis(this)'></span><span class='cloneButton'  onclick='cloneThis(this)'></span>";
      $item.removeAttr("data-title id title");
      $item.find("span.formOption").remove();
      $item.find("span.deleteButton").remove();
      $item.find("span.cloneButton").remove();
      $item.find('div').remove();
	  $item.attr('title','拖动可交换位置.')
      $item.append($newHtml);
  }if($item.find("span.title").text()=="多选"){
     var time = new Date().getTime();
      var $list = $(".form_component");
      var $newHtml = "<div name='paper' dir='4'><ul class='radio_img_ul clearfix'><li class='radio_img_list'><input type='checkbox' class='check_radio' name='"+time+"'  value='0' disabled='true'><label  dir='选项1' class='optionValue'>选项1</label></li><li class='radio_img_list'><input type='checkbox' class='check_radio' name='"+time+"' value='1' disabled='true'><label dir='选项2' class='optionValue'>选项2</label></li><li class='radio_img_list'><input type='checkbox' class='check_radio' name='"+time+"' value='2' disabled='true'><label dir='选项3' class='optionValue'>选项3</label></li></ul><p class='hint_section'></p></div><span class='deleteButton' onclick='deleteThis(this)'></span><span class='cloneButton'  onclick='cloneThis(this)'></span>";
      $item.removeAttr("data-title id title");
      $item.find("span.formOption").remove();
      $item.find("span.deleteButton").remove();
      $item.find("span.cloneButton").remove();
      $item.find('div').remove();
	  $item.attr('title','拖动可交换位置.')
      $item.append($newHtml);
   }if($item.find("span.title").text()=="图片单选"){
      var time = new Date().getTime();
      var $list = $(".form_component");
      var $newHtml = "<div name='paper' dir='5'><ul class='radio_img_ul clearfix'><li class='radio_img_list f_left'><div class='form_radio_img'></div><p><input type='radio' class='check_radio' name='"+time+"' value='选项1' disabled='true'><label dir='选项1'  class='optionValue'>选项1</label></p></li><li class='radio_img_list f_left'><div class='form_radio_img'></div><p><input type='radio' class='check_radio' name='"+time+"' value='选项2' disabled='true'><label dir='选项2'  class='optionValue'>选项2</label></p></li><li class='radio_img_list f_left'><div class='form_radio_img'></div><p><input type='radio' class='check_radio' name='"+time+"' value='选项3' disabled='true'><label dir='选项3'  class='optionValue'>选项3</label></p></li></ul><p class='hint_section'></p></div><span class='deleteButton' onclick='deleteThis(this)'></span><span class='cloneButton'  onclick='cloneThis(this)'></span>";
      $item.removeAttr("data-title id title");
      $item.find("span.formOption").remove();
      $item.find("span.deleteButton").remove();
      $item.find("span.cloneButton").remove();
      $item.find('div').remove();
	  $item.attr('title','拖动可交换位置.')
      $item.append($newHtml);
  }if($item.find("span.title").text()=="图片多选"){
      var time = new Date().getTime();
      var $list = $(".form_component");
      var $newHtml = "<div name='paper' dir='6'><ul class='radio_img_ul clearfix'><li class='radio_img_list f_left'><div class='form_radio_img'></div><p><input type='checkbox' class='check_radio' name='"+time+"' value='0' disabled='true'><label dir='选项1' class='optionValue'>选项1</label></p></li><li class='radio_img_list f_left'><div class='form_radio_img'></div><p><input type='checkbox' class='check_radio'  name='"+time+"' value='1' disabled='true'><label dir='选项2' class='optionValue'>选项2</label></p></li><li class='radio_img_list f_left'><div class='form_radio_img'></div><p><input type='checkbox' class='check_radio' name='"+time+"' value='2' disabled='true'><label dir='选项3' class='optionValue'>选项3</label></p></li></ul><p class='hint_section'></p></div><span class='deleteButton' onclick='deleteThis(this)'></span><span class='cloneButton'  onclick='cloneThis(this)'></span>";
      $item.removeAttr("data-title id title");
      $item.find("span.formOption").remove();
      $item.find("span.deleteButton").remove();
      $item.find("span.cloneButton").remove();
      $item.find('div').remove();
	  $item.attr('title','拖动可交换位置.')
      $item.append($newHtml);
  }if($item.find("span.title").text()=="下拉"){
	    var $list = $(".form_component");
		var $newHtml = "<div name='paper' dir='7'><select class='commonInput input' disabled='true'><option name='0' dir='选项1'>选项1</option><option name='1' dir='选项2'>选项2</option><option name='2' dir='选项3'>选项3</option></select><p class='hint_section'></p></div><span class='deleteButton' onclick='deleteThis(this)'></span><span class='cloneButton' onclick='cloneThis(this)'></span>";
      $item.removeAttr("data-title id title");
      $item.find("span.formOption").remove();
      $item.find("span.deleteButton").remove();
      $item.find("span.cloneButton").remove();
      $item.find('div').remove();
	  $item.attr('title','拖动可交换位置.')
	    $item.append($newHtml);
  }if($item.find("span.title").text()=="文件上传"){
	    var $list = $(".form_component");
	    var $newHtml = "<div name='paper' dir='8'><input class='commonInput cl_singleLine' type='file' value='' disabled='true'><p class='hint_section'></p></div><span class='deleteButton' onclick='deleteThis(this)'></span><span class='cloneButton' onclick='cloneThis(this)'></span>";
      $item.removeAttr("data-title id title");
      $item.find("span.formOption").remove();
      $item.find("span.deleteButton").remove();
      $item.find("span.cloneButton").remove();
      $item.find('div').remove();
	  $item.attr('title','拖动可交换位置.')
	  $item.append($newHtml);
  }if($item.find("span.title").text()=="日期"){
      var time = new Date().getTime();
	  var $list = $(".form_component");
	  var $newHtml = "<div name='paper' dir='9'><input class='commonInput cl_singleLine pickdate'  type='text' id='pickdate' value='' disabled='true'><p class='hint_section'></p></div><span class='deleteButton' onclick='deleteThis(this)'></span><span class='cloneButton' onclick='cloneThis(this)'></span>";
      $item.removeAttr("data-title id title");
      $item.find("span.formOption").remove();
      $item.find("span.deleteButton").remove();
      $item.find("span.cloneButton").remove();
      $item.find('div').remove();
	  $item.attr('title','拖动可交换位置.')
	  $item.append($newHtml);
  }if($item.find("span.title").text()=="时间"){
        var time = new Date().getTime();
	    var $list = $(".form_component");
	    var $newHtml = "<div name='paper' dir='10'><input class='commonInput cl_singleLin'  type='text' id='picktime' value='' disabled='true'><p class='hint_section'></p></div><span class='deleteButton' onclick='deleteThis(this)'></span><span class='cloneButton' onclick='cloneThis(this)'></span>";
      $item.removeAttr("data-title id title");
      $item.find("span.formOption").remove();
      $item.find("span.deleteButton").remove();
      $item.find("span.cloneButton").remove();
      $item.find('div').remove();
	  $item.attr('title','拖动可交换位置.')
	    $item.append($newHtml);
  }if($item.find("span.title").text()=="图文描述"){
	  var $list = $(".form_component");
	  var $newHtml = "<div name='paper' dir='11'><div class='img_describe'><img src='images/img_describe.png' alt=''></div><p class='hint_section'></p></div><span class='deleteButton' onclick='deleteThis(this)'></span><span class='cloneButton' onclick='cloneThis(this)'></span>";
      $item.removeAttr("data-title id title");
      $item.find("span.formOption").remove();
      $item.find("span.deleteButton").remove();
      $item.find("span.cloneButton").remove();
      $item.find('div').remove();
	  $item.attr('title','拖动可交换位置.')
	    $item.append($newHtml);
  }if($item.find("span.title").text()=="分割线"){
	  var $list = $(".form_component");
	  var $newHtml = "<div name='paper' dir='12'><div class='halving_line'></div><p class='hint_section' style='color:#333;'></p></div><span class='deleteButton' onclick='deleteThis(this)'></span><span class='cloneButton' onclick='cloneThis(this)'></span>";
      $item.removeAttr("data-title id title");
      $item.find("span.formOption").remove();
      $item.find("span.deleteButton").remove();
      $item.find("span.cloneButton").remove();
      $item.find('div').remove();
	  $item.attr('title','拖动可交换位置.')
	  $item.append($newHtml);
  };
};


/*删除组件*/
function deleteThis($obj){
  $($obj).parent("li").remove();
};
// 复制组件
function cloneThis($obj){
  var con = $($obj).parent("li").clone();
  $($obj).parent("li").after(con);
};

function setClicked($n){
  $(".form_component > li").each(function(index, element) {
    if($n==index){
       $(this).addClass("clicked");
    }else{
       $(this).removeClass("clicked");
    };
  });
};

/*点击时给组件添加类名clickd*/
$(document).on('click','.form_component .utility',function(){
    $(this).addClass("clicked").siblings().removeClass("clicked");
    $(this).find("div[name='paper']").each(function (){
    	var dir = $(this).attr("dir");
    	$("#dir"+dir).show().siblings().hide();

      /*****组件设置 - 回显****/
    	if(dir=="1"){ //单行文本
          //是否必答 - 回显
		   		 var mustFlag = false;
		   		 $(this).parent().find("span[name='must']").each(function(){
		   			  var text = $(this).text();
		   			  if(text=="*"){
		   				  mustFlag = true;
		   			  }
		   		 });
		   		 if(mustFlag){
		   			 $("#dir1").find("input[type='checkbox'][name='must']").each(function (){
  				      $(this).prop("checked",true);
		  			  });
		   		 }else{
		   			 $("#dir1").find("input[type='checkbox'][name='must']").each(function (){
  				      $(this).prop("checked",false);
		  			 });
		   		};

          // 标题和提示文字-回显
		   	   var title = $(this).parent().find("span[class='title']").text();
		       $("#dir1").find("textarea[name='title']").val(title);

		       $(this).find("p[class='hint_section']").each(function(){
		    	   var hint = $(this).text();
		    	   $("#dir1").find("input[name='hint']").val(hint);
		       });

           //字数限制 - 回显
		       var maxlength =$(this).find("input[class^='commonInput'][type='text']").attr("maxlength");
		       if(maxlength==undefined || maxlength==null){
		    	   $("#dir1").find("input[name='wordLimit']").prop("checked",false);
		    	   $("#dir1").find("input[name='wordLimit2']").attr("disabled","disabled");
		    	   $("#dir1").find("input[name='wordLimit2']").val("");
		       }else{
		    	   $("#dir1").find("input[name='wordLimit']").prop("checked",true);
		    	   $("#dir1").find("input[name='wordLimit2']").val(maxlength);
		    	   $("#dir1").find("input[name='wordLimit2']").removeAttr("disabled");
		       }

           // 文本框尺寸大小 - 回显
		       var clazz = $(this).find("input[class^='commonInput'][type='text']").attr("class");
		       if(clazz.indexOf("small")>-1){
		    	   $("#dir1").find("select[name='inputWide']").val("1");
		       }else  if(clazz.indexOf("large")>-1){
		    	   $("#dir1").find("select[name='inputWide']").val("3");
		       }else{
		    	   $("#dir1").find("select[name='inputWide']").val("2");
		       }
      	}
    	if(dir=="2"){ //多行文本
            //是否必答 - 回显
            var mustFlag = false;
            $(this).parent().find("span[name='must']").each(function(){
               var text = $(this).text();
               if(text=="*"){
                 mustFlag = true;
               }
            });
            if(mustFlag){
              $("#dir2").find("input[type='checkbox'][name='must']").each(function (){
                    $(this).prop("checked",true);
              });
            }else{
              $("#dir2").find("input[type='checkbox'][name='must']").each(function (){
                    $(this).prop("checked",false);
              });
            };

           // 标题和提示文字 - 回显
           var title = $(this).parent().find("span[class='title']").text();
           $("#dir2").find("textarea[name='title']").val(title);

           $(this).find("p[class='hint_section']").each(function(){
            var hint = $(this).text();
            $("#dir2").find("input[name='hint']").val(hint);
           });

           // 文本框尺寸大小 - 回显
            var clazz = $(this).find("textarea[class^='commonInput']").attr("class");
            if(clazz.indexOf("select_small")>-1){
                  $("#dir2").find("select[name='inputWide']").val("1");
            }else  if(clazz.indexOf("select_large")>-1){
                  $("#dir2").find("select[name='inputWide']").val("3");
            }else{
                $("#dir2").find("select[name='inputWide']").val("2");
            }
       }if(dir=="3"){ //单选
            //是否必答 - 回显
            var mustFlag = false;
            $(this).parent().find("span[name='must']").each(function(){
               var text = $(this).text();
               if(text=="*"){
                 mustFlag = true;
               }
            });
            if(mustFlag){
              $("#dir3").find("input[type='checkbox'][name='must']").each(function (){
                $(this).prop("checked",true);
              });
            }else{
              $("#dir3").find("input[type='checkbox'][name='must']").each(function (){
                  $(this).prop("checked",false);
              });
            };
           // 标题和提示文字 - 回显
           var title = $(this).parent().find("span[class='title']").text();
           $("#dir3").find("textarea[name='title']").val(title);

           $(this).find("p[class='hint_section']").each(function(){
             var hint = $(this).text();
             $("#dir3").find("input[name='hint']").val(hint);
           });

           // 横排 竖排 - 回显
           if($('.clicked .radio_img_list').hasClass('f_left')){
             $('#dir3').find('.editlayout_x').addClass('editlayout_current').siblings().removeClass('editlayout_current');
           }else{
             $('#dir3').find('.editlayout_y').addClass('editlayout_current').siblings().removeClass('editlayout_current');
           };

           //选项设置 - 回显
           var editradio_listHtml = "";
           $(this).find("ul[class^='radio_img_ul']").find("li[class^='radio_img_list']").each(function(){
    	       var optionValue =   $(this).find("label[class='optionValue']").text();
    	       var dir =   $(this).find("label[class='optionValue']").attr("dir");
    	       var checked =   $(this).find("input[type='radio']").attr("checked");
    	       var inputHtml = "";
    	       if(undefined!=checked && checked=="checked"){
    	    	   inputHtml = "<input onclick='setSelClick(this);' checked='checked' class='editstatus' type='radio' name='radio_com1'>";
    	       }else{
    	    	   inputHtml = "<input onclick='setSelClick(this);' class='editstatus' type='radio' name='radio_com1'>";
    	       }
    	       editradio_listHtml = editradio_listHtml
             +"<li class='editradio_item' linenum='0'>"
             +  inputHtml
             +"   <textarea dir='"+dir+"' onkeyup='setSelValue(this);' class='edittext textarea input_textarea'>"+optionValue+"</textarea>"
             +"   <p class='addButton' onclick='addOption(this);'></p>"
             +"   <p class='removeButton' onclick='deleteSelOption(this);'>";
           });
           $('#dir3').find("ul[class='editradio_list']").html(editradio_listHtml);
       }if(dir=="4"){ //多选
          // 是否必答回显
           var mustFlag = false;
           $(this).parent().find("span[name='must']").each(function(){
              var text = $(this).text();
              if(text=="*"){
                mustFlag = true;
              }
           });
           if(mustFlag){
             $("#dir4").find("input[type='checkbox'][name='must']").each(function (){
                   $(this).prop("checked",true);
                 });
           }else{
             $("#dir4").find("input[type='checkbox'][name='must']").each(function (){
                   $(this).prop("checked",false);
             });
           };

          // 标题和描述文字-回显
          var title = $(this).parent().find("span[class='title']").text();
          $("#dir4").find("textarea[name='title']").val(title);

          $(this).find("p[class='hint_section']").each(function(){
            var hint = $(this).text();
            $("#dir4").find("input[name='hint']").val(hint);
          });

         // 横排 竖排 - 回显
         if($('.clicked .radio_img_list').hasClass('f_left')){
           $('#dir4').find('.editlayout_x').addClass('editlayout_current').siblings().removeClass('editlayout_current');
         }else{
           $('#dir4').find('.editlayout_y').addClass('editlayout_current').siblings().removeClass('editlayout_current');
         };

        //选项设置 - 回显
         var editradio_listHtml = "";
         $(this).find("ul[class^='radio_img_ul']").find("li[class^='radio_img_list']").each(function(){
             var optionValue =   $(this).find("label[class='optionValue']").text();
             var dir =   $(this).find("label[class='optionValue']").attr("dir");
             var checked =   $(this).find("input[type='checkbox']").attr("checked");
             var inputHtml = "";
             if(undefined!=checked && checked=="checked"){
                 inputHtml = "<input onclick='check_setSelClick(this);' checked='checked' class='editstatus' type='checkbox' name='radio_com1'>";
             }else{
                 inputHtml = "<input onclick='check_setSelClick(this);' class='editstatus' type='checkbox' name='radio_com1'>";
             }
             editradio_listHtml = editradio_listHtml
             +"<li class='editradio_item' linenum='0'>"
             +  inputHtml
             +"   <textarea dir='"+dir+"'  onkeyup='check_setSelValue(this);' class='edittext textarea input_textarea'>"+optionValue+"</textarea>"
             +"   <p class='addButton' onclick='check_addOption(this);'></p>"
             +"   <p class='removeButton' onclick='check_deleteSelOption(this);'>";
         });
         $('#dir4').find("ul[class='editcheckbox_list']").html(editradio_listHtml);

         // 至少项-回显
         var title = $(this).parent().find("span[class='check_must1']").html();
         $("#dir4").find("input[name='check_must1']").val(title);

           var must_len1 = $(this).parent().find("span[class='check_must1']").length;
           if(must_len1 > 0){
             $("#dir4").find("input[name='check_option1']").each(function (){
                   $(this).prop("checked",true);
              });
           }else{
             $("#dir4").find("input[name='check_option1']").each(function (){
                   $(this).prop("checked",false);
             });
           };
         // 至多项-回显
         var title = $(this).parent().find("span[class='check_must2']").html();
         $("#dir4").find("input[name='check_must2']").val(title);

           var must_len1 = $(this).parent().find("span[class='check_must2']").length;
           if(must_len1 > 0){
             $("#dir4").find("input[name='check_option2']").each(function (){
                   $(this).prop("checked",true);
              });
           }else{
             $("#dir4").find("input[name='check_option2']").each(function (){
                   $(this).prop("checked",false);
             });
           }
    	}if(dir=="5"){ //图片单选
           // 是否必答 - 回显
            var mustFlag = false;
            $(this).parent().find("span[name='must']").each(function(){
               var text = $(this).text();
               if(text=="*"){
                 mustFlag = true;
               }
            });
            if(mustFlag){
              $("#dir5").find("input[type='checkbox'][name='must']").each(function (){
                    $(this).prop("checked",true);
                  });
            }else{
              $("#dir5").find("input[type='checkbox'][name='must']").each(function (){
                    $(this).prop("checked",false);
                  });
            };
           // 标题和提示文字-回显
           var title = $(this).parent().find("span[class='title']").text();
           $("#dir5").find("textarea[name='title']").val(title);

           $(this).find("p[class='hint_section']").each(function(){
             var hint = $(this).text();
             $("#dir5").find("input[name='hint']").val(hint);
           });

           // 横排 竖排 - 回显
           if($('.clicked .radio_img_list').hasClass('f_left')){
             $('#dir5').find('.editlayout_x').addClass('editlayout_current').siblings().removeClass('editlayout_current');
           }else{
             $('#dir5').find('.editlayout_y').addClass('editlayout_current').siblings().removeClass('editlayout_current');
           };

           //选项设置 - 回显
           var editradio_listHtml = "";
           $(this).find("ul[class^='radio_img_ul']").find("li[class^='radio_img_list']").each(function(){
               var optionValue =   $(this).find("label[class='optionValue']").text();
               var dir =   $(this).find("label[class='optionValue']").attr("dir");
               var checked =   $(this).find("input[type='radio']").attr("checked");
               var inputHtml = "";
               if(undefined!=checked && checked=="checked"){
                 inputHtml = "<input onclick='radioImg_setSelClick(this);' checked='checked' class='editstatus f_left' type='radio' name='radio_com1'>";
               }else{
                 inputHtml = "<input onclick='radioImg_setSelClick(this);' class='editstatus f_left' type='radio' name='radio_com1'>";
               }
               var pic = $(this).find("div[class='form_radio_img']").attr("style");
               var picDiv = "";
               if(pic!=undefined && pic!=null ){
              	 picDiv = "<div name='pic'  style=\""+pic+"\"><div>"
               }else{
              	 picDiv = "<div name='pic' style='display:hidden;width:120px;height:120px;'><div>";
               }
               var time =  setTimeout("getTime()",10);
               var im = "<div class='hint'>"
               + "   <input class='text file_text' id='file"+time+"'  accept='image/*' name='file' type='file'>"
               + "   <button class='button btn_margin' type='button' onclick='clickQuesFile(this);'>上传</button>"
               + "   <input type='hidden'  value=''  id='fileName"+time+"'>"
               +   picDiv
               + " </div>" ;
               editradio_listHtml = editradio_listHtml
                +"<li class='editradio_item' linenum='0'>"
                +  inputHtml
                + "  <div  class='reset_radioimg' style='width:auto;' >"+im+"</div>"
                + "  <div class='pictextcontect'>"
                +"   <textarea  dir='"+dir+"'   onkeyup='radioImg_setSelValue(this);' class='edittext textarea input_textarea'>"+optionValue+"</textarea>"
                +"   <p class='addButton' onclick='radioImg_addOption(this);'></p>"
                +"   <p class='removeButton' onclick='radioImg_deleteSelOption(this);'>";
                +"   </div>";
             });
             $('#dir5').find("ul[class='editcheckbox_list']").html(editradio_listHtml);
      }if(dir=="6"){ //图片多选
         // 是否必答回显
          var mustFlag = false;
          $(this).parent().find("span[name='must']").each(function(){
             var text = $(this).text();
             if(text=="*"){
               mustFlag = true;
             }
          });
          if(mustFlag){
            $("#dir6").find("input[type='checkbox'][name='must']").each(function (){
                  $(this).prop("checked",true);
                });
          }else{
            $("#dir6").find("input[type='checkbox'][name='must']").each(function (){
              $(this).prop("checked",false);
            });
          };
         // 标题和提示文字-回显
         var title = $(this).parent().find("span[class='title']").text();
         $("#dir6").find("textarea[name='title']").val(title);

         $(this).find("p[class='hint_section']").each(function(){
           var hint = $(this).text();
           $("#dir6").find("input[name='hint']").val(hint);
         });

         // 横排 竖排 - 回显
         if($('.clicked .radio_img_list').hasClass('f_left')){
           $('#dir6').find('.editlayout_x').addClass('editlayout_current').siblings().removeClass('editlayout_current');
         }else{
           $('#dir6').find('.editlayout_y').addClass('editlayout_current').siblings().removeClass('editlayout_current');
         };

          //选项设置 - 回显
          var editradio_listHtml = "";
          $(this).find("ul[class^='radio_img_ul']").find("li[class^='radio_img_list']").each(function(){
               var optionValue =   $(this).find("label[class='optionValue']").text();
               var dir =   $(this).find("label[class='optionValue']").attr("dir");
               var checked =   $(this).find("input[type='checkbox']").attr("checked");
               var inputHtml = "";
               if(undefined!=checked && checked=="checked"){
                 inputHtml = "<input onclick='checkImg_setSelClick(this);' checked='checked' class='editstatus f_left' type='checkbox' name='radio_com1'>";
               }else{
                 inputHtml = "<input onclick='checkImg_setSelClick(this);' class='editstatus f_left' type='checkbox' name='radio_com1'>";
               }
               var pic = $(this).find("div[class='form_radio_img']").attr("style");
               var picDiv = "";
               if(pic!=undefined && pic!=null ){
                 picDiv = "<div name='pic'  style=\""+pic+"\"><div>"
               }else{
                 picDiv = "<div name='pic' style='display:hidden;width:120px;height:120px'><div>";
               }
               var time =  setTimeout("getTime()",10);
               var im = "<div class='hint'>"
               + "   <input class='text file_text' id='file"+time+"'  accept='image/*' name='file' type='file'>"
               + "   <button class='button btn_margin' type='button' onclick='clickQuesFile(this);'>上传</button>"
               + "   <input type='hidden'  value=''  id='fileName"+time+"'>"
               +   picDiv
               + " </div>" ;
               editradio_listHtml = editradio_listHtml
                +"<li class='editradio_item' linenum='0'>"
                +  inputHtml
                + "  <div  class='reset_radioimg' style='width:auto;' >"+im+"</div>"
                + "  <div class='pictextcontect'>"
                +"   <textarea dir='"+dir+"'  onkeyup='checkImg_setSelValue(this);' class='edittext textarea input_textarea'>"+optionValue+"</textarea>"
                +"   <p class='addButton' onclick='checkImg_addOption(this);'></p>"
                +"   <p class='removeButton' onclick='checkImg_deleteSelOption(this);'>";
                +"   </div>";
             });
            $('#dir6').find("ul[class='editcheckbox_list']").html(editradio_listHtml);
          }if(dir=="7"){ //下拉
            //是否必答 - 回显
            var mustFlag = false;
            $(this).parent().find("span[name='must']").each(function(){
               var text = $(this).text();
               if(text=="*"){
                 mustFlag = true;
               }
            });
            if(mustFlag){
              $("#dir7").find("input[type='checkbox'][name='must']").each(function (){
                $(this).prop("checked",true);
              });
            }else{
              $("#dir7").find("input[type='checkbox'][name='must']").each(function (){
                $(this).prop("checked",false);
              });
            };
           // 标题和提示文字-回显
           var title = $(this).parent().find("span[class='title']").text();
           $("#dir7").find("textarea[name='title']").val(title);

           $(this).find("p[class='hint_section']").each(function(){
             var hint = $(this).text();
             $("#dir7").find("input[name='hint']").val(hint);
           });
           // 横排 竖排 - 回显
           if($('.clicked .radio_img_list').hasClass('f_left')){
             $('#dir7').find('.editlayout_x').addClass('editlayout_current').siblings().removeClass('editlayout_current');
           }else{
             $('#dir7').find('.editlayout_y').addClass('editlayout_current').siblings().removeClass('editlayout_current');
           };

          // 选项设置 - 回显
           var editradio_listHtml = "";
           $(this).find("select[class^='commonInput']").find("option").each(function(){
               var optionValue =   $(this).text();
               var dir =   $(this).attr("dir");
               var checked =   $(this).attr("selected");
               var inputHtml = "";
               if(undefined!=checked && checked=="selected"){
                 inputHtml = "<input onclick='select_setSelClick(this);' checked='checked' class='editstatus' type='radio' name='radio_com1'>";
               }else{
                 inputHtml = "<input onclick='select_setSelClick(this);' class='editstatus' type='radio' name='radio_com1'>";
               }
               editradio_listHtml = editradio_listHtml
               +"<li class='editradio_item' linenum='0'>"
               +  inputHtml
               +"   <textarea dir='"+dir+"' onkeyup='select_setSelValue(this);' class='edittext textarea input_textarea'>"+optionValue+"</textarea>"
               +"   <p class='addButton' onclick='select_addOption(this);'></p>"
               +"   <p class='removeButton' onclick='select_deleteSelOption(this);'>";
           });
           $('#dir7').find("ul[class='editradio_list']").html(editradio_listHtml);
       }if(dir=="8"){ //文件上传
          // 是否必答 - 回显
            var mustFlag = false;
            $(this).parent().find("span[name='must']").each(function(){
               var text = $(this).text();
               if(text=="*"){
                 mustFlag = true;
               }
            });
            if(mustFlag){
              $("#dir8").find("input[type='checkbox'][name='must']").each(function (){
                $(this).prop("checked",true);
              });
            }else{
              $("#dir8").find("input[type='checkbox'][name='must']").each(function (){
                $(this).prop("checked",false);
              });
            };
           // 标题和提示文字-回显
           var title = $(this).parent().find("span[class='title']").text();
           $("#dir8").find("textarea[name='title']").val(title);

           $(this).find("p[class='hint_section']").each(function(){
             var hint = $(this).text();
             $("#dir8").find("input[name='hint']").val(hint);
           });
       }if(dir=="9"){ //日期
          // 是否必答 - 回显
            var mustFlag = false;
            $(this).parent().find("span[name='must']").each(function(){
               var text = $(this).text();
               if(text=="*"){
                 mustFlag = true;
               }
            });
            if(mustFlag){
              $("#dir9").find("input[type='checkbox'][name='must']").each(function (){
                $(this).prop("checked",true);
              });
            }else{
              $("#dir9").find("input[type='checkbox'][name='must']").each(function (){
                $(this).prop("checked",false);
              });
            };
           // 标题和提示文字-回显
           var title = $(this).parent().find("span[class='title']").text();
           $("#dir9").find("textarea[name='title']").val(title);

           $(this).find("p[class='hint_section']").each(function(){
             var hint = $(this).text();
             $("#dir9").find("input[name='hint']").val(hint);
           });
       }if(dir=="10"){ //时间
          // 是否必答 - 回显
            var mustFlag = false;
            $(this).parent().find("span[name='must']").each(function(){
               var text = $(this).text();
               if(text=="*"){
                 mustFlag = true;
               }
            });
            if(mustFlag){
              $("#dir10").find("input[type='checkbox'][name='must']").each(function (){
                $(this).prop("checked",true);
              });
            }else{
              $("#dir10").find("input[type='checkbox'][name='must']").each(function (){
                $(this).prop("checked",false);
              });
            };
           // 标题和提示文字-回显
           var title = $(this).parent().find("span[class='title']").text();
           $("#dir10").find("textarea[name='title']").val(title);

           $(this).find("p[class='hint_section']").each(function(){
             var hint = $(this).text();
             $("#dir10").find("input[name='hint']").val(hint);
           });
       }if(dir=="11"){ //图文描述
          // 是否必答 - 回显
            var mustFlag = false;
            $(this).parent().find("span[name='must']").each(function(){
               var text = $(this).text();
               if(text=="*"){
                 mustFlag = true;
               }
            });
            if(mustFlag){
              $("#dir11").find("input[type='checkbox'][name='must']").each(function (){
                $(this).prop("checked",true);
              });
            }else{
              $("#dir11").find("input[type='checkbox'][name='must']").each(function (){
                $(this).prop("checked",false);
              });
            };
           // 标题和提示文字-回显
           var title = $(this).parent().find("span[class='title']").text();
           $("#dir11").find("textarea[name='title']").val(title);

           $(this).find("p[class='hint_section']").each(function(){
             var hint = $(this).text();
             $("#dir11").find("input[name='hint']").val(hint);
           });
       }if(dir=="12"){ //分割线
           // 标题和提示文字-回显
           var title = $(this).parent().find("span[class='title']").text();
           $("#dir12").find("textarea[name='title']").val(title);

           $(this).find("p[class='hint_section']").each(function(){
             var hint = $(this).text();
             $("#dir12").find("textarea[name='hint']").val(hint);
           });

           // 标题对齐方式 - 回显
          $(this).parent().find("span[class='title']").css("display","block");
          var titalignment = $(this).parent().find("span[class='title']").css("text-align");
          if(titalignment == "left"){
            $("#dir12").find("input[name='titalignment'][value='左对齐']").prop("checked",true);
          }if(titalignment == "center"){
            $("#dir12").find("input[name='titalignment'][value='居中对齐']").prop("checked",true);
          }if(titalignment == "right"){
            $("#dir12").find("input[name='titalignment'][value='右对齐']").prop("checked",true);
          };

         // 描述对齐方式 - 回显
          var alignment = $(this).find(".hint_section").css("text-align");
          if(alignment == "left"){
            $("#dir12").find("input[name='alignment'][value='左对齐']").prop("checked",true);
          }if(alignment == "center"){
            $("#dir12").find("input[name='alignment'][value='居中对齐']").prop("checked",true);
          }if(alignment == "right"){
            $("#dir12").find("input[name='alignment'][value='右对齐']").prop("checked",true);
          };
      };
    });

    $('.invitee_b_tit span').each(function(){
    	 if("题目设置"==$(this).text()){
    		 $(this).click();
    	 }
    });
});






/************************************1.问卷设置*************************************/
// 键盘事件 -- 标题
$('#tit_text1').keyup(function(event){
  var txt = $(this).val();
  $('.form_title h2').html(txt);
});
// 键盘事件 -- 描述
$('#tit_text2').keyup(function(event){
  var txt = $(this).val();
  $('.form_title div').html(txt);
});

// 允许范围
$(".form_range_p .input_top").on('change',function(){
   var id = $(this).attr("id");
   if($(this).prop("checked") == true){
	   $(this).parent().parent().siblings('.form_range').show();
	   if(id=="isBackgroundShow"){
		      var backgroundPicUrl = $("#backgroundPicUrl").val();
		      if(backgroundPicUrl!=null && backgroundPicUrl!=""){
		          $(".formBuilder_example_form").attr("style","background: url(/upload/quesPaper/"+backgroundPicUrl+") no-repeat;background-size: cover;");
		      }
	   }if(id=="isBannerShow"){
	      var bannerPicUrl = $("#bannerPicUrl").val();
	      if(bannerPicUrl!=null && bannerPicUrl!=""){
          $("#form_title_bg").attr("src","/upload/quesPaper/"+bannerPicUrl);
          $("#form_title_bg").show();
        }
      }
    }else{
      $(this).parent().parent().siblings('.form_range').hide();
      if(id=="isBackgroundShow"){
    	  var quesPaperTemplateId
          $(".formBuilder_example_form").css({"background":""});
          var quesPaperTemplateName = $("#quesPaperTemplateId").val().split("_")[1];
          showTempStyle(quesPaperTemplateName);
      }
      if(id=="isBannerShow"){
    	  $("#form_title_bg").hide();
      }
    }
});

/************************************3.外观设置***************************************/
// 标题 描述 - 显示隐藏
$('input[name="header"]').on('click',function(){
	  var inputValue = $(this).val();
	  if(inputValue == '标题描述显示'){
	   $('.form_title').css('display','block');
	  }else if(inputValue == '标题描述隐藏'){
	   $('.form_title').css('display','none');
	  }
});

// 更换模板
$(".found_list select").on('change',function(){
   var templateValue = $(this).val();
   if(templateValue.indexOf('模板一')>-1){
	    $('.template_bgcolor').css('background','url(/new_edition/jsp/ques/images/template1.jpg) no-repeat');
	    $('.formBuilder_example_form').css('background-color','#fff');
	    $('.form_title').css('border-bottom-color','#fff');
	    $('.utility .next_page_btn').css('background-color','#fff');
   } else  if(templateValue.indexOf('模板二')>-1){
	    $('.template_bgcolor').css('background','url(/new_edition/jsp/ques/images/template2.jpg) no-repeat center');
	    $('.formBuilder_example_form').css('background-color','#395A80');
	    $('.form_title').css('border-bottom-color','#6699CC');
	    $('.utility .next_page_btn').css('background-color','#6699CC');
   }else if(templateValue.indexOf('模板三')>-1){
	    $('.template_bgcolor').css('background','url(/new_edition/jsp/ques/images/template3.jpg) no-repeat center');
	    $('.formBuilder_example_form').css('background-color','#FFDAD3');
	    $('.form_title').css('border-bottom-color','#FFDAD3');
	    $('.utility .next_page_btn').css('background-color','#FFDAD3');
   }else if(templateValue.indexOf('模板四')>-1){
	    $('.template_bgcolor').css('background','url(/new_edition/jsp/ques/images/template4.jpg) no-repeat center');
	    $('.formBuilder_example_form').css('background-color','#76c48a');
	    $('.form_title').css('border-bottom-color','#76c48a');
	    $('.utility .next_page_btn').css('background-color','#76c48a');
   };
});

// 更换字体大小
$(".fontSize_change").on('change',function(){
   var fontSize = $(this).val();
   if(fontSize == '16'){
    $('.formBuilder_example_form .form_title h2').css('font-size','20px');
    $('.formBuilder_example_form .form_title div,.form_component').css('font-size','16px');
   } else  if(fontSize == '14'){
    $('.formBuilder_example_form .form_title h2').css('font-size','18px');
    $('.formBuilder_example_form .form_title div,.form_component').css('font-size','14px');
   }else if(fontSize == '12'){
    $('.formBuilder_example_form .form_title h2').css('font-size','16px');
    $('.formBuilder_example_form .form_title div,.form_component').css('font-size','12px');
   };
});

/*******************************2.题目设置****************************************/
// 是否必填--函数
function setMust(obj){
   var checked = $(obj).prop("checked");
   $(".form_component").find("li[class$='clicked']").each(function (){
       if(checked==true){
         $(this).html("<span name='must' style='color:red'>*</span>"+ $(this).html());
       }else{
         $(this).find("span[name='must'][style='color:red']").remove();
       };
   });
};
function setTitle(obj){
  var val = $(obj).val();
  $(".form_component").find("li[class$='clicked']").find("span[class='title']").html(val);
};
function setHint(obj){
  var val = $(obj).val();
  $(".form_component").find("li[class$='clicked']").find("p[class='hint_section']").html(val);
};

//字数限制-函数
function wordLimit(obj){
  var checked = $(obj).prop("checked");
  if(checked){
    $(obj).parent().parent().find("input[name='wordLimit2']").val("");
    $(obj).parent().parent().find("input[name='wordLimit2']").removeAttr("disabled");
    $(".form_component").find("li[class$='clicked']").find("input[type='text']").attr("maxlength","0");
  }else{
    $(".form_component").find("li[class$='clicked']").find("input[type='text']").removeAttr("maxlength");
    $(obj).parent().parent().find("input[name='wordLimit2']").val("");
    $(obj).parent().parent().find("input[name='wordLimit2']").attr("disabled","disabled");
  }
};
function wordLimit2(obj){
  var val = $(obj).val();
  $(".form_component").find("li[class$='clicked']").find("input[type='text']").attr("maxlength",val);
};

function getTime(){
   var time = new Date().getTime();
   return time;
};

 // 单行文本尺寸大小--函数
function inputSize(element){
    var inputSize = $(element).val();
    if(inputSize == "2"){
       $(".form_component").find("li[class$='clicked']").find("input[type='text']").removeClass('small large').addClass('medium');
    }else if(inputSize == "1"){
       $(".form_component").find("li[class$='clicked']").find("input[type='text']").removeClass('medium large').addClass('small');
    }else if(inputSize == "3"){
       $(".form_component").find("li[class$='clicked']").find("input[type='text']").removeClass('medium small').addClass('large');
    };
};
//多行文本尺寸大小--函数
function selectSize(element){
    var selectSize = $(element).val();
    console.log(selectSize)
    if(selectSize == "2"){
       $('.clicked .cl_multiple').removeClass('select_large select_small').addClass('select_medium');
    }if(selectSize == "1"){
       $('.clicked .cl_multiple').removeClass('select_medium select_large').addClass('select_small');
    }if(selectSize == "3"){
       $('.clicked .cl_multiple').removeClass('select_medium select_small').addClass('select_large');
    };
};

//横排 竖排--函数
function editSort(obj){
    $(obj).addClass('editlayout_current').siblings().removeClass('editlayout_current');
    var text = $(obj).text();
    if(text=="竖排"){
       $(".form_component").find("li[class$='clicked']").find("li[class^='radio_img_list']").attr('class','radio_img_list');
    }else if(text=="横排"){
       $(".form_component").find("li[class$='clicked']").find("li[class^='radio_img_list']").attr('class','radio_img_list f_left');
    };
};
// 横排 竖排 -- 调用
$(document).on('click','#dir3 .edit_sort span',function(){
  editSort(this);
});
$(document).on('click','#dir4 .edit_sort span',function(){
  editSort(this);
});
$(document).on('click','#dir5 .edit_sort span',function(){
    editSort(this);
});
$(document).on('click','#dir6 .edit_sort span',function(){
    editSort(this);
});

/*******多选*******/
//多选--至少项
function checkbox_Must1(obj){
     var checked = $(obj).prop("checked");
     $(".form_component").find("li[class$='clicked']").each(function (){
         if(checked==true){
           $(this).html("<span class='check_must1' style='display:none;'></span>"+ $(this).html());
         }else{
           $(this).find("span[class='check_must1']").remove();
         };
     });
};
// 多选--至少项值
function checkbox_wordLimit1(obj){
  var val = $(obj).val();
  $(".form_component").find("li[class$='clicked']").find("span[class='check_must1']").html(val);
};

// 多选--至多项
function checkbox_Must2(obj){
     var checked = $(obj).prop("checked");
     $(".form_component").find("li[class$='clicked']").each(function (){
         if(checked==true){
           $(this).html("<span class='check_must2' style='display:none;' ></span>"+ $(this).html());
         }else{
           $(this).find("span[class='check_must2']").remove();
         };
     });
};
// 多选--至多项-值
function checkbox_wordLimit2(obj){
  var val = $(obj).val();
  $(".form_component").find("li[class$='clicked']").find("span[class='check_must2']").html(val);
};


/********************选项设置**********************/
/****单选选项设置*****/
// 单选选中
function setSelClick(obj){
     var checkedArr =new Array();
     var i = 0;
     $(obj).parent().parent().find("input[type='radio']").each(function(){
         checked = $(this).prop("checked");
         checkedArr[i] = checked;
         i++;
     });
     $(".form_component").find("li[class$='clicked']").find("div[name='paper']").find("ul[class^='radio_img_ul']").each(function(){
          var cnt = 0;
          $(this).find("input[type='radio']").each(function(){
                 $(this).attr("checked",checkedArr[cnt] );
                 cnt++;
           });
      });
}
// 单选描述
function setSelValue(obj){
   var html = $(obj).val();
   var count = 0;
   var size = 0;
   $(obj).parent().parent().find("textarea").each(function(){
      count ++;
      var val = $(this).val();
      if(val==html){
        $(this).text(html);
        size = count;
      }
   });
    $(".form_component").find("li[class$='clicked']").find("div[name='paper']").find("ul[class^='radio_img_ul']").each(function(){
      var cnt = 0;
      $(this).find("label[class='optionValue']").each(function(){
           cnt++;
           if(cnt==size){
             $(this).html(html);
             return ;
           }
       });
      cnt = 0;
      $(this).find("input[type='radio']").each(function(){
       cnt++;
       if(cnt==size){
         $(this).val(html);
         return ;
       }
      });
    });
}
//单选添加
function addOption(obj){
     // 右边的
      var time = new Date().getTime();
      var html1 = "<li class='editradio_item' linenum='0'>"
        + "  <input onclick='setSelClick(this);' class='editstatus' type='radio' name='radio_com1'>"
        +"   <textarea onkeyup='setSelValue(this);' class='edittext textarea input_textarea' dir='"+time+"'>新增选项</textarea>" //右边添加dir
        +"   <p class='addButton' onclick='addOption(this);'></p>"
        +"   <p class='removeButton' onclick='deleteSelOption(this);'>";
      $('.module_edit_box').find("div[class^='module_reset']").each(function(){
         var style = $(this).attr("style");
     });
     var type="";
     $('.module_edit_box').find("div[class^='module_reset']").each(function(){
       var style = $(this).attr("style");
       if(undefined == style || style=="" || style.indexOf("block")>-1){
         $(obj).parent().after(html1);
         type = $(this).find("div[class^='found_list']").find("span[class$='editlayout_current']").text();
       }
      });
    var clazz = "";
    if(type=="横排"){
      clazz = "radio_img_list f_left";
    }else{
      clazz = "radio_img_list";
    }

    var date = new Date().getTime();
    var html2 = "";
    $(obj).parent().parent().each(function(){
      $(this).find("textarea").each(function(){
         var val = $(this).val();
         var textdir = $(this).attr('dir'); ////label中dir
         var checked = $(this).parent().find("input[type='radio']").prop("checked");
         var inputHtml = "";
         if(checked==true){
           inputHtml = "<input type='radio' class='check_radio' checked='checked' name='"+date+"' value='"+val+"' disabled='true'>";
         }else{
           inputHtml = "<input type='radio' class='check_radio' name='"+date+"' value='"+val+"' disabled='true'>";
         }
         html2 = html2 + " <li class='"+clazz+"'>"
              + inputHtml
              +"<label class='optionValue' dir='"+textdir+"'>"+val+"</label>" //label添加dir
              +"</li>"
      });
    });
    $(".form_component").find("li[class$='clicked']").find("div[name='paper']").find("ul[class^='radio_img_ul']").html(html2);
  };
  // 单选选项删除
  function deleteSelOption(obj){
    var name = $(obj).parent().find("textarea[class^='edittext']").attr("dir"); //右边dir
    var count = 0;
    $(".form_component").find("li[class$='clicked']").find("div[name='paper']").find("ul[class^='radio_img_ul']").find("li[class^='radio_img_list']").each(function(){
       count++;
    });
    if(count==1){
      alert("不允许删除最后一个选项");
      return ;
    }
    var flag = false;
    $(".form_component").find("li[class$='clicked']").find("div[name='paper']").find("ul[class^='radio_img_ul']").find("li[class^='radio_img_list']").find("label[class='optionValue']").each(function(){
         if(flag){
           return;
         }
         var labelName  =$(this).attr("dir"); //左边dir
         if(labelName==name){
           $(this).parent().remove();
           flag = true;
         }
    });
    flag = false;
    $('.module_edit_box').find("div[class^='module_reset']").each(function(){
       var style = $(this).attr("style");
       if(undefined == style || style=="" || style.indexOf("block")>-1){
         $(this).find("ul[class='editradio_list']").find("li[class='editradio_item']").find("textarea[class^='edittext ']").each(function (){
                if(flag){
               return;
              }
              var text = $(this).attr("dir"); //右边
              if(name==text){
                $(this).parent().remove();
                flag = true;
              };
           });
       };
     });
  };
/*********多选选项设置*******/
// 多选选中
function check_setSelClick(obj){
   var checkedArr =new Array();
   var i = 0;
   $(obj).parent().parent().find("input[type='checkbox']").each(function(){
       checked = $(this).prop("checked");
       checkedArr[i] = checked;
       i++;
   });

   $(".form_component").find("li[class$='clicked']").find("div[name='paper']").find("ul[class^='radio_img_ul']").each(function(){
        var cnt = 0;
        $(this).find("input[type='checkbox']").each(function(){
               $(this).attr("checked",checkedArr[cnt] );
               cnt++;
         });
    });
};
// 多选描述
function check_setSelValue(obj){
   var html = $(obj).val();
   var count = 0;
   var size = 0;
   $(obj).parent().parent().find("textarea").each(function(){
      count ++;
      var val = $(this).val();
      if(val==html){
        $(this).text(html);
        size = count;
      }
   });
    $(".form_component").find("li[class$='clicked']").find("div[name='paper']").find("ul[class^='radio_img_ul']").each(function(){
      var cnt = 0;
      $(this).find("label[class='optionValue']").each(function(){
           cnt++;
           if(cnt==size){
             $(this).html(html);
             return ;
           }
       });
      cnt = 0;
      $(this).find("input[type='checkbox']").each(function(){
       cnt++;
       if(cnt==size){
         $(this).val(html);
         return ;
       }
      });
    });
}

//多选选项添加
function check_addOption(obj){
    // 右边的
    var time = new Date().getTime();
    var html1 = "<li class='editradio_item' linenum='0'>"
      + "  <input class='editstatus' type='checkbox' name='radio_com1' onclick='check_setSelClick(this);' >"
      +"   <textarea class='edittext textarea input_textarea' onkeyup='check_setSelValue(this);' dir='"+time+"'>新增选项</textarea>"
      +"   <p class='addButton' onclick='check_addOption(this);'></p>"
      +"   <p class='removeButton' onclick='check_deleteSelOption(this);'>";
    $('.module_edit_box').find("div[class^='module_reset']").each(function(){
       var style = $(this).attr("style");
   });
   var type="";
   $('.module_edit_box').find("div[class^='module_reset']").each(function(){
     var style = $(this).attr("style");
     if(undefined == style || style=="" || style.indexOf("block")>-1){
       $(obj).parent().after(html1);
       type = $(this).find("div[class^='found_list']").find("span[class$='editlayout_current']").text();
     }
    });
  var clazz = "";
  if(type=="横排"){
    clazz = "radio_img_list f_left";
  }else{
    clazz = "radio_img_list";
  }

  var date = new Date().getTime();
  var html2 = "";
  $(obj).parent().parent().each(function(){
    $(this).find("textarea").each(function(){
       var val = $(this).val();
       var textdir = $(this).attr('dir'); ////label中dir
       var checked = $(this).parent().find("input[type='checkbox']").prop("checked");
       var inputHtml = "";
       if(checked==true){
         inputHtml = "<input type='checkbox' class='check_radio' checked='checked' name='"+date+"' value='"+val+"' disabled='true'>";
       }else{
         inputHtml = "<input type='checkbox' class='check_radio' name='"+date+"' value='"+val+"' disabled='true'>";
       }
       html2 = html2 + " <li class='"+clazz+"'>"
            + inputHtml
            +"<label class='optionValue' dir='"+textdir+"'>"+val+"</label>"
            +"</li>"
    });
  });
  $(".form_component").find("li[class$='clicked']").find("div[name='paper']").find("ul[class^='radio_img_ul']").html(html2);
};
// 多选选项删除
function check_deleteSelOption(obj){
  var name = $(obj).parent().find("textarea[class^='edittext']").attr("dir");
  var count = 0;
  $(".form_component").find("li[class$='clicked']").find("div[name='paper']").find("ul[class^='radio_img_ul']").find("li[class^='radio_img_list']").each(function(){
     count++;
  });
  if(count==1){
    alert("不允许删除最后一个选项");
    return ;
  }
  var flag = false;
  $(".form_component").find("li[class$='clicked']").find("div[name='paper']").find("ul[class^='radio_img_ul']").find("li[class^='radio_img_list']").find("label[class='optionValue']").each(function(){
       if(flag){
         return;
       }
         var labelName  =$(this).attr("dir");
       if(labelName==name){
         $(this).parent().remove();
         flag = true;
       }
  });
  flag = false;
  $('.module_edit_box').find("div[class^='module_reset']").each(function(){
     var style = $(this).attr("style");
     if(undefined == style || style=="" || style.indexOf("block")>-1){
       $(this).find("ul[class='editcheckbox_list']").find("li[class='editradio_item']").find("textarea[class^='edittext ']").each(function (){
              if(flag){
             return;
            }
            var text = $(this).attr("dir");
            if(name==text){
              $(this).parent().remove();
              flag = true;
            }
         });
     };
   });
};

/*********图片单选选项设置***********/
//图片单选选项
function radioImg_setSelClick(obj){
    var checkedArr =new Array();
    var i = 0;
    $(obj).parent().parent().find("input[type='radio']").each(function(){
        checked = $(this).prop("checked");
        checkedArr[i] = checked;
        i++;
    });
    $(".form_component").find("li[class$='clicked']").find("div[name='paper']").find("ul[class^='radio_img_ul']").each(function(){
         var cnt = 0;
         $(this).find("input[type='radio']").each(function(){
                $(this).attr("checked",checkedArr[cnt] );
                cnt++;
          });
     });
};
//图片单选描述
function radioImg_setSelValue(obj){
  var html = $(obj).val();
  var count = 0;
  var size = 0;
  $(obj).parent().parent().parent().parent().parent().find("textarea").each(function(){
     count ++;
     var val = $(this).val();
     if(val==html){
       $(this).text(html);
       size = count;
     }
  });
   $(".form_component").find("li[class$='clicked']").find("div[name='paper']").find("ul[class^='radio_img_ul']").each(function(){
     var cnt = 0;
     $(this).find("p label[class='optionValue']").each(function(){
          cnt++;
          if(cnt==size){
            $(this).html(html);
            return ;
          }
      });
     cnt = 0;
     $(this).find("p input[type='radio']").each(function(){
      cnt++;
      if(cnt==size){
        $(this).val(html);
        return ;
      }
     });
   });
};

//图片单选选项添加
function radioImg_addOption(obj){
     // 右边
     var time = new Date().getTime();
     var html1 = "<li class='editradio_item' linenum='0'>"
       + "<input onclick='radioImg_setSelClick(this);' class='editstatus f_left' type='radio' name='radio_com1'>"
       + "<div  class='reset_radioimg'  style='width:auto;'>"
       + "<div class='hint'>"
       + "<input class='text file_text' id='file"+time+"' accept='image/*' name='file' type='file'>"
       + "<button class='button btn_margin' type='button' onclick='clickQuesFile(this);'>上传</button>"
       + "<input type='hidden' value='' id='fileName"+time+"'>"
       + "<div name='pic' style='display:hidden;width:120px;height:120px;border: 1px solid #ccc;'>"
       + "<div></div>"
       + "</div>"
       + "<div class='pictextcontect'>"
       + "<textarea dir='"+time+"' onkeyup='radioImg_setSelValue(this);' class='edittext textarea input_textarea'>新增选项</textarea>"
       + "<p class='addButton' onclick='radioImg_addOption(this);'></p>"
       + "<p class='removeButton' onclick='radioImg_deleteSelOption(this);'>";
       + "</div>";
       + "</div>";
       + "</div>";
     $('.module_edit_box').find("div[class^='module_reset']").each(function(){
           var style = $(this).attr("style");
    });
    var type="";
    $('.module_edit_box').find("div[class^='module_reset']").each(function(){
      var style = $(this).attr("style");
      if(undefined == style || style=="" || style.indexOf("block")>-1){
          $(obj).parent().parent().parent().parent().after(html1);
          type = $(this).find("div[class^='found_list']").find("span[class$='editlayout_current']").text();
      }
     });
    var clazz = "";
    if(type=="横排"){
     clazz = "radio_img_list f_left";
    }else{
     clazz = "radio_img_list";
    }

    var date = new Date().getTime();
    var html2 = "";
    $(obj).parent().parent().parent().parent().parent().each(function(){
        $(this).find("textarea").each(function(){
          var val = $(this).val();
          var textDir = $(this).attr("dir");
          var checked = $(this).parent().parent().parent().parent().find("input[type='radio']").prop("checked");
          var inputHtml = "";
          if(checked==true){
             inputHtml = "<input type='radio' class='check_radio' checked='checked' name='"+date+"' value='"+val+"' disabled='true'>";
          }else{
             inputHtml = "<input type='radio' class='check_radio' name='"+date+"' value='"+val+"' disabled='true'>";
          }
          var pic = $(this).parent().parent().find("div[name='pic']").attr("style");
                var picDiv = "";
                if(pic!=undefined && pic!=null ){
                    picDiv = "<div class='form_radio_img'  style=\""+pic+"\"></div>"
                }else{
                    picDiv = "<div class='form_radio_img' style='display:hidden;width:120px;height:120px;'></div>";
                }
          html2 = html2 + " <li class='"+clazz+"'>"
               + picDiv
               +"<p>"
               + inputHtml
               +"<label dir='"+textDir+"' class='optionValue'>"+val+"</label>"
               +"</p>"
               +"</li>"
     });
  });
  $(".form_component").find("li[class$='clicked']").find("div[name='paper']").find("ul[class^='radio_img_ul']").html(html2)


    //图片单选一行高度设置
    var m = 0;
    $("li[class$='clicked']").find(".radio_img_ul li").each(function(i,element){
        if((i+1) % 4 == 1){
            m += 1;
        };
        $(this).attr("data-m",m);

        //var numArr = [];
        //function liHeight(obj){
        //    var liHeight = numArr.push(obj.height());
        //    liHeight = Math.max.apply(null,numArr);
        //    obj.height(liHeight);
        //
        //    console.log(numArr);
        //    console.log("最大值"+liHeight);
        //




        var numArr = [];
        $("li[class$='clicked']").find(".radio_img_ul").find("li[data-m=1]").each(function(i,element){
            var liHeight = numArr.push($(this).height());
            console.log(numArr);
            liHeight = Math.max.apply(null,numArr);

            $(this).height(liHeight);

            console.log("最大值1"+liHeight);
        });
        numArr = [];
        $("li[class$='clicked']").find(".radio_img_ul").find("li[data-m=2]").each(function(i,element){
            var liHeight = numArr.push($(this).height());
            console.log(numArr);
            liHeight = Math.max.apply(null,numArr); //获取数组中的最大值
            $(this).height(liHeight);

            console.log(liHeight);
        });
        //console.log("最大值"+liHeight);

        //$("li[class$='clicked']").find(".radio_img_ul").find("li[data-m=2]").height(liHeight);
        //numArr = [];
        //$("li[class$='clicked']").find(".radio_img_ul").find("li[data-m=3]").each(function(i,element){
        //    var liHeight = numArr.push($(this).height());
        //    liHeight = Math.max.apply(null,numArr);
        //    $(this).height(liHeight);
        //
        //    console.log(numArr);
        //    console.log("最大值"+liHeight);
        //});




    });



}

//图片单选选项删除
function radioImg_deleteSelOption(obj){
  var name = $(obj).parent().find("textarea[class^='edittext']").attr("dir");
  var count = 0;
  $(".form_component").find("li[class$='clicked']").find("div[name='paper']").find("ul[class^='radio_img_ul']").find("li[class^='radio_img_list']").each(function(){
    count++;
  });
  if(count==1){
   alert("不允许删除最后一个选项");
   return ;
  }
  var flag = false;
  $(".form_component").find("li[class$='clicked']").find("div[name='paper']").find("ul[class^='radio_img_ul']").find("li[class^='radio_img_list']").find("label[class='optionValue']").each(function(){
      if(flag){
        return;
      }
        var labelName  =$(this).attr("dir");
      if(labelName==name){
        $(this).parent().parent().remove();
        flag = true;
      }
  });
  flag = false;
  $('.module_edit_box').find("div[class^='module_reset']").each(function(){
    var style = $(this).attr("style");
    if(undefined == style || style=="" || style.indexOf("block")>-1){
      $(this).find("ul[class='editcheckbox_list']").find("li[class='editradio_item']").find("textarea[class^='edittext ']").each(function (){
             if(flag){
            return;
           }
           var text = $(this).attr("dir");
           if(name==text){
             $(this).parent().parent().parent().parent().remove();
             flag = true;
           }
        });
    }
  })
}































/*********图片多选选项设置***********/
//图片多选选项
function checkImg_setSelClick(obj){
    var checkedArr =new Array();
    var i = 0;
    $(obj).parent().parent().find("input[type='checkbox']").each(function(){
        checked = $(this).prop("checked");
        checkedArr[i] = checked;
        i++;
    });
    $(".form_component").find("li[class$='clicked']").find("div[name='paper']").find("ul[class^='radio_img_ul']").each(function(){
         var cnt = 0;
         $(this).find("input[type='checkbox']").each(function(){
                $(this).attr("checked",checkedArr[cnt] );
                cnt++;
          });
     });
  };
  //图片多选描述
  function checkImg_setSelValue(obj){
  var html = $(obj).val();
  var count = 0;
  var size = 0;
  $(obj).parent().parent().parent().parent().parent().find("textarea").each(function(){
       count ++;
       var val = $(this).val();
       if(val==html){
         $(this).text(html);
         size = count;
       }
  });
   $(".form_component").find("li[class$='clicked']").find("div[name='paper']").find("ul[class^='radio_img_ul']").each(function(){
       var cnt = 0;
       $(this).find("p label[class='optionValue']").each(function(){
            cnt++;
            if(cnt==size){
              $(this).html(html);
              return ;
            }
        });
       cnt = 0;
       $(this).find("p input[type='checkbox']").each(function(){
        cnt++;
        if(cnt==size){
          $(this).val(html);
          return ;
        }
       });
   })
}


//图片多选选项添加
function checkImg_addOption(obj){
     // 左边
     var time = new Date().getTime();
     var html1 = "<li class='editradio_item' linenum='0'>"
       + "<input onclick='checkImg_setSelClick(this);' class='editstatus f_left' type='checkbox' name='radio_com1'>"
       + "<div  class='reset_radioimg'  style='width:auto;'>"
       + "<div class='hint'>"
       + "<input class='text file_text' id='file"+time+"' accept='image/*' name='file' type='file'>"
       + "<button class='button btn_margin' type='button' onclick='clickQuesFile(this);'>上传</button>"
       + "<input type='hidden' value='' id='fileName"+time+"'>"
       + "<div name='pic' style='display:hidden;width:120px;height:120px'>"
       + "<div></div>"
       + "</div>"
       + "<div class='pictextcontect'>"
       + "<textarea  dir='"+time+"'  onkeyup='checkImg_setSelValue(this);' class='edittext textarea input_textarea'>新增选项</textarea>"
       + "<p class='addButton' onclick='checkImg_addOption(this);'></p>"
       + "<p class='removeButton' onclick='checkImg_deleteSelOption(this);'>";
       + "</div>";
       + "</div>";
       + "</div>";
     $('.module_edit_box').find("div[class^='module_reset']").each(function(){
          var style = $(this).attr("style");
    });
    var type="";
    $('.module_edit_box').find("div[class^='module_reset']").each(function(){
      var style = $(this).attr("style");
      if(undefined == style || style=="" || style.indexOf("block")>-1){
          $(obj).parent().parent().parent().parent().after(html1);
          type = $(this).find("div[class^='found_list']").find("span[class$='editlayout_current']").text();
      }
     });
    var clazz = "";
    if(type=="横排"){
       clazz = "radio_img_list f_left";
    }else{
       clazz = "radio_img_list";
    }

    var date = new Date().getTime();
    var html2 = "";
    $(obj).parent().parent().parent().parent().parent().each(function(){
     $(this).find("textarea").each(function(){
        var val = $(this).val();
        var textDir = $(this).attr("dir");
        var checked = $(this).parent().parent().parent().parent().find("input[type='checkbox']").prop("checked");
        var inputHtml = "";
        if(checked==true){
          inputHtml = "<input type='checkbox' class='check_radio' checked='checked' name='"+date+"' value='"+val+"' disabled='true'>";
        }else{
          inputHtml = "<input type='checkbox' class='check_radio' name='"+date+"' value='"+val+"' disabled='true'>";
        }
        var pic = $(this).parent().parent().find("div[name='pic']").attr("style");
            var picDiv = "";
            if(pic!=undefined && pic!=null ){
                picDiv = "<div class='form_radio_img'  style=\""+pic+"\"></div>"
            }else{
                picDiv = "<div class='form_radio_img' style='display:hidden;width:120px;height:120px;'></div>";
            }
        html2 = html2 + " <li class='"+clazz+"'>"
             + picDiv
             +"<p>"
             + inputHtml
             +"<label dir='"+textDir+"'  class='optionValue'>"+val+"</label>"
             +"</p>"
             +"</li>"
     });
    });
    $(".form_component").find("li[class$='clicked']").find("div[name='paper']").find("ul[class^='radio_img_ul']").html(html2);
}

//图片多选选项删除
function checkImg_deleteSelOption(obj){
  var name = $(obj).parent().find("textarea[class^='edittext']").attr("dir");
  var count = 0;
  $(".form_component").find("li[class$='clicked']").find("div[name='paper']").find("ul[class^='radio_img_ul']").find("li[class^='radio_img_list']").each(function(){
      count++;
  });
  if(count==1){
   alert("不允许删除最后一个选项");
   return ;
  }
  var flag = false;
  $(".form_component").find("li[class$='clicked']").find("div[name='paper']").find("ul[class^='radio_img_ul']").find("li[class^='radio_img_list']").find("label[class='optionValue']").each(function(){
      if(flag){
        return;
      }
      var labelName  =$(this).attr("dir");
      if(labelName==name){
        $(this).parent().parent().remove();
        flag = true;
      }
  });
  flag = false;
  $('.module_edit_box').find("div[class^='module_reset']").each(function(){
    var style = $(this).attr("style");
    if(undefined == style || style=="" || style.indexOf("block")>-1){
      $(this).find("ul[class='editcheckbox_list']").find("li[class='editradio_item']").find("textarea[class^='edittext ']").each(function (){
             if(flag){
            return;
           }
             var text = $(this).attr("dir");
           if(name==text){
             $(this).parent().parent().parent().parent().remove();
             flag = true;
           }
        });
    };
  });
}



/*********下拉选项设置***********/
// 下拉选中
function select_setSelClick(obj){
     var checkedArr =new Array();
     var i = 0;
     $(obj).parent().parent().find("input[type='radio']").each(function(){
         checked = $(this).prop("checked");
         checkedArr[i] = checked;
         i++;
     });
     $(".form_component").find("li[class$='clicked']").find("div[name='paper']").find("select[class^='commonInput ']").each(function(){
          var cnt = 0;
          $(this).find("option").each(function(){
                 $(this).attr("selected",checkedArr[cnt] );
                 cnt++;
           });
      });
}
// 下拉描述
function select_setSelValue(obj){
   var html = $(obj).val();
   var count = 0;
   var size = 0;
   $(obj).parent().parent().find("textarea").each(function(){
      count ++;
      var val = $(this).val();
      if(val==html){
        $(this).text(html);
        size = count;
      }
   });
    $(".form_component").find("li[class$='clicked']").find("div[name='paper']").find("select[class^='commonInput ']").each(function(){
      var cnt = 0;
      $(this).find("option").each(function(){
           cnt++;
           if(cnt==size){
             $(this).html(html);
             return ;
           }
       });
      cnt = 0;
      $(this).find("input[type='radio']").each(function(){
       cnt++;
       if(cnt==size){
         $(this).val(html);
         return ;
       }
      });
    });
}

// 下拉选项添加
function select_addOption(obj){
     // 右边的
      var time = new Date().getTime();
      var html1 = "<li class='editradio_item' linenum='0'>"
        +"<input onclick='select_setSelClick(this);' class='editstatus' type='radio' name='radio_com1'>"
        +"<textarea onkeyup='select_setSelValue(this);' class='edittext textarea input_textarea' dir='"+time+"'>新增选项</textarea>" //右边添加dir
        +"<p class='addButton' onclick='select_addOption(this);'></p>"
        +"<p class='removeButton' onclick='select_deleteSelOption(this);'>";
      $('.module_edit_box').find("div[class^='module_reset']").each(function(){
         var style = $(this).attr("style");
     });
     var type="";
     $('.module_edit_box').find("div[class^='module_reset']").each(function(){
       var style = $(this).attr("style");
       if(undefined == style || style=="" || style.indexOf("block")>-1){
         $(obj).parent().after(html1);
         type = $(this).find("div[class^='found_list']").find("span[class$='editlayout_current']").text();
       }
      });
    var clazz = "";
    if(type=="横排"){
      clazz = "radio_img_list f_left";
    }else{
      clazz = "radio_img_list";
    }

    var date = new Date().getTime();
    var html2 = "";
    $(obj).parent().parent().each(function(){
      $(this).find("textarea").each(function(){
         var val = $(this).val();
         var textdir = $(this).attr('dir'); ////label中dir
         var checked = $(this).parent().find("input[type='radio']").prop("checked");
         var inputHtml = "";
         if(checked==true){
           inputHtml = "<option dir='"+textdir+"' selected='selected'>"+val+"</option>";
         }else{
           inputHtml = "<option dir='"+textdir+"'>"+val+"</option>";
         }
         html2 = html2
               + inputHtml
      });
    });
    $(".form_component").find("li[class$='clicked']").find("div[name='paper']").find("select[class^='commonInput']").html(html2);
}

  //下拉选项删除
function select_deleteSelOption(obj){
    var name = $(obj).parent().find("textarea[class^='edittext']").attr("dir"); //右边dir
    var count = 0;
    $(".form_component").find("li[class$='clicked']").find("div[name='paper']").find("select[class^='commonInput']").find("option").each(function(){
       count++;
    });
    if(count==1){
      alert("不允许删除最后一个选项");
      return ;
    }
    var flag = false;
    $(".form_component").find("li[class$='clicked']").find("div[name='paper']").find("select[class^='commonInput']").find("option").each(function(){
       if(flag){
         return;
       }
       var labelName  =$(this).attr("dir"); //左边dir
       if(labelName==name){
         $(this).remove();
         flag = true;
       }
    });
    flag = false;
    $('.module_edit_box').find("div[class^='module_reset']").each(function(){
       var style = $(this).attr("style");
       if(undefined == style || style=="" || style.indexOf("block")>-1){
         $(this).find("ul[class='editradio_list']").find("li[class='editradio_item']").find("textarea[class^='edittext ']").each(function (){
            if(flag){
             return;
            }
            var text = $(this).attr("dir"); //右边
            if(name==text){
              $(this).parent().remove();
              flag = true;
            }
         });
       }
     })
};


/***********分割线*********/
// 分割线对齐方式 - 函数
function alignment(obj1,obj2){
    var inputValue = $(obj1).val();
    if(inputValue == '左对齐'){
     $(obj2).css('text-align','left');
    }if(inputValue == '居中对齐'){
     $(obj2).css('text-align','center');
    }else if(inputValue == '右对齐'){
     $(obj2).css('text-align','right');
    };
};
// 标题对齐 - 调用
$("#dir12").find('input[name="titalignment"]').on('click',function(){
   alignment(this,'.clicked .title');
});
// 描述对齐 - 调用
$("#dir12").find('input[name="alignment"]').on('click',function(){
   alignment(this,'.clicked .hint_section');
});




  /***提示弹窗***/
  $('.pop_btn').on('click',function(){
    $('.popup').show();
  });
  $('.pop_xx').on('click',function(){
    $('.popup').hide();
  });




/*设置tap栏*/
$('.invitee_b_tit span').on('click',function(){
    $(this).addClass('current').siblings().removeClass('current');
    var num=$(this).index();
    $('.initee_box .invitee_b_con').eq(num).show().siblings().hide();
});

/*显示高度*/

function Heightfn(){
    var editingHeight = $(window).height() - 190 + "px";
    var initeeHeight = $(window).height() - 230 + "px";
    var navHeight = $(window).height() - 50 + "px";


    $('.editing_content .formBuilder_edit').css('height',editingHeight);
    $('.formBuilder_example_form').css('height',editingHeight);
    $('#initee_box ').css('height',initeeHeight);
    $('.invitee_b_con').css('height',initeeHeight);
    $('.c_left_nav').css('height',navHeight);
};
Heightfn();


$(window).resize(function(){
    /*显示高度*/
    Heightfn();
});





