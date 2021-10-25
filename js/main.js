

$('.list-1__label').click(function() {
			if ($(this).hasClass('active')) {
				$(this).removeClass('active');
			}else{
			$(this).addClass('active');
		}
		});

		$('.list-2__label').click(function() {
			if ($(this).hasClass('active')) {
				$(this).removeClass('active');
			}else{
			$(this).addClass('active');
		}
		});

		$('.list-3__label').click(function() {
			if ($(this).hasClass('active')) {
				$(this).removeClass('active');
			}else{
			$(this).addClass('active');
		}
		});

//profile-menu

$('.profile__avatar').on('click', function() {
	$('.profile-menu').fadeToggle();
});

$(document).click(function (e) {

	let profileMenu = $('.profile-menu');
	let profileAvatar = $('.profile__avatar');

	if ( ! profileAvatar.is(e.target) && profileAvatar.has(e.target).length === 0 &&
		  ! profileMenu.is(e.target) && profileMenu.has(e.target).length === 0 
		) {
		profileMenu.fadeOut();
	}
});


// add-menu

$('.add-button__label').on('click', function() {
	$('.add-menu').fadeToggle();
});

$(document).click(function (e) {

	let btn = $('.add-button__label');
	let popupMenu = $('.add-menu');

	if ( ! btn.is(e.target) && btn.has(e.target).length === 0 &&
		  ! popupMenu.is(e.target) && popupMenu.has(e.target).length === 0 
		) {
		popupMenu.fadeOut();
	}
});

// Delete franchisee

$('.add-settings__span-btn').click(function() {
			if ($(this).hasClass('active-add-categori')) {
				$(this).removeClass('active-add-categori');
			}else{
			$(this).addClass('active-add-categori');
		}
		});

$('.add-settings__span-btn-2').click(function() {
			if ($(this).hasClass('active-add-categori')) {
				$(this).removeClass('active-add-categori');
			}else{
			$(this).addClass('active-add-categori');
		}
		});

$('.add-settings__span-btn-3').click(function() {
			if ($(this).hasClass('active-add-categori')) {
				$(this).removeClass('active-add-categori');
			}else{
			$(this).addClass('active-add-categori');
		}
		});

$('.add-settings__span-btn-4').click(function() {
			if ($(this).hasClass('active-add-categori')) {
				$(this).removeClass('active-add-categori');
			}else{
			$(this).addClass('active-add-categori');
		}
		});

// Edit product category 

$('.string-span').click(function() {
			if ($(this).hasClass('active-edit-categori')) {
				$(this).removeClass('active-edit-categori');
			}else{
			$(this).addClass('active-edit-categori');
		}
		});

// Select

let select = function () {
	let selectHeader = document.querySelectorAll('.select__header');
	let selectItem = document.querySelectorAll('.select__item');

	

	selectHeader.forEach( item => {
		item.addEventListener('click', selectToggle);

	});

	selectItem.forEach( item => {
		item.addEventListener('click', selectChoose);

	});

	$(document).click(function (e) {
		let selectBlock = $('.select')
			let btn = $('.select__header');
			let popupMenu = $('.select__body');

		if ( ! btn.is(e.target) && btn.has(e.target).length === 0 &&
			  ! popupMenu.is(e.target) && popupMenu.has(e.target).length === 0 
			) {
			selectBlock.removeClass('is-active');
		}
	});

	function selectToggle() {
		this.parentElement.classList.toggle('is-active');
	}

	function selectChoose () {
		let text = this.innerText,
			 select = this.closest('.select'),	
			 currentText = select.querySelector('.select__current');
		currentText.innerText = text; 
		select.classList.remove('is-active');		
	}


};

select();


// Inkass popup

$('.inkass-btn').on('click', function() {
	$('.inkass-input').addClass('inkass-active');
});


$('.inkass-btn-close').on('click', function() {
	$('.inkass-input').removeClass('inkass-active');
});


// Order-menu 



$('#order-label-1').on('click', function() {
	$(this).addClass('order-menu-active');
});
$(document).click(function (e) {
	let btn = $('#order-label-1');
	let popupMenu = $('.order-sub-menu');

	if ( ! btn.is(e.target) && btn.has(e.target).length === 0 &&
		  ! popupMenu.is(e.target) && popupMenu.has(e.target).length === 0 
		) {
		btn.removeClass('order-menu-active');
	}
});



$('#order-label-2').on('click', function() {
	$(this).addClass('order-menu-active');
});

$(document).click(function (e) {

	let btn = $('#order-label-2');
	let popupMenu = $('.order-sub-menu');

	if ( ! btn.is(e.target) && btn.has(e.target).length === 0 &&
		  ! popupMenu.is(e.target) && popupMenu.has(e.target).length === 0 
		) {
		btn.removeClass('order-menu-active');
	}
});



$('#order-label-3').on('click', function() {
	$(this).addClass('order-menu-active');
});
$(document).click(function (e) {
	let btn = $('#order-label-3');
	let popupMenu = $('.order-sub-menu');
	if ( ! btn.is(e.target) && btn.has(e.target).length === 0 &&
		  ! popupMenu.is(e.target) && popupMenu.has(e.target).length === 0 
		) {
		btn.removeClass('order-menu-active');
	}
});



$('#order-label-4').on('click', function() {
	$(this).addClass('order-menu-active');
});
$(document).click(function (e) {
	let btn = $('#order-label-4');
	let popupMenu = $('.order-sub-menu');
	if ( ! btn.is(e.target) && btn.has(e.target).length === 0 &&
		  ! popupMenu.is(e.target) && popupMenu.has(e.target).length === 0 
		) {
		btn.removeClass('order-menu-active');
	}
});



// Delete franchisee

$('.delete-franchisee').on('click', function() {
	$('.popup-delete-franch').addClass('active-popup');
});


$('.btn-delete-cancel').on('click', function() {
	$('.popup-delete-franch').removeClass('active-popup');
});

