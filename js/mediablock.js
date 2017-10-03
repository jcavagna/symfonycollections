var $collectionHolder;

var $addMediaLink = $('<a href="#" class="add_media_link btn btn-primary"><span class="glyphicon glyphicon-plus"></span> Add Media</a>');

var $newLinkLi = $('<li></li>').append($addMediaLink);

function addMediaForm($collectionHolder, $newLinkLi) {
    var prototype = $collectionHolder.data('prototype');

    var index = $collectionHolder.data('index');

    var newForm = prototype.replace(/__name__/g, index);

    $collectionHolder.data('index', index + 1);

    var $newFormLi = $('<li class="mediaItem well"></li>').append(newForm);

    $newLinkLi.before($newFormLi);

    addMediaFormDoneLink($newFormLi);

    addMediaFormDeleteLink($newFormLi);

    $('li > div > div.field-categories > select').select2();

    $('li > div > div.field-tags input').select2({tags:['none']});

};

function addMediaFormDeleteLink($mediaFormLi) {
    var $removeFormA = $('<a href="#" class="btn btn-danger deleBtn">Delete</a>');
    $mediaFormLi.append($removeFormA);

    $removeFormA.on('click', function(e) {
        e.preventDefault();

        $mediaFormLi.remove();
    });
};

function addMediaFormDoneLink($mediaFormLi) {
    var $removeFormB = $('<a href="#" class="btn btn-success donBtn">Done</a>');
    $mediaFormLi.append($removeFormB);

    $removeFormB.on('click', function(e) {
        e.preventDefault();

        $mediaFormLi.hide();
        $namval = $(this).parent().find('.field-name input').val();
        $identify = $(this).parent().children(":first").attr("id");
        addMediaLineItem($namval, $identify);


    });
};

function addMediaLineItem($name, $identify) {


    var $makeline = $('<div class="col-sm-12 col-md-12"><div class="thumbnail col-md-12"><div class="col-md-2 caption"><h3><span class="glyphicon glyphicon-file"></span></h3></div><div class="col-md-10 caption"><h3 class="col-md-9">'+$name+'</h3><p class="col-md-3"><a href="#" class="btn btn-default btn-sm editzBtn" role="button" mediaValue="'+$identify+'">Edit</a><a href="#" class="btn btn-default btn-sm delzBtn" role="button" mediaValue="'+$identify+'">Delete</a> </p></div></div></div>');

    $('form > .field-media .newrow').append($makeline);

    $('.editzBtn').on('click', function(e){
        $superId = $(this).attr('mediaValue');
        e.preventDefault();
        
        $(this).parent().parent().parent().parent().remove();
        $("#"+$superId).parent().show();

    });

    $('.delzBtn').on('click', function(e){
        $superId = $(this).attr('mediaValue');
        e.preventDefault();

        $(this).parent().parent().parent().parent().remove();
        $('#'+$superId).parent().find('.deleBtn').click();
    });

}

jQuery(document).ready(function() {
    $collectionHolder = $('ul.media');

    $collectionHolder.append($newLinkLi);

    $collectionHolder.data('index', $collectionHolder.find(':input').length);

    $addMediaLink.on('click', function(e) {
        e.preventDefault();

        addMediaForm($collectionHolder, $newLinkLi);

    });

    $collectionHolder.find('.mediaItem').each(function() {
        addMediaFormDeleteLink($(this));
    });

    $('.mediaItem').hide();

    $('.editBtn').on('click', function(e){
        $superId = $(this).attr('mediaValue');
        e.preventDefault();

        $('#med'+$superId).show();
    });

    $('.doneBtn').on('click', function(e){
        $megaId = $(this).attr('itemValue');
        e.preventDefault();

        $('#med'+$megaId).hide();
    });

    $('.deleBtn').on('click', function(e){
        $ultiId = $(this).prev().attr('itemValue');
        console.log($ultiId);
        e.preventDefault();

        $("a[mediavalue='"+ $ultiId+"']").parent().parent().parent().parent().remove();
    });

    $('.delBtn').on('click', function(e){
        $superId = $(this).attr('mediaValue');
        e.preventDefault();

        $('#med'+$superId+' > .deleBtn').click();
        $(this).parent().parent().parent().parent().remove();
    });
});














