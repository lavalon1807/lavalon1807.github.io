'use strict';
(function () {
	//Переключаем страницы лендинг-блог-магазин
	const ALL_CONTENTS = 3;
	const massContents = ['header', 'content', 'footer'];
	const massLayout = ['layout--landing', 'layout--blog', 'layout--shop'];
	const layout = document.querySelector('.layout');
	const maketsSelect = document.querySelectorAll('.grid-select__btn');
	const miniMaketsSelect = document.querySelectorAll('.grid-select__radio');
	const content = document.querySelector('.content');
	const contents = document.querySelectorAll('.content');
	const footer = document.querySelector('.footer')
	
	const delClassOnMakets = (element, firstClassElement, secondClassElement) => {
		element.removeAttribute('class');
		element.setAttribute('class', firstClassElement);
		element.classList.add(secondClassElement);
	};
	
	miniMaketsSelect[0].checked = 'true';
			
	maketsSelect.forEach((item, index) => {
		item.onclick = () => {
			const contents = document.querySelectorAll('.content');
			delClassOnMakets(layout, 'layout', massLayout[index]);
			giveWrapperAfterDel();
			window.deletElement.delContents(contents);

			for (let i = 0; i <= ALL_CONTENTS; i++) {
				if (index == i) {
					for (let r = 0; r <= index; r++) {
						addCont(r);
					}
				}
			}
		}
	})
  //Добавляем контент
	const addCont = (index) => {
		layout.insertBefore(contents[index], footer);
	}
	//Тут мы очищаем все контенты и добавляем только один
	window.deletElement.delContents(contents);
	addCont(0);

	for (let i = 0; i < window.massivs.masContents.length; i++) {
		window.massivs.masContents[i].classList.add('additionalClass')
	}

	const giveWrapperAfterDel = () => {
		const wrapper = document.querySelectorAll('.wrapper');
		const additionalClass = document.querySelectorAll('.additionalClass');

		for (let i = 0; i < wrapper.length; i++) {
			//удаляем все имеющиеся элементы
			wrapper[i].remove();
		}

		const placeholder = document.querySelectorAll('.placeholder');
		additionalClass.forEach((item, index) => {
			for (let i = 0; i <= massContents.length; i++) {
				if (item.classList.contains(massContents[i])) {
					item.classList.add(massContents[i] + '--empty');
					placeholder[index].style.display = 'block';	
				}
			}
		})
	}
})();